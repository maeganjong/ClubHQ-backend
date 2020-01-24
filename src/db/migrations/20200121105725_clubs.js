exports.up = knex => knex.schema.createTable('clubs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('name').notNullable()

  table.string('email')

  table.string('website')

  table
    .enum('size', ['SMALL', 'MEDIUM', 'LARGE'])
    .notNullable()
    .defaultTo('MEDIUM')

  table.text('summary')

  table
    .enum('competitiveness', ['COMPETITIVE', 'COMPLETION'])

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('clubs')
