// NAV atidarymas ===========================================

// get menu(burger) button
burgerMenuBtn = document.querySelector('.fa-burger');
// get expanded-nav section
expandNav = document.querySelector('#expanded-nav');
// get "X" button
collapseNav = document.querySelector('.fa-xmark');
// get expanded menu list items
menuItems = document.querySelectorAll('.exp-li');


burgerMenuBtn.addEventListener('click', expandMenu);

// opens(expands) menu
function expandMenu() {
    expandNav.classList.toggle("active");
}


collapseNav.addEventListener('click', collapseMenu);

// closes expanded menu
function collapseMenu() {
    expandNav.classList.toggle("active");
}

// closes menu after expanded menu items are cliked
menuItems.forEach( (item) => item.addEventListener('click', collapseMenu) );