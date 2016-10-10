import React, {Component} from 'react';
import './Banner.css';

class Photo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="photo">
      </div>
    )
  }
}


class PersonInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="person_info">
      <div>
      <h1>蓝智恒</h1>
      <h3>Web开发工程师</h3>
      </div>
      <div>
      <p className="concat">手机:13751852549</p>
      <p className="concat">邮箱:hengrj@126.com</p>
      </div>
      </div>
    )
  }
}

class Person extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="person">
      <Photo />
      <PersonInfo />
      </div>
    )
  }
}

export default class Banner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="banner">
      <Person />
      <div className="clearfloat"></div>
      </div>
    )
  }
}
