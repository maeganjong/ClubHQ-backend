const Address = require('../../models/Address')

const createAddress = async (obj, { input }) => {
  const newAuthor = await Address.query().insert(input).returning('*')
  return newAuthor
}

const resolver = {
  Mutation: {
    createAddress,
  },
}

module.exports = resolver
