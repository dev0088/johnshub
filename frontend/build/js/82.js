(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1391:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(0),a=n.n(r),o=n(1),i=n.n(o),u=n(7),p=(n(77),n(76),n(47)),c=n.n(p),s=n(46),f=n.n(s),d=n(51),l=n.n(d),m=(n(4),n(394)),b=n(399),v=n(1128),g=n.n(v),O=n(1129);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var{inputRef:t}=e,n=l()(e,["inputRef"]);return i.a.createElement(g.a,f()({},n,{ref:e=>{t(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:" ",showMask:!0}))}function y(e){var{inputRef:t,onChange:n}=e,r=l()(e,["inputRef","onChange"]);return i.a.createElement(O.a,f()({},r,{getInputRef:t,onValueChange:e=>{n({target:{value:e.value}})},thousandSeparator:!0,isNumericString:!0,prefix:"$"}))}function j(){var[e,t]=i.a.useState({textmask:"(1  )    -    ",numberformat:"1320"}),n=n=>r=>{t(w(w({},e),{},{[n]:r.target.value}))};return a()(o.Fragment,{},void 0,a()("div",{className:"my-5 p-5"},void 0,a()(m.a,{container:!0,spacing:4},void 0,a()(m.a,{item:!0,xs:6},void 0,a()(b.a,{fullWidth:!0,variant:"outlined",label:"react-text-mask",value:e.textmask,onChange:n("textmask"),id:"formatted-numberformat-input",InputProps:{inputComponent:k}})),a()(m.a,{item:!0,xs:6},void 0,a()(b.a,{fullWidth:!0,variant:"outlined",label:"react-number-format",value:e.numberformat,onChange:n("numberformat"),id:"formatted-numberformat-input",InputProps:{inputComponent:y}})))))}var P=a()(o.Fragment,{},void 0,a()(u.e,{titleHeading:"Input Mask",titleDescription:"Add all kind of input masks for inputs for a better user experience."}),a()(u.b,{sectionHeading:"Basic"},void 0,a()(j,{})));function x(){return P}}}]);
//# sourceMappingURL=82.js.map