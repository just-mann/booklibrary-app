const express = require('express');
const app = express();
const MongoClient = require('m')

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('<h1>App is now running...</h1>');
})


app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));