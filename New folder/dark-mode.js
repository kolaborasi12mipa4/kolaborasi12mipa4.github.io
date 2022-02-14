let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');

let lesson = document.querySelector('.lesson');
let navbar = document.querySelector('.navbar');
let a = document.querySelector('#index');
let subMenu = document.querySelector('.sub-menu');

moon.addEventListener('click', function () {
    document.body.style.backgroundColor = 'rgb(36, 35, 35)';
    navbar.style.backgroundColor = 'rgb(36, 35, 35)'
    a.style.color = '#94be31'
    navbar.style.fill = '#FFD369'
    navbar.style.borderBottom = '1px solid rgba(255,255,255,.2)'
    lesson.classList.replace('sun-active','moon-active');
    moon.classList.toggle('slide-moon')
    sun.classList.toggle('slide-sun')
    subMenu.style.border = '1px solid rgba(255,255,255,.2)'
})

sun.addEventListener('click', function () {
    document.body.style.backgroundColor = "#fff";
    navbar.style.backgroundColor = '#fff';
    a.style.color = 'rgb(36, 35, 35)';
    navbar.style.fill = '#2D4263';
    lesson.classList.replace('moon-active', 'sun-active');
    navbar.style.borderBottom = '1px solid rgba(0,0,0,.1)';
    sun.classList.toggle('slide-sun');
    moon.classList.toggle('slide-moon');
    subMenu.style.border = '1px solid rgba(0,0,0,.1)'
})