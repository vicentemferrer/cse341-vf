import BooksCollection from '../models/books.model.js';

function getBooks(req, res) {
  const books = BooksCollection.getAllBooks();

  return res.json(books);
}

function getBook(req, res) {
  const { isbn } = req.params;

  const book = BooksCollection.getBook(isbn);

  return res.json(book);
}

function addBook(req, res) {
  const { body } = req;

  console.log(body);

  BooksCollection.addBook(body);

  return res.send('Book added to database.');
}

function editBook(req, res) {
  const {
    body,
    params: { isbn }
  } = req;

  BooksCollection.editBook(isbn, body);

  return res.send('Book edited.');
}

function deleteBook(req, res) {
  const { isbn } = req.params;

  BooksCollection.deleteBook(isbn);

  return res.send('Book deleted.');
}

export { getBooks, getBook, addBook, editBook, deleteBook };
