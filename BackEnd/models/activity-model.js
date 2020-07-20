const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    petname: { type: String, required: true },
    activity: { type: String, requied: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;