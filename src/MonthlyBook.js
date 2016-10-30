import React, { Component } from 'react';
import BookEntity from './BookEntity';
import './style/MonthlyBook.css';

class MonthlyBook extends Component {
  render() {
    return (
      <div className="monthly-book">
      <h4>{"10月份"}</h4>
      <BookEntity />
      </div>
    )
  }
}

export default MonthlyBook;
