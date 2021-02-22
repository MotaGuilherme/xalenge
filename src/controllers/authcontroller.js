const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

const User  = require('../models/users');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 90000,
    });

}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if ( await User.findOne({ email }))
        return res.status(400).send({ error: 'Ususario ja cadastrado'});

        const user = await User.create(req.body);

       

        return res.send({ user,
            token: generateToken({ id: user.id}),
        });

    } catch( err ) {
        return res.status(404).send({ error: 'falha no registro de user'})
    }
})

router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email }).select('+password')

    if (!user)
        return res.status(400).send({ error: 'Usuario nao encontrado'})

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha invalida'})

        user.password = undefined;

    res.send({ user, 
        token: generateToken({ id: user.id}),
    });
    });

    

module.exports = app => app.use('/auth', router)