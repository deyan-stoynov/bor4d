/* =====================================================================
   TRANSLATIONS
   Bulgarian (bg) is the default language and lives in index.html.
   - en: the English text for every data-i18n key on the page.
   - bg: only texts that JavaScript creates (they aren't in the HTML).
   A key missing from "en" shows its Bulgarian text and logs a warning
   in the browser console, so gaps are easy to spot.
   ===================================================================== */
const I18N = {
    bg: {
        "ui.menuOpen": "Отвори менюто",
        "ui.menuClose": "Затвори менюто",
        "ui.prev": "Предишна снимка",
        "ui.next": "Следваща снимка",
        "ui.photo": "Снимка {n}"
    },

    en: {
        // page
        "meta.title": "BOR 4 Design Studio — interior design, Varna",
        "meta.description": "BOR 4 Design by Petra Nacheva — interior and exterior design, 3D visualisation and project supervision in Varna.",

        // interface
        "ui.language": "Language",
        "ui.menuOpen": "Open navigation menu",
        "ui.menuClose": "Close navigation menu",
        "ui.prev": "Previous photo",
        "ui.next": "Next photo",
        "ui.photo": "Photo {n}",
        "lightbox.label": "Photo viewer",
        "lightbox.close": "Close",

        // menu
        "nav.label": "Main navigation",
        "nav.services": "Services",
        "nav.interiors": "Interiors",
        "nav.exteriors": "Exteriors",
        "nav.contact": "Contacts",

        // home
        "home.alt": "Interior visualisation — living room with kitchen island",

        // services
        "services.title": "Services",
        "services.intro": "From the first sketch to the last detail on site — spaces designed around the people who live in them.",
        "services.s1.title": "Interior design",
        "services.s1.text": "Concept, space planning, lighting, materials and furniture selection for homes, offices and hospitality spaces.",
        "services.s2.title": "Exterior design",
        "services.s2.text": "Facades, terraces, entrances and outdoor living areas that continue the character of the interior.",
        "services.s3.title": "3D visualisation",
        "services.s3.text": "Photorealistic renders, so you can see and feel the space before a single wall is built.",
        "services.s4.title": "Supervision",
        "services.s4.text": "Technical drawings, sourcing and on-site coordination with contractors through to completion.",

        // interiors
        "interiors.title": "Interiors",

        "int1.photos": "Private residence photos",
        "int1.alt1": "Private residence — living room",
        "int1.alt2": "Private residence — kitchen",
        "int1.alt3": "Private residence — bedroom",
        "int1.alt4": "Private residence — bathroom",
        "int1.alt5": "Private residence — bathroom",
        "int1.title": "Private residence",
        "int1.meta": "Location · Year · 180 m²",
        "int1.text": "Short description of the project — the client's brief, the main idea and the key materials used. Warm oak, micro-cement walls and soft indirect light.",

        "int2.photos": "Evksinograd Apartment photos",
        "int2.alt1": "Evksinograd Apartment — living room with fireplace",
        "int2.alt2": "Evksinograd Apartment — kitchen with sea view",
        "int2.alt3": "Evksinograd Apartment — kitchen with wine cooler",
        "int2.alt4": "Evksinograd Apartment — corner sofa in the living room",
        "int2.alt5": "Evksinograd Apartment — living room at dusk",
        "int2.alt6": "Evksinograd Apartment — kitchen island",
        "int2.alt7": "Evksinograd Apartment — dining area",
        "int2.alt8": "Evksinograd Apartment — bedroom with desk",
        "int2.alt9": "Evksinograd Apartment — bedroom with sea view",
        "int2.alt10": "Evksinograd Apartment — bathroom",
        "int2.alt11": "Evksinograd Apartment — bedroom and walk-in wardrobe",
        "int2.title": "Evksinograd Apartment",
        "int2.meta": "Apartment · 2020",
        "int2.text": "Interior design for an apartment in a residential building, in a minimalist style. The living room with its fireplace, the kitchen and the dining area form one open space with a view of the sea — warm wood, marble and concealed lighting.",

        "int3.photos": "Home by the Sea photos",
        "int3.alt1": "Home by the Sea — living room",
        "int3.alt2": "Home by the Sea — living and dining area",
        "int3.alt3": "Home by the Sea — fireplace and TV wall",
        "int3.alt4": "Home by the Sea — living room with sea view",
        "int3.alt5": "Home by the Sea — hallway",
        "int3.alt6": "Home by the Sea — hallway wardrobe with round mirror",
        "int3.alt7": "Home by the Sea — bathroom",
        "int3.alt8": "Home by the Sea — bathroom with toilet",
        "int3.alt9": "Home by the Sea — second bathroom",
        "int3.alt10": "Home by the Sea — children's room",
        "int3.alt11": "Home by the Sea — children's room — wardrobe",
        "int3.alt12": "Home by the Sea — second children's room",
        "int3.alt13": "Home by the Sea — second children's room with sea view",
        "int3.alt14": "Home by the Sea — master bedroom",
        "int3.alt15": "Home by the Sea — master bedroom with seating area",
        "int3.alt16": "Home by the Sea — master bedroom with fireplace and sea view",
        "int3.title": "Home by the Sea",
        "int3.meta": "Varna · 2020",
        "int3.text": "Interior design for an apartment in a residential building in Varna, with a living area, a master bedroom, two children's rooms, two bathrooms with toilets and a hallway. A modern style that combines comfort and luxury in harmonious pastel shades, echoing the stunning sea view.",

        "int4.photos": "Adventure Time photos",
        "int4.alt1": "Adventure Time children's room — bed and desk",
        "int4.alt2": "Adventure Time children's room — desk and bed with storage drawer",
        "int4.alt3": "Adventure Time children's room — wardrobes and TV unit",
        "int4.title": "Adventure Time",
        "int4.meta": "Children's room · 2018",
        "int4.text": "Interior design for a children's room. In a room like this, fresh colours and a well-planned furniture layout matter most to us.",

        // exteriors
        "exteriors.title": "Exteriors",

        "ext1.photos": "Mountain house photos",
        "ext1.alt1": "Mountain house — front facade",
        "ext1.alt2": "Mountain house — terrace",
        "ext1.alt3": "Mountain house — entrance",
        "ext1.alt4": "Mountain house — evening view",
        "ext1.title": "Mountain house",
        "ext1.meta": "Location · Year",
        "ext1.text": "Short description of the project — how the building sits in its surroundings, the facade materials and the outdoor spaces.",

        "ext2.photos": "Family house photos",
        "ext2.alt1": "Family house — street view",
        "ext2.alt2": "Family house — garden",
        "ext2.alt3": "Family house — pool terrace",
        "ext2.alt4": "Family house — details",
        "ext2.title": "Family house",
        "ext2.meta": "Location · Year",
        "ext2.text": "Short description of the project — how the building sits in its surroundings, the facade materials and the outdoor spaces.",

        // contacts
        "contact.title": "Contacts",
        "contact.big": "Let's talk about<br />your space.",
        "contact.text": "Tell me a little about your project — the place, the size and what you imagine. I'll get back to you within a couple of days.",
        "contact.button": "Write to me",
        "contact.mailto": "mailto:ptr.nacheva@gmail.com?subject=Project%20inquiry",
        "contact.email": "E-mail",
        "contact.phone": "Phone",
        "contact.studio": "Studio",
        "contact.address": "ul. „Studentska“, Levski,<br />Primorski, 9010 Varna",
        "contact.follow": "Follow",

        // footer
        "footer.top": "Back to top ↑"
    }
};

