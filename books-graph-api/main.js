import express from 'express';
import { connect } from 'mongoose';

import router from './src/routes/index.js';

const { HOST, PORT, MONGODB_URI } = process.env;

const app = express();

connect(MONGODB_URI);

app.use('/', router);

app.listen(PORT || 4321, () => {
  console.log(`App listening on http://${HOST}:${PORT}`);
});
