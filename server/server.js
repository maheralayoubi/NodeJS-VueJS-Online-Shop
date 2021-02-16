// Express is a library that enable you to access HTTP methods like Get, Post, Put and Delete.
const express = require('express');
// Morgan is a logger that logs all the HTTP requests that comes from the front-end.
const morgan = require('morgan');
// BodyParser is a library that gets data from the front-end to the back-end and parse it into proper format like json or url encode.
const bodyParser = require('body-parser');

const app = express()

// Middle wares that are important to enable the back-end to parse data from the front-end
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// GET - Retrieve data from the server
app.get('/', (req, res) => {
    res.json('Hello There!');
});

// POST - Send data from front-end to back-end
app.post('/', (req, res) => {
    console.log(req.body.name);
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening');
    }
});