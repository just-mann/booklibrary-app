console.log('js File Connected...');

let titleValue = document.getElementById("title").value;
let authorValue = document.getElementById("author").value;
let isReadValue = document.getElementById("isRead");
let addBookBtn = document.getElementById("addBook");


let addBook = () => {
    console.log(`${titleValue}, ${authorValue}, ${isReadValue}`)
}

