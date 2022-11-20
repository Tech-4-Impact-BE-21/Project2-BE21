const dataPasien = require("../models/dataPasien");
const dataRekmed = require("../models/rekmed");
require('dotenv').config();
const bcrypt = require('bcrypt');
const UserPasien = require("../models/user.pasien");
const jwt = require('jsonwebtoken');

module.exports = {
    addPasien: (req, res) => {
        const newPasien = req.body
        const pasien = new dataPasien(newPasien)
    
        pasien.save()
        
        res.status(201).json({
          message: "data has been created!",
        })
    },

    getAllPasien: async (req, res) => {
      try {
        const pasiens = await dataPasien.find({}, "-__v")
  
        res.status(200).json({
          message: "Getting Data",
          data: pasiens
        })
      } catch (error) {
        res.status(500).json({message : "Server Error"})
      }
    },

    getPasienByID: async (req, res) => {
      try {
          const pasiens = await dataPasien.findById(req.params.id, "-__v")
    
          if(pasiens){
            res.status(200).json({
              message: "You Searched for",
              data: pasiens
            })
          } else{
            res.status(404).json({
              message : "Could not Found"
            });
          }
        } catch (error) {
          res.status(500).json({ message: "Server Error" })
        }
  },

  deletePasienByID: async (req, res) => {
    try {
        const pasiens = await dataPasien.findById(req.params.id, "-__v")
  
        if(pasiens){
          pasiens.deleteOne()
            res.status(201).json({
                message: "Data Deleted"
            });
        }else{
            res.status(404).json({
                message : "Could not Found"
            })
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
  },

  updatePasienByID: async (req, res) => {
    try {
        const pasiens = await dataPasien.findById(req.params.id, "-__v")
  
        Object.assign(pasiens, req.body)
        pasiens.save();
        res.status(201).send({ 
          message : "Succes updated user!",
          data : pasiens })
     
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    },

    getRekmedByID: async (req, res) => {
      try {
        const rekmed = await dataRekmed.findById(req.params.id, "-__v").populate("pasien", "name").populate("dokter", "name")
  
        if(!rekmed){
          res.status(404).json({
            message : "Could not Found"
          });
      } else{
        res.status(200).json({
          message: "You Searched for",
          data: rekmed
        })
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    },

    loginPasien: async (req, res) => {
      const data = req.body
      const user = await UserPasien.findOne({email: data.email})  
      const checkPassword = bcrypt.compareSync(data.password, user.password)
      const token = jwt.sign({user}, process.env.SECRET_KEY)
  
      if (checkPassword) {
        res.header('auth-pasien',token).status(200).json({
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