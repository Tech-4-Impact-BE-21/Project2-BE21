const mongoose = require('mongoose');

const DB_URL = ("mongodb://mongo:uC2dBX4mfAlet2BLe2eI@containers-us-west-115.railway.app:6461");

const db = mongoose.connect(DB_URL);

module.exports = db;