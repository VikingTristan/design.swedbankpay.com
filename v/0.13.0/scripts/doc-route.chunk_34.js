(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[38,3,46,47,48,49,50,51,53],{420:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return o});var n=t(1),r=t.n(n),l=t(2),c=t.n(l),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=s},421:function(e,a,t){"use strict";var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},422:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(421);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(421);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},425:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),t,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},426:function(e,a,t){"use strict";t.r(a);var n=t(1),m=t.n(n),r=t(2),l=t.n(r),d=t(430),c=t(431),p=t.n(c),f=t(432);function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var n=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,o=e.removeList,a=e.showCasePanel,t=e.codeFigure,s=e.dangerousHTML,u=function(e){var a=document.createElement("div");return a.innerHTML=Object(d.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},i=function(e){var a=document.createElement("div");a.innerHTML=Object(d.renderToStaticMarkup)(e);var t=a.querySelectorAll("li"),n="";return t.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return m.a.createElement(m.a.Fragment,null,a?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},n)},null):null,t?m.a.createElement(function(){var e,a,t="";if("html"===r&&s)a="","function"==typeof(e=n).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,t=a;else if("html"===r&&n&&"function"==typeof n.map)n.map(function(e){t+=l?u(e):o?i(e):Object(d.renderToStaticMarkup)(e)});else if("html"===r)t+=l?u(n):o?i(n):Object(d.renderToStaticMarkup)(n);else switch(g(n)){case"string":t=n;break;case"object":n.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":t=(t=p.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=p.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,E({},f.b,{theme:void 0,code:t,language:r}),function(e){var a=e.className,t=e.style,n=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:a,style:t},n.map(function(e,a){return m.a.createElement("div",E({key:e+a},r({line:e,key:a})),e.map(function(e,a){return m.a.createElement("span",E({key:a},l({token:e,key:a})))}))}))}))},null):null)};o.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},a.default=o},429:function(e,a,t){"use strict";t.r(a);var n=t(420);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(426);t.d(a,"ComponentPreview",function(){return r.default});var l=t(427);t.d(a,"DocHeading",function(){return l.default});var c=t(428);t.d(a,"DocToc",function(){return c.default});var o=t(422);t.d(a,"DeprecatedComponentAlert",function(){return o.default});var s=t(423);t.d(a,"ExperimentalComponentAlert",function(){return s.default});var u=t(424);t.d(a,"Icon",function(){return u.default});var i=t(425);t.d(a,"PxScript",function(){return i.default})},473:function(e,a,t){"use strict";t.r(a),t.d(a,"TextColors",function(){return s}),t.d(a,"BackgroundColors",function(){return u}),t.d(a,"ColorsText",function(){return i});var n=t(1),r=t.n(n),l=t(433),c=t.n(l),o=t(429),s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-colors"},"Text colors"),r.a.createElement("p",null,"To use a color simply prepend ",r.a.createElement(o.Property,{value:"color-{name}"}),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"color-brand"},"This text is color-brand."),r.a.createElement("p",{className:"color-default"},"This text is color-default."),r.a.createElement("p",{className:"color-neutral"},"This text is color-neutral."),r.a.createElement("p",{className:"color-success"},"This text is color-success."),r.a.createElement("p",{className:"color-warning"},"This text is color-warning."),r.a.createElement("p",{className:"color-danger"},"This text is color-danger.")),r.a.createElement("h3",null,"With ",r.a.createElement(o.Property,{value:".text-muted"})),r.a.createElement("p",null,"To get a muted effect on the color you are using, append a ",r.a.createElement(c.a,{className:"language-html"},"<span>"),"-element with the class ",r.a.createElement(o.Property,{value:".text-muted"})," to the desired element."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"color-brand"},"This text is color-brand, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-default"},"This text is color-default, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-neutral"},"This text is color-neutral, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-success"},"This text is color-success, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-warning"},"This text is color-warning, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-danger"},"This text is color-danger, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending."))))},u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"background-colors"},"Background colors"),r.a.createElement("p",null,"To alter the background-color of an element, add the class ",r.a.createElement(o.Property,{value:"background-{name}"}),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 bg-brand"},".bg-brand"),r.a.createElement("div",{className:"col-12 bg-default"},".bg-default"),r.a.createElement("div",{className:"col-12 bg-neutral"},".bg-neutral"),r.a.createElement("div",{className:"col-12 bg-success"},".bg-success"),r.a.createElement("div",{className:"col-12 bg-warning"},".bg-warning"),r.a.createElement("div",{className:"col-12 bg-danger"},".bg-danger"),r.a.createElement("div",{className:"col-12 bg-white"},".bg-white")))))},i=function(){return r.a.createElement("div",{className:"col-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Convey meaning through color with a handful of color utility classes."),r.a.createElement(s,null),r.a.createElement(u,null))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(i,null),r.a.createElement(o.DocToc,{component:i}))))}}}]);
//# sourceMappingURL=doc-route.chunk_34.js.map?ec427cc48a9b960d27bd