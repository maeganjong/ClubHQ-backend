const merge = require('lodash.merge')
const Club = require('./Club')
const Evaluation = require('./Evaluation')
const Tag = require('./Tag')
const User = require('./User')
const Search = require('./Search')

const resolvers = [Club, Evaluation, Tag, User, Search]


module.exports = merge(...resolvers)
