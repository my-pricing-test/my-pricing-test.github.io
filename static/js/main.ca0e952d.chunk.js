(this.webpackJsonppricing=this.webpackJsonppricing||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r=n(12),c=n(0),a=n.n(c),s=n(28),i=n.n(s),u=(n(97),n(68)),l=n.n(u),o=n(71),j=n(79),b=n(122),d=n(120),p=n(121),f=n(82);function h(e,t){var n=e.getElementsByTagName(t);return n.length>=1?n[0].textContent:void 0}function x(){return(x=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("products.xml");case 2:return t=e.sent,e.t0=new DOMParser,e.next=6,t.text();case 6:return e.t1=e.sent,n=e.t0.parseFromString.call(e.t0,e.t1,"text/xml"),e.abrupt("return",Array.from(n.getElementsByTagName("product")).map((function(e){return{name:h(e,"name"),price:h(e,"price")}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(){var e=Object(c.useState)({collection:[],fuse:null}),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(o.a)(s,2),u=i[0],l=i[1];Object(c.useEffect)((function(){return function(){return x.apply(this,arguments)}().then((function(e){return a({collection:e,fuse:new f.a(e,{keys:["name"]})})}))}),[]);var j=n.fuse&&u?n.fuse.search(u).map((function(e){return e.item})):n.collection;return Object(r.jsxs)(b.a,{basic:!0,children:[Object(r.jsx)(d.a,{fluid:!0,icon:"search",onChange:function(e){return l(e.target.value)}}),Object(r.jsxs)(p.a,{unstackable:!0,children:[Object(r.jsx)(p.a.Header,{children:Object(r.jsxs)(p.a.Row,{children:[Object(r.jsx)(p.a.HeaderCell,{children:"\u041d\u0430\u0437\u0432\u0430"}),Object(r.jsx)(p.a.HeaderCell,{children:"\u0426\u0456\u043d\u0430"})]})}),Object(r.jsx)(p.a.Body,{children:j&&j.map((function(e,t){var n=e.name,c=e.price;return Object(r.jsxs)(p.a.Row,{children:[Object(r.jsx)(p.a.Cell,{children:n}),Object(r.jsxs)(p.a.Cell,{children:[c," \u0433\u0440\u043d"]})]},t)}))})]})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.ca0e952d.chunk.js.map