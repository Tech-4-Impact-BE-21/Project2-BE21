const express = require("express");
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyDokter = (req, res, next) => {
    const tokenDokter = req.header('auth-dokter')
    if(!tokenDokter) return res.status(400).json({
        status : res.statusCode,
        message : "Access Denied!"
    })
    try{
        const verified = jwt.verify(tokenDokter, process.env.SECRET_KEY)
        req.user = verified
        next()
    }catch(err){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        })
    }
}
module.exports = verifyDokter