import {
  listBooks,
  createBook,
  readBook
  //updateBook,
  //deleteBook
} from '../models/books.model.js';
import { createAuthor, listAuthors, readAuthor } from '../models/author.model.js';

async function books() {
  return await listBooks();
}

async function book({ id }) {
  const book = await readBook(id);

  book.author = readAuthor.bind(null, book.authorID);

  delete book.authorID;

  return book;
}

async function author({ id }) {
  const author = await readAuthor(id);

  author.books = listBooks.bind(null, { authorID: id });

  return author;
}

async function authors() {
  return await listAuthors();
}

async function addAuthor({ name, age }) {
  return await createAuthor({ name, age });
}

async function addBook({ name, pages, authorID }) {
  return await createBook({ name, pages, authorID });
}

export default { books, book, author, authors, addAuthor, addBook };
