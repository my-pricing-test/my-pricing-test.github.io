(this.webpackJsonppricing=this.webpackJsonppricing||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(49),i=n.n(a),s=n(43),o=n(14),u=n(59),j=(n(172),n(17)),d=n(12),b=n(198),l=n(197),O=n(75),p=n(42),h=n(128);n(173),n(183);h.a.initializeApp({apiKey:"AIzaSyAP3J-XdlTdcxSNxWqq-s_oFjDrKRQiZWo",authDomain:"kivi-pu.firebaseapp.com",projectId:"kivi-pu",storageBucket:"kivi-pu.appspot.com",messagingSenderId:"548489968120",appId:"1:548489968120:web:26993108b29017326bbe0d"});var x=h.a.auth(),m=h.a.firestore(),f=n(33),v=n.n(f),g=n(50),y=n(202),w=n(195),C=n(184);var k=n(148);var S=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(d.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(),j=Object(d.a)(u,2),b=j[0],l=j[1];return[s,function(e,t){l(new k.a(e,t)),o(void 0)},n,function(e){var t;r(e),o(""===e||null===b||void 0===b||null===(t=b.search(e))||void 0===t?void 0:t.map((function(e){return e.item})))}]},H=n(21),I=n(25),R=function(){function e(t,n){Object(H.a)(this,e),this.names=void 0,this.products=void 0,this.names=t.split("/"),this.products=n}return Object(I.a)(e,[{key:"present",value:function(){return!(1===this.names.length&&""===this.names[0])}}]),e}();function E(e,t){var n=e.getElementsByTagName(t);return n.length>=1&&n[0].textContent||""}var F=function e(t){Object(H.a)(this,e),this.id=void 0,this.name=void 0,this.price=void 0,this.count=void 0,this.category=void 0,this.id=E(t,"code"),this.name=E(t,"name"),this.price=E(t,"price"),this.count=E(t,"count"),this.category=E(t,"category")},A=n(201),B=n(101),P=n(69),D=n(96),z=n(146),N="UPDATE_ORDER",T="RESET_ORDER",L={order:{}},J=Object(D.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var n=t,c=n.product,r=n.amount;return Object(j.a)(Object(j.a)({},e),{},{order:Object(j.a)(Object(j.a)({},e.order),{},Object(P.a)({},c.id,{product:c,amount:r}))});case T:return Object(j.a)(Object(j.a)({},e),{},{order:{}});default:return e}}),Object(z.devToolsEnhancer)({})),M=n(3),W=Object(u.b)((function(e,t){var n;return{amount:(null===(n=e.order[t.product.id])||void 0===n?void 0:n.amount)||0}}),(function(e,t){return{setOrderAmount:function(n){return e({type:N,product:t.product,amount:n})}}}))((function(e){var t=e.amount,n=e.setOrderAmount,r=Object(c.useState)(),a=Object(d.a)(r,2),i=a[0],s=a[1];return 0===t&&void 0===i?Object(M.jsx)(C.a,{size:"mini",compact:!0,basic:!0,icon:"add",onClick:function(){return n(1)}}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(C.a,{size:"mini",compact:!0,basic:!0,icon:"plus",onClick:function(){return n(t+1)}}),Object(M.jsx)(w.a,{size:"mini",value:void 0===i?t:i,onChange:function(e){return s(e.target.value)},onBlur:function(){void 0!==i&&(n(parseInt(i)||0),s(void 0))}}),Object(M.jsx)(C.a,{size:"mini",compact:!0,basic:!0,icon:"minus",onClick:function(){return n(t-1)}})]})})),_=function(e){var t=e.products,n=Object(p.a)(x),c=Object(d.a)(n,1)[0];return Object(M.jsx)(b.a.Body,{children:t.map((function(e,t){return Object(M.jsxs)(b.a.Row,{children:[Object(M.jsx)(b.a.Cell,{children:e.name}),Object(M.jsxs)(b.a.Cell,{singleLine:!0,children:[e.price," \u0433\u0440\u043d"]}),Object(M.jsx)(b.a.Cell,{singleLine:!0,className:"product-row-actions",children:"\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f"===e.count?Object(M.jsx)(B.a,{color:"yellow",children:"\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f"}):c?Object(M.jsx)(W,{product:e}):Object(M.jsx)(B.a,{color:"green",children:"\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})})]},t)}))})},q=function(e){var t=e.names;return Object(M.jsx)(b.a.Header,{children:Object(M.jsx)(b.a.Row,{children:Object(M.jsx)(b.a.HeaderCell,{colSpan:3,children:Object(M.jsx)(A.a,{icon:"right angle",sections:t.map((function(e){return{key:e,content:e}}))})})})})},K=function(e){var t=e.categories;return Object(M.jsx)(M.Fragment,{children:t.map((function(e,t){return Object(M.jsxs)(c.Fragment,{children:[e.present()&&Object(M.jsx)(q,{names:e.names}),Object(M.jsx)(_,{products:e.products})]},t)}))})};function G(){return(G=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/kivi-pu/products/master/products.xml");case 2:return t=e.sent,e.t0=new DOMParser,e.next=6,t.text();case 6:return e.t1=e.sent,n=e.t0.parseFromString.call(e.t0,e.t1,"text/xml"),e.abrupt("return",Array.from(n.getElementsByTagName("product")).map((function(e){return new F(e)})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e){var t=e.header,n=e.isFirebaseLoading,r=Object(c.useState)(!0),a=Object(d.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(),u=Object(d.a)(o,2),j=u[0],l=u[1],O=S(),p=Object(d.a)(O,4),h=p[0],x=p[1],m=p[2],f=p[3];return Object(c.useEffect)((function(){(function(){return G.apply(this,arguments)})().then((function(e){var t,n,c=(t=e,n=function(e){return e.category},Object.entries(t.reduce((function(e,t){var c=n(t);return e[c]=e[c]||[],e[c].push(t),e}),{}))).sort((function(e,t){var n=Object(d.a)(e,1)[0],c=Object(d.a)(t,1)[0];return n.localeCompare(c)})).map((function(e){var t=Object(d.a)(e,2),n=t[0],c=t[1];return new R(n,c)}));l(c),x(e.sort((function(e,t){return e.name.localeCompare(t.name)})),{keys:["name"]}),s(!1)}))}),[]),Object(M.jsxs)(y.a,{basic:!0,attached:!0,loading:i||n,children:[Object(M.jsx)(w.a,{fluid:!0,icon:"search",iconPosition:"left",value:m,onChange:function(e){return f(e.target.value)},action:Object(M.jsx)(C.a,{basic:!0,icon:"delete",onClick:function(){return f("")}})}),Object(M.jsxs)(b.a,{unstackable:!0,compact:"very",children:[Object(M.jsx)(b.a.Header,{children:Object(M.jsx)(b.a.Row,{children:t})}),void 0===h?j&&Object(M.jsx)(K,{categories:j}):Object(M.jsx)(_,{products:h})]})]})},U=Object(u.b)((function(e){return{order:e.order}}))((function(e){var t=e.order,n=Object(p.a)(x),c=Object(d.a)(n,2),r=c[0],a=c[1],i=Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(b.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(M.jsx)(b.a.HeaderCell,{children:"\u0426\u0456\u043d\u0430"}),Object(M.jsx)(b.a.HeaderCell,{children:r?"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f":"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c"})]});return Object(M.jsxs)(M.Fragment,{children:[r&&Object(M.jsxs)(l.a,{secondary:!0,attached:!0,children:[Object(M.jsxs)(l.a.Item,{onClick:function(){return x.signOut()},children:[Object(M.jsx)(O.a,{name:"sign out"}),"\u0412\u0438\u0439\u0442\u0438"]}),Object(M.jsxs)(l.a.Menu,{className:"right",children:[Object.values(t).filter((function(e){return e&&e.amount>0})).length>0&&Object(M.jsxs)(l.a.Item,{as:function(e){return Object(M.jsx)(s.b,Object(j.a)({to:"/order"},e))},children:[Object(M.jsx)(O.a,{name:"shop"}),"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"]}),Object(M.jsxs)(l.a.Item,{as:function(e){return Object(M.jsx)(s.b,Object(j.a)({to:"/orders"},e))},children:[Object(M.jsx)(O.a,{name:"history"}),"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"]})]})]}),Object(M.jsx)(Q,{header:i,isFirebaseLoading:a})]})})),X=n(203),Z=n(199),V=n(196),Y=function(){var e=Object(p.a)(x),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),l=b[0],O=b[1],h=Object(c.useState)(!1),m=Object(d.a)(h,2),f=m[0],w=m[1],C=Object(c.useState)(),k=Object(d.a)(C,2),S=k[0],H=k[1];if(n)return Object(M.jsx)(o.a,{to:"/"});var I=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,x.signInWithEmailAndPassword(s,l);case 4:H(void 0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),H(e.t0.message);case 10:w(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(X.a,{className:"sign-in-page",verticalAlign:"middle",textAlign:"center",children:Object(M.jsxs)(X.a.Column,{children:[S&&Object(M.jsx)(Z.a,{error:!0,content:S}),Object(M.jsx)(V.a,{onSubmit:I,loading:f||r,children:Object(M.jsxs)(y.a,{stacked:!0,children:[Object(M.jsx)(V.a.Input,{type:"email",placeholder:"\u0410\u0434\u0440\u0435\u0441 e-mail",icon:"user",iconPosition:"left",value:s,onChange:function(e){return u(e.target.value)}}),Object(M.jsx)(V.a.Input,{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",icon:"lock",iconPosition:"left",value:l,onChange:function(e){return O(e.target.value)}}),Object(M.jsx)(V.a.Button,{icon:"sign in",content:"\u0423\u0432\u0456\u0439\u0442\u0438",fluid:!0})]})})]})})},$=Object(u.b)((function(e){return{items:Object.values(e.order).filter((function(e){return e&&e.amount>0})).map((function(e){return e}))}}),(function(e){return{resetOrder:function(){return e({type:T})}}}))((function(e){var t=e.items,n=e.resetOrder,r=Object(p.a)(x),a=Object(d.a)(r,2),i=a[0],u=a[1],l=Object(c.useState)(!1),O=Object(d.a)(l,2),h=O[0],f=O[1],w=Object(c.useState)(),k=Object(d.a)(w,2),S=k[0],H=k[1],I=Object(o.f)();if(!u&&!i||0===t.length)return Object(M.jsx)(o.a,{to:"/"});var R=function(){var e=Object(g.a)(v.a.mark((function e(){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,m.collection("orders").add({uid:i.uid,date:new Date});case 4:return c=e.sent,e.next=7,Promise.all(t.map((function(e){var t=e.product,n=t.id,r=t.name,a=e.amount;return c.collection("products").add({id:n,name:r,amount:a})})));case 7:H(void 0),n(),I.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),H(e.t0.message);case 15:f(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(M.jsxs)(y.a,{basic:!0,loading:h||u,children:[S&&Object(M.jsx)(Z.a,{error:!0,content:S}),Object(M.jsxs)(b.a,{unstackable:!0,compact:"very",children:[Object(M.jsx)(b.a.Header,{children:Object(M.jsxs)(b.a.Row,{children:[Object(M.jsx)(b.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(M.jsx)(b.a.HeaderCell,{children:"\u0426\u0456\u043d\u0430"}),Object(M.jsx)(b.a.HeaderCell,{children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})}),Object(M.jsx)(_,{products:t.map((function(e){return e.product}))})]}),Object(M.jsxs)(C.a.Group,{fluid:!0,children:[Object(M.jsx)(C.a,{basic:!0,negative:!0,icon:"arrow left",content:"\u041d\u0430\u0437\u0430\u0434",as:function(e){return Object(M.jsx)(s.b,Object(j.a)({to:"/"},e))}}),Object(M.jsx)(C.a,{basic:!0,positive:!0,icon:"shop",content:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",onClick:R})]})]})}));function ee(){return(ee=Object(g.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("orders").where("uid","==",t).orderBy("date","desc").get();case 2:return n=e.sent,c=n.docs.map(function(){var e=Object(g.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ref.collection("products").get();case 2:return n=e.sent,c=n.docs.map((function(e){return{name:e.get("name"),amount:e.get("amount")}})),e.abrupt("return",{date:t.get("date").toDate(),products:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(c);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(){var e=Object(p.a)(x),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),u=i[0],h=i[1],m=Object(c.useState)(!0),f=Object(d.a)(m,2),v=f[0],g=f[1],w=Object(c.useState)(),C=Object(d.a)(w,2),k=C[0],S=C[1];return Object(c.useEffect)((function(){n&&function(e){return ee.apply(this,arguments)}(n.uid).then((function(e){h(e),S(void 0),g(!1)})).catch((function(e){S(e.message),g(!1)}))}),[n]),r||n?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(l.a,{secondary:!0,attached:!0,children:Object(M.jsxs)(l.a.Item,{as:function(e){return Object(M.jsx)(s.b,Object(j.a)({to:"/"},e))},children:[Object(M.jsx)(O.a,{name:"arrow left"}),"\u041d\u0430\u0437\u0430\u0434"]})}),Object(M.jsxs)(y.a,{basic:!0,attached:!0,loading:v||r,children:[k&&Object(M.jsx)(Z.a,{error:!0,content:k}),0===u.length?Object(M.jsx)(Z.a,{info:!0,content:"\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"}):Object(M.jsxs)(b.a,{unstackable:!0,compact:"very",children:[Object(M.jsx)(b.a.Header,{children:Object(M.jsxs)(b.a.Row,{children:[Object(M.jsx)(b.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(M.jsx)(b.a.HeaderCell,{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"})]})}),u.map((function(e,t){var n=e.date,r=e.products;return Object(M.jsxs)(c.Fragment,{children:[Object(M.jsx)(b.a.Header,{children:Object(M.jsx)(b.a.Row,{children:Object(M.jsx)(b.a.HeaderCell,{colSpan:2,children:n.toString()})})}),Object(M.jsx)(b.a.Body,{children:r.map((function(e,t){var n=e.name,c=e.amount;return Object(M.jsxs)(b.a.Row,{children:[Object(M.jsx)(b.a.Cell,{children:n}),Object(M.jsx)(b.a.Cell,{children:c})]},t)}))})]},t)}))]})]})]}):Object(M.jsx)(o.a,{to:"/"})};n(181);i.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(u.a,{store:J,children:Object(M.jsxs)(s.a,{children:[Object(M.jsx)(o.b,{exact:!0,path:"/signin",component:Y}),Object(M.jsx)(o.b,{exact:!0,path:"/order",component:$}),Object(M.jsx)(o.b,{exact:!0,path:"/orders",component:te}),Object(M.jsx)(o.b,{exact:!0,path:"/",component:U})]})})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.7dae9a7e.chunk.js.map