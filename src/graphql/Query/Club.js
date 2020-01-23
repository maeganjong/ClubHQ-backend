const Club = require('../../models/Club')
const TagClub = require('../../models/TagClub')
const Evaluation = require('../../models/Evaluation')

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

const getTagsOfClub = async (obj, { clubId }) => {
  const club = await Club.query().findById(clubId)

  const tags = club.$relatedQuery('tag')

  return tags
}

const getEvaluationsOfClub = async (obj, { clubId }) => {
  const club = await Club.query().findById(
    clubId,
  )

  const evaluations = club.$relatedQuery('evaluations')

  return evaluations
}

const searchClubsByTag = async (obj, { tagId }) => {
  const temp = await TagClub.query().select('clubId').where({ tagId })
  const clubIDs = temp.map(el => el.clubId)
  const clubs = await Club.query().whereIn('id', clubIDs)

  return clubs
}

const avgRating = async ({ id }) => {
  const avg = await Evaluation.query()
    .avg('rating')
    .where('clubId', '=', id)
  const avg2 = avg[0].avg
  console.log(avg2)
  return avg2
}

const resolver = {
  Query: {
    allClubs,
    getClub,
    searchClubs,
    getTagsOfClub,
    getEvaluationsOfClub,
    searchClubsByTag,
  },
  Club: {
    avgRating,
  },
}

module.exports = resolver
