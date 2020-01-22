const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Evaluation extends BaseModel {
  static get tableName() {
    return 'evaluations'
  }

  static get relationMappings() {
    const User = require('./User')
    const Club = require('./Club')

    return {
      club: {
        relation: BelongsToOneRelation,
        modelClass: Club,
        join: {
          from: 'evaluations.id',
          to: 'clubs.id',
        },
      },
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'evaluations.userId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Evaluation
