const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Publisher extends BaseModel {
  static get tableName() {
    return 'publishers'
  }

  static get relationMappings() {
    const Address = require('./Address')
    const Book = require('./Book')

    return {
      books: {
        relation: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'publishers.id',
          to: 'books.publisherId',
        },
      },
      address: {
        relation: BelongsToOneRelation,
        modelClass: Address,
        join: {
          from: 'publishers.addressId',
          to: 'addresses.id',
        },
      },
    }
  }
}

module.exports = Publisher
