const User = require('../../models/User')

const allUsers = async () => {
  const users = await User.query()

  return users
}

const getUser = async (obj, { userId }) => {
  const user = await User.query().findById(
    userId,
  )

  return user
}

const resolver = {
  Query: {
    allUsers,
    getUser,
  },
}

module.exports = resolver
