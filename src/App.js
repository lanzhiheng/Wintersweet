import React, { Component } from 'react';
import './style/App.css';

import MonthlyBook from './MonthlyBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonthlyBook />
      </div>
    );
  }
}

export default App;
