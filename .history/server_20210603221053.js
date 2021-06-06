const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'firstDbApp';
const dbCollectionName = 'dbCollection';
const PORT = 5000;


app.get('/', (req, res) => {
    res.send('<h1>App is now running...</h1>');
})

app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}`))
