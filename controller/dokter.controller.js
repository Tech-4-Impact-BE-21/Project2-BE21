const Dokter = require("../models/Dokter")
const UserDokter = require("../models/user.dokter")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    getAllDokter: async (req, res) => {
        const dokter = await Dokter.find().populate("name")

    res.json({
    message: "success get data",
    data: dokter
    })
},
    getDokterByID: async (req, res) => {    
    try {
        const dokter = await Dokter.findById(req.params.id)
        res.status(200).json({
        message:"managed to get data",
        data:dokter
    })
    } catch (error) {
    res.status(400).json({
        message:"failed to get data"
    })
    }
},

    addDokter: (req, res) => {
        const data = req.body
        const dokter = new Dokter(data)
        dokter.save()

        res.json({
            message: "successfully added data"
    })
},

    deleteDokterByID: async (req, res) => {
    try{
        const dokter = await Dokter.deleteOne(req.params.id);
        res.status(200).json({
            message:"successfully deleted data",
            data:dokter
        })
        } catch (error) {
        res.status(400).json({
            message:"failed deleted data"
        })
        }
},

    updateDokterByID: async(req, res) => {
        try {
            const dokter = await Dokter.findById(req.params.id);

            Object.assign(dokter, req.body)
            dokter.save();

            res.status(200).json({
                message:"successfully updated data"
        })
        } catch (error) { 
            res.status(400).json({
                message:"failed updated data"
        })
        }
    },


    loginDokter: async (req, res) => {
        const data = req.body
        const user = await UserDokter.findOne({email: data.email})  
        const checkPassword = bcrypt.compareSync(data.password, user.password)
        const token = jwt.sign({user}, process.env.SECRET_KEY)
    
        if (checkPassword) {
          res.header('auth-dokter',token).status(200).json({
            message: "Login Succesfull!",
            token 
          })
        } else {
          res.status(400).json({
            message: "Incorrect email or password enterted",
          })
        }
      }
}