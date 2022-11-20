const express = require("express");
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyPasien = (req, res, next) => {
    const tokenPasien = req.header('auth-pasien')
    if(!tokenPasien) return res.status(400).json({
        status : res.statusCode,
        message : "Access Denied!"
    })
    try{
        const verified = jwt.verify(tokenPasien, process.env.SECRET_KEY)
        req.user = verified
        next()
    }catch(err){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        })
    }
}
module.exports = verifyPasien