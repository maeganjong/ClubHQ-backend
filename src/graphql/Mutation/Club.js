const Club = require('../../models/Club')

const addClub = async (obj, { input }) => {
  console.log('THIS IS MY INPT!!', input)
  const clubs = await Club.query().insert(input)
  console.log('SUCCESS')

  return clubs
}
const addTagToClub = async (obj, { tagId, clubId }) => {
  const club = await Club.query().findById(
    clubId,
  )

  club.$relatedQuery('tagClubs')
    .insert({ tagId, clubId })
}

const resolver = {
  Mutation: {
    addClub,
    addTagToClub,
  },
}

module.exports = resolver
