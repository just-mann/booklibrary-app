const express = require('express'); //import express package
const app = express(); //initialize the express app
const bodyParser = require('body-parser') //import body-parser to handle data from the form
const MongoClient = require('mongodb').MongoClient; //import the mongodbClient
const dbName = 'myBookList';
const dbCollectionName = 'bookCollection';

const PORT = process.env.PORT || 5000;


// Configure the body-parser
app.use(bodyParser.urlencoded({ extended: true }));


// Make static files accessible
app.use(express.static('public'));


// Set View Engine
app.set('view engine', 'ejs');



// Connect to Database
const dbURI = 'mongodb+srv://bookUser:cUk4rECaXyAWsNz8@crud-tutorial.xd65d.mongodb.net/myBookList?retryWrites=true&w=majority';
MongoClient.connect(dbURI, { useUnifiedTopology: true })
    .then(client => {

        app.listen(PORT, () => {
            console.log(`App is now running on PORT ${PORT} and Database: ${dbName} is connected`)
        });

        const db = client.db(`${dbName}`);
        
        const myCollection = db.collection(`${dbCollectionName}`);

        app.post('/books', (req, res) => {
            myCollection.insertOne(req.body)
                .then(result => {
                    console.log('Item added to database...');
                })
                .catch(err => console.log(err));
            res.redirect('bookList');
        })

        app.get('/booklist', (req, res) => {
            myCollection.find().sort({_id: -1}).toArray()
                .then(result => {
                    res.render('bookList', { myList: result, title: "Book List" });
                })
                .catch(err => console.log(err));
        })

        


        app.get('/', (req, res) => {
            res.render('index', { title: "Add New Book" });
        })

        app.get('/booklist', (req, res) => {
            res.render('bookList');
        })

        app.get('/contact', (req, res) => {
            res.render('contact', { title: "Contact Me" });
        })

        app.use((req, res) => {
            res.status(404).render('404', { title: '404, Page Not Found'});
        })

    })
    .catch(err => console.log(err));




