(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[48,2,52,53,54,55,56,57],{362:function(e,t,a){"use strict";a.r(t);var n=a(363);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(365);a.d(t,"ComponentPreview",function(){return r.default});var l=a(370);a.d(t,"DocContainer",function(){return l.default});var o=a(366);a.d(t,"DocHeading",function(){return o.default});var c=a(367);a.d(t,"DocToc",function(){return c.default});var i=a(371);a.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=a(372);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=a(368);a.d(t,"Icon",function(){return u.default});var p=a(373);a.d(t,"JavascriptDocs",function(){return p.default});var m=a(369);a.d(t,"PxScript",function(){return m.default})},363:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(48),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},364:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(1),r=a.n(n),l=a(48),o=a.n(l),c=a(362),i=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?r.a.createElement("i",{className:"material-icons alert-icon"},n):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,o=e.headerText,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(a)},r.a.createElement("header",{className:"alert-header"},n?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(c.Icon,{classNames:"alert-icon",icon:n})):null,o?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("h3",null,o),"\n"):null,l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(c.Icon,{icon:"close"}),"\n\t"):null,"\n"),i?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.b=i},365:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),o=a.n(l),c=a(375),i=a(376),s=a.n(i),u=a(377);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,a=e.language,n=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,E=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===a&&E)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===a&&t&&"function"==typeof t.map)t.map(function(t){e+=n?y(t):o?v(t):Object(c.renderToStaticMarkup)(t)});else if("html"===a)e+=n?y(t):o?v(t):Object(c.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(a){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,p({},u.b,{theme:void 0,code:e,language:a}),function(e){var t=e.className,a=e.style,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return r.a.createElement("div",p({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},366:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(66);t.default=Object(l.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),r.a.createElement("h1",null,t)})},367:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),o=a.n(l),c=a(374);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var a=e.type().props.children[0];if("h2"===a.type)t.push({title:a.props.children,id:a.props.id});else if("function"==typeof a.type){var n=a.type().props.children[0];"h2"===n.type&&t.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=u(this,p(t).call(this,e))).state={headings:d(a.props.component().props.children),windowTopPosition:window.pageYOffset},a}var a,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n["Component"]),a=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,a){if(t.id&&t.title){var n=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[a+1].top;return r.a.createElement("li",{key:a,className:n?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(a.prototype,l),o&&s(a,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},368:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),o=function(e){var t=e.icon,a=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(a?" ".concat(a):"")},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},369:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),o=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(a=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,n),r.a.createElement("span",{className:"token punctuation"},"."),a,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},370:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),o=a.n(l),c=a(362),i=function(e){var t=e.docToc,a=e.children,n=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement(c.DocHeading,null),r.a.createElement("div",{className:"row"},r.a.createElement(n,null),t?r.a.createElement(c.DocToc,{component:n}):null))};i.propTypes={docToc:o.a.bool},t.default=i},371:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(364);t.default=function(){return r.a.createElement(l.b,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},372:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(364);t.default=function(){return r.a.createElement(l.b,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},373:function(e,t,a){"use strict";a.r(t),a.d(t,"OpenDocs",function(){return c}),a.d(t,"CloseDocs",function(){return i});var n=a(1),r=a.n(n),l=a(97),o=a(362),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,a=e.open,n=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(o.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),a?r.a.createElement(c,{componentName:t}):null,n?r.a.createElement(i,{componentName:t}):null)}},374:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)};t.genericHashLink=y,t.HashLink=v,t.NavHashLink=h;var o=s(a(1)),c=s(a(48)),i=a(97);function s(e){return e&&e.__esModule?e:{default:e}}var u="",p=null,m=null,d=null;function f(){u="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function E(){var e=document.getElementById(u);return null!==e&&(d(e),f(),!0)}function y(e,t){e.scroll,e.smooth;var a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["scroll","smooth"]);return o.default.createElement(t,r({},a,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===E()&&(null===p&&(p=new MutationObserver(E)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return y(e,i.Link)}function h(e){return y(e,i.NavLink)}var g={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};v.propTypes=g,h.propTypes=g},433:function(e,t,a){"use strict";a.r(t),a.d(t,"HowItWorks",function(){return o}),a.d(t,"Notation",function(){return c}),a.d(t,"Examples",function(){return i});var n=a(1),r=a.n(n),l=a(362),o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"how-it-works"},"How it works"),r.a.createElement("p",null,"Assign responsive-friendly ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are ranging from ",r.a.createElement(l.Property,{value:"0.25rem"})," to ",r.a.createElement(l.Property,{value:"3rem"}),"."))},c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"notation"},"Notation"),r.a.createElement("p",null,"Spacing utilities that apply to all breakpoints, from ",r.a.createElement(l.Property,{value:"xs"})," to ",r.a.createElement(l.Property,{value:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",r.a.createElement(l.Property,{value:"min-width: 0"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."),r.a.createElement("p",null,"The classes are named using the format ",r.a.createElement(l.Property,{value:"{property}{sides}-{size}"})," for ",r.a.createElement(l.Property,{value:"xs"})," and ",r.a.createElement(l.Property,{value:"{property}{sides}-{breakpoint}-{size}"})," for ",r.a.createElement(l.Property,{value:"sm"}),", ",r.a.createElement(l.Property,{value:"md"}),", ",r.a.createElement(l.Property,{value:"lg"}),", ",r.a.createElement(l.Property,{value:"xl"}),", and ",r.a.createElement(l.Property,{value:"xxl"}),"."),r.a.createElement("p",null,"Where ",r.a.createElement("i",null,"property")," is one of:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Property,{value:"m"})," - for classes that set ",r.a.createElement(l.Property,{value:"margin"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"p"})," - for classes that set ",r.a.createElement(l.Property,{value:"padding"}))),r.a.createElement("p",null,"Where ",r.a.createElement("i",null,"sides")," is one of:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Property,{value:"t"})," - for classes that set ",r.a.createElement(l.Property,{value:"margin-top"})," or ",r.a.createElement(l.Property,{value:"padding-top"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"b"})," - for classes that set ",r.a.createElement(l.Property,{value:"margin-bottom"})," or ",r.a.createElement(l.Property,{value:"padding-bottom"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"l"})," - for classes that set ",r.a.createElement(l.Property,{value:"margin-left"})," or ",r.a.createElement(l.Property,{value:"padding-left"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"r"})," - for classes that set ",r.a.createElement(l.Property,{value:"margin-right"})," or ",r.a.createElement(l.Property,{value:"padding-right"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"x"})," - for classes that set both ",r.a.createElement(l.Property,{value:"*-left"})," or ",r.a.createElement(l.Property,{value:"*-right"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"y"})," - for classes that set both ",r.a.createElement(l.Property,{value:"*-top"})," or ",r.a.createElement(l.Property,{value:"*-bottom"}))),r.a.createElement("p",null,"Where ",r.a.createElement("i",null,"size")," is one of:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Property,{value:"0"})," - for classes that eliminate the ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," by setting it to ",r.a.createElement(l.Property,{value:"0"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"1"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," to ",r.a.createElement(l.Property,{value:"@spacer * 0.25"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"2"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," to ",r.a.createElement(l.Property,{value:"@spacer * 0.5"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"3"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," to ",r.a.createElement(l.Property,{value:"@spacer"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"4"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," to ",r.a.createElement(l.Property,{value:"@spacer * 1.5"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"5"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," or ",r.a.createElement(l.Property,{value:"padding"})," to ",r.a.createElement(l.Property,{value:"@spacer * 3"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"auto"})," - for classes that set ",r.a.createElement(l.Property,{value:"margin"})," to ",r.a.createElement(l.Property,{value:"auto"}))),r.a.createElement("p",null,"For margin you can also set negative ",r.a.createElement("i",null,"size")," (excluding ",r.a.createElement(l.Property,{value:"0"}),"):"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Property,{value:"n1"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," to ",r.a.createElement(l.Property,{value:"-@spacer * 0.25"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"n2"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," to ",r.a.createElement(l.Property,{value:"-@spacer * 0.5"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"n3"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," to ",r.a.createElement(l.Property,{value:"-@spacer"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"n4"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," to ",r.a.createElement(l.Property,{value:"-@spacer * 1.5"})),r.a.createElement("li",null,r.a.createElement(l.Property,{value:"n5"})," - for classes that set the ",r.a.createElement(l.Property,{value:"margin"})," to ",r.a.createElement(l.Property,{value:"-@spacer * 3"}))),r.a.createElement("p",null,"(",r.a.createElement(l.Property,{value:"@spacer"})," is set to ",r.a.createElement(l.Property,{value:"1rem (16px)"}),")"))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"examples"},"Examples"),r.a.createElement("p",null,"Here are some representative examples of these classes:"),r.a.createElement(l.ComponentPreview,{language:"css",codeFigure:!0},"\n                .mt-0 {\n                    margin-top: 0 !important;\n                }\n                \n                .ml-1 {\n                    margin-left: (@spacer * 0.25) !important;\n                }\n                \n                .px-2 {\n                    padding-left: (@spacer * 0.5) !important;\n                    padding-right: (@spacer * 0.5) !important;\n                }\n                \n                .p-3 {\n                    padding: @spacer !important;\n                }\n            "),r.a.createElement("h3",null,"Horizontal centering"),r.a.createElement("p",null,"Additionally, DesignGuide also includes an ",r.a.createElement(l.Property,{value:".mx-auto"})," class for horizontally centering fixed-width block level content—that is, content that has ",r.a.createElement(l.Property,{value:"display: block"})," and a ",r.a.createElement(l.Property,{value:"width"})," set—by setting the horizontal margins to auto."),r.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0,showCasePanel:!0,removeOuterTag:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto p-2 bg-default"},"\n","Centered element","\n"))))};t.default=function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"The DesignGuide includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance."),r.a.createElement(o,null),r.a.createElement(c,null),r.a.createElement(i,null))}}}]);
//# sourceMappingURL=doc-route.chunk_47.js.map?47aac51699954e638434