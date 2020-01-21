const Knex = require('knex')
const knexConfig = require('../../knexfile')

// Create Knex instance with default settings
const knex = Knex({
  ...knexConfig,
})

module.exports = knex
