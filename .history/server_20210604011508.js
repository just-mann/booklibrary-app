const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'firstDbApp';
const dbCollectionName = 'dbCollection';
const PORT = 5000;

// Set View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));


// Connect to Database
const dbURI = 'mongodb://127.0.0.1:27017';
MongoClient.connect(dbURI, {useUnifiedTopology: true})
    .then(client => {
        const db = client.db(dbName);
        const myCollection = db.collection(dbCollectionName);
        app.post('/post-book', (req, res) => {
            myCollection.insertOne(req.body)
                .then()
            console.log('Data added to database...');
        })
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/booklist', (req, res) => {
    res.render('bookList');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
