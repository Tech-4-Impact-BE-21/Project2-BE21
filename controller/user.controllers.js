const UserPasien = require("../models/user.pasien");
const UserDokter = require('../models/user.dokter');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    // untuk data user pasien
    getAllUserPasien: async (req, res) => {
        try {
            const pasiens = await UserPasien.find({}, "-__v")
      
            res.status(200).json({
              message: "Getting Data",
              data: pasiens
            })
          } catch (error) {
            res.status(500).json({message : "Server Error"})
          }

    },

    getUserPasienByID: async (req, res) => {
        try {
            const pasiens = await UserPasien.findById(req.params.id, "-__v")
      
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

    addUserPasien: (req, res) => {
        const data = req.body
        const saltRounds = 10
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash

        const user = new UserPasien(data)

        user.save()
        res.json({
            massage : "data created succesfull"
        }) 
    },

    deleteUserPasienByID : async (req, res) => {
        try {
            const pasiens = await UserPasien.findById(req.params.id, "-__v")
      
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

    updateUserPasienByID : async (req, res) => {
        try {
            const pasiens = await UserPasien.findById(req.params.id, "-__v")
      
            Object.assign(pasiens, req.body)
            pasiens.save();
            res.status(201).send({ 
              message : "Succes updated user!",
              data : pasiens })
         
          } catch (error) {
            res.status(500).json({ message: "Server Error" })
          }
        
    },


    // untuk data user dokter
    getAllUserDokter : async (req, res) => {
        try {
            const dokter = await UserDokter.find({}, "-__v")
      
            res.status(200).json({
              message: "Getting Data",
              data: dokter
            })
          } catch (error) {
            res.status(500).json({message : "Server Error"})
          }
        
    },

    getUserDokterByID : async (req, res) => {
        try {
            const dokter = await UserDokter.findById(req.params.id, "-__v")
      
            if(dokter){
              res.status(200).json({
                message: "You Searched for",
                data: dokter
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

    addUserDokter : (req, res) => {
        const data = req.body
        const saltRounds = 10
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash

        const user = new UserDokter(data)

        user.save()
        res.json({
            massage : "data created succesfull"
        })
    },

    deleteUserDokterByID : async (req, res) => {
        try {
            const dokter = await UserDokter.findById(req.params.id, "-__v")
    
            if(dokter){
                dokter.deleteOne()
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

    updateUserDokterByID : async (req, res) => {
        try {
            const dokter = await UserDokter.findById(req.params.id, "-__v")
      
            Object.assign(dokter, req.body)
            dokter.save();
            res.status(201).send({ 
              message : "Succes updated user!",
              data : dokter })
         
          } catch (error) {
            res.status(500).json({ message: "Server Error" })
          }
    }
}