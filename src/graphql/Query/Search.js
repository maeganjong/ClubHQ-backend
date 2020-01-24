/* eslint-disable no-underscore-dangle */
const Club = require('../../models/Club.js')
const Tag = require('../../models/Tag.js')
const TagClub = require('../../models/TagClub.js')

const search = async (obj, { input }) => {
  const c = await Club.query()
    .where('name', 'ilike', `%${input}%`)
    .orWhereExists(Club.relatedQuery('tag').where('text', 'ilike', `%${input}%`))

  return c
}

const resolver = {
  SearchResult: {
    __resolveType(obj) {
      if (obj.name) {
        return 'Club'
      }
      return 'Tag'
    },
  },
  Query: {
    search,
  },
}

module.exports = resolver
