(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),l=(n(22),n(23),n(17)),i=n(1);function o(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form-group container p-4",children:[Object(i.jsx)("h1",{children:"TextUtyls"}),Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:e.heading}),Object(i.jsx)("textarea",{className:"thetext form-control mb-4",value:c,onChange:function(e){r(e.target.value)},id:"exampleFormControlTextarea1",rows:"12"}),Object(i.jsx)("button",{disabled:0===c.length,onClick:function(){var e=c.substr(0,-1);r(e)},className:"btn m-2 btn-primary",children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===c.length,onClick:function(){navigator.clipboard.writeText(c)},className:"btn m-2 btn-primary",children:"Copy Text"}),Object(i.jsx)("button",{disabled:0===c.length,onClick:function(){var e=c.toUpperCase();r(e)},className:"btn m-2 btn-primary",children:"Upper Text"}),Object(i.jsx)("button",{disabled:0===c.length,onClick:function(){var e=c.charAt(0).toUpperCase()+c.slice(1);r(e)},className:"btn m-2 btn-primary",children:"Capitalize Text"}),Object(i.jsx)("button",{disabled:0===c.length,onClick:function(e){var t=c.split(" ").filter((function(e){return e})).join(" ");r(t)},className:"btn m-2 btn-primary",children:"Remove Extra Spaces"}),Object(i.jsx)("h2",{className:"mt-4",children:"Text Count"}),Object(i.jsx)("div",{className:"my-2",children:Object(i.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.split(" ").filter((function(e){return e})).join("").length," characters"]})})]})})}var b=n(8);function j(){return Object(i.jsx)("div",{children:Object(i.jsxs)("nav",{className:"navbar px-3 navbar-expand-lg navbar-dark pd-3 bg-primary",children:[Object(i.jsx)(b.b,{className:"navbar-brand",to:"/",children:"TextUtyls"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"})})]})})]})})}function d(){return Object(i.jsx)("div",{children:Object(i.jsx)("h3",{id:"About",children:"About Us"})})}var h=n(2);var x=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"container my-2",children:Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/about",children:Object(i.jsx)(d,{})}),Object(i.jsx)(h.a,{path:"/",children:Object(i.jsx)(o,{heading:"Enter your text below"})})]})})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.cc5df9ac.chunk.js.map