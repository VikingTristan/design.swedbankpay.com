(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[29,3,47,48,49,51,52,53,54],{166:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),o=n(1),i=n.n(o),l=n(2),c=n.n(l),s=n(116),u=n(395);function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=m(this,o.call.apply(o,[this].concat(a)))).history=Object(s.a)(t.props),m(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(i.a.Component);p.propTypes={basename:c.a.string,forceRefresh:c.a.bool,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var f=p;function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=h(this,o.call.apply(o,[this].concat(a)))).history=Object(s.b)(t.props),h(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(i.a.Component);d.propTypes={basename:c.a.string,getUserConfirmation:c.a.func,hashType:c.a.oneOf(["hashbang","noslash","slash"]),children:c.a.node};var y=d,E=n(81),b=n(118);function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=v(this,o.call.apply(o,[this].concat(a)))).history=Object(s.d)(t.props),v(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(b.a,{history:this.history,children:this.props.children})},l}(i.a.Component);g.propTypes={initialEntries:c.a.array,initialIndex:c.a.number,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var w=g,k=n(396),O=n(15),P=n.n(O);var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){P()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);C.propTypes={when:c.a.bool,message:c.a.oneOfType([c.a.func,c.a.string]).isRequired},C.defaultProps={when:!0},C.contextTypes={router:c.a.shape({history:c.a.shape({block:c.a.func.isRequired}).isRequired}).isRequired};var N=C,T=n(411),j=n(117),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?x({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},F=function(e){return function(){P()(!1,"You cannot %s with <StaticRouter>",e)}},M=function(){},D=function(o){function l(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r=R(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return S(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,a=t.context;a.action="PUSH",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,a=t.context;a.action="REPLACE",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleListen=function(){return M},r.handleBlock=function(){return M},R(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:x({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:F("go"),goBack:F("goBack"),goForward:F("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(b.a,x({},a,{history:r}))},l}(i.a.Component);D.propTypes={basename:c.a.string,context:c.a.object.isRequired,location:c.a.oneOfType([c.a.string,c.a.object])},D.defaultProps={basename:"",location:"/"},D.childContextTypes={router:c.a.object.isRequired};var B=D,I=n(398),H=n(412).a,A=n(65).a,q=n(397);n.d(t,"BrowserRouter",function(){return f}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return E.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return N}),n.d(t,"Redirect",function(){return T.a}),n.d(t,"Route",function(){return j.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return B}),n.d(t,"Switch",function(){return I.a}),n.d(t,"generatePath",function(){return H}),n.d(t,"matchPath",function(){return A}),n.d(t,"withRouter",function(){return q.a})},399:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},400:function(e,t,n){"use strict";n.r(t);var a=n(399);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(402);n.d(t,"ComponentPreview",function(){return r.default});var o=n(408);n.d(t,"DocContainer",function(){return o.default});var l=n(409);n.d(t,"DocHeading",function(){return l.default});var i=n(403);n.d(t,"DocToc",function(){return i.default});var c=n(404);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=n(405);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(406);n.d(t,"Icon",function(){return u.default});var m=n(407);n.d(t,"PxScript",function(){return m.default})},401:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?i.a.createElement("p",null,o):null,l?"\n":"",l?i.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},402:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),o=n.n(r),p=n(413),l=n(414),f=n.n(l),h=n(415);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&c)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):i?u(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):i?u(a):Object(p.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return h.b.style="",m.a.createElement("figure",null,m.a.createElement(h.a,d({},h.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",d({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",d({key:t},o({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=i},403:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(2),r=n.n(a),i=n(410);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,m(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},404:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(401);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},405:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(401);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},406:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},407:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return i.a.createElement("span",{key:t},e,t<l.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},o),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},408:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=n.n(o),i=n(400),c=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:l.a.bool},t.default=c},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=d,t.HashLink=y,t.NavHashLink=E;var o=c(n(1)),l=c(n(2)),i=n(166);function c(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,m=null,p=null;function f(){s="",null!==u&&u.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function h(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function d(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===u&&(u=new MutationObserver(h)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return d(e,i.Link)}function E(e){return d(e,i.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};E.propTypes=y.propTypes=b},450:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicList",function(){return f}),n.d(t,"InlineList",function(){return h}),n.d(t,"DescriptionList",function(){return d}),n.d(t,"SettingsList",function(){return y}),n.d(t,"ItemList",function(){return E}),n.d(t,"ItemListBordered",function(){return v}),n.d(t,"ItemListLarge",function(){return b}),n.d(t,"HoverItemList",function(){return g}),n.d(t,"StripedItemList",function(){return w});var o=n(1),l=n.n(o),i=n(400),c=n(38);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"basic-list"},"Basic list"),l.a.createElement("p",null,"Add ",l.a.createElement(i.Property,{value:".list"})," to a list to display the basic list. Our lists do not use bullet points."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"Bread"),l.a.createElement("li",null,"Coffee beans"),l.a.createElement("li",null,"Milk"),l.a.createElement("li",null,"Butter"))),l.a.createElement("h3",null,"Nested list"),l.a.createElement("p",null,"Use nesting with lists to signify that some items are children of another item."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"Coffee"),l.a.createElement("li",null,"Tea",l.a.createElement("ul",null,l.a.createElement("li",null,"Black tea"),l.a.createElement("li",null,"Green tea"),l.a.createElement("li",null,"Ice tea"))),l.a.createElement("li",null,"Milk"))))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"inline-list"},"Inline list"),l.a.createElement("p",null,"Use ",l.a.createElement(i.Property,{value:".list-inline"})," on a list to make all items appear on the same line."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"list list-inline"},l.a.createElement("li",null,"Coffee"),l.a.createElement("li",null,"Tea"),l.a.createElement("li",null,"Milk"))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"description-list"},"Description list"),l.a.createElement("p",null,"The description list lets you provide each item with a more specific description of each item. Add ",l.a.createElement(i.Property,{value:".description-list"})," to your dl."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("dl",{className:"description-list"},"\n",l.a.createElement("dt",null,"Frog"),l.a.createElement("dd",null,"Wet green thing that croaks."),"\n",l.a.createElement("dt",null,"Rabbit"),l.a.createElement("dd",null,"Warm fluffy thing that jumps."),"\n",l.a.createElement("dt",null,"Color"),l.a.createElement("dd",null,"Any hue except white or black."),"\n")))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"settings-list"},"Settings list"),l.a.createElement("p",null,"Use ",l.a.createElement(i.Property,{value:".settings-list"})," to visualize different settings in your web application."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"settings-list"},l.a.createElement("li",null,"\n",l.a.createElement("i",{className:"material-icons text-success"},"check"),"Shovels and tapestry newsletter","\n"),l.a.createElement("li",null,"\n",l.a.createElement("i",{className:"material-icons text-warning"},"remove"),"Spoon collectors weekly newsletter","\n"),l.a.createElement("li",null,"\n",l.a.createElement("i",{className:"material-icons text-danger"},"clear"),"Energetic squirrels newsletter","\n"))))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"item-list"},"Item list "),l.a.createElement("p",null,l.a.createElement(i.Property,{value:".item-list"}),"s is a good way to offer more extensive information about each item. Each item has their own box which seperates the items more clearly than our other options."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list"},l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Foo"),l.a.createElement("small",null,"Due date 2 days")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"2120 kr"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Bar"),l.a.createElement("small",null,"Due date 1 day")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"1100 kr"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Baz"),l.a.createElement("small",null,"Due date 5 days")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"200 kr"))))))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"item-list-lg"},"Large item list "),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list item-list-lg"},l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Foo"),l.a.createElement("small",null,"Due date 2 days")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"2120 kr")),l.a.createElement("footer",null,l.a.createElement("a",{href:"#"},"Se faktura"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Bar"),l.a.createElement("small",null,"Due date 1 day")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"1100 kr")),l.a.createElement("footer",{className:"item-list-footer"},l.a.createElement("a",{href:"#"},"Se faktura"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Baz"),l.a.createElement("small",null,"Due date 5 days")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"200 kr")),l.a.createElement("footer",{className:"item-list-footer"},l.a.createElement("a",{href:"#"},"Se faktura"))))))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"item-list-bordered"},"Bordered item list "),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list item-list-bordered"},l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Foo"),l.a.createElement("small",null,"Due date 2 days")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"2120 kr")),l.a.createElement("footer",null,l.a.createElement("a",{href:"#"},"Se faktura"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Bar"),l.a.createElement("small",null,"Due date 1 day")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"1100 kr")),l.a.createElement("footer",{className:"item-list-footer"},l.a.createElement("a",{href:"#"},"Se faktura"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Baz"),l.a.createElement("small",null,"Due date 5 days")),l.a.createElement("div",null,l.a.createElement("span",{className:"h5 text-hightlight"},"200 kr")),l.a.createElement("footer",{className:"item-list-footer"},l.a.createElement("a",{href:"#"},"Se faktura"))))))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hover-item-list"},"Hover item list "),l.a.createElement("p",null,"Include ",l.a.createElement(i.Property,{value:".item-list-hover"})," to give your items a hover effect. You can use this on any variation of ",l.a.createElement(i.Property,{value:".item-list"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list item-list-hover"},l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("span",{className:"status status-success"},"Active"),"\n"),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("span",{className:"status status-warning"},"Expires soon"),"\n"),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("span",{className:"status status-danger"},"Expired"),"\n"))))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"item-list-striped"},"Striped item list"),l.a.createElement("p",null,"If you want more seperation between each item you can use ",l.a.createElement(i.Property,{value:".item-list-striped"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list item-list-striped"},l.a.createElement("li",null,l.a.createElement("span",null,"4925*********004"),l.a.createElement("div",{className:"action-list"},"\n",l.a.createElement(i.Icon,{icon:"more_vert"}),"\n",l.a.createElement("div",{className:"action-menu"},"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(i.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(i.Icon,{icon:"business_center"}),"Add client"),"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(i.Icon,{icon:"add_circle"}),"Add document"),"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(i.Icon,{icon:"person_add"}),"Add user"),"\n"))),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",l.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",l.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("i",{className:"material-icons"},"star"),"\n"),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("span",{className:"status status-success"},"Active"),"\n",l.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},l.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){c.a.init()}},{key:"render",value:function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Use lists to give a structured view of information."),l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(d,null),l.a.createElement(y,null),l.a.createElement(E,null),l.a.createElement(b,null),l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(w,null))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?6f00999d2073e7e197d9