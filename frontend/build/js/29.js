(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1016:function(e,t,n){"use strict";var a=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1)),o=(0,a(n(14)).default)(i.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},1314:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var a=n(0),i=n.n(a),o=n(1),r=n.n(o),c=n(7),s=n(416),l=n(415),d=n(5),u=n(18),m=n(3),v=(n(4),n(6)),f=n(8),b=n(42),g=n(27),p=n.n(g),O=n(53),h=n(23),k=n(59),E=n(54);function j(e){return e.substring(2).toLowerCase()}var x=r.a.forwardRef((function(e,t){var n=e.children,a=e.mouseEvent,i=void 0===a?"onClick":a,o=e.touchEvent,c=void 0===o?"onTouchEnd":o,s=e.onClickAway,l=r.a.useRef(!1),d=r.a.useRef(null),u=r.a.useRef(!1);r.a.useEffect((function(){return u.current=!0,function(){u.current=!1}}),[]);var m=Object(h.a)(d,t),v=r.a.useCallback((function(e){Object(k.a)(m,p.a.findDOMNode(e))}),[m]),f=Object(h.a)(n.ref,v),b=Object(E.a)((function(e){if(u.current)if(l.current)l.current=!1;else if(d.current){var t=Object(O.a)(d.current);t.documentElement&&t.documentElement.contains(e.target)&&!d.current.contains(e.target)&&s(e)}})),g=r.a.useCallback((function(){l.current=!0}),[]);return r.a.useEffect((function(){if(!1!==c){var e=j(c),t=Object(O.a)(d.current);return t.addEventListener(e,b),t.addEventListener("touchmove",g),function(){t.removeEventListener(e,b),t.removeEventListener("touchmove",g)}}}),[b,g,c]),r.a.useEffect((function(){if(!1!==i){var e=j(i),t=Object(O.a)(d.current);return t.addEventListener(e,b),function(){t.removeEventListener(e,b)}}}),[b,i]),r.a.createElement(r.a.Fragment,null,r.a.cloneElement(n,{ref:f}))})),N=n(11),w=n(84),C=n(307),y=n(163),L=n(20),T=r.a.forwardRef((function(e,t){var n=e.action,a=e.classes,i=e.className,o=e.message,c=e.role,s=void 0===c?"alert":c,l=Object(d.a)(e,["action","classes","className","message","role"]);return r.a.createElement(y.a,Object(m.a)({role:s,square:!0,elevation:6,className:Object(v.a)(a.root,i),ref:t},l),r.a.createElement("div",{className:a.message},o),n?r.a.createElement("div",{className:a.action},n):null)})),z=Object(f.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(L.b)(e.palette.background.default,t);return{root:Object(m.a)({},e.typography.body2,Object(u.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(T),D=r.a.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,i=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,o=a.horizontal,c=e.autoHideDuration,s=void 0===c?null:c,l=e.children,u=e.classes,f=e.className,g=e.ClickAwayListenerProps,p=e.ContentProps,O=e.disableWindowBlurListener,h=void 0!==O&&O,k=e.message,j=e.onClose,y=e.onEnter,L=e.onEntered,T=e.onEntering,D=e.onExit,R=e.onExited,S=e.onExiting,M=e.onMouseEnter,H=e.onMouseLeave,I=e.open,P=e.resumeHideDuration,B=e.TransitionComponent,F=void 0===B?C.a:B,W=e.transitionDuration,A=void 0===W?{enter:b.b.enteringScreen,exit:b.b.leavingScreen}:W,q=e.TransitionProps,G=Object(d.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),J=r.a.useRef(),_=r.a.useState(!0),U=_[0],X=_[1],K=Object(E.a)((function(){j&&j.apply(void 0,arguments)})),Q=Object(E.a)((function(e){j&&null!=e&&(clearTimeout(J.current),J.current=setTimeout((function(){K(null,"timeout")}),e))}));r.a.useEffect((function(){return I&&Q(s),function(){clearTimeout(J.current)}}),[I,s,Q]);var V=function(){clearTimeout(J.current)},Y=r.a.useCallback((function(){null!=s&&Q(null!=P?P:.5*s)}),[s,P,Q]);return r.a.useEffect((function(){if(!h&&I)return window.addEventListener("focus",Y),window.addEventListener("blur",V),function(){window.removeEventListener("focus",Y),window.removeEventListener("blur",V)}}),[h,Y,I]),!I&&U?null:r.a.createElement(x,Object(m.a)({onClickAway:function(e){j&&j(e,"clickaway")}},g),r.a.createElement("div",Object(m.a)({className:Object(v.a)(u.root,u["anchorOrigin".concat(Object(N.a)(i)).concat(Object(N.a)(o))],f),onMouseEnter:function(e){M&&M(e),V()},onMouseLeave:function(e){H&&H(e),Y()},ref:t},G),r.a.createElement(F,Object(m.a)({appear:!0,in:I,onEnter:Object(w.a)((function(){X(!1)}),y),onEntered:L,onEntering:T,onExit:D,onExited:Object(w.a)((function(){X(!0)}),R),onExiting:S,timeout:A,direction:"top"===i?"down":"up"},q),l||r.a.createElement(z,Object(m.a)({message:k,action:n},p)))))})),R=Object(f.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},i={justifyContent:"flex-start"},o={top:24},r={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(m.a)({},t,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({},o,{},l))),anchorOriginBottomCenter:Object(m.a)({},n,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({},r,{},l))),anchorOriginTopRight:Object(m.a)({},t,{},a,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({left:"auto"},o,{},c))),anchorOriginBottomRight:Object(m.a)({},n,{},a,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({left:"auto"},r,{},c))),anchorOriginTopLeft:Object(m.a)({},t,{},i,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({right:"auto"},o,{},s))),anchorOriginBottomLeft:Object(m.a)({},n,{},i,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({right:"auto"},r,{},s)))}}),{flip:!1,name:"MuiSnackbar"})(D),S=n(1016),M=n.n(S),H=i()(M.a,{fontSize:"small"});function I(){var[e,t]=r.a.useState(!1),n=(e,n)=>{"clickaway"!==n&&t(!1)};return i()(o.Fragment,{},void 0,i()("div",{className:"text-center"},void 0,i()(s.a,{className:"m-2",size:"large",color:"primary",variant:"contained",onClick:()=>{t(!0)}},void 0,"Top Centered Snackbar"),i()(R,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e,autoHideDuration:6e3,onClose:n,message:"Note archived",action:i()(r.a.Fragment,{},void 0,i()(s.a,{color:"primary",size:"small",onClick:n},void 0,"UNDO"),i()(l.a,{size:"small","aria-label":"close",color:"inherit",onClick:n},void 0,H))})))}var P=n(518),B=i()(o.Fragment,{},void 0,i()(P.a,{className:"mb-4",severity:"success"},void 0,i()("div",{className:"d-flex align-items-center align-content-center"},void 0,i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Success!")," This is a success alert—check it out!"))),i()(P.a,{className:"mb-4",severity:"info"},void 0,i()("div",{className:"d-flex align-items-center align-content-center"},void 0,i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Info!")," This is an info alert—check it out!"))),i()(P.a,{className:"mb-4",severity:"warning"},void 0,i()("div",{className:"d-flex align-items-center align-content-center"},void 0,i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Warning!")," This is a warning alert—check it out!"))),i()(P.a,{className:"mb-4",severity:"error"},void 0,i()("div",{className:"d-flex align-items-center align-content-center"},void 0,i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Danger!")," This is an error alert—check it out!"))));function F(){return B}var W=n(2),A=n(36),q=n.n(A),G=i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Success!")," This is a success alert—check it out!"),J=i()(P.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"info"},void 0,i()("div",{className:"d-flex align-items-center align-content-start"},void 0,i()("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-info text-white rounded-sm"},void 0,i()(q.a,{})),i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Info!")," This is an info alert—check it out!"))),_=i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Warning!")," This is a warning alert—check it out!"),U=i()("span",{},void 0,i()("strong",{className:"d-block"},void 0,"Danger!")," This is an error alert—check it out!");function X(){return i()(o.Fragment,{},void 0,i()(P.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"success"},void 0,i()("div",{className:"d-flex align-items-center align-content-start"},void 0,i()("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-success text-white rounded-sm"},void 0,i()(W.a,{icon:["far","object-group"]})),G)),J,i()(P.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"warning"},void 0,i()("div",{className:"d-flex align-items-center align-content-start"},void 0,i()("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-warning text-white rounded-sm"},void 0,i()(W.a,{icon:["far","question-circle"]})),_)),i()(P.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"error"},void 0,i()("div",{className:"d-flex align-items-center align-content-start"},void 0,i()("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-danger text-white rounded-sm"},void 0,i()(W.a,{icon:["far","keyboard"]})),U)))}var K=i()(o.Fragment,{},void 0,i()(c.e,{titleHeading:"Notifications",titleDescription:"Show beautiful, animated growl like notifications or alerts on your pages screens."}),i()(c.b,{sectionHeading:"Snackbars"},void 0,i()(I,{})),i()(c.b,{sectionHeading:"Basic alerts"},void 0,i()(F,{})),i()(c.b,{sectionHeading:"Alerts alternate style"},void 0,i()(X,{})));function Q(){return K}}}]);
//# sourceMappingURL=29.js.map