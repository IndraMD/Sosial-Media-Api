/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("comment", function (table) {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        table.integer("comment_id").unsigned();
        table
          .string("comment_type")
          .notNullable();
      table.string("content").notNullable();
      table.timestamps(true, true);
      //   table.unique(['user_id', 'commentable_id','commentable_type']) ini untuk user hanya bisa comment ke post atau komen satu kali aja
    })
    .then(() => {
      console.log("comment table created");
    })
    .catch((err) => {
      console.log("error creating comment table", err);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("comment")
    .then(() => {
      console.log("drop table comment");
    })
    .catch((err) => {
      console.log("error droping comment table", err);
    });
};
