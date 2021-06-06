console.log('js File Connected...');

let titleValue = document.querySelector(".title");
let authorValue = document.querySelector(".author");
let isReadValue = document.querySelector(".isRead");
let addBookBtn = document.querySelector('bu');

function addBook(e) {
    e.preventDefault();
    console.log('Working...');
}

addBookBtn.addEventListener('click', addBook);