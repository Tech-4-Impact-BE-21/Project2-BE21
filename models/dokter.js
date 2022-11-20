const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data dokter
const dokterSchema = new Schema({
    name: String,
    expertise: String,
    address: String,
    phone_number: Number,
})

const Dokter = mongoose.model("Dokter", dokterSchema)

module.exports = Dokter