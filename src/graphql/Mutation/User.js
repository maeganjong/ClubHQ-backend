const Author = require('../../models/Author')
const { hashPassword, comparePassword, createToken } = require('../../lib/auth')
const addUser = async (obj, { input }) => {
  const users = await User.query().insert(input).returning('*')

  return users
}

const login = async (obj, { email, password }) => {
  const user = await User.query().findOne({
    email,
  })

  if (!user) {
    throw new Error('Invalid email or password')
  }

  const isValidPassword = await comparePassword(password, users.password)

  if (!isValidPassword) {
    throw new Error('Invalid pass.')
  }

  const payload = {
    id: user.id,
  }

  const token = createToken(payload)
  return { token, user }
}

const register = async (obj, { input: { email, password } }) => {
  const emailExists = await User.query().findOne({ email })
  if (emailExists) {
    throw new Error('Email is already in use.')
  }

  const passwordHash = await hashPassword(password)
  const user = await User.query().insertAndFetch({
    email,
    password: passwordHash,
  })

  const payload = {
    id: user.id,
  }

  const token = createToken(payload)
  return { user, token }
}

const resolver = {
  Mutation: {
    login,
    register,
  },
}

module.exports = resolver
