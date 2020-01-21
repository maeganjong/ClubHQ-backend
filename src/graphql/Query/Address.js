const Address = require('../../models/Address')

const address = async () => {
  const addressres = await Address.query()
  return addressres
}

const searchAddress = async (obj, { input }) => {
  const addressres = await Address.query()
    .where('street', 'like', `%${input}%`)
    .orWhere('city', 'like', `%${input}%`)
    .orWhere('state', 'like', `%${input}%`)
    .orWhere('zip', 'like', `%${input}%`)

  return addressres
}

const resolver = {
  Query: {
    address,
    searchAddress,
  },
}

module.exports = resolver
