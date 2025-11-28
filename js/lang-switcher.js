document.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", () => {

        // remover estado activo
        document.querySelectorAll(".lang-option").forEach(b => b.classList.remove("active"));

        // agregar estado activo
        btn.classList.add("active");

        // idioma elegido
        const lang = btn.dataset.lang;

        // guardar (opcional)
        localStorage.setItem("lang", lang);

        // aquí llamas tu función para traducir o cargar idioma
        // loadLanguage(lang);
        console.log("Idioma cambiado a:", lang);
    });
});

// restaurar idioma
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    const btn = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
    if (btn) btn.click(); // simular click
}