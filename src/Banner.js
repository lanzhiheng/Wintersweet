import React, {Component} from 'react';
import './Banner.css';

class Photo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <img id="photo" src="/lan.jpg"/>
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
      <p className="concat"><i className="fa fa-phone" aria-hidden="true"></i>13751852549</p>
      <p className="concat"><i className="fa fa-envelope" aria-hidden="true"></i>hengrj@126.com</p>
      <br />
      <p className="concat"><i className="fa fa-rss" aria-hidden="true"></i>jianshu.com/u/a8522ac98584</p>
      <p className="concat"><i className="fa fa-github" aria-hidden="true"></i>github.com/lanzhiheng</p>
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
