const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());

db.on('error', console.error.bind(console, 'MongoDB connection error'));


app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.listen(4494);

