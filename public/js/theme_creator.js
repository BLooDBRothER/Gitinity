const root = document.documentElement;
const body = document.body;
const themeCreator = document.querySelector(".theme-creator");
const textarea = document.querySelector(".theme-creator textarea");
const jsonButton = document.querySelector(".theme-creator .json");
const copyButton = document.querySelector(".theme-creator .copy");
const preview = document.querySelector(".header__preview");
const otherColorFormatButtons = document.querySelectorAll("label button");
const colorInputs = document.querySelectorAll("label input");

function togglePreview() {
  colorInputs.forEach((input) => {
    root.style.setProperty(`--${input.id}`, input.value);
  });
  themeCreator.classList.toggle("toggle-bg");
  document.querySelectorAll(".theme-creator *").forEach((child) => {
    child.classList.toggle("none");
  });
  body.classList.toggle("hide-overflow");
}

function createJSON() {
  let value = {};
  colorInputs.forEach((i) => {
    value[`--${i.id}`] = i.value;
  });
  return JSON.stringify(value);
}

otherColorFormatButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let input = document.querySelector(`#${this.dataset.id}`);
    if (input.type === "color") {
      this.textContent = "Select Color";
      input.type = "text";
      input.value = "";
      input.focus();
    } else {
      this.textContent = "Add gradient/rgba()";
      input.type = "color";
    }
  });
});

colorInputs.forEach((input) => {
  input.addEventListener("input", function () {
    this.value = this.value.replace(/;|background|:/gi, "").trim();
  });
});

jsonButton.addEventListener("click", function () {
  textarea.value = "";
  textarea.value = createJSON();
});

copyButton.addEventListener("click", function () {
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
  this.textContent = "Copied To Clipboard!";
  setTimeout(function () {
    copyButton.textContent = "Copy";
    textarea.value = "";
  }, 3000);
});

preview.addEventListener("click", togglePreview);
// themeCreator.style.height = `${document.body.offsetHeight}px`;
