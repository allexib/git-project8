(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{292:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__GiJyy",dialogsItems:"Dialogs_dialogsItems__rmcqk",active:"Dialogs_active__oHbQo",messages:"Dialogs_messages__3p1sD",message:"Dialogs_message__Gxipj"}},298:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),i=a(128),c=a(1),o=a(292),r=a.n(o),d=a(20),j=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{className:r.a.dialog+" "+r.a.active,children:Object(c.jsxs)(d.b,{to:s,children:[" ",e.name," "]})})},b=function(e){return Object(c.jsx)("div",{className:r.a.dialog,children:e.message})},l=a(11),u=a(90),g=a(129),m=a(33),O=a(57),h=Object(O.a)(50),f=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{component:m.b,name:"newMessageBody",validate:[O.b,h],placeholder:"Enter your message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send"})})]})})),x=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(c.jsx)(j,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(c.jsx)(b,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?Object(c.jsxs)("div",{className:r.a.dialogs,children:[Object(c.jsx)("div",{className:r.a.dialogsItems,children:a}),Object(c.jsx)("div",{className:r.a.messages,children:Object(c.jsx)("div",{children:t})}),Object(c.jsx)(f,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(c.jsx)(l.a,{to:"/login"})},p=a(16),v=a(5),_=a(35),y=a(36),k=a(39),D=a(38),M=function(e){return{isAuth:e.auth.isAuth}},w=a(9);s.default=Object(w.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){var s=function(s){Object(k.a)(t,s);var a=Object(D.a)(t);function t(){return Object(_.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(v.a)({},this.props)):Object(c.jsx)(l.a,{to:"/login"})}}]),t}(n.a.Component);return Object(p.b)(M)(s)}))(x)}}]);
//# sourceMappingURL=4.885ebf14.chunk.js.map