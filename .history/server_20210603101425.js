const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Working...');
})


app.listen(PORT, () => console.log(`App running on PORT: ${PO}`) )