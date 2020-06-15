(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{150:function(e,t,n){e.exports=n(318)},155:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=(n(155),n(17)),c=n(18),s=n(21),u=n(19),m=n(23),p=n(10),d=n(32),h=n.n(d),f=n(319),g=n(323),E=n(320),v=n(327),b=n(328),y=n(329),w=function(e){var t=e.icon,n=e.text;return r.a.createElement(f.a,null,r.a.createElement(t),n)},O=function(e){return r.a.createElement(g.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.data,renderItem:function(e){return r.a.createElement(g.b.Item,{key:e.title,actions:[r.a.createElement(w,{icon:v.a,text:"156",key:"list-vertical-star-o"}),r.a.createElement(w,{icon:b.a,text:"156",key:"list-vertical-like-o"}),r.a.createElement(w,{icon:y.a,text:"2",key:"list-vertical-message"})],extra:r.a.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},r.a.createElement(g.b.Item.Meta,{avatar:r.a.createElement(E.a,{src:e.avatar}),title:r.a.createElement(m.b,{to:"articles/".concat(e.id)},e.title),description:e.description}),e.content)}})},k=n(322),S=n(325),T=n(97),j=k.a.Item,x=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{title:"",content:""}},e.handleFormSubmit=function(t,n,a){switch(t.preventDefault(),console.log(e.state.credentials),n){case"post":h.a.post("http://127.0.0.1:8000/api/articles",e.state.credentials).then((function(){e.props.resetState()})).then(console.log(e.state.credentials)).catch((function(e){return console.error(e)}));break;case"put":h.a.put("http://127.0.0.1:8000/api/articles/".concat(a),e.state.credentials).then((function(){e.props.resetState()})).then(console.log(e.state.credentials)).catch((function(e){return console.error(e)}));break;case"delete":h.a.delete("http://127.0.0.1:8000/api/articles/".concat(a),e.state.credentials).then((function(){e.props.resetState()})).then(console.log(e.state.credentials)).catch((function(e){return console.error(e)}))}},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k.a,{onSubmitCapture:function(t){return e.handleFormSubmit(t,e.props.requestType,e.props.articleID)}},r.a.createElement(j,{label:"Title"},r.a.createElement(S.a,{name:"title",type:"text",placeholder:"Enter a title",value:this.state.credentials.title,onChange:this.inputChanged})),r.a.createElement(j,{label:"Content"},r.a.createElement(S.a,{name:"content",type:"text",placeholder:"Enter some content",value:this.state.credentials.content,onChange:this.inputChanged})),r.a.createElement(j,null,r.a.createElement(T.a,{type:"primary",htmlType:"submit"},this.props.btnText))))}}]),n}(r.a.Component),A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={articles:[]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://127.0.0.1:8000/api/articles").then((function(t){e.setState({articles:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{data:this.state.articles}),r.a.createElement("br",null),r.a.createElement("h2",null,"Create an article"),r.a.createElement(x,{requestType:"post",articleID:null,btnText:"Create"}))}}]),n}(r.a.Component),C=n(324),I=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={article:{}},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.articleID;h.a.get("http://127.0.0.1:8000/api/articles/".concat(t)).then((function(t){e.setState({article:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{title:this.state.article.title},r.a.createElement("p",null,this.state.article.content)),r.a.createElement(x,{requestType:"put",articleID:this.props.match.params.articleID,btnText:"Update"}),r.a.createElement(T.a,{type:"danger",htmlType:"submit"},"Delete"))}}]),n}(r.a.Component),D=n(133),F=n(330),U=n(331),P=n(332),_=n(35),R=function(e){return{type:"AUTH_SUCCESS",token:e}},L=function(e){return{type:"AUTH_FAIL",error:e}},H=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},q=function(e){return function(t){setTimeout((function(){t(H())}),1e3*e)}},W=k.a.Item,M=r.a.createElement(F.a,{style:{fontSize:24},spin:!0}),N=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFinish=function(t){e.props.onAuth(t.username,t.password),console.log("Received values of form",t),e.props.history.push("/")},e.onFinishFailed=function(t){var n=t.errorMessage;"username"===t.values.username&&(console.log("Failed:",n),e.props.history.push("/login"))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=null;return this.props.error&&(e=r.a.createElement("p",null,this.props.error.message)),r.a.createElement("div",null,e,this.props.loading?r.a.createElement(D.a,{indicator:M}):r.a.createElement(k.a,{onFinish:this.onFinish,onFinishFailed:this.onFinishFailed},r.a.createElement(W,{name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(S.a,{prefix:r.a.createElement(U.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"})),r.a.createElement(W,{name:"password",rules:[{required:!0,message:"Password must not be less than 8",min:8}],hasFeedback:!0},r.a.createElement(S.a.Password,{prefix:r.a.createElement(P.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password"})),r.a.createElement(W,null,r.a.createElement(T.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Login"),"Or",r.a.createElement(m.c,{style:{marginRight:"10px"},to:"/signup/"}," ","Signup"))))}}]),n}(r.a.Component),z=Object(_.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,n){return e(function(e,t){return function(n){n({type:"AUTH_START"}),h.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),n(R(t)),n(q(3600))})).catch((function(e){n(L(e))}))}}(t,n))}}}))(N),X=n(333),B={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},G={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},J=k.a.Item,K=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){e.props.onAuth(t.username,t.email,t.password1,t.password2),e.props.history.push("/login"),console.log("Received values of form",t)},e.handleSubmitFailed=function(t){var n=t.errorFields;e.props.form.scrollToField(n[0].name)},e.onFinish=function(e){console.log("Received values of form: ",e)},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(k.a,Object.assign({},B,{name:"register",onFinish:this.handleSubmit,scrollToFirstError:!0}),r.a.createElement(J,{name:"username",label:"Username",rules:[{required:!0,message:"Please input your username!",whitespace:!0}]},r.a.createElement(S.a,{prefix:r.a.createElement(U.a,{style:{color:"rgba(0,0,0,.25)"}})})),r.a.createElement(J,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(S.a,{prefix:r.a.createElement(X.a,{style:{color:"rgba(0,0,0,.25)"}})})),r.a.createElement(J,{name:"password1",label:"Password",rules:[{required:!0,min:8,message:"Password must not be less than 8"}],hasFeedback:!0},r.a.createElement(S.a.Password,{prefix:r.a.createElement(P.a,{style:{color:"rgba(0,0,0,.25)"}})})),r.a.createElement(J,{name:"password2",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password1")!==n?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(S.a.Password,{prefix:r.a.createElement(P.a,{style:{color:"rgba(0,0,0,.25)"}})})),r.a.createElement(J,G,r.a.createElement(T.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Register"),"Or",r.a.createElement(m.c,{style:{marginRight:"10px"},to:"/login/"}," ","Login")))}}]),n}(r.a.Component),V=Object(_.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,n,a,r){return e(function(e,t,n,a){return function(r){r({type:"AUTH_START"}),h.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:n,password2:a}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),r(R(t)),r(q(3600))})).catch((function(e){r(L(e))}))}}(t,n,a,r))}}}))(K),Q=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:A}),r.a.createElement(p.a,{exact:!0,path:"/articles/:articleID/",component:I}),r.a.createElement(p.a,{exact:!0,path:"/login/",component:z}),r.a.createElement(p.a,{exact:!0,path:"/signup/",component:V}))},Z=(n(315),n(321)),$=n(96),Y=n(326),ee=Z.a.Header,te=Z.a.Content,ne=Z.a.Footer,ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(Z.a,{className:"layout"},r.a.createElement(ee,null,r.a.createElement("div",{className:"logo"}),r.a.createElement($.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},this.props.isAuthenticated?r.a.createElement($.a.Item,{key:"2",onClick:this.props.logout},"Logout"):r.a.createElement($.a.Item,{key:"2"},r.a.createElement(m.b,{to:"/login"},"Login")),r.a.createElement($.a.Item,{key:"1"},r.a.createElement(m.b,{to:"/"},"Posts")))),r.a.createElement(te,{style:{padding:"0 50px"}},r.a.createElement(Y.a,{style:{margin:"16px 0"}},r.a.createElement(Y.a.Item,null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement(Y.a.Item,null,r.a.createElement(m.b,{to:"/"},"List"))),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},this.props.children)),r.a.createElement(ne,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}}]),n}(r.a.Component),re=Object(p.e)(Object(_.b)(null,(function(e){return{logout:function(){return e(H())}}}))(ae)),oe=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(re,this.props,r.a.createElement(Q,null))))}}]),n}(a.Component),ie=Object(_.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(H());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(H()):(e(R(t)),e(q((n.getTime()-(new Date).getTime())/1e3)))}}))}}}))(oe),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=n(56),ue=n(147),me=n(98),pe=function(e,t){return Object(me.a)(Object(me.a)({},e),t)},de={token:null,error:null,loading:!1},he=function(e,t){return pe(e,{error:null,loading:!0})},fe=function(e,t){return pe(e,{token:t.token,error:null,loading:!1})},ge=function(e,t){return pe(e,{error:t.error,loading:!1})},Ee=function(e,t){return pe(e,{token:null})},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return he(e);case"AUTH_SUCCESS":return fe(e,t);case"AUTH_FAIL":return ge(e,t);case"AUTH_LOGOUT":return Ee(e);default:return e}},be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,ye=Object(se.d)(ve,be(Object(se.a)(ue.a))),we=r.a.createElement(_.a,{store:ye},r.a.createElement(ie,null));i.a.render(we,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[150,1,2]]]);
//# sourceMappingURL=main.b5fee416.chunk.js.map