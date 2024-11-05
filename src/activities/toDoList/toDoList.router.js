import { Router } from "express"
import { createTask, deleteTask, listAllTasks, readTask, updateTask } from './controllers/toDoList.controller.js'

const router = new Router()

router
    .route('/tasks')
    .get(listAllTasks)
    .post(createTask)

router
    .route('/tasks/:taskId')
    .get(readTask)
    .put(updateTask)
    .delete(deleteTask)

router.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }))

export default router