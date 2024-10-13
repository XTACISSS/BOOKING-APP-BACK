const mongoose = require('mongoose');

const usaerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('User', usaerSchema);
