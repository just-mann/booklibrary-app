$(() => {
    console.log('js File Connected...');
    let titleValue = document.querySelector(".title");
    let authorValue = document.querySelector(".author");
    let isReadValue = document.querySelector(".isRead");
    let addBookBtn = document.querySelector('button');

    function addBook(e) {
        e.preventDefault();
        console.log(`${titleValue.value}, ${authorValue.value}, ${isReadValue.checked}`);
    }


    addBookBtn.addEventListener('click', addBook);
})