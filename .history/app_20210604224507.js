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
app.use(express.static('/public'));


// Set View Engine
app.set('view engine', 'ejs');







app.get('/', (req, res) => {
    res.render('index');
})




app.listen(PORT, () => console.log(`App is now running on PORT ${PORT}`));