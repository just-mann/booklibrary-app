console.log('js File Connected...');

let titleValue = document.querySelector(".title").value;
let authorValue = document.querySelector(".author").value;
let isReadValue = document.querySelector(".isRead");
let addBookBtn = document.querySelector('button');

function addBook() {
    // e.preventDefault();
    console.log(titleValue);
}

addBookBtn.addEventListener('click', addBook);