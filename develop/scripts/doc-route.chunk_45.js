(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[0],{429:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),o=n(2),i=n.n(o),s=n(451);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function i(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l(this,u(i).call(this,e))).state={headings:(n=t.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)o.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)o.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&o.push({title:e.props.children,id:e.props.id})}),o),windowTopPosition:window.pageYOffset},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,r["Component"]),t=i,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return p.a.createElement("div",{className:"col-2 d-none d-lg-block"},p.a.createElement("div",{className:"doc-toc"},p.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=o.state.windowTopPosition>=e.top&&o.state.windowTopPosition<o.state.headings[t+1].top;return p.a.createElement("li",{key:t,className:n?"active":""},p.a.createElement(s.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:o.scrollToElement},e.title))}}))))}}])&&a(t.prototype,n),o&&a(t,o),i}();d.propTypes={component:i.a.func.isRequired},t.default=d}}]);
//# sourceMappingURL=doc-route.chunk_45.js.map?4bc84e56156c53c546dd