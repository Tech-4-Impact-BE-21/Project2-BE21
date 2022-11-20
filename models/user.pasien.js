const mongoose = require('mongoose');
const { Schema } = mongoose

// untuk user pasien
const userPasienSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type :String,
        required: true
    }
})

const UserPasien = mongoose.model("UserPasien", userPasienSchema)
module.exports = UserPasien


