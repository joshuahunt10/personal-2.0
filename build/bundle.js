var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(t,e,n){t.$$.on_destroy.push(i(e,n))}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,c,s){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,c);if(i){const o=u(e,n,r,s);t.p(o,i)}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function $(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}let d,h=!1;function m(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function g(t,e){h?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const c=m(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[c]+1;const s=c+1;n[s]=t,o=Math.max(s,o)}const c=[],s=[];let i=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(c.push(e[t-1]);i>=t;i--)s.push(e[i]);i--}for(;i>=0;i--)s.push(e[i]);c.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<s.length;e++){for(;n<c.length&&s[e].claim_order>=c[n].claim_order;)n++;const r=n<c.length?c[n]:null;t.insertBefore(s[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function y(t,e,n){h&&!n?g(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function x(){return v("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:E(t,r,e[r])}function A(t){return Array.from(t.childNodes)}function I(t,e,n,r,o=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c))return n(c),t.splice(r,1),o||(t.claim_info.last_index=r),c}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c))return n(c),t.splice(r,1),o?t.claim_info.last_index--:t.claim_info.last_index=r,c}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function P(t,e,n,r){return I(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):b(e)))}function L(t,e){return I(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>v(e)),!0)}function N(t){return L(t," ")}function j(t){d=t}function R(){if(!d)throw new Error("Function called outside component initialization");return d}function S(){const t=R();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}function C(t,e){R().$$.context.set(t,e)}function O(t){return R().$$.context.get(t)}const T=[],H=[],B=[],M=[],D=Promise.resolve();let U=!1;function V(t){B.push(t)}let K=!1;const G=new Set;function F(){if(!K){K=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];j(e),W(e.$$)}for(j(null),T.length=0;H.length;)H.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];G.has(e)||(G.add(e),e())}B.length=0}while(T.length);for(;M.length;)M.pop()();U=!1,K=!1,G.clear()}}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const q=new Set;let z;function J(){z={r:0,c:[],p:z}}function Z(){z.r||o(z.c),z=z.p}function Q(t,e){t&&t.i&&(q.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const s=t[c],i=e[c];if(i){for(const t in s)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[c]=i}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function tt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function rt(t,e,r,s){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),s||V((()=>{const e=a.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(V)}function ot(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(T.push(t),U||(U=!0,D.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,c,s,i,a,l=[-1]){const u=d;j(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=c?c(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&ct(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){h=!0;const t=A(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&Q(e.$$.fragment),rt(e,n.target,n.anchor,n.customElement),h=!1,F()}j(u)}class it{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function lt(e,n=t){let r;const o=[];function c(t){if(s(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,i=t){const a=[s,i];return o.push(a),1===o.length&&(r=n(c)||t),s(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ut(e,n,r){const s=!Array.isArray(e),a=s?[e]:e,l=n.length<2;return{subscribe:lt(r,(e=>{let r=!1;const u=[];let f=0,p=t;const $=()=>{if(f)return;p();const r=n(s?u[0]:u,e);l?e(r):p=c(r)?r:t},d=a.map(((t,e)=>i(t,(t=>{u[e]=t,f&=~(1<<e),r&&$()}),(()=>{f|=1<<e}))));return r=!0,$(),function(){o(d),p()}})).subscribe}}const ft={},pt={};function $t(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const dt=function(t,e){const n=[];let r=$t(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=$t(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[c?"replace":"assign"](e)}r=$t(t),n.forEach((t=>t({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,c){const[s,i=""]=c.split("?");e++,n.push({pathname:s,search:i}),r.push(t)},replaceState(t,o,c){const[s,i=""]=c.split("?");n[e]={pathname:s,search:i},r[e]=t}}}}()),{navigate:ht}=dt,mt=/^:(.+)/;function gt(t,e){return t.substr(0,e.length)===e}function yt(t){return"*"===t[0]}function _t(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function bt(t){return t.replace(/(^\/+|\/+$)/g,"")}function vt(t,e){return{route:t,score:t.default?0:_t(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return mt.test(t)}(e)?yt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function wt(t,e){let n,r;const[o]=e.split("?"),c=_t(o),s=""===c[0],i=function(t){return t.map(vt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,o=i.length;t<o;t++){const o=i[t].route;let a=!1;if(o.default){r={route:o,params:{},uri:e};continue}const l=_t(o.path),u={},f=Math.max(c.length,l.length);let p=0;for(;p<f;p++){const t=l[p],e=c[p];if(void 0!==t&&yt(t)){u["*"===t?"*":t.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===e){a=!0;break}let n=mt.exec(t);if(n&&!s){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){a=!0;break}}if(!a){n={route:o,params:u,uri:"/"+c.slice(0,p).join("/")};break}}return n||r||null}function xt(t,e){return t+(e?`?${e}`:"")}function Et(t,e){return`${bt("/"===e?t:`${bt(t)}/${bt(e)}`)}/`}function kt(t){let e;const n=t[9].default,r=l(n,t,t[8],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[o]){r&&r.p&&(!e||256&o)&&f(r,n,t,t[8],e?o:-1,null,null)},i(t){e||(Q(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){r&&r.d(t)}}}function At(t,e,n){let r,o,c,{$$slots:s={},$$scope:i}=e,{basepath:l="/"}=e,{url:u=null}=e;const f=O(ft),p=O(pt),$=lt([]);a(t,$,(t=>n(7,c=t)));const d=lt(null);let h=!1;const m=f||lt(u?{pathname:u}:dt.location);a(t,m,(t=>n(6,o=t)));const g=p?p.routerBase:lt({path:l,uri:l});a(t,g,(t=>n(5,r=t)));const y=ut([g,d],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}}));var _;return f||(_=()=>dt.listen((t=>{m.set(t.location)})),R().$$.on_mount.push(_),C(ft,m)),C(pt,{activeRoute:d,base:g,routerBase:y,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=Et(e,n),"undefined"==typeof window){if(h)return;const e=function(t,e){return wt([t],e)}(t,o.pathname);e&&(d.set(e),h=!0)}else $.update((e=>(e.push(t),e)))},unregisterRoute:function(t){$.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,l=t.basepath),"url"in t&&n(4,u=t.url),"$$scope"in t&&n(8,i=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:t}=r;$.update((e=>(e.forEach((e=>e.path=Et(t,e._path))),e)))}if(192&t.$$.dirty){const t=wt(c,o.pathname);d.set(t)}},[$,m,g,l,u,r,o,c,i,s]}class It extends it{constructor(t){super(),st(this,t,At,kt,s,{basepath:3,url:4})}}const Pt=t=>({params:4&t,location:16&t}),Lt=t=>({params:t[2],location:t[4]});function Nt(t){let e,n,r,o;const c=[Rt,jt],s=[];function i(t,e){return null!==t[0]?0:1}return e=i(t),n=s[e]=c[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){s[e].m(t,n),y(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?s[e].p(t,o):(J(),X(s[a],1,1,(()=>{s[a]=null})),Z(),n=s[e],n?n.p(t,o):(n=s[e]=c[e](t),n.c()),Q(n,1),n.m(r.parentNode,r))},i(t){o||(Q(n),o=!0)},o(t){X(n),o=!1},d(t){s[e].d(t),t&&_(r)}}}function jt(t){let e;const n=t[10].default,r=l(n,t,t[9],Lt);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,o){r&&r.p&&(!e||532&o)&&f(r,n,t,t[9],e?o:-1,Pt,Lt)},i(t){e||(Q(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){r&&r.d(t)}}}function Rt(t){let n,r,o;const c=[{location:t[4]},t[2],t[3]];var s=t[0];function i(t){let n={};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return s&&(n=new s(i())),{c(){n&&et(n.$$.fragment),r=x()},l(t){n&&nt(n.$$.fragment,t),r=x()},m(t,e){n&&rt(n,t,e),y(t,r,e),o=!0},p(t,e){const o=28&e?Y(c,[16&e&&{location:t[4]},4&e&&tt(t[2]),8&e&&tt(t[3])]):{};if(s!==(s=t[0])){if(n){J();const t=n;X(t.$$.fragment,1,0,(()=>{ot(t,1)})),Z()}s?(n=new s(i()),et(n.$$.fragment),Q(n.$$.fragment,1),rt(n,r.parentNode,r)):n=null}else s&&n.$set(o)},i(t){o||(n&&Q(n.$$.fragment,t),o=!0)},o(t){n&&X(n.$$.fragment,t),o=!1},d(t){t&&_(r),n&&ot(n,t)}}}function St(t){let e,n,r=null!==t[1]&&t[1].route===t[7]&&Nt(t);return{c(){r&&r.c(),e=x()},l(t){r&&r.l(t),e=x()},m(t,o){r&&r.m(t,o),y(t,e,o),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?r?(r.p(t,n),2&n&&Q(r,1)):(r=Nt(t),r.c(),Q(r,1),r.m(e.parentNode,e)):r&&(J(),X(r,1,1,(()=>{r=null})),Z())},i(t){n||(Q(r),n=!0)},o(t){X(r),n=!1},d(t){r&&r.d(t),t&&_(e)}}}function Ct(t,n,r){let o,c,{$$slots:s={},$$scope:i}=n,{path:l=""}=n,{component:u=null}=n;const{registerRoute:f,unregisterRoute:$,activeRoute:d}=O(pt);a(t,d,(t=>r(1,o=t)));const h=O(ft);a(t,h,(t=>r(4,c=t)));const m={path:l,default:""===l};let g={},y={};var _;return f(m),"undefined"!=typeof window&&(_=()=>{$(m)},R().$$.on_destroy.push(_)),t.$$set=t=>{r(13,n=e(e({},n),p(t))),"path"in t&&r(8,l=t.path),"component"in t&&r(0,u=t.component),"$$scope"in t&&r(9,i=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&o&&o.route===m&&r(2,g=o.params);{const{path:t,component:e,...o}=n;r(3,y=o)}},n=p(n),[u,o,g,y,c,d,h,m,l,i,s]}class Ot extends it{constructor(t){super(),st(this,t,Ct,St,s,{path:8,component:0})}}function Tt(t){let n,r,o,c;const s=t[16].default,i=l(s,t,t[15],null);let a=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],u={};for(let t=0;t<a.length;t+=1)u=e(u,a[t]);return{c(){n=b("a"),i&&i.c(),this.h()},l(t){n=P(t,"A",{href:!0,"aria-current":!0});var e=A(n);i&&i.l(e),e.forEach(_),this.h()},h(){k(n,u)},m(e,s){var a,l,u,f;y(e,n,s),i&&i.m(n,null),r=!0,o||(a=n,l="click",u=t[5],a.addEventListener(l,u,f),c=()=>a.removeEventListener(l,u,f),o=!0)},p(t,[e]){i&&i.p&&(!r||32768&e)&&f(i,s,t,t[15],r?e:-1,null,null),k(n,u=Y(a,[(!r||1&e)&&{href:t[0]},(!r||4&e)&&{"aria-current":t[2]},2&e&&t[1],64&e&&t[6]]))},i(t){r||(Q(i,t),r=!0)},o(t){X(i,t),r=!1},d(t){t&&_(n),i&&i.d(t),o=!1,c()}}}function Ht(t,n,r){let o;const c=["to","replace","state","getProps"];let s,i,l=$(n,c),{$$slots:u={},$$scope:f}=n,{to:d="#"}=n,{replace:h=!1}=n,{state:m={}}=n,{getProps:g=(()=>({}))}=n;const{base:y}=O(pt);a(t,y,(t=>r(13,s=t)));const _=O(ft);a(t,_,(t=>r(14,i=t)));const b=S();let v,w,x,E;return t.$$set=t=>{n=e(e({},n),p(t)),r(6,l=$(n,c)),"to"in t&&r(7,d=t.to),"replace"in t&&r(8,h=t.replace),"state"in t&&r(9,m=t.state),"getProps"in t&&r(10,g=t.getProps),"$$scope"in t&&r(15,f=t.$$scope)},t.$$.update=()=>{8320&t.$$.dirty&&r(0,v="/"===d?s.uri:function(t,e){if(gt(t,"/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),c=_t(n),s=_t(o);if(""===c[0])return xt(o,r);if(!gt(c[0],"."))return xt(("/"===o?"":"/")+s.concat(c).join("/"),r);const i=s.concat(c),a=[];return i.forEach((t=>{".."===t?a.pop():"."!==t&&a.push(t)})),xt("/"+a.join("/"),r)}(d,s.uri)),16385&t.$$.dirty&&r(11,w=gt(i.pathname,v)),16385&t.$$.dirty&&r(12,x=v===i.pathname),4096&t.$$.dirty&&r(2,o=x?"page":void 0),23553&t.$$.dirty&&r(1,E=g({location:i,href:v,isPartiallyCurrent:w,isCurrent:x}))},[v,E,o,y,_,function(t){if(b("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=i.pathname===v||h;ht(v,{state:m,replace:e})}},l,d,h,m,g,w,x,s,i,f,u]}class Bt extends it{constructor(t){super(),st(this,t,Ht,Tt,s,{to:7,replace:8,state:9,getProps:10})}}function Mt(e){let n,r;return{c(){n=b("p"),r=v("This is home")},l(t){n=P(t,"P",{});var e=A(n);r=L(e,"This is home"),e.forEach(_)},m(t,e){y(t,n,e),g(n,r)},p:t,i:t,o:t,d(t){t&&_(n)}}}class Dt extends it{constructor(t){super(),st(this,t,null,Mt,s,{})}}function Ut(e){let n,r;return{c(){n=b("p"),r=v("About page")},l(t){n=P(t,"P",{});var e=A(n);r=L(e,"About page"),e.forEach(_)},m(t,e){y(t,n,e),g(n,r)},p:t,i:t,o:t,d(t){t&&_(n)}}}class Vt extends it{constructor(t){super(),st(this,t,null,Ut,s,{})}}function Kt(e){let n,r;return{c(){n=b("p"),r=v("about this website")},l(t){n=P(t,"P",{});var e=A(n);r=L(e,"about this website"),e.forEach(_)},m(t,e){y(t,n,e),g(n,r)},p:t,i:t,o:t,d(t){t&&_(n)}}}class Gt extends it{constructor(t){super(),st(this,t,null,Kt,s,{})}}function Ft(t){let e,n;return{c(){e=b("img"),this.h()},l(t){e=P(t,"IMG",{src:!0,alt:!0}),this.h()},h(){e.src!==(n="images/me_logo2.png")&&E(e,"src","images/me_logo2.png"),E(e,"alt","A circle with the letters J H on top of it.")},m(t,n){y(t,e,n)},d(t){t&&_(e)}}}function Wt(t){let e;return{c(){e=v("Home")},l(t){e=L(t,"Home")},m(t,n){y(t,e,n)},d(t){t&&_(e)}}}function qt(t){let e;return{c(){e=v("About")},l(t){e=L(t,"About")},m(t,n){y(t,e,n)},d(t){t&&_(e)}}}function zt(t){let e;return{c(){e=v("This Website")},l(t){e=L(t,"This Website")},m(t,n){y(t,e,n)},d(t){t&&_(e)}}}function Jt(t){let e,n,r,o,c,s,i,a,l,u,f,p,$,d,h,m,x,k,I,j,R,S,C,O,T,H,B,M,D;return r=new Bt({props:{to:"/",title:"Home page",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),i=new Bt({props:{class:"header-link",to:"/",title:"Home page",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),u=new Bt({props:{class:"header-link",to:"about",title:"About page",$$slots:{default:[qt]},$$scope:{ctx:t}}}),x=new Bt({props:{class:"header-link",to:"about-website",title:"This website",$$slots:{default:[zt]},$$scope:{ctx:t}}}),O=new Ot({props:{path:"about",component:Vt}}),H=new Ot({props:{path:"about-website",component:Gt}}),M=new Ot({props:{path:"/",component:Dt}}),{c(){e=b("nav"),n=b("div"),et(r.$$.fragment),o=w(),c=b("ul"),s=b("li"),et(i.$$.fragment),a=w(),l=b("li"),et(u.$$.fragment),f=w(),p=b("li"),$=b("a"),d=v("Resume"),h=w(),m=b("li"),et(x.$$.fragment),k=w(),I=b("li"),j=b("a"),R=v("LinkedIn"),S=w(),C=b("div"),et(O.$$.fragment),T=w(),et(H.$$.fragment),B=w(),et(M.$$.fragment),this.h()},l(t){e=P(t,"NAV",{class:!0});var g=A(e);n=P(g,"DIV",{class:!0});var y=A(n);nt(r.$$.fragment,y),y.forEach(_),o=N(g),c=P(g,"UL",{class:!0});var b=A(c);s=P(b,"LI",{class:!0});var v=A(s);nt(i.$$.fragment,v),v.forEach(_),a=N(b),l=P(b,"LI",{class:!0});var w=A(l);nt(u.$$.fragment,w),w.forEach(_),f=N(b),p=P(b,"LI",{class:!0});var E=A(p);$=P(E,"A",{class:!0,href:!0,target:!0,title:!0});var D=A($);d=L(D,"Resume"),D.forEach(_),E.forEach(_),h=N(b),m=P(b,"LI",{class:!0});var U=A(m);nt(x.$$.fragment,U),U.forEach(_),k=N(b),I=P(b,"LI",{class:!0});var V=A(I);j=P(V,"A",{class:!0,href:!0,target:!0,title:!0});var K=A(j);R=L(K,"LinkedIn"),K.forEach(_),V.forEach(_),b.forEach(_),g.forEach(_),S=N(t),C=P(t,"DIV",{});var G=A(C);nt(O.$$.fragment,G),T=N(G),nt(H.$$.fragment,G),B=N(G),nt(M.$$.fragment,G),G.forEach(_),this.h()},h(){E(n,"class","logo-wrapper svelte-mws8y6"),E(s,"class","svelte-mws8y6"),E(l,"class","svelte-mws8y6"),E($,"class","header-link"),E($,"href","https://drive.google.com/file/d/1GcPOF6HMZw7Vx1i0eet_ebTCNUVxxGAd/view?usp=sharing"),E($,"target","resume"),E($,"title","Resume"),E(p,"class","svelte-mws8y6"),E(m,"class","svelte-mws8y6"),E(j,"class","header-link"),E(j,"href","https://www.linkedin.com/in/joshuahunt88/"),E(j,"target","linkedIn"),E(j,"title","LinkedIn"),E(I,"class","svelte-mws8y6"),E(c,"class","svelte-mws8y6"),E(e,"class","svelte-mws8y6")},m(t,_){y(t,e,_),g(e,n),rt(r,n,null),g(e,o),g(e,c),g(c,s),rt(i,s,null),g(c,a),g(c,l),rt(u,l,null),g(c,f),g(c,p),g(p,$),g($,d),g(c,h),g(c,m),rt(x,m,null),g(c,k),g(c,I),g(I,j),g(j,R),y(t,S,_),y(t,C,_),rt(O,C,null),g(C,T),rt(H,C,null),g(C,B),rt(M,C,null),D=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o);const c={};2&e&&(c.$$scope={dirty:e,ctx:t}),u.$set(c);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),x.$set(s)},i(t){D||(Q(r.$$.fragment,t),Q(i.$$.fragment,t),Q(u.$$.fragment,t),Q(x.$$.fragment,t),Q(O.$$.fragment,t),Q(H.$$.fragment,t),Q(M.$$.fragment,t),D=!0)},o(t){X(r.$$.fragment,t),X(i.$$.fragment,t),X(u.$$.fragment,t),X(x.$$.fragment,t),X(O.$$.fragment,t),X(H.$$.fragment,t),X(M.$$.fragment,t),D=!1},d(t){t&&_(e),ot(r),ot(i),ot(u),ot(x),t&&_(S),t&&_(C),ot(O),ot(H),ot(M)}}}function Zt(t){let e,n;return e=new It({props:{url:t[0],$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){et(e.$$.fragment)},l(t){nt(e.$$.fragment,t)},m(t,r){rt(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.url=t[0]),2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){ot(e,t)}}}function Qt(t,e,n){let{url:r=""}=e;return t.$$set=t=>{"url"in t&&n(0,r=t.url)},[r]}return new class extends it{constructor(t){super(),st(this,t,Qt,Zt,s,{url:0})}}({target:document.body,hydrate:!0})}();
//# sourceMappingURL=bundle.js.map