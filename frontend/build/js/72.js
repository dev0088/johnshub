(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1288:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return F}));var i=t(0),n=t.n(i),a=t(1),o=t.n(a),d=t(7),c=t(1276),g=t(910),v=t(1335),s=t(1336),l="card",u=o.a.forwardRef((e,r)=>{var{text:t,isDragging:i,connectDragSource:n,connectDropTarget:d}=e,c=Object(a.useRef)(null);n(c),d(c);var g=i?0:1;return Object(a.useImperativeHandle)(r,()=>({getNode:()=>c.current})),o.a.createElement("div",{className:"card card-box px-4 py-2 m-2 font-weight-bold",ref:c,style:{opacity:g}},t)}),m=Object(v.a)(l,{hover(e,r,t){if(!t)return null;var i=t.getNode();if(!i)return null;var n=r.getItem().index,a=e.index;if(n!==a){var o=i.getBoundingClientRect(),d=(o.bottom-o.top)/2,c=r.getClientOffset().y-o.top;n<a&&c<d||n>a&&c>d||(e.moveCard(n,a),r.getItem().index=a)}}},e=>({connectDropTarget:e.dropTarget()}))(Object(s.a)(l,{beginDrag:e=>({id:e.id,index:e.index})},(e,r)=>({connectDragSource:e.dragSource(),isDragging:r.isDragging()}))(u)),b=t(1018),p=t.n(b),f=()=>{var[e,r]=Object(a.useState)([{id:1,text:"Banana Boat"},{id:2,text:"Orange Juice"},{id:3,text:"Cuban Cigar"},{id:4,text:"Terrible Comedian"},{id:5,text:"Anxious Cab Driver"},{id:6,text:"Green Orange Potatoes"},{id:7,text:"Castles in the sky"}]),t=(t,i)=>{var n=e[t];r(p()(e,{$splice:[[t,1],[i,0,n]]}))};return n()("div",{className:"col-md-6 my-4 p-0 mx-auto"},void 0,e.map((e,r)=>n()(m,{index:r,id:e.id,text:e.text,moveCard:t},e.id)))},x=n()(a.Fragment,{},void 0,n()(c.a,{backend:g.a},void 0,n()(f,{})));function y(){return x}var D="box";function O(e){return{border:"1px solid rgba(0,0,0,0.2)",minHeight:"8rem",minWidth:"8rem",color:"white",backgroundColor:e,padding:"2rem",borderRadius:"0.5rem",paddingTop:"1rem",margin:"1rem",textAlign:"center",float:"left",fontSize:"1rem"}}var h=n()("br",{}),w=o.a.forwardRef((e,r)=>{var{greedy:t,isOver:i,isOverCurrent:o,connectDropTarget:d,children:c}=e,[g,v]=Object(a.useState)(!1),[s,l]=Object(a.useState)(!1);Object(a.useImperativeHandle)(r,()=>({onDrop:e=>{l(e),v(!0)}}),[]);var u=t?"greedy":"not greedy",m="rgba(60, 68, 177, 0.35)";return(o||i&&t)&&(m="#1bc943"),d(n()("div",{style:O(m)},void 0,u,h,g&&n()("span",{},void 0,"dropped ",s&&" on child"),n()("div",{},void 0,c)))}),j=Object(v.a)(D,{drop(e,r,t){if(t){var i=r.didDrop();i&&!e.greedy||t.onDrop(i)}}},(e,r)=>({connectDropTarget:e.dropTarget(),isOver:r.isOver(),isOverCurrent:r.isOver({shallow:!0})}))(w),C=t(416),S=n()("div",{},void 0,n()(C.a,{size:"large",variant:"contained",color:"secondary"},void 0,"Drag me")),N=Object(s.a)(D,{beginDrag:()=>({})},e=>({connectDragSource:e.dragSource()}))(e=>{var{connectDragSource:r}=e;return r(S)}),T=t(478),k=n()("div",{},void 0,n()("div",{className:"text-center"},void 0,n()(N,{})),n()("div",{className:"divider my-4"}),n()(T.a,{container:!0,spacing:4},void 0,n()(T.a,{item:!0,lg:6,className:"d-flex justify-content-center"},void 0,n()(j,{greedy:!0},void 0,n()(j,{greedy:!0},void 0,n()(j,{greedy:!0})))),n()(T.a,{item:!0,lg:6,className:"d-flex justify-content-center"},void 0,n()(j,{},void 0,n()(j,{},void 0,n()(j,{})))))),H=()=>k,R=n()(a.Fragment,{},void 0,n()(c.a,{backend:g.a},void 0,n()(H,{})));function B(){return R}var I=n()(a.Fragment,{},void 0,n()(d.e,{titleHeading:"Drag & Drop",titleDescription:"Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport."}),n()(d.b,{sectionHeading:"Basic"},void 0,n()(y,{})),n()(d.b,{sectionHeading:"Lists"},void 0,n()(B,{})));function F(){return I}}}]);
//# sourceMappingURL=72.js.map