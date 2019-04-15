(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[35,2,46,47,48,50,51,52,53],{371:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var o=n(1),a=n.n(o),r=n(65),l=n.n(r),c=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),o,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&o?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},o)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},372:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(65),l=n.n(r),c=function(e){var t=e.id,n=e.type,o=e.icon,r=e.close,l=e.text,c=e.children;return a.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?a.a.createElement("i",{className:"material-icons alert-icon"},o):null,l?"\n":"",l?a.a.createElement("p",null,l):null,c?"\n":"",c?a.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?a.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",a.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},373:function(e,t,n){"use strict";n.r(t);var o=n(371);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var a=n(374);n.d(t,"ComponentPreview",function(){return a.default});var r=n(380);n.d(t,"DocContainer",function(){return r.default});var l=n(381);n.d(t,"DocHeading",function(){return l.default});var c=n(375);n.d(t,"DocToc",function(){return c.default});var i=n(376);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(377);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var p=n(378);n.d(t,"Icon",function(){return p.default});var s=n(379);n.d(t,"PxScript",function(){return s.default})},374:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(65),l=n.n(r),c=n(383),i=n(384),u=n.n(i),p=n(385);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,o=e.removeOuterTag,r=e.hideValue,l=e.removeList,i=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return a.a.createElement(a.a.Fragment,null,i?a.a.createElement(function(){return a.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?a.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=o?y(t):l?h(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=o?y(t):l?h(t):Object(c.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return p.b.style="",a.a.createElement("figure",null,a.a.createElement(p.a,s({},p.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,l=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return a.a.createElement("div",s({key:e+t},r({line:e,key:t})),e.map(function(e,t){return a.a.createElement("span",s({key:t},l({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=d},375:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(65),l=n.n(r),c=n(382);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var o=n.type().props.children[0];"h2"===o.type&&t.push({title:o.props.children,id:o.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,s(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"col-2 d-none d-lg-block"},a.a.createElement("div",{className:"doc-toc"},a.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var o=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return a.a.createElement("li",{key:n,className:o?"active":""},a.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),l&&u(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},376:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(372);t.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},377:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(372);t.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},378:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(65),l=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(r).a.string.isRequired},t.default=l},379:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(65),l=n.n(r),c=function(e){var t,n,o=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return a.a.createElement("span",{key:t},e,a.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return a.a.createElement("span",{key:t},e,t<c.length-1?a.a.createElement("span",{className:"token punctuation"},", "):null)})),a.a.createElement("code",null,a.a.createElement("span",null,"px"),a.a.createElement("span",{className:"token punctuation"},"."),a.a.createElement("span",null,o),a.a.createElement("span",{className:"token punctuation"},"."),n,a.a.createElement("span",{className:"token function"},l),a.a.createElement("span",{className:"token punctuation"},"("),t,a.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},380:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(65),l=n.n(r),c=n(373),i=function(e){var t=e.docToc,n=e.children,o=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(o,null),t?a.a.createElement(c.DocToc,{component:o}):null))};i.propTypes={docToc:l.a.bool},t.default=i},382:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)};t.genericHashLink=h,t.HashLink=E,t.NavHashLink=v;var l=u(n(1)),c=u(n(65)),i=n(96);function u(e){return e&&e.__esModule?e:{default:e}}var p="",s=null,m=null,d=null;function f(){p="",null!==s&&s.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(p);return null!==e&&(d(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,a({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?p=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(p=e.to.hash.replace("#","")),""!==p&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===s&&(s=new MutationObserver(y)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return h(e,i.Link)}function v(e){return h(e,i.NavLink)}var g={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=g,v.propTypes=g},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(387);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return a(o).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}})},387:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),c=(a=l)&&a.__esModule?a:{default:a},i=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==o(t)&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o._handleRefMount=function(e){o._domNode=e},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+o(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,o=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},o)}}]),t}();p.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},p.defaultProps={component:"code"},t.default=p},431:function(e,t,n){"use strict";n.r(t),n.d(t,"CreatingYourComponent",function(){return i}),n.d(t,"CreateADocumentationPage",function(){return u}),n.d(t,"AddComponentToRoutes",function(){return p}),n.d(t,"AddingStyles",function(){return s}),n.d(t,"AddingJavaScript",function(){return m});var o=n(1),a=n.n(o),r=n(386),l=n.n(r),c=n(373),i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"creating-your-component"},"Creating your component"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(c.Property,{value:"./src/App/components/[MyExampleComponent]/"})," for your component, name it ",a.a.createElement(c.Property,{value:"index.js"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example component\nimport React from "react";\nimport PropTypes from "prop-types";\nconst MyExampleComponent = ({ type, title, separator }) => (\n    <div className={`well well-${type}`}>\n        <h3>{title}</h3>\n        {separator ? <hr /> : null}\n        This is my example component in a well.\n    </div>\n);\nMyExampleComponent.propTypes = {\n    type: PropTypes.oneOf(["light", "dark"]).isRequired,\n    title: PropTypes.string.isRequired,\n    separator: PropTypes.bool\n};\nexport default MyExampleComponent;\n            '))},u=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"create-a-documentation-page"},"Create a documentation page"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(c.Property,{value:"./src/App/Documentation/Components/[MyExampleDocumentationComponent]/"})," for your component, call it ",a.a.createElement(c.Property,{value:"index.js"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example documentation component\nimport React from "react";\nimport { ComponentPreview, DocContainer } from "#";\nimport MyExampleComponent from "@/MyExampleComponent";\nconst MyExampleDocumentationComponent = () => (\n    <DocContainer docToc>\n        <p className="lead">This is the documentation for My Example Component.</p>\n        <h2 id="example-usage">Example usage</h2>\n        <ComponentPreview language="html" showCasePanel codeFigure>\n            <MyExampleComponent type="dark" title="My Example Component" separator />\n        </ComponentPreview>\n    </DocContainer>\n);\nexport default MyExampleDocumentationComponent;\n            '),a.a.createElement("p",null,"Use the custom ",a.a.createElement(c.Property,{value:"ComponentPreview"})," component to preview your component. It has several props, for this example we are going to be using ",a.a.createElement(c.Property,{value:"language"}),", ",a.a.createElement(c.Property,{value:"showCasePanel"})," and ",a.a.createElement(c.Property,{value:"codeFigure"}),"."),a.a.createElement("p",null,"We are also using the ",a.a.createElement(c.Property,{value:"DocContainer"})," component to sentralize the layout of the documentation, pass the ",a.a.createElement(c.Property,{value:"docToc"})," prop to add a dynamic table of contents to the documentation of your component. This component scans the provided component for ",a.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tags and creates anchors for easier navigation. Just remember to add an id to the ",a.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tag."))},p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"add-component-to-routes"},"Add component to routes"),a.a.createElement("p",null,"In ",a.a.createElement(c.Property,{value:"./src/App/routes/docs.js"})," under the components object add the following:"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n/**\n * Components\n */\n{\n    title: "Components",\n    path: "/docs/components",\n    redirect: "/docs/components/alerts",\n    routes: [\n        ...\n        ...\n        // ADD THIS\n        {\n            title: "My Example Documentation Component",\n            path: "/docs/components/my-example-documentation-component",\n            componentPath: "components/My-example-documentation-component"\n        },\n        ...\n        ...\n    ]\n},\n            '),a.a.createElement("p",null,"You will now be able to go to the route you provided to preview your component. Run ",a.a.createElement(c.Property,{value:"npm start"})," if you haven","'","t already done so, and navigate to ",a.a.createElement(c.Property,{value:"localhost:3000/docs/components/my-example-documentation-component"})," to see your component in action."))},s=function(){return a.a.createElement("div",null,a.a.createElement("h2",{id:"adding-styles"},"Adding styles"),a.a.createElement("p",null,"To add styling for your component create a new file in ",a.a.createElement(c.Property,{value:"./src/less/components/"}),", name it ",a.a.createElement(c.Property,{value:"my-example-component.less"}),"."),a.a.createElement(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Importing the styles"),a.a.createElement("p",null,"Import it in the appropriate root-file (",a.a.createElement(c.Property,{value:"px.less"})," for the core styles, under ",a.a.createElement(c.Property,{value:"/themes"})," if the component is going to be part of a specific theme)."),a.a.createElement("p",null,"Assuming you are creating a core component the import would look like this:"),a.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},'\n/* px.less */\n...\n/* Components */\n@import "components/my-example-component";\n...\n                '))},null),a.a.createElement(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Creating variables"),a.a.createElement("p",null,"To add custom variables to your component modify ",a.a.createElement(c.Property,{value:"./src/less/_variables.less"}),", and add a section for your component. Add it alphabetically and update the table of contents."),a.a.createElement("p",null,"Adding a section should look like this:"),a.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},'\n// _variables.less\n// [number]. My Example Component\n// ==========================================================================\n@my-example-component-color: @gray-3;\n@my-example-component-background: @gray-8;\n@my-example-component-padding: 1rem;\n@my-example-component-font-family: "Arial";\n                '))},null),a.a.createElement("p",null,"Your the styles for ",a.a.createElement(c.Property,{value:"MyExampleComponent"})," should now be included properly, and you should see changes immediatly while running dev."),a.a.createElement("p",null,"When writing styles for your component, try to use ",a.a.createElement(c.Property,{value:"rem"})," (",a.a.createElement(c.Property,{value:"1rem"})," = ~",a.a.createElement(c.Property,{value:"16px"}),") and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by ",a.a.createElement(c.Property,{value:"./.stylelintrc"}),"."))},m=function(){return a.a.createElement("div",null,a.a.createElement("h2",{id:"adding-javascript"},"Adding javascript"),a.a.createElement("p",null,"If your component needs javascript to run, you will need to add the javascript to the ",a.a.createElement(c.Property,{value:"px-script"})),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Create a script file for your component"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(c.Property,{value:"./src/px-script/main/[MyExampleComponent]/"})," for your component, name it ",a.a.createElement(c.Property,{value:"index.js"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\nconst init = () => {\n    alert("MyExampleComponent was initialized");\n};\nconst MyExampleComponent = {\n    init\n};\nexport default MyExampleComponent;\n                '),a.a.createElement("p",null,"Note: All essential functionality for your component needs to be called within the ",a.a.createElement(c.Property,{value:"init"})," method."))},null),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Add your components script to px-script"),a.a.createElement("p",null,"Open ",a.a.createElement(c.Property,{value:"./src/px-script/main/index.js"})," and add your component:"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n...\nimport MyExampleComponent from "./MyExampleComponent";\n...\nconst px = {\n...\nMyExampleComponent,\n...\n};\n...\nexport { ... MyExampleComponent, ... }\n                '))},null),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Initializing the script in the documentation"),a.a.createElement("p",null,"Considering the documentation is built in react your documentation component will load after ",a.a.createElement(c.Property,{value:"px-script"})," runs it","'","s ",a.a.createElement(c.Property,{value:"initAll"})," method, you will need to run your component","'","s init method when the component actually renders."),a.a.createElement("p",null,"You can do this by slightly modifying the ",a.a.createElement(c.Property,{value:"MyExampleDocumentationComponent"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example documentation component\n// change this line\nimport React, { Component } from "react";\n...\n// import your components script\nimport { MyExampleComponent } from "$/px-script/main";\n...\n...\n// modify MyExampleDocumentationComponent\nclass MyExampleDocumentationComponent extends Component {\n    componentDidMount () {\n        MyExampleComponent.init();\n    }\n    render() {\n        return (\n            <DocContainer docToc>\n                <p className="lead">This is the documentation for My Example Component.</p>\n                <h2 id="example-usage">Example usage</h2>\n                <ComponentPreview language="html" showCasePanel codeFigure>\n                    <MyExampleComponent type="dark" title="My Example Component" separator />\n                </ComponentPreview>\n            </DocContainer>\n        )\n    }\n}\n                '))},null))};t.default=function(){return a.a.createElement(c.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"To create a new component"),a.a.createElement(i,null),a.a.createElement(u,null),a.a.createElement(p,null),a.a.createElement(s,null),a.a.createElement(m,null))}}}]);
//# sourceMappingURL=doc-route.chunk_35.js.map?085aa3d612c8cb34e727