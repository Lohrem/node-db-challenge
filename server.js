const express = require('express')
const db = require('./data/dbConfig.js')
const server = express()

server.use(express.json())

server.get('/api/projects/', async (req, res) => {
  try {
    const projects = await db('projects')
    res.status(200).json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'error retrieving projects table',
      err
    })
  }
})
server.get('/api/tasks/', async (req, res) => {
  try {
    const tasks = await db('tasks').leftJoin('projects', 'projects.id', 'project_id')
    res.status(200).json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'error retrieving tasks table',
      err
    })
  }
})
server.get('/api/resources/', async (req, res) => {
  try {
    const resources = await db('resources').leftJoin('projects', 'projects.id', 'project_id')
    res.status(200).json(resources)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'error retrieving resources table',
      err
    })
  }
})

server.post('/api/projects', async (req, res) => {
  try {
    const [id] = await db('projects').insert(req.body)
    const project = await db('projects').where({id}).first()
    res.status(201).json(project)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
server.post('/api/tasks', async (req, res) => {
  try {
    const [id] = await db('tasks').insert(req.body)
    const task = await db('tasks').where({id}).first()
    res.status(201).json(task)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
server.post('/api/resources', async (req, res) => {
  try {
    const [id] = await db('resources').insert(req.body)
    const resource = await db('resources').where({id}).first()
    res.status(201).json(resource)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = server