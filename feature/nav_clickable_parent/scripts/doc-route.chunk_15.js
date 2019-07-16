(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[13],{440:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(97),i=n(378),c=n.n(i),l=n(362),s=n(48),u=n.n(s),m=n(315),f=n.n(m);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,h(t).call(this,e))).state={active:"main-0",activeParent:null},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a["Component"]),n=t,(o=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.vertsize,o=t.widesize,i=f()("nav",a?"nav-".concat(a,"-vertical"):"",o?"nav-".concat(o,"-vertical-wide"):"");return r.a.createElement("nav",{className:i},r.a.createElement("ul",null,n.map(function(t,n){var a=t.name,o=t.icon,i=t.subItems;return r.a.createElement("li",{key:"nav-item-".concat(a,"-").concat(n)},"\n",i?r.a.createElement("div",{className:"submenu"},"\n",r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-0"))}},r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),r.a.createElement("ul",null,i.map(function(t,a){return r.a.createElement("li",{key:"nav-subItems-".concat(t,"-").concat(a),className:e.state.active==="sub-".concat(n,"-").concat(a)?"active":null},r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-").concat(a))}},t))}))):r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"main-".concat(n))},className:e.state.active==="main-".concat(n)?"active":null},"\n",r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),"\n")})))}}])&&v(n.prototype,o),i&&v(n,i),t}(),E=["xs","sm","md","lg","xl","xxl"];b.propTypes={items:u.a.array.isRequired,vertsize:u.a.oneOf(E),widesize:u.a.oneOf(E)};var g=b;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return j}),n.d(t,"TwoLevels",function(){return T}),n.d(t,"IconsOnly",function(){return x}),n.d(t,"Mix",function(){return z}),n.d(t,"Mobile",function(){return F}),n.d(t,"JavascriptMethods",function(){return I});var C=window.px.nav,N=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],S=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-standard"},"Standard nav"),r.a.createElement("p",null,"Add class ",r.a.createElement(l.Property,{value:".nav"})," and ",r.a.createElement(l.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",r.a.createElement(c.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",r.a.createElement(c.a,{className:"language-html"},"<i>")," and ",r.a.createElement(c.a,{className:"language-html"},"<span>")," with your desired ",r.a.createElement(o.Link,{to:"/docs/core/icons"},"icon")," and text. ",r.a.createElement(l.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{widesize:"lg",items:N})))},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),r.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",r.a.createElement(c.a,{className:"language-html"},"<DocContainer>")," with class ",r.a.createElement(l.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",r.a.createElement(c.a,{className:"language-html"},"<ul>")," with ",r.a.createElement(c.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{widesize:"lg",items:S})))},x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-tablet"},"Icons only"),r.a.createElement("p",null,"To display only icons use class ",r.a.createElement(l.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",r.a.createElement(l.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{vertsize:"md",items:S})))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),r.a.createElement("p",null,"You can also use both icons only and wide together."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{vertsize:"md",widesize:"lg",items:S})))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),r.a.createElement("p",null,"To only display mobile view use class ",r.a.createElement(l.Property,{value:".nav"})," alone."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(g,{items:N})))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(l.JavascriptDocs,{componentName:"nav",open:!0,close:!0}))},A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,O(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidUpdate",value:function(){C.init()}},{key:"componentDidMount",value:function(){C.init()}},{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use ",r.a.createElement(c.a,{className:"language-html"},"<nav>"),"s to create a basic navigational element containing links."),r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(x,null),r.a.createElement(z,null),r.a.createElement(F,null),r.a.createElement(I,null))}}])&&P(n.prototype,o),i&&P(n,i),t}();t.default=A}}]);
//# sourceMappingURL=doc-route.chunk_15.js.map?889ae14d1c2b5d70f234