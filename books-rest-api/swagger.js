import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Books API',
    description: 'Lesson 04 Books REST API'
  },

  host: 'localhost:3000'
};

const output = './swagger.json';
const routes = ['./app.js'];

swaggerAutogen()(output, routes, doc);
