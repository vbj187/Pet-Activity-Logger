const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    petname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true,
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;