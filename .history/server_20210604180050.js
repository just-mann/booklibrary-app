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
  


app.get('/', (req, res) => {
    res.render('index');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
