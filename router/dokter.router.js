const express = require("express");
const router = express.Router();
const verifyDokter = require('../middleware/dokter.auth');


// untuk data user dokter
const {
    getAllDokter,
    getDokterByID,
    addDokter,
    deleteDokterByID,
    updateDokterByID,
    loginDokter
} = require("../controller/dokter.controller");

router.get("/allDokter",verifyDokter, getAllDokter);
router.get("/:id",verifyDokter, getDokterByID);
router.post("/addDokter",verifyDokter, addDokter);
router.delete("/:_id",verifyDokter, deleteDokterByID);
router.put("/:id", updateDokterByID);
router.post("/login", loginDokter);

const {
    getAllPasien,
    getPasienByID,
    addPasien,
    deletePasienByID,
    updatePasienByID,
  } = require("../controller/pasien.controller");
  
  router.get("/pasien/all",verifyDokter, getAllPasien);
  router.get("/pasien/:id",verifyDokter, getPasienByID);
  router.post("/addPasien",verifyDokter, addPasien);
  router.delete("/pasien/:id",verifyDokter, deletePasienByID);
  router.put("/pasien/:id",verifyDokter, updatePasienByID);

module.exports = router;

