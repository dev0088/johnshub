(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1358:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return v}));var a=r(0),i=r.n(a),o=r(1),n=r(7),s=r(485),d=r(1135),c=r(859),u=r(1227),p=r.n(u),m=i()("div",{className:"divider my-4"});class l extends o.Component{constructor(){super(...arguments),this.state={editorState:c.EditorState.createEmpty()},this.onEditorStateChange=t=>{this.setState({editorState:t})}}render(){var{editorState:t}=this.state;return i()(o.Fragment,{},void 0,i()(d.Editor,{editorState:t,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange}),m,i()(s.a,{type:"textarea",disabled:!0,value:p()(Object(c.convertToRaw)(t.getCurrentContent()))}))}}var g=i()(o.Fragment,{},void 0,i()(n.e,{titleHeading:"WYSIWYG Editors",titleDescription:"Create beautiful suggestion inputs for React form elements."}),i()(n.b,{sectionHeading:"React Draft.js Editor"},void 0,i()(l,{})));function v(){return g}}}]);
//# sourceMappingURL=84.js.map