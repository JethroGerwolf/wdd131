
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let pageContent = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.backgroundColor = '#2d2d30';
        body.style.color = '#FFFFFF';
        pageContent.style.borderColor = '#FFFFFF';
        logo.setAttribute('src', 'byui-logo-white.png');
    } else {
        // code for changes to colors and logo
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#000000';
        pageContent.style.borderColor = '#000000';
        logo.setAttribute('src', 'byui-logo-blue.webp');
    }
}