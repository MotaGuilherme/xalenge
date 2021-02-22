const conn = require('../database/conn')
const bcrypt = require('bcrypt')
const generateJwt = require('../utils/tokenzin');
module.exports = {
    async auth(request, response) {
        const {login, password} = request.body
        const user = await conn('user')
            .where('login', login)
            .select()
            .first()
    if(!user){
        return response.status(404).send({error: "User not found"})
    }
   
    if(!await bcrypt.compare(password, user.password)){
        return response.status(401)
          .send({error: "Password incorrect"})
    }
    
    user.password = undefined
    
    const token = generateJwt({id: user.id})
    
    response.send({
        user,
        token: token
    })
  }
}