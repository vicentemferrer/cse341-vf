import { Router } from 'express';

import graphRoute from './graphql.route.js';

const router = new Router();

router.use('/graphql', graphRoute);

export default router;
