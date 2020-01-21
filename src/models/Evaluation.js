const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Evaluation extends BaseModel {
  static get tableName() {
    return 'evaluation'
  }

  static get relationMappings() {
    const User = require('./User')
    const Club = require('./Club')

    return {
      club: {
        relation: BelongsToOneRelation,
        modelClass: Club,
        join: {
          from: 'evaluation.id',
          to: 'club.Id',
        },
      },
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'evaluation.userId',
          to: 'user.id',
        },
      },
    }
  }
}

module.exports = Evaluation
