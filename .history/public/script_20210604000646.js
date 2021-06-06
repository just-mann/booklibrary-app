console.log('js File Connected...');

let titleValue = document.querySelector(".title").value;
let authorValue = document.querySelector(".author").value;
let isReadValue = document.querySelector(".isRead");
let addBookBtn = document.querySelector('button');

function addBook(e) {
    e.preventDefault();
    console.log('Working...');
}

addBookBtn.addEventListener('click', addBook);