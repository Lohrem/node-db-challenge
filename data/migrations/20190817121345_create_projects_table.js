exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments()
    table.string('project_name').notNullable()
    table.string('project_description')
    table.boolean('projectIsComplete').notNullable().defaultTo(false)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
}