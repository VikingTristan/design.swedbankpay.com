(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[8],{153:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(58);e.default=Object(a.a)(function(t){var e,o=t.location,n=o.pathname.match(/[^/]*$/)[0].split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return e=n,document.title="".concat(e," | PayEx DesignGuide"),r.a.createElement("h1",null,n)})},163:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Icons",path:"/docs/core/icons",componentPath:"core/Icons"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/action-list",routes:[{title:"Action List (experimental)",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card (experimental)",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Progress Tracker (deprecated)",path:"/docs/components/progress-tracker",componentPath:"components/ProgressTracker"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Step Bar (experimental)",path:"/docs/components/step-bar",componentPath:"components/StepBar"},{title:"Tabs (experimental)",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast (experimental)",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar",path:"/docs/components/topbar",componentPath:"components/Topbar"},{title:"Well (experimental)",path:"/docs/components/well",componentPath:"components/Well"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},164:function(t,e,r){"use strict";r.r(e);var o=r(0),a=r.n(o),n=r(1),i=r.n(n),c=r(57),s=r(37),p=r(56),l=r(10),u=r.n(l),m=r(9),d=function(t){var e=t.path,o=t.redirect,n=t.routes;return a.a.createElement(c.a,null,a.a.createElement(s.a,{exact:!0,path:e,render:function(){return a.a.createElement(p.a,{to:o})}}),n.map(function(t){var e=t.path,o=t.componentPath,n=u()({loader:function(){return r(166)("./".concat(o,"/index.js"))},loading:m.a});return a.a.createElement(s.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return a.a.createElement(n,null)}})}),a.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};d.propTypes={path:i.a.string.isRequired,redirect:i.a.string.isRequired,routes:i.a.array.isRequired},e.default=d},165:function(t,e,o){"use strict";var n=o(53),r=o.n(n),a={},i=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,o=a[e]||(a[e]={});if(o[t])return o[t];var n=r.a.compile(t);return i<1e4&&(o[t]=n,i++),n}(t)(e,{pretty:!0})}},166:function(t,e,n){var r={"./components/ActionList/index.js":[167,2,3,1,0,12],"./components/Alerts/index.js":[174,2,3,1,0,13],"./components/Badge/index.js":[175,2,3,1,0,14],"./components/Breadcrumb/index.js":[201,2,3,1,0,15],"./components/Buttons/index.js":[176,2,3,1,0,16],"./components/Card/index.js":[202,2,3,1,0,17],"./components/Datepickers/index.js":[177,2,3,1,0,18],"./components/Dialog/index.js":[178,2,3,1,0,19],"./components/Forms/index.js":[179,2,3,1,0,20],"./components/InputGroup/index.js":[180,2,3,1,0,21],"./components/Loaders/index.js":[181,2,3,1,0,22],"./components/MediaObject/index.js":[200,2,3,1,0,23],"./components/Pagination/index.js":[205,2,3,1,0,24],"./components/Panel/index.js":[206,2,3,1,0,25],"./components/ProgressTracker/index.js":[207,2,3,1,0,26],"./components/Sheet/index.js":[182,2,3,1,0,27],"./components/Status/index.js":[183,2,3,1,0,28],"./components/StepBar/index.js":[209,2,3,1,0,29],"./components/Tabs/index.js":[208,2,3,1,0,30],"./components/Toast/index.js":[184,2,3,1,0,31],"./components/Tooltips/index.js":[185,2,3,1,0,32],"./components/Topbar/index.js":[204,2,3,1,0,33],"./components/Well/index.js":[186,2,3,1,0,34],"./core/Breakpoints/index.js":[187,2,3,1,0,35],"./core/Color/index.js":[203,2,3,1,0,36],"./core/Favicons/index.js":[188,2,3,1,0,37],"./core/Grid/index.js":[189,2,3,1,0,38],"./core/Icons/index.js":[190,2,3,1,0,39],"./core/Lists/index.js":[191,2,3,1,0,40],"./core/Tables/index.js":[192,2,3,1,0,41],"./core/Typography/index.js":[193,2,3,1,0,42],"./getting-started/BrowserSupport/index.js":[210,43],"./getting-started/Contributing/index.js":[194,2,3,1,0,44],"./getting-started/Introduction/index.js":[195,2,3,1,0,45],"./utilities/Colors/index.js":[196,2,3,1,0,46],"./utilities/Display/index.js":[197,2,3,1,0,47],"./utilities/Spacing/index.js":[198,2,3,1,0,48],"./utilities/Visibility/index.js":[199,2,3,1,0,49],"./utils/Attribute/index.js":[147,50],"./utils/ComponentPreview/index.js":[154,2,0],"./utils/DeprecatedComponentAlert/index.js":[149,51],"./utils/DocHeading/index.js":[153],"./utils/DocToc/index.js":[155,3,1],"./utils/ExperimentalComponentAlert/index.js":[150,52],"./utils/Icon/index.js":[151,53],"./utils/PxScript/index.js":[152,54],"./utils/RenderRoutes/index.js":[164],"./utils/index.js":[156,2,3,1,0,55]};function o(e){var o=r[e];return o?Promise.all(o.slice(1).map(n.e)).then(function(){var t=o[0];return n(t)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=166,t.exports=o},215:function(t,e,o){"use strict";o.r(e);var a=o(0),i=o.n(a),n=o(57),r=o(37),c=o(56),s=o(52),p=o(58),l=o(163),u=o.n(l);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=h(this,f(o).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(o,a["Component"]),e=o,(n=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,o=e.title,n=e.routes;return i.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},i.a.createElement("div",{className:"nav-heading"},i.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),i.a.createElement("span",{onClick:function(){return t.toggleActive()}},o)),i.a.createElement("ul",null,n.map(function(t,e){return i.a.createElement("li",{key:"nav_link_".concat(e)},i.a.createElement(s.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&d(e.prototype,n),r&&d(e,r),o}(),g=Object(p.a)(function(){return i.a.createElement("div",{className:"doc-sidebar col-xxl-2 col-md-3 col-sm-12"},i.a.createElement("nav",{className:"documentation-nav"},u.a.map(function(t,e){var o=Object(p.a)(y);return i.a.createElement(o,{key:"nav_group_".concat(e),route:t})})))}),x=o(153),j=o(164);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e.default=function(){return i.a.createElement("div",{className:"documentation"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3 col-sm-12"},i.a.createElement("h1",null,"DesignGuide")),i.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9 col-sm-12"},i.a.createElement(x.default,null))),i.a.createElement("div",{className:"row"},i.a.createElement(g,null),i.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9 col-sm-12"},i.a.createElement(n.a,null,i.a.createElement(r.a,{exact:!0,path:"/docs",render:function(){return i.a.createElement(c.a,{to:"/docs/getting-started"})}}),u.a.map(function(t){return i.a.createElement(j.default,v({key:"renderRoutes_".concat(t.title)},t))}),i.a.createElement(c.a,{from:"/docs/*",to:"/404"})))))}},56:function(t,e,o){"use strict";var n=o(0),r=o.n(n),a=o(1),i=o.n(a),c=o(5),s=o.n(c),p=o(4),l=o.n(p),u=o(13),m=o(165),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),o=Object(u.c)(this.props.to);Object(u.f)(e,o)?s()(!1,"You tried to redirect to the same route you're currently on: \""+o.pathname+o.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,o=t.to;return e?"string"==typeof o?Object(m.a)(o,e.params):d({},o,{pathname:Object(m.a)(o.pathname,e.params)}):o},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,o=this.computeTo(this.props);e?t.push(o):t.replace(o)},e.prototype.render=function(){return null},e}(r.a.Component);h.propTypes={computedMatch:i.a.object,push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};var f=h;e.a=f}}]);
//# sourceMappingURL=documentation.chunk.js.map?e416ddfad708be431394