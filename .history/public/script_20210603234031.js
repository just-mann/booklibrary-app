console.log('js File Connected...');




$(() => {
    console.log('jquery connected');
    
    let titleValue = document.getElementById("title");
    let authorValue = document.getElementById("author");
    let isReadValue = document.getElementById("isRead");
    let addBookBtn = document.getElementById("addBookBtn");


    function addBook(e) {
        console.log(titleValue.value)
    }

    functio

    $('#addBookBtn').on('click', () => {
        addBook();
    })
})