import{S as c,i as p,s as g,F as b,l as s,g as h,G as m,q as w,o as l,d as f,E as i,H as u,I as x,J as v,K as y}from"../chunks/index-0489bdd4.js";import{i as k}from"../chunks/firebase-218fcd9a.js";function z(a){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function _(a){let e;const n=a[1].default,t=u(n,a,a[0],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,o){t&&t.m(r,o),e=!0},p(r,o){t&&t.p&&(!e||o&1)&&x(t,n,r,r[0],e?y(n,r[0],o,null):v(r[0]),null)},i(r){e||(w(t,r),e=!0)},o(r){l(t,r),e=!1},d(r){t&&t.d(r)}}}function j(a){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function S(a){let e,n,t={ctx:a,current:null,token:null,hasCatch:!1,pending:j,then:_,catch:z,blocks:[,,,]};return b(k(),t),{c(){e=s(),t.block.c()},l(r){e=s(),t.block.l(r)},m(r,o){h(r,e,o),t.block.m(r,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(r,[o]){a=r,m(t,a,o)},i(r){n||(w(t.block),n=!0)},o(r){for(let o=0;o<3;o+=1){const d=t.blocks[o];l(d)}n=!1},d(r){r&&f(e),t.block.d(r),t.token=null,t=null}}}function $(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,t]}class N extends c{constructor(e){super(),p(this,e,$,S,g,{})}}export{N as default};
