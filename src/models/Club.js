const { BelongsToManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Club extends BaseModel {
  static get tableName() {
    return 'clubs'
  }

  static get relationMappings() {
    const Evaluation = require('./Evaluation')
    const Tag = require('./Tag')

    return {
      tag: {
        relation: BelongsToManyRelation,
        modelClass: Tag,
        join: {
          from: 'clubs.id',
          through: {
            from: 'tagClubs.clubId',
            to: 'tagClubs.tagId',
          },
          to: 'tags.Id',
        },
      },
      evaluation: {
        relation: BelongsToManyRelation,
        modelClass: Evaluation,
        join: {
          from: 'evaluations.clubId',
          to: 'clubs.id',
        },
      },

    }
  }
}


module.exports = Club
