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
      在过去一年的工作中几乎在从事全栈方面的工作，从前端开发到运维部署都有所涉猎。后来在工作中发现前端开发并没有自己想象中恐怖，而且感觉越来越有意思，渐渐地开始YY自己能够开发出更为合格的前端页面。
      </p>
      <p>
      因此，我希望能够从事前端开发方面的工作，能够更深入地了解前端这个领域，累积更多的经验。在工作中可以参与开发更为美观的前端页面，并且写出更为规范的前端代码。
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
      <div className="skill-style">
      <p>Python</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>JavaScript</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>Html</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>Css</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>Linux</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>English</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>Writing</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>Ruby</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>
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
      <h4>擎天柱网络科技有限公司(2015-05~2016-09)</h4>
      <p> <b>1. 考核系统: </b>参与实现基于Django+MySQL的内部考核系统的后台大部分业务逻辑，并且兼职该系统的前端页面开发。其中涉及的前端框架包括BootStrap，JQuery，Ajax等等。</p>
      <p> <b>2. 游戏管理系统: </b>基于Django+MySQL的游戏内容管理系统，主要用于方便运营对游戏数据进行管理。其中采用了Etcd作为配置管理中心，方便对一些配置进行灵活管理。另外为了快速开发也采用了BootStrap，JQuery等流行的前端框架。 </p>
      <p> <b>3. 游戏接口: </b>其中涉及比较多的项目，根据接口提供的功能不同而分属到不同的项目中去。主要技术栈是Tornado+MongoDB，能够处理异步请求。接口分别为，游戏充值，账号封停等功能提供服务。</p>
      <h4>业余项目</h4>
      <p> <b>1. 个人博客系统: </b>基于Jekyll+Sass+JavaScript实现了自己的博客主页。为了不引入不必要的东西，没有采用JQuery，BootStrap等较为流行的前端框架。通过媒体查询功能在一定程度上实现了响应式布局。为了专注前端开发，所以目前只采用了Jekyll来做后台，并没有实现自己的专属后台。</p>
      <p> <b>2. 简历页面: </b>基于 React的个人简历页面实现，目前所看到的简历界面没有交互，主要是为了熟悉React这项技术，通过React来写基本骨架。整个项目在Css布局排版方面花费的时间比较多。</p>
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
      <p>程序员一枚，平时喜欢捣弄各种编程语言，天真地以为可以从中找到“最好的语言”，不知不觉中走了许多弯路，目前较为喜欢的语言是JavaScript跟Ruby。在原来的公司工作有一年多，一直在从事全栈方面的开发，从前端实现到项目部署都需要接手。渐渐地发现自己更为喜欢前端方面的开发。</p>
      <p>有合格的沟通能力，应该可以处理好跟产品之间的沟通问题。日常比较喜欢在博客上(lanzhiheng.github.io)书写自己的一些生活感悟，时常也会花时间在烹饪跟运动上。</p>
      <p>能够看懂英文文档，虽然现在前端方面的经验有所欠缺，但是我相信学习能力能够在某种程度上弥补我这方面的不足。</p>
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
