const express = require('express');
const UserController = require('../../controllers/UserController');
const userRoute = express.Router();
const authMiddleware = require('../../mid/auth.middleware')

userRoute.post('/user' ,UserController.create)
userRoute.get('/user', authMiddleware,UserController.listAll)
userRoute.get('/user/:id', authMiddleware, UserController.listById)

module.exports = userRoute