const express = require('express')
const router = express.Router()
const userRoute = require('./user/user.routesmy')
router.use(userRoute)
module.exports = routermy