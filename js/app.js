// variables
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.menu-list');

openMenu.addEventListener('click', ()=> {
    menu.style.transform = 'translateX(0)'
})
closeMenu.addEventListener('click', ()=> {
    menu.style.transform = 'translateX(100%)'
})

