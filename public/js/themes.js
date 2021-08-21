const theme_btn = document.querySelector(".head__theme");
const themes_cnt = document.querySelector(".themes");
let selected = "",
  preveiousSelected = "";
let themes_data;
let path = "../themes.json";

let attribute = [
  "body-bg",
  "primary-color",
  "secondary-color",
  "accent",
  "contrast",
  "glow-sphere",
  "continuous-grid",
  "faded-grid",
  "terminal-bg",
  "terminal-text",
  "terminal-header-border",
  "new-file",
  "gradient",
  "sphere-down-clr",
  "sphere-up1-clr",
  "sphere-up2-clr",
];

async function fetchTheme() {
  let response = await fetch("../../public/themes.json");
  let result = await response.json();
  themes_data = result.theme;
  themes_cnt.innerHTML = themes_data
    .map((theme) => {
      console.log(theme);
      return `<div class="themes__btn" data-name="${theme.name.toLowerCase()}">${
        theme.name
      }</div>`;
    })
    .join("");
}
fetchTheme();

function updateTheme(name) {
  themes_data.forEach((theme) => {
    if (theme.name !== name) return;
    attribute.forEach(head => {
        document.documentElement.style.setProperty(`--${head}`, theme[head]);
    })
  });
}

theme_btn.addEventListener("click", (e) => {
  themes_cnt.classList.toggle("none");
});

themes_cnt.addEventListener("click", (e) => {
  e.target.style.background = "var(--secondary-color)";
  preveiousSelected && e.target !== preveiousSelected
    ? (preveiousSelected.style.background = "var(--body-bg)")
    : "";
  updateTheme(e.target.dataset.name);
  preveiousSelected = e.target;
});

let template = `<div class="themes__btn" data-name="default">Default</div>`;
