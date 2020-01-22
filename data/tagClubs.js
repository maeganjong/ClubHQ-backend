const casual = require('casual')
const clubsData = require('./clubs')
const tagsData = require('./tags')

casual.define('tagClub', ({ clubId, tagId }) => ({
  clubId,
  tagId,

}))

const tagClubData = []

for (let i = 0; i < 20; ++i) {
  const clubId = casual.random_element(clubsData).id
  const tagId = casual.random_element(tagsData).id
  tagClubData.push(casual.tagClub({ clubId, tagId }))
}

module.exports = tagClubData
