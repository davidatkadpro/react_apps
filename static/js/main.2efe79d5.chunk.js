(this.webpackJsonpreact_lists=this.webpackJsonpreact_lists||[]).push([[0],{14:function(e,t,a){e.exports={listItems:"TreeCrawl_listItems__17l_F",card:"TreeCrawl_card__2O7LD",link:"TreeCrawl_link__37WBm",link2:"TreeCrawl_link2__JT9E3",button:"TreeCrawl_button__2BCTz"}},22:function(e,t,a){e.exports={brand:"Nav_brand__w7dL3",sidenav:"Nav_sidenav__39XFw"}},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(16),l=a.n(i),s=(a(32),a(10)),r=a(8),o=a(4),d=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){var a=function(a){null!=!a&&t.current&&t.current.contains(a.target)||e()};return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}})),t},u=a(22),j=a.n(u),m=a(0);function b(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)},l=d((function(){n(!1)}));return Object(m.jsxs)("div",{className:"navbar-fixed",children:[Object(m.jsx)("nav",{className:j.a.nav,children:Object(m.jsxs)("div",{className:"nav-wrapper container",children:[Object(m.jsxs)(s.b,{onClick:i,to:"/",className:"brand-logo ".concat(j.a.brand),children:[Object(m.jsx)("i",{className:"material-icons",children:"blur_on"}),Object(m.jsx)("span",{children:"MagicLi"})]}),Object(m.jsx)("span",{className:"sidenav-trigger",children:Object(m.jsx)("i",{onClick:function(){return n(!a)},className:"material-icons",children:"menu"})}),Object(m.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{onClick:i,to:"/",children:"Dashboard"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{onClick:i,to:"/tree",children:"List Tree"})})]})]})}),Object(m.jsxs)("ul",{ref:l,className:"sidenav ".concat(j.a.sidenav),style:{transform:a?"translateX(0%)":"translateX(-105%)"},children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{onClick:i,className:"material-icons right",children:"close"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{onClick:i,to:"/",children:"Dashboard"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{onClick:i,to:"/tree",children:"List Tree"})})]})]})}var O=a(9),h=a(3),p=function(e,t){switch(t.type){case"ADD_ITEM":return Object(h.a)(Object(h.a)({},e),{},{items:[].concat(Object(O.a)(e.items),[t.payload])});case"UPDATE_ITEM":return Object(h.a)(Object(h.a)({},e),{},{items:e.items.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"DELETE_ITEM":return Object(h.a)(Object(h.a)({},e),{},{items:Object(O.a)(e.items).filter((function(a){return a.id!==t.payload.id&&!f(t.payload,e.items).includes(a)}))});case"UPDATE_ITEMS":return Object(h.a)(Object(h.a)({},e),{},{items:e.items.map((function(e){return t.payload.forEach((function(t){if(t.id===e.id)return t})),e}))});case"ADD_TAG":return Object(h.a)(Object(h.a)({},e),{},{tags:[].concat(Object(O.a)(e.tags),[t.payload])});case"DELETE_TAG":return Object(h.a)(Object(h.a)({},e),{},{tags:Object(O.a)(e.tags).filter((function(e){return e.id!==t.payload.id})),items:[].concat(Object(O.a)(e.items),[e.items.map((function(e){return e.tags&&e.tags.includes(t.payload)&&(e.tags=e.tags.filter((function(e){return e!==t.payload.id}))),e}))])});default:return e}},x="list-app",f=function(e,t){var a=[];return function e(t,c){for(var n in c)c[n].parent!==t||a.includes(c[n])||(a.push(c[n]),e(c[n].id,c))}(e.id,t),a},_={tags:[{id:1,title:"Personal"}],items:[{id:1,title:"Title",description:"",tags:[],parent:null},{id:2,title:"Title 2",description:"",tags:[],parent:null},{id:3,title:"Title 3",description:"",tags:[],parent:2}]},v=Object(c.createContext)(),C=function(e){var t=Object(c.useReducer)(p,JSON.parse(localStorage.getItem(x))||_),a=Object(o.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){var e;e=n,localStorage.setItem(x,JSON.stringify(e))}),[n]),Object(m.jsx)(v.Provider,{value:{items:n.items,tags:n.tags,children:function(e){return f(e,n.items)},dispatch:i},children:e.children})},g=a(13),y=a(5),N=a.n(y);function I(e){var t=e.item,a=e.maxIndex,n=Object(c.useState)(!1),i=Object(o.a)(n,2),l=i[0],r=i[1],u=Object(c.useState)(null),j=Object(o.a)(u,2),b=j[0],p=j[1],x=Object(c.useState)(t),f=Object(o.a)(x,2),_=f[0],C=f[1],y=Object(c.useContext)(v),I=y.items,k=y.children,T=y.dispatch,D=function(){_.title&&!/^\s*$/.test(_.title)&&(T({type:"UPDATE_ITEM",payload:_}),r(!1))},E=function(e){var a=Number(e.target.dataset.key),c=Object(h.a)({},t);c.parent=a>0?a:null,c.index=I.filter((function(e){return c.parent===e.parent})).length,console.log("index",c.index),T({type:"UPDATE_ITEM",payload:c}),p(null),r(!1)},S=d((function(){r(!1)}));return Object(m.jsxs)(m.Fragment,{children:[l&&Object(m.jsxs)("div",{ref:S,children:[Object(m.jsx)("div",{onClick:function(){return r(!1)},className:N.a.underlay}),Object(m.jsxs)("div",{className:"".concat(N.a.editWrap),children:[Object(m.jsx)("input",{type:"text",placeholder:"Title",value:_.title,name:"title",className:"z-depth-5 ".concat(N.a.editInput),onChange:function(e){var t=[e.target.name,e.target.value],a=t[0],c=t[1];C((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(g.a)({},a,c))}))},onKeyPress:function(e){13===e.charCode&&D()}}),Object(m.jsx)("button",{onClick:D,className:"btn secondary",children:"Save"})]}),Object(m.jsx)("div",{className:"z-depth-5 ".concat(N.a.menuWrap),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{onClick:function(){return r(!1)},className:"material-icons ".concat(N.a.icon),children:"close"})}),Object(m.jsx)("li",{onClick:function(){var e=JSON.parse(JSON.stringify(t));e.id=I.reduce((function(e,t){return t.id>e?t.id:e}),0)+1,e.index=a,e.title=t.title+" - copy",T({type:"ADD_ITEM",payload:e}),r(!1)},children:"Copy"}),Object(m.jsx)("li",{onClick:function(){var e=Object(O.a)(I).filter((function(e){return t.id!==e.id&&t.parent!==e.id&&!k(t).includes(e)}));p(e)},children:"Move"}),b&&Object(m.jsx)("li",{className:N.a.scrollList,children:Object(m.jsxs)("ul",{children:[t.parent&&Object(m.jsx)("li",{onClick:E,"data-key":"0",children:"Dashboard"}),b.map((function(e){return Object(m.jsx)("li",{onClick:E,"data-key":e.id,children:e.title},e.id)}))]})}),Object(m.jsx)("li",{onClick:function(){T({type:"DELETE_ITEM",payload:t}),r(!1)},children:"Delete"})]})})]}),Object(m.jsx)("h6",{className:N.a.heading,children:Object(m.jsx)(s.b,{to:"/item/".concat(t.id),as:"/item/".concat(t.id),children:t.title})}),Object(m.jsx)("i",{onClick:function(){return r(!0)},className:"material-icons right ".concat(N.a.iconSmall),children:"edit"})]})}var k=a(15);function T(e){var t=e.item,a=e.items,n=Object(c.useState)(t),i=Object(o.a)(n,2),l=i[0],s=i[1],r=Object(c.useState)(!1),u=Object(o.a)(r,2),j=u[0],b=u[1],p=Object(c.useState)(null),x=Object(o.a)(p,2),f=x[0],_=x[1],C=Object(c.useState)(!1),y=Object(o.a)(C,2),T=y[0],D=y[1],E=Object(c.useState)(!1),S=Object(o.a)(E,2),M=S[0],A=S[1],P=Object(c.useState)({title:"",description:"",tags:[],parent:t.id}),w=Object(o.a)(P,2),W=w[0],U=w[1],L=Object(c.useContext)(v),B=L.children,F=L.dispatch,J=Object(O.a)(a).filter((function(e){return t.id===e.parent}));J.sort((function(e,t){return e.index>t.index?1:-1}));var H=function(){return a.reduce((function(e,t){return t.id>e?t.id:e}),0)+1},R=function(){if(M&&W.title.length>0){if(!W.title||/^\s*$/.test(W.title))return;var e=W;e.id=H(),e.index=J.length,F({type:"ADD_ITEM",payload:e}),U({title:"",description:"",tags:[],parent:t.id}),A(!1)}else A(!0)},K=function(e){var c=Number(e.target.dataset.key),n=Object(h.a)({},t);n.parent=c>0?c:null,n.index=a.filter((function(e){return n.parent===e.parent})).length,console.log("index",n.index),F({type:"UPDATE_ITEM",payload:n}),_(null),b(!1)},z=d((function(){D(!1)})),X=d((function(){b(!1)}));return Object(m.jsxs)("div",{className:N.a.warp,children:[j&&Object(m.jsx)("div",{ref:X,className:"z-depth-5 ".concat(N.a.menuWrap),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{onClick:function(){return b(!1)},className:"material-icons ".concat(N.a.icon),children:"close"})}),Object(m.jsx)("li",{onClick:function(){R(),b(!1)},children:"Add"}),Object(m.jsx)("li",{onClick:function(){var e=JSON.parse(JSON.stringify(t));e.id=H(),e.index=J.length,e.title=t.title+" - copy",F({type:"ADD_ITEM",payload:e}),b(!1)},children:"Copy"}),Object(m.jsx)("li",{onClick:function(){var e=Object(O.a)(a).filter((function(e){return t.id!==e.id&&t.parent!==e.id&&!B(t).includes(e)}));_(e)},children:"Move"}),f&&Object(m.jsx)("li",{className:N.a.scrollList,children:Object(m.jsxs)("ul",{children:[t.parent&&Object(m.jsx)("li",{onClick:K,"data-key":"0",children:"Dashboard"}),f.map((function(e){return Object(m.jsx)("li",{onClick:K,"data-key":e.id,children:e.title},e.id)}))]})}),Object(m.jsx)("li",{onClick:function(){F({type:"DELETE_ITEM",payload:t}),b(!1)},children:"Delete"})]})}),Object(m.jsxs)("div",{className:"card-panel ".concat(N.a.cardPanel),children:[Object(m.jsxs)("ul",{children:[T?Object(m.jsx)("input",{ref:z,type:"text",value:l.title,name:"title",className:N.a.inputSmall,onChange:function(e){var t=[e.target.name,e.target.value],a=t[0],c=t[1];s((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(g.a)({},a,c))}))},onKeyPress:function(e){if(13===e.charCode){if(!l.title||/^\s*$/.test(l.title))return;F({type:"UPDATE_ITEM",payload:l}),D(!1)}}}):Object(m.jsx)("h5",{onClick:function(){return D(!0)},className:N.a.heading,children:t.title}),Object(m.jsx)("i",{onClick:function(){return b(!j)},className:"material-icons right ".concat(N.a.icon),children:"more_horiz"}),Object(m.jsx)(k.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(J),a=t.splice(e.source.index,1),c=Object(o.a)(a,1)[0];t.splice(e.destination.index,0,c),t.forEach((function(e,t){return e.index=t})),F({type:"UPDATE_ITEMS",payload:t})}},children:Object(m.jsx)(k.c,{droppableId:"items",children:function(e){return Object(m.jsxs)("div",Object(h.a)(Object(h.a)({className:"items"},e.droppableProps),{},{ref:e.innerRef,children:[J.map((function(e,t){return Object(m.jsx)(k.b,{draggableId:"item_"+e.id,index:t,children:function(t){return Object(m.jsx)("div",Object(h.a)(Object(h.a)(Object(h.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{className:"card-panel ".concat(N.a.childItem," ").concat(N.a.warp),children:Object(m.jsx)(I,{item:e,maxIndex:J.length})}))}},e.id)})),e.placeholder]}))}})})]}),Object(m.jsxs)("div",{className:M?"active":"",children:[Object(m.jsx)("div",{className:"collapsible-body card-panel ".concat(N.a.collapsibleBody),style:M?{display:"block"}:{},children:Object(m.jsx)("input",{type:"text",placeholder:"Title",value:W.title,name:"title",className:N.a.inputSmall,onChange:function(e){var t=[e.target.name,e.target.value],a=t[0],c=t[1];U((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(g.a)({},a,c))}))},onKeyPress:function(e){13===e.charCode&&R()}})}),Object(m.jsx)("button",{onClick:R,className:"btn secondary",children:M?"Save item":"Add item"}),M&&Object(m.jsx)("i",{onClick:function(){return A(!1)},className:"material-icons right ".concat(N.a.iconClose),children:"close"})]})]})]})}function D(){var e=Object(c.useState)({title:"",description:"",tags:[],parent:null}),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),s=l[0],r=l[1],d=Object(c.useContext)(v),u=d.items,j=d.dispatch,b=Object(O.a)(u).filter((function(e){return!e.parent})),p=function(e){if(e.preventDefault(),a.title&&!/^\s*$/.test(a.title)){var t=a;t.id=u.reduce((function(e,t){return t.id>e?t.id:e}),0)+1,t.index=b.length,j({type:"ADD_ITEM",payload:t}),n({title:"",description:"",tags:[],parent:null}),r(!1)}};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row ".concat(N.a.rows),children:[b.map((function(e){return Object(m.jsx)("div",{className:"col s12 m6 l4 ".concat(N.a.cols),children:Object(m.jsx)(T,{item:e,items:u})},e.id)})),Object(m.jsx)("div",{className:"col s12 m6 l4 ".concat(N.a.cols),children:Object(m.jsxs)("div",{className:"card-panel ".concat(N.a.cardPanel),children:[s&&Object(m.jsx)("div",{className:"collapsible-body card-panel ".concat(N.a.collapsibleBody),style:{display:"block"},children:Object(m.jsx)("input",{type:"text",placeholder:"Title",className:N.a.inputSmall,value:a.title,name:"title",onChange:function(e){n((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))},onKeyPress:function(e){13===e.charCode&&p(e)}})}),s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:p,className:"btn",children:"Add"}),Object(m.jsx)("i",{onClick:function(){return r(!1)},className:"material-icons right ".concat(N.a.iconClose),children:"close"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h6",{onClick:function(){return r(!0)},className:"title",style:{display:"inline-block",cursor:"pointer"},children:"Add new card"}),Object(m.jsx)("i",{onClick:function(){return r(!0)},className:"material-icons right",style:{cursor:"pointer"},children:"add"})]})]})})]})})})}var E=a(6),S=a.n(E),M=a(7),A=a.n(M),P=function(e){var t=e.item,a=e.listItems,n=e.title,i=e.remove,l=e.editable,s=e.showTotal,r=!(!t.modules||!t.modules.total),o=Object(c.useContext)(v).dispatch,d=function(){o({type:"UPDATE_ITEM",payload:t})};return Object(m.jsx)(m.Fragment,{children:r&&Object(m.jsxs)("div",{className:"".concat(l?A.a.modeMain:""," ").concat(A.a.modeContainer),children:[l&&Object(m.jsxs)("span",{className:A.a.totalWrap,children:[n&&Object(m.jsx)("h5",{children:"Total"}),Object(m.jsx)("input",{className:A.a.modeInput,type:"text",name:"total",value:t.modules.total.value,onChange:function(e){t.modules.total.value=Number(e.target.value),d()}})]}),Object(m.jsxs)("span",{className:A.a.totalWrap,children:[n&&Object(m.jsx)("h6",{className:A.a.headingChecklist,children:"Checklist"}),a?Object(m.jsx)("span",{className:A.a.listTotals,children:a.reduce((function(e,t){return t.modules&&t.modules.total&&t.modules.total.value>0?e+t.modules.total.value:e}),0).toFixed(2)}):Object(m.jsx)("span",{className:A.a.listTotals,children:t.modules.total.value.toFixed(2)})]}),i&&Object(m.jsx)("i",{onClick:function(){delete t.modules.total,o({type:"UPDATE_ITEM",payload:t}),s(!1)},className:"material-icons ".concat(A.a.iconClose),children:"close"})]})})},w=function(e){var t=e.item,a=e.title,n=e.remove,i=e.editable,l=void 0!==i&&i,s=e.showCount,r=!(!t.modules||!t.modules.count),o=Object(c.useContext)(v).dispatch,d=function(){o({type:"UPDATE_ITEM",payload:t})};return Object(m.jsx)(m.Fragment,{children:r&&Object(m.jsxs)("div",{className:"".concat(l?A.a.modeMain:""," ").concat(A.a.modeContainer),children:[a&&Object(m.jsx)("h5",{children:"Count"}),Object(m.jsxs)("span",{className:A.a.modeWrap,children:[Object(m.jsx)("i",{onClick:function(){t.modules.count.value=t.modules.count.value>0?t.modules.count.value-1:0,d()},className:"material-icons ".concat(A.a.iconCount),children:"remove"}),Object(m.jsx)("span",{className:A.a.countValue,children:t.modules.count.value}),Object(m.jsx)("i",{onClick:function(){t.modules.count.value=t.modules.count.value+1,d()},className:"material-icons ".concat(A.a.iconCount),children:"add"})]}),n&&Object(m.jsx)("i",{onClick:function(){delete t.modules.count,o({type:"UPDATE_ITEM",payload:t}),s(!1)},className:"material-icons ".concat(A.a.iconClose),children:"close"})]})})},W=function(e){var t=e.item,a=e.title,n=e.remove,i=e.editable,l=e.showDate,s=!(!t.modules||!t.modules.date),r=Object(c.useContext)(v).dispatch,o=function(){r({type:"UPDATE_ITEM",payload:t})};return Object(m.jsx)(m.Fragment,{children:s&&Object(m.jsxs)("div",{className:"".concat(i?A.a.modeMain:""," ").concat(A.a.modeContainer),children:[a&&Object(m.jsx)("h5",{children:"Dates"}),Object(m.jsx)("span",{className:A.a.dateWrap,children:i?Object(m.jsx)("input",{className:A.a.modeInput,type:"datetime-local",name:"date",value:t.modules.date.value,onChange:function(e){t.modules.date.value=e.target.value,o()}}):Object(m.jsx)("span",{children:t.modules.date.value?t.modules.date.value.replace("T"," "):""})}),n&&Object(m.jsx)("i",{onClick:function(){delete t.modules.date,r({type:"UPDATE_ITEM",payload:t}),l(!1)},className:"material-icons ".concat(A.a.iconClose),children:"close"})]})})},U=function(e){var t=e.item,a=Object(c.useState)(t.status||!1),n=Object(o.a)(a,2),i=n[0],l=n[1],r=Object(c.useState)(!1),u=Object(o.a)(r,2),j=u[0],b=u[1],p=Object(c.useState)(null),x=Object(o.a)(p,2),f=x[0],_=x[1],C=Object(c.useContext)(v),g=C.items,y=C.children,N=C.dispatch,I=Object(O.a)(g).filter((function(e){return e.parent===t.id})),k=function(e){var a=Number(e.target.dataset.key),c=Object(h.a)({},t);c.parent=a>0?a:null,c.index=g.filter((function(e){return c.parent===e.parent})).length,N({type:"UPDATE_ITEM",payload:c}),_(null),b(!1)},T=d((function(){b(!1)}));return Object(m.jsxs)("div",{className:S.a.warp,children:[j&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{onClick:function(){return b(!1)},className:S.a.underlay}),Object(m.jsx)("div",{ref:T,className:"z-depth-5 ".concat(S.a.menuWrap),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{onClick:function(){return b(!1)},className:"material-icons ".concat(S.a.icon),children:"close"})}),Object(m.jsx)("li",{onClick:function(){var e=JSON.parse(JSON.stringify(t));e.id=g.reduce((function(e,t){return t.id>e?t.id:e}),0)+1,e.index=I.length,e.title=t.title+" - copy",N({type:"ADD_ITEM",payload:e}),b(!1)},children:"Copy"}),Object(m.jsx)("li",{onClick:function(){var e=Object(O.a)(g).filter((function(e){return t.id!==e.id&&t.parent!==e.id&&!y(t).includes(e)}));_(e)},children:"Move"}),f&&Object(m.jsx)("li",{className:S.a.scrollList,children:Object(m.jsxs)("ul",{children:[t.parent&&Object(m.jsx)("li",{onClick:k,"data-key":"0",children:"Dashboard"}),f.map((function(e){return Object(m.jsx)("li",{onClick:k,"data-key":e.id,children:e.title},e.id)}))]})}),Object(m.jsx)("li",{onClick:function(){N({type:"DELETE_ITEM",payload:t}),b(!1)},children:"Delete"})]})})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{className:S.a.checkBox,children:[Object(m.jsx)("input",{type:"checkbox",className:"filled-in",checked:i,onChange:function(e){var a=e.target.checked,c=t;c.status=a,N({type:"UPDATE_ITEM",payload:c}),l(!i)}}),Object(m.jsx)("span",{})]}),Object(m.jsx)("h6",{className:S.a.listItemHeading,style:i?{textDecoration:"line-through"}:{textDecoration:"none"},children:Object(m.jsx)(s.b,{to:"/item/".concat(t.id),as:"/item/".concat(t.id),children:t.title})}),Object(m.jsx)("i",{onClick:function(){return b(!0)},className:"material-icons right ".concat(S.a.iconHidden),children:"edit"}),Object(m.jsx)(P,{item:t}),Object(m.jsx)(w,{item:t}),Object(m.jsx)(W,{item:t})]})]})};function L(e){var t=e.itemId,a=Object(c.useContext)(v),n=a.items,i=a.dispatch,l=Object(O.a)(n).find((function(e){return e.id===t})),s=Object(c.useState)("14rem"),u=Object(o.a)(s,2),j=u[0],b=u[1],p=Object(c.useState)(l.status||!1),x=Object(o.a)(p,2),f=x[0],_=x[1],C=Object(c.useState)(l),y=Object(o.a)(C,2),N=y[0],I=y[1],T=Object(c.useState)(!1),D=Object(o.a)(T,2),E=D[0],M=D[1],A=Object(c.useState)(!1),L=Object(o.a)(A,2),B=L[0],F=L[1],J=Object(O.a)(n).filter((function(e){return e.parent===l.id}));J.sort((function(e,t){return e.index>t.index?1:-1}));var H=Object(c.useState)({title:"",description:"",tags:[],parent:t}),R=Object(o.a)(H,2),K=R[0],z=R[1],X=Object(c.useState)(!1),q=Object(o.a)(X,2),G=q[0],$=q[1],V=Object(c.useState)(!(!l.modules||!l.modules.date)),Z=Object(o.a)(V,2),Y=Z[0],Q=Z[1],ee=Object(c.useState)(!(!l.modules||!l.modules.count)),te=Object(o.a)(ee,2),ae=te[0],ce=te[1],ne=Object(c.useState)(!(!l.modules||!l.modules.total)),ie=Object(o.a)(ne,2),le=ie[0],se=ie[1],re=Object(r.f)(),oe=function(e){var t=[e.target.name,e.target.value],a=t[0],c=t[1];I((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(g.a)({},a,c))})),"description"===a&&b(e.target.scrollHeight>168?e.target.scrollHeight+"px":"14rem")},de=function(){N.title&&!/^\s*$/.test(N.title)&&(i({type:"UPDATE_ITEM",payload:N}),M(!1))},ue=function(){if(K.title&&!/^\s*$/.test(K.title)){var e=K;e.id=n.reduce((function(e,t){return t.id>e?t.id:e}),0)+1,e.index=J.length,i({type:"ADD_ITEM",payload:e}),z({title:"",description:"",tags:[],parent:l.id}),$(!1)}},je=function(){var e=J.length,t=J.reduce((function(e,t){return!0===t.status?e+1:e}),0)/e*100;return isNaN(t)?"0%":t.toFixed(0)+"%"},me=d((function(){M(!1)})),be=d((function(){F(!1)}));return Object(m.jsx)("div",{className:"card-panel ".concat(S.a.detailCard),children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col s12 m8",children:[E?Object(m.jsxs)("div",{ref:me,children:[Object(m.jsx)("input",{type:"text",placeholder:"Title",value:N.title,name:"title",className:S.a.inputSmall,onChange:oe,onKeyPress:function(e){13===e.charCode&&de()}}),Object(m.jsx)("button",{onClick:de,className:"btn secondary",children:"Save"}),Object(m.jsx)("i",{onClick:function(){return M(!1)},className:"material-icons right ".concat(S.a.iconClose),children:"close"})]}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{className:S.a.checkBox,children:[Object(m.jsx)("input",{type:"checkbox",className:"filled-in",checked:f,onChange:function(e){var t=e.target.checked,a=l;a.status=t,i({type:"UPDATE_ITEM",payload:a}),_(!f)}}),Object(m.jsx)("span",{})]}),Object(m.jsx)("h5",{onClick:function(){return M(!0)},className:S.a.heading,children:l.title}),Object(m.jsx)("button",{className:"btn secondary right",onClick:function(){return re.goBack()},children:"back"})]}),B?Object(m.jsxs)("div",{ref:be,children:[Object(m.jsx)("textarea",{type:"text",style:{height:j},className:"materialize-textarea card-panel ".concat(S.a.textArea),placeholder:"Description",value:N.description,name:"description",onChange:oe}),Object(m.jsx)("button",{onClick:function(){i({type:"UPDATE_ITEM",payload:N}),F(!1)},className:"btn secondary",children:"Save"}),Object(m.jsx)("i",{onClick:function(){return F(!1)},className:"material-icons right ".concat(S.a.iconClose),children:"close"})]}):Object(m.jsx)("span",{onClick:function(){return F(!0)},className:"card-panel ".concat(S.a.description),children:l.description||"..."}),Object(m.jsx)(W,{item:l,title:!0,remove:!0,editable:!0,showDate:Q}),Object(m.jsx)(w,{item:l,title:!0,remove:!0,editable:!0,showCount:ce}),Object(m.jsx)(P,{item:l,listItems:J,title:!0,remove:!0,editable:!0,showTotal:se}),Object(m.jsxs)("div",{className:S.a.listWrap,children:[Object(m.jsx)("h5",{className:S.a.heading,children:"Checklist"}),Object(m.jsx)("span",{className:"right ".concat(S.a.progressPerc),children:je()}),Object(m.jsx)("div",{className:S.a.progressBar,children:Object(m.jsx)("div",{style:{width:je()}})}),Object(m.jsx)(k.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(J),a=t.splice(e.source.index,1),c=Object(o.a)(a,1)[0];t.splice(e.destination.index,0,c),t.forEach((function(e,t){return e.index=t})),i({type:"UPDATE_ITEMS",payload:t})}},children:Object(m.jsx)(k.c,{droppableId:"items",children:function(e){return Object(m.jsxs)("ul",Object(h.a)(Object(h.a)({className:"items"},e.droppableProps),{},{ref:e.innerRef,children:[J.map((function(e,t){return Object(m.jsx)(k.b,{draggableId:"item_"+e.id,index:t,children:function(t){return Object(m.jsx)("li",Object(h.a)(Object(h.a)(Object(h.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{className:"card-panel ".concat(S.a.childItem," ").concat(S.a.warp),children:Object(m.jsx)(U,{item:e})}))}},e.id)})),e.placeholder]}))}})})]}),G?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"text",placeholder:"Title",value:K.title,name:"title",className:S.a.inputSmall,onChange:function(e){var t=[e.target.name,e.target.value],a=t[0],c=t[1];z((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(g.a)({},a,c))}))},onKeyPress:function(e){13===e.charCode&&ue()}}),Object(m.jsx)("button",{onClick:ue,className:"btn secondary",children:"Save"}),Object(m.jsx)("i",{onClick:function(){return $(!1)},className:"material-icons right ".concat(S.a.iconClose),children:"close"})]}):Object(m.jsx)("button",{onClick:function(){return $(!0)},className:"btn secondary",children:"Add item"})]}),Object(m.jsx)("div",{className:"col s12 m4",children:Object(m.jsxs)("ul",{className:S.a.itemNav,children:[Object(m.jsx)("li",{children:Object(m.jsx)("h5",{className:S.a.heading,children:"Modes"})}),!ae&&Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){var e=N;e.modules?e.modules.count={value:0}:e.modules={count:{value:0}},i({type:"UPDATE_ITEM",payload:e}),ce(!0)},className:"btn minor",children:"Add Card Count"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){var e=J.map((function(e){return e.modules?e.modules.count={value:0}:e.modules={count:{value:0}},e}));i({type:"UPDATE_ITEMS",payload:e}),ce(!0)},className:"btn minor",children:"Add Checklist Counts"})}),!Y&&Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){var e=N;e.modules?e.modules.date={value:null}:e.modules={date:{value:null}},i({type:"UPDATE_ITEM",payload:e}),Q(!0)},className:"btn minor",children:"Add Card Date"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){var e=J.map((function(e){return e.modules?e.modules.count={date:null}:e.modules={count:{value:null}},e}));i({type:"UPDATE_ITEMS",payload:e})},className:"btn minor",children:"Add Checklist Dates"})}),!le&&Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){var e=N;e.modules?e.modules.total={value:0}:e.modules={total:{value:0}},i({type:"UPDATE_ITEM",payload:e}),se(!0)},className:"btn minor",children:"Add Card Total"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){var e=J.map((function(e){return e.modules?e.modules.total={value:0}:e.modules={total:{value:0}},e}));i({type:"UPDATE_ITEMS",payload:e}),se(!0)},className:"btn minor",children:"Add Checklist Totals"})})]})})]})})}function B(e){e.match;var t=Object(r.g)().itemId,a=Number(t)||null;return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(L,{itemId:a},a)})}var F=a(14),J=a.n(F),H=function e(t){var a=t.items;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{style:{marginLeft:"1rem"},children:Object.keys(a).map((function(t,c){var n=a[t];return Object(m.jsxs)("li",{className:J.a.listli,children:[Object(m.jsx)(s.b,{className:J.a.listItems,to:"/item/".concat(t),children:n.title}),Object(m.jsx)("div",{className:J.a.link2}),Object(m.jsx)("div",{className:J.a.link}),n.children&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(e,{items:n.children})})]},t)}))})})};function R(){var e=Object(c.useContext)(v).items,t=Object(r.f)(),a=function(){var t=[];return function a(c){var n={};for(var i in e){var l=e[i];if(c===l.parent&&!t.includes(l.id)){t.push(l.id),n[l.id]={title:l.title};var s=a(l.id);Object.keys(s).length>0&&(n[l.id].children=s)}}return n}(null)}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("ul",{className:"card-panel ".concat(J.a.card),children:[Object(m.jsx)("button",{className:"btn secondary right  ".concat(J.a.button),onClick:function(){return t.goBack()},children:"back"}),Object.keys(a).map((function(e){var t=a[e];return Object(m.jsxs)("li",{className:J.a.listli,children:[Object(m.jsx)(s.b,{className:J.a.listItems,to:"/",children:t.title}),t.children&&Object(m.jsx)(H,{items:t.children})]},e)}))]})})})}function K(){return Object(m.jsx)(C,{children:Object(m.jsxs)(s.a,{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/",exact:!0,children:Object(m.jsx)(D,{})}),Object(m.jsx)(r.a,{path:"/item/:itemId",component:B}),Object(m.jsx)(r.a,{path:"/tree",component:R})]})]})})}a(43);var z=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(K,{})})};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={item:"ItemCard_item__198GU",heading:"ItemCard_heading__qjR-J",icon:"ItemCard_icon__5_hr9",iconSmall:"ItemCard_iconSmall__TaIs5",warp:"ItemCard_warp__tB0Hp",modal:"ItemCard_modal__1Xd2j",underlay:"ItemCard_underlay__1Sez8",editOptions:"ItemCard_editOptions__6q6Kr",childItem:"ItemCard_childItem__2LI-J",collapsibleBody:"ItemCard_collapsibleBody__S5lN5",inputSmall:"ItemCard_inputSmall__2DJq2",iconClose:"ItemCard_iconClose__2dbsS",menuWrap:"ItemCard_menuWrap__2K5yD",scrollList:"ItemCard_scrollList__2mstl",editWrap:"ItemCard_editWrap__3xAgA",editInput:"ItemCard_editInput__VW_68",inputLarge:"ItemCard_inputLarge__1ZW5A",rows:"ItemCard_rows__2WUhL",cols:"ItemCard_cols__17H7X",cardPanel:"ItemCard_cardPanel__1xaZA"}},6:function(e,t,a){e.exports={detailCard:"ItemDetail_detailCard__3sKGA",textArea:"ItemDetail_textArea__192H8",inputSmall:"ItemDetail_inputSmall__13BzE",heading:"ItemDetail_heading__3Sbj6",listItemHeading:"ItemDetail_listItemHeading__hYvJ2",iconClose:"ItemDetail_iconClose__2lmeL",iconHidden:"ItemDetail_iconHidden__2VGrX",childItem:"ItemDetail_childItem__nBN0E",description:"ItemDetail_description__1Obi4",listWrap:"ItemDetail_listWrap__-_SEZ",iconSmall:"ItemDetail_iconSmall__1x-Y7",checkBox:"ItemDetail_checkBox___rRwR",progressPerc:"ItemDetail_progressPerc__1GAu7",progressBar:"ItemDetail_progressBar__33rDg",itemNav:"ItemDetail_itemNav__3qxxo",dateTime:"ItemDetail_dateTime__3tMFi",iconDateTimeClose:"ItemDetail_iconDateTimeClose__3367I",warp:"ItemDetail_warp__1am_X",menuWrap:"ItemDetail_menuWrap__36-cq",scrollList:"ItemDetail_scrollList__2QhK9",editInput:"ItemDetail_editInput__2NRBt"}},7:function(e,t,a){e.exports={modeWrap:"ItemMode_modeWrap__26amW",modeMain:"ItemMode_modeMain__1EuR1",iconClose:"ItemMode_iconClose__35AH9",heading:"ItemMode_heading__1akxZ",countValue:"ItemMode_countValue__2RRAW",iconCount:"ItemMode_iconCount__1uW9L",dateWrap:"ItemMode_dateWrap__1syMq",totalWrap:"ItemMode_totalWrap__u7yZW",modeInput:"ItemMode_modeInput__1xsR8",modeContainer:"ItemMode_modeContainer__1os6b",headingChecklist:"ItemMode_headingChecklist__1QYnh",listTotals:"ItemMode_listTotals__W-naa"}}},[[44,1,2]]]);
//# sourceMappingURL=main.2efe79d5.chunk.js.map