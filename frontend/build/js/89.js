(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1375:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return R}));var n=t(0),i=t.n(n),o=t(1),r=t.n(o),s=t(7),c=t(394),d=t(46),l=t.n(d),p=(t(76),t(71)),u=t(454),v=t(187),m=t(256),g=t(1398),h=t(1310),w=t(1311),y=Object(m.a)(a=>({root:{width:"100%"},button:{marginRight:a.spacing(1)},backButton:{marginRight:a.spacing(1)},completed:{display:"inline-block"},instructions:{marginTop:a.spacing(1),marginBottom:a.spacing(4)}}));var b=i()(p.a,{variant:"caption"},void 0,"Optional"),k=i()(u.a,{}),S=()=>{var a=y(),[e,t]=r.a.useState(0),[n,s]=r.a.useState(new Set),[c,d]=r.a.useState(new Set),u=["Select campaign settings","Create an ad group","Create an ad"],m=()=>["Select campaign settings","Create an ad group","Create an ad"].length,S=a=>1===a,f=()=>c.size,C=()=>n.size,N=()=>C()===m()-f(),x=()=>{var a=e!==m()-1||N()?e+1:u.findIndex((a,e)=>!n.has(e));t(a)},z=a=>()=>{t(a)};function F(a){return n.has(a)}return i()(o.Fragment,{},void 0,i()("div",{className:a.root},void 0,i()(g.a,{alternativeLabel:!0,nonLinear:!0,activeStep:e},void 0,u.map((a,e)=>{var t,n={},i={};return S(e)&&(i.optional=b),t=e,c.has(t)&&(n.completed=!1),r.a.createElement(h.a,l()({key:a},n),r.a.createElement(w.a,l()({onClick:z(e),completed:F(e)},i),a))})),i()("div",{},void 0,N()?i()("div",{},void 0,i()(p.a,{className:a.instructions},void 0,"All steps completed - you're finished"),i()(v.a,{onClick:()=>{t(0),s(new Set),d(new Set)}},void 0,"Reset")):i()("div",{},void 0,k,i()("div",{className:"py-4"},void 0,i()(p.a,{className:a.instructions},void 0,function(a){switch(a){case 0:return"Step 1: Select campaign settings...";case 1:return"Step 2: What is an ad group anyways?";case 2:return"Step 3: This is the bit I really care about!";default:return"Unknown step"}}(e)),i()("div",{},void 0,i()(v.a,{disabled:0===e,onClick:()=>{t(a=>a-1)},className:a.button},void 0,"Back"),i()(v.a,{variant:"contained",color:"primary",onClick:x,className:a.button},void 0,"Next"),S(e)&&!n.has(e)&&i()(v.a,{variant:"contained",color:"primary",onClick:()=>{if(!S(e))throw new Error("You can't skip a step that isn't optional.");t(a=>a+1),d(a=>{var t=new Set(a.values());return t.add(e),t})},className:a.button},void 0,"Skip"),e!==u.length&&(n.has(e)?i()(p.a,{variant:"caption",className:a.completed},void 0,"Step ",e+1," already completed"):i()(v.a,{variant:"contained",color:"primary",onClick:()=>{var a=new Set(n);a.add(e),s(a),n.size!==m()-f()&&x()}},void 0,C()===m()-1?"Finish":"Complete Step"))))))))},f=t(162),C=t(1369),N=t(1312),x=Object(m.a)(a=>({root:{width:"100%"},button:{marginTop:a.spacing(1),marginRight:a.spacing(1)},actionsContainer:{marginBottom:a.spacing(2)},resetContainer:{padding:a.spacing(3)}}));var z=i()(p.a,{},void 0,"All steps completed - you're finished"),F=()=>{var a=x(),[e,t]=r.a.useState(0),n=["Select campaign settings","Create an ad group","Create an ad"],s=()=>{t(a=>a+1)},c=()=>{t(a=>a-1)};return i()(o.Fragment,{},void 0,i()("div",{className:a.root},void 0,i()(g.a,{activeStep:e,orientation:"vertical"},void 0,n.map((t,o)=>i()(h.a,{},t,i()(C.a,{},void 0,t),i()(N.a,{},void 0,i()(p.a,{},void 0,function(a){switch(a){case 0:return"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.";case 1:return"An ad group contains one or more ads which target a shared set of keywords.";case 2:return"Try out different ad text to see what brings in the most customers\nand learn how to enhance your ads using features like ad extensions.\nIf you run into any problems with your ads, find out how to tell ifthey're running and how to resolve approval issues.";default:return"Unknown step"}}(o)),i()("div",{className:a.actionsContainer},void 0,i()("div",{},void 0,i()(v.a,{disabled:0===e,onClick:c,className:a.button},void 0,"Back"),i()(v.a,{variant:"contained",color:"primary",onClick:s,className:a.button},void 0,e===n.length-1?"Finish":"Next"))))))),e===n.length&&i()(f.a,{square:!0,elevation:0,className:a.resetContainer},void 0,z,i()(v.a,{onClick:()=>{t(0)},className:a.button},void 0,"Reset"))))},B=i()(o.Fragment,{},void 0,i()(s.e,{titleHeading:"Wizard",titleDescription:"Easily create beautiful form multi step wizards or presentation steps."}),i()(c.a,{container:!0,spacing:4},void 0,i()(c.a,{item:!0,xs:12,lg:6},void 0,i()(s.b,{sectionHeading:"Horizontal Stepper"},void 0,i()(S,{}))),i()(c.a,{item:!0,xs:12,lg:6},void 0,i()(s.b,{sectionHeading:"Vertical Stepper"},void 0,i()(F,{})))));function R(){return B}}}]);
//# sourceMappingURL=89.js.map