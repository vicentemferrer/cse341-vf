import Book from '../db/books.schema.js';

async function listBooks(options = {}) {
  try {
    const result = await Book.find(options);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function createBook(book) {
  try {
    const result = await new Book(book).save();
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function readBook(id) {
  try {
    const result = await Book.findById(id);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function updateBook(id, book) {
  try {
    const result = await Book.findOneAndUpdate({ _id: id }, book, { new: true });
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteBook(id) {
  try {
    const result = await Book.findOneAndDelete({ _id: id }).then(() => ({
      message: 'Book successfully deleted'
    }));
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

export { listBooks, createBook, readBook, updateBook, deleteBook };
