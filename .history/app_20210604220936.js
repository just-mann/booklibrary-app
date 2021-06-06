const express = require('express'); //import express package
const app = express(); //initialize the express app
const MongoClient = require('mongodb').MongoClient;  //import the data mongodbClient
const bodyParser = require('body-parser') //import body-parser to handle data from the form
const dbName = 'myBookList';
const dbCollectionName = 'bookCollection';
const dbUser = 'bookUser';


const PORT = process.env.PORT || 5000;

// configure body parser
app.use(bodyParser.urlencoded( { extended: true }));

// set the static files
app.use(express.static('public'));

// set the view engine - ejs
app.set('view engine', 'ejs');



// Connecting to MongoDB Atlas
const dbURI = `mongodb+srv://${dbUser}:cUk4rECaXyAWsNz8@crud-tutorial.xd65d.mongodb.net/${dbName}?retryWrites=true&w=majority`;
MongoClient.connect(dbURI, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to database`);
        const db = client.db(`${dbName}`);
        const bookCollection = db.collection(`${dbCollectionName}`);

        app.listen(PORT, () => console.log(`App is connected on PORT ${PORT}`));

        app.post('/books', (req, res) => {
            bookCollection.insertOne(req.body)
                .then(result => {
                    console.log('Item added to Database') 
                })
                .catch(err => console.log(err));
            res.redirect('bookList');
        })
        
        app.get('/', (req, res) => {
            bookCollection.find().toArray()
                .then(result => {
                    res.render('/bookList', { result });
                })
                .catch(err => console.log(err));
        })

        app.get('/', (req, res) => {
            res.render('index');
        })

        app.get('/booklist', (req, res) => {
            res.render('bookList');
        })

        app.get('/contact', (req, res) => {
            res.render('contact');
        })

    })
    .catch(err => console.log(err));


