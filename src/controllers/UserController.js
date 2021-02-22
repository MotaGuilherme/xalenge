const conn = require('../database/conn')
const encrypt = require('../app/utils/encryptPassword')

module.exports = {

    async create (request, response){
        const { email, login, password} = request.body
        const passCrypted = encrypt(password)


        const user = await conn('user')
        .insert({
          
            email,
            login,
            password: passCrypted
        })

        

        return response.status(201).send({
            mensagem: {
                "User Created": {
                    "Name": name,
                    "email": email,
                    "login": login,
                }
            }
        })

    },

    async listAll(request, response) {
        const user = await conn('user')
        .select('id', 'login', 'email')

        return response.status(200).json({user})
    },


    async listById (request, response) {
        const { id } = request.params;

        const userFilterd = await conn('user')
        .select('id', 'login', 'email')
        .where('id', id)

        return response.status(200).json({userFilterd})
    }

}