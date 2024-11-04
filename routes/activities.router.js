import { Router } from "express"
import activitiesDeriver from '../activities/activities.route.js'

const router = new Router()

router.use('/', activitiesDeriver)

export default router