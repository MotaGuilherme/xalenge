// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
         database: 'mysqlbd',
         user: 'root',
         password: '123456'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
         tableName: 'knex_migrations',
         directory: "./src/app/database/migrations"
    }
},

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
