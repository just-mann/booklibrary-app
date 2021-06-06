console.log('js File Connected...');

let titleValue = document.querySelector("title").value;
let authorValue = document.querySelector("author");
let isReadValue = document.querySelector("isRead");
let addBookBtn = document.querySelector('.addBookBtn');



addBookBtn.addEventListener('click', () => {
    console.log(title.val);
    console.log(author.value);
})