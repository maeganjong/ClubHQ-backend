const clubsData = require('../../../data/staticClubs')

exports.up = knex => knex('clubs').insert(clubsData)

exports.down = knex => knex('clubs').del()
