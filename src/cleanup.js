/* eslint-disable global-require */
/* eslint-disable no-console */

const shutdown = async exitCode => {
  try {
    console.log('Shutting down server...')
    await require('./index')()
    console.log('Shutting down Knex connection...')
    await require('./lib/knex').destroy()
    console.log('Shutdown complete!')
    process.exit(exitCode)
  } catch (error) {
    console.log('SHUTDOWN FAILURE')
    console.log(error)
  }
}

const initializeSafeCleanup = () => {
  process.on('warning', async warning => {
    console.warn(warning)
  })

  // Manually exited, success
  process.once('SIGTERM', async () => {
    await shutdown(0)
  })

  process.once('SIGINT', async () => {
    await shutdown(0)
  })

  // Nodemon restart
  process.once('SIGUSR2', async () => {
    await require('./index')()
    await require('./lib/knex').destroy()
    process.kill(process.pid, 'SIGUSR2')
  })


  // Ecountered error, failure
  process.once('uncaughtException', async e => {
    console.log('Uncaught exception: ')
    console.log(e)
    await shutdown(1)
  })

  process.once('unhandledRejection', async reason => {
    console.log('Unhandled rejection: ')
    console.log(reason)
    await shutdown(1)
  })
}

module.exports = initializeSafeCleanup
