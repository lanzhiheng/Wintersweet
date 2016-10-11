import React, {Component} from 'react';
import './Content.css';

class Position extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="position" className="info-block">
      <div className="left-block">
      <h2>求职意向</h2>
      </div>
      <div className="right-block">
      <p>
      在过去的公司中几乎在从事全栈方面的工作，从前端到运维都有所涉猎。后来在工作中发现前端开发并没有自己想象中恐怖，而且感觉越来越有意思，也希望自己也能够开发出更为合格的前端页面。
      </p>
      <p>
      于是，希望能够从事前端开发方面的工作，能够有机会更好地深入前端这个领域。在工作中可以参与开发更为美观的前端页面，并且写出更为规范的前端代码。
      </p>
      </div>
      <div className="clearfloat"></div>
      </div>
  )
  }
}

class Skill extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="skill" className="info-block">
      <div className="left-block">
      <h2>个人能力</h2>
      </div>
      <div className="right-block">
      <div className="skill-list">
      <p className="skill-style">Python
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">JavaScript
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">Html
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">Css
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">Linux
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">English
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">Writing
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      <p className="skill-style">Ruby
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </p>
      </div>

      </div>
      <div className="clearfloat" />
      </div>
  )
  }
}

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="experience" className="info-block">
      <div className="left-block">
      <h2>项目经验</h2>
      </div>
      <div className="right-block">
      <h4>擎天柱网络科技有限公司(2015-04~2016-08)</h4>
      <p className="exp-list"> 1. 参与实现基于Django+MySQL的内部考核系统的后台大部分业务逻辑，兼职该系统的前端页面开发。</p>
      <p className="exp-list"> 2. 实现基于Tornado+mongodb的游戏后台接口，其中涉及擎天柱君临天下游戏所要用到的游戏数据，充值，封停等方面的功能。</p>
      <h4>业余项目</h4>
      <p>1. 个人博客系统开发，基于Jekyll+Sass+JavaScript实现了自己的博客主页，因为想要专注前端，目前只采用了jekyll来做后台，并没有实现自己的专属后台。</p>
      <p>2. 基于 React的个人简历页面实现，目前所看到的简历洁面没有交互，主要是为了熟悉React这项技术，通过React来写基本骨架，还是CSS方面花费的时间比较多。</p>
      <p>3. 协助朋友开发基于Rails+MySQL的个人博客系统，编写项目前端方面的代码。现项目托管在github上(github.com/HelloJundy/maple)</p>
      </div>
      <div className="clearfloat" />
      </div>
  )
  }
}

class Introduction extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="experience" className="info-block">
      <div className="left-block">
      <h2>个人简介</h2>
      </div>
      <div className="right-block">
      <p>程序员一枚，平时喜欢捣弄各种编程语言，天真的以为可以从中寻找到“最好的语言”，不知不觉中走了许多弯路。在原来的公司工作有一年有余，一直在从事全栈方面的开发，从前端实现到项目部署都需要接手。渐渐地发现自己更为喜欢前端方面的开发。</p>
      <p>有合格的沟通能力，应该可以处理好跟产品之间的沟通问题。日常比较喜欢在博客上(lanzhiheng.github.io)书写自己的一些生活感悟，时常也会花时间在烹饪跟运动上。</p>
      <p>能够看懂英文文档，虽然现在前端方面的经验有所欠缺，但是我相信学习能力能够弥补我这方面的不足。</p>
      </div>
      <div className="clearfloat"></div>
      </div>
  )
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
      <Introduction></Introduction>
      </div>
    )
  }
}
