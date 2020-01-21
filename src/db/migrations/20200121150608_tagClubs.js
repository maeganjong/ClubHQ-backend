exports.up = knex => knex.schema.createTable('tagClubs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('tagId')
    .notNullable()
    .references('tags.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .uuid('clubId')
    .notNullable()
    .references('clubs.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
})

exports.down = knex => knex.schema.dropTableIfExists('tagClubs')
