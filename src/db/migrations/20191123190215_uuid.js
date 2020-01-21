exports.up = knex => knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

// Don't drop uuid extension
exports.down = () => Promise.resolve()
