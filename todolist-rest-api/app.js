import express from 'express'
import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import { createTask, deleteTask, listAllTasks, readTask, updateTask } from './src/controllers/toDoList.controller.js'

const { HOST, PORT, MONGODB_URI } = process.env

const app = express()

connect(MONGODB_URI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app
    .route('/tasks')
    .get(listAllTasks)
    .post(createTask)

app
    .route('/tasks/:taskId')
    .get(readTask)
    .put(updateTask)
    .delete(deleteTask)

app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }))

// Server start
app.listen(PORT || 4321, () => {
    console.log(`App listening on http://${HOST}:${PORT}`)
})