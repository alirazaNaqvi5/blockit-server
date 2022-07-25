const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for parcel registration
const ParcelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    receiver_phone: {
        type: String,
        required: true
    },
    receiver_address: {
        type: String,
        required: true
    },
    receiver_city: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    registered_by: {
        type: String,
        required: true
    }
});

module.exports = Parcel = mongoose.model('parcel', ParcelSchema);