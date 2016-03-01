/**
 * User: guyunxiang
 * Date: 16-2-26
 * Time: 下午5:53
 * Description:TODO
 */

var HeaderComponent = React.createClass({
  displayName: "HeaderComponent",

  render() {
    return React.createElement(
      "header",
      { "class": "ui-header ui-header-stable ui-border-b" },
      React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "div",
          { className: "search" },
          React.createElement(
            "span",
            null,
            "寻找宝贝店铺"
          )
        )
      )
    );
  }
});

var BannerComponent = React.createClass({
  displayName: "BannerComponent",


  componentDidMount() {
    window.addEventListener('load', function () {
      var slider = new fz.Scroll('.ui-slider', {
        role: 'slider',
        indicator: true,
        autoplay: true,
        interval: 5000
      });
    });
  },

  render() {
    return React.createElement(
      "div",
      { className: "ui-slider" },
      React.createElement(
        "ul",
        { className: "ui-slider-content" },
        React.createElement(
          "li",
          { className: "current" },
          React.createElement("img", { src: "images/TB1cMD8LFXXXXbLXXXXSutbFXXX.jpg_q50.jpg", alt: "" })
        ),
        React.createElement(
          "li",
          null,
          React.createElement("img", { src: "images/TB1Gqn_LFXXXXbnXFXXdIns_XXX-1125-352.jpg_q50.jpg", alt: "" })
        ),
        React.createElement(
          "li",
          null,
          React.createElement("img", { src: "images/TB1V1TfLFXXXXaYXVXXdIns_XXX-1125-352.jpg_q50.jpg", alt: "" })
        )
      )
    );
  }
});

var ModulesComponent = React.createClass({
  displayName: "ModulesComponent",

  // 初始化头条内容
  getInitialState() {
    return {
      type: '最新',
      text: '刘海造型 这个样子更美！'
    };
  },
  // 定时更改头条滚动字母
  componentDidMount() {
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
      i > 2 ? i = 0 : 0;
      this.setState({
        type: toutiaoArray[i]['title'],
        text: toutiaoArray[i]['text']
      });
      i = i + 1;
    }.bind(this), 3000);
  },
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        { className: "ui-row ui-whitespace" },
        React.createElement(
          "li",
          { className: "ui-col ui-col-25 modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1eSyDGFXXXXaRXVXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "天猫"
            )
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-25 modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1unlMIVXXXXauXXXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "聚划算"
            )
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-25  modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1oq4xHXXXXXbxXpXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "淘生活"
            )
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-25  modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1QeiDGFXXXXb8XVXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "淘点点"
            )
          )
        )
      ),
      React.createElement(
        "ul",
        { className: "ui-row ui-whitespace" },
        React.createElement(
          "li",
          { className: "ui-col ui-col-25 modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1pAV7HXXXXXX5aXXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "充值"
            )
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-25 modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1GafkKVXXXXcLXFXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "阿里旅行"
            )
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-25  modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1hW9KGFXXXXXLXpXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "领金币"
            )
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-25 modules center-align" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1Ed9LGFXXXXc3XXXXszjdGpXX-140-140.png", alt: "" }),
            React.createElement(
              "p",
              { className: "center-align" },
              "分类"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "toutiao" },
        React.createElement(
          "ul",
          { className: "ui-row" },
          React.createElement(
            "li",
            { className: "ui-col ui-col-25 toutiao-left" },
            React.createElement("img", { src: "images/toutiao.png", alt: "" }),
            React.createElement("div", { className: "toutiao-border" })
          ),
          React.createElement(
            "li",
            { className: "ui-col ui-col-75 toutiao-right" },
            React.createElement(
              "span",
              { className: "toutiao-type" },
              this.state.type
            ),
            React.createElement(
              "span",
              { className: "toutiao-txt" },
              this.state.text
            )
          )
        )
      ),
      React.createElement("div", { className: "line" })
    );
  }
});

