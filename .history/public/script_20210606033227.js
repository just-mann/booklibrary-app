console.log('js File Connected...')

const deleteBtn = document.querySelector('.deleteBook');

deleteBtn.addEventListener('click', (e) => {
    console.log('Button clicked..');
    const endpoint = `/booklist/${deleteBtn.dataset.doc}`;

    fetch(endpoint, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then(data => window.location.href = data.redirect)
        .catch(err => console.log(err));
})