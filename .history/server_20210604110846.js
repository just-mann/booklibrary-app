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
        const db = client.db(dbName);
        const myCollection = db.collection(dbCollectionName)
        app.post('/books', (req, res) => {
            myCollection.insertOne(req.body)
                .then(result => {
                    // console.log(result);
                    res.redirect('/booklist', result);
                    app.get('/booklist', (req, res) => {
                        myCollection.find().toArray()
                            .then(result => {
                                console.log(result)
                            })
                            .catch(err => console.log(err));
                            
                    })
                .catch(err => console.log(err));
        })

         
        

    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.render('index');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
