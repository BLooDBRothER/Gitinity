nav_toggler = document.querySelector('.nav-button');
nav_toggler.addEventListener("click", function() {
    nav_toggler.classList.toggle('toggle_nav_button');
    nav_toggler.style.transition = '0.5s ease';
    document.querySelector('.side_nav').classList.toggle('toggle_nav');
    document.querySelector('.document-section').classList.toggle('document_section_toggle');
});

// copy js

const copyIC = document.querySelectorAll(".code-div svg");

function copy(e){
    let copyStr = document.querySelector(`code[data-name="${this.dataset.name}"]`).innerText;
    navigator.clipboard.writeText(copyStr);
    let msg = document.querySelector(".copy-msg");
    msg.firstElementChild.innerText = copyStr;
    msg.syle.top = `${document.querySelector("body").scrollHeight}px`;
    msg.style.right = "0";
    setTimeout((e) => {
        msg.style.right = "-100%";
    }, 2000);
}

copyIC.forEach(ic => {
    ic.addEventListener("click", copy);
})