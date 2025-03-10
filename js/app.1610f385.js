(function(){"use strict";var e={2249:function(e,n,t){t.d(n,{FA:function(){return v},FO:function(){return m},Hn:function(){return l},LD:function(){return w},Od:function(){return b},Td:function(){return F},Vm:function(){return C},Z8:function(){return p},fG:function(){return d},kw:function(){return f},wJ:function(){return c},wf:function(){return h}});t(4114);var o,r=t(7531),u=t(144),a=t(2821);(function(e){e["AccountHash"]="account_hash",e["PlayerHash"]="player_hash"})(o||(o={}));const i=(0,u.KR)(!1);async function c(){i.value||(await y(),i.value=!0)}const l=(0,u.KR)(),s="test.unturned.fun",f=`${s}:1080`,d=`https://${s}:1080`;function p(){r.A.push({name:"Home"})}function m(){r.A.push({name:"RoomCreate"})}function v(){r.A.push({name:"RoomList"})}function h(e){r.A.push({name:"RoomDetail",params:{id:e}})}function b(){r.A.push({name:"UserLogin"})}function g(e,n,t=31536e3,o){let r=location.hostname;if(o?.top&&r.split(".").length>=1){const e=r.split(".");e.shift(),r="."+e.join(".")}document.cookie=`${e}=${n}; path=/; max-age=${t};samesite=none; secure; domain=${r}`}function k(e){let n=location.hostname;if(n.split(".").length>=1){const e=n.split(".");e.shift(),n="."+e.join(".")}document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`,document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${n}`}async function y(){const e=await a.Sn.getUser();if(null===e)return l.value=void 0,void k("access_token");void 0!==l.value&&l.value.access_token===e.access_token||_(e),l.value=e}function _(e){const n=A();let t;void 0!==e.expires_at&&(t=e.expires_at-n),g("access_token",e.access_token,t,{top:!0})}async function w(e){await a.Sn.storeUser(e),y()}async function C(){await a.Sn.removeUser(),y()}const A=(e=new Date)=>Math.floor(e.getTime()/1e3);function F(){r.A.back()}},2821:function(e,n,t){t.d(n,{o3:function(){return f},Sn:function(){return c},Pm:function(){return l},gb:function(){return d},S6:function(){return s}});var o=t(9773);const r="test-app",u="openid email offline_access profile federated:id",a={authority:"https://sso.unturned.fun:1080",client_id:r,redirect_uri:`${window.location.origin}/callback`,client_secret:"ZXhhbXBsZS1hcHAtc2VjcmV0",scope:u,response_mode:"query",userStore:new o.O({store:window.localStorage})};var i=t(2249);const c=new o.$5(a);async function l(){await c.signinRedirect()}async function s(){return null!==await c.getUser()&&(await(0,i.Vm)(),!0)}var f;async function d(){const e=await c.signinCallback();return void 0===e?f.FAILURE:(await(0,i.LD)(e),f.OK)}(function(e){e[e["OK"]=0]="OK",e[e["FAILURE"]=1]="FAILURE"})(f||(f={}))},9931:function(e,n,t){var o=t(5130),r=t(6768),u=t(144),a=t(2249),i=t(47),c=(0,r.pM)({__name:"BaseControl",setup(e){return(e,n)=>{const t=(0,r.g2)("ElSpace");return(0,r.uX)(),(0,r.Wv)(t,null,{default:(0,r.k6)((()=>[(0,r.bF)((0,u.R1)(i.S2),{size:"small",type:"success",onClick:(0,u.R1)(a.Z8)},{default:(0,r.k6)((()=>n[0]||(n[0]=[(0,r.eW)("主页")]))),_:1},8,["onClick"])])),_:1})}}});const l=c;var s=l,f=t(4232),d=t(7477),p=t(8162),m=t(813),v=t(3966),h=t(2821);const b={style:{"font-size":"13px"}};var g=(0,r.pM)({__name:"BasePlayerInfo",setup(e){const n=(0,u.KR)(!1);return(e,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(v.A,{"-body":"退出登录成功",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,["modelValue"]),(0,r.Lk)("div",b,[(0,r.bF)(p.dW,{style:{"margin-right":"3px"}},{dropdown:(0,r.k6)((()=>[(0,r.bF)(p.Iy,null,{default:(0,r.k6)((()=>[(0,r.bF)(p.c6,{onClick:t[1]||(t[1]=e=>(0,u.R1)(h.Pm)())},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("登录")]))),_:1}),(0,r.bF)(p.c6,{onClick:t[2]||(t[2]=e=>(0,u.R1)(h.S6)().then((e=>n.value=e)))},{default:(0,r.k6)((()=>t[4]||(t[4]=[(0,r.eW)("退出登录")]))),_:1})])),_:1})])),default:(0,r.k6)((()=>[(0,r.bF)(m.tk,null,{default:(0,r.k6)((()=>[(0,r.bF)((0,u.R1)(d.B5R))])),_:1})])),_:1}),(0,r.Lk)("a",null,(0,f.v_)((0,u.R1)(a.Hn)?.profile.name??"未登录"),1)])],64))}});const k=g;var y=k,_=(0,r.pM)({__name:"HeaderView",setup(e){return(e,n)=>{const t=(0,r.g2)("ElCol"),o=(0,r.g2)("ElRow");return(0,r.uX)(),(0,r.Wv)(o,{justify:"space-between"},{default:(0,r.k6)((()=>[(0,r.bF)(t,{span:1},{default:(0,r.k6)((()=>[(0,r.bF)(s)])),_:1}),(0,r.bF)(t,{span:2},{default:(0,r.k6)((()=>[(0,r.bF)(y)])),_:1})])),_:1})}}});const w=_;var C=w,A=(0,r.pM)({__name:"App",setup(e){async function n(){}return(0,r.sV)((async()=>{await(0,a.wJ)(),n()})),(e,n)=>{const t=(0,r.g2)("ElHeader"),o=(0,r.g2)("RouterView"),u=(0,r.g2)("ElMain"),a=(0,r.g2)("ElContainer");return(0,r.uX)(),(0,r.Wv)(a,null,{default:(0,r.k6)((()=>[(0,r.bF)(t,{style:{height:"auto"}},{default:(0,r.k6)((()=>[(0,r.bF)(C)])),_:1}),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(o)])),_:1})])),_:1})}}});const F=A;var E=F,R=(t(4188),t(3334)),S=t(7531);const O=(0,o.Ef)(E);O.use(S.A),O.use(R.A),O.mount("#app")},7531:function(e,n,t){t.d(n,{A:function(){return _}});var o=t(1387),r=t(6768),u=t(144),a=t(2249),i=t(5583),c=t(47),l=(0,r.pM)({__name:"HomeView",setup(e){return(e,n)=>{const t=(0,r.g2)("ElContainer");return(0,r.uX)(),(0,r.Wv)(t,null,{default:(0,r.k6)((()=>[(0,r.bF)((0,u.R1)(i.sI),{direction:"vertical"},{default:(0,r.k6)((()=>[(0,r.bF)((0,u.R1)(c.S2),{type:"primary",size:"large",onClick:(0,u.R1)(a.FO)},{default:(0,r.k6)((()=>n[0]||(n[0]=[(0,r.eW)("创建房间")]))),_:1},8,["onClick"]),(0,r.bF)((0,u.R1)(c.S2),{type:"primary",size:"large",onClick:(0,u.R1)(a.FA)},{default:(0,r.k6)((()=>n[1]||(n[1]=[(0,r.eW)("加入游戏")]))),_:1},8,["onClick"])])),_:1})])),_:1})}}});const s=l;var f=s;const d=()=>Promise.all([t.e(638),t.e(137)]).then(t.bind(t,8137)),p=()=>Promise.all([t.e(638),t.e(785)]).then(t.bind(t,4785)),m=()=>t.e(827).then(t.bind(t,2827)),v=()=>t.e(700).then(t.bind(t,700)),h=()=>t.e(300).then(t.bind(t,8300)),b=()=>Promise.all([t.e(638),t.e(836)]).then(t.bind(t,7836)),g=()=>t.e(287).then(t.bind(t,3287)),k=[{path:"/",name:"Home",component:f},{path:"/rooms/create",name:"RoomCreate",component:b},{path:"/rooms",name:"RoomList",component:d},{path:"/rooms/:id",name:"RoomDetail",component:p},{path:"/user/login",name:"UserLogin",component:m},{path:"/user/logout",name:"UserLogout",component:h},{path:"/user/:id",name:"UserDetail",component:v,children:[]},{path:"/callback",name:"OIDCCallback",component:g}],y=(0,o.aE)({history:(0,o.LA)(),routes:k});var _=y},3966:function(e,n,t){t.d(n,{A:function(){return c}});var o=t(6768),r=t(4232),u=t(144),a=(0,o.pM)({__name:"BaseDialog",props:(0,o.zz)({Body:{type:String,required:!0},EnterAction:{type:Function},CloseAction:{type:Function,default:function(){}},Cancel:{type:Boolean}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=e,t=(0,o.fn)(e,"modelValue");if(n.CloseAction){const e=(0,u.KR)(!1);(0,o.nT)((()=>{t.value&&!e.value&&(e.value=!0),!t.value&&e.value&&n.CloseAction()}))}return(n,u)=>{const a=(0,o.g2)("ElButton"),i=(0,o.g2)("ElDialog");return(0,o.uX)(),(0,o.Wv)(i,{title:"提示",modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=e=>t.value=e)},{footer:(0,o.k6)((()=>[(0,o.bF)(a,{onClick:u[0]||(u[0]=n=>e.EnterAction?e.EnterAction():t.value=!1)},{default:(0,o.k6)((()=>u[3]||(u[3]=[(0,o.eW)("确认")]))),_:1}),e.Cancel?((0,o.uX)(),(0,o.Wv)(a,{key:0,onClick:u[1]||(u[1]=e=>t.value=!1)},{default:(0,o.k6)((()=>u[4]||(u[4]=[(0,o.eW)("取消")]))),_:1})):(0,o.Q3)("",!0)])),default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,r.v_)(e.Body),1)])),_:1},8,["modelValue"])}}});const i=a;var c=i}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return e[o].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var i=!0,c=0;c<o.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{137:"6f3be21c",287:"e9e90579",300:"9d4e3813",638:"f15fcb1d",700:"203bdce9",785:"4ca810ff",827:"18e19514",836:"4cf91465"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".f64434c3.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="uno-web:";t.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+u){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=o),e[o]=[r];var d=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,u){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var o=t&&t.type,i=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,a.parentNode&&a.parentNode.removeChild(a),u(c)}};return a.onerror=a.onload=i,a.href=n,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===e||u===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],u=r.getAttribute("data-href");if(u===e||u===n)return r}},o=function(o){return new Promise((function(r,u){var a=t.miniCssF(o),i=t.p+a;if(n(a,i))return r();e(o,i,null,r,u)}))},r={524:0};t.f.miniCss=function(e,n){var t={785:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=u);var a=t.p+t.u(n),i=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,r[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var s=c(t)}for(n&&n(o);l<a.length;l++)u=a[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(s)},o=self["webpackChunkuno_web"]=self["webpackChunkuno_web"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(9931)}));o=t.O(o)})();
//# sourceMappingURL=app.1610f385.js.map