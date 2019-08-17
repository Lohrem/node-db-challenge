exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments()
    table.string('description').notNullable()
    table.string('notes')
    table.boolean('completed').notNullable().defaultTo(false)
    table.integer('project_id').references('id').inTable('projects')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
}
