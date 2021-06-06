console.log('js File Connected...');

let titleValue = document.getElementById("title").value;
let authorValue = document.getElementById("author").value;
let isReadValue = document.getElementById("isRead");
let addBookBtn = document.getElementById("addBookBtn");


let addBook = () => {
    console.log(`${titleValue}, ${authorValue}, ${isReadValue}`)
}

addBookBtn.addEventListener('click', () => {
    function(e) {
        e.preventDefault();
        add
    }
})

$(() => {
    console.log('jquery connected');
})