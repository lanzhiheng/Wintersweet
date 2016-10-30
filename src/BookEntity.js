import React, { Component } from 'react';
import './style/BookEntity.css'

class BookEntity extends Component {
  render() {
    return (
      <div className="book-entity">
      <strong>Name</strong><em>活法</em>
      <strong>Author</strong><em>稻盛和夫</em>
      <strong>State</strong><em>Finish</em>
      </div>
    );
  }
}

export default BookEntity;
