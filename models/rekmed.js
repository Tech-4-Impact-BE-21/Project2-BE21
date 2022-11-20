const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data rekam medis
const dataRekmedSchema = new Schema({
    pasien : {
        type :  mongoose.ObjectId,
        ref : "DataPasien"
    },
    dokter : {
        type :  mongoose.ObjectId,
        ref : "Dokter"
    },
    keluhan : String,
    diagnosis : String,
    tanggal_periksa : Date
})

const dataRekmed = mongoose.model("DataRekmed", dataRekmedSchema)

module.exports = dataRekmed