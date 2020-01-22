const { BelongsToManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Tag extends BaseModel {
  static get tableName() {
    return 'tags'
  }

  static get relationMappings() {
    const Club = require('./Club')

    return {
      club: {
        relation: BelongsToManyRelation,
        modelClass: Club,
        join: {
          from: 'tag.id',
          through: {
            from: 'tagClubs.tagId',
            to: 'tagClubs.clubId',
          },
          to: 'club.Id',
        },
      },

    }
  }
}

module.exports = Tag
