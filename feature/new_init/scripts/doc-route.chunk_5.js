(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[50,2,47,48,49,51,52,53,54],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},t.default=u},355:function(e,t,n){"use strict";var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,i?"\n":"",i?l.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=i},356:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=n(366),u=n(367),c=n.n(u),s=n(368);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,o=e.removeList,u=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,b=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return l.a.createElement(l.a.Fragment,null,u?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?l.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?b(t):o?h(t):Object(i.renderToStaticMarkup)(t)});else if("html"===n)e+=a?b(t):o?h(t):Object(i.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=c.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=c.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",l.a.createElement("figure",null,l.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},357:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=n(365);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:a?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&c(n.prototype,r),o&&c(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},358:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(355);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},359:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(355);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},360:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(45),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(r).a.string.isRequired},t.default=o},361:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,i=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return l.a.createElement("span",{key:t},e,t<i.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=i},362:function(e,t,n){"use strict";n.r(t);var a=n(354);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(356);n.d(t,"ComponentPreview",function(){return l.default});var r=n(363);n.d(t,"DocContainer",function(){return r.default});var o=n(364);n.d(t,"DocHeading",function(){return o.default});var i=n(357);n.d(t,"DocToc",function(){return i.default});var u=n(358);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var c=n(359);n.d(t,"ExperimentalComponentAlert",function(){return c.default});var s=n(360);n.d(t,"Icon",function(){return s.default});var m=n(361);n.d(t,"PxScript",function(){return m.default})},363:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=n(362),u=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(i.DocToc,{component:a}):null))};u.propTypes={docToc:o.a.bool},t.default=u},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=b,t.HashLink=h,t.NavHashLink=g;var r=u(n(1)),o=u(n(45)),i=n(98);function u(e){return e&&e.__esModule?e:{default:e}}var c="",s=null,m=null,p=null;function d(){c="",null!==s&&s.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function f(){var e=document.getElementById(c);return null!==e&&(p(e),d(),!0)}function b(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return r.default.createElement(t,a({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?c=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(c=e.to.hash.replace("#","")),""!==c&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return b(e,i.Link)}function g(e){return b(e,i.NavLink)}var v={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};h.propTypes=v,g.propTypes=v},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(370);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return l(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(a).default}})},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),o=(a=r)&&a.__esModule?a:{default:a},i=n(45);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),o=0;o<l;o++)r[o]=arguments[o];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a._handleRefMount=function(e){a._domNode=e},u(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),l(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return o.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();c.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},c.defaultProps={component:"code"},t.default=c},371:function(e,t,n){"use strict";var a=n(1),l=n.n(a),r=n(45),o=n.n(r),i=n(131),u=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,n=e.id,a=e.name,r=e.value,o=e.href,i=e.icon,s=e.loading,m=e.type,p=e.disabled,d=e.btnType,f=e.fullWidth,b=e.loader,h=e.pullRight,g=e.input,v=e.outline,y=e.active,E=e.size,w=u()("btn","btn-".concat(v?"outline-":"").concat(m),E?"btn-".concat(E):null,s?"loading":null,f?"btn-block":null,h?"pull-right":null,y&&o?"active":null,p&&o?"disabled":null),P={href:o,id:n,name:a,defaultValue:r,disabled:o?null:p,"data-button-loader":b?"":null,active:y&&!o?"":null,role:o?"button":null,type:o?null:d||"button","aria-pressed":!!y||null,"aria-disabled":!(!o||!p)||null,tabIndex:o&&p?"-1":null};return o?l.a.createElement("a",c({className:w},P),i?"\n\t":null,i?l.a.createElement("i",{className:"material-icons"},i):null,i&&t?l.a.createElement("span",null,t):t):g?l.a.createElement("input",c({className:w},P)):l.a.createElement("button",c({className:w},P),i?"\n\t\t":null,i?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"material-icons"},i),"\n\t\t"):null,i&&t?l.a.createElement("span",null,t):t,i?"\n\t":null)};s.propTypes={type:o.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:o.a.string,id:o.a.string,name:o.a.string,value:o.a.string,href:o.a.string,icon:o.a.string,loading:o.a.bool,disabled:o.a.bool,btnType:o.a.string,fullWidth:o.a.bool,loader:o.a.bool,pullRight:o.a.bool,input:o.a.bool,outline:o.a.bool,active:o.a.bool,size:o.a.oneOf(["lg","sm","xs"])},t.a=s},388:function(e,t,n){"use strict";n.r(t),n.d(t,"Examples",function(){return g}),n.d(t,"UsageWithOtherTags",function(){return v}),n.d(t,"OutlineButtons",function(){return y}),n.d(t,"ButtonGroup",function(){return E}),n.d(t,"Sizes",function(){return w}),n.d(t,"ActiveState",function(){return P}),n.d(t,"DisabledState",function(){return k}),n.d(t,"UsageWithIcons",function(){return T}),n.d(t,"ButtonLoader",function(){return O});var a=n(1),l=n.n(a),r=n(98),o=n(369),i=n.n(o),u=n(362),c=n(371),s=n(355),m=n(66);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"examples"},"Examples"),l.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{type:"destructive",label:"Destructive"}),"\n",l.a.createElement(c.a,{type:"link",label:"Link"}),"\n")))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),l.a.createElement("p",null,"The ",l.a.createElement(u.Property,{value:".btn"})," classes are designed to be used with the ",l.a.createElement(i.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",l.a.createElement(i.a,{className:"language-html"},"<a>")," or ",l.a.createElement(i.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),l.a.createElement("p",null,"When using button classes on ",l.a.createElement(i.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",l.a.createElement(u.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Anchor",href:"#"}),"\n",l.a.createElement(c.a,{type:"executive",label:"Button"}),"\n",l.a.createElement(c.a,{type:"executive",input:!0,value:"Input",btnType:"button"}),"\n",l.a.createElement(c.a,{type:"executive",input:!0,value:"Submit",btnType:"submit"}),"\n",l.a.createElement(c.a,{type:"executive",input:!0,value:"Reset",btnType:"reset"}),"\n")))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),l.a.createElement("p",null,"Replace the default modifier classes with the ",l.a.createElement(u.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{outline:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{outline:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{outline:!0,type:"destructive",label:"Destructive"}),"\n")))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-group"},"Using buttons together"),l.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",l.a.createElement(u.Property,{value:".button-group"}),"."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Activate"}),"\n",l.a.createElement(c.a,{type:"guiding",label:"Disable"}),"\n",l.a.createElement(c.a,{type:"destructive",label:"Delete"}),"\n")))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"sizes"},"Sizes"),l.a.createElement("p",null,"For a different sized button add ",l.a.createElement(u.Property,{value:".btn-lg"}),", ",l.a.createElement(u.Property,{value:".btn-sm"})," or ",l.a.createElement(u.Property,{value:".btn-xs"}),"."),l.a.createElement("h3",null,"Large"),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{size:"lg",type:"executive",label:"Large button"}),"\n",l.a.createElement(c.a,{size:"lg",type:"guiding",label:"Large button"}),"\n")),l.a.createElement("h3",null,"Small"),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{size:"sm",type:"executive",label:"Small button"}),"\n",l.a.createElement(c.a,{size:"sm",type:"guiding",label:"Small button"}),"\n")),l.a.createElement("h3",null,"Extra small"),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{size:"xs",type:"executive",label:"Extra small button"}),"\n",l.a.createElement(c.a,{size:"xs",type:"guiding",label:"Extra small button"}),"\n")),l.a.createElement("h3",null,"Block level"),l.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",l.a.createElement(u.Property,{value:".btn-block"}),"."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{fullWidth:!0,type:"executive",label:"Block level button"}),"\n",l.a.createElement(c.a,{fullWidth:!0,type:"guiding",label:"Block level button"}),"\n")))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"active-state"},"Active state"),l.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",l.a.createElement("b",null,"There’s no need to add a class to ",l.a.createElement(i.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",l.a.createElement(u.Property,{value:".active"})," (and include the ",l.a.createElement(u.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{href:"#",active:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{href:"#",active:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{href:"#",active:!0,type:"destructive",label:"Destructive"}),"\n")))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"disabled-state"},"Disabled state"),l.a.createElement("p",null,"Make buttons look inactive by adding the ",l.a.createElement(u.Attribute,{name:"disabled"})," boolean attribute to any ",l.a.createElement(i.a,{className:"language-html"},"<button>")," element."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{disabled:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{disabled:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{disabled:!0,type:"destructive",label:"Destructive"}),"\n")),l.a.createElement("p",null,"Disabled buttons using the ",l.a.createElement(i.a,{className:"language-html"},"<a>")," element behave a bit different:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{className:"language-html"},"<a>"),"s do not support the ",l.a.createElement(u.Attribute,{name:"disabled"}),"attribute, so you must add the ",l.a.createElement(u.Property,{value:".disabled"})," class to make it visually appear disabled."),l.a.createElement("li",null,"Some future-friendly styles are included to disable all ",l.a.createElement(u.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),l.a.createElement("li",null,"Disabled buttons should include the ",l.a.createElement(u.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{href:"#",disabled:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{href:"#",disabled:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{href:"#",disabled:!0,type:"destructive",label:"Destructive"}),"\n")),l.a.createElement(s.a,{type:"warning"},l.a.createElement("h5",null,"Link functionality caveat"),l.a.createElement("p",null,"The ",l.a.createElement(u.Property,{value:".disabled"})," class uses ",l.a.createElement(u.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",l.a.createElement(i.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",l.a.createElement(u.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",l.a.createElement(u.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),l.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",l.a.createElement(i.a,{className:"language-html"},"<button>"),"."),l.a.createElement("p",null,"Read more about icon usage here ",l.a.createElement(r.Link,{to:"/docs/core/icons"},"here"),"."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{icon:"cloud",type:"executive",label:"Executive"}),"\n\n",l.a.createElement(c.a,{icon:"cloud",type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{icon:"cloud",type:"destructive",label:"Destructive"}),"\n")))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-loader"},"Button loader"),l.a.createElement("p",null,"To use a button with a loader simply add the attribute ",l.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",l.a.createElement(u.Property,{value:".loading"})," to display the loader."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"Disabled loader"),l.a.createElement("p",null,l.a.createElement(u.Property,{value:".loading"})," with ",l.a.createElement(u.Attribute,{name:"disabled"})),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{disabled:!0,type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{disabled:!0,type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{disabled:!0,type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"Outline loader"),l.a.createElement("p",null,l.a.createElement(u.Property,{value:".loading"})," with ",l.a.createElement(u.Property,{value:".outline"})),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{outline:!0,type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{outline:!0,type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{outline:!0,type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"The markup"),l.a.createElement("p",null,"Adding the attribute ",l.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),l.a.createElement(u.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",l.a.createElement("div",{className:"loader"},"\n\t\t",l.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",l.a.createElement("li",null),"\n\t\t\t",l.a.createElement("li",null),"\n\t\t\t",l.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),l.a.createElement(s.a,{type:"warning"},l.a.createElement("h5",null,"Including the loader html"),l.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you do ",l.a.createElement("b",null,"not")," add the attribute ",l.a.createElement(u.Attribute,{data:!0,name:"button-loader"}),".")))},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,b(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return l.a.createElement(u.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(E,null),l.a.createElement(w,null),l.a.createElement(P,null),l.a.createElement(k,null),l.a.createElement(T,null))}}])&&d(n.prototype,r),o&&d(n,o),t}();t.default=N}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?9056b56604faed583edb