exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_desc: 'create HTML task 1',
      task_notes: 'HTML_CSS task notes 1',
      project_id: '1',
      is_completed: false,
    },
    {
      task_desc: 'create JS task 1',
      task_notes: 'JS task notes 1',
      project_id: '2',
      is_completed: false,
    },
    {
      task_desc: 'create JS task 2',
      task_notes: 'JS task notes 2',
      project_id: '2',
      is_completed: false,
    },
    {
      task_desc: 'create JS task 3',
      task_notes: 'JS task notes 3',
      project_id: '2',
      is_completed: false,
    },
    {
      task_desc: 'create React task 1',
      task_notes: 'React task notes 1',
      project_id: '3',
      is_completed: false,
    },
    {
      task_desc: 'create React task 2',
      task_notes: 'React task notes 2',
      project_id: '3',
      is_completed: false,
    },
  ]);
};
