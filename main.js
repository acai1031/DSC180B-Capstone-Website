// scroll down change navbar from transparent to light
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('introNavbar');
    if (window.scrollY > document.querySelector('.full-page-image').offsetHeight) {
        navbar.classList.remove('bg-transparent', 'navbar-light-text');
        navbar.classList.add('bg-light', 'with-box-shadow');
    } else {
        navbar.classList.remove('bg-light', 'with-box-shadow');
        navbar.classList.add('bg-transparent', 'navbar-light-text');
    }
});