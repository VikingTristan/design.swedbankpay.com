(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[8,45,47,48,49,50,52],{421:function(e,n,t){"use strict";t.r(n),t.d(n,"Property",function(){return l});var a=t(1),r=t.n(a),c=t(2),o=t.n(c),l=function(e){var n=e.value;return r.a.createElement("code",{className:"token property"},n)},u=function(e){var n=e.data,t=e.name,a=e.value;return t&&a?r.a.createElement("code",null,n?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!a?r.a.createElement("code",null,n?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},l.propTypes={value:o.a.string.isRequired},n.default=u},422:function(e,n,t){"use strict";var a=t(1),l=t.n(a),r=t(2),c=t.n(r),o=function(e){var n=e.id,t=e.type,a=e.icon,r=e.close,c=e.text,o=e.children;return l.a.createElement("div",{id:n,className:"alert alert-".concat(t)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,c?"\n":"",c?l.a.createElement("p",null,c):null,o?"\n":"",o?l.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},n.a=o},423:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(422);n.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(422);n.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(2),o=function(e){var n=e.icon;return r.a.createElement("i",{className:"material-icons"},n)};o.propTypes={icon:t.n(c).a.string.isRequired},n.default=o},426:function(e,n,t){"use strict";t.r(n);var a=t(1),l=t.n(a),r=t(2),c=t.n(r),o=function(e){var n,t,a=e.component,r=e.subComponents,c=e.func,o=e.params;return r&&(t=r.map(function(e,n){return l.a.createElement("span",{key:n},e,l.a.createElement("span",{className:"token punctuation"},"."))})),o&&(n=o.map(function(e,n){return l.a.createElement("span",{key:n},e,n<o.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),t,l.a.createElement("span",{className:"token function"},c),l.a.createElement("span",{className:"token punctuation"},"("),n,l.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},n.default=o},430:function(e,n,t){"use strict";t.r(n);var a=t(421);t.d(n,"Attribute",function(){return a.default}),t.d(n,"Property",function(){return a.Property});var r=t(427);t.d(n,"ComponentPreview",function(){return r.default});var c=t(428);t.d(n,"DocHeading",function(){return c.default});var o=t(429);t.d(n,"DocToc",function(){return o.default});var l=t(423);t.d(n,"DeprecatedComponentAlert",function(){return l.default});var u=t(424);t.d(n,"ExperimentalComponentAlert",function(){return u.default});var i=t(425);t.d(n,"Icon",function(){return i.default});var s=t(426);t.d(n,"PxScript",function(){return s.default})},446:function(e,n,t){"use strict";t.r(n),t.d(n,"Overview",function(){return r}),t.d(n,"Anchorpoints",function(){return f}),t.d(n,"ActionListText",function(){return d});var c=t(1),o=t.n(c),l=t(430),u=t(42);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var r=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"Action lists."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"action-list"},"\n",o.a.createElement(l.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"anchorpoints"},"Anchorpoints"),o.a.createElement("p",null,"Customize anchorpoint... Top right is default."),o.a.createElement("h3",null,"Top left"),o.a.createElement("p",null,"Use class ",o.a.createElement("code",{className:"token property"},".anchor-top-left")," to anchor action-list button to the top left corner of the menu."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"action-list anchor-top-left"},"\n",o.a.createElement(l.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))),o.a.createElement("h3",null,"Bottom right"),o.a.createElement("p",null,"Use class ",o.a.createElement("code",{className:"token property"},".anchor-bottom-right")," to anchor action-list button to the bottom right corner of the menu."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"action-list anchor-bottom-right"},"\n",o.a.createElement(l.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))),o.a.createElement("h3",null,"Bottom left"),o.a.createElement("p",null,"Use class ",o.a.createElement("code",{className:"token property"},".anchor-bottom-left")," to anchor action-list button to the bottom left corner of the menu."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"action-list anchor-bottom-left"},"\n",o.a.createElement(l.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))))},d=function(){return o.a.createElement("div",{className:"col-lg-10 doc-body"},o.a.createElement(l.ExperimentalComponentAlert,null),o.a.createElement("p",{className:"lead"},"Action lists..."),o.a.createElement(r,null),o.a.createElement(f,null))},E=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,m(n).apply(this,arguments))}var t,a,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,c["Component"]),t=n,(a=[{key:"componentDidMount",value:function(){u.a.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(d,null),o.a.createElement(l.DocToc,{component:d})))}}])&&i(t.prototype,a),r&&i(t,r),n}();n.default=E}}]);
//# sourceMappingURL=doc-route.chunk_0.js.map?b57bfe3bcaa8938de98c