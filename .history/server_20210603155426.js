const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'myBookList';
const dbCollection = 'myFamily';

const PORT = 5000;

// Connecting to MongoDB
const dbURI = `mongodb://127.0.0.1:27017/${dbName}`;

MongoClient.connect(dbURI, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to database: ${dbName}, connected to collection: ${dbCollection}`);
        const dataBase = client.db(dbName);
        const myCollection = dataBase.collection(dbCollection);
        myCollection.update({ name: "Justin Kollie", age: 26}, {name: "Justin Sando Kollie", age: 10})
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));

    })

app.get('/', (req, res) => {
    res.send('<h1>App is now running my name is Justin Sando Kollie... </h1>');
});

app.listen(PORT, () => console.log(`App is now running on PORT: ${PORT}`));