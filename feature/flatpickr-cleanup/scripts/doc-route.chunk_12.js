(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10,2,48,49,50,52,53,54,55],{363:function(e,t,n){"use strict";n.r(t);var a=n(364);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(366);n.d(t,"ComponentPreview",function(){return r.default});var o=n(372);n.d(t,"DocContainer",function(){return o.default});var c=n(374);n.d(t,"DocHeading",function(){return c.default});var l=n(367);n.d(t,"DocToc",function(){return l.default});var i=n(368);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(369);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(370);n.d(t,"Icon",function(){return s.default});var m=n(373);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(371);n.d(t,"PxScript",function(){return p.default})},364:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},365:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,c=e.text,l=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,c?"\n":"",c?r.a.createElement("p",null,c):null,l?"\n":"",l?r.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=n(376),i=n(377),u=n.n(i),s=n(378);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,c=e.removeList,i=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):c?v(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):c?v(t):Object(l.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},c({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=n(375);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),c&&u(n,c),t}();d.propTypes={component:c.a.func.isRequired},t.default=d},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(365);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(365);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,c=e.func,l=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<l.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},c),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},372:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=n(363),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(l.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},373:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return l}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),o=n(95),c=n(363),l=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(c.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(c.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(c.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(l,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)}},375:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=v,t.HashLink=h,t.NavHashLink=b;var c=u(n(1)),l=u(n(65)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,f=null;function d(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function y(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function v(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===m&&(m=new MutationObserver(y)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return v(e,i.Link)}function b(e){return v(e,i.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};h.propTypes=E,b.propTypes=E},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(380);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},380:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),l=(r=c)&&r.__esModule?r:{default:r},i=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a._handleRefMount=function(e){a._domNode=e},u(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return l.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},438:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(95),c=n(379),l=n.n(c),i=n(363),u=n(65),s=n.n(u),m=n(312),p=n.n(m);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,v(t).call(this,e))).state={active:"main-0",activeParent:null},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,(o=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.vertsize,o=t.widesize,c=p()("nav",a?"nav-".concat(a,"-vertical"):"",o?"nav-".concat(o,"-vertical-wide"):"");return r.a.createElement("nav",{className:c},r.a.createElement("ul",null,n.map(function(t,n){var a=t.name,o=t.icon,c=t.subItems;return r.a.createElement("li",{key:"nav-item-".concat(a,"-").concat(n)},"\n",c?r.a.createElement("div",{className:"submenu"},"\n",r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),r.a.createElement("ul",null,c.map(function(t,a){return r.a.createElement("li",{key:"nav-subItems-".concat(t,"-").concat(a),className:e.state.active==="sub-".concat(n,"-").concat(a)?"active":null},r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-").concat(a))}},t))}))):r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"main-".concat(n))},className:e.state.active==="main-".concat(n)?"active":null},"\n",r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),"\n")})))}}])&&d(n.prototype,o),c&&d(n,c),t}(),E=["xs","sm","md","lg","xl","xxl"];b.propTypes={items:s.a.array.isRequired,vertsize:s.a.oneOf(E),widesize:s.a.oneOf(E)};var g=b;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return C}),n.d(t,"TwoLevels",function(){return j}),n.d(t,"IconsOnly",function(){return L}),n.d(t,"Mix",function(){return x}),n.d(t,"Mobile",function(){return M}),n.d(t,"JavascriptMethods",function(){return D});var N=window.px.nav,_=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],S=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-standard"},"Standard nav"),r.a.createElement("p",null,"Add class ",r.a.createElement(i.Property,{value:".nav"})," and ",r.a.createElement(i.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",r.a.createElement(l.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",r.a.createElement(l.a,{className:"language-html"},"<i>")," and ",r.a.createElement(l.a,{className:"language-html"},"<span>")," with your desired ",r.a.createElement(o.Link,{to:"/docs/core/icons"},"icon")," and text. ",r.a.createElement(i.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{widesize:"lg",items:_})))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),r.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",r.a.createElement(l.a,{className:"language-html"},"<DocContainer>")," with class ",r.a.createElement(i.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",r.a.createElement(l.a,{className:"language-html"},"<ul>")," with ",r.a.createElement(l.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{widesize:"lg",items:S})))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-tablet"},"Icons only"),r.a.createElement("p",null,"To display only icons use class ",r.a.createElement(i.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",r.a.createElement(i.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{vertsize:"md",items:S})))},x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),r.a.createElement("p",null,"You can also use both icons only and wide together."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{vertsize:"md",widesize:"lg",items:S})))},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),r.a.createElement("p",null,"To only display mobile view use class ",r.a.createElement(i.Property,{value:".nav"})," alone."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{items:_})))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(i.JavascriptDocs,{componentName:"nav",open:!0,close:!0}))},F=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,O(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidUpdate",value:function(){N.init()}},{key:"componentDidMount",value:function(){N.init()}},{key:"render",value:function(){return r.a.createElement(i.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use ",r.a.createElement(l.a,{className:"language-html"},"<nav>"),"s to create a basic navigational element containing links."),r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(L,null),r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(D,null))}}])&&P(n.prototype,o),c&&P(n,c),t}();t.default=F}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?5d4561af783684b16008