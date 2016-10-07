import React, {Component} from 'react';
import './Content.css';

class Position extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="position" className="info-block"></div>)
  }
}

class Skill extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="skill" className="info-block"></div>)
  }
}

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="experience" className="info-block"></div>)
  }
}


export default class Content extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="content">
      <Position></Position>
      <Skill></Skill>
      <Experience></Experience>
      </div>
    )
  }
}
