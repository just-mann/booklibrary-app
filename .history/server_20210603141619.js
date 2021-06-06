const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'myBookList';
const dbCollectionName = 'myFamily';

const PORT = 5000;

// Connecting to MongoDB
const dbURI = 'mongodb://127.0.0.1:27017';

MongoClient.connect(dbURI, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);

    
    // Storing a reference to the database so you can use it later.
    const db = client.db(dbName);
    console.log(`Connected MongoDB: ${dbURI}`);
    console.log(`Connected to database: ${dbName}, connected to collection: ${dbCollectionName}`);
    const logData =dbName.dbCollectionName.find();
    console.log(logData);

});

app.get('/', (req, res) => {
    res.send('<h1>App is now running... My name is Justin Sando Kollie</h1>');
});

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));