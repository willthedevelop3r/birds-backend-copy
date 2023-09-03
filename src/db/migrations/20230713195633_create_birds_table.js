/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('birds', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.string('image_url').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('birds');
};
