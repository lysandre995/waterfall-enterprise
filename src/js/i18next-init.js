document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "en";

    i18next
        .init({
            lng: defaultLang,
            fallbackLng: "en",
            debug: false,
            keySeparator: ".",
            resources: {
                en: { translation: {} },
                it: { translation: {} }
            }
        })
        .then(() => {
            return Promise.all([
                fetch(`/lang/en.json`)
                    .then(res => res.json())
                    .then(d => i18next.addResourceBundle("en", "translation", d, true, true)),
                fetch(`/lang/it.json`)
                    .then(res => res.json())
                    .then(d => i18next.addResourceBundle("it", "translation", d, true, true))
            ]);
        })
        .then(() => {
            updateContent();
        });

    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = i18next.t(key);
        });
    }

    const savedLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "en";
    i18next.changeLanguage(savedLang).then(updateContent);

    document.addEventListener("click", e => {
        const langBtn = e.target.closest("[data-lang-select]");
        if (langBtn) {
            const lang = langBtn.getAttribute("data-lang-select");
            i18next.changeLanguage(lang).then(() => {
                localStorage.setItem("lang", lang);
                updateContent();
            });
        }
    });

    if (typeof barba !== "undefined") {
        barba.hooks.afterEnter(() => {
            const savedLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "en";
            i18next.changeLanguage(savedLang).then(updateContent);
        });
    }
});
