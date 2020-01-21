const Author = require('../../models/Author')
const Address = require('../../models/Address')

const author = async () => {
  const allAuthor = await Author.query()
  return allAuthor
}

const searchAuthor = async (obj, { name }) => {
  const authorsByName = await Author.query()
    .where('firstName', 'like', `%${name}%`)
    .orWhere('lastName', 'like', `%${name}%`)

  return authorsByName
}

const address = async ({ addressId }) => {
  const authorAddress = await Address.query().findById(addressId)

  return authorAddress
}

const welcome = async (obj, args, { author }) => {
  if (!author) {
    throw new Error('Unauthenticated!')
  }

  return `Welcome, ${author.email} to your account!`
}

const resolver = {
  Query: {
    author,
    searchAuthor,
    welcome,
  },
  Author: {
    address,
  },
}

module.exports = resolver
