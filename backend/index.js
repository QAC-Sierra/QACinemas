const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');

const app = express();
const bookingsRouter = require('./routes/bookings-router');
const paymentsRouter = require('./routes/payments-router');
const moviesRouter = require('./routes/movies-router');
const usersRouter = require('./routes/users-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.use('/bookings', bookingsRouter);
app.use('/payments', paymentsRouter);
app.use('/movies', moviesRouter);
app.use('/users', userRouter);
app.listen(4494);

