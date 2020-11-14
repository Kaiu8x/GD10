const Url = require('../models/Urls');

exports.up = function(knex) {
  return knex.schema
    .createTable('urls', (table) => {
      table.increments('id');
      table.string('longUrl', 512).notNullable().defaultTo("");
      table.string('shortUrl', 512).notNullable().defaultTo("");
      table.integer('redirectCount').notNullable().defaultTo(0);
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('urls');
};
