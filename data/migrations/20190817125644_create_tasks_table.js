exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments()
    table.string('task_description').notNullable()
    table.string('notes')
    table.boolean('taskIsComplete').notNullable().defaultTo(false)
    table.integer('project_id').references('id').inTable('projects').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
}
