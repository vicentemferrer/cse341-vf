import { Router } from "express"
import activitiesRoute from '../activities/activities.route.js'

const router = new Router()

router.use('/', activitiesRoute)

export default router