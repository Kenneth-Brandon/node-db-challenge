const db = require('../data/db-config.js');

function findProjects() {
  return db('projects');
}
function findResources() {
  return db('resources');
}
function findTasks() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.project_name', 'p.project_desc', 't.*');
}
function addProjects(data) {
  return db('projects').insert(data);
}
function addResources(data) {
  return db('resources').insert(data);
}
function addTasks(data) {
  return db('tasks').insert(data);
}
module.exports = {
  findProjects,
  findResources,
  findTasks,
  addProjects,
  addResources,
  addTasks,
};
