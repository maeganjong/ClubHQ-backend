const createTableIfNotExists = async (knex, name, cb) => {
  await knex.schema.hasTable(name).then(exists => {
    if (!exists) {
      return knex.schema.createTable(name, cb).then(() => undefined)
    }
    return undefined
  })
}

module.exports = { createTableIfNotExists }
