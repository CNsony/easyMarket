(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{204:function(e,t,a){"use strict";var n=a(16),r=a(22),s=a(27),c=a(25),o=a(26),i=a(77),l=a(1),u=a.n(l),h=(a(207),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={isLoad:!1,isLoading:!1},a.handler=a.handler.bind(Object(i.a)(Object(i.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.handler(),window.addEventListener("scroll",this.handler)}},{key:"handler",value:function(){var e=this;if(this.state.isLoading)window.removeEventListener("scroll",this.handler);else{var t=this.props,a=t.offSetTop,n=t.realUrl,r=window.scrollY+document.documentElement.clientHeight-a;if(this.refs.imgLazyLoad.offsetTop<r){var s=new Image;s.src=n,this.setState({isLoading:!0}),new Promise(function(e,t){s.onload=function(){e(s)}}).then(function(t){e.setState({isLoad:!0})})}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handler)}},{key:"render",value:function(){var e=this.state.isLoad,t=this.props,a=t.realUrl,n=t.initUrl,r=e?a:n;return u.a.createElement("img",{ref:"imgLazyLoad",className:e?"imgLazyload loadEnd":"imgLazyload loading",src:r,alt:"imgLazyLoad"})}}]),t}(l.Component));h.defaultProps={offSetTop:40,initUrl:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},t.a=h},207:function(e,t,a){},208:function(e,t,a){"use strict";var n=a(16),r=a(22),s=a(27),c=a(25),o=a(26),i=a(1),l=a.n(i),u=a(210),h=(a(209),a(204)),p=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.goodsList;return l.a.createElement("div",{className:"goodsList"},e.map(function(e){return l.a.createElement(u.a,{to:"/goods/".concat(e.id),key:e.id,className:"goodsItem"},l.a.createElement("div",{className:"goodsItemImg"},l.a.createElement(h.a,{offSetTop:44,realUrl:e.list_pic_url})),l.a.createElement("div",{className:"goodsItemName"},e.name),l.a.createElement("div",{className:"goodsItemPrice"},"\uffe5",e.retail_price,"\u5143"))}))}}]),t}(i.Component);t.a=p},209:function(e,t,a){},210:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(4),c=a.n(s),o=a(19),i=a.n(o),l=a(46),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return a=n=h(this,e.call.apply(e,[this].concat(s))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,s=a.to;r?t.replace(s):t.push(s)}},h(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var s=this.context.router.history,c="string"===typeof t?Object(l.a)(t,null,null,s.location):t,o=s.createHref(c);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:o,ref:a}))},t}(r.a.Component);d.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=d},256:function(e,t,a){},257:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURf////b29ua/v64zM/Dw8N/f38p4eM3NzasrK9jY2Orq6uTk5NDQ0KwtLdyoqNOPj/36+u3R0bI8PMRqarpPT/Ph4cBfXxAqC/oAAAB2SURBVBjTlY1HFoQwDEOVguVQQ73/UYGEGTPL0Ubvu0jArSxBMkyiqmI46eIXnT44apgxBx0r+mHwZrYoZ9jt8YrZsb2CRTccqxXn9cC/SukXEpsvNkxwPbsHO/YOcGRbsCXd7ZGMZnUR7aw+RospwXzVlMGDJy9ABE2PslE1AAAAAElFTkSuQmCC"},258:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURf///+fn58/Pz68zM6gkJM3NzdLS0svLy/7+/vz7++3t7fLy8tra2qooKP79/eDg4Pf399fX19eZmbE5Oa0uLvz29s2AgPLd3cJlZdzc3OK2tt+vr+rLy7lNTcBhYfbq6rVDQ+bAwNOPj+jFxcZubsZwcLxXV9qiovnv74XOz3UAAACYSURBVBjTlY7ZFoMgDESDgMEFFbSgbd26//8XtnIEfO28zLlDMgHAifAygyjCEQ8B4TxPsfZBnmABTYqkclgkmItg7kG4MY6FgOy3KEJNAwoH4XtrVFCWVbw7KPhX0yPun/oexs54zJ7yBZZ2ekcjlxmqu6Rnh5q1dvMLa6/BthbNFgvrPrYFho1rR9/hzmdikt4On5h7j1/xZwfGevdtjgAAAABJRU5ErkJggg=="},259:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURf///+Li4vz8/NLPz8zMzOfn5+zs7MvLy87OztnZ2ff39/Ly8t3d3dLS0s3NzdXV1e/v7x5kADsAAAB6SURBVBjTlU5JEsAgDEKNBtf6/9fWse3Ea7lkIAkAbERmD4Oj6CFEjtS1fcKkTpSu8RFq0GRjL7aeKBXwXd1nM1hwSbMYuZDP4JbxF9ns4HNY/s6oBJTB+FKnfWVN4XzqaC+7p4ZqY93tRRUm2GPiiEeOynBHCd/40htqjAOfArDeuwAAAABJRU5ErkJggg=="},260:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchData",function(){return N}),a.d(n,"changeParmas",function(){return j}),a.d(n,"resetParmas",function(){return R}),a.d(n,"changeSearchParmas",function(){return I}),a.d(n,"changeSortParmas",function(){return P}),a.d(n,"changeCategoryIdParmas",function(){return T});var r=a(7),s=a(5),c=a.n(s),o=a(44),i=a(16),l=a(22),u=a(27),h=a(25),p=a(26),d=a(1),f=a.n(d),m=a(203),y=(a(256),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"inputChange",value:function(e){this.props.change(e.currentTarget.value)}},{key:"submitInput",value:function(e){var t=this.props.submit,a=e.currentTarget.value.replace(/(^\s*)|(\s*$)/g,"");13===e.nativeEvent.keyCode&&""!==a&&(t(a),this.refs.inputRef.blur())}},{key:"cancelInput",value:function(){this.refs.inputRef.blur(),this.props.cancel()}},{key:"chooseItem",value:function(e){this.props.chooseItem(e)}},{key:"inputFocus",value:function(e){this.props.focus(e.currentTarget.value)}},{key:"goBack",value:function(){this.props.goBack()}},{key:"render",value:function(){var e=this,t=this.props,a=t.searchList,n=t.value,r=t.placeholder;return f.a.createElement("div",{className:"Input"},f.a.createElement("div",{className:"searchInputWrap"},f.a.createElement("div",{className:"goBack",onClick:this.goBack.bind(this)},f.a.createElement("i",{className:"iconfont icon-i-left"})),f.a.createElement("div",{className:"icon"},f.a.createElement("i",{className:"iconfont icon-search"})),f.a.createElement("input",{ref:"inputRef",type:"text",value:n,onFocus:this.inputFocus.bind(this),placeholder:r,onChange:this.inputChange.bind(this),className:"searchInput",onKeyDown:this.submitInput.bind(this)}),f.a.createElement("div",{className:"cancelSearch",onClick:this.cancelInput.bind(this)},"\u53d6\u6d88")),a.length>0?f.a.createElement("ul",{className:"searchList"},a.map(function(t,a){return f.a.createElement("li",{className:"searchItem",key:a,onClick:e.chooseItem.bind(e,t)},t)})):null)}}]),t}(d.Component)),A=a(208),g=a(8),v=a(257),b=a.n(v),k=a(258),E=a.n(k),O=a(259),C=a.n(O),S=a(21),L=a(35),w=(a(260),a(2));function N(e){return{type:w.a.GOODSSEARCH_GETDATA_REQUEST,parmas:e}}function j(e){return Object(r.a)({type:w.a.GOODSSEARCH_CHANGE_PARMAS},e)}function R(){return{type:w.a.GOODSSEARCH_RESET_STATE}}function I(e){return Object(r.a)({type:w.a.GOODSSEARCH_CHANGE_SEARCHVAL_PARMAS},e)}function P(e){return Object(r.a)({type:w.a.GOODSSEARCH_CHANGE_SORT_PARMAS},e)}function T(e){return Object(r.a)({type:w.a.GOODSSEARCH_CHANGE_CATEGORYID_PARMAS},e)}var B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={placeholder:"",historyKeywordList:[],hotKeywordList:[],searchKeyWordList:[],isOpenCateGoryList:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.onclick=function(t){t.target.className.includes("searchConditionCategoryWrap")||t.target.className.includes("chooseCategory")||!e.state.isOpenCateGoryList||e.setState({isOpenCateGoryList:!1})}}},{key:"componentWillUnmount",value:function(){document.onclick=!1}},{key:"componentWillMount",value:function(){this.getInitData()}},{key:"getInitData",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t,a,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.getGoodsSearchMsg();case 3:t=e.sent,a=t.defaultKeyword.keyword,n=t.historyKeywordList,r=t.hotKeywordList,this.setState({placeholder:a,historyKeywordList:n,hotKeywordList:r}),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"goBack",value:function(){(0,this.props.history.go)(-1)}},{key:"search",value:function(e){var t=this.props,a=t.actions.fetchData,n=t.searchVal;this.props.actions.resetParmas(),this.props.actions.changeSearchParmas({searchVal:e}),a({searchVal:n,sortType:1,priceSortStatus:"default",searchCategoryId:0,page:1,size:100}),this.getInitData()}},{key:"changeVal",value:function(){var e=Object(o.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.props.actions.changeSearchParmas({searchVal:t}),this.setState({searchKeyWordList:[]}),!t){e.next=8;break}return e.next=6,g.a.getGoodsSearchKey({keyword:t});case 6:a=e.sent,this.setState({searchKeyWordList:a});case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.props.actions.resetParmas()}},{key:"inputFocus",value:function(){var e=Object(o.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({searchKeyWordList:[]}),!t){e.next=6;break}return e.next=4,g.a.getGoodsSearchKey({keyword:t});case 4:a=e.sent,this.setState({searchKeyWordList:a});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"chooseItem",value:function(e){this.props.actions.resetParmas(),this.props.actions.changeSearchParmas({searchVal:e});var t=e;(0,this.props.actions.fetchData)({searchVal:t,sortType:1,priceSortStatus:"default",searchCategoryId:0,page:1,size:100}),this.getInitData(),this.setState({searchKeyWordList:[]})}},{key:"changeSortType",value:function(e){var t=this.props,a=t.actions.fetchData,n=t.searchVal,r=t.searchCategoryId,s=t.searchCategoryList,c=1===e?0:1===this.props.priceSortStatus?-1:1,o=e;this.props.actions.changeSortParmas({sortType:o,priceSortStatus:c}),a({searchVal:n,sortType:o,priceSortStatus:c,searchCategoryId:r,page:1,size:100,searchCategoryList:s})}},{key:"setSearcCategoryId",value:function(e){var t=this.props,a=t.actions.fetchData,n=t.priceSortStatus,r=t.sortType,s=t.searchVal,c=t.searchCategoryList,o=e;this.props.actions.changeCategoryIdParmas({searchCategoryId:e}),a({searchVal:s,sortType:r,priceSortStatus:n,searchCategoryId:o,page:1,size:100,searchCategoryList:c}),this.setState({isOpenCateGoryList:!1})}},{key:"changeIsOpenCategory",value:function(){this.setState({isOpenCateGoryList:!this.state.isOpenCateGoryList})}},{key:"deleteHistory",value:function(){var e=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.getDeleteGoodsSearchHistory({});case 3:this.getInitData(),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.isOpenCateGoryList,n=t.placeholder,r=t.historyKeywordList,s=t.hotKeywordList,c=t.searchKeyWordList,o=this.props,i=o.searchVal,l=o.sortType,u=o.priceSortStatus,h=o.goodsList,p=o.searchCategoryId,d=o.searchCategoryList;return f.a.createElement("div",{className:"searchPage"},f.a.createElement("div",{className:"searchFix"},f.a.createElement(y,{submit:this.search.bind(this),goBack:this.goBack.bind(this),focus:this.inputFocus.bind(this),searchList:c,cancel:this.cancel.bind(this),change:this.changeVal.bind(this),chooseItem:this.chooseItem.bind(this),placeholder:n,value:i})),i.length||h.length?null:f.a.createElement("div",{className:"searchMsg"},r.length>0?f.a.createElement("div",{className:"searchItemWrap"},f.a.createElement("div",{className:"title"},"\u5386\u53f2\u8bb0\u5f55",f.a.createElement("i",{className:"iconfont icon-delete",onClick:this.deleteHistory.bind(this)})),f.a.createElement("div",{className:"listWrap"},r.map(function(t){return f.a.createElement("button",{className:"listItem",key:t,onClick:e.chooseItem.bind(e,t)},t)}))):null,s.length>0?f.a.createElement("div",{className:"searchItemWrap"},f.a.createElement("div",{className:"title"},"\u70ed\u95e8\u641c\u7d22"),f.a.createElement("div",{className:"listWrap"},s.map(function(t){return f.a.createElement("button",{className:t.is_hot?"listItem active":"listItem",key:t.keyword,onClick:e.chooseItem.bind(e,t.keyword)},t.keyword)}))):null),h.length?f.a.createElement("div",{className:"searchGoods"},f.a.createElement("div",{className:"searchConditionWrap"},f.a.createElement("div",{className:"searchCondition"},f.a.createElement("div",{className:1===l?"active":"",onClick:this.changeSortType.bind(this,1)},"\u7efc\u5408"),f.a.createElement("div",{className:2===l?"active":"",onClick:this.changeSortType.bind(this,2)},"\u4ef7\u683c",f.a.createElement("img",{src:0===u?C.a:u>0?b.a:E.a,alt:"sort",className:"sortPrice"})),f.a.createElement("div",{className:"chooseCategory",onClick:this.changeIsOpenCategory.bind(this)},d[d.findIndex(function(e){return e.id===p})].name+"\u5206\u7c7b")),a?f.a.createElement("div",{className:"searchConditionCategoryWrap onePx_top"},d.map(function(t){return f.a.createElement("button",{key:t.id,className:"categoryListItem ".concat(t.id===p?"active":""),onClick:e.setSearcCategoryId.bind(e,t.id)},t.name)})):null),f.a.createElement(A.a,{goodsList:h})):null)}}]),t}(d.Component);t.default=Object(m.a)(Object(L.b)(function(e,t){return Object(r.a)({},e.goodsSearch)},function(e){return{actions:Object(S.b)(n,e)}})(B))}}]);
//# sourceMappingURL=7.abc76bc3.chunk.js.map