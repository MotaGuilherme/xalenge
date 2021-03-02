const express = require('express')
const AuthController = require('../../app/controllers/AuthControllermy')
const authRoute = express.Router()
authRoute.post("/auth", AuthController.auth)
module.exports = authRoutemy