const express = require('express');
const db = require('./projects-model');

const router = express.Router();

router.post('/resources', async (req, res) => {
  const body = req.body;
  try {
    const resource = await db.addResource(body);
    if (resource) {
      return res.status(200).json(resource);
    }
    res.status(400).json({ message: 'Invalid resource' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.get('/resources', async (req, res) => {
  try {
    const resources = await db.getResources();
    if (resources) {
      return res.status(200).json(resources);
    }
    res.status(404).json({ message: 'No resources!' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const project = await db.addProject(body);
    if (project) {
      return res.status(200).json(project);
    }
    res.status(400).json({ message: 'Invalid project' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects();
    if (projects) {
      return res.status(200).json(projects);
    }
    res.status(400).json({ message: 'No projects' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.post('/tasks', async (req, res) => {
  const body = req.body;
  try {
    const task = await db.addTask(body);
    if (task) {
      return res.status(200).json(task);
    }
    res.status(400).json({ message: 'Invalid task' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.get('/:id/tasks', async (req, res) => {
  const id = req.params.id;
  try {
    const tasks = await db.getProjectTasks(id);
    if (tasks) {
      return res.status(200).json(tasks);
    }
    res.status(404).json({ message: 'no tasks' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.post('/:id/contexts', async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const context = await db.addContext(body, id);
    if (context) {
      return res.status(201).json(context);
    }
    res.status(400).json({ message: 'problem add context' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

router.get('/tasks/:id/contexts', async (req, res) => {
  const id = req.params.id;
  try {
    const tasks = await db.getTasks(id);
    if (tasks) {
      return res.status(200).json(tasks);
    }
    res.status(404).json({ message: 'no tasks' });
  } catch (e) {
    res.status(500).json({ message: 'db error' });
  }
});

module.exports = router;
