(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[51],{354:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(15),l=n.n(r),s=n(362);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){var e=[];return"function"==typeof t.map&&t.map(function(t){if("ExperimentalComponentAlert"!==t.type.name&&"function"==typeof t.type)if("h2"===t.type().props.children.type)e.push({title:t.type().props.children.props.children,id:t.type().props.children.props.id});else{var n=t.type().props.children[0];if("h2"===n.type)e.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var o=n.type().props.children[0];"h2"===o.type&&e.push({title:o.props.children,id:o.props.id})}}else"h2"===t.type&&e.push({title:t.props.children,id:t.props.id})}),e},y=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,a(e).call(this,t))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,o["Component"]),n=e,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(t){window.scrollTo({top:t.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(t,e){t.top=0===e?0:document.getElementById(t.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"col-2 d-none d-lg-block"},i.a.createElement("div",{className:"doc-toc"},i.a.createElement("ul",null,this.state.headings.map(function(e,n){if(e.id&&e.title){var o=t.state.windowTopPosition>=e.top&&t.state.windowTopPosition<t.state.headings[n+1].top;return i.a.createElement("li",{key:n,className:o?"active":""},i.a.createElement(s.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:t.scrollToElement},e.title))}}))))}}])&&u(n.prototype,r),l&&u(n,l),e}();y.propTypes={component:l.a.func.isRequired},e.default=y},362:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.genericHashLink=h,e.HashLink=m,e.NavHashLink=b;var r=c(n(0)),l=c(n(15)),s=n(57);function c(t){return t&&t.__esModule?t:{default:t}}var u="",p=null,a=null,f=null;function d(){u="",null!==p&&p.disconnect(),null!==a&&(window.clearTimeout(a),a=null)}function y(){var t=document.getElementById(u);return null!==t&&(f(t),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["scroll","smooth"]);return r.default.createElement(e,o({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===i(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),a=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function m(t){return h(t,s.Link)}function b(t){return h(t,s.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};m.propTypes=v,b.propTypes=v}}]);
//# sourceMappingURL=doc-route.chunk_51.js.map?069b0f8d814198869474