nav_toggler = document.querySelector('.nav-toggle-button');
nav_toggler.addEventListener("click", function() {
    nav_toggler.style.transform = 'rotate(180deg)';
    nav_toggler.style.transition = '0.5s ease';
    document.querySelector('.side_nav').style.left = '-250px';
    document.querySelector('.document-section').style.paddingLeft = 'unset';
});

side_title_toggler = document.querySelector('.side-title');
side_title_toggler.addEventListener('click', () => {
    if(side_title_toggler.classList.contains('toggle_side_title')){
        side_title_toggler.classList.remove('toggle_side_title');
    }
    else{
        side_title_toggler.classList.add('toggle_side_title');
    }
})