import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Book {
    id: ID
    name: String
    pages: Int
    authorID: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int,
    books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID): Book
    author(id: ID): Author
    authors: [Author]
  }
  
  type Mutation {
    addAuthor(name: String, age: Int): Author
    addBook(name: String, pages: Int, authorID: String): Book
  }
`);

export default schema;
