import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const books = require('./data/books.json');

ReactDOM.render(
  <App books={books}/>,
  document.getElementById('root')
);
