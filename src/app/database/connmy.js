const knex = require('knex')
const conf = require('../../../knexfilemy')
const env = conf.development
const conn = knex(env)
module.exports = connmy