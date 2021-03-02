const conn = require('../database/connmy')
const encrypt = require('../utils/encryptPassword')
module.exports = {
    async create (request, response){
        const {email, login, password} = request.body;
        const passCrypted = encrypt(password);
        const usermy = await conn('usermy')
            .insert({
              
               email,
               login,
               password: passCrypted
    })
    return response.status(201).status({
        mensagem: {
            "User Created": {
                
                "email": email,
                "login": login,
                "password": passCrypted
       }
    }
  })
},
async listAll(request, response) {
    const user = await conn('usermy')
        .select('id',  'login', 'email')
    
    return response.status(200).json({user})
},
async listById (request, response) {
    const { id } = request.params;
    const userFilterd = await conn('usermy')
        .select('id', 'login', 'email')
        .where('id', id)
    
    return response.status(200).json({userFilterd})
  }
}