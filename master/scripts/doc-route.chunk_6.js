(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[61],{435:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(95),o=a(357),c=a(65),i=a.n(c),s=function(e){var t=e.type,a=e.titleTxt,n=e.titleMarkup,l=e.imgSrc,o=e.text,c=e.textSection,i=e.smallText,s=e.btn,m=e.btnClass,u=e.bodyClass,d=e.footerTxt,p=e.footerLink,f=e.footerLinkTxt,h=e.children;return r.a.createElement("div",{className:"card".concat(t?" card-".concat(t):"")},l?r.a.createElement("div",{className:"card-img"},"\n",r.a.createElement("img",{src:l,alt:""}),"\n"):null,a?r.a.createElement("header",{className:"card-header"},r.a.createElement("h3",null,a)):n?r.a.createElement("header",{className:"card-header"},n):null,r.a.createElement("div",{className:"card-body".concat(u?" ".concat(u):"")},h||null,o?r.a.createElement("p",null,o):null,"\n",c?c.map(function(e,t){return r.a.createElement("p",{key:"card-p-".concat(t)},e)}):null,s?r.a.createElement("button",{type:"button",className:"btn btn-executive".concat(m?" ".concat(m):"")},"\n","Button","\n"):null),d||f?r.a.createElement("footer",{className:"card-footer"},i?r.a.createElement("small",null,i):null,d||null,f?r.a.createElement("div",{className:"footer-link"},r.a.createElement("a",{href:p||"#"},f)):null):null)};s.propTypes={type:i.a.oneOf(["primary","secondary","plain"]),imgSrc:i.a.string,titleTxt:i.a.string,titleMarkup:i.a.object,icon:i.a.string,text:i.a.string,smallText:i.a.string,textSection:i.a.array,btn:i.a.bool,footerLink:i.a.string,footerLinkTxt:i.a.string};var m=s,u=a(383);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"Overview",function(){return E}),a.d(t,"GridCard",function(){return b});var x=["This is a lot of text","With some more text","And then even some more","Is it really possible to have this much text in one card?","Yes!"],E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"Cards support a wide variety of content, including images, text, list groups, links, and more. Make sure to restrain the width of your card unless you wish for it to fill the wrapping component."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,showCasePanelSm:!0,codeFigure:!0},r.a.createElement(m,{titleTxt:"Card title",type:"primary",imgSrc:"https://picsum.photos/300/?random",text:"This paragraph contains some text related to this card.",footerTxt:"Footer text"})))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"card-with-grid"},"Card with grid"),r.a.createElement("p",null,"Use our ",r.a.createElement(l.Link,{to:"/docs/core/grid"},"grid")," along with cards to control their size and how they are displayed on different screen resolutions. Make sure to add ",r.a.createElement(o.Property,{value:".d-flex"})," to the wrapper if you want the cards to be of equal height when next to each other."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(m,{type:"primary",titleTxt:"My grid card",text:"Card text",smallText:"Small card text",btn:!0,btnClass:"btn-block mt-auto",bodyClass:"d-flex flex-column"},r.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0}))),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(m,{type:"primary",titleTxt:"My grid card",textSection:x,smallText:"This is some small text",btn:!0,btnClass:"btn-block mt-auto",bodyClass:"d-flex flex-column"})),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(m,{type:"primary",titleTxt:"My grid card",imgSrc:"https://picsum.photos/300/?random",text:"This is a card with an image and body",footerLinkTxt:"Footer link"})))))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"card-types"},"Card Types"),r.a.createElement("p",null,"We offer three different card types; ",r.a.createElement(o.Property,{value:".card-primary"}),", ",r.a.createElement(o.Property,{value:".card-secondary"})," and ",r.a.createElement(o.Property,{value:".card-plain"}),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(m,{type:"primary",titleTxt:"Card Primary",imgSrc:"https://picsum.photos/300/?random",text:"This paragraph contains some text about the person displayed above."},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,r.a.createElement("span",{className:"font-weight-bold"},"Card number:")," 4563 5648 5642"),r.a.createElement("li",null,r.a.createElement("span",{className:"font-weight-bold"},"Balance:")," 2500,- ")))),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(m,{type:"secondary",titleTxt:"Card Secondary",text:"Descriptive text to put inside the card, could contain a lot.",footerLinkTxt:"Footer link"},r.a.createElement(u.a,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0}))),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(m,{type:"plain",titleTxt:"Card Plain",imgSrc:"https://picsum.photos/300/?random",text:"Descriptive text to put inside the card, could contain a lot.",footerLinkTxt:"Footer link"},r.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0}))))))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,h(t).apply(this,arguments))}var a,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),a=t,(l=[{key:"render",value:function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Card is a flexible colored box which fills the width of its parent element."),r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(g,null))}}])&&p(a.prototype,l),c&&p(a,c),t}();t.default=v}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?7249aba43d84ad295e74