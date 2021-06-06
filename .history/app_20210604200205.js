const express = require('express'); //import express package
const app = express(); //initialize the express app
const MongoClient = require('mongodb').MongoClient;  //import the data mongodbClient
const bodyParser = require('body-parser') //import body-parser to handle data from the form


const PORT = process.env.PORT || 5000;

// configure body parser
app.use(bodyParser.urlencoded( { extended: true }));

// set the static files
app.use(express.static('public'));

// set the view engine - ejs
app.set('view engine', 'ejs');



// Connecting to MongoDB Atlas
const dbURI = process.env.CONNECTIONSTRING;
MongoClient.connect(dbURI, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to database`);
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log(`App is connected on PORT ${PORT}`));
