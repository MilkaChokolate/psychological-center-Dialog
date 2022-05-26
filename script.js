"use strict"

let buttonBar = document.querySelector('.buttonBar');
let menu = document.querySelector('#menu');
let buttonNav = document.querySelector('.buttonNav')

buttonBar.onclick = function (event) {
    let a = event.target.closest('a')
    if (a || buttonBar.contains(a)) {
        toggleClass(a, buttonBar);
    }
}

buttonNav.onclick = function (event) {
    let a = event.target.closest('a')
    if (a || buttonNav.contains(a)){
        toggleClass(a,buttonNav);
        hiddenMenu();
    }
}

function toggleClass(a, nav) {
    let active = nav.querySelector('.active');
    active.classList.remove('active')
    a.classList.add('active');
}


menu.onclick = hiddenMenu;

function  hiddenMenu() {
    buttonNav.style.display === 'none' ? buttonNav.style.display = 'flex' : buttonNav.style.display = 'none';
}