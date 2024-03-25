const express = require('express');
const mysql = require('mysql2');
const {prisma} = require('@prisma/client');
const app = require('./app');
require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on PORT No: ${PORT}`);
})