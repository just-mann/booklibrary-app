console.log('js File Connected...');




// $(() => {
    console.log('jquery connected');
    
    let titleValue = document.getElementById("title");
    let authorValue = document.getElementById("author");
    let isReadValue = document.getElementById("isRead");
    let addBookBtn = document.getElementById("addBookBtn");


    function addBook() {
        alert(titleValue.value)
    }

    function test(e) {
        e.preventDefault();
        addBook()
    }

    $('#addBookBtn').on('click', () => {
        test();
    })
})