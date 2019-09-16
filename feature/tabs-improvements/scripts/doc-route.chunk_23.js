(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[25,2,55,56,57,58,59,60],{357:function(e,t,n){"use strict";n.r(t);var a=n(358);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(360);n.d(t,"ComponentPreview",function(){return r.default});var o=n(365);n.d(t,"DocContainer",function(){return o.default});var l=n(361);n.d(t,"DocHeading",function(){return l.default});var c=n(362);n.d(t,"DocToc",function(){return c.default});var u=n(366);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var i=n(367);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(363);n.d(t,"Icon",function(){return s.default});var m=n(368);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(364);n.d(t,"DgScript",function(){return p.default})},358:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=u},359:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(357),u=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},i=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.headerText,u=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r.a.createElement("header",{className:"alert-header"},a?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(c.Icon,{classNames:"alert-icon",type:a})):null,l?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("h3",null,l),"\n"):null,o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),u?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:"alert-body"},u),"\n"):null)};u.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.b=u},360:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(370),u=n(371),i=n.n(u),s=n(372);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,u=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,b=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},y=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&b)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=i.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=i.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},l({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,showCasePanelSm:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=d},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(66);t.default=Object(o.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),r.a.createElement("h1",null,t)})},362:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(369);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&i(n.prototype,o),l&&i(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},363:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=function(e){var t=e.type,n=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};l.propTypes={type:n.n(o).a.string.isRequired},t.default=l},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"dg"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(357),u=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement(c.DocHeading,null),r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};u.propTypes={docToc:l.a.bool},t.default=u},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(359);t.default=function(){return r.a.createElement(o.b,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(359);t.default=function(){return r.a.createElement(o.b,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},368:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return u});var a=n(1),r=n.n(a),o=n(95),l=n(357),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(l.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},u=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(l.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Function"),r.a.createElement("th",{scope:"col"},"Purpose"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(l.DgScript,{component:t,func:"init"})),r.a.createElement("td",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(u,{componentName:t}):null)))}},369:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=E;var l=i(n(1)),c=i(n(65)),u=n(95);function i(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,d=null;function f(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function b(){var e=document.getElementById(s);return null!==e&&(d(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function y(e){return h(e,u.Link)}function E(e){return h(e,u.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};y.propTypes=v,E.propTypes=v},401:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return d}),n.d(t,"Options",function(){return f}),n.d(t,"PremadeToasts",function(){return b}),n.d(t,"CustomHtml",function(){return h});var a=n(1),r=n.n(a),o=n(95),l=n(357),c=n(359);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"You want jam on that toast?"),r.a.createElement(l.ComponentPreview,{language:"javascript",codeFigure:!0},'dg.toast({ html: "I am a toast!" });'),r.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button onclick="dg.toast({ html: \'I am a toast!\' })" class="btn btn-executive">Toast!</button>'),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("button",{className:"btn btn-executive",type:"button",onClick:function(){return dg.toast({html:"I am a toast!"})}},"Click for toast!")),r.a.createElement(c.b,{type:"warning"},r.a.createElement("h5",null,"Content restriction"),r.a.createElement("p",null,"Don’t put too much text in toasts as they are meant to be visible for only a short amount of time. Due to the time restriction you should also avoid putting vital information in them. A ",r.a.createElement(o.Link,{to:"/docs/components/sheet"},"sheet")," or ",r.a.createElement(o.Link,{to:"/docs/components/dialog"},"dialog")," is recommended when recieving input or relaying large amounts of information.")))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"options"},"Options"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Default"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"html"),r.a.createElement("td",null,"String"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:'""'})),r.a.createElement("td",null,"The HTML content of the Toast.")),r.a.createElement("tr",null,r.a.createElement("td",null,"type"),r.a.createElement("td",null,"String"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:'""'})),r.a.createElement("td",null,"Premade alert types; ",r.a.createElement(l.Attribute,{value:"success"}),", ",r.a.createElement(l.Attribute,{value:"neutral"}),", ",r.a.createElement(l.Attribute,{value:"warning"})," and ",r.a.createElement(l.Attribute,{value:"danger"})," are available.")),r.a.createElement("tr",null,r.a.createElement("td",null,"dismissable"),r.a.createElement("td",null,"Boolean"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:"true"})),r.a.createElement("td",null,"Wether or not the alert should be dismissable by the user (close button).")),r.a.createElement("tr",null,r.a.createElement("td",null,"icon"),r.a.createElement("td",null,"String"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:'""'})),r.a.createElement("td",null,"Custom icon for the toast. See ",r.a.createElement(o.Link,{to:"/docs/core/icons"},"icons")," for more info.")),r.a.createElement("tr",null,r.a.createElement("td",null,"displayLength"),r.a.createElement("td",null,"Number"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:"4000"})),r.a.createElement("td",null,"Length in ms the Toast stays before dismissal.")),r.a.createElement("tr",null,r.a.createElement("td",null,"classes"),r.a.createElement("td",null,"Array of strings"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:"[]"})),r.a.createElement("td",null,"Classes to be added to the toast element.")),r.a.createElement("tr",null,r.a.createElement("td",null,"completeCallback"),r.a.createElement("td",null,"Function"),r.a.createElement("td",null,r.a.createElement(l.Attribute,{value:"null"})),r.a.createElement("td",null,"Callback function called when toast is dismissed.")))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"premade-toasts"},"Premade toasts"),r.a.createElement("p",null,"There are four premade toast styles other than the default one; ",r.a.createElement(l.Attribute,{value:"neutral"}),", ",r.a.createElement(l.Attribute,{value:"success"}),", ",r.a.createElement(l.Attribute,{value:"warning"})," and ",r.a.createElement(l.Attribute,{value:"danger"}),". Apply the desired one to the options object and be amazed!"),r.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button type="button" onclick="dg.toast({ html: \'I am a neutral toast!\', type: \'neutral\' })" class="btn btn-executive">Neutral toast</button>','<button type="button" onclick="dg.toast({ html: \'I am a success toast!\', type: \'success\' })" class="btn btn-executive">Success toast</button>','<button type="button" onclick="dg.toast({ html: \'I am a warning toast!\', type: \'warning\' })" class="btn btn-executive">Warning toast</button>','<button type="button" onclick="dg.toast({ html: \'I am a danger toast!\', type: \'danger\' })" class="btn btn-executive">Danger toast</button>'),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("button",{className:"btn btn-executive",type:"button",onClick:function(){return dg.toast({html:"I am a toast!",type:"neutral"})}},"Neutral toast"),"\n",r.a.createElement("button",{className:"btn btn-executive",type:"button",onClick:function(){return dg.toast({html:"I am a toast!",type:"success"})}},"Success toast"),"\n",r.a.createElement("button",{className:"btn btn-executive",type:"button",onClick:function(){return dg.toast({html:"I am a toast!",type:"warning"})}},"Warning toast"),"\n",r.a.createElement("button",{className:"btn btn-executive",type:"button",onClick:function(){return dg.toast({html:"I am a toast!",type:"danger"})}},"Danger toast")))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"custom-html"},"Custom HTML"),r.a.createElement("p",null,"You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks."),r.a.createElement(l.ComponentPreview,{language:"javascript",codeFigure:!0},"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";","\n","dg.toast({ html: toastHtml });"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("button",{className:"btn btn-executive",type:"button",onClick:function(){return dg.toast({html:'<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class="btn toast-action">Undo</button>'})}},"Toast with action")))},y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,m(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){return r.a.createElement(l.DocContainer,null,r.a.createElement("p",{className:"lead"},"Toasts can be used as a way to give feedback to a user. Use it to display short messages that something has happened that will not be immediatley apparent on the website. This can be everything from a server query to saving some user settings."),r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(h,null))}}])&&i(n.prototype,o),c&&i(n,c),t}();t.default=y}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?339d62d6f4180beaa5dc