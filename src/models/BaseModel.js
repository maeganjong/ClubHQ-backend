const { Model } = require('objection')
const knex = require('../lib/knex')

Model.knex(knex)

class BaseModel extends Model {
  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext)
    this.updatedAt = new Date()
  }
}

module.exports = BaseModel
