const tagClubsData = require('../../../data/tagClubs')


exports.seed = knex => knex('tagClubs').del()
  .then(() => knex('tagClubs').insert(tagClubsData))
