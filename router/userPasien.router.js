const express = require('express');
const router = express.Router();

const {
    getAllUserPasien,
    getUserPasienByID,
    addUserPasien,
    deleteUserPasienByID,
    updateUserPasienByID,
  } = require("../controller/user.controllers");

router.get("/allPasien", getAllUserPasien);
router.get("/:id", getUserPasienByID);
router.post("/registerPasien", addUserPasien);
router.delete("/:id", deleteUserPasienByID);
router.put("/:id", updateUserPasienByID);

module.exports = router;