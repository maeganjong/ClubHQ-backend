const { HasManyRelation, ManyToManyRelation } = require('objection')
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
        relation: ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'clubs.id',
          through: {
            from: 'tagClubs.clubId',
            to: 'tagClubs.tagId',
          },
          to: 'tags.id',
        },
      },
      evaluations: {
        relation: HasManyRelation,
        modelClass: Evaluation,
        join: {
          from: 'clubs.id',
          to: 'evaluations.clubId',
        },
      },

    }
  }
}


module.exports = Club
