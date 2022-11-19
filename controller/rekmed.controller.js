const dataRekmed = require("../models/rekmed");


module.exports = {
    
    addRekmed: (req, res) => {
        const newRekmed = req.body
        const rekmed = new dataRekmed(newRekmed)
    
        rekmed.save()

        res.status(201).json({
          message: "data has been created!",
        })
    },

    getAllRekmed: async (req, res) => {
      try {
        const rekmed = await dataRekmed.find({}, "-__v").populate("pasien", "name").populate("dokter", "name")
  
        res.status(200).json({
          message: "Getting Data",
          data: rekmed
        })
      } catch (error) {
        res.status(500).json({message : "Server Error"})
      }

    },

    getRekmedByID: async (req, res) => {
      try {
        const rekmed = await dataRekmed.findById(req.params.id, "-__v")
  
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

    deleteRekmedByID: async (req, res) => {
    try {
      const rekmed = await dataRekmed.findById(req.params.id)

        if(!rekmed){
          res.status(404).json({
            message : "Could not Found"
          });
      } else{
        rekmed.deleteOne()
        res.json({message: "Succes deleted data"})
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    },

    updateRekmedByID: async (req, res) => {
      try {
        const rekmed = await dataRekmed.findById(req.params.id, "-__v")
  
        Object.assign(rekmed, req.body)
        rekmed.save();
        res.status(201).send({ 
          message : "Todo updated",
          data : rekmed })
     
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    }
}