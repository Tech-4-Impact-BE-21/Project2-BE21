const mongoose = require('mongoose');
const { Schema } = mongoose

// untuk user dokter
const userDokterSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: String
})

const UserDokter = mongoose.model("UserDokter", userDokterSchema)

module.exports = UserDokter