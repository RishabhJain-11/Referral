const express = require('express')
const {
    register, login, profile, logout,
} = require('../controllers/authController')

const app = express.Router()

app.post('/register', register);

app.post('/login', login);

app.get('/profile', profile);

app.post('/logout', logout);

module.exports = app