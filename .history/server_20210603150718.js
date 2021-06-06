const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'myBookList';
const dbCollectionName = 'myFamily';

const PORT = 5000;

// Connecting to MongoDB
const dbURI = `mongodb://127.0.0.1:27017/${dbName}`;

MongoClient.connect(dbURI, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);
    
    // Storing a reference to the database so you can use it later.
    
})

app.get('/', (req, res) => {
    res.send('<h1>App is now running my name is Justin Sando Kollie... </h1>');
});

app.listen(PORT, () => console.log(`App is now running on PORT: ${PORT}`));