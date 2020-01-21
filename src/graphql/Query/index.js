const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')
const Address = require('./Address')
const Publisher = require('./Publisher')

const resolvers = [Author, Book, Publisher, Address]


module.exports = merge(...resolvers)
