const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneNumber = new mongoose.Schema({
    number: {
        type: String,
    },
}, { timestamps: true });


module.exports.numbers = mongoose.model('phoneNumber', phoneNumber);