/* =====================================================================
   ENGINE — no need to edit below this line
   ===================================================================== */
(function () {
    const LANGS = ["bg", "en"];
    const DEFAULT = "bg";
    const STORE = "lang";
    const SELECTOR = "[data-i18n], [data-i18n-attr]";

    const original = new WeakMap();   // element → its Bulgarian text/attributes from the HTML
    let current = DEFAULT;

    const fill = (text, vars) =>
        vars ? text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m)) : text;

    const attrPairs = el =>
        el.dataset.i18nAttr.split(";")
            .map(p => p.split(":").map(s => s.trim()))
            .filter(p => p[0] && p[1]);

    function remember(el) {
        if (!original.has(el)) {
            const o = { attrs: {} };
            if (el.dataset.i18n) o.text = el.innerHTML;
            if (el.dataset.i18nAttr) attrPairs(el).forEach(([a]) => { o.attrs[a] = el.getAttribute(a); });
            original.set(el, o);
        }
        return original.get(el);
    }

    // Text for a key in the current language. htmlValue = the Bulgarian text found in the HTML.
    function lookup(key, htmlValue, vars) {
        if (current !== DEFAULT) {
            const v = I18N[current] && I18N[current][key];
            if (v != null) return fill(v, vars);
            console.warn(`[i18n] missing "${current}" text for key "${key}" — showing Bulgarian`);
        }
        const bg = I18N[DEFAULT][key];
        if (bg != null) return fill(bg, vars);
        return htmlValue != null ? htmlValue : key;
    }

    // Public: text for a key, for scripts (e.g. site.js)
    function t(key, vars) { return lookup(key, null, vars); }

    // Apply the current language to an element and everything inside it
    function apply(root = document) {
        const els = root.querySelectorAll ? [...root.querySelectorAll(SELECTOR)] : [];
        if (root.matches && root.matches(SELECTOR)) els.unshift(root);

        els.forEach(el => {
            const o = remember(el);
            const vars = el.dataset.i18nVars ? JSON.parse(el.dataset.i18nVars) : null;
            if (el.dataset.i18n) el.innerHTML = lookup(el.dataset.i18n, o.text, vars);
            if (el.dataset.i18nAttr) {
                attrPairs(el).forEach(([attr, key]) => el.setAttribute(attr, lookup(key, o.attrs[attr], vars)));
            }
        });
    }

    function setLang(lang, save = true) {
        if (!LANGS.includes(lang)) lang = DEFAULT;
        current = lang;
        document.documentElement.lang = lang;
        apply();

        document.querySelectorAll("[data-lang]").forEach(b =>
            b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

        if (save) { try { localStorage.setItem(STORE, lang); } catch (e) { } }

        // keep the address shareable: …/?lang=en (no parameter for Bulgarian)
        const url = new URL(location.href);
        if (lang === DEFAULT) url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
        history.replaceState(null, "", url);

        document.documentElement.classList.remove("i18n-pending");
        document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang } }));
    }

    // Start-up language: link (?lang=en) → earlier choice → Bulgarian.
    // No automatic browser-language detection: search engines crawl with an English
    // browser and would otherwise index the English text instead of the Bulgarian one.
    function startLang() {
        const q = new URLSearchParams(location.search).get("lang");
        if (LANGS.includes(q)) return q;
        try { const s = localStorage.getItem(STORE); if (LANGS.includes(s)) return s; } catch (e) { }
        return DEFAULT;
    }

    window.i18n = { t, apply, setLang, get lang() { return current; } };

    document.querySelectorAll("[data-lang]").forEach(b =>
        b.addEventListener("click", () => setLang(b.dataset.lang)));

    setLang(startLang(), false);
})();
