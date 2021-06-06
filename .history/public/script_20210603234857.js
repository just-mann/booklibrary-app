console.log('js File Connected...');

let titleValue = document.q("title").value;
let authorValue = document.q("author").value;
let isReadValue = document.q("isRead");
let addBookBtn = document.querySelector('.addBookBtn');



addBookBtn.addEventListener('click', () => {
    console.log(titleValue);
    console.log(authorValue);
})