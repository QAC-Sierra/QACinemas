const mongoose = require('mongoose');
Schema = mongoose.Schema;

const users = new Schema({
    user_id: Number,
    email: String,
    password: String
});


module.exports = users;