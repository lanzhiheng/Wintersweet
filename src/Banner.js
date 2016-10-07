import React, {Component} from 'react';
import './Banner.css';

class Photo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="photo"></div>
    )
  }
}


class PersonInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="person_info"></div>
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
      <Photo></Photo>
      <PersonInfo></PersonInfo>
      <div className="clearfloat"></div>
      </div>
    )
  }
}
