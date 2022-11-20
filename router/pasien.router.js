const express = require('express');
const router = express.Router();
const verifyPasien = require('../middleware/pasien.auth');

const {
  getPasienByID,
  getRekmedByID
} = require("../controller/pasien.controller");

const { loginPasien } = require('../controller/pasien.controller');

router.post('/login', loginPasien);
router.get("/:id",verifyPasien, getPasienByID);
router.get("/rekmed/:id",verifyPasien, getRekmedByID);

module.exports = router;