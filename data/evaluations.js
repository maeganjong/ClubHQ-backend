const casual = require('casual')
const clubsData = require('./clubs')
const usersData = require('./users')


casual.define('evaluation', ({ clubId, userId }) => ({
  id: casual.uuid,
  userId,
  clubId,
  hoursOfMeeting: casual.hoursOfMeeting,
  hoursOfWork: casual.hoursOfWork,
  rating: casual.rating,
  comments: casual.comments,
}))

const evaluationsData = []

for (let i = 0; i < 20; ++i) {
  const clubId = casual.random_element(clubsData).id
  const userId = casual.random_element(usersData).id
  evaluationsData.push(casual.evaluation({ clubId, userId }))
}

module.exports = evaluationsData
