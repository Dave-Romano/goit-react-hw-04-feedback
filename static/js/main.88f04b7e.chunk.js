(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,a,i=n(0),s=n.n(i),o=n(9),r=n.n(o),l=(n(17),n(2)),j=n(3),b=n(4),u=b.a.div(c||(c=Object(j.a)(["\n  margin-left: 30px;\n  .title {\n    font-size: 50px;\n  }\n"]))),d=n(1),O=function(e){var t=e.setGood,n=e.setNeutral,c=e.setNegative,a=e.good,i=e.neutral,s=e.negative;return Object(d.jsxs)(u,{children:[Object(d.jsx)("h1",{className:"title",children:"Please leave feedback"}),Object(d.jsxs)("ul",{className:"bt-list",children:[Object(d.jsx)("button",{type:"button",name:"good",className:"bt-good",onClick:function(){return t(a+1)},children:"good"}),Object(d.jsx)("button",{type:"button",name:"neutral",className:"bt-neutral",onClick:function(){return n(i+1)},children:"neutral"}),Object(d.jsx)("button",{type:"button",name:"negative",className:"bt-bad",onClick:function(){return c(s+1)},children:"bad"})]})]})},h=b.a.div(a||(a=Object(j.a)(["\n  margin-left: 30px;\n  .title {\n    font-size: 50px;\n  }\n"]))),x=function(e){var t=e.good,n=e.neutral,c=e.negative,a=e.total,i=e.percent;return Object(d.jsxs)(h,{children:[Object(d.jsx)("h1",{className:"title",children:"Statistic"}),0===a?Object(d.jsx)("p",{children:"No feedback given"}):Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Good: ".concat(t)}),Object(d.jsx)("li",{children:"Neutral :".concat(n)}),Object(d.jsx)("li",{children:"negative: ".concat(c)}),Object(d.jsx)("li",{children:"Total: ".concat(a)}),Object(d.jsx)("li",{children:"Possitive Feedback: ".concat(i,"%")})]})]})},g=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(0),s=Object(l.a)(a,2),o=s[0],r=s[1],j=Object(i.useState)(0),b=Object(l.a)(j,2),u=b[0],h=b[1],g=Object(i.useState)(0),f=Object(l.a)(g,2),v=f[0],p=f[1],m=Object(i.useState)(0),N=Object(l.a)(m,2),k=N[0],S=N[1];return Object(i.useEffect)((function(){p(n+o+u),S(parseInt(n/(n+o+u)*100))}),[n,o,u]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{setGood:c,setNeutral:r,setNegative:h,good:n,neutral:o,negative:u}),Object(d.jsx)(x,{good:n,neutral:o,negative:u,total:v,percent:k})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.88f04b7e.chunk.js.map