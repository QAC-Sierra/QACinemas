const mongoose = require('mongoose');
Schema = mongoose.Schema;

const User = new Schema({
    user_id: Number,
    email: String,
    password: String
});


module.exports = mongoose.model('users', User);