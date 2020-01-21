const evaluationsData = require('../../../data/evaluations')


exports.seed = knex => knex('evaluations').del()
  .then(() => knex('evaluations').insert(evaluationsData))
