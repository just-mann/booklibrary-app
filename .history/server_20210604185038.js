// blog2468

const dotenv = require('do')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const { mongo } = require('mongoose');
const dbName = 'firstDbApp';
const dbCollectionName = 'dbCollection';
const PORT = 5000;



app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');


// Static Files
app.use(express.static('public'));


// Connect to Database
const connectionString = 'mongodb+srv://bookUser:<password>@crud-tutorial.xd65d.mongodb.net/myBookList?retryWrites=true&w=majority';  
mongodb.connect(a, (err, client) => {

})



app.get('/', (req, res) => {
    res.render('index');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
