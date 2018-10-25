(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[31,45,47,48,49,50,52],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(1),l=a.n(n),r=a(2),c=a.n(r),o=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},m=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};m.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=m},422:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(2),r=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(r).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(2),r=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(a=l.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(427);a.d(t,"ComponentPreview",function(){return l.default});var r=a(428);a.d(t,"DocHeading",function(){return r.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var o=a(423);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var m=a(424);a.d(t,"ExperimentalComponentAlert",function(){return m.default});var u=a(425);a.d(t,"Icon",function(){return u.default});var s=a(426);a.d(t,"PxScript",function(){return s.default})},470:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicTable",function(){return c}),a.d(t,"StripedTable",function(){return o}),a.d(t,"HoverTable",function(){return m}),a.d(t,"HoverStripedTable",function(){return u}),a.d(t,"DescriptionTable",function(){return s}),a.d(t,"TablesText",function(){return E});var n=a(1),l=a.n(n),r=a(430),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"basic-table"},"Basic table"),l.a.createElement("p",null,"Basic tables info..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))))},o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"striped-table"},"Striped table"),l.a.createElement("p",null,"Striped tables info..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hover-table"},"Hover table"),l.a.createElement("p",null,"Hover tables info..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hover-striped-table"},"Hover striped table"),l.a.createElement("p",null,"Hover striped tables info..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("table",{className:"table table-hover table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"description-table"},"Description table"),l.a.createElement("p",null,"Description tables info..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("table",{className:"table table-description table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Key"),l.a.createElement("th",{scope:"col"},"Value"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Name"),l.a.createElement("td",null,"John Doe")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Occupation"),l.a.createElement("td",null,"Unknown")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Skills"),l.a.createElement("td",null,"Unknown"))))))},E=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Lots of nice info about tables will be here..."),l.a.createElement(c,null),l.a.createElement(o,null),l.a.createElement(m,null),l.a.createElement(u,null),l.a.createElement(s,null))};t.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(E,null),l.a.createElement(r.DocToc,{component:E})))}}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?867a07874f4de34a9535