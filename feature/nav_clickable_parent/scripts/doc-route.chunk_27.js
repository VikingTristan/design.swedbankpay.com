(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[26,2,52,53,54,55,56],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(364);n.d(t,"ComponentPreview",function(){return r.default});var l=n(368);n.d(t,"DocContainer",function(){return l.default});var o=n(372);n.d(t,"DocHeading",function(){return o.default});var c=n(365);n.d(t,"DocToc",function(){return c.default});var i=n(369);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(370);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(366);n.d(t,"Icon",function(){return u.default});var m=n(371);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(367);n.d(t,"PxScript",function(){return p.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},363:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(361),i=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.headerText,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r.a.createElement("header",{className:"alert-header"},a?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(c.Icon,{classNames:"alert-icon",icon:a})):null,o?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("h3",null,o),"\n"):null,l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(c.Icon,{icon:"close"}),"\n\t"):null,"\n"),i?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.b=i},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(374),i=n(375),s=n.n(i),u=n(376);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,E=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?E(t):o?h(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?E(t):o?h(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(373);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,l),o&&s(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=function(e){var t=e.icon,n=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(361),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(363);t.default=function(){return r.a.createElement(l.b,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(363);t.default=function(){return r.a.createElement(l.b,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},371:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),l=n(97),o=n(361),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)}},373:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=y;var o=s(n(1)),c=s(n(53)),i=n(97);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,d=null;function f(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function E(){var e=document.getElementById(u);return null!==e&&(d(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===E()&&(null===m&&(m=new MutationObserver(E)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return h(e,i.Link)}function y(e){return h(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};v.propTypes=b,y.propTypes=b},445:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(361),o=n(53),c=n.n(o),i=function(e){var t=e.name,n=e.hex,a=e.color,l={backgroundColor:n},o={color:a||null};return r.a.createElement("div",{className:"color-preview",style:l},r.a.createElement("p",{style:a?o:null},t," (",n,")"))};i.propTypes={name:c.a.string.isRequired,hex:c.a.string.isRequired,color:c.a.string};var s=i;n.d(t,"MainColors",function(){return u}),n.d(t,"AlertColors",function(){return m}),n.d(t,"Grayscale",function(){return p});var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"main-colors"},"Main colors"),r.a.createElement("p",null,"The main color palette of Swedbank Pay"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row color-container"},r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"orange-medium",hex:"#ee7023"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"orange-light",hex:"#ff9900"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"orange-bright",hex:"#ffcc00"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"green",hex:"#82b236"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"blue",hex:"#5b8ad6"}))),r.a.createElement("div",{className:"row color-container"},r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"blue-light",hex:"#a2c9ce"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"blue-bright",hex:"#d7e6e9"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"teal",hex:"#4893a0"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"blue-bright-alt",hex:"#a3c9cf"})),r.a.createElement("div",{className:"col-xl col-lg-2 col-12 mb-lg-0"},r.a.createElement(s,{name:"red-medium",hex:"#dd3300"})))))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"alert-colors"},"Alert colors"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row color-container"},r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-success",hex:"#477d17"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-success-light",hex:"#f2f7eb"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-warning",hex:"#ff9900"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-warning-light",hex:"#fffae5"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-error-border",hex:"#f1bbb9"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-error",hex:"#b24843"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-error-light",hex:"#fceeed"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-info",hex:"#2c7a8f"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-info-light",hex:"#f0f9fb"})))))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"grayscale"},"Grayscale"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row color-container"},r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"black",hex:"#000000",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"nearblack",hex:"#111111",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-dark",hex:"#262626",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-medium-dark",hex:"#363636",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-medium",hex:"#404040",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-medium-light",hex:"#545454",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-light",hex:"#666666",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-light-alt",hex:"#999999"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-bright",hex:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-bright-alt",hex:"#bcbcbc"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"neargray",hex:"#f9f9f9"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"offwhite",hex:"#f4f4f4"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"nearwhite",hex:"#f0f0f0"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"white",hex:"#ffffff",color:"black"})))))};t.default=function(){return r.a.createElement(l.DocContainer,null,r.a.createElement("p",{className:"lead"},"The Swedbank Pay DesignGuide color palette"),r.a.createElement(u,null),r.a.createElement(m,null),r.a.createElement(p,null))}}}]);
//# sourceMappingURL=doc-route.chunk_27.js.map?86569a269ae4a114febe