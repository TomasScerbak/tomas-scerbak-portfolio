// Navigation toggle
const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigation--bar');
const circle = document.querySelector('.fa-times-circle');
const aboutMe = document.querySelector('.about-me');

hamburger.addEventListener('click', () => {
    navigationBar.classList.toggle('hidden-left');
    aboutMe.style.top = '45%'
    hamburger.classList.add('is-hidden');
    circle.classList.remove('is-hidden');
});

circle.addEventListener('click', () => {
    hamburger.classList.remove('is-hidden');
    aboutMe.style.top = '10%'
    circle.classList.add('is-hidden');
    navigationBar.classList.toggle('hidden-left');
});
