import { Router } from "express"
import { sarahController, emilyController, hannahController } from './controllers/lesson01.controller.js'

const router = new Router()

router.get('/', sarahController)
router.get('/emily', emilyController)
router.get('/hannah', hannahController)

export default router