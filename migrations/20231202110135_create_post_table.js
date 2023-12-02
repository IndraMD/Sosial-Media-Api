/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("post", function (table) {
      table.increments("id").primary();
      table.string("content", 50).notNullable();
      table.string("file_url", 100).notNullable().unique();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("comment_id", 150)
        .unsigned()
        .references("id")
        .inTable("comment")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("like_id", 150)
        .unsigned()
        .references("id")
        .inTable("like")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    })
    .then(() => {
      console.log("post table created");
    })
    .catch((err) => {
      console.log("error creating post table", err);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("post")
    .then(() => {
      console.log("drop table post");
    })
    .catch((err) => {
      console.log("error droping post table", err);
    });
};
