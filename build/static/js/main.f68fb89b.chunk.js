(this.webpackJsonpreactproject2=this.webpackJsonpreactproject2||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),o=n.n(a),i=(n(15),n(10)),s=n(5),d=n(2),l=(n(16),n(7),n(0)),u=function(e){var t=e.color,n=e.text,c=e.onclick;return Object(l.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onclick:n})]})};b.defaultProps={title:"Task Tracker"};var h=b,O=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),u=s[0],j=s[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),O=h[0],x=h[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,remainder:O}),o(""),j(""),x(!1)):alert("Please Add Text")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Tasks"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day & Time"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Task"})]})},x=n(9),f=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.remainder?"remainder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text,Object(l.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(f,{task:e,onDelete:n,onToggle:c},e.id)}))})};var p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctor Appointment",day:"Feb 5th at 2:30pm",remainder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",remainder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2:30pm",remainder:!1}]),o=Object(d.a)(a,2),u=o[0],j=o[1];return Object(l.jsxs)("div",{className:"container-1",children:[Object(l.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(l.jsx)(O,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(s.a)({id:t},e);j([].concat(Object(i.a)(u),[n]))}}),u.length>0?Object(l.jsx)(m,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){console.log(e),j(u.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{remainder:!t.remainder}):t})))}}):"No Tasks"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),g()},7:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.f68fb89b.chunk.js.map