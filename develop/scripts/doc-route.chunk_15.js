(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,3,46,47,48,49,51,52,53],{251:function(e,t,n){"use strict";n.r(t);var o=n(30),r=n.n(o),a=n(1),c=n.n(a),i=n(2),l=n.n(i),s=n(201),u=n(480);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=p(this,a.call.apply(a,[this].concat(o)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(u.a,{history:this.history,children:this.props.children})},i}(c.a.Component);f.propTypes={basename:l.a.string,forceRefresh:l.a.bool,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var m=f;function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=h(this,a.call.apply(a,[this].concat(o)))).history=Object(s.b)(t.props),h(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(u.a,{history:this.history,children:this.props.children})},i}(c.a.Component);d.propTypes={basename:l.a.string,getUserConfirmation:l.a.func,hashType:l.a.oneOf(["hashbang","noslash","slash"]),children:l.a.node};var y=d,b=n(107),v=n(203);function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=E(this,a.call.apply(a,[this].concat(o)))).history=Object(s.d)(t.props),E(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(v.a,{history:this.history,children:this.props.children})},i}(c.a.Component);g.propTypes={initialEntries:l.a.array,initialIndex:l.a.number,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var w=g,O=n(481),k=n(20),T=n.n(k);var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);j.propTypes={when:l.a.bool,message:l.a.oneOfType([l.a.func,l.a.string]).isRequired},j.defaultProps={when:!0},j.contextTypes={router:l.a.shape({history:l.a.shape({block:l.a.func.isRequired}).isRequired}).isRequired};var P=j,N=n(495),C=n(202),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?R({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},M=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},F=function(a){function i(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r=x(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return S(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,o=t.context;o.action="PUSH",o.location=_(n,Object(s.c)(e)),o.url=L(o.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,o=t.context;o.action="REPLACE",o.location=_(n,Object(s.c)(e)),o.url=L(o.location)},r.handleListen=function(){return H},r.handleBlock=function(){return H},x(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},i.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},i.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),o=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:R({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(v.a,R({},o,{history:r}))},i}(c.a.Component);F.propTypes={basename:l.a.string,context:l.a.object.isRequired,location:l.a.oneOfType([l.a.string,l.a.object])},F.defaultProps={basename:"",location:"/"},F.childContextTypes={router:l.a.object.isRequired};var q=F,A=n(483),W=n(497).a,D=n(93).a,I=n(482);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return O.a}),n.d(t,"Prompt",function(){return P}),n.d(t,"Redirect",function(){return N.a}),n.d(t,"Route",function(){return C.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return q}),n.d(t,"Switch",function(){return A.a}),n.d(t,"generatePath",function(){return W}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return I.a})},484:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var o=n(1),r=n.n(o),a=n(2),i=n.n(a),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),o,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&o?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},o)):void 0};l.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},c.propTypes={value:i.a.string.isRequired},t.default=l},485:function(e,t,n){"use strict";n.r(t);var o=n(484);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var r=n(487);n.d(t,"ComponentPreview",function(){return r.default});var a=n(493);n.d(t,"DocContainer",function(){return a.default});var i=n(494);n.d(t,"DocHeading",function(){return i.default});var c=n(488);n.d(t,"DocToc",function(){return c.default});var l=n(489);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var s=n(490);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(491);n.d(t,"Icon",function(){return u.default});var p=n(492);n.d(t,"PxScript",function(){return p.default})},486:function(e,t,n){"use strict";var o=n(1),c=n.n(o),r=n(2),a=n.n(r),i=function(e){var t=e.id,n=e.type,o=e.icon,r=e.close,a=e.text,i=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?c.a.createElement("i",{className:"material-icons alert-icon"},o):null,a?"\n":"",a?c.a.createElement("p",null,a):null,i?"\n":"",i?c.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=i},487:function(e,t,n){"use strict";n.r(t);var o=n(1),p=n.n(o),r=n(2),a=n.n(r),f=n(498),i=n(499),m=n.n(i),h=n(500);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var o=e.children,r=e.language,a=e.removeOuterTag,i=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,l=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},o)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&l)t="","function"==typeof(e=o).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&o&&"function"==typeof o.map)o.map(function(e){n+=a?s(e):c?u(e):Object(f.renderToStaticMarkup)(e)});else if("html"===r)n+=a?s(o):c?u(o):Object(f.renderToStaticMarkup)(o);else switch(y(o)){case"string":n=o;break;case"object":o.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),i&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return h.b.style="",p.a.createElement("figure",null,p.a.createElement(h.a,d({},h.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return p.a.createElement("div",d({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",d({key:t},a({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=c},488:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(2),r=n.n(o),c=n(496);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)o.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)o.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&o.push({title:e.props.children,id:e.props.id})}),o),windowTopPosition:window.pageYOffset},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,a["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return i.a.createElement("div",{className:"col-2 d-none d-lg-block"},i.a.createElement("div",{className:"doc-toc"},i.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=o.state.windowTopPosition>=e.top&&o.state.windowTopPosition<o.state.headings[t+1].top;return i.a.createElement("li",{key:t,className:n?"active":""},i.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:o.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),o&&s(t,o),r}();m.propTypes={component:r.a.func.isRequired},t.default=m},489:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(486);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},490:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(486);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},491:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(2),i=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(a).a.string.isRequired},t.default=i},492:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(2),a=n.n(r),i=function(e){var t,n,o=e.component,r=e.subComponents,a=e.func,i=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return c.a.createElement("span",{key:t},e,t<i.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,o),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},a),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=i},493:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(2),i=n.n(a),c=n(485),l=function(e){var t=e.docToc,n=e.children,o=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(o,null),t?r.a.createElement(c.DocToc,{component:o}):null))};l.propTypes={docToc:i.a.bool},t.default=l},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=d,t.HashLink=y,t.NavHashLink=b;var a=l(n(1)),i=l(n(2)),c=n(251);function l(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,f=null;function m(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function h(){var e=document.getElementById(s);return null!==e&&(f(e),m(),!0)}function d(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,o({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===u&&(u=new MutationObserver(h)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return d(e,c.Link)}function b(e){return d(e,c.NavLink)}var v={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=y.propTypes=v},526:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return m}),n.d(t,"UsageWithJavascript",function(){return h});var a=n(1),i=n.n(a),c=n(485),l=n(74);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"example"},"Example"),i.a.createElement("p",null,"A standard sheet should display content that complements the screen’s primary content. It will close when the user clicks outside of the sheet or exits out of it in another way."),i.a.createElement("p",null,"Sheets can be used for a number of different things, but common use cases for a sheet are for example displaying a list of actions that affet the screen’s primary content such as filters, deletion or other ways to manipulate the main content. If you have a form then you could include an icon that opens said sheet to display more information about what the expected input is."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement("div",{className:"sheet",id:"demo-sheet"},i.a.createElement("section",null,"\n",i.a.createElement("a",{href:"#",className:"sheet-close"},"\n\t\t\t",i.a.createElement(c.Icon,{icon:"close"}),"\n\t\t"),i.a.createElement("h2",null,"Sheet component"),i.a.createElement("p",null,"This is the sheet component. It can contain anything you want."),i.a.createElement("p",null,"It can also contain lots of useless text, just like the text in this paragraph. Or it can contain useful info and cheats. For example if you have a math quiz coming up;"),i.a.createElement("ul",{className:"list"},i.a.createElement("li",null,i.a.createElement("code",null,"3 + 8 = 11")),i.a.createElement("li",null,i.a.createElement("code",null,"36 - 22 = 14")),i.a.createElement("li",null,i.a.createElement("code",null,"256 + 113 = 369")),i.a.createElement("li",null,i.a.createElement("code",null,"356 - 1 = 355"))),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"full-name"},"Full name"),i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",className:"form-control",id:"full-name",placeholder:"Enter your full name"})),i.a.createElement("div",{className:"help-block"},"Your full name")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"email-address"},"Email"),i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",className:"form-control",id:"email-address",placeholder:"Enter your email"})),i.a.createElement("div",{className:"help-block"},"Email means electronic mail, not express mail")),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"checkbox"},i.a.createElement("input",{type:"checkbox",id:"subscribe-checkbox"}),i.a.createElement("label",{htmlFor:"subscribe-checkbox"},"Sign up to our math newsletter"))),i.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(e){return e.preventDefault()}},"Submit")))),"\n",i.a.createElement("button",{className:"btn btn-primary",type:"button","data-sheet-open":"demo-sheet"},"Open sheet")))},h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),i.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},i.a.createElement("div",{className:"sheet",id:"demo-sheet"},"\n","...","\n"),"\n"),i.a.createElement("p",null,"To open a sheet:"),i.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.sheet.open("demo-sheet")'),i.a.createElement("p",null,"To close a sheet:"),i.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.sheet.close("demo-sheet")'))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,p(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){l.sheet.init()}},{key:"render",value:function(){return i.a.createElement(c.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"Sheet is a container component that is anchored on the right side of the screen and can contain a number of different things."),i.a.createElement(m,null),i.a.createElement(h,null))}}])&&s(n.prototype,o),r&&s(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_15.js.map?3fc797776803ab0ccce5