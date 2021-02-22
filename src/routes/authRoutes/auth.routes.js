  
const express = require('express')
const AuthController = require('../../controllers/AuthController2')

const authRoute = express.Router()

authRoute.post("/auth", AuthController.auth)

module.exports = authRoute