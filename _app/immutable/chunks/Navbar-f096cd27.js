import{a3 as Ze,S as W,i as J,s as Q,e as x,k as B,t as K,c as y,m as $,a as w,h as X,d as h,b as d,g as V,L as _,R as L,E as M,a2 as fe,T as Ce,n as ue,o as A,p as de,q as N,V as Ne,l as oe,P as ie,a4 as Ye,w as P,x as H,y as R,a5 as et,B as q,M as ht,j as xe,W as he,C as Le,a6 as gt,a7 as mt,I as pt,J as vt,K as _t,_ as z,$ as U,f as Z,a1 as tt,H as bt,N as Se,O as ae,U as st,Q as Oe,X as ke,v as kt,Z as wt}from"./index-b7066284.js";import{l as Fe,D as G,g as ye,V as ge,w as Ie,U as Ee,Q as xt,f as nt,p as se,I as lt,u as rt,y as we,a as yt,b as It}from"./firebase-d9cec40e.js";import{w as ee}from"./index-68a179b3.js";function Et(n){const e=n-1;return e*e*e+1}function Es(n,{delay:e=0,duration:s=400,easing:t=Ze}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:s,easing:t,css:r=>`opacity: ${r*l}`}}function ce(n,{delay:e=0,duration:s=400,easing:t=Et}={}){const l=getComputedStyle(n),r=+l.opacity,i=parseFloat(l.height),o=parseFloat(l.paddingTop),a=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),g=parseFloat(l.marginBottom),f=parseFloat(l.borderTopWidth),p=parseFloat(l.borderBottomWidth);return{delay:e,duration:s,easing:t,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*r};height: ${u*i}px;padding-top: ${u*o}px;padding-bottom: ${u*a}px;margin-top: ${u*c}px;margin-bottom: ${u*g}px;border-top-width: ${u*f}px;border-bottom-width: ${u*p}px;`}}const re=ee("initial"),Te=ee(!1),Ds=ee(!1),Me=ee("images/profile-images/user-default-logo.png"),Cs=ee(""),Ts=ee(!1),Vs=ee(!1);function Ae(){return ge(nt,"users")}function me(){return G(Ae(),ye().uid)}function ne(){return ge(Ae(),ye().uid,"folders")}async function _e(){return(await Fe(G(Ae(),ye().uid))).data()}async function it(){return(await _e()).currentFolder}async function pe(){return ge(ne(),await it(),"items")}async function Dt(n){return ge(ne(),n,"items")}async function Ns(){return await it()===""?void 0:(await Ie(Ee(await pe()))).docs.map(s=>s.data()).sort((s,t)=>s.date?t.date?s.date>t.date?1:s.date<t.date?-1:0:-1:1)}async function Ss(n,e){se(G(await pe(),n),{checked:e})}async function Ct(n,e=void 0){let s;e?s=ge(ne(),e,"items"):s=await pe();const t=n;let l;return t.docId?l=G(s,t.docId):(l=G(s),t.docId=l.id),we(l,t,{merge:!0}),t.docId}async function Tt(){return(await Ie(Ee(ne(),xt("creationDate")))).docs.map(e=>e.data())}async function Vt(){const n=await Tt();let e=[];return n.forEach(async s=>{if(s.docId){const l=(await Ie(Ee(await Dt(s.docId)))).docs.map(r=>r.data());e=[...e,...l]}}),e}async function ot(n){lt(G(await pe(),n))}async function Nt(n){return(await Fe(G(await pe(),n))).data()}async function Fs(n){const e=n;if(!e.docId){e.creationDate=rt.fromMillis(Date.now());const t=G(ne());return e.docId=t.id,await we(t,e,{merge:!0}),e.docId}const s=G(ne(),e.docId);return await we(s,e,{merge:!0}),e.docId}async function at(n){const e=me();n?await se(e,{token:n}):await se(e,{token:yt()})}async function be(){const n=me();return(await Fe(n)).data().token}async function As(n){const e=G(ge(nt,"users"),ye().uid);se(e,{currentFolder:n})}async function Bs(n){(await Ie(Ee(await pe()))).docs.forEach(s=>{ot(s.id)}),lt(G(ne(),n)),se(me(),{currentFolder:""})}async function $s(n){const e=me(),s=await _e(),{tags:t}=s;t.push(n),await se(e,{tags:t})}async function js(n){const e=me(),s=await _e();let{tags:t}=s;t=t.filter(l=>l.text!==n.text),await se(e,{tags:t})}async function zs(n,e){const s=await Nt(n);!s.docId||(await ot(s.docId),s.docId=void 0,await Ct(s,e))}async function Us(n){const e=me();await we(e,{avatar:n},{merge:!0})}async function St(){return(await _e()).avatar}const De="https://34bf-188-130-155-152.eu.ngrok.io/";async function Ls(n){const e=await be();if(e){const s={token:parseInt(e,10),id:n};await fetch(`${De}webhooks/deleteSchedule/`,{method:"DELETE",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}async function Ft(n,e,s){const t=await be();if(t){const r={time:n,taskID:e,description:s,token:parseInt(t,10)};await fetch(`${De}webhooks/schedule/`,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})}}const At=async n=>{if(!(await fetch(`${De}webhooks/verifyToken/${n}/`)).ok)throw Error("Invalid token");await at(n),(await Vt()).forEach(t=>{if((t.date?t.date.seconds*1e3-Date.now()>0:void 0)&&t.docId&&t.date&&!t.checked){const r=new Date(t.date.seconds*1e3).toISOString();Ft(r,t.docId,t.text)}})},Bt=async()=>{const n=await be();await fetch(`${De}webhooks/unlinkTelegram/${n}`)};function $t(n){let e,s,t,l,r,i;return{c(){e=x("input"),s=B(),t=x("label"),l=K("Toggle"),this.h()},l(o){e=y(o,"INPUT",{type:!0,id:!0,class:!0}),s=$(o),t=y(o,"LABEL",{for:!0,class:!0});var a=w(t);l=X(a,"Toggle"),a.forEach(h),this.h()},h(){e.checked=n[0],d(e,"type","checkbox"),d(e,"id","switch"),d(e,"class","svelte-1m60h7y"),d(t,"for","switch"),d(t,"class","svelte-1m60h7y")},m(o,a){V(o,e,a),V(o,s,a),V(o,t,a),_(t,l),r||(i=L(e,"change",n[1]),r=!0)},p(o,[a]){a&1&&(e.checked=o[0])},i:M,o:M,d(o){o&&h(e),o&&h(s),o&&h(t),r=!1,i()}}}function jt(n,e,s){let{checked:t=!1}=e;function l(r){fe.call(this,n,r)}return n.$$set=r=>{"checked"in r&&s(0,t=r.checked)},[t,l]}class zt extends W{constructor(e){super(),J(this,e,jt,$t,Q,{checked:0})}}function Ut(n){let e,s,t,l;return{c(){e=x("button"),s=K("Cancel"),this.h()},l(r){e=y(r,"BUTTON",{class:!0});var i=w(e);s=X(i,"Cancel"),i.forEach(h),this.h()},h(){d(e,"class","svelte-12wayv")},m(r,i){V(r,e,i),_(e,s),t||(l=L(e,"click",n[0]),t=!0)},p:M,i:M,o:M,d(r){r&&h(e),t=!1,l()}}}function Lt(n){function e(s){fe.call(this,n,s)}return[e]}class ct extends W{constructor(e){super(),J(this,e,Lt,Ut,Q,{})}}function Ot(n){let e,s,t,l;return{c(){e=x("button"),s=K("Save"),this.h()},l(r){e=y(r,"BUTTON",{class:!0});var i=w(e);s=X(i,"Save"),i.forEach(h),this.h()},h(){d(e,"class","svelte-kq9dwe")},m(r,i){V(r,e,i),_(e,s),t||(l=L(e,"click",n[0]),t=!0)},p:M,i:M,o:M,d(r){r&&h(e),t=!1,l()}}}function Mt(n){function e(s){fe.call(this,n,s)}return[e]}class ft extends W{constructor(e){super(),J(this,e,Mt,Ot,Q,{})}}function Pe(n){let e,s,t,l,r,i,o,a,c,g,f,p;const u=[Ht,Pt],b=[];function E(m,v){return m[2]?1:0}return a=E(n),c=b[a]=u[a](n),{c(){e=x("div"),s=x("div"),t=x("div"),l=x("p"),r=K("Notifications"),i=B(),o=x("div"),c.c(),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=w(e);s=y(v,"DIV",{class:!0});var k=w(s);t=y(k,"DIV",{class:!0});var C=w(t);l=y(C,"P",{});var F=w(l);r=X(F,"Notifications"),F.forEach(h),C.forEach(h),i=$(k),o=y(k,"DIV",{class:!0});var j=w(o);c.l(j),j.forEach(h),k.forEach(h),v.forEach(h),this.h()},h(){d(t,"class","label svelte-1xlnx46"),d(o,"class","body mt-8 svelte-1xlnx46"),d(s,"class","container select-none svelte-1xlnx46"),d(e,"class","back svelte-1xlnx46")},m(m,v){V(m,e,v),_(e,s),_(s,t),_(t,l),_(l,r),_(s,i),_(s,o),b[a].m(o,null),g=!0,f||(p=[L(s,"click",Ce(n[9])),L(e,"click",Ce(n[5]))],f=!0)},p(m,v){let k=a;a=E(m),a===k?b[a].p(m,v):(ue(),A(b[k],1,1,()=>{b[k]=null}),de(),c=b[a],c?c.p(m,v):(c=b[a]=u[a](m),c.c()),N(c,1),c.m(o,null))},i(m){g||(N(c),g=!0)},o(m){A(c),g=!1},d(m){m&&h(e),b[a].d(),f=!1,Ne(p)}}}function Pt(n){let e,s,t,l,r,i,o,a,c,g;function f(m,v){return m[3]?qt:Rt}let p=f(n),u=p(n);function b(m){n[11](m)}let E={};return n[3]!==void 0&&(E.checked=n[3]),t=new zt({props:E}),ie.push(()=>Ye(t,"checked",b)),t.$on("change",n[12]),o=new ft({}),o.$on("click",n[8]),c=new ct({}),c.$on("click",n[6]),{c(){e=x("div"),u.c(),s=B(),P(t.$$.fragment),r=B(),i=x("div"),P(o.$$.fragment),a=B(),P(c.$$.fragment),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=w(e);u.l(v),s=$(v),H(t.$$.fragment,v),v.forEach(h),r=$(m),i=y(m,"DIV",{class:!0});var k=w(i);H(o.$$.fragment,k),a=$(k),H(c.$$.fragment,k),k.forEach(h),this.h()},h(){d(e,"class","notification-status svelte-1xlnx46"),d(i,"class","buttons svelte-1xlnx46")},m(m,v){V(m,e,v),u.m(e,null),_(e,s),R(t,e,null),V(m,r,v),V(m,i,v),R(o,i,null),_(i,a),R(c,i,null),g=!0},p(m,v){p!==(p=f(m))&&(u.d(1),u=p(m),u&&(u.c(),u.m(e,s)));const k={};!l&&v&8&&(l=!0,k.checked=m[3],et(()=>l=!1)),t.$set(k)},i(m){g||(N(t.$$.fragment,m),N(o.$$.fragment,m),N(c.$$.fragment,m),g=!0)},o(m){A(t.$$.fragment,m),A(o.$$.fragment,m),A(c.$$.fragment,m),g=!1},d(m){m&&h(e),u.d(),q(t),m&&h(r),m&&h(i),q(o),q(c)}}}function Ht(n){let e,s,t,l,r,i,o,a,c,g,f,p;return o=new ft({}),o.$on("click",n[7]),c=new ct({}),c.$on("click",n[6]),{c(){e=x("img"),t=B(),l=x("input"),r=B(),i=x("div"),P(o.$$.fragment),a=B(),P(c.$$.fragment),this.h()},l(u){e=y(u,"IMG",{class:!0,src:!0,alt:!0}),t=$(u),l=y(u,"INPUT",{type:!0,placeholder:!0,class:!0}),r=$(u),i=y(u,"DIV",{class:!0});var b=w(i);H(o.$$.fragment,b),a=$(b),H(c.$$.fragment,b),b.forEach(h),this.h()},h(){d(e,"class","pulse cursor-pointer mt-3 mb-3 svelte-1xlnx46"),ht(e.src,s="/images/tg-bot.svg")||d(e,"src",s),d(e,"alt","tg-bot"),d(l,"type","text"),d(l,"placeholder","Enter code"),d(l,"class","svelte-1xlnx46"),d(i,"class","buttons svelte-1xlnx46")},m(u,b){V(u,e,b),V(u,t,b),V(u,l,b),n[10](l),V(u,r,b),V(u,i,b),R(o,i,null),_(i,a),R(c,i,null),g=!0,f||(p=L(e,"click",n[4]),f=!0)},p:M,i(u){g||(N(o.$$.fragment,u),N(c.$$.fragment,u),g=!0)},o(u){A(o.$$.fragment,u),A(c.$$.fragment,u),g=!1},d(u){u&&h(e),u&&h(t),u&&h(l),n[10](null),u&&h(r),u&&h(i),q(o),q(c),f=!1,p()}}}function Rt(n){let e;return{c(){e=K("Notification will be disabled")},l(s){e=X(s,"Notification will be disabled")},m(s,t){V(s,e,t)},d(s){s&&h(e)}}}function qt(n){let e;return{c(){e=K("Notification enabled")},l(s){e=X(s,"Notification enabled")},m(s,t){V(s,e,t)},d(s){s&&h(e)}}}function Wt(n){let e,s,t=n[0]&&Pe(n);return{c(){t&&t.c(),e=oe()},l(l){t&&t.l(l),e=oe()},m(l,r){t&&t.m(l,r),V(l,e,r),s=!0},p(l,[r]){l[0]?t?(t.p(l,r),r&1&&N(t,1)):(t=Pe(l),t.c(),N(t,1),t.m(e.parentNode,e)):t&&(ue(),A(t,1,1,()=>{t=null}),de())},i(l){s||(N(t),s=!0)},o(l){A(t),s=!1},d(l){t&&t.d(l),l&&h(e)}}}const Jt="https://t.me/inno_frontend_bot";function Qt(n,e,s){let{isVisible:t=!1}=e,l,r=!1,i=!0;const o=()=>{be().then(v=>{v===void 0?(s(3,i=!1),s(2,r=!1),Te.set(!1)):(s(3,i=!0),s(2,r=!0),Te.set(!0))})},a=()=>{window.open(Jt,"_blank")},c=()=>{s(0,t=!1)},g=()=>{s(0,t=!1),l&&s(1,l.value="",l)},f=async()=>{if(!l.value){l.focus();return}try{At(l.value),s(0,t=!1)}catch{s(1,l.value="",l),s(1,l.placeholder="Wrong token",l)}},p=async()=>{i||(await Bt(),await at(void 0)),s(0,t=!1)};function u(v){fe.call(this,n,v)}function b(v){ie[v?"unshift":"push"](()=>{l=v,s(1,l)})}function E(v){i=v,s(3,i)}const m=()=>(s(3,i=!i),i);return n.$$set=v=>{"isVisible"in v&&s(0,t=v.isVisible)},n.$$.update=()=>{n.$$.dirty&1&&o()},[t,l,r,i,a,c,g,f,p,u,b,E,m]}class Gt extends W{constructor(e){super(),J(this,e,Qt,Wt,Q,{isVisible:0})}}function Kt(n){let e,s,t,l,r,i,o;return{c(){e=x("div"),s=x("input"),t=B(),l=x("label"),r=K(n[1]),this.h()},l(a){e=y(a,"DIV",{class:!0});var c=w(e);s=y(c,"INPUT",{id:!0,type:!0,class:!0}),t=$(c),l=y(c,"LABEL",{for:!0,class:!0});var g=w(l);r=X(g,n[1]),g.forEach(h),c.forEach(h),this.h()},h(){d(s,"id","checkbox"),d(s,"type","checkbox"),s.__value="",s.value=s.__value,d(s,"class","w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 hover:cursor-pointer focus:ring-red-500focus:ring-2"),d(l,"for","checkbox"),d(l,"class","ml-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:cursor-pointer"),d(e,"class","flex items-center sm:my-3 sm:mx-8 mx-auto my-4")},m(a,c){V(a,e,c),_(e,s),s.checked=n[0],_(e,t),_(e,l),_(l,r),i||(o=[L(s,"change",n[3]),L(s,"change",n[4])],i=!0)},p(a,[c]){c&1&&(s.checked=a[0]),c&2&&xe(r,a[1])},i:M,o:M,d(a){a&&h(e),i=!1,Ne(o)}}}function Xt(n,e,s){let{text:t}=e,{checked:l=!1}=e;const r=he();function i(){l=this.checked,s(0,l)}const o=()=>r("checked",{checked:l});return n.$$set=a=>{"text"in a&&s(1,t=a.text),"checked"in a&&s(0,l=a.checked)},[l,t,r,i,o]}class Zt extends W{constructor(e){super(),J(this,e,Xt,Kt,Q,{text:1,checked:0})}}function He(n){return Object.prototype.toString.call(n)==="[object Date]"}function Ve(n,e){if(n===e||n!==n)return()=>n;const s=typeof n;if(s!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const t=e.map((l,r)=>Ve(n[r],l));return l=>t.map(r=>r(l))}if(s==="object"){if(!n||!e)throw new Error("Object cannot be null");if(He(n)&&He(e)){n=n.getTime(),e=e.getTime();const r=e-n;return i=>new Date(n+i*r)}const t=Object.keys(e),l={};return t.forEach(r=>{l[r]=Ve(n[r],e[r])}),r=>{const i={};return t.forEach(o=>{i[o]=l[o](r)}),i}}if(s==="number"){const t=e-n;return l=>n+l*t}throw new Error(`Cannot interpolate ${s} values`)}function ut(n,e={}){const s=ee(n);let t,l=n;function r(i,o){if(n==null)return s.set(n=i),Promise.resolve();l=i;let a=t,c=!1,{delay:g=0,duration:f=400,easing:p=Ze,interpolate:u=Ve}=Le(Le({},e),o);if(f===0)return a&&(a.abort(),a=null),s.set(n=l),Promise.resolve();const b=gt()+g;let E;return t=mt(m=>{if(m<b)return!0;c||(E=u(n,i),typeof f=="function"&&(f=f(n,i)),c=!0),a&&(a.abort(),a=null);const v=m-b;return v>f?(s.set(n=i),!1):(s.set(n=E(p(v/f))),!0)}),t.promise}return{set:r,update:(i,o)=>r(i(l,n),o),subscribe:s.subscribe}}function Re(n){let e,s;const t=n[6].default,l=bt(t,n,n[5],null);return{c(){e=x("div"),l&&l.c(),this.h()},l(r){e=y(r,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0});var i=w(e);l&&l.l(i),i.forEach(h),this.h()},h(){d(e,"class","z-10 absolute left-0 mt-2 w-32 rounded-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),d(e,"role","menu"),d(e,"aria-orientation","vertical"),d(e,"aria-labelledby","menu-button"),d(e,"tabindex","-1")},m(r,i){V(r,e,i),l&&l.m(e,null),s=!0},p(r,i){l&&l.p&&(!s||i&32)&&pt(l,t,r,r[5],s?_t(t,r[5],i,null):vt(r[5]),null)},i(r){s||(N(l,r),s=!0)},o(r){A(l,r),s=!1},d(r){r&&h(e),l&&l.d(r)}}}function Yt(n){let e,s,t,l,r,i,o,a,c,g,f,p=n[0]&&Re(n);return{c(){e=x("div"),s=x("div"),t=x("button"),l=K(n[1]),r=B(),i=z("svg"),o=z("path"),a=B(),p&&p.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var b=w(e);s=y(b,"DIV",{});var E=w(s);t=y(E,"BUTTON",{class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var m=w(t);l=X(m,n[1]),r=$(m),i=U(m,"svg",{class:!0,style:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var v=w(i);o=U(v,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),w(o).forEach(h),v.forEach(h),m.forEach(h),E.forEach(h),a=$(b),p&&p.l(b),b.forEach(h),this.h()},h(){d(o,"fill-rule","evenodd"),d(o,"d","M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"),d(o,"clip-rule","evenodd"),d(i,"class","-mr-1 ml-2 h-5 w-5"),Z(i,"transform","rotate("+n[2]+"deg)"),d(i,"xmlns","http://www.w3.org/2000/svg"),d(i,"viewBox","0 0 20 20"),d(i,"fill","currentColor"),d(i,"aria-hidden","true"),d(t,"class","inline-flex justify-center rounded-xl w-fit px-2 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"),d(t,"id","menu-button"),d(t,"aria-expanded","true"),d(t,"aria-haspopup","true"),d(e,"class","relative inline-block text-center my-2 mx-8")},m(u,b){V(u,e,b),_(e,s),_(s,t),_(t,l),_(t,r),_(t,i),_(i,o),_(e,a),p&&p.m(e,null),c=!0,g||(f=L(t,"click",n[4]),g=!0)},p(u,[b]){(!c||b&2)&&xe(l,u[1]),(!c||b&4)&&Z(i,"transform","rotate("+u[2]+"deg)"),u[0]?p?(p.p(u,b),b&1&&N(p,1)):(p=Re(u),p.c(),N(p,1),p.m(e,null)):p&&(ue(),A(p,1,1,()=>{p=null}),de())},i(u){c||(N(p),c=!0)},o(u){A(p),c=!1},d(u){u&&h(e),p&&p.d(),g=!1,f()}}}function es(n,e,s){let t,{$$slots:l={},$$scope:r}=e,{visible:i=!1}=e,{label:o}=e;const a=ut(0);tt(n,a,f=>s(2,t=f));const c=he();function g(){s(0,i=!i),i?a.set(180):a.set(0),c("changeVisible",{visible:i})}return n.$$set=f=>{"visible"in f&&s(0,i=f.visible),"label"in f&&s(1,o=f.label),"$$scope"in f&&s(5,r=f.$$scope)},[i,o,t,a,g,r,l]}class qe extends W{constructor(e){super(),J(this,e,es,Yt,Q,{visible:0,label:1})}}function ts(n){let e,s=n[0].text+"",t;return{c(){e=x("div"),t=K(s),this.h()},l(l){e=y(l,"DIV",{class:!0,style:!0});var r=w(e);t=X(r,s),r.forEach(h),this.h()},h(){d(e,"class","tag rounded-2xl hover:text-gray-900 hover:ring-2 hover:ring-gray-300 select-none svelte-10leh0s"),Z(e,"background-color",n[0].color?n[0].color:"#fff"),Z(e,"color",n[0].textColor?n[0].textColor:"#000")},m(l,r){V(l,e,r),_(e,t)},p(l,[r]){r&1&&s!==(s=l[0].text+"")&&xe(t,s),r&1&&Z(e,"background-color",l[0].color?l[0].color:"#fff"),r&1&&Z(e,"color",l[0].textColor?l[0].textColor:"#000")},i:M,o:M,d(l){l&&h(e)}}}function ss(n,e,s){let{tag:t}=e;return n.$$set=l=>{"tag"in l&&s(0,t=l.tag)},[t]}class ns extends W{constructor(e){super(),J(this,e,ss,ts,Q,{tag:0})}}function We(n,e,s){const t=n.slice();return t[8]=e[s],t}function Je(n){let e,s,t,l,r,i=n[0],o=[];for(let c=0;c<i.length;c+=1)o[c]=Qe(We(n,i,c));const a=c=>A(o[c],1,1,()=>{o[c]=null});return{c(){e=x("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=y(c,"DIV",{class:!0});var g=w(e);for(let f=0;f<o.length;f+=1)o[f].l(g);g.forEach(h),this.h()},h(){d(e,"class","multiselect svelte-3uj1o4")},m(c,g){V(c,e,g);for(let f=0;f<o.length;f+=1)o[f].m(e,null);t=!0,l||(r=L(e,"click",Ce(n[4])),l=!0)},p(c,g){if(g&11){i=c[0];let f;for(f=0;f<i.length;f+=1){const p=We(c,i,f);o[f]?(o[f].p(p,g),N(o[f],1)):(o[f]=Qe(p),o[f].c(),N(o[f],1),o[f].m(e,null))}for(ue(),f=i.length;f<o.length;f+=1)a(f);de()}},i(c){if(!t){for(let g=0;g<i.length;g+=1)N(o[g]);Se(()=>{s||(s=ae(e,ce,{},!0)),s.run(1)}),t=!0}},o(c){o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)A(o[g]);s||(s=ae(e,ce,{},!1)),s.run(0),t=!1},d(c){c&&h(e),st(o,c),c&&s&&s.end(),l=!1,r()}}}function Qe(n){let e,s,t,l,r,i,o,a,c,g,f,p,u;function b(...m){return n[5](n[8],...m)}function E(...m){return n[6](n[8],...m)}return a=new ns({props:{tag:n[8]}}),{c(){e=x("div"),s=x("input"),i=B(),o=x("label"),P(a.$$.fragment),g=B(),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=w(e);s=y(v,"INPUT",{class:!0,type:!0,id:!0}),i=$(v),o=y(v,"LABEL",{for:!0,class:!0});var k=w(o);H(a.$$.fragment,k),k.forEach(h),g=$(v),v.forEach(h),this.h()},h(){d(s,"class","w-4 h-4 cursor-pointer"),s.value=t=n[8].text,d(s,"type","checkbox"),d(s,"id",l=n[8].text),s.checked=r=n[1].some(b),d(o,"for",c=n[8].text),d(o,"class","cursor-pointer svelte-3uj1o4"),d(e,"class","tag-item svelte-3uj1o4")},m(m,v){V(m,e,v),_(e,s),_(e,i),_(e,o),R(a,o,null),_(e,g),f=!0,p||(u=L(s,"click",E),p=!0)},p(m,v){n=m,(!f||v&1&&t!==(t=n[8].text))&&(s.value=t),(!f||v&1&&l!==(l=n[8].text))&&d(s,"id",l),(!f||v&3&&r!==(r=n[1].some(b)))&&(s.checked=r);const k={};v&1&&(k.tag=n[8]),a.$set(k),(!f||v&1&&c!==(c=n[8].text))&&d(o,"for",c)},i(m){f||(N(a.$$.fragment,m),f=!0)},o(m){A(a.$$.fragment,m),f=!1},d(m){m&&h(e),q(a),p=!1,u()}}}function ls(n){let e,s,t=n[2]&&Je(n);return{c(){t&&t.c(),e=oe()},l(l){t&&t.l(l),e=oe()},m(l,r){t&&t.m(l,r),V(l,e,r),s=!0},p(l,[r]){l[2]?t?(t.p(l,r),r&4&&N(t,1)):(t=Je(l),t.c(),N(t,1),t.m(e.parentNode,e)):t&&(ue(),A(t,1,1,()=>{t=null}),de())},i(l){s||(N(t),s=!0)},o(l){A(t),s=!1},d(l){t&&t.d(l),l&&h(e)}}}function rs(n,e,s){const t=he();let{tags:l=[]}=e,{chosenTags:r=[]}=e,{isVisible:i=!1}=e;function o(f,p){const u=p.target,{checked:b}={checked:u.checked};t("handleChosenTag",{tag:f,checked:b})}function a(f){fe.call(this,n,f)}const c=(f,p)=>p.text===f.text,g=(f,p)=>{o(f,p)};return n.$$set=f=>{"tags"in f&&s(0,l=f.tags),"chosenTags"in f&&s(1,r=f.chosenTags),"isVisible"in f&&s(2,i=f.isVisible)},[l,r,i,o,a,c,g]}class is extends W{constructor(e){super(),J(this,e,rs,ls,Q,{tags:0,chosenTags:1,isVisible:2})}}function Ge(n,e,s){const t=n.slice();return t[5]=e[s],t}function Ke(n){let e,s=n[5]+"",t,l,r,i,o;return{c(){e=x("div"),t=K(s),l=B(),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var c=w(e);t=X(c,s),l=$(c),c.forEach(h),this.h()},h(){d(e,"class","option svelte-1ak2w0z"),d(e,"style",r=n[0]&&n[0]===n[5]?"background-color: #64CAA5;":"")},m(a,c){V(a,e,c),_(e,t),_(e,l),i||(o=L(e,"click",n[2]),i=!0)},p(a,c){c&2&&s!==(s=a[5]+"")&&xe(t,s),c&3&&r!==(r=a[0]&&a[0]===a[5]?"background-color: #64CAA5;":"")&&d(e,"style",r)},d(a){a&&h(e),i=!1,o()}}}function os(n){let e,s,t,l=n[1],r=[];for(let i=0;i<l.length;i+=1)r[i]=Ke(Ge(n,l,i));return{c(){e=x("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=y(i,"DIV",{class:!0});var o=w(e);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(h),this.h()},h(){d(e,"class","select select-none svelte-1ak2w0z")},m(i,o){V(i,e,o);for(let a=0;a<r.length;a+=1)r[a].m(e,null);t=!0},p(i,[o]){if(o&7){l=i[1];let a;for(a=0;a<l.length;a+=1){const c=Ge(i,l,a);r[a]?r[a].p(c,o):(r[a]=Ke(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=l.length}},i(i){t||(Se(()=>{s||(s=ae(e,ce,{},!0)),s.run(1)}),t=!0)},o(i){s||(s=ae(e,ce,{},!1)),s.run(0),t=!1},d(i){i&&h(e),st(r,i),i&&s&&s.end()}}}function as(n,e,s){let{items:t}=e,{chosenItem:l}=e,r;const i=he(),o=a=>{if(r&&(r.style.backgroundColor="white"),a.target instanceof HTMLElement){if(r=a.target,r.innerText===l){s(0,l=void 0),i("chose",{choseItem:void 0});return}s(0,l=a.target.innerText),a.target.style.backgroundColor="#64CAA5",i("chose",{choseItem:a.target.innerText})}};return n.$$set=a=>{"items"in a&&s(1,t=a.items),"chosenItem"in a&&s(0,l=a.chosenItem)},[l,t,o]}class cs extends W{constructor(e){super(),J(this,e,as,os,Q,{items:1,chosenItem:0})}}function fs(n){let e,s,t,l,r,i,o,a,c,g,f,p,u,b,E,m,v,k,C,F,j;return{c(){e=z("svg"),s=z("g"),t=z("g"),l=z("path"),r=z("g"),i=z("g"),o=z("g"),a=z("g"),c=z("g"),g=z("g"),f=z("g"),p=z("g"),u=z("g"),b=z("g"),E=z("g"),m=z("g"),v=z("g"),k=z("g"),C=z("g"),this.h()},l(I){e=U(I,"svg",{fill:!0,width:!0,height:!0,version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0});var D=w(e);s=U(D,"g",{});var T=w(s);t=U(T,"g",{});var le=w(t);l=U(le,"path",{d:!0}),w(l).forEach(h),le.forEach(h),T.forEach(h),r=U(D,"g",{}),w(r).forEach(h),i=U(D,"g",{}),w(i).forEach(h),o=U(D,"g",{}),w(o).forEach(h),a=U(D,"g",{}),w(a).forEach(h),c=U(D,"g",{}),w(c).forEach(h),g=U(D,"g",{}),w(g).forEach(h),f=U(D,"g",{}),w(f).forEach(h),p=U(D,"g",{}),w(p).forEach(h),u=U(D,"g",{}),w(u).forEach(h),b=U(D,"g",{}),w(b).forEach(h),E=U(D,"g",{}),w(E).forEach(h),m=U(D,"g",{}),w(m).forEach(h),v=U(D,"g",{}),w(v).forEach(h),k=U(D,"g",{}),w(k).forEach(h),C=U(D,"g",{}),w(C).forEach(h),D.forEach(h),this.h()},h(){d(l,"d",`M286.17,256L505.752,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L256,225.83L36.418,6.248
			c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L225.83,256L6.248,475.582
			c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0L256,286.17l219.582,219.582
			c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L286.17,256z`),d(e,"fill",n[0]),d(e,"width",n[1]),d(e,"height",n[2]),d(e,"version","1.1"),d(e,"id","Layer_1"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),d(e,"x","0px"),d(e,"y","0px"),d(e,"viewBox","0 0 512 512"),Z(e,"enable-background","new 0 0 512 512"),d(e,"xml:space","preserve")},m(I,D){V(I,e,D),_(e,s),_(s,t),_(t,l),_(e,r),_(e,i),_(e,o),_(e,a),_(e,c),_(e,g),_(e,f),_(e,p),_(e,u),_(e,b),_(e,E),_(e,m),_(e,v),_(e,k),_(e,C),F||(j=L(e,"click",n[3]),F=!0)},p(I,[D]){D&1&&d(e,"fill",I[0]),D&2&&d(e,"width",I[1]),D&4&&d(e,"height",I[2])},i:M,o:M,d(I){I&&h(e),F=!1,j()}}}function us(n,e,s){let{color:t="black"}=e,{width:l="1.3rem"}=e,{height:r="1.3rem"}=e;function i(o){fe.call(this,n,o)}return n.$$set=o=>{"color"in o&&s(0,t=o.color),"width"in o&&s(1,l=o.width),"height"in o&&s(2,r=o.height)},[t,l,r,i]}class ds extends W{constructor(e){super(),J(this,e,us,fs,Q,{color:0,width:1,height:2})}}function Xe(n){let e,s,t,l,r,i,o,a,c,g,f,p,u,b,E,m,v;return t=new qe({props:{label:"Tags",visible:n[2],$$slots:{default:[hs]},$$scope:{ctx:n}}}),t.$on("changeVisible",n[13]),r=new qe({props:{label:"Next",visible:n[3],$$slots:{default:[gs]},$$scope:{ctx:n}}}),r.$on("changeVisible",n[14]),o=new Zt({props:{text:"Completed",checked:n[4]}}),o.$on("checked",n[11]),u=new ds({}),u.$on("click",n[12]),{c(){e=x("div"),s=x("div"),P(t.$$.fragment),l=B(),P(r.$$.fragment),i=B(),P(o.$$.fragment),a=B(),c=x("div"),g=x("input"),f=B(),p=x("div"),P(u.$$.fragment),this.h()},l(k){e=y(k,"DIV",{class:!0});var C=w(e);s=y(C,"DIV",{class:!0});var F=w(s);H(t.$$.fragment,F),l=$(F),H(r.$$.fragment,F),F.forEach(h),i=$(C),H(o.$$.fragment,C),a=$(C),c=y(C,"DIV",{class:!0});var j=w(c);g=y(j,"INPUT",{type:!0,placeholder:!0,maxlength:!0,class:!0}),f=$(j),p=y(j,"DIV",{class:!0});var I=w(p);H(u.$$.fragment,I),I.forEach(h),j.forEach(h),C.forEach(h),this.h()},h(){d(s,"class","md:m-0 my-0.5 mx-auto sm:mx-0"),d(g,"type","text"),d(g,"placeholder","Enter text seach"),d(g,"maxlength","30"),d(g,"class","svelte-ztxw3n"),d(p,"class","cancel svelte-ztxw3n"),d(c,"class","substring-input flex items-center md:ml-0 sm:ml-12 md:my-0 my-0.5 mx-auto svelte-ztxw3n"),d(e,"class","lg:absolute w-full flex flex-wrap border-b border-gray-400 p-1")},m(k,C){V(k,e,C),_(e,s),R(t,s,null),_(s,l),R(r,s,null),_(e,i),R(o,e,null),_(e,a),_(e,c),_(c,g),Oe(g,n[1]),_(c,f),_(c,p),R(u,p,null),E=!0,m||(v=L(g,"input",n[15]),m=!0)},p(k,C){const F={};C&4&&(F.visible=k[2]),C&524384&&(F.$$scope={dirty:C,ctx:k}),t.$set(F);const j={};C&8&&(j.visible=k[3]),C&524416&&(j.$$scope={dirty:C,ctx:k}),r.$set(j);const I={};C&16&&(I.checked=k[4]),o.$set(I),C&2&&g.value!==k[1]&&Oe(g,k[1])},i(k){E||(N(t.$$.fragment,k),N(r.$$.fragment,k),N(o.$$.fragment,k),N(u.$$.fragment,k),Se(()=>{b||(b=ae(e,ce,{},!0)),b.run(1)}),E=!0)},o(k){A(t.$$.fragment,k),A(r.$$.fragment,k),A(o.$$.fragment,k),A(u.$$.fragment,k),b||(b=ae(e,ce,{},!1)),b.run(0),E=!1},d(k){k&&h(e),q(t),q(r),q(o),q(u),k&&b&&b.end(),m=!1,v()}}}function hs(n){let e,s;return e=new is({props:{isVisible:!0,tags:n[5],chosenTags:n[6]}}),e.$on("handleChosenTag",n[9]),{c(){P(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){R(e,t,l),s=!0},p(t,l){const r={};l&32&&(r.tags=t[5]),l&64&&(r.chosenTags=t[6]),e.$set(r)},i(t){s||(N(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function gs(n){let e,s;return e=new cs({props:{items:Array.from(n[8].keys()),chosenItem:n[7]}}),e.$on("chose",n[10]),{c(){P(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){R(e,t,l),s=!0},p(t,l){const r={};l&128&&(r.chosenItem=t[7]),e.$set(r)},i(t){s||(N(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function ms(n){let e,s,t=n[0]&&Xe(n);return{c(){t&&t.c(),e=oe()},l(l){t&&t.l(l),e=oe()},m(l,r){t&&t.m(l,r),V(l,e,r),s=!0},p(l,[r]){l[0]?t?(t.p(l,r),r&1&&N(t,1)):(t=Xe(l),t.c(),N(t,1),t.m(e.parentNode,e)):t&&(ue(),A(t,1,1,()=>{t=null}),de())},i(l){s||(N(t),s=!0)},o(l){A(t),s=!1},d(l){t&&t.d(l),l&&h(e)}}}function ps(n,e,s){let{isActive:t=!1}=e;const l=he();let r=!1,i=!1,o,a,c=[],g=[],f,p;const u=new Map([["30 minutes",1800],["hour",3600],["day",86400],["week",2592e3],["mounth",94608e4]]),b=()=>{l("filter",{tags:g,till:f,text:o,completed:a})},E=I=>{I.detail.checked?s(6,g=[...g,I.detail.tag]):s(6,g=g.filter(D=>D.text!==I.detail.tag.text)),b()},m=I=>{if(I.detail.choseItem!==void 0){if(s(7,p=I.detail.choseItem),p){const D=u.get(p);if(D){const T=Date.now()+D*1e3;f=rt.fromDate(new Date(T))}}}else f=void 0;b()},v=I=>{s(4,a=I.detail.checked),b()},k=()=>{s(4,a=void 0),f=void 0,s(7,p=void 0),s(1,o=void 0),s(6,g=[]),s(3,i=!1),s(2,r=!1),b()},C=I=>{s(2,r=I.detail.visible)},F=I=>{s(3,i=I.detail.visible)};function j(){o=this.value,s(1,o)}return n.$$set=I=>{"isActive"in I&&s(0,t=I.isActive)},n.$$.update=()=>{n.$$.dirty&1&&_e().then(I=>{s(5,c=I.tags)}),n.$$.dirty&2&&((o==null?void 0:o.trim().length)===0&&s(1,o=void 0),b())},[t,o,r,i,a,c,g,p,u,E,m,v,k,C,F,j]}class vs extends W{constructor(e){super(),J(this,e,ps,ms,Q,{isActive:0})}}function _s(n){let e,s,t,l,r,i,o,a,c,g,f,p,u,b,E,m,v,k,C,F,j,I,D,T,le,Be;function dt(S){n[16](S)}let $e={};return n[6]!==void 0&&($e.isVisible=n[6]),F=new Gt({props:$e}),ie.push(()=>Ye(F,"isVisible",dt)),D=new vs({props:{isActive:n[1]}}),D.$on("filter",n[17]),{c(){e=x("nav"),s=x("div"),t=x("div"),l=x("div"),r=B(),i=x("span"),o=K("ABRICOS"),a=B(),c=x("div"),g=x("div"),f=x("div"),p=B(),u=x("div"),b=B(),E=x("div"),m=B(),v=x("div"),k=B(),C=x("div"),P(F.$$.fragment),I=B(),P(D.$$.fragment),this.h()},l(S){e=y(S,"NAV",{class:!0});var O=w(e);s=y(O,"DIV",{class:!0});var ve=w(s);t=y(ve,"DIV",{class:!0});var te=w(t);l=y(te,"DIV",{class:!0}),w(l).forEach(h),r=$(te),i=y(te,"SPAN",{class:!0});var je=w(i);o=X(je,"ABRICOS"),je.forEach(h),te.forEach(h),ve.forEach(h),a=$(O),c=y(O,"DIV",{class:!0});var ze=w(c);g=y(ze,"DIV",{class:!0});var Y=w(g);f=y(Y,"DIV",{class:!0,id:!0,style:!0}),w(f).forEach(h),p=$(Y),u=y(Y,"DIV",{class:!0,id:!0}),w(u).forEach(h),b=$(Y),E=y(Y,"DIV",{class:!0,id:!0}),w(E).forEach(h),m=$(Y),v=y(Y,"DIV",{class:!0}),w(v).forEach(h),Y.forEach(h),ze.forEach(h),O.forEach(h),k=$(S),C=y(S,"DIV",{class:!0});var Ue=w(C);H(F.$$.fragment,Ue),Ue.forEach(h),I=$(S),H(D.$$.fragment,S),this.h()},h(){d(l,"class","logo__img svelte-xtkisl"),ke(l,"spinner",n[3]===!0),d(i,"class","logo__text select-none svelte-xtkisl"),d(t,"class","logo cursor-pointer svelte-xtkisl"),d(s,"class","nav__el left svelte-xtkisl"),d(f,"class","menu__el cursor-pointer svelte-xtkisl"),d(f,"id","filter"),Z(f,"transform","rotate("+n[7]+"deg)"),ke(f,"reverse-spinner",n[2]===!0),d(u,"class","menu__el cursor-pointer svelte-xtkisl"),d(u,"id","notification"),d(E,"class","menu__el cursor-pointer svelte-xtkisl"),d(E,"id","logout"),d(v,"class","user-logo cursor-pointer svelte-xtkisl"),d(g,"class","menu svelte-xtkisl"),d(c,"class","nav__el right svelte-xtkisl"),d(e,"class","p-3 svelte-xtkisl"),d(C,"class","notification-container")},m(S,O){V(S,e,O),_(e,s),_(s,t),_(t,l),_(t,r),_(t,i),_(i,o),_(e,a),_(e,c),_(c,g),_(g,f),n[13](f),_(g,p),_(g,u),n[14](u),_(g,b),_(g,E),_(g,m),_(g,v),n[15](v),V(S,k,O),V(S,C,O),R(F,C,null),V(S,I,O),R(D,S,O),T=!0,le||(Be=[L(t,"click",n[11]),L(f,"click",n[10]),L(u,"click",n[12]),L(E,"click",ks),L(v,"click",bs)],le=!0)},p(S,[O]){O&8&&ke(l,"spinner",S[3]===!0),(!T||O&128)&&Z(f,"transform","rotate("+S[7]+"deg)"),O&4&&ke(f,"reverse-spinner",S[2]===!0);const ve={};!j&&O&64&&(j=!0,ve.isVisible=S[6],et(()=>j=!1)),F.$set(ve);const te={};O&2&&(te.isActive=S[1]),D.$set(te)},i(S){T||(N(F.$$.fragment,S),N(D.$$.fragment,S),T=!0)},o(S){A(F.$$.fragment,S),A(D.$$.fragment,S),T=!1},d(S){S&&h(e),n[13](null),n[14](null),n[15](null),S&&h(k),S&&h(C),q(F),S&&h(I),q(D,S),le=!1,Ne(Be)}}}function bs(){window.location.pathname!=="/profile"&&(window.location.href="/profile")}async function ks(){await It(),window.location.href="/login"}function ws(n,e,s){let t;const l=ut(180);tt(n,l,T=>s(7,t=T));const r=he();let i,o=!1,a=!1,c=!1,g=window.location.pathname==="/",f,p,u=!1;function b(T){p&&s(5,p.style.background=`url('/images/notification-${T}.svg') no-repeat center / cover`,p)}function E(){be().then(T=>{b(T===void 0?"off":"on")})}kt(async()=>{await E();const T=await St();Me.set(T)}),Te.subscribe(()=>E()),re.subscribe(T=>{T==="folder"&&(s(1,o=!1),l.set(180))});function m(){if(window.location.pathname!=="/"){i&&(s(2,c=!0),setTimeout(()=>(s(2,c=!1),!1),300));return}s(1,o=!o),o?(l.set(0),a=!1,re.set("filter")):(l.set(180),re.set(""))}function v(){wt(re)==="folder"&&(a=!0),a=!a,a?re.set("folder"):re.set(""),window.location.pathname!=="/"?window.location.href="/":s(3,g=!1)}function k(){E(),s(6,u=!u)}Me.subscribe(T=>{f&&s(4,f.style.background=`url('${T}') no-repeat center / cover`,f)});function C(T){ie[T?"unshift":"push"](()=>{i=T,s(0,i)})}function F(T){ie[T?"unshift":"push"](()=>{p=T,s(5,p)})}function j(T){ie[T?"unshift":"push"](()=>{f=T,s(4,f)})}function I(T){u=T,s(6,u)}return[i,o,c,g,f,p,u,t,l,r,m,v,k,C,F,j,I,T=>r("filter",T.detail)]}class Os extends W{constructor(e){super(),J(this,e,ws,_s,Q,{})}}export{ct as C,is as M,Os as N,ft as S,ns as T,Ls as a,Cs as b,Ss as c,ot as d,Tt as e,Es as f,_e as g,ce as h,Ts as i,Bs as j,Fs as k,As as l,zs as m,Ns as n,re as o,Vs as p,Me as q,Ds as r,Ft as s,Us as t,Ct as u,js as v,$s as w,St as x};
