const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const context = require('../lib/context')
const formatError = require('../lib/formatError')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const initializeGraphqlRouter = app => {
  const server = new ApolloServer({
    schema,
    context,
    formatError,
    introspection: process.env.NODE_ENV === 'development',
    playground: process.env.NODE_ENV === 'development',
    tracing: process.env.NODE_ENV === 'production',
    cacheControl: true,
    engine: false,
  })

  // Use custom cors config for security and authorization!
  server.applyMiddleware({ app, path: '/graphql', cors: false })
  return server
}


module.exports = initializeGraphqlRouter
