(this.webpackJsonppricing=this.webpackJsonppricing||[]).push([[0],{180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(48),i=n.n(a),s=n(42),o=n(14),u=n(58),j=(n(171),n(17)),d=n(12),l=n(197),b=n(196),O=n(74),p=n(41),h=n(127);n(172),n(182);h.a.initializeApp({apiKey:"AIzaSyAP3J-XdlTdcxSNxWqq-s_oFjDrKRQiZWo",authDomain:"kivi-pu.firebaseapp.com",projectId:"kivi-pu",storageBucket:"kivi-pu.appspot.com",messagingSenderId:"548489968120",appId:"1:548489968120:web:26993108b29017326bbe0d"});var x=h.a.auth(),m=h.a.firestore(),f=n(32),v=n.n(f),g=n(49),w=n(201),y=n(194),C=n(183),k=n(147);var S=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(d.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(),j=Object(d.a)(u,2),l=j[0],b=j[1];return[s,function(e,t){b(new k.a(e,t)),o(void 0)},n,function(e){var t;r(e),o(""===e||null===l||void 0===l||null===(t=l.search(e))||void 0===t?void 0:t.map((function(e){return e.item})))}]},H=n(21);function R(e,t){var n=e.getElementsByTagName(t);return n.length>=1&&n[0].textContent||""}var E=function e(t){Object(H.a)(this,e),this.id=void 0,this.name=void 0,this.price=void 0,this.count=void 0,this.id=R(t,"code"),this.name=R(t,"name"),this.price=R(t,"price"),this.count=R(t,"count")},I=function e(t){var n;Object(H.a)(this,e),this.names=void 0,this.products=void 0,this.names=null===(n=t.getAttribute("name"))||void 0===n?void 0:n.split("/"),this.products=Array.from(t.getElementsByTagName("product")).map((function(e){return new E(e)}))},A=n(200),F=n(100),B=n(68),P=n(95),D=n(145),N="UPDATE_ORDER",T="RESET_ORDER",z={order:{}},L=Object(P.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var n=t,c=n.product,r=n.amount;return Object(j.a)(Object(j.a)({},e),{},{order:Object(j.a)(Object(j.a)({},e.order),{},Object(B.a)({},c.id,{product:c,amount:r}))});case T:return Object(j.a)(Object(j.a)({},e),{},{order:{}});default:return e}}),Object(D.devToolsEnhancer)({})),J=n(3),M=Object(u.b)((function(e,t){var n;return{amount:(null===(n=e.order[t.product.id])||void 0===n?void 0:n.amount)||0}}),(function(e,t){return{setOrderAmount:function(n){return e({type:N,product:t.product,amount:n})}}}))((function(e){var t=e.amount,n=e.setOrderAmount,r=Object(c.useState)(),a=Object(d.a)(r,2),i=a[0],s=a[1];return 0===t&&void 0===i?Object(J.jsx)(C.a,{size:"mini",compact:!0,basic:!0,icon:"add",onClick:function(){return n(1)}}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(C.a,{size:"mini",compact:!0,basic:!0,icon:"plus",onClick:function(){return n(t+1)}}),Object(J.jsx)(y.a,{size:"mini",value:void 0===i?t:i,onChange:function(e){return s(e.target.value)},onBlur:function(){void 0!==i&&(n(parseInt(i)||0),s(void 0))}}),Object(J.jsx)(C.a,{size:"mini",compact:!0,basic:!0,icon:"minus",onClick:function(){return n(t-1)}})]})})),W=function(e){var t=e.products,n=Object(p.a)(x),c=Object(d.a)(n,1)[0];return Object(J.jsx)(l.a.Body,{children:t.map((function(e,t){return Object(J.jsxs)(l.a.Row,{children:[Object(J.jsx)(l.a.Cell,{children:e.name}),Object(J.jsxs)(l.a.Cell,{singleLine:!0,children:[e.price," \u0433\u0440\u043d"]}),Object(J.jsx)(l.a.Cell,{singleLine:!0,className:"product-row-actions",children:"\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f"===e.count?Object(J.jsx)(F.a,{color:"yellow",children:"\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f"}):c?Object(J.jsx)(M,{product:e}):Object(J.jsx)(F.a,{color:"green",children:"\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})})]},t)}))})},_=function(e){var t=e.names;return Object(J.jsx)(l.a.Header,{children:Object(J.jsx)(l.a.Row,{children:Object(J.jsx)(l.a.HeaderCell,{colSpan:3,children:Object(J.jsx)(A.a,{icon:"right angle",sections:t.map((function(e){return{key:e,content:e}}))})})})})},q=function(e){var t=e.categories;return Object(J.jsx)(J.Fragment,{children:t.map((function(e,t){var n=e.names,r=e.products;return Object(J.jsxs)(c.Fragment,{children:[n&&Object(J.jsx)(_,{names:n}),Object(J.jsx)(W,{products:r})]},t)}))})};function K(){return(K=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/kivi-pu/products/master/products.xml");case 2:return t=e.sent,e.t0=new DOMParser,e.next=6,t.text();case 6:return e.t1=e.sent,n=e.t0.parseFromString.call(e.t0,e.t1,"text/xml"),e.abrupt("return",Array.from(n.getElementsByTagName("category")).map((function(e){return new I(e)})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e){var t=e.header,n=e.isFirebaseLoading,r=Object(c.useState)(!0),a=Object(d.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(),u=Object(d.a)(o,2),j=u[0],b=u[1],O=S(),p=Object(d.a)(O,4),h=p[0],x=p[1],m=p[2],f=p[3];return Object(c.useEffect)((function(){(function(){return K.apply(this,arguments)})().then((function(e){b(e),x(e.map((function(e){return e.products})).flat(),{keys:["name"]}),s(!1)}))}),[]),Object(J.jsxs)(w.a,{basic:!0,attached:!0,loading:i||n,children:[Object(J.jsx)(y.a,{fluid:!0,icon:"search",iconPosition:"left",value:m,onChange:function(e){return f(e.target.value)},action:Object(J.jsx)(C.a,{basic:!0,icon:"delete",onClick:function(){return f("")}})}),Object(J.jsxs)(l.a,{unstackable:!0,compact:"very",children:[Object(J.jsx)(l.a.Header,{children:Object(J.jsx)(l.a.Row,{children:t})}),void 0===h?j&&Object(J.jsx)(q,{categories:j}):Object(J.jsx)(W,{products:h})]})]})},Q=(l.a.HeaderCell,l.a.Row,l.a.Cell,Object(u.b)((function(e){return{order:e.order}}))((function(e){var t=e.order,n=Object(p.a)(x),c=Object(d.a)(n,2),r=c[0],a=c[1],i=Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(l.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(J.jsx)(l.a.HeaderCell,{children:"\u0426\u0456\u043d\u0430"}),Object(J.jsx)(l.a.HeaderCell,{children:r?"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f":"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c"})]});return Object(J.jsxs)(J.Fragment,{children:[r&&Object(J.jsxs)(b.a,{secondary:!0,attached:!0,children:[Object(J.jsxs)(b.a.Item,{onClick:function(){return x.signOut()},children:[Object(J.jsx)(O.a,{name:"sign out"}),"\u0412\u0438\u0439\u0442\u0438"]}),Object(J.jsxs)(b.a.Menu,{className:"right",children:[Object.values(t).filter((function(e){return e&&e.amount>0})).length>0&&Object(J.jsxs)(b.a.Item,{as:function(e){return Object(J.jsx)(s.b,Object(j.a)({to:"/order"},e))},children:[Object(J.jsx)(O.a,{name:"shop"}),"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"]}),Object(J.jsxs)(b.a.Item,{as:function(e){return Object(J.jsx)(s.b,Object(j.a)({to:"/orders"},e))},children:[Object(J.jsx)(O.a,{name:"history"}),"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"]})]})]}),Object(J.jsx)(G,{header:i,isFirebaseLoading:a})]})}))),U=n(202),X=n(198),Z=n(195),V=function(){var e=Object(p.a)(x),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(""),l=Object(d.a)(j,2),b=l[0],O=l[1],h=Object(c.useState)(!1),m=Object(d.a)(h,2),f=m[0],y=m[1],C=Object(c.useState)(),k=Object(d.a)(C,2),S=k[0],H=k[1];if(n)return Object(J.jsx)(o.a,{to:"/"});var R=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,x.signInWithEmailAndPassword(s,b);case 4:H(void 0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),H(e.t0.message);case 10:y(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(J.jsx)(U.a,{className:"sign-in-page",verticalAlign:"middle",textAlign:"center",children:Object(J.jsxs)(U.a.Column,{children:[S&&Object(J.jsx)(X.a,{error:!0,content:S}),Object(J.jsx)(Z.a,{onSubmit:R,loading:f||r,children:Object(J.jsxs)(w.a,{stacked:!0,children:[Object(J.jsx)(Z.a.Input,{type:"email",placeholder:"\u0410\u0434\u0440\u0435\u0441 e-mail",icon:"user",iconPosition:"left",value:s,onChange:function(e){return u(e.target.value)}}),Object(J.jsx)(Z.a.Input,{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",icon:"lock",iconPosition:"left",value:b,onChange:function(e){return O(e.target.value)}}),Object(J.jsx)(Z.a.Button,{icon:"sign in",content:"\u0423\u0432\u0456\u0439\u0442\u0438",fluid:!0})]})})]})})},Y=Object(u.b)((function(e){return{items:Object.values(e.order).filter((function(e){return e&&e.amount>0})).map((function(e){return e}))}}),(function(e){return{resetOrder:function(){return e({type:T})}}}))((function(e){var t=e.items,n=e.resetOrder,r=Object(p.a)(x),a=Object(d.a)(r,2),i=a[0],u=a[1],b=Object(c.useState)(!1),O=Object(d.a)(b,2),h=O[0],f=O[1],y=Object(c.useState)(),k=Object(d.a)(y,2),S=k[0],H=k[1],R=Object(o.f)();if(!u&&!i||0===t.length)return Object(J.jsx)(o.a,{to:"/"});var E=function(){var e=Object(g.a)(v.a.mark((function e(){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,m.collection("orders").add({uid:i.uid,date:new Date});case 4:return c=e.sent,e.next=7,Promise.all(t.map((function(e){var t=e.product,n=t.id,r=t.name,a=e.amount;return c.collection("products").add({id:n,name:r,amount:a})})));case 7:H(void 0),n(),R.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),H(e.t0.message);case 15:f(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(J.jsxs)(w.a,{basic:!0,loading:h||u,children:[S&&Object(J.jsx)(X.a,{error:!0,content:S}),Object(J.jsxs)(l.a,{unstackable:!0,compact:"very",children:[Object(J.jsx)(l.a.Header,{children:Object(J.jsxs)(l.a.Row,{children:[Object(J.jsx)(l.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(J.jsx)(l.a.HeaderCell,{children:"\u0426\u0456\u043d\u0430"}),Object(J.jsx)(l.a.HeaderCell,{children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})}),Object(J.jsx)(W,{products:t.map((function(e){return e.product}))})]}),Object(J.jsxs)(C.a.Group,{fluid:!0,children:[Object(J.jsx)(C.a,{basic:!0,negative:!0,icon:"arrow left",content:"\u041d\u0430\u0437\u0430\u0434",as:function(e){return Object(J.jsx)(s.b,Object(j.a)({to:"/"},e))}}),Object(J.jsx)(C.a,{basic:!0,positive:!0,icon:"shop",content:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",onClick:E})]})]})}));function $(){return($=Object(g.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("orders").where("uid","==",t).orderBy("date","desc").get();case 2:return n=e.sent,c=n.docs.map(function(){var e=Object(g.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ref.collection("products").get();case 2:return n=e.sent,c=n.docs.map((function(e){return{name:e.get("name"),amount:e.get("amount")}})),e.abrupt("return",{date:t.get("date").toDate(),products:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(c);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(){var e=Object(p.a)(x),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),u=i[0],h=i[1],m=Object(c.useState)(!0),f=Object(d.a)(m,2),v=f[0],g=f[1];return Object(c.useEffect)((function(){n&&function(e){return $.apply(this,arguments)}(n.uid).then((function(e){h(e),g(!1)}))}),[n]),r||n?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(b.a,{secondary:!0,attached:!0,children:Object(J.jsxs)(b.a.Item,{as:function(e){return Object(J.jsx)(s.b,Object(j.a)({to:"/"},e))},children:[Object(J.jsx)(O.a,{name:"arrow left"}),"\u041d\u0430\u0437\u0430\u0434"]})}),Object(J.jsx)(w.a,{basic:!0,attached:!0,loading:v||r,children:0===u.length?Object(J.jsx)(X.a,{info:!0,content:"\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"}):Object(J.jsxs)(l.a,{unstackable:!0,compact:"very",children:[Object(J.jsx)(l.a.Header,{children:Object(J.jsxs)(l.a.Row,{children:[Object(J.jsx)(l.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(J.jsx)(l.a.HeaderCell,{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"})]})}),u.map((function(e,t){var n=e.date,r=e.products;return Object(J.jsxs)(c.Fragment,{children:[Object(J.jsx)(l.a.Header,{children:Object(J.jsx)(l.a.Row,{children:Object(J.jsx)(l.a.HeaderCell,{colSpan:2,children:n.toString()})})}),Object(J.jsx)(l.a.Body,{children:r.map((function(e,t){var n=e.name,c=e.amount;return Object(J.jsxs)(l.a.Row,{children:[Object(J.jsx)(l.a.Cell,{children:n}),Object(J.jsx)(l.a.Cell,{children:c})]},t)}))})]},t)}))]})})]}):Object(J.jsx)(o.a,{to:"/"})};l.a.HeaderCell,l.a.Row,l.a.Cell,n(180);i.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(u.a,{store:L,children:Object(J.jsxs)(s.a,{children:[Object(J.jsx)(o.b,{exact:!0,path:"/signin",component:V}),Object(J.jsx)(o.b,{exact:!0,path:"/order",component:Y}),Object(J.jsx)(o.b,{exact:!0,path:"/orders",component:ee}),Object(J.jsx)(o.b,{exact:!0,path:"/",component:Q})]})})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.815d1199.chunk.js.map