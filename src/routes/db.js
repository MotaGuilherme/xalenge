const express = require('express');
const router = express.Router();
const db = require('../database/index2')
const knex = require('../database/index2')


router.get('/show',(req, res) => {
   db.select().from('usuarios').then((data) => {
        res.send(data)
   });

   });

   router.post('/create', (req, res) => {
    
    knex('usuarios')
      .insert(req.body)
      .then((dados) =>{
      res.send(dados)
    });
});

router.post('/authenticate', (req, res) => {
    
})

module.exports = router;
