import { Router } from 'express';
import { createHandler } from 'graphql-http/lib/use/express';

import schema from '../models/graphql.schema.js';
import rootValue from '../controllers/graphql.controller.js';

const router = new Router();

router.use(
  '/',
  createHandler({
    schema,
    rootValue
  })
);

export default router;
