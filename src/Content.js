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
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>CSS</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
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
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      </div>
      </div>

      <div className="skill-style">
      <p>Ruby</p>
      <div className="skill-icon">
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
      <i className="fa fa-star fa-in"></i>
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
      <p> <b>1. 游戏管理系统: </b>基于Django+MySQL的游戏内容管理系统，主要用于方便运营对游戏数据进行管理。其中采用了Etcd作为配置管理中心，方便对一些配置进行灵活管理。另外为了快速开发也采用了BootStrap，JQuery等流行的前端框架。 </p>
      <p> <b>2. 游戏接口: </b>其中涉及比较多的项目，根据接口提供的功能不同而分属到不同的项目中去。主要技术栈是Tornado+MongoDB，能够处理异步请求。接口分别为，游戏充值，账号封停等功能提供服务。</p>
      <h4>Beansmile(2016-09~至今)</h4>
      <p> <b>1. 724星球页面: </b>技术栈 React + Redux + RubyOnRails，是一个前后端分离的微信页面项目，主要负责前端样式调整以及交互逻辑的实现。需要解决微信浏览器的一些兼容性问题。</p>
      <p> <b>2. WOWO项目: </b>技术栈 JQuery + RubyOnRails，是一个人才猎头网站，中途加入负责前端页面的样式调整。项目分为微信端页面以及PC端页面两套代码，主要负责微信端页面开发，以及微信页面相关的兼容问题。</p>
      <p> <b>3. 黑卡项目: </b>技术栈 JQuery + RubyOnRails，一个奢侈品展示的网站，负责板块页面的样式调整，项目中会负责一些后端的逻辑开发，包括Controller以及ERB方面的代码编写。</p>
      <p> <b>4. 大疆云课堂项目: </b>技术栈 JQuery + Camaleon，一个内容管理网站，需要支持视频，文章等内容的托管。主要负责前端项目结构的组织以及样式调整，了解了一些前端性能方面优化的知识。</p>
      <h4>业余项目</h4>
      <p> <b>1. 桌面端番茄钟: </b>基于Electron + Vue.js + Vuex搭建的桌面端番茄钟项目，目前还在开发阶段。</p>
      <p> <b>2. 个人博客系统: </b>基于Keystone.js + jQuery + mongoDB 搭建的个人博客网站，用于托管个人文章。</p>
      <p> <b>3. 爬虫程序: </b>基于 Node.js 构建的爬虫程序，主要负责爬取简书上特定作者的所有文章，解析后存进特定的数据库中，主要是为了方便自己文章的管理。</p>
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
      <p>程序员一枚，平时喜欢捣弄各种编程语言，天真地以为可以从中找到“最好的语言”，不知不觉中走了许多弯路，目前较为喜欢的语言是JavaScript跟Ruby。目前工作内容是样式方面的调整以及页面的交互方面比较多，在业余时间会用看看Ruby方面的知识，通过Rake写一些简单的任务。</p>
      <p>有合格的沟通能力，应该可以处理好跟产品之间的沟通问题。日常比较喜欢在博客上书写自己的一些生活感悟，热爱运动。</p>
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
      <Skill></Skill>
      <Experience></Experience>
      <Introduction></Introduction>
      </div>
    )
  }
}
