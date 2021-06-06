const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'firstDbApp';
const dbCollectionName = 'dbCollection';
const PORT = 5000;


// Connect to Database
const dbURI = 'mongodb://127.0.0.1:27017';
MongoClient.connect(dbURI, {useUnifiedTopology: true})
    .then(client => {
        const db = client.db(dbName);
        const myCollection = db.collection(dbCollectionName);
        myCollection.insertOne({"bookName": "How to win friends and influence people", "isRead": true});
        console.log('Database Connected..');
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('<h1>App is now running...</h1>');
})

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
