
exports.up = knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('firstName').notNullable()

  table.string('lastName').notNullable()

  table.integer('classYear')

  table.string('email').unique().notNullable()

  table.string('passHash').notNullable()
  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('users')
