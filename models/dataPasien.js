const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data pasien
const dataPasienSchema = new Schema({
    name : String,
    age : String,
    addres : String
})

const dataPasien = mongoose.model("DataPasien", dataPasienSchema)

module.exports = dataPasien