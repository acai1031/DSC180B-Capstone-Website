// scroll down change navbar from transparent to light
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('introNavbar');
    var logo = document.getElementById('hdsi-logo');
    
    if (window.scrollY > document.querySelector('.full-page-image').offsetHeight) {
        navbar.classList.remove('bg-transparent', 'navbar-light-text');
        navbar.classList.add('bg-light', 'with-box-shadow');
        logo.src = "images/hdsi-blue-gold.png"; 
    } else {
        navbar.classList.remove('bg-light', 'with-box-shadow');
        navbar.classList.add('bg-transparent', 'navbar-light-text');
        logo.src = "images/hdsi-white.png"; 
    }
});