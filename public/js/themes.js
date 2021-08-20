const theme_btn = document.querySelector(".head__theme");
const themes = document.querySelector(".themes");
let selected = "", preveiousSelected = "";

let path = "../../themes.json"

async function fetchTheme(){
    let response = await fetch("../themes.json");
    let result = await response.json();
    console.log(result.theme);
}
fetchTheme();

theme_btn.addEventListener("click", (e) => {
    themes.classList.toggle("none");
});

themes.addEventListener("click", (e) => {
    e.target.style.background = "var(--secondary-color)";
    (preveiousSelected && e.target!==preveiousSelected)   ? (preveiousSelected.style.background = "var(--body-bg)") : "";
    preveiousSelected = e.target;
});

let template = `<div class="themes__btn" data-name="default">Default</div>`;