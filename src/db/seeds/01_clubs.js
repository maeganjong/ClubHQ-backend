const clubsData = require('../../../data/clubs')


exports.seed = knex => knex('clubs').del()
  .then(() => knex('clubs').insert(clubsData))
