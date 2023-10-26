const express = require('express');
const app = express();
require('dotenv').config();
const dbconnect = require('./config/db.js');
const router = require('./route/user.route.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// database connection
dbconnect();


app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
}))

app.use(cookieParser());

app.use(express.json());

app.use('/', router);

module.exports = app;