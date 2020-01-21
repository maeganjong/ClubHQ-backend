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
    .enum('competitiveness', ['COMPETITIVE', 'COMPLETION'])

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
}).then(() => {
  knex('clubs').insert([
    {
      name: 'Harvard Open Data Project',
      email: 'harvardopendataproject@gmail.com',
      website: 'https://hodp.org/',
      size: 'MEDIUM',
      summmary: "Find open data sources around Harvard's campus and generates interesting analysis of it",
      competitiveness: 'COMPLETION',
    },
  ])
})

exports.down = knex => knex.schema.dropTableIfExists('clubs')
