(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[44,3,46,47,48,49,51,52,53],{201:function(e,t,n){"use strict";n.r(t);var r=n(28),o=n.n(r),a=n(1),c=n.n(a),i=n(2),l=n.n(i),s=n(151),u=n(427);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=p(this,a.call.apply(a,[this].concat(r)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(u.a,{history:this.history,children:this.props.children})},i}(c.a.Component);f.propTypes={basename:l.a.string,forceRefresh:l.a.bool,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var m=f;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=d(this,a.call.apply(a,[this].concat(r)))).history=Object(s.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){o()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(u.a,{history:this.history,children:this.props.children})},i}(c.a.Component);h.propTypes={basename:l.a.string,getUserConfirmation:l.a.func,hashType:l.a.oneOf(["hashbang","noslash","slash"]),children:l.a.node};var y=h,b=n(94),g=n(153);function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=v(this,a.call.apply(a,[this].concat(r)))).history=Object(s.d)(t.props),v(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(g.a,{history:this.history,children:this.props.children})},i}(c.a.Component);w.propTypes={initialEntries:l.a.array,initialIndex:l.a.number,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var E=w,x=n(428),T=n(19),k=n.n(T);var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){k()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);O.propTypes={when:l.a.bool,message:l.a.oneOfType([l.a.func,l.a.string]).isRequired},O.defaultProps={when:!0},O.contextTypes={router:l.a.shape({history:l.a.shape({block:l.a.func.isRequired}).isRequired}).isRequired};var P=O,C=n(443),N=n(152),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var L=function(e){return"/"===e.charAt(0)?e:"/"+e},S=function(e,t){return e?j({},t,{pathname:L(e)+t.pathname}):t},_=function(e){return"string"==typeof e?e:Object(s.e)(e)},M=function(e){return function(){k()(!1,"You cannot %s with <StaticRouter>",e)}},F=function(){},q=function(a){function i(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o=R(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return L(o.props.basename+_(e))},o.handlePush=function(e){var t=o.props,n=t.basename,r=t.context;r.action="PUSH",r.location=S(n,Object(s.c)(e)),r.url=_(r.location)},o.handleReplace=function(e){var t=o.props,n=t.basename,r=t.context;r.action="REPLACE",r.location=S(n,Object(s.c)(e)),r.url=_(r.location)},o.handleListen=function(){return F},o.handleBlock=function(){return F},R(o,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},i.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},i.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=L(e);return 0!==t.pathname.indexOf(n)?t:j({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(g.a,j({},r,{history:o}))},i}(c.a.Component);q.propTypes={basename:l.a.string,context:l.a.object.isRequired,location:l.a.oneOfType([l.a.string,l.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:l.a.object.isRequired};var H=q,A=n(430),W=n(444).a,z=n(80).a,D=n(429);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return E}),n.d(t,"NavLink",function(){return x.a}),n.d(t,"Prompt",function(){return P}),n.d(t,"Redirect",function(){return C.a}),n.d(t,"Route",function(){return N.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return H}),n.d(t,"Switch",function(){return A.a}),n.d(t,"generatePath",function(){return W}),n.d(t,"matchPath",function(){return z}),n.d(t,"withRouter",function(){return D.a})},431:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),r,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&r?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},r)):void 0};l.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},c.propTypes={value:i.a.string.isRequired},t.default=l},432:function(e,t,n){"use strict";n.r(t);var r=n(431);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var o=n(434);n.d(t,"ComponentPreview",function(){return o.default});var a=n(440);n.d(t,"DocContainer",function(){return a.default});var i=n(441);n.d(t,"DocHeading",function(){return i.default});var c=n(435);n.d(t,"DocToc",function(){return c.default});var l=n(436);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var s=n(437);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(438);n.d(t,"Icon",function(){return u.default});var p=n(439);n.d(t,"PxScript",function(){return p.default})},433:function(e,t,n){"use strict";var r=n(1),c=n.n(r),o=n(2),a=n.n(o),i=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,a=e.text,i=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?c.a.createElement("i",{className:"material-icons alert-icon"},r):null,a?"\n":"",a?c.a.createElement("p",null,a):null,i?"\n":"",i?c.a.createElement("div",{className:"alert-body"},i):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=i},434:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),o=n(2),a=n.n(o),f=n(445),i=n(446),m=n.n(i),d=n(447);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var r=e.children,o=e.language,a=e.removeOuterTag,i=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,l=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&l)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&r&&"function"==typeof r.map)r.map(function(e){n+=a?s(e):c?u(e):Object(f.renderToStaticMarkup)(e)});else if("html"===o)n+=a?s(r):c?u(r):Object(f.renderToStaticMarkup)(r);else switch(y(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),i&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",h({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},a({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=c},435:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(2),o=n.n(r),c=n(442);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=u(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return i.a.createElement("div",{className:"col-2 d-none d-lg-block"},i.a.createElement("div",{className:"doc-toc"},i.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return i.a.createElement("li",{key:t,className:n?"active":""},i.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),r&&s(t,r),o}();m.propTypes={component:o.a.func.isRequired},t.default=m},436:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(433);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},437:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(433);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},438:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),i=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(a).a.string.isRequired},t.default=i},439:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(2),a=n.n(o),i=function(e){var t,n,r=e.component,o=e.subComponents,a=e.func,i=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return c.a.createElement("span",{key:t},e,t<i.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,r),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},a),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=i},440:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(432),l=function(e){var t=e.docToc,n=e.children,r=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(r,null),t?o.a.createElement(c.DocToc,{component:r}):null))};l.propTypes={docToc:i.a.bool},t.default=l},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var a=l(n(1)),i=l(n(2)),c=n(201);function l(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,f=null;function m(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(s);return null!==e&&(f(e),m(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,r({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var g={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=y.propTypes=g},500:function(e,t,n){"use strict";n.r(t),n.d(t,"TextAlignment",function(){return i}),n.d(t,"TextWrappingAndOverflow",function(){return c}),n.d(t,"TextTransform",function(){return l}),n.d(t,"FontWeightAndItalics",function(){return s});var r=n(1),o=n.n(r),a=n(432),i=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"text-alignment"},"Text alignment"),o.a.createElement("p",null,"Easily realign text to components with text alignment classes."),o.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("p",{className:"text-justify"},"Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.")),o.a.createElement("p",null,"For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."),o.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("p",{className:"text-left"},"Left aligned text on all viewport sizes."),o.a.createElement("p",{className:"text-center"},"Center aligned text on all viewport sizes."),o.a.createElement("p",{className:"text-right"},"Right aligned text on all viewport sizes."),"\n\n",o.a.createElement("p",{className:"text-sm-left"},"Left aligned text on viewports sized SM (small) or wider."),o.a.createElement("p",{className:"text-md-left"},"Left aligned text on viewports sized MD (medium) or wider."),o.a.createElement("p",{className:"text-lg-left"},"Left aligned text on viewports sized LG (large) or wider."),o.a.createElement("p",{className:"text-xl-left"},"Left aligned text on viewports sized XL (extra-large) or wider."),o.a.createElement("p",{className:"text-xxl-left"},"Left aligned text on viewports sized XXL (extra-extra-large) or wider.")))},c=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"text-wrapping-and-overflow"},"Text wrapping and overflow"),o.a.createElement("p",null,"Prevent text from wrapping with a ",o.a.createElement(a.Property,{value:".text-nowrap"})," class."),o.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"text-nowrap sc-highlight",style:{width:"8rem"}},"\n","This text should overflow the parent.","\n")),o.a.createElement("p",null,"For longer content, you can add a ",o.a.createElement(a.Property,{value:".text-truncate"})," class to truncate the text with an ellipsis. ",o.a.createElement("b",null,"Requires")," display: ",o.a.createElement(a.Property,{value:"inline-block"})," ",o.a.createElement("b",null,"or")," ",o.a.createElement(a.Property,{value:"display: block"}),"."),o.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-3 text-truncate"},"Cras egestas dolor nec nunc scelerisque tincidunt.")),"\n\n",o.a.createElement("span",{className:"d-inline-block text-truncate",style:{maxWidth:"150px"}},"\n","Cras egestas dolor nec nunc scelerisque tincidunt.","\n")))},l=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"text-transform"},"Text transform"),o.a.createElement("p",null,"Transform text in components with text capitalization classes."),o.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("p",{className:"text-lowercase"},"Lowercased text."),o.a.createElement("p",{className:"text-uppercase"},"Uppercased text."),o.a.createElement("p",{className:"text-capitalize"},"CapiTaliZed text.")),o.a.createElement("p",null,"Note how ",o.a.createElement(a.Property,{value:".text-capitalize"})," only changes the first letter of each word, leaving the case of any other letters unaffected."))},s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"font-weight-and-italics"},"Font weight and italics"),o.a.createElement("p",null,"Quickly change the weight (boldness) of text or italicize text."),o.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("p",{className:"font-weight-bold"},"Bold text."),o.a.createElement("p",{className:"font-weight-normal"},"Normal weight text."),o.a.createElement("p",{className:"font-weight-light"},"Light weight text."),o.a.createElement("p",{className:"font-italic"},"Italic text.")))};t.default=function(){return o.a.createElement(a.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."),o.a.createElement(i,null),o.a.createElement(c,null),o.a.createElement(l,null),o.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_42.js.map?d993a08b795f1433e83d