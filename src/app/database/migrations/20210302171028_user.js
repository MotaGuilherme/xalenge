
exports.up = function(knex) {
    return knex.schema.createTable('usermy',  function(table){
        table.increments('id').primary();
        table.string('ds_email').notNullable();
        table.string('ds_login',50).unique().notNullable();
        table.string('ds_password', 255).notNullable();
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('usermy')
};
