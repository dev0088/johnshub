(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1005:function(a,e,i){"use strict";var o=i(3),t=i(5),s=i(1),d=i.n(s),l=(i(4),i(6)),r=i(8),n=i(71),c=d.a.forwardRef((function(a,e){var i=a.children,s=a.classes,r=a.className,c=a.disableTypography,m=void 0!==c&&c,v=Object(t.a)(a,["children","classes","className","disableTypography"]);return d.a.createElement("div",Object(o.a)({className:Object(l.a)(s.root,r),ref:e},v),m?i:d.a.createElement(n.a,{component:"h2",variant:"h6"},i))}));e.a=Object(r.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(c)},1006:function(a,e,i){"use strict";var o=i(13);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(i(1)),s=(0,o(i(14)).default)(t.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.default=s},1007:function(a,e,i){"use strict";var o=i(3),t=i(1),s=i.n(t),d=(i(4),i(8)),l=i(71),r=s.a.forwardRef((function(a,e){return s.a.createElement(l.a,Object(o.a)({component:"p",variant:"body1",color:"textSecondary",ref:e},a))}));e.a=Object(d.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(r)},1331:function(a,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return ti}));var o=i(0),t=i.n(o),s=i(1),d=i.n(s),l=i(7),r=(i(4),i(2)),n=i(1005),c=i(495),m=i(461),v=i(474),p=i(457),b=i(397),u=i(815),g=i(399),N=i(187),f=i(816),h=i(402),x=i(476),w=i(494),y=i(122),k=i.n(y),C=i(3),S=i(5),j=i(6),z=i(8),O=i(68),I=d.a.forwardRef((function(a,e){var i=a.classes,o=a.className,t=Object(S.a)(a,["classes","className"]),s=d.a.useContext(O.a);return d.a.createElement("div",Object(C.a)({className:Object(j.a)(i.root,o,"flex-start"===s.alignItems&&i.alignItemsFlexStart),ref:e},t))})),W=Object(z.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(I),A=i(1006),F=i.n(A),D=i(1007),E=["example1@example.com","example2@example.com"],M=t()(n.a,{id:"simple-dialog-title"},void 0,"Set backup account"),T=t()(W,{},void 0,t()(c.a,{className:"bg-first"},void 0,t()(F.a,{}))),B=t()(W,{},void 0,t()(c.a,{},void 0,t()(k.a,{}))),R=t()(m.a,{primary:"Add account"});function V(a){var{onClose:e,selectedValue:i,open:o}=a,s=a=>{e(a)};return t()(v.a,{onClose:()=>{e(i)},"aria-labelledby":"simple-dialog-title",open:o},void 0,M,t()(p.a,{},void 0,E.map(a=>t()(b.a,{button:!0,onClick:()=>s(a)},a,T,t()(m.a,{primary:a}))),t()(b.a,{autoFocus:!0,button:!0,onClick:()=>s("addAccount")},void 0,B,R)))}var P=t()(n.a,{id:"form-dialog-title"},void 0,"Subscribe"),G=t()(u.a,{},void 0,t()(D.a,{},void 0,"To subscribe to this website, please enter your email address here. We will send updates occasionally."),t()(g.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})),H=t()("div",{className:"text-muted text-center mb-3"},void 0,t()("span",{},void 0,"Sign in with")),Y=t()("span",{className:"btn-wrapper--label"},void 0,"Facebook"),q=t()("span",{className:"btn-wrapper--label"},void 0,"Twitter"),L=t()("div",{className:"text-center text-muted mb-4"},void 0,t()("span",{},void 0,"Or sign in with credentials")),J=t()(g.a,{fullWidth:!0,placeholder:"Email",type:"email"}),U=t()(g.a,{fullWidth:!0,placeholder:"Password",type:"password"}),$=t()(n.a,{id:"scroll-dialog-title"},void 0,"Subscribe");function _(){var[a,e]=d.a.useState(!1),[i,o]=d.a.useState(E[1]),[l,n]=d.a.useState(!1),c=()=>{n(!1)},[m,p]=d.a.useState(!1),b=()=>{p(!1)},[g,y]=d.a.useState(!0),[k,C]=d.a.useState(!1),[S,j]=d.a.useState("paper"),z=a=>()=>{C(!0),j(a)},O=()=>{C(!1)},I=d.a.useRef(null);return d.a.useEffect(()=>{if(k){var{current:a}=I;null!==a&&a.focus()}},[k]),t()(s.Fragment,{},void 0,t()(N.a,{className:"m-2",variant:"outlined",color:"primary",onClick:()=>{e(!0)}},void 0,"Open simple dialog"),t()(V,{selectedValue:i,open:a,onClose:a=>{e(!1),o(a)}}),t()(N.a,{className:"m-2",variant:"outlined",color:"primary",onClick:()=>{n(!0)}},void 0,"Open form dialog"),t()(v.a,{open:l,onClose:c,"aria-labelledby":"form-dialog-title"},void 0,P,G,t()(f.a,{},void 0,t()(N.a,{onClick:c,color:"primary"},void 0,"Cancel"),t()(N.a,{onClick:c,color:"primary"},void 0,"Subscribe"))),t()(N.a,{className:"m-2",variant:"outlined",color:"primary",onClick:()=>{p(!0)}},void 0,"Open login form"),t()(v.a,{open:m,maxWidth:"lg",onClose:b,"aria-labelledby":"form-dialog-title2"},void 0,t()(u.a,{className:"p-0"},void 0,t()("div",{},void 0,t()("div",{className:"bg-secondary border-0"},void 0,t()("div",{className:"card-header d-block bg-white pt-4 pb-5"},void 0,H,t()("div",{className:"text-center"},void 0,t()(N.a,{variant:"outlined",className:"mr-2 text-facebook"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["fab","facebook"]})),Y),t()(N.a,{variant:"outlined",className:"ml-2 text-twitter"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["fab","twitter"]})),q))),t()("div",{className:"card-body px-lg-5 py-lg-5"},void 0,L,t()("form",{},void 0,t()("div",{className:"form-group mb-3"},void 0,t()("div",{className:"input-group input-group-alternative"},void 0,t()("div",{className:"input-group-prepend"},void 0,t()("div",{},void 0,t()(r.a,{icon:["far","envelope"]}))),J)),t()(h.a,{},void 0,t()("div",{className:"input-group input-group-alternative"},void 0,t()("div",{className:"input-group-prepend"},void 0,t()("div",{},void 0,t()(r.a,{icon:["fas","unlock-alt"]}))),U)),t()("div",{className:"w-100"},void 0,t()(x.a,{control:t()(w.a,{checked:g,onChange:a=>{y(a.target.checked)},value:"checked1",color:"primary"}),label:"Remember me"})),t()("div",{className:"text-center"},void 0,t()(N.a,{color:"primary",variant:"contained",onClick:b,className:"mt-4"},void 0,"Sign in")))))))),t()(N.a,{className:"m-2",variant:"outlined",color:"primary",onClick:z("paper")},void 0,"Inner scroll"),t()(N.a,{className:"m-2",variant:"outlined",color:"primary",onClick:z("body")},void 0,"Body scroll"),t()(v.a,{open:k,onClose:O,scroll:S,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},void 0,$,t()(u.a,{dividers:"paper"===S},void 0,d.a.createElement(D.a,{id:"scroll-dialog-description",ref:I,tabIndex:-1},[...new Array(50)].map(()=>"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.").join("\n"))),t()(f.a,{},void 0,t()(N.a,{onClick:O,color:"primary"},void 0,"Cancel"),t()(N.a,{onClick:O,color:"primary"},void 0,"Subscribe"))))}var K=i(46),Q=i.n(K),X=i(51),Z=i.n(X),aa=i(71),ea=i(491),ia=i(453),oa=i(394),ta=i(25),sa=i(473),da=i(403),la=i(400),ra=i(398),na=i(456),ca=i(163),ma=i(124),va=i(492),pa=i(475),ba=i(481),ua=i(79),ga=i.n(ua),Na=i(99),fa=i.n(Na),ha=i(95),xa=i(16),wa=i(17),ya=i(32),ka=i(35),Ca=i(64),Sa=i(26),ja=i(21),za=i(65),Oa=i(44),Ia=i(646),Wa=i(128),Aa=i(127),Fa=i(464),Da=i(462),Ea=i(463),Ma=i(465);function Ta(a){var{children:e,value:i,index:o}=a,s=Z()(a,["children","value","index"]);return d.a.createElement(aa.a,Q()({component:"div",role:"tabpanel",hidden:i!==o},s),i===o&&t()(ea.a,{p:4},void 0,e))}var Ba=t()("div",{className:"bg-composed-wrapper--bg bg-second opacity-5"}),Ra=t()("span",{className:"px-4 h-auto py-1 badge badge-second badge-pill"},void 0,"New release"),Va=t()("h1",{className:"display-4 my-3 font-weight-bold"},void 0,"Wonderful serenity has possession"),Pa=t()("p",{className:"font-size-md mb-0 text-white-50"},void 0,"A free hour, when our power of choice is untrammelled and when nothing prevents."),Ga=t()("div",{className:"divider border-2 my-5 border-light opacity-2 rounded w-25"}),Ha=t()("span",{className:"btn-wrapper--label"},void 0,"Browse gallery"),Ya=t()(ia.a,{className:"py-3",label:"Timeline"}),qa=t()(ia.a,{className:"py-3",label:"Tasks"}),La=t()(ia.a,{className:"py-3",label:"Reports"}),Ja=t()(oa.a,{container:!0,spacing:4},void 0,t()(oa.a,{item:!0,xs:12,sm:6,md:4},void 0,t()(ta.a,{className:"card-box text-black-50 bg-secondary mb-4 p-3"},void 0,t()("div",{className:"display-3 text-black font-weight-bold"},void 0,"31"),t()("div",{className:"divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning"}),t()("div",{className:"font-weight-bold font-size-sm text-uppercase"},void 0,"Implemented",t()("br",{}),"bugfixes"))),t()(oa.a,{item:!0,xs:12,sm:6,md:4},void 0,t()(ta.a,{className:"card-box text-black-50 bg-secondary mb-4 p-3"},void 0,t()("div",{className:"display-3 text-black font-weight-bold"},void 0,"68"),t()("div",{className:"divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success"}),t()("div",{className:"font-weight-bold font-size-sm text-uppercase"},void 0,"Unresolved",t()("br",{}),"tickets"))),t()(oa.a,{item:!0,xs:12,md:4},void 0,t()(ta.a,{className:"card-box text-black-50 bg-secondary mb-4 p-3"},void 0,t()("div",{className:"display-3 text-black font-weight-bold"},void 0,"57"),t()("div",{className:"divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning"}),t()("div",{className:"font-weight-bold font-size-sm text-uppercase"},void 0,"Support",t()("br",{}),"requests")))),Ua=t()("div",{className:"mt-3 line-height-sm"},void 0,t()("b",{className:"font-size-lg text-black"},void 0,"3,568"),t()("span",{className:"text-black-50 pl-1"},void 0,"clicks")),$a=t()("div",{className:"mt-3"},void 0,t()(sa.a,{color:"primary",value:85}),t()("div",{className:"align-box-row progress-bar--label mt-2 text-muted"},void 0,t()("div",{},void 0,"Target"),t()("div",{className:"ml-auto"},void 0,"100%"))),_a=t()("div",{className:"text-center"},void 0,t()(N.a,{variant:"outlined",color:"primary"},void 0,"Create new report")),Ka=t()("div",{className:"text-muted text-center mb-3"},void 0,t()("small",{},void 0,"Sign in with")),Qa=t()("span",{className:"btn-wrapper--label"},void 0,"Facebook"),Xa=t()("span",{className:"btn-wrapper--label"},void 0,"Twitter"),Za=t()("div",{className:"text-center text-black-50 mb-3"},void 0,t()("small",{},void 0,"Or sign in with credentials")),ae=t()("div",{className:"mb-3"},void 0,t()(h.a,{className:"w-100"},void 0,t()(da.a,{htmlFor:"input-with-icon-adornment"},void 0,"Email address"),t()(la.a,{fullWidth:!0,id:"input-with-icon-adornment",startAdornment:t()(ra.a,{position:"start"},void 0,t()(ga.a,{}))}))),ee=t()("div",{className:"mb-3"},void 0,t()(h.a,{className:"w-100"},void 0,t()(da.a,{htmlFor:"standard-adornment-password"},void 0,"Password"),t()(la.a,{id:"standard-adornment-password",fullWidth:!0,type:"password",startAdornment:t()(ra.a,{position:"start"},void 0,t()(fa.a,{}))}))),ie=t()("div",{className:"text-center"},void 0,t()(N.a,{color:"primary",variant:"contained",size:"large",className:"my-2"},void 0,"Sign in")),oe=t()("div",{className:"card-indicator bg-first"}),te=t()("div",{className:"badge badge-primary px-3"},void 0,"On Hold"),se=t()("div",{className:"card-indicator bg-success"}),de=t()("div",{className:"px-3 badge badge-success"},void 0,"Fixed"),le=t()("h4",{className:"timeline-item--label mb-2 font-weight-bold"},void 0,"1998"),re=t()("p",{},void 0,"Bill Clinton's presidential scandal makes it online."),ne=t()("div",{className:"timeline-item"},void 0,t()("div",{className:"timeline-item--content"},void 0,t()("div",{className:"timeline-item--icon"}),t()("h4",{className:"timeline-item--label mb-2 font-weight-bold"},void 0,"Java exam day"),t()("p",{},void 0,"Bill Clinton's presidential scandal makes it online."),t()("div",{className:"avatar-wrapper-overlap mt-2 mb-1"},void 0,t()("div",{className:"avatar-icon-wrapper avatar-icon-sm"},void 0,t()("div",{className:"avatar-icon"},void 0,t()("img",{alt:"...",src:xa.a}))),t()("div",{className:"avatar-icon-wrapper avatar-icon-sm"},void 0,t()("div",{className:"avatar-icon"},void 0,t()("img",{alt:"...",src:ja.a}))),t()("div",{className:"avatar-icon-wrapper avatar-icon-sm"},void 0,t()("div",{className:"avatar-icon"},void 0,t()("img",{alt:"...",src:xa.a}))),t()("div",{className:"avatar-icon-wrapper avatar-icon-sm"},void 0,t()("div",{className:"avatar-icon"},void 0,t()("img",{alt:"...",src:wa.a}))),t()("div",{className:"avatar-icon-wrapper avatar-icon-sm"},void 0,t()("div",{className:"avatar-icon"},void 0,t()("img",{alt:"...",src:Sa.a})))))),ce=t()("div",{className:"timeline-item"},void 0,t()("div",{className:"timeline-item--content"},void 0,t()("div",{className:"timeline-item--icon"}),t()("h4",{className:"timeline-item--label mb-2 font-weight-bold"},void 0,"Business investor meeting",t()("span",{className:"text-info ml-2 badge badge-neutral-info"},void 0,"New")),t()("p",{},void 0,"Mosaic, the first graphical browser, is introduced to the average consumer."),t()("div",{className:"mt-2"},void 0,t()(N.a,{size:"small",variant:"contained",color:"primary"},void 0,"Submit Report")))),me=t()("div",{className:"bg-composed-wrapper--bg bg-second opacity-5 rounded-left"}),ve=t()("div",{className:"bg-composed-wrapper--content text-center p-5"},void 0,t()("div",{className:"text-white"},void 0,t()("h1",{className:"display-3 my-3 font-weight-bold"},void 0,"Wonderful serenity has possession"),t()("p",{className:"font-size-lg mb-0 text-white-50"},void 0,"A free hour, when our power of choice is untrammelled and when nothing prevents."))),pe=t()("div",{className:"hero-footer pb-4"},void 0,t()(N.a,{color:"primary",variant:"contained",size:"large",className:"px-4"},void 0,t()("span",{className:"btn-wrapper--label"},void 0,"Continue reading"))),be=t()("div",{className:"avatar-icon-wrapper rounded-circle m-0"},void 0,t()("div",{className:"d-block p-0 avatar-icon-wrapper m-0 d-90"},void 0,t()("div",{className:"rounded-circle overflow-hidden"},void 0,t()("img",{alt:"...",className:"img-fluid",src:ja.a})))),ue=t()("div",{},void 0,t()("span",{className:"my-2 text-success font-size-md px-4 py-1 h-auto badge badge-neutral-success"},void 0,"Online")),ge=t()("h3",{className:"font-weight-bold mt-3"},void 0,"Lacie-Mae Mckay"),Ne=t()("p",{className:"mb-0 text-black-50"},void 0,"Senior Frontend Developer at ",t()("b",{},void 0,"Google Inc.")),fe=t()("div",{className:"d-flex p-4 bg-secondary card-footer mt-4 flex-wrap"},void 0,t()("div",{className:"w-50 p-2"},void 0,t()("button",{className:"btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100"},void 0,t()("div",{},void 0,t()(Fa.a,{className:"h1 d-block my-2 text-warning"}),t()("div",{className:"font-weight-bold font-size-lg text-black"},void 0,"Reports"),t()("div",{className:"font-size-sm mb-1 text-black-50"},void 0,"Monthly Stats")))),t()("div",{className:"w-50 p-2"},void 0,t()("button",{className:"btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100"},void 0,t()("div",{},void 0,t()(Da.a,{className:"h1 d-block my-2 text-success"}),t()("div",{className:"font-weight-bold font-size-lg text-black"},void 0,"Statistics"),t()("div",{className:"font-size-sm mb-1 text-black-50"},void 0,"Customers stats")))),t()("div",{className:"w-50 p-2"},void 0,t()("button",{className:"btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100"},void 0,t()("div",{},void 0,t()(Ea.a,{className:"h1 d-block my-2 text-danger"}),t()("div",{className:"font-weight-bold font-size-lg text-black"},void 0,"Projects"),t()("div",{className:"font-size-sm mb-1 text-black-50"},void 0,"Manage servers")))),t()("div",{className:"w-50 p-2"},void 0,t()("button",{className:"btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100"},void 0,t()("div",{},void 0,t()(Ma.a,{className:"h1 d-block my-2 text-white"}),t()("div",{className:"font-weight-bold font-size-lg text-black"},void 0,"Tasks"),t()("div",{className:"font-size-sm mb-1 text-black-50"},void 0,"Pending items"))))),he=t()(oa.a,{item:!0,xs:12,lg:5},void 0,t()("div",{className:"p-4 text-center"},void 0,t()("div",{className:"avatar-icon-wrapper rounded-circle mx-auto"},void 0,t()("div",{className:"d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first"},void 0,t()("div",{className:"rounded-circle border-3 border-white overflow-hidden"},void 0,t()("img",{alt:"...",className:"img-fluid",src:Ca.a})))),t()("h4",{className:"font-size-lg font-weight-bold my-2"},void 0,"Marion Devine"),t()("div",{className:"text-center my-4"},void 0,t()("span",{className:"text-first mx-1 badge badge-neutral-first badge-pill"},void 0,"Web developer"),t()("span",{className:"text-warning mx-1 badge badge-neutral-warning badge-pill"},void 0,"Javascript"),t()("span",{className:"text-danger mx-1 badge badge-neutral-danger badge-pill"},void 0,"Angular")),t()("p",{className:"text-muted mb-4"},void 0,"I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now."),t()("div",{className:"divider my-4"}),t()(oa.a,{container:!0,spacing:4},void 0,t()(oa.a,{item:!0,xs:6},void 0,t()("span",{className:"opacity-6 pb-2"},void 0,"Current month"),t()("div",{className:"d-flex align-items-center justify-content-center"},void 0,t()("span",{className:"font-weight-bold font-size-lg"},void 0,t()("small",{className:"opacity-6 pr-1"},void 0,"$"),"46,362"),t()(na.a,{color:"secondary",className:"ml-2 text-danger"},void 0,"-8%"))),t()(oa.a,{item:!0,xs:6},void 0,t()("span",{className:"opacity-6 pb-2"},void 0,"Last year"),t()("div",{className:"d-flex align-items-center justify-content-center"},void 0,t()("span",{className:"font-weight-bold font-size-lg"},void 0,t()("small",{className:"opacity-6 pr-1"},void 0,"$"),"34,546"),t()(na.a,{color:"secondary",className:"text-success ml-2"},void 0,"+13%")))),t()("div",{className:"divider my-4"}),t()("div",{className:"font-weight-bold text-uppercase text-black-50 text-center mb-3"},void 0,"Team members"),t()(ba.a,{className:"d-flex justify-content-center"},void 0,t()(c.a,{alt:"...",src:xa.a}),t()(c.a,{alt:"...",src:wa.a}),t()(c.a,{alt:"...",src:ya.a}),t()(c.a,{alt:"...",src:ka.a}),t()(ca.a,{title:"Shanelle Wynn • Beck Simpson"},void 0,t()(c.a,{},void 0,"+2"))),t()("div",{className:"divider my-4"}),t()(N.a,{variant:"outlined",size:"large",color:"primary",className:"mt-2"},void 0,"View complete profile"))),xe=t()("h1",{className:"display-3 my-3 font-weight-bold"},void 0,"Wonderful serenity has possession"),we=t()("p",{className:"font-size-lg mb-0 text-white-50"},void 0,"A free hour, when our power of choice is untrammelled and when nothing prevents."),ye=t()("div",{className:"divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25"}),ke=t()("span",{className:"btn-wrapper--label"},void 0,"Get in touch"),Ce=t()(oa.a,{container:!0,spacing:0},void 0,t()(oa.a,{item:!0,xs:12,lg:5},void 0,t()("img",{alt:"...",className:" img-fit-container",src:ha.a})),t()(oa.a,{item:!0,xs:12,lg:7},void 0,t()("div",{className:"bg-white "},void 0,t()("div",{className:"p-5"},void 0,t()("img",{alt:"...",className:"w-25 d-block img-fluid",src:Ia.a}),t()("h1",{className:"display-4 my-3 font-weight-bold"},void 0,"Wonderful serenity has possession"),t()("p",{className:"font-size-lg text-black"},void 0,"A free hour, when our power of choice is untrammelled and when nothing prevents."),t()("p",{className:"font-size-sm mb-3 text-black-50"},void 0,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics"),t()(N.a,{color:"primary",variant:"contained"},void 0,"Continue reading"))))),Se=t()("div",{className:"card-badges card-badgestop"},void 0,t()(na.a,{color:"secondary"},void 0,"New")),je=t()("img",{alt:"...",className:"card-img-top rounded",src:za.a}),ze=t()("p",{className:"text-black-50 font-size-lg mb-0"},void 0,"Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat."),Oe=t()("div",{className:"avatar-icon-wrapper avatar-icon-lg  mr-2"},void 0,t()("div",{className:"avatar-icon"},void 0,t()("img",{alt:"...",src:ya.a}))),Ie=t()("span",{className:"text-black-50 d-block"},void 0,"UI Engineer, Google"),We=()=>{var[a,e]=Object(s.useState)(!1),[i,o]=Object(s.useState)(!1),[l,n]=Object(s.useState)(!1),[c,m]=Object(s.useState)(!1),[p,b]=Object(s.useState)(!1),u=()=>e(!a),g=()=>o(!i),f=()=>n(!l),h=()=>m(!c),y=()=>b(!p),[k,C]=d.a.useState(0),[S,j]=d.a.useState(!0);return t()(s.Fragment,{},void 0,t()(N.a,{onClick:u,variant:"outlined",color:"primary",className:"m-2"},void 0,"Open example I"),t()(v.a,{scroll:"body",maxWidth:"lg",open:a,onClose:u},void 0,t()(oa.a,{container:!0,spacing:0},void 0,t()(oa.a,{item:!0,xs:12,lg:5},void 0,t()("div",{className:"hero-wrapper bg-composed-wrapper bg-plum-plate h-100"},void 0,t()("div",{className:"flex-grow-1 w-100 d-flex align-items-center"},void 0,t()("div",{className:"bg-composed-wrapper--image ",style:{backgroundImage:"url("+Wa.a+")"}}),Ba,t()("div",{className:"bg-composed-wrapper--content p-5"},void 0,t()("div",{className:"d-flex align-items-center"},void 0,Ra,t()(ca.a,{arrow:!0,placement:"right",title:"More info placeholder!"},void 0,t()("span",{className:"text-white-50 pl-3"},void 0,t()(r.a,{icon:["far","question-circle"]})))),t()("div",{className:"text-white mt-3"},void 0,Va,Pa,Ga,t()("div",{},void 0,t()(N.a,{color:"primary",variant:"contained"},void 0,Ha,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["fas","arrow-right"]}))))))),t()("div",{className:"hero-footer pb-4"},void 0,t()("div",{className:"d-flex justify-content-center"},void 0,t()(ca.a,{arrow:!0,title:"Facebook"},void 0,t()(ma.a,{color:"primary",size:"medium",variant:"outlined",className:"text-white"},void 0,t()(r.a,{icon:["fab","facebook"],className:"font-size-lg"}))),t()(ca.a,{arrow:!0,title:"Twitter"},void 0,t()(ma.a,{color:"primary",size:"medium",variant:"outlined",className:"text-white"},void 0,t()(r.a,{icon:["fab","twitter"],className:"font-size-lg"}))),t()(ca.a,{arrow:!0,title:"Google"},void 0,t()(ma.a,{color:"primary",size:"medium",variant:"outlined",className:"text-white"},void 0,t()(r.a,{icon:["fab","google"],className:"font-size-lg"}))),t()(ca.a,{arrow:!0,title:"Instagram"},void 0,t()(ma.a,{color:"primary",size:"medium",variant:"outlined",className:"text-white"},void 0,t()(r.a,{icon:["fab","instagram"],className:"font-size-lg"}))))))),t()(oa.a,{item:!0,xs:12,lg:7},void 0,t()("div",{className:"bg-white "},void 0,t()(va.a,{value:k,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:(a,e)=>{C(e)}},void 0,Ya,qa,La),t()(Ta,{value:k,index:0},void 0,Ja,t()(ta.a,{className:"card-box bg-secondary mb-4"},void 0,t()(pa.a,{className:"p-3"},void 0,t()("div",{className:"text-left"},void 0,t()("div",{className:"mt-1"},void 0,t()(r.a,{icon:["fas","lemon"],className:"font-size-xxl text-danger"})),Ua),$a)),_a),t()(Ta,{value:k,index:1},void 0,t()(ta.a,{className:"m-0 bg-secondary border-0"},void 0,t()("div",{className:"card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0"},void 0,Ka,t()("div",{className:"text-center"},void 0,t()(N.a,{variant:"outlined",className:"mr-2 text-facebook"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["fab","facebook"]})),Qa),t()(N.a,{variant:"outlined",className:"ml-2 text-twitter"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["fab","twitter"]})),Xa))),t()(pa.a,{className:"p-3"},void 0,Za,t()("form",{className:"px-5"},void 0,ae,ee,t()("div",{className:"w-100"},void 0,t()(x.a,{control:t()(w.a,{checked:S,onChange:a=>{j(a.target.checked)},value:"checked1",color:"primary"}),label:"Remember me"})),ie)))),t()(Ta,{value:k,index:2},void 0,t()(oa.a,{container:!0,spacing:4},void 0,t()(oa.a,{item:!0,xs:12,md:6},void 0,t()(ta.a,{className:"card-box bg-secondary mb-4"},void 0,oe,t()(pa.a,{className:"px-4 py-3"},void 0,t()("div",{className:"pb-3 d-flex justify-content-between"},void 0,t()("a",{href:"#/",onClick:a=>a.preventDefault()},void 0,"Presentation site design")),t()("div",{className:"d-flex align-items-center justify-content-start"},void 0,te,t()("div",{className:"font-size-sm text-danger px-2"},void 0,t()(r.a,{icon:["far","clock"],className:"mr-1"}),"14:22"))))),t()(oa.a,{item:!0,xs:12,md:6},void 0,t()(ta.a,{className:"card-box bg-secondary mb-4"},void 0,se,t()(pa.a,{className:"px-4 py-3"},void 0,t()("div",{className:"pb-3 d-flex justify-content-between"},void 0,t()("a",{href:"#/",onClick:a=>a.preventDefault()},void 0,"Create UI mockups")),t()("div",{className:"d-flex align-items-center justify-content-start"},void 0,de,t()("div",{className:"font-size-sm text-dark px-2"},void 0,t()(r.a,{icon:["far","clock"],className:"mr-1"}),"09:41")))))),t()("div",{className:"timeline-list"},void 0,t()("div",{className:"timeline-item timeline-item-icon"},void 0,t()("div",{className:"timeline-item--content"},void 0,t()("div",{className:"timeline-item--icon-wrapper bg-danger text-white"},void 0,t()(r.a,{icon:["far","gem"]})),le,re)),ne,ce)))))),t()(N.a,{onClick:g,variant:"outlined",color:"primary",className:"m-2"},void 0,"Open example II"),t()(v.a,{scroll:"body",maxWidth:"lg",open:i,onClose:g},void 0,t()(oa.a,{container:!0,spacing:0},void 0,t()(oa.a,{item:!0,xs:12,lg:6},void 0,t()("div",{className:"hero-wrapper bg-composed-wrapper bg-grow-early h-100 rounded-left"},void 0,t()("div",{className:"flex-grow-1 w-100 d-flex align-items-center"},void 0,t()("div",{className:"bg-composed-wrapper--image rounded-left",style:{backgroundImage:"url("+Aa.a+")"}}),me,ve),pe)),t()(oa.a,{item:!0,xs:12,lg:6},void 0,t()("div",{className:"card-tr-actions"},void 0,t()(ca.a,{arrow:!0,title:"Send Message"},void 0,t()(N.a,{size:"small",variant:"outlined",color:"primary"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["far","envelope"]}))))),t()("div",{className:"text-center pt-4"},void 0,be,ue,ge,Ne,t()("div",{className:"pt-3"},void 0,t()(ca.a,{arrow:!0,title:"Github"},void 0,t()(ma.a,{variant:"outlined",className:"d-50 m-2 text-github"},void 0,t()(r.a,{icon:["fab","github"],className:"font-size-lg"}))),t()(ca.a,{arrow:!0,title:"Instagram"},void 0,t()(ma.a,{variant:"outlined",className:"d-50 m-2 text-instagram"},void 0,t()(r.a,{icon:["fab","instagram"],className:"font-size-lg"}))),t()(ca.a,{arrow:!0,title:"Google"},void 0,t()(ma.a,{variant:"outlined",className:"d-50 m-2 text-google"},void 0,t()(r.a,{icon:["fab","google"],className:"font-size-lg"})))),fe)))),t()(N.a,{onClick:f,variant:"outlined",color:"primary",className:"m-2"},void 0,"Open example III"),t()(v.a,{scroll:"body",maxWidth:"lg",open:l,onClose:f},void 0,t()(oa.a,{container:!0,spacing:0},void 0,he,t()(oa.a,{item:!0,xs:12,lg:7},void 0,t()("div",{className:"hero-wrapper bg-composed-wrapper h-100 rounded-right"},void 0,t()("div",{className:"flex-grow-1 w-100 d-flex align-items-end"},void 0,t()("div",{className:"bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm",style:{backgroundImage:"url("+Oa.a+")"}}),t()("div",{className:"bg-composed-wrapper--content text-center p-5"},void 0,t()("div",{className:"text-white mt-3"},void 0,xe,we,ye,t()("div",{},void 0,t()(N.a,{color:"primary",variant:"contained",size:"large"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["far","envelope"]})),ke))))))))),t()(N.a,{onClick:h,variant:"outlined",color:"primary",className:"m-2"},void 0,"Open example IV"),t()(v.a,{scroll:"body",maxWidth:"md",open:c,onClose:h},void 0,Ce),t()(N.a,{onClick:y,variant:"outlined",color:"primary",className:"m-2"},void 0,"Open example V"),t()(v.a,{scroll:"body",maxWidth:"md",open:p,onClose:y},void 0,t()("div",{className:"p-4"},void 0,t()(oa.a,{container:!0,spacing:4},void 0,t()(oa.a,{item:!0,lg:4},void 0,t()("a",{href:"#/",onClick:a=>a.preventDefault(),className:"card-img-wrapper rounded"},void 0,t()("div",{className:"img-wrapper-overlay"},void 0,t()("div",{className:"overlay-btn-wrapper"},void 0,t()(N.a,{color:"primary",className:"p-0 d-50 rounded-circle"},void 0,t()("span",{className:"btn-wrapper--icon"},void 0,t()(r.a,{icon:["fas","play-circle"]}))))),Se,je)),t()(oa.a,{item:!0,lg:8},void 0,t()("a",{href:"#/",onClick:a=>a.preventDefault(),className:"font-size-xxl d-block my-4"},void 0,"New report file has been uploaded"),ze,t()("div",{className:"d-flex align-items-center mt-4"},void 0,Oe,t()("div",{},void 0,t()("a",{href:"#/",onClick:a=>a.preventDefault(),className:"font-weight-bold text-black",title:"..."},void 0,"Aaran Mitchell"),Ie)))))))},Ae=t()(n.a,{},void 0,"Example modal"),Fe=t()(u.a,{},void 0,t()("p",{},void 0,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),t()("p",{},void 0,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.")),De=t()(n.a,{},void 0,"Example modal"),Ee=t()(u.a,{},void 0,t()("p",{},void 0,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),t()("p",{},void 0,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.")),Me=t()(n.a,{},void 0,"Example modal"),Te=t()(u.a,{},void 0,t()("p",{},void 0,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),t()("p",{},void 0,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.")),Be=t()(n.a,{},void 0,"Example modal"),Re=t()(u.a,{},void 0,t()("p",{},void 0,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),t()("p",{},void 0,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.")),Ve=()=>{var[a,e]=Object(s.useState)(!1),[i,o]=Object(s.useState)(!1),[d,l]=Object(s.useState)(!1),[r,n]=Object(s.useState)(!1),c=()=>e(!a),m=()=>o(!i),p=()=>l(!d),b=()=>n(!r);return t()(s.Fragment,{},void 0,t()(N.a,{color:"primary",onClick:c,className:"text-white bg-strong-bliss m-2"},void 0,"Strong bliss"),t()(v.a,{open:a,onClose:c,classes:{paper:"modal-dark bg-strong-bliss"}},void 0,Ae,Fe,t()(f.a,{},void 0,t()(N.a,{color:"primary",variant:"contained",onClick:c},void 0,"Close")," ",t()(N.a,{color:"primary",variant:"contained",className:"ml-auto",onClick:c},void 0,"Save changes"))),t()(N.a,{color:"primary",variant:"contained",onClick:m,className:"text-white bg-amy-crisp m-2"},void 0,"Amy crisp"),t()(v.a,{open:i,onClose:m,classes:{paper:"modal-dark bg-amy-crisp"}},void 0,De,Ee,t()(f.a,{},void 0,t()(N.a,{variant:"contained",color:"primary",onClick:m},void 0,"Yes, I confirm"))),t()(N.a,{color:"primary",onClick:p,className:"text-white bg-warning m-2"},void 0,"Warning"),t()(v.a,{open:d,onClose:p,classes:{paper:"modal-dark bg-warning"}},void 0,Me,Te,t()(f.a,{},void 0,t()(N.a,{variant:"contained",className:"ml-auto",onClick:p},void 0,"Save"))),t()(N.a,{color:"primary",onClick:b,className:"text-white bg-plum-plate m-2"},void 0,"Plum plate"),t()(v.a,{open:r,onClose:b,classes:{paper:"modal-dark bg-plum-plate"}},void 0,Be,Re,t()(f.a,{},void 0,t()(N.a,{color:"secondary",variant:"contained",onClick:b},void 0,"Save changes"))))},Pe=t()("h4",{className:"font-weight-bold mt-4"},void 0,"Do you want to create this?"),Ge=t()("p",{className:"mb-0 font-size-lg text-muted"},void 0,"You can later review your options."),He=t()("span",{className:"btn-wrapper--label"},void 0,"Cancel"),Ye=t()("span",{className:"btn-wrapper--label"},void 0,"Create"),qe=t()("h4",{className:"font-weight-bold mt-4"},void 0,"Are you sure you want to delete this entry?"),Le=t()("p",{className:"mb-0 font-size-lg text-muted"},void 0,"You cannot undo this operation."),Je=t()("span",{className:"btn-wrapper--label"},void 0,"Cancel"),Ue=t()("span",{className:"btn-wrapper--label"},void 0,"Delete"),$e=t()("div",{className:"font-weight-bold font-size-lg mt-4"},void 0,"Double checking you options?"),_e=t()("p",{className:"mb-0 mt-2 text-muted"},void 0,"Use the helper classes to style these paragraphs!"),Ke=t()("span",{className:"btn-wrapper--label"},void 0,"Cancel"),Qe=t()("span",{className:"btn-wrapper--label"},void 0,"Yes, do it"),Xe=t()("h4",{className:"font-weight-bold mt-4"},void 0,"Are you sure?"),Ze=t()("p",{className:"mb-0 text-black-50"},void 0,"You can change your mind later."),ai=t()("span",{className:"btn-wrapper--label"},void 0,"Cancel"),ei=t()("span",{className:"btn-wrapper--label"},void 0,"Add"),ii=()=>{var[a,e]=Object(s.useState)(!1),[i,o]=Object(s.useState)(!1),[d,l]=Object(s.useState)(!1),[n,c]=Object(s.useState)(!1),m=()=>e(!a),p=()=>o(!i),b=()=>l(!d),u=()=>c(!n);return t()(s.Fragment,{},void 0,t()(N.a,{onClick:m,color:"primary",className:"m-2"},void 0,"Success confirm modal"),t()(v.a,{open:a,onClose:m},void 0,t()("div",{className:"text-center p-5"},void 0,t()("div",{className:"avatar-icon-wrapper rounded-circle m-0"},void 0,t()("div",{className:"d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-success text-success m-0 d-130"},void 0,t()(r.a,{icon:["far","lightbulb"],className:"d-flex align-self-center display-3"}))),Pe,Ge,t()("div",{className:"pt-4"},void 0,t()(N.a,{onClick:m,variant:"outlined",color:"secondary",className:"mx-1"},void 0,He),t()(N.a,{onClick:m,color:"primary",variant:"contained",className:"mx-1"},void 0,Ye)))),t()(N.a,{onClick:p,color:"primary",className:"m-2"},void 0,"Error confirm modal"),t()(v.a,{open:i,onClose:p},void 0,t()("div",{className:"text-center p-5"},void 0,t()("div",{className:"avatar-icon-wrapper rounded-circle m-0"},void 0,t()("div",{className:"d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130"},void 0,t()(r.a,{icon:["fas","times"],className:"d-flex align-self-center display-3"}))),qe,Le,t()("div",{className:"pt-4"},void 0,t()(N.a,{onClick:p,variant:"outlined",color:"secondary",className:"mx-1"},void 0,Je),t()(N.a,{onClick:p,color:"primary",variant:"contained",className:"mx-1"},void 0,Ue)))),t()(N.a,{onClick:b,color:"primary",className:"m-2"},void 0,"Warning confirm modal"),t()(v.a,{open:d,onClose:b},void 0,t()("div",{className:"text-center p-5"},void 0,t()("div",{className:"avatar-icon-wrapper rounded-circle m-0"},void 0,t()("div",{className:"d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-warning text-white m-0 d-130"},void 0,t()(r.a,{icon:["far","dot-circle"],className:"d-flex align-self-center display-3"}))),$e,_e,t()("div",{className:"pt-4"},void 0,t()(N.a,{onClick:b,variant:"outlined",color:"primary",className:"mx-1"},void 0,Ke),t()(N.a,{onClick:b,variant:"outlined",color:"primary",className:"mx-1"},void 0,Qe)))),t()(N.a,{onClick:u,color:"primary",className:"m-2"},void 0,"Info confirm modal"),t()(v.a,{open:n,onClose:u},void 0,t()("div",{className:"text-center p-5"},void 0,t()("div",{className:"avatar-icon-wrapper rounded-circle m-0"},void 0,t()("div",{className:"d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-first text-first m-0 d-130"},void 0,t()(r.a,{icon:["far","keyboard"],className:"d-flex align-self-center display-3"}))),Xe,Ze,t()("div",{className:"pt-4"},void 0,t()(N.a,{onClick:u,variant:"outlined",color:"secondary",className:"text-danger mx-1"},void 0,ai),t()(N.a,{onClick:u,color:"primary",variant:"contained",className:"mx-1"},void 0,ei)))))},oi=t()(s.Fragment,{},void 0,t()(l.e,{titleHeading:"Modal dialogs",titleDescription:"Wide selection of modal dialogs styles and animations available."}),t()(l.b,{sectionHeading:"Basic"},void 0,t()(_,{})),t()(l.b,{sectionHeading:"Borderless"},void 0,t()(We,{})),t()(l.b,{sectionHeading:"Confirm modals"},void 0,t()(ii,{})),t()(l.b,{sectionHeading:"Colors"},void 0,t()(Ve,{})));function ti(){return oi}},646:function(a,e,i){"use strict";e.a=i.p+"images/6a1a25363be8911e53957e25a7061fec.svg"},815:function(a,e,i){"use strict";var o=i(3),t=i(5),s=i(1),d=i.n(s),l=(i(4),i(6)),r=i(8),n=d.a.forwardRef((function(a,e){var i=a.classes,s=a.className,r=a.dividers,n=void 0!==r&&r,c=Object(t.a)(a,["classes","className","dividers"]);return d.a.createElement("div",Object(o.a)({className:Object(l.a)(i.root,s,n&&i.dividers),ref:e},c))}));e.a=Object(r.a)((function(a){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(a.palette.divider),borderBottom:"1px solid ".concat(a.palette.divider)}}}),{name:"MuiDialogContent"})(n)},816:function(a,e,i){"use strict";var o=i(3),t=i(5),s=i(1),d=i.n(s),l=(i(4),i(6)),r=i(8),n=d.a.forwardRef((function(a,e){var i=a.disableSpacing,s=void 0!==i&&i,r=a.classes,n=a.className,c=Object(t.a)(a,["disableSpacing","classes","className"]);return d.a.createElement("div",Object(o.a)({className:Object(l.a)(r.root,n,!s&&r.spacing),ref:e},c))}));e.a=Object(r.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(n)}}]);
//# sourceMappingURL=18.js.map