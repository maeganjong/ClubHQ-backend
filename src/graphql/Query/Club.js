const Club = require('../../models/Club')

const allClubs = async () => {
  const clubs = await Club.query()

  return clubs
}

const getClub = async (obj, { clubId }) => {
    const club = await Club.query().findById(
        clubId,
    )

    return club
  }

const searchClubs = async (obj, { input }) => {
  const clubs = await Club.query()
    .where('name', 'like', `%${input}%`)

  return clubs
}

const getTagsOfClub = async(obj, { clubId }) =>{
    const club = await Club.query().findById(
        clubId
    )

    const tags = club.$relatedquery('tags')

    return tags
    
}

const getEvaluationsOfClub = async(obj, { clubId }) =>{
    const club = await Club.query().findById(
        clubId
    )

    const evaluations = club.$relatedquery('evaluations')

    return evaluations
    
}


const resolver = {
  Query: {
    allClubs,
    getClub,
    searchClubs,
    getTagsOfClub,
    getEvaluationsOfClub,
  },
}

module.exports = resolver
