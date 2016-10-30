import React, { Component } from 'react';
import './style/BookEntity.css'

class BookEntity extends Component {

  render() {
    const book = this.props.book;
    return (
      <div className="book-entity">
      <strong>《{book.name}》</strong><strong>{book.author}</strong>  <strong>{book.state}</strong>
      </div>
    );
  }
}

export default BookEntity;
