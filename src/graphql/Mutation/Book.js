const Book = require('../../models/Book')

const createBook = async (obj, { input }) => {
  const newBook = await Book.query().insert(input).returning('*')
  return newBook
}

const deleteBook = async (obj, { bookId }) => {
  const deleteres = await Book.query().deleteById(bookId).returning('*')

  return deleteres
}

const resolver = {
  Mutation: {
    createBook,
    deleteBook,
  },
}

module.exports = resolver
