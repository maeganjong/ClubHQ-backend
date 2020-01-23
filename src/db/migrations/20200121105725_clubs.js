exports.up = knex => knex.schema.createTable('clubs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('name').notNullable()

  table.string('email')

  table.string('website').unique()

  table
    .enum('size', ['SMALL', 'MEDIUM', 'LARGE'])
    .notNullable()
    .defaultTo('MEDIUM')

  table.string('summary')

  table
    .enum('competitiveness', ['COMPETITIVE', 'COMPLETION', 'N/A'])

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('clubs')
