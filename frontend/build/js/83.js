(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1393:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return D}));var l=t(0),i=t.n(l),r=t(1),s=t(7),d=t(71),u=t(256),o=t(1400),n=Object(u.a)(e=>({root:{margin:"0 auto",padding:e.spacing(3)},margin:{height:e.spacing(3)}})),m=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function c(){return"°C"}var v=i()(d.a,{id:"discrete-slider",gutterBottom:!0},void 0,"Temperature"),g=i()(o.a,{defaultValue:30,getAriaValueText:c,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110}),b=i()(d.a,{id:"discrete-slider-small-steps",gutterBottom:!0},void 0,"Small steps"),p=i()(o.a,{defaultValue:5e-8,getAriaValueText:c,"aria-labelledby":"discrete-slider-small-steps",step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"}),f=i()(d.a,{id:"discrete-slider-custom",gutterBottom:!0},void 0,"Custom marks"),y=i()(o.a,{defaultValue:20,getAriaValueText:c,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:m}),w=i()(d.a,{id:"discrete-slider-restrict",gutterBottom:!0},void 0,"Restricted values"),V=i()(o.a,{defaultValue:20,valueLabelFormat:function(e){return m.findIndex(a=>a.value===e)+1},getAriaValueText:c,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:m}),k=i()(d.a,{id:"discrete-slider-always",gutterBottom:!0},void 0,"Always visible"),x=i()(o.a,{defaultValue:80,getAriaValueText:c,"aria-labelledby":"discrete-slider-always",step:10,marks:m,valueLabelDisplay:"on"});function C(){var e=n();return i()(r.Fragment,{},void 0,i()("div",{className:e.root},void 0,v,g,i()("div",{className:e.margin}),b,p,i()("div",{className:e.margin}),f,y,i()("div",{className:e.margin}),w,V,i()("div",{className:e.margin}),k,x))}var A=i()(r.Fragment,{},void 0,i()(s.e,{titleHeading:"Slider",titleDescription:"Create sliders and range sliders with these React form widgets."}),i()(s.b,{sectionHeading:"Material"},void 0,i()(C,{})));function D(){return A}}}]);
//# sourceMappingURL=83.js.map