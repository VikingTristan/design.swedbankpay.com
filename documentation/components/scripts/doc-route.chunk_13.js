(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,3,5,46,47,48,49,50,52],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=u},421:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},422:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(421);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(421);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},425:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=n(427),u=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};u.propTypes={docToc:l.a.bool},t.default=u},427:function(e,t,n){"use strict";n.r(t);var a=n(420);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var o=n(426);n.d(t,"DocContainer",function(){return o.default});var l=n(429);n.d(t,"DocHeading",function(){return l.default});var c=n(430);n.d(t,"DocToc",function(){return c.default});var u=n(422);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var i=n(423);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(424);n.d(t,"Icon",function(){return s.default});var m=n(425);n.d(t,"PxScript",function(){return m.default})},428:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),o=n.n(r),p=n(431),l=n(432),f=n.n(l),d=n(433);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,u=e.dangerousHTML,i=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&u)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?i(e):c?s(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=o?i(a):c?s(a):Object(p.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",m.a.createElement("figure",null,m.a.createElement(d.a,E({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",E({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",E({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},495:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),a=n(434),r=n.n(a),l=n(427),c=n(2),u=n.n(c),i=n(187),m=n.n(i),p=function(e){var t=e.type,n=e.items,a=e.text,r=e.arrows,o=e.farArrows,l=-1,c=n?n.length-1:-2,u=m()("pagination",t?"pagination-".concat(t):""),i=function(e){var t=e.type,n=!1;return"start"===t||"back"===t?n=0===l:"forward"!==t&&"end"!==t||(n=l===c),s.a.createElement("li",{className:"arrow-".concat(t)},"\n",n?s.a.createElement("span",null):s.a.createElement("a",{href:"#"}),"\n")};return s.a.createElement("ul",{className:u},o?s.a.createElement(i,{type:"start"}):null,r?s.a.createElement(i,{type:"back"}):null,n?n.map(function(e,t){var n=e.name,a=e.href,r=e.active;return r&&(l=t),s.a.createElement("li",{key:t,className:"".concat(r?"active":"")},"\n",s.a.createElement("a",{href:a},n),"\n")}):null,a?s.a.createElement("li",null,"\n",s.a.createElement("span",{className:"text"},a),"\n"):null,r?s.a.createElement(i,{type:"forward"}):null,o?s.a.createElement(i,{type:"end"}):null)};p.propTypes={type:u.a.oneOf(["bullets","simple"]),items:u.a.array,text:u.a.string,arrows:u.a.bool,farArrows:u.a.bool};var f=p;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"DefaultPagination",function(){return b}),n.d(t,"SimplePagination",function(){return k}),n.d(t,"PaginationBullets",function(){return w});var h=[{name:"1",href:"#",active:!1},{name:"2",href:"#",active:!1},{name:"3",href:"#",active:!1},{name:"4",href:"#",active:!1},{name:"5",href:"#",active:!0}],b=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"default-pagination"},"Default pagination"),s.a.createElement("p",null,"Default pagination shows the pages as numbers. Add ",s.a.createElement(l.Property,{value:".pagination"})," to an ",s.a.createElement(r.a,{className:"language-html"},"<ul>")," containing",s.a.createElement(r.a,{className:"language-html"},"<li>"),". If you wish to present the user with navigational arrows you need to add those as ",s.a.createElement(r.a,{className:"language-html"},"<li>")," elements."),s.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(f,{items:h,arrows:!0,farArrows:!0})))},w=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"pagination-bullets"},"Pagination bullets"),s.a.createElement("p",null,"If you want to show bullets instead of numbers you can add ",s.a.createElement(l.Property,{value:".pagination-bullets"})," to your ",s.a.createElement(r.a,{className:"language-html"},"<ul>"),"."),s.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(f,{type:"bullets",items:h,arrows:!0,farArrows:!0})))},k=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"simple-pagination"},"Simple pagination"),s.a.createElement("p",null,"If the number of pages get high enough then it is better to use numbers."),s.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(f,{text:"16 of 256",arrows:!0,farArrows:!0})))},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,g(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){return s.a.createElement(l.DocContainer,{docToc:!0},s.a.createElement("p",{className:"lead"},"Use the pagination component to indicate that a series of related content exist across multiple pages."),s.a.createElement(b,null),s.a.createElement(w,null),s.a.createElement(k,null))}}])&&E(n.prototype,a),r&&E(n,r),t}();t.default=N}}]);
//# sourceMappingURL=doc-route.chunk_13.js.map?a2ad6caa947faafc4120