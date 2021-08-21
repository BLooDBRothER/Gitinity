nav_toggler = document.querySelector('.nav-button');
nav_toggler.addEventListener("click", function() {
    nav_toggler.classList.toggle('toggle_nav_button');
    nav_toggler.style.transition = '0.5s ease';
    document.querySelector('.side_nav').classList.toggle('toggle_nav');
    document.querySelector('.document-section').classList.toggle('document_section_toggle');

});