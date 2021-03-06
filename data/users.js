const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  classYear: casual.year,
  passHash: '$2a$10$izKhDCoMDY5MMf8.hFR4p.8guylJsT9.sn4xAlMvvSeziIr2uLbvS',
}))


const usersData = []

for (let i = 0; i < 20; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
