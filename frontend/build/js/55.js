(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1128:function(e,t,r){var n;e.exports=(n=r(1),function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(s).default}});var l=n(r(11)),f=n(r(9)),c=n(r(5)),p=r(2),h=function(e){function t(){var e;o(this,t);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,c.default)(i({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,a={guide:t.guide,placeholderChar:t.placeholderChar,showMask:t.showMask},i="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,p.isNil)(n)&&!(0,p.isNil)(e.pipe)||!(0,p.isNil)(n)&&(0,p.isNil)(e.pipe),u=o.toString()!==e.mask.toString(),s=Object.keys(a).some((function(t){return a[t]!==e[t]}))||u||i;(r!==this.inputElement.value||s)&&this.initTextMask()}},{key:"render",value:function(){var e=this.props,t=e.render,r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,t(this.setRef,i({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(l.default.PureComponent);t.default=h,h.propTypes={mask:f.default.oneOfType([f.default.array,f.default.func,f.default.bool,f.default.shape({mask:f.default.oneOfType([f.default.array,f.default.func]),pipe:f.default.func})]).isRequired,guide:f.default.bool,value:f.default.oneOfType([f.default.string,f.default.number]),pipe:f.default.func,placeholderChar:f.default.string,keepCharPositions:f.default.bool,showMask:f.default.bool},h.defaultProps={render:function(e,t){return l.default.createElement("input",i({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isArray=n,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return null==e},t.processCaretTraps=function(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(i));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}};var o=r(1),a=[],i="[]"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,o.isArray)(t)){if((void 0===t?"undefined":n(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,o.processCaretTraps)(t).maskWithoutCaretTraps}var s=r.guide,l=void 0===s||s,f=r.previousConformedValue,c=void 0===f?u:f,p=r.placeholderChar,h=void 0===p?a.placeholderChar:p,d=r.placeholder,v=void 0===d?(0,o.convertMaskToPlaceholder)(t,h):d,g=r.currentCaretPosition,m=r.keepCharPositions,y=!1===l&&void 0!==c,b=e.length,S=c.length,k=v.length,x=t.length,w=b-S,O=w>0,P=g+(O?-w:0),C=P+Math.abs(w);if(!0===m&&!O){for(var T=u,E=P;E<C;E++)v[E]===h&&(T+=h);e=e.slice(0,P)+T+e.slice(P,b)}for(var N=e.split(u).map((function(e,t){return{char:e,isNew:t>=P&&t<C}})),_=b-1;_>=0;_--){var V=N[_].char;if(V!==h){var j=_>=P&&S===x;V===v[j?_-w:_]&&N.splice(_,1)}}var M=u,R=!1;e:for(var F=0;F<k;F++){var A=v[F];if(A===h){if(N.length>0)for(;N.length>0;){var D=N.shift(),I=D.char,B=D.isNew;if(I===h&&!0!==y){M+=h;continue e}if(t[F].test(I)){if(!0===m&&!1!==B&&c!==u&&!1!==l&&O){for(var U=N.length,L=null,K=0;K<U;K++){var W=N[K];if(W.char!==h&&!1===W.isNew)break;if(W.char===h){L=K;break}}null!==L?(M+=I,N.splice(L,1)):F--}else M+=I;continue e}R=!0}!1===y&&(M+=v.substr(F,k));break}M+=A}if(y&&!1===O){for(var q=null,G=0;G<M.length;G++)v[G]===h&&(q=G);M=null!==q?M.substr(0,q+1):u}return{conformedValue:M,meta:{someCharsRejected:R}}};var o=r(2),a=r(1),i=[],u=""},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,o=void 0===t?n:t,a=e.previousPlaceholder,i=void 0===a?n:a,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,h=e.indexesOfPipedChars,d=void 0===h?r:h,v=e.caretTrapIndexes,g=void 0===v?r:v;if(0===s||!f.length)return 0;var m=f.length,y=o.length,b=p.length,S=l.length,k=m-y,x=k>0;if(k>1&&!x&&0!==y)return s;var w=0,O=void 0,P=void 0;if(!x||o!==l&&l!==p){var C=l.toLowerCase(),T=f.toLowerCase().substr(0,s).split(n).filter((function(e){return-1!==C.indexOf(e)}));P=T[T.length-1];var E=i.substr(0,T.length).split(n).filter((function(e){return e!==c})).length,N=p.substr(0,T.length).split(n).filter((function(e){return e!==c})).length!==E,_=void 0!==i[T.length-1]&&void 0!==p[T.length-2]&&i[T.length-1]!==c&&i[T.length-1]!==p[T.length-1]&&i[T.length-1]===p[T.length-2];!x&&(N||_)&&E>0&&p.indexOf(P)>-1&&void 0!==f[s]&&(O=!0,P=f[s]);for(var V=d.map((function(e){return C[e]})).filter((function(e){return e===P})).length,j=T.filter((function(e){return e===P})).length,M=p.substr(0,p.indexOf(c)).split(n).filter((function(e,t){return e===P&&f[t]!==e})).length+j+V+(O?1:0),R=0,F=0;F<S&&(w=F+1,C[F]===P&&R++,!(R>=M));F++);}else w=s-k;if(x){for(var A=w,D=w;D<=b;D++)if(p[D]===c&&(A=D),p[D]===c||-1!==g.indexOf(D)||D===b)return A}else if(O){for(var I=w-1;I>=0;I--)if(l[I]===P||-1!==g.indexOf(I)||0===I)return I}else for(var B=w;B>=0;B--)if(p[B-1]===c||-1!==g.indexOf(B)||0===B)return B};var r=[],n=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){document.activeElement===e&&(v?g((function(){return e.setSelectionRange(t,t,h)}),0):e.setSelectionRange(t,t,h))}function a(e){if((0,f.isString)(e))return e;if((0,f.isNumber)(e))return String(e);if(null==e)return p;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,h=n.inputElement,v=n.mask,g=n.guide,m=n.pipe,y=n.placeholderChar,b=void 0===y?c.placeholderChar:y,S=n.keepCharPositions,k=void 0!==S&&S,x=n.showMask,w=void 0!==x&&x;if(void 0===r&&(r=h.value),r!==t.previousConformedValue){(void 0===v?"undefined":u(v))===d&&void 0!==v.pipe&&void 0!==v.mask&&(m=v.pipe,v=v.mask);var O=void 0,P=void 0;if(v instanceof Array&&(O=(0,f.convertMaskToPlaceholder)(v,b)),!1!==v){var C=a(r),T=h.selectionEnd,E=t.previousConformedValue,N=t.previousPlaceholder,_=void 0;if((void 0===v?"undefined":u(v))===c.strFunction){if(!1===(P=v(C,{currentCaretPosition:T,previousConformedValue:E,placeholderChar:b})))return;var V=(0,f.processCaretTraps)(P),j=V.maskWithoutCaretTraps,M=V.indexes;P=j,_=M,O=(0,f.convertMaskToPlaceholder)(P,b)}else P=v;var R={previousConformedValue:E,guide:g,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:T,keepCharPositions:k},F=(0,l.default)(C,P,R),A=F.conformedValue,D=(void 0===m?"undefined":u(m))===c.strFunction,I={};D&&(!1===(I=m(A,i({rawValue:C},R)))?I={value:E,rejected:!0}:(0,f.isString)(I)&&(I={value:I}));var B=D?I.value:A,U=(0,s.default)({previousConformedValue:E,previousPlaceholder:N,conformedValue:B,placeholder:O,rawValue:C,currentCaretPosition:T,placeholderChar:b,indexesOfPipedChars:I.indexesOfPipedChars,caretTrapIndexes:_}),L=B===O&&0===U,K=w?O:p,W=L?K:B;t.previousConformedValue=W,t.previousPlaceholder=O,h.value!==W&&(h.value=W,o(h,U))}}}}};var s=n(r(4)),l=n(r(3)),f=r(2),c=r(1),p="",h="none",d="object",v="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t,r,o,a,i,u,s){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,o,a,i,u,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return f[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,r){"use strict";var n=r(6),o=r(7),a=r(10);e.exports=function(){function e(e,t,r,n,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&Symbol.iterator,e.exports=r(8)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=n}]))},1129:function(e,t,r){"use strict";var n=r(1),o=r.n(n);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){}function c(){}c.resetWarningCache=f;var p=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,r,n,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:f};return r.PropTypes=r,r}()}));function h(){}function d(e){return!!(e||"").match(/\d/)}function v(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function g(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r="-"===e[0],n=r&&t,o=(e=e.replace("-","")).split("."),a=o[0],i=o[1]||"";return{beforeDecimal:a,afterDecimal:i,hasNagation:r,addNegation:n}}function m(e,t,r){for(var n="",o=r?"0":"",a=0;a<=t-1;a++)n+=e[a]||o;return n}function y(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function b(e,t,r){return Math.min(Math.max(e,t),r)}function S(e){return Math.max(e.selectionStart,e.selectionEnd)}var k={thousandSeparator:p.oneOfType([p.string,p.oneOf([!0])]),decimalSeparator:p.string,allowedDecimalSeparators:p.arrayOf(p.string),thousandsGroupStyle:p.oneOf(["thousand","lakh","wan"]),decimalScale:p.number,fixedDecimalScale:p.bool,displayType:p.oneOf(["input","text"]),prefix:p.string,suffix:p.string,format:p.oneOfType([p.string,p.func]),removeFormatting:p.func,mask:p.oneOfType([p.string,p.arrayOf(p.string)]),value:p.oneOfType([p.number,p.string]),defaultValue:p.oneOfType([p.number,p.string]),isNumericString:p.bool,customInput:p.elementType,allowNegative:p.bool,allowEmptyFormatting:p.bool,allowLeadingZeros:p.bool,onValueChange:p.func,onKeyDown:p.func,onMouseUp:p.func,onChange:p.func,onFocus:p.func,onBlur:p.func,type:p.oneOf(["text","tel","password"]),isAllowed:p.func,renderText:p.func,getInputRef:p.func},x={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:h,onChange:h,onKeyDown:h,onMouseUp:h,onFocus:h,onBlur:h,isAllowed:function(){return!0}},w=function(e){function t(e){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=u(t).call(this,e))||"object"!=typeof o&&"function"!=typeof o?l(n):o;var a=e.defaultValue;r.validateProps();var i=r.formatValueProp(a);return r.state={value:i,numAsString:r.removeFormatting(i)},r.selectionBeforeInput={selectionStart:0,selectionEnd:0},r.onChange=r.onChange.bind(l(l(r))),r.onKeyDown=r.onKeyDown.bind(l(l(r))),r.onMouseUp=r.onMouseUp.bind(l(l(r))),r.onFocus=r.onFocus.bind(l(l(r))),r.onBlur=r.onBlur.bind(l(l(r))),r}var r,n,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,r=this.state,n=this.focusedElm,o=r.value,a=r.numAsString,i=void 0===a?"":a;if(e!==t){this.validateProps();var u=this.formatNumString(i),s=void 0===t.value?u:this.formatValueProp(),l=this.removeFormatting(s),f=parseFloat(l),c=parseFloat(i);(isNaN(f)&&isNaN(c)||f===c)&&u===o&&(null!==n||s===o)||this.updateValue({formattedValue:s,numAsString:l,input:n})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,r=this.getSeparators(),n=r.decimalSeparator,o=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var i=(e=(e.match(o)||[]).join("").replace(n,".")).indexOf(".");return-1!==i&&(e="".concat(e.substring(0,i),".").concat(e.substring(i+1,e.length).replace(new RegExp(v(n),"g"),""))),a&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var r=this.props,n=r.format,o=r.decimalScale,a=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!a||0===o||t||n?"":"|"+v(a)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props,r=t.thousandSeparator,n=t.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[e,"."]),{decimalSeparator:e,thousandSeparator:r,allowedDecimalSeparators:n}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,r=void 0===t?" ":t;return"string"==typeof r?r:r[e]||" "}},{key:"getValueObject",value:function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),r=t.decimalSeparator,n=t.thousandSeparator;if(r===n)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(n,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(r," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,r){y(e,t),setTimeout((function(){e.value===r&&y(e,t)}),0)}},{key:"correctCaretPosition",value:function(e,t,r){var n=this.props,o=n.prefix,a=n.suffix,i=n.format;if(""===e)return 0;if(t=b(t,0,e.length),!i){var u="-"===e[0];return b(t,o.length+(u?1:0),e.length-a.length)}if("function"==typeof i)return t;if("#"===i[t]&&d(e[t]))return t;if("#"===i[t-1]&&d(e[t-1]))return t;var s=i.indexOf("#");t=b(t,s,i.lastIndexOf("#")+1);for(var l=i.substring(t,i.length).indexOf("#"),f=t,c=t+(-1===l?0:l);f>s&&("#"!==i[f]||!d(e[f]));)f-=1;return!d(e[c])||"left"===r&&t!==s||t-f<c-t?d(e[f])?f+1:f:c}},{key:"getCaretPosition",value:function(e,t,r){var n,o,a=this.props.format,i=this.state.value,u=this.getNumberRegex(!0),s=(e.match(u)||[]).join(""),l=(t.match(u)||[]).join("");for(n=0,o=0;o<r;o++){var f=e[o]||"",c=t[n]||"";if((f.match(u)||f===c)&&("0"!==f||!c.match(u)||"0"===c||s.length===l.length)){for(;f!==t[n]&&n<t.length;)n++;n++}}return"string"!=typeof a||i||(n=t.length),n=this.correctCaretPosition(t,n)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,r=t.format,n=t.prefix,o=t.suffix;if(!r&&e){var a="-"===e[0];a&&(e=e.substring(1,e.length));var i=(e=n&&0===e.indexOf(n)?e.substring(n.length,e.length):e).lastIndexOf(o);e=o&&-1!==i&&i===e.length-o.length?e.substring(0,i):e,a&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),r=0,n="",o=0,a=t.length;o<=a;o++){var i=t[o]||"",u=o===a?e.length:e.indexOf(i,r);if(-1===u){n=e;break}n+=e.substring(r,u),r=u+i.length}return(n.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,r=t.format,n=t.removeFormatting;return e?(r?e="string"==typeof r?this.removePatternFormatting(e):"function"==typeof n?n(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,r=0,n=t.split(""),o=0,a=t.length;o<a;o++)"#"===t[o]&&(n[o]=e[r]||this.getMaskAtIndex(r),r+=1);return n.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,r=t.decimalScale,n=t.fixedDecimalScale,o=t.prefix,a=t.suffix,i=t.allowNegative,u=t.thousandsGroupStyle,s=this.getSeparators(),l=s.thousandSeparator,f=s.decimalSeparator,c=-1!==e.indexOf(".")||r&&n,p=g(e,i),h=p.beforeDecimal,d=p.afterDecimal,v=p.addNegation;return void 0!==r&&(d=m(d,r,n)),l&&(h=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),o=e.search(/[1-9]/);return o=-1===o?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(n,"$1"+t)}(h,l,u)),o&&(h=o+h),a&&(d+=a),v&&(h="-"+h),e=h+(c&&f||"")+d}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,r=t.format,n=t.allowEmptyFormatting,o=e;return o=""!==e||n?"-"!==e||r?"string"==typeof r?this.formatWithPattern(o):"function"==typeof r?r(o):this.formatAsNumber(o):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,r=t.format,n=t.decimalScale,o=t.fixedDecimalScale,a=t.allowEmptyFormatting,i=this.props,u=i.value,s=void 0===u?e:u,l=i.isNumericString,f=!s&&0!==s;return f&&a&&(s=""),f&&!a?"":("number"==typeof s&&(s=s.toString(),l=!0),"Infinity"===s&&l&&(s=""),l&&!r&&"number"==typeof n&&(s=function(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=-1!==e.indexOf(".")&&t,o=g(e),a=o.beforeDecimal,i=o.afterDecimal,u=o.hasNagation,s=parseFloat("0.".concat(i||"0")).toFixed(t).split("."),l=a.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),s[0]),f=m(s[1]||"",Math.min(t,i.length),r),c=n?".":"";return"".concat(u?"-":"").concat(l).concat(c).concat(f)}(s,n,o)),l?this.formatNumString(s):this.formatInput(s))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),o=r.test(e),a=n.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.format;return t||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var r=this.props,n=r.format,o=r.prefix,a=r.suffix,i=r.decimalScale,u=r.fixedDecimalScale,s=this.getSeparators().decimalSeparator;return"string"==typeof n&&"#"!==n[e]||!(n||!(e<o.length||e>=t.length-a.length||i&&u&&t[e]===s))}},{key:"checkIfFormatGotDeleted",value:function(e,t,r){for(var n=e;n<t;n++)if(this.isCharacterAFormat(n,r))return!0;return!1}},{key:"correctInputValue",value:function(e,t,r){var n=this.props,o=n.format,a=n.allowNegative,i=n.prefix,u=n.suffix,s=this.getSeparators(),l=s.allowedDecimalSeparators,f=s.decimalSeparator,c=this.state.numAsString||"",p=this.selectionBeforeInput,h=p.selectionStart,d=p.selectionEnd,v=function(e,t){for(var r=0,n=0,o=e.length,a=t.length;e[r]===t[r]&&r<o;)r++;for(;e[o-1-n]===t[a-1-n]&&a-n>r&&o-n>r;)n++;return{start:r,end:o-n}}(t,r),m=v.start,y=v.end;if(!o&&m===y&&-1!==l.indexOf(r[h]))return r.substr(0,h)+f+r.substr(h+1,r.length);var b=o?0:i.length,S=t.length-(o?0:u.length);if(r.length>t.length||!r.length||m===y||0===h&&d===t.length||h===b&&d===S)return r;if(this.checkIfFormatGotDeleted(m,y,t)&&(r=t),!o){var k=this.removeFormatting(r),x=g(k,a),w=x.beforeDecimal,O=x.afterDecimal,P=x.addNegation,C=e<r.indexOf(f)+1;if(k.length<c.length&&C&&""===w&&!parseFloat(O))return P?"-":""}return r}},{key:"updateValue",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n=e.formattedValue,o=e.input,a=e.numAsString,i=e.caretPos,u=this.props.onValueChange,s=this.state.value;if(o){if(!i){var l=e.inputValue||o.value,f=S(o);i=this.getCaretPosition(l,n,f)}o.value=n,this.setPatchedCaretPosition(o,i,n)}void 0===a&&(a=this.removeFormatting(n)),n!==s?this.setState({value:n,numAsString:a},(function(){u(t.getValueObject(n,a)),r()})):r()}},{key:"onChange",value:function(e){e.persist();var t=e.target,r=t.value,n=this.state,o=this.props,a=o.isAllowed,i=n.value||"",u=S(t);r=this.correctInputValue(u,i,r);var s=this.formatInput(r)||"",l=this.removeFormatting(s);a(this.getValueObject(s,l))||(s=i),this.updateValue({formattedValue:s,numAsString:l,inputValue:r,input:t},(function(){o.onChange(e)}))}},{key:"onBlur",value:function(e){var t=this.props,r=this.state,n=t.format,o=t.onBlur,a=t.allowLeadingZeros,i=r.numAsString,u=r.value;if(this.focusedElm=null,this.focusTimeout&&clearTimeout(this.focusTimeout),!n){a||(i=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",o=r[1]||"";return"".concat(t?"-":"").concat(n).concat(o?".".concat(o):"")}(i));var s=this.formatNumString(i);if(s!==u)return e.persist(),void this.updateValue({formattedValue:s,numAsString:i},(function(){o(e)}))}o(e)}},{key:"onKeyDown",value:function(e){var t,r=e.target,n=e.key,o=r.selectionStart,a=r.selectionEnd,i=r.value,u=void 0===i?"":i,s=this.props,l=s.decimalScale,f=s.fixedDecimalScale,c=s.prefix,p=s.suffix,h=s.format,d=s.onKeyDown,v=(s.onValueChange,void 0!==l&&f),g=this.getNumberRegex(!1,v),m=new RegExp("-"),y="string"==typeof h;if(this.selectionBeforeInput={selectionStart:o,selectionEnd:a},"ArrowLeft"===n||"Backspace"===n?t=o-1:"ArrowRight"===n?t=o+1:"Delete"===n&&(t=o),void 0!==t&&o===a){var b=t,S=y?h.indexOf("#"):c.length,k=y?h.lastIndexOf("#")+1:u.length-p.length;if("ArrowLeft"===n||"ArrowRight"===n){var x="ArrowLeft"===n?"left":"right";b=this.correctCaretPosition(u,t,x)}else if("Delete"!==n||g.test(u[t])||m.test(u[t])){if("Backspace"===n&&!g.test(u[t]))if(o<=S+1&&"-"===u[0]&&void 0===h){var w=u.substring(1);e.persist(),this.updateValue({formattedValue:w,caretPos:b,input:r})}else if(!m.test(u[t])){for(;!g.test(u[b-1])&&b>S;)b--;b=this.correctCaretPosition(u,b,"left")}}else for(;!g.test(u[b])&&b<k;)b++;(b!==t||t<S||t>k)&&(e.preventDefault(),this.setPatchedCaretPosition(r,b,u)),e.isUnitTestRun&&this.setPatchedCaretPosition(r,b,u),this.props.onKeyDown(e)}else d(e)}},{key:"onMouseUp",value:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,o=t.value,a=void 0===o?"":o;if(r===n){var i=this.correctCaretPosition(a,r);i!==r&&this.setPatchedCaretPosition(t,i,a)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var r=e.target,n=r.selectionStart,o=r.selectionEnd,a=r.value,i=void 0===a?"":a,u=t.correctCaretPosition(i,n);u===n||0===n&&o===i.length||t.setPatchedCaretPosition(r,u,i),t.props.onFocus(e)}),0)}},{key:"render",value:function(){var e,t,r,n=this.props,a=n.type,u=n.displayType,s=n.customInput,l=n.renderText,f=n.getInputRef,c=this.state.value,p=(e=this.props,t=k,r={},Object.keys(e).forEach((function(n){t[n]||(r[n]=e[n])})),r),h=i({},p,{type:a,value:c,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===u)return l?l(c)||null:o.a.createElement("span",i({},p,{ref:f}),c);if(s){var d=s;return o.a.createElement(d,i({},h,{ref:f}))}return o.a.createElement("input",i({},h,{ref:f}))}}])&&a(r.prototype,n),f&&a(r,f),t}(o.a.Component);w.propTypes=k,w.defaultProps=x,t.a=w}}]);
//# sourceMappingURL=55.js.map