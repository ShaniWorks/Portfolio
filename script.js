// Toggle the menu icon and navigation bar on click
let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menubar.onclick = function() {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Optional: Close the navbar when a link is clicked (useful for mobile view)
let navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(function(link) {
    link.onclick = function() {
        menubar.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

console.log("JavaScript is loaded and working correctly.");
