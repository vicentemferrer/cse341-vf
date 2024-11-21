import Author from '../db/author.schema.js';

async function listAuthors(options = {}) {
  try {
    const result = await Author.find(options);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function createAuthor(author) {
  try {
    const result = await new Author(author).save();
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function readAuthor(id) {
  try {
    const result = await Author.findById(id);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function updateAuthor(id, author) {
  try {
    const result = await Author.findOneAndUpdate({ _id: id }, author, { new: true });
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteAuthor(id) {
  try {
    const result = await Author.findOneAndDelete({ _id: id }).then(() => ({
      message: 'Author successfully deleted'
    }));
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

export { listAuthors, createAuthor, readAuthor, updateAuthor, deleteAuthor };
