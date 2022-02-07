// Navigation toggle
const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigation--bar');
const circle = document.querySelector('.fa-times-circle');

hamburger.addEventListener('click', () => {
    hamburger.classList.add('is-hidden');
    circle.classList.remove('is-hidden');
    navigationBar.classList.toggle('hidden-left');
});

circle.addEventListener('click', () => {
    hamburger.classList.remove('is-hidden');
    circle.classList.add('is-hidden');
    navigationBar.classList.toggle('hidden-left');
});
