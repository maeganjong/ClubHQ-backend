const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Author extends BaseModel {
  static get tableName() {
    return 'authors'
  }

  static get relationMappings() {
    const Address = require('./Address')
    const Book = require('./Book')

    return {
      books: {
        relation: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'authors.id',
          to: 'books.authorId',
        },
      },
      address: {
        relation: BelongsToOneRelation,
        modelClass: Address,
        join: {
          from: 'authors.addressId',
          to: 'addresses.id',
        },
      },
    }
  }
}

module.exports = Author
