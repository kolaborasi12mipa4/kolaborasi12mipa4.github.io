
    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Kalau hidup matikan dulu dark mode nya!");
     localStorage.setItem('alerted','yes');
    }

const tl = gsap.timeline({default: { ease: "power1.out"} });

tl.to(".txt", {y: "0%", duration: 2, staagger: 0.25});

// hamburger effect
let button = document.querySelector(".hamburger");
let list = document.querySelector('.list'); 
let nav = document.querySelector('nav');
button.addEventListener('click', function () {
    button.classList.toggle('button-active');
    list.classList.toggle('list-active');
    nav.classList.toggle('nav-active');
})