
const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);


    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 599) {
            menuElem.style.display = 'flex';
        } else {
            menuElem.style.display = 'block';
        }
    });

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display === "block" && window.screen.availWidth < 600) {
            menuElem.style.display = 'none';
        } else if (window.screen.availWidth > 599){
            menuElem.style.display = 'flex';
        } else {
            menuElem.style.display = 'block';
        }
    });
};



window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    burger('.header_menu-ul', '.header-logo');

});
