/**
 * User: guyunxiang
 * Date: 16-2-26
 * Time: 下午5:53
 * Description:TODO
 */

var HeaderComponent = React.createClass({
  render(){
    return (
      <header class="ui-header ui-header-stable ui-border-b">
        <div className="header">
          <div className="search">
            <span>寻找宝贝店铺</span>
          </div>
        </div>
      </header>
    )
  }
});

var BannerComponent = React.createClass({

  componentDidMount(){
    window.addEventListener('load', function () {
      var slider = new fz.Scroll('.ui-slider', {
        role: 'slider',
        indicator: true,
        autoplay: true,
        interval: 5000
      });
    })
  },

  render(){
    return (
      <div className="ui-slider">
        <ul className="ui-slider-content">
          <li className="current">
            <img src="images/TB1cMD8LFXXXXbLXXXXSutbFXXX.jpg_q50.jpg" alt=""/>
          </li>
          <li>
            <img src="images/TB1Gqn_LFXXXXbnXFXXdIns_XXX-1125-352.jpg_q50.jpg" alt=""/>
          </li>
          <li>
            <img src="images/TB1V1TfLFXXXXaYXVXXdIns_XXX-1125-352.jpg_q50.jpg" alt=""/>
          </li>
        </ul>
      </div>
    )
  }
});

var ModulesComponent = React.createClass({
  // 初始化头条内容
  getInitialState(){
    return {
      type: '最新',
      text: '刘海造型 这个样子更美！'
    }
  },
  // 定时更改头条滚动字母
  componentDidMount(){
    var toutiaoArray = [{
      "title": "最热",
      "text": "宅在家里，最正确的穿着"
    }, {
      "title": "推荐",
      "text": "川剧有句话叫...绝活"
    }, {
      "title": "最新",
      "text": "刘海造型 这个样子更美！"
    }];
    var i = 0;
    this.timer = setInterval(function () {
      (i > 2) ? i = 0 : 0;
      this.setState({
        type: toutiaoArray[i]['title'],
        text: toutiaoArray[i]['text']
      });
      i = i + 1;
    }.bind(this), 3000);
  },
  render() {
    return (
      <div>
        <ul className="ui-row ui-whitespace">
          <li className="ui-col ui-col-25 modules center-align">
            <a href="#">
              <img src="images/TB1eSyDGFXXXXaRXVXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">天猫</p>
            </a>
          </li>
          <li className="ui-col ui-col-25 modules center-align">
            <a href="#">
              <img src="images/TB1unlMIVXXXXauXXXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">聚划算</p>
            </a>
          </li>
          <li className="ui-col ui-col-25  modules center-align">
            <a href="#">
              <img src="images/TB1oq4xHXXXXXbxXpXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">淘生活</p>
            </a>
          </li>
          <li className="ui-col ui-col-25  modules center-align">
            <a href="#">
              <img src="images/TB1QeiDGFXXXXb8XVXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">淘点点</p>
            </a>
          </li>
        </ul>
        <ul className="ui-row ui-whitespace">
          <li className="ui-col ui-col-25 modules center-align">
            <a href="#">
              <img src="images/TB1pAV7HXXXXXX5aXXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">充值</p>
            </a>
          </li>
          <li className="ui-col ui-col-25 modules center-align">
            <a href="#">
              <img src="images/TB1GafkKVXXXXcLXFXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">阿里旅行</p>
            </a>
          </li>
          <li className="ui-col ui-col-25  modules center-align">
            <a href="#">
              <img src="images/TB1hW9KGFXXXXXLXpXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">领金币</p>
            </a>
          </li>
          <li className="ui-col ui-col-25 modules center-align">
            <a href="#">
              <img src="images/TB1Ed9LGFXXXXc3XXXXszjdGpXX-140-140.png" alt=""/>
              <p className="center-align">分类</p>
            </a>
          </li>
        </ul>
        <div className="toutiao">
          <ul className="ui-row">
            <li className="ui-col ui-col-25 toutiao-left">
              <img src="images/toutiao.png" alt=""/>
              <div className="toutiao-border"></div>
            </li>
            <li className="ui-col ui-col-75 toutiao-right">
              <span className="toutiao-type">{this.state.type}</span>
              <span className="toutiao-txt">{this.state.text}</span>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
    )
  }
});

