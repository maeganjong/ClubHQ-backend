const tagsData = require('../../../data/tags')


exports.seed = knex => knex('tags').del()
  .then(() => knex('tags').insert(tagsData))
