const usersData = require('../../../data/users')


exports.seed = knex => knex('users').del()
  .then(() => knex('users').insert(usersData))
