const merge = require('lodash.merge')
const mutations = require('./Mutation')
const queries = require('./Query')

module.exports = merge(mutations, queries)
