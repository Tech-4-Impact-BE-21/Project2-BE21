const express = require("express");
const router = express.Router();
const verifyDokter = require('../middleware/dokter.auth');

// untuk data user pasien
const {
    getAllPasien,
    getPasienByID,
    addPasien,
    deletePasienByID,
    updatePasienByID,
  } = require("../controller/pasien.controller");
  
  router.get("/allDataPasien",verifyDokter, getAllPasien);
  router.get("/:id",verifyDokter, getPasienByID);
  router.post("/addPasien",verifyDokter, addPasien);
  router.delete("/:id",verifyDokter, deletePasienByID);
  router.put("/:id",verifyDokter, updatePasienByID);

module.exports = router;