(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[55,2,47,48,49,51,52,53,54],{351:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},352:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},353:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=n(363),i=n(364),u=n.n(i),s=n(365);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},b=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):o?b(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):o?b(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},354:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=n(362);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,l),o&&u(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},355:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(352);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(352);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},359:function(e,t,n){"use strict";n.r(t);var a=n(351);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(353);n.d(t,"ComponentPreview",function(){return r.default});var l=n(360);n.d(t,"DocContainer",function(){return l.default});var o=n(361);n.d(t,"DocHeading",function(){return o.default});var c=n(354);n.d(t,"DocToc",function(){return c.default});var i=n(355);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(356);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(357);n.d(t,"Icon",function(){return s.default});var m=n(358);n.d(t,"PxScript",function(){return m.default})},360:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=n(359),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=b,t.NavHashLink=h;var l=i(n(0)),o=i(n(15)),c=n(57);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,m=null,p=null;function d(){u="",null!==s&&s.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function f(){var e=document.getElementById(u);return null!==e&&(p(e),d(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,a({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function b(e){return y(e,c.Link)}function h(e){return y(e,c.NavLink)}var g={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};b.propTypes=g,h.propTypes=g},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(367);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),o=(a=l)&&a.__esModule?a:{default:a},c=n(15);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a._handleRefMount=function(e){a._domNode=e},i(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return o.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();u.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},u.defaultProps={component:"code"},t.default=u},368:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=n(64),i=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,n=e.id,a=e.name,l=e.value,o=e.href,c=e.icon,s=e.loading,m=e.type,p=e.disabled,d=e.btnType,f=e.fullWidth,y=e.loader,b=e.pullRight,h=e.input,g=e.outline,E=e.active,v=e.size,w=i()("btn","btn-".concat(g?"outline-":"").concat(m),v?"btn-".concat(v):null,s?"loading":null,f?"btn-block":null,b?"pull-right":null,E&&o?"active":null,p&&o?"disabled":null),P={href:o,id:n,name:a,defaultValue:l,disabled:o?null:p,"data-button-loader":y?"":null,active:E&&!o?"":null,role:o?"button":null,type:o?null:d||"button","aria-pressed":!!E||null,"aria-disabled":!(!o||!p)||null,tabIndex:o&&p?"-1":null};return o?r.a.createElement("a",u({className:w},P),c?"\n\t":null,c?r.a.createElement("i",{className:"material-icons"},c):null,c&&t?r.a.createElement("span",null,t):t):h?r.a.createElement("input",u({className:w},P)):r.a.createElement("button",u({className:w},P),c?"\n\t\t":null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"material-icons"},c),"\n\t\t"):null,c&&t?r.a.createElement("span",null,t):t,c?"\n\t":null)};s.propTypes={type:o.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:o.a.string,id:o.a.string,name:o.a.string,value:o.a.string,href:o.a.string,icon:o.a.string,loading:o.a.bool,disabled:o.a.bool,btnType:o.a.string,fullWidth:o.a.bool,loader:o.a.bool,pullRight:o.a.bool,input:o.a.bool,outline:o.a.bool,active:o.a.bool,size:o.a.oneOf(["lg","sm","xs"])},t.a=s},385:function(e,t,n){"use strict";n.r(t),n.d(t,"Examples",function(){return h}),n.d(t,"UsageWithOtherTags",function(){return g}),n.d(t,"OutlineButtons",function(){return E}),n.d(t,"ButtonGroup",function(){return v}),n.d(t,"Sizes",function(){return w}),n.d(t,"ActiveState",function(){return P}),n.d(t,"DisabledState",function(){return k}),n.d(t,"UsageWithIcons",function(){return T}),n.d(t,"ButtonLoader",function(){return O});var a=n(0),r=n.n(a),l=n(57),o=n(366),c=n.n(o),i=n(359),u=n(368),s=n(352),m=n(34);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"examples"},"Examples"),r.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{type:"primary",label:"Primary"}),"\n",r.a.createElement(u.a,{type:"secondary",label:"Secondary"}),"\n",r.a.createElement(u.a,{type:"danger",label:"Danger"}),"\n",r.a.createElement(u.a,{type:"link",label:"Link"}),"\n")))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),r.a.createElement("p",null,"The ",r.a.createElement(i.Property,{value:".btn"})," classes are designed to be used with the ",r.a.createElement(c.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",r.a.createElement(c.a,{className:"language-html"},"<a>")," or ",r.a.createElement(c.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),r.a.createElement("p",null,"When using button classes on ",r.a.createElement(c.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",r.a.createElement(i.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{type:"primary",label:"Anchor",href:"#"}),"\n",r.a.createElement(u.a,{type:"primary",label:"Button"}),"\n",r.a.createElement(u.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",r.a.createElement(u.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",r.a.createElement(u.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),r.a.createElement("p",null,"Replace the default modifier classes with the ",r.a.createElement(i.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{outline:!0,type:"primary",label:"Primary"}),"\n",r.a.createElement(u.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",r.a.createElement(u.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"button-group"},"Using buttons together"),r.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",r.a.createElement(i.Property,{value:".button-group"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{type:"primary",label:"Activate"}),"\n",r.a.createElement(u.a,{type:"secondary",label:"Disable"}),"\n",r.a.createElement(u.a,{type:"danger",label:"Delete"}),"\n")))},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"sizes"},"Sizes"),r.a.createElement("p",null,"For a different sized button add ",r.a.createElement(i.Property,{value:".btn-lg"}),", ",r.a.createElement(i.Property,{value:".btn-sm"})," or ",r.a.createElement(i.Property,{value:".btn-xs"}),"."),r.a.createElement("h3",null,"Large"),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{size:"lg",type:"primary",label:"Large button"}),"\n",r.a.createElement(u.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),r.a.createElement("h3",null,"Small"),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{size:"sm",type:"primary",label:"Small button"}),"\n",r.a.createElement(u.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),r.a.createElement("h3",null,"Extra small"),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",r.a.createElement(u.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),r.a.createElement("h3",null,"Block level"),r.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",r.a.createElement(i.Property,{value:".btn-block"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",r.a.createElement(u.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"active-state"},"Active state"),r.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",r.a.createElement("b",null,"There’s no need to add a class to ",r.a.createElement(c.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",r.a.createElement(i.Property,{value:".active"})," (and include the ",r.a.createElement(i.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{href:"#",active:!0,type:"primary",label:"Primary"}),"\n",r.a.createElement(u.a,{href:"#",active:!0,type:"secondary",label:"Secondary"}),"\n",r.a.createElement(u.a,{href:"#",active:!0,type:"danger",label:"Danger"}),"\n")))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"disabled-state"},"Disabled state"),r.a.createElement("p",null,"Make buttons look inactive by adding the ",r.a.createElement(i.Attribute,{name:"disabled"})," boolean attribute to any ",r.a.createElement(c.a,{className:"language-html"},"<button>")," element."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",r.a.createElement(u.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",r.a.createElement(u.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")),r.a.createElement("p",null,"Disabled buttons using the ",r.a.createElement(c.a,{className:"language-html"},"<a>")," element behave a bit different:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{className:"language-html"},"<a>"),"s do not support the ",r.a.createElement(i.Attribute,{name:"disabled"}),"attribute, so you must add the ",r.a.createElement(i.Property,{value:".disabled"})," class to make it visually appear disabled."),r.a.createElement("li",null,"Some future-friendly styles are included to disable all ",r.a.createElement(i.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),r.a.createElement("li",null,"Disabled buttons should include the ",r.a.createElement(i.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{href:"#",disabled:!0,type:"primary",label:"Primary"}),"\n",r.a.createElement(u.a,{href:"#",disabled:!0,type:"secondary",label:"Secondary"}),"\n",r.a.createElement(u.a,{href:"#",disabled:!0,type:"danger",label:"Danger"}),"\n")),r.a.createElement(s.a,{type:"warning"},r.a.createElement("h5",null,"Link functionality caveat"),r.a.createElement("p",null,"The ",r.a.createElement(i.Property,{value:".disabled"})," class uses ",r.a.createElement(i.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",r.a.createElement(c.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",r.a.createElement(i.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",r.a.createElement(i.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),r.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",r.a.createElement(c.a,{className:"language-html"},"<button>"),"."),r.a.createElement("p",null,"Read more about icon usage here ",r.a.createElement(l.Link,{to:"/docs/core/icons"},"here"),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",r.a.createElement(u.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n",r.a.createElement(u.a,{icon:"cloud",type:"danger",label:"Danger"}),"\n")))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"button-loader"},"Button loader"),r.a.createElement("p",null,"To use a button with a loader simply add the attribute ",r.a.createElement(i.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",r.a.createElement(i.Property,{value:".loading"})," to display the loader."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",r.a.createElement(u.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",r.a.createElement(u.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),r.a.createElement("h3",null,"Disabled loader"),r.a.createElement("p",null,r.a.createElement(i.Property,{value:".loading"})," with ",r.a.createElement(i.Attribute,{name:"disabled"})),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{disabled:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",r.a.createElement(u.a,{disabled:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",r.a.createElement(u.a,{disabled:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),r.a.createElement("h3",null,"Outline loader"),r.a.createElement("p",null,r.a.createElement(i.Property,{value:".loading"})," with ",r.a.createElement(i.Property,{value:".outline"})),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"button-group"},"\n",r.a.createElement(u.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",r.a.createElement(u.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",r.a.createElement(u.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),r.a.createElement("h3",null,"The markup"),r.a.createElement("p",null,"Adding the attribute ",r.a.createElement(i.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",r.a.createElement("div",{className:"loader"},"\n\t\t",r.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",r.a.createElement("li",null),"\n\t\t\t",r.a.createElement("li",null),"\n\t\t\t",r.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),r.a.createElement(s.a,{type:"warning"},r.a.createElement("h5",null,"Including the loader html"),r.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you do ",r.a.createElement("b",null,"not")," add the attribute ",r.a.createElement(i.Attribute,{data:!0,name:"button-loader"}),".")))},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,y(t).apply(this,arguments))}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return r.a.createElement(i.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),r.a.createElement(h,null),r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(P,null),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(O,null))}}])&&d(n.prototype,l),o&&d(n,o),t}();t.default=N}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?069b0f8d814198869474