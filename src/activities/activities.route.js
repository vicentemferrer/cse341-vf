import { Router } from "express"
import lesson01Route from './lesson01/lesson01.router.js'
import toDoListRoute from './toDoList/toDoList.router.js'

const router = new Router()

router.use('/lesson01', lesson01Route)
router.use('/todolist', toDoListRoute)

export default router