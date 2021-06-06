console.log('js File Connected...');

let titleValue = document.querySelector("title").value;
let authorValue = document.querySelector("author").value;
let isReadValue = document.querySelector("isRead");
let addBookBtn = document.querySelector('.addBookBtn');



addBookBtn.addEventListener('click', () => {
    console.log(titleValue);
    console.log(authorValue);
})