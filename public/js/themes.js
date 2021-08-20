const theme_btn = document.querySelector(".head__theme");
const themes = document.querySelector(".themes");
let selected = "", preveiousSelected = "";

theme_btn.addEventListener("click", (e) => {
    themes.classList.toggle("none");
});

themes.addEventListener("click", (e) => {
    e.target.style.background = "var(--secondary-color)";
    (preveiousSelected && e.target!==preveiousSelected)   ? (preveiousSelected.style.background = "var(--body-bg)") : "";
    preveiousSelected = e.target;
});

let template = `<div class="themes__btn" data-name="default">Default</div>`;