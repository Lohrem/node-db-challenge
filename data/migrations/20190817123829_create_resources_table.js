exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments()
    table.string('resource_name').unique().notNullable()
    table.string('resource_description')
    table.integer('project_id').references('id').inTable('projects').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('resources')
}
