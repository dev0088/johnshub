(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1031:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(1)),r=a(o(1032));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b=function(e){function t(){var e,o;l(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return v(f(o=p(this,(e=d(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=o.props,a=t.text,i=t.onCopy,c=t.children,s=t.options,l=n.default.Children.only(c),u=(0,r.default)(a,s);i&&i(a,u),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e)})),o}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=s(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){v(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}])&&u(o.prototype,a),i&&u(o,i),t}(n.default.PureComponent);t.CopyToClipboard=b,v(b,"defaultProps",{onCopy:void 0,options:void 0})},1032:function(e,t,o){"use strict";var n=o(1033),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,i,c,s,l,u=!1;t||(t={}),o=t.debug||!1;try{if(i=n(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},1033:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1376:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return P}));var n=o(0),r=o.n(n),a=o(1),i=o(7),c=o(2),s=o(394),l=o(399),u=o(402),p=o(398),d=o(460),f=o(493),y=o(827),v=r()("div",{className:"font-weight-bold font-size-lg mb-3"},void 0,"Content source"),b=r()(s.a,{item:!0,xs:12,md:6},void 0,r()("div",{className:"font-weight-bold font-size-lg mb-3"},void 0,"Test copy"),r()(f.a,{className:"mb-4",severity:"warning"},void 0,'Paste here the content you copied when you clicked the "Copy" button.'),r()(l.a,{label:"Clipboard test",multiline:!0,rows:"4",fullWidth:!0,defaultValue:"Paste here what you copied!",variant:"outlined"}));class m extends a.Component{constructor(){super(...arguments),this.state={value:"Input value to be copied here...",copied:!1,value2:"Input with side button & icon",copied2:!1}}render(){return r()(a.Fragment,{},void 0,this.state.copied?r()(f.a,{className:"mb-4",severity:"success"},void 0,r()("span",{},void 0,"The input had the ",r()("b",{},void 0,this.state.value)," content which was copied successfully!")):null,this.state.copied2?r()(f.a,{className:"mb-4",severity:"warning"},void 0,r()("span",{},void 0,"The input had the ",r()("b",{},void 0,this.state.value2)," content which was copied successfully!")):null,r()(s.a,{container:!0,spacing:4},void 0,r()(s.a,{item:!0,xs:12,md:6},void 0,v,r()(u.a,{className:"w-100",variant:"outlined"},void 0,r()(l.a,{variant:"outlined",value:this.state.value,fullWidth:!0,onChange:e=>{var{target:{value:t}}=e;return this.setState({value:t,copied:!1})},InputProps:{endAdornment:r()(p.a,{position:"end"},void 0,r()(y.CopyToClipboard,{text:this.state.value,onCopy:()=>this.setState({copied:!0})},void 0,r()(d.a,{size:"small",color:"primary"},void 0,r()(c.a,{icon:["fas","save"]}))))}}))),b))}}var h=o(187),g=r()("div",{className:"font-weight-bold font-size-lg mb-3"},void 0,"Content source"),w=r()(h.a,{variant:"contained",color:"secondary"},void 0,"Copy content from textarea"),C=r()(s.a,{item:!0,xs:12,md:6},void 0,r()("div",{className:"font-weight-bold font-size-lg mb-3"},void 0,"Test copy"),r()(f.a,{className:"mb-4",severity:"warning"},void 0,'Paste here the content you copied when you clicked the "Copy" button.'),r()(l.a,{label:"Clipboard test",multiline:!0,rows:"4",fullWidth:!0,defaultValue:"Paste here what you copied!",variant:"outlined"}));class x extends a.Component{constructor(){super(...arguments),this.state={value:"Dummy content to be copied on button click! Write something else here...",copied:!1}}render(){return r()(a.Fragment,{},void 0,this.state.copied?r()(f.a,{className:"mb-4",severity:"success"},void 0,r()("span",{},void 0,"The input had the ",r()("b",{},void 0,this.state.value)," content which was copied successfully!")):null,r()(s.a,{container:!0,spacing:4},void 0,r()(s.a,{item:!0,xs:12,md:6},void 0,g,r()(l.a,{label:"Textarea Copy",multiline:!0,rows:"4",fullWidth:!0,onChange:e=>{var{target:{value:t}}=e;return this.setState({value:t,copied:!1})},defaultValue:this.state.value,variant:"outlined"}),r()("div",{className:"text-center mt-4"},void 0,r()(y.CopyToClipboard,{text:this.state.value,onCopy:()=>this.setState({copied:!0})},void 0,w))),C))}}var O=r()(a.Fragment,{},void 0,r()(i.e,{titleHeading:"Clipboard",titleDescription:"You can copy/paste text with this great form widget."}),r()(i.b,{sectionHeading:"Input"},void 0,r()(m,{})),r()(i.b,{sectionHeading:"Textarea"},void 0,r()(x,{})));function P(){return O}},827:function(e,t,o){"use strict";var n=o(1031).CopyToClipboard;n.CopyToClipboard=n,e.exports=n}}]);
//# sourceMappingURL=25.js.map