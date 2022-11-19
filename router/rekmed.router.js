const express = require('express');
const router = express.Router();
const verifyDokter = require('../middleware/dokter.auth');

const {
  getAllRekmed,
  getRekmedByID,
  addRekmed,
  deleteRekmedByID,
  updateRekmedByID,
  } = require("../controller/rekmed.controller");
  
  router.get("/",verifyDokter, getAllRekmed);
  router.get("/:id",verifyDokter, getRekmedByID);
  router.post("/add",verifyDokter, addRekmed);
  router.delete("/:id",verifyDokter, deleteRekmedByID);
  router.put("/:id",verifyDokter, updateRekmedByID);

module.exports = router;