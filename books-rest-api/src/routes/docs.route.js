import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import swaggerJSON from '../../swagger.json' with { type: 'json' };

const router = new Router();

router.use('/', serve);
router.get('/', setup(swaggerJSON));

export default router;
