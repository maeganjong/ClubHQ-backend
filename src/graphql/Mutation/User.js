const User = require('../../models/User')
const { UserInputError } = require('apollo-server-express')
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

  const isValidPassword = await comparePassword(password, user.passHash)

  if (!isValidPassword) {
    throw new Error('Invalid password.')
  }

  const payload = {
    id: user.id,
  }


  const token = createToken(payload)
  console.log(token)
  return { token, user }
}

const register = async (obj, {
  email, password, firstName, lastName, classYear,
}) => {
  const emailExists = await User.query().findOne({ email })
  if (emailExists) {
    throw new Error('Email is already in use.')
  }

  const passwordHash = await hashPassword(password)
  const user = await User.query().insertAndFetch({
    email,
    passHash: passwordHash,
    firstName,
    lastName,
    classYear,
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
