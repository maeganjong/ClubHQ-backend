exports.up = knex => knex.schema.createTable('evaluations', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('clubId')
    .references('clubs.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.string('hoursOfMeeting')

  table.string('hoursOfWork')

  table.integer('rating')

  table.string('comments')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('evaluations')
