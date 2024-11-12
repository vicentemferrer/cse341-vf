import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import booksRoute from './src/routes/books.route.js';

const { HOST, PORT } = process.env;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', booksRoute);

app.listen(PORT || 4321, () => {
  console.log(`App listening on http://${HOST}:${PORT}`);
});
