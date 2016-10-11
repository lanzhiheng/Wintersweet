import React, { Component } from 'react';
import logo from './logo.svg';
import Banner from './Banner';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="resume">
      <Banner></Banner>
      <Content></Content>
      <div id="footer"></div>
      </div>
    );
  }
}

export default App;