var DefaultComponent = React.createClass({
  render(){
    return (
      <div className="default">
        <ul className="ui-row-flex">
          <li className="ui-col ui-col-2 ui-flex ui-flex-align-end">
            <a href="#">
              <img src="images/TB1gKoBLFXXXXXvXXXXXXXXXXXX-432-567.jpg_q50.jpg" alt=""/>
            </a>
          </li>
          <li className="ui-col ui-col-3 default-right">
            <ul className="ui-row-flex ui-flex ui-flex-pack-center">
              <li className="ui-col ui-col-3">
                <a href="#">
                  <img src="images/TB1rOvVHFXXXXXLXFXXbcAH0VXX-396-216.png" alt=""/>
                </a>
              </li>
              <li className="ui-col ui-col-2">
                <a href="#">
                  <img className="default-right-top-right" src="images/TB1C116HXXXXXXtXXXXXXXXXXXX.jpg" alt=""/>
                </a>
              </li>
            </ul>
            <ul className="ui-row-flex default-right-bottom">
              <li className="ui-col ui-col">
                <a href="#">
                  <img src="images/TB21nQ2eVXXXXcDXpXXXXXXXXXX_!!5-2-subaru.png" alt=""/>
                </a>
              </li>
              <li className="ui-col ui-col default-right-bottom-right">
                <a href="#">
                  <img src="images/TB1YubuKFXXXXatXFXXXXXXXXXX-333-324.png" alt=""/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
});

var RecommendComponent = React.createClass({
  getInitialState(){
    return {
      DomArray: []
    }
  },
  componentDidMount(){
    $.get('api/data.json', function (res) {
      var DomArray = [];
      for (var i = 0; i < res.length; i++) {
        // 生成块标题DOM
        if (res[i].title) {
          var DomTitle = [];
          DomTitle.push(
            <div className="Recommend_title">
              <ul className="ui-row-flex ui-whitespace ui-flex ui-flex-align-center">
                <li className="ui-col ui-col-2">
                  <div className="Recommend_line"></div>
                </li>
                <li className="ui-col ui-col-1 Recommend_title_title">
                  <ul className="ui-row-flex">
                    <li className="ui-col ui-col-2">
                      <img className="Recommend_title_icon" src={res[i].title.icon} alt=""/>
                    </li>
                    <li className="ui-col ui-col-3">
                      <div className={res[i].title.style}>{res[i].title.title}</div>
                    </li>
                  </ul>
                </li>
                <li className="ui-col ui-col-2">
                  <div className="Recommend_line"></div>
                </li>
              </ul>
            </div>
          );
        }
        // 生成块内容DOM
        if (res[i].content) {
          var contentData = res[i].content;
          var row1 = [], row2 = [];
          // 遍历生成第一行数据
          for (var k = 0; k < contentData[0]['row'].length; k++) {
            row1.push(
              <li className={"ui-col ui-col-" + contentData[0]['row'][k].flex}>
                <img src={contentData[0]['row'][k].src} alt=""/>
              </li>
            );
          }
          // 遍历生成第二行数据
          for (var j = 0; j < contentData[1]['row'].length; j++) {
            row2.push(
              <li className={"ui-col ui-col-" + contentData[1]['row'][j].flex}>
                <img src={contentData[1]['row'][j].src} alt=""/>
              </li>
            );
          }
          var DomContent = [];
          DomContent.push(
            <div className="Recomment_content">
              <ul className="ui-row-flex">
                {row1}
              </ul>
              <ul className="ui-row-flex">
                {row2}
              </ul>
            </div>
          );
        }
        DomArray.push(DomTitle);
        DomArray.push(DomContent);
      }
      this.setState({
        DomArray: DomArray
      });
    }.bind(this));
  },
  render(){
    return (
      <div>
        {this.state.DomArray}
      </div>
    )
  }
});

var FooterComponent = React.createClass({
  render(){
    return (
      <footer className="ui-footer ui-footer-stable ui-border-t">
        <ul className="ui-tiled">
          <li>
            <div>
              <img src="images/tabs_home.png" alt=""/>
            </div>
            <i>首页</i>
          </li>
          <li>
            <div>
              <img src="images/tabs_logistics.png" alt=""/>
            </div>
            <i>物流</i>
          </li>
          <li>
            <div>
              <img src="images/tabs_car.png" alt=""/>
            </div>
            <i>购物车</i>
          </li>
          <li>
            <div>
              <img src="images/tabs_me.png" alt=""/>
            </div>
            <i>我的淘宝</i>
          </li>
          <li>
            <div>
              <img src="images/tabs_more.png" alt=""/>
            </div>
            <i>更多</i>
          </li>
        </ul>
      </footer>
    )
  }
});

ReactDOM.render(
  <div>
    <HeaderComponent />
    <BannerComponent />
    <ModulesComponent />
    <DefaultComponent />
    <RecommendComponent />
    <FooterComponent />
  </div>,
  document.getElementById('root')
);