(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[11,5,46,48,49,50,52],{420:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},421:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},422:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},425:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(a=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},426:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=a(427),u=function(e){var t=e.docToc,a=e.children,n=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(n,null),t?r.a.createElement(c.DocToc,{component:n}):null))};u.propTypes={docToc:o.a.bool},t.default=u},427:function(e,t,a){"use strict";a.r(t);var n=a(420);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(428);a.d(t,"ComponentPreview",function(){return r.default});var l=a(426);a.d(t,"DocContainer",function(){return l.default});var o=a(429);a.d(t,"DocHeading",function(){return o.default});var c=a(430);a.d(t,"DocToc",function(){return c.default});var u=a(422);a.d(t,"DeprecatedComponentAlert",function(){return u.default});var i=a(423);a.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=a(424);a.d(t,"Icon",function(){return s.default});var m=a(425);a.d(t,"PxScript",function(){return m.default})},460:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicUsage",function(){return p}),a.d(t,"Sizes",function(){return f}),a.d(t,"MutedLoader",function(){return E}),a.d(t,"StaticHtml",function(){return v});var l=a(1),o=a.n(l),c=a(427),n=a(223),u=a(68);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-usage"},"Basic usage"),o.a.createElement("p",null,"To use a default loader add ",o.a.createElement(c.Property,{value:".loader"}),", ",o.a.createElement(c.Property,{value:".loader-default"})," and ",o.a.createElement(c.Attribute,{name:"loader",data:!0})," to a div."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(n.a,{size:"default",visible:!0})))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"In addition to ",o.a.createElement(c.Property,{value:".loader-default"})," you can use ",o.a.createElement(c.Property,{value:".loader-small"})," and ",o.a.createElement(c.Property,{value:".loader-large"})," to decrease or increase the size of the loader."),o.a.createElement("h3",null,"Small"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(n.a,{size:"small",visible:!0})),o.a.createElement("h3",null,"Large"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(n.a,{size:"large",visible:!0})))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"muted-loader"},"Muted loader"),o.a.createElement("p",null,"Use class ",o.a.createElement(c.Property,{value:".loader-muted"})," to make the loader muted."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(n.a,{id:"test",size:"default",visible:!0,muted:!0})))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"static-html"},"Static HTML"),o.a.createElement("p",null,"Using the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"loader"})," will append the following HTML to the element:"),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("ul",{className:"loader-icon"},o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null))),o.a.createElement("p",null,"If you want to use the static HTML instead of the data-attribute, make sure to ",o.a.createElement("b",null,"NOT")," include the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"loader"}),"."))},y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,m(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,l["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){u.loader.init()}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use loaders to indicate to the user that your web application is loading."),o.a.createElement(p,null),o.a.createElement(f,null),o.a.createElement(E,null),o.a.createElement(v,null))}}])&&i(a.prototype,n),r&&i(a,r),t}();t.default=y}}]);
//# sourceMappingURL=doc-route.chunk_10.js.map?a902c2fd9f50e211f73c