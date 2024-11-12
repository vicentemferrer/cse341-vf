import { Router } from 'express';
import {
  getBooks,
  getBook,
  addBook,
  editBook,
  deleteBook
} from '../controllers/books.controller.js';

const router = new Router();

router.get('/books', getBooks);
router.get('/book/:isbn', getBook);
router.post('/book', addBook);
router.put('/book/:isbn', editBook);
router.delete('/book/:isbn', deleteBook);

export default router;
