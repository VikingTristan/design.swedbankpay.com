(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10,2,47,48,49,51,52,53,54],{371:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),o=n.n(a),r=n(65),i=n.n(r),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};l.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},c.propTypes={value:i.a.string.isRequired},t.default=l},372:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(65),i=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,i=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,i?"\n":"",i?o.a.createElement("p",null,i):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:i.a.string,type:i.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:i.a.string,close:i.a.bool,text:i.a.string},t.a=c},373:function(e,t,n){"use strict";n.r(t);var a=n(371);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(374);n.d(t,"ComponentPreview",function(){return o.default});var r=n(380);n.d(t,"DocContainer",function(){return r.default});var i=n(381);n.d(t,"DocHeading",function(){return i.default});var c=n(375);n.d(t,"DocToc",function(){return c.default});var l=n(376);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var u=n(377);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(378);n.d(t,"Icon",function(){return s.default});var p=n(379);n.d(t,"PxScript",function(){return p.default})},374:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),i=n.n(r),c=n(383),l=n(384),u=n.n(l),s=n(385);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,i=e.removeList,l=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return o.a.createElement(o.a.Fragment,null,l?o.a.createElement(function(){return o.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?o.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):i?v(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):i?v(t):Object(c.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",o.a.createElement("figure",null,o.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,i=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return o.a.createElement("div",p({key:e+t},r({line:e,key:t})),e.map(function(e,t){return o.a.createElement("span",p({key:t},i({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:i.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:i.a.bool,hideValue:i.a.bool,removeList:i.a.bool,showCasePanel:i.a.bool,codeFigure:i.a.bool,dangerousHTML:i.a.bool},t.default=f},375:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),i=n.n(r),c=n(382);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return o.a.createElement("li",{key:n,className:a?"active":""},o.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),i&&u(n,i),t}();d.propTypes={component:i.a.func.isRequired},t.default=d},376:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(372);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},377:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(372);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},378:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),i=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(r).a.string.isRequired},t.default=i},379:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),i=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,i=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},i),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:i.a.string.isRequired,subComponents:i.a.array,func:i.a.string.isRequired,params:i.a.array},t.default=c},380:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),i=n.n(r),c=n(373),l=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(c.DocToc,{component:a}):null))};l.propTypes={docToc:i.a.bool},t.default=l},382:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=v,t.HashLink=h,t.NavHashLink=b;var i=u(n(1)),c=u(n(65)),l=n(96);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,m=null,f=null;function d(){s="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function v(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return i.default.createElement(t,o({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return v(e,l.Link)}function b(e){return v(e,l.NavLink)}var g={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};h.propTypes=g,b.propTypes=g},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(387);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}})},387:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=(o=i)&&o.__esModule?o:{default:o},l=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a._handleRefMount=function(e){a._domNode=e},u(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();s.propTypes={async:l.PropTypes.bool,className:l.PropTypes.string,children:l.PropTypes.any,component:l.PropTypes.node},s.defaultProps={component:"code"},t.default=s},445:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(96),i=n(386),c=n.n(i),l=n(373),u=n(97),s=n(65),p=n.n(s),m=n(317),f=n.n(m);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,h(t).call(this,e))).state={active:"main-0",activeParent:null},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,(r=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.vertsize,r=t.widesize,i=f()("nav",a?"nav-".concat(a,"-vertical"):"",r?"nav-".concat(r,"-vertical-wide"):"");return o.a.createElement("nav",{className:i},o.a.createElement("ul",null,n.map(function(t,n){var a=t.name,r=t.icon,i=t.subItems;return o.a.createElement("li",{key:"nav-item-".concat(a,"-").concat(n)},"\n",i?o.a.createElement("div",{className:"submenu"},"\n",o.a.createElement("i",{className:"material-icons"},r),"\n",o.a.createElement("span",null,a),o.a.createElement("ul",null,i.map(function(t,a){return o.a.createElement("li",{key:"nav-subItems-".concat(t,"-").concat(a),className:e.state.active==="sub-".concat(n,"-").concat(a)?"active":null},o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-").concat(a))}},t))}))):o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"main-".concat(n))},className:e.state.active==="main-".concat(n)?"active":null},"\n",o.a.createElement("i",{className:"material-icons"},r),"\n",o.a.createElement("span",null,a),"\n"),"\n")})))}}])&&y(n.prototype,r),i&&y(n,i),t}(),E=["xs","sm","md","lg","xl","xxl"];g.propTypes={items:p.a.array.isRequired,vertsize:p.a.oneOf(E),widesize:p.a.oneOf(E)};var w=g;function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return j}),n.d(t,"TwoLevels",function(){return C}),n.d(t,"IconsOnly",function(){return L}),n.d(t,"Mix",function(){return x}),n.d(t,"Mobile",function(){return M});var N=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],S=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-standard"},"Standard nav"),o.a.createElement("p",null,"Add class ",o.a.createElement(l.Property,{value:".nav"})," and ",o.a.createElement(l.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",o.a.createElement(c.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",o.a.createElement(c.a,{className:"language-html"},"<i>")," and ",o.a.createElement(c.a,{className:"language-html"},"<span>")," with your desired ",o.a.createElement(r.Link,{to:"/docs/core/icons"},"icon")," and text. ",o.a.createElement(l.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(w,{widesize:"lg",items:N})))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),o.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",o.a.createElement(c.a,{className:"language-html"},"<DocContainer>")," with class ",o.a.createElement(l.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",o.a.createElement(c.a,{className:"language-html"},"<ul>")," with ",o.a.createElement(c.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(w,{widesize:"lg",items:S})))},L=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-tablet"},"Icons only"),o.a.createElement("p",null,"To display only icons use class ",o.a.createElement(l.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",o.a.createElement(l.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(w,{vertsize:"md",items:S})))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),o.a.createElement("p",null,"You can also use both icons only and wide together."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(w,{vertsize:"md",widesize:"lg",items:S})))},M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),o.a.createElement("p",null,"To only display mobile view use class ",o.a.createElement(l.Property,{value:".nav"})," alone."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(w,{items:N})))},I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,T(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidUpdate",value:function(){u.nav.init()}},{key:"componentDidMount",value:function(){u.nav.init()}},{key:"render",value:function(){return o.a.createElement(l.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use ",o.a.createElement(c.a,{className:"language-html"},"<nav>"),"s to create a basic navigational element containing links."),o.a.createElement(j,null),o.a.createElement(C,null),o.a.createElement(L,null),o.a.createElement(x,null),o.a.createElement(M,null))}}])&&k(n.prototype,r),i&&k(n,i),t}();t.default=I}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?f0409194d425e7f30503