const Tag = require('../../models/Tag')

const allTags = async () => {
  const tags = await Tag.query()
  console.log(tags)
  return tags
}

const searchTags = async (obj, { input }) => {
  const tags = await Tag.query()
    .where('text', 'like', `%${input}%`)
  return tags
}

const resolver = {
  Query: {
    allTags,
    searchTags,
  },
}

module.exports = resolver
