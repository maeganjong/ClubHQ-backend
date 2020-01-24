const casual = require('casual')
const staticClubs = require('./staticClubs')


casual.define('evaluation', club => ({
  id: casual.uuid,
  ...club,
}))

const clubsData = []

for (let i = 0; i < staticClubs.length; ++i) {
  clubsData.push(casual.evaluation(staticClubs[i]))
}

module.exports = clubsData
