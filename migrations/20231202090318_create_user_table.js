/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", function (table) {
      table.increments("id").primary();
      table.string("username", 50).notNullable();
      table.string("email", 100).notNullable().unique();
      table.string("password", 150).notNullable();
      table.string("avatar", 250).nullable();
      table.string("location", 100).nullable().unique();
      table.string("bio", 150).nullable();
      table.string("interest", 250).nullable();
      table.boolean("isEmailVerifed", 150).defaultTo(false);
      table.timestamps(true, true);
    })
    .then(() => {
      console.log("user table created");
    })
    .catch((err) => {
      console.log("error creating user table", err);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user")
    .then(() => {
      console.log("drop table user");
    })
    .catch((err) => {
      console.log("error droping user table", err);
    });
};
