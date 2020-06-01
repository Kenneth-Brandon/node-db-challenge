const express = require('express');

const dbs = require('./projects-model');

const router = express.Router();

router.use((req, res, next) => {
  // console.log("Req from projects Router");
  next();
});

router.get('/', async (req, res) => {
  const projects = await dbs.findProjects();
  try {
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error', err: err });
  }
});

router.get('/resources', async (req, res) => {
  const resources = await dbs.findResources();
  try {
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: 'Server error', err: err });
  }
});
router.get('/tasks', async (req, res) => {
  const tasks = await dbs.findTasks();
  try {
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error', err: err });
  }
});

router.post('/', (req, res) => {
  const newProj = req.body;
  // console.log(newProj);
  dbs
    .addProjects(newProj)
    .then(() => {
      res.status(201).json(newProj);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Server error', err: err });
    });
});

router.post('/resources', (req, res) => {
  const newResource = req.body;
  // console.log(newResource);

  dbs
    .addResources(newResource)
    .then(() => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Server error', err: err });
    });
});

router.post('/tasks', (req, res) => {
  const newTasks = req.body;
  //console.log(newTasks);
  dbs
    .addTasks(newTasks)
    .then(() => {
      res.status(201).json(newTasks);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Server error', err: err });
    });
});

module.exports = router;
