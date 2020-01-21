const Publisher = require('../../models/Publisher')

const createPublisher = async (obj, { input }) => {
  const newPublisher = await Publisher.query().insert(input).returning('*')
  return newPublisher
}

const resolver = {
  Mutation: {
    createPublisher,
  },
}

module.exports = resolver
