exports.up = knex => knex.schema.createTable('tags', table => {
  table
    .uuid('tagId')
    .references('tags_clubs.id')

  table
    .uuid('clubId')
    .references('clubs.id')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('tags')
