const casual = require('casual')

const hash = '$2a$10$ACb1lJ75TI0gmpYEtKiQOuHTl8DuqhFZLcFS3dhoQZfzUxMghRoAK'

casual.define('users', () => ({
  id: casual.uuid,
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  password: hash,
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.users())
}

module.exports = usersData
