(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[34,3,44,45,46,47,48,49,51],{421:function(e,n,t){"use strict";t.r(n),t.d(n,"Property",function(){return c});var a=t(1),o=t.n(a),r=t(2),l=t.n(r),c=function(e){var n=e.value;return o.a.createElement("code",{className:"token property"},n)},m=function(e){var n=e.data,t=e.name,a=e.value;return t&&a?o.a.createElement("code",null,n?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},t),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):t&&!a?o.a.createElement("code",null,n?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},t)):!t&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};m.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},n.default=m},422:function(e,n,t){"use strict";var a=t(1),c=t.n(a),o=t(2),r=t.n(o),l=function(e){var n=e.id,t=e.type,a=e.icon,o=e.close,r=e.text,l=e.children;return c.a.createElement("div",{id:n,className:"alert alert-".concat(t)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?c.a.createElement("p",null,r):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},n.a=l},423:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(422);n.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(422);n.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(2),l=function(e){var n=e.icon;return o.a.createElement("i",{className:"material-icons"},n)};l.propTypes={icon:t.n(r).a.string.isRequired},n.default=l},426:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),o=t(2),r=t.n(o),l=function(e){var n,t,a=e.component,o=e.subComponents,r=e.func,l=e.params;return o&&(t=o.map(function(e,n){return c.a.createElement("span",{key:n},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(n=l.map(function(e,n){return c.a.createElement("span",{key:n},e,n<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),t,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),n,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},n.default=l},427:function(e,n,t){"use strict";t.r(n);var a=t(1),p=t.n(a),o=t(2),r=t.n(o),s=t(431),l=t(432),d=t.n(l),y=t(433);function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,o=e.language,r=e.removeOuterTag,l=e.hideValue,c=e.removeList,n=e.showCasePanel,t=e.codeFigure,m=e.dangerousHTML,i=function(e){var n=document.createElement("div");return n.innerHTML=Object(s.renderToStaticMarkup)(e),n.firstElementChild?n.firstElementChild.innerHTML:n.firstChild?n.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var n=document.createElement("div");n.innerHTML=Object(s.renderToStaticMarkup)(e);var t=n.querySelectorAll("li"),a="";return t.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,n?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,t?p.a.createElement(function(){var e,n,t="";if("html"===o&&m)n="","function"==typeof(e=a).forEach?e.forEach(function(e){return n+="".concat(e,"\n")}):n=e,t=n;else if("html"===o&&a&&"function"==typeof a.map)a.map(function(e){t+=r?i(e):c?u(e):Object(s.renderToStaticMarkup)(e)});else if("html"===o)t+=r?i(a):c?u(a):Object(s.renderToStaticMarkup)(a);else switch(f(a)){case"string":t=a;break;case"object":a.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":t=(t=d.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=d.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return y.b.style="",p.a.createElement("figure",null,p.a.createElement(y.a,E({},y.b,{theme:void 0,code:t,language:o}),function(e){var n=e.className,t=e.style,a=e.tokens,o=e.getLineProps,r=e.getTokenProps;return p.a.createElement("pre",{className:n,style:t},a.map(function(e,n){return p.a.createElement("div",E({key:e+n},o({line:e,key:n})),e.map(function(e,n){return p.a.createElement("span",E({key:n},r({token:e,key:n})))}))}))}))},null):null)};c.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},n.default=c},430:function(e,n,t){"use strict";t.r(n);var a=t(421);t.d(n,"Attribute",function(){return a.default}),t.d(n,"Property",function(){return a.Property});var o=t(427);t.d(n,"ComponentPreview",function(){return o.default});var r=t(428);t.d(n,"DocHeading",function(){return r.default});var l=t(429);t.d(n,"DocToc",function(){return l.default});var c=t(423);t.d(n,"DeprecatedComponentAlert",function(){return c.default});var m=t(424);t.d(n,"ExperimentalComponentAlert",function(){return m.default});var i=t(425);t.d(n,"Icon",function(){return i.default});var u=t(426);t.d(n,"PxScript",function(){return u.default})},474:function(e,n,t){"use strict";t.r(n),t.d(n,"CreatingYourComponent",function(){return m}),t.d(n,"CreateADocumentationPage",function(){return i}),t.d(n,"AddComponentToRoutes",function(){return u}),t.d(n,"AddingStyles",function(){return p}),t.d(n,"AddingJavaScript",function(){return s}),t.d(n,"ContributingText",function(){return d});var a=t(1),o=t.n(a),r=t(434),l=t.n(r),c=t(430),m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"creating-your-component"},"Creating your component"),o.a.createElement("p",null,"Create a new file under ",o.a.createElement(c.Property,{value:"./src/App/components/[MyExampleComponent]/"})," for your component, name it ",o.a.createElement(c.Property,{value:"index.js"}),":"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"//example component\n\n",'import React from "react";','import PropTypes from "prop-types";\n\n',"const MyExampleComponent = ({ type, title, separator }) => (\n","<div className={`well well-${type}`}>\n","        <h3>{title}</h3>\n","        {separator ? <hr /> : null}\n","        This is my example component in a well.\n","    </div>\n",");\n\n","MyExampleComponent.propTypes = {\n",'type: PropTypes.oneOf(["light", "dark"]).isRequired,',"title: PropTypes.string.isRequired,","separator: PropTypes.bool","};\n\n","export default MyExampleComponent;"))},i=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"create-a-documentation-page"},"Create a documentation page"),o.a.createElement("p",null,"Create a new file under ",o.a.createElement(c.Property,{value:"./src/App/Documentation/Components/[MyExampleDocumentationComponent]/"})," for your component, call it ",o.a.createElement(c.Property,{value:"index.js"}),":"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"//example documentation component\n\n",'import React from "react";\n\n','import { ComponentPreview, DocToc } from "#";','import MyExampleComponent from "@/MyExampleComponent";\n\n',"const MyExampleDocumentationComponentText = () => (\n",'    <div className="col-md-12 col-lg-10 doc-body">\n','        <p className="lead">This is the documentation for My Example Component.</p>\n','        <h2 id="example-usage">Example usage</h2>\n','        <ComponentPreview language="html" showCasePanel codeFigure>\n','            <MyExampleComponent type="dark" title="My Example Component" separator />\n',"        </ComponentPreview>\n","    </div>\n",");\n\n","const MyExampleDocumentationComponent = () => (\n",'    <div className="doc-container">\n','        <div className="row">\n',"            <MyExampleDocumentationComponentText />\n","            <DocToc component={MyExampleDocumentationComponentText} />\n","        </div>\n","    </div>\n",");\n\n","export default MyExampleDocumentationComponent;"),o.a.createElement("p",null,"Use the custom ",o.a.createElement(c.Property,{value:"ComponentPreview"})," component to preview your component. It has three props, ",o.a.createElement(c.Property,{value:"language"}),", ",o.a.createElement(c.Property,{value:"showCasePanel"})," and ",o.a.createElement(c.Property,{value:"codeFigure"}),", for this example we are goin to be using all three."),o.a.createElement("p",null,"We are also using the `DocToc` component to add a dynamic table of contents to the documentation of your component. This component scans the provided component for ",o.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tags and creates anchors for easier navigation. Just remember to add an id to the ",o.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tag."))},u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"add-component-to-routes"},"Add component to routes"),o.a.createElement("p",null,"In ",o.a.createElement(c.Property,{value:"./src/App/routes/docs.js"})," under the components object add the following:"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"/**\n"," * Components\n"," */\n","{\n",'    title: "Components",\n','    path: "/docs/components",\n','    redirect: "/docs/components/alerts",\n',"    routes: [\n","        ...\n","        ...\n","        // ADD THIS\n","        {\n",'            title: "My Example Documentation Component",\n','            path: "/docs/components/my-example-documentation-component",\n','            component: require("../Documentation/Components/MyExampleDocumentationComponent")\n',"        },\n","        ...\n","        ...\n","    ]\n","},\n"),o.a.createElement("p",null,"You will now be able to go to the route you provided to preview your component. Run ",o.a.createElement(c.Property,{value:"npm start"})," if you haven","'","t already done so, and navigate to ",o.a.createElement(c.Property,{value:"localhost:3000/docs/components/my-example-documentation-component"})," to see your component in action."))},p=function(){return o.a.createElement("div",null,o.a.createElement("h2",{id:"adding-styles"},"Adding styles"),o.a.createElement("p",null,"To add styling for your component create a new file in ",o.a.createElement(c.Property,{value:"./src/less/components/"}),", name it ",o.a.createElement(c.Property,{value:"my-example-component.less"}),"."),o.a.createElement(function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Importing the styles"),o.a.createElement("p",null,"Import it in the appropriate root-file (",o.a.createElement(c.Property,{value:"px.less"})," for the core styles, under ",o.a.createElement(c.Property,{value:"/themes"})," if the component is going to be part of a specific theme)."),o.a.createElement("p",null,"Assuming you are creating a core component the import would look like this:"),o.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},"// px.less\n","...\n","...\n\n","// Components\n","...\n","...\n",'@import "components/my-example-component";\n',"..."))},null),o.a.createElement(function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Creating variables"),o.a.createElement("p",null,"To add custom variables to your component modify ",o.a.createElement(c.Property,{value:"./src/less/_variables.less"}),", and add a section for your component. Add it alphabetically and update the table of contents."),o.a.createElement("p",null,"Adding a section should look like this:"),o.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},"// _variables.less\n\n","// [number]. My Example Component\n","// ==========================================================================\n\n","@my-example-component-color: @gray-3;\n","@my-example-component-background: @gray-8;\n","@my-example-component-padding: 1rem;\n",'@my-example-component-font-family: "Arial";\n'))},null),o.a.createElement("p",null,"Your the styles for ",o.a.createElement(c.Property,{value:"MyExampleComponent"})," should now be included properly, and you should see changes immediatly while running dev."),o.a.createElement("p",null,"When writing styles for your component, try to use ",o.a.createElement(c.Property,{value:"rem"})," (",o.a.createElement(c.Property,{value:"1rem"})," = ~",o.a.createElement(c.Property,{value:"16px"}),") and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by ",o.a.createElement(c.Property,{value:"./.stylelintrc"}),"."))},s=function(){return o.a.createElement("div",null,o.a.createElement("h2",{id:"adding-javascript"},"Adding javascript"),o.a.createElement("p",null,"If your component needs javascript to run, you will need to add the javascript to the ",o.a.createElement(c.Property,{value:"px-script"})),o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Create a script file for your component"),o.a.createElement("p",null,"Create a new file under ",o.a.createElement(c.Property,{value:"./src/px-script/[MyExampleComponent]/"})," for your component, name it ",o.a.createElement(c.Property,{value:"index.js"}),":"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"const int = () => {\n",'alert("MyExampleComponent was initialized");\n',"};\n\n","const MyExampleComponent = {\n","init\n","};\n\n","export default MyExampleComponent;"),o.a.createElement("p",null,"Note: All essential functionality for your component needs to be called within the ",o.a.createElement(c.Property,{value:"init"})," method."))},null),o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Add your components script to px-script"),o.a.createElement("p",null,"Open ",o.a.createElement(c.Property,{value:"./src/px-script/index.js"})," and add your component:"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"...\n",'import MyExampleComponent from "./MyExampleComponent";\n',"...\n","const px = {\n","...\n","MyExampleComponent,\n","...\n","};\n\n","...\n","export { ... MyExampleComponent, ... }\n"))},null),o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Initializing the script in the documentation"),o.a.createElement("p",null,"Considering the documentation is built in react your documentation component will load after ",o.a.createElement(c.Property,{value:"px-script"})," runs it","'","s ",o.a.createElement(c.Property,{value:"initAll"})," method, you will need to run your component","'","s init method when the component actually renders."),o.a.createElement("p",null,"You can do this by slightly modifying the ",o.a.createElement(c.Property,{value:"MyExampleDocumentationComponent"}),":"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"//example documentation component\n\n","// change this line\n",'import React, { Component } from "react";\n',"...\n","// import your components script\n",'import { MyExampleComponent } from "../../../../px-script";\n\n',"...\n","...\n","// modify MyExampleDocumentationComponent\n","class MyExampleDocumentationComponent extends Component {\n","componentDidMount () {\n","MyExampleComponent.init();\n","}\n\n","render() {\n","return (\n",'<div className="doc-container">\n','\t\t\t\t<div className="row">\n',"\t\t\t\t\t<MyExampleDocumentationComponentText />\n","\t\t\t\t\t<DocToc component={MyExampleDocumentationComponentText} />\n","\t\t\t\t</div>\n","\t\t\t</div>\n",")\n","}\n","}\n"))},null))},d=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10"},o.a.createElement("p",{className:"lead"},"To create a new component"),o.a.createElement(m,null),o.a.createElement(i,null),o.a.createElement(u,null),o.a.createElement(p,null),o.a.createElement(s,null))};n.default=function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(d,null),o.a.createElement(c.DocToc,{component:d})))}}}]);
//# sourceMappingURL=doc-route.chunk_32.js.map?937ea79014dbf4cacc91