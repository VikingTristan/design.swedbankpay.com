(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[26,2,47,48,49,51,52,53,54],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},l.propTypes={value:i.a.string.isRequired},t.default=c},355:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,i=e.text,l=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,i?"\n":"",i?o.a.createElement("p",null,i):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:i.a.string,type:i.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:i.a.string,close:i.a.bool,text:i.a.string},t.a=l},356:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=n(366),c=n(367),u=n.n(c),s=n(368);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,i=e.removeList,c=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return o.a.createElement(o.a.Fragment,null,c?o.a.createElement(function(){return o.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?o.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):i?v(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):i?v(t):Object(l.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",o.a.createElement("figure",null,o.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,i=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return o.a.createElement("div",p({key:e+t},r({line:e,key:t})),e.map(function(e,t){return o.a.createElement("span",p({key:t},i({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:i.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:i.a.bool,hideValue:i.a.bool,removeList:i.a.bool,showCasePanel:i.a.bool,codeFigure:i.a.bool,dangerousHTML:i.a.bool},t.default=d},357:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=n(365);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return o.a.createElement("li",{key:n,className:a?"active":""},o.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),i&&u(n,i),t}();f.propTypes={component:i.a.func.isRequired},t.default=f},358:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(355);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},359:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(355);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},360:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(45),i=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(r).a.string.isRequired},t.default=i},361:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,i=e.func,l=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return o.a.createElement("span",{key:t},e,t<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},i),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:i.a.string.isRequired,subComponents:i.a.array,func:i.a.string.isRequired,params:i.a.array},t.default=l},362:function(e,t,n){"use strict";n.r(t);var a=n(354);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(356);n.d(t,"ComponentPreview",function(){return o.default});var r=n(363);n.d(t,"DocContainer",function(){return r.default});var i=n(364);n.d(t,"DocHeading",function(){return i.default});var l=n(357);n.d(t,"DocToc",function(){return l.default});var c=n(358);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(359);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(360);n.d(t,"Icon",function(){return s.default});var p=n(361);n.d(t,"PxScript",function(){return p.default})},363:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=n(362),c=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(l.DocToc,{component:a}):null))};c.propTypes={docToc:i.a.bool},t.default=c},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=g;var r=c(n(1)),i=c(n(45)),l=n(98);function c(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function d(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(u);return null!==e&&(m(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return r.default.createElement(t,a({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function v(e){return h(e,l.Link)}function g(e){return h(e,l.NavLink)}var y={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};v.propTypes=y,g.propTypes=y},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(370);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}})},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),i=(a=r)&&a.__esModule?a:{default:a},l=n(45);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n=a=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a._handleRefMount=function(e){a._domNode=e},c(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();u.propTypes={async:l.PropTypes.bool,className:l.PropTypes.string,children:l.PropTypes.any,component:l.PropTypes.node},u.defaultProps={component:"code"},t.default=u},371:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(45),i=n.n(r),l=n(131),c=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,n=e.id,a=e.name,r=e.value,i=e.href,l=e.icon,s=e.loading,p=e.type,m=e.disabled,d=e.btnType,f=e.fullWidth,h=e.loader,v=e.pullRight,g=e.input,y=e.outline,b=e.active,E=e.size,w=c()("btn","btn-".concat(y?"outline-":"").concat(p),E?"btn-".concat(E):null,s?"loading":null,f?"btn-block":null,v?"pull-right":null,b&&i?"active":null,m&&i?"disabled":null),k={href:i,id:n,name:a,defaultValue:r,disabled:i?null:m,"data-button-loader":h?"":null,active:b&&!i?"":null,role:i?"button":null,type:i?null:d||"button","aria-pressed":!!b||null,"aria-disabled":!(!i||!m)||null,tabIndex:i&&m?"-1":null};return i?o.a.createElement("a",u({className:w},k),l?"\n\t":null,l?o.a.createElement("i",{className:"material-icons"},l):null,l&&t?o.a.createElement("span",null,t):t):g?o.a.createElement("input",u({className:w},k)):o.a.createElement("button",u({className:w},k),l?"\n\t\t":null,l?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"material-icons"},l),"\n\t\t"):null,l&&t?o.a.createElement("span",null,t):t,l?"\n\t":null)};s.propTypes={type:i.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:i.a.string,id:i.a.string,name:i.a.string,value:i.a.string,href:i.a.string,icon:i.a.string,loading:i.a.bool,disabled:i.a.bool,btnType:i.a.string,fullWidth:i.a.bool,loader:i.a.bool,pullRight:i.a.bool,input:i.a.bool,outline:i.a.bool,active:i.a.bool,size:i.a.oneOf(["lg","sm","xs"])},t.a=s},402:function(e,t,n){"use strict";n.r(t),n.d(t,"OurFavicon",function(){return u}),n.d(t,"Usage",function(){return s});var a=n(1),o=n.n(a),r=n(369),i=n.n(r),l=n(362),c=n(371),u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"our-favicon"},"Our favicon"),o.a.createElement("p",null,"Our favicon..."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("img",{src:"".concat("/experimental/","icons/android-chrome-96x96.png"),alt:"PayEx favicon"})))},s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage"},"Usage"),o.a.createElement("p",null,"To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the ",o.a.createElement(i.a,{className:"language-html"},"<head>")," tag of your html documents and you are ready to go."),o.a.createElement("p",null,"You should also rename the ",o.a.createElement(l.Attribute,{name:"content"})," of the ",o.a.createElement(l.Attribute,{value:"apple-mobile-web-app-title"})," and ",o.a.createElement(l.Attribute,{value:"application-name"})," ",o.a.createElement(i.a,{className:"language-html"},"<meta>")," tags to reflect the title of your project. Make sure to also do this in the ",o.a.createElement(l.Property,{value:"manifest.json"})," file in the icons folder."),o.a.createElement(c.a,{type:"executive",icon:"file_download",href:"".concat("/experimental/","release/icons.zip"),label:"Download Favicons"}),o.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-touch-icon-114x114.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/apple-touch-icon-120x120.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/apple-touch-icon-144x144.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-touch-icon-152x152.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon-180x180.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-touch-icon-57x57.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-touch-icon-60x60.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-touch-icon-72x72.png"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-touch-icon-76x76.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-320x460.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x920.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x1096.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-750x1294.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1182x2208.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1242x2148.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-748x1024.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1496x2048.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-768x1004.png"}),o.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1536x2008.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"/icons/coast-228x228.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),o.a.createElement("link",{rel:"manifest",href:"/icons/manifest.json"}),o.a.createElement("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),o.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),o.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),o.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"PayEx App"}),o.a.createElement("meta",{name:"application-name",content:"PayEx App"}),o.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),o.a.createElement("meta",{name:"msapplication-TileColor",content:"#000"}),o.a.createElement("meta",{name:"msapplication-TileImage",content:"/icons/mstile-144x144.png"}),o.a.createElement("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),o.a.createElement("meta",{name:"theme-color",content:"#000"})))};t.default=function(){return o.a.createElement(l.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"The PayEx favicon..."),o.a.createElement(u,null),o.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_27.js.map?a66be76b737293b39a9f