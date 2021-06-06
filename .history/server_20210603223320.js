const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'firstDbApp';
const dbCollectionName = 'dbCollection';
const PORT = 5000;

// Set View Engine
app.set('view engine', 'ejs');


// Connect to Database
const dbURI = 'mongodb://127.0.0.1:27017';
MongoClient.connect(dbURI, {useUnifiedTopology: true})
    .then(client => {
        const db = client.db(dbName);
        const myCollection = db.collection(dbCollectionName);
        // myCollection.insertOne({"bookName": "How to win friends and influence people", "author": "Dale Carnegie", "isRead": true});
        console.log('Data added to database...');
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
