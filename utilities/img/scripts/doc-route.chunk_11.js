(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[11,46,48,49,50,52,53],{422:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return o});var n=t(1),l=t.n(n),r=t(2),c=t.n(r),o=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},i=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=i},423:function(e,a,t){"use strict";var n=t(1),o=t.n(n),l=t(2),r=t.n(l),c=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=c},424:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(423);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(423);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(2),c=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(r).a.string.isRequired},a.default=c},427:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),l=t(2),r=t.n(l),c=function(e){var a,t,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(t=l.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),t,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=c},431:function(e,a,t){"use strict";t.r(a);var n=t(422);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(428);t.d(a,"ComponentPreview",function(){return l.default});var r=t(429);t.d(a,"DocHeading",function(){return r.default});var c=t(430);t.d(a,"DocToc",function(){return c.default});var o=t(424);t.d(a,"DeprecatedComponentAlert",function(){return o.default});var i=t(425);t.d(a,"ExperimentalComponentAlert",function(){return i.default});var s=t(426);t.d(a,"Icon",function(){return s.default});var m=t(427);t.d(a,"PxScript",function(){return m.default})},440:function(e,a,t){"use strict";var n=t(1),u=t.n(n),l=t(2),r=t.n(l),c=t(187),d=t.n(c),o=function(e){var a=e.size,t=e.imgUrl,n=e.icon,l=e.heading,r=e.text,c=e.textSmall,o=e.mediaRight,i=e.muted,s=d()("media",o?"media-right":null,a?"media-".concat(a):null),m=d()("material-icons",i?"text-muted":null);return u.a.createElement("div",{className:s},t||n?u.a.createElement("div",{className:"media-img"},"\n",t?u.a.createElement(u.a.Fragment,null," ",u.a.createElement("img",{src:t})," ","\n"," "):null,n?u.a.createElement(u.a.Fragment,null," ",u.a.createElement("i",{className:m},n)," ","\n"," "):null):null,u.a.createElement("div",{className:"media-body"},function(){var e=d()(i?"text-muted":null);switch(a){case"sm":return u.a.createElement("h4",{className:e},l);case"lg":return u.a.createElement("h2",{className:e},l);default:return u.a.createElement("h3",{className:e},l)}}(),u.a.createElement("p",null,c?u.a.createElement("small",null,r):r)))};o.propTypes={size:r.a.oneOf(["sm","lg"]),imgUrl:r.a.string,icon:r.a.string,heading:r.a.string.isRequired,text:r.a.string,textSmall:r.a.bool,mediaRight:r.a.bool,muted:r.a.bool},a.a=o},462:function(e,a,t){"use strict";t.r(a),t.d(a,"Overview",function(){return o}),t.d(a,"Sizes",function(){return i}),t.d(a,"MediaPosition",function(){return s}),t.d(a,"MediaObjectText",function(){return m});var n=t(1),l=t.n(n),r=t(431),c=t(440),o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"Use the ",l.a.createElement(r.Property,{value:".media"})," class on an object to style it as a small container that feature a left- or right-aligned image/icon alongside textual content."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(c.a,{imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),l.a.createElement(c.a,{icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"sizes"},"Sizes"),l.a.createElement("p",null,"Sizes for media object..."),l.a.createElement("h3",null,"Small"),l.a.createElement("p",null,"Small media object ",l.a.createElement(r.Property,{value:".media-sm"}),"..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(c.a,{size:"sm",imgUrl:"https://via.placeholder.com/40x40",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),l.a.createElement(c.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})),l.a.createElement("h3",null,"Large"),l.a.createElement("p",null,"Large media object ",l.a.createElement(r.Property,{value:".media-lg"}),"..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(c.a,{size:"lg",imgUrl:"https://via.placeholder.com/56x56",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),l.a.createElement(c.a,{size:"lg",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"media-position"},"Media position"),l.a.createElement("p",null,"Use the ",l.a.createElement(r.Property,{value:".media-right"})," class to align the media content to the right."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(c.a,{mediaRight:!0,imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),l.a.createElement(c.a,{mediaRight:!0,icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},m=function(){return l.a.createElement("div",{className:"col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Media objects..."),l.a.createElement(o,null),l.a.createElement(i,null),l.a.createElement(s,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(m,null),l.a.createElement(r.DocToc,{component:m})))}}}]);
//# sourceMappingURL=doc-route.chunk_11.js.map?b7a920ffe3ef91bdc0d7