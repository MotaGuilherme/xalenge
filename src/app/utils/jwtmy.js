const jwt = require('jsonwebtoken')
const config = require('../configs/jwt.configmy.json')
module.exports = {
    async generateJwt(params = {}){
        return await jwt.sign(params, config.secret, {
            expiresIn: config.expiration
        })
    }
}