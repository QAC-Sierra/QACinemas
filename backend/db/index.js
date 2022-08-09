
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/qacinema', {useNewUrlParser: true},
    function(err) {
        if (err) {
            //error handling
            console.error(err);
        } else {
            //connection is ready
        }
    }
);

const db = mongoose.connection;
module.exports = db;