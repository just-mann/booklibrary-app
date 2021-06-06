console.log('js File Connected...');




$(() => {
    console.log('jquery connected');
    
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let isReadValue = document.getElementById("isRead");
    let addBookBtn = document.getElementById("addBookBtn");


    function addBook() {
        console.log(titleValue);
    }

    function test(e) {
        e.preventDefault();
        addBook()
    }

    $('#addBookBtn').on('click', () => {
        test();
    })
})