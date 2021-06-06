const dotenv = require('dotenv');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const { mongo } = require('mongoose');
// const dbName = 'firstDbApp';
// const dbCollectionName = 'dbCollection';
const PORT = 5000;




app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');


// Static Files
app.use(express.static('public'));


// Connect to Database
const dbURI = 'mongodb+srv://bookUser:5O4mFIUQ8TMeS61P@crud-tutorial.xd65d.mongodb.net/myBookList?retryWrites=true&w=majority';  
MongoClient.connect(dbURI, { useUnifiedTopology: true })
    .then(client => {
        console.log('Database connected...');
        const db = client.db();
        // db.collection('bookCollection').deleteOne({_id});
        db.collection('bookCollection').find({species: "dog"}).toArray()
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err)); 
    })
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.render('index');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
