let lastScrollTop = 0;
let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px"; // Hide the header when scrolling down
    } else {
        header.style.top = "0"; // Show the header when scrolling up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
