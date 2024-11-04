import { Router } from "express"
import lesson01Route from './lesson01/lesson01.route.js'

const router = new Router()

router.use('/lesson01', lesson01Route)

export default router