var DefaultComponent = React.createClass({
  displayName: "DefaultComponent",

  render() {
    return React.createElement(
      "div",
      { className: "default" },
      React.createElement(
        "ul",
        { className: "ui-row-flex" },
        React.createElement(
          "li",
          { className: "ui-col ui-col-2 ui-flex ui-flex-align-end" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/TB1gKoBLFXXXXXvXXXXXXXXXXXX-432-567.jpg_q50.jpg", alt: "" })
          )
        ),
        React.createElement(
          "li",
          { className: "ui-col ui-col-3 default-right" },
          React.createElement(
            "ul",
            { className: "ui-row-flex ui-flex ui-flex-pack-center" },
            React.createElement(
              "li",
              { className: "ui-col ui-col-3" },
              React.createElement(
                "a",
                { href: "#" },
                React.createElement("img", { src: "images/TB1rOvVHFXXXXXLXFXXbcAH0VXX-396-216.png", alt: "" })
              )
            ),
            React.createElement(
              "li",
              { className: "ui-col ui-col-2" },
              React.createElement(
                "a",
                { href: "#" },
                React.createElement("img", { className: "default-right-top-right", src: "images/TB1C116HXXXXXXtXXXXXXXXXXXX.jpg", alt: "" })
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "ui-row-flex default-right-bottom" },
            React.createElement(
              "li",
              { className: "ui-col ui-col" },
              React.createElement(
                "a",
                { href: "#" },
                React.createElement("img", { src: "images/TB21nQ2eVXXXXcDXpXXXXXXXXXX_!!5-2-subaru.png", alt: "" })
              )
            ),
            React.createElement(
              "li",
              { className: "ui-col ui-col default-right-bottom-right" },
              React.createElement(
                "a",
                { href: "#" },
                React.createElement("img", { src: "images/TB1YubuKFXXXXatXFXXXXXXXXXX-333-324.png", alt: "" })
              )
            )
          )
        )
      )
    );
  }
});

var RecommendComponent = React.createClass({
  displayName: "RecommendComponent",

  getInitialState() {
    return {
      DomArray: []
    };
  },
  componentDidMount() {
    $.get('api/data.json', function (res) {
      var DomArray = [];
      for (var i = 0; i < res.length; i++) {
        // 生成块标题DOM
        if (res[i].title) {
          var DomTitle = [];
          DomTitle.push(React.createElement(
            "div",
            { className: "Recommend_title" },
            React.createElement(
              "ul",
              { className: "ui-row-flex ui-whitespace ui-flex ui-flex-align-center" },
              React.createElement(
                "li",
                { className: "ui-col ui-col-2" },
                React.createElement("div", { className: "Recommend_line" })
              ),
              React.createElement(
                "li",
                { className: "ui-col ui-col-1 Recommend_title_title" },
                React.createElement(
                  "ul",
                  { className: "ui-row-flex" },
                  React.createElement(
                    "li",
                    { className: "ui-col ui-col-2" },
                    React.createElement("img", { className: "Recommend_title_icon", src: res[i].title.icon, alt: "" })
                  ),
                  React.createElement(
                    "li",
                    { className: "ui-col ui-col-3" },
                    React.createElement(
                      "div",
                      { className: res[i].title.style },
                      res[i].title.title
                    )
                  )
                )
              ),
              React.createElement(
                "li",
                { className: "ui-col ui-col-2" },
                React.createElement("div", { className: "Recommend_line" })
              )
            )
          ));
        }
        // 生成块内容DOM
        if (res[i].content) {
          var contentData = res[i].content;
          var row1 = [],
              row2 = [];
          // 遍历生成第一行数据
          for (var k = 0; k < contentData[0]['row'].length; k++) {
            row1.push(React.createElement(
              "li",
              { className: "ui-col ui-col-" + contentData[0]['row'][k].flex },
              React.createElement("img", { src: contentData[0]['row'][k].src, alt: "" })
            ));
          }
          // 遍历生成第二行数据
          for (var j = 0; j < contentData[1]['row'].length; j++) {
            row2.push(React.createElement(
              "li",
              { className: "ui-col ui-col-" + contentData[1]['row'][j].flex },
              React.createElement("img", { src: contentData[1]['row'][j].src, alt: "" })
            ));
          }
          var DomContent = [];
          DomContent.push(React.createElement(
            "div",
            { className: "Recomment_content" },
            React.createElement(
              "ul",
              { className: "ui-row-flex" },
              row1
            ),
            React.createElement(
              "ul",
              { className: "ui-row-flex" },
              row2
            )
          ));
        }
        DomArray.push(DomTitle);
        DomArray.push(DomContent);
      }
      this.setState({
        DomArray: DomArray
      });
    }.bind(this));
  },
  render() {
    return React.createElement(
      "div",
      null,
      this.state.DomArray
    );
  }
});

var FooterComponent = React.createClass({
  displayName: "FooterComponent",

  render() {
    return React.createElement(
      "footer",
      { className: "ui-footer ui-footer-stable ui-border-t" },
      React.createElement(
        "ul",
        { className: "ui-tiled" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("img", { src: "images/tabs_home.png", alt: "" })
          ),
          React.createElement(
            "i",
            null,
            "首页"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("img", { src: "images/tabs_logistics.png", alt: "" })
          ),
          React.createElement(
            "i",
            null,
            "物流"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("img", { src: "images/tabs_car.png", alt: "" })
          ),
          React.createElement(
            "i",
            null,
            "购物车"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("img", { src: "images/tabs_me.png", alt: "" })
          ),
          React.createElement(
            "i",
            null,
            "我的淘宝"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("img", { src: "images/tabs_more.png", alt: "" })
          ),
          React.createElement(
            "i",
            null,
            "更多"
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(HeaderComponent, null),
  React.createElement(BannerComponent, null),
  React.createElement(ModulesComponent, null),
  React.createElement(DefaultComponent, null),
  React.createElement(RecommendComponent, null),
  React.createElement(FooterComponent, null)
), document.getElementById('root'));