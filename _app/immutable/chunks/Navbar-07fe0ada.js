import{a3 as et,C as Me,a4 as vt,a5 as _t,S as W,i as J,s as Q,e as x,k as B,t as K,c as y,a as w,m as F,h as X,d as h,b as d,g as j,L as _,R as L,j as Ce,E as M,V as $e,W as ge,I as bt,J as kt,K as wt,q as N,o as A,_ as z,$ as U,f as te,n as me,p as pe,a1 as tt,H as xt,T as Ae,w as P,x as H,y as R,B as q,N as ze,O as ue,U as st,l as de,a2 as ve,Q as Pe,P as fe,a6 as nt,a7 as lt,M as yt,X as Ee,v as It,Z as Et}from"./index-0489bdd4.js";import{w as ne}from"./index-621d9ca2.js";import{l as Ue,D as G,g as Te,V as le,w as Ve,U as je,Q as Dt,f as Le,p as ie,I as rt,u as it,y as De,a as Ct,b as Tt}from"./firebase-218fcd9a.js";function Vt(n){const e=n-1;return e*e*e+1}function Ts(n,{delay:e=0,duration:t=400,easing:s=et}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*l}`}}function he(n,{delay:e=0,duration:t=400,easing:s=Vt}={}){const l=getComputedStyle(n),r=+l.opacity,i=parseFloat(l.height),o=parseFloat(l.paddingTop),a=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),g=parseFloat(l.marginBottom),f=parseFloat(l.borderTopWidth),p=parseFloat(l.borderBottomWidth);return{delay:e,duration:t,easing:s,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*r};height: ${u*i}px;padding-top: ${u*o}px;padding-bottom: ${u*a}px;margin-top: ${u*c}px;margin-bottom: ${u*g}px;border-top-width: ${u*f}px;border-bottom-width: ${u*p}px;`}}const ce=ne("initial"),Be=ne(!1),Vs=ne(!1),He=ne("images/profile-images/user-default-logo.png"),js=ne(""),Ns=ne(!1),Ss=ne(!1);function Re(n){return Object.prototype.toString.call(n)==="[object Date]"}function Fe(n,e){if(n===e||n!==n)return()=>n;const t=typeof n;if(t!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const s=e.map((l,r)=>Fe(n[r],l));return l=>s.map(r=>r(l))}if(t==="object"){if(!n||!e)throw new Error("Object cannot be null");if(Re(n)&&Re(e)){n=n.getTime(),e=e.getTime();const r=e-n;return i=>new Date(n+i*r)}const s=Object.keys(e),l={};return s.forEach(r=>{l[r]=Fe(n[r],e[r])}),r=>{const i={};return s.forEach(o=>{i[o]=l[o](r)}),i}}if(t==="number"){const s=e-n;return l=>n+l*s}throw new Error(`Cannot interpolate ${t} values`)}function ot(n,e={}){const t=ne(n);let s,l=n;function r(i,o){if(n==null)return t.set(n=i),Promise.resolve();l=i;let a=s,c=!1,{delay:g=0,duration:f=400,easing:p=et,interpolate:u=Fe}=Me(Me({},e),o);if(f===0)return a&&(a.abort(),a=null),t.set(n=l),Promise.resolve();const b=vt()+g;let D;return s=_t(m=>{if(m<b)return!0;c||(D=u(n,i),typeof f=="function"&&(f=f(n,i)),c=!0),a&&(a.abort(),a=null);const v=m-b;return v>f?(t.set(n=i),!1):(t.set(n=D(p(v/f))),!0)}),s.promise}return{set:r,update:(i,o)=>r(i(l,n),o),subscribe:t.subscribe}}async function at(){return(await _e()).currentFolder}function Oe(){return le(Le,"users")}function oe(){return G(Oe(),Te().uid)}function se(){return le(Oe(),Te().uid,"folders")}async function ae(){return le(se(),await at(),"items")}async function jt(n){return le(se(),n,"items")}async function _e(){return(await Ue(G(Oe(),Te().uid))).data()}async function As(){return await at()==""?void 0:(await Ve(je(await ae()))).docs.map(t=>t.data()).sort((t,s)=>t.date?s.date?t.date>s.date?1:t.date<s.date?-1:0:-1:1)}async function Bs(n,e){ie(G(await ae(),n),{checked:e})}async function Nt(n,e=void 0){let t;e?t=le(se(),e,"items"):t=await ae();let s;return n.docId?s=G(t,n.docId):(s=G(t),n.docId=s.id),De(s,n,{merge:!0}),n.docId}async function St(){return(await Ve(je(se(),Dt("creationDate")))).docs.map(e=>e.data())}async function At(){const n=await St();let e=[];for(let t of n)if(t.docId){const l=(await Ve(je(await jt(t.docId)))).docs.map(r=>r.data());e=[...e,...l]}return e}async function ct(n){rt(G(await ae(),n))}async function Bt(n){return(await Ue(G(await ae(),n))).data()}async function Fs(n){if(!n.docId){n.creationDate=it.fromMillis(Date.now());const t=G(se());return n.docId=t.id,await De(t,n,{merge:!0}),n.docId}const e=G(se(),n.docId);return await De(e,n,{merge:!0}),n.docId}async function ft(n){const e=oe();n?await ie(e,{token:n}):await ie(e,{token:Ct()})}async function be(){le(Le,"users");const n=oe();return(await Ue(n)).data().token}async function $s(n){const e=G(le(Le,"users"),Te().uid);ie(e,{currentFolder:n})}async function zs(n){(await Ve(je(await ae()))).docs.forEach(t=>{ct(t.id)}),rt(G(se(),n)),ie(oe(),{currentFolder:""})}async function Us(n){const e=oe(),s=(await _e()).tags;s.push(n),await ie(e,{tags:s})}async function Ls(n){const e=oe();let s=(await _e()).tags;s=s.filter(l=>l.text!=n.text),await ie(e,{tags:s})}async function Os(n,e){const t=await Bt(n);!t.docId||(await ae(),le(se(),e,"items"),await ct(t.docId),t.docId=void 0,await Nt(t,e))}async function Ms(n){const e=oe();await De(e,{avatar:n},{merge:!0})}async function Ft(){return oe(),(await _e()).avatar}function $t(n){let e,t,s,l,r,i,o;return{c(){e=x("div"),t=x("input"),s=B(),l=x("label"),r=K(n[1]),this.h()},l(a){e=y(a,"DIV",{class:!0});var c=w(e);t=y(c,"INPUT",{id:!0,type:!0,class:!0}),s=F(c),l=y(c,"LABEL",{for:!0,class:!0});var g=w(l);r=X(g,n[1]),g.forEach(h),c.forEach(h),this.h()},h(){d(t,"id","checkbox"),d(t,"type","checkbox"),t.__value="",t.value=t.__value,d(t,"class","w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 hover:cursor-pointer focus:ring-red-500focus:ring-2"),d(l,"for","checkbox"),d(l,"class","ml-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:cursor-pointer"),d(e,"class","flex items-center sm:my-3 sm:mx-8 mx-auto my-4")},m(a,c){j(a,e,c),_(e,t),t.checked=n[0],_(e,s),_(e,l),_(l,r),i||(o=[L(t,"change",n[3]),L(t,"change",n[4])],i=!0)},p(a,[c]){c&1&&(t.checked=a[0]),c&2&&Ce(r,a[1])},i:M,o:M,d(a){a&&h(e),i=!1,$e(o)}}}function zt(n,e,t){let{text:s}=e,{checked:l=!1}=e,r=ge();function i(){l=this.checked,t(0,l)}const o=()=>r("checked",{checked:l});return n.$$set=a=>{"text"in a&&t(1,s=a.text),"checked"in a&&t(0,l=a.checked)},[l,s,r,i,o]}class Ut extends W{constructor(e){super(),J(this,e,zt,$t,Q,{text:1,checked:0})}}function qe(n){let e,t;const s=n[6].default,l=xt(s,n,n[5],null);return{c(){e=x("div"),l&&l.c(),this.h()},l(r){e=y(r,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0});var i=w(e);l&&l.l(i),i.forEach(h),this.h()},h(){d(e,"class","z-10 absolute left-0 mt-2 w-32 rounded-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),d(e,"role","menu"),d(e,"aria-orientation","vertical"),d(e,"aria-labelledby","menu-button"),d(e,"tabindex","-1")},m(r,i){j(r,e,i),l&&l.m(e,null),t=!0},p(r,i){l&&l.p&&(!t||i&32)&&bt(l,s,r,r[5],t?wt(s,r[5],i,null):kt(r[5]),null)},i(r){t||(N(l,r),t=!0)},o(r){A(l,r),t=!1},d(r){r&&h(e),l&&l.d(r)}}}function Lt(n){let e,t,s,l,r,i,o,a,c,g,f,p=n[0]&&qe(n);return{c(){e=x("div"),t=x("div"),s=x("button"),l=K(n[1]),r=B(),i=z("svg"),o=z("path"),a=B(),p&&p.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var b=w(e);t=y(b,"DIV",{});var D=w(t);s=y(D,"BUTTON",{class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var m=w(s);l=X(m,n[1]),r=F(m),i=U(m,"svg",{class:!0,style:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var v=w(i);o=U(v,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),w(o).forEach(h),v.forEach(h),m.forEach(h),D.forEach(h),a=F(b),p&&p.l(b),b.forEach(h),this.h()},h(){d(o,"fill-rule","evenodd"),d(o,"d","M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"),d(o,"clip-rule","evenodd"),d(i,"class","-mr-1 ml-2 h-5 w-5"),te(i,"transform","rotate("+n[2]+"deg)"),d(i,"xmlns","http://www.w3.org/2000/svg"),d(i,"viewBox","0 0 20 20"),d(i,"fill","currentColor"),d(i,"aria-hidden","true"),d(s,"class","inline-flex justify-center rounded-xl w-fit px-2 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"),d(s,"id","menu-button"),d(s,"aria-expanded","true"),d(s,"aria-haspopup","true"),d(e,"class","relative inline-block text-center my-2 mx-8")},m(u,b){j(u,e,b),_(e,t),_(t,s),_(s,l),_(s,r),_(s,i),_(i,o),_(e,a),p&&p.m(e,null),c=!0,g||(f=L(s,"click",n[4]),g=!0)},p(u,[b]){(!c||b&2)&&Ce(l,u[1]),(!c||b&4)&&te(i,"transform","rotate("+u[2]+"deg)"),u[0]?p?(p.p(u,b),b&1&&N(p,1)):(p=qe(u),p.c(),N(p,1),p.m(e,null)):p&&(me(),A(p,1,1,()=>{p=null}),pe())},i(u){c||(N(p),c=!0)},o(u){A(p),c=!1},d(u){u&&h(e),p&&p.d(),g=!1,f()}}}function Ot(n,e,t){let s,{$$slots:l={},$$scope:r}=e,{visible:i=!1}=e,{label:o}=e;const a=ot(0);tt(n,a,f=>t(2,s=f));const c=ge();function g(){t(0,i=!i),i?a.set(180):a.set(0),c("changeVisible",{visible:i})}return n.$$set=f=>{"visible"in f&&t(0,i=f.visible),"label"in f&&t(1,o=f.label),"$$scope"in f&&t(5,r=f.$$scope)},[i,o,s,a,g,r,l]}class We extends W{constructor(e){super(),J(this,e,Ot,Lt,Q,{visible:0,label:1})}}function Mt(n){let e,t=n[0].text+"",s;return{c(){e=x("div"),s=K(t),this.h()},l(l){e=y(l,"DIV",{class:!0,style:!0});var r=w(e);s=X(r,t),r.forEach(h),this.h()},h(){d(e,"class","tag rounded-2xl hover:text-gray-900 hover:ring-2 hover:ring-gray-300 select-none svelte-10leh0s"),te(e,"background-color",n[0].color?n[0].color:"#fff"),te(e,"color",n[0].textColor?n[0].textColor:"#000")},m(l,r){j(l,e,r),_(e,s)},p(l,[r]){r&1&&t!==(t=l[0].text+"")&&Ce(s,t),r&1&&te(e,"background-color",l[0].color?l[0].color:"#fff"),r&1&&te(e,"color",l[0].textColor?l[0].textColor:"#000")},i:M,o:M,d(l){l&&h(e)}}}function Pt(n,e,t){let{tag:s}=e;return n.$$set=l=>{"tag"in l&&t(0,s=l.tag)},[s]}class Ht extends W{constructor(e){super(),J(this,e,Pt,Mt,Q,{tag:0})}}function Je(n,e,t){const s=n.slice();return s[8]=e[t],s}function Qe(n){let e,t,s,l,r,i=n[0],o=[];for(let c=0;c<i.length;c+=1)o[c]=Ge(Je(n,i,c));const a=c=>A(o[c],1,1,()=>{o[c]=null});return{c(){e=x("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=y(c,"DIV",{class:!0});var g=w(e);for(let f=0;f<o.length;f+=1)o[f].l(g);g.forEach(h),this.h()},h(){d(e,"class","multiselect svelte-3uj1o4")},m(c,g){j(c,e,g);for(let f=0;f<o.length;f+=1)o[f].m(e,null);s=!0,l||(r=L(e,"click",Ae(n[4])),l=!0)},p(c,g){if(g&11){i=c[0];let f;for(f=0;f<i.length;f+=1){const p=Je(c,i,f);o[f]?(o[f].p(p,g),N(o[f],1)):(o[f]=Ge(p),o[f].c(),N(o[f],1),o[f].m(e,null))}for(me(),f=i.length;f<o.length;f+=1)a(f);pe()}},i(c){if(!s){for(let g=0;g<i.length;g+=1)N(o[g]);ze(()=>{t||(t=ue(e,he,{},!0)),t.run(1)}),s=!0}},o(c){o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)A(o[g]);t||(t=ue(e,he,{},!1)),t.run(0),s=!1},d(c){c&&h(e),st(o,c),c&&t&&t.end(),l=!1,r()}}}function Ge(n){let e,t,s,l,r,i,o,a,c,g,f,p,u;function b(...m){return n[5](n[8],...m)}function D(...m){return n[6](n[8],...m)}return a=new Ht({props:{tag:n[8]}}),{c(){e=x("div"),t=x("input"),i=B(),o=x("label"),P(a.$$.fragment),g=B(),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=w(e);t=y(v,"INPUT",{class:!0,type:!0,id:!0}),i=F(v),o=y(v,"LABEL",{for:!0,class:!0});var k=w(o);H(a.$$.fragment,k),k.forEach(h),g=F(v),v.forEach(h),this.h()},h(){d(t,"class","w-4 h-4 cursor-pointer"),t.value=s=n[8].text,d(t,"type","checkbox"),d(t,"id",l=n[8].text),t.checked=r=n[1].some(b),d(o,"for",c=n[8].text),d(o,"class","cursor-pointer svelte-3uj1o4"),d(e,"class","tag-item svelte-3uj1o4")},m(m,v){j(m,e,v),_(e,t),_(e,i),_(e,o),R(a,o,null),_(e,g),f=!0,p||(u=L(t,"click",D),p=!0)},p(m,v){n=m,(!f||v&1&&s!==(s=n[8].text))&&(t.value=s),(!f||v&1&&l!==(l=n[8].text))&&d(t,"id",l),(!f||v&3&&r!==(r=n[1].some(b)))&&(t.checked=r);const k={};v&1&&(k.tag=n[8]),a.$set(k),(!f||v&1&&c!==(c=n[8].text))&&d(o,"for",c)},i(m){f||(N(a.$$.fragment,m),f=!0)},o(m){A(a.$$.fragment,m),f=!1},d(m){m&&h(e),q(a),p=!1,u()}}}function Rt(n){let e,t,s=n[2]&&Qe(n);return{c(){s&&s.c(),e=de()},l(l){s&&s.l(l),e=de()},m(l,r){s&&s.m(l,r),j(l,e,r),t=!0},p(l,[r]){l[2]?s?(s.p(l,r),r&4&&N(s,1)):(s=Qe(l),s.c(),N(s,1),s.m(e.parentNode,e)):s&&(me(),A(s,1,1,()=>{s=null}),pe())},i(l){t||(N(s),t=!0)},o(l){A(s),t=!1},d(l){s&&s.d(l),l&&h(e)}}}function qt(n,e,t){const s=ge();let{tags:l=[]}=e,{chosenTags:r=[]}=e,{isVisible:i=!1}=e;function o(f,p){const u=p.target,{checked:b}={checked:u.checked};s("handleChosenTag",{tag:f,checked:b})}function a(f){ve.call(this,n,f)}const c=(f,p)=>p.text===f.text,g=(f,p)=>{o(f,p)};return n.$$set=f=>{"tags"in f&&t(0,l=f.tags),"chosenTags"in f&&t(1,r=f.chosenTags),"isVisible"in f&&t(2,i=f.isVisible)},[l,r,i,o,a,c,g]}class Wt extends W{constructor(e){super(),J(this,e,qt,Rt,Q,{tags:0,chosenTags:1,isVisible:2})}}function Ke(n,e,t){const s=n.slice();return s[5]=e[t],s}function Xe(n){let e,t=n[5]+"",s,l,r,i,o;return{c(){e=x("div"),s=K(t),l=B(),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var c=w(e);s=X(c,t),l=F(c),c.forEach(h),this.h()},h(){d(e,"class","option svelte-1ak2w0z"),d(e,"style",r=n[0]&&n[0]==n[5]?"background-color: #64CAA5;":"")},m(a,c){j(a,e,c),_(e,s),_(e,l),i||(o=L(e,"click",n[2]),i=!0)},p(a,c){c&2&&t!==(t=a[5]+"")&&Ce(s,t),c&3&&r!==(r=a[0]&&a[0]==a[5]?"background-color: #64CAA5;":"")&&d(e,"style",r)},d(a){a&&h(e),i=!1,o()}}}function Jt(n){let e,t,s,l=n[1],r=[];for(let i=0;i<l.length;i+=1)r[i]=Xe(Ke(n,l,i));return{c(){e=x("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=y(i,"DIV",{class:!0});var o=w(e);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(h),this.h()},h(){d(e,"class","select select-none svelte-1ak2w0z")},m(i,o){j(i,e,o);for(let a=0;a<r.length;a+=1)r[a].m(e,null);s=!0},p(i,[o]){if(o&7){l=i[1];let a;for(a=0;a<l.length;a+=1){const c=Ke(i,l,a);r[a]?r[a].p(c,o):(r[a]=Xe(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=l.length}},i(i){s||(ze(()=>{t||(t=ue(e,he,{},!0)),t.run(1)}),s=!0)},o(i){t||(t=ue(e,he,{},!1)),t.run(0),s=!1},d(i){i&&h(e),st(r,i),i&&t&&t.end()}}}function Qt(n,e,t){let{items:s}=e,{chosenItem:l}=e,r;const i=ge(),o=a=>{if(r&&(r.style.backgroundColor="white"),a.target instanceof HTMLElement){if(r=a.target,r.innerText==l){t(0,l=void 0),i("chose",{choseItem:void 0});return}t(0,l=a.target.innerText),a.target.style.backgroundColor="#64CAA5",i("chose",{choseItem:a.target.innerText})}};return n.$$set=a=>{"items"in a&&t(1,s=a.items),"chosenItem"in a&&t(0,l=a.chosenItem)},[l,s,o]}class Gt extends W{constructor(e){super(),J(this,e,Qt,Jt,Q,{items:1,chosenItem:0})}}function Kt(n){let e,t,s,l,r,i,o,a,c,g,f,p,u,b,D,m,v,k,C,S,$;return{c(){e=z("svg"),t=z("g"),s=z("g"),l=z("path"),r=z("g"),i=z("g"),o=z("g"),a=z("g"),c=z("g"),g=z("g"),f=z("g"),p=z("g"),u=z("g"),b=z("g"),D=z("g"),m=z("g"),v=z("g"),k=z("g"),C=z("g"),this.h()},l(I){e=U(I,"svg",{fill:!0,width:!0,height:!0,version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0});var E=w(e);t=U(E,"g",{});var Y=w(t);s=U(Y,"g",{});var T=w(s);l=U(T,"path",{d:!0}),w(l).forEach(h),T.forEach(h),Y.forEach(h),r=U(E,"g",{});var ke=w(r);ke.forEach(h),i=U(E,"g",{});var Se=w(i);Se.forEach(h),o=U(E,"g",{});var we=w(o);we.forEach(h),a=U(E,"g",{});var V=w(a);V.forEach(h),c=U(E,"g",{});var O=w(c);O.forEach(h),g=U(E,"g",{});var re=w(g);re.forEach(h),f=U(E,"g",{});var ee=w(f);ee.forEach(h),p=U(E,"g",{});var xe=w(p);xe.forEach(h),u=U(E,"g",{});var ye=w(u);ye.forEach(h),b=U(E,"g",{});var Z=w(b);Z.forEach(h),D=U(E,"g",{});var Ie=w(D);Ie.forEach(h),m=U(E,"g",{});var ht=w(m);ht.forEach(h),v=U(E,"g",{});var gt=w(v);gt.forEach(h),k=U(E,"g",{});var mt=w(k);mt.forEach(h),C=U(E,"g",{});var pt=w(C);pt.forEach(h),E.forEach(h),this.h()},h(){d(l,"d",`M286.17,256L505.752,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L256,225.83L36.418,6.248\r
			c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L225.83,256L6.248,475.582\r
			c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0L256,286.17l219.582,219.582\r
			c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L286.17,256z`),d(e,"fill",n[0]),d(e,"width",n[1]),d(e,"height",n[2]),d(e,"version","1.1"),d(e,"id","Layer_1"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),d(e,"x","0px"),d(e,"y","0px"),d(e,"viewBox","0 0 512 512"),te(e,"enable-background","new 0 0 512 512"),d(e,"xml:space","preserve")},m(I,E){j(I,e,E),_(e,t),_(t,s),_(s,l),_(e,r),_(e,i),_(e,o),_(e,a),_(e,c),_(e,g),_(e,f),_(e,p),_(e,u),_(e,b),_(e,D),_(e,m),_(e,v),_(e,k),_(e,C),S||($=L(e,"click",n[3]),S=!0)},p(I,[E]){E&1&&d(e,"fill",I[0]),E&2&&d(e,"width",I[1]),E&4&&d(e,"height",I[2])},i:M,o:M,d(I){I&&h(e),S=!1,$()}}}function Xt(n,e,t){let{color:s="black"}=e,{width:l="1.3rem"}=e,{height:r="1.3rem"}=e;function i(o){ve.call(this,n,o)}return n.$$set=o=>{"color"in o&&t(0,s=o.color),"width"in o&&t(1,l=o.width),"height"in o&&t(2,r=o.height)},[s,l,r,i]}class Zt extends W{constructor(e){super(),J(this,e,Xt,Kt,Q,{color:0,width:1,height:2})}}function Ze(n){let e,t,s,l,r,i,o,a,c,g,f,p,u,b,D,m,v;return s=new We({props:{label:"Tags",visible:n[2],$$slots:{default:[Yt]},$$scope:{ctx:n}}}),s.$on("changeVisible",n[13]),r=new We({props:{label:"Next",visible:n[3],$$slots:{default:[es]},$$scope:{ctx:n}}}),r.$on("changeVisible",n[14]),o=new Ut({props:{text:"Completed",checked:n[4]}}),o.$on("checked",n[11]),u=new Zt({}),u.$on("click",n[12]),{c(){e=x("div"),t=x("div"),P(s.$$.fragment),l=B(),P(r.$$.fragment),i=B(),P(o.$$.fragment),a=B(),c=x("div"),g=x("input"),f=B(),p=x("div"),P(u.$$.fragment),this.h()},l(k){e=y(k,"DIV",{class:!0});var C=w(e);t=y(C,"DIV",{class:!0});var S=w(t);H(s.$$.fragment,S),l=F(S),H(r.$$.fragment,S),S.forEach(h),i=F(C),H(o.$$.fragment,C),a=F(C),c=y(C,"DIV",{class:!0});var $=w(c);g=y($,"INPUT",{type:!0,placeholder:!0,maxlength:!0,class:!0}),f=F($),p=y($,"DIV",{class:!0});var I=w(p);H(u.$$.fragment,I),I.forEach(h),$.forEach(h),C.forEach(h),this.h()},h(){d(t,"class","md:m-0 my-0.5 mx-auto sm:mx-0"),d(g,"type","text"),d(g,"placeholder","Enter text seach"),d(g,"maxlength","30"),d(g,"class","svelte-ztxw3n"),d(p,"class","cancel svelte-ztxw3n"),d(c,"class","substring-input flex items-center md:ml-0 sm:ml-12 md:my-0 my-0.5 mx-auto svelte-ztxw3n"),d(e,"class","lg:absolute w-full flex flex-wrap border-b border-gray-400 p-1")},m(k,C){j(k,e,C),_(e,t),R(s,t,null),_(t,l),R(r,t,null),_(e,i),R(o,e,null),_(e,a),_(e,c),_(c,g),Pe(g,n[1]),_(c,f),_(c,p),R(u,p,null),D=!0,m||(v=L(g,"input",n[15]),m=!0)},p(k,C){const S={};C&4&&(S.visible=k[2]),C&524384&&(S.$$scope={dirty:C,ctx:k}),s.$set(S);const $={};C&8&&($.visible=k[3]),C&524416&&($.$$scope={dirty:C,ctx:k}),r.$set($);const I={};C&16&&(I.checked=k[4]),o.$set(I),C&2&&g.value!==k[1]&&Pe(g,k[1])},i(k){D||(N(s.$$.fragment,k),N(r.$$.fragment,k),N(o.$$.fragment,k),N(u.$$.fragment,k),ze(()=>{b||(b=ue(e,he,{},!0)),b.run(1)}),D=!0)},o(k){A(s.$$.fragment,k),A(r.$$.fragment,k),A(o.$$.fragment,k),A(u.$$.fragment,k),b||(b=ue(e,he,{},!1)),b.run(0),D=!1},d(k){k&&h(e),q(s),q(r),q(o),q(u),k&&b&&b.end(),m=!1,v()}}}function Yt(n){let e,t;return e=new Wt({props:{isVisible:!0,tags:n[5],chosenTags:n[6]}}),e.$on("handleChosenTag",n[9]),{c(){P(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,l){R(e,s,l),t=!0},p(s,l){const r={};l&32&&(r.tags=s[5]),l&64&&(r.chosenTags=s[6]),e.$set(r)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){q(e,s)}}}function es(n){let e,t;return e=new Gt({props:{items:Array.from(n[8].keys()),chosenItem:n[7]}}),e.$on("chose",n[10]),{c(){P(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,l){R(e,s,l),t=!0},p(s,l){const r={};l&128&&(r.chosenItem=s[7]),e.$set(r)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){q(e,s)}}}function ts(n){let e,t,s=n[0]&&Ze(n);return{c(){s&&s.c(),e=de()},l(l){s&&s.l(l),e=de()},m(l,r){s&&s.m(l,r),j(l,e,r),t=!0},p(l,[r]){l[0]?s?(s.p(l,r),r&1&&N(s,1)):(s=Ze(l),s.c(),N(s,1),s.m(e.parentNode,e)):s&&(me(),A(s,1,1,()=>{s=null}),pe())},i(l){t||(N(s),t=!0)},o(l){A(s),t=!1},d(l){s&&s.d(l),l&&h(e)}}}function ss(n,e,t){let{isActive:s=!1}=e;const l=ge();let r=!1,i=!1,o,a,c=[],g=[],f,p;const u=new Map([["30 minutes",1800],["hour",3600],["day",86400],["week",2592e3],["mounth",94608e4]]),b=()=>{const I={tags:g,till:f,text:o,completed:a};console.log(I),l("filter",I)},D=I=>{I.detail.checked?t(6,g=[...g,I.detail.tag]):t(6,g=g.filter(E=>E.text!=I.detail.tag.text)),b()},m=I=>{if(I.detail.choseItem!=null){t(7,p=I.detail.choseItem);const E=Date.now()+u.get(p)*1e3;f=it.fromDate(new Date(E))}else f=void 0;console.log(u.get(p)),b()},v=I=>{t(4,a=I.detail.checked),b()},k=()=>{t(4,a=void 0),f=void 0,t(7,p=void 0),t(1,o=void 0),t(6,g=[]),t(3,i=!1),t(2,r=!1),b()},C=I=>{t(2,r=I.detail.visible)},S=I=>{t(3,i=I.detail.visible)};function $(){o=this.value,t(1,o)}return n.$$set=I=>{"isActive"in I&&t(0,s=I.isActive)},n.$$.update=()=>{n.$$.dirty&1&&_e().then(I=>{t(5,c=I.tags)}),n.$$.dirty&2&&((o==null?void 0:o.trim().length)===0&&t(1,o=void 0),b())},[s,o,r,i,a,c,g,p,u,D,m,v,k,C,S,$]}class ns extends W{constructor(e){super(),J(this,e,ss,ts,Q,{isActive:0})}}function ls(n){let e,t,s,l;return{c(){e=x("button"),t=K("Save"),this.h()},l(r){e=y(r,"BUTTON",{class:!0});var i=w(e);t=X(i,"Save"),i.forEach(h),this.h()},h(){d(e,"class","svelte-1xym1je")},m(r,i){j(r,e,i),_(e,t),s||(l=L(e,"click",n[0]),s=!0)},p:M,i:M,o:M,d(r){r&&h(e),s=!1,l()}}}function rs(n){function e(t){ve.call(this,n,t)}return[e]}class ut extends W{constructor(e){super(),J(this,e,rs,ls,Q,{})}}function is(n){let e,t,s,l;return{c(){e=x("button"),t=K("Cancel"),this.h()},l(r){e=y(r,"BUTTON",{class:!0});var i=w(e);t=X(i,"Cancel"),i.forEach(h),this.h()},h(){d(e,"class","svelte-1r4wap5")},m(r,i){j(r,e,i),_(e,t),s||(l=L(e,"click",n[0]),s=!0)},p:M,i:M,o:M,d(r){r&&h(e),s=!1,l()}}}function os(n){function e(t){ve.call(this,n,t)}return[e]}class dt extends W{constructor(e){super(),J(this,e,os,is,Q,{})}}function as(n){let e,t,s,l,r,i;return{c(){e=x("input"),t=B(),s=x("label"),l=K("Toggle"),this.h()},l(o){e=y(o,"INPUT",{type:!0,id:!0,class:!0}),t=F(o),s=y(o,"LABEL",{for:!0,class:!0});var a=w(s);l=X(a,"Toggle"),a.forEach(h),this.h()},h(){e.checked=n[0],d(e,"type","checkbox"),d(e,"id","switch"),d(e,"class","svelte-pv61jy"),d(s,"for","switch"),d(s,"class","svelte-pv61jy")},m(o,a){j(o,e,a),j(o,t,a),j(o,s,a),_(s,l),r||(i=L(e,"change",n[1]),r=!0)},p(o,[a]){a&1&&(e.checked=o[0])},i:M,o:M,d(o){o&&h(e),o&&h(t),o&&h(s),r=!1,i()}}}function cs(n,e,t){let{checked:s=!1}=e;function l(r){ve.call(this,n,r)}return n.$$set=r=>{"checked"in r&&t(0,s=r.checked)},[s,l]}class fs extends W{constructor(e){super(),J(this,e,cs,as,Q,{checked:0})}}const Ne="https://a321-188-130-155-167.eu.ngrok.io/";async function Ps(n){const e=await be();if(e){const t={token:parseInt(e,10),id:n};await fetch(`${Ne}webhooks/deleteSchedule/`,{method:"DELETE",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}}async function us(n,e,t){const s=await be();if(s){const r={time:n,taskID:e,description:t,token:parseInt(s,10)};await fetch(`${Ne}webhooks/schedule/`,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})}}const ds=async n=>{if(!(await fetch(`${Ne}webhooks/verifyToken/${n}/`)).ok)throw Error("Invalid token");await ft(n),(await At()).forEach(s=>{if(s.date&&s.docId){const l=new Date(s.date.seconds*1e3).toISOString();us(l,s.docId,s.text)}})},hs=async()=>{const n=await be();await fetch(`${Ne}webhooks/unlinkTelegram/${n}`)};function Ye(n){let e,t,s,l,r,i,o,a,c,g,f,p;const u=[ms,gs],b=[];function D(m,v){return m[2]?1:0}return a=D(n),c=b[a]=u[a](n),{c(){e=x("div"),t=x("div"),s=x("div"),l=x("p"),r=K("Notifications"),i=B(),o=x("div"),c.c(),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=w(e);t=y(v,"DIV",{class:!0});var k=w(t);s=y(k,"DIV",{class:!0});var C=w(s);l=y(C,"P",{});var S=w(l);r=X(S,"Notifications"),S.forEach(h),C.forEach(h),i=F(k),o=y(k,"DIV",{class:!0});var $=w(o);c.l($),$.forEach(h),k.forEach(h),v.forEach(h),this.h()},h(){d(s,"class","label svelte-1xlnx46"),d(o,"class","body mt-8 svelte-1xlnx46"),d(t,"class","container select-none svelte-1xlnx46"),d(e,"class","back svelte-1xlnx46")},m(m,v){j(m,e,v),_(e,t),_(t,s),_(s,l),_(l,r),_(t,i),_(t,o),b[a].m(o,null),g=!0,f||(p=[L(t,"click",Ae(n[9])),L(e,"click",Ae(n[5]))],f=!0)},p(m,v){let k=a;a=D(m),a===k?b[a].p(m,v):(me(),A(b[k],1,1,()=>{b[k]=null}),pe(),c=b[a],c?c.p(m,v):(c=b[a]=u[a](m),c.c()),N(c,1),c.m(o,null))},i(m){g||(N(c),g=!0)},o(m){A(c),g=!1},d(m){m&&h(e),b[a].d(),f=!1,$e(p)}}}function gs(n){let e,t,s,l,r,i,o,a,c,g;function f(m,v){return m[3]?vs:ps}let p=f(n),u=p(n);function b(m){n[11](m)}let D={};return n[3]!==void 0&&(D.checked=n[3]),s=new fs({props:D}),fe.push(()=>nt(s,"checked",b)),s.$on("change",n[12]),o=new ut({}),o.$on("click",n[8]),c=new dt({}),c.$on("click",n[6]),{c(){e=x("div"),u.c(),t=B(),P(s.$$.fragment),r=B(),i=x("div"),P(o.$$.fragment),a=B(),P(c.$$.fragment),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=w(e);u.l(v),t=F(v),H(s.$$.fragment,v),v.forEach(h),r=F(m),i=y(m,"DIV",{class:!0});var k=w(i);H(o.$$.fragment,k),a=F(k),H(c.$$.fragment,k),k.forEach(h),this.h()},h(){d(e,"class","notification-status svelte-1xlnx46"),d(i,"class","buttons svelte-1xlnx46")},m(m,v){j(m,e,v),u.m(e,null),_(e,t),R(s,e,null),j(m,r,v),j(m,i,v),R(o,i,null),_(i,a),R(c,i,null),g=!0},p(m,v){p!==(p=f(m))&&(u.d(1),u=p(m),u&&(u.c(),u.m(e,t)));const k={};!l&&v&8&&(l=!0,k.checked=m[3],lt(()=>l=!1)),s.$set(k)},i(m){g||(N(s.$$.fragment,m),N(o.$$.fragment,m),N(c.$$.fragment,m),g=!0)},o(m){A(s.$$.fragment,m),A(o.$$.fragment,m),A(c.$$.fragment,m),g=!1},d(m){m&&h(e),u.d(),q(s),m&&h(r),m&&h(i),q(o),q(c)}}}function ms(n){let e,t,s,l,r,i,o,a,c,g,f,p;return o=new ut({}),o.$on("click",n[7]),c=new dt({}),c.$on("click",n[6]),{c(){e=x("img"),s=B(),l=x("input"),r=B(),i=x("div"),P(o.$$.fragment),a=B(),P(c.$$.fragment),this.h()},l(u){e=y(u,"IMG",{class:!0,src:!0,alt:!0}),s=F(u),l=y(u,"INPUT",{type:!0,placeholder:!0,class:!0}),r=F(u),i=y(u,"DIV",{class:!0});var b=w(i);H(o.$$.fragment,b),a=F(b),H(c.$$.fragment,b),b.forEach(h),this.h()},h(){d(e,"class","pulse cursor-pointer mt-3 mb-3 svelte-1xlnx46"),yt(e.src,t="/images/tg-bot.svg")||d(e,"src",t),d(e,"alt","tg-bot"),d(l,"type","text"),d(l,"placeholder","Enter code"),d(l,"class","svelte-1xlnx46"),d(i,"class","buttons svelte-1xlnx46")},m(u,b){j(u,e,b),j(u,s,b),j(u,l,b),n[10](l),j(u,r,b),j(u,i,b),R(o,i,null),_(i,a),R(c,i,null),g=!0,f||(p=L(e,"click",n[4]),f=!0)},p:M,i(u){g||(N(o.$$.fragment,u),N(c.$$.fragment,u),g=!0)},o(u){A(o.$$.fragment,u),A(c.$$.fragment,u),g=!1},d(u){u&&h(e),u&&h(s),u&&h(l),n[10](null),u&&h(r),u&&h(i),q(o),q(c),f=!1,p()}}}function ps(n){let e;return{c(){e=K("Notification will be disabled")},l(t){e=X(t,"Notification will be disabled")},m(t,s){j(t,e,s)},d(t){t&&h(e)}}}function vs(n){let e;return{c(){e=K("Notification enabled")},l(t){e=X(t,"Notification enabled")},m(t,s){j(t,e,s)},d(t){t&&h(e)}}}function _s(n){let e,t,s=n[0]&&Ye(n);return{c(){s&&s.c(),e=de()},l(l){s&&s.l(l),e=de()},m(l,r){s&&s.m(l,r),j(l,e,r),t=!0},p(l,[r]){l[0]?s?(s.p(l,r),r&1&&N(s,1)):(s=Ye(l),s.c(),N(s,1),s.m(e.parentNode,e)):s&&(me(),A(s,1,1,()=>{s=null}),pe())},i(l){t||(N(s),t=!0)},o(l){A(s),t=!1},d(l){s&&s.d(l),l&&h(e)}}}const bs="https://t.me/inno_frontend_bot";function ks(n,e,t){let{isVisible:s=!1}=e,l,r=!1,i=!0;const o=()=>{be().then(v=>{v===void 0?(t(3,i=!1),t(2,r=!1),Be.set(!1)):(t(3,i=!0),t(2,r=!0),Be.set(!0))})},a=()=>{window.open(bs,"_blank").focus()},c=()=>{t(0,s=!1)},g=()=>{t(0,s=!1),l&&t(1,l.value="",l)},f=async()=>{if(!l.value){l.focus();return}try{ds(l.value),t(0,s=!1)}catch{t(1,l.value="",l),t(1,l.placeholder="Wrong token",l)}},p=async()=>{i||(await hs(),await ft(void 0)),t(0,s=!1)};function u(v){ve.call(this,n,v)}function b(v){fe[v?"unshift":"push"](()=>{l=v,t(1,l)})}function D(v){i=v,t(3,i)}const m=()=>t(3,i=!i);return n.$$set=v=>{"isVisible"in v&&t(0,s=v.isVisible)},n.$$.update=()=>{n.$$.dirty&1&&o()},[s,l,r,i,a,c,g,f,p,u,b,D,m]}class ws extends W{constructor(e){super(),J(this,e,ks,_s,Q,{isVisible:0})}}function xs(n){let e,t,s,l,r,i,o,a,c,g,f,p,u,b,D,m,v,k,C,S,$,I,E,Y,T,ke;function Se(V){n[17](V)}let we={};return n[6]!==void 0&&(we.isVisible=n[6]),S=new ws({props:we}),fe.push(()=>nt(S,"isVisible",Se)),E=new ns({props:{isActive:n[1]}}),E.$on("filter",n[18]),{c(){e=x("nav"),t=x("div"),s=x("div"),l=x("div"),r=B(),i=x("span"),o=K("ABRICOS"),a=B(),c=x("div"),g=x("div"),f=x("div"),p=B(),u=x("div"),b=B(),D=x("div"),m=B(),v=x("div"),k=B(),C=x("div"),P(S.$$.fragment),I=B(),P(E.$$.fragment),this.h()},l(V){e=y(V,"NAV",{class:!0});var O=w(e);t=y(O,"DIV",{class:!0});var re=w(t);s=y(re,"DIV",{class:!0});var ee=w(s);l=y(ee,"DIV",{class:!0}),w(l).forEach(h),r=F(ee),i=y(ee,"SPAN",{class:!0});var xe=w(i);o=X(xe,"ABRICOS"),xe.forEach(h),ee.forEach(h),re.forEach(h),a=F(O),c=y(O,"DIV",{class:!0});var ye=w(c);g=y(ye,"DIV",{class:!0});var Z=w(g);f=y(Z,"DIV",{class:!0,id:!0,style:!0}),w(f).forEach(h),p=F(Z),u=y(Z,"DIV",{class:!0,id:!0}),w(u).forEach(h),b=F(Z),D=y(Z,"DIV",{class:!0,id:!0}),w(D).forEach(h),m=F(Z),v=y(Z,"DIV",{class:!0}),w(v).forEach(h),Z.forEach(h),ye.forEach(h),O.forEach(h),k=F(V),C=y(V,"DIV",{class:!0});var Ie=w(C);H(S.$$.fragment,Ie),Ie.forEach(h),I=F(V),H(E.$$.fragment,V),this.h()},h(){d(l,"class","logo__img svelte-xtkisl"),Ee(l,"spinner",n[3]==!0),d(i,"class","logo__text select-none svelte-xtkisl"),d(s,"class","logo cursor-pointer svelte-xtkisl"),d(t,"class","nav__el left svelte-xtkisl"),d(f,"class","menu__el cursor-pointer svelte-xtkisl"),d(f,"id","filter"),te(f,"transform","rotate("+n[7]+"deg)"),Ee(f,"reverse-spinner",n[2]==!0),d(u,"class","menu__el cursor-pointer svelte-xtkisl"),d(u,"id","notification"),d(D,"class","menu__el cursor-pointer svelte-xtkisl"),d(D,"id","logout"),d(v,"class","user-logo cursor-pointer svelte-xtkisl"),d(g,"class","menu svelte-xtkisl"),d(c,"class","nav__el right svelte-xtkisl"),d(e,"class","p-3 svelte-xtkisl"),d(C,"class","notification-container")},m(V,O){j(V,e,O),_(e,t),_(t,s),_(s,l),_(s,r),_(s,i),_(i,o),_(e,a),_(e,c),_(c,g),_(g,f),n[14](f),_(g,p),_(g,u),n[15](u),_(g,b),_(g,D),_(g,m),_(g,v),n[16](v),j(V,k,O),j(V,C,O),R(S,C,null),j(V,I,O),R(E,V,O),Y=!0,T||(ke=[L(s,"click",n[11]),L(f,"click",n[10]),L(u,"click",n[12]),L(D,"click",n[13]),L(v,"click",ys)],T=!0)},p(V,[O]){O&8&&Ee(l,"spinner",V[3]==!0),(!Y||O&128)&&te(f,"transform","rotate("+V[7]+"deg)"),O&4&&Ee(f,"reverse-spinner",V[2]==!0);const re={};!$&&O&64&&($=!0,re.isVisible=V[6],lt(()=>$=!1)),S.$set(re);const ee={};O&2&&(ee.isActive=V[1]),E.$set(ee)},i(V){Y||(N(S.$$.fragment,V),N(E.$$.fragment,V),Y=!0)},o(V){A(S.$$.fragment,V),A(E.$$.fragment,V),Y=!1},d(V){V&&h(e),n[14](null),n[15](null),n[16](null),V&&h(k),V&&h(C),q(S),V&&h(I),q(E,V),T=!1,$e(ke)}}}function ys(){var n=window.location.pathname;n!="/profile"&&(window.location.href="/profile")}function Is(n,e,t){let s;const l=ot(180);tt(n,l,T=>t(7,s=T));const r=ge();let i,o=!1,a=!1,c=!1,g=window.location.pathname=="/",f,p,u=!1;It(async()=>{await b();let T=await Ft();He.set(T)}),Be.subscribe(()=>b()),ce.subscribe(T=>{T=="folder"&&(t(1,o=!1),l.set(180))});function b(){be().then(T=>{k(T===void 0?"off":"on")})}function D(){var T=window.location.pathname;if(T!="/"){i&&(t(2,c=!0),setTimeout(()=>t(2,c=!1),300));return}t(1,o=!o),o?(l.set(0),a=!1,ce.set("filter")):(l.set(180),ce.set(""))}function m(){Et(ce)==="folder"&&(a=!0),a=!a,a?ce.set("folder"):ce.set("");var T=window.location.pathname;T!="/"?window.location.href="/":t(3,g=!1)}function v(){b(),t(6,u=!u)}function k(T){p&&t(5,p.style.background=`url('/images/notification-${T}.svg') no-repeat center / cover`,p)}async function C(){await Tt(),window.location.href="/login"}He.subscribe(T=>{f&&t(4,f.style.background=`url('${T}') no-repeat center / cover`,f)});function S(T){fe[T?"unshift":"push"](()=>{i=T,t(0,i)})}function $(T){fe[T?"unshift":"push"](()=>{p=T,t(5,p)})}function I(T){fe[T?"unshift":"push"](()=>{f=T,t(4,f)})}function E(T){u=T,t(6,u)}return[i,o,c,g,f,p,u,s,l,r,D,m,v,C,S,$,I,E,T=>r("filter",T.detail)]}class Hs extends W{constructor(e){super(),J(this,e,Is,xs,Q,{})}}export{dt as C,Wt as M,Hs as N,ut as S,Ht as T,Ps as a,js as b,Bs as c,ct as d,St as e,Ts as f,_e as g,he as h,Ns as i,zs as j,Fs as k,$s as l,Os as m,As as n,ce as o,Ss as p,Ft as q,Vs as r,us as s,Ls as t,Nt as u,Us as v,He as w,Ms as x};
