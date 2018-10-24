(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[40,44,46,47,48,49,50],{417:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var r=a(1),n=a.n(r),l=a(2),o=a.n(l),c=function(e){var t=e.value;return n.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,a=e.name,r=e.value;return a&&r?n.a.createElement("code",null,t?n.a.createElement("span",{className:"token attr-name"},"data-"):null,n.a.createElement("span",{className:"token attr-name"},a),n.a.createElement("span",{className:"token attr-value"},n.a.createElement("span",{className:"token punctuation"},'="'),r,n.a.createElement("span",{className:"token punctuation"},'"'))):a&&!r?n.a.createElement("code",null,t?n.a.createElement("span",{className:"token attr-name"},"data-"):null,n.a.createElement("span",{className:"token attr-name"},a)):!a&&r?n.a.createElement("code",null,n.a.createElement("span",{className:"token attr-value"},r)):void 0};s.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=s},418:function(e,t,a){"use strict";var r=a(1),c=a.n(r),n=a(2),l=a.n(n),o=function(e){var t=e.id,a=e.type,r=e.icon,n=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},r?"\n":"",r?c.a.createElement("i",{className:"material-icons alert-icon"},r):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,n?"\n":"",n?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},419:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(418);t.default=function(){return n.a.createElement(l.a,{type:"danger"},n.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),n.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},420:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(418);t.default=function(){return n.a.createElement(l.a,{type:"danger"},n.a.createElement("h3",{className:"color-danger"},"Component under development!"),n.a.createElement("p",null,"This component is still under development and is subject to change."))}},421:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(2),o=function(e){var t=e.icon;return n.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},422:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(2),l=a.n(n),o=function(e){var t,a,r=e.component,n=e.subComponents,l=e.func,o=e.params;return n&&(a=n.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,r),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},426:function(e,t,a){"use strict";a.r(t);var r=a(417);a.d(t,"Attribute",function(){return r.default}),a.d(t,"Property",function(){return r.Property});var n=a(423);a.d(t,"ComponentPreview",function(){return n.default});var l=a(424);a.d(t,"DocHeading",function(){return l.default});var o=a(425);a.d(t,"DocToc",function(){return o.default});var c=a(419);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=a(420);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=a(421);a.d(t,"Icon",function(){return u.default});var m=a(422);a.d(t,"PxScript",function(){return m.default})},472:function(e,t,a){"use strict";a.r(t),a.d(t,"HowItWorks",function(){return o}),a.d(t,"Notation",function(){return c}),a.d(t,"Examples",function(){return s}),a.d(t,"SpacingText",function(){return u});var r=a(1),n=a.n(r),l=a(426),o=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"how-it-works"},"How it works"),n.a.createElement("p",null,"Assign responsive-friendly ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are ranging from ",n.a.createElement(l.Property,{value:"0.25rem"})," to ",n.a.createElement(l.Property,{value:"3rem"}),"."))},c=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"notation"},"Notation"),n.a.createElement("p",null,"Spacing utilities that apply to all breakpoints, from ",n.a.createElement(l.Property,{value:"xs"})," to ",n.a.createElement(l.Property,{value:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",n.a.createElement(l.Property,{value:"min-width: 0"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."),n.a.createElement("p",null,"The classes are named using the format ",n.a.createElement(l.Property,{value:"{property}{sides}-{size}"})," for ",n.a.createElement(l.Property,{value:"xs"})," and ",n.a.createElement(l.Property,{value:"{property}{sides}-{breakpoint}-{size}"})," for ",n.a.createElement(l.Property,{value:"sm"}),", ",n.a.createElement(l.Property,{value:"md"}),", ",n.a.createElement(l.Property,{value:"lg"}),", ",n.a.createElement(l.Property,{value:"xl"}),", and ",n.a.createElement(l.Property,{value:"xxl"}),"."),n.a.createElement("p",null,"Where ",n.a.createElement("i",null,"property")," is one of:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.Property,{value:"m"})," - for classes that set ",n.a.createElement(l.Property,{value:"margin"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"p"})," - for classes that set ",n.a.createElement(l.Property,{value:"padding"}))),n.a.createElement("p",null,"Where ",n.a.createElement("i",null,"sides")," is one of:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.Property,{value:"t"})," - for classes that set ",n.a.createElement(l.Property,{value:"margin-top"})," or ",n.a.createElement(l.Property,{value:"padding-top"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"b"})," - for classes that set ",n.a.createElement(l.Property,{value:"margin-bottom"})," or ",n.a.createElement(l.Property,{value:"padding-bottom"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"l"})," - for classes that set ",n.a.createElement(l.Property,{value:"margin-left"})," or ",n.a.createElement(l.Property,{value:"padding-left"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"r"})," - for classes that set ",n.a.createElement(l.Property,{value:"margin-right"})," or ",n.a.createElement(l.Property,{value:"padding-right"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"x"})," - for classes that set both ",n.a.createElement(l.Property,{value:"*-left"})," or ",n.a.createElement(l.Property,{value:"*-right"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"y"})," - for classes that set both ",n.a.createElement(l.Property,{value:"*-top"})," or ",n.a.createElement(l.Property,{value:"*-bottom"}))),n.a.createElement("p",null,"Where ",n.a.createElement("i",null,"size")," is one of:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.Property,{value:"0"})," - for classes that eliminate the ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," by setting it to ",n.a.createElement(l.Property,{value:"0"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"1"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," to ",n.a.createElement(l.Property,{value:"@spacer * 0.25"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"2"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," to ",n.a.createElement(l.Property,{value:"@spacer * 0.5"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"3"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," to ",n.a.createElement(l.Property,{value:"@spacer"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"4"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," to ",n.a.createElement(l.Property,{value:"@spacer * 1.5"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"5"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," or ",n.a.createElement(l.Property,{value:"padding"})," to ",n.a.createElement(l.Property,{value:"@spacer * 3"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"auto"})," - for classes that set ",n.a.createElement(l.Property,{value:"margin"})," to ",n.a.createElement(l.Property,{value:"auto"}))),n.a.createElement("p",null,"For margin you can also set negative ",n.a.createElement("i",null,"size")," (excluding ",n.a.createElement(l.Property,{value:"0"}),"):"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.Property,{value:"n1"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," to ",n.a.createElement(l.Property,{value:"-@spacer * 0.25"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"n2"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," to ",n.a.createElement(l.Property,{value:"-@spacer * 0.5"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"n3"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," to ",n.a.createElement(l.Property,{value:"-@spacer"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"n4"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," to ",n.a.createElement(l.Property,{value:"-@spacer * 1.5"})),n.a.createElement("li",null,n.a.createElement(l.Property,{value:"n5"})," - for classes that set the ",n.a.createElement(l.Property,{value:"margin"})," to ",n.a.createElement(l.Property,{value:"-@spacer * 3"}))),n.a.createElement("p",null,"(",n.a.createElement(l.Property,{value:"@spacer"})," is set to ",n.a.createElement(l.Property,{value:"1rem (16px)"}),")"))},s=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"examples"},"Examples"),n.a.createElement("p",null,"Here are some representative examples of these classes:"),n.a.createElement(l.ComponentPreview,{language:"css",codeFigure:!0},"\n                .mt-0 {\n                    margin-top: 0 !important;\n                }\n                \n                .ml-1 {\n                    margin-left: (@spacer * 0.25) !important;\n                }\n                \n                .px-2 {\n                    padding-left: (@spacer * 0.5) !important;\n                    padding-right: (@spacer * 0.5) !important;\n                }\n                \n                .p-3 {\n                    padding: @spacer !important;\n                }\n            "),n.a.createElement("h3",null,"Horizontal centering"),n.a.createElement("p",null,"Additionally, DesignGuide also includes an ",n.a.createElement(l.Property,{value:".mx-auto"})," class for horizontally centering fixed-width block level content—that is, content that has ",n.a.createElement(l.Property,{value:"display: block"})," and a ",n.a.createElement(l.Property,{value:"width"})," set—by setting the horizontal margins to auto."),n.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0,showCasePanel:!0,removeOuterTag:!0},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto p-2 bg-default"},"\n","Centered element","\n"))))},u=function(){return n.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},n.a.createElement("p",{className:"lead"},"The DesignGuide includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance."),n.a.createElement(o,null),n.a.createElement(c,null),n.a.createElement(s,null))};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"doc-container"},n.a.createElement("div",{className:"row"},n.a.createElement(u,null),n.a.createElement(l.DocToc,{component:u}))))}}}]);
//# sourceMappingURL=doc-route.chunk_37.js.map?1a0aeffc27cb2c7ee0c4