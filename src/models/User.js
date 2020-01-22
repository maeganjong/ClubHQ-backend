const { BelongsToManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Evaluation = require('./Evaluation')

    return {
      user: {
        relation: BelongsToManyRelation,
        modelClass: Evaluation,
        join: {
          from: 'evaluation.userId',
          to: 'user.id',
        },
      },
    }
  }
}

module.exports = User
