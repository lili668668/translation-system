(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),i=n(156),u=n(76),l=n(154),s=n(45),d=n(38),m=n(146),f=n(149),h=n(148),p=n(157),b=n(150),v=n(155),g=n(153),E=n(71),j=n.n(E),O=n(32),y=n(35),w=n(22),C=function(){var e=Object(O.a)(),t=Object(y.a)();return a.a.createElement(m.a,{position:"static"},a.a.createElement(h.a,null,a.a.createElement(f.a,{component:"a",href:w.c,color:"inherit"},a.a.createElement(b.a,{variant:"h6",color:"inherit"},"\u591a\u570b\u8a9e\u7cfb\u7cfb\u7d71 360")),a.a.createElement(v.a,{display:"flex",flexGrow:1}),t&&a.a.createElement(p.a,{title:"\u767b\u51fa"},a.a.createElement(g.a,{color:"inherit",onClick:function(){return e.signOut()}},a.a.createElement(j.a,null)))))},I=n(37),P=n(72),x=n(77),k=n(73),G=n(78),S=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(x.a)(this,Object(k.a)(t).call(this,e))).state={hasError:!1},n}return Object(G.a)(t,e),Object(P.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e),console.log(t)}},{key:"render",value:function(){var e=this.props.errorPage;return this.state.hasError?a.a.createElement(e,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component),z=n(55),D=n(57),N=n.n(D),R=n(120),U=n(74),A=n.n(U),T=n(118),W=Object(R.a)(function(e){return{root:{minHeight:400},icon:{width:60,height:60},error:{color:e.palette.error.main},anchor:{color:e.palette.error.dark}}}),_=function(){var e=W();return a.a.createElement(T.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},a.a.createElement(A.a,{className:N()(e.icon,e.error)}),a.a.createElement(b.a,{className:e.error,variant:"body1"},"An unexpected error has occurred."),a.a.createElement(b.a,{className:e.error,variant:"body1"},"Please contact author: ",a.a.createElement("a",{href:"mailTo:lili668668@gmail.com",className:e.anchor},"lili668668@mgmail.com")))},B=n(48),F=n(23),H=n(65),J=n(54),Y=n.n(J),q=function(e){var t=e.component,n=Object(H.a)(e,["component"]),r=Y()().location,o=Object(y.a)();return a.a.createElement(F.Route,Object.assign({},n,{render:function(e){return null!==o?a.a.createElement(t,e):a.a.createElement(F.Redirect,{to:{pathname:w.d,search:"?redirectTo=".concat(r.pathname)}})}}))},K=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,289))}),L=Object(r.lazy)(function(){return n.e(9).then(n.bind(null,292))}),M=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(10),n.e(7)]).then(n.bind(null,290))}),$=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,286))}),Q=function(e){var t=e.topComponent,n=e.bottomComponent;return a.a.createElement(B.a,null,a.a.createElement(t,null),a.a.createElement(q,{path:w.c,exact:!0,component:K}),a.a.createElement(q,{path:w.a,exact:!0,component:M}),a.a.createElement(q,{path:w.e,exact:!0,component:$}),a.a.createElement(F.Route,{path:w.d,exact:!0,component:L}),a.a.createElement(n,null))};Q.defaultProps={topComponent:function(){return null},bottomComponent:function(){return null}};var V=Q,X=Object(u.a)(),Z=function(){return a.a.createElement("div",null,a.a.createElement(C,null),a.a.createElement(z.a,null))},ee=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null),a.a.createElement(s.b,null,a.a.createElement(d.b,null,a.a.createElement(l.a,{theme:X},a.a.createElement(S,{errorPage:_},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(Z,null)},a.a.createElement(V,{topComponent:C})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return u});var r="/",a="/login",o="/group/:id",c=function(e){var t=e.id;return"/group/".concat(t)},i="/group/:groupId/project/:projectId",u=function(e){var t=e.groupId,n=e.projectId;return"/group/".concat(t,"/project/").concat(n)}},32:function(e,t,n){"use strict";var r=n(0),a=n(45);t.a=function(){return Object(r.useContext)(a.a)}},35:function(e,t,n){"use strict";var r=n(0),a=n(38);t.a=function(){return Object(r.useContext)(a.a)}},38:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(47),a=n(53),o=n(0),c=n.n(o),i=n(32),u=c.a.createContext(null);t.b=function(e){var t=e.children,n=Object(i.a)(),l=Object(o.useState)(null),s=Object(a.a)(l,2),d=s[0],m=s[1];return n.auth.onAuthStateChanged(m),d&&n.refUser({uid:d.uid}).once("value").then(function(e){if(!e.exists()){var t=(new Date).toString(),a="".concat(d.uid,"_").concat(d.uid);n.refUser({uid:d.uid}).set({id:d.uid,createdTime:t,name:d.displayName,groups:Object(r.a)({},d.uid,t)}),n.refGroup({id:d.uid}).set({id:d.uid,createdTime:t,disableDelete:!0,disableRename:!0,permission:"private",name:"\u79c1\u4eba",users:Object(r.a)({},d.uid,t)}),n.refGroupUser({id:a}).set({id:a,groupId:d.uid,uid:d.uid,joinedTime:t})}}),c.a.createElement(u.Provider,{value:d},t)}},45:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(37),c=n(49),i=n.n(c),u={apiKey:"AIzaSyDwht_0YfRSYMGgjg3wdcprq8RDOW_hnzw",authDomain:"translation-system-17b08.firebaseapp.com",databaseURL:"https://translation-system-17b08.firebaseio.com",projectId:"translation-system-17b08",storageBucket:"translation-system-17b08.appspot.com",messagingSenderId:"747998424375",appId:"1:747998424375:web:bb07cd8223bf0362"},l=function e(){var t=this;Object(o.a)(this,e),this.signInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.signOut=function(){return t.auth.signOut()},this.refUsers=function(){return t.ref.child("/users")},this.refUser=function(e){var n=e.uid;return t.ref.child(function(e){var t=e.uid;return"".concat("/users","/").concat(t)}({uid:n}))},this.refGroups=function(){return t.ref.child("/groups")},this.refGroup=function(e){var n=e.id;return t.ref.child(function(e){var t=e.id;return"".concat("/groups","/").concat(t)}({id:n}))},this.refGroupUser=function(e){var n=e.id;return t.ref.child(function(e){var t=e.id;return"/group_user/".concat(t)}({id:n}))},this.refProjectContents=function(e){var n=e.id;return t.ref.child(function(e){var t=e.id;return"/project_contents/".concat(t)}({id:n}))},this.app=i.a.initializeApp(u),this.auth=this.app.auth(),this.googleProvider=new i.a.auth.GoogleAuthProvider,this.db=this.app.database(),this.ref=this.app.database().ref("/")};n.d(t,"a",function(){return s});var s=a.a.createContext(null),d=new l;t.b=function(e){var t=e.children;return a.a.createElement(s.Provider,{value:d},t)}},55:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(120),c=n(119),i=n(118),u=Object(o.a)(function(e){return{root:{minHeight:400}}});t.a=function(){var e=u();return a.a.createElement(i.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},a.a.createElement(c.a,{disableShrink:!0,color:"secondary"}))}},91:function(e,t,n){e.exports=n(116)}},[[91,3,4]]]);
//# sourceMappingURL=main.a9731816.chunk.js.map