import { Router } from 'express';

import { getProfileData } from '../controllers/professional.controller.js';

const router = new Router();

router.get('/', getProfileData);

export default router;
