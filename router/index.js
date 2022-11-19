const express = require('express');
const router = express.Router();

const userDokterRuter = require('./userDokter.router')
const dokterRouter = require("./dokter.router")
const dokterPasienRouter = require("./dokterPasien.router")
const pasienRouter = require('./pasien.router')
const rekmedRouter = require('./rekmed.router');
const userPasienRouter = require('./userPasien.router');

router.use('/userpasien',userPasienRouter)
router.use('/userDokter', userDokterRuter)
router.use('/dokter', dokterRouter)
router.use('/dokterPasien', dokterPasienRouter)
router.use('/pasien', pasienRouter)
router.use('/rekmed', rekmedRouter)

module.exports = router;