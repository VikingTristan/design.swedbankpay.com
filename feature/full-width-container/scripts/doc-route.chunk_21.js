(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[22,44,46,47,48,49,51],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(422);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(422);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(427);n.d(t,"ComponentPreview",function(){return r.default});var o=n(428);n.d(t,"DocHeading",function(){return o.default});var l=n(429);n.d(t,"DocToc",function(){return l.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var i=n(424);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var u=n(425);n.d(t,"Icon",function(){return u.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},483:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(430),a=n(2),r=n.n(a),l=function(e){var t=e.align,n=e.icon,a=e.text,r=e.target;return i.a.createElement("button",{type:"button",className:"topbar-btn-".concat(t),"data-toggle-nav":"#".concat(r)},"\n\t\t",n?i.a.createElement("i",{className:"material-icons topbar-btn-icon"},n):null,n?"\n\t\t":null,a?i.a.createElement("span",{className:"topbar-btn-text"},a):null,a?"\n\t":null)},u=function(e){var l=e.align,t=e.menu,n=t.id,a=t.hierarchy,r=function(e){var t=e.slide,n=t.id,a=t.items,r=function(e){var t=e.item,n=e.last,a=t.title,r=t.target,o=t.href;return i.a.createElement(c.Fragment,null,o?i.a.createElement("a",{href:o,onClick:function(e){return e.preventDefault()}},a):i.a.createElement("span",{"data-target":"#nav-".concat(l,"-slide-").concat(r)},a),!o||n?"\n":null)},o=function(e){var t=e.groupItem,n=t.groupTitle,a=t.items;return i.a.createElement("div",{className:"topbar-nav-group"},i.a.createElement("div",{className:"topbar-nav-group-heading"},n),"\n",a.map(function(e,t){return i.a.createElement(r,{key:t,item:e,last:t===a.length-1})}))};return i.a.createElement("div",{id:"nav-".concat(l,"-slide-").concat(n),className:"topbar-nav-slide"},i.a.createElement("div",{className:"slides-container"},a.map(function(e,t){return i.a.createElement(c.Fragment,{key:t},"\n",e.groupTitle?i.a.createElement(o,{groupItem:e}):i.a.createElement(r,{item:e,last:t===a.length-1}))})))};return i.a.createElement("nav",{id:n,className:"topbar-nav topbar-nav-".concat(l)},a.map(function(e){return i.a.createElement(r,{key:e.id,slide:e})}))},s=function(e){var t=e.align,n=e.menu,a=n.id,r=n.items;return i.a.createElement("nav",{id:a,className:"topbar-nav topbar-nav-".concat(t)},r.map(function(e,t){return i.a.createElement(c.Fragment,{key:t},"\n",i.a.createElement("a",{href:e.href,onClick:function(e){return e.preventDefault()}},e.title))}),"\n")},m=function(e){var t=e.leftMenu,n=e.rightMenu;return i.a.createElement("div",{className:"topbar"},"\n",t?i.a.createElement(l,{align:"left",icon:t.btn.icon,text:t.btn.text,target:t.id}):null,t?"\n":null,i.a.createElement("a",{href:"#",className:"topbar-logo",onClick:function(e){return e.preventDefault()}}),"\n",n?i.a.createElement(l,{align:"right",icon:n.btn.icon,text:n.btn.text,target:n.id}):null,n?"\n":null,t?i.a.createElement(u,{align:"left",menu:t}):null,t?"\n":null,n?i.a.createElement(s,{align:"right",menu:n}):null,n?"\n":null)};m.propTypes={leftMenu:r.a.object,rightMenu:r.a.object};var p=m,f=n(67);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(e){h(t,e,n[e])})}return t}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"Overview",function(){return w}),n.d(t,"TopbarText",function(){return O});var k=y({id:"topbar-nav-left"},{btn:{icon:"menu",text:"Menu"},hierarchy:[{id:"1",items:[{groupTitle:"Group 1",items:[{title:"Item 1",target:"2"},{title:"Item 2",target:"2"}]},{groupTitle:"Group 2",items:[{title:"Item 1",target:"2"}]},{title:"Link 1",href:"#"}]},{id:"2",items:[{groupTitle:"Group 3",items:[{title:"Item 1",target:"3"}]},{title:"Link 2",href:"#"},{title:"Link 3",href:"#"}]},{id:"3",items:[{title:"Link 4",href:"#"},{title:"Link 5",href:"#"},{title:"Link 6",href:"#"}]}]}),N=y({id:"topbar-nav-right"},{btn:{icon:"menu",text:"Menu"},items:[{title:"Link 1",href:"#"},{title:"Link 2",href:"#"},{title:"Link 3",href:"#"}]}),w=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"overview"},"Overview"),i.a.createElement("p",null,"This will only show the code for the ",i.a.createElement(o.Property,{value:".topbar"})," component, at least for now. For a demonstration of the usage check the example app (coming soon), or implement it in your own project!"),i.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(p,{logo:"default",leftMenu:k,rightMenu:N})))},O=function(){return i.a.createElement("div",{className:"col-lg-10 doc-body"},i.a.createElement("p",{className:"lead"},"Topbar..."),i.a.createElement(w,null))},T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,b(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,c["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){f.topbar.init(1)}},{key:"render",value:function(){return i.a.createElement("div",{className:"doc-container"},i.a.createElement("div",{className:"row"},i.a.createElement(O,null),i.a.createElement(o.DocToc,{component:O})))}}])&&v(n.prototype,a),r&&v(n,r),t}();t.default=T}}]);
//# sourceMappingURL=doc-route.chunk_21.js.map?28c0635c7376ba083430