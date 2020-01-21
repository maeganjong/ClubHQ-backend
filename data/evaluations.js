const casual = require('casual')

const hash = '$2a$10$ACb1lJ75TI0gmpYEtKiQOuHTl8DuqhFZLcFS3dhoQZfzUxMghRoAK'

casual.define('evaluations', () => ({
  id: casual.uuid,
  userId: casual.uuid,
  clubId: casual.clubId,
  hoursOfMeeting: casual.hoursOfMeeting,
  hoursOfWork: casual.hoursOfWork,
  rating: casual.rating,
  comments: casual.comments,
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.users())
}

module.exports = usersData