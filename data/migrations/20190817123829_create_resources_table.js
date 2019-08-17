exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments()
    table.string('name').unique().notNullable()
    table.string('description')
    table.integer('project_id').references('id').inTable('projects').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('resources')
}
