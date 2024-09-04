let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar'); 

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Header hide on scroll
let lastScrollTop = 0;
let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop)
