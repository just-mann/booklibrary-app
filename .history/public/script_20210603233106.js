console.log('js File Connected...');

let titleValue = document.getElementById("title").value;
let authorValue = document.getElementById("author").value;
let isReadValue = document.getElementById("isRead");
let addBookBtn = document.getElementById("addBookBtn");


let addBook = () => {
        e.preventDefault();
    console.log(`${titleValue}, ${authorValue}, ${isReadValue}`)
}

addBookBtn.addEventListener('click', () => {
    let run(e) {
        addBook();
    }
})

$(() => {
    console.log('jquery connected');
})