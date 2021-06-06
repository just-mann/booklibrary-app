console.log('js File Connected...');

let titleValue = document.qu("title").value;
let authorValue = document.qu("author").value;
let isReadValue = document.qu("isRead");
let addBookBtn = document.querySelector('.addBookBtn');



addBookBtn.addEventListener('click', () => {
    console.log(titleValue);
    console.log(authorValue);
})