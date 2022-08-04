const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();
const bookingsRouter = require('./routes/bookings-router');

app.use(cors());

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.use('api', bookingsRouter);
app.listen(4494);

