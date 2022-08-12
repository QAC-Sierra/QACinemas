require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const bookingsRouter = require('./routes/bookings-router');
const paymentsRouter = require('./routes/payments-router');
const moviesRouter = require('./routes/movies-router');
const usersRouter = require('./routes/users-router');
const ratingsRouter = require('./routes/ratings-router');
const commentsRouter = require('./routes/comments-router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
	.then(() => {
			console.log("Connected Successfully");
		},
		(err) => {
			console.error("Connection failed." + err.stack);
		});

app.use('/bookings', bookingsRouter);
app.use('/payments', paymentsRouter);
app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/ratings', ratingsRouter);
app.use('/comments', commentsRouter);

app.listen(process.env.PORT, () => {
	console.log("Server running");
});