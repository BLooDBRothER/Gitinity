const themeCreator = document.querySelector(".theme-creator");
const body = document.body;

themeCreator.style.height = `${document.body.offsetHeight}px`;
function toggle() {
  document.querySelectorAll("input").forEach((i) => {
    let value = i.value;
    value = value.replace(/;|background/gi, "");
    document.documentElement.style.setProperty(`--${i.id}`, value);
  });
  themeCreator.classList.toggle("toggle-bg");
  document.querySelectorAll(".theme-creator *").forEach((child) => {
    child.classList.toggle("none");
  });
  body.classList.toggle("hide-overflow");
}
document.querySelector(".header__preview").addEventListener("click", toggle);

document.querySelectorAll("label button").forEach((button) => {
  button.addEventListener("click", function () {
    let ip = document.querySelector(`#${this.dataset.id}`);
    if (ip.type === "color") {
      this.textContent = "Select Color";
      ip.type = "text";
      ip.value = "";
      ip.focus();
    } else {
      this.textContent = "Add gradient/rgba()";
      ip.type = "color";
    }
  });
});

document.querySelectorAll("input").forEach((i) => {
  i.addEventListener("input", function () {
    this.value = this.value.replace(/;|background|:/gi, "").trim();
  });
});

function createJSON() {
  let value = {};
  document.querySelectorAll("label input").forEach((i) => {
    value[`--${i.id}`] = i.value;
  });
  return JSON.stringify(value);
}

document.querySelector(".json").addEventListener("click", function () {
  textarea = document.querySelector("textarea");
  textarea.value = "";
  textarea.value = createJSON();
});

document.querySelector(".copy").addEventListener("click", function () {
  let copyText = document.querySelector("textarea");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  this.textContent = "Copied To Clipboard!";
  setTimeout(function () {
    document.querySelector(".copy").textContent = "Copy";
  }, 3000);
});
