class BooksCollection {
  static #books = [];

  static getAllBooks() {
    return BooksCollection.#books;
  }

  static getBook(isbn) {
    return BooksCollection.#books.filter((book) => book.isbn === isbn)[0];
  }

  static addBook(book) {
    BooksCollection.#books.push(book);
  }

  static editBook(isbn, newBook) {
    BooksCollection.#books = BooksCollection.#books.map((book) =>
      book.isbn === isbn ? newBook : book
    );
  }

  static deleteBook(isbn) {
    BooksCollection.#books = BooksCollection.#books.filter((book) => book.isbn !== isbn);
  }
}

export default BooksCollection;
