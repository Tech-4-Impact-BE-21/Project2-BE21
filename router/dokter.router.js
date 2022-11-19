const express = require("express");
const router = express.Router();


// untuk data user dokter
const {
    getAllDokter,
    getDokterByID,
    addDokter,
    deleteDokterByID,
    updateDokterByID,
    loginDokter
} = require("../controller/dokter.controller");

router.get("/allDokter", getAllDokter);
router.get("/:id", getDokterByID);
router.post("/addDokter", addDokter);
router.delete("/:_id", deleteDokterByID);
router.put("/:id", updateDokterByID);
router.post("/login", loginDokter);

module.exports = router;

