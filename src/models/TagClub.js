const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class TagClub extends BaseModel {
  static get tableName() {
    return 'tagClubs'
  }

  static get relationMappings() {
    const Club = require('./Club')
    const Tag = require('./Tag')

    return {
      tag: {
        relation: BelongsToOneRelation,
        modelClass: Tag,
        join: {
          from: 'tagClubs.tagId',
          to: 'tags.Id',
        },
      },
      club: {
        relation: BelongsToOneRelation,
        modelClass: Club,
        join: {
          from: 'tagClubs.clubId',
          to: 'clubs.id',
        },
      },
    }
  }
}

module.exports = TagClub
