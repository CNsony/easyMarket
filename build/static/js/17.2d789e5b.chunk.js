(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{204:function(e,t,a){"use strict";var n=a(16),r=a(22),c=a(27),i=a(25),o=a(26),s=a(77),l=a(1),u=a.n(l),d=(a(207),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={isLoad:!1,isLoading:!1},a.handler=a.handler.bind(Object(s.a)(Object(s.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.handler(),window.addEventListener("scroll",this.handler)}},{key:"handler",value:function(){var e=this;if(this.state.isLoading)window.removeEventListener("scroll",this.handler);else{var t=this.props,a=t.offSetTop,n=t.realUrl,r=window.scrollY+document.documentElement.clientHeight-a;if(this.refs.imgLazyLoad.offsetTop<r){var c=new Image;c.src=n,this.setState({isLoading:!0}),new Promise(function(e,t){c.onload=function(){e(c)}}).then(function(t){e.setState({isLoad:!0})})}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handler)}},{key:"render",value:function(){var e=this.state.isLoad,t=this.props,a=t.realUrl,n=t.initUrl,r=e?a:n;return u.a.createElement("img",{ref:"imgLazyLoad",className:e?"imgLazyload loadEnd":"imgLazyload loading",src:r,alt:"imgLazyLoad"})}}]),t}(l.Component));d.defaultProps={offSetTop:40,initUrl:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},t.a=d},207:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchCount",function(){return r}),a.d(t,"fetchGoodsData",function(){return c});var n=a(2);function r(e){return{type:n.a.GOODS_COUNT_GETDATA_REQUSET,parmas:e}}function c(e){return{type:n.a.GOODS_LIST_GETDATA_REQUSET,parmas:e}}},244:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchInitData",function(){return b}),a.d(n,"fetchCatelogMsg",function(){return g}),a.d(n,"changeIdAndTabIndex",function(){return v});var r=a(7),c=(a(225),a(227)),i=a(16),o=a(22),s=a(27),l=a(25),u=a(26),d=a(1),f=a.n(d),m=a(35),h=a(21),p=a(2);function b(e){return{type:p.a.CATALOG_INITDATA_GETDATA_REQUEST,parmas:e}}function g(e){return{type:p.a.CATALOG_CATALOGMSG_GETDATA_REQUEST,parmas:e}}function v(e){return Object(r.a)({type:p.a.CATALOG_CHANGEIDANDTABINDEX},e)}var E=a(211),y=a(210),T=a(203),L=(a(244),a(204)),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).saveRef=function(e){a.refDom=e},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.actions.fetchInitData,a=e.actions1.fetchCount;t({catelogId:e.catelogId}),a()}},{key:"clickTab",value:function(e,t){var a=e.id,n=this.props.actions,r=n.fetchCatelogMsg,c=n.changeIdAndTabIndex;r({id:a}),c({catelogId:a,tabIndex:t})}},{key:"computedTabsProperty",value:function(){var e=this.props.cateLogList,t=0,a=0;if(e.length>0&&this.refDom){var n=this.refDom.clientHeight;a=42*e.length<n?42*e.length:n,t=Math.floor(n/42)}return{page:t,tabsHeight:a}}},{key:"toSearch",value:function(){this.props.history.push("/goodsSearch")}},{key:"render",value:function(){var e=this.props,t=e.cateLogList,a=e.activeCatalogMsg,n=e.count,r=e.tabIndex,i=this.computedTabsProperty(),o=i.page,s=i.tabsHeight;return f.a.createElement(d.Fragment,null,f.a.createElement("div",{className:"searchWrap"},f.a.createElement("div",{className:"searchInput",onClick:this.toSearch.bind(this)},f.a.createElement("i",{className:"fa fa-search"}),f.a.createElement("span",null,"\u641c\u7d22\u5546\u54c1\uff0c\u5171".concat(n,"\u6b3e\u597d\u7269")))),f.a.createElement("div",{id:"tabsWrap",ref:this.saveRef},f.a.createElement("div",{style:{height:s+"px"}},f.a.createElement(c.a,{tabs:t,tabBarUnderlineStyle:{left:"0",right:"100%"},onTabClick:this.clickTab.bind(this),page:r,tabDirection:"vertical",tabBarPosition:"left",renderTabBar:function(e){return f.a.createElement(c.a.DefaultTabBar,Object.assign({},e,{page:o,renderTab:function(e){return f.a.createElement("div",{className:"tabItem"},e.name)}}))}}))),f.a.createElement("div",{className:"categogContet"},f.a.createElement("div",{className:"categoryWrap",style:{backgroundImage:"url(".concat(a.wap_banner_url,")")}},a.front_name),f.a.createElement("div",{className:"categoryTitle"},f.a.createElement("div",null),a.name,"\u5206\u7c7b",f.a.createElement("div",null)),f.a.createElement("div",{className:"subCategory"},"subCategoryList"in a?a.subCategoryList.map(function(e){return f.a.createElement(y.a,{className:"subCategoryItem",to:"/categorys/".concat(e.id),key:e.id},f.a.createElement(L.a,{offSetTop:44,realUrl:e.wap_banner_url}),f.a.createElement("div",{className:"subCategoryItemName"},e.name))}):null)))}}]),t}(d.Component);t.default=Object(T.a)(Object(m.b)(function(e,t){return Object(r.a)({},e.catalog,{count:e.goods.count})},function(e){return{actions:Object(h.b)(n,e),actions1:Object(h.b)(E,e)}})(O))}}]);
//# sourceMappingURL=17.2d789e5b.chunk.js.map