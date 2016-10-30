import React, { Component } from 'react';
import BookEntity from './BookEntity';
import './style/MonthlyBook.css';


class MonthlyBook extends Component {

  render() {
    const books = this.props.books;
    const bookList = books.map((x) => {
        return (<BookEntity key={x.name} book={x}/>);
    });
    return (
      <div className="monthly-book">
      <h4>{this.props.month}</h4>
      {bookList}
      </div>
    )
  }
}

export default MonthlyBook;
