const clubsData = [
  {
    name: 'HODP',
    email: 'harvardopendataproject@gmail.com',
    website: 'https://hodp.org/',
    size: 'MEDIUM',
    summary: "Find open data sources around Harvard's campus and generates interesting analysis of it",
    competitiveness: 'COMPETITIVE',
  },

  {
    name: 'HMMT',
    email: 'Request@hmmt.org',
    website: 'https://www.hmmt.co',
    size: 'LARGE',
    summary: 'Organizes the largest student run math tournament for high schoolers and middle schoolers',
    competitiveness: 'COMPETITIVE',
  },

]

exports.up = knex => knex('clubs').insert(clubsData)

exports.down = knex => knex('clubs').del()
