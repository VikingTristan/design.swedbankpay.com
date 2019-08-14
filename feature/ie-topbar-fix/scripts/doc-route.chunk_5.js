(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[52],{374:function(e,t){(function(t){e.exports=t}).call(this,{})},375:function(e,t,a){var n;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=l(a);if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var i=u.apply(null,a);i&&e.push(i)}else if("object"===n)for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===l(a(374))&&a(374)?void 0===(n=function(){return u}.apply(t,[]))||(e.exports=n):window.classNames=u}()},378:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(65),u=a.n(r),i=a(375),o=a.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,a=e.id,n=e.name,r=e.value,u=e.href,i=e.icon,s=e.loading,m=e.type,d=e.disabled,g=e.btnType,p=e.fullWidth,b=e.pullRight,E=e.input,v=e.outline,h=e.active,y=e.size,f=o()("btn",m?"btn-".concat(m):null,v?"btn-outline":null,y?"btn-".concat(y):null,s?"loading":null,p?"btn-block":null,b?"pull-right":null,h&&u?"active":null,d&&u?"disabled":null),w={href:u,id:a,name:n,defaultValue:r,disabled:u?null:d,active:h&&!u?"":null,role:u?"button":null,type:u?null:g||"button","aria-pressed":!!h||null,"aria-disabled":!(!u||!d)||null,tabIndex:u&&d?"-1":null};return u?l.a.createElement("a",c({className:f},w),i?"\n\t":null,i?l.a.createElement("i",{className:"material-icons"},i):null,i&&t?l.a.createElement("span",null,t):t):E?l.a.createElement("input",c({className:f},w)):l.a.createElement("button",c({className:f},w),i?"\n\t\t":null,i?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"material-icons"},i),"\n\t\t"):null,i&&t?l.a.createElement("span",null,t):t,i?"\n\t":null)};s.propTypes={type:u.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:u.a.string,id:u.a.string,name:u.a.string,value:u.a.string,href:u.a.string,icon:u.a.string,loading:u.a.bool,disabled:u.a.bool,btnType:u.a.string,fullWidth:u.a.bool,loader:u.a.bool,pullRight:u.a.bool,input:u.a.bool,outline:u.a.bool,active:u.a.bool,size:u.a.oneOf(["lg","sm","xs"])},t.a=s},394:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return m}),a.d(t,"UsageWithOtherTags",function(){return d}),a.d(t,"OutlineButtons",function(){return g}),a.d(t,"ButtonGroup",function(){return p}),a.d(t,"Sizes",function(){return b}),a.d(t,"ActiveState",function(){return E}),a.d(t,"DisabledState",function(){return v}),a.d(t,"UsageWithIcons",function(){return h}),a.d(t,"ButtonLoader",function(){return y});var n=a(1),l=a.n(n),r=a(95),u=a(376),i=a.n(u),o=a(358),c=a(378),s=a(360),m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"examples"},"Examples"),l.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{type:"destructive",label:"Destructive"}),"\n",l.a.createElement(c.a,{type:"link",label:"Link"}),"\n")))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),l.a.createElement("p",null,"The ",l.a.createElement(o.Property,{value:".btn"})," classes are designed to be used with the ",l.a.createElement(i.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",l.a.createElement(i.a,{className:"language-html"},"<a>")," or ",l.a.createElement(i.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),l.a.createElement("p",null,"When using button classes on ",l.a.createElement(i.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",l.a.createElement(o.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Anchor",href:"#"}),"\n",l.a.createElement(c.a,{type:"executive",label:"Button"}),"\n",l.a.createElement(c.a,{type:"executive",input:!0,value:"Input",btnType:"button"}),"\n",l.a.createElement(c.a,{type:"executive",input:!0,value:"Submit",btnType:"submit"}),"\n",l.a.createElement(c.a,{type:"executive",input:!0,value:"Reset",btnType:"reset"}),"\n")))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),l.a.createElement("p",null,"Replace the default modifier classes with the ",l.a.createElement(o.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{outline:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{outline:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{outline:!0,type:"destructive",label:"Destructive"}),"\n")))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-group"},"Using buttons together"),l.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",l.a.createElement(o.Property,{value:".button-group"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Activate"}),"\n",l.a.createElement(c.a,{type:"guiding",label:"Disable"}),"\n",l.a.createElement(c.a,{type:"destructive",label:"Delete"}),"\n")))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"sizes"},"Sizes"),l.a.createElement("p",null,"For a different sized button add ",l.a.createElement(o.Property,{value:".btn-lg"}),", ",l.a.createElement(o.Property,{value:".btn-sm"})," or ",l.a.createElement(o.Property,{value:".btn-xs"}),"."),l.a.createElement("h3",null,"Large"),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{size:"lg",type:"executive",label:"Large button"}),"\n",l.a.createElement(c.a,{size:"lg",type:"guiding",label:"Large button"}),"\n")),l.a.createElement("h3",null,"Small"),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{size:"sm",type:"executive",label:"Small button"}),"\n",l.a.createElement(c.a,{size:"sm",type:"guiding",label:"Small button"}),"\n")),l.a.createElement("h3",null,"Extra small"),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{size:"xs",type:"executive",label:"Extra small button"}),"\n",l.a.createElement(c.a,{size:"xs",type:"guiding",label:"Extra small button"}),"\n")),l.a.createElement("h3",null,"Block level"),l.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",l.a.createElement(o.Property,{value:".btn-block"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{fullWidth:!0,type:"executive",label:"Block level button"}),"\n",l.a.createElement(c.a,{fullWidth:!0,type:"guiding",label:"Block level button"}),"\n")))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"active-state"},"Active state"),l.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",l.a.createElement("b",null,"There’s no need to add a class to ",l.a.createElement(i.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",l.a.createElement(o.Property,{value:".active"})," (and include the ",l.a.createElement(o.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{href:"#",active:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{href:"#",active:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{href:"#",active:!0,type:"destructive",label:"Destructive"}),"\n")))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"disabled-state"},"Disabled state"),l.a.createElement("p",null,"Make buttons look inactive by adding the ",l.a.createElement(o.Attribute,{name:"disabled"})," boolean attribute to any ",l.a.createElement(i.a,{className:"language-html"},"<button>")," element."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{disabled:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{disabled:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{disabled:!0,type:"destructive",label:"Destructive"}),"\n")),l.a.createElement("p",null,"Disabled buttons using the ",l.a.createElement(i.a,{className:"language-html"},"<a>")," element behave a bit different:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{className:"language-html"},"<a>"),"s do not support the ",l.a.createElement(o.Attribute,{name:"disabled"}),"attribute, so you must add the ",l.a.createElement(o.Property,{value:".disabled"})," class to make it visually appear disabled."),l.a.createElement("li",null,"Some future-friendly styles are included to disable all ",l.a.createElement(o.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),l.a.createElement("li",null,"Disabled buttons should include the ",l.a.createElement(o.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{href:"#",disabled:!0,type:"executive",label:"Executive"}),"\n",l.a.createElement(c.a,{href:"#",disabled:!0,type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{href:"#",disabled:!0,type:"destructive",label:"Destructive"}),"\n")),l.a.createElement(s.b,{type:"warning"},l.a.createElement("h5",null,"Link functionality caveat"),l.a.createElement("p",null,"The ",l.a.createElement(o.Property,{value:".disabled"})," class uses ",l.a.createElement(o.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",l.a.createElement(i.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",l.a.createElement(o.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",l.a.createElement(o.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),l.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",l.a.createElement(i.a,{className:"language-html"},"<button>"),"."),l.a.createElement("p",null,"Read more about icon usage here ",l.a.createElement(r.Link,{to:"/docs/core/icons"},"here"),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{icon:"cloud",type:"executive",label:"Executive"}),"\n\n",l.a.createElement(c.a,{icon:"cloud",type:"guiding",label:"Guiding"}),"\n",l.a.createElement(c.a,{icon:"cloud",type:"destructive",label:"Destructive"}),"\n")))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-loader"},"Button loader"),l.a.createElement("p",null,"Add class ",l.a.createElement(o.Property,{value:".loading"})," to display the loader."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"Disabled loader"),l.a.createElement("p",null,l.a.createElement(o.Property,{value:".loading"})," with ",l.a.createElement(o.Attribute,{name:"disabled"})),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{disabled:!0,type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{disabled:!0,type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{disabled:!0,type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"Outline loader"),l.a.createElement("p",null,l.a.createElement(o.Property,{value:".loading"})," with ",l.a.createElement(o.Property,{value:".outline"})),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(c.a,{outline:!0,type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{outline:!0,type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",l.a.createElement(c.a,{outline:!0,type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")))};t.default=function(){return l.a.createElement(o.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(g,null),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(h,null),l.a.createElement(y,null))}}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?a10a5ee67c1f6fba32e1