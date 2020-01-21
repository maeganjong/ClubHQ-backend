const Address = require('../../models/Address')
const Publisher = require('../../models/Publisher')

const publisher = async () => {
  const publisherres = await Publisher.query()
  return publisherres
}

const searchPublisher = async (obj, { input }) => {
  const publisherByCo = await Publisher.query()
    .where('company', 'like', `%${input}%`)

  return publisherByCo
}

const address = async ({ addressId }) => {
  const authorAddress = await Address.query().findById(addressId)
  return authorAddress
}

const resolver = {
  Query: {
    publisher,
    searchPublisher,
  },
  Publisher: {
    address,
  },
}

module.exports = resolver
