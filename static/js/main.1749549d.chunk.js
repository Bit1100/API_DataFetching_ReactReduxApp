(this.webpackJsonpApi_Data_Fetching=this.webpackJsonpApi_Data_Fetching||[]).push([[0],{55:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(7),c=r.n(a),i=r.p+"static/media/Bit.2097ccb2.jpg",l=r(9),o=r.n(l),u=r(20),j="FETCH_USERS_REQUEST",d="FETCH_USERS_SUCCESS",b="FETCH_USERS_FAILURE",h=r(21),O=r.n(h);function m(){return{type:j}}function f(e){return{type:d,payload:e}}var x=r(4),p=r(1);var v=Object(x.b)(null,(function(e){return{getUsers:function(){return e(function(){var e=Object(u.a)(o.a.mark((function e(t){var r,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m),e.prev=1,e.next=4,O()({method:"get",url:"https://reqres.in/api/users?page=1",json:!0});case 4:(r=e.sent)||new Error("Could not get the users."),s=r.data.data,t(f(s)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n=e.t0.message,t({type:b,payload:n});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.getUsers;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"container flex justify-between items-center",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("img",{src:i,alt:"Logo"})}),Object(p.jsx)("button",{onClick:t,className:"btn btn-primary",children:"Get Users"})]})})})})),g=r(24),y=function(e){var t=e.user,r=t.avatar,s=t.first_name,n=t.last_name,a=t.email;return Object(p.jsxs)("div",{className:"card flex flex-col",children:[Object(p.jsx)("div",{className:"avatar flex items-center justify-center",children:Object(p.jsx)("img",{src:r,alt:"Avatar"})}),Object(p.jsxs)("h2",{className:"name",children:[s," ",n]}),Object(p.jsx)("a",{href:"mailto:".concat(a),className:"email",children:a}),Object(p.jsx)("a",{href:"mailto:".concat(a),className:"btn btn-secondary",children:"Contact Me"})]})};var N=Object(x.b)((function(e){return{userData:e}}),null)((function(e){var t=e.userData,r=Object(s.useState)(!0),n=Object(g.a)(r,2),a=n[0],c=n[1];return a?Object(p.jsxs)("div",{className:"loader flex justify-center items-center",children:[void setTimeout((function(){c(!1)}),2e3)," Loading..."]}):t.errors?Object(p.jsx)("h2",{children:t.errors}):Object(p.jsxs)("section",{className:"users",id:"users",children:[Object(p.jsx)("h1",{className:"section-heading",children:"Users"}),Object(p.jsx)("div",{className:"container",children:t&&t.users&&t.users.map((function(e){return Object(p.jsx)(y,{user:e},e.id)}))})]})}));r(55);var E=Object(x.b)((function(e){return{userData:e}}),null)((function(e){var t=e.userData;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),t.loading?Object(p.jsx)("div",{className:"loader flex justify-center items-center wrap",children:"Click Get Users Button to fetch Users"}):Object(p.jsx)(N,{})]})})),S=r(11),U=r(3),_={loading:!0,users:[],errors:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(U.a)({},e);case d:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,users:t.payload,errors:""});case b:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,users:[],errors:t.payload});default:return e}},w=r(23),F=Object(S.b)(C,Object(S.a)(w.a));c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(x.a,{store:F,children:Object(p.jsx)(E,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.1749549d.chunk.js.map