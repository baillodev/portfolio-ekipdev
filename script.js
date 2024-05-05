const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menuContent = document.querySelector('.menu ul');

burger.addEventListener('click', () => {
    menuContent.style.display = 'flex';
    burger.style.display = 'none';
    close.style.display = 'flex';
});

close.addEventListener('click', () => {
    menuContent.style.display = 'none';
    burger.style.display = 'flex';
    close.style.display = 'none';
});

const enSavoirPlusButton = document.querySelector('#accueil button');
enSavoirPlusButton.addEventListener('click', () => {
    window.location.href = '#a-propos';
});

const meContacterButton = document.querySelector('#a-propos button');
meContacterButton.addEventListener('click', () => {
    window.location.href = '#contact';
});

window.addEventListener('scroll', () => {
    const accueilSection = document.getElementById('accueil').getBoundingClientRect();
    const aProposSection = document.getElementById('a-propos').getBoundingClientRect();
    const contactSection = document.getElementById('contact').getBoundingClientRect();
    const menuItems = document.querySelectorAll('.menu ul li a');

    let currentSection = '';

    if (window.scrollY >= accueilSection.top && window.scrollY < aProposSection.top + 50) {
        currentSection = 'accueil';
    } else if (window.scrollY >= aProposSection.top - 50 && window.scrollY < contactSection.top + 50) {
        currentSection = 'a-propos';
    } else if (window.scrollY >= contactSection.top - 50) {
        currentSection = 'contact';
    }

    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    const currentMenuItem = document.querySelector(`.menu ul li a[href="#${currentSection}"]`);
    if (currentMenuItem) {
        currentMenuItem.classList.add('active');
    }
});


const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = formulaire.querySelector('#nom').value.trim();
    const email = formulaire.querySelector('#email').value.trim();
    const message = formulaire.querySelector('#message').value.trim();

    if (nom === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
    } else {
        alert('Merci de nous avoir contacté :)');
    }
});

