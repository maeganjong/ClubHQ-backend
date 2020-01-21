exports.up = knex => knex.schema.createTable('tags', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('text')
    .notNullable()
})

exports.down = knex => knex.schema.dropTableIfExists('tags')
