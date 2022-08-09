const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');

const app = express();
const bookingsRouter = require('./routes/bookings-router');
const paymentsRouter = require('./routes/payments-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.use('/booking', bookingsRouter);
app.use('/payment', paymentsRouter)
app.listen(4494);

