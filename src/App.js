import React, { Component } from 'react';
import './style/App.css';
import MonthlyBook from './MonthlyBook';


class App extends Component {
  render() {
    const books = this.props.books;
    const monthlyBookList = books.map((x) => {
      return (<MonthlyBook key={"#" + x.month} month={x.month} books={x.books}/>);
    });

    return (
      <div className="App">
      {monthlyBookList}
      </div>
    );
  }
}

export default App;
