(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[48],{355:function(t,e,n){"use strict";n.r(e);var r=n(1),l=n.n(r),o=n(64),i=n.n(o),s=n(363);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function i(t){var e,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=p(this,a(i).call(this,t))).state={headings:(n=e.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(t){if("ExperimentalComponentAlert"!==t.type.name&&"function"==typeof t.type)if("h2"===t.type().props.children.type)o.push({title:t.type().props.children.props.children,id:t.type().props.children.props.id});else{var e=t.type().props.children[0];if("h2"===e.type)o.push({title:e.props.children,id:e.props.id});else if("function"==typeof e.type){var n=e.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===t.type&&o.push({title:t.props.children,id:t.props.id})}),o),windowTopPosition:window.pageYOffset},e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(i,r["Component"]),e=i,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(t){window.scrollTo({top:t.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(t,e){t.top=0===e?0:document.getElementById(t.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,e){if(t.id&&t.title){var n=o.state.windowTopPosition>=t.top&&o.state.windowTopPosition<o.state.headings[e+1].top;return l.a.createElement("li",{key:e,className:n?"active":""},l.a.createElement(s.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:o.scrollToElement},t.title))}}))))}}])&&u(e.prototype,n),o&&u(e,o),i}();d.propTypes={component:i.a.func.isRequired},e.default=d},363:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.genericHashLink=h,e.HashLink=m,e.NavHashLink=b;var r=c(n(1)),l=c(n(64)),s=n(96);function c(t){return t&&t.__esModule?t:{default:t}}var u="",p=null,a=null,f=null;function d(){u="",null!==p&&p.disconnect(),null!==a&&(window.clearTimeout(a),a=null)}function y(){var t=document.getElementById(u);return null!==t&&(f(t),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["scroll","smooth"]);return r.default.createElement(t,o({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===i(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),a=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function m(t){return h(t,s.Link)}function b(t){return h(t,s.NavLink)}var w={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=m.propTypes=w}}]);
//# sourceMappingURL=doc-route.chunk_49.js.map?bb646af5f34522aaff92