(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{204:function(e,t,n){"use strict";var o=n(16),r=n(22),i=n(27),a=n(25),l=n(26),u=n(77),c=n(1),s=n.n(c),f=(n(207),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(a.a)(t).call(this,e))).state={isLoad:!1,isLoading:!1},n.handler=n.handler.bind(Object(u.a)(Object(u.a)(n))),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.handler(),window.addEventListener("scroll",this.handler)}},{key:"handler",value:function(){var e=this;if(this.state.isLoading)window.removeEventListener("scroll",this.handler);else{var t=this.props,n=t.offSetTop,o=t.realUrl,r=window.scrollY+document.documentElement.clientHeight-n;if(this.refs.imgLazyLoad.offsetTop<r){var i=new Image;i.src=o,this.setState({isLoading:!0}),new Promise(function(e,t){i.onload=function(){e(i)}}).then(function(t){e.setState({isLoad:!0})})}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handler)}},{key:"render",value:function(){var e=this.state.isLoad,t=this.props,n=t.realUrl,o=t.initUrl,r=e?n:o;return s.a.createElement("img",{ref:"imgLazyLoad",className:e?"imgLazyload loadEnd":"imgLazyload loading",src:r,alt:"imgLazyLoad"})}}]),t}(c.Component));f.defaultProps={offSetTop:40,initUrl:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},t.a=f},207:function(e,t,n){},210:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=n(4),a=n.n(i),l=n(19),u=n.n(l),c=n(46),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},p=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=f(this,e.call.apply(e,[this].concat(i))),o.handleClick=function(e){if(o.props.onClick&&o.props.onClick(e),!e.defaultPrevented&&0===e.button&&!o.props.target&&!d(e)){e.preventDefault();var t=o.context.router.history,n=o.props,r=n.replace,i=n.to;r?t.replace(i):t.push(i)}},f(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,a="string"===typeof t?Object(c.a)(t,null,null,i.location):t,l=i.createHref(a);return r.a.createElement("a",s({},o,{onClick:this.handleClick,href:l,ref:n}))},t}(r.a.Component);p.propTypes={onClick:a.a.func,target:a.a.string,replace:a.a.bool,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired,innerRef:a.a.oneOfType([a.a.string,a.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired,createHref:a.a.func.isRequired}).isRequired}).isRequired},t.a=p},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=d(r),a=d(n(32)),l=d(n(4)),u=n(215),c=d(n(216)),s=d(n(217)),f=d(n(218));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,b=0,y=0,w=0,g="data-lazyload-listened",O=[],E=[],j=!1;try{var _=Object.defineProperty({},"passive",{get:function(){j=!0}});window.addEventListener("test",null,_)}catch(z){}var L=!!j&&{capture:!1,passive:!0},T=function(e){var t=a.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=a.default.findDOMNode(e),o=void 0,r=void 0,i=void 0,l=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,i=u.height,l=u.width}catch(z){o=m,r=b,i=w,l=y}var c=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,f=Math.max(o,0),d=Math.max(r,0),p=Math.min(c,o+i)-f,h=Math.min(s,r+l)-d,v=void 0,g=void 0,O=void 0,E=void 0;try{var j=n.getBoundingClientRect();v=j.top,g=j.left,O=j.height,E=j.width}catch(z){v=m,g=b,O=w,E=y}var _=v-f,L=g-d,T=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return _-T[0]<=p&&_+O+T[1]>=0&&L-T[0]<=h&&L+E+T[1]>=0}(e,n):function(e){var t=a.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(z){n=m,o=w}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=i&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){for(var e=0;e<O.length;++e){var t=O[e];T(t)}E.forEach(function(e){var t=O.indexOf(e);-1!==t&&O.splice(t,1)}),E=[]},k=void 0,P=null,M=function(e){function t(e){p(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return v(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===k||"debounce"===k&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",P,L),(0,u.off)(window,"resize",P,L),P=null),P||(void 0!==this.props.debounce?(P=(0,s.default)(C,"number"===typeof this.props.debounce?this.props.debounce:300),k="debounce"):void 0!==this.props.throttle?(P=(0,f.default)(C,"number"===typeof this.props.throttle?this.props.throttle:300),k="throttle"):P=C),this.props.overflow){var o=(0,c.default)(a.default.findDOMNode(this));if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(g)+1;1===r&&o.addEventListener("scroll",P,L),o.setAttribute(g,r)}}else if(0===O.length||n){var i=this.props,l=i.scroll,d=i.resize;l&&(0,u.on)(e,"scroll",P,L),d&&(0,u.on)(window,"resize",P,L)}O.push(this),T(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(a.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",P,L),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=O.indexOf(this);-1!==n&&O.splice(n,1),0===O.length&&"undefined"!==typeof window&&((0,u.off)(window,"resize",P,L),(0,u.off)(window,"scroll",P,L))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:i.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();M.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},M.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var D=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){p(this,a);var e=h(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+D(t),e}return v(a,r.Component),o(a,[{key:"render",value:function(){return i.default.createElement(M,e,i.default.createElement(t,this.props))}}]),a}()}},t.default=M,t.forceCheck=C},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,u=function u(){var c=+new Date-a;c<t&&c>=0?o=setTimeout(u,t-c):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var c=n&&!o;return o||(o=setTimeout(u,t)),c&&(l=e.apply(i,r),i=null,r=null),l}}},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout(function(){o=a,e.apply(i,l)},t)):(o=a,e.apply(i,l))}}},235:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"fetchData",function(){return v});var r=n(7),i=n(16),a=n(22),l=n(27),u=n(25),c=n(26),s=n(1),f=n.n(s),d=n(35),p=n(21),h=n(2);function v(e){return{type:h.a.TOPIC_GETDATA_REQUEST,parmas:e}}var m=n(214),b=n.n(m),y=n(210),w=n(204),g=(n(235),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){this.props.actions.fetchData({page:1,size:100})}},{key:"render",value:function(){var e=this.props.topicData;return f.a.createElement(s.Fragment,null,e.map(function(e){return f.a.createElement(b.a,{throttle:200,height:300,key:e.id},f.a.createElement(y.a,{className:"topicItem",to:"/topicDetail/".concat(e.id)},f.a.createElement(w.a,{offSetTop:44,realUrl:e.scene_pic_url}),f.a.createElement("div",{className:"topicItemTitle"},e.title),f.a.createElement("div",{className:"topicItemSubtitle"},e.subtitle),f.a.createElement("div",{className:"topicItemPrice"},e.price_info,"\u5143\u8d77")))}))}}]),t}(s.Component));t.default=Object(d.b)(function(e,t){return Object(r.a)({},e.topic)},function(e){return{actions:Object(p.b)(o,e)}})(g)}}]);
//# sourceMappingURL=12.d5c24c60.chunk.js.map