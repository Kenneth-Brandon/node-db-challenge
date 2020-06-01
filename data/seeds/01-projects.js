exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      project_name: 'HTML-CSS',
      project_desc: 'HTML_CSS description',
      is_completed: false,
    },
    { project_name: 'JS', project_desc: 'JS description', is_completed: false },
    {
      project_name: 'React',
      project_desc: 'REACT description',
      is_completed: false,
    },
  ]);
};
