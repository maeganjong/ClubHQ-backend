const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Book extends BaseModel {
  static get tableName() {
    return 'books'
  }

  static get relationMappings() {
    const Author = require('./Author')
    const Publisher = require('./Publisher')

    return {
      publisher: {
        relation: BelongsToOneRelation,
        modelClass: Publisher,
        join: {
          from: 'books.publisherId',
          to: 'publishers.id',
        },
      },
      author: {
        relation: BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'books.authorId',
          to: 'authors.id',
        },
      },
    }
  }
}

module.exports = Book
