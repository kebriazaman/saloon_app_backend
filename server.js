const express = require('express');
const mysql = require('mysql2');
const app = require('./app');
require('dotenv').config();


const PORT = process.env.PORT || 3000;

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'saloonapp'
});


con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
})


app.listen(PORT, () => {
    console.log(`App is running on PORT No: ${PORT}`);
})