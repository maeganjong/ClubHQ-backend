/* eslint-disable no-console */
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
})

const express = require('express')
const http = require('http')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const config = require('./config')
const initializeGraphqlRouter = require('./graphql/router')
const initializeSafeCleanup = require('./cleanup')
const initalizeCronJob = require('./lib/cronjob')
const knexInstance = require('./lib/knex')

const app = express()
const server = http.createServer(app)
let httpServerListening

const startServer = async () => {
  // Set handlers to enable safe cleanup of process
  await initializeSafeCleanup()

  await knexInstance.migrate.latest()
  initalizeCronJob()

  // Cross-Origin Resource Sharing
  const corsConfig = {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }
  app.use(cors(corsConfig))

  app.set('etag', 'weak')
  app.set('trust proxy', true)

  // Security
  app.use(helmet())
  app.use(cookieParser())

  // Request logging
  app.use(
    morgan(
      process.env.NODE_ENV === 'development' ? 'dev' : 'combined',
    ),
  )

  const graphqlServer = await initializeGraphqlRouter(app)

  // !! Add other server endpoints here !!
  // ------------------------------


  // ------------------------------

  // 404 endpoints
  app.all('*', (_req, res) => {
    res.status(404)
    res.json({
      message: '404 not found',
    })
  })

  server.listen(config.port, () => {
    httpServerListening = true
    console.log(`🚀  Server ready at http://localhost:${config.port}${graphqlServer.graphqlPath}`)
  })
}

const shutdownServer = () => {
  if (httpServerListening) {
    server.close()
  }
  httpServerListening = false
}

// Only start if app is run directly
if (require.main === module) {
  try {
    console.log('Starting app...')
    startServer()
  } catch (error) {
    console.log('Fatal runtime error')
    console.error(error)
    if (server) {
      console.log('Shutting down server...')
      server.close()
    }
  }
}

module.exports = shutdownServer
