

require('dotenv').config(); // Load environment variables from a .env file if not already loaded

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DB_SOURCE, 
      pool: {
        min: 2,
        max:20
      },
      migrations: {
        tableName: 'knex_migrations'
      }
  }
};