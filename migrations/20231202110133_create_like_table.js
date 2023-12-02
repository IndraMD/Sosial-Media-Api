/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("like", function (table) {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        table.integer("likeable_id").unsigned();
        table
          .string("likeable_type")
          .notNullable();
      table.string("content").notNullable();
      table.timestamps(true, true);
      table.unique(["user_id", "likeable_id", "likeable_type"]);
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
  .dropTableIfExists("like")
  .then(() => {
    console.log("drop table like");
  })
  .catch((err) => {
    console.log("error droping like table", err);
  });
}
