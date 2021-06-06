c

console.log('js File Connected...');


let titleValue = document.getElementById("title");
let authorValue = document.getElementById("author");
let isReadValue = document.getElementById("isRead");
let addBookBtn = document.getElementById("addBookBtn");


function addBook(e) {
    e.preventDefault();
    console.log(`${titleValue.value}, ${authorValue.value}, ${isReadValue}`)
}

addBookBtn.addEventListener('click', addBook);

$(() => {
    console.log('jquery connected');
})