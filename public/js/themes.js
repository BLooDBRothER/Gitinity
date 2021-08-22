const theme_btn = document.querySelector(".head__theme");
const themes_cnt = document.querySelector(".themes");
let selected = "",
  preveiousSelected = "";
let themes_data;
let path = "../themes.json";
let currTheme;

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
  let response = await fetch("../themes.json");
  let result = await response.json();
  themes_data = result.theme;
  themes_cnt.innerHTML = themes_data
    .map((theme) => {
      return `<div class="themes__btn" data-name="${theme.name.toLowerCase()}">${
        theme.name
      }<img src="./Assets/Icons/check.svg" data-name="${theme.name.toLowerCase()}" alt="selected icon" class="selected__ic none"></div>`;
    })
    .join("");
  updateTheme(currTheme);
  updateThemeHover();
  let currSelected = document.querySelector(`.themes__btn[data-name='${currTheme}']`);
  document.querySelector(`img[data-name='${currTheme}']`).classList.remove("none");
  currSelected.style.background = "var(--secondary-color)"
  preveiousSelected = currSelected;
}

function updateTheme(name) {
  themes_data.forEach((theme) => {
    if (theme.name !== name) return;
    attribute.forEach((head) => {
      document.documentElement.style.setProperty(`--${head}`, theme[head]);
    });
  });  
}

theme_btn.addEventListener("click", (e) => {
  e.preventDefault();
  themes_cnt.classList.toggle("none");
});

themes_cnt.addEventListener("click", (e) => {
  if (e.target === themes_cnt) return;

  localStorage.setItem("theme", e.target.dataset.name);
  currTheme = e.target.dataset.name;
  e.target.style.background = "var(--secondary-color)";
  document
    .querySelector(`img[data-name="${e.target.dataset.name}"]`)
    .classList.remove("none");

  if (preveiousSelected && e.target !== preveiousSelected) {
    preveiousSelected.style.background = "var(--body-bg)";
    document
      .querySelector(`img[data-name="${preveiousSelected.dataset.name}"]`)
      .classList.add("none");
  }
  updateTheme(e.target.dataset.name);
  preveiousSelected = e.target;
});

themes_cnt.addEventListener("mouseleave", (e)=>{
  updateTheme(currTheme);
});

function updateThemeHover(){
  let themes_btn = document.querySelectorAll(".themes__btn");
  themes_btn.forEach(each => {
    each.addEventListener("mouseenter", function(e){
      updateTheme(this.dataset.name);
    });
  });
}

window.onload = function () {
  localStorage.getItem("theme")
    ? (currTheme = localStorage.getItem("theme"))
    : ((currTheme = "default"), localStorage.setItem("theme", "default"));
  fetchTheme();
};
