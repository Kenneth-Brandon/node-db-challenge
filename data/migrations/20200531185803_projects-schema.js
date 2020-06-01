exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments('id');
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_desc');
      tbl.boolean('is_completed').defaultTo(false);
    })
    .createTable('tasks', (tbl) => {
      tbl.increments('id');
      tbl.string('task_desc').notNullable();
      tbl.string('task_notes');
      tbl.boolean('is_completed').defaultTo(false);
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('id') //or projects.id
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable('resources', (tbl) => {
      tbl.increments('id');
      tbl.string('resource_name', 128).unique().notNullable();
      tbl.string('resource_desc');
    })
    .createTable('projects_resources', (tbl) => {
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .notNullable()
        .unsigned()
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
