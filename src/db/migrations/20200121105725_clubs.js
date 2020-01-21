exports.up = knex => knex.schema.createTable('clubs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('name').notNullable()

  table.string('email')

  table.string('website').unique()

  table.string('size')

  table.string('summary')

  table.string('competitive/completion')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('clubs')
