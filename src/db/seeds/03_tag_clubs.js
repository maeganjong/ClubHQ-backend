const tagClubsData = require('../../../data/tagClubs')


exports.seed = knex => knex('tag_clubs').del()
  .then(() => knex('tag_clubs').insert(tagClubsData))
