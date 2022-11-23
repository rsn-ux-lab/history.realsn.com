(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function uo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ho(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ue(s)?$h(s):ho(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ue(t))return t;if(re(t))return t}}const Bh=/;(?![^(]*\))/g,Wh=/:([^]+)/,Uh=/\/\*.*?\*\//gs;function $h(t){const e={};return t.replace(Uh,"").split(Bh).forEach(n=>{if(n){const s=n.split(Wh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fo(t){let e="";if(ue(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=fo(t[n]);s&&(e+=s+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jh=uo(Hh);function Xa(t){return!!t||t===""}const Ye=t=>ue(t)?t:t==null?"":M(t)||re(t)&&(t.toString===nc||!B(t.toString))?JSON.stringify(t,Za,2):String(t),Za=(t,e)=>e&&e.__v_isRef?Za(t,e.value):Nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ec(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!M(e)&&!sc(e)?String(e):e,ne={},xn=[],tt=()=>{},Vh=()=>!1,zh=/^on[^a-z]/,bi=t=>zh.test(t),_o=t=>t.startsWith("onUpdate:"),Ee=Object.assign,po=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kh=Object.prototype.hasOwnProperty,V=(t,e)=>Kh.call(t,e),M=Array.isArray,Nn=t=>Ci(t)==="[object Map]",ec=t=>Ci(t)==="[object Set]",B=t=>typeof t=="function",ue=t=>typeof t=="string",go=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",tc=t=>re(t)&&B(t.then)&&B(t.catch),nc=Object.prototype.toString,Ci=t=>nc.call(t),qh=t=>Ci(t).slice(8,-1),sc=t=>Ci(t)==="[object Object]",mo=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gh=/-(\w)/g,ft=wi(t=>t.replace(Gh,(e,n)=>n?n.toUpperCase():"")),Qh=/\B([A-Z])/g,Hn=wi(t=>t.replace(Qh,"-$1").toLowerCase()),Ei=wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=wi(t=>t?`on${Ei(t)}`:""),Zs=(t,e)=>!Object.is(t,e),ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ei=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nl;const Yh=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let at;class Jh{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}run(e){if(this.active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Xh(t,e=at){e&&e.active&&e.effects.push(t)}const yo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rc=t=>(t.w&$t)>0,oc=t=>(t.n&$t)>0,Zh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$t},ed=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];rc(i)&&!oc(i)?i.delete(t):e[n++]=i,i.w&=~$t,i.n&=~$t}e.length=n}},Er=new WeakMap;let ss=0,$t=1;const Ir=30;let Xe;const cn=Symbol(""),Tr=Symbol("");class vo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xh(this,s)}run(){if(!this.active)return this.fn();let e=Xe,n=Dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xe,Xe=this,Dt=!0,$t=1<<++ss,ss<=Ir?Zh(this):Al(this),this.fn()}finally{ss<=Ir&&ed(this),$t=1<<--ss,Xe=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xe===this?this.deferStop=!0:this.active&&(Al(this),this.onStop&&this.onStop(),this.active=!1)}}function Al(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const lc=[];function jn(){lc.push(Dt),Dt=!1}function Vn(){const t=lc.pop();Dt=t===void 0?!0:t}function Be(t,e,n){if(Dt&&Xe){let s=Er.get(t);s||Er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=yo()),ac(i)}}function ac(t,e){let n=!1;ss<=Ir?oc(t)||(t.n|=$t,n=!rc(t)):n=!t.has(Xe),n&&(t.add(Xe),Xe.deps.push(t))}function St(t,e,n,s,i,r){const o=Er.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&M(t)){const a=ic(s);o.forEach((c,h)=>{(h==="length"||h>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":M(t)?mo(n)&&l.push(o.get("length")):(l.push(o.get(cn)),Nn(t)&&l.push(o.get(Tr)));break;case"delete":M(t)||(l.push(o.get(cn)),Nn(t)&&l.push(o.get(Tr)));break;case"set":Nn(t)&&l.push(o.get(cn));break}if(l.length===1)l[0]&&Sr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Sr(yo(a))}}function Sr(t,e){const n=M(t)?t:[...t];for(const s of n)s.computed&&kl(s);for(const s of n)s.computed||kl(s)}function kl(t,e){(t!==Xe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const td=uo("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(go)),nd=bo(),sd=bo(!1,!0),id=bo(!0),Rl=rd();function rd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=q(this);for(let r=0,o=this.length;r<o;r++)Be(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jn();const s=q(this)[e].apply(this,n);return Vn(),s}}),t}function bo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Cd:_c:e?fc:dc).get(s))return s;const o=M(s);if(!t&&o&&V(Rl,i))return Reflect.get(Rl,i,r);const l=Reflect.get(s,i,r);return(go(i)?cc.has(i):td(i))||(t||Be(s,"get",i),e)?l:Se(l)?o&&mo(i)?l:l.value:re(l)?t?pc(l):Eo(l):l}}const od=uc(),ld=uc(!0);function uc(t=!1){return function(n,s,i,r){let o=n[s];if(us(o)&&Se(o)&&!Se(i))return!1;if(!t&&(!xr(i)&&!us(i)&&(o=q(o),i=q(i)),!M(n)&&Se(o)&&!Se(i)))return o.value=i,!0;const l=M(n)&&mo(s)?Number(s)<n.length:V(n,s),a=Reflect.set(n,s,i,r);return n===q(r)&&(l?Zs(i,o)&&St(n,"set",s,i):St(n,"add",s,i)),a}}function ad(t,e){const n=V(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&St(t,"delete",e,void 0),s}function cd(t,e){const n=Reflect.has(t,e);return(!go(e)||!cc.has(e))&&Be(t,"has",e),n}function ud(t){return Be(t,"iterate",M(t)?"length":cn),Reflect.ownKeys(t)}const hc={get:nd,set:od,deleteProperty:ad,has:cd,ownKeys:ud},hd={get:id,set(t,e){return!0},deleteProperty(t,e){return!0}},dd=Ee({},hc,{get:sd,set:ld}),Co=t=>t,Ii=t=>Reflect.getPrototypeOf(t);function Us(t,e,n=!1,s=!1){t=t.__v_raw;const i=q(t),r=q(e);n||(e!==r&&Be(i,"get",e),Be(i,"get",r));const{has:o}=Ii(i),l=s?Co:n?So:To;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function $s(t,e=!1){const n=this.__v_raw,s=q(n),i=q(t);return e||(t!==i&&Be(s,"has",t),Be(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Hs(t,e=!1){return t=t.__v_raw,!e&&Be(q(t),"iterate",cn),Reflect.get(t,"size",t)}function Pl(t){t=q(t);const e=q(this);return Ii(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function Ol(t,e){e=q(e);const n=q(this),{has:s,get:i}=Ii(n);let r=s.call(n,t);r||(t=q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Zs(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function Dl(t){const e=q(this),{has:n,get:s}=Ii(e);let i=n.call(e,t);i||(t=q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&St(e,"delete",t,void 0),r}function Ml(){const t=q(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function js(t,e){return function(s,i){const r=this,o=r.__v_raw,l=q(o),a=e?Co:t?So:To;return!t&&Be(l,"iterate",cn),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function Vs(t,e,n){return function(...s){const i=this.__v_raw,r=q(i),o=Nn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?Co:e?So:To;return!e&&Be(r,"iterate",a?Tr:cn),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function kt(t){return function(...e){return t==="delete"?!1:this}}function fd(){const t={get(r){return Us(this,r)},get size(){return Hs(this)},has:$s,add:Pl,set:Ol,delete:Dl,clear:Ml,forEach:js(!1,!1)},e={get(r){return Us(this,r,!1,!0)},get size(){return Hs(this)},has:$s,add:Pl,set:Ol,delete:Dl,clear:Ml,forEach:js(!1,!0)},n={get(r){return Us(this,r,!0)},get size(){return Hs(this,!0)},has(r){return $s.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:js(!0,!1)},s={get(r){return Us(this,r,!0,!0)},get size(){return Hs(this,!0)},has(r){return $s.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vs(r,!1,!1),n[r]=Vs(r,!0,!1),e[r]=Vs(r,!1,!0),s[r]=Vs(r,!0,!0)}),[t,n,e,s]}const[_d,pd,gd,md]=fd();function wo(t,e){const n=e?t?md:gd:t?pd:_d;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const yd={get:wo(!1,!1)},vd={get:wo(!1,!0)},bd={get:wo(!0,!1)},dc=new WeakMap,fc=new WeakMap,_c=new WeakMap,Cd=new WeakMap;function wd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ed(t){return t.__v_skip||!Object.isExtensible(t)?0:wd(qh(t))}function Eo(t){return us(t)?t:Io(t,!1,hc,yd,dc)}function Id(t){return Io(t,!1,dd,vd,fc)}function pc(t){return Io(t,!0,hd,bd,_c)}function Io(t,e,n,s,i){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Ed(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function An(t){return us(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function xr(t){return!!(t&&t.__v_isShallow)}function gc(t){return An(t)||us(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function mc(t){return ei(t,"__v_skip",!0),t}const To=t=>re(t)?Eo(t):t,So=t=>re(t)?pc(t):t;function Td(t){Dt&&Xe&&(t=q(t),ac(t.dep||(t.dep=yo())))}function Sd(t,e){t=q(t),t.dep&&Sr(t.dep)}function Se(t){return!!(t&&t.__v_isRef===!0)}function xd(t){return Se(t)?t.value:t}const Nd={get:(t,e,n)=>xd(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function yc(t){return An(t)?t:new Proxy(t,Nd)}var vc;class Ad{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[vc]=!1,this._dirty=!0,this.effect=new vo(e,()=>{this._dirty||(this._dirty=!0,Sd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=q(this);return Td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}vc="__v_isReadonly";function kd(t,e,n=!1){let s,i;const r=B(t);return r?(s=t,i=tt):(s=t.get,i=t.set),new Ad(s,i,r||!i,n)}function Mt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ti(r,e,n)}return i}function qe(t,e,n,s){if(B(t)){const r=Mt(t,e,n,s);return r&&tc(r)&&r.catch(o=>{Ti(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(qe(t[r],e,n,s));return i}function Ti(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Mt(a,null,10,[t,o,l]);return}}Rd(t,n,i,s)}function Rd(t,e,n,s=!0){console.error(t)}let hs=!1,Nr=!1;const Ce=[];let ut=0;const kn=[];let bt=null,rn=0;const bc=Promise.resolve();let xo=null;function Pd(t){const e=xo||bc;return t?e.then(this?t.bind(this):t):e}function Od(t){let e=ut+1,n=Ce.length;for(;e<n;){const s=e+n>>>1;ds(Ce[s])<t?e=s+1:n=s}return e}function No(t){(!Ce.length||!Ce.includes(t,hs&&t.allowRecurse?ut+1:ut))&&(t.id==null?Ce.push(t):Ce.splice(Od(t.id),0,t),Cc())}function Cc(){!hs&&!Nr&&(Nr=!0,xo=bc.then(Ec))}function Dd(t){const e=Ce.indexOf(t);e>ut&&Ce.splice(e,1)}function Md(t){M(t)?kn.push(...t):(!bt||!bt.includes(t,t.allowRecurse?rn+1:rn))&&kn.push(t),Cc()}function Ll(t,e=hs?ut+1:0){for(;e<Ce.length;e++){const n=Ce[e];n&&n.pre&&(Ce.splice(e,1),e--,n())}}function wc(t){if(kn.length){const e=[...new Set(kn)];if(kn.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((n,s)=>ds(n)-ds(s)),rn=0;rn<bt.length;rn++)bt[rn]();bt=null,rn=0}}const ds=t=>t.id==null?1/0:t.id,Ld=(t,e)=>{const n=ds(t)-ds(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ec(t){Nr=!1,hs=!0,Ce.sort(Ld);const e=tt;try{for(ut=0;ut<Ce.length;ut++){const n=Ce[ut];n&&n.active!==!1&&Mt(n,null,14)}}finally{ut=0,Ce.length=0,wc(),hs=!1,xo=null,(Ce.length||kn.length)&&Ec()}}function Fd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:f}=s[h]||ne;f&&(i=n.map(g=>ue(g)?g.trim():g)),u&&(i=n.map(ic))}let l,a=s[l=sr(e)]||s[l=sr(ft(e))];!a&&r&&(a=s[l=sr(Hn(e))]),a&&qe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(c,t,6,i)}}function Ic(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!B(t)){const a=c=>{const h=Ic(c,e,!0);h&&(l=!0,Ee(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(re(t)&&s.set(t,null),null):(M(r)?r.forEach(a=>o[a]=null):Ee(o,r),re(t)&&s.set(t,o),o)}function Si(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,Hn(e))||V(t,e))}let Ve=null,xi=null;function ti(t){const e=Ve;return Ve=t,xi=t&&t.type.__scopeId||null,e}function Ao(t){xi=t}function ko(){xi=null}function Bd(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Kl(-1);const r=ti(e);let o;try{o=t(...i)}finally{ti(r),s._d&&Kl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function rr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:f,setupState:g,ctx:C,inheritAttrs:T}=t;let W,j;const ye=ti(t);try{if(n.shapeFlag&4){const te=i||s;W=ct(h.call(te,te,u,r,g,f,C)),j=a}else{const te=e;W=ct(te.length>1?te(r,{attrs:a,slots:l,emit:c}):te(r,null)),j=e.props?a:Wd(a)}}catch(te){rs.length=0,Ti(te,t,1),W=Re(wt)}let D=W;if(j&&T!==!1){const te=Object.keys(j),{shapeFlag:be}=D;te.length&&be&7&&(o&&te.some(_o)&&(j=Ud(j,o)),D=Ht(D,j))}return n.dirs&&(D=Ht(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),W=D,ti(ye),W}const Wd=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},Ud=(t,e)=>{const n={};for(const s in t)(!_o(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function $d(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Fl(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==s[f]&&!Si(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Fl(s,o,c):!0:!!o;return!1}function Fl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Si(n,r))return!0}return!1}function Hd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jd=t=>t.__isSuspense;function Vd(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):Md(t)}function zd(t,e){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[t]=e}}function Qs(t,e,n=!1){const s=ge||Ve;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const zs={};function or(t,e,n){return Tc(t,e,n)}function Tc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ne){const l=ge;let a,c=!1,h=!1;if(Se(t)?(a=()=>t.value,c=xr(t)):An(t)?(a=()=>t,s=!0):M(t)?(h=!0,c=t.some(D=>An(D)||xr(D)),a=()=>t.map(D=>{if(Se(D))return D.value;if(An(D))return Sn(D);if(B(D))return Mt(D,l,2)})):B(t)?e?a=()=>Mt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),qe(t,l,3,[f])}:a=tt,e&&s){const D=a;a=()=>Sn(D())}let u,f=D=>{u=j.onStop=()=>{Mt(D,l,4)}},g;if(_s)if(f=tt,e?n&&qe(e,l,3,[a(),h?[]:void 0,f]):a(),i==="sync"){const D=zf();g=D.__watcherHandles||(D.__watcherHandles=[])}else return tt;let C=h?new Array(t.length).fill(zs):zs;const T=()=>{if(!!j.active)if(e){const D=j.run();(s||c||(h?D.some((te,be)=>Zs(te,C[be])):Zs(D,C)))&&(u&&u(),qe(e,l,3,[D,C===zs?void 0:h&&C[0]===zs?[]:C,f]),C=D)}else j.run()};T.allowRecurse=!!e;let W;i==="sync"?W=T:i==="post"?W=()=>Ne(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),W=()=>No(T));const j=new vo(a,W);e?n?T():C=j.run():i==="post"?Ne(j.run.bind(j),l&&l.suspense):j.run();const ye=()=>{j.stop(),l&&l.scope&&po(l.scope.effects,j)};return g&&g.push(ye),ye}function Kd(t,e,n){const s=this.proxy,i=ue(t)?t.includes(".")?Sc(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=ge;Dn(this);const l=Tc(i,r.bind(s),n);return o?Dn(o):un(),l}function Sc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Sn(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Sn(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)Sn(t[n],e);else if(ec(t)||Nn(t))t.forEach(n=>{Sn(n,e)});else if(sc(t))for(const n in t)Sn(t[n],e);return t}function qd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kc(()=>{t.isMounted=!0}),Rc(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],Gd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=Lf(),s=qd();let i;return()=>{const r=e.default&&Nc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const T of r)if(T.type!==wt){o=T;break}}const l=q(t),{mode:a}=l;if(s.isLeaving)return lr(o);const c=Bl(o);if(!c)return lr(o);const h=Ar(c,l,s,n);kr(c,h);const u=n.subTree,f=u&&Bl(u);let g=!1;const{getTransitionKey:C}=c.type;if(C){const T=C();i===void 0?i=T:T!==i&&(i=T,g=!0)}if(f&&f.type!==wt&&(!on(c,f)||g)){const T=Ar(f,l,s,n);if(kr(f,T),a==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},lr(o);a==="in-out"&&c.type!==wt&&(T.delayLeave=(W,j,ye)=>{const D=xc(s,f);D[String(f.key)]=f,W._leaveCb=()=>{j(),W._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=ye})}return o}}},Qd=Gd;function xc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ar(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:T,onAppear:W,onAfterAppear:j,onAppearCancelled:ye}=e,D=String(t.key),te=xc(n,t),be=($,he)=>{$&&qe($,s,9,he)},wn=($,he)=>{const oe=he[1];be($,he),M($)?$.every(De=>De.length<=1)&&oe():$.length<=1&&oe()},At={mode:r,persisted:o,beforeEnter($){let he=l;if(!n.isMounted)if(i)he=T||l;else return;$._leaveCb&&$._leaveCb(!0);const oe=te[D];oe&&on(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),be(he,[$])},enter($){let he=a,oe=c,De=h;if(!n.isMounted)if(i)he=W||a,oe=j||c,De=ye||h;else return;let it=!1;const yt=$._enterCb=Jn=>{it||(it=!0,Jn?be(De,[$]):be(oe,[$]),At.delayedLeave&&At.delayedLeave(),$._enterCb=void 0)};he?wn(he,[$,yt]):yt()},leave($,he){const oe=String(t.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return he();be(u,[$]);let De=!1;const it=$._leaveCb=yt=>{De||(De=!0,he(),yt?be(C,[$]):be(g,[$]),$._leaveCb=void 0,te[oe]===t&&delete te[oe])};te[oe]=t,f?wn(f,[$,it]):it()},clone($){return Ar($,e,n,s)}};return At}function lr(t){if(Ni(t))return t=Ht(t),t.children=null,t}function Bl(t){return Ni(t)?t.children?t.children[0]:void 0:t}function kr(t,e){t.shapeFlag&6&&t.component?kr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Nc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Le?(o.patchFlag&128&&i++,s=s.concat(Nc(o.children,e,l))):(e||o.type!==wt)&&s.push(l!=null?Ht(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Ys=t=>!!t.type.__asyncLoader,Ni=t=>t.type.__isKeepAlive;function Yd(t,e){Ac(t,"a",e)}function Jd(t,e){Ac(t,"da",e)}function Ac(t,e,n=ge){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ai(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ni(i.parent.vnode)&&Xd(s,e,n,i),i=i.parent}}function Xd(t,e,n,s){const i=Ai(e,t,s,!0);Pc(()=>{po(s[e],i)},n)}function Ai(t,e,n=ge,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jn(),Dn(n);const l=qe(e,n,t,o);return un(),Vn(),l});return s?i.unshift(r):i.push(r),r}}const Nt=t=>(e,n=ge)=>(!_s||t==="sp")&&Ai(t,(...s)=>e(...s),n),Zd=Nt("bm"),kc=Nt("m"),ef=Nt("bu"),tf=Nt("u"),Rc=Nt("bum"),Pc=Nt("um"),nf=Nt("sp"),sf=Nt("rtg"),rf=Nt("rtc");function of(t,e=ge){Ai("ec",t,e)}function Zt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(jn(),qe(a,n,8,[t.el,l,t,e]),Vn())}}const Oc="components";function Rn(t,e){return af(Oc,t,!0,e)||t}const lf=Symbol();function af(t,e,n=!0,s=!1){const i=Ve||ge;if(i){const r=i.type;if(t===Oc){const l=$f(r,!1);if(l&&(l===e||l===ft(e)||l===Ei(ft(e))))return r}const o=Wl(i[t]||r[t],e)||Wl(i.appContext[t],e);return!o&&s?r:o}}function Wl(t,e){return t&&(t[e]||t[ft(e)]||t[Ei(ft(e))])}function Dc(t,e,n,s){let i;const r=n&&n[s];if(M(t)||ue(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(re(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Rr=t=>t?zc(t)?Do(t)||t.proxy:Rr(t.parent):null,is=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rr(t.parent),$root:t=>Rr(t.root),$emit:t=>t.emit,$options:t=>Ro(t),$forceUpdate:t=>t.f||(t.f=()=>No(t.update)),$nextTick:t=>t.n||(t.n=Pd.bind(t.proxy)),$watch:t=>Kd.bind(t)}),ar=(t,e)=>t!==ne&&!t.__isScriptSetup&&V(t,e),cf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ar(s,e))return o[e]=1,s[e];if(i!==ne&&V(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&V(c,e))return o[e]=3,r[e];if(n!==ne&&V(n,e))return o[e]=4,n[e];Pr&&(o[e]=0)}}const h=is[e];let u,f;if(h)return e==="$attrs"&&Be(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==ne&&V(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,V(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ar(i,e)?(i[e]=n,!0):s!==ne&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ne&&V(t,o)||ar(e,o)||(l=r[0])&&V(l,o)||V(s,o)||V(is,o)||V(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Pr=!0;function uf(t){const e=Ro(t),n=t.proxy,s=t.ctx;Pr=!1,e.beforeCreate&&Ul(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:g,updated:C,activated:T,deactivated:W,beforeDestroy:j,beforeUnmount:ye,destroyed:D,unmounted:te,render:be,renderTracked:wn,renderTriggered:At,errorCaptured:$,serverPrefetch:he,expose:oe,inheritAttrs:De,components:it,directives:yt,filters:Jn}=e;if(c&&hf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const J=o[le];B(J)&&(s[le]=J.bind(n))}if(i){const le=i.call(n,n);re(le)&&(t.data=Eo(le))}if(Pr=!0,r)for(const le in r){const J=r[le],Jt=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):tt,Bs=!B(J)&&B(J.set)?J.set.bind(n):tt,Xt=jf({get:Jt,set:Bs});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:rt=>Xt.value=rt})}if(l)for(const le in l)Mc(l[le],s,n,le);if(a){const le=B(a)?a.call(n):a;Reflect.ownKeys(le).forEach(J=>{zd(J,le[J])})}h&&Ul(h,t,"c");function Ie(le,J){M(J)?J.forEach(Jt=>le(Jt.bind(n))):J&&le(J.bind(n))}if(Ie(Zd,u),Ie(kc,f),Ie(ef,g),Ie(tf,C),Ie(Yd,T),Ie(Jd,W),Ie(of,$),Ie(rf,wn),Ie(sf,At),Ie(Rc,ye),Ie(Pc,te),Ie(nf,he),M(oe))if(oe.length){const le=t.exposed||(t.exposed={});oe.forEach(J=>{Object.defineProperty(le,J,{get:()=>n[J],set:Jt=>n[J]=Jt})})}else t.exposed||(t.exposed={});be&&t.render===tt&&(t.render=be),De!=null&&(t.inheritAttrs=De),it&&(t.components=it),yt&&(t.directives=yt)}function hf(t,e,n=tt,s=!1){M(t)&&(t=Or(t));for(const i in t){const r=t[i];let o;re(r)?"default"in r?o=Qs(r.from||i,r.default,!0):o=Qs(r.from||i):o=Qs(r),Se(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Ul(t,e,n){qe(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mc(t,e,n,s){const i=s.includes(".")?Sc(n,s):()=>n[s];if(ue(t)){const r=e[t];B(r)&&or(i,r)}else if(B(t))or(i,t.bind(n));else if(re(t))if(M(t))t.forEach(r=>Mc(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&or(i,r,t)}}function Ro(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ni(a,c,o,!0)),ni(a,e,o)),re(e)&&r.set(e,a),a}function ni(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ni(t,r,n,!0),i&&i.forEach(o=>ni(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=df[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const df={data:$l,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:tn,directives:tn,watch:_f,provide:$l,inject:ff};function $l(t,e){return e?t?function(){return Ee(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function ff(t,e){return tn(Or(t),Or(e))}function Or(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function tn(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function _f(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function pf(t,e,n,s=!1){const i={},r={};ei(r,Ri,1),t.propsDefaults=Object.create(null),Lc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Id(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function gf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=q(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Si(t.emitsOptions,f))continue;const g=e[f];if(a)if(V(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const C=ft(f);i[C]=Dr(a,l,C,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{Lc(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!V(e,u)&&((h=Hn(u))===u||!V(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Dr(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!V(e,u)&&!0)&&(delete r[u],c=!0)}c&&St(t,"set","$attrs")}function Lc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Gs(a))continue;const c=e[a];let h;i&&V(i,h=ft(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:Si(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=q(n),c=l||ne;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Dr(i,a,u,c[u],t,!V(c,u))}}return o}function Dr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&B(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Dn(i),s=c[n]=a.call(null,e),un())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function Fc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!B(t)){const h=u=>{a=!0;const[f,g]=Fc(u,e,!0);Ee(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return re(t)&&s.set(t,xn),xn;if(M(r))for(let h=0;h<r.length;h++){const u=ft(r[h]);Hl(u)&&(o[u]=ne)}else if(r)for(const h in r){const u=ft(h);if(Hl(u)){const f=r[h],g=o[u]=M(f)||B(f)?{type:f}:Object.assign({},f);if(g){const C=zl(Boolean,g.type),T=zl(String,g.type);g[0]=C>-1,g[1]=T<0||C<T,(C>-1||V(g,"default"))&&l.push(u)}}}const c=[o,l];return re(t)&&s.set(t,c),c}function Hl(t){return t[0]!=="$"}function jl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vl(t,e){return jl(t)===jl(e)}function zl(t,e){return M(e)?e.findIndex(n=>Vl(n,t)):B(e)&&Vl(e,t)?0:-1}const Bc=t=>t[0]==="_"||t==="$stable",Po=t=>M(t)?t.map(ct):[ct(t)],mf=(t,e,n)=>{if(e._n)return e;const s=Bd((...i)=>Po(e(...i)),n);return s._c=!1,s},Wc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Bc(i))continue;const r=t[i];if(B(r))e[i]=mf(i,r,s);else if(r!=null){const o=Po(r);e[i]=()=>o}}},Uc=(t,e)=>{const n=Po(e);t.slots.default=()=>n},yf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),ei(e,"_",n)):Wc(e,t.slots={})}else t.slots={},e&&Uc(t,e);ei(t.slots,Ri,1)},vf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ne;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ee(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Wc(e,i)),o=e}else e&&(Uc(t,e),o={default:1});if(r)for(const l in i)!Bc(l)&&!(l in o)&&delete i[l]};function $c(){return{app:null,config:{isNativeTag:Vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function Cf(t,e){return function(s,i=null){B(s)||(s=Object.assign({},s)),i!=null&&!re(i)&&(i=null);const r=$c(),o=new Set;let l=!1;const a=r.app={_uid:bf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Kf,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(a,...h)):B(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const f=Re(s,i);return f.appContext=r,h&&e?e(f,c):t(f,c,u),l=!0,a._container=c,c.__vue_app__=a,Do(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Mr(t,e,n,s,i=!1){if(M(t)){t.forEach((f,g)=>Mr(f,e&&(M(e)?e[g]:e),n,s,i));return}if(Ys(s)&&!i)return;const r=s.shapeFlag&4?Do(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===ne?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(ue(c)?(h[c]=null,V(u,c)&&(u[c]=null)):Se(c)&&(c.value=null)),B(a))Mt(a,l,12,[o,h]);else{const f=ue(a),g=Se(a);if(f||g){const C=()=>{if(t.f){const T=f?V(u,a)?u[a]:h[a]:a.value;i?M(T)&&po(T,r):M(T)?T.includes(r)||T.push(r):f?(h[a]=[r],V(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else f?(h[a]=o,V(u,a)&&(u[a]=o)):g&&(a.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,Ne(C,n)):C()}}}const Ne=Vd;function wf(t){return Ef(t)}function Ef(t,e){const n=Yh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:g=tt,insertStaticContent:C}=t,T=(d,_,p,y=null,m=null,E=null,S=!1,w=null,I=!!_.dynamicChildren)=>{if(d===_)return;d&&!on(d,_)&&(y=Ws(d),rt(d,m,E,!0),d=null),_.patchFlag===-2&&(I=!1,_.dynamicChildren=null);const{type:v,ref:N,shapeFlag:x}=_;switch(v){case ki:W(d,_,p,y);break;case wt:j(d,_,p,y);break;case Js:d==null&&ye(_,p,y,S);break;case Le:it(d,_,p,y,m,E,S,w,I);break;default:x&1?be(d,_,p,y,m,E,S,w,I):x&6?yt(d,_,p,y,m,E,S,w,I):(x&64||x&128)&&v.process(d,_,p,y,m,E,S,w,I,En)}N!=null&&m&&Mr(N,d&&d.ref,E,_||d,!_)},W=(d,_,p,y)=>{if(d==null)s(_.el=l(_.children),p,y);else{const m=_.el=d.el;_.children!==d.children&&c(m,_.children)}},j=(d,_,p,y)=>{d==null?s(_.el=a(_.children||""),p,y):_.el=d.el},ye=(d,_,p,y)=>{[d.el,d.anchor]=C(d.children,_,p,y,d.el,d.anchor)},D=({el:d,anchor:_},p,y)=>{let m;for(;d&&d!==_;)m=f(d),s(d,p,y),d=m;s(_,p,y)},te=({el:d,anchor:_})=>{let p;for(;d&&d!==_;)p=f(d),i(d),d=p;i(_)},be=(d,_,p,y,m,E,S,w,I)=>{S=S||_.type==="svg",d==null?wn(_,p,y,m,E,S,w,I):he(d,_,m,E,S,w,I)},wn=(d,_,p,y,m,E,S,w)=>{let I,v;const{type:N,props:x,shapeFlag:A,transition:O,dirs:H}=d;if(I=d.el=o(d.type,E,x&&x.is,x),A&8?h(I,d.children):A&16&&$(d.children,I,null,y,m,E&&N!=="foreignObject",S,w),H&&Zt(d,null,y,"created"),x){for(const G in x)G!=="value"&&!Gs(G)&&r(I,G,null,x[G],E,d.children,y,m,vt);"value"in x&&r(I,"value",null,x.value),(v=x.onVnodeBeforeMount)&&lt(v,y,d)}At(I,d,d.scopeId,S,y),H&&Zt(d,null,y,"beforeMount");const X=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;X&&O.beforeEnter(I),s(I,_,p),((v=x&&x.onVnodeMounted)||X||H)&&Ne(()=>{v&&lt(v,y,d),X&&O.enter(I),H&&Zt(d,null,y,"mounted")},m)},At=(d,_,p,y,m)=>{if(p&&g(d,p),y)for(let E=0;E<y.length;E++)g(d,y[E]);if(m){let E=m.subTree;if(_===E){const S=m.vnode;At(d,S,S.scopeId,S.slotScopeIds,m.parent)}}},$=(d,_,p,y,m,E,S,w,I=0)=>{for(let v=I;v<d.length;v++){const N=d[v]=w?Rt(d[v]):ct(d[v]);T(null,N,_,p,y,m,E,S,w)}},he=(d,_,p,y,m,E,S)=>{const w=_.el=d.el;let{patchFlag:I,dynamicChildren:v,dirs:N}=_;I|=d.patchFlag&16;const x=d.props||ne,A=_.props||ne;let O;p&&en(p,!1),(O=A.onVnodeBeforeUpdate)&&lt(O,p,_,d),N&&Zt(_,d,p,"beforeUpdate"),p&&en(p,!0);const H=m&&_.type!=="foreignObject";if(v?oe(d.dynamicChildren,v,w,p,y,H,E):S||J(d,_,w,null,p,y,H,E,!1),I>0){if(I&16)De(w,_,x,A,p,y,m);else if(I&2&&x.class!==A.class&&r(w,"class",null,A.class,m),I&4&&r(w,"style",x.style,A.style,m),I&8){const X=_.dynamicProps;for(let G=0;G<X.length;G++){const ae=X[G],Qe=x[ae],In=A[ae];(In!==Qe||ae==="value")&&r(w,ae,Qe,In,m,d.children,p,y,vt)}}I&1&&d.children!==_.children&&h(w,_.children)}else!S&&v==null&&De(w,_,x,A,p,y,m);((O=A.onVnodeUpdated)||N)&&Ne(()=>{O&&lt(O,p,_,d),N&&Zt(_,d,p,"updated")},y)},oe=(d,_,p,y,m,E,S)=>{for(let w=0;w<_.length;w++){const I=d[w],v=_[w],N=I.el&&(I.type===Le||!on(I,v)||I.shapeFlag&70)?u(I.el):p;T(I,v,N,null,y,m,E,S,!0)}},De=(d,_,p,y,m,E,S)=>{if(p!==y){if(p!==ne)for(const w in p)!Gs(w)&&!(w in y)&&r(d,w,p[w],null,S,_.children,m,E,vt);for(const w in y){if(Gs(w))continue;const I=y[w],v=p[w];I!==v&&w!=="value"&&r(d,w,v,I,S,_.children,m,E,vt)}"value"in y&&r(d,"value",p.value,y.value)}},it=(d,_,p,y,m,E,S,w,I)=>{const v=_.el=d?d.el:l(""),N=_.anchor=d?d.anchor:l("");let{patchFlag:x,dynamicChildren:A,slotScopeIds:O}=_;O&&(w=w?w.concat(O):O),d==null?(s(v,p,y),s(N,p,y),$(_.children,p,N,m,E,S,w,I)):x>0&&x&64&&A&&d.dynamicChildren?(oe(d.dynamicChildren,A,p,m,E,S,w),(_.key!=null||m&&_===m.subTree)&&Hc(d,_,!0)):J(d,_,p,N,m,E,S,w,I)},yt=(d,_,p,y,m,E,S,w,I)=>{_.slotScopeIds=w,d==null?_.shapeFlag&512?m.ctx.activate(_,p,y,S,I):Jn(_,p,y,m,E,S,I):wl(d,_,I)},Jn=(d,_,p,y,m,E,S)=>{const w=d.component=Mf(d,y,m);if(Ni(d)&&(w.ctx.renderer=En),Ff(w),w.asyncDep){if(m&&m.registerDep(w,Ie),!d.el){const I=w.subTree=Re(wt);j(null,I,_,p)}return}Ie(w,d,_,p,m,E,S)},wl=(d,_,p)=>{const y=_.component=d.component;if($d(d,_,p))if(y.asyncDep&&!y.asyncResolved){le(y,_,p);return}else y.next=_,Dd(y.update),y.update();else _.el=d.el,y.vnode=_},Ie=(d,_,p,y,m,E,S)=>{const w=()=>{if(d.isMounted){let{next:N,bu:x,u:A,parent:O,vnode:H}=d,X=N,G;en(d,!1),N?(N.el=H.el,le(d,N,S)):N=H,x&&ir(x),(G=N.props&&N.props.onVnodeBeforeUpdate)&&lt(G,O,N,H),en(d,!0);const ae=rr(d),Qe=d.subTree;d.subTree=ae,T(Qe,ae,u(Qe.el),Ws(Qe),d,m,E),N.el=ae.el,X===null&&Hd(d,ae.el),A&&Ne(A,m),(G=N.props&&N.props.onVnodeUpdated)&&Ne(()=>lt(G,O,N,H),m)}else{let N;const{el:x,props:A}=_,{bm:O,m:H,parent:X}=d,G=Ys(_);if(en(d,!1),O&&ir(O),!G&&(N=A&&A.onVnodeBeforeMount)&&lt(N,X,_),en(d,!0),x&&nr){const ae=()=>{d.subTree=rr(d),nr(x,d.subTree,d,m,null)};G?_.type.__asyncLoader().then(()=>!d.isUnmounted&&ae()):ae()}else{const ae=d.subTree=rr(d);T(null,ae,p,y,d,m,E),_.el=ae.el}if(H&&Ne(H,m),!G&&(N=A&&A.onVnodeMounted)){const ae=_;Ne(()=>lt(N,X,ae),m)}(_.shapeFlag&256||X&&Ys(X.vnode)&&X.vnode.shapeFlag&256)&&d.a&&Ne(d.a,m),d.isMounted=!0,_=p=y=null}},I=d.effect=new vo(w,()=>No(v),d.scope),v=d.update=()=>I.run();v.id=d.uid,en(d,!0),v()},le=(d,_,p)=>{_.component=d;const y=d.vnode.props;d.vnode=_,d.next=null,gf(d,_.props,y,p),vf(d,_.children,p),jn(),Ll(),Vn()},J=(d,_,p,y,m,E,S,w,I=!1)=>{const v=d&&d.children,N=d?d.shapeFlag:0,x=_.children,{patchFlag:A,shapeFlag:O}=_;if(A>0){if(A&128){Bs(v,x,p,y,m,E,S,w,I);return}else if(A&256){Jt(v,x,p,y,m,E,S,w,I);return}}O&8?(N&16&&vt(v,m,E),x!==v&&h(p,x)):N&16?O&16?Bs(v,x,p,y,m,E,S,w,I):vt(v,m,E,!0):(N&8&&h(p,""),O&16&&$(x,p,y,m,E,S,w,I))},Jt=(d,_,p,y,m,E,S,w,I)=>{d=d||xn,_=_||xn;const v=d.length,N=_.length,x=Math.min(v,N);let A;for(A=0;A<x;A++){const O=_[A]=I?Rt(_[A]):ct(_[A]);T(d[A],O,p,null,m,E,S,w,I)}v>N?vt(d,m,E,!0,!1,x):$(_,p,y,m,E,S,w,I,x)},Bs=(d,_,p,y,m,E,S,w,I)=>{let v=0;const N=_.length;let x=d.length-1,A=N-1;for(;v<=x&&v<=A;){const O=d[v],H=_[v]=I?Rt(_[v]):ct(_[v]);if(on(O,H))T(O,H,p,null,m,E,S,w,I);else break;v++}for(;v<=x&&v<=A;){const O=d[x],H=_[A]=I?Rt(_[A]):ct(_[A]);if(on(O,H))T(O,H,p,null,m,E,S,w,I);else break;x--,A--}if(v>x){if(v<=A){const O=A+1,H=O<N?_[O].el:y;for(;v<=A;)T(null,_[v]=I?Rt(_[v]):ct(_[v]),p,H,m,E,S,w,I),v++}}else if(v>A)for(;v<=x;)rt(d[v],m,E,!0),v++;else{const O=v,H=v,X=new Map;for(v=H;v<=A;v++){const Me=_[v]=I?Rt(_[v]):ct(_[v]);Me.key!=null&&X.set(Me.key,v)}let G,ae=0;const Qe=A-H+1;let In=!1,Tl=0;const Xn=new Array(Qe);for(v=0;v<Qe;v++)Xn[v]=0;for(v=O;v<=x;v++){const Me=d[v];if(ae>=Qe){rt(Me,m,E,!0);continue}let ot;if(Me.key!=null)ot=X.get(Me.key);else for(G=H;G<=A;G++)if(Xn[G-H]===0&&on(Me,_[G])){ot=G;break}ot===void 0?rt(Me,m,E,!0):(Xn[ot-H]=v+1,ot>=Tl?Tl=ot:In=!0,T(Me,_[ot],p,null,m,E,S,w,I),ae++)}const Sl=In?If(Xn):xn;for(G=Sl.length-1,v=Qe-1;v>=0;v--){const Me=H+v,ot=_[Me],xl=Me+1<N?_[Me+1].el:y;Xn[v]===0?T(null,ot,p,xl,m,E,S,w,I):In&&(G<0||v!==Sl[G]?Xt(ot,p,xl,2):G--)}}},Xt=(d,_,p,y,m=null)=>{const{el:E,type:S,transition:w,children:I,shapeFlag:v}=d;if(v&6){Xt(d.component.subTree,_,p,y);return}if(v&128){d.suspense.move(_,p,y);return}if(v&64){S.move(d,_,p,En);return}if(S===Le){s(E,_,p);for(let x=0;x<I.length;x++)Xt(I[x],_,p,y);s(d.anchor,_,p);return}if(S===Js){D(d,_,p);return}if(y!==2&&v&1&&w)if(y===0)w.beforeEnter(E),s(E,_,p),Ne(()=>w.enter(E),m);else{const{leave:x,delayLeave:A,afterLeave:O}=w,H=()=>s(E,_,p),X=()=>{x(E,()=>{H(),O&&O()})};A?A(E,H,X):X()}else s(E,_,p)},rt=(d,_,p,y=!1,m=!1)=>{const{type:E,props:S,ref:w,children:I,dynamicChildren:v,shapeFlag:N,patchFlag:x,dirs:A}=d;if(w!=null&&Mr(w,null,p,d,!0),N&256){_.ctx.deactivate(d);return}const O=N&1&&A,H=!Ys(d);let X;if(H&&(X=S&&S.onVnodeBeforeUnmount)&&lt(X,_,d),N&6)Fh(d.component,p,y);else{if(N&128){d.suspense.unmount(p,y);return}O&&Zt(d,null,_,"beforeUnmount"),N&64?d.type.remove(d,_,p,m,En,y):v&&(E!==Le||x>0&&x&64)?vt(v,_,p,!1,!0):(E===Le&&x&384||!m&&N&16)&&vt(I,_,p),y&&El(d)}(H&&(X=S&&S.onVnodeUnmounted)||O)&&Ne(()=>{X&&lt(X,_,d),O&&Zt(d,null,_,"unmounted")},p)},El=d=>{const{type:_,el:p,anchor:y,transition:m}=d;if(_===Le){Lh(p,y);return}if(_===Js){te(d);return}const E=()=>{i(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:w}=m,I=()=>S(p,E);w?w(d.el,E,I):I()}else E()},Lh=(d,_)=>{let p;for(;d!==_;)p=f(d),i(d),d=p;i(_)},Fh=(d,_,p)=>{const{bum:y,scope:m,update:E,subTree:S,um:w}=d;y&&ir(y),m.stop(),E&&(E.active=!1,rt(S,d,_,p)),w&&Ne(w,_),Ne(()=>{d.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},vt=(d,_,p,y=!1,m=!1,E=0)=>{for(let S=E;S<d.length;S++)rt(d[S],_,p,y,m)},Ws=d=>d.shapeFlag&6?Ws(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Il=(d,_,p)=>{d==null?_._vnode&&rt(_._vnode,null,null,!0):T(_._vnode||null,d,_,null,null,null,p),Ll(),wc(),_._vnode=d},En={p:T,um:rt,m:Xt,r:El,mt:Jn,mc:$,pc:J,pbc:oe,n:Ws,o:t};let tr,nr;return e&&([tr,nr]=e(En)),{render:Il,hydrate:tr,createApp:Cf(Il,tr)}}function en({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hc(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Rt(i[r]),l.el=o.el),n||Hc(o,l)),l.type===ki&&(l.el=o.el)}}function If(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Tf=t=>t.__isTeleport,Le=Symbol(void 0),ki=Symbol(void 0),wt=Symbol(void 0),Js=Symbol(void 0),rs=[];let Ze=null;function ht(t=!1){rs.push(Ze=t?null:[])}function Sf(){rs.pop(),Ze=rs[rs.length-1]||null}let fs=1;function Kl(t){fs+=t}function jc(t){return t.dynamicChildren=fs>0?Ze||xn:null,Sf(),fs>0&&Ze&&Ze.push(t),t}function Et(t,e,n,s,i,r){return jc(P(t,e,n,s,i,r,!0))}function xf(t,e,n,s,i){return jc(Re(t,e,n,s,i,!0))}function Nf(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Ri="__vInternal",Vc=({key:t})=>t!=null?t:null,Xs=({ref:t,ref_key:e,ref_for:n})=>t!=null?ue(t)||Se(t)||B(t)?{i:Ve,r:t,k:e,f:!!n}:t:null;function P(t,e=null,n=null,s=0,i=null,r=t===Le?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vc(e),ref:e&&Xs(e),scopeId:xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return l?(Oo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),fs>0&&!o&&Ze&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ze.push(a),a}const Re=Af;function Af(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===lf)&&(t=wt),Nf(t)){const l=Ht(t,e,!0);return n&&Oo(l,n),fs>0&&!r&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(t)]=l:Ze.push(l)),l.patchFlag|=-2,l}if(Hf(t)&&(t=t.__vccOpts),e){e=kf(e);let{class:l,style:a}=e;l&&!ue(l)&&(e.class=fo(l)),re(a)&&(gc(a)&&!M(a)&&(a=Ee({},a)),e.style=ho(a))}const o=ue(t)?1:jd(t)?128:Tf(t)?64:re(t)?4:B(t)?2:0;return P(t,e,n,s,i,o,r,!0)}function kf(t){return t?gc(t)||Ri in t?Ee({},t):t:null}function Ht(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Pf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Vc(l),ref:e&&e.ref?n&&i?M(i)?i.concat(Xs(e)):[i,Xs(e)]:Xs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ht(t.ssContent),ssFallback:t.ssFallback&&Ht(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Lr(t=" ",e=0){return Re(ki,null,t,e)}function Rf(t,e){const n=Re(Js,null,t);return n.staticCount=e,n}function ct(t){return t==null||typeof t=="boolean"?Re(wt):M(t)?Re(Le,null,t.slice()):typeof t=="object"?Rt(t):Re(ki,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ht(t)}function Oo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Oo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ri in e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[Lr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fo([e.class,s.class]));else if(i==="style")e.style=ho([e.style,s.style]);else if(bi(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){qe(t,e,7,[n,s])}const Of=$c();let Df=0;function Mf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Of,r={uid:Df++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fc(s,i),emitsOptions:Ic(s,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Fd.bind(null,r),t.ce&&t.ce(r),r}let ge=null;const Lf=()=>ge||Ve,Dn=t=>{ge=t,t.scope.on()},un=()=>{ge&&ge.scope.off(),ge=null};function zc(t){return t.vnode.shapeFlag&4}let _s=!1;function Ff(t,e=!1){_s=e;const{props:n,children:s}=t.vnode,i=zc(t);pf(t,n,i,e),yf(t,s);const r=i?Bf(t,e):void 0;return _s=!1,r}function Bf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mc(new Proxy(t.ctx,cf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Uf(t):null;Dn(t),jn();const r=Mt(s,t,0,[t.props,i]);if(Vn(),un(),tc(r)){if(r.then(un,un),e)return r.then(o=>{ql(t,o,e)}).catch(o=>{Ti(o,t,0)});t.asyncDep=r}else ql(t,r,e)}else Kc(t,e)}function ql(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=yc(e)),Kc(t,n)}let Gl;function Kc(t,e,n){const s=t.type;if(!t.render){if(!e&&Gl&&!s.render){const i=s.template||Ro(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ee(Ee({isCustomElement:r,delimiters:l},o),a);s.render=Gl(i,c)}}t.render=s.render||tt}Dn(t),jn(),uf(t),Vn(),un()}function Wf(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function Uf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Wf(t))},slots:t.slots,emit:t.emit,expose:e}}function Do(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yc(mc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in is)return is[n](t)},has(e,n){return n in e||n in is}}))}function $f(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Hf(t){return B(t)&&"__vccOpts"in t}const jf=(t,e)=>kd(t,e,_s),Vf=Symbol(""),zf=()=>Qs(Vf),Kf="3.2.45",qf="http://www.w3.org/2000/svg",ln=typeof document<"u"?document:null,Ql=ln&&ln.createElement("template"),Gf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ln.createElementNS(qf,t):ln.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ql.innerHTML=s?`<svg>${t}</svg>`:t;const l=Ql.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yf(t,e,n){const s=t.style,i=ue(n);if(n&&!i){for(const r in n)Fr(s,r,n[r]);if(e&&!ue(e))for(const r in e)n[r]==null&&Fr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Yl=/\s*!important$/;function Fr(t,e,n){if(M(n))n.forEach(s=>Fr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Jf(t,e);Yl.test(n)?t.setProperty(Hn(s),n.replace(Yl,""),"important"):t[s]=n}}const Jl=["Webkit","Moz","ms"],cr={};function Jf(t,e){const n=cr[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return cr[e]=s;s=Ei(s);for(let i=0;i<Jl.length;i++){const r=Jl[i]+s;if(r in t)return cr[e]=r}return e}const Xl="http://www.w3.org/1999/xlink";function Xf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xl,e.slice(6,e.length)):t.setAttributeNS(Xl,e,n);else{const r=jh(e);n==null||r&&!Xa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Zf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Xa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function e_(t,e,n,s){t.addEventListener(e,n,s)}function t_(t,e,n,s){t.removeEventListener(e,n,s)}function n_(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=s_(e);if(s){const c=r[e]=o_(s,i);e_(t,l,c,a)}else o&&(t_(t,l,o,a),r[e]=void 0)}}const Zl=/(?:Once|Passive|Capture)$/;function s_(t){let e;if(Zl.test(t)){e={};let s;for(;s=t.match(Zl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let ur=0;const i_=Promise.resolve(),r_=()=>ur||(i_.then(()=>ur=0),ur=Date.now());function o_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qe(l_(s,n.value),e,5,[s])};return n.value=t,n.attached=r_(),n}function l_(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ea=/^on[a-z]/,a_=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Qf(t,s,i):e==="style"?Yf(t,n,s):bi(e)?_o(e)||n_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c_(t,e,s,i))?Zf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Xf(t,e,s,i))};function c_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ea.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ea.test(e)&&ue(n)?!1:e in t}const u_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Qd.props;const h_=Ee({patchProp:a_},Gf);let ta;function d_(){return ta||(ta=wf(h_))}const f_=(...t)=>{const e=d_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=__(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function __(t){return ue(t)?document.querySelector(t):t}const p_="/assets/rsn.f3edddf9.svg";const yn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},g_={},m_={class:"",src:p_,alt:"RSN UX_Lab"};function y_(t,e,n,s,i,r){return ht(),Et("img",m_)}const v_=yn(g_,[["render",y_],["__scopeId","data-v-dfd20a86"]]);const b_={},qc=t=>(Ao("data-v-02bfecd3"),t=t(),ko(),t),C_=qc(()=>P("i",{class:"icon-search"},null,-1)),w_=qc(()=>P("input",{type:"text",id:"",class:"header-search"},null,-1));function E_(t,e,n,s,i,r){return ht(),Et(Le,null,[C_,w_],64)}const I_=yn(b_,[["render",E_],["__scopeId","data-v-02bfecd3"]]);const T_={name:"header-logo",components:{HeaderLogo:v_,HeaderInput:I_}},S_=t=>(Ao("data-v-7f71c0c4"),t=t(),ko(),t),x_={id:"header"},N_={class:"header-left"},A_=S_(()=>P("span",null,"UX Lab, Project Development",-1)),k_={class:"header-right"};function R_(t,e,n,s,i,r){const o=Rn("HeaderLogo"),l=Rn("HeaderInput");return ht(),Et("header",x_,[P("div",N_,[Re(o),A_]),P("div",k_,[Re(l)])])}const P_=yn(T_,[["render",R_],["__scopeId","data-v-7f71c0c4"]]);const O_={},D_=Rf('<li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag1" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag1" class="form-check__label active" data-v-1af06151>\uB300\uC2DC\uBCF4\uB4DC</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag2" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag2" class="form-check__label" data-v-1af06151>\uAD00\uB9AC\uC790</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag3" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag4" class="form-check__label" data-v-1af06151>\uBCF4\uACE0\uC11C</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag5" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag6" class="form-check__label" data-v-1af06151>2022</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag7" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag7" class="form-check__label" data-v-1af06151>2021</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag8" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag8" class="form-check__label" data-v-1af06151>2020</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag9" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag9" class="form-check__label" data-v-1af06151>Figma</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag10" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag10" class="form-check__label" data-v-1af06151>GitLab</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag11" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag11" class="form-check__label" data-v-1af06151>SVN</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag12" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag12" class="form-check__label" data-v-1af06151>HUGO</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag13" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag13" class="form-check__label" data-v-1af06151>Webpack</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag14" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag14" class="form-check__label" data-v-1af06151>VUE</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag15" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag15" class="form-check__label" data-v-1af06151>HOVER</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag16" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag16" class="form-check__label active" data-v-1af06151>\uB300\uC2DC\uBCF4\uB4DC</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag17" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag17" class="form-check__label" data-v-1af06151>\uAD00\uB9AC\uC790</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag18" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag18" class="form-check__label" data-v-1af06151>2022</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag19" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag19" class="form-check__label" data-v-1af06151>2020</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag20" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag20" class="form-check__label" data-v-1af06151>Figma</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag21" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag21" class="form-check__label" data-v-1af06151>Photoshop</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag22" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag22" class="form-check__label" data-v-1af06151>GitLab</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag23" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag23" class="form-check__label" data-v-1af06151>SVN</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag24" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag24" class="form-check__label" data-v-1af06151>HUGO</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag25" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag25" class="form-check__label" data-v-1af06151>Webpack</label></li><li class="form-row form-check form-check-button" data-v-1af06151><input id="checkTag26" class="form-check__input" type="checkbox" data-v-1af06151><label for="checkTag26" class="form-check__label" data-v-1af06151>VUE</label></li>',24);function M_(t,e,n,s,i,r){return D_}const L_=yn(O_,[["render",M_],["__scopeId","data-v-1af06151"]]),F_="/assets/thumb_mofa.39fc19c8.svg";const B_={props:["data"],created(){this.data.tag=this.data.Tag.split(", ")}},mt=t=>(Ao("data-v-30f41f60"),t=t(),ko(),t),W_={class:"l-card"},U_={class:"l-card-default"},$_={class:"l-card-default-header"},H_=["alt"],j_={class:"l-card-default-body"},V_={class:"l-card-default-body__title"},z_={class:"l-card-default-body__join"},K_=mt(()=>P("i",{class:"icon-people"},null,-1)),q_={class:"l-card-default-body__date"},G_=mt(()=>P("i",{class:"icon-calendar"},null,-1)),Q_={class:"l-card-default-body__tag-list"},Y_={class:"l-card-default-body__tag-list__item"},J_=mt(()=>P("span",{class:"l-card-default-body__tag-list__item"},"\uD14C\uC2A4\uD2B8",-1)),X_=mt(()=>P("span",{class:"l-card-default-body__tag-list__item"},"\uD14C\uC2A4\uD2B8",-1)),Z_=mt(()=>P("span",{class:"l-card-default-body__tag-list__item"},"\uD14C\uC2A4\uD2B8",-1)),ep={class:"l-card-overlay"},tp={class:"l-card-overlay-header"},np={class:"l-card-overlay-header__title"},sp={class:"l-card-overlay-header__date"},ip={class:"l-card-overlay-body"},rp={class:"l-card-overlay-body-join"},op=mt(()=>P("h4",{class:"l-card-overlay-body-join__tit"},"\uAE30\uD68D",-1)),lp={class:"l-card-overlay-body-join__text"},ap={class:"l-card-overlay-body-join"},cp=mt(()=>P("h4",{class:"l-card-overlay-body-join__tit"},"\uB514\uC790\uC778",-1)),up={class:"l-card-overlay-body-join__text"},hp={class:"l-card-overlay-body-join"},dp=mt(()=>P("h4",{class:"l-card-overlay-body-join__tit"},"\uD37C\uBE14\uB9AC\uC2F1",-1)),fp={class:"l-card-overlay-body-joinr__text"},_p={class:"l-card-overlay-body-join"},pp=mt(()=>P("h4",{class:"l-card-overlay-body-join__tit"},"\uAC1C\uBC1C",-1)),gp={class:"l-card-overlay-body-joinr__text"},mp=mt(()=>P("footer",{class:"l-card-overlay-footer"},[P("div",{class:"l-card-overlay-footer__link-list"},[P("a",{class:"l-card-overlay-footer__link-list__item",href:"#"},"PROD."),P("a",{class:"l-card-overlay-footer__link-list__item",href:"#"},"DEV.")])],-1));function yp(t,e,n,s,i,r){return ht(),Et("div",W_,[P("div",U_,[P("header",$_,[P("img",{src:F_,alt:n.data.ProjectName},null,8,H_)]),P("main",j_,[P("h3",V_,Ye(n.data.ProjectName),1),P("p",z_,[K_,Lr(Ye(n.data.Designer)+", "+Ye(n.data.Publisher),1)]),P("p",q_,[G_,Lr(" "+Ye(n.data.Date),1)]),P("div",Q_,[(ht(!0),Et(Le,null,Dc(n.data.tag,o=>(ht(),Et("span",Y_,Ye(o),1))),256)),J_,X_,Z_])])]),P("div",ep,[P("header",tp,[P("h2",np,Ye(n.data.ProjectName),1),P("span",sp,Ye(n.data.Date),1)]),P("main",ip,[P("div",rp,[op,P("span",lp,Ye(n.data.Planner),1)]),P("div",ap,[cp,P("span",up,Ye(n.data.Designer),1)]),P("div",hp,[dp,P("span",fp,Ye(n.data.Publisher),1)]),P("div",_p,[pp,P("span",gp,Ye(n.data.Developer),1)])]),mp])])}const vp=yn(B_,[["render",yp],["__scopeId","data-v-30f41f60"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw zn(e)},zn=function(t){return new Error("Firebase Database ("+Gc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),s.push(n[h],n[u],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const g=l<<4&240|c>>2;if(s.push(g),u!==64){const C=c<<6&192|u;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yc=function(t){const e=Qc(t);return Mo.encodeByteArray(e,!0)},si=function(t){return Yc(t).replace(/\./g,"")},Br=function(t){try{return Mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){return ps(void 0,t)}function ps(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wp(n)||(t[n]=ps(t[n],e[n]));return t}function wp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ep())}function Ip(){return typeof self=="object"&&self.self===self}function Tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xc(){return Gc.NODE_ADMIN===!0}function Sp(){return typeof indexedDB=="object"}function xp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=()=>Np().__FIREBASE_DEFAULTS__,kp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Br(t[1]);return e&&JSON.parse(e)},Pp=()=>{try{return Ap()||kp()||Rp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=()=>{var t;return(t=Pp())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[si(JSON.stringify(n)),si(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Mp,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Lp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kn(i,l,s)}}function Lp(t,e){return t.replace(Fp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Fp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=gs(Br(r[0])||""),n=gs(Br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Bp=function(t){const e=Zc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wp=function(t){const e=Zc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ii(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(na(r)&&na(o)){if(!Ur(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function na(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const f=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hp(t,e){const n=new jp(t,e);return n.subscribe.bind(n)}class jp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vp(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=hr),i.error===void 0&&(i.error=hr),i.complete===void 0&&(i.complete=hr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hr(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e,n,s){let i;if(s<e?i="at least "+e:s>n&&(i=n===0?"none":"no more than "+n),i){const r=t+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(r)}};function Pe(t,e){return`${t} failed: ${e} argument `}function fe(t,e,n,s){if(!(s&&!n)&&typeof n!="function")throw new Error(Pe(t,e)+"must be a valid function.")}function sa(t,e,n,s){if(!(s&&!n)&&(typeof n!="object"||n===null))throw new Error(Pe(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class jt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ae;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qp(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kp(t){return t===nn?void 0:t}function qp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=[];var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const nu={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Gp=Q.INFO,Qp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Yp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Qp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=Gp,this._logHandler=Yp,this._userLogHandler=null,Lo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function Jp(t){Lo.forEach(e=>{e.setLogLevel(t)})}function Xp(t,e){for(const n of Lo){let s=null;e&&e.level&&(s=nu[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,r,...o)=>{const l=o.map(a=>{if(a==null)return null;if(typeof a=="string")return a;if(typeof a=="number"||typeof a=="boolean")return a.toString();if(a instanceof Error)return a.message;try{return JSON.stringify(a)}catch{return null}}).filter(a=>a).join(" ");r>=(s!=null?s:i.logLevel)&&t({level:Q[r].toLowerCase(),message:l,args:o,type:i.name})}}}const Zp=(t,e)=>e.some(n=>t instanceof n);let ia,ra;function eg(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return ra||(ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const su=new WeakMap,$r=new WeakMap,iu=new WeakMap,dr=new WeakMap,Fo=new WeakMap;function ng(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Lt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&su.set(n,t)}).catch(()=>{}),Fo.set(e,t),e}function sg(t){if($r.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$r.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $r.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ig(t){Hr=t(Hr)}function rg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fr(this),e,...n);return iu.set(s,e.sort?e.sort():[e]),Lt(s)}:tg().includes(t)?function(...e){return t.apply(fr(this),e),Lt(su.get(this))}:function(...e){return Lt(t.apply(fr(this),e))}}function og(t){return typeof t=="function"?rg(t):(t instanceof IDBTransaction&&sg(t),Zp(t,eg())?new Proxy(t,Hr):t)}function Lt(t){if(t instanceof IDBRequest)return ng(t);if(dr.has(t))return dr.get(t);const e=og(t);return e!==t&&(dr.set(t,e),Fo.set(e,t)),e}const fr=t=>Fo.get(t);function lg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Lt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Lt(o.result),a.oldVersion,a.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const ag=["get","getKey","getAll","getAllKeys","count"],cg=["put","add","delete","clear"],_r=new Map;function oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_r.get(e))return _r.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=cg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ag.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return _r.set(e,r),r}ig(t=>({...t,get:(e,n,s)=>oa(e,n)||t.get(e,n,s),has:(e,n)=>!!oa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",la="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Di("@firebase/app"),dg="@firebase/app-compat",fg="@firebase/analytics-compat",_g="@firebase/analytics",pg="@firebase/app-check-compat",gg="@firebase/app-check",mg="@firebase/auth",yg="@firebase/auth-compat",vg="@firebase/database",bg="@firebase/database-compat",Cg="@firebase/functions",wg="@firebase/functions-compat",Eg="@firebase/installations",Ig="@firebase/installations-compat",Tg="@firebase/messaging",Sg="@firebase/messaging-compat",xg="@firebase/performance",Ng="@firebase/performance-compat",Ag="@firebase/remote-config",kg="@firebase/remote-config-compat",Rg="@firebase/storage",Pg="@firebase/storage-compat",Og="@firebase/firestore",Dg="@firebase/firestore-compat",Mg="firebase",Lg="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]",Fg={[jr]:"fire-core",[dg]:"fire-core-compat",[_g]:"fire-analytics",[fg]:"fire-analytics-compat",[gg]:"fire-app-check",[pg]:"fire-app-check-compat",[mg]:"fire-auth",[yg]:"fire-auth-compat",[vg]:"fire-rtdb",[bg]:"fire-rtdb-compat",[Cg]:"fire-fn",[wg]:"fire-fn-compat",[Eg]:"fire-iid",[Ig]:"fire-iid-compat",[Tg]:"fire-fcm",[Sg]:"fire-fcm-compat",[xg]:"fire-perf",[Ng]:"fire-perf-compat",[Ag]:"fire-rc",[kg]:"fire-rc-compat",[Rg]:"fire-gcs",[Pg]:"fire-gcs-compat",[Og]:"fire-fst",[Dg]:"fire-fst-compat","fire-js":"fire-js",[Mg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Map,ms=new Map;function ri(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ru(t,e){t.container.addOrOverwriteComponent(e)}function Mn(t){const e=t.name;if(ms.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of zt.values())ri(n,t);return!0}function ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bg(t,e,n=Vt){ou(t,e).clearInstance(n)}function Wg(){ms.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Pi("app","Firebase",Ug);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=Lg;function Wo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vt,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(n||(n=Op()),!n)throw It.create("no-options");const r=zt.get(i);if(r){if(Ur(n,r.options)&&Ur(s,r.config))return r;throw It.create("duplicate-app",{appName:i})}const o=new tu(i);for(const a of ms.values())o.addComponent(a);const l=new $g(n,s,o);return zt.set(i,l),l}function Hg(t=Vt){const e=zt.get(t);if(!e&&t===Vt)return Wo();if(!e)throw It.create("no-app",{appName:t});return e}function jg(){return Array.from(zt.values())}async function lu(t){const e=t.name;zt.has(e)&&(zt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Ft(t,e,n){var s;let i=(s=Fg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(l.join(" "));return}Mn(new jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function au(t,e){if(t!==null&&typeof t!="function")throw It.create("invalid-log-argument");Xp(t,e)}function cu(t){Jp(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firebase-heartbeat-database",zg=1,ys="firebase-heartbeat-store";let pr=null;function uu(){return pr||(pr=lg(Vg,zg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),pr}async function Kg(t){var e;try{return(await uu()).transaction(ys).objectStore(ys).get(hu(t))}catch(n){if(n instanceof Kn)fn.warn(n.message);else{const s=It.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});fn.warn(s.message)}}}async function aa(t,e){var n;try{const i=(await uu()).transaction(ys,"readwrite");return await i.objectStore(ys).put(e,hu(t)),i.done}catch(s){if(s instanceof Kn)fn.warn(s.message);else{const i=It.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});fn.warn(i.message)}}}function hu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1024,Gg=30*24*60*60*1e3;class Qg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ca();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Gg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ca(),{heartbeatsToSend:n,unsentEntries:s}=Yg(this._heartbeatsCache.heartbeats),i=si(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ca(){return new Date().toISOString().substring(0,10)}function Yg(t,e=qg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ua(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ua(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sp()?xp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ua(t){return si(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){Mn(new jt("platform-logger",e=>new ug(e),"PRIVATE")),Mn(new jt("heartbeat",e=>new Qg(e),"PRIVATE")),Ft(jr,la,t),Ft(jr,la,"esm2017"),Ft("fire-js","")}Xg("");const Zg=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Bo,_DEFAULT_ENTRY_NAME:Vt,_addComponent:ri,_addOrOverwriteComponent:ru,_apps:zt,_clearComponents:Wg,_components:ms,_getProvider:ou,_registerComponent:Mn,_removeServiceInstance:Bg,deleteApp:lu,getApp:Hg,getApps:jg,initializeApp:Wo,onLog:au,registerVersion:Ft,setLogLevel:cu,FirebaseError:Kn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n){this._delegate=e,this.firebase=n,ri(e,new jt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),lu(this._delegate)))}_getService(e,n=Vt){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Vt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ri(this._delegate,e)}_addOrOverwriteComponent(e){ru(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ha=new Pi("app-compat","Firebase",tm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e={},n={__esModule:!0,initializeApp:r,app:i,registerVersion:Ft,setLogLevel:cu,onLog:au,apps:null,SDK_VERSION:Bo,INTERNAL:{registerComponent:l,removeApp:s,useAsService:a,modularAPIs:Zg}};n.default=n,Object.defineProperty(n,"apps",{get:o});function s(c){delete e[c]}function i(c){if(c=c||Vt,!We(e,c))throw ha.create("no-app",{appName:c});return e[c]}i.App=t;function r(c,h={}){const u=Wo(c,h);if(We(e,u.name))return e[u.name];const f=new t(u,n);return e[u.name]=f,f}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const h=c.name,u=h.replace("-compat","");if(Mn(c)&&c.type==="PUBLIC"){const f=(g=i())=>{if(typeof g[u]!="function")throw ha.create("invalid-app-argument",{appName:h});return g[u]()};c.serviceProps!==void 0&&ps(f,c.serviceProps),n[u]=f,t.prototype[u]=function(...g){return this._getService.bind(this,h).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[u]:null}function a(c,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){const t=nm(em);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:du,extendNamespace:e,createSubscribe:Hp,ErrorFactory:Pi,deepExtend:ps});function e(n){ps(t,n)}return t}const sm=du();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Di("@firebase/app-compat"),im="@firebase/app-compat",rm="0.1.39";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){Ft(im,rm,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Ip()&&self.firebase!==void 0){da.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&da.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Mi=sm;om();var lm="firebase",am="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi.registerVersion(lm,am,"app-compat");const fa="@firebase/database",_a="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu="";function _u(t){fu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:gs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return We(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cm(e)}}catch{}return new um},an=pu("localStorage"),Vr=pu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Di("@firebase/database"),gu=function(){let t=1;return function(){return t++}}(),mu=function(t){const e=zp(t),n=new $p;n.update(e);const s=n.digest();return Mo.encodeByteArray(s)},Ns=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ns.apply(null,s):typeof s=="object"?e+=ce(s):e+=s,e+=" "}return e};let hn=null,pa=!0;const yu=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Pn.logLevel=Q.VERBOSE,hn=Pn.log.bind(Pn),e&&Vr.set("logging_enabled",!0)):typeof t=="function"?hn=t:(hn=null,Vr.remove("logging_enabled"))},pe=function(...t){if(pa===!0&&(pa=!1,hn===null&&Vr.get("logging_enabled")===!0&&yu(!0)),hn){const e=Ns.apply(null,t);hn(e)}},As=function(t){return function(...e){pe(t,...e)}},zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ns(...t);Pn.error(e)},_t=function(...t){const e=`FIREBASE FATAL ERROR: ${Ns(...t)}`;throw Pn.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+Ns(...t);Pn.warn(e)},hm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Li=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xt="[MIN_NAME]",pt="[MAX_NAME]",vn=function(t,e){if(t===e)return 0;if(t===xt||e===pt)return-1;if(e===xt||t===pt)return 1;{const n=oi(t),s=oi(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},fm=function(t,e){return t===e?0:t<e?-1:1},Zn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},Uo=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ce(e[s]),n+=":",n+=Uo(t[e[s]]);return n+="}",n},vu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bu=function(t){b(!Li(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},_m=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const mm=new RegExp("^-?(0*)\\d{1,10}$"),Cu=-2147483648,$o=2147483647,oi=function(t){if(mm.test(t)){const e=Number(t);if(e>=Cu&&e<=$o)return e}return null},qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},ym=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},os=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class On{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}On.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="5",wu="v",Eu="s",Iu="r",Tu="f",Su=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xu="ls",Nu="p",Kr="ac",Au="websocket",ku="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=an.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&an.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Cm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Au)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ku)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Cm(t)&&(n.ns=t.namespace);const i=[];return me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.counters_={}}incrementCounter(e,n=1){We(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Cp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={},mr={};function jo(t){const e=t.toString();return gr[e]||(gr[e]=new wm),gr[e]}function Em(t,e){const n=t.toString();return mr[n]||(mr[n]=e()),mr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="start",Tm="close",Sm="pLPCommand",xm="pRTLPCB",Ou="id",Du="pw",Mu="ser",Nm="cb",Am="seg",km="ts",Rm="d",Pm="dframe",Lu=1870,Fu=30,Om=Lu-Fu,Dm=25e3,Mm=3e4;class Pt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=jo(n),this.urlFn=a=>(this.appCheckToken&&(a[Kr]=this.appCheckToken),Pu(n,ku,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Im(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mm)),dm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vo((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ga)this.id=l,this.password=a;else if(o===Tm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ga]="t",s[Mu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Nm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wu]=Ho,this.transportSessionId&&(s[Eu]=this.transportSessionId),this.lastSessionId&&(s[xu]=this.lastSessionId),this.applicationId&&(s[Nu]=this.applicationId),this.appCheckToken&&(s[Kr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Su.test(location.hostname)&&(s[Iu]=Tu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pt.forceAllow_=!0}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){return Pt.forceAllow_?!0:!Pt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_m()&&!pm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yc(n),i=vu(s,Om);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Pm]="t",s[Ou]=e,s[Du]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gu(),window[Sm+this.uniqueCallbackIdentifier]=e,window[xm+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pe("frame writing exception"),l.stack&&pe(l.stack),pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ou]=this.myID,e[Du]=this.myPW,e[Mu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fu+s.length<=Lu;){const o=this.pendingSegs.shift();s=s+"&"+Am+i+"="+o.seg+"&"+km+i+"="+o.ts+"&"+Rm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Dm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=16384,Fm=45e3;let li=null;typeof MozWebSocket<"u"?li=MozWebSocket:typeof WebSocket<"u"&&(li=WebSocket);class je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=jo(n),this.connURL=je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[wu]=Ho,typeof location<"u"&&location.hostname&&Su.test(location.hostname)&&(o[Iu]=Tu),n&&(o[Eu]=n),s&&(o[xu]=s),i&&(o[Kr]=i),r&&(o[Nu]=r),Pu(e,Au,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,an.set("previous_websocket_failure",!0);try{let s;Xc(),this.mySock=new li(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&li!==null&&!je.forceDisallow_}static previouslyFailed(){return an.isInMemoryStorage||an.get("previous_websocket_failure")===!0}markConnectionHealthy(){an.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=gs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vu(n,Lm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pt,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=je&&je.isAvailable();let s=n&&!je.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[je];else{const i=this.transports_=[];for(const r of Ln.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ln.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ln.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=6e4,Wm=5e3,Um=10*1024,$m=100*1024,yr="t",ma="d",Hm="s",ya="r",jm="e",va="o",ba="a",Ca="n",wa="p",Vm="h";class zm{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new Ln(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$m?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Um?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yr in e){const n=e[yr];n===ba?this.upgradeIfSecondaryHealthy_():n===ya?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===va&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ba,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ca,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zn(yr,e);if(ma in e){const s=e[ma];if(n===Vm)this.onHandshake_(s);else if(n===Ca){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Hm?this.onConnectionShutdown_(s):n===ya?this.onReset_(s):n===jm?zr("Server Error: "+s):n===va?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ho!==s&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(an.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Wu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ai}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=32,Ia=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new K("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Kt(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function zo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Km(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function se(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof K)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new K(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return xe(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qm(t,e){const n=vs(t,0),s=vs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=vn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Ko(t,e){if(Kt(t)!==Kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Kt(t)>Kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Gm{constructor(e,n){this.errorPrefix_=n,this.parts_=vs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oi(this.parts_[s]);$u(this)}}function Qm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oi(e),$u(t)}function Ym(t){const e=t.parts_.pop();t.byteLength_-=Oi(e),t.parts_.length>0&&(t.byteLength_-=1)}function $u(t){if(t.byteLength_>Ia)throw new Error(t.errorPrefix_+"has a key path longer than "+Ia+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ea)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ea+") or object contains a cycle "+sn(t))}function sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Wu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new qo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=1e3,Jm=60*5*1e3,Ta=30*1e3,Xm=1.3,Zm=3e4,ey="server_kill",Sa=3;class Tt extends Bu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Tt.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=es,this.maxReconnectDelay_=Jm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Xc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ai.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ce(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ae,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Tt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&We(e,"w")){const s=dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ta)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Bp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zr("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zm&&(this.reconnectDelay_=es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Xm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?pe("getToken() completed but was canceled"):(pe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new zm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{we(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ey)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&we(u),a())}}}interrupt(e){pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wr(this.interruptReasons_)&&(this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Uo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new K(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sa&&(this.reconnectDelay_=Ta,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fu.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:Tp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ai.getInstance().currentlyOnline();return Wr(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new U(xt,e),i=new U(xt,n);return this.compare(s,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class Hu extends Fi{static get __EMPTY_NODE(){return Ks}static set __EMPTY_NODE(e){Ks=e}compare(e,n){return vn(e.name,n.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(pt,Ks)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Ks)}toString(){return".key"}}const dt=new Hu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:_e.RED,this.left=i!=null?i:ke.EMPTY_NODE,this.right=r!=null?r:ke.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class ty{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ke{constructor(e,n=ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qs(this.root_,null,this.comparator_,!0,e)}}ke.EMPTY_NODE=new ty;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){return vn(t.name,e.name)}function Go(t,e){return vn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;function sy(t){qr=t}const ju=function(t){return typeof t=="number"?"number:"+bu(t):"string:"+t},Vu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&We(e,".sv"),"Priority must be a string or number.")}else b(t===qr||t.isEmpty(),"priority of unexpected type.");b(t===qr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vu(this.priorityNode_)}static set __childrenNodeConstructor(e){xa=e}static get __childrenNodeConstructor(){return xa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ju(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bu(this.value_):e+=this.value_,this.lazyHash_=mu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),r=de.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu,Ku;function iy(t){zu=t}function ry(t){Ku=t}class oy extends Fi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(pt,new de("[PRIORITY-POST]",Ku))}makePost(e,n){const s=zu(e);return new U(n,new de("[PRIORITY-POST]",s))}toString(){return".priority"}}const ee=new oy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=Math.log(2);class ay{constructor(e){const n=r=>parseInt(Math.log(r)/ly,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ci=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,f;if(h===0)return null;if(h===1)return u=t[a],f=n?n(u):u,new _e(f,u.node,_e.BLACK,null,null);{const g=parseInt(h/2,10)+a,C=i(a,g),T=i(g+1,c);return u=t[g],f=n?n(u):u,new _e(f,u.node,_e.BLACK,C,T)}},r=function(a){let c=null,h=null,u=t.length;const f=function(C,T){const W=u-C,j=u;u-=C;const ye=i(W+1,j),D=t[W],te=n?n(D):D;g(new _e(te,D.node,T,null,ye))},g=function(C){c?(c.left=C,c=C):(h=C,c=C)};for(let C=0;C<a.count;++C){const T=a.nextBitIsOne(),W=Math.pow(2,a.count-(C+1));T?f(W,_e.BLACK):(f(W,_e.BLACK),f(W,_e.RED))}return h},o=new ay(t.length),l=r(o);return new ke(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr;const Tn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Tn&&ee,"ChildrenNode.ts has not been loaded"),vr=vr||new Ct({".priority":Tn},{".priority":ee}),vr}get(e){const n=dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ke?n:null}hasIndex(e){return We(this.indexSet_,e.toString())}addIndex(e,n){b(e!==dt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ci(s,e.getCompare()):l=Tn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ct(h,c)}addToIndexes(e,n){const s=ii(this.indexes_,(i,r)=>{const o=dn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Tn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ci(l,o.getCompare())}else return Tn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=ii(this.indexes_,i=>{if(i===Tn)return i;{const r=n.get(e.name);return r?i.remove(new U(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;class k{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Vu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new k(new ke(Go),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ts:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new U(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ts:this.priorityNode_;return new k(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{b(L(e)!==".priority"||Kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Y(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),s++,r&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ju(this.getPriority().val())+":"),this.forEachChild(ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ks?-1:0}withIndex(e){if(e===dt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ee),i=n.getIterator(ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dt?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cy extends k{constructor(){super(new ke(Go),k.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const ks=new cy;Object.defineProperties(U,{MIN:{value:new U(xt,k.EMPTY_NODE)},MAX:{value:new U(pt,ks)}});Hu.__EMPTY_NODE=k.EMPTY_NODE;de.__childrenNodeConstructor=k;sy(ks);ry(ks);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=!0;function ie(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ie(e))}if(!(t instanceof Array)&&uy){const n=[];let s=!1;if(me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ie(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return k.EMPTY_NODE;const r=ci(n,ny,o=>o.name,Go);if(s){const o=ci(n,ee.getCompare());return new k(r,ie(e),new Ct({".priority":o},{".priority":ee}))}else return new k(r,ie(e),Ct.Default)}else{let n=k.EMPTY_NODE;return me(t,(s,i)=>{if(We(t,s)&&s.substring(0,1)!=="."){const r=ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ie(e))}}iy(ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Fi{constructor(e){super(),this.indexPath_=e,b(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vn(e.name,n.name):r}makePost(e,n){const s=ie(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,s);return new U(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,ks);return new U(pt,e)}toString(){return vs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends Fi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const s=ie(e);return new U(n,s)}toString(){return".value"}}const Yo=new hy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Gr="-",qu="z",Gu=786,dy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Fn.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Fn.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}(),Na=function(t){if(t===""+$o)return Gr;const e=oi(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<Gu)return n.push(Gr),n.join("");let s=n.length-1;for(;s>=0&&n[s]===qu;)s--;if(s===-1)return pt;const i=n[s],r=Fn.charAt(Fn.indexOf(i)+1);return n[s]=r,n.slice(0,s+1).join("")},Aa=function(t){if(t===""+Cu)return xt;const e=oi(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let s=0;s<n.length;s++)n[s]=t.charAt(s);return n[n.length-1]===Gr?n.length===1?""+$o:(delete n[n.length-1],n.join("")):(n[n.length-1]=Fn.charAt(Fn.indexOf(n[n.length-1])-1),n.join("")+qu.repeat(Gu-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){return{type:"value",snapshotNode:t}}function Bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Cs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(bs(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Bn(n,s)):o.trackChildChange(Cs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(bs(i,r))}),n.isLeafNode()||n.forEachChild(ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Cs(i,r,o))}else s.trackChildChange(Bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.indexedFilter_=new Jo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ws.getStartPost_(e),this.endPost_=ws.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new U(n,s))||(s=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const r=this;return n.forEachChild(ee,(o,l)=>{r.matches(new U(o,l))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.rangedFilter_=new ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new U(n,s))||(s=k.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();l=(f,g)=>u(g,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,h=!1;for(;a.hasNext();){const u=a.getNext();!h&&l(r,u)<=0&&(h=!0),h&&c<this.limit_&&l(u,o)<=0?c++:i=i.updateImmediateChild(u.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,g)=>u(g,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new U(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(h&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Cs(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(bs(n,u));const T=l.updateImmediateChild(n,k.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Bn(f.name,f.node)),T.updateImmediateChild(f.name,f.node)):T}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(bs(c.name,c.node)),r.trackChildChange(Bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xt}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Bi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function py(t){return t.loadsAllData()?new Jo(t.getIndex()):t.hasLimit()?new _y(t):new ws(t)}function gy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function my(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Qr(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function yy(t,e,n){let s;if(t.index_===dt)typeof e=="string"&&(e=Na(e)),s=Qr(t,e,n);else{let i;n==null?i=pt:i=Na(n),s=Qr(t,e,i)}return s.startAfterSet_=!0,s}function Yr(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function vy(t,e,n){let s,i;return t.index_===dt?(typeof e=="string"&&(e=Aa(e)),i=Yr(t,e,n)):(n==null?s=xt:s=Aa(n),i=Yr(t,e,s)),i.endBeforeSet_=!0,i}function Wi(t,e){const n=t.copy();return n.index_=e,n}function ka(t){const e={};if(t.isDefault())return e;let n;return t.index_===ee?n="$priority":t.index_===Yo?n="$value":t.index_===dt?n="$key":(b(t.index_ instanceof Qo,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_&&(e.startAt=ce(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ce(t.indexStartName_))),t.endSet_&&(e.endAt=ce(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ce(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ra(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Bu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ui.getListenId_(e,s),l={};this.listens_[o]=l;const a=ka(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),dn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ui.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ka(e._queryParams),s=e._path.toString(),i=new Ae;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Up(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=gs(l.responseText)}catch{we("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return{value:null,children:new Map}}function Gn(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,hi());const i=t.children.get(s);e=Y(e),Gn(i,e,n)}}function Jr(t,e){if(F(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ee,(s,i)=>{Gn(t,new K(s),i)}),Jr(t,e)}}else if(t.children.size>0){const n=L(e);return e=Y(e),t.children.has(n)&&Jr(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Xr(t,e,n){t.value!==null?n(e,t.value):Cy(t,(s,i)=>{const r=new K(e.toString()+"/"+s);Xr(i,r,n)})}function Cy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=10*1e3,Ey=30*1e3,Iy=5*60*1e3;class Ty{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wy(e);const s=Pa+(Ey-Pa)*Math.random();os(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;me(e,(i,r)=>{r>0&&We(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),os(this.reportStats_.bind(this),Math.floor(Math.random()*2*Iy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(et||(et={}));function Xo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function el(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=et.ACK_USER_WRITE,this.source=Xo()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new di(z(),n,this.revert)}}else return b(L(this.path)===e,"operationForChild called for unrelated child."),new di(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.source=e,this.path=n,this.type=et.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Es(this.source,z()):new Es(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=et.OVERWRITE}operationForChild(e){return F(this.path)?new _n(this.source,z(),this.snap.getImmediateChild(e)):new _n(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=et.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new _n(this.source,z(),n.value):new Wn(this.source,z(),n)}else return b(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fy(o.childName,o.snapshotNode))}),ns(t,i,"child_removed",e,s,n),ns(t,i,"child_added",e,s,n),ns(t,i,"child_moved",r,s,n),ns(t,i,"child_changed",e,s,n),ns(t,i,"value",e,s,n),i}function ns(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Ay(t,l,a)),o.forEach(l=>{const a=Ny(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ny(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ay(t,e,n){if(e.childName==null||n.childName==null)throw zn("Should only compare child_ events.");const s=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return{eventCache:t,serverCache:e}}function ls(t,e,n,s){return Ui(new qt(e,n,s),t.serverCache)}function Yu(t,e,n,s){return Ui(t.eventCache,new qt(e,n,s))}function fi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;const ky=()=>(br||(br=new ke(fm)),br);class Z{constructor(e,n=ky()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return me(e,(s,i)=>{n=n.set(new K(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(F(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Y(e),n);return r!=null?{path:se(new K(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(Y(e)):new Z(null)}}set(e,n){if(F(e))return new Z(n,this.children);{const s=L(e),r=(this.children.get(s)||new Z(null)).set(Y(e),n),o=this.children.insert(s,r);return new Z(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(Y(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Z(null):new Z(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(Y(e)):null}}setTree(e,n){if(F(e))return n;{const s=L(e),r=(this.children.get(s)||new Z(null)).setTree(Y(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Z(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(se(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(F(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Y(e),se(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,s){if(F(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(Y(e),se(n,i),s):new Z(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(se(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new Z(null))}}function as(t,e,n){if(F(e))return new nt(new Z(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new nt(t.writeTree_.set(i,r))}else{const i=new Z(n),r=t.writeTree_.setTree(e,i);return new nt(r)}}}function Zr(t,e,n){let s=t;return me(n,(i,r)=>{s=as(s,se(e,i),r)}),s}function Oa(t,e){if(F(e))return nt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new nt(n)}}function eo(t,e){return bn(t,e)!=null}function bn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function Da(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(s,i)=>{e.push(new U(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new U(s,i.value))}),e}function Bt(t,e){if(F(e))return t;{const n=bn(t,e);return n!=null?new nt(new Z(n)):new nt(t.writeTree_.subtree(e))}}function to(t){return t.writeTree_.isEmpty()}function Un(t,e){return Ju(z(),t.writeTree_,e)}function Ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ju(se(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(se(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){return th(e,t)}function Ry(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=s}function Py(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Zr(t.visibleWrites,e,n),t.lastWriteId=s}function Oy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Dy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&My(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Ly(t),!0;if(s.snap)t.visibleWrites=Oa(t.visibleWrites,s.path);else{const l=s.children;me(l,a=>{t.visibleWrites=Oa(t.visibleWrites,se(s.path,a))})}return!0}else return!1}function My(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(se(t.path,n),e))return!0;return!1}function Ly(t){t.visibleWrites=Xu(t.allWrites,Fy,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Fy(t){return t.visible}function Xu(t,e,n){let s=nt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=xe(n,o),s=as(s,l,r.snap)):ze(o,n)&&(l=xe(o,n),s=as(s,z(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=xe(n,o),s=Zr(s,l,r.children);else if(ze(o,n))if(l=xe(o,n),F(l))s=Zr(s,z(),r.children);else{const a=dn(r.children,L(l));if(a){const c=a.getChild(Y(l));s=as(s,z(),c)}}}else throw zn("WriteRecord should have .snap or .children")}}return s}function Zu(t,e,n,s,i){if(!s&&!i){const r=bn(t.visibleWrites,e);if(r!=null)return r;{const o=Bt(t.visibleWrites,e);if(to(o))return n;if(n==null&&!eo(o,z()))return null;{const l=n||k.EMPTY_NODE;return Un(o,l)}}}else{const r=Bt(t.visibleWrites,e);if(!i&&to(r))return n;if(!i&&n==null&&!eo(r,z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=Xu(t.allWrites,o,e),a=n||k.EMPTY_NODE;return Un(l,a)}}}function By(t,e,n){let s=k.EMPTY_NODE;const i=bn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bt(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=Un(Bt(r,new K(o)),l);s=s.updateImmediateChild(o,a)}),Da(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bt(t.visibleWrites,e);return Da(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wy(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=se(e,n);if(eo(t.visibleWrites,r))return null;{const o=Bt(t.visibleWrites,r);return to(o)?i.getChild(n):Un(o,i.getChild(n))}}function Uy(t,e,n,s){const i=se(e,n),r=bn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bt(t.visibleWrites,i);return Un(o,s.getNode().getImmediateChild(n))}else return null}function $y(t,e){return bn(t.visibleWrites,e)}function Hy(t,e,n,s,i,r,o){let l;const a=Bt(t.visibleWrites,e),c=bn(a,z());if(c!=null)l=c;else if(n!=null)l=Un(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&h.length<i;)u(g,s)!==0&&h.push(g),g=f.getNext();return h}else return[]}function jy(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function _i(t,e,n,s){return Zu(t.writeTree,t.treePath,e,n,s)}function tl(t,e){return By(t.writeTree,t.treePath,e)}function Ma(t,e,n,s){return Wy(t.writeTree,t.treePath,e,n,s)}function pi(t,e){return $y(t.writeTree,se(t.treePath,e))}function Vy(t,e,n,s,i,r){return Hy(t.writeTree,t.treePath,e,n,s,i,r)}function nl(t,e,n){return Uy(t.writeTree,t.treePath,e,n)}function eh(t,e){return th(se(t.treePath,e),t.writeTree)}function th(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Cs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,bs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Cs(s,e.snapshotNode,i.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const nh=new Ky;class sl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pn(this.viewCache_),r=Vy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){return{filter:t}}function Gy(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qy(t,e,n,s,i){const r=new zy;let o,l;if(n.type===et.OVERWRITE){const c=n;c.source.fromUser?o=no(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=gi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===et.MERGE){const c=n;c.source.fromUser?o=Jy(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=so(t,e,c.path,c.children,s,i,l,r))}else if(n.type===et.ACK_USER_WRITE){const c=n;c.revert?o=ev(t,e,c.path,s,i,r):o=Xy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===et.LISTEN_COMPLETE)o=Zy(t,e,n.path,s,r);else throw zn("Unknown operation type: "+n.type);const a=r.getChanges();return Yy(e,o,a),{viewCache:o,changes:a}}function Yy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Qu(fi(e)))}}function sh(t,e,n,s,i,r){const o=e.eventCache;if(pi(s,n)!=null)return e;{let l,a;if(F(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pn(e),h=c instanceof k?c:k.EMPTY_NODE,u=tl(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=_i(s,pn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){b(Kt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Ma(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=Y(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Ma(s,n,o.getNode(),a);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=nl(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return ls(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function gi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&Kt(n)>1)return e;const C=Y(n),W=a.getNode().getImmediateChild(g).updateChild(C,s);g===".priority"?c=h.updatePriority(a.getNode(),W):c=h.updateChild(a.getNode(),g,W,C,nh,null)}const u=Yu(e,c,a.isFullyInitialized()||F(n),h.filtersNodes()),f=new sl(i,u,r);return sh(t,u,n,i,f,l)}function no(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new sl(i,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ls(e,c,!0,t.filter.filtersNodes());else{const u=L(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ls(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Y(n),g=l.getNode().getImmediateChild(u);let C;if(F(f))C=s;else{const T=h.getCompleteChild(u);T!=null?zo(f)===".priority"&&T.getChild(Uu(f)).isEmpty()?C=T:C=T.updateChild(f,s):C=k.EMPTY_NODE}if(g.equals(C))a=e;else{const T=t.filter.updateChild(l.getNode(),u,C,f,h,o);a=ls(e,T,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function La(t,e){return t.eventCache.isCompleteForChild(e)}function Jy(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=se(n,a);La(e,L(h))&&(l=no(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=se(n,a);La(e,L(h))||(l=no(t,l,h,c,i,r,o))}),l}function Fa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function so(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;F(n)?c=s:c=new Z(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),C=Fa(t,g,f);a=gi(t,a,new K(u),C,i,r,o,l)}}),c.children.inorderTraversal((u,f)=>{const g=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!g){const C=e.serverCache.getNode().getImmediateChild(u),T=Fa(t,C,f);a=gi(t,a,new K(u),T,i,r,o,l)}}),a}function Xy(t,e,n,s,i,r,o){if(pi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return gi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(F(n)){let c=new Z(null);return a.getNode().forEachChild(dt,(h,u)=>{c=c.set(new K(h),u)}),so(t,e,n,c,i,r,l,o)}else return e}else{let c=new Z(null);return s.foreach((h,u)=>{const f=se(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),so(t,e,n,c,i,r,l,o)}}function Zy(t,e,n,s,i){const r=e.serverCache,o=Yu(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return sh(t,o,n,s,nh,i)}function ev(t,e,n,s,i,r){let o;if(pi(s,n)!=null)return e;{const l=new sl(s,e,i),a=e.eventCache.getNode();let c;if(F(n)||L(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=_i(s,pn(e));else{const u=e.serverCache.getNode();b(u instanceof k,"serverChildren would be complete if leaf node"),h=tl(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=L(n);let u=nl(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,Y(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,k.EMPTY_NODE,Y(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_i(s,pn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||pi(s,z())!=null,ls(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Jo(s.getIndex()),r=py(s);this.processor_=qy(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,l.getNode(),null),h=new qt(a,o.isFullyInitialized(),i.filtersNodes()),u=new qt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ui(u,h),this.eventGenerator_=new Sy(this.query_)}get query(){return this.query_}}function nv(t){return t.viewCache_.serverCache.getNode()}function sv(t){return fi(t.viewCache_)}function iv(t,e){const n=pn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Ba(t){return t.eventRegistrations_.length===0}function rv(t,e){t.eventRegistrations_.push(e)}function Wa(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ua(t,e,n,s){e.type===et.MERGE&&e.source.queryId!==null&&(b(pn(t.viewCache_),"We should always have a full cache before handling merges"),b(fi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Qy(t.processor_,i,e,n,s);return Gy(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ih(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ov(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(r,o)=>{s.push(Bn(r,o))}),n.isFullyInitialized()&&s.push(Qu(n.getNode())),ih(t,s,n.getNode(),e)}function ih(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return xy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;class rh{constructor(){this.views=new Map}}function lv(t){b(!mi,"__referenceConstructor has already been defined"),mi=t}function av(){return b(mi,"Reference.ts has not been loaded"),mi}function cv(t){return t.views.size===0}function il(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ua(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ua(o,e,n,s));return r}}function oh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=_i(n,i?s:null),a=!1;l?a=!0:s instanceof k?(l=tl(n,s),a=!1):(l=k.EMPTY_NODE,a=!1);const c=Ui(new qt(l,a,!1),new qt(s,i,!1));return new tv(e,c)}return o}function uv(t,e,n,s,i,r){const o=oh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rv(o,n),ov(o,n)}function hv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Gt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Wa(c,n,s)),Ba(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Wa(a,n,s)),Ba(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Gt(t)&&r.push(new(av())(e._repo,e._path)),{removed:r,events:o}}function lh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wt(t,e){let n=null;for(const s of t.views.values())n=n||iv(s,e);return n}function ah(t,e){if(e._queryParams.loadsAllData())return Hi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ch(t,e){return ah(t,e)!=null}function Gt(t){return Hi(t)!=null}function Hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;function dv(t){b(!yi,"__referenceConstructor has already been defined"),yi=t}function fv(){return b(yi,"Reference.ts has not been loaded"),yi}let _v=1;class $a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=jy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rl(t,e,n,s,i){return Ry(t.pendingWriteTree_,e,n,s,i),i?Qn(t,new _n(Xo(),e,n)):[]}function pv(t,e,n,s){Py(t.pendingWriteTree_,e,n,s);const i=Z.fromObject(n);return Qn(t,new Wn(Xo(),e,i))}function Ot(t,e,n=!1){const s=Oy(t.pendingWriteTree_,e);if(Dy(t.pendingWriteTree_,e)){let r=new Z(null);return s.snap!=null?r=r.set(z(),!0):me(s.children,o=>{r=r.set(new K(o),!0)}),Qn(t,new di(s.path,r,n))}else return[]}function Rs(t,e,n){return Qn(t,new _n(Zo(),e,n))}function gv(t,e,n){const s=Z.fromObject(n);return Qn(t,new Wn(Zo(),e,s))}function mv(t,e){return Qn(t,new Es(Zo(),e))}function yv(t,e,n){const s=ol(t,n);if(s){const i=ll(s),r=i.path,o=i.queryId,l=xe(r,e),a=new Es(el(o),l);return al(t,r,a)}else return[]}function vi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ch(o,e))){const a=hv(o,e,n,s);cv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(f,g)=>Gt(g));if(h&&!u){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=Cv(f);for(let C=0;C<g.length;++C){const T=g[C],W=T.query,j=fh(t,T);t.listenProvider_.startListening(cs(W),Is(t,W),j.hashFn,j.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(cs(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(Vi(f));t.listenProvider_.stopListening(cs(f),g)}))}wv(t,c)}return l}function uh(t,e,n,s){const i=ol(t,s);if(i!=null){const r=ll(i),o=r.path,l=r.queryId,a=xe(o,e),c=new _n(el(l),a,n);return al(t,o,c)}else return[]}function vv(t,e,n,s){const i=ol(t,s);if(i){const r=ll(i),o=r.path,l=r.queryId,a=xe(o,e),c=Z.fromObject(n),h=new Wn(el(l),a,c);return al(t,o,h)}else return[]}function io(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const C=xe(f,i);r=r||Wt(g,C),o=o||Gt(g)});let l=t.syncPointTree_.get(i);l?(o=o||Gt(l),r=r||Wt(l,z())):(l=new rh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=k.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,C)=>{const T=Wt(C,z());T&&(r=r.updateImmediateChild(g,T))}));const c=ch(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Vi(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Ev();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=$i(t.pendingWriteTree_,i);let u=uv(l,e,n,h,r,a);if(!c&&!o&&!s){const f=ah(l,e);u=u.concat(Iv(t,e,f))}return u}function ji(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),c=Wt(l,a);if(c)return c});return Zu(i,e,r,n,!0)}function bv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=xe(c,n);s=s||Wt(h,u)});let i=t.syncPointTree_.get(n);i?s=s||Wt(i,z()):(i=new rh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new qt(s,!0,!1):null,l=$i(t.pendingWriteTree_,e._path),a=oh(i,e,l,r?o.getNode():k.EMPTY_NODE,r);return sv(a)}function Qn(t,e){return hh(e,t.syncPointTree_,null,$i(t.pendingWriteTree_,z()))}function hh(t,e,n,s){if(F(t.path))return dh(t,e,n,s);{const i=e.get(z());n==null&&i!=null&&(n=Wt(i,z()));let r=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=eh(s,o);r=r.concat(hh(l,a,c,h))}return i&&(r=r.concat(il(i,t,s,n))),r}}function dh(t,e,n,s){const i=e.get(z());n==null&&i!=null&&(n=Wt(i,z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=eh(s,o),h=t.operationForChild(o);h&&(r=r.concat(dh(h,l,a,c)))}),i&&(r=r.concat(il(i,t,s,n))),r}function fh(t,e){const n=e.query,s=Is(t,n);return{hashFn:()=>(nv(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?yv(t,n._path,s):mv(t,n._path);{const r=gm(i,n);return vi(t,n,null,r)}}}}function Is(t,e){const n=Vi(e);return t.queryToTagMap.get(n)}function Vi(t){return t._path.toString()+"$"+t._queryIdentifier}function ol(t,e){return t.tagToQueryMap.get(e)}function ll(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function al(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=$i(t.pendingWriteTree_,e);return il(s,n,i,null)}function Cv(t){return t.fold((e,n,s)=>{if(n&&Gt(n))return[Hi(n)];{let i=[];return n&&(i=lh(n)),me(s,(r,o)=>{i=i.concat(o)}),i}})}function cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fv())(t._repo,t._path):t}function wv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Vi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ev(){return _v++}function Iv(t,e,n){const s=e._path,i=Is(t,e),r=fh(t,n),o=t.listenProvider_.startListening(cs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Gt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!F(c)&&h&&Gt(h))return[Hi(h).query];{let f=[];return h&&(f=f.concat(lh(h).map(g=>g.query))),me(u,(g,C)=>{f=f.concat(C)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(cs(h),Is(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cl(n)}node(){return this.node_}}class ul{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new ul(this.syncTree_,n)}node(){return ji(this.syncTree_,this.path_)}}const Tv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ha=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Sv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xv(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Sv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},xv=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_h=function(t,e,n,s){return dl(e,new ul(n,t),s)},hl=function(t,e,n){return dl(t,new cl(e),n)};function dl(t,e,n){const s=t.getPriority().val(),i=Ha(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ha(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new de(i))),o.forEachChild(ee,(l,a)=>{const c=dl(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function zi(t,e){let n=e instanceof K?e:new K(e),s=t,i=L(n);for(;i!==null;){const r=dn(s.node.children,i)||{children:{},childCount:0};s=new fl(i,s,r),n=Y(n),i=L(n)}return s}function Cn(t){return t.node.value}function _l(t,e){t.node.value=e,ro(t)}function ph(t){return t.node.childCount>0}function Nv(t){return Cn(t)===void 0&&!ph(t)}function Ki(t,e){me(t.node.children,(n,s)=>{e(new fl(n,t,s))})}function gh(t,e,n,s){n&&!s&&e(t),Ki(t,i=>{gh(i,e,!0,s)}),n&&s&&e(t)}function Av(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ps(t){return new K(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function ro(t){t.parent!==null&&kv(t.parent,t.name,t)}function kv(t,e,n){const s=Nv(n),i=We(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ro(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ro(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=/[\[\].#$\/\u0000-\u001F\u007F]/,Pv=/[\[\].#$\u0000-\u001F\u007F]/,Cr=10*1024*1024,qi=function(t){return typeof t=="string"&&t.length!==0&&!Rv.test(t)},mh=function(t){return typeof t=="string"&&t.length!==0&&!Pv.test(t)},Ov=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mh(t)},Ts=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Li(t)||t&&typeof t=="object"&&We(t,".sv")},gt=function(t,e,n,s){s&&e===void 0||Os(Pe(t,"value"),e,n)},Os=function(t,e,n){const s=n instanceof K?new Gm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sn(s));if(typeof e=="function")throw new Error(t+"contains a function "+sn(s)+" with contents = "+e.toString());if(Li(e))throw new Error(t+"contains "+e.toString()+" "+sn(s));if(typeof e=="string"&&e.length>Cr/3&&Oi(e)>Cr)throw new Error(t+"contains a string greater than "+Cr+" utf8 bytes "+sn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qi(o)))throw new Error(t+" contains an invalid key ("+o+") "+sn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qm(s,o),Os(t,l,s),Ym(s)}),i&&r)throw new Error(t+' contains ".value" child '+sn(s)+" in addition to actual children.")}},Dv=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=vs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!qi(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qm);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ze(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},yh=function(t,e,n,s){if(s&&e===void 0)return;const i=Pe(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];me(e,(o,l)=>{const a=new K(o);if(Os(i,l,se(n,a)),zo(a)===".priority"&&!Ts(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Dv(i,r)},pl=function(t,e,n){if(!(n&&e===void 0)){if(Li(e))throw new Error(Pe(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ts(e))throw new Error(Pe(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Ds=function(t,e,n,s){if(!(s&&n===void 0)&&!qi(n))throw new Error(Pe(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Ss=function(t,e,n,s){if(!(s&&n===void 0)&&!mh(n))throw new Error(Pe(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Mv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ss(t,e,n,s)},Ke=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},vh=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ov(n))throw new Error(Pe(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ko(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function bh(t,e,n){Gi(t,n),Ch(t,s=>Ko(s,e))}function Ue(t,e,n){Gi(t,n),Ch(t,s=>ze(s,e)||ze(e,s))}function Ch(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Fv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Fv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hn&&pe("event: "+n.toString()),qn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="repo_interrupt",Bv=25;class Wv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hi(),this.transactionQueueTree_=new fl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uv(t,e,n){if(t.stats_=jo(t.repoInfo_),t.forceRestClient_||ym())t.server_=new ui(t.repoInfo_,(s,i,r,o)=>{ja(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Va(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(s,i,r,o)=>{ja(t,s,i,r,o)},s=>{Va(t,s)},s=>{$v(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Em(t.repoInfo_,()=>new Ty(t.stats_,t.server_)),t.infoData_=new by,t.infoSyncTree_=new $a({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Rs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),gl(t,"connected",!1),t.serverSyncTree_=new $a({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ue(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Eh(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ms(t){return Tv({timestamp:Eh(t)})}function ja(t,e,n,s,i){t.dataUpdateCount++;const r=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ii(n,c=>ie(c));o=vv(t.serverSyncTree_,r,a,i)}else{const a=ie(n);o=uh(t.serverSyncTree_,r,a,i)}else if(s){const a=ii(n,c=>ie(c));o=gv(t.serverSyncTree_,r,a)}else{const a=ie(n);o=Rs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=$n(t,r)),Ue(t.eventQueue_,l,o)}function Va(t,e){gl(t,"connected",e),e===!1&&Vv(t)}function $v(t,e){me(e,(n,s)=>{gl(t,n,s)})}function gl(t,e,n){const s=new K("/.info/"+e),i=ie(n);t.infoData_.updateSnapshot(s,i);const r=Rs(t.infoSyncTree_,s,i);Ue(t.eventQueue_,s,r)}function Qi(t){return t.nextWriteId_++}function Hv(t,e,n){const s=bv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ie(i).withIndex(e._queryParams.getIndex());io(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rs(t.serverSyncTree_,e._path,r);else{const l=Is(t.serverSyncTree_,e);o=uh(t.serverSyncTree_,e._path,r,l)}return Ue(t.eventQueue_,e._path,o),vi(t.serverSyncTree_,e,n,null,!0),r},i=>(Yn(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function ml(t,e,n,s,i){Yn(t,"set",{path:e.toString(),value:n,priority:s});const r=Ms(t),o=ie(n,s),l=ji(t.serverSyncTree_,e),a=hl(o,l,r),c=Qi(t),h=rl(t.serverSyncTree_,e,a,c,!0);Gi(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const C=f==="ok";C||we("set at "+e+" failed: "+f);const T=Ot(t.serverSyncTree_,c,!C);Ue(t.eventQueue_,e,T),Qt(t,i,f,g)});const u=vl(t,e);$n(t,u),Ue(t.eventQueue_,u,[])}function jv(t,e,n,s){Yn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Ms(t),o={};if(me(n,(l,a)=>{i=!1,o[l]=_h(se(e,l),ie(a),t.serverSyncTree_,r)}),i)pe("update() called with empty data.  Don't do anything."),Qt(t,s,"ok",void 0);else{const l=Qi(t),a=pv(t.serverSyncTree_,e,o,l);Gi(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||we("update at "+e+" failed: "+c);const f=Ot(t.serverSyncTree_,l,!u),g=f.length>0?$n(t,e):e;Ue(t.eventQueue_,g,f),Qt(t,s,c,h)}),me(n,c=>{const h=vl(t,se(e,c));$n(t,h)}),Ue(t.eventQueue_,e,[])}}function Vv(t){Yn(t,"onDisconnectEvents");const e=Ms(t),n=hi();Xr(t.onDisconnect_,z(),(i,r)=>{const o=_h(i,r,t.serverSyncTree_,e);Gn(n,i,o)});let s=[];Xr(n,z(),(i,r)=>{s=s.concat(Rs(t.serverSyncTree_,i,r));const o=vl(t,i);$n(t,o)}),t.onDisconnect_=hi(),Ue(t.eventQueue_,z(),s)}function zv(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Jr(t.onDisconnect_,e),Qt(t,n,s,i)})}function za(t,e,n,s){const i=ie(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Gn(t.onDisconnect_,e,i),Qt(t,s,r,o)})}function Kv(t,e,n,s,i){const r=ie(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&Gn(t.onDisconnect_,e,r),Qt(t,i,o,l)})}function qv(t,e,n,s){if(Wr(n)){pe("onDisconnect().update() called with empty data.  Don't do anything."),Qt(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&me(n,(o,l)=>{const a=ie(l);Gn(t.onDisconnect_,se(e,o),a)}),Qt(t,s,i,r)})}function Gv(t,e,n){let s;L(e._path)===".info"?s=io(t.infoSyncTree_,e,n):s=io(t.serverSyncTree_,e,n),bh(t.eventQueue_,e._path,s)}function oo(t,e,n){let s;L(e._path)===".info"?s=vi(t.infoSyncTree_,e,n):s=vi(t.serverSyncTree_,e,n),bh(t.eventQueue_,e._path,s)}function Ih(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wh)}function Qv(t){t.persistentConnection_&&t.persistentConnection_.resume(wh)}function Yn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pe(n,...e)}function Qt(t,e,n,s){e&&qn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yv(t,e,n,s,i,r){Yn(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:gu(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=yl(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Os("transaction failed: Data returned ",a,o.path),o.status=0;const c=zi(t.transactionQueueTree_,e),h=Cn(c)||[];h.push(o),_l(c,h);let u;typeof a=="object"&&a!==null&&We(a,".priority")?(u=dn(a,".priority"),b(Ts(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(ji(t.serverSyncTree_,e)||k.EMPTY_NODE).getPriority().val();const f=Ms(t),g=ie(a,u),C=hl(g,l,f);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=C,o.currentWriteId=Qi(t);const T=rl(t.serverSyncTree_,e,C,o.currentWriteId,o.applyLocally);Ue(t.eventQueue_,e,T),Yi(t,t.transactionQueueTree_)}}function yl(t,e,n){return ji(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function Yi(t,e=t.transactionQueueTree_){if(e||Ji(t,e),Cn(e)){const n=Sh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jv(t,Ps(e),n)}else ph(e)&&Ki(e,n=>{Yi(t,n)})}function Jv(t,e,n){const s=n.map(c=>c.currentWriteId),i=yl(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=xe(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Yn(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Ot(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ji(t,zi(t.transactionQueueTree_,e)),Yi(t,t.transactionQueueTree_),Ue(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)qn(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{we("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}$n(t,e)}},o)}function $n(t,e){const n=Th(t,e),s=Ps(n),i=Sh(t,n);return Xv(t,i,s),s}function Xv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=xe(n,a.path);let h=!1,u;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Bv)h=!0,u="maxretry",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else{const f=yl(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Os("transaction failed: Data returned ",g,a.path);let C=ie(g);typeof g=="object"&&g!=null&&We(g,".priority")||(C=C.updatePriority(f.getPriority()));const W=a.currentWriteId,j=Ms(t),ye=hl(C,f,j);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=ye,a.currentWriteId=Qi(t),o.splice(o.indexOf(W),1),i=i.concat(rl(t.serverSyncTree_,a.path,ye,a.currentWriteId,a.applyLocally)),i=i.concat(Ot(t.serverSyncTree_,W,!0))}else h=!0,u="nodata",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0))}Ue(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Ji(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)qn(s[l]);Yi(t,t.transactionQueueTree_)}function Th(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&Cn(s)===void 0;)s=zi(s,n),e=Y(e),n=L(e);return s}function Sh(t,e){const n=[];return xh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function xh(t,e,n){const s=Cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ki(e,i=>{xh(t,i,n)})}function Ji(t,e){const n=Cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_l(e,n.length>0?n:void 0)}Ki(e,s=>{Ji(t,s)})}function vl(t,e){const n=Ps(Th(t,e)),s=zi(t.transactionQueueTree_,e);return Av(s,i=>{wr(t,i)}),wr(t,s),gh(s,i=>{wr(t,i)}),n}function wr(t,e){const n=Cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ot(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_l(e,void 0):n.length=r+1,Ue(t.eventQueue_,Ps(e),i);for(let o=0;o<s.length;o++)qn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const lo=function(t,e){const n=tb(t),s=n.namespace;n.domain==="firebase.com"&&_t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ru(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new K(n.pathString)}},tb=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Zv(t.substring(h,u)));const f=eb(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class Ah{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Ae;return zv(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ke("OnDisconnect.remove",this._path);const e=new Ae;return za(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ke("OnDisconnect.set",this._path),gt("OnDisconnect.set",e,this._path,!1);const n=new Ae;return za(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ke("OnDisconnect.setWithPriority",this._path),gt("OnDisconnect.setWithPriority",e,this._path,!1),pl("OnDisconnect.setWithPriority",n,!1);const s=new Ae;return Kv(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Ke("OnDisconnect.update",this._path),yh("OnDisconnect.update",e,this._path,!1);const n=new Ae;return qv(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:zo(this._path)}get ref(){return new Ge(this._repo,this._path)}get _queryIdentifier(){const e=Ra(this._queryParams),n=Uo(e);return n==="{}"?"default":n}get _queryObject(){return Ra(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Oe))return!1;const n=this._repo===e._repo,s=Ko(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Km(this._path)}}function Xi(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Yt(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===dt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==xt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==pt)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ee){if(e!=null&&!Ts(e)||n!=null&&!Ts(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(b(t.getIndex()instanceof Qo||t.getIndex()===Yo,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Zi(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ge extends Oe{constructor(e,n){super(e,n,new Bi,!1)}get parent(){const e=Uu(this._path);return e===null?null:new Ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),s=mn(this.ref,e);return new gn(this._node.getChild(n),s,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gn(i,mn(this.ref,s),ee)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kh(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?mn(t._root,e):t._root}function Ka(t,e){t=$e(t),t._checkNotDeleted("refFromURL");const n=lo(e,t._repo.repoInfo_.nodeAdmin);vh("refFromURL",n);const s=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&s.host!==t._repo.repoInfo_.host&&_t("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+t._repo.repoInfo_.host+")"),kh(t,n.path.toString())}function mn(t,e){return t=$e(t),L(t._path)===null?Mv("child","path",e,!1):Ss("child","path",e,!1),new Ge(t._repo,se(t._path,e))}function sb(t,e){t=$e(t),Ke("push",t._path),gt("push",e,t._path,!0);const n=Eh(t._repo),s=dy(n),i=mn(t,s),r=mn(t,s);let o;return e!=null?o=Cl(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ib(t){return Ke("remove",t._path),Cl(t,null)}function Cl(t,e){t=$e(t),Ke("set",t._path),gt("set",e,t._path,!1);const n=new Ae;return ml(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function rb(t,e){t=$e(t),Ke("setPriority",t._path),pl("setPriority",e,!1);const n=new Ae;return ml(t._repo,se(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function ob(t,e,n){if(Ke("setWithPriority",t._path),gt("setWithPriority",e,t._path,!1),pl("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const s=new Ae;return ml(t._repo,t._path,e,n,s.wrapCallback(()=>{})),s.promise}function lb(t,e){yh("update",e,t._path,!1);const n=new Ae;return jv(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ab(t){t=$e(t);const e=new bl(()=>{}),n=new Ls(e);return Hv(t._repo,t,n).then(s=>new gn(s,new Ge(t._repo,t._path),t._queryParams.getIndex()))}class Ls{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Nh("value",this,new gn(e.snapshotNode,new Ge(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ah(this,e,n):null}matches(e){return e instanceof Ls?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class er{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ah(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=mn(new Ge(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Nh(e.type,this,new gn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof er?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Fs(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(h,u)=>{oo(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new bl(n,r||void 0),l=e==="value"?new Ls(o):new er(e,o);return Gv(t._repo,t,l),()=>oo(t._repo,t,l)}function ao(t,e,n,s){return Fs(t,"value",e,n,s)}function qa(t,e,n,s){return Fs(t,"child_added",e,n,s)}function Ga(t,e,n,s){return Fs(t,"child_changed",e,n,s)}function Qa(t,e,n,s){return Fs(t,"child_moved",e,n,s)}function Ya(t,e,n,s){return Fs(t,"child_removed",e,n,s)}function Ja(t,e,n){let s=null;const i=n?new bl(n):null;e==="value"?s=new Ls(i):e&&(s=new er(e,i)),oo(t._repo,t,s)}class st{}class Rh extends st{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){gt("endAt",this._value,e._path,!0);const n=Yr(e._queryParams,this._value,this._key);if(Zi(n),Yt(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Oe(e._repo,e._path,n,e._orderByCalled)}}function cb(t,e){return Ds("endAt","key",e,!0),new Rh(t,e)}class ub extends st{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){gt("endBefore",this._value,e._path,!1);const n=vy(e._queryParams,this._value,this._key);if(Zi(n),Yt(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Oe(e._repo,e._path,n,e._orderByCalled)}}function hb(t,e){return Ds("endBefore","key",e,!0),new ub(t,e)}class Ph extends st{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){gt("startAt",this._value,e._path,!0);const n=Qr(e._queryParams,this._value,this._key);if(Zi(n),Yt(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Oe(e._repo,e._path,n,e._orderByCalled)}}function db(t=null,e){return Ds("startAt","key",e,!0),new Ph(t,e)}class fb extends st{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){gt("startAfter",this._value,e._path,!1);const n=yy(e._queryParams,this._value,this._key);if(Zi(n),Yt(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Oe(e._repo,e._path,n,e._orderByCalled)}}function _b(t,e){return Ds("startAfter","key",e,!0),new fb(t,e)}class pb extends st{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Oe(e._repo,e._path,gy(e._queryParams,this._limit),e._orderByCalled)}}function gb(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new pb(t)}class mb extends st{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Oe(e._repo,e._path,my(e._queryParams,this._limit),e._orderByCalled)}}function yb(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new mb(t)}class vb extends st{constructor(e){super(),this._path=e}_apply(e){Xi(e,"orderByChild");const n=new K(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Qo(n),i=Wi(e._queryParams,s);return Yt(i),new Oe(e._repo,e._path,i,!0)}}function bb(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ss("orderByChild","path",t,!1),new vb(t)}class Cb extends st{_apply(e){Xi(e,"orderByKey");const n=Wi(e._queryParams,dt);return Yt(n),new Oe(e._repo,e._path,n,!0)}}function wb(){return new Cb}class Eb extends st{_apply(e){Xi(e,"orderByPriority");const n=Wi(e._queryParams,ee);return Yt(n),new Oe(e._repo,e._path,n,!0)}}function Ib(){return new Eb}class Tb extends st{_apply(e){Xi(e,"orderByValue");const n=Wi(e._queryParams,Yo);return Yt(n),new Oe(e._repo,e._path,n,!0)}}function Sb(){return new Tb}class xb extends st{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(gt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Rh(this._value,this._key)._apply(new Ph(this._value,this._key)._apply(e))}}function Nb(t,e){return Ds("equalTo","key",e,!0),new xb(t,e)}function Je(t,...e){let n=$e(t);for(const s of e)n=s._apply(n);return n}lv(Ge);dv(Ge);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="FIREBASE_DATABASE_EMULATOR_HOST",co={};let kb=!1;function Rb(t,e,n,s){t.repoInfo_=new Ru(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function Oh(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||_t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lo(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Ab]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=lo(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new On(On.OWNER):new bm(t.name,t.options,e);vh("Invalid Firebase Database URL",o),F(o.path)||_t("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ob(l,t,h,new vm(t.name,n));return new Db(u,t)}function Pb(t,e){const n=co[e];(!n||n[t.key]!==t)&&_t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ih(t),delete n[t.key]}function Ob(t,e,n,s){let i=co[e.name];i||(i={},co[e.name]=i);let r=i[t.toURLString()];return r&&_t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Wv(t,kb,n,s),i[t.toURLString()]=r,r}class Db{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ge(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_t("Cannot call "+e+" on a deleted database.")}}function Dh(){Ln.IS_TRANSPORT_INITIALIZED&&we("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Mb(){Dh(),Pt.forceDisallow()}function Lb(){Dh(),je.forceDisallow(),Pt.forceAllow()}function Fb(t,e,n,s={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_t("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&_t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new On(On.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Dp(s.mockUserToken,t.app.options.projectId);r=new On(o)}Rb(i,e,n,r)}function Bb(t){t=$e(t),t._checkNotDeleted("goOffline"),Ih(t._repo)}function Wb(t){t=$e(t),t._checkNotDeleted("goOnline"),Qv(t._repo)}function Ub(t,e){yu(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){_u(Bo),Mn(new jt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Oh(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ft(fa,_a,t),Ft(fa,_a,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={".sv":"timestamp"};function jb(){return Hb}function Vb(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Kb(t,e,n){var s;if(t=$e(t),Ke("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=n==null?void 0:n.applyLocally)!==null&&s!==void 0?s:!0,r=new Ae,o=(a,c,h)=>{let u=null;a?r.reject(a):(u=new gn(h,new Ge(t._repo,t._path),ee),r.resolve(new zb(c,u)))},l=ao(t,()=>{});return Yv(t._repo,t._path,e,o,l,i),r.promise}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$b();const qb="@firebase/database-compat",Gb="0.2.10";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Di("@firebase/database-compat"),Mh=function(t){const e="FIREBASE WARNING: "+t;Qb.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=function(t,e,n,s){if(!(s&&n===void 0)&&typeof n!="boolean")throw new Error(Pe(t,e)+"must be a boolean.")},Jb=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Pe(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this._delegate=e}cancel(e){R("OnDisconnect.cancel",0,1,arguments.length),fe("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),s=>e(s)),n}remove(e){R("OnDisconnect.remove",0,1,arguments.length),fe("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),s=>e(s)),n}set(e,n){R("OnDisconnect.set",1,2,arguments.length),fe("OnDisconnect.set","onComplete",n,!0);const s=this._delegate.set(e);return n&&s.then(()=>n(null),i=>n(i)),s}setWithPriority(e,n,s){R("OnDisconnect.setWithPriority",2,3,arguments.length),fe("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,n);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,n){if(R("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,Mh("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}fe("OnDisconnect.update","onComplete",n,!0);const s=this._delegate.update(e);return n&&s.then(()=>n(null),i=>n(i)),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return R("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this._database=e,this._delegate=n}val(){return R("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return R("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return R("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return R("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return R("DataSnapshot.child",0,1,arguments.length),e=String(e),Ss("DataSnapshot.child","path",e,!1),new Ut(this._database,this._delegate.child(e))}hasChild(e){return R("DataSnapshot.hasChild",1,1,arguments.length),Ss("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return R("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return R("DataSnapshot.forEach",1,1,arguments.length),fe("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Ut(this._database,n)))}hasChildren(){return R("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return R("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return R("DataSnapshot.ref",0,0,arguments.length),new Fe(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class ve{constructor(e,n){this.database=e,this._delegate=n}on(e,n,s,i){var r;R("Query.on",2,4,arguments.length),fe("Query.on","callback",n,!1);const o=ve.getCancelAndContextArgs_("Query.on",s,i),l=(c,h)=>{n.call(o.context,new Ut(this.database,c),h)};l.userCallback=n,l.context=o.context;const a=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return ao(this._delegate,l,a),n;case"child_added":return qa(this._delegate,l,a),n;case"child_removed":return Ya(this._delegate,l,a),n;case"child_changed":return Ga(this._delegate,l,a),n;case"child_moved":return Qa(this._delegate,l,a),n;default:throw new Error(Pe("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,s){if(R("Query.off",0,3,arguments.length),Jb("Query.off",e,!0),fe("Query.off","callback",n,!0),sa("Query.off","context",s,!0),n){const i=()=>{};i.userCallback=n,i.context=s,Ja(this._delegate,e,i)}else Ja(this._delegate,e)}get(){return ab(this._delegate).then(e=>new Ut(this.database,e))}once(e,n,s,i){R("Query.once",1,4,arguments.length),fe("Query.once","callback",n,!0);const r=ve.getCancelAndContextArgs_("Query.once",s,i),o=new Ae,l=(c,h)=>{const u=new Ut(this.database,c);n&&n.call(r.context,u,h),o.resolve(u)};l.userCallback=n,l.context=r.context;const a=c=>{r.cancel&&r.cancel.call(r.context,c),o.reject(c)};switch(e){case"value":ao(this._delegate,l,a,{onlyOnce:!0});break;case"child_added":qa(this._delegate,l,a,{onlyOnce:!0});break;case"child_removed":Ya(this._delegate,l,a,{onlyOnce:!0});break;case"child_changed":Ga(this._delegate,l,a,{onlyOnce:!0});break;case"child_moved":Qa(this._delegate,l,a,{onlyOnce:!0});break;default:throw new Error(Pe("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return R("Query.limitToFirst",1,1,arguments.length),new ve(this.database,Je(this._delegate,gb(e)))}limitToLast(e){return R("Query.limitToLast",1,1,arguments.length),new ve(this.database,Je(this._delegate,yb(e)))}orderByChild(e){return R("Query.orderByChild",1,1,arguments.length),new ve(this.database,Je(this._delegate,bb(e)))}orderByKey(){return R("Query.orderByKey",0,0,arguments.length),new ve(this.database,Je(this._delegate,wb()))}orderByPriority(){return R("Query.orderByPriority",0,0,arguments.length),new ve(this.database,Je(this._delegate,Ib()))}orderByValue(){return R("Query.orderByValue",0,0,arguments.length),new ve(this.database,Je(this._delegate,Sb()))}startAt(e=null,n){return R("Query.startAt",0,2,arguments.length),new ve(this.database,Je(this._delegate,db(e,n)))}startAfter(e=null,n){return R("Query.startAfter",0,2,arguments.length),new ve(this.database,Je(this._delegate,_b(e,n)))}endAt(e=null,n){return R("Query.endAt",0,2,arguments.length),new ve(this.database,Je(this._delegate,cb(e,n)))}endBefore(e=null,n){return R("Query.endBefore",0,2,arguments.length),new ve(this.database,Je(this._delegate,hb(e,n)))}equalTo(e,n){return R("Query.equalTo",1,2,arguments.length),new ve(this.database,Je(this._delegate,Nb(e,n)))}toString(){return R("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return R("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(R("Query.isEqual",1,1,arguments.length),!(e instanceof ve)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,s){const i={cancel:void 0,context:void 0};if(n&&s)i.cancel=n,fe(e,"cancel",i.cancel,!0),i.context=s,sa(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Pe(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Fe(this.database,new Ge(this._delegate._repo,this._delegate._path))}}class Fe extends ve{constructor(e,n){super(e,new Oe(n._repo,n._path,new Bi,!1)),this.database=e,this._delegate=n}getKey(){return R("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return R("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Fe(this.database,mn(this._delegate,e))}getParent(){R("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Fe(this.database,e):null}getRoot(){return R("Reference.root",0,0,arguments.length),new Fe(this.database,this._delegate.root)}set(e,n){R("Reference.set",1,2,arguments.length),fe("Reference.set","onComplete",n,!0);const s=Cl(this._delegate,e);return n&&s.then(()=>n(null),i=>n(i)),s}update(e,n){if(R("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,Mh("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ke("Reference.update",this._delegate._path),fe("Reference.update","onComplete",n,!0);const s=lb(this._delegate,e);return n&&s.then(()=>n(null),i=>n(i)),s}setWithPriority(e,n,s){R("Reference.setWithPriority",2,3,arguments.length),fe("Reference.setWithPriority","onComplete",s,!0);const i=ob(this._delegate,e,n);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){R("Reference.remove",0,1,arguments.length),fe("Reference.remove","onComplete",e,!0);const n=ib(this._delegate);return e&&n.then(()=>e(null),s=>e(s)),n}transaction(e,n,s){R("Reference.transaction",1,3,arguments.length),fe("Reference.transaction","transactionUpdate",e,!1),fe("Reference.transaction","onComplete",n,!0),Yb("Reference.transaction","applyLocally",s,!0);const i=Kb(this._delegate,e,{applyLocally:s}).then(r=>new Zb(r.committed,new Ut(this.database,r.snapshot)));return n&&i.then(r=>n(null,r.committed,r.snapshot),r=>n(r,!1,null)),i}setPriority(e,n){R("Reference.setPriority",1,2,arguments.length),fe("Reference.setPriority","onComplete",n,!0);const s=rb(this._delegate,e);return n&&s.then(()=>n(null),i=>n(i)),s}push(e,n){R("Reference.push",0,2,arguments.length),fe("Reference.push","onComplete",n,!0);const s=sb(this._delegate,e),i=s.then(o=>new Fe(this.database,o));n&&i.then(()=>n(null),o=>n(o));const r=new Fe(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return Ke("Reference.onDisconnect",this._delegate._path),new Xb(new nb(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Mb,forceLongPolling:Lb}}useEmulator(e,n,s={}){Fb(this._delegate,e,n,s)}ref(e){if(R("database.ref",0,1,arguments.length),e instanceof Fe){const n=Ka(this._delegate,e.toString());return new Fe(this,n)}else{const n=kh(this._delegate,e);return new Fe(this,n)}}refFromURL(e){R("database.refFromURL",1,1,arguments.length);const s=Ka(this._delegate,e);return new Fe(this,s)}goOffline(){return R("database.goOffline",0,0,arguments.length),Bb(this._delegate)}goOnline(){return R("database.goOnline",0,0,arguments.length),Wb(this._delegate)}}xs.ServerValue={TIMESTAMP:jb(),increment:t=>Vb(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC({app:t,url:e,version:n,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){_u(n);const o=new eu("auth-internal",new tu("database-standalone"));return o.setComponent(new jt("auth-internal",()=>s,"PRIVATE")),{instance:new xs(Oh(t,o,void 0,e,r),t),namespace:i}}var tC=Object.freeze({__proto__:null,initStandalone:eC});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=xs.ServerValue;function sC(t){t.INTERNAL.registerComponent(new jt("database-compat",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new xs(i,s)},"PUBLIC").setServiceProps({Reference:Fe,Query:ve,Database:xs,DataSnapshot:Ut,enableLogging:Ub,INTERNAL:tC,ServerValue:nC}).setMultipleInstances(!0)),t.registerVersion(qb,Gb)}sC(Mi);const iC={apiKey:"AIzaSyCsy6HAKWxWOoZGwmznVPLZD5zTGoB-Nrw",authDomain:"history-1f764.firebaseapp.com",databaseURL:"https://history-1f764-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"history-1f764",storageBucket:"history-1f764.appspot.com",messagingSenderId:"191040200273",appId:"1:191040200273:web:95e0cd89fe729eb8df6270"};Mi.initializeApp(iC);const rC=Mi.database();const oC={name:"Practice",components:{Header:P_,TagItem:L_,ItemCard:vp},data(){return{dataAll:[]}},created(){this.loadApi()},methods:{loadApi(t){rC.ref().get().then(n=>{this.dataAll=n.val().reverse()})}}},lC={class:"Practice"},aC={class:"l-section l-section-tag"},cC={class:"form-filedset"},uC={class:"form-tag-list"},hC={class:"l-section l-section-card"};function dC(t,e,n,s,i,r){const o=Rn("Header"),l=Rn("TagItem"),a=Rn("ItemCard");return ht(),Et("div",lC,[Re(o),P("section",aC,[P("fieldset",cC,[P("ul",uC,[Re(l)])])]),P("section",hC,[(ht(!0),Et(Le,null,Dc(i.dataAll,c=>(ht(),xf(a,{data:c},null,8,["data"]))),256))])])}const fC=yn(oC,[["render",dC],["__scopeId","data-v-ec8b824c"]]),_C={name:"wrap",components:{Project:fC},mounted(){}},pC={id:"container",role:"main"};function gC(t,e,n,s,i,r){const o=Rn("Project");return ht(),Et("main",pC,[Re(o)])}const mC=yn(_C,[["render",gC]]);f_(mC).mount("#wrap");
