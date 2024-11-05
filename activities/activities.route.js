import { Router } from "express"
import lesson01Server from './lesson01/lesson01.server.js'
import todolistServer from './todolist/todolist.server.js'

const router = new Router()

router.use('/lesson01', lesson01Server)
router.use('/todolist', todolistServer)

export default router