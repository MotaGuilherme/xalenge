/*
const restify = require('restify');
const errs = require('restify-errors')
const knex = require('../database/index2')

const server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())



  const user = () => {
  server.get('/', (req, res, next) => {
    
    knex('usuarios').then((dados) =>{
      res.send(dados)
    }, next)
    
  })
  
  server.post('/create', (req, res, next) => {
    
    knex('usuarios')
      .insert(req.body)
      .then((dados) =>{
      res.send(dados)
    }, next)
    
  })
  }
  module.exports = user;
  */