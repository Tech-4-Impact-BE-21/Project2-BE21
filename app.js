const express = require('express');
const app = express()
const db = require('./config/db');

const PORT = process.env.PORT || 7080;

const allRoutes = require('./router')

db.
then((result) => {
    console.log("database terkoneksi")
}).catch((err) => {
    console.log(err)
});

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
    console.log("server running on port"+ PORT)
})