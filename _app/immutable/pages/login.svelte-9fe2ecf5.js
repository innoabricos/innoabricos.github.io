import{S as G,i as j,s as Q,e as g,t as C,c as v,a as $,h as N,d as _,b as i,g as T,L as c,k as I,m as A,M as re,E as m,j as le,w as W,x as z,y as H,Q as R,R as x,q as P,o as U,B as J,V as ne,F as ae,l as S,G as oe}from"../chunks/index-b7066284.js";import{c as ie,d as ce,g as ue}from"../chunks/firebase-d9cec40e.js";import{P as fe}from"../chunks/ProgressIndicator-e03e5201.js";function ee(n){let t,s;return{c(){t=g("span"),s=C("Abricos"),this.h()},l(e){t=v(e,"SPAN",{class:!0});var r=$(t);s=N(r,"Abricos"),r.forEach(_),this.h()},h(){i(t,"class","logo_text svelte-13epv24")},m(e,r){T(e,t,r),c(t,s)},d(e){e&&_(t)}}}function _e(n){let t,s,e,r,l=n[0]&&ee();return{c(){t=g("div"),s=g("img"),r=I(),l&&l.c(),this.h()},l(a){t=v(a,"DIV",{class:!0});var d=$(t);s=v(d,"IMG",{src:!0,alt:!0,class:!0}),r=A(d),l&&l.l(d),d.forEach(_),this.h()},h(){re(s.src,e="/images/logo.svg")||i(s,"src",e),i(s,"alt",""),i(s,"class","logo_svg svelte-13epv24"),i(t,"class","logo_container svelte-13epv24")},m(a,d){T(a,t,d),c(t,s),c(t,r),l&&l.m(t,null)},p(a,[d]){a[0]?l||(l=ee(),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i:m,o:m,d(a){a&&_(t),l&&l.d()}}}function de(n,t,s){let{withText:e}=t;return n.$$set=r=>{"withText"in r&&s(0,e=r.withText)},[e]}class he extends G{constructor(t){super(),j(this,t,de,_e,Q,{withText:0})}}const te={"auth/wrong-password":"Wrong password.","auth/too-many-requests":"Too many requests from your side, please try again a bit later.","auth/email-already-in-use":"This email is already in use.","auth/user-not-found":"User with such email doesnt exist"};function se(n){let t;return{c(){t=C(n[2])},l(s){t=N(s,n[2])},m(s,e){T(s,t,e)},p(s,e){e&4&&le(t,s[2])},d(s){s&&_(t)}}}function pe(n){let t,s,e,r,l,a,d,o,b,y,k,h,p,F,M,w,B,V,O,K;e=new he({props:{withText:!0}});let f=n[2]!==""&&se(n);return{c(){t=g("div"),s=g("div"),W(e.$$.fragment),r=I(),l=g("form"),a=g("input"),d=I(),o=g("input"),b=I(),y=g("div"),f&&f.c(),k=I(),h=g("div"),p=g("button"),F=C("Sign in"),M=I(),w=g("button"),B=C("Register"),this.h()},l(u){t=v(u,"DIV",{class:!0});var E=$(t);s=v(E,"DIV",{class:!0});var q=$(s);z(e.$$.fragment,q),r=A(q),l=v(q,"FORM",{class:!0});var D=$(l);a=v(D,"INPUT",{type:!0,class:!0,placeholder:!0}),d=A(D),o=v(D,"INPUT",{type:!0,class:!0,placeholder:!0}),D.forEach(_),b=A(q),y=v(q,"DIV",{class:!0});var X=$(y);f&&f.l(X),X.forEach(_),k=A(q),h=v(q,"DIV",{class:!0});var L=$(h);p=v(L,"BUTTON",{class:!0,"data-auth":!0});var Y=$(p);F=N(Y,"Sign in"),Y.forEach(_),M=A(L),w=v(L,"BUTTON",{class:!0,"data-auth":!0});var Z=$(w);B=N(Z,"Register"),Z.forEach(_),L.forEach(_),q.forEach(_),E.forEach(_),this.h()},h(){i(a,"type","text"),i(a,"class","auth_input svelte-rxcusq"),i(a,"placeholder","Email"),i(o,"type","password"),i(o,"class","auth_input svelte-rxcusq"),i(o,"placeholder","Password"),i(l,"class","auth_form svelte-rxcusq"),i(y,"class","error_message svelte-rxcusq"),i(p,"class","auth_button auth_button_login svelte-rxcusq"),i(p,"data-auth","signin"),i(w,"class","auth_button auth_button_signup svelte-rxcusq"),i(w,"data-auth","signup"),i(h,"class","auth_buttons_section svelte-rxcusq"),i(s,"class","form_container svelte-rxcusq"),i(t,"class","login_box svelte-rxcusq")},m(u,E){T(u,t,E),c(t,s),H(e,s,null),c(s,r),c(s,l),c(l,a),R(a,n[0]),c(l,d),c(l,o),R(o,n[1]),c(s,b),c(s,y),f&&f.m(y,null),c(s,k),c(s,h),c(h,p),c(p,F),c(h,M),c(h,w),c(w,B),V=!0,O||(K=[x(a,"keypress",n[5]),x(a,"input",n[6]),x(o,"keypress",n[5]),x(o,"input",n[7]),x(p,"click",n[3]),x(w,"click",n[4])],O=!0)},p(u,[E]){E&1&&a.value!==u[0]&&R(a,u[0]),E&2&&o.value!==u[1]&&R(o,u[1]),u[2]!==""?f?f.p(u,E):(f=se(u),f.c(),f.m(y,null)):f&&(f.d(1),f=null)},i(u){V||(P(e.$$.fragment,u),V=!0)},o(u){U(e.$$.fragment,u),V=!1},d(u){u&&_(t),J(e),f&&f.d(),O=!1,ne(K)}}}function me(n,t,s){let e,r,l="";async function a(){var k;if(!(e.length===0||r.length===0))try{(await ie(e,r)).user&&(window.location.href="/")}catch(h){const p=h;s(2,l=(k=te[p.code])!=null?k:p.code)}}async function d(){var k;if(!(e.length===0||r.length===0))try{(await ce(e,r)).user&&(window.location.href="/")}catch(h){const p=h;s(2,l=(k=te[p.code])!=null?k:p.code)}}function o(k){k.key==="Enter"&&a()}function b(){e=this.value,s(0,e)}function y(){r=this.value,s(1,r)}return[e,r,l,a,d,o,b,y]}class ge extends G{constructor(t){super(),j(this,t,me,pe,Q,{})}}function ve(n){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function be(n){let t,s,e,r;const l=[ye,ke],a=[];function d(o,b){return o[0]?1:0}return t=d(n),s=a[t]=l[t](n),{c(){s.c(),e=S()},l(o){s.l(o),e=S()},m(o,b){a[t].m(o,b),T(o,e,b),r=!0},p(o,b){s.p(o,b)},i(o){r||(P(s),r=!0)},o(o){U(s),r=!1},d(o){a[t].d(o),o&&_(e)}}}function ke(n){let t=window.location.href="/",s;return{c(){s=C(t)},l(e){s=N(e,t)},m(e,r){T(e,s,r)},p:m,i:m,o:m,d(e){e&&_(s)}}}function ye(n){let t,s;return t=new ge({}),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,r){H(t,e,r),s=!0},p:m,i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){U(t.$$.fragment,e),s=!1},d(e){J(t,e)}}}function $e(n){let t,s;return t=new fe({}),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,r){H(t,e,r),s=!0},p:m,i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){U(t.$$.fragment,e),s=!1},d(e){J(t,e)}}}function we(n){let t,s,e={ctx:n,current:null,token:null,hasCatch:!1,pending:$e,then:be,catch:ve,value:0,blocks:[,,,]};return ae(ue(),e),{c(){t=S(),e.block.c()},l(r){t=S(),e.block.l(r)},m(r,l){T(r,t,l),e.block.m(r,e.anchor=l),e.mount=()=>t.parentNode,e.anchor=t,s=!0},p(r,[l]){n=r,oe(e,n,l)},i(r){s||(P(e.block),s=!0)},o(r){for(let l=0;l<3;l+=1){const a=e.blocks[l];U(a)}s=!1},d(r){r&&_(t),e.block.d(r),e.token=null,e=null}}}class xe extends G{constructor(t){super(),j(this,t,null,we,Q,{})}}export{xe as default};
