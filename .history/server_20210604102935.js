const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const dbName = 'firstDbApp';
const dbCollectionName = 'dbCollection';
const PORT = 5000;


app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));


// Connect to Database
const dbURI = 'mongodb://127.0.0.1:27017';
MongoClient.connect(dbURI, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to database');
        const db = client.db(dbName);
        const myCollection = db.collection(dbCollectionName)
        app.get('/books', (req, res) => {
            myCollection.i
        })
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/booklist', (req, res) => {
    res.render('bookList');locasdsd
})

app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
