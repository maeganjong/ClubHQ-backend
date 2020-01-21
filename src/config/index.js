module.exports = {
  appName: 'Backend Starter',
  port: process.env.PORT || 5000,

  // Create new random token whenever you start a new project
  tokenSecret: process.env.TOKEN_SECRET || 'reughdjsasdkpmasipkmsdfadf',

  db: {
    max_connections: Number.isNaN(Number(process.env.DB_MAX_CONNECTIONS))
      ? 10
      : Number(process.env.DB_MAX_CONNECTIONS),
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

  },
}
