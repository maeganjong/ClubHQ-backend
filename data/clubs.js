const casual = require('casual')

casual.define('club', () => ({
  id: casual.uuid,
  name: casual.title,
  email: casual.email,
  website: casual.url,
  size: casual.random_element(['SMALL', 'MEDIUM', 'LARGE']),
  summary: casual.sentences(),
  competitiveness: casual.random_element(['COMPETITIVE', 'COMPLETION']),
}))


const clubsData = []

for (let i = 0; i < 20; ++i) {
  clubsData.push(casual.club)
}

module.exports = clubsData
