const casual = require('casual')
const clubsData = require('./clubs')


casual.define('evaluation', ({ clubId }) => ({
  id: casual.uuid,
  clubId,
  hoursOfMeeting: casual.hoursOfMeeting,
  hoursOfWork: casual.hoursOfWork,
  rating: casual.integer(0, 10),
  comments: casual.sentence,
}))

const evaluationsData = []

for (let i = 0; i < 20; ++i) {
  const clubId = casual.random_element(clubsData).id

  evaluationsData.push(casual.evaluation({ clubId }))
}

module.exports = evaluationsData
