const express = require('express');
const app = express();
const port = 4000;

const BooksCtrl = require('./controllers/books_controller');

app.use(express.json());

app.get('/api/books', BooksCtrl.read);

app.listen(port, () => console.log('hello there'));