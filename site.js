/* ---------- Mobile menu ---------- */
const burger = document.querySelector(".burger");
const navMenu = document.querySelector("#nav-menu");

function setMenu(open) {
    navMenu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    burger.querySelector("span").innerHTML = open ? "&times;" : "&#9776;";
}

burger.addEventListener("click", () => setMenu(!navMenu.classList.contains("is-open")));
navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* ---------- Header background after scrolling ---------- */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Highlight the current section in the menu ---------- */
const navItems = [...navMenu.querySelectorAll("li")];
const sections = navItems
    .map(li => document.querySelector(li.querySelector("a").getAttribute("href")))
    .filter(Boolean);

const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navItems.forEach(li =>
            li.classList.toggle("active", li.querySelector("a").getAttribute("href") === "#" + entry.target.id));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

// clear highlight when back on the home section
new IntersectionObserver(([e]) => {
    if (e.isIntersecting) navItems.forEach(li => li.classList.remove("active"));
}, { rootMargin: "-45% 0px -50% 0px" }).observe(document.querySelector("#home"));

/* ---------- Carousels ---------- */
const pad = n => String(n).padStart(2, "0");

document.querySelectorAll(".carousel").forEach(root => {
    const track = root.querySelector(".carousel-track");
    const slides = [...track.children];
    const images = slides.map(s => s.querySelector("img"));
    let index = 0;

    root.tabIndex = 0;

    // controls
    const controls = document.createElement("div");
    controls.className = "carousel-controls";
    controls.innerHTML = `
        <button class="arrow prev" type="button" aria-label="Previous photo"></button>
        <span class="counter" aria-live="polite"></span>
        <button class="arrow next" type="button" aria-label="Next photo"></button>`;
    const dots = document.createElement("div");
    dots.className = "carousel-dots";
    slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `Photo ${i + 1}`);
        b.addEventListener("click", () => go(i));
        dots.appendChild(b);
    });
    root.append(dots, controls);

    const counter = controls.querySelector(".counter");

    function go(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        counter.textContent = `${pad(index + 1)} / ${pad(slides.length)}`;
        [...dots.children].forEach((d, k) => d.classList.toggle("active", k === index));
        slides.forEach((s, k) => s.setAttribute("aria-hidden", k !== index));
        // preload neighbours so the next photo is ready
        [index - 1, index + 1].forEach(k => {
            const img = images[(k + slides.length) % slides.length];
            if (img) img.loading = "eager";
        });
    }

    controls.querySelector(".prev").addEventListener("click", () => go(index - 1));
    controls.querySelector(".next").addEventListener("click", () => go(index + 1));

    root.addEventListener("keydown", e => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
    });

    // swipe
    let startX = null, moved = false;
    track.addEventListener("pointerdown", e => { startX = e.clientX; moved = false; });
    track.addEventListener("pointerup", e => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 40) { moved = true; go(index + (dx < 0 ? 1 : -1)); }
        startX = null;
    });
    track.addEventListener("dragstart", e => e.preventDefault());

    // open fullscreen viewer
    track.addEventListener("click", () => { if (!moved) openLightbox(images, index, go); });

    go(0);
});

/* ---------- Lightbox ---------- */
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
const lbCounter = lb.querySelector(".lb-counter");
let lbImages = [], lbIndex = 0, lbSync = null;

function showLb(i) {
    lbIndex = (i + lbImages.length) % lbImages.length;
    lbImg.src = lbImages[lbIndex].currentSrc || lbImages[lbIndex].src;
    lbImg.alt = lbImages[lbIndex].alt;
    lbCounter.textContent = `${pad(lbIndex + 1)} / ${pad(lbImages.length)}`;
    if (lbSync) lbSync(lbIndex);   // keep the carousel in step
}

function openLightbox(images, i, sync) {
    lbImages = images; lbSync = sync;
    showLb(i);
    lb.showModal();
}

lb.querySelector(".lb-prev").addEventListener("click", () => showLb(lbIndex - 1));
lb.querySelector(".lb-next").addEventListener("click", () => showLb(lbIndex + 1));
lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") showLb(lbIndex - 1);
    if (e.key === "ArrowRight") showLb(lbIndex + 1);
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
