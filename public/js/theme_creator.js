const themeCreator = document.querySelector(".theme-creator");

themeCreator.style.height = `${document.body.offsetHeight}px`;

function toggle() {
  themeCreator.classList.toggle("toggle-bg");
  document.querySelectorAll(".theme-creator *").forEach((child) => {
    console.log(child);
    child.classList.toggle("none")
  });
}
document.querySelector(".header__preview").addEventListener("click", toggle);
