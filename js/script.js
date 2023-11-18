let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'top'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});
sr.reveal('.heading', {delay:200, origin:'top'});
sr.reveal('.about-content', {delay:450, origin:'bottom'});
sr.reveal('.about-img', {delay:450, origin:'bottom'});
sr.reveal('.h3', {delay:500, origin:'bottom'});