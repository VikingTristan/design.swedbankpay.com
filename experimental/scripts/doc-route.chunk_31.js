(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[32,46,47,48,51,52,53],{210:function(e,t,n){"use strict";n.r(t);var a=n(128),r=n.n(a);function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(e){o(t,e,n[e])})}return t}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e,c){var t=e.data;return i({},e,{data:{labels:t.labels,datasets:t.datasets.map(function(e,t){return a=t,r=(n=e).data,o=n.type,l=i({},n,{backgroundColor:[],borderColor:[],borderWidth:1,hoverBorderWidth:2}),"line"===o?(l.pointBackgroundColor=[],l.pointBorderColor=[],l.pointHoverBorderColor=[],l.pointHoverBackgroundColor=[],l.borderWidth=4,l.pointBorderWidth=2,l.pointRadius=4,l.pointHoverRadius=6):(l.hoverBackgroundColor=[],l.hoverBorderColor=[]),r.forEach(function(){o?"line"===o&&(l.backgroundColor.push("rgba(".concat(c[a],", 0.2)")),l.borderColor.push("rgba(".concat(c[a],", 0.7)")),l.pointBackgroundColor.push("rgba(".concat(c[a],", 0.9)")),l.pointBorderColor.push("rgba(".concat(c[a],", 0.9)")),l.pointHoverBorderColor.push("rgba(".concat(c[a],", 1)")),l.pointHoverBackgroundColor.push("rgba(".concat(c[a],", 1)"))):(l.backgroundColor.push("rgba(".concat(c[a],", 0.5)")),l.borderColor.push("rgba(".concat(c[a],", 0.9)")),l.hoverBackgroundColor.push("rgba(".concat(c[a],", 0.7)")),l.hoverBorderColor.push("rgba(".concat(c[a],", 1)")))}),l;var n,a,r,o,l})}})};function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(e){s(t,e,n[e])})}return t}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,a){var t=e.data;return c({},e,{data:{labels:t.labels,datasets:t.datasets.map(function(e){return n=c({},t=e,{backgroundColor:[],borderColor:[],hoverBackgroundColor:[],hoverBorderColor:[],borderWidth:1,hoverBorderWidth:2}),t.data.forEach(function(e,t){n.backgroundColor.push("rgba(".concat(a[t],", 0.5)")),n.hoverBackgroundColor.push("rgba(".concat(a[t],", 0.7)")),n.borderColor.push("rgba(".concat(a[t],", 0.9)")),n.hoverBorderColor.push("rgba(".concat(a[t],", 1)"))}),n;var t,n})}})};var p=function(e,a){var n=function(e,t){var n=function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,a;t=r,a=o[n=e],n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a})}return r}({},e,{backgroundColor:[],borderColor:[],pointBackgroundColor:[],pointHoverBackgroundColor:[],pointHoverBorderColor:[],pointBorderColor:[],pointBorderWidth:2,borderWidth:4,pointRadius:4,pointHoverRadius:6});return e.data.forEach(function(){n.backgroundColor.push("rgba(".concat(a[t],", 0.2)")),n.borderColor.push("rgba(".concat(a[t],", 0.7)")),n.pointBackgroundColor.push("rgba(".concat(a[t],", 0.9)")),n.pointHoverBackgroundColor.push("rgba(".concat(a[t],", 1)")),n.pointHoverBorderColor.push("rgba(".concat(a[t],", 1)")),n.pointBorderColor.push("rgba(".concat(a[t],", 0.9)"))}),n},t=e.type,r=e.data,o=e.options;return{type:t,data:{labels:r.labels,datasets:r.datasets.map(function(e,t){return n(e,t)})},options:o}},d=["45, 169, 68","38, 108, 154","125, 85, 170","255, 159, 0","205, 46, 0","19, 70, 17","0, 52, 89","106, 1, 54","245, 184, 65","255, 34, 12"],m=function(e,t){var n=document.getElementById(e);n&&"CANVAS"===n.tagName?t.type?t.data?function(e,t){var n;switch(t.type){case"bar":case"horizontalBar":n=l(t,d);break;case"pie":case"doughnut":n=u(t,d);break;case"line":n=p(t,d);break;default:console.warn('Chart: Chart type "'.concat(t.type,'" is not supported.'))}n&&new r.a(e,n)}(n.getContext("2d"),t):console.warn("Chart: You need to provide options.data."):console.warn("Chart: You need to specify a chart type."):n?console.warn('Chart: Element with id "'.concat(e,'" is not of type canvas.')):console.warn('Chart: No element with id "'.concat(e,'" found.'))};n.d(t,"chart",function(){return m});var f=window.px||{};f.chart=m,window.px=f;t.default=f},399:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},400:function(e,t,n){"use strict";n.r(t);var a=n(399);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(402);n.d(t,"ComponentPreview",function(){return r.default});var o=n(408);n.d(t,"DocContainer",function(){return o.default});var l=n(409);n.d(t,"DocHeading",function(){return l.default});var c=n(403);n.d(t,"DocToc",function(){return c.default});var i=n(404);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(405);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(406);n.d(t,"Icon",function(){return u.default});var p=n(407);n.d(t,"PxScript",function(){return p.default})},401:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},402:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(2),o=n.n(r),d=n(413),l=n(414),m=n.n(l),f=n(415);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(d.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(d.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):c?u(e):Object(d.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):c?u(a):Object(d.renderToStaticMarkup)(a);else switch(b(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",p.a.createElement("figure",null,p.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},403:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(2),r=n.n(a),c=n(410);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();m.propTypes={component:r.a.func.isRequired},t.default=m},404:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(401);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},405:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(401);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},406:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},407:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},408:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=n(400),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},472:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),c=n(400),a=n(2),r=n.n(a),i=n(210);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.options;Object(i.chart)(t,n)}},{key:"render",value:function(){return l.a.createElement("canvas",{id:this.props.id})}}])&&u(n.prototype,a),r&&u(n,r),t}();f.propTypes={id:r.a.string.isRequired,options:r.a.object.isRequired};var h=f;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"LineChart",function(){return w}),n.d(t,"BarChart",function(){return C}),n.d(t,"DoughnutAndPieCharts",function(){return k}),n.d(t,"MixingTypes",function(){return P});var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"line-chart"},"Line chart"),l.a.createElement("p",{className:"lead"},"If Johnny Cash could, then you too should be able to..."),l.a.createElement("p",null,"A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets."),l.a.createElement("p",null,"See ",l.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/line.html",target:"_blank",rel:"noopener noreferrer"},"chart.js")," for more information on line charts."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"simple-line-chart",options:{type:"line",data:{labels:["2013","2014","2015","2016","2017","2018"],datasets:[{label:"Peak",data:[261,673,962,1067,1007,779]}]}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("simple-line-chart", {\n    type: "line",\n    data: {\n        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],\n        datasets: [\n            {\n                label: "Peak",\n                data: [261, 673, 962, 1067, 1007, 779]\n            }\n        ]\n    }\n});\n                '),l.a.createElement("h3",null,"Stepped and dashed line"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"stepped-dashed-line-chart",options:{type:"line",data:{labels:["2014","2015","2016","2017","2018","2019","2020","2021"],datasets:[{label:"Active users",data:[1815,1958,2080,2210,2341,2471,2600,2725],steppedLine:!0},{label:"Registered users",data:[2196,2327,2421,2573,2644,2767,2913,3004],borderDash:[15,5]}]}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("stepped-dashed-line-chart", {\n    type: "line",\n    data: {\n        labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],\n        datasets: [\n            {\n                label: "Active users",\n                data: [1815, 1958, 2080, 2210, 2341, 2471, 2600, 2725],\n                steppedLine: true\n            },\n            {\n                label: "Registered users",\n                data: [2196, 2327, 2421, 2573, 2644, 2767, 2913, 3004],\n                borderDash: [15, 5]\n            }\n        ]\n    }\n});\n                '),l.a.createElement("h3",null,"Advanced options"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"advanced-line-chart",options:{type:"line",data:{labels:["2011","2012","2013","2014","2015","2016","2017","2018"],datasets:[{label:"DotA2 TI Prize Pool",data:[1.6,1.6,2.87,10.92,18.42,20.77,24.78,25.53],fill:!1},{label:"LoL World Championship Prize Pool",data:[.1,2,2.05,2.13,2.13,5.07,4.94,2.25],fill:!1}]},options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"In millions"},ticks:{callback:function(e){return"$".concat(e)}}}]}}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("advanced-line-chart", {\n    type: "line",\n    data: {\n        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],\n        datasets: [\n            {\n                label: "DotA2 TI Prize Pool",\n                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53],\n                fill: false\n            },\n            {\n                label: "LoL World Championship Prize Pool",\n                data: [0.1, 2, 2.05, 2.13, 2.13, 5.07, 4.94, 2.25],\n                fill: false\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                scaleLabel: {\n                    display: true,\n                    labelString: "In millions"\n                },\n                ticks: {\n                    callback: value => `$${value}`\n                }\n            }]\n        }\n    }\n});\n                '))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"bar-chart"},"Bar chart"),l.a.createElement("p",{className:"lead"},"A priest and a rabbi walked into a bar..."),l.a.createElement("p",null,"A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."),l.a.createElement("p",null,"See ",l.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/bar.html",target:"_blank",rel:"noopener noreferrer"},"chart.js")," for more information on bar charts."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"simple-bar-chart",options:{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Hours of daylight",data:[6.75,9.25,11.75,14.5,17,18.75,18,15.5,13,10.25,7.5,6]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("simple-bar-chart", {\n    type: "bar",\n    data: {\n        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n        datasets: [\n            {\n                label: "Hours of daylight",\n                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true\n                }\n            }]\n        }\n    }\n});\n        '),l.a.createElement("h3",null,"Multiple datasets"),l.a.createElement("p",null,"You can add multiple datasets"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"multi-bar-chart",options:{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Hours of daylight",data:[6.75,9.25,11.75,14.5,17,18.75,18,15.5,13,10.25,7.5,6]},{label:"Total rain (in cm)",data:[4.9,3.6,4.7,4.1,5.3,6.5,8.1,8.9,9,8.4,7.3,5.5]},{label:"Average temperature (in celcius)",data:[-1.7,-4.1,-2.3,6.5,16.1,17.9,22.2,16.3,12.5,7.4,1.6,-1.5]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("multi-bar-chart", {\n    type: "bar",\n    data: {\n        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n        datasets: [\n            {\n                label: "Hours of daylight",\n                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]\n            },\n            {\n                label: "Total rain (in cm)",\n                data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]\n            },\n            {\n                label: "Average temperature (in celcius)",\n                data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true\n                }\n            }]\n        }\n    }\n});\n            '),l.a.createElement("h3",null,"Stacked bar"),l.a.createElement("p",{className:"lead"},"You can stack, because a stacked bar is almost as good as a stocked one"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"stacked-multi-bar-chart",options:{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Paid with cash",data:[19,23,29,24,28,33,21,24,20,17,23,24]},{label:"Paid with credit card",data:[31,29,32,17,25,32,28,30,24,22,20,37]},{label:"Paid with Vipps",data:[11,9,7,12,4,13,8,10,4,1,13,16]}]},options:{scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0}]}}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("stacked-multi-bar-chart", {\n    type: "bar",\n    data: {\n        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n        datasets: [\n            {\n                label: "Paid with cash",\n                data: [19, 23, 29, 24, 28, 33, 21, 24, 20, 17, 23, 24]\n            },\n            {\n                label: "Paid with credit card",\n                data: [31, 29, 32, 17, 25, 32, 28, 30, 24, 22, 20, 37]\n            },\n            {\n                label: "Paid with Vipps",\n                data: [11, 9, 7, 12, 4, 13, 8, 10, 4, 1, 13, 16]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                stacked: true,\n                ticks: {\n                    beginAtZero: true\n                }\n            }],\n            xAxes: [{\n                stacked: true\n            }]\n        }\n    }\n});\n                '))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"doughnut-and-pie-charts"},"Doughnut and Pie charts"),l.a.createElement("p",{className:"lead"},"Stress cannot exist in the presence of pie..."),l.a.createElement("p",null,"Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."),l.a.createElement("p",null,"See ",l.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/doughnut.html",target:"_blank",rel:"noopener noreferrer"},"chart.js")," for more information on doughnut and pie charts."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"simple-pie-chart",options:{type:"pie",data:{labels:["Chrome","Internet Explorer","Firefox","Edge","Safari","Opera","Other"],datasets:[{data:[63.14,11.43,10.23,4.34,3.83,1.56,4.19]}]}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("simple-pie-chart", {\n    type: "pie",\n    data: {\n        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],\n        datasets: [\n            {\n                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]\n            }\n        ]\n    }\n});\n            '),l.a.createElement("h2",null,"Doughnut"),l.a.createElement("p",{className:"lead"},"Did anyone say ",l.a.createElement("code",{className:"token string"},"doughnut"),"?"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"doughnut-chart",options:{type:"doughnut",data:{labels:["PC and Mac","Smartphones and Tablets","PS4/PRO","VR Headsets","Xbox one/Scorpio","Web Browsers","Linux","Nintendo Switch","Other"],datasets:[{data:[53,38,27,24,22,13,7,3,9]}]}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("doughnut-chart", {\n    type: "doughnut",\n    data: {\n        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],\n        datasets: [\n            {\n                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]\n            }\n        ]\n    }\n});\n        '))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"mixing-types"},"Mixing types"),l.a.createElement("p",{className:"lead"},"With Chart.js, it is possible to create ",l.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/mixed.html",target:"_blank",rel:"noopener noreferrer"},"mixed charts")," that are a combination of two or more different chart types. A common example is a bar chart that also includes a line dataset."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(h,{id:"mixed-chart",options:{type:"bar",data:{labels:["2016","2017","2018","2019","2020","2021"],datasets:[{label:"Growth",data:[20,25,30]},{label:"Expected Growth",data:[20,25,30,35,40,45],type:"line",fill:!1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}})),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("mixed-chart", {\n    type: "bar",\n    data: {\n        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],\n        datasets: [\n            {\n                label: "Growth",\n                data: [20, 25, 30]\n            },\n            {\n                label: "Expected Growth",\n                data: [20, 25, 30, 35, 40, 45],\n                type: "line", // Changes this dataset to become a line\n                fill: false\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true\n                }\n            }]\n        }\n    }\n});\n        '))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,v(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"We are using ",l.a.createElement("a",{href:"https://www.chartjs.org/",target:"_blank",rel:"noopener noreferrer"},"chart.js")," to generate the charts. Our script is mainly just a wrapper around that library to add the correct styling etc."),l.a.createElement("p",null,"Most options and settings available in the chart.js documentation will be available."),l.a.createElement("p",null,"For now, the following chart types are available:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",{className:"token string"},'"line"')),l.a.createElement("li",null,l.a.createElement("code",{className:"token string"},'"bar"/"horizontalBar"')),l.a.createElement("li",null,l.a.createElement("code",{className:"token string"},'"pie"/"doughnut"'))),l.a.createElement(w,null),l.a.createElement(C,null),l.a.createElement(k,null),l.a.createElement(P,null))}}])&&y(n.prototype,a),r&&y(n,r),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_31.js.map?db3f6a3048f6f3d6b1e7