(this.webpackJsonpwhatsapp_clone=this.webpackJsonpwhatsapp_clone||[]).push([[0],{64:function(e,t,s){},71:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(21),c=s.n(i),r=s(30),l=s(5),o=s(3),j=s(41),u=s(42),d=s(54),p=s(53),h=(s(64),s(1)),g=function(e){var t=e.registerHandler,s=e.loginHandler,a=e.login,n=e.register,i=e.signupHandler,c=e.signupInputName,r=e.signupInputEmail,l=e.signupInputPassword,o=e.signupError,j=e.signinInputEmail,u=e.signinInputPassword,d=e.signInHandler,p=e.signinError,g=a&&"flip",b=n&&"extregtitle",m=a&&"extlogtitle";return Object(h.jsx)("div",{className:"loginRow",children:Object(h.jsx)("div",{className:"col loginCol",children:Object(h.jsx)("div",{className:"contentRow",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"regGrp",children:[Object(h.jsx)("h4",{className:"regtitle ".concat(b),onClick:t,children:"REGISTER"}),Object(h.jsx)("h4",{className:"logtitle ".concat(m),onClick:s,children:"LOGIN"})]}),Object(h.jsx)("div",{className:"flip-container",children:Object(h.jsxs)("div",{className:"flipper ".concat(g," "),id:"flipper",children:[n&&Object(h.jsxs)("div",{className:"register",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"NAME"}),Object(h.jsx)("input",{onChange:c,type:"text",id:"name"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email",children:"EMAIL"}),Object(h.jsx)("input",{onChange:r,type:"email",id:"email"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"password",children:"PASSWORD"}),Object(h.jsx)("input",{onChange:l,type:"password",id:"password"})]}),Object(h.jsx)("small",{className:"signupError",children:o}),Object(h.jsx)("button",{onClick:i,className:"regbutt",children:"SIGN UP"})]}),a&&Object(h.jsxs)("div",{className:"login",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email",children:"EMAIL"}),Object(h.jsx)("input",{onChange:j,type:"email",id:"email"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"password",children:"PASSWORD"}),Object(h.jsx)("input",{onChange:u,type:"password",id:"password"})]}),Object(h.jsx)("small",{className:"signinError",children:p}),Object(h.jsx)("button",{onClick:d,className:"logbutt",children:"SIGN IN"})]})]})})]})})})})},b=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).registerHandler=function(){var t=e.state.signup;t.email="",t.name="",t.password="",e.setState(Object(o.a)(Object(o.a)({},e.state),{},{register:!0,login:!1,input:t}))},e.loginHandler=function(){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{register:!1,login:!0})),fetch("https://api.npoint.io/5979890673a42680aee6").then((function(e){return e.json()})).then((function(t){return e.setState(Object(o.a)(Object(o.a)({},e.state),{},{usersDataList:t}))}))},e.signinInputEmail=function(t){var s=e.state.signin;s.email=t.target.value,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{input:s}))},e.signinInputPassword=function(t){var s=e.state.signin;s.password=t.target.value,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{input:s}))},e.signInHandler=function(){if(e.state.usersDataList.signup.length>0)for(var t=0;t<e.state.usersDataList.signup.length;t++)if(e.state.usersDataList.signup[t].email!==e.state.signin.email||e.state.usersDataList.signup[t].password!==e.state.signin.password)e.setState(Object(o.a)(Object(o.a)({},e.state),{},{signinError:"Enter Valid Credentials"}));else if(e.state.usersDataList.signup[t].email===e.state.signin.email){sessionStorage.setItem("name",JSON.stringify(e.state.usersDataList.signup[t].name)),sessionStorage.setItem("email",JSON.stringify(e.state.usersDataList.signup[t].email));var s=e.state.signin;s.email="",s.password="",e.setState(Object(o.a)(Object(o.a)({},e.state),{},{signinError:"",input:s})),e.props.history.push("/home")}},e.signupInputName=function(t){var s=e.state.signup;s.name=t.target.value,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{input:s}))},e.signupInputPassword=function(t){var s=e.state.signup;s.password=t.target.value,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{input:s}))},e.signupInputEmail=function(t){var s=e.state.signup;s.email=t.target.value,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{input:s}))},e.signupHandler=function(){if(e.state.signup.email&&e.state.signup.name&&e.state.signup.password){var t=e.state.usersDataList;t.signup[e.state.usersDataList.signup.length]=e.state.signup,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{usersDataList:t,signupError:"",login:!0,register:!1})),fetch("https://api.npoint.io/5979890673a42680aee6",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.usersDataList)})}else e.setState(Object(o.a)(Object(o.a)({},e.state),{},{signupError:"Fill all the fields"}))},e.state={usersDataList:"",login:!0,register:!1,signup:{name:"",email:"",password:""},signin:{email:"",password:""},signupError:"",signinError:""},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.npoint.io/5979890673a42680aee6").then((function(e){return e.json()})).then((function(t){return e.setState(Object(o.a)(Object(o.a)({},e.state),{},{usersDataList:t}))}))}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(g,{registerHandler:this.registerHandler,loginHandler:this.loginHandler,login:this.state.login,register:this.state.register,signupHandler:this.signupHandler,signupInputName:this.signupInputName,signupInputEmail:this.signupInputEmail,signupInputPassword:this.signupInputPassword,signupError:this.state.signupError,signinInputEmail:this.signinInputEmail,signinInputPassword:this.signinInputPassword,signinError:this.state.signinError,signInHandler:this.signInHandler})})}}]),s}(n.a.Component),m=Object(l.e)(b),O=s(24),x=s(48),v=s.n(x),f=(s(71),s(92)),N=s(90),w=s(47),S=s.n(w),I=s(34),E=s.n(I),H=s(35),C=s.n(H),M=function(e){return Object(h.jsxs)("div",{className:"sidenav",children:[Object(h.jsxs)("div",{className:"sidenav_header",children:[Object(h.jsx)("div",{className:"profilegrp col",children:Object(h.jsx)(f.a,{src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"})}),Object(h.jsxs)("div",{className:"iconsgrp col",children:[Object(h.jsx)(N.a,{children:Object(h.jsx)(S.a,{})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(v.a,{})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(E.a,{})})]})]}),Object(h.jsxs)("div",{className:"searchChats",children:[Object(h.jsx)("input",{className:"searchbar",placeholder:"search or start new chat"}),Object(h.jsx)(C.a,{className:"searchicon"})]}),Object(h.jsxs)("div",{className:"ProfileGrpRow",children:[Object(h.jsx)("div",{className:"ProfileGrpCol",children:Object(h.jsx)(f.a,{style:{height:"50px",width:"50px"},src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"})}),Object(h.jsxs)("div",{className:"ProfileGrpCol usergrp",children:[Object(h.jsx)("h3",{children:"Global Chat"}),Object(h.jsx)("p",{children:e.userlastmesage})]})]})]})},y=s(39),D=s.n(y),L=s(49),P=(s(74),s(91)),k=s(50),R=s.n(k),F=s(51),W=s.n(F),G=s(52),A=s.n(G),J=Object(l.e)((function(e){var t=Object(a.useState)(""),s=Object(O.a)(t,2),n=s[0],i=s[1],c=Object(a.useState)(""),r=Object(O.a)(c,2),l=r[0],j=r[1],u=Object(a.useState)({userMessage:"",userName:"",userEmail:""}),d=Object(O.a)(u,2),p=d[0],g=d[1],b=Object(a.useRef)(null);Object(a.useEffect)((function(){null===sessionStorage.getItem("email")||void 0===sessionStorage.getItem("email")?e.history.push("/"):(fetch("https://whatsappbasicclone.herokuapp.com/messages").then((function(e){return e.json()})).then((function(e){return i(e)})),g(Object(o.a)(Object(o.a)({},p),{},{userEmail:JSON.parse(sessionStorage.getItem("email")),userName:JSON.parse(sessionStorage.getItem("name"))})),b&&b.current.addEventListener("DOMNodeInserted",(function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight,behavior:"smooth"})})))}),[]),Object(a.useEffect)((function(){fetch("https://whatsappbasicclone.herokuapp.com/messages").then((function(e){return e.json()})).then((function(e){return i(e)})),j("")}),[l]);var m=function(){var e=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://whatsappbasicclone.herokuapp.com/addmessages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});case 2:g(Object(o.a)(Object(o.a)({},p),{},{userMessage:""})),j("some");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=JSON.parse(sessionStorage.getItem("email"));return Object(h.jsxs)("div",{className:"chat",children:[Object(h.jsxs)("div",{className:"chatHeaderRow",children:[Object(h.jsx)("div",{className:"chatHeaderCol",children:Object(h.jsx)(f.a,{style:{marginLeft:"20px"},src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"})}),Object(h.jsx)("div",{className:"chatHeaderCol",children:Object(h.jsx)("h3",{children:"Global Chat"})}),Object(h.jsxs)("div",{className:"chatHeaderCol icongrp",children:[Object(h.jsx)(P.a,{onClick:function(){sessionStorage.removeItem("name"),sessionStorage.removeItem("email"),e.history.push("/")},className:"logout",children:"Logout"}),Object(h.jsx)(N.a,{children:Object(h.jsx)(E.a,{})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(C.a,{className:"searchicon"})})]})]}),Object(h.jsx)("div",{ref:b,className:"chat_contentRow",children:function(){if(n&&n.length>0)return n.map((function(t){return sessionStorage.setItem("mess",t.userMessage),e.userlastmessage(t.userMessage),Object(h.jsx)("div",{className:"".concat(t.userEmail===x?"sendergrp chat_contentCol":"receivergrp chat_contentCol"),children:Object(h.jsx)("div",{className:"".concat(t.userEmail===x?"senderdiv":"receiverdiv"),children:Object(h.jsxs)("div",{className:"sendermessage receivermessage",children:[Object(h.jsx)("p",{className:"".concat(t.userEmail===x?"sendermessage element0":"receivermessage element1"),children:Object(h.jsx)("strong",{children:t.userName})}),Object(h.jsx)("p",{className:"".concat(t.userEmail===x?"sendermessage element2":"receivermessage element2"),children:t.userMessage})]})})},t._id)}))}()}),Object(h.jsx)("div",{className:"chatFooterRow",children:Object(h.jsxs)("div",{className:"chatFooterCol",children:[Object(h.jsx)(N.a,{children:Object(h.jsx)(R.a,{})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(W.a,{})}),Object(h.jsx)("input",{placeholder:"type a message",onChange:function(e){g(Object(o.a)(Object(o.a)({},p),{},{userMessage:e.target.value}))},className:"sendinput",value:p.userMessage}),Object(h.jsx)(N.a,{onClick:m,className:"",children:Object(h.jsx)("button",{className:"sendbutton",children:"Send"})}),Object(h.jsx)(N.a,{className:"mic",children:Object(h.jsx)(A.a,{})})]})})]})})),_=(s(75),function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),s=t[0],n=t[1];return Object(h.jsxs)("div",{className:"homeRow",children:[Object(h.jsx)("div",{className:"homeCol",children:Object(h.jsx)(M,{userlastmesage:s})}),Object(h.jsx)("div",{className:"homeCol",children:Object(h.jsx)(J,{userlastmessage:function(e){n(e)}})})]})}),T=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,component:m}),Object(h.jsx)(l.a,{path:"/home",exact:!0,component:_})]})};c.a.render(Object(h.jsx)(T,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.c3d45ff4.chunk.js.map