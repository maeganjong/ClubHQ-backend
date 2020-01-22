const Tag  = require('../../models/Tag')

const addTag= async (obj, { input }) => {
    console.log("THIS IS MY INPUT!!", input)
  const tags = await Tag.query().insert(input)
  console.log("SUCCESS")

  return tags
}


const resolver = {
  Mutation: {
    addTag,
  },
}

module.exports = resolver