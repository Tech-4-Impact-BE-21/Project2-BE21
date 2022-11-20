const express = require('express');
const router = express.Router();

const {
  getAllUserDokter,
  getUserDokterByID,
  addUserDokter,
  deleteUserDokterByID,
  updateUserDokterByID,
} = require("../controller/user.controllers");

router.get("/allDokter", getAllUserDokter);
router.get("/:id", getUserDokterByID);
router.post("/registerDokter", addUserDokter);
router.delete("/:id", deleteUserDokterByID);
router.put("/:id", updateUserDokterByID);

module.exports = router;