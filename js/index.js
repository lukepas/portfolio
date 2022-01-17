const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    nav.style.display = !nav.style.display ? "block" : "";
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.style.display = !nav.style.display ? "block" : "";
        document.body.classList.remove('nav-open');
    })
})
