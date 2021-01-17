'use strict';

//  ------------------------    MODAL   -----------------------------

// így kell multiplét selectorozni (querySelectorAll, valamint felsorolva a class-ok ,-vel és whitespace-el elválasztva)
const modalEventListener = document.querySelectorAll('.footer__links--privacy, .footer__links--terms, .footer__links--faq,.button__close');

for (let i = 0; i < modalEventListener.length; i++) {
    modalEventListener[i].addEventListener('click', toggleModal);       // eseményfigyelőt teszünk rájuk, kattintásra ('click') és meghívjuk a toggleModalt
}

let modal = document.querySelector(".modal");       // a modált is querySelectorozzuk

function toggleModal() {
    modal.classList.toggle("show-modal");       // a show-modal osztályban van az átállítás
}

function windowOnClick(event) {
    if (event.target === modal) {               // ha az ablakból kikattintunk akkor becsukja
        toggleModal();
    }
}
window.addEventListener("click", windowOnClick);

//  ------------------------ -----------------------------

//  ---------------------   MENU TOGGLER    -------------------------------

const toggleMenu = document.querySelector('.navbar__button');
const detailedMenu = document.querySelector('.navbar__list');
const detailedMenuContainer = document.querySelector('.navbar__container');
const detailedMenuItemList = document.querySelector('.navbar__item');
const detailedMenuItems = document.querySelectorAll('.navbar__item--link');

toggleMenu.addEventListener('click', (event) => { toggleMenuFunction() });


function toggleMenuFunction() {
    if (toggleMenu.style.display === "none") {
        toggleMenu.style.display = "flex";
        detailedMenu.style.display = "none";
    }
    else {
        toggleMenu.style.display = "none";
        detailedMenu.style.display = "flex";
        detailedMenu.style.flexDirection = "row";
        detailedMenu.style.justifyContent = "flex-end";
        detailedMenu.style.listStyle = "none";
        detailedMenuItemList.style.textAlign = "end";
        detailedMenuItemList.style.alignContent = "center";
        detailedMenuContainer.style.paddingTop = "0.75rem";
        for (let i = 0; i < detailedMenuItems.length; i++) {
            detailedMenuItems[i].style.textDecoration = "none";
            detailedMenuItems[i].style.padding = "0.5rem";
            detailedMenuItems[i].style.color = "#bbbbbb";
        }

    }
}





