const Author = require('../../models/Author')
const { hashPassword, comparePassword, createToken } = require('../../lib/auth')

const createAuthor = async (obj, { input }) => {
  const newAuthor = await Author.query().insert(input).returning('*')
  return newAuthor
}

const login = async (obj, { email, password }) => {
  const author = await Author.query().findOne({
    email,
  })

  if (!author) {
    throw new Error('Invalid email or password')
  }

  const isValidPassword = await comparePassword(password, author.password)

  if (!isValidPassword) {
    throw new Error('Invalid pass.')
  }

  const payload = {
    id: author.id,
  }

  const token = createToken(payload)
  return { token, author }
}

const register = async (obj, { input: { email, password } }) => {
  const emailExists = await Author.query().findOne({ email })
  if (emailExists) {
    throw new Error('Email is already in use.')
  }

  const passwordHash = await hashPassword(password)
  const author = await Author.query().insertAndFetch({
    email,
    password: passwordHash,
  })

  const payload = {
    id: author.id,
  }

  const token = createToken(payload)
  return { author, token }
}

const resolver = {
  Mutation: {
    createAuthor,
    login,
    register,
  },
}

module.exports = resolver
