exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      resource_name: 'DESK',
      resource_desc: 'easier than working with a laptop on your lap',
    },
    {
      resource_name: 'PC',
      resource_desc: 'better than writing on a dry erase board',
    },
    { resource_name: 'VS CODE', resource_desc: 'Compiler ' },
    {
      resource_name: 'NODE MODULES',
      resource_desc: 'use npm and install the necessary libraries',
    },
  ]);
};
