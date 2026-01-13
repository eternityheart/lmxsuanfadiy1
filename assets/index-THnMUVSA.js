function u2(n,a){for(var s=0;s<a.length;s++){const o=a[s];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in n)){const p=Object.getOwnPropertyDescriptor(o,u);p&&Object.defineProperty(n,u,p.get?p:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(u){if(u.ep)return;u.ep=!0;const p=s(u);fetch(u.href,p)}})();function lx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ud={exports:{}},As={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function c2(){if(n0)return As;n0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(o,u,p){var d=null;if(p!==void 0&&(d=""+p),u.key!==void 0&&(d=""+u.key),"key"in u){p={};for(var m in u)m!=="key"&&(p[m]=u[m])}else p=u;return u=p.ref,{$$typeof:n,type:o,key:d,ref:u!==void 0?u:null,props:p}}return As.Fragment=a,As.jsx=s,As.jsxs=s,As}var i0;function d2(){return i0||(i0=1,ud.exports=c2()),ud.exports}var b=d2(),cd={exports:{}},Ns={},dd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function p2(){return a0||(a0=1,(function(n){function a(L,H){var B=L.length;L.push(H);t:for(;0<B;){var et=B-1>>>1,st=L[et];if(0<u(st,H))L[et]=H,L[B]=st,B=et;else break t}}function s(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var H=L[0],B=L.pop();if(B!==H){L[0]=B;t:for(var et=0,st=L.length,N=st>>>1;et<N;){var X=2*(et+1)-1,Y=L[X],J=X+1,W=L[J];if(0>u(Y,B))J<st&&0>u(W,Y)?(L[et]=W,L[J]=B,et=J):(L[et]=Y,L[X]=B,et=X);else if(J<st&&0>u(W,B))L[et]=W,L[J]=B,et=J;else break t}}return H}function u(L,H){var B=L.sortIndex-H.sortIndex;return B!==0?B:L.id-H.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var h=[],f=[],x=1,g=null,v=3,S=!1,T=!1,j=!1,q=!1,C=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(L){for(var H=s(f);H!==null;){if(H.callback===null)o(f);else if(H.startTime<=L)o(f),H.sortIndex=H.expirationTime,a(h,H);else break;H=s(f)}}function Q(L){if(j=!1,I(L),!T)if(s(h)!==null)T=!0,Z||(Z=!0,ht());else{var H=s(f);H!==null&&wt(Q,H.startTime-L)}}var Z=!1,k=-1,R=5,at=-1;function ct(){return q?!0:!(n.unstable_now()-at<R)}function vt(){if(q=!1,Z){var L=n.unstable_now();at=L;var H=!0;try{t:{T=!1,j&&(j=!1,P(k),k=-1),S=!0;var B=v;try{e:{for(I(L),g=s(h);g!==null&&!(g.expirationTime>L&&ct());){var et=g.callback;if(typeof et=="function"){g.callback=null,v=g.priorityLevel;var st=et(g.expirationTime<=L);if(L=n.unstable_now(),typeof st=="function"){g.callback=st,I(L),H=!0;break e}g===s(h)&&o(h),I(L)}else o(h);g=s(h)}if(g!==null)H=!0;else{var N=s(f);N!==null&&wt(Q,N.startTime-L),H=!1}}break t}finally{g=null,v=B,S=!1}H=void 0}}finally{H?ht():Z=!1}}}var ht;if(typeof U=="function")ht=function(){U(vt)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,yt=xt.port2;xt.port1.onmessage=vt,ht=function(){yt.postMessage(null)}}else ht=function(){C(vt,0)};function wt(L,H){k=C(function(){L(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_next=function(L){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var B=v;v=H;try{return L()}finally{v=B}},n.unstable_requestPaint=function(){q=!0},n.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=v;v=L;try{return H()}finally{v=B}},n.unstable_scheduleCallback=function(L,H,B){var et=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?et+B:et):B=et,L){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=B+st,L={id:x++,callback:H,priorityLevel:L,startTime:B,expirationTime:st,sortIndex:-1},B>et?(L.sortIndex=B,a(f,L),s(h)===null&&L===s(f)&&(j?(P(k),k=-1):j=!0,wt(Q,B-et))):(L.sortIndex=st,a(h,L),T||S||(T=!0,Z||(Z=!0,ht()))),L},n.unstable_shouldYield=ct,n.unstable_wrapCallback=function(L){var H=v;return function(){var B=v;v=H;try{return L.apply(this,arguments)}finally{v=B}}}})(pd)),pd}var r0;function f2(){return r0||(r0=1,dd.exports=p2()),dd.exports}var fd={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function m2(){if(s0)return gt;s0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,q={};function C(N,X,Y){this.props=N,this.context=X,this.refs=q,this.updater=Y||T}C.prototype.isReactComponent={},C.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},C.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=C.prototype;function U(N,X,Y){this.props=N,this.context=X,this.refs=q,this.updater=Y||T}var I=U.prototype=new P;I.constructor=U,j(I,C.prototype),I.isPureReactComponent=!0;var Q=Array.isArray;function Z(){}var k={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function at(N,X,Y){var J=Y.ref;return{$$typeof:n,type:N,key:X,ref:J!==void 0?J:null,props:Y}}function ct(N,X){return at(N.type,X,N.props)}function vt(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function ht(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Y){return X[Y]})}var xt=/\/+/g;function yt(N,X){return typeof N=="object"&&N!==null&&N.key!=null?ht(""+N.key):X.toString(36)}function wt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(Z,Z):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function L(N,X,Y,J,W){var lt=typeof N;(lt==="undefined"||lt==="boolean")&&(N=null);var ot=!1;if(N===null)ot=!0;else switch(lt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(N.$$typeof){case n:case a:ot=!0;break;case x:return ot=N._init,L(ot(N._payload),X,Y,J,W)}}if(ot)return W=W(N),ot=J===""?"."+yt(N,0):J,Q(W)?(Y="",ot!=null&&(Y=ot.replace(xt,"$&/")+"/"),L(W,X,Y,"",function(oe){return oe})):W!=null&&(vt(W)&&(W=ct(W,Y+(W.key==null||N&&N.key===W.key?"":(""+W.key).replace(xt,"$&/")+"/")+ot)),X.push(W)),1;ot=0;var ft=J===""?".":J+":";if(Q(N))for(var At=0;At<N.length;At++)J=N[At],lt=ft+yt(J,At),ot+=L(J,X,Y,lt,W);else if(At=S(N),typeof At=="function")for(N=At.call(N),At=0;!(J=N.next()).done;)J=J.value,lt=ft+yt(J,At++),ot+=L(J,X,Y,lt,W);else if(lt==="object"){if(typeof N.then=="function")return L(wt(N),X,Y,J,W);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ot}function H(N,X,Y){if(N==null)return N;var J=[],W=0;return L(N,J,"","",function(lt){return X.call(Y,lt,W++)}),J}function B(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(Y){(N._status===0||N._status===-1)&&(N._status=1,N._result=Y)},function(Y){(N._status===0||N._status===-1)&&(N._status=2,N._result=Y)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var et=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},st={map:H,forEach:function(N,X,Y){H(N,function(){X.apply(this,arguments)},Y)},count:function(N){var X=0;return H(N,function(){X++}),X},toArray:function(N){return H(N,function(X){return X})||[]},only:function(N){if(!vt(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return gt.Activity=g,gt.Children=st,gt.Component=C,gt.Fragment=s,gt.Profiler=u,gt.PureComponent=U,gt.StrictMode=o,gt.Suspense=h,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,gt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return k.H.useMemoCache(N)}},gt.cache=function(N){return function(){return N.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(N,X,Y){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var J=j({},N.props),W=N.key;if(X!=null)for(lt in X.key!==void 0&&(W=""+X.key),X)!R.call(X,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&X.ref===void 0||(J[lt]=X[lt]);var lt=arguments.length-2;if(lt===1)J.children=Y;else if(1<lt){for(var ot=Array(lt),ft=0;ft<lt;ft++)ot[ft]=arguments[ft+2];J.children=ot}return at(N.type,W,J)},gt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:p,_context:N},N},gt.createElement=function(N,X,Y){var J,W={},lt=null;if(X!=null)for(J in X.key!==void 0&&(lt=""+X.key),X)R.call(X,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(W[J]=X[J]);var ot=arguments.length-2;if(ot===1)W.children=Y;else if(1<ot){for(var ft=Array(ot),At=0;At<ot;At++)ft[At]=arguments[At+2];W.children=ft}if(N&&N.defaultProps)for(J in ot=N.defaultProps,ot)W[J]===void 0&&(W[J]=ot[J]);return at(N,lt,W)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:m,render:N}},gt.isValidElement=vt,gt.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:B}},gt.memo=function(N,X){return{$$typeof:f,type:N,compare:X===void 0?null:X}},gt.startTransition=function(N){var X=k.T,Y={};k.T=Y;try{var J=N(),W=k.S;W!==null&&W(Y,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Z,et)}catch(lt){et(lt)}finally{X!==null&&Y.types!==null&&(X.types=Y.types),k.T=X}},gt.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},gt.use=function(N){return k.H.use(N)},gt.useActionState=function(N,X,Y){return k.H.useActionState(N,X,Y)},gt.useCallback=function(N,X){return k.H.useCallback(N,X)},gt.useContext=function(N){return k.H.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N,X){return k.H.useDeferredValue(N,X)},gt.useEffect=function(N,X){return k.H.useEffect(N,X)},gt.useEffectEvent=function(N){return k.H.useEffectEvent(N)},gt.useId=function(){return k.H.useId()},gt.useImperativeHandle=function(N,X,Y){return k.H.useImperativeHandle(N,X,Y)},gt.useInsertionEffect=function(N,X){return k.H.useInsertionEffect(N,X)},gt.useLayoutEffect=function(N,X){return k.H.useLayoutEffect(N,X)},gt.useMemo=function(N,X){return k.H.useMemo(N,X)},gt.useOptimistic=function(N,X){return k.H.useOptimistic(N,X)},gt.useReducer=function(N,X,Y){return k.H.useReducer(N,X,Y)},gt.useRef=function(N){return k.H.useRef(N)},gt.useState=function(N){return k.H.useState(N)},gt.useSyncExternalStore=function(N,X,Y){return k.H.useSyncExternalStore(N,X,Y)},gt.useTransition=function(){return k.H.useTransition()},gt.version="19.2.1",gt}var o0;function Vl(){return o0||(o0=1,fd.exports=m2()),fd.exports}var md={exports:{}},Se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function h2(){if(l0)return Se;l0=1;var n=Vl();function a(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)f+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function p(h,f,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:g==null?null:""+g,children:h,containerInfo:f,implementation:x}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Se.createPortal=function(h,f){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(a(299));return p(h,f,null,x)},Se.flushSync=function(h){var f=d.T,x=o.p;try{if(d.T=null,o.p=2,h)return h()}finally{d.T=f,o.p=x,o.d.f()}},Se.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,o.d.C(h,f))},Se.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},Se.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var x=f.as,g=m(x,f.crossOrigin),v=typeof f.integrity=="string"?f.integrity:void 0,S=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;x==="style"?o.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):x==="script"&&o.d.X(h,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},Se.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var x=m(f.as,f.crossOrigin);o.d.M(h,{crossOrigin:x,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&o.d.M(h)},Se.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var x=f.as,g=m(x,f.crossOrigin);o.d.L(h,x,{crossOrigin:g,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},Se.preloadModule=function(h,f){if(typeof h=="string")if(f){var x=m(f.as,f.crossOrigin);o.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:x,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else o.d.m(h)},Se.requestFormReset=function(h){o.d.r(h)},Se.unstable_batchedUpdates=function(h,f){return h(f)},Se.useFormState=function(h,f,x){return d.H.useFormState(h,f,x)},Se.useFormStatus=function(){return d.H.useHostTransitionStatus()},Se.version="19.2.1",Se}var u0;function ux(){if(u0)return md.exports;u0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),md.exports=h2(),md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function g2(){if(c0)return Ns;c0=1;var n=f2(),a=Vl(),s=ux();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(p(t)!==t)throw Error(o(188))}function f(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(o(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return h(l),t;if(c===r)return h(l),e;c=c.sibling}throw Error(o(188))}if(i.return!==r.return)i=l,r=c;else{for(var y=!1,w=l.child;w;){if(w===i){y=!0,i=l,r=c;break}if(w===r){y=!0,r=l,i=c;break}w=w.sibling}if(!y){for(w=c.child;w;){if(w===i){y=!0,i=c,r=l;break}if(w===r){y=!0,r=c,i=l;break}w=w.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==r)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),vt=Symbol.iterator;function ht(t){return t===null||typeof t!="object"?null:(t=vt&&t[vt]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case C:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case Z:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case I:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return e=t.displayName||null,e!==null?e:yt(t.type)||"Memo";case R:e=t._payload,t=t._init;try{return yt(t(e))}catch{}}return null}var wt=Array.isArray,L=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},et=[],st=-1;function N(t){return{current:t}}function X(t){0>st||(t.current=et[st],et[st]=null,st--)}function Y(t,e){st++,et[st]=t.current,t.current=e}var J=N(null),W=N(null),lt=N(null),ot=N(null);function ft(t,e){switch(Y(lt,e),Y(W,t),Y(J,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Og(e),t=Ag(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(J),Y(J,t)}function At(){X(J),X(W),X(lt)}function oe(t){t.memoizedState!==null&&Y(ot,t);var e=J.current,i=Ag(e,t.type);e!==i&&(Y(W,t),Y(J,i))}function ve(t){W.current===t&&(X(J),X(W)),ot.current===t&&(X(ot),Ss._currentValue=B)}var le,Sn;function Ce(t){if(le===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);le=e&&e[1]||"",Sn=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+le+t+Sn}var Xi=!1;function ui(t,e){if(!t||Xi)return"";Xi=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(_){var V=_}Reflect.construct(t,[],F)}else{try{F.call()}catch(_){V=_}t.call(F.prototype)}}else{try{throw Error()}catch(_){V=_}(F=t())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(_){if(_&&V&&typeof _.stack=="string")return[_.stack,V.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),y=c[0],w=c[1];if(y&&w){var O=y.split(`
`),z=w.split(`
`);for(l=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(r===O.length||l===z.length)for(r=O.length-1,l=z.length-1;1<=r&&0<=l&&O[r]!==z[l];)l--;for(;1<=r&&0<=l;r--,l--)if(O[r]!==z[l]){if(r!==1||l!==1)do if(r--,l--,0>l||O[r]!==z[l]){var G=`
`+O[r].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=r&&0<=l);break}}}finally{Xi=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Ce(i):""}function zn(t,e){switch(t.tag){case 26:case 27:case 5:return Ce(t.type);case 16:return Ce("Lazy");case 13:return t.child!==e&&e!==null?Ce("Suspense Fallback"):Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return ui(t.type,!1);case 11:return ui(t.type.render,!1);case 1:return ui(t.type,!0);case 31:return Ce("Activity");default:return""}}function Ki(t){try{var e="",i=null;do e+=zn(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ue=Object.prototype.hasOwnProperty,qr=n.unstable_scheduleCallback,Dr=n.unstable_cancelCallback,je=n.unstable_shouldYield,ci=n.unstable_requestPaint,Oe=n.unstable_now,Jl=n.unstable_getCurrentPriorityLevel,Qi=n.unstable_ImmediatePriority,$s=n.unstable_UserBlockingPriority,Fi=n.unstable_NormalPriority,Rr=n.unstable_LowPriority,Bn=n.unstable_IdlePriority,Ws=n.log,di=n.unstable_setDisableYieldValue,Ii=null,Ae=null;function fn(t){if(typeof Ws=="function"&&di(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ii,t)}catch{}}var be=Math.clz32?Math.clz32:Tn,$l=Math.log,zr=Math.LN2;function Tn(t){return t>>>=0,t===0?32:31-($l(t)/zr|0)|0}var Oa=256,Aa=262144,Zi=4194304;function jn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=r&134217727;return w!==0?(r=w&~c,r!==0?l=jn(r):(y&=w,y!==0?l=jn(y):i||(i=w&~t,i!==0&&(l=jn(i))))):(w=r&~c,w!==0?l=jn(w):y!==0?l=jn(y):i||(i=r&~t,i!==0&&(l=jn(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Ht(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ce(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),t}function pi(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Yt(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ke(t,e,i,r,l,c){var y=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var w=t.entanglements,O=t.expirationTimes,z=t.hiddenUpdates;for(i=y&~i;0<i;){var G=31-be(i),F=1<<G;w[G]=0,O[G]=-1;var V=z[G];if(V!==null)for(z[G]=null,G=0;G<V.length;G++){var _=V[G];_!==null&&(_.lane&=-536870913)}i&=~F}r!==0&&Ji(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(y&~e))}function Ji(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-be(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Le(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-be(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function Me(t,e){var i=e&-e;return i=(i&42)!==0?1:Na(i),(i&(t.suspendedLanes|e))!==0?0:i}function Na(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wl(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Ig(t.type))}function df(t,e){var i=H.p;try{return H.p=t,e()}finally{H.p=i}}var fi=Math.random().toString(36).slice(2),fe="__reactFiber$"+fi,qe="__reactProps$"+fi,Ea="__reactContainer$"+fi,tu="__reactEvents$"+fi,$v="__reactListeners$"+fi,Wv="__reactHandles$"+fi,pf="__reactResources$"+fi,Br="__reactMarker$"+fi;function eu(t){delete t[fe],delete t[qe],delete t[tu],delete t[$v],delete t[Wv]}function Ca(t){var e=t[fe];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Ea]||i[fe]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=qg(t);t!==null;){if(i=t[fe])return i;t=qg(t)}return e}t=i,i=t.parentNode}return null}function ka(t){if(t=t[fe]||t[Ea]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Vr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function La(t){var e=t[pf];return e||(e=t[pf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function de(t){t[Br]=!0}var ff=new Set,mf={};function $i(t,e){Ma(t,e),Ma(t+"Capture",e)}function Ma(t,e){for(mf[t]=e,t=0;t<e.length;t++)ff.add(e[t])}var tb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hf={},gf={};function eb(t){return ue.call(gf,t)?!0:ue.call(hf,t)?!1:tb.test(t)?gf[t]=!0:(hf[t]=!0,!1)}function to(t,e,i){if(eb(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function eo(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function Vn(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+r)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nb(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(y){i=""+y,c.call(this,y)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nu(t){if(!t._valueTracker){var e=xf(t)?"checked":"value";t._valueTracker=nb(t,e,""+t[e])}}function yf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=xf(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}function no(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ib=/[\n"\\]/g;function We(t){return t.replace(ib,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function iu(t,e,i,r,l,c,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),e!=null?y==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),e!=null?au(t,y,$e(e)):i!=null?au(t,y,$e(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+$e(w):t.removeAttribute("name")}function vf(t,e,i,r,l,c,y,w){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){nu(t);return}i=i!=null?""+$e(i):"",e=e!=null?""+$e(e):i,w||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=w?t.checked:!!r,t.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),nu(t)}function au(t,e,i){e==="number"&&no(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function qa(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+$e(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function bf(t,e,i){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+$e(i):""}function wf(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(o(92));if(wt(r)){if(1<r.length)throw Error(o(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=$e(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),nu(t)}function Da(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var ab=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sf(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||ab.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Tf(t,e,i){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&Sf(t,l,r)}else for(var c in e)e.hasOwnProperty(c)&&Sf(t,c,e[c])}function ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function io(t){return sb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _n(){}var su=null;function ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ra=null,za=null;function jf(t){var e=ka(t);if(e&&(t=e.stateNode)){var i=t[qe]||null;t:switch(t=e.stateNode,e.type){case"input":if(iu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+We(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[qe]||null;if(!l)throw Error(o(90));iu(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&yf(r)}break t;case"textarea":bf(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&qa(t,!!i.multiple,e,!1)}}}var lu=!1;function Of(t,e,i){if(lu)return t(e,i);lu=!0;try{var r=t(e);return r}finally{if(lu=!1,(Ra!==null||za!==null)&&(Xo(),Ra&&(e=Ra,t=za,za=Ra=null,jf(e),t)))for(e=0;e<t.length;e++)jf(t[e])}}function _r(t,e){var i=t.stateNode;if(i===null)return null;var r=i[qe]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,e,typeof i));return i}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Un)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{uu=!1}var mi=null,cu=null,ao=null;function Af(){if(ao)return ao;var t,e=cu,i=e.length,r,l="value"in mi?mi.value:mi.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var y=i-t;for(r=1;r<=y&&e[i-r]===l[c-r];r++);return ao=l.slice(t,1<r?1-r:void 0)}function ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Nf(){return!1}function De(t){function e(i,r,l,c,y){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(i=t[w],this[w]=i?i(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?so:Nf,this.isPropagationStopped=Nf,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=De(Wi),Hr=g({},Wi,{view:0,detail:0}),ob=De(Hr),du,pu,Pr,lo=g({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pr&&(Pr&&t.type==="mousemove"?(du=t.screenX-Pr.screenX,pu=t.screenY-Pr.screenY):pu=du=0,Pr=t),du)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Ef=De(lo),lb=g({},lo,{dataTransfer:0}),ub=De(lb),cb=g({},Hr,{relatedTarget:0}),fu=De(cb),db=g({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),pb=De(db),fb=g({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mb=De(fb),hb=g({},Wi,{data:0}),Cf=De(hb),gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yb[t])?!!e[t]:!1}function mu(){return vb}var bb=g({},Hr,{key:function(t){if(t.key){var e=gb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wb=De(bb),Sb=g({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=De(Sb),Tb=g({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),jb=De(Tb),Ob=g({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ab=De(Ob),Nb=g({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Eb=De(Nb),Cb=g({},Wi,{newState:0,oldState:0}),kb=De(Cb),Lb=[9,13,27,32],hu=Un&&"CompositionEvent"in window,Gr=null;Un&&"documentMode"in document&&(Gr=document.documentMode);var Mb=Un&&"TextEvent"in window&&!Gr,Lf=Un&&(!hu||Gr&&8<Gr&&11>=Gr),Mf=" ",qf=!1;function Df(t,e){switch(t){case"keyup":return Lb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ba=!1;function qb(t,e){switch(t){case"compositionend":return Rf(e);case"keypress":return e.which!==32?null:(qf=!0,Mf);case"textInput":return t=e.data,t===Mf&&qf?null:t;default:return null}}function Db(t,e){if(Ba)return t==="compositionend"||!hu&&Df(t,e)?(t=Af(),ao=cu=mi=null,Ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lf&&e.locale!=="ko"?null:e.data;default:return null}}var Rb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rb[t.type]:e==="textarea"}function Bf(t,e,i,r){Ra?za?za.push(r):za=[r]:Ra=r,e=$o(e,"onChange"),0<e.length&&(i=new oo("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var Yr=null,Xr=null;function zb(t){vg(t,0)}function uo(t){var e=Vr(t);if(yf(e))return t}function Vf(t,e){if(t==="change")return e}var _f=!1;if(Un){var gu;if(Un){var xu="oninput"in document;if(!xu){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),xu=typeof Uf.oninput=="function"}gu=xu}else gu=!1;_f=gu&&(!document.documentMode||9<document.documentMode)}function Hf(){Yr&&(Yr.detachEvent("onpropertychange",Pf),Xr=Yr=null)}function Pf(t){if(t.propertyName==="value"&&uo(Xr)){var e=[];Bf(e,Xr,t,ou(t)),Of(zb,e)}}function Bb(t,e,i){t==="focusin"?(Hf(),Yr=e,Xr=i,Yr.attachEvent("onpropertychange",Pf)):t==="focusout"&&Hf()}function Vb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(Xr)}function _b(t,e){if(t==="click")return uo(e)}function Ub(t,e){if(t==="input"||t==="change")return uo(e)}function Hb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pe=typeof Object.is=="function"?Object.is:Hb;function Kr(t,e){if(Pe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!ue.call(e,l)||!Pe(t[l],e[l]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,e){var i=Gf(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Gf(i)}}function Xf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=no(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=no(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Pb=Un&&"documentMode"in document&&11>=document.documentMode,Va=null,vu=null,Qr=null,bu=!1;function Qf(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;bu||Va==null||Va!==no(r)||(r=Va,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=$o(vu,"onSelect"),0<r.length&&(e=new oo("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=Va)))}function ta(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var _a={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},wu={},Ff={};Un&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function ea(t){if(wu[t])return wu[t];if(!_a[t])return t;var e=_a[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Ff)return wu[t]=e[i];return t}var If=ea("animationend"),Zf=ea("animationiteration"),Jf=ea("animationstart"),Gb=ea("transitionrun"),Yb=ea("transitionstart"),Xb=ea("transitioncancel"),$f=ea("transitionend"),Wf=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function hn(t,e){Wf.set(t,e),$i(e,[t])}var co=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},tn=[],Ua=0,Tu=0;function po(){for(var t=Ua,e=Tu=Ua=0;e<t;){var i=tn[e];tn[e++]=null;var r=tn[e];tn[e++]=null;var l=tn[e];tn[e++]=null;var c=tn[e];if(tn[e++]=null,r!==null&&l!==null){var y=r.pending;y===null?l.next=l:(l.next=y.next,y.next=l),r.pending=l}c!==0&&tm(i,l,c)}}function fo(t,e,i,r){tn[Ua++]=t,tn[Ua++]=e,tn[Ua++]=i,tn[Ua++]=r,Tu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ju(t,e,i,r){return fo(t,e,i,r),mo(t)}function na(t,e){return fo(t,null,null,e),mo(t)}function tm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-be(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function mo(t){if(50<hs)throw hs=0,qc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ha={};function Kb(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,i,r){return new Kb(t,e,i,r)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hn(t,e){var i=t.alternate;return i===null?(i=Ge(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function em(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ho(t,e,i,r,l,c){var y=0;if(r=t,typeof t=="function")Ou(t)&&(y=1);else if(typeof t=="string")y=Jw(t,i,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=Ge(31,i,e,l),t.elementType=at,t.lanes=c,t;case j:return ia(i.children,l,c,e);case q:y=8,l|=24;break;case C:return t=Ge(12,i,e,l|2),t.elementType=C,t.lanes=c,t;case Q:return t=Ge(13,i,e,l),t.elementType=Q,t.lanes=c,t;case Z:return t=Ge(19,i,e,l),t.elementType=Z,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break t;case P:y=9;break t;case I:y=11;break t;case k:y=14;break t;case R:y=16,r=null;break t}y=29,i=Error(o(130,t===null?"null":typeof t,"")),r=null}return e=Ge(y,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function ia(t,e,i,r){return t=Ge(7,t,r,e),t.lanes=i,t}function Au(t,e,i){return t=Ge(6,t,null,e),t.lanes=i,t}function nm(t){var e=Ge(18,null,null,0);return e.stateNode=t,e}function Nu(t,e,i){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var im=new WeakMap;function en(t,e){if(typeof t=="object"&&t!==null){var i=im.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Ki(e)},im.set(t,e),e)}return{value:t,source:e,stack:Ki(e)}}var Pa=[],Ga=0,go=null,Fr=0,nn=[],an=0,hi=null,On=1,An="";function Pn(t,e){Pa[Ga++]=Fr,Pa[Ga++]=go,go=t,Fr=e}function am(t,e,i){nn[an++]=On,nn[an++]=An,nn[an++]=hi,hi=t;var r=On;t=An;var l=32-be(r)-1;r&=~(1<<l),i+=1;var c=32-be(e)+l;if(30<c){var y=l-l%5;c=(r&(1<<y)-1).toString(32),r>>=y,l-=y,On=1<<32-be(e)+l|i<<l|r,An=c+t}else On=1<<c|i<<l|r,An=t}function Eu(t){t.return!==null&&(Pn(t,1),am(t,1,0))}function Cu(t){for(;t===go;)go=Pa[--Ga],Pa[Ga]=null,Fr=Pa[--Ga],Pa[Ga]=null;for(;t===hi;)hi=nn[--an],nn[an]=null,An=nn[--an],nn[an]=null,On=nn[--an],nn[an]=null}function rm(t,e){nn[an++]=On,nn[an++]=An,nn[an++]=hi,On=e.id,An=e.overflow,hi=t}var me=null,_t=null,Ct=!1,gi=null,rn=!1,ku=Error(o(519));function xi(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ir(en(e,t)),ku}function sm(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[fe]=t,e[qe]=r,i){case"dialog":Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":case"embed":Ot("load",e);break;case"video":case"audio":for(i=0;i<xs.length;i++)Ot(xs[i],e);break;case"source":Ot("error",e);break;case"img":case"image":case"link":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"input":Ot("invalid",e),vf(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ot("invalid",e);break;case"textarea":Ot("invalid",e),wf(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Tg(e.textContent,i)?(r.popover!=null&&(Ot("beforetoggle",e),Ot("toggle",e)),r.onScroll!=null&&Ot("scroll",e),r.onScrollEnd!=null&&Ot("scrollend",e),r.onClick!=null&&(e.onclick=_n),e=!0):e=!1,e||xi(t,!0)}function om(t){for(me=t.return;me;)switch(me.tag){case 5:case 31:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:me=me.return}}function Ya(t){if(t!==me)return!1;if(!Ct)return om(t),Ct=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Fc(t.type,t.memoizedProps)),i=!i),i&&_t&&xi(t),om(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));_t=Mg(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));_t=Mg(t)}else e===27?(e=_t,Li(t.type)?(t=Wc,Wc=null,_t=t):_t=e):_t=me?on(t.stateNode.nextSibling):null;return!0}function aa(){_t=me=null,Ct=!1}function Lu(){var t=gi;return t!==null&&(Ve===null?Ve=t:Ve.push.apply(Ve,t),gi=null),t}function Ir(t){gi===null?gi=[t]:gi.push(t)}var Mu=N(null),ra=null,Gn=null;function yi(t,e,i){Y(Mu,e._currentValue),e._currentValue=i}function Yn(t){t._currentValue=Mu.current,X(Mu)}function qu(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function Du(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var y=l.child;c=c.firstContext;t:for(;c!==null;){var w=c;c=l;for(var O=0;O<e.length;O++)if(w.context===e[O]){c.lanes|=i,w=c.alternate,w!==null&&(w.lanes|=i),qu(c.return,i,t),r||(y=null);break t}c=w.next}}else if(l.tag===18){if(y=l.return,y===null)throw Error(o(341));y.lanes|=i,c=y.alternate,c!==null&&(c.lanes|=i),qu(y,i,t),y=null}else y=l.child;if(y!==null)y.return=l;else for(y=l;y!==null;){if(y===t){y=null;break}if(l=y.sibling,l!==null){l.return=y.return,y=l;break}y=y.return}l=y}}function Xa(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var y=l.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var w=l.type;Pe(l.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(l===ot.current){if(y=l.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ss):t=[Ss])}l=l.return}t!==null&&Du(e,t,i,r),e.flags|=262144}function xo(t){for(t=t.firstContext;t!==null;){if(!Pe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sa(t){ra=t,Gn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function he(t){return lm(ra,t)}function yo(t,e){return ra===null&&sa(t),lm(t,e)}function lm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},Gn===null){if(t===null)throw Error(o(308));Gn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Gn=Gn.next=e;return i}var Qb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},Fb=n.unstable_scheduleCallback,Ib=n.unstable_NormalPriority,Wt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new Qb,data:new Map,refCount:0}}function Zr(t){t.refCount--,t.refCount===0&&Fb(Ib,function(){t.controller.abort()})}var Jr=null,zu=0,Ka=0,Qa=null;function Zb(t,e){if(Jr===null){var i=Jr=[];zu=0,Ka=_c(),Qa={status:"pending",value:void 0,then:function(r){i.push(r)}}}return zu++,e.then(um,um),e}function um(){if(--zu===0&&Jr!==null){Qa!==null&&(Qa.status="fulfilled");var t=Jr;Jr=null,Ka=0,Qa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Jb(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var cm=L.S;L.S=function(t,e){Qh=Oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Zb(t,e),cm!==null&&cm(t,e)};var oa=N(null);function Bu(){var t=oa.current;return t!==null?t:Vt.pooledCache}function vo(t,e){e===null?Y(oa,oa.current):Y(oa,e.pool)}function dm(){var t=Bu();return t===null?null:{parent:Wt._currentValue,pool:t}}var Fa=Error(o(460)),Vu=Error(o(474)),bo=Error(o(542)),wo={then:function(){}};function pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(_n,_n),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hm(t),t;default:if(typeof e.status=="string")e.then(_n,_n);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hm(t),t}throw ua=e,Fa}}function la(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(ua=i,Fa):i}}var ua=null;function mm(){if(ua===null)throw Error(o(459));var t=ua;return ua=null,t}function hm(t){if(t===Fa||t===bo)throw Error(o(483))}var Ia=null,$r=0;function So(t){var e=$r;return $r+=1,Ia===null&&(Ia=[]),fm(Ia,t,e)}function Wr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function To(t,e){throw e.$$typeof===v?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function gm(t){function e(M,E){if(t){var D=M.deletions;D===null?(M.deletions=[E],M.flags|=16):D.push(E)}}function i(M,E){if(!t)return null;for(;E!==null;)e(M,E),E=E.sibling;return null}function r(M){for(var E=new Map;M!==null;)M.key!==null?E.set(M.key,M):E.set(M.index,M),M=M.sibling;return E}function l(M,E){return M=Hn(M,E),M.index=0,M.sibling=null,M}function c(M,E,D){return M.index=D,t?(D=M.alternate,D!==null?(D=D.index,D<E?(M.flags|=67108866,E):D):(M.flags|=67108866,E)):(M.flags|=1048576,E)}function y(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function w(M,E,D,K){return E===null||E.tag!==6?(E=Au(D,M.mode,K),E.return=M,E):(E=l(E,D),E.return=M,E)}function O(M,E,D,K){var ut=D.type;return ut===j?G(M,E,D.props.children,K,D.key):E!==null&&(E.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===R&&la(ut)===E.type)?(E=l(E,D.props),Wr(E,D),E.return=M,E):(E=ho(D.type,D.key,D.props,null,M.mode,K),Wr(E,D),E.return=M,E)}function z(M,E,D,K){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=Nu(D,M.mode,K),E.return=M,E):(E=l(E,D.children||[]),E.return=M,E)}function G(M,E,D,K,ut){return E===null||E.tag!==7?(E=ia(D,M.mode,K,ut),E.return=M,E):(E=l(E,D),E.return=M,E)}function F(M,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Au(""+E,M.mode,D),E.return=M,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case S:return D=ho(E.type,E.key,E.props,null,M.mode,D),Wr(D,E),D.return=M,D;case T:return E=Nu(E,M.mode,D),E.return=M,E;case R:return E=la(E),F(M,E,D)}if(wt(E)||ht(E))return E=ia(E,M.mode,D,null),E.return=M,E;if(typeof E.then=="function")return F(M,So(E),D);if(E.$$typeof===U)return F(M,yo(M,E),D);To(M,E)}return null}function V(M,E,D,K){var ut=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return ut!==null?null:w(M,E,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return D.key===ut?O(M,E,D,K):null;case T:return D.key===ut?z(M,E,D,K):null;case R:return D=la(D),V(M,E,D,K)}if(wt(D)||ht(D))return ut!==null?null:G(M,E,D,K,null);if(typeof D.then=="function")return V(M,E,So(D),K);if(D.$$typeof===U)return V(M,E,yo(M,D),K);To(M,D)}return null}function _(M,E,D,K,ut){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return M=M.get(D)||null,w(E,M,""+K,ut);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return M=M.get(K.key===null?D:K.key)||null,O(E,M,K,ut);case T:return M=M.get(K.key===null?D:K.key)||null,z(E,M,K,ut);case R:return K=la(K),_(M,E,D,K,ut)}if(wt(K)||ht(K))return M=M.get(D)||null,G(E,M,K,ut,null);if(typeof K.then=="function")return _(M,E,D,So(K),ut);if(K.$$typeof===U)return _(M,E,D,yo(E,K),ut);To(E,K)}return null}function tt(M,E,D,K){for(var ut=null,kt=null,rt=E,St=E=0,Et=null;rt!==null&&St<D.length;St++){rt.index>St?(Et=rt,rt=null):Et=rt.sibling;var Lt=V(M,rt,D[St],K);if(Lt===null){rt===null&&(rt=Et);break}t&&rt&&Lt.alternate===null&&e(M,rt),E=c(Lt,E,St),kt===null?ut=Lt:kt.sibling=Lt,kt=Lt,rt=Et}if(St===D.length)return i(M,rt),Ct&&Pn(M,St),ut;if(rt===null){for(;St<D.length;St++)rt=F(M,D[St],K),rt!==null&&(E=c(rt,E,St),kt===null?ut=rt:kt.sibling=rt,kt=rt);return Ct&&Pn(M,St),ut}for(rt=r(rt);St<D.length;St++)Et=_(rt,M,St,D[St],K),Et!==null&&(t&&Et.alternate!==null&&rt.delete(Et.key===null?St:Et.key),E=c(Et,E,St),kt===null?ut=Et:kt.sibling=Et,kt=Et);return t&&rt.forEach(function(zi){return e(M,zi)}),Ct&&Pn(M,St),ut}function dt(M,E,D,K){if(D==null)throw Error(o(151));for(var ut=null,kt=null,rt=E,St=E=0,Et=null,Lt=D.next();rt!==null&&!Lt.done;St++,Lt=D.next()){rt.index>St?(Et=rt,rt=null):Et=rt.sibling;var zi=V(M,rt,Lt.value,K);if(zi===null){rt===null&&(rt=Et);break}t&&rt&&zi.alternate===null&&e(M,rt),E=c(zi,E,St),kt===null?ut=zi:kt.sibling=zi,kt=zi,rt=Et}if(Lt.done)return i(M,rt),Ct&&Pn(M,St),ut;if(rt===null){for(;!Lt.done;St++,Lt=D.next())Lt=F(M,Lt.value,K),Lt!==null&&(E=c(Lt,E,St),kt===null?ut=Lt:kt.sibling=Lt,kt=Lt);return Ct&&Pn(M,St),ut}for(rt=r(rt);!Lt.done;St++,Lt=D.next())Lt=_(rt,M,St,Lt.value,K),Lt!==null&&(t&&Lt.alternate!==null&&rt.delete(Lt.key===null?St:Lt.key),E=c(Lt,E,St),kt===null?ut=Lt:kt.sibling=Lt,kt=Lt);return t&&rt.forEach(function(l2){return e(M,l2)}),Ct&&Pn(M,St),ut}function Bt(M,E,D,K){if(typeof D=="object"&&D!==null&&D.type===j&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case S:t:{for(var ut=D.key;E!==null;){if(E.key===ut){if(ut=D.type,ut===j){if(E.tag===7){i(M,E.sibling),K=l(E,D.props.children),K.return=M,M=K;break t}}else if(E.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===R&&la(ut)===E.type){i(M,E.sibling),K=l(E,D.props),Wr(K,D),K.return=M,M=K;break t}i(M,E);break}else e(M,E);E=E.sibling}D.type===j?(K=ia(D.props.children,M.mode,K,D.key),K.return=M,M=K):(K=ho(D.type,D.key,D.props,null,M.mode,K),Wr(K,D),K.return=M,M=K)}return y(M);case T:t:{for(ut=D.key;E!==null;){if(E.key===ut)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){i(M,E.sibling),K=l(E,D.children||[]),K.return=M,M=K;break t}else{i(M,E);break}else e(M,E);E=E.sibling}K=Nu(D,M.mode,K),K.return=M,M=K}return y(M);case R:return D=la(D),Bt(M,E,D,K)}if(wt(D))return tt(M,E,D,K);if(ht(D)){if(ut=ht(D),typeof ut!="function")throw Error(o(150));return D=ut.call(D),dt(M,E,D,K)}if(typeof D.then=="function")return Bt(M,E,So(D),K);if(D.$$typeof===U)return Bt(M,E,yo(M,D),K);To(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(i(M,E.sibling),K=l(E,D),K.return=M,M=K):(i(M,E),K=Au(D,M.mode,K),K.return=M,M=K),y(M)):i(M,E)}return function(M,E,D,K){try{$r=0;var ut=Bt(M,E,D,K);return Ia=null,ut}catch(rt){if(rt===Fa||rt===bo)throw rt;var kt=Ge(29,rt,null,M.mode);return kt.lanes=K,kt.return=M,kt}finally{}}}var ca=gm(!0),xm=gm(!1),vi=!1;function _u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function bi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wi(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Mt&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=mo(t),tm(t,null,i),e}return fo(t,r,e,i),mo(t)}function ts(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Le(t,i)}}function Hu(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=y:c=c.next=y,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Pu=!1;function es(){if(Pu){var t=Qa;if(t!==null)throw t}}function ns(t,e,i,r){Pu=!1;var l=t.updateQueue;vi=!1;var c=l.firstBaseUpdate,y=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var O=w,z=O.next;O.next=null,y===null?c=z:y.next=z,y=O;var G=t.alternate;G!==null&&(G=G.updateQueue,w=G.lastBaseUpdate,w!==y&&(w===null?G.firstBaseUpdate=z:w.next=z,G.lastBaseUpdate=O))}if(c!==null){var F=l.baseState;y=0,G=z=O=null,w=c;do{var V=w.lane&-536870913,_=V!==w.lane;if(_?(Nt&V)===V:(r&V)===V){V!==0&&V===Ka&&(Pu=!0),G!==null&&(G=G.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var tt=t,dt=w;V=e;var Bt=i;switch(dt.tag){case 1:if(tt=dt.payload,typeof tt=="function"){F=tt.call(Bt,F,V);break t}F=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=dt.payload,V=typeof tt=="function"?tt.call(Bt,F,V):tt,V==null)break t;F=g({},F,V);break t;case 2:vi=!0}}V=w.callback,V!==null&&(t.flags|=64,_&&(t.flags|=8192),_=l.callbacks,_===null?l.callbacks=[V]:_.push(V))}else _={lane:V,tag:w.tag,payload:w.payload,callback:w.callback,next:null},G===null?(z=G=_,O=F):G=G.next=_,y|=V;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;_=w,w=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);G===null&&(O=F),l.baseState=O,l.firstBaseUpdate=z,l.lastBaseUpdate=G,c===null&&(l.shared.lanes=0),Ai|=y,t.lanes=y,t.memoizedState=F}}function ym(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function vm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)ym(i[t],e)}var Za=N(null),jo=N(0);function bm(t,e){t=Wn,Y(jo,t),Y(Za,e),Wn=t|e.baseLanes}function Gu(){Y(jo,Wn),Y(Za,Za.current)}function Yu(){Wn=jo.current,X(Za),X(jo)}var Ye=N(null),sn=null;function Si(t){var e=t.alternate;Y(It,It.current&1),Y(Ye,t),sn===null&&(e===null||Za.current!==null||e.memoizedState!==null)&&(sn=t)}function Xu(t){Y(It,It.current),Y(Ye,t),sn===null&&(sn=t)}function wm(t){t.tag===22?(Y(It,It.current),Y(Ye,t),sn===null&&(sn=t)):Ti()}function Ti(){Y(It,It.current),Y(Ye,Ye.current)}function Xe(t){X(Ye),sn===t&&(sn=null),X(It)}var It=N(0);function Oo(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Jc(i)||$c(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xn=0,bt=null,Rt=null,te=null,Ao=!1,Ja=!1,da=!1,No=0,is=0,$a=null,$b=0;function Kt(){throw Error(o(321))}function Ku(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Pe(t[i],e[i]))return!1;return!0}function Qu(t,e,i,r,l,c){return Xn=c,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,L.H=t===null||t.memoizedState===null?ah:lc,da=!1,c=i(r,l),da=!1,Ja&&(c=Tm(e,i,r,l)),Sm(t),c}function Sm(t){L.H=ss;var e=Rt!==null&&Rt.next!==null;if(Xn=0,te=Rt=bt=null,Ao=!1,is=0,$a=null,e)throw Error(o(300));t===null||ee||(t=t.dependencies,t!==null&&xo(t)&&(ee=!0))}function Tm(t,e,i,r){bt=t;var l=0;do{if(Ja&&($a=null),is=0,Ja=!1,25<=l)throw Error(o(301));if(l+=1,te=Rt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}L.H=rh,c=e(i,r)}while(Ja);return c}function Wb(){var t=L.H,e=t.useState()[0];return e=typeof e.then=="function"?as(e):e,t=t.useState()[0],(Rt!==null?Rt.memoizedState:null)!==t&&(bt.flags|=1024),e}function Fu(){var t=No!==0;return No=0,t}function Iu(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Zu(t){if(Ao){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ao=!1}Xn=0,te=Rt=bt=null,Ja=!1,is=No=0,$a=null}function Ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?bt.memoizedState=te=t:te=te.next=t,te}function Zt(){if(Rt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=te===null?bt.memoizedState:te.next;if(e!==null)te=e,Rt=t;else{if(t===null)throw bt.alternate===null?Error(o(467)):Error(o(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},te===null?bt.memoizedState=te=t:te=te.next=t}return te}function Eo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function as(t){var e=is;return is+=1,$a===null&&($a=[]),t=fm($a,t,e),e=bt,(te===null?e.memoizedState:te.next)===null&&(e=e.alternate,L.H=e===null||e.memoizedState===null?ah:lc),t}function Co(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return as(t);if(t.$$typeof===U)return he(t)}throw Error(o(438,String(t)))}function Ju(t){var e=null,i=bt.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=bt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Eo(),bt.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=ct;return e.index++,i}function Kn(t,e){return typeof e=="function"?e(t):e}function ko(t){var e=Zt();return $u(e,Rt,t)}function $u(t,e,i){var r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var y=l.next;l.next=c.next,c.next=y}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var w=y=null,O=null,z=e,G=!1;do{var F=z.lane&-536870913;if(F!==z.lane?(Nt&F)===F:(Xn&F)===F){var V=z.revertLane;if(V===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),F===Ka&&(G=!0);else if((Xn&V)===V){z=z.next,V===Ka&&(G=!0);continue}else F={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},O===null?(w=O=F,y=c):O=O.next=F,bt.lanes|=V,Ai|=V;F=z.action,da&&i(c,F),c=z.hasEagerState?z.eagerState:i(c,F)}else V={lane:F,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},O===null?(w=O=V,y=c):O=O.next=V,bt.lanes|=F,Ai|=F;z=z.next}while(z!==null&&z!==e);if(O===null?y=c:O.next=w,!Pe(c,t.memoizedState)&&(ee=!0,G&&(i=Qa,i!==null)))throw i;t.memoizedState=c,t.baseState=y,t.baseQueue=O,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Wu(t){var e=Zt(),i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var y=l=l.next;do c=t(c,y.action),y=y.next;while(y!==l);Pe(c,e.memoizedState)||(ee=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function jm(t,e,i){var r=bt,l=Zt(),c=Ct;if(c){if(i===void 0)throw Error(o(407));i=i()}else i=e();var y=!Pe((Rt||l).memoizedState,i);if(y&&(l.memoizedState=i,ee=!0),l=l.queue,nc(Nm.bind(null,r,l,t),[t]),l.getSnapshot!==e||y||te!==null&&te.memoizedState.tag&1){if(r.flags|=2048,Wa(9,{destroy:void 0},Am.bind(null,r,l,i,e),null),Vt===null)throw Error(o(349));c||(Xn&127)!==0||Om(r,e,i)}return i}function Om(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=bt.updateQueue,e===null?(e=Eo(),bt.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Am(t,e,i,r){e.value=i,e.getSnapshot=r,Em(e)&&Cm(t)}function Nm(t,e,i){return i(function(){Em(e)&&Cm(t)})}function Em(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Pe(t,i)}catch{return!0}}function Cm(t){var e=na(t,2);e!==null&&_e(e,t,2)}function tc(t){var e=Ne();if(typeof t=="function"){var i=t;if(t=i(),da){fn(!0);try{i()}finally{fn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:t},e}function km(t,e,i,r){return t.baseState=i,$u(t,Rt,typeof r=="function"?r:Kn)}function tw(t,e,i,r,l){if(qo(t))throw Error(o(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){c.listeners.push(y)}};L.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,Lm(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Lm(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=L.T,y={};L.T=y;try{var w=i(l,r),O=L.S;O!==null&&O(y,w),Mm(t,e,w)}catch(z){ec(t,e,z)}finally{c!==null&&y.types!==null&&(c.types=y.types),L.T=c}}else try{c=i(l,r),Mm(t,e,c)}catch(z){ec(t,e,z)}}function Mm(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){qm(t,e,r)},function(r){return ec(t,e,r)}):qm(t,e,i)}function qm(t,e,i){e.status="fulfilled",e.value=i,Dm(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Lm(t,i)))}function ec(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Dm(e),e=e.next;while(e!==r)}t.action=null}function Dm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Rm(t,e){return e}function zm(t,e){if(Ct){var i=Vt.formState;if(i!==null){t:{var r=bt;if(Ct){if(_t){e:{for(var l=_t,c=rn;l.nodeType!==8;){if(!c){l=null;break e}if(l=on(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){_t=on(l.nextSibling),r=l.data==="F!";break t}}xi(r)}r=!1}r&&(e=i[0])}}return i=Ne(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:e},i.queue=r,i=eh.bind(null,bt,r),r.dispatch=i,r=tc(!1),c=oc.bind(null,bt,!1,r.queue),r=Ne(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=tw.bind(null,bt,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function Bm(t){var e=Zt();return Vm(e,Rt,t)}function Vm(t,e,i){if(e=$u(t,e,Rm)[0],t=ko(Kn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=as(e)}catch(y){throw y===Fa?bo:y}else r=e;e=Zt();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(bt.flags|=2048,Wa(9,{destroy:void 0},ew.bind(null,l,i),null)),[r,c,t]}function ew(t,e){t.action=e}function _m(t){var e=Zt(),i=Rt;if(i!==null)return Vm(e,i,t);Zt(),e=e.memoizedState,i=Zt();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function Wa(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=bt.updateQueue,e===null&&(e=Eo(),bt.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function Um(){return Zt().memoizedState}function Lo(t,e,i,r){var l=Ne();bt.flags|=t,l.memoizedState=Wa(1|e,{destroy:void 0},i,r===void 0?null:r)}function Mo(t,e,i,r){var l=Zt();r=r===void 0?null:r;var c=l.memoizedState.inst;Rt!==null&&r!==null&&Ku(r,Rt.memoizedState.deps)?l.memoizedState=Wa(e,c,i,r):(bt.flags|=t,l.memoizedState=Wa(1|e,c,i,r))}function Hm(t,e){Lo(8390656,8,t,e)}function nc(t,e){Mo(2048,8,t,e)}function nw(t){bt.flags|=4;var e=bt.updateQueue;if(e===null)e=Eo(),bt.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function Pm(t){var e=Zt().memoizedState;return nw({ref:e,nextImpl:t}),function(){if((Mt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Gm(t,e){return Mo(4,2,t,e)}function Ym(t,e){return Mo(4,4,t,e)}function Xm(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Km(t,e,i){i=i!=null?i.concat([t]):null,Mo(4,4,Xm.bind(null,e,t),i)}function ic(){}function Qm(t,e){var i=Zt();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&Ku(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function Fm(t,e){var i=Zt();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&Ku(e,r[1]))return r[0];if(r=t(),da){fn(!0);try{t()}finally{fn(!1)}}return i.memoizedState=[r,e],r}function ac(t,e,i){return i===void 0||(Xn&1073741824)!==0&&(Nt&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=Ih(),bt.lanes|=t,Ai|=t,i)}function Im(t,e,i,r){return Pe(i,e)?i:Za.current!==null?(t=ac(t,i,r),Pe(t,e)||(ee=!0),t):(Xn&42)===0||(Xn&1073741824)!==0&&(Nt&261930)===0?(ee=!0,t.memoizedState=i):(t=Ih(),bt.lanes|=t,Ai|=t,e)}function Zm(t,e,i,r,l){var c=H.p;H.p=c!==0&&8>c?c:8;var y=L.T,w={};L.T=w,oc(t,!1,e,i);try{var O=l(),z=L.S;if(z!==null&&z(w,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var G=Jb(O,r);rs(t,e,G,Fe(t))}else rs(t,e,r,Fe(t))}catch(F){rs(t,e,{then:function(){},status:"rejected",reason:F},Fe())}finally{H.p=c,y!==null&&w.types!==null&&(y.types=w.types),L.T=y}}function iw(){}function rc(t,e,i,r){if(t.tag!==5)throw Error(o(476));var l=Jm(t).queue;Zm(t,l,e,B,i===null?iw:function(){return $m(t),i(r)})}function Jm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:B},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $m(t){var e=Jm(t);e.next===null&&(e=t.alternate.memoizedState),rs(t,e.next.queue,{},Fe())}function sc(){return he(Ss)}function Wm(){return Zt().memoizedState}function th(){return Zt().memoizedState}function aw(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=Fe();t=bi(i);var r=wi(e,t,i);r!==null&&(_e(r,e,i),ts(r,e,i)),e={cache:Ru()},t.payload=e;return}e=e.return}}function rw(t,e,i){var r=Fe();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qo(t)?nh(e,i):(i=ju(t,e,i,r),i!==null&&(_e(i,t,r),ih(i,e,r)))}function eh(t,e,i){var r=Fe();rs(t,e,i,r)}function rs(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(qo(t))nh(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var y=e.lastRenderedState,w=c(y,i);if(l.hasEagerState=!0,l.eagerState=w,Pe(w,y))return fo(t,e,l,0),Vt===null&&po(),!1}catch{}finally{}if(i=ju(t,e,l,r),i!==null)return _e(i,t,r),ih(i,e,r),!0}return!1}function oc(t,e,i,r){if(r={lane:2,revertLane:_c(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},qo(t)){if(e)throw Error(o(479))}else e=ju(t,i,r,2),e!==null&&_e(e,t,2)}function qo(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function nh(t,e){Ja=Ao=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function ih(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Le(t,i)}}var ss={readContext:he,use:Co,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};ss.useEffectEvent=Kt;var ah={readContext:he,use:Co,useCallback:function(t,e){return Ne().memoizedState=[t,e===void 0?null:e],t},useContext:he,useEffect:Hm,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Lo(4194308,4,Xm.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){Lo(4,2,t,e)},useMemo:function(t,e){var i=Ne();e=e===void 0?null:e;var r=t();if(da){fn(!0);try{t()}finally{fn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=Ne();if(i!==void 0){var l=i(e);if(da){fn(!0);try{i(e)}finally{fn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=rw.bind(null,bt,t),[r.memoizedState,t]},useRef:function(t){var e=Ne();return t={current:t},e.memoizedState=t},useState:function(t){t=tc(t);var e=t.queue,i=eh.bind(null,bt,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:ic,useDeferredValue:function(t,e){var i=Ne();return ac(i,t,e)},useTransition:function(){var t=tc(!1);return t=Zm.bind(null,bt,t.queue,!0,!1),Ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=bt,l=Ne();if(Ct){if(i===void 0)throw Error(o(407));i=i()}else{if(i=e(),Vt===null)throw Error(o(349));(Nt&127)!==0||Om(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,Hm(Nm.bind(null,r,c,t),[t]),r.flags|=2048,Wa(9,{destroy:void 0},Am.bind(null,r,c,i,e),null),i},useId:function(){var t=Ne(),e=Vt.identifierPrefix;if(Ct){var i=An,r=On;i=(r&~(1<<32-be(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=No++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=$b++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:sc,useFormState:zm,useActionState:zm,useOptimistic:function(t){var e=Ne();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=oc.bind(null,bt,!0,i),i.dispatch=e,[t,e]},useMemoCache:Ju,useCacheRefresh:function(){return Ne().memoizedState=aw.bind(null,bt)},useEffectEvent:function(t){var e=Ne(),i={impl:t};return e.memoizedState=i,function(){if((Mt&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},lc={readContext:he,use:Co,useCallback:Qm,useContext:he,useEffect:nc,useImperativeHandle:Km,useInsertionEffect:Gm,useLayoutEffect:Ym,useMemo:Fm,useReducer:ko,useRef:Um,useState:function(){return ko(Kn)},useDebugValue:ic,useDeferredValue:function(t,e){var i=Zt();return Im(i,Rt.memoizedState,t,e)},useTransition:function(){var t=ko(Kn)[0],e=Zt().memoizedState;return[typeof t=="boolean"?t:as(t),e]},useSyncExternalStore:jm,useId:Wm,useHostTransitionStatus:sc,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,e){var i=Zt();return km(i,Rt,t,e)},useMemoCache:Ju,useCacheRefresh:th};lc.useEffectEvent=Pm;var rh={readContext:he,use:Co,useCallback:Qm,useContext:he,useEffect:nc,useImperativeHandle:Km,useInsertionEffect:Gm,useLayoutEffect:Ym,useMemo:Fm,useReducer:Wu,useRef:Um,useState:function(){return Wu(Kn)},useDebugValue:ic,useDeferredValue:function(t,e){var i=Zt();return Rt===null?ac(i,t,e):Im(i,Rt.memoizedState,t,e)},useTransition:function(){var t=Wu(Kn)[0],e=Zt().memoizedState;return[typeof t=="boolean"?t:as(t),e]},useSyncExternalStore:jm,useId:Wm,useHostTransitionStatus:sc,useFormState:_m,useActionState:_m,useOptimistic:function(t,e){var i=Zt();return Rt!==null?km(i,Rt,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:th};rh.useEffectEvent=Pm;function uc(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:g({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var cc={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=Fe(),l=bi(r);l.payload=e,i!=null&&(l.callback=i),e=wi(t,l,r),e!==null&&(_e(e,t,r),ts(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=Fe(),l=bi(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=wi(t,l,r),e!==null&&(_e(e,t,r),ts(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Fe(),r=bi(i);r.tag=2,e!=null&&(r.callback=e),e=wi(t,r,i),e!==null&&(_e(e,t,i),ts(e,t,i))}};function sh(t,e,i,r,l,c,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,y):e.prototype&&e.prototype.isPureReactComponent?!Kr(i,r)||!Kr(l,c):!0}function oh(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function pa(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=g({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function lh(t){co(t)}function uh(t){console.error(t)}function ch(t){co(t)}function Do(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function dh(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function dc(t,e,i){return i=bi(i),i.tag=3,i.payload={element:null},i.callback=function(){Do(t,e)},i}function ph(t){return t=bi(t),t.tag=3,t}function fh(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){dh(e,i,r)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){dh(e,i,r),typeof l!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function sw(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&Xa(e,i,l,!0),i=Ye.current,i!==null){switch(i.tag){case 31:case 13:return sn===null?Ko():i.alternate===null&&Qt===0&&(Qt=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===wo?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),zc(t,r,l)),!1;case 22:return i.flags|=65536,r===wo?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),zc(t,r,l)),!1}throw Error(o(435,i.tag))}return zc(t,r,l),Ko(),!1}if(Ct)return e=Ye.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==ku&&(t=Error(o(422),{cause:r}),Ir(en(t,i)))):(r!==ku&&(e=Error(o(423),{cause:r}),Ir(en(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=en(r,i),l=dc(t.stateNode,r,l),Hu(t,l),Qt!==4&&(Qt=2)),!1;var c=Error(o(520),{cause:r});if(c=en(c,i),ms===null?ms=[c]:ms.push(c),Qt!==4&&(Qt=2),e===null)return!0;r=en(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=dc(i.stateNode,r,t),Hu(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ni===null||!Ni.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=ph(l),fh(l,t,i,r),Hu(i,l),!1}i=i.return}while(i!==null);return!1}var pc=Error(o(461)),ee=!1;function ge(t,e,i,r){e.child=t===null?xm(e,null,i,r):ca(e,t.child,i,r)}function mh(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var y={};for(var w in r)w!=="ref"&&(y[w]=r[w])}else y=r;return sa(e),r=Qu(t,e,i,y,c,l),w=Fu(),t!==null&&!ee?(Iu(t,e,l),Qn(t,e,l)):(Ct&&w&&Eu(e),e.flags|=1,ge(t,e,r,l),e.child)}function hh(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Ou(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,gh(t,e,c,r,l)):(t=ho(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!bc(t,l)){var y=c.memoizedProps;if(i=i.compare,i=i!==null?i:Kr,i(y,r)&&t.ref===e.ref)return Qn(t,e,l)}return e.flags|=1,t=Hn(c,r),t.ref=e.ref,t.return=e,e.child=t}function gh(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(Kr(c,r)&&t.ref===e.ref)if(ee=!1,e.pendingProps=r=c,bc(t,l))(t.flags&131072)!==0&&(ee=!0);else return e.lanes=t.lanes,Qn(t,e,l)}return fc(t,e,i,r,l)}function xh(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return yh(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&vo(e,c!==null?c.cachePool:null),c!==null?bm(e,c):Gu(),wm(e);else return r=e.lanes=536870912,yh(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(vo(e,c.cachePool),bm(e,c),Ti(),e.memoizedState=null):(t!==null&&vo(e,null),Gu(),Ti());return ge(t,e,l,i),e.child}function os(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function yh(t,e,i,r,l){var c=Bu();return c=c===null?null:{parent:Wt._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&vo(e,null),Gu(),wm(e),t!==null&&Xa(t,e,r,!0),e.childLanes=l,null}function Ro(t,e){return e=Bo({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function vh(t,e,i){return ca(e,t.child,null,i),t=Ro(e,e.pendingProps),t.flags|=2,Xe(e),e.memoizedState=null,t}function ow(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ct){if(r.mode==="hidden")return t=Ro(e,r),e.lanes=536870912,os(null,t);if(Xu(e),(t=_t)?(t=Lg(t,rn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:hi!==null?{id:On,overflow:An}:null,retryLane:536870912,hydrationErrors:null},i=nm(t),i.return=e,e.child=i,me=e,_t=null)):t=null,t===null)throw xi(e);return e.lanes=536870912,null}return Ro(e,r)}var c=t.memoizedState;if(c!==null){var y=c.dehydrated;if(Xu(e),l)if(e.flags&256)e.flags&=-257,e=vh(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(ee||Xa(t,e,i,!1),l=(i&t.childLanes)!==0,ee||l){if(r=Vt,r!==null&&(y=Me(r,i),y!==0&&y!==c.retryLane))throw c.retryLane=y,na(t,y),_e(r,t,y),pc;Ko(),e=vh(t,e,i)}else t=c.treeContext,_t=on(y.nextSibling),me=e,Ct=!0,gi=null,rn=!1,t!==null&&rm(e,t),e=Ro(e,r),e.flags|=4096;return e}return t=Hn(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function zo(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function fc(t,e,i,r,l){return sa(e),i=Qu(t,e,i,r,void 0,l),r=Fu(),t!==null&&!ee?(Iu(t,e,l),Qn(t,e,l)):(Ct&&r&&Eu(e),e.flags|=1,ge(t,e,i,l),e.child)}function bh(t,e,i,r,l,c){return sa(e),e.updateQueue=null,i=Tm(e,r,i,l),Sm(t),r=Fu(),t!==null&&!ee?(Iu(t,e,c),Qn(t,e,c)):(Ct&&r&&Eu(e),e.flags|=1,ge(t,e,i,c),e.child)}function wh(t,e,i,r,l){if(sa(e),e.stateNode===null){var c=Ha,y=i.contextType;typeof y=="object"&&y!==null&&(c=he(y)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=cc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},_u(e),y=i.contextType,c.context=typeof y=="object"&&y!==null?he(y):Ha,c.state=e.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(uc(e,i,y,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(y=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),y!==c.state&&cc.enqueueReplaceState(c,c.state,null),ns(e,r,c,l),es(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var w=e.memoizedProps,O=pa(i,w);c.props=O;var z=c.context,G=i.contextType;y=Ha,typeof G=="object"&&G!==null&&(y=he(G));var F=i.getDerivedStateFromProps;G=typeof F=="function"||typeof c.getSnapshotBeforeUpdate=="function",w=e.pendingProps!==w,G||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w||z!==y)&&oh(e,c,r,y),vi=!1;var V=e.memoizedState;c.state=V,ns(e,r,c,l),es(),z=e.memoizedState,w||V!==z||vi?(typeof F=="function"&&(uc(e,i,F,r),z=e.memoizedState),(O=vi||sh(e,i,O,r,V,z,y))?(G||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=z),c.props=r,c.state=z,c.context=y,r=O):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,Uu(t,e),y=e.memoizedProps,G=pa(i,y),c.props=G,F=e.pendingProps,V=c.context,z=i.contextType,O=Ha,typeof z=="object"&&z!==null&&(O=he(z)),w=i.getDerivedStateFromProps,(z=typeof w=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y!==F||V!==O)&&oh(e,c,r,O),vi=!1,V=e.memoizedState,c.state=V,ns(e,r,c,l),es();var _=e.memoizedState;y!==F||V!==_||vi||t!==null&&t.dependencies!==null&&xo(t.dependencies)?(typeof w=="function"&&(uc(e,i,w,r),_=e.memoizedState),(G=vi||sh(e,i,G,r,V,_,O)||t!==null&&t.dependencies!==null&&xo(t.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,_,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,_,O)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||y===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),c.props=r,c.state=_,c.context=O,r=G):(typeof c.componentDidUpdate!="function"||y===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,zo(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=ca(e,t.child,null,l),e.child=ca(e,null,i,l)):ge(t,e,i,l),e.memoizedState=c.state,t=e.child):t=Qn(t,e,l),t}function Sh(t,e,i,r){return aa(),e.flags|=256,ge(t,e,i,r),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:dm()}}function gc(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Qe),t}function Th(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,y;if((y=c)||(y=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),y&&(l=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ct){if(l?Si(e):Ti(),(t=_t)?(t=Lg(t,rn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:hi!==null?{id:On,overflow:An}:null,retryLane:536870912,hydrationErrors:null},i=nm(t),i.return=e,e.child=i,me=e,_t=null)):t=null,t===null)throw xi(e);return $c(t)?e.lanes=32:e.lanes=536870912,null}var w=r.children;return r=r.fallback,l?(Ti(),l=e.mode,w=Bo({mode:"hidden",children:w},l),r=ia(r,l,i,null),w.return=e,r.return=e,w.sibling=r,e.child=w,r=e.child,r.memoizedState=hc(i),r.childLanes=gc(t,y,i),e.memoizedState=mc,os(null,r)):(Si(e),xc(e,w))}var O=t.memoizedState;if(O!==null&&(w=O.dehydrated,w!==null)){if(c)e.flags&256?(Si(e),e.flags&=-257,e=yc(t,e,i)):e.memoizedState!==null?(Ti(),e.child=t.child,e.flags|=128,e=null):(Ti(),w=r.fallback,l=e.mode,r=Bo({mode:"visible",children:r.children},l),w=ia(w,l,i,null),w.flags|=2,r.return=e,w.return=e,r.sibling=w,e.child=r,ca(e,t.child,null,i),r=e.child,r.memoizedState=hc(i),r.childLanes=gc(t,y,i),e.memoizedState=mc,e=os(null,r));else if(Si(e),$c(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var z=y.dgst;y=z,r=Error(o(419)),r.stack="",r.digest=y,Ir({value:r,source:null,stack:null}),e=yc(t,e,i)}else if(ee||Xa(t,e,i,!1),y=(i&t.childLanes)!==0,ee||y){if(y=Vt,y!==null&&(r=Me(y,i),r!==0&&r!==O.retryLane))throw O.retryLane=r,na(t,r),_e(y,t,r),pc;Jc(w)||Ko(),e=yc(t,e,i)}else Jc(w)?(e.flags|=192,e.child=t.child,e=null):(t=O.treeContext,_t=on(w.nextSibling),me=e,Ct=!0,gi=null,rn=!1,t!==null&&rm(e,t),e=xc(e,r.children),e.flags|=4096);return e}return l?(Ti(),w=r.fallback,l=e.mode,O=t.child,z=O.sibling,r=Hn(O,{mode:"hidden",children:r.children}),r.subtreeFlags=O.subtreeFlags&65011712,z!==null?w=Hn(z,w):(w=ia(w,l,i,null),w.flags|=2),w.return=e,r.return=e,r.sibling=w,e.child=r,os(null,r),r=e.child,w=t.child.memoizedState,w===null?w=hc(i):(l=w.cachePool,l!==null?(O=Wt._currentValue,l=l.parent!==O?{parent:O,pool:O}:l):l=dm(),w={baseLanes:w.baseLanes|i,cachePool:l}),r.memoizedState=w,r.childLanes=gc(t,y,i),e.memoizedState=mc,os(t.child,r)):(Si(e),i=t.child,t=i.sibling,i=Hn(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(y=e.deletions,y===null?(e.deletions=[t],e.flags|=16):y.push(t)),e.child=i,e.memoizedState=null,i)}function xc(t,e){return e=Bo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Bo(t,e){return t=Ge(22,t,null,e),t.lanes=0,t}function yc(t,e,i){return ca(e,t.child,null,i),t=xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jh(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qu(t.return,e,i)}function vc(t,e,i,r,l,c){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(y.isBackwards=e,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=i,y.tailMode=l,y.treeForkCount=c)}function Oh(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var y=It.current,w=(y&2)!==0;if(w?(y=y&1|2,e.flags|=128):y&=1,Y(It,y),ge(t,e,r,i),r=Ct?Fr:0,!w&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,i,e);else if(t.tag===19)jh(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(i=e.child,l=null;i!==null;)t=i.alternate,t!==null&&Oo(t)===null&&(l=i),i=i.sibling;i=l,i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),vc(e,!1,l,i,c,r);break;case"backwards":case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Oo(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}vc(e,!0,i,null,c,r);break;case"together":vc(e,!1,null,null,void 0,r);break;default:e.memoizedState=null}return e.child}function Qn(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(Xa(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,i=Hn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=Hn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function bc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&xo(t)))}function lw(t,e,i){switch(e.tag){case 3:ft(e,e.stateNode.containerInfo),yi(e,Wt,t.memoizedState.cache),aa();break;case 27:case 5:oe(e);break;case 4:ft(e,e.stateNode.containerInfo);break;case 10:yi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Xu(e),null;break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Si(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Th(t,e,i):(Si(e),t=Qn(t,e,i),t!==null?t.sibling:null);Si(e);break;case 19:var l=(t.flags&128)!==0;if(r=(i&e.childLanes)!==0,r||(Xa(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Oh(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y(It,It.current),r)break;return null;case 22:return e.lanes=0,xh(t,e,i,e.pendingProps);case 24:yi(e,Wt,t.memoizedState.cache)}return Qn(t,e,i)}function Ah(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)ee=!0;else{if(!bc(t,i)&&(e.flags&128)===0)return ee=!1,lw(t,e,i);ee=(t.flags&131072)!==0}else ee=!1,Ct&&(e.flags&1048576)!==0&&am(e,Fr,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=la(e.elementType),e.type=t,typeof t=="function")Ou(t)?(r=pa(t,r),e.tag=1,e=wh(null,e,t,r,i)):(e.tag=0,e=fc(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===I){e.tag=11,e=mh(null,e,t,r,i);break t}else if(l===k){e.tag=14,e=hh(null,e,t,r,i);break t}}throw e=yt(t)||t,Error(o(306,e,""))}}return e;case 0:return fc(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=pa(r,e.pendingProps),wh(t,e,r,l,i);case 3:t:{if(ft(e,e.stateNode.containerInfo),t===null)throw Error(o(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,Uu(t,e),ns(e,r,null,i);var y=e.memoizedState;if(r=y.cache,yi(e,Wt,r),r!==c.cache&&Du(e,[Wt],i,!0),es(),r=y.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Sh(t,e,r,i);break t}else if(r!==l){l=en(Error(o(424)),e),Ir(l),e=Sh(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_t=on(t.firstChild),me=e,Ct=!0,gi=null,rn=!0,i=xm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(aa(),r===l){e=Qn(t,e,i);break t}ge(t,e,r,i)}e=e.child}return e;case 26:return zo(t,e),t===null?(i=Bg(e.type,null,e.pendingProps,null))?e.memoizedState=i:Ct||(i=e.type,t=e.pendingProps,r=Wo(lt.current).createElement(i),r[fe]=e,r[qe]=t,xe(r,i,t),de(r),e.stateNode=r):e.memoizedState=Bg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return oe(e),t===null&&Ct&&(r=e.stateNode=Dg(e.type,e.pendingProps,lt.current),me=e,rn=!0,l=_t,Li(e.type)?(Wc=l,_t=on(r.firstChild)):_t=l),ge(t,e,e.pendingProps.children,i),zo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ct&&((l=r=_t)&&(r=Vw(r,e.type,e.pendingProps,rn),r!==null?(e.stateNode=r,me=e,_t=on(r.firstChild),rn=!1,l=!0):l=!1),l||xi(e)),oe(e),l=e.type,c=e.pendingProps,y=t!==null?t.memoizedProps:null,r=c.children,Fc(l,c)?r=null:y!==null&&Fc(l,y)&&(e.flags|=32),e.memoizedState!==null&&(l=Qu(t,e,Wb,null,null,i),Ss._currentValue=l),zo(t,e),ge(t,e,r,i),e.child;case 6:return t===null&&Ct&&((t=i=_t)&&(i=_w(i,e.pendingProps,rn),i!==null?(e.stateNode=i,me=e,_t=null,t=!0):t=!1),t||xi(e)),null;case 13:return Th(t,e,i);case 4:return ft(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ca(e,null,r,i):ge(t,e,r,i),e.child;case 11:return mh(t,e,e.type,e.pendingProps,i);case 7:return ge(t,e,e.pendingProps,i),e.child;case 8:return ge(t,e,e.pendingProps.children,i),e.child;case 12:return ge(t,e,e.pendingProps.children,i),e.child;case 10:return r=e.pendingProps,yi(e,e.type,r.value),ge(t,e,r.children,i),e.child;case 9:return l=e.type._context,r=e.pendingProps.children,sa(e),l=he(l),r=r(l),e.flags|=1,ge(t,e,r,i),e.child;case 14:return hh(t,e,e.type,e.pendingProps,i);case 15:return gh(t,e,e.type,e.pendingProps,i);case 19:return Oh(t,e,i);case 31:return ow(t,e,i);case 22:return xh(t,e,i,e.pendingProps);case 24:return sa(e),r=he(Wt),t===null?(l=Bu(),l===null&&(l=Vt,c=Ru(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},_u(e),yi(e,Wt,l)):((t.lanes&i)!==0&&(Uu(t,e),ns(e,null,null,i),es()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),yi(e,Wt,r)):(r=c.cache,yi(e,Wt,r),r!==l.cache&&Du(e,[Wt],i,!0))),ge(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Fn(t){t.flags|=4}function wc(t,e,i,r,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Wh())t.flags|=8192;else throw ua=wo,Vu}else t.flags&=-16777217}function Nh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pg(e))if(Wh())t.flags|=8192;else throw ua=wo,Vu}function Vo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?we():536870912,t.lanes|=e,ir|=e)}function ls(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function uw(t,e,i){var r=e.pendingProps;switch(Cu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Ut(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Yn(Wt),At(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?Fn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Lu())),Ut(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(Fn(e),c!==null?(Ut(e),Nh(e,c)):(Ut(e),wc(e,l,null,r,i))):c?c!==t.memoizedState?(Fn(e),Ut(e),Nh(e,c)):(Ut(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Fn(e),Ut(e),wc(e,l,t,r,i)),null;case 27:if(ve(e),i=lt.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Ut(e),null}t=J.current,Ya(e)?sm(e):(t=Dg(l,r,i),e.stateNode=t,Fn(e))}return Ut(e),null;case 5:if(ve(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Ut(e),null}if(c=J.current,Ya(e))sm(e);else{var y=Wo(lt.current);switch(c){case 1:c=y.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=y.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=y.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=y.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=y.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?y.createElement(l,{is:r.is}):y.createElement(l)}}c[fe]=e,c[qe]=r;t:for(y=e.child;y!==null;){if(y.tag===5||y.tag===6)c.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break t;for(;y.sibling===null;){if(y.return===null||y.return===e)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}e.stateNode=c;t:switch(xe(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Fn(e)}}return Ut(e),wc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(t=lt.current,Ya(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=me,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[fe]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Tg(t.nodeValue,i)),t||xi(e,!0)}else t=Wo(t).createTextNode(r),t[fe]=e,e.stateNode=t}return Ut(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=Ya(e),i!==null){if(t===null){if(!r)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[fe]=e}else aa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ut(e),t=!1}else i=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Xe(e),e):(Xe(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Ut(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[fe]=e}else aa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ut(e),l=!1}else l=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Xe(e),e):(Xe(e),null)}return Xe(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),Vo(e,e.updateQueue),Ut(e),null);case 4:return At(),t===null&&Gc(e.stateNode.containerInfo),Ut(e),null;case 10:return Yn(e.type),Ut(e),null;case 19:if(X(It),r=e.memoizedState,r===null)return Ut(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)ls(r,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Oo(t),c!==null){for(e.flags|=128,ls(r,!1),t=c.updateQueue,e.updateQueue=t,Vo(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)em(i,t),i=i.sibling;return Y(It,It.current&1|2),Ct&&Pn(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&Oe()>Go&&(e.flags|=128,l=!0,ls(r,!1),e.lanes=4194304)}else{if(!l)if(t=Oo(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Vo(e,t),ls(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!Ct)return Ut(e),null}else 2*Oe()-r.renderingStartTime>Go&&i!==536870912&&(e.flags|=128,l=!0,ls(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Oe(),t.sibling=null,i=It.current,Y(It,l?i&1|2:i&1),Ct&&Pn(e,r.treeForkCount),t):(Ut(e),null);case 22:case 23:return Xe(e),Yu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),i=e.updateQueue,i!==null&&Vo(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&X(oa),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Yn(Wt),Ut(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function cw(t,e){switch(Cu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yn(Wt),At(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ve(e),null;case 31:if(e.memoizedState!==null){if(Xe(e),e.alternate===null)throw Error(o(340));aa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Xe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));aa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(It),null;case 4:return At(),null;case 10:return Yn(e.type),null;case 22:case 23:return Xe(e),Yu(),t!==null&&X(oa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Yn(Wt),null;case 25:return null;default:return null}}function Eh(t,e){switch(Cu(e),e.tag){case 3:Yn(Wt),At();break;case 26:case 27:case 5:ve(e);break;case 4:At();break;case 31:e.memoizedState!==null&&Xe(e);break;case 13:Xe(e);break;case 19:X(It);break;case 10:Yn(e.type);break;case 22:case 23:Xe(e),Yu(),t!==null&&X(oa);break;case 24:Yn(Wt)}}function us(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,y=i.inst;r=c(),y.destroy=r}i=i.next}while(i!==l)}}catch(w){Dt(e,e.return,w)}}function ji(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var y=r.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,l=e;var O=i,z=w;try{z()}catch(G){Dt(l,O,G)}}}r=r.next}while(r!==c)}}catch(G){Dt(e,e.return,G)}}function Ch(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{vm(e,i)}catch(r){Dt(t,t.return,r)}}}function kh(t,e,i){i.props=pa(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Dt(t,e,r)}}function cs(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(l){Dt(t,e,l)}}function Nn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Dt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Dt(t,e,l)}else i.current=null}function Lh(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Dt(t,t.return,l)}}function Sc(t,e,i){try{var r=t.stateNode;Mw(r,t.type,i,e),r[qe]=e}catch(l){Dt(t,t.return,l)}}function Mh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Li(t.type)||t.tag===4}function Tc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Mh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Li(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=_n));else if(r!==4&&(r===27&&Li(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(jc(t,e,i),t=t.sibling;t!==null;)jc(t,e,i),t=t.sibling}function _o(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(r!==4&&(r===27&&Li(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(_o(t,e,i),t=t.sibling;t!==null;)_o(t,e,i),t=t.sibling}function qh(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);xe(e,r,i),e[fe]=t,e[qe]=i}catch(c){Dt(t,t.return,c)}}var In=!1,ne=!1,Oc=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,pe=null;function dw(t,e){if(t=t.containerInfo,Kc=sl,t=Kf(t),yu(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var l=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break t}var y=0,w=-1,O=-1,z=0,G=0,F=t,V=null;e:for(;;){for(var _;F!==i||l!==0&&F.nodeType!==3||(w=y+l),F!==c||r!==0&&F.nodeType!==3||(O=y+r),F.nodeType===3&&(y+=F.nodeValue.length),(_=F.firstChild)!==null;)V=F,F=_;for(;;){if(F===t)break e;if(V===i&&++z===l&&(w=y),V===c&&++G===r&&(O=y),(_=F.nextSibling)!==null)break;F=V,V=F.parentNode}F=_}i=w===-1||O===-1?null:{start:w,end:O}}else i=null}i=i||{start:0,end:0}}else i=null;for(Qc={focusedElem:t,selectionRange:i},sl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){switch(e=pe,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)l=t[i],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,i=e,l=c.memoizedProps,c=c.memoizedState,r=i.stateNode;try{var tt=pa(i.type,l);t=r.getSnapshotBeforeUpdate(tt,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(dt){Dt(i,i.return,dt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Zc(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Rh(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Jn(t,i),r&4&&us(5,i);break;case 1:if(Jn(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(y){Dt(i,i.return,y)}else{var l=pa(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Dt(i,i.return,y)}}r&64&&Ch(i),r&512&&cs(i,i.return);break;case 3:if(Jn(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{vm(t,e)}catch(y){Dt(i,i.return,y)}}break;case 27:e===null&&r&4&&qh(i);case 26:case 5:Jn(t,i),e===null&&r&4&&Lh(i),r&512&&cs(i,i.return);break;case 12:Jn(t,i);break;case 31:Jn(t,i),r&4&&Vh(t,i);break;case 13:Jn(t,i),r&4&&_h(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=bw.bind(null,i),Uw(t,i))));break;case 22:if(r=i.memoizedState!==null||In,!r){e=e!==null&&e.memoizedState!==null||ne,l=In;var c=ne;In=r,(ne=e)&&!c?$n(t,i,(i.subtreeFlags&8772)!==0):Jn(t,i),In=l,ne=c}break;case 30:break;default:Jn(t,i)}}function zh(t){var e=t.alternate;e!==null&&(t.alternate=null,zh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&eu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pt=null,Re=!1;function Zn(t,e,i){for(i=i.child;i!==null;)Bh(t,e,i),i=i.sibling}function Bh(t,e,i){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ii,i)}catch{}switch(i.tag){case 26:ne||Nn(i,e),Zn(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:ne||Nn(i,e);var r=Pt,l=Re;Li(i.type)&&(Pt=i.stateNode,Re=!1),Zn(t,e,i),vs(i.stateNode),Pt=r,Re=l;break;case 5:ne||Nn(i,e);case 6:if(r=Pt,l=Re,Pt=null,Zn(t,e,i),Pt=r,Re=l,Pt!==null)if(Re)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(i.stateNode)}catch(c){Dt(i,e,c)}else try{Pt.removeChild(i.stateNode)}catch(c){Dt(i,e,c)}break;case 18:Pt!==null&&(Re?(t=Pt,Cg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),dr(t)):Cg(Pt,i.stateNode));break;case 4:r=Pt,l=Re,Pt=i.stateNode.containerInfo,Re=!0,Zn(t,e,i),Pt=r,Re=l;break;case 0:case 11:case 14:case 15:ji(2,i,e),ne||ji(4,i,e),Zn(t,e,i);break;case 1:ne||(Nn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&kh(i,e,r)),Zn(t,e,i);break;case 21:Zn(t,e,i);break;case 22:ne=(r=ne)||i.memoizedState!==null,Zn(t,e,i),ne=r;break;default:Zn(t,e,i)}}function Vh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{dr(t)}catch(i){Dt(e,e.return,i)}}}function _h(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dr(t)}catch(i){Dt(e,e.return,i)}}function pw(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Dh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Dh),e;default:throw Error(o(435,t.tag))}}function Uo(t,e){var i=pw(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=ww.bind(null,t,r);r.then(l,l)}})}function ze(t,e){var i=e.deletions;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r],c=t,y=e,w=y;t:for(;w!==null;){switch(w.tag){case 27:if(Li(w.type)){Pt=w.stateNode,Re=!1;break t}break;case 5:Pt=w.stateNode,Re=!1;break t;case 3:case 4:Pt=w.stateNode.containerInfo,Re=!0;break t}w=w.return}if(Pt===null)throw Error(o(160));Bh(c,y,l),Pt=null,Re=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Uh(e,t),e=e.sibling}var gn=null;function Uh(t,e){var i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ze(e,t),Be(t),r&4&&(ji(3,t,t.return),us(3,t),ji(5,t,t.return));break;case 1:ze(e,t),Be(t),r&512&&(ne||i===null||Nn(i,i.return)),r&64&&In&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var l=gn;if(ze(e,t),Be(t),r&512&&(ne||i===null||Nn(i,i.return)),r&4){var c=i!==null?i.memoizedState:null;if(r=t.memoizedState,i===null)if(r===null)if(t.stateNode===null){t:{r=t.type,i=t.memoizedProps,l=l.ownerDocument||l;e:switch(r){case"title":c=l.getElementsByTagName("title")[0],(!c||c[Br]||c[fe]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(r),l.head.insertBefore(c,l.querySelector("head > title"))),xe(c,r,i),c[fe]=t,de(c),r=c;break t;case"link":var y=Ug("link","href",l).get(r+(i.href||""));if(y){for(var w=0;w<y.length;w++)if(c=y[w],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){y.splice(w,1);break e}}c=l.createElement(r),xe(c,r,i),l.head.appendChild(c);break;case"meta":if(y=Ug("meta","content",l).get(r+(i.content||""))){for(w=0;w<y.length;w++)if(c=y[w],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){y.splice(w,1);break e}}c=l.createElement(r),xe(c,r,i),l.head.appendChild(c);break;default:throw Error(o(468,r))}c[fe]=t,de(c),r=c}t.stateNode=r}else Hg(l,t.type,t.stateNode);else t.stateNode=_g(l,r,t.memoizedProps);else c!==r?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,r===null?Hg(l,t.type,t.stateNode):_g(l,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Sc(t,t.memoizedProps,i.memoizedProps)}break;case 27:ze(e,t),Be(t),r&512&&(ne||i===null||Nn(i,i.return)),i!==null&&r&4&&Sc(t,t.memoizedProps,i.memoizedProps);break;case 5:if(ze(e,t),Be(t),r&512&&(ne||i===null||Nn(i,i.return)),t.flags&32){l=t.stateNode;try{Da(l,"")}catch(tt){Dt(t,t.return,tt)}}r&4&&t.stateNode!=null&&(l=t.memoizedProps,Sc(t,l,i!==null?i.memoizedProps:l)),r&1024&&(Oc=!0);break;case 6:if(ze(e,t),Be(t),r&4){if(t.stateNode===null)throw Error(o(162));r=t.memoizedProps,i=t.stateNode;try{i.nodeValue=r}catch(tt){Dt(t,t.return,tt)}}break;case 3:if(nl=null,l=gn,gn=tl(e.containerInfo),ze(e,t),gn=l,Be(t),r&4&&i!==null&&i.memoizedState.isDehydrated)try{dr(e.containerInfo)}catch(tt){Dt(t,t.return,tt)}Oc&&(Oc=!1,Hh(t));break;case 4:r=gn,gn=tl(t.stateNode.containerInfo),ze(e,t),Be(t),gn=r;break;case 12:ze(e,t),Be(t);break;case 31:ze(e,t),Be(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Uo(t,r)));break;case 13:ze(e,t),Be(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Po=Oe()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Uo(t,r)));break;case 22:l=t.memoizedState!==null;var O=i!==null&&i.memoizedState!==null,z=In,G=ne;if(In=z||l,ne=G||O,ze(e,t),ne=G,In=z,Be(t),r&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(i===null||O||In||ne||fa(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){O=i=e;try{if(c=O.stateNode,l)y=c.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=O.stateNode;var F=O.memoizedProps.style,V=F!=null&&F.hasOwnProperty("display")?F.display:null;w.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(tt){Dt(O,O.return,tt)}}}else if(e.tag===6){if(i===null){O=e;try{O.stateNode.nodeValue=l?"":O.memoizedProps}catch(tt){Dt(O,O.return,tt)}}}else if(e.tag===18){if(i===null){O=e;try{var _=O.stateNode;l?kg(_,!0):kg(O.stateNode,!1)}catch(tt){Dt(O,O.return,tt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,Uo(t,i))));break;case 19:ze(e,t),Be(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Uo(t,r)));break;case 30:break;case 21:break;default:ze(e,t),Be(t)}}function Be(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(Mh(r)){i=r;break}r=r.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var l=i.stateNode,c=Tc(t);_o(t,c,l);break;case 5:var y=i.stateNode;i.flags&32&&(Da(y,""),i.flags&=-33);var w=Tc(t);_o(t,w,y);break;case 3:case 4:var O=i.stateNode.containerInfo,z=Tc(t);jc(t,z,O);break;default:throw Error(o(161))}}catch(G){Dt(t,t.return,G)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Hh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Jn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Rh(t,e.alternate,e),e=e.sibling}function fa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ji(4,e,e.return),fa(e);break;case 1:Nn(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&kh(e,e.return,i),fa(e);break;case 27:vs(e.stateNode);case 26:case 5:Nn(e,e.return),fa(e);break;case 22:e.memoizedState===null&&fa(e);break;case 30:fa(e);break;default:fa(e)}t=t.sibling}}function $n(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,y=c.flags;switch(c.tag){case 0:case 11:case 15:$n(l,c,i),us(4,c);break;case 1:if($n(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){Dt(r,r.return,z)}if(r=c,l=r.updateQueue,l!==null){var w=r.stateNode;try{var O=l.shared.hiddenCallbacks;if(O!==null)for(l.shared.hiddenCallbacks=null,l=0;l<O.length;l++)ym(O[l],w)}catch(z){Dt(r,r.return,z)}}i&&y&64&&Ch(c),cs(c,c.return);break;case 27:qh(c);case 26:case 5:$n(l,c,i),i&&r===null&&y&4&&Lh(c),cs(c,c.return);break;case 12:$n(l,c,i);break;case 31:$n(l,c,i),i&&y&4&&Vh(l,c);break;case 13:$n(l,c,i),i&&y&4&&_h(l,c);break;case 22:c.memoizedState===null&&$n(l,c,i),cs(c,c.return);break;case 30:break;default:$n(l,c,i)}e=e.sibling}}function Ac(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Zr(i))}function Nc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zr(t))}function xn(t,e,i,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ph(t,e,i,r),e=e.sibling}function Ph(t,e,i,r){var l=e.flags;switch(e.tag){case 0:case 11:case 15:xn(t,e,i,r),l&2048&&us(9,e);break;case 1:xn(t,e,i,r);break;case 3:xn(t,e,i,r),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zr(t)));break;case 12:if(l&2048){xn(t,e,i,r),t=e.stateNode;try{var c=e.memoizedProps,y=c.id,w=c.onPostCommit;typeof w=="function"&&w(y,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Dt(e,e.return,O)}}else xn(t,e,i,r);break;case 31:xn(t,e,i,r);break;case 13:xn(t,e,i,r);break;case 23:break;case 22:c=e.stateNode,y=e.alternate,e.memoizedState!==null?c._visibility&2?xn(t,e,i,r):ds(t,e):c._visibility&2?xn(t,e,i,r):(c._visibility|=2,tr(t,e,i,r,(e.subtreeFlags&10256)!==0||!1)),l&2048&&Ac(y,e);break;case 24:xn(t,e,i,r),l&2048&&Nc(e.alternate,e);break;default:xn(t,e,i,r)}}function tr(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,y=e,w=i,O=r,z=y.flags;switch(y.tag){case 0:case 11:case 15:tr(c,y,w,O,l),us(8,y);break;case 23:break;case 22:var G=y.stateNode;y.memoizedState!==null?G._visibility&2?tr(c,y,w,O,l):ds(c,y):(G._visibility|=2,tr(c,y,w,O,l)),l&&z&2048&&Ac(y.alternate,y);break;case 24:tr(c,y,w,O,l),l&&z&2048&&Nc(y.alternate,y);break;default:tr(c,y,w,O,l)}e=e.sibling}}function ds(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:ds(i,r),l&2048&&Ac(r.alternate,r);break;case 24:ds(i,r),l&2048&&Nc(r.alternate,r);break;default:ds(i,r)}e=e.sibling}}var ps=8192;function er(t,e,i){if(t.subtreeFlags&ps)for(t=t.child;t!==null;)Gh(t,e,i),t=t.sibling}function Gh(t,e,i){switch(t.tag){case 26:er(t,e,i),t.flags&ps&&t.memoizedState!==null&&$w(i,gn,t.memoizedState,t.memoizedProps);break;case 5:er(t,e,i);break;case 3:case 4:var r=gn;gn=tl(t.stateNode.containerInfo),er(t,e,i),gn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ps,ps=16777216,er(t,e,i),ps=r):er(t,e,i));break;default:er(t,e,i)}}function Yh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];pe=r,Kh(r,t)}Yh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xh(t),t=t.sibling}function Xh(t){switch(t.tag){case 0:case 11:case 15:fs(t),t.flags&2048&&ji(9,t,t.return);break;case 3:fs(t);break;case 12:fs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ho(t)):fs(t);break;default:fs(t)}}function Ho(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];pe=r,Kh(r,t)}Yh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ji(8,e,e.return),Ho(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Ho(e));break;default:Ho(e)}t=t.sibling}}function Kh(t,e){for(;pe!==null;){var i=pe;switch(i.tag){case 0:case 11:case 15:ji(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,pe=r;else t:for(i=t;pe!==null;){r=pe;var l=r.sibling,c=r.return;if(zh(r),r===i){pe=null;break t}if(l!==null){l.return=c,pe=l;break t}pe=c}}}var fw={getCacheForType:function(t){var e=he(Wt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return he(Wt).controller.signal}},mw=typeof WeakMap=="function"?WeakMap:Map,Mt=0,Vt=null,jt=null,Nt=0,qt=0,Ke=null,Oi=!1,nr=!1,Ec=!1,Wn=0,Qt=0,Ai=0,ma=0,Cc=0,Qe=0,ir=0,ms=null,Ve=null,kc=!1,Po=0,Qh=0,Go=1/0,Yo=null,Ni=null,ae=0,Ei=null,ar=null,ti=0,Lc=0,Mc=null,Fh=null,hs=0,qc=null;function Fe(){return(Mt&2)!==0&&Nt!==0?Nt&-Nt:L.T!==null?_c():Wl()}function Ih(){if(Qe===0)if((Nt&536870912)===0||Ct){var t=Aa;Aa<<=1,(Aa&3932160)===0&&(Aa=262144),Qe=t}else Qe=536870912;return t=Ye.current,t!==null&&(t.flags|=32),Qe}function _e(t,e,i){(t===Vt&&(qt===2||qt===9)||t.cancelPendingCommit!==null)&&(rr(t,0),Ci(t,Nt,Qe,!1)),Yt(t,i),((Mt&2)===0||t!==Vt)&&(t===Vt&&((Mt&2)===0&&(ma|=i),Qt===4&&Ci(t,Nt,Qe,!1)),En(t))}function Zh(t,e,i){if((Mt&6)!==0)throw Error(o(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ht(t,e),l=r?xw(t,e):Rc(t,e,!0),c=r;do{if(l===0){nr&&!r&&Ci(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!hw(i)){l=Rc(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;t:{var w=t;l=ms;var O=w.current.memoizedState.isDehydrated;if(O&&(rr(w,y).flags|=256),y=Rc(w,y,!1),y!==2){if(Ec&&!O){w.errorRecoveryDisabledLanes|=c,ma|=c,l=4;break t}c=Ve,Ve=l,c!==null&&(Ve===null?Ve=c:Ve.push.apply(Ve,c))}l=y}if(c=!1,l!==2)continue}}if(l===1){rr(t,0),Ci(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Ci(r,e,Qe,!Oi);break t;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Po+300-Oe(),10<l)){if(Ci(r,e,Qe,!Oi),mt(r,0,!0)!==0)break t;ti=e,r.timeoutHandle=Ng(Jh.bind(null,r,i,Ve,Yo,kc,e,Qe,ma,ir,Oi,c,"Throttled",-0,0),l);break t}Jh(r,i,Ve,Yo,kc,e,Qe,ma,ir,Oi,c,null,-0,0)}}break}while(!0);En(t)}function Jh(t,e,i,r,l,c,y,w,O,z,G,F,V,_){if(t.timeoutHandle=-1,F=e.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},Gh(e,c,F);var tt=(c&62914560)===c?Po-Oe():(c&4194048)===c?Qh-Oe():0;if(tt=Ww(F,tt),tt!==null){ti=c,t.cancelPendingCommit=tt(rg.bind(null,t,e,c,i,r,l,y,w,O,G,F,null,V,_)),Ci(t,c,y,!z);return}}rg(t,e,c,i,r,l,y,w,O)}function hw(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Pe(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e,i,r){e&=~Cc,e&=~ma,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-be(l),y=1<<c;r[c]=-1,l&=~y}i!==0&&Ji(t,i,e)}function Xo(){return(Mt&6)===0?(gs(0),!1):!0}function Dc(){if(jt!==null){if(qt===0)var t=jt.return;else t=jt,Gn=ra=null,Zu(t),Ia=null,$r=0,t=jt;for(;t!==null;)Eh(t.alternate,t),t=t.return;jt=null}}function rr(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,Rw(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ti=0,Dc(),Vt=t,jt=i=Hn(t.current,null),Nt=e,qt=0,Ke=null,Oi=!1,nr=Ht(t,e),Ec=!1,ir=Qe=Cc=ma=Ai=Qt=0,Ve=ms=null,kc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var l=31-be(r),c=1<<l;e|=t[l],r&=~c}return Wn=e,po(),i}function $h(t,e){bt=null,L.H=ss,e===Fa||e===bo?(e=mm(),qt=3):e===Vu?(e=mm(),qt=4):qt=e===pc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ke=e,jt===null&&(Qt=1,Do(t,en(e,t.current)))}function Wh(){var t=Ye.current;return t===null?!0:(Nt&4194048)===Nt?sn===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?t===sn:!1}function tg(){var t=L.H;return L.H=ss,t===null?ss:t}function eg(){var t=L.A;return L.A=fw,t}function Ko(){Qt=4,Oi||(Nt&4194048)!==Nt&&Ye.current!==null||(nr=!0),(Ai&134217727)===0&&(ma&134217727)===0||Vt===null||Ci(Vt,Nt,Qe,!1)}function Rc(t,e,i){var r=Mt;Mt|=2;var l=tg(),c=eg();(Vt!==t||Nt!==e)&&(Yo=null,rr(t,e)),e=!1;var y=Qt;t:do try{if(qt!==0&&jt!==null){var w=jt,O=Ke;switch(qt){case 8:Dc(),y=6;break t;case 3:case 2:case 9:case 6:Ye.current===null&&(e=!0);var z=qt;if(qt=0,Ke=null,sr(t,w,O,z),i&&nr){y=0;break t}break;default:z=qt,qt=0,Ke=null,sr(t,w,O,z)}}gw(),y=Qt;break}catch(G){$h(t,G)}while(!0);return e&&t.shellSuspendCounter++,Gn=ra=null,Mt=r,L.H=l,L.A=c,jt===null&&(Vt=null,Nt=0,po()),y}function gw(){for(;jt!==null;)ng(jt)}function xw(t,e){var i=Mt;Mt|=2;var r=tg(),l=eg();Vt!==t||Nt!==e?(Yo=null,Go=Oe()+500,rr(t,e)):nr=Ht(t,e);t:do try{if(qt!==0&&jt!==null){e=jt;var c=Ke;e:switch(qt){case 1:qt=0,Ke=null,sr(t,e,c,1);break;case 2:case 9:if(pm(c)){qt=0,Ke=null,ig(e);break}e=function(){qt!==2&&qt!==9||Vt!==t||(qt=7),En(t)},c.then(e,e);break t;case 3:qt=7;break t;case 4:qt=5;break t;case 7:pm(c)?(qt=0,Ke=null,ig(e)):(qt=0,Ke=null,sr(t,e,c,7));break;case 5:var y=null;switch(jt.tag){case 26:y=jt.memoizedState;case 5:case 27:var w=jt;if(y?Pg(y):w.stateNode.complete){qt=0,Ke=null;var O=w.sibling;if(O!==null)jt=O;else{var z=w.return;z!==null?(jt=z,Qo(z)):jt=null}break e}}qt=0,Ke=null,sr(t,e,c,5);break;case 6:qt=0,Ke=null,sr(t,e,c,6);break;case 8:Dc(),Qt=6;break t;default:throw Error(o(462))}}yw();break}catch(G){$h(t,G)}while(!0);return Gn=ra=null,L.H=r,L.A=l,Mt=i,jt!==null?0:(Vt=null,Nt=0,po(),Qt)}function yw(){for(;jt!==null&&!je();)ng(jt)}function ng(t){var e=Ah(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,e===null?Qo(t):jt=e}function ig(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=bh(i,e,e.pendingProps,e.type,void 0,Nt);break;case 11:e=bh(i,e,e.pendingProps,e.type.render,e.ref,Nt);break;case 5:Zu(e);default:Eh(i,e),e=jt=em(e,Wn),e=Ah(i,e,Wn)}t.memoizedProps=t.pendingProps,e===null?Qo(t):jt=e}function sr(t,e,i,r){Gn=ra=null,Zu(e),Ia=null,$r=0;var l=e.return;try{if(sw(t,l,e,i,Nt)){Qt=1,Do(t,en(i,t.current)),jt=null;return}}catch(c){if(l!==null)throw jt=l,c;Qt=1,Do(t,en(i,t.current)),jt=null;return}e.flags&32768?(Ct||r===1?t=!0:nr||(Nt&536870912)!==0?t=!1:(Oi=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ye.current,r!==null&&r.tag===13&&(r.flags|=16384))),ag(e,t)):Qo(e)}function Qo(t){var e=t;do{if((e.flags&32768)!==0){ag(e,Oi);return}t=e.return;var i=uw(e.alternate,e,Wn);if(i!==null){jt=i;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=t}while(e!==null);Qt===0&&(Qt=5)}function ag(t,e){do{var i=cw(t.alternate,t);if(i!==null){i.flags&=32767,jt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){jt=t;return}jt=t=i}while(t!==null);Qt=6,jt=null}function rg(t,e,i,r,l,c,y,w,O){t.cancelPendingCommit=null;do Fo();while(ae!==0);if((Mt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=Tu,ke(t,i,c,y,w,O),t===Vt&&(jt=Vt=null,Nt=0),ar=e,Ei=t,ti=i,Lc=c,Mc=l,Fh=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sw(Fi,function(){return cg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,l=H.p,H.p=2,y=Mt,Mt|=4;try{dw(t,e,i)}finally{Mt=y,H.p=l,L.T=r}}ae=1,sg(),og(),lg()}}function sg(){if(ae===1){ae=0;var t=Ei,e=ar,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=L.T,L.T=null;var r=H.p;H.p=2;var l=Mt;Mt|=4;try{Uh(e,t);var c=Qc,y=Kf(t.containerInfo),w=c.focusedElem,O=c.selectionRange;if(y!==w&&w&&w.ownerDocument&&Xf(w.ownerDocument.documentElement,w)){if(O!==null&&yu(w)){var z=O.start,G=O.end;if(G===void 0&&(G=z),"selectionStart"in w)w.selectionStart=z,w.selectionEnd=Math.min(G,w.value.length);else{var F=w.ownerDocument||document,V=F&&F.defaultView||window;if(V.getSelection){var _=V.getSelection(),tt=w.textContent.length,dt=Math.min(O.start,tt),Bt=O.end===void 0?dt:Math.min(O.end,tt);!_.extend&&dt>Bt&&(y=Bt,Bt=dt,dt=y);var M=Yf(w,dt),E=Yf(w,Bt);if(M&&E&&(_.rangeCount!==1||_.anchorNode!==M.node||_.anchorOffset!==M.offset||_.focusNode!==E.node||_.focusOffset!==E.offset)){var D=F.createRange();D.setStart(M.node,M.offset),_.removeAllRanges(),dt>Bt?(_.addRange(D),_.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),_.addRange(D))}}}}for(F=[],_=w;_=_.parentNode;)_.nodeType===1&&F.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<F.length;w++){var K=F[w];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}sl=!!Kc,Qc=Kc=null}finally{Mt=l,H.p=r,L.T=i}}t.current=e,ae=2}}function og(){if(ae===2){ae=0;var t=Ei,e=ar,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=L.T,L.T=null;var r=H.p;H.p=2;var l=Mt;Mt|=4;try{Rh(t,e.alternate,e)}finally{Mt=l,H.p=r,L.T=i}}ae=3}}function lg(){if(ae===4||ae===3){ae=0,ci();var t=Ei,e=ar,i=ti,r=Fh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ae=5:(ae=0,ar=Ei=null,ug(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Ni=null),mn(i),e=e.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=L.T,l=H.p,H.p=2,L.T=null;try{for(var c=t.onRecoverableError,y=0;y<r.length;y++){var w=r[y];c(w.value,{componentStack:w.stack})}}finally{L.T=e,H.p=l}}(ti&3)!==0&&Fo(),En(t),l=t.pendingLanes,(i&261930)!==0&&(l&42)!==0?t===qc?hs++:(hs=0,qc=t):hs=0,gs(0)}}function ug(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zr(e)))}function Fo(){return sg(),og(),lg(),cg()}function cg(){if(ae!==5)return!1;var t=Ei,e=Lc;Lc=0;var i=mn(ti),r=L.T,l=H.p;try{H.p=32>i?32:i,L.T=null,i=Mc,Mc=null;var c=Ei,y=ti;if(ae=0,ar=Ei=null,ti=0,(Mt&6)!==0)throw Error(o(331));var w=Mt;if(Mt|=4,Xh(c.current),Ph(c,c.current,y,i),Mt=w,gs(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ii,c)}catch{}return!0}finally{H.p=l,L.T=r,ug(t,e)}}function dg(t,e,i){e=en(i,e),e=dc(t.stateNode,e,2),t=wi(t,e,2),t!==null&&(Yt(t,2),En(t))}function Dt(t,e,i){if(t.tag===3)dg(t,t,i);else for(;e!==null;){if(e.tag===3){dg(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ni===null||!Ni.has(r))){t=en(i,t),i=ph(2),r=wi(e,i,2),r!==null&&(fh(i,r,e,t),Yt(r,2),En(r));break}}e=e.return}}function zc(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new mw;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(Ec=!0,l.add(i),t=vw.bind(null,t,e,i),e.then(t,t))}function vw(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Vt===t&&(Nt&i)===i&&(Qt===4||Qt===3&&(Nt&62914560)===Nt&&300>Oe()-Po?(Mt&2)===0&&rr(t,0):Cc|=i,ir===Nt&&(ir=0)),En(t)}function pg(t,e){e===0&&(e=we()),t=na(t,e),t!==null&&(Yt(t,e),En(t))}function bw(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),pg(t,i)}function ww(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),pg(t,i)}function Sw(t,e){return qr(t,e)}var Io=null,or=null,Bc=!1,Zo=!1,Vc=!1,ki=0;function En(t){t!==or&&t.next===null&&(or===null?Io=or=t:or=or.next=t),Zo=!0,Bc||(Bc=!0,jw())}function gs(t,e){if(!Vc&&Zo){Vc=!0;do for(var i=!1,r=Io;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var y=r.suspendedLanes,w=r.pingedLanes;c=(1<<31-be(42|t)+1)-1,c&=l&~(y&~w),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,gg(r,c))}else c=Nt,c=mt(r,r===Vt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ht(r,c)||(i=!0,gg(r,c));r=r.next}while(i);Vc=!1}}function Tw(){fg()}function fg(){Zo=Bc=!1;var t=0;ki!==0&&Dw()&&(t=ki);for(var e=Oe(),i=null,r=Io;r!==null;){var l=r.next,c=mg(r,e);c===0?(r.next=null,i===null?Io=l:i.next=l,l===null&&(or=i)):(i=r,(t!==0||(c&3)!==0)&&(Zo=!0)),r=l}ae!==0&&ae!==5||gs(t),ki!==0&&(ki=0)}function mg(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var y=31-be(c),w=1<<y,O=l[y];O===-1?((w&i)===0||(w&r)!==0)&&(l[y]=ce(w,e)):O<=e&&(t.expiredLanes|=w),c&=~w}if(e=Vt,i=Nt,i=mt(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(qt===2||qt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Dr(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ht(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&Dr(r),mn(i)){case 2:case 8:i=$s;break;case 32:i=Fi;break;case 268435456:i=Bn;break;default:i=Fi}return r=hg.bind(null,t),i=qr(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&Dr(r),t.callbackPriority=2,t.callbackNode=null,2}function hg(t,e){if(ae!==0&&ae!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Fo()&&t.callbackNode!==i)return null;var r=Nt;return r=mt(t,t===Vt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Zh(t,r,e),mg(t,Oe()),t.callbackNode!=null&&t.callbackNode===i?hg.bind(null,t):null)}function gg(t,e){if(Fo())return null;Zh(t,e,!0)}function jw(){zw(function(){(Mt&6)!==0?qr(Qi,Tw):fg()})}function _c(){if(ki===0){var t=Ka;t===0&&(t=Oa,Oa<<=1,(Oa&261888)===0&&(Oa=256)),ki=t}return ki}function xg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:io(""+t)}function yg(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Ow(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=xg((l[qe]||null).action),y=r.submitter;y&&(e=(e=y[qe]||null)?xg(e.formAction):y.getAttribute("formAction"),e!==null&&(c=e,y=null));var w=new oo("action","action",null,r,l);t.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ki!==0){var O=y?yg(l,y):new FormData(l);rc(i,{pending:!0,data:O,method:l.method,action:c},null,O)}}else typeof c=="function"&&(w.preventDefault(),O=y?yg(l,y):new FormData(l),rc(i,{pending:!0,data:O,method:l.method,action:c},c,O))},currentTarget:l}]})}}for(var Uc=0;Uc<Su.length;Uc++){var Hc=Su[Uc],Aw=Hc.toLowerCase(),Nw=Hc[0].toUpperCase()+Hc.slice(1);hn(Aw,"on"+Nw)}hn(If,"onAnimationEnd"),hn(Zf,"onAnimationIteration"),hn(Jf,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(Gb,"onTransitionRun"),hn(Yb,"onTransitionStart"),hn(Xb,"onTransitionCancel"),hn($f,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$i("onBeforeInput",["compositionend","keypress","textInput","paste"]),$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xs));function vg(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var y=r.length-1;0<=y;y--){var w=r[y],O=w.instance,z=w.currentTarget;if(w=w.listener,O!==c&&l.isPropagationStopped())break t;c=w,l.currentTarget=z;try{c(l)}catch(G){co(G)}l.currentTarget=null,c=O}else for(y=0;y<r.length;y++){if(w=r[y],O=w.instance,z=w.currentTarget,w=w.listener,O!==c&&l.isPropagationStopped())break t;c=w,l.currentTarget=z;try{c(l)}catch(G){co(G)}l.currentTarget=null,c=O}}}}function Ot(t,e){var i=e[tu];i===void 0&&(i=e[tu]=new Set);var r=t+"__bubble";i.has(r)||(bg(e,t,2,!1),i.add(r))}function Pc(t,e,i){var r=0;e&&(r|=4),bg(i,t,r,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Gc(t){if(!t[Jo]){t[Jo]=!0,ff.forEach(function(i){i!=="selectionchange"&&(Ew.has(i)||Pc(i,!1,t),Pc(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,Pc("selectionchange",!1,e))}}function bg(t,e,i,r){switch(Ig(e)){case 2:var l=n2;break;case 8:l=i2;break;default:l=ad}i=l.bind(null,e,i,t),l=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Yc(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var w=r.stateNode.containerInfo;if(w===l)break;if(y===4)for(y=r.return;y!==null;){var O=y.tag;if((O===3||O===4)&&y.stateNode.containerInfo===l)return;y=y.return}for(;w!==null;){if(y=Ca(w),y===null)return;if(O=y.tag,O===5||O===6||O===26||O===27){r=c=y;continue t}w=w.parentNode}}r=r.return}Of(function(){var z=c,G=ou(i),F=[];t:{var V=Wf.get(t);if(V!==void 0){var _=oo,tt=t;switch(t){case"keypress":if(ro(i)===0)break t;case"keydown":case"keyup":_=wb;break;case"focusin":tt="focus",_=fu;break;case"focusout":tt="blur",_=fu;break;case"beforeblur":case"afterblur":_=fu;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=jb;break;case If:case Zf:case Jf:_=pb;break;case $f:_=Ab;break;case"scroll":case"scrollend":_=ob;break;case"wheel":_=Eb;break;case"copy":case"cut":case"paste":_=mb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=kf;break;case"toggle":case"beforetoggle":_=kb}var dt=(e&4)!==0,Bt=!dt&&(t==="scroll"||t==="scrollend"),M=dt?V!==null?V+"Capture":null:V;dt=[];for(var E=z,D;E!==null;){var K=E;if(D=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||D===null||M===null||(K=_r(E,M),K!=null&&dt.push(ys(E,K,D))),Bt)break;E=E.return}0<dt.length&&(V=new _(V,tt,null,i,G),F.push({event:V,listeners:dt}))}}if((e&7)===0){t:{if(V=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",V&&i!==su&&(tt=i.relatedTarget||i.fromElement)&&(Ca(tt)||tt[Ea]))break t;if((_||V)&&(V=G.window===G?G:(V=G.ownerDocument)?V.defaultView||V.parentWindow:window,_?(tt=i.relatedTarget||i.toElement,_=z,tt=tt?Ca(tt):null,tt!==null&&(Bt=p(tt),dt=tt.tag,tt!==Bt||dt!==5&&dt!==27&&dt!==6)&&(tt=null)):(_=null,tt=z),_!==tt)){if(dt=Ef,K="onMouseLeave",M="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(dt=kf,K="onPointerLeave",M="onPointerEnter",E="pointer"),Bt=_==null?V:Vr(_),D=tt==null?V:Vr(tt),V=new dt(K,E+"leave",_,i,G),V.target=Bt,V.relatedTarget=D,K=null,Ca(G)===z&&(dt=new dt(M,E+"enter",tt,i,G),dt.target=D,dt.relatedTarget=Bt,K=dt),Bt=K,_&&tt)e:{for(dt=Cw,M=_,E=tt,D=0,K=M;K;K=dt(K))D++;K=0;for(var ut=E;ut;ut=dt(ut))K++;for(;0<D-K;)M=dt(M),D--;for(;0<K-D;)E=dt(E),K--;for(;D--;){if(M===E||E!==null&&M===E.alternate){dt=M;break e}M=dt(M),E=dt(E)}dt=null}else dt=null;_!==null&&wg(F,V,_,dt,!1),tt!==null&&Bt!==null&&wg(F,Bt,tt,dt,!0)}}t:{if(V=z?Vr(z):window,_=V.nodeName&&V.nodeName.toLowerCase(),_==="select"||_==="input"&&V.type==="file")var kt=Vf;else if(zf(V))if(_f)kt=Ub;else{kt=Vb;var rt=Bb}else _=V.nodeName,!_||_.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?z&&ru(z.elementType)&&(kt=Vf):kt=_b;if(kt&&(kt=kt(t,z))){Bf(F,kt,i,G);break t}rt&&rt(t,V,z),t==="focusout"&&z&&V.type==="number"&&z.memoizedProps.value!=null&&au(V,"number",V.value)}switch(rt=z?Vr(z):window,t){case"focusin":(zf(rt)||rt.contentEditable==="true")&&(Va=rt,vu=z,Qr=null);break;case"focusout":Qr=vu=Va=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Qf(F,i,G);break;case"selectionchange":if(Pb)break;case"keydown":case"keyup":Qf(F,i,G)}var St;if(hu)t:{switch(t){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else Ba?Df(t,i)&&(Et="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Et="onCompositionStart");Et&&(Lf&&i.locale!=="ko"&&(Ba||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Ba&&(St=Af()):(mi=G,cu="value"in mi?mi.value:mi.textContent,Ba=!0)),rt=$o(z,Et),0<rt.length&&(Et=new Cf(Et,t,null,i,G),F.push({event:Et,listeners:rt}),St?Et.data=St:(St=Rf(i),St!==null&&(Et.data=St)))),(St=Mb?qb(t,i):Db(t,i))&&(Et=$o(z,"onBeforeInput"),0<Et.length&&(rt=new Cf("onBeforeInput","beforeinput",null,i,G),F.push({event:rt,listeners:Et}),rt.data=St)),Ow(F,t,z,i,G)}vg(F,e)})}function ys(t,e,i){return{instance:t,listener:e,currentTarget:i}}function $o(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=_r(t,i),l!=null&&r.unshift(ys(t,l,c)),l=_r(t,e),l!=null&&r.push(ys(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Cw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wg(t,e,i,r,l){for(var c=e._reactName,y=[];i!==null&&i!==r;){var w=i,O=w.alternate,z=w.stateNode;if(w=w.tag,O!==null&&O===r)break;w!==5&&w!==26&&w!==27||z===null||(O=z,l?(z=_r(i,c),z!=null&&y.unshift(ys(i,z,O))):l||(z=_r(i,c),z!=null&&y.push(ys(i,z,O)))),i=i.return}y.length!==0&&t.push({event:e,listeners:y})}var kw=/\r\n?/g,Lw=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(kw,`
`).replace(Lw,"")}function Tg(t,e){return e=Sg(e),Sg(t)===e}function zt(t,e,i,r,l,c){switch(i){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Da(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Da(t,""+r);break;case"className":eo(t,"class",r);break;case"tabIndex":eo(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":eo(t,i,r);break;case"style":Tf(t,r,c);break;case"data":if(e!=="object"){eo(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=io(""+r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&zt(t,e,"name",l.name,l,null),zt(t,e,"formEncType",l.formEncType,l,null),zt(t,e,"formMethod",l.formMethod,l,null),zt(t,e,"formTarget",l.formTarget,l,null)):(zt(t,e,"encType",l.encType,l,null),zt(t,e,"method",l.method,l,null),zt(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=io(""+r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=_n);break;case"onScroll":r!=null&&Ot("scroll",t);break;case"onScrollEnd":r!=null&&Ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=io(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""+r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":Ot("beforetoggle",t),Ot("toggle",t),to(t,"popover",r);break;case"xlinkActuate":Vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Vn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Vn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Vn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Vn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":to(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=rb.get(i)||i,to(t,i,r))}}function Xc(t,e,i,r,l,c){switch(i){case"style":Tf(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof r=="string"?Da(t,r):(typeof r=="number"||typeof r=="bigint")&&Da(t,""+r);break;case"onScroll":r!=null&&Ot("scroll",t);break;case"onScrollEnd":r!=null&&Ot("scrollend",t);break;case"onClick":r!=null&&(t.onclick=_n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mf.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),e=i.slice(2,l?i.length-7:void 0),c=t[qe]||null,c=c!=null?c[i]:null,typeof c=="function"&&t.removeEventListener(e,c,l),typeof r=="function")){typeof c!="function"&&c!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,r,l);break t}i in t?t[i]=r:r===!0?t.setAttribute(i,""):to(t,i,r)}}}function xe(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",t),Ot("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var y=i[c];if(y!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:zt(t,e,c,y,i,null)}}l&&zt(t,e,"srcSet",i.srcSet,i,null),r&&zt(t,e,"src",i.src,i,null);return;case"input":Ot("invalid",t);var w=c=y=l=null,O=null,z=null;for(r in i)if(i.hasOwnProperty(r)){var G=i[r];if(G!=null)switch(r){case"name":l=G;break;case"type":y=G;break;case"checked":O=G;break;case"defaultChecked":z=G;break;case"value":c=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,e));break;default:zt(t,e,r,G,i,null)}}vf(t,c,w,O,z,y,l,!1);return;case"select":Ot("invalid",t),r=y=c=null;for(l in i)if(i.hasOwnProperty(l)&&(w=i[l],w!=null))switch(l){case"value":c=w;break;case"defaultValue":y=w;break;case"multiple":r=w;default:zt(t,e,l,w,i,null)}e=c,i=y,t.multiple=!!r,e!=null?qa(t,!!r,e,!1):i!=null&&qa(t,!!r,i,!0);return;case"textarea":Ot("invalid",t),c=l=r=null;for(y in i)if(i.hasOwnProperty(y)&&(w=i[y],w!=null))switch(y){case"value":r=w;break;case"defaultValue":l=w;break;case"children":c=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(91));break;default:zt(t,e,y,w,i,null)}wf(t,r,l,c);return;case"option":for(O in i)if(i.hasOwnProperty(O)&&(r=i[O],r!=null))switch(O){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:zt(t,e,O,r,i,null)}return;case"dialog":Ot("beforetoggle",t),Ot("toggle",t),Ot("cancel",t),Ot("close",t);break;case"iframe":case"object":Ot("load",t);break;case"video":case"audio":for(r=0;r<xs.length;r++)Ot(xs[r],t);break;case"image":Ot("error",t),Ot("load",t);break;case"details":Ot("toggle",t);break;case"embed":case"source":case"link":Ot("error",t),Ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in i)if(i.hasOwnProperty(z)&&(r=i[z],r!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:zt(t,e,z,r,i,null)}return;default:if(ru(e)){for(G in i)i.hasOwnProperty(G)&&(r=i[G],r!==void 0&&Xc(t,e,G,r,i,void 0));return}}for(w in i)i.hasOwnProperty(w)&&(r=i[w],r!=null&&zt(t,e,w,r,i,null))}function Mw(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,y=null,w=null,O=null,z=null,G=null;for(_ in i){var F=i[_];if(i.hasOwnProperty(_)&&F!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":O=F;default:r.hasOwnProperty(_)||zt(t,e,_,null,r,F)}}for(var V in r){var _=r[V];if(F=i[V],r.hasOwnProperty(V)&&(_!=null||F!=null))switch(V){case"type":c=_;break;case"name":l=_;break;case"checked":z=_;break;case"defaultChecked":G=_;break;case"value":y=_;break;case"defaultValue":w=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:_!==F&&zt(t,e,V,_,r,F)}}iu(t,y,w,O,z,G,c,l);return;case"select":_=y=w=V=null;for(c in i)if(O=i[c],i.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":_=O;default:r.hasOwnProperty(c)||zt(t,e,c,null,r,O)}for(l in r)if(c=r[l],O=i[l],r.hasOwnProperty(l)&&(c!=null||O!=null))switch(l){case"value":V=c;break;case"defaultValue":w=c;break;case"multiple":y=c;default:c!==O&&zt(t,e,l,c,r,O)}e=w,i=y,r=_,V!=null?qa(t,!!i,V,!1):!!r!=!!i&&(e!=null?qa(t,!!i,e,!0):qa(t,!!i,i?[]:"",!1));return;case"textarea":_=V=null;for(w in i)if(l=i[w],i.hasOwnProperty(w)&&l!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:zt(t,e,w,null,r,l)}for(y in r)if(l=r[y],c=i[y],r.hasOwnProperty(y)&&(l!=null||c!=null))switch(y){case"value":V=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&zt(t,e,y,l,r,c)}bf(t,V,_);return;case"option":for(var tt in i)if(V=i[tt],i.hasOwnProperty(tt)&&V!=null&&!r.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:zt(t,e,tt,null,r,V)}for(O in r)if(V=r[O],_=i[O],r.hasOwnProperty(O)&&V!==_&&(V!=null||_!=null))switch(O){case"selected":t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:zt(t,e,O,V,r,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in i)V=i[dt],i.hasOwnProperty(dt)&&V!=null&&!r.hasOwnProperty(dt)&&zt(t,e,dt,null,r,V);for(z in r)if(V=r[z],_=i[z],r.hasOwnProperty(z)&&V!==_&&(V!=null||_!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,e));break;default:zt(t,e,z,V,r,_)}return;default:if(ru(e)){for(var Bt in i)V=i[Bt],i.hasOwnProperty(Bt)&&V!==void 0&&!r.hasOwnProperty(Bt)&&Xc(t,e,Bt,void 0,r,V);for(G in r)V=r[G],_=i[G],!r.hasOwnProperty(G)||V===_||V===void 0&&_===void 0||Xc(t,e,G,V,r,_);return}}for(var M in i)V=i[M],i.hasOwnProperty(M)&&V!=null&&!r.hasOwnProperty(M)&&zt(t,e,M,null,r,V);for(F in r)V=r[F],_=i[F],!r.hasOwnProperty(F)||V===_||V==null&&_==null||zt(t,e,F,V,r,_)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,y=l.initiatorType,w=l.duration;if(c&&w&&jg(y)){for(y=0,w=l.responseEnd,r+=1;r<i.length;r++){var O=i[r],z=O.startTime;if(z>w)break;var G=O.transferSize,F=O.initiatorType;G&&jg(F)&&(O=O.responseEnd,y+=G*(O<w?1:(w-z)/(O-z)))}if(--r,e+=8*(c+y)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kc=null,Qc=null;function Wo(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=null;function Dw(){var t=window.event;return t&&t.type==="popstate"?t===Ic?!1:(Ic=t,!0):(Ic=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,zw=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(Bw)}:Ng;function Bw(t){setTimeout(function(){throw t})}function Li(t){return t==="head"}function Cg(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),dr(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")vs(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,vs(i);for(var c=i.firstChild;c;){var y=c.nextSibling,w=c.nodeName;c[Br]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=y}}else i==="body"&&vs(t.ownerDocument.body);i=l}while(i);dr(e)}function kg(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function Zc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Zc(i),eu(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Vw(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Br])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=on(t.nextSibling),t===null)break}return null}function _w(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=on(t.nextSibling),t===null))return null;return t}function Lg(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=on(t.nextSibling),t===null))return null;return t}function Jc(t){return t.data==="$?"||t.data==="$~"}function $c(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Uw(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Wc=null;function Mg(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return on(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Dg(t,e,i){switch(e=Wo(i),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function vs(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);eu(t)}var ln=new Map,Rg=new Set;function tl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ei=H.d;H.d={f:Hw,r:Pw,D:Gw,C:Yw,L:Xw,m:Kw,X:Fw,S:Qw,M:Iw};function Hw(){var t=ei.f(),e=Xo();return t||e}function Pw(t){var e=ka(t);e!==null&&e.tag===5&&e.type==="form"?$m(e):ei.r(t)}var lr=typeof document>"u"?null:document;function zg(t,e,i){var r=lr;if(r&&typeof e=="string"&&e){var l=We(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),Rg.has(l)||(Rg.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),xe(e,"link",t),de(e),r.head.appendChild(e)))}}function Gw(t){ei.D(t),zg("dns-prefetch",t,null)}function Yw(t,e){ei.C(t,e),zg("preconnect",t,e)}function Xw(t,e,i){ei.L(t,e,i);var r=lr;if(r&&t&&e){var l='link[rel="preload"][as="'+We(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+We(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+We(i.imageSizes)+'"]')):l+='[href="'+We(t)+'"]';var c=l;switch(e){case"style":c=ur(t);break;case"script":c=cr(t)}ln.has(c)||(t=g({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),ln.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(bs(c))||e==="script"&&r.querySelector(ws(c))||(e=r.createElement("link"),xe(e,"link",t),de(e),r.head.appendChild(e)))}}function Kw(t,e){ei.m(t,e);var i=lr;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+We(r)+'"][href="'+We(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=cr(t)}if(!ln.has(c)&&(t=g({rel:"modulepreload",href:t},e),ln.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ws(c)))return}r=i.createElement("link"),xe(r,"link",t),de(r),i.head.appendChild(r)}}}function Qw(t,e,i){ei.S(t,e,i);var r=lr;if(r&&t){var l=La(r).hoistableStyles,c=ur(t);e=e||"default";var y=l.get(c);if(!y){var w={loading:0,preload:null};if(y=r.querySelector(bs(c)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},i),(i=ln.get(c))&&td(t,i);var O=y=r.createElement("link");de(O),xe(O,"link",t),O._p=new Promise(function(z,G){O.onload=z,O.onerror=G}),O.addEventListener("load",function(){w.loading|=1}),O.addEventListener("error",function(){w.loading|=2}),w.loading|=4,el(y,e,r)}y={type:"stylesheet",instance:y,count:1,state:w},l.set(c,y)}}}function Fw(t,e){ei.X(t,e);var i=lr;if(i&&t){var r=La(i).hoistableScripts,l=cr(t),c=r.get(l);c||(c=i.querySelector(ws(l)),c||(t=g({src:t,async:!0},e),(e=ln.get(l))&&ed(t,e),c=i.createElement("script"),de(c),xe(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Iw(t,e){ei.M(t,e);var i=lr;if(i&&t){var r=La(i).hoistableScripts,l=cr(t),c=r.get(l);c||(c=i.querySelector(ws(l)),c||(t=g({src:t,async:!0,type:"module"},e),(e=ln.get(l))&&ed(t,e),c=i.createElement("script"),de(c),xe(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Bg(t,e,i,r){var l=(l=lt.current)?tl(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=ur(i.href),i=La(l).hoistableStyles,r=i.get(e),r||(r={type:"style",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ur(i.href);var c=La(l).hoistableStyles,y=c.get(t);if(y||(l=l.ownerDocument||l,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,y),(c=l.querySelector(bs(t)))&&!c._p&&(y.instance=c,y.state.loading=5),ln.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ln.set(t,i),c||Zw(l,t,i,y.state))),e&&r===null)throw Error(o(528,""));return y}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=cr(i),i=La(l).hoistableScripts,r=i.get(e),r||(r={type:"script",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function ur(t){return'href="'+We(t)+'"'}function bs(t){return'link[rel="stylesheet"]['+t+"]"}function Vg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Zw(t,e,i,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),xe(e,"link",i),de(e),t.head.appendChild(e))}function cr(t){return'[src="'+We(t)+'"]'}function ws(t){return"script[async]"+t}function _g(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+We(i.href)+'"]');if(r)return e.instance=r,de(r),r;var l=g({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),de(r),xe(r,"style",l),el(r,i.precedence,t),e.instance=r;case"stylesheet":l=ur(i.href);var c=t.querySelector(bs(l));if(c)return e.state.loading|=4,e.instance=c,de(c),c;r=Vg(i),(l=ln.get(l))&&td(r,l),c=(t.ownerDocument||t).createElement("link"),de(c);var y=c;return y._p=new Promise(function(w,O){y.onload=w,y.onerror=O}),xe(c,"link",r),e.state.loading|=4,el(c,i.precedence,t),e.instance=c;case"script":return c=cr(i.src),(l=t.querySelector(ws(c)))?(e.instance=l,de(l),l):(r=i,(l=ln.get(c))&&(r=g({},i),ed(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),de(l),xe(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,el(r,i.precedence,t));return e.instance}function el(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,y=0;y<r.length;y++){var w=r[y];if(w.dataset.precedence===e)c=w;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function td(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ed(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var nl=null;function Ug(t,e,i){if(nl===null){var r=new Map,l=nl=new Map;l.set(i,r)}else l=nl,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Br]||c[fe]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var y=c.getAttribute(e)||"";y=t+y;var w=r.get(y);w?w.push(c):r.set(y,[c])}}return r}function Hg(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Jw(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Pg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $w(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ur(r.href),c=e.querySelector(bs(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=il.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,de(c);return}c=e.ownerDocument||e,r=Vg(r),(l=ln.get(l))&&td(r,l),c=c.createElement("link"),de(c);var y=c;y._p=new Promise(function(w,O){y.onload=w,y.onerror=O}),xe(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=il.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var nd=0;function Ww(t,e){return t.stylesheets&&t.count===0&&rl(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&rl(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&nd===0&&(nd=62500*qw());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rl(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>nd?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var al=null;function rl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,al=new Map,e.forEach(t2,t),al=null,il.call(t))}function t2(t,e){if(!(e.state.loading&4)){var i=al.get(t);if(i)var r=i.get(null);else{i=new Map,al.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var y=l[c];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),r=y)}r&&i.set(null,r)}l=e.instance,y=l.getAttribute("data-precedence"),c=i.get(y)||r,c===r&&i.set(null,l),i.set(y,l),this.count++,r=il.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ss={$$typeof:U,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function e2(t,e,i,r,l,c,y,w,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.hiddenUpdates=pi(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function Gg(t,e,i,r,l,c,y,w,O,z,G,F){return t=new e2(t,e,i,y,O,z,G,F,w),e=1,c===!0&&(e|=24),c=Ge(3,null,null,e),t.current=c,c.stateNode=t,e=Ru(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},_u(c),t}function Yg(t){return t?(t=Ha,t):Ha}function Xg(t,e,i,r,l,c){l=Yg(l),r.context===null?r.context=l:r.pendingContext=l,r=bi(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=wi(t,r,e),i!==null&&(_e(i,t,e),ts(i,t,e))}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function id(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function Qg(t){if(t.tag===13||t.tag===31){var e=na(t,67108864);e!==null&&_e(e,t,67108864),id(t,67108864)}}function Fg(t){if(t.tag===13||t.tag===31){var e=Fe();e=Na(e);var i=na(t,e);i!==null&&_e(i,t,e),id(t,e)}}var sl=!0;function n2(t,e,i,r){var l=L.T;L.T=null;var c=H.p;try{H.p=2,ad(t,e,i,r)}finally{H.p=c,L.T=l}}function i2(t,e,i,r){var l=L.T;L.T=null;var c=H.p;try{H.p=8,ad(t,e,i,r)}finally{H.p=c,L.T=l}}function ad(t,e,i,r){if(sl){var l=rd(r);if(l===null)Yc(t,e,r,ol,i),Zg(t,r);else if(r2(l,t,e,i,r))r.stopPropagation();else if(Zg(t,r),e&4&&-1<a2.indexOf(t)){for(;l!==null;){var c=ka(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var y=jn(c.pendingLanes);if(y!==0){var w=c;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var O=1<<31-be(y);w.entanglements[1]|=O,y&=~O}En(c),(Mt&6)===0&&(Go=Oe()+500,gs(0))}}break;case 31:case 13:w=na(c,2),w!==null&&_e(w,c,2),Xo(),id(c,2)}if(c=rd(r),c===null&&Yc(t,e,r,ol,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Yc(t,e,r,null,i)}}function rd(t){return t=ou(t),sd(t)}var ol=null;function sd(t){if(ol=null,t=Ca(t),t!==null){var e=p(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=d(e),t!==null)return t;t=null}else if(i===31){if(t=m(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ol=t,null}function Ig(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jl()){case Qi:return 2;case $s:return 8;case Fi:case Rr:return 32;case Bn:return 268435456;default:return 32}default:return 32}}var od=!1,Mi=null,qi=null,Di=null,Ts=new Map,js=new Map,Ri=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(t,e){switch(t){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":Ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function Os(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ka(e),e!==null&&Qg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function r2(t,e,i,r,l){switch(e){case"focusin":return Mi=Os(Mi,t,e,i,r,l),!0;case"dragenter":return qi=Os(qi,t,e,i,r,l),!0;case"mouseover":return Di=Os(Di,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return Ts.set(c,Os(Ts.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,js.set(c,Os(js.get(c)||null,t,e,i,r,l)),!0}return!1}function Jg(t){var e=Ca(t.target);if(e!==null){var i=p(e);if(i!==null){if(e=i.tag,e===13){if(e=d(i),e!==null){t.blockedOn=e,df(t.priority,function(){Fg(i)});return}}else if(e===31){if(e=m(i),e!==null){t.blockedOn=e,df(t.priority,function(){Fg(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=rd(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);su=r,i.target.dispatchEvent(r),su=null}else return e=ka(i),e!==null&&Qg(e),t.blockedOn=i,!1;e.shift()}return!0}function $g(t,e,i){ll(t)&&i.delete(e)}function s2(){od=!1,Mi!==null&&ll(Mi)&&(Mi=null),qi!==null&&ll(qi)&&(qi=null),Di!==null&&ll(Di)&&(Di=null),Ts.forEach($g),js.forEach($g)}function ul(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,s2)))}var cl=null;function Wg(t){cl!==t&&(cl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cl===t&&(cl=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(sd(r||i)===null)continue;break}var c=ka(i);c!==null&&(t.splice(e,3),e-=3,rc(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function dr(t){function e(O){return ul(O,t)}Mi!==null&&ul(Mi,t),qi!==null&&ul(qi,t),Di!==null&&ul(Di,t),Ts.forEach(e),js.forEach(e);for(var i=0;i<Ri.length;i++){var r=Ri[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ri.length&&(i=Ri[0],i.blockedOn===null);)Jg(i),i.blockedOn===null&&Ri.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],y=l[qe]||null;if(typeof c=="function")y||Wg(i);else if(y){var w=null;if(c&&c.hasAttribute("formAction")){if(l=c,y=c[qe]||null)w=y.formAction;else if(sd(l)!==null)continue}else w=y.action;typeof w=="function"?i[r+1]=w:(i.splice(r,3),r-=3),Wg(i)}}}function t0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(y){return l=y})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function ld(t){this._internalRoot=t}dl.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var i=e.current,r=Fe();Xg(i,r,t,e,null,null)},dl.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xg(t.current,2,null,t,null,null),Xo(),e[Ea]=null}};function dl(t){this._internalRoot=t}dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wl();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Ri.length&&e!==0&&e<Ri[i].priority;i++);Ri.splice(i,0,t),i===0&&Jg(t)}};var e0=a.version;if(e0!=="19.2.1")throw Error(o(527,e0,"19.2.1"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=f(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var o2={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Ii=pl.inject(o2),Ae=pl}catch{}}return Ns.createRoot=function(t,e){if(!u(t))throw Error(o(299));var i=!1,r="",l=lh,c=uh,y=ch;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError)),e=Gg(t,1,!1,null,null,i,r,null,l,c,y,t0),t[Ea]=e.current,Gc(t),new ld(e)},Ns.hydrateRoot=function(t,e,i){if(!u(t))throw Error(o(299));var r=!1,l="",c=lh,y=uh,w=ch,O=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(w=i.onRecoverableError),i.formState!==void 0&&(O=i.formState)),e=Gg(t,1,!0,e,i??null,r,l,O,c,y,w,t0),e.context=Yg(null),i=e.current,r=Fe(),r=Na(r),l=bi(r),l.callback=null,wi(i,l,r),i=r,e.current.lanes=i,Yt(e,i),En(e),t[Ea]=e.current,Gc(t),new dl(e)},Ns.version="19.2.1",Ns}var d0;function x2(){if(d0)return cd.exports;d0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),cd.exports=g2(),cd.exports}var y2=x2(),A=Vl();const $=lx(A),v2=u2({__proto__:null,default:$},[A]);var b2=(n,a,s,o,u,p,d,m)=>{let h=document.documentElement,f=["light","dark"];function x(S){(Array.isArray(n)?n:[n]).forEach(T=>{let j=T==="class",q=j&&p?u.map(C=>p[C]||C):u;j?(h.classList.remove(...q),h.classList.add(p&&p[S]?p[S]:S)):h.setAttribute(T,S)}),g(S)}function g(S){m&&f.includes(S)&&(h.style.colorScheme=S)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(o)x(o);else try{let S=localStorage.getItem(a)||s,T=d&&S==="system"?v():S;x(T)}catch{}},w2=A.createContext(void 0),S2={setTheme:n=>{},themes:[]},T2=()=>{var n;return(n=A.useContext(w2))!=null?n:S2};A.memo(({forcedTheme:n,storageKey:a,attribute:s,enableSystem:o,enableColorScheme:u,defaultTheme:p,value:d,themes:m,nonce:h,scriptProps:f})=>{let x=JSON.stringify([s,a,p,n,m,d,o,u]).slice(1,-1);return A.createElement("script",{...f,suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(${b2.toString()})(${x})`}})});var xp=ux();const j2=lx(xp);function O2(n){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",a.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}const A2=n=>{switch(n){case"success":return C2;case"info":return L2;case"warning":return k2;case"error":return M2;default:return null}},N2=Array(12).fill(0),E2=({visible:n,className:a})=>$.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":n},$.createElement("div",{className:"sonner-spinner"},N2.map((s,o)=>$.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),C2=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),k2=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),L2=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),M2=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),q2=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},$.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),$.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),D2=()=>{const[n,a]=$.useState(document.hidden);return $.useEffect(()=>{const s=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",s),()=>window.removeEventListener("visibilitychange",s)},[]),n};let Bd=1;class R2{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const s=this.subscribers.indexOf(a);this.subscribers.splice(s,1)}),this.publish=a=>{this.subscribers.forEach(s=>s(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var s;const{message:o,...u}=a,p=typeof(a==null?void 0:a.id)=="number"||((s=a.id)==null?void 0:s.length)>0?a.id:Bd++,d=this.toasts.find(h=>h.id===p),m=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(p)&&this.dismissedToasts.delete(p),d?this.toasts=this.toasts.map(h=>h.id===p?(this.publish({...h,...a,id:p,title:o}),{...h,...a,id:p,dismissible:m,title:o}):h):this.addToast({title:o,...u,dismissible:m,id:p}),p},this.dismiss=a=>(a?(this.dismissedToasts.add(a),requestAnimationFrame(()=>this.subscribers.forEach(s=>s({id:a,dismiss:!0})))):this.toasts.forEach(s=>{this.subscribers.forEach(o=>o({id:s.id,dismiss:!0}))}),a),this.message=(a,s)=>this.create({...s,message:a}),this.error=(a,s)=>this.create({...s,message:a,type:"error"}),this.success=(a,s)=>this.create({...s,type:"success",message:a}),this.info=(a,s)=>this.create({...s,type:"info",message:a}),this.warning=(a,s)=>this.create({...s,type:"warning",message:a}),this.loading=(a,s)=>this.create({...s,type:"loading",message:a}),this.promise=(a,s)=>{if(!s)return;let o;s.loading!==void 0&&(o=this.create({...s,promise:a,type:"loading",message:s.loading,description:typeof s.description!="function"?s.description:void 0}));const u=Promise.resolve(a instanceof Function?a():a);let p=o!==void 0,d;const m=u.then(async f=>{if(d=["resolve",f],$.isValidElement(f))p=!1,this.create({id:o,type:"default",message:f});else if(B2(f)&&!f.ok){p=!1;const g=typeof s.error=="function"?await s.error(`HTTP error! status: ${f.status}`):s.error,v=typeof s.description=="function"?await s.description(`HTTP error! status: ${f.status}`):s.description,T=typeof g=="object"&&!$.isValidElement(g)?g:{message:g};this.create({id:o,type:"error",description:v,...T})}else if(f instanceof Error){p=!1;const g=typeof s.error=="function"?await s.error(f):s.error,v=typeof s.description=="function"?await s.description(f):s.description,T=typeof g=="object"&&!$.isValidElement(g)?g:{message:g};this.create({id:o,type:"error",description:v,...T})}else if(s.success!==void 0){p=!1;const g=typeof s.success=="function"?await s.success(f):s.success,v=typeof s.description=="function"?await s.description(f):s.description,T=typeof g=="object"&&!$.isValidElement(g)?g:{message:g};this.create({id:o,type:"success",description:v,...T})}}).catch(async f=>{if(d=["reject",f],s.error!==void 0){p=!1;const x=typeof s.error=="function"?await s.error(f):s.error,g=typeof s.description=="function"?await s.description(f):s.description,S=typeof x=="object"&&!$.isValidElement(x)?x:{message:x};this.create({id:o,type:"error",description:g,...S})}}).finally(()=>{p&&(this.dismiss(o),o=void 0),s.finally==null||s.finally.call(s)}),h=()=>new Promise((f,x)=>m.then(()=>d[0]==="reject"?x(d[1]):f(d[1])).catch(x));return typeof o!="string"&&typeof o!="number"?{unwrap:h}:Object.assign(o,{unwrap:h})},this.custom=(a,s)=>{const o=(s==null?void 0:s.id)||Bd++;return this.create({jsx:a(o),id:o,...s}),o},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Ue=new R2,z2=(n,a)=>{const s=(a==null?void 0:a.id)||Bd++;return Ue.addToast({title:n,...a,id:s}),s},B2=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",V2=z2,_2=()=>Ue.toasts,U2=()=>Ue.getActiveToasts();Object.assign(V2,{success:Ue.success,info:Ue.info,warning:Ue.warning,error:Ue.error,custom:Ue.custom,message:Ue.message,promise:Ue.promise,dismiss:Ue.dismiss,loading:Ue.loading},{getHistory:_2,getToasts:U2});O2("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function fl(n){return n.label!==void 0}const H2=3,P2="24px",G2="16px",p0=4e3,Y2=356,X2=14,K2=45,Q2=200;function Cn(...n){return n.filter(Boolean).join(" ")}function F2(n){const[a,s]=n.split("-"),o=[];return a&&o.push(a),s&&o.push(s),o}const I2=n=>{var a,s,o,u,p,d,m,h,f;const{invert:x,toast:g,unstyled:v,interacting:S,setHeights:T,visibleToasts:j,heights:q,index:C,toasts:P,expanded:U,removeToast:I,defaultRichColors:Q,closeButton:Z,style:k,cancelButtonStyle:R,actionButtonStyle:at,className:ct="",descriptionClassName:vt="",duration:ht,position:xt,gap:yt,expandByDefault:wt,classNames:L,icons:H,closeButtonAriaLabel:B="Close toast"}=n,[et,st]=$.useState(null),[N,X]=$.useState(null),[Y,J]=$.useState(!1),[W,lt]=$.useState(!1),[ot,ft]=$.useState(!1),[At,oe]=$.useState(!1),[ve,le]=$.useState(!1),[Sn,Ce]=$.useState(0),[Xi,ui]=$.useState(0),zn=$.useRef(g.duration||ht||p0),Ki=$.useRef(null),ue=$.useRef(null),qr=C===0,Dr=C+1<=j,je=g.type,ci=g.dismissible!==!1,Oe=g.className||"",Jl=g.descriptionClassName||"",Qi=$.useMemo(()=>q.findIndex(mt=>mt.toastId===g.id)||0,[q,g.id]),$s=$.useMemo(()=>{var mt;return(mt=g.closeButton)!=null?mt:Z},[g.closeButton,Z]),Fi=$.useMemo(()=>g.duration||ht||p0,[g.duration,ht]),Rr=$.useRef(0),Bn=$.useRef(0),Ws=$.useRef(0),di=$.useRef(null),[Ii,Ae]=xt.split("-"),fn=$.useMemo(()=>q.reduce((mt,Ht,ce)=>ce>=Qi?mt:mt+Ht.height,0),[q,Qi]),be=D2(),$l=g.invert||x,zr=je==="loading";Bn.current=$.useMemo(()=>Qi*yt+fn,[Qi,fn]),$.useEffect(()=>{zn.current=Fi},[Fi]),$.useEffect(()=>{J(!0)},[]),$.useEffect(()=>{const mt=ue.current;if(mt){const Ht=mt.getBoundingClientRect().height;return ui(Ht),T(ce=>[{toastId:g.id,height:Ht,position:g.position},...ce]),()=>T(ce=>ce.filter(we=>we.toastId!==g.id))}},[T,g.id]),$.useLayoutEffect(()=>{if(!Y)return;const mt=ue.current,Ht=mt.style.height;mt.style.height="auto";const ce=mt.getBoundingClientRect().height;mt.style.height=Ht,ui(ce),T(we=>we.find(Yt=>Yt.toastId===g.id)?we.map(Yt=>Yt.toastId===g.id?{...Yt,height:ce}:Yt):[{toastId:g.id,height:ce,position:g.position},...we])},[Y,g.title,g.description,T,g.id,g.jsx,g.action,g.cancel]);const Tn=$.useCallback(()=>{lt(!0),Ce(Bn.current),T(mt=>mt.filter(Ht=>Ht.toastId!==g.id)),setTimeout(()=>{I(g)},Q2)},[g,I,T,Bn]);$.useEffect(()=>{if(g.promise&&je==="loading"||g.duration===1/0||g.type==="loading")return;let mt;return U||S||be?(()=>{if(Ws.current<Rr.current){const we=new Date().getTime()-Rr.current;zn.current=zn.current-we}Ws.current=new Date().getTime()})():(()=>{zn.current!==1/0&&(Rr.current=new Date().getTime(),mt=setTimeout(()=>{g.onAutoClose==null||g.onAutoClose.call(g,g),Tn()},zn.current))})(),()=>clearTimeout(mt)},[U,S,g,je,be,Tn]),$.useEffect(()=>{g.delete&&(Tn(),g.onDismiss==null||g.onDismiss.call(g,g))},[Tn,g.delete]);function Oa(){var mt;if(H!=null&&H.loading){var Ht;return $.createElement("div",{className:Cn(L==null?void 0:L.loader,g==null||(Ht=g.classNames)==null?void 0:Ht.loader,"sonner-loader"),"data-visible":je==="loading"},H.loading)}return $.createElement(E2,{className:Cn(L==null?void 0:L.loader,g==null||(mt=g.classNames)==null?void 0:mt.loader),visible:je==="loading"})}const Aa=g.icon||(H==null?void 0:H[je])||A2(je);var Zi,jn;return $.createElement("li",{tabIndex:0,ref:ue,className:Cn(ct,Oe,L==null?void 0:L.toast,g==null||(a=g.classNames)==null?void 0:a.toast,L==null?void 0:L.default,L==null?void 0:L[je],g==null||(s=g.classNames)==null?void 0:s[je]),"data-sonner-toast":"","data-rich-colors":(Zi=g.richColors)!=null?Zi:Q,"data-styled":!(g.jsx||g.unstyled||v),"data-mounted":Y,"data-promise":!!g.promise,"data-swiped":ve,"data-removed":W,"data-visible":Dr,"data-y-position":Ii,"data-x-position":Ae,"data-index":C,"data-front":qr,"data-swiping":ot,"data-dismissible":ci,"data-type":je,"data-invert":$l,"data-swipe-out":At,"data-swipe-direction":N,"data-expanded":!!(U||wt&&Y),"data-testid":g.testId,style:{"--index":C,"--toasts-before":C,"--z-index":P.length-C,"--offset":`${W?Sn:Bn.current}px`,"--initial-height":wt?"auto":`${Xi}px`,...k,...g.style},onDragEnd:()=>{ft(!1),st(null),di.current=null},onPointerDown:mt=>{mt.button!==2&&(zr||!ci||(Ki.current=new Date,Ce(Bn.current),mt.target.setPointerCapture(mt.pointerId),mt.target.tagName!=="BUTTON"&&(ft(!0),di.current={x:mt.clientX,y:mt.clientY})))},onPointerUp:()=>{var mt,Ht,ce;if(At||!ci)return;di.current=null;const we=Number(((mt=ue.current)==null?void 0:mt.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),pi=Number(((Ht=ue.current)==null?void 0:Ht.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Yt=new Date().getTime()-((ce=Ki.current)==null?void 0:ce.getTime()),ke=et==="x"?we:pi,Ji=Math.abs(ke)/Yt;if(Math.abs(ke)>=K2||Ji>.11){Ce(Bn.current),g.onDismiss==null||g.onDismiss.call(g,g),X(et==="x"?we>0?"right":"left":pi>0?"down":"up"),Tn(),oe(!0);return}else{var Le,Me;(Le=ue.current)==null||Le.style.setProperty("--swipe-amount-x","0px"),(Me=ue.current)==null||Me.style.setProperty("--swipe-amount-y","0px")}le(!1),ft(!1),st(null)},onPointerMove:mt=>{var Ht,ce,we;if(!di.current||!ci||((Ht=window.getSelection())==null?void 0:Ht.toString().length)>0)return;const Yt=mt.clientY-di.current.y,ke=mt.clientX-di.current.x;var Ji;const Le=(Ji=n.swipeDirections)!=null?Ji:F2(xt);!et&&(Math.abs(ke)>1||Math.abs(Yt)>1)&&st(Math.abs(ke)>Math.abs(Yt)?"x":"y");let Me={x:0,y:0};const Na=mn=>1/(1.5+Math.abs(mn)/20);if(et==="y"){if(Le.includes("top")||Le.includes("bottom"))if(Le.includes("top")&&Yt<0||Le.includes("bottom")&&Yt>0)Me.y=Yt;else{const mn=Yt*Na(Yt);Me.y=Math.abs(mn)<Math.abs(Yt)?mn:Yt}}else if(et==="x"&&(Le.includes("left")||Le.includes("right")))if(Le.includes("left")&&ke<0||Le.includes("right")&&ke>0)Me.x=ke;else{const mn=ke*Na(ke);Me.x=Math.abs(mn)<Math.abs(ke)?mn:ke}(Math.abs(Me.x)>0||Math.abs(Me.y)>0)&&le(!0),(ce=ue.current)==null||ce.style.setProperty("--swipe-amount-x",`${Me.x}px`),(we=ue.current)==null||we.style.setProperty("--swipe-amount-y",`${Me.y}px`)}},$s&&!g.jsx&&je!=="loading"?$.createElement("button",{"aria-label":B,"data-disabled":zr,"data-close-button":!0,onClick:zr||!ci?()=>{}:()=>{Tn(),g.onDismiss==null||g.onDismiss.call(g,g)},className:Cn(L==null?void 0:L.closeButton,g==null||(o=g.classNames)==null?void 0:o.closeButton)},(jn=H==null?void 0:H.close)!=null?jn:q2):null,(je||g.icon||g.promise)&&g.icon!==null&&((H==null?void 0:H[je])!==null||g.icon)?$.createElement("div",{"data-icon":"",className:Cn(L==null?void 0:L.icon,g==null||(u=g.classNames)==null?void 0:u.icon)},g.promise||g.type==="loading"&&!g.icon?g.icon||Oa():null,g.type!=="loading"?Aa:null):null,$.createElement("div",{"data-content":"",className:Cn(L==null?void 0:L.content,g==null||(p=g.classNames)==null?void 0:p.content)},$.createElement("div",{"data-title":"",className:Cn(L==null?void 0:L.title,g==null||(d=g.classNames)==null?void 0:d.title)},g.jsx?g.jsx:typeof g.title=="function"?g.title():g.title),g.description?$.createElement("div",{"data-description":"",className:Cn(vt,Jl,L==null?void 0:L.description,g==null||(m=g.classNames)==null?void 0:m.description)},typeof g.description=="function"?g.description():g.description):null),$.isValidElement(g.cancel)?g.cancel:g.cancel&&fl(g.cancel)?$.createElement("button",{"data-button":!0,"data-cancel":!0,style:g.cancelButtonStyle||R,onClick:mt=>{fl(g.cancel)&&ci&&(g.cancel.onClick==null||g.cancel.onClick.call(g.cancel,mt),Tn())},className:Cn(L==null?void 0:L.cancelButton,g==null||(h=g.classNames)==null?void 0:h.cancelButton)},g.cancel.label):null,$.isValidElement(g.action)?g.action:g.action&&fl(g.action)?$.createElement("button",{"data-button":!0,"data-action":!0,style:g.actionButtonStyle||at,onClick:mt=>{fl(g.action)&&(g.action.onClick==null||g.action.onClick.call(g.action,mt),!mt.defaultPrevented&&Tn())},className:Cn(L==null?void 0:L.actionButton,g==null||(f=g.classNames)==null?void 0:f.actionButton)},g.action.label):null)};function f0(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function Z2(n,a){const s={};return[n,a].forEach((o,u)=>{const p=u===1,d=p?"--mobile-offset":"--offset",m=p?G2:P2;function h(f){["top","right","bottom","left"].forEach(x=>{s[`${d}-${x}`]=typeof f=="number"?`${f}px`:f})}typeof o=="number"||typeof o=="string"?h(o):typeof o=="object"?["top","right","bottom","left"].forEach(f=>{o[f]===void 0?s[`${d}-${f}`]=m:s[`${d}-${f}`]=typeof o[f]=="number"?`${o[f]}px`:o[f]}):h(m)}),s}const J2=$.forwardRef(function(a,s){const{id:o,invert:u,position:p="bottom-right",hotkey:d=["altKey","KeyT"],expand:m,closeButton:h,className:f,offset:x,mobileOffset:g,theme:v="light",richColors:S,duration:T,style:j,visibleToasts:q=H2,toastOptions:C,dir:P=f0(),gap:U=X2,icons:I,containerAriaLabel:Q="Notifications"}=a,[Z,k]=$.useState([]),R=$.useMemo(()=>o?Z.filter(Y=>Y.toasterId===o):Z.filter(Y=>!Y.toasterId),[Z,o]),at=$.useMemo(()=>Array.from(new Set([p].concat(R.filter(Y=>Y.position).map(Y=>Y.position)))),[R,p]),[ct,vt]=$.useState([]),[ht,xt]=$.useState(!1),[yt,wt]=$.useState(!1),[L,H]=$.useState(v!=="system"?v:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),B=$.useRef(null),et=d.join("+").replace(/Key/g,"").replace(/Digit/g,""),st=$.useRef(null),N=$.useRef(!1),X=$.useCallback(Y=>{k(J=>{var W;return(W=J.find(lt=>lt.id===Y.id))!=null&&W.delete||Ue.dismiss(Y.id),J.filter(({id:lt})=>lt!==Y.id)})},[]);return $.useEffect(()=>Ue.subscribe(Y=>{if(Y.dismiss){requestAnimationFrame(()=>{k(J=>J.map(W=>W.id===Y.id?{...W,delete:!0}:W))});return}setTimeout(()=>{j2.flushSync(()=>{k(J=>{const W=J.findIndex(lt=>lt.id===Y.id);return W!==-1?[...J.slice(0,W),{...J[W],...Y},...J.slice(W+1)]:[Y,...J]})})})}),[Z]),$.useEffect(()=>{if(v!=="system"){H(v);return}if(v==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?H("dark"):H("light")),typeof window>"u")return;const Y=window.matchMedia("(prefers-color-scheme: dark)");try{Y.addEventListener("change",({matches:J})=>{H(J?"dark":"light")})}catch{Y.addListener(({matches:W})=>{try{H(W?"dark":"light")}catch(lt){console.error(lt)}})}},[v]),$.useEffect(()=>{Z.length<=1&&xt(!1)},[Z]),$.useEffect(()=>{const Y=J=>{var W;if(d.every(ft=>J[ft]||J.code===ft)){var ot;xt(!0),(ot=B.current)==null||ot.focus()}J.code==="Escape"&&(document.activeElement===B.current||(W=B.current)!=null&&W.contains(document.activeElement))&&xt(!1)};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[d]),$.useEffect(()=>{if(B.current)return()=>{st.current&&(st.current.focus({preventScroll:!0}),st.current=null,N.current=!1)}},[B.current]),$.createElement("section",{ref:s,"aria-label":`${Q} ${et}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},at.map((Y,J)=>{var W;const[lt,ot]=Y.split("-");return R.length?$.createElement("ol",{key:Y,dir:P==="auto"?f0():P,tabIndex:-1,ref:B,className:f,"data-sonner-toaster":!0,"data-sonner-theme":L,"data-y-position":lt,"data-x-position":ot,style:{"--front-toast-height":`${((W=ct[0])==null?void 0:W.height)||0}px`,"--width":`${Y2}px`,"--gap":`${U}px`,...j,...Z2(x,g)},onBlur:ft=>{N.current&&!ft.currentTarget.contains(ft.relatedTarget)&&(N.current=!1,st.current&&(st.current.focus({preventScroll:!0}),st.current=null))},onFocus:ft=>{ft.target instanceof HTMLElement&&ft.target.dataset.dismissible==="false"||N.current||(N.current=!0,st.current=ft.relatedTarget)},onMouseEnter:()=>xt(!0),onMouseMove:()=>xt(!0),onMouseLeave:()=>{yt||xt(!1)},onDragEnd:()=>xt(!1),onPointerDown:ft=>{ft.target instanceof HTMLElement&&ft.target.dataset.dismissible==="false"||wt(!0)},onPointerUp:()=>wt(!1)},R.filter(ft=>!ft.position&&J===0||ft.position===Y).map((ft,At)=>{var oe,ve;return $.createElement(I2,{key:ft.id,icons:I,index:At,toast:ft,defaultRichColors:S,duration:(oe=C==null?void 0:C.duration)!=null?oe:T,className:C==null?void 0:C.className,descriptionClassName:C==null?void 0:C.descriptionClassName,invert:u,visibleToasts:q,closeButton:(ve=C==null?void 0:C.closeButton)!=null?ve:h,interacting:yt,position:Y,style:C==null?void 0:C.style,unstyled:C==null?void 0:C.unstyled,classNames:C==null?void 0:C.classNames,cancelButtonStyle:C==null?void 0:C.cancelButtonStyle,actionButtonStyle:C==null?void 0:C.actionButtonStyle,closeButtonAriaLabel:C==null?void 0:C.closeButtonAriaLabel,removeToast:X,toasts:R.filter(le=>le.position==ft.position),heights:ct.filter(le=>le.position==ft.position),setHeights:vt,expandByDefault:m,gap:U,expanded:ht,swipeDirections:a.swipeDirections})})):null}))}),$2=({...n})=>{const{theme:a="system"}=T2();return b.jsx(J2,{"data-loc":"client/src/components/ui/sonner.tsx:8",theme:a,className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...n})};function ai(n,a,{checkForDefaultPrevented:s=!0}={}){return function(u){if(n==null||n(u),s===!1||!u.defaultPrevented)return a==null?void 0:a(u)}}function m0(n,a){if(typeof n=="function")return n(a);n!=null&&(n.current=a)}function cx(...n){return a=>{let s=!1;const o=n.map(u=>{const p=m0(u,a);return!s&&typeof p=="function"&&(s=!0),p});if(s)return()=>{for(let u=0;u<o.length;u++){const p=o[u];typeof p=="function"?p():m0(n[u],null)}}}}function Ta(...n){return A.useCallback(cx(...n),n)}function dx(n,a=[]){let s=[];function o(p,d){const m=A.createContext(d),h=s.length;s=[...s,d];const f=g=>{var C;const{scope:v,children:S,...T}=g,j=((C=v==null?void 0:v[n])==null?void 0:C[h])||m,q=A.useMemo(()=>T,Object.values(T));return b.jsx(j.Provider,{value:q,children:S})};f.displayName=p+"Provider";function x(g,v){var j;const S=((j=v==null?void 0:v[n])==null?void 0:j[h])||m,T=A.useContext(S);if(T)return T;if(d!==void 0)return d;throw new Error(`\`${g}\` must be used within \`${p}\``)}return[f,x]}const u=()=>{const p=s.map(d=>A.createContext(d));return function(m){const h=(m==null?void 0:m[n])||p;return A.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return u.scopeName=n,[o,W2(u,...a)]}function W2(...n){const a=n[0];if(n.length===1)return a;const s=()=>{const o=n.map(u=>({useScope:u(),scopeName:u.scopeName}));return function(p){const d=o.reduce((m,{useScope:h,scopeName:f})=>{const g=h(p)[`__scope${f}`];return{...m,...g}},{});return A.useMemo(()=>({[`__scope${a.scopeName}`]:d}),[d])}};return s.scopeName=a.scopeName,s}function px(n){const a=eS(n),s=A.forwardRef((o,u)=>{const{children:p,...d}=o,m=A.Children.toArray(p),h=m.find(iS);if(h){const f=h.props.children,x=m.map(g=>g===h?A.Children.count(f)>1?A.Children.only(null):A.isValidElement(f)?f.props.children:null:g);return b.jsx(a,{...d,ref:u,children:A.isValidElement(f)?A.cloneElement(f,void 0,x):null})}return b.jsx(a,{...d,ref:u,children:p})});return s.displayName=`${n}.Slot`,s}var tS=px("Slot");function eS(n){const a=A.forwardRef((s,o)=>{const{children:u,...p}=s;if(A.isValidElement(u)){const d=rS(u),m=aS(p,u.props);return u.type!==A.Fragment&&(m.ref=o?cx(o,d):d),A.cloneElement(u,m)}return A.Children.count(u)>1?A.Children.only(null):null});return a.displayName=`${n}.SlotClone`,a}var fx=Symbol("radix.slottable");function nS(n){const a=({children:s})=>b.jsx(b.Fragment,{children:s});return a.displayName=`${n}.Slottable`,a.__radixId=fx,a}function iS(n){return A.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===fx}function aS(n,a){const s={...a};for(const o in a){const u=n[o],p=a[o];/^on[A-Z]/.test(o)?u&&p?s[o]=(...m)=>{const h=p(...m);return u(...m),h}:u&&(s[o]=u):o==="style"?s[o]={...u,...p}:o==="className"&&(s[o]=[u,p].filter(Boolean).join(" "))}return{...n,...s}}function rS(n){var o,u;let a=(o=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:o.get,s=a&&"isReactWarning"in a&&a.isReactWarning;return s?n.ref:(a=(u=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:u.get,s=a&&"isReactWarning"in a&&a.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var sS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ja=sS.reduce((n,a)=>{const s=px(`Primitive.${a}`),o=A.forwardRef((u,p)=>{const{asChild:d,...m}=u,h=d?s:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(h,{...m,ref:p})});return o.displayName=`Primitive.${a}`,{...n,[a]:o}},{});function oS(n,a){n&&xp.flushSync(()=>n.dispatchEvent(a))}function _l(n){const a=A.useRef(n);return A.useEffect(()=>{a.current=n}),A.useMemo(()=>(...s)=>{var o;return(o=a.current)==null?void 0:o.call(a,...s)},[])}function lS(n,a=globalThis==null?void 0:globalThis.document){const s=_l(n);A.useEffect(()=>{const o=u=>{u.key==="Escape"&&s(u)};return a.addEventListener("keydown",o,{capture:!0}),()=>a.removeEventListener("keydown",o,{capture:!0})},[s,a])}var uS="DismissableLayer",Vd="dismissableLayer.update",cS="dismissableLayer.pointerDownOutside",dS="dismissableLayer.focusOutside",h0,mx=A.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),hx=A.forwardRef((n,a)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:o,onPointerDownOutside:u,onFocusOutside:p,onInteractOutside:d,onDismiss:m,...h}=n,f=A.useContext(mx),[x,g]=A.useState(null),v=(x==null?void 0:x.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,S]=A.useState({}),T=Ta(a,k=>g(k)),j=Array.from(f.layers),[q]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),C=j.indexOf(q),P=x?j.indexOf(x):-1,U=f.layersWithOutsidePointerEventsDisabled.size>0,I=P>=C,Q=mS(k=>{const R=k.target,at=[...f.branches].some(ct=>ct.contains(R));!I||at||(u==null||u(k),d==null||d(k),k.defaultPrevented||m==null||m())},v),Z=hS(k=>{const R=k.target;[...f.branches].some(ct=>ct.contains(R))||(p==null||p(k),d==null||d(k),k.defaultPrevented||m==null||m())},v);return lS(k=>{P===f.layers.size-1&&(o==null||o(k),!k.defaultPrevented&&m&&(k.preventDefault(),m()))},v),A.useEffect(()=>{if(x)return s&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(h0=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(x)),f.layers.add(x),g0(),()=>{s&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=h0)}},[x,v,s,f]),A.useEffect(()=>()=>{x&&(f.layers.delete(x),f.layersWithOutsidePointerEventsDisabled.delete(x),g0())},[x,f]),A.useEffect(()=>{const k=()=>S({});return document.addEventListener(Vd,k),()=>document.removeEventListener(Vd,k)},[]),b.jsx(ja.div,{...h,ref:T,style:{pointerEvents:U?I?"auto":"none":void 0,...n.style},onFocusCapture:ai(n.onFocusCapture,Z.onFocusCapture),onBlurCapture:ai(n.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:ai(n.onPointerDownCapture,Q.onPointerDownCapture)})});hx.displayName=uS;var pS="DismissableLayerBranch",fS=A.forwardRef((n,a)=>{const s=A.useContext(mx),o=A.useRef(null),u=Ta(a,o);return A.useEffect(()=>{const p=o.current;if(p)return s.branches.add(p),()=>{s.branches.delete(p)}},[s.branches]),b.jsx(ja.div,{...n,ref:u})});fS.displayName=pS;function mS(n,a=globalThis==null?void 0:globalThis.document){const s=_l(n),o=A.useRef(!1),u=A.useRef(()=>{});return A.useEffect(()=>{const p=m=>{if(m.target&&!o.current){let h=function(){gx(cS,s,f,{discrete:!0})};const f={originalEvent:m};m.pointerType==="touch"?(a.removeEventListener("click",u.current),u.current=h,a.addEventListener("click",u.current,{once:!0})):h()}else a.removeEventListener("click",u.current);o.current=!1},d=window.setTimeout(()=>{a.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(d),a.removeEventListener("pointerdown",p),a.removeEventListener("click",u.current)}},[a,s]),{onPointerDownCapture:()=>o.current=!0}}function hS(n,a=globalThis==null?void 0:globalThis.document){const s=_l(n),o=A.useRef(!1);return A.useEffect(()=>{const u=p=>{p.target&&!o.current&&gx(dS,s,{originalEvent:p},{discrete:!1})};return a.addEventListener("focusin",u),()=>a.removeEventListener("focusin",u)},[a,s]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function g0(){const n=new CustomEvent(Vd);document.dispatchEvent(n)}function gx(n,a,s,{discrete:o}){const u=s.originalEvent.target,p=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:s});a&&u.addEventListener(n,a,{once:!0}),o?oS(u,p):u.dispatchEvent(p)}var Vs=globalThis!=null&&globalThis.document?A.useLayoutEffect:()=>{};const gS=["top","right","bottom","left"],Ui=Math.min,Ie=Math.max,Nl=Math.round,ml=Math.floor,Ln=n=>({x:n,y:n}),xS={left:"right",right:"left",bottom:"top",top:"bottom"},yS={start:"end",end:"start"};function _d(n,a,s){return Ie(n,Ui(a,s))}function ri(n,a){return typeof n=="function"?n(a):n}function si(n){return n.split("-")[0]}function Or(n){return n.split("-")[1]}function yp(n){return n==="x"?"y":"x"}function vp(n){return n==="y"?"height":"width"}const vS=new Set(["top","bottom"]);function kn(n){return vS.has(si(n))?"y":"x"}function bp(n){return yp(kn(n))}function bS(n,a,s){s===void 0&&(s=!1);const o=Or(n),u=bp(n),p=vp(u);let d=u==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return a.reference[p]>a.floating[p]&&(d=El(d)),[d,El(d)]}function wS(n){const a=El(n);return[Ud(n),a,Ud(a)]}function Ud(n){return n.replace(/start|end/g,a=>yS[a])}const x0=["left","right"],y0=["right","left"],SS=["top","bottom"],TS=["bottom","top"];function jS(n,a,s){switch(n){case"top":case"bottom":return s?a?y0:x0:a?x0:y0;case"left":case"right":return a?SS:TS;default:return[]}}function OS(n,a,s,o){const u=Or(n);let p=jS(si(n),s==="start",o);return u&&(p=p.map(d=>d+"-"+u),a&&(p=p.concat(p.map(Ud)))),p}function El(n){return n.replace(/left|right|bottom|top/g,a=>xS[a])}function AS(n){return{top:0,right:0,bottom:0,left:0,...n}}function xx(n){return typeof n!="number"?AS(n):{top:n,right:n,bottom:n,left:n}}function Cl(n){const{x:a,y:s,width:o,height:u}=n;return{width:o,height:u,top:s,left:a,right:a+o,bottom:s+u,x:a,y:s}}function v0(n,a,s){let{reference:o,floating:u}=n;const p=kn(a),d=bp(a),m=vp(d),h=si(a),f=p==="y",x=o.x+o.width/2-u.width/2,g=o.y+o.height/2-u.height/2,v=o[m]/2-u[m]/2;let S;switch(h){case"top":S={x,y:o.y-u.height};break;case"bottom":S={x,y:o.y+o.height};break;case"right":S={x:o.x+o.width,y:g};break;case"left":S={x:o.x-u.width,y:g};break;default:S={x:o.x,y:o.y}}switch(Or(a)){case"start":S[d]-=v*(s&&f?-1:1);break;case"end":S[d]+=v*(s&&f?-1:1);break}return S}const NS=async(n,a,s)=>{const{placement:o="bottom",strategy:u="absolute",middleware:p=[],platform:d}=s,m=p.filter(Boolean),h=await(d.isRTL==null?void 0:d.isRTL(a));let f=await d.getElementRects({reference:n,floating:a,strategy:u}),{x,y:g}=v0(f,o,h),v=o,S={},T=0;for(let j=0;j<m.length;j++){const{name:q,fn:C}=m[j],{x:P,y:U,data:I,reset:Q}=await C({x,y:g,initialPlacement:o,placement:v,strategy:u,middlewareData:S,rects:f,platform:d,elements:{reference:n,floating:a}});x=P??x,g=U??g,S={...S,[q]:{...S[q],...I}},Q&&T<=50&&(T++,typeof Q=="object"&&(Q.placement&&(v=Q.placement),Q.rects&&(f=Q.rects===!0?await d.getElementRects({reference:n,floating:a,strategy:u}):Q.rects),{x,y:g}=v0(f,v,h)),j=-1)}return{x,y:g,placement:v,strategy:u,middlewareData:S}};async function _s(n,a){var s;a===void 0&&(a={});const{x:o,y:u,platform:p,rects:d,elements:m,strategy:h}=n,{boundary:f="clippingAncestors",rootBoundary:x="viewport",elementContext:g="floating",altBoundary:v=!1,padding:S=0}=ri(a,n),T=xx(S),q=m[v?g==="floating"?"reference":"floating":g],C=Cl(await p.getClippingRect({element:(s=await(p.isElement==null?void 0:p.isElement(q)))==null||s?q:q.contextElement||await(p.getDocumentElement==null?void 0:p.getDocumentElement(m.floating)),boundary:f,rootBoundary:x,strategy:h})),P=g==="floating"?{x:o,y:u,width:d.floating.width,height:d.floating.height}:d.reference,U=await(p.getOffsetParent==null?void 0:p.getOffsetParent(m.floating)),I=await(p.isElement==null?void 0:p.isElement(U))?await(p.getScale==null?void 0:p.getScale(U))||{x:1,y:1}:{x:1,y:1},Q=Cl(p.convertOffsetParentRelativeRectToViewportRelativeRect?await p.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:P,offsetParent:U,strategy:h}):P);return{top:(C.top-Q.top+T.top)/I.y,bottom:(Q.bottom-C.bottom+T.bottom)/I.y,left:(C.left-Q.left+T.left)/I.x,right:(Q.right-C.right+T.right)/I.x}}const ES=n=>({name:"arrow",options:n,async fn(a){const{x:s,y:o,placement:u,rects:p,platform:d,elements:m,middlewareData:h}=a,{element:f,padding:x=0}=ri(n,a)||{};if(f==null)return{};const g=xx(x),v={x:s,y:o},S=bp(u),T=vp(S),j=await d.getDimensions(f),q=S==="y",C=q?"top":"left",P=q?"bottom":"right",U=q?"clientHeight":"clientWidth",I=p.reference[T]+p.reference[S]-v[S]-p.floating[T],Q=v[S]-p.reference[S],Z=await(d.getOffsetParent==null?void 0:d.getOffsetParent(f));let k=Z?Z[U]:0;(!k||!await(d.isElement==null?void 0:d.isElement(Z)))&&(k=m.floating[U]||p.floating[T]);const R=I/2-Q/2,at=k/2-j[T]/2-1,ct=Ui(g[C],at),vt=Ui(g[P],at),ht=ct,xt=k-j[T]-vt,yt=k/2-j[T]/2+R,wt=_d(ht,yt,xt),L=!h.arrow&&Or(u)!=null&&yt!==wt&&p.reference[T]/2-(yt<ht?ct:vt)-j[T]/2<0,H=L?yt<ht?yt-ht:yt-xt:0;return{[S]:v[S]+H,data:{[S]:wt,centerOffset:yt-wt-H,...L&&{alignmentOffset:H}},reset:L}}}),CS=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(a){var s,o;const{placement:u,middlewareData:p,rects:d,initialPlacement:m,platform:h,elements:f}=a,{mainAxis:x=!0,crossAxis:g=!0,fallbackPlacements:v,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:j=!0,...q}=ri(n,a);if((s=p.arrow)!=null&&s.alignmentOffset)return{};const C=si(u),P=kn(m),U=si(m)===m,I=await(h.isRTL==null?void 0:h.isRTL(f.floating)),Q=v||(U||!j?[El(m)]:wS(m)),Z=T!=="none";!v&&Z&&Q.push(...OS(m,j,T,I));const k=[m,...Q],R=await _s(a,q),at=[];let ct=((o=p.flip)==null?void 0:o.overflows)||[];if(x&&at.push(R[C]),g){const yt=bS(u,d,I);at.push(R[yt[0]],R[yt[1]])}if(ct=[...ct,{placement:u,overflows:at}],!at.every(yt=>yt<=0)){var vt,ht;const yt=(((vt=p.flip)==null?void 0:vt.index)||0)+1,wt=k[yt];if(wt&&(!(g==="alignment"?P!==kn(wt):!1)||ct.every(B=>kn(B.placement)===P?B.overflows[0]>0:!0)))return{data:{index:yt,overflows:ct},reset:{placement:wt}};let L=(ht=ct.filter(H=>H.overflows[0]<=0).sort((H,B)=>H.overflows[1]-B.overflows[1])[0])==null?void 0:ht.placement;if(!L)switch(S){case"bestFit":{var xt;const H=(xt=ct.filter(B=>{if(Z){const et=kn(B.placement);return et===P||et==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(et=>et>0).reduce((et,st)=>et+st,0)]).sort((B,et)=>B[1]-et[1])[0])==null?void 0:xt[0];H&&(L=H);break}case"initialPlacement":L=m;break}if(u!==L)return{reset:{placement:L}}}return{}}}};function b0(n,a){return{top:n.top-a.height,right:n.right-a.width,bottom:n.bottom-a.height,left:n.left-a.width}}function w0(n){return gS.some(a=>n[a]>=0)}const kS=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(a){const{rects:s}=a,{strategy:o="referenceHidden",...u}=ri(n,a);switch(o){case"referenceHidden":{const p=await _s(a,{...u,elementContext:"reference"}),d=b0(p,s.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:w0(d)}}}case"escaped":{const p=await _s(a,{...u,altBoundary:!0}),d=b0(p,s.floating);return{data:{escapedOffsets:d,escaped:w0(d)}}}default:return{}}}}},yx=new Set(["left","top"]);async function LS(n,a){const{placement:s,platform:o,elements:u}=n,p=await(o.isRTL==null?void 0:o.isRTL(u.floating)),d=si(s),m=Or(s),h=kn(s)==="y",f=yx.has(d)?-1:1,x=p&&h?-1:1,g=ri(a,n);let{mainAxis:v,crossAxis:S,alignmentAxis:T}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return m&&typeof T=="number"&&(S=m==="end"?T*-1:T),h?{x:S*x,y:v*f}:{x:v*f,y:S*x}}const MS=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(a){var s,o;const{x:u,y:p,placement:d,middlewareData:m}=a,h=await LS(a,n);return d===((s=m.offset)==null?void 0:s.placement)&&(o=m.arrow)!=null&&o.alignmentOffset?{}:{x:u+h.x,y:p+h.y,data:{...h,placement:d}}}}},qS=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(a){const{x:s,y:o,placement:u}=a,{mainAxis:p=!0,crossAxis:d=!1,limiter:m={fn:q=>{let{x:C,y:P}=q;return{x:C,y:P}}},...h}=ri(n,a),f={x:s,y:o},x=await _s(a,h),g=kn(si(u)),v=yp(g);let S=f[v],T=f[g];if(p){const q=v==="y"?"top":"left",C=v==="y"?"bottom":"right",P=S+x[q],U=S-x[C];S=_d(P,S,U)}if(d){const q=g==="y"?"top":"left",C=g==="y"?"bottom":"right",P=T+x[q],U=T-x[C];T=_d(P,T,U)}const j=m.fn({...a,[v]:S,[g]:T});return{...j,data:{x:j.x-s,y:j.y-o,enabled:{[v]:p,[g]:d}}}}}},DS=function(n){return n===void 0&&(n={}),{options:n,fn(a){const{x:s,y:o,placement:u,rects:p,middlewareData:d}=a,{offset:m=0,mainAxis:h=!0,crossAxis:f=!0}=ri(n,a),x={x:s,y:o},g=kn(u),v=yp(g);let S=x[v],T=x[g];const j=ri(m,a),q=typeof j=="number"?{mainAxis:j,crossAxis:0}:{mainAxis:0,crossAxis:0,...j};if(h){const U=v==="y"?"height":"width",I=p.reference[v]-p.floating[U]+q.mainAxis,Q=p.reference[v]+p.reference[U]-q.mainAxis;S<I?S=I:S>Q&&(S=Q)}if(f){var C,P;const U=v==="y"?"width":"height",I=yx.has(si(u)),Q=p.reference[g]-p.floating[U]+(I&&((C=d.offset)==null?void 0:C[g])||0)+(I?0:q.crossAxis),Z=p.reference[g]+p.reference[U]+(I?0:((P=d.offset)==null?void 0:P[g])||0)-(I?q.crossAxis:0);T<Q?T=Q:T>Z&&(T=Z)}return{[v]:S,[g]:T}}}},RS=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(a){var s,o;const{placement:u,rects:p,platform:d,elements:m}=a,{apply:h=()=>{},...f}=ri(n,a),x=await _s(a,f),g=si(u),v=Or(u),S=kn(u)==="y",{width:T,height:j}=p.floating;let q,C;g==="top"||g==="bottom"?(q=g,C=v===(await(d.isRTL==null?void 0:d.isRTL(m.floating))?"start":"end")?"left":"right"):(C=g,q=v==="end"?"top":"bottom");const P=j-x.top-x.bottom,U=T-x.left-x.right,I=Ui(j-x[q],P),Q=Ui(T-x[C],U),Z=!a.middlewareData.shift;let k=I,R=Q;if((s=a.middlewareData.shift)!=null&&s.enabled.x&&(R=U),(o=a.middlewareData.shift)!=null&&o.enabled.y&&(k=P),Z&&!v){const ct=Ie(x.left,0),vt=Ie(x.right,0),ht=Ie(x.top,0),xt=Ie(x.bottom,0);S?R=T-2*(ct!==0||vt!==0?ct+vt:Ie(x.left,x.right)):k=j-2*(ht!==0||xt!==0?ht+xt:Ie(x.top,x.bottom))}await h({...a,availableWidth:R,availableHeight:k});const at=await d.getDimensions(m.floating);return T!==at.width||j!==at.height?{reset:{rects:!0}}:{}}}};function Ul(){return typeof window<"u"}function Ar(n){return vx(n)?(n.nodeName||"").toLowerCase():"#document"}function Je(n){var a;return(n==null||(a=n.ownerDocument)==null?void 0:a.defaultView)||window}function Rn(n){var a;return(a=(vx(n)?n.ownerDocument:n.document)||window.document)==null?void 0:a.documentElement}function vx(n){return Ul()?n instanceof Node||n instanceof Je(n).Node:!1}function bn(n){return Ul()?n instanceof Element||n instanceof Je(n).Element:!1}function Dn(n){return Ul()?n instanceof HTMLElement||n instanceof Je(n).HTMLElement:!1}function S0(n){return!Ul()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Je(n).ShadowRoot}const zS=new Set(["inline","contents"]);function Qs(n){const{overflow:a,overflowX:s,overflowY:o,display:u}=wn(n);return/auto|scroll|overlay|hidden|clip/.test(a+o+s)&&!zS.has(u)}const BS=new Set(["table","td","th"]);function VS(n){return BS.has(Ar(n))}const _S=[":popover-open",":modal"];function Hl(n){return _S.some(a=>{try{return n.matches(a)}catch{return!1}})}const US=["transform","translate","scale","rotate","perspective"],HS=["transform","translate","scale","rotate","perspective","filter"],PS=["paint","layout","strict","content"];function wp(n){const a=Sp(),s=bn(n)?wn(n):n;return US.some(o=>s[o]?s[o]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!a&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!a&&(s.filter?s.filter!=="none":!1)||HS.some(o=>(s.willChange||"").includes(o))||PS.some(o=>(s.contain||"").includes(o))}function GS(n){let a=Hi(n);for(;Dn(a)&&!wr(a);){if(wp(a))return a;if(Hl(a))return null;a=Hi(a)}return null}function Sp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const YS=new Set(["html","body","#document"]);function wr(n){return YS.has(Ar(n))}function wn(n){return Je(n).getComputedStyle(n)}function Pl(n){return bn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Hi(n){if(Ar(n)==="html")return n;const a=n.assignedSlot||n.parentNode||S0(n)&&n.host||Rn(n);return S0(a)?a.host:a}function bx(n){const a=Hi(n);return wr(a)?n.ownerDocument?n.ownerDocument.body:n.body:Dn(a)&&Qs(a)?a:bx(a)}function Us(n,a,s){var o;a===void 0&&(a=[]),s===void 0&&(s=!0);const u=bx(n),p=u===((o=n.ownerDocument)==null?void 0:o.body),d=Je(u);if(p){const m=Hd(d);return a.concat(d,d.visualViewport||[],Qs(u)?u:[],m&&s?Us(m):[])}return a.concat(u,Us(u,[],s))}function Hd(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function wx(n){const a=wn(n);let s=parseFloat(a.width)||0,o=parseFloat(a.height)||0;const u=Dn(n),p=u?n.offsetWidth:s,d=u?n.offsetHeight:o,m=Nl(s)!==p||Nl(o)!==d;return m&&(s=p,o=d),{width:s,height:o,$:m}}function Tp(n){return bn(n)?n:n.contextElement}function vr(n){const a=Tp(n);if(!Dn(a))return Ln(1);const s=a.getBoundingClientRect(),{width:o,height:u,$:p}=wx(a);let d=(p?Nl(s.width):s.width)/o,m=(p?Nl(s.height):s.height)/u;return(!d||!Number.isFinite(d))&&(d=1),(!m||!Number.isFinite(m))&&(m=1),{x:d,y:m}}const XS=Ln(0);function Sx(n){const a=Je(n);return!Sp()||!a.visualViewport?XS:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function KS(n,a,s){return a===void 0&&(a=!1),!s||a&&s!==Je(n)?!1:a}function Sa(n,a,s,o){a===void 0&&(a=!1),s===void 0&&(s=!1);const u=n.getBoundingClientRect(),p=Tp(n);let d=Ln(1);a&&(o?bn(o)&&(d=vr(o)):d=vr(n));const m=KS(p,s,o)?Sx(p):Ln(0);let h=(u.left+m.x)/d.x,f=(u.top+m.y)/d.y,x=u.width/d.x,g=u.height/d.y;if(p){const v=Je(p),S=o&&bn(o)?Je(o):o;let T=v,j=Hd(T);for(;j&&o&&S!==T;){const q=vr(j),C=j.getBoundingClientRect(),P=wn(j),U=C.left+(j.clientLeft+parseFloat(P.paddingLeft))*q.x,I=C.top+(j.clientTop+parseFloat(P.paddingTop))*q.y;h*=q.x,f*=q.y,x*=q.x,g*=q.y,h+=U,f+=I,T=Je(j),j=Hd(T)}}return Cl({width:x,height:g,x:h,y:f})}function Gl(n,a){const s=Pl(n).scrollLeft;return a?a.left+s:Sa(Rn(n)).left+s}function Tx(n,a){const s=n.getBoundingClientRect(),o=s.left+a.scrollLeft-Gl(n,s),u=s.top+a.scrollTop;return{x:o,y:u}}function QS(n){let{elements:a,rect:s,offsetParent:o,strategy:u}=n;const p=u==="fixed",d=Rn(o),m=a?Hl(a.floating):!1;if(o===d||m&&p)return s;let h={scrollLeft:0,scrollTop:0},f=Ln(1);const x=Ln(0),g=Dn(o);if((g||!g&&!p)&&((Ar(o)!=="body"||Qs(d))&&(h=Pl(o)),Dn(o))){const S=Sa(o);f=vr(o),x.x=S.x+o.clientLeft,x.y=S.y+o.clientTop}const v=d&&!g&&!p?Tx(d,h):Ln(0);return{width:s.width*f.x,height:s.height*f.y,x:s.x*f.x-h.scrollLeft*f.x+x.x+v.x,y:s.y*f.y-h.scrollTop*f.y+x.y+v.y}}function FS(n){return Array.from(n.getClientRects())}function IS(n){const a=Rn(n),s=Pl(n),o=n.ownerDocument.body,u=Ie(a.scrollWidth,a.clientWidth,o.scrollWidth,o.clientWidth),p=Ie(a.scrollHeight,a.clientHeight,o.scrollHeight,o.clientHeight);let d=-s.scrollLeft+Gl(n);const m=-s.scrollTop;return wn(o).direction==="rtl"&&(d+=Ie(a.clientWidth,o.clientWidth)-u),{width:u,height:p,x:d,y:m}}const T0=25;function ZS(n,a){const s=Je(n),o=Rn(n),u=s.visualViewport;let p=o.clientWidth,d=o.clientHeight,m=0,h=0;if(u){p=u.width,d=u.height;const x=Sp();(!x||x&&a==="fixed")&&(m=u.offsetLeft,h=u.offsetTop)}const f=Gl(o);if(f<=0){const x=o.ownerDocument,g=x.body,v=getComputedStyle(g),S=x.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,T=Math.abs(o.clientWidth-g.clientWidth-S);T<=T0&&(p-=T)}else f<=T0&&(p+=f);return{width:p,height:d,x:m,y:h}}const JS=new Set(["absolute","fixed"]);function $S(n,a){const s=Sa(n,!0,a==="fixed"),o=s.top+n.clientTop,u=s.left+n.clientLeft,p=Dn(n)?vr(n):Ln(1),d=n.clientWidth*p.x,m=n.clientHeight*p.y,h=u*p.x,f=o*p.y;return{width:d,height:m,x:h,y:f}}function j0(n,a,s){let o;if(a==="viewport")o=ZS(n,s);else if(a==="document")o=IS(Rn(n));else if(bn(a))o=$S(a,s);else{const u=Sx(n);o={x:a.x-u.x,y:a.y-u.y,width:a.width,height:a.height}}return Cl(o)}function jx(n,a){const s=Hi(n);return s===a||!bn(s)||wr(s)?!1:wn(s).position==="fixed"||jx(s,a)}function WS(n,a){const s=a.get(n);if(s)return s;let o=Us(n,[],!1).filter(m=>bn(m)&&Ar(m)!=="body"),u=null;const p=wn(n).position==="fixed";let d=p?Hi(n):n;for(;bn(d)&&!wr(d);){const m=wn(d),h=wp(d);!h&&m.position==="fixed"&&(u=null),(p?!h&&!u:!h&&m.position==="static"&&!!u&&JS.has(u.position)||Qs(d)&&!h&&jx(n,d))?o=o.filter(x=>x!==d):u=m,d=Hi(d)}return a.set(n,o),o}function t3(n){let{element:a,boundary:s,rootBoundary:o,strategy:u}=n;const d=[...s==="clippingAncestors"?Hl(a)?[]:WS(a,this._c):[].concat(s),o],m=d[0],h=d.reduce((f,x)=>{const g=j0(a,x,u);return f.top=Ie(g.top,f.top),f.right=Ui(g.right,f.right),f.bottom=Ui(g.bottom,f.bottom),f.left=Ie(g.left,f.left),f},j0(a,m,u));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function e3(n){const{width:a,height:s}=wx(n);return{width:a,height:s}}function n3(n,a,s){const o=Dn(a),u=Rn(a),p=s==="fixed",d=Sa(n,!0,p,a);let m={scrollLeft:0,scrollTop:0};const h=Ln(0);function f(){h.x=Gl(u)}if(o||!o&&!p)if((Ar(a)!=="body"||Qs(u))&&(m=Pl(a)),o){const S=Sa(a,!0,p,a);h.x=S.x+a.clientLeft,h.y=S.y+a.clientTop}else u&&f();p&&!o&&u&&f();const x=u&&!o&&!p?Tx(u,m):Ln(0),g=d.left+m.scrollLeft-h.x-x.x,v=d.top+m.scrollTop-h.y-x.y;return{x:g,y:v,width:d.width,height:d.height}}function hd(n){return wn(n).position==="static"}function O0(n,a){if(!Dn(n)||wn(n).position==="fixed")return null;if(a)return a(n);let s=n.offsetParent;return Rn(n)===s&&(s=s.ownerDocument.body),s}function Ox(n,a){const s=Je(n);if(Hl(n))return s;if(!Dn(n)){let u=Hi(n);for(;u&&!wr(u);){if(bn(u)&&!hd(u))return u;u=Hi(u)}return s}let o=O0(n,a);for(;o&&VS(o)&&hd(o);)o=O0(o,a);return o&&wr(o)&&hd(o)&&!wp(o)?s:o||GS(n)||s}const i3=async function(n){const a=this.getOffsetParent||Ox,s=this.getDimensions,o=await s(n.floating);return{reference:n3(n.reference,await a(n.floating),n.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function a3(n){return wn(n).direction==="rtl"}const r3={convertOffsetParentRelativeRectToViewportRelativeRect:QS,getDocumentElement:Rn,getClippingRect:t3,getOffsetParent:Ox,getElementRects:i3,getClientRects:FS,getDimensions:e3,getScale:vr,isElement:bn,isRTL:a3};function Ax(n,a){return n.x===a.x&&n.y===a.y&&n.width===a.width&&n.height===a.height}function s3(n,a){let s=null,o;const u=Rn(n);function p(){var m;clearTimeout(o),(m=s)==null||m.disconnect(),s=null}function d(m,h){m===void 0&&(m=!1),h===void 0&&(h=1),p();const f=n.getBoundingClientRect(),{left:x,top:g,width:v,height:S}=f;if(m||a(),!v||!S)return;const T=ml(g),j=ml(u.clientWidth-(x+v)),q=ml(u.clientHeight-(g+S)),C=ml(x),U={rootMargin:-T+"px "+-j+"px "+-q+"px "+-C+"px",threshold:Ie(0,Ui(1,h))||1};let I=!0;function Q(Z){const k=Z[0].intersectionRatio;if(k!==h){if(!I)return d();k?d(!1,k):o=setTimeout(()=>{d(!1,1e-7)},1e3)}k===1&&!Ax(f,n.getBoundingClientRect())&&d(),I=!1}try{s=new IntersectionObserver(Q,{...U,root:u.ownerDocument})}catch{s=new IntersectionObserver(Q,U)}s.observe(n)}return d(!0),p}function o3(n,a,s,o){o===void 0&&(o={});const{ancestorScroll:u=!0,ancestorResize:p=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,f=Tp(n),x=u||p?[...f?Us(f):[],...Us(a)]:[];x.forEach(C=>{u&&C.addEventListener("scroll",s,{passive:!0}),p&&C.addEventListener("resize",s)});const g=f&&m?s3(f,s):null;let v=-1,S=null;d&&(S=new ResizeObserver(C=>{let[P]=C;P&&P.target===f&&S&&(S.unobserve(a),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var U;(U=S)==null||U.observe(a)})),s()}),f&&!h&&S.observe(f),S.observe(a));let T,j=h?Sa(n):null;h&&q();function q(){const C=Sa(n);j&&!Ax(j,C)&&s(),j=C,T=requestAnimationFrame(q)}return s(),()=>{var C;x.forEach(P=>{u&&P.removeEventListener("scroll",s),p&&P.removeEventListener("resize",s)}),g==null||g(),(C=S)==null||C.disconnect(),S=null,h&&cancelAnimationFrame(T)}}const l3=MS,u3=qS,c3=CS,d3=RS,p3=kS,A0=ES,f3=DS,m3=(n,a,s)=>{const o=new Map,u={platform:r3,...s},p={...u.platform,_c:o};return NS(n,a,{...u,platform:p})};var h3=typeof document<"u",g3=function(){},Sl=h3?A.useLayoutEffect:g3;function kl(n,a){if(n===a)return!0;if(typeof n!=typeof a)return!1;if(typeof n=="function"&&n.toString()===a.toString())return!0;let s,o,u;if(n&&a&&typeof n=="object"){if(Array.isArray(n)){if(s=n.length,s!==a.length)return!1;for(o=s;o--!==0;)if(!kl(n[o],a[o]))return!1;return!0}if(u=Object.keys(n),s=u.length,s!==Object.keys(a).length)return!1;for(o=s;o--!==0;)if(!{}.hasOwnProperty.call(a,u[o]))return!1;for(o=s;o--!==0;){const p=u[o];if(!(p==="_owner"&&n.$$typeof)&&!kl(n[p],a[p]))return!1}return!0}return n!==n&&a!==a}function Nx(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function N0(n,a){const s=Nx(n);return Math.round(a*s)/s}function gd(n){const a=A.useRef(n);return Sl(()=>{a.current=n}),a}function x3(n){n===void 0&&(n={});const{placement:a="bottom",strategy:s="absolute",middleware:o=[],platform:u,elements:{reference:p,floating:d}={},transform:m=!0,whileElementsMounted:h,open:f}=n,[x,g]=A.useState({x:0,y:0,strategy:s,placement:a,middlewareData:{},isPositioned:!1}),[v,S]=A.useState(o);kl(v,o)||S(o);const[T,j]=A.useState(null),[q,C]=A.useState(null),P=A.useCallback(B=>{B!==Z.current&&(Z.current=B,j(B))},[]),U=A.useCallback(B=>{B!==k.current&&(k.current=B,C(B))},[]),I=p||T,Q=d||q,Z=A.useRef(null),k=A.useRef(null),R=A.useRef(x),at=h!=null,ct=gd(h),vt=gd(u),ht=gd(f),xt=A.useCallback(()=>{if(!Z.current||!k.current)return;const B={placement:a,strategy:s,middleware:v};vt.current&&(B.platform=vt.current),m3(Z.current,k.current,B).then(et=>{const st={...et,isPositioned:ht.current!==!1};yt.current&&!kl(R.current,st)&&(R.current=st,xp.flushSync(()=>{g(st)}))})},[v,a,s,vt,ht]);Sl(()=>{f===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,g(B=>({...B,isPositioned:!1})))},[f]);const yt=A.useRef(!1);Sl(()=>(yt.current=!0,()=>{yt.current=!1}),[]),Sl(()=>{if(I&&(Z.current=I),Q&&(k.current=Q),I&&Q){if(ct.current)return ct.current(I,Q,xt);xt()}},[I,Q,xt,ct,at]);const wt=A.useMemo(()=>({reference:Z,floating:k,setReference:P,setFloating:U}),[P,U]),L=A.useMemo(()=>({reference:I,floating:Q}),[I,Q]),H=A.useMemo(()=>{const B={position:s,left:0,top:0};if(!L.floating)return B;const et=N0(L.floating,x.x),st=N0(L.floating,x.y);return m?{...B,transform:"translate("+et+"px, "+st+"px)",...Nx(L.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:et,top:st}},[s,m,L.floating,x.x,x.y]);return A.useMemo(()=>({...x,update:xt,refs:wt,elements:L,floatingStyles:H}),[x,xt,wt,L,H])}const y3=n=>{function a(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:n,fn(s){const{element:o,padding:u}=typeof n=="function"?n(s):n;return o&&a(o)?o.current!=null?A0({element:o.current,padding:u}).fn(s):{}:o?A0({element:o,padding:u}).fn(s):{}}}},v3=(n,a)=>({...l3(n),options:[n,a]}),b3=(n,a)=>({...u3(n),options:[n,a]}),w3=(n,a)=>({...f3(n),options:[n,a]}),S3=(n,a)=>({...c3(n),options:[n,a]}),T3=(n,a)=>({...d3(n),options:[n,a]}),j3=(n,a)=>({...p3(n),options:[n,a]}),O3=(n,a)=>({...y3(n),options:[n,a]});var A3="Arrow",Ex=A.forwardRef((n,a)=>{const{children:s,width:o=10,height:u=5,...p}=n;return b.jsx(ja.svg,{...p,ref:a,width:o,height:u,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?s:b.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ex.displayName=A3;var N3=Ex;function E3(n){const[a,s]=A.useState(void 0);return Vs(()=>{if(n){s({width:n.offsetWidth,height:n.offsetHeight});const o=new ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const p=u[0];let d,m;if("borderBoxSize"in p){const h=p.borderBoxSize,f=Array.isArray(h)?h[0]:h;d=f.inlineSize,m=f.blockSize}else d=n.offsetWidth,m=n.offsetHeight;s({width:d,height:m})});return o.observe(n,{box:"border-box"}),()=>o.unobserve(n)}else s(void 0)},[n]),a}var Cx="Popper",[kx,Lx]=dx(Cx),[AN,Mx]=kx(Cx),qx="PopperAnchor",Dx=A.forwardRef((n,a)=>{const{__scopePopper:s,virtualRef:o,...u}=n,p=Mx(qx,s),d=A.useRef(null),m=Ta(a,d),h=A.useRef(null);return A.useEffect(()=>{const f=h.current;h.current=(o==null?void 0:o.current)||d.current,f!==h.current&&p.onAnchorChange(h.current)}),o?null:b.jsx(ja.div,{...u,ref:m})});Dx.displayName=qx;var jp="PopperContent",[C3,k3]=kx(jp),Rx=A.forwardRef((n,a)=>{var ot,ft,At,oe,ve,le;const{__scopePopper:s,side:o="bottom",sideOffset:u=0,align:p="center",alignOffset:d=0,arrowPadding:m=0,avoidCollisions:h=!0,collisionBoundary:f=[],collisionPadding:x=0,sticky:g="partial",hideWhenDetached:v=!1,updatePositionStrategy:S="optimized",onPlaced:T,...j}=n,q=Mx(jp,s),[C,P]=A.useState(null),U=Ta(a,Sn=>P(Sn)),[I,Q]=A.useState(null),Z=E3(I),k=(Z==null?void 0:Z.width)??0,R=(Z==null?void 0:Z.height)??0,at=o+(p!=="center"?"-"+p:""),ct=typeof x=="number"?x:{top:0,right:0,bottom:0,left:0,...x},vt=Array.isArray(f)?f:[f],ht=vt.length>0,xt={padding:ct,boundary:vt.filter(M3),altBoundary:ht},{refs:yt,floatingStyles:wt,placement:L,isPositioned:H,middlewareData:B}=x3({strategy:"fixed",placement:at,whileElementsMounted:(...Sn)=>o3(...Sn,{animationFrame:S==="always"}),elements:{reference:q.anchor},middleware:[v3({mainAxis:u+R,alignmentAxis:d}),h&&b3({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?w3():void 0,...xt}),h&&S3({...xt}),T3({...xt,apply:({elements:Sn,rects:Ce,availableWidth:Xi,availableHeight:ui})=>{const{width:zn,height:Ki}=Ce.reference,ue=Sn.floating.style;ue.setProperty("--radix-popper-available-width",`${Xi}px`),ue.setProperty("--radix-popper-available-height",`${ui}px`),ue.setProperty("--radix-popper-anchor-width",`${zn}px`),ue.setProperty("--radix-popper-anchor-height",`${Ki}px`)}}),I&&O3({element:I,padding:m}),q3({arrowWidth:k,arrowHeight:R}),v&&j3({strategy:"referenceHidden",...xt})]}),[et,st]=Vx(L),N=_l(T);Vs(()=>{H&&(N==null||N())},[H,N]);const X=(ot=B.arrow)==null?void 0:ot.x,Y=(ft=B.arrow)==null?void 0:ft.y,J=((At=B.arrow)==null?void 0:At.centerOffset)!==0,[W,lt]=A.useState();return Vs(()=>{C&&lt(window.getComputedStyle(C).zIndex)},[C]),b.jsx("div",{ref:yt.setFloating,"data-radix-popper-content-wrapper":"",style:{...wt,transform:H?wt.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:W,"--radix-popper-transform-origin":[(oe=B.transformOrigin)==null?void 0:oe.x,(ve=B.transformOrigin)==null?void 0:ve.y].join(" "),...((le=B.hide)==null?void 0:le.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:b.jsx(C3,{scope:s,placedSide:et,onArrowChange:Q,arrowX:X,arrowY:Y,shouldHideArrow:J,children:b.jsx(ja.div,{"data-side":et,"data-align":st,...j,ref:U,style:{...j.style,animation:H?void 0:"none"}})})})});Rx.displayName=jp;var zx="PopperArrow",L3={top:"bottom",right:"left",bottom:"top",left:"right"},Bx=A.forwardRef(function(a,s){const{__scopePopper:o,...u}=a,p=k3(zx,o),d=L3[p.placedSide];return b.jsx("span",{ref:p.onArrowChange,style:{position:"absolute",left:p.arrowX,top:p.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[p.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[p.placedSide],visibility:p.shouldHideArrow?"hidden":void 0},children:b.jsx(N3,{...u,ref:s,style:{...u.style,display:"block"}})})});Bx.displayName=zx;function M3(n){return n!==null}var q3=n=>({name:"transformOrigin",options:n,fn(a){var q,C,P;const{placement:s,rects:o,middlewareData:u}=a,d=((q=u.arrow)==null?void 0:q.centerOffset)!==0,m=d?0:n.arrowWidth,h=d?0:n.arrowHeight,[f,x]=Vx(s),g={start:"0%",center:"50%",end:"100%"}[x],v=(((C=u.arrow)==null?void 0:C.x)??0)+m/2,S=(((P=u.arrow)==null?void 0:P.y)??0)+h/2;let T="",j="";return f==="bottom"?(T=d?g:`${v}px`,j=`${-h}px`):f==="top"?(T=d?g:`${v}px`,j=`${o.floating.height+h}px`):f==="right"?(T=`${-h}px`,j=d?g:`${S}px`):f==="left"&&(T=`${o.floating.width+h}px`,j=d?g:`${S}px`),{data:{x:T,y:j}}}});function Vx(n){const[a,s="center"]=n.split("-");return[a,s]}var D3=Dx,R3=Rx,z3=Bx;function B3(n,a){return A.useReducer((s,o)=>a[s][o]??s,n)}var _x=n=>{const{present:a,children:s}=n,o=V3(a),u=typeof s=="function"?s({present:o.isPresent}):A.Children.only(s),p=Ta(o.ref,_3(u));return typeof s=="function"||o.isPresent?A.cloneElement(u,{ref:p}):null};_x.displayName="Presence";function V3(n){const[a,s]=A.useState(),o=A.useRef(null),u=A.useRef(n),p=A.useRef("none"),d=n?"mounted":"unmounted",[m,h]=B3(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return A.useEffect(()=>{const f=hl(o.current);p.current=m==="mounted"?f:"none"},[m]),Vs(()=>{const f=o.current,x=u.current;if(x!==n){const v=p.current,S=hl(f);n?h("MOUNT"):S==="none"||(f==null?void 0:f.display)==="none"?h("UNMOUNT"):h(x&&v!==S?"ANIMATION_OUT":"UNMOUNT"),u.current=n}},[n,h]),Vs(()=>{if(a){let f;const x=a.ownerDocument.defaultView??window,g=S=>{const j=hl(o.current).includes(CSS.escape(S.animationName));if(S.target===a&&j&&(h("ANIMATION_END"),!u.current)){const q=a.style.animationFillMode;a.style.animationFillMode="forwards",f=x.setTimeout(()=>{a.style.animationFillMode==="forwards"&&(a.style.animationFillMode=q)})}},v=S=>{S.target===a&&(p.current=hl(o.current))};return a.addEventListener("animationstart",v),a.addEventListener("animationcancel",g),a.addEventListener("animationend",g),()=>{x.clearTimeout(f),a.removeEventListener("animationstart",v),a.removeEventListener("animationcancel",g),a.removeEventListener("animationend",g)}}else h("ANIMATION_END")},[a,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:A.useCallback(f=>{o.current=f?getComputedStyle(f):null,s(f)},[])}}function hl(n){return(n==null?void 0:n.animationName)||"none"}function _3(n){var o,u;let a=(o=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:o.get,s=a&&"isReactWarning"in a&&a.isReactWarning;return s?n.ref:(a=(u=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:u.get,s=a&&"isReactWarning"in a&&a.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var U3=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),H3="VisuallyHidden",Ux=A.forwardRef((n,a)=>b.jsx(ja.span,{...n,ref:a,style:{...U3,...n.style}}));Ux.displayName=H3;var P3=Ux,[Yl]=dx("Tooltip",[Lx]),Op=Lx(),Hx="TooltipProvider",G3=700,E0="tooltip.open",[Y3,Px]=Yl(Hx),Gx=n=>{const{__scopeTooltip:a,delayDuration:s=G3,skipDelayDuration:o=300,disableHoverableContent:u=!1,children:p}=n,d=A.useRef(!0),m=A.useRef(!1),h=A.useRef(0);return A.useEffect(()=>{const f=h.current;return()=>window.clearTimeout(f)},[]),b.jsx(Y3,{scope:a,isOpenDelayedRef:d,delayDuration:s,onOpen:A.useCallback(()=>{window.clearTimeout(h.current),d.current=!1},[]),onClose:A.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>d.current=!0,o)},[o]),isPointerInTransitRef:m,onPointerInTransitChange:A.useCallback(f=>{m.current=f},[]),disableHoverableContent:u,children:p})};Gx.displayName=Hx;var Yx="Tooltip",[NN,Xl]=Yl(Yx),Pd="TooltipTrigger",X3=A.forwardRef((n,a)=>{const{__scopeTooltip:s,...o}=n,u=Xl(Pd,s),p=Px(Pd,s),d=Op(s),m=A.useRef(null),h=Ta(a,m,u.onTriggerChange),f=A.useRef(!1),x=A.useRef(!1),g=A.useCallback(()=>f.current=!1,[]);return A.useEffect(()=>()=>document.removeEventListener("pointerup",g),[g]),b.jsx(D3,{asChild:!0,...d,children:b.jsx(ja.button,{"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute,...o,ref:h,onPointerMove:ai(n.onPointerMove,v=>{v.pointerType!=="touch"&&!x.current&&!p.isPointerInTransitRef.current&&(u.onTriggerEnter(),x.current=!0)}),onPointerLeave:ai(n.onPointerLeave,()=>{u.onTriggerLeave(),x.current=!1}),onPointerDown:ai(n.onPointerDown,()=>{u.open&&u.onClose(),f.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:ai(n.onFocus,()=>{f.current||u.onOpen()}),onBlur:ai(n.onBlur,u.onClose),onClick:ai(n.onClick,u.onClose)})})});X3.displayName=Pd;var K3="TooltipPortal",[EN,Q3]=Yl(K3,{forceMount:void 0}),Sr="TooltipContent",F3=A.forwardRef((n,a)=>{const s=Q3(Sr,n.__scopeTooltip),{forceMount:o=s.forceMount,side:u="top",...p}=n,d=Xl(Sr,n.__scopeTooltip);return b.jsx(_x,{present:o||d.open,children:d.disableHoverableContent?b.jsx(Xx,{side:u,...p,ref:a}):b.jsx(I3,{side:u,...p,ref:a})})}),I3=A.forwardRef((n,a)=>{const s=Xl(Sr,n.__scopeTooltip),o=Px(Sr,n.__scopeTooltip),u=A.useRef(null),p=Ta(a,u),[d,m]=A.useState(null),{trigger:h,onClose:f}=s,x=u.current,{onPointerInTransitChange:g}=o,v=A.useCallback(()=>{m(null),g(!1)},[g]),S=A.useCallback((T,j)=>{const q=T.currentTarget,C={x:T.clientX,y:T.clientY},P=tT(C,q.getBoundingClientRect()),U=eT(C,P),I=nT(j.getBoundingClientRect()),Q=aT([...U,...I]);m(Q),g(!0)},[g]);return A.useEffect(()=>()=>v(),[v]),A.useEffect(()=>{if(h&&x){const T=q=>S(q,x),j=q=>S(q,h);return h.addEventListener("pointerleave",T),x.addEventListener("pointerleave",j),()=>{h.removeEventListener("pointerleave",T),x.removeEventListener("pointerleave",j)}}},[h,x,S,v]),A.useEffect(()=>{if(d){const T=j=>{const q=j.target,C={x:j.clientX,y:j.clientY},P=(h==null?void 0:h.contains(q))||(x==null?void 0:x.contains(q)),U=!iT(C,d);P?v():U&&(v(),f())};return document.addEventListener("pointermove",T),()=>document.removeEventListener("pointermove",T)}},[h,x,d,f,v]),b.jsx(Xx,{...n,ref:p})}),[Z3,J3]=Yl(Yx,{isInside:!1}),$3=nS("TooltipContent"),Xx=A.forwardRef((n,a)=>{const{__scopeTooltip:s,children:o,"aria-label":u,onEscapeKeyDown:p,onPointerDownOutside:d,...m}=n,h=Xl(Sr,s),f=Op(s),{onClose:x}=h;return A.useEffect(()=>(document.addEventListener(E0,x),()=>document.removeEventListener(E0,x)),[x]),A.useEffect(()=>{if(h.trigger){const g=v=>{const S=v.target;S!=null&&S.contains(h.trigger)&&x()};return window.addEventListener("scroll",g,{capture:!0}),()=>window.removeEventListener("scroll",g,{capture:!0})}},[h.trigger,x]),b.jsx(hx,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:p,onPointerDownOutside:d,onFocusOutside:g=>g.preventDefault(),onDismiss:x,children:b.jsxs(R3,{"data-state":h.stateAttribute,...f,...m,ref:a,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[b.jsx($3,{children:o}),b.jsx(Z3,{scope:s,isInside:!0,children:b.jsx(P3,{id:h.contentId,role:"tooltip",children:u||o})})]})})});F3.displayName=Sr;var Kx="TooltipArrow",W3=A.forwardRef((n,a)=>{const{__scopeTooltip:s,...o}=n,u=Op(s);return J3(Kx,s).isInside?null:b.jsx(z3,{...u,...o,ref:a})});W3.displayName=Kx;function tT(n,a){const s=Math.abs(a.top-n.y),o=Math.abs(a.bottom-n.y),u=Math.abs(a.right-n.x),p=Math.abs(a.left-n.x);switch(Math.min(s,o,u,p)){case p:return"left";case u:return"right";case s:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function eT(n,a,s=5){const o=[];switch(a){case"top":o.push({x:n.x-s,y:n.y+s},{x:n.x+s,y:n.y+s});break;case"bottom":o.push({x:n.x-s,y:n.y-s},{x:n.x+s,y:n.y-s});break;case"left":o.push({x:n.x+s,y:n.y-s},{x:n.x+s,y:n.y+s});break;case"right":o.push({x:n.x-s,y:n.y-s},{x:n.x-s,y:n.y+s});break}return o}function nT(n){const{top:a,right:s,bottom:o,left:u}=n;return[{x:u,y:a},{x:s,y:a},{x:s,y:o},{x:u,y:o}]}function iT(n,a){const{x:s,y:o}=n;let u=!1;for(let p=0,d=a.length-1;p<a.length;d=p++){const m=a[p],h=a[d],f=m.x,x=m.y,g=h.x,v=h.y;x>o!=v>o&&s<(g-f)*(o-x)/(v-x)+f&&(u=!u)}return u}function aT(n){const a=n.slice();return a.sort((s,o)=>s.x<o.x?-1:s.x>o.x?1:s.y<o.y?-1:s.y>o.y?1:0),rT(a)}function rT(n){if(n.length<=1)return n.slice();const a=[];for(let o=0;o<n.length;o++){const u=n[o];for(;a.length>=2;){const p=a[a.length-1],d=a[a.length-2];if((p.x-d.x)*(u.y-d.y)>=(p.y-d.y)*(u.x-d.x))a.pop();else break}a.push(u)}a.pop();const s=[];for(let o=n.length-1;o>=0;o--){const u=n[o];for(;s.length>=2;){const p=s[s.length-1],d=s[s.length-2];if((p.x-d.x)*(u.y-d.y)>=(p.y-d.y)*(u.x-d.x))s.pop();else break}s.push(u)}return s.pop(),a.length===1&&s.length===1&&a[0].x===s[0].x&&a[0].y===s[0].y?a:a.concat(s)}var sT=Gx;function Qx(n){var a,s,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(a=0;a<u;a++)n[a]&&(s=Qx(n[a]))&&(o&&(o+=" "),o+=s)}else for(s in n)n[s]&&(o&&(o+=" "),o+=s);return o}function Fx(){for(var n,a,s=0,o="",u=arguments.length;s<u;s++)(n=arguments[s])&&(a=Qx(n))&&(o&&(o+=" "),o+=a);return o}const Ap="-",oT=n=>{const a=uT(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:o}=n;return{getClassGroupId:d=>{const m=d.split(Ap);return m[0]===""&&m.length!==1&&m.shift(),Ix(m,a)||lT(d)},getConflictingClassGroupIds:(d,m)=>{const h=s[d]||[];return m&&o[d]?[...h,...o[d]]:h}}},Ix=(n,a)=>{var d;if(n.length===0)return a.classGroupId;const s=n[0],o=a.nextPart.get(s),u=o?Ix(n.slice(1),o):void 0;if(u)return u;if(a.validators.length===0)return;const p=n.join(Ap);return(d=a.validators.find(({validator:m})=>m(p)))==null?void 0:d.classGroupId},C0=/^\[(.+)\]$/,lT=n=>{if(C0.test(n)){const a=C0.exec(n)[1],s=a==null?void 0:a.substring(0,a.indexOf(":"));if(s)return"arbitrary.."+s}},uT=n=>{const{theme:a,classGroups:s}=n,o={nextPart:new Map,validators:[]};for(const u in s)Gd(s[u],o,u,a);return o},Gd=(n,a,s,o)=>{n.forEach(u=>{if(typeof u=="string"){const p=u===""?a:k0(a,u);p.classGroupId=s;return}if(typeof u=="function"){if(cT(u)){Gd(u(o),a,s,o);return}a.validators.push({validator:u,classGroupId:s});return}Object.entries(u).forEach(([p,d])=>{Gd(d,k0(a,p),s,o)})})},k0=(n,a)=>{let s=n;return a.split(Ap).forEach(o=>{s.nextPart.has(o)||s.nextPart.set(o,{nextPart:new Map,validators:[]}),s=s.nextPart.get(o)}),s},cT=n=>n.isThemeGetter,dT=n=>{if(n<1)return{get:()=>{},set:()=>{}};let a=0,s=new Map,o=new Map;const u=(p,d)=>{s.set(p,d),a++,a>n&&(a=0,o=s,s=new Map)};return{get(p){let d=s.get(p);if(d!==void 0)return d;if((d=o.get(p))!==void 0)return u(p,d),d},set(p,d){s.has(p)?s.set(p,d):u(p,d)}}},Yd="!",Xd=":",pT=Xd.length,fT=n=>{const{prefix:a,experimentalParseClassName:s}=n;let o=u=>{const p=[];let d=0,m=0,h=0,f;for(let T=0;T<u.length;T++){let j=u[T];if(d===0&&m===0){if(j===Xd){p.push(u.slice(h,T)),h=T+pT;continue}if(j==="/"){f=T;continue}}j==="["?d++:j==="]"?d--:j==="("?m++:j===")"&&m--}const x=p.length===0?u:u.substring(h),g=mT(x),v=g!==x,S=f&&f>h?f-h:void 0;return{modifiers:p,hasImportantModifier:v,baseClassName:g,maybePostfixModifierPosition:S}};if(a){const u=a+Xd,p=o;o=d=>d.startsWith(u)?p(d.substring(u.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(s){const u=o;o=p=>s({className:p,parseClassName:u})}return o},mT=n=>n.endsWith(Yd)?n.substring(0,n.length-1):n.startsWith(Yd)?n.substring(1):n,hT=n=>{const a=Object.fromEntries(n.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;const u=[];let p=[];return o.forEach(d=>{d[0]==="["||a[d]?(u.push(...p.sort(),d),p=[]):p.push(d)}),u.push(...p.sort()),u}},gT=n=>({cache:dT(n.cacheSize),parseClassName:fT(n),sortModifiers:hT(n),...oT(n)}),xT=/\s+/,yT=(n,a)=>{const{parseClassName:s,getClassGroupId:o,getConflictingClassGroupIds:u,sortModifiers:p}=a,d=[],m=n.trim().split(xT);let h="";for(let f=m.length-1;f>=0;f-=1){const x=m[f],{isExternal:g,modifiers:v,hasImportantModifier:S,baseClassName:T,maybePostfixModifierPosition:j}=s(x);if(g){h=x+(h.length>0?" "+h:h);continue}let q=!!j,C=o(q?T.substring(0,j):T);if(!C){if(!q){h=x+(h.length>0?" "+h:h);continue}if(C=o(T),!C){h=x+(h.length>0?" "+h:h);continue}q=!1}const P=p(v).join(":"),U=S?P+Yd:P,I=U+C;if(d.includes(I))continue;d.push(I);const Q=u(C,q);for(let Z=0;Z<Q.length;++Z){const k=Q[Z];d.push(U+k)}h=x+(h.length>0?" "+h:h)}return h};function vT(){let n=0,a,s,o="";for(;n<arguments.length;)(a=arguments[n++])&&(s=Zx(a))&&(o&&(o+=" "),o+=s);return o}const Zx=n=>{if(typeof n=="string")return n;let a,s="";for(let o=0;o<n.length;o++)n[o]&&(a=Zx(n[o]))&&(s&&(s+=" "),s+=a);return s};function bT(n,...a){let s,o,u,p=d;function d(h){const f=a.reduce((x,g)=>g(x),n());return s=gT(f),o=s.cache.get,u=s.cache.set,p=m,m(h)}function m(h){const f=o(h);if(f)return f;const x=yT(h,s);return u(h,x),x}return function(){return p(vT.apply(null,arguments))}}const re=n=>{const a=s=>s[n]||[];return a.isThemeGetter=!0,a},Jx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,$x=/^\((?:(\w[\w-]*):)?(.+)\)$/i,wT=/^\d+\/\d+$/,ST=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,TT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,OT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,AT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pr=n=>wT.test(n),Tt=n=>!!n&&!Number.isNaN(Number(n)),Bi=n=>!!n&&Number.isInteger(Number(n)),xd=n=>n.endsWith("%")&&Tt(n.slice(0,-1)),ni=n=>ST.test(n),NT=()=>!0,ET=n=>TT.test(n)&&!jT.test(n),Wx=()=>!1,CT=n=>OT.test(n),kT=n=>AT.test(n),LT=n=>!nt(n)&&!it(n),MT=n=>Nr(n,ny,Wx),nt=n=>Jx.test(n),ha=n=>Nr(n,iy,ET),yd=n=>Nr(n,BT,Tt),L0=n=>Nr(n,ty,Wx),qT=n=>Nr(n,ey,kT),gl=n=>Nr(n,ay,CT),it=n=>$x.test(n),Es=n=>Er(n,iy),DT=n=>Er(n,VT),M0=n=>Er(n,ty),RT=n=>Er(n,ny),zT=n=>Er(n,ey),xl=n=>Er(n,ay,!0),Nr=(n,a,s)=>{const o=Jx.exec(n);return o?o[1]?a(o[1]):s(o[2]):!1},Er=(n,a,s=!1)=>{const o=$x.exec(n);return o?o[1]?a(o[1]):s:!1},ty=n=>n==="position"||n==="percentage",ey=n=>n==="image"||n==="url",ny=n=>n==="length"||n==="size"||n==="bg-size",iy=n=>n==="length",BT=n=>n==="number",VT=n=>n==="family-name",ay=n=>n==="shadow",_T=()=>{const n=re("color"),a=re("font"),s=re("text"),o=re("font-weight"),u=re("tracking"),p=re("leading"),d=re("breakpoint"),m=re("container"),h=re("spacing"),f=re("radius"),x=re("shadow"),g=re("inset-shadow"),v=re("text-shadow"),S=re("drop-shadow"),T=re("blur"),j=re("perspective"),q=re("aspect"),C=re("ease"),P=re("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Q=()=>[...I(),it,nt],Z=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],R=()=>[it,nt,h],at=()=>[pr,"full","auto",...R()],ct=()=>[Bi,"none","subgrid",it,nt],vt=()=>["auto",{span:["full",Bi,it,nt]},Bi,it,nt],ht=()=>[Bi,"auto",it,nt],xt=()=>["auto","min","max","fr",it,nt],yt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],wt=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...R()],H=()=>[pr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],B=()=>[n,it,nt],et=()=>[...I(),M0,L0,{position:[it,nt]}],st=()=>["no-repeat",{repeat:["","x","y","space","round"]}],N=()=>["auto","cover","contain",RT,MT,{size:[it,nt]}],X=()=>[xd,Es,ha],Y=()=>["","none","full",f,it,nt],J=()=>["",Tt,Es,ha],W=()=>["solid","dashed","dotted","double"],lt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ot=()=>[Tt,xd,M0,L0],ft=()=>["","none",T,it,nt],At=()=>["none",Tt,it,nt],oe=()=>["none",Tt,it,nt],ve=()=>[Tt,it,nt],le=()=>[pr,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ni],breakpoint:[ni],color:[NT],container:[ni],"drop-shadow":[ni],ease:["in","out","in-out"],font:[LT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ni],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ni],shadow:[ni],spacing:["px",Tt],text:[ni],"text-shadow":[ni],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",pr,nt,it,q]}],container:["container"],columns:[{columns:[Tt,nt,it,m]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Q()}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:at()}],"inset-x":[{"inset-x":at()}],"inset-y":[{"inset-y":at()}],start:[{start:at()}],end:[{end:at()}],top:[{top:at()}],right:[{right:at()}],bottom:[{bottom:at()}],left:[{left:at()}],visibility:["visible","invisible","collapse"],z:[{z:[Bi,"auto",it,nt]}],basis:[{basis:[pr,"full","auto",m,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Tt,pr,"auto","initial","none",nt]}],grow:[{grow:["",Tt,it,nt]}],shrink:[{shrink:["",Tt,it,nt]}],order:[{order:[Bi,"first","last","none",it,nt]}],"grid-cols":[{"grid-cols":ct()}],"col-start-end":[{col:vt()}],"col-start":[{"col-start":ht()}],"col-end":[{"col-end":ht()}],"grid-rows":[{"grid-rows":ct()}],"row-start-end":[{row:vt()}],"row-start":[{"row-start":ht()}],"row-end":[{"row-end":ht()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":xt()}],"auto-rows":[{"auto-rows":xt()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...yt(),"normal"]}],"justify-items":[{"justify-items":[...wt(),"normal"]}],"justify-self":[{"justify-self":["auto",...wt()]}],"align-content":[{content:["normal",...yt()]}],"align-items":[{items:[...wt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...wt(),{baseline:["","last"]}]}],"place-content":[{"place-content":yt()}],"place-items":[{"place-items":[...wt(),"baseline"]}],"place-self":[{"place-self":["auto",...wt()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:H()}],w:[{w:[m,"screen",...H()]}],"min-w":[{"min-w":[m,"screen","none",...H()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[d]},...H()]}],h:[{h:["screen","lh",...H()]}],"min-h":[{"min-h":["screen","lh","none",...H()]}],"max-h":[{"max-h":["screen","lh",...H()]}],"font-size":[{text:["base",s,Es,ha]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,it,yd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",xd,nt]}],"font-family":[{font:[DT,nt,a]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,it,nt]}],"line-clamp":[{"line-clamp":[Tt,"none",it,yd]}],leading:[{leading:[p,...R()]}],"list-image":[{"list-image":["none",it,nt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",it,nt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:[Tt,"from-font","auto",it,ha]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[Tt,"auto",it,nt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",it,nt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",it,nt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:et()}],"bg-repeat":[{bg:st()}],"bg-size":[{bg:N()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Bi,it,nt],radial:["",it,nt],conic:[Bi,it,nt]},zT,qT]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:X()}],"gradient-via-pos":[{via:X()}],"gradient-to-pos":[{to:X()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:Y()}],"rounded-s":[{"rounded-s":Y()}],"rounded-e":[{"rounded-e":Y()}],"rounded-t":[{"rounded-t":Y()}],"rounded-r":[{"rounded-r":Y()}],"rounded-b":[{"rounded-b":Y()}],"rounded-l":[{"rounded-l":Y()}],"rounded-ss":[{"rounded-ss":Y()}],"rounded-se":[{"rounded-se":Y()}],"rounded-ee":[{"rounded-ee":Y()}],"rounded-es":[{"rounded-es":Y()}],"rounded-tl":[{"rounded-tl":Y()}],"rounded-tr":[{"rounded-tr":Y()}],"rounded-br":[{"rounded-br":Y()}],"rounded-bl":[{"rounded-bl":Y()}],"border-w":[{border:J()}],"border-w-x":[{"border-x":J()}],"border-w-y":[{"border-y":J()}],"border-w-s":[{"border-s":J()}],"border-w-e":[{"border-e":J()}],"border-w-t":[{"border-t":J()}],"border-w-r":[{"border-r":J()}],"border-w-b":[{"border-b":J()}],"border-w-l":[{"border-l":J()}],"divide-x":[{"divide-x":J()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":J()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],"divide-style":[{divide:[...W(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...W(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Tt,it,nt]}],"outline-w":[{outline:["",Tt,Es,ha]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",x,xl,gl]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",g,xl,gl]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[Tt,ha]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":J()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",v,xl,gl]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[Tt,it,nt]}],"mix-blend":[{"mix-blend":[...lt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":lt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Tt]}],"mask-image-linear-from-pos":[{"mask-linear-from":ot()}],"mask-image-linear-to-pos":[{"mask-linear-to":ot()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":ot()}],"mask-image-t-to-pos":[{"mask-t-to":ot()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":ot()}],"mask-image-r-to-pos":[{"mask-r-to":ot()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":ot()}],"mask-image-b-to-pos":[{"mask-b-to":ot()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":ot()}],"mask-image-l-to-pos":[{"mask-l-to":ot()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":ot()}],"mask-image-x-to-pos":[{"mask-x-to":ot()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":ot()}],"mask-image-y-to-pos":[{"mask-y-to":ot()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[it,nt]}],"mask-image-radial-from-pos":[{"mask-radial-from":ot()}],"mask-image-radial-to-pos":[{"mask-radial-to":ot()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":I()}],"mask-image-conic-pos":[{"mask-conic":[Tt]}],"mask-image-conic-from-pos":[{"mask-conic-from":ot()}],"mask-image-conic-to-pos":[{"mask-conic-to":ot()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:et()}],"mask-repeat":[{mask:st()}],"mask-size":[{mask:N()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",it,nt]}],filter:[{filter:["","none",it,nt]}],blur:[{blur:ft()}],brightness:[{brightness:[Tt,it,nt]}],contrast:[{contrast:[Tt,it,nt]}],"drop-shadow":[{"drop-shadow":["","none",S,xl,gl]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",Tt,it,nt]}],"hue-rotate":[{"hue-rotate":[Tt,it,nt]}],invert:[{invert:["",Tt,it,nt]}],saturate:[{saturate:[Tt,it,nt]}],sepia:[{sepia:["",Tt,it,nt]}],"backdrop-filter":[{"backdrop-filter":["","none",it,nt]}],"backdrop-blur":[{"backdrop-blur":ft()}],"backdrop-brightness":[{"backdrop-brightness":[Tt,it,nt]}],"backdrop-contrast":[{"backdrop-contrast":[Tt,it,nt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Tt,it,nt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Tt,it,nt]}],"backdrop-invert":[{"backdrop-invert":["",Tt,it,nt]}],"backdrop-opacity":[{"backdrop-opacity":[Tt,it,nt]}],"backdrop-saturate":[{"backdrop-saturate":[Tt,it,nt]}],"backdrop-sepia":[{"backdrop-sepia":["",Tt,it,nt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",it,nt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Tt,"initial",it,nt]}],ease:[{ease:["linear","initial",C,it,nt]}],delay:[{delay:[Tt,it,nt]}],animate:[{animate:["none",P,it,nt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[j,it,nt]}],"perspective-origin":[{"perspective-origin":Q()}],rotate:[{rotate:At()}],"rotate-x":[{"rotate-x":At()}],"rotate-y":[{"rotate-y":At()}],"rotate-z":[{"rotate-z":At()}],scale:[{scale:oe()}],"scale-x":[{"scale-x":oe()}],"scale-y":[{"scale-y":oe()}],"scale-z":[{"scale-z":oe()}],"scale-3d":["scale-3d"],skew:[{skew:ve()}],"skew-x":[{"skew-x":ve()}],"skew-y":[{"skew-y":ve()}],transform:[{transform:[it,nt,"","none","gpu","cpu"]}],"transform-origin":[{origin:Q()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:le()}],"translate-x":[{"translate-x":le()}],"translate-y":[{"translate-y":le()}],"translate-z":[{"translate-z":le()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",it,nt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",it,nt]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[Tt,Es,ha,yd]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},UT=bT(_T);function se(...n){return UT(Fx(n))}function HT({delayDuration:n=0,...a}){return b.jsx(sT,{"data-loc":"client/src/components/ui/tooltip.tsx:11","data-slot":"tooltip-provider",delayDuration:n,...a})}const q0=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,D0=Fx,PT=(n,a)=>s=>{var o;if((a==null?void 0:a.variants)==null)return D0(n,s==null?void 0:s.class,s==null?void 0:s.className);const{variants:u,defaultVariants:p}=a,d=Object.keys(u).map(f=>{const x=s==null?void 0:s[f],g=p==null?void 0:p[f];if(x===null)return null;const v=q0(x)||q0(g);return u[f][v]}),m=s&&Object.entries(s).reduce((f,x)=>{let[g,v]=x;return v===void 0||(f[g]=v),f},{}),h=a==null||(o=a.compoundVariants)===null||o===void 0?void 0:o.reduce((f,x)=>{let{class:g,className:v,...S}=x;return Object.entries(S).every(T=>{let[j,q]=T;return Array.isArray(q)?q.includes({...p,...m}[j]):{...p,...m}[j]===q})?[...f,g,v]:f},[]);return D0(n,d,h,s==null?void 0:s.class,s==null?void 0:s.className)},GT=PT("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function ii({className:n,variant:a,size:s,asChild:o=!1,...u}){const p=o?tS:"button";return b.jsx(p,{"data-loc":"client/src/components/ui/button.tsx:52","data-slot":"button",className:se(GT({variant:a,size:s,className:n})),...u})}function YT({className:n,...a}){return b.jsx("div",{"data-loc":"client/src/components/ui/card.tsx:7","data-slot":"card",className:se("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...a})}function XT({className:n,...a}){return b.jsx("div",{"data-loc":"client/src/components/ui/card.tsx:66","data-slot":"card-content",className:se("px-6",n),...a})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ry=(...n)=>n.filter((a,s,o)=>!!a&&o.indexOf(a)===s).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=A.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:u="",children:p,iconNode:d,...m},h)=>A.createElement("svg",{ref:h,...QT,width:a,height:a,stroke:n,strokeWidth:o?Number(s)*24/Number(a):s,className:ry("lucide",u),...m},[...d.map(([f,x])=>A.createElement(f,x)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(n,a)=>{const s=A.forwardRef(({className:o,...u},p)=>A.createElement(FT,{ref:p,iconNode:a,className:ry(`lucide-${KT(n)}`,o),...u}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=$t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=$t("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=$t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=$t("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=$t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=$t("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=$t("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=$t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=$t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=$t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=$t("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=$t("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=$t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=$t("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=$t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=$t("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=$t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=$t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=$t("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=$t("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function sj(n,a){if(n instanceof RegExp)return{keys:!1,pattern:n};var s,o,u,p,d=[],m="",h=n.split("/");for(h[0]||h.shift();u=h.shift();)s=u[0],s==="*"?(d.push(s),m+=u[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(o=u.indexOf("?",1),p=u.indexOf(".",1),d.push(u.substring(1,~o?o:~p?p:u.length)),m+=~o&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(m+=(~o?"?":"")+"\\"+u.substring(p))):m+="/"+u;return{keys:d,pattern:new RegExp("^"+m+(a?"(?=$|/)":"/?$"),"i")}}var bd={exports:{}},wd={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function oj(){if(V0)return wd;V0=1;var n=Vl();function a(g,v){return g===v&&(g!==0||1/g===1/v)||g!==g&&v!==v}var s=typeof Object.is=="function"?Object.is:a,o=n.useState,u=n.useEffect,p=n.useLayoutEffect,d=n.useDebugValue;function m(g,v){var S=v(),T=o({inst:{value:S,getSnapshot:v}}),j=T[0].inst,q=T[1];return p(function(){j.value=S,j.getSnapshot=v,h(j)&&q({inst:j})},[g,S,v]),u(function(){return h(j)&&q({inst:j}),g(function(){h(j)&&q({inst:j})})},[g]),d(S),S}function h(g){var v=g.getSnapshot;g=g.value;try{var S=v();return!s(g,S)}catch{return!0}}function f(g,v){return v()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:m;return wd.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:x,wd}var _0;function lj(){return _0||(_0=1,bd.exports=oj()),bd.exports}var uj=lj();const cj=v2.useInsertionEffect,dj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pj=dj?A.useLayoutEffect:A.useEffect,fj=cj||pj,ly=n=>{const a=A.useRef([n,(...s)=>a[0](...s)]).current;return fj(()=>{a[0]=n}),a[1]},mj="popstate",Np="pushState",Ep="replaceState",hj="hashchange",U0=[mj,Np,Ep,hj],gj=n=>{for(const a of U0)addEventListener(a,n);return()=>{for(const a of U0)removeEventListener(a,n)}},uy=(n,a)=>uj.useSyncExternalStore(gj,n,a),xj=()=>location.search,yj=({ssrSearch:n=""}={})=>uy(xj,()=>n),H0=()=>location.pathname,vj=({ssrPath:n}={})=>uy(H0,n?()=>n:H0),bj=(n,{replace:a=!1,state:s=null}={})=>history[a?Ep:Np](s,"",n),wj=(n={})=>[vj(n),bj],P0=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[P0]>"u"){for(const n of[Np,Ep]){const a=history[n];history[n]=function(){const s=a.apply(this,arguments),o=new Event(n);return o.arguments=arguments,dispatchEvent(o),s}}Object.defineProperty(window,P0,{value:!0})}const Sj=(n,a)=>a.toLowerCase().indexOf(n.toLowerCase())?"~"+a:a.slice(n.length)||"/",cy=(n="")=>n==="/"?"":n,Tj=(n,a)=>n[0]==="~"?n.slice(1):cy(a)+n,jj=(n="",a)=>Sj(Id(cy(n)),Id(a)),Oj=n=>n[0]==="?"?n.slice(1):n,Id=n=>{try{return decodeURI(n)}catch{return n}},Aj=n=>Id(Oj(n)),dy={hook:wj,searchHook:yj,parser:sj,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:n=>n},py=A.createContext(dy),Cr=()=>A.useContext(py),fy={},my=A.createContext(fy),hy=()=>A.useContext(my),Kl=n=>{const[a,s]=n.hook(n);return[jj(n.base,a),ly((o,u)=>s(Tj(o,n.base),u))]},Cp=()=>Kl(Cr()),Nj=()=>{const n=Cr();return Aj(n.searchHook(n))},gy=(n,a,s,o)=>{const{pattern:u,keys:p}=a instanceof RegExp?{keys:!1,pattern:a}:n(a||"*",o),d=u.exec(s)||[],[m,...h]=d;return m!==void 0?[!0,(()=>{const f=p!==!1?Object.fromEntries(p.map((g,v)=>[g,h[v]])):d.groups;let x={...h};return f&&Object.assign(x,f),x})(),...o?[m]:[]]:[!1,null]},xy=({children:n,...a})=>{var x,g;const s=Cr(),o=a.hook?dy:s;let u=o;const[p,d]=((x=a.ssrPath)==null?void 0:x.split("?"))??[];d&&(a.ssrSearch=d,a.ssrPath=p),a.hrefs=a.hrefs??((g=a.hook)==null?void 0:g.hrefs);let m=A.useRef({}),h=m.current,f=h;for(let v in o){const S=v==="base"?o[v]+(a[v]||""):a[v]||o[v];h===f&&S!==f[v]&&(m.current=f={...f}),f[v]=S,(S!==o[v]||S!==u[v])&&(u=f)}return A.createElement(py.Provider,{value:u,children:n})},G0=({children:n,component:a},s)=>a?A.createElement(a,{params:s}):typeof n=="function"?n(s):n,Ej=n=>{let a=A.useRef(fy);const s=a.current;return a.current=Object.keys(n).length!==Object.keys(s).length||Object.entries(n).some(([o,u])=>u!==s[o])?n:s},Cs=({path:n,nest:a,match:s,...o})=>{const u=Cr(),[p]=Kl(u),[d,m,h]=s??gy(u.parser,n,p,a),f=Ej({...hy(),...m});if(!d)return null;const x=h?A.createElement(xy,{base:h},G0(o,f)):G0(o,f);return A.createElement(my.Provider,{value:f,children:x})},_i=A.forwardRef((n,a)=>{const s=Cr(),[o,u]=Kl(s),{to:p="",href:d=p,onClick:m,asChild:h,children:f,className:x,replace:g,state:v,...S}=n,T=ly(q=>{q.ctrlKey||q.metaKey||q.altKey||q.shiftKey||q.button!==0||(m==null||m(q),q.defaultPrevented||(q.preventDefault(),u(d,n)))}),j=s.hrefs(d[0]==="~"?d.slice(1):s.base+d,s);return h&&A.isValidElement(f)?A.cloneElement(f,{onClick:T,href:j}):A.createElement("a",{...S,onClick:T,href:j,className:x!=null&&x.call?x(o===d):x,children:f,ref:a})}),yy=n=>Array.isArray(n)?n.flatMap(a=>yy(a&&a.type===A.Fragment?a.props.children:a)):[n],Cj=({children:n,location:a})=>{const s=Cr(),[o]=Kl(s);for(const u of yy(n)){let p=0;if(A.isValidElement(u)&&(p=gy(s.parser,u.props.path,a||o,u.props.nest))[0])return A.cloneElement(u,{match:p})}return null};function Y0(){const[,n]=Cp(),a=()=>{n("/")};return b.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:14",className:"min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",children:b.jsx(YT,{"data-loc":"client/src/pages/NotFound.tsx:15",className:"w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",children:b.jsxs(XT,{"data-loc":"client/src/pages/NotFound.tsx:16",className:"pt-8 pb-8 text-center",children:[b.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:17",className:"flex justify-center mb-6",children:b.jsxs("div",{"data-loc":"client/src/pages/NotFound.tsx:18",className:"relative",children:[b.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:19",className:"absolute inset-0 bg-red-100 rounded-full animate-pulse"}),b.jsx(JT,{"data-loc":"client/src/pages/NotFound.tsx:20",className:"relative h-16 w-16 text-red-500"})]})}),b.jsx("h1",{"data-loc":"client/src/pages/NotFound.tsx:24",className:"text-4xl font-bold text-slate-900 mb-2",children:"404"}),b.jsx("h2",{"data-loc":"client/src/pages/NotFound.tsx:26",className:"text-xl font-semibold text-slate-700 mb-4",children:"Page Not Found"}),b.jsxs("p",{"data-loc":"client/src/pages/NotFound.tsx:30",className:"text-slate-600 mb-8 leading-relaxed",children:["Sorry, the page you are looking for doesn't exist.",b.jsx("br",{"data-loc":"client/src/pages/NotFound.tsx:32"}),"It may have been moved or deleted."]}),b.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:36",className:"flex flex-col sm:flex-row gap-3 justify-center",children:b.jsxs(ii,{"data-loc":"client/src/pages/NotFound.tsx:37",onClick:a,className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",children:[b.jsx(Qd,{"data-loc":"client/src/pages/NotFound.tsx:41",className:"w-4 h-4 mr-2"}),"Go Home"]})})]})})})}class kj extends A.Component{constructor(a){super(a),this.state={hasError:!1,error:null}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){var a;return this.state.hasError?b.jsx("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:27",className:"flex items-center justify-center min-h-screen p-8 bg-background",children:b.jsxs("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:28",className:"flex flex-col items-center w-full max-w-2xl p-8",children:[b.jsx(aj,{"data-loc":"client/src/components/ErrorBoundary.tsx:29",size:48,className:"text-destructive mb-6 flex-shrink-0"}),b.jsx("h2",{"data-loc":"client/src/components/ErrorBoundary.tsx:34",className:"text-xl mb-4",children:"An unexpected error occurred."}),b.jsx("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:36",className:"p-4 w-full rounded bg-muted overflow-auto mb-6",children:b.jsx("pre",{"data-loc":"client/src/components/ErrorBoundary.tsx:37",className:"text-sm text-muted-foreground whitespace-break-spaces",children:(a=this.state.error)==null?void 0:a.stack})}),b.jsxs("button",{"data-loc":"client/src/components/ErrorBoundary.tsx:42",onClick:()=>window.location.reload(),className:se("flex items-center gap-2 px-4 py-2 rounded-lg","bg-primary text-primary-foreground","hover:opacity-90 cursor-pointer"),children:[b.jsx(ej,{"data-loc":"client/src/components/ErrorBoundary.tsx:50",size:16}),"Reload Page"]})]})}):this.props.children}}const Lj=A.createContext(void 0);function Mj({children:n,defaultTheme:a="light",switchable:s=!1}){const[o,u]=A.useState(()=>s&&localStorage.getItem("theme")||a);A.useEffect(()=>{const d=document.documentElement;o==="dark"?d.classList.add("dark"):d.classList.remove("dark"),s&&localStorage.setItem("theme",o)},[o,s]);const p=s?()=>{u(d=>d==="light"?"dark":"light")}:void 0;return b.jsx(Lj.Provider,{"data-loc":"client/src/contexts/ThemeContext.tsx:52",value:{theme:o,toggleTheme:p,switchable:s},children:n})}function Ml({children:n}){const[a]=Cp(),[s,o]=A.useState(!1);return b.jsxs("div",{"data-loc":"client/src/components/Layout.tsx:14",className:"min-h-screen relative",children:[b.jsx("div",{"data-loc":"client/src/components/Layout.tsx:16",className:"fixed inset-0 z-0",style:{backgroundImage:"url(/images/new-bg-wedding.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:b.jsx("div",{"data-loc":"client/src/components/Layout.tsx:26",className:"absolute inset-0 bg-gradient-to-b from-cream-50/75 via-rose-50/60 to-amber-50/70 backdrop-blur-[1px]"})}),b.jsxs("header",{"data-loc":"client/src/components/Layout.tsx:30",className:"fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rose-50/90 via-cream-50/95 to-amber-50/90 backdrop-blur-md border-b border-rose-200/50 shadow-sm",children:[b.jsx("div",{"data-loc":"client/src/components/Layout.tsx:31",className:"container mx-auto px-4",children:b.jsxs("div",{"data-loc":"client/src/components/Layout.tsx:32",className:"flex items-center justify-between h-16",children:[b.jsx(_i,{"data-loc":"client/src/components/Layout.tsx:34",href:"/",children:b.jsxs("div",{"data-loc":"client/src/components/Layout.tsx:35",className:"flex items-center gap-3 cursor-pointer",children:[b.jsx("div",{"data-loc":"client/src/components/Layout.tsx:36",className:"w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-amber-500 flex items-center justify-center shadow-lg",children:b.jsx("span",{"data-loc":"client/src/components/Layout.tsx:37",className:"text-white font-bold text-lg",children:"</>"})}),b.jsxs("div",{"data-loc":"client/src/components/Layout.tsx:39",className:"hidden sm:block",children:[b.jsx("h1",{"data-loc":"client/src/components/Layout.tsx:40",className:"font-bold text-lg text-rose-800",children:"算法通关指南"}),b.jsx("p",{"data-loc":"client/src/components/Layout.tsx:41",className:"text-xs text-rose-600/70",children:"大厂面试必备"})]})]})}),b.jsxs("nav",{"data-loc":"client/src/components/Layout.tsx:47",className:"hidden md:flex items-center gap-6",children:[b.jsx(_i,{"data-loc":"client/src/components/Layout.tsx:48",href:"/",children:b.jsxs("span",{"data-loc":"client/src/components/Layout.tsx:49",className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer ${a==="/"?"bg-rose-100/80 text-rose-700 font-medium shadow-sm":"text-rose-600 hover:bg-rose-50/80 hover:text-rose-700"}`,children:[b.jsx(Qd,{"data-loc":"client/src/components/Layout.tsx:54",className:"w-4 h-4"}),"首页"]})}),b.jsx(_i,{"data-loc":"client/src/components/Layout.tsx:58",href:"/templates",children:b.jsxs("span",{"data-loc":"client/src/components/Layout.tsx:59",className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer ${a==="/templates"?"bg-rose-100/80 text-rose-700 font-medium shadow-sm":"text-rose-600 hover:bg-rose-50/80 hover:text-rose-700"}`,children:[b.jsx(Ll,{"data-loc":"client/src/components/Layout.tsx:64",className:"w-4 h-4"}),"解题模板"]})})]}),b.jsx("button",{"data-loc":"client/src/components/Layout.tsx:71",className:"md:hidden p-2 rounded-lg text-rose-600 hover:bg-rose-100/50 transition-colors",onClick:()=>o(!s),children:s?b.jsx(rj,{"data-loc":"client/src/components/Layout.tsx:75",className:"w-6 h-6"}):b.jsx(WT,{"data-loc":"client/src/components/Layout.tsx:75",className:"w-6 h-6"})}),b.jsx("div",{"data-loc":"client/src/components/Layout.tsx:79",className:"hidden md:block w-32"})]})}),s&&b.jsx("div",{"data-loc":"client/src/components/Layout.tsx:85",className:"md:hidden bg-rose-50/95 backdrop-blur-md border-t border-rose-200/50 shadow-lg",children:b.jsxs("nav",{"data-loc":"client/src/components/Layout.tsx:86",className:"container mx-auto px-4 py-4 flex flex-col gap-2",children:[b.jsx(_i,{"data-loc":"client/src/components/Layout.tsx:87",href:"/",children:b.jsxs("span",{"data-loc":"client/src/components/Layout.tsx:88",className:`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors cursor-pointer ${a==="/"?"bg-rose-100/80 text-rose-700 font-medium":"text-rose-600 hover:bg-rose-100/50"}`,onClick:()=>o(!1),children:[b.jsx(Qd,{"data-loc":"client/src/components/Layout.tsx:96",className:"w-5 h-5"}),"首页"]})}),b.jsx(_i,{"data-loc":"client/src/components/Layout.tsx:100",href:"/templates",children:b.jsxs("span",{"data-loc":"client/src/components/Layout.tsx:101",className:`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors cursor-pointer ${a==="/templates"?"bg-rose-100/80 text-rose-700 font-medium":"text-rose-600 hover:bg-rose-100/50"}`,onClick:()=>o(!1),children:[b.jsx(Ll,{"data-loc":"client/src/components/Layout.tsx:109",className:"w-5 h-5"}),"解题模板"]})})]})})]}),b.jsx("main",{"data-loc":"client/src/components/Layout.tsx:119",className:"relative z-10 pt-20",children:n})]})}const qj=[{id:"binary-tree-inorder",title:"二叉树的中序遍历",titleEn:"Binary Tree Inorder Traversal",category:"binary-tree",difficulty:"easy",description:"给定一个二叉树的根节点 root，返回它的中序遍历结果。",examples:[{input:"root = [1,null,2,3]",output:"[1,3,2]",explanation:"中序遍历顺序：左-根-右"},{input:"root = []",output:"[]",explanation:"空树返回空列表"}],thinkingGuide:[{step:1,question:"🎯 什么是中序遍历？",hint:"左-根-右",answer:"中序遍历的顺序是：先递归访问左子树，然后访问根节点，最后递归访问右子树。对于二叉搜索树，中序遍历结果是有序的。"},{step:2,question:"🤔 递归的基本结构是什么？",hint:"三要素",answer:"1. 确定参数和返回值；2. 确定终止条件（节点为空）；3. 确定单层逻辑（左->根->右）。"},{step:3,question:"💻 迭代法怎么实现？",hint:"用栈模拟",answer:"递归的本质是栈。可以用栈来模拟：先一路向左入栈，到底后弹出节点处理（访问），然后转向右子树。"},{step:4,question:"📝 递归和迭代的区别？",hint:"空间复杂度",answer:"递归代码简洁但有栈溢出风险；迭代控制力更强，空间复杂度都是O(h)。"}],codeSteps:[{title:"第1步：定义结果列表",description:"初始化",code:`public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    // 启动递归
    inorder(root, result);
    return result;
}`,explanation:"主函数创建结果列表，调用辅助递归函数。"},{title:"第2步：定义递归函数",description:"接收节点和列表",code:`private void inorder(TreeNode node, List<Integer> result) {
    // TODO: 终止条件和遍历逻辑
}`,explanation:"辅助函数负责具体的递归遍历。"},{title:"第3步：终止条件",description:"节点为空",code:`if (node == null) {
    return;
}`,explanation:"遇到空节点直接返回，结束当前分支的递归。"},{title:"第4步：单层递归逻辑",description:"左-根-右",code:`    inorder(node.left, result);   // 左
    result.add(node.val);         // 根
    inorder(node.right, result);  // 右`,explanation:"先递归左子树，再将当前节点加入结果，最后递归右子树。"},{title:"第5步：完整代码",description:"汇总",code:`public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    inorder(root, result);
    return result;
}

private void inorder(TreeNode node, List<Integer> result) {
    if (node == null) return;
    inorder(node.left, result);
    result.add(node.val);
    inorder(node.right, result);
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)（h为树高）。"}],interview:{approach:"【面试回答模板】\\n\\n可以用递归或迭代实现。\\n\\n递归法：按照左-根-右的顺序。定义辅助函数，终止条件是节点为空，单层逻辑是递归左、存根、递归右。\\n\\n迭代法：用栈模拟。一路向左入栈，弹出时访问并处理右子树。",timeComplexity:"O(n)，访问每个节点一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"迭代法怎么写？",answer:"用栈。while(curr!=null || !stack.isEmpty())，先curr一直向左入栈，然后pop并访问，再curr=curr.right。"},{question:"Morris遍历了解吗？",answer:"O(1)空间的遍历方法，利用线索二叉树的思想，将叶子节点的右指针指向后继。"}]}},{id:"max-depth",title:"二叉树的最大深度",titleEn:"Maximum Depth of Binary Tree",category:"binary-tree",difficulty:"easy",description:"给定一个二叉树，找出其最大深度。最大深度是从根节点到最远叶子节点的最长路径上的节点数。",examples:[{input:"root = [3,9,20,null,null,15,7]",output:"3",explanation:"最长路径：3→20→15或3→20→7"},{input:"root = [1,null,2]",output:"2",explanation:"路径：1→2"}],thinkingGuide:[{step:1,question:"🎯 什么是树的深度？",hint:"最长路径",answer:"从根节点到最远叶子节点的最长路径上的节点数。注意叶子节点是指没有子节点的节点。"},{step:2,question:"🤔 如何用子问题定义深度？",hint:"递归公式",answer:"当前树的深度 = max(左子树深度, 右子树深度) + 1（根节点本身）。"},{step:3,question:"🛑 终止条件是什么？",hint:"节点为空",answer:"当节点为null时，深度为0。这是递归的基准情况。"},{step:4,question:"💡 BFS能求吗？",hint:"层序遍历",answer:"可以。用队列进行层序遍历，每遍历一层，深度+1，直到队列为空。"}],codeSteps:[{title:"第1步：方法签名",description:"接收根节点，返回深度",code:`public int maxDepth(TreeNode root) {
    // TODO: 递归实现
}`,explanation:"返回值为int类型。"},{title:"第2步：终止条件",description:"处理空节点",code:`if (root == null) {
    return 0;
}`,explanation:"空树的深度是0，这是递归的终点。"},{title:"第3步：递归计算子树",description:"分别计算左右深度",code:`int leftDepth = maxDepth(root.left);
int rightDepth = maxDepth(root.right);`,explanation:"后序遍历：先得到左右子树的结果。"},{title:"第4步：返回结果",description:"取最大值加1",code:"return Math.max(leftDepth, rightDepth) + 1;",explanation:"当前深度 = 左右子树最大深度 + 1（加上当前节点）。"},{title:"第5步：完整代码",description:"汇总",code:`public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    int left = maxDepth(root.left);
    int right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n推荐用后序遍历（递归）。\\n\\n1. 终止条件：节点为空返回0。\\n2. 递归逻辑：分别求左子树和右子树深度。\\n3. 在中间逻辑：当前深度 = max(左, 右) + 1。\\n\\n也可以用BFS层序遍历，每做一次层遍历depth++。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"如何求最小深度？",answer:"最小深度是到最近叶子节点的距离。注意当一个子树为空时，要取另一个子树的深度+1，而不是min(0, right)+1。"},{question:"N叉树最大深度？",answer:"遍历所有子节点取最大值 + 1。"}]}},{id:"invert-tree",title:"翻转二叉树",titleEn:"Invert Binary Tree",category:"binary-tree",difficulty:"easy",description:"给你一棵二叉树的根节点 root，翻转这棵二叉树，并返回其根节点。",examples:[{input:"root = [4,2,7,1,3,6,9]",output:"[4,7,2,9,6,3,1]",explanation:"左右子树互换"},{input:"root = [2,1,3]",output:"[2,3,1]",explanation:"1和3互换位置"}],thinkingGuide:[{step:1,question:"🎯 翻转是什么意思？",hint:"镜像",answer:"以前是左孩子的现在变成右孩子，以前是右孩子的现在变左孩子。对每一个节点都要执行这个“交换”操作。"},{step:2,question:"🤔 遍历顺序有要求吗？",hint:"前序/后序 vs 中序",answer:"前序（先交换再递归）和后序（先递归再交换）都可以。中序比较麻烦，因为交换后左孩子变右孩子，递归右孩子其实又递归回去了。"},{step:3,question:"🛑 终止条件是什么？",hint:"节点为空",answer:"节点为null时，不用翻转，直接返回null。"},{step:4,question:"📝 用前序遍历怎么写？",hint:"先交换",answer:"1. 交换root的左右子节点；2. 递归翻转root.left；3. 递归翻转root.right。"}],codeSteps:[{title:"第1步：终止条件",description:"节点为空",code:`public TreeNode invertTree(TreeNode root) {
    if (root == null) return null;
    // 继续处理
}`,explanation:"空节点直接返回。"},{title:"第2步：交换左右子节点",description:"前序位置处理",code:`    // 交换左右
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;`,explanation:"先把当前节点的左右孩子交换。"},{title:"第3步：递归处理子树",description:"继续翻转",code:`    invertTree(root.left);
    invertTree(root.right);`,explanation:"交换后，原来的左子树变成了右子树，但没关系，继续递归翻转现在的左右子树即可。"},{title:"第4步：完整代码",description:"汇总",code:`public TreeNode invertTree(TreeNode root) {
    if (root == null) return null;
    
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n使用递归的前序遍历或后序遍历。\\n\\n前序遍历思路：\\n1. 终止条件：节点为空返回。\\n2. 交换当前节点的左右子节点。\\n3. 递归翻转左子树。\\n4. 递归翻转右子树。\\n\\n也可以用BFS层序遍历，每次取出节点交换其左右孩子。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"迭代法怎么写？",answer:"用栈模拟前序遍历，或者用队列模拟层序遍历。每次弹出节点，交换其左右孩子，然后把左右孩子入栈/队。"}]}},{id:"symmetric-tree",title:"对称二叉树",titleEn:"Symmetric Tree",category:"binary-tree",difficulty:"easy",description:"给你一个二叉树的根节点 root，检查它是否轴对称。",examples:[{input:"root = [1,2,2,3,4,4,3]",output:"true",explanation:"左右子树镜像对称"},{input:"root = [1,2,2,null,3,null,3]",output:"false",explanation:"不对称"}],thinkingGuide:[{step:1,question:"🎯 对称的定义是什么？",hint:"镜像",answer:"树的左子树和右子树互为镜像。具体来说，左子树的左孩子 == 右子树的右孩子，左子树的右孩子 == 右子树的左孩子。"},{step:2,question:"🤔 怎么判断两个节点互为镜像？",hint:"递归逻辑",answer:"1. 两个节点值相同；2. A的左与B的右成镜像；3. A的右与B的左成镜像。"},{step:3,question:"🛑 终止条件有哪些？",hint:"节点为空",answer:"都为空->True；一个为空一个不为空->False；值不相等->False。"},{step:4,question:"💡 主函数怎么写？",hint:"调用辅助函数",answer:"主函数只检查根节点是否为空，然后调用辅助函数比较(root.left, root.right)。"}],codeSteps:[{title:"第1步：主函数",description:"判空并启动递归",code:`public boolean isSymmetric(TreeNode root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}`,explanation:"检查左右子树是否镜像。"},{title:"第2步：辅助函数终止条件",description:"处理空指针和值比较",code:`private boolean isMirror(TreeNode t1, TreeNode t2) {
    if (t1 == null && t2 == null) return true;  // 都为空
    if (t1 == null || t2 == null) return false; // 一个空一个不空
    if (t1.val != t2.val) return false;         // 值不等
    // 继续递归...
}`,explanation:"先处理基础情况，排除明显的非镜像。"},{title:"第3步：递归判断子节点",description:"交叉比较",code:"    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);",explanation:"t1左vs t2右，t1右vs t2左，必须同时满足。"},{title:"第4步：完整代码",description:"汇总",code:`public boolean isSymmetric(TreeNode root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}

private boolean isMirror(TreeNode t1, TreeNode t2) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null || t1.val != t2.val) return false;
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n使用递归法比较左右子树。\\n\\n定义辅助函数check(p, q)：\\n1. 均为空->true\\n2. 只有一个空或值不等->false\\n3. 递归比较：p.left vs q.right 且 p.right vs q.left。\\n\\n也可以用队列进行迭代比较。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"迭代法怎么写？",answer:"用队列，每次放入成对的节点(left, right)，取出来比较，然后按(u.left, v.right, u.right, v.left)顺序入队。"}]}},{id:"diameter-of-binary-tree",title:"二叉树的直径",titleEn:"Diameter of Binary Tree",category:"binary-tree",difficulty:"easy",description:"给定一棵二叉树，你需要计算它的直径长度。直径是任意两个节点路径长度中的最大值，这条路径可能穿过也可能不穿过根节点。",examples:[{input:"root = [1,2,3,4,5]",output:"3",explanation:"路径[4,2,1,3]或[5,2,1,3]长度为3"},{input:"root = [1,2]",output:"1",explanation:"路径[2,1]长度为1"}],thinkingGuide:[{step:1,question:"🎯 直径是怎么定义的？",hint:"路径长度",answer:"任意两个节点间路径上的边数。注意，最长路径不一定经过根节点。"},{step:2,question:"🤔 经过某个节点的直径是多少？",hint:"左+右",answer:"经过该节点的直径 = 左子树最大深度 + 右子树最大深度。"},{step:3,question:"💡 如何找到全局最大直径？",hint:"遍历每个节点",answer:"在计算深度的递归过程中，顺便计算每个节点的“左+右”，并更新全局最大值。"},{step:4,question:"📝 递归函数返回什么？",hint:"深度",answer:"递归函数必须返回当前节点的深度（max(L, R) + 1），而不是直径，否则父节点没法利用。"}],codeSteps:[{title:"第1步：定义全局变量",description:"记录最大直径",code:`class Solution {
    int maxDiameter = 0;
}`,explanation:"因为直径可能出现在子树中，需要一个全局变量持续更新最大值。"},{title:"第2步：深度计算函数",description:"后序遍历",code:`private int maxDepth(TreeNode node) {
    if (node == null) return 0;
    int left = maxDepth(node.left);
    int right = maxDepth(node.right);
    // 顺便更新直径
    maxDiameter = Math.max(maxDiameter, left + right);
    // 返回深度
    return Math.max(left, right) + 1;
}`,explanation:"🔑 核心：在求深度的同时计算经过该节点的路径长度（left+right）。"},{title:"第3步：主函数",description:"启动递归",code:`public int diameterOfBinaryTree(TreeNode root) {
    maxDepth(root);
    return maxDiameter;
}`,explanation:"调用递归函数，最后返回全局最大值。"},{title:"第4步：完整代码",description:"汇总",code:`class Solution {
    int maxDiameter = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        maxDepth(root);
        return maxDiameter;
    }
    private int maxDepth(TreeNode node) {
        if (node == null) return 0;
        int left = maxDepth(node.left);
        int right = maxDepth(node.right);
        maxDiameter = Math.max(maxDiameter, left + right);
        return Math.max(left, right) + 1;
    }
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n直径 = 左子树深度 + 右子树深度。\\n\\n但是最大直径不一定经过根节点，所以需要在递归求深度的过程中，维护一个全局变量maxDiameter，对每个节点计算left+right并更新maxDiameter。递归函数本身返回深度。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"如果要求返回路径上的节点数？",answer:"那就是边数+1，也就是left+right+1。"}]}},{id:"level-order",title:"二叉树的层序遍历",titleEn:"Binary Tree Level Order Traversal",category:"binary-tree",difficulty:"medium",description:"给你二叉树的根节点 root，返回其节点值的层序遍历（即逐层地，从左到右访问所有节点）。",examples:[{input:"root = [3,9,20,null,null,15,7]",output:"[[3],[9,20],[15,7]]",explanation:"按层分组"},{input:"root = [1]",output:"[[1]]",explanation:"单节点"}],thinkingGuide:[{step:1,question:"🎯 什么是层序遍历？",hint:"BFS",answer:"按照从上到下、从左到右的顺序访问节点。通常使用队列（Queue）来实现。"},{step:2,question:"🤔 队列里放什么？",hint:"节点",answer:"初始放入根节点。然后取出节点，如果有左右孩子，依次放入队列。"},{step:3,question:"🚧 如何区分每一层？",hint:"Size loop",answer:"这是关键点。在处理每一层之前，先记录当前队列的长度size。然后循环size次，处理的正好是这一层的所有节点。"},{step:4,question:"📝 结果怎么存？",hint:"List<List>",answer:"每层处理完得到一个List，最后把所有层的List加到大List里。"}],codeSteps:[{title:"第1步：初始化",description:"结果集和队列",code:`public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
}`,explanation:"边界检查，并把根节点入队。"},{title:"第2步：循环处理每一层",description:"记录size",code:`    while (!queue.isEmpty()) {
        int size = queue.size();  // 这一层的节点数
        List<Integer> currentLevel = new ArrayList<>();
        // 循环取出这一层的所有节点
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(currentLevel);
    }`,explanation:"🔑 关键：固定size循环，确保只处理当前层的节点，新加入的节点下一轮才处理。"},{title:"第3步：返回",description:"结束",code:`    return result;
}`,explanation:"返回二维列表。"},{title:"第4步：完整代码",description:"汇总",code:`public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}`,explanation:"📊 复杂度：时间O(n)，空间O(n)（队列最大宽度）。"}],interview:{approach:"【面试回答模板】\\n\\n使用BFS（广度优先搜索）。\\n\\n核心技巧：\\n1. 维护一个队列，初始加入root。\\n2. 外层循环判断队列不空。\\n3. 关键点：每次循环开始前记录queue.size()，这通过了当前层的节点数。\\n4. 内层循环size次，弹出节点加入结果，并把左右子节点加入队列。",timeComplexity:"O(n)，访问每个节点一次",spaceComplexity:"O(n)，队列中最多存放最宽一层的节点（约n/2）",followUp:[{question:"DFS能做吗？",answer:"可以。递归时传入depth参数，check结果列表的大小，如果size <= depth，说明到了新的一层，add一个新的list。"}]}},{id:"sorted-array-to-bst",title:"将有序数组转换为二叉搜索树",titleEn:"Convert Sorted Array to BST",category:"binary-tree",difficulty:"easy",description:"给你一个整数数组 nums，其中元素已经按升序排列，请你将其转换为一棵高度平衡二叉搜索树。",examples:[{input:"nums = [-10,-3,0,5,9]",output:"[0,-3,9,-10,null,5]",explanation:"选中间元素作为根"},{input:"nums = [1,3]",output:"[3,1]",explanation:"选3或1作为根都可以"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"高度平衡",answer:"把有序数组转成高度平衡的二叉搜索树（BST）。高度平衡意味着任意节点的左右子树高度差不超过1。"},{step:2,question:"🤔 怎么保证平衡？",hint:"中间节点当根",answer:"因为数组是有序的，只有选中间的元素作为根节点，左右两边的元素数量才差不多，树高也就差不多。"},{step:3,question:"📝 递归结构是怎么样的？",hint:"分治法",answer:"1. 取数组中间元素 mid 作为根；2. 递归左半部分构建左子树；3. 递归右半部分构建右子树。"},{step:4,question:"🛑 终止条件是什么？",hint:"区间无效",answer:"当 left > right 时，说明区间为空，返回 null。"}],codeSteps:[{title:"第1步：主函数",description:"调用递归",code:`public TreeNode sortedArrayToBST(int[] nums) {
    return build(nums, 0, nums.length - 1);
}`,explanation:"启动递归，传入整个数组的范围。"},{title:"第2步：处理终止条件",description:"区间无效",code:`private TreeNode build(int[] nums, int left, int right) {
    if (left > right) return null;
    // 继续处理
}`,explanation:"空区间返回null，这是叶子节点的下一层。"},{title:"第3步：构造根节点",description:"取中间值",code:`    int mid = left + (right - left) / 2;
    TreeNode root = new TreeNode(nums[mid]);`,explanation:"选择中间位置，避免整型溢出的写法。"},{title:"第4步：递归构造子树",description:"左右拆分",code:`    root.left = build(nums, left, mid - 1);
    root.right = build(nums, mid + 1, right);`,explanation:"左边区间构建左子树，右边区间构建右子树。"},{title:"第5步：完整代码",description:"汇总",code:`public TreeNode sortedArrayToBST(int[] nums) {
    return build(nums, 0, nums.length - 1);
}

private TreeNode build(int[] nums, int left, int right) {
    if (left > right) return null;
    int mid = left + (right - left) / 2;
    TreeNode root = new TreeNode(nums[mid]);
    root.left = build(nums, left, mid - 1);
    root.right = build(nums, mid + 1, right);
    return root;
}`,explanation:"📊 复杂度：时间O(n)，空间O(logn)（递归栈）。"}],interview:{approach:"【面试回答模板】\\n\\n使用分治法（递归）。\\n\\n因为数组是有序的，为了保证高度平衡，我们每次选择区间中点作为根节点。\\n\\n逻辑：\\n1. Base case：left > right 返回null。\\n2. 找中点 mid。\\n3. 递归 nums[left..mid-1] 构建左子树。\\n4. 递归 nums[mid+1..right] 构建右子树。",timeComplexity:"O(n)，每个元素访问一次",spaceComplexity:"O(log n)，递归栈深度",followUp:[{question:"链表怎么做？",answer:"如果不支持随机访问，可以用快慢指针找中点（O(nlogn)），或者利用类似中序遍历的思路构建（O(n)）。"}]}},{id:"validate-bst",title:"验证二叉搜索树",titleEn:"Validate Binary Search Tree",category:"binary-tree",difficulty:"medium",description:"给你一个二叉树的根节点 root，判断其是否是一个有效的二叉搜索树。",examples:[{input:"root = [2,1,3]",output:"true",explanation:"满足BST性质"},{input:"root = [5,1,4,null,null,3,6]",output:"false",explanation:"4在5的右子树但小于5"}],thinkingGuide:[{step:1,question:"🎯 什么是BST？",hint:"定义",answer:"二叉搜索树：对于任意节点，左子树所有值 < 根节点值 < 右子树所有值。注意是“整个子树”，不只是直接子节点。"},{step:2,question:"❌ 常见的陷阱是什么？",hint:"只比父子",answer:"只判断 root.left < root < root.right 是不够的，例如 [5,4,6,null,null,3,7]，3在6的左边单比5小，这是不对的。"},{step:3,question:"💡 如何保证子树所有值都符合要求？",hint:"传递范围",answer:"递归时携带上下界 (min, max)。左子树的上界变小，右子树的下界变大。"},{step:4,question:"🔄 中序遍历有什么性质？",hint:"升序",answer:"BST的中序遍历结果一定是严格递增的。这也是一种验证方法。"}],codeSteps:[{title:"第1步：主函数",description:"启动递归",code:`public boolean isValidBST(TreeNode root) {
    return validate(root, null, null);
}`,explanation:"初始范围 (-∞, +∞)，用null表示无穷。"},{title:"第2步：终止条件",description:"空节点",code:`private boolean validate(TreeNode node, Integer min, Integer max) {
    if (node == null) return true;
    // 继续判断
}`,explanation:"空树是有效的BST。"},{title:"第3步：判断当前值",description:"是否在范围内",code:`    if (min != null && node.val <= min) return false;
    if (max != null && node.val >= max) return false;`,explanation:"必须严格大于min且小于max。"},{title:"第4步：递归子树",description:"更新范围",code:`    return validate(node.left, min, node.val) 
        && validate(node.right, node.val, max);
}`,explanation:"左孩子不能超过当前值，右孩子不能小于当前值。"},{title:"第5步：完整代码",description:"汇总",code:`public boolean isValidBST(TreeNode root) {
    return validate(root, null, null);
}

private boolean validate(TreeNode node, Integer min, Integer max) {
    if (node == null) return true;
    if ((min != null && node.val <= min) || (max != null && node.val >= max)) return false;
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n两种方法：\\n1. 递归带范围：validate(node, min, max)。递归左子树时更新max=node.val，递归右子树时更新min=node.val。\\n2. 中序遍历：检查结果是否严格递增。可以用pre变量记录前一个节点值。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"为什么用Integer不用int？",answer:"因为节点值可能是Integer.MIN_VALUE或MAX_VALUE，用null表示无穷大/小更安全。或者用Long。"}]}},{id:"kth-smallest-bst",title:"二叉搜索树中第K小的元素",titleEn:"Kth Smallest Element in a BST",category:"binary-tree",difficulty:"medium",description:"给定一个二叉搜索树的根节点 root，和一个整数 k，请你设计一个算法查找其中第 k 个最小的元素。",examples:[{input:"root = [3,1,4,null,2], k = 1",output:"1",explanation:"最小元素是1"},{input:"root = [5,3,6,2,4,null,null,1], k = 3",output:"3",explanation:"第3小是3"}],thinkingGuide:[{step:1,question:"🎯 题目求什么？",hint:"第k小",answer:"在二叉搜索树（BST）中找到第k小的元素。BST的特点是左 < 根 < 右。"},{step:2,question:"💡 BST有什么重要性质？",hint:"有序",answer:"BST的中序遍历（左-根-右）生成的序列是严格升序的。"},{step:3,question:"🤔 怎么利用这个性质？",hint:"计数",answer:"进行中序遍历，每访问一个节点，计数器+1。当计数器等于k时，当前节点就是答案。"},{step:4,question:"⏩ 能提前停止吗？",hint:"找到后",answer:"是的，一旦计数器达到k，记录结果并停止递归，不需要遍历剩余节点。"}],codeSteps:[{title:"第1步：定义成员变量",description:"计数器和结果",code:`class Solution {
    private int count = 0;
    private int result = 0;
}`,explanation:"使用全局变量方便在递归中更新状态。"},{title:"第2步：主函数",description:"启动遍历",code:`public int kthSmallest(TreeNode root, int k) {
    inorder(root, k);
    return result;
}`,explanation:"启动中序遍历。"},{title:"第3步：递归中序遍历",description:"计数并判断",code:`private void inorder(TreeNode node, int k) {
    if (node == null) return;
    inorder(node.left, k);  // 左
    
    count++;
    if (count == k) {
        result = node.val;
        return;
    }
    
    inorder(node.right, k); // 右
}`,explanation:"注意：找到这一步需要某种机制停止递归（这里是用count判断，但右子树还是会遍历一部分，优化可以用标记位）"},{title:"第4步：完整代码",description:"汇总",code:`class Solution {
    private int count = 0;
    private int result = 0;
    public int kthSmallest(TreeNode root, int k) {
        inorder(root, k);
        return result;
    }
    private void inorder(TreeNode node, int k) {
        if (node == null) return;
        inorder(node.left, k);
        count++;
        if (count == k) {
            result = node.val;
            return;
        }
        inorder(node.right, k);
    }
}`,explanation:"📊 复杂度：时间O(H+k)，空间O(H)。"}],interview:{approach:"【面试回答模板】\\n\\n利用BST的中序遍历有序性。\\n\\n维护一个全局计数器count，进行中序遍历。每访问一个节点count++，当count等于k时，当前节点就是第k小的元素。",timeComplexity:"O(H+k)，H是树高，只需要遍历前k个元素",spaceComplexity:"O(H)，递归栈深度",followUp:[{question:"如果频繁查询怎么优化？",answer:"在TreeNode中维护子树大小（size）。这样就可以像二分查找一样，O(H)时间定位第k小。"}]}},{id:"right-side-view",title:"二叉树的右视图",titleEn:"Binary Tree Right Side View",category:"binary-tree",difficulty:"medium",description:"给定一个二叉树的根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。",examples:[{input:"root = [1,2,3,null,5,null,4]",output:"[1,3,4]",explanation:"每层最右边的节点"},{input:"root = [1,null,3]",output:"[1,3]",explanation:"右侧视图"}],thinkingGuide:[{step:1,question:"🎯 右视图看到的是哪些节点？",hint:"每层最右",answer:"想象从右边看这棵树，每一层只能看到最右边的一个节点。注意，不一定是右子节点，如果右边缺失，左子节点也能被看到。"},{step:2,question:"🤔 怎么拿到每一层的最右节点？",hint:"BFS",answer:"最直观的方法是层序遍历（BFS）。遍历每一层时，只把最后一个节点加入结果列表。"},{step:3,question:"💡 DFS能做吗？",hint:"先右后左",answer:"可以。如果我们按照“根 -> 右 -> 左”的顺序遍历，那么每一层第一个被访问到的节点，一定是最右边的节点。"},{step:4,question:"📝 DFS怎么判断是该层第一个？",hint:"深度vs结果集",answer:"记录当前深度depth。如果result.size() == depth，说明这一层还没加过节点，当前就是最右节点。"}],codeSteps:[{title:"第1步：方法选择",description:"推荐BFS",code:`public List<Integer> rightSideView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    // 循环...
}`,explanation:"BFS逻辑清晰，容易理解。"},{title:"第2步：循环处理每层",description:"取最后一个",code:`while (!queue.isEmpty()) {
    int size = queue.size();
    for (int i = 0; i < size; i++) {
        TreeNode node = queue.poll();
        if (i == size - 1) {  // 这一层的最后一个
            result.add(node.val);
        }
        // 加入子节点
        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
}`,explanation:"只在 i == size-1 时记录结果。"},{title:"第3步：返回结果",description:"汇总",code:"return result;",explanation:"返回列表。"},{title:"第4步：完整代码",description:"汇总",code:`public List<Integer> rightSideView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            if (i == size - 1) result.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    return result;
}`,explanation:"📊 复杂度：时间O(n)，空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n推荐BFS层序遍历。每次处理一层时，只将这一层的最后一个节点加入结果集中。\\n\\nDFS解法也很巧妙：按照根-右-左的顺序遍历，每当访问到一个新的深度时（result.size() == depth），记录当前节点。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(n)，队列最大宽度",followUp:[{question:"左视图怎么做？",answer:"BFS每层取第一个；或者DFS按根-左-右顺序，每层第一个记录。"}]}},{id:"flatten-tree",title:"二叉树展开为链表",titleEn:"Flatten Binary Tree to Linked List",category:"binary-tree",difficulty:"medium",description:"给你二叉树的根结点 root，请你将它展开为一个单链表。展开后的单链表应该同样使用 TreeNode，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null。",examples:[{input:"root = [1,2,5,3,4,null,6]",output:"[1,null,2,null,3,null,4,null,5,null,6]",explanation:"前序遍历顺序"},{input:"root = []",output:"[]",explanation:"空树"}],thinkingGuide:[{step:1,question:"🎯 展开后的样子？",hint:"单链表",answer:"展开成一个只有右子节点的单链表，顺序是前序遍历（根-左-右）。"},{step:2,question:"🤔 怎么把左子树移到右边？",hint:"插入",answer:"对于任意节点，如果它有左子树，应该把左子树放到右子树的位置，而原来的右子树接到左子树的“最右”节点后面。"},{step:3,question:"🔄 具体流程是怎样的？",hint:"迭代",answer:"1. 找到当前节点的左子树；2. 找到左子树的最右节点；3. 把当前节点的右子树接到它后面；4. 把左子树移到右边；5. 左子树置空。"},{step:4,question:"📝 需要辅助空间吗？",hint:"O(1)",answer:"不需要，可以在遍历过程中原地修改指针。"}],codeSteps:[{title:"第1步：主循环",description:"遍历每个节点",code:`public void flatten(TreeNode root) {
    TreeNode curr = root;
    while (curr != null) {
        // 处理当前节点
        if (curr.left != null) {
            // ...
        }
        curr = curr.right;
    }
}`,explanation:"一直向右遍历链表化的树。"},{title:"第2步：处理左子树",description:"寻找前驱节点",code:`            TreeNode next = curr.left;
            TreeNode predecessor = next;
            // 找左子树的最右节点
            while (predecessor.right != null) {
                predecessor = predecessor.right;
            }`,explanation:"前驱节点是前序遍历中curr的左子树的最后一个节点。"},{title:"第3步：指针重连",description:"拼接",code:`            predecessor.right = curr.right; // 原右子树接在最右节点后
            curr.right = next;              // 左子树移到右边
            curr.left = null;               // 左指针置空`,explanation:"完成一次“插入”操作。"},{title:"第4步：完整代码",description:"汇总",code:`public void flatten(TreeNode root) {
    TreeNode curr = root;
    while (curr != null) {
        if (curr.left != null) {
            TreeNode next = curr.left;
            TreeNode predecessor = next;
            while (predecessor.right != null) {
                predecessor = predecessor.right;
            }
            predecessor.right = curr.right;
            curr.right = next;
            curr.left = null;
        }
        curr = curr.right;
    }
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n寻找前驱节点法（Morris遍历的变种）。\\n\\n对于每个节点，如果有左子树：\\n1. 找到左子树的最右节点（前驱）。\\n2. 将当前节点的右子树拼接到前驱节点的右边。\\n3. 将左子树移到当前节点的右边，做边置空。\\n4. 继续处理下一个节点。",timeComplexity:"O(n)，每个节点被访问常数次",spaceComplexity:"O(1)，原地修改",followUp:[{question:"递归法怎么写？",answer:"后序遍历（右-左-根）。维护一个prev指针，每次 current.right = prev; current.left = null; prev = current。"}]}},{id:"construct-tree",title:"从前序与中序遍历序列构造二叉树",titleEn:"Construct Binary Tree from Preorder and Inorder",category:"binary-tree",difficulty:"medium",description:"给定两个整数数组 preorder 和 inorder，其中 preorder 是二叉树的前序遍历，inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。",examples:[{input:"preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",output:"[3,9,20,null,null,15,7]",explanation:"根据遍历序列重建"},{input:"preorder = [-1], inorder = [-1]",output:"[-1]",explanation:"单节点"}],thinkingGuide:[{step:1,question:"🎯 从哪里找到根节点？",hint:"前序/中序特性",answer:"前序遍历的第一个元素就是根节点。"},{step:2,question:"🤔 怎么区分左右子树？",hint:"中序遍历",answer:"拿到根节点后，去中序遍历数组中找到它的位置。在它左边的就是左子树的所有节点，右边的就是右子树的所有节点。"},{step:3,question:"🔄 接下来怎么做？",hint:"递归",answer:"有了根节点和左右子树的节点数量，就可以把前序数组也分成两部分。对左右子树分别递归重复上述过程。"},{step:4,question:"💡 怎么快速找位置？",hint:"哈希表",answer:"每次遍历中序数组找根太慢了，可以用哈希表预存 value -> index 的映射。"}],codeSteps:[{title:"第1步：预处理",description:"建立哈希映射",code:`private Map<Integer, Integer> indexMap = new HashMap<>();

public TreeNode buildTree(int[] preorder, int[] inorder) {
    for (int i = 0; i < inorder.length; i++) {
        indexMap.put(inorder[i], i);
    }
    return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1);
}`,explanation:"O(1)时间查询值在中序数组中的位置。"},{title:"第2步：递归函数签名",description:"传入当前子树的范围",code:`private TreeNode build(int[] preorder, int preStart, int preEnd, int inStart, int inEnd) {
    if (preStart > preEnd) return null; // 终止条件
    // ...
}`,explanation:"使用索引范围而不是切片数组，避免大量拷贝。"},{title:"第3步：构造当前节点",description:"确定根",code:`    int rootVal = preorder[preStart];
    TreeNode root = new TreeNode(rootVal);
    int inRootIndex = indexMap.get(rootVal);
    int leftSize = inRootIndex - inStart;`,explanation:"计算左子树的大小，这对于划分前序数组至关重要。"},{title:"第4步：递归子树",description:"准确划分区间",code:`    root.left = build(preorder, preStart + 1, preStart + leftSize, inStart, inRootIndex - 1);
    root.right = build(preorder, preStart + leftSize + 1, preEnd, inRootIndex + 1, inEnd);
    return root;`,explanation:"前序：[根 | 左子树 | 右子树]，中序：[左子树 | 根 | 右子树]。"},{title:"第5步：完整代码",description:"汇总",code:`private Map<Integer, Integer> indexMap = new HashMap<>();
public TreeNode buildTree(int[] preorder, int[] inorder) {
    for (int i = 0; i < inorder.length; i++) indexMap.put(inorder[i], i);
    return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1);
}
private TreeNode build(int[] preorder, int preStart, int preEnd, int inStart, int inEnd) {
    if (preStart > preEnd) return null;
    int rootVal = preorder[preStart];
    TreeNode root = new TreeNode(rootVal);
    int inRootIndex = indexMap.get(rootVal);
    int leftSize = inRootIndex - inStart;
    root.left = build(preorder, preStart + 1, preStart + leftSize, inStart, inRootIndex - 1);
    root.right = build(preorder, preStart + leftSize + 1, preEnd, inRootIndex + 1, inEnd);
    return root;
}`,explanation:"📊 复杂度：时间O(n)，空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n核心思想：前序确定根，中序切分左右。\\n\\n1. 使用HashMap存储inorder的索引，优化查找。\\n2. 定义递归函数：根据当前的前序范围和中序范围构建树。\\n3. 取前序第一个元素为根。\\n4. 在inorder中找到根的位置，算出左子树的大小size。\\n5. 递归构建左子树（前序后移1位，长度size）和右子树。",timeComplexity:"O(n)，构建每个节点",spaceComplexity:"O(n)，哈希表 + 递归栈",followUp:[{question:"从中序和后序构造？",answer:"后序的最后一个是根，逻辑类似，只是需要反向思考（先右后左更方便索引计算）。"}]}},{id:"path-sum-iii",title:"路径总和 III",titleEn:"Path Sum III",category:"binary-tree",difficulty:"medium",description:"给定一个二叉树的根节点 root，和一个整数 targetSum，求该二叉树里节点值之和等于 targetSum 的路径的数目。",examples:[{input:"root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",output:"3",explanation:"路径：5→3, 5→2→1, -3→11"},{input:"root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",output:"3",explanation:"三条路径"}],thinkingGuide:[{step:1,question:"🎯 暴力破解怎么做？",hint:"双重递归",answer:"对每个节点，都计算以它为起点的路径和。需要两层DFS，时间复杂度O(n²)，在最坏情况下（链状）很慢。"},{step:2,question:"💡 能优化吗？",hint:"前缀和",answer:"类比数组题目“和为K的子数组”。如果记录从根到当前节点的路径和（currSum），那么target sum对应的就是 `currSum - target` 是否在之前出现过。"},{step:3,question:"🔄 树与数组有什么不同？",hint:"回溯",answer:"树有分叉。当我们遍历完左子树回到根节点，再去右子树时，左子树的前缀和就不应该存在了。所以需要回溯（backtrack）。"},{step:4,question:"📝 具体流程？",hint:"Map",answer:"用Map记录前缀和出现的次数。进入节点时add，递归子节点，离开节点时remove。"}],codeSteps:[{title:"第1步：主函数",description:"初始化",code:`public int pathSum(TreeNode root, int targetSum) {
    Map<Long, Integer> prefixSum = new HashMap<>();
    // 前缀和为0出现1次（代表路径即为当前完整前缀）
    prefixSum.put(0L, 1);
    return dfs(root, 0L, targetSum, prefixSum);
}`,explanation:"注意使用Long类型防止溢出。"},{title:"第2步：DFS递归",description:"更新与查询",code:`private int dfs(TreeNode node, long currSum, int target, Map<Long, Integer> prefixSum) {
    if (node == null) return 0;
    currSum += node.val;
    // 核心：查找 currSum - target 的个数
    int count = prefixSum.getOrDefault(currSum - target, 0);
    // 更新当前前缀和
    prefixSum.put(currSum, prefixSum.getOrDefault(currSum, 0) + 1);
    // ...递归
}`,explanation:"当前路径和减去目标值，如果在map中存在，说明中间有一段和为target。"},{title:"第3步：递归与回溯",description:"左右与恢复",code:`    count += dfs(node.left, currSum, target, prefixSum);
    count += dfs(node.right, currSum, target, prefixSum);
    // 回溯：离开当前节点，移除其前缀和
    prefixSum.put(currSum, prefixSum.get(currSum) - 1);
    return count;
}`,explanation:"必须回溯，因为该前缀和只对当前节点的子节点有效。"},{title:"第4步：完整代码",description:"汇总",code:`public int pathSum(TreeNode root, int targetSum) {
    Map<Long, Integer> map = new HashMap<>();
    map.put(0L, 1);
    return dfs(root, 0L, targetSum, map);
}
private int dfs(TreeNode node, long curr, int target, Map<Long, Integer> map) {
    if (node == null) return 0;
    curr += node.val;
    int res = map.getOrDefault(curr - target, 0);
    map.put(curr, map.getOrDefault(curr, 0) + 1);
    res += dfs(node.left, curr, target, map);
    res += dfs(node.right, curr, target, map);
    map.put(curr, map.get(curr) - 1);
    return res;
}`,explanation:"📊 复杂度：时间O(n)，空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n最优解是前缀和 + DFS回溯。\\n\\n1. 维护一个Map记录从根到当前路径上各种前缀和出现的次数。\\n2. 初始化Map.put(0, 1)。\\n3. DFS遍历：currSum += val。\\n4. 累加结果：res += Map.get(currSum - target)。\\n5. 将currSum放入Map。\\n6. 递归左右子树。\\n7. 关键回溯：Map.put(currSum, count - 1)。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(n)，哈希表最大存储树的深度个元素（不平衡时为n）",followUp:[{question:"如果不允许用额外空间？",answer:"那就只能用双重递归方案，时间复杂度Degrade到O(n²)。"}]}},{id:"lowest-common-ancestor",title:"二叉树的最近公共祖先",titleEn:"Lowest Common Ancestor of a Binary Tree",category:"binary-tree",difficulty:"medium",description:"给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。",examples:[{input:"root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",output:"3",explanation:"5和1的最近公共祖先是3"},{input:"root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",output:"5",explanation:"5是4的祖先"}],thinkingGuide:[{step:1,question:"🎯 什么是LCA？",hint:"公共祖先",answer:"最近公共祖先（LCA）是离两个节点最近的、同时是它们祖先的节点。"},{step:2,question:"🤔 递归怎么思考？",hint:"后序遍历",answer:"对于当前节点 root，我们想知道 p 和 q 是否在它的子树中。"},{step:3,question:"🛑 终止条件是什么？",hint:"空或匹配",answer:"1. 如果 root 为空，返回 null。2. 如果 root 是 p 或 q，那它自己就是候选LCA（或者p是q的祖先这种特殊情况），返回 root。"},{step:4,question:"💡 如何处理返回值？",hint:"左右",answer:"如果左子树和右子树都找到了（都不为空），说明 p 和 q 分布在 root 两侧，root 就是 LCA。如果只有一边找到了，说明 p 和 q 都在那一边，返回那一边的结果。"}],codeSteps:[{title:"第1步：终止条件",description:"基础检查",code:`public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) {
        return root;
    }
    // ...递归
}`,explanation:"只要当前节点是p或q，就返回自己。这意味着告诉父节点“我找到了p或q”。"},{title:"第2步：递归左右子树",description:"寻找目标",code:`    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);`,explanation:"去左边找找有没有p或q，去右边找找有没有p或q。"},{title:"第3步：合并结果",description:"判断LCA",code:`    if (left != null && right != null) {
        return root; // 两边都找到了，当前节点是LCA
    }
    return left != null ? left : right; // 否则返回找到的那一边
}`,explanation:"如果两边都不为空，说明p,q分居两侧。如果有为空，说明都在非空的那一侧。"},{title:"第4步：完整代码",description:"汇总",code:`public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return left != null ? left : right;
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n使用递归法（后序遍历）。\\n\\n1. Base case：如果root为空，或root等于p或q，直接返回root。\\n2. 递归查找左右子树：得到left和right。\\n3. 判断：\\n   - 如果left和right都不为空，说明p、q分列在root两侧，root就是LCA，返回root。\\n   - 如果只有一个不为空，说明p、q都在那一侧，直接返回那个不为空的返回值。",timeComplexity:"O(n)，访问每个节点一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"如果是二叉搜索树（BST）？",answer:"利用值大小：如果p,q都小于root，去左边找；都大于root，去右边找；一小一大，root就是LCA。"}]}},{id:"max-path-sum",title:"二叉树中的最大路径和",titleEn:"Binary Tree Maximum Path Sum",category:"binary-tree",difficulty:"hard",description:"给你一个二叉树的根节点 root，返回其最大路径和。路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。",examples:[{input:"root = [1,2,3]",output:"6",explanation:"路径2→1→3"},{input:"root = [-10,9,20,null,null,15,7]",output:"42",explanation:"路径15→20→7"}],thinkingGuide:[{step:1,question:"🎯 路径的定义是什么？",hint:"任意起点终点",answer:"路径可以从任意节点开始，到任意节点结束，但必须沿着父子连接。注意：路径可以“拐弯”经过根节点。"},{step:2,question:"🤔 以一个节点为“转折点”的路径和怎么算？",hint:"左+右+根",answer:"如果是穿过当前节点 root 的路径，最大和 = root.val + max(左子树贡献, 0) + max(右子树贡献, 0)。"},{step:3,question:"🔄 节点能向父节点“贡献”多大的和？",hint:"不拐弯",answer:"向父节点汇报时，路径只能走一边（不能分叉）。maxGain = root.val + max(左, 右, 0)。"},{step:4,question:"📝 为什么负数要取0？",hint:"舍弃",answer:"如果子树的最大贡献是负数，那还不如不选它（断开连接），所以取 max(gain, 0)。"}],codeSteps:[{title:"第1步：定义成员变量",description:"全局最大值",code:`class Solution {
    // 初始化为最小值，防止全为负数时出错
    int maxSum = Integer.MIN_VALUE;
}`,explanation:"我们需要遍历所有节点作为“转折点”的情况，取最大值。"},{title:"第2步：递归函数",description:"计算最大单边贡献",code:`private int maxGain(TreeNode node) {
    if (node == null) return 0;
    // 递归计算左右子树最大贡献，只有正数才要
    int leftGain = Math.max(maxGain(node.left), 0);
    int rightGain = Math.max(maxGain(node.right), 0);
    // ...
}`,explanation:"后序遍历，先拿到子结果。"},{title:"第3步：更新全局最大值",description:"计算穿过当前节点的路径",code:`    // 当前节点作为“拐点”时的最大路径和
    int currentPathSum = node.val + leftGain + rightGain;
    maxSum = Math.max(maxSum, currentPathSum);
    
    // 返回给父节点：只能选一边
    return node.val + Math.max(leftGain, rightGain);
}`,explanation:"更新全局最大值，但返回只能返回单边路径。"},{title:"第4步：完整代码",description:"汇总",code:`class Solution {
    int maxSum = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return maxSum;
    }
    private int maxGain(TreeNode node) {
        if (node == null) return 0;
        int left = Math.max(maxGain(node.left), 0);
        int right = Math.max(maxGain(node.right), 0);
        maxSum = Math.max(maxSum, node.val + left + right);
        return node.val + Math.max(left, right);
    }
}`,explanation:"📊 复杂度：时间O(n)，空间O(h)。"}],interview:{approach:"【面试回答模板】\\n\\n使用递归。对于每个节点，我们需要计算两件事：\\n1. **贡献值**（返回给父节点）：只能包含左子树或右子树中的一条（或者都不选），即 `node.val + max(left, right, 0)`。\\n2. **更新全局最大和**：假设当前节点是路径的最高点（可以连接左右），即 `node.val + left + right`。\\n\\n维护一个全局变量maxSum，在递归过程中不断更新。",timeComplexity:"O(n)，每个节点访问一次",spaceComplexity:"O(h)，递归栈深度",followUp:[{question:"如果全是负数？",answer:"maxSum初始化为MIN_VALUE，逻辑依然成立，会选最大的那个负数（单个节点）。"}]}}],Dj=qj,Rj=[{id:"unique-paths",title:"不同路径",titleEn:"Unique Paths",category:"multi-dp",difficulty:"medium",description:"一个机器人位于一个 m x n 网格的左上角。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。问总共有多少条不同的路径？",examples:[{input:"m = 3, n = 7",output:"28"},{input:"m = 3, n = 2",output:"3"}],thinkingGuide:[{step:1,question:"🤖 机器人每一步有哪些选择？",hint:"方向限制",answer:"只能向下或向右。这意味着到达位置(i, j)只能是从上方(i-1, j)走下来，或者从左方(i, j-1)走过来。"},{step:2,question:"💡 如何定义子问题（状态）？",hint:"到达某点的路径数",answer:"dp[i][j]表示从左上角到达位置(i, j)的路径总数。"},{step:3,question:"📝 状态转移方程是什么？",hint:"加法原理",answer:"dp[i][j] = dp[i-1][j] + dp[i][j-1]。即路径数等于上方路径数加上左方路径数。"},{step:4,question:"🛑 边界条件是什么？",hint:"第一行和第一列",answer:"第一行只能一直向右走，路径数为1；第一列只能一直向下走，路径数为1。所以dp[0][j]=1, dp[i][0]=1。"},{step:5,question:"📦 能否优化空间？",hint:"只需要上一行",answer:"计算当前行只依赖上一行。可以用一维数组滚动更新：dp[j] = dp[j] + dp[j-1]（新dp[j]是当前行，旧dp[j]是上一行，dp[j-1]是当前行左边）。"}],codeSteps:[{title:"第1步：定义DP数组",description:"初始化",code:`public int uniquePaths(int m, int n) {
    // dp[j]表示当前行第j列的路径数
    int[] dp = new int[n];
    // 第一行全为1
    Arrays.fill(dp, 1);
    // ...
}`,explanation:"使用一维数组进行空间优化，初始状态对应第一行。"},{title:"第2步：遍历网格",description:"从第二行开始",code:`    // 从第1行遍历到第m-1行
    for (int i = 1; i < m; i++) {
        // 从第1列遍历到第n-1列
        for (int j = 1; j < n; j++) {
            // ...
        }
    }`,explanation:"dp[0]始终为1（第一列），所以内层循环从j=1开始。"},{title:"第3步：状态转移",description:"核心公式",code:`            // dp[j]（新） = dp[j]（旧，相当于上方） + dp[j-1]（新，相当于左方）
            dp[j] = dp[j] + dp[j - 1];`,explanation:"等价于二维的 dp[i][j] = dp[i-1][j] + dp[i][j-1]。"},{title:"第4步：返回结果",description:"终点值",code:`    }
    return dp[n - 1];
}`,explanation:"遍历结束后，dp[n-1]就是到达右下角的路径数。"},{title:"第5步：完整代码",description:"汇总",code:`public int uniquePaths(int m, int n) {
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}`,explanation:"📊 复杂度：时间O(mn)，空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n典型的动态规划问题。\\n\\n1. **状态定义**：dp[i][j]为走到(i,j)的路径数。\\n2. **转移方程**：dp[i][j] = dp[i-1][j] + dp[i][j-1]。\\n3. **边界**：第一行和第一列都是1。\\n4. **空间优化**：因为只需要上一行的信息，可以将二维数组压缩为一维数组 dp[j] += dp[j-1]。",timeComplexity:"O(m×n)，需要遍历整个网格",spaceComplexity:"O(n)（优化后）或 O(m×n)（未优化）",followUp:[{question:"如果有障碍物怎么办？",answer:"如果grid[i][j]==1，则dp[i][j]=0；否则照常转移。注意第一行/列遇到障碍物后，后面都是0。"},{question:"数据很大怎么办？",answer:"这其实是一个组合数学问题，答案是 C(m+n-2, m-1)。可以用公式直接计算（注意防止溢出）。"}]}},{id:"min-path-sum",title:"最小路径和",titleEn:"Minimum Path Sum",category:"multi-dp",difficulty:"medium",description:"给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。",examples:[{input:"grid = [[1,3,1],[1,5,1],[4,2,1]]",output:"7",explanation:"路径 1→3→1→1→1"},{input:"grid = [[1,2,3],[4,5,6]]",output:"12"}],thinkingGuide:[{step:1,question:"🎯 目标是求什么？",hint:"最小和",answer:"从左上角到右下角的路径数字总和最小。每步只能向下或向右。"},{step:2,question:"🤔 当前格子的最小路径和取决于什么？",hint:"上一步",answer:"要到达(i, j)，必须从(i-1, j)或(i, j-1)过来。为了总和最小，我们应该从“路径和较小”的那个邻居过来。"},{step:3,question:"📝 状态转移方程？",hint:"min",answer:"dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]。即：当前最小和 = min(上方最小和, 左方最小和) + 当前格子值。"},{step:4,question:"🛑 边界条件怎么处理？",hint:"第一行/列",answer:"第一行只能从左边来（累加前缀和）；第一列只能从上边来（累加前缀和）。"},{step:5,question:"📦 可以空间优化吗？",hint:"原地",answer:"可以直接在 grid 数组上修改，复用空间，不需要额外的 dp 数组。"}],codeSteps:[{title:"第1步：初始化第一行和第一列",description:"处理边界",code:`public int minPathSum(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    
    // 第一列：只能从上往下
    for (int i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
    // 第一行：只能从左往右
    for (int j = 1; j < n; j++) grid[0][j] += grid[0][j - 1];
}`,explanation:"直接修改grid数组，grid[i][j]存储到达该点的最小路径和。"},{title:"第2步：遍历剩余格子",description:"填充中间部分",code:`    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            // 选上方和左方中较小的那个
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }`,explanation:"根据转移方程计算每个格子的最小路径和。"},{title:"第3步：返回结果",description:"右下角",code:`    return grid[m - 1][n - 1];
}`,explanation:"右下角的值就是全局最小路径和。"},{title:"第4步：完整代码",description:"汇总",code:`public int minPathSum(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    for (int i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
    for (int j = 1; j < n; j++) grid[0][j] += grid[0][j - 1];
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
}`,explanation:"📊 复杂度：时间O(mn)，空间O(1)（原地修改）。"}],interview:{approach:"【面试回答模板】\\n\\n动态规划。\\n\\n1. **DP定义**：dp[i][j]表示到达(i,j)的最小路径和。\\n2. **转移方程**：dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])。\\n3. **边界处理**：第一行和第一列只能单向移动，直接累加。\\n4. **空间优化**：可以直接在原数组grid上进行修改，通过原地算法将空间复杂度降为O(1)。",timeComplexity:"O(m×n)，每个元素访问一次",spaceComplexity:"O(1)（原地修改）或 O(m×n)（如果不允许修改输入）",followUp:[{question:"如果要求输出具体路径？",answer:"从右下角开始回溯。每次比较上方和左方的值，往较小值方向回退，直到左上角。"},{question:"如果可以走对角线？",answer:"转移方程增加一项：min(上, 左, 左上)。"}]}},{id:"longest-palindrome-substring",title:"最长回文子串",titleEn:"Longest Palindromic Substring",category:"multi-dp",difficulty:"medium",description:"给你一个字符串 s，找到 s 中最长的回文子串。",examples:[{input:'s = "babad"',output:'"bab" 或 "aba"'},{input:'s = "cbbd"',output:'"bb"'}],thinkingGuide:[{step:1,question:"🤔 无论奇数偶数长度，回文有什么共同点？",hint:"中心对称",answer:'回文串都是关于中心对称的。奇数长度中心是一个字符（如 "aba" 中心是 "b"），偶数长度中心是两个字符的缝隙（如 "abba" 中心是 "bb"）。'},{step:2,question:"💡 如何利用这个对称性？",hint:"中心扩展",answer:"我们可以遍历字符串中的每一个“中心”，然后向两边扩散，直到两边的字符不相等为止。"},{step:3,question:"🔢 有多少个中心？",hint:"2n-1",answer:"字符作为中心有 n 个，字符之间的缝隙作为中心有 n-1 个，一共 2n-1 个中心。或者我们可以分别处理：以 s[i] 为中心（奇数长），和以 s[i],s[i+1] 为中心（偶数长）。"},{step:4,question:"🚀 有没有更优的算法？",hint:"Manacher",answer:"虽然中心扩展是 O(n²)，但对于面试通常够用。Manacher算法可以做到 O(n) 但实现复杂，面试不强求。"}],codeSteps:[{title:"第1步：主函数循环",description:"遍历每个中心",code:`public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    
    for (int i = 0; i < s.length(); i++) {
        int len1 = expandAroundCenter(s, i, i);      // 奇数长度，中心是 i
        int len2 = expandAroundCenter(s, i, i + 1);  // 偶数长度，中心是 i, i+1
        int len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}`,explanation:"遍历所有可能的中心，更新最长回文的起止位置。"},{title:"第2步：中心扩展函数",description:"向两边扩散",code:`private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}`,explanation:"返回的是回文串的长度。注意跳出循环时 s[left] != s[right]，所以长度是 (right-1) - (left+1) + 1 = right - left - 1。"},{title:"第3步：完整代码",description:"汇总",code:`public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}`,explanation:"📊 复杂度：时间O(n²)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n推荐使用“中心扩展法”。\\n\\n1. **思路**：回文串是中心对称的。我们遍历字符串每个字符，分别以它为中心（奇数长）和以它及它右边字符为中心（偶数长）向两边扩展。\\n2. **实现**：写一个辅助函数 `expand(left, right)`，返回回文长度。\\n3. **复杂度**：虽然最坏是O(n²)，但空间复杂度是O(1)，比动态规划O(n²)空间更好。",timeComplexity:"O(n²)",spaceComplexity:"O(1)",followUp:[{question:"Manacher算法了解吗？",answer:"了解，利用回文半径数组和已知回文的对称性，可以将时间优化到O(n)。但代码实现比较复杂。"},{question:"为什么不推荐DP？",answer:"DP需要O(n²)的空间来存储状态 dp[i][j]，而中心扩展只需要O(1)空间。"}]}},{id:"longest-common-subsequence",title:"最长公共子序列",titleEn:"Longest Common Subsequence",category:"multi-dp",difficulty:"medium",description:"给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。如果不存在公共子序列，返回 0。",examples:[{input:'text1 = "abcde", text2 = "ace"',output:"3",explanation:'LCS是"ace"'},{input:'text1 = "abc", text2 = "def"',output:"0"}],thinkingGuide:[{step:1,question:"🎯 LCS是什么？",hint:"定义",answer:'最长公共子序列。注意子序列可以不连续，但相对顺序必须保持。例如 "ace" 是 "abcde" 的子序列。'},{step:2,question:"🚦 为什么需要二维DP？",hint:"两个指针",answer:"因为涉及两个字符串的匹配，我们需要两个指针 i 和 j 分别指向两个字符串的末尾。状态 dp[i][j] 表示 text1[0...i-1] 和 text2[0...j-1] 的 LCS 长度。"},{step:3,question:"🧐 状态怎么转移？",hint:"看最后一个字符",answer:"如果不相等：dp[i][j] = max(dp[i-1][j], dp[i][j-1])（继承左边或上边的最大值）。\\n如果相等：dp[i][j] = dp[i-1][j-1] + 1（找到了一个公共字符，加到之前的LCS上）。"},{step:4,question:"📝 初始化和边界？",hint:"稍微大一点",answer:"dp数组大小设为 (m+1) x (n+1)。第0行及第0列表示空串，LCS长度自然为0，利用Java默认初始化即可。"}],codeSteps:[{title:"第1步：初始化DP表",description:"大小为(m+1)x(n+1)",code:`public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    // ...
}`,explanation:"多留一行一列处理空串情况，避免边界判断。"},{title:"第2步：双重循环",description:"遍历两个字符串",code:`    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            // i和j是长度，对应的字符索引是i-1和j-1
            char c1 = text1.charAt(i - 1);
            char c2 = text2.charAt(j - 1);
            // ...
        }
    }`,explanation:"注意 i, j 代表长度，取字符时要减1。"},{title:"第3步：转移方程",description:"相等与不相等",code:`            if (c1 == c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }`,explanation:"相等则+1，不等则继承最大值。"},{title:"第4步：完整代码",description:"汇总",code:`public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}`,explanation:"📊 复杂度：时间O(mn)，空间O(mn)。"}],interview:{approach:"【面试回答模板】\\n\\n使用二维动态规划。\\n\\n1. **DP定义**：dp[i][j] 表示 text1 前 i 个字符和 text2 前 j 个字符的最长公共子序列长度。\\n2. **转移方程**：\\n   - 如果 char1 == char2，则 dp[i][j] = dp[i-1][j-1] + 1。\\n   - 否则，dp[i][j] = max(dp[i-1][j], dp[i][j-1])。\\n3. **复杂度**：时间 O(mn)，空间 O(mn)。",timeComplexity:"O(m×n)",spaceComplexity:"O(m×n)，可以用滚动数组优化到 O(min(m,n))",followUp:[{question:"如何输出LCS本身？",answer:"从 dp[m][n] 开始回溯。如果字符相等，则该字符属于LCS，向左上移动；如果不等，向值大的方向移动。"},{question:"如果是最长公共子串（连续）？",answer:"如果不等，dp[i][j]直接归0；如果相等，dp[i][j]=dp[i-1][j-1]+1。维护一个全局最大值。"}]}},{id:"edit-distance",title:"编辑距离",titleEn:"Edit Distance",category:"multi-dp",difficulty:"medium",description:"给你两个单词 word1 和 word2，请返回将 word1 转换成 word2 所使用的最少操作数。你可以对一个单词进行如下三种操作：插入一个字符、删除一个字符、替换一个字符。",examples:[{input:'word1 = "horse", word2 = "ros"',output:"3"},{input:'word1 = "intention", word2 = "execution"',output:"5"}],thinkingGuide:[{step:1,question:"🎯 编辑距离的本质是什么？",hint:"操作转换",answer:"是用最少的操作将 word1 变成 word2。操作包括：插入、删除、替换。"},{step:2,question:"❓ 状态怎么定义？",hint:"两个前缀",answer:"dp[i][j] 表示将 word1 的前 i 个字符转换成 word2 的前 j 个字符所需的最少操作数。"},{step:3,question:"🛠️ 如果 word1[i] == word2[j]？",hint:"不需要操作",answer:"那就不用做任何操作，dp[i][j] = dp[i-1][j-1]。"},{step:4,question:"🤔 如果不相等呢？",hint:"三种尝试",answer:"我们可以尝试三种操作，取最小值 + 1：\\n1. 插入：dp[i][j-1] + 1（变成word2前j-1个，再插一个）\\n2. 删除：dp[i-1][j] + 1（把word1第i个删掉，再转）\\n3. 替换：dp[i-1][j-1] + 1（把word1第i个替换成word2第j个）"},{step:5,question:"🛑 边界条件？",hint:"空串",answer:"如果是空串变成长度为j的串，需要插入j次；长度为i的串变成空串，需要删除i次。即第一行和第一列初始化为索引值。"}],codeSteps:[{title:"第1步：初始化DP表",description:"处理边界",code:`public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // 边界：空串变非空串，或非空串变空串
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    // ...
}`,explanation:"dp[i][0]=i表示删i次，dp[0][j]=j表示插j次。"},{title:"第2步：状态转移",description:"三种操作取最小",code:`    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                // 字符相同，继承之前的状态
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 字符不同，取增删改的最小值 + 1
                dp[i][j] = Math.min(dp[i - 1][j - 1], // 替换
                           Math.min(dp[i - 1][j],     // 删除
                                    dp[i][j - 1]))    // 插入
                            + 1;
            }
        }
    }
    // ...`,explanation:"Math.min支持嵌套，或者分开写。"},{title:"第3步：返回结果",description:"右下角",code:`    return dp[m][n];
}`,explanation:"最终结果在右下角。"},{title:"第4步：完整代码",description:"汇总",code:`public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1],
                           Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
            }
        }
    }
    return dp[m][n];
}`,explanation:"📊 复杂度：时间O(mn)，空间O(mn)。"}],interview:{approach:"【面试回答模板】\\n\\n使用二维动态规划。\\n\\n1. **DP定义**：dp[i][j] 表示 word1 前 i 个和 word2 前 j 个字符的最近编辑距离。\\n2. **转移**：\\n   - 如果字符相等，dp[i][j] = dp[i-1][j-1]。\\n   - 如果不等，考虑三种操作（增、删、改）的最小值加 1。\\n     - 替换：dp[i-1][j-1] + 1\\n     - 删除：dp[i-1][j] + 1\\n     - 插入：dp[i][j-1] + 1\\n3. **边界**：dp[i][0] = i, dp[0][j] = j。",timeComplexity:"O(m×n)",spaceComplexity:"O(m×n)，可优化到O(min(m,n))",followUp:[{question:"如何输出操作序列？",answer:"记录每步是从哪个状态转移过来的（左、上、左上），从 dp[m][n] 回溯路径。"}]}},{id:"single-number",title:"只出现一次的数字",titleEn:"Single Number",category:"technique",difficulty:"easy",description:"给你一个非空整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。",examples:[{input:"nums = [2,2,1]",output:"1"},{input:"nums = [4,1,2,1,2]",output:"4"}],thinkingGuide:[{step:1,question:"🤔 如果用HashMap怎么做？",hint:"统计频率",answer:"遍历数组，用Map统计每个数出现的次数，最后找到次数为1的数。由于需要O(n)空间，不符合题目要求的O(1)空间。"},{step:2,question:"🤯 异或运算有什么神奇性质？",hint:"相同为0",answer:"1. a ^ a = 0（任何数和自己异或归零）\\n2. a ^ 0 = a（任何数和0异或不变）\\n3. 满足交换律和结合律：a ^ b ^ a = a ^ a ^ b = 0 ^ b = b"},{step:3,question:"💡 如何利用异或特性？",hint:"全员异或",answer:"把数组中所有数进行异或运算。成对出现的数会两两抵消变成0，最后剩下的就是那个只出现一次的数。"},{step:4,question:"🚧 还有其他位运算方法吗？",hint:"每一位统计",answer:"统计每位（0-31）上1出现的次数，如果是3n+1问题，对3取余就是答案。这里的2n+1同理，对2取余就是答案（其本质就是异或）。"}],codeSteps:[{title:"第1步：初始化变量",description:"初始值",code:`public int singleNumber(int[] nums) {
    int result = 0;
    // ...
}`,explanation:"result初始为0，因为0异或任何数都等于该数本身。"},{title:"第2步：遍历异或",description:"消除成对数",code:`    for (int num : nums) {
        // result = result ^ num
        result ^= num;
    }
    // ...`,explanation:"遍历数组，将每个数与result异或。"},{title:"第3步：完整代码",description:"汇总",code:`public int singleNumber(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n利用异或运算的性质：a^a=0 和 a^0=a。\\n\\n1. **思路**：将数组中所有元素依次进行异或运算。\\n2. **原理**：成对出现的数字会相互抵消为0，只有那个只出现一次的数字会保留下来。\\n3. **优势**：这是唯一满足时间O(n)且空间O(1)的解法。",timeComplexity:"O(n)，遍历一次数组",spaceComplexity:"O(1)，不需要额外存储空间",followUp:[{question:"如果其他数出现3次（Single Number II）？",answer:"统计每一位（0-31）上1的个数，对3取余，还原出结果。"},{question:"如果有两个数分别出现1次（Single Number III）？",answer:"先全员异或得到 x^y，取最低位的1（diff = val & -val）作为分组依据，将数组分为两组，分别异或。"}]}},{id:"majority-element",title:"多数元素",titleEn:"Majority Element",category:"technique",difficulty:"easy",description:"给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数大于 ⌊n/2⌋ 的元素。",examples:[{input:"nums = [3,2,3]",output:"3"},{input:"nums = [2,2,1,1,1,2,2]",output:"2"}],thinkingGuide:[{step:1,question:"🎯 什么是多数元素？",hint:"定义",answer:"出现次数大于 ⌊n/2⌋ 的元素。"},{step:2,question:"🤔 排序法可行吗？",hint:"O(nlogn)",answer:"排序后，中间位置 nums[n/2] 一定是多数元素。但时间复杂度是 O(nlogn)。"},{step:3,question:"💡 如何实现O(n)且O(1)空间？",hint:"摩尔投票",answer:"Boyer-Moore 投票算法。把众数看作 +1，其他数看作 -1。因为众数超过一半，所有数的和一定大于0。"},{step:4,question:"🎲 投票算法的具体逻辑？",hint:"抵消",answer:"维护一个候选人 candidate 和票数 count。如果 count为0，更换候选人；如果是 candidate，count++；否则 count--。"}],codeSteps:[{title:"第1步：初始化",description:"候选人和票数",code:`public int majorityElement(int[] nums) {
    int candidate = nums[0];
    int count = 1;
    // ...
}`,explanation:"假设第一个数是候选人，票数为1。"},{title:"第2步：遍历数组",description:"从第二个数开始",code:`    for (int i = 1; i < nums.length; i++) {
        if (count == 0) {
            // 之前的都被抵消了，重新立新候选人
            candidate = nums[i];
            count = 1;
        } else if (nums[i] == candidate) {
            count++;
        } else {
            count--; // 相互抵消
        }
    }
    // ...`,explanation:"如果count归零，说明当前的候选人已经被完全抵消了，需要换人。"},{title:"第3步：返回结果",description:"最终候选人",code:`    return candidate;
}`,explanation:"题目保证一定存在多数元素，所以剩下的那个一定是。"},{title:"第4步：完整代码",description:"汇总",code:`public int majorityElement(int[] nums) {
    int candidate = nums[0];
    int count = 1;
    for (int i = 1; i < nums.length; i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] == candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用 Boyer-Moore 投票算法。\\n\\n1. **核心思想**：极限一换一。维护一个候选人(candidate)和计数器(count)。\\n2. **过程**：遇到相同元素票数+1，不同元素票数-1。\\n3. **结论**：如果计数器减为0，则更换候选人。因为众数超过一半，它最终一定会留下来。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"如果众数不一定存在？",answer:"需要再遍历一遍数组，统计该 candidate 的实际出现次数，确认是否 > n/2。"},{question:"如果是找 n/3 的众数（全部 II）？",answer:"至多有两个。维护两个候选人 candidate1, candidate2 和两个计数器 count1, count2。"}]}},{id:"sort-colors",title:"颜色分类",titleEn:"Sort Colors",category:"technique",difficulty:"medium",description:"给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。",examples:[{input:"nums = [2,0,2,1,1,0]",output:"[0,0,1,1,2,2]"},{input:"nums = [2,0,1]",output:"[0,1,2]"}],thinkingGuide:[{step:1,question:"🏁 题目要求什么？",hint:"原地排序",answer:"将只包含0, 1, 2的数组排序。0放最前，1放中间，2放最后。要求原地操作，只遍历一次。"},{step:2,question:"💡 如何只遍历一次？",hint:"三指针",answer:"使用三个指针：p0指向0的右边界（插入位置），curr遍历当前元素，p2指向2的左边界（插入位置）。"},{step:3,question:"🧐 遍历时的具体逻辑？",hint:"分情况讨论",answer:"1. nums[curr]==0：和p0交换，p0++, curr++（因为p0交换过来的肯定是1，不用检查）。\\n2. nums[curr]==2：和p2交换，p2--（curr不动，因为交换过来的可能是0或2，需要重新检查）。\\n3. nums[curr]==1：curr++（1就在中间，不用动）。"},{step:4,question:"🛑 什么时候结束？",hint:"curr > p2",answer:"当curr超过p2时，说明剩下的都是2，排序完成。"}],codeSteps:[{title:"第1步：初始化指针",description:"三个指针",code:`public void sortColors(int[] nums) {
    int p0 = 0;              // 指向0的下一个待插入位置
    int curr = 0;            // 当前遍历位置
    int p2 = nums.length - 1; // 指向2的下一个待插入位置
    // ...
}`,explanation:"p0左边都是0，p2右边都是2，中间是1。"},{title:"第2步：循环遍历",description:"直到相遇",code:`    while (curr <= p2) {
        if (nums[curr] == 0) {
            // 遇到0，放到前面去
            swap(nums, curr, p0);
            p0++;
            curr++; // p0位置原来的数只可能是1，所以curr可以安全前进
        } else if (nums[curr] == 2) {
            // 遇到2，放到后面去
            swap(nums, curr, p2);
            p2--;
            // curr不动！因为从p2换回来的数可能是0或2，需要再次检查
        } else {
            // 遇到1，跳过
            curr++;
        }
    }
}`,explanation:"核心逻辑：遇到0找p0换，遇到2找p2换，遇到1不管。"},{title:"第3步：交换函数",description:"辅助函数",code:`private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`,explanation:"标准的交换函数。"},{title:"第4步：完整代码",description:"汇总",code:`public void sortColors(int[] nums) {
    int p0 = 0, curr = 0, p2 = nums.length - 1;
    while (curr <= p2) {
        if (nums[curr] == 0) {
            swap(nums, curr, p0);
            p0++;
            curr++;
        } else if (nums[curr] == 2) {
            swap(nums, curr, p2);
            p2--;
        } else {
            curr++;
        }
    }
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n著名的“荷兰国旗问题”。\\n\\n1. **思路**：使用三指针法。p0维护0的右边界，p2维护2的左边界，curr进行遍历。\\n2. **逻辑**：\\n   - 遇到0：与p0交换，p0和curr都右移。\\n   - 遇到2：与p2交换，p2左移，curr**不动**（关键点）。\\n   - 遇到1：curr右移。\\n3. **复杂度**：一次遍历 O(n)，原地 O(1)。",timeComplexity:"O(n)，每个元素最多被交换一次",spaceComplexity:"O(1)",followUp:[{question:"如果有k种颜色？",answer:"这变成了计数排序。或者使用 O(nlogk) 的排序算法。如果k很小，可以多次划分。"}]}},{id:"next-permutation",title:"下一个排列",titleEn:"Next Permutation",category:"technique",difficulty:"medium",description:"整数数组的一个排列就是将其所有成员以序列或线性顺序排列。实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。",examples:[{input:"nums = [1,2,3]",output:"[1,3,2]"},{input:"nums = [3,2,1]",output:"[1,2,3]"}],thinkingGuide:[{step:1,question:"🤔 字典序“下一个”意味着什么？",hint:"变大一点点",answer:"找到一个比当前排列大，但在所有比它大的排列中最小的那个。"},{step:2,question:"🔍 哪里能“变大”？",hint:"从后往前",answer:"必须把一个较小的数交换到后面去，把一个较大的数交换到前面来。为了变大得幅度最小，我们要找尽可能靠右的改变位置。"},{step:3,question:"📝 具体步骤？",hint:"三步走",answer:"1. **找**：从后往前找第一个“升序对”(i, i+1)，即 nums[i] < nums[i+1]。此时 i 就是要被替换的位置。\\n2. **换**：从后往前找第一个比 nums[i] 大的数 nums[j]，交换它们。\\n3. **翻**：交换后，i 后面的部分是从大到小排列的，需要反转成从小到大（最小）。"},{step:4,question:"🛑 如果找不到升序对？",hint:"最大排列",answer:"说明整个数组是降序的（如 3,2,1），这是最大的排列。反转整个数组变成最小排列（1,2,3）。"}],codeSteps:[{title:"第1步：找升序对",description:"确定替换位置",code:`public void nextPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    // 从后往前找第一个下降的位置
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // ...
}`,explanation:"i 是需要变大的那个位。"},{title:"第2步：找较大数并交换",description:"找最小的大数",code:`    if (i >= 0) {
        int j = n - 1;
        // 从后往前找第一个比 nums[i] 大的数
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    // ...`,explanation:"把比nums[i]稍微大一点的数换过来。"},{title:"第3步：反转后续部分",description:"降序变升序",code:`    // i后面的部分现在是降序的，反转成升序既是最小
    reverse(nums, i + 1, n - 1);
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        swap(nums, start++, end--);
    }
}`,explanation:"保证变大了以后，后面的尾巴是最小的。"},{title:"第4步：完整代码",description:"汇总",code:`public void nextPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        int j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i + 1, n - 1);
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) swap(nums, start++, end--);
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n三步走策略：\\n\\n1. **找第一个下降点**：从后往前找第一个满足 `nums[i] < nums[i+1]` 的 i。\\n2. **找最小的大数**：从后往前找第一个满足 `nums[j] > nums[i]` 的 j，交换 i 和 j。\\n3. **反转**：将 i 之后的部分（此时是降序）反转为升序，使其变小。\\n\\n如果第一步没找到，说明是最大排列，直接反转全部。",timeComplexity:"O(n)，最坏扫描两次数组",spaceComplexity:"O(1)，原地修改",followUp:[{question:"如何求上一个排列？",answer:"逻辑相反：找第一个上升点 nums[i] > nums[i+1]，找比它小的最大数交换，然后反转。"}]}},{id:"find-duplicate",title:"寻找重复数",titleEn:"Find the Duplicate Number",category:"technique",difficulty:"medium",description:"给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。假设 nums 只有一个重复的整数，返回这个重复的数。你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。",examples:[{input:"nums = [1,3,4,2,2]",output:"2"},{input:"nums = [3,1,3,4,2]",output:"3"}],thinkingGuide:[{step:1,question:"🤔 题目约束很奇怪？",hint:"O(1)空间，不修改数组",answer:"不能用哈希表（O(n)空间），不能先排序（修改数组）。这通常暗示“快慢指针”或“二分查找”。"},{step:2,question:"🐢 怎么用快慢指针？",hint:"链表有环",answer:"把数组看作一个链表：索引是节点，nums[i]是next指针。因为有重复数，多个索引指向同一个值，这就在“链表”中形成了环。"},{step:3,question:"🎯 目标是什么？",hint:"环的入口",answer:"重复的那个数，就是链表环的入口节点。问题转化为：在链表中找环的入口。"},{step:4,question:"⚙️ Floyd判圈算法步骤？",hint:"相遇+重置",answer:"1. 快慢指针同时出发，相遇说明有环。\\n2. 保持快指针不动（或者让慢指针回到起点），另一个指针回到起点。\\n3. 两个指针每次都走一步，再次相遇点就是入口。"}],codeSteps:[{title:"第1步：快慢指针找相遇点",description:"Tortoise and Hare",code:`public int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];
    
    // 寻找相遇点
    do {
        slow = nums[slow];        // 走一步
        fast = nums[nums[fast]];  // 走两步
    } while (slow != fast);
    // ...
}`,explanation:"slow走一步，fast走两步，必定在环内相遇。"},{title:"第2步：找环入口",description:"重置并同速",code:`    // 重置slow到起点
    slow = nums[0];
    
    // 两个指针每次都走一步，直到相遇
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}`,explanation:"根据Floyd算法数学推导，相遇点即环入口。"},{title:"第3步：完整代码",description:"汇总",code:`public int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n这是一个“链表找环”问题的数组变体。\\n\\n1. **建模**：把数组看作链表，索引是节点，值是next指针。重复的数就是环的入口。\\n2. **算法**：使用Floyd判圈算法（快慢指针）。\\n   - 第一阶段：快指针走两步，慢指针走一步，直到相遇。\\n   - 第二阶段：慢指针回到起点，快指针保留在相遇处（变为普通指针），两人都每次走一步，再次相遇处即为重复数。\\n3. **符合条件**：不需要额外空间，不修改数组。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"二分查找法怎么做？",answer:"对值域[1, n]二分。统计数组中 <= mid 的数的个数 `cnt`。如果 `cnt > mid`，说明重复数在 [1, mid]，否则在 [mid+1, n]。时间 O(nlogn)。"},{question:"交换法（如果不限制修改数组）？",answer:"把 nums[i] 放到 nums[nums[i]-1] 的位置，发现位置被占了就是重复的。"}]}},{id:"number-of-islands",title:"岛屿数量",titleEn:"Number of Islands",category:"graph",difficulty:"medium",description:"给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。",examples:[{input:'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',output:"1"},{input:'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',output:"3"}],thinkingGuide:[{step:1,question:"🗺️ 题目本质是什么？",hint:"连通分量",answer:"在一个二维网格中，寻找有多少个相连的“1”的块。每个块就是一个岛屿。"},{step:2,question:"🔍 如何找到一个岛屿？",hint:"遍历",answer:"遍历整个网格。当我们遇到一个 '1' 时，说明发现了一个新岛屿。"},{step:3,question:"🚧 发现岛屿后该做什么？",hint:"消灭它",answer:"为了防止重复计算，我们需要把这个岛屿及与其相连的所有 '1' 都标记为已访问（或者直接改成 '0'）。这就好比“沉岛”操作。"},{step:4,question:"🛠️ 用什么算法实现“沉岛”？",hint:"DFS或BFS",answer:"DFS（深度优先）或 BFS（广度优先）都可以。DFS代码更简洁：递归地访问上下左右四个邻居。"}],codeSteps:[{title:"第1步：主循环",description:"遍历网格",code:`public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    int count = 0;
    int m = grid.length, n = grid[0].length;
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j); // 启动沉岛程序
            }
        }
    }
    return count;
}`,explanation:"遇到陆地，岛屿数加1，并把这块陆地所在的岛屿全部“击沉”。"},{title:"第2步：DFS递归",description:"沉岛逻辑",code:`private void dfs(char[][] grid, int i, int j) {
    // 越界或水域则停止
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
        return;
    }
    
    grid[i][j] = '0'; // 标记已访问（变成水）
    
    // 访问四个方向
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}`,explanation:"将当前位置置为0，然后递归处理上下左右。"},{title:"第3步：完整代码",description:"汇总",code:`public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    int count = 0;
    int m = grid.length, n = grid[0].length;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}

private void dfs(char[][] grid, int i, int j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') return;
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}`,explanation:"📊 复杂度：时间O(MN)，空间O(MN)（最坏递归深度）。"}],interview:{approach:"【面试回答模板】\\n\\n典型的图遍历问题（连通分量计数）。\\n\\n1. **策略**：遍历网格，每遇到一个 '1'，岛屿计数加1。\\n2. **沉岛**：随即启动 DFS 或 BFS，将与该 '1' 相连的所有陆地都标记为 '0'（或 visited），避免重复统计。\\n3. **选择**：DFS 代码更短，适合面试。",timeComplexity:"O(M×N)，每个格子最多被访问一次",spaceComplexity:"O(M×N)，最坏情况下的递归栈深度（全为陆地）",followUp:[{question:"如果不允许修改 grid？",answer:"使用一个 boolean[][] visited 数组记录访问状态。"},{question:"如何用并查集（Union Find）？",answer:"初始化 count 为 '1' 的总数。遍历网格，如果 grid[i][j] 和邻居都是 '1'，则 union 它们，同时 count--。"}]}},{id:"rotting-oranges",title:"腐烂的橘子",titleEn:"Rotting Oranges",category:"graph",difficulty:"medium",description:"在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：0 代表空单元格；1 代表新鲜橘子；2 代表腐烂的橘子。每分钟，腐烂的橘子周围 4 个方向上相邻的新鲜橘子都会腐烂。返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。",examples:[{input:"grid = [[2,1,1],[1,1,0],[0,1,1]]",output:"4"},{input:"grid = [[2,1,1],[0,1,1],[1,0,1]]",output:"-1"}],thinkingGuide:[{step:1,question:"🍊 橘子腐烂的过程是怎样的？",hint:"传染",answer:"腐烂橘子会把周围的新鲜橘子变腐烂，是一层一层向外扩散的。这天然对应 BFS（广度优先搜索）。"},{step:2,question:"🤔 有多个腐烂橘子怎么办？",hint:"同时开始",answer:"这是“多源BFS”。所有一开始就腐烂的橘子都是第0层，将它们全部加入队列。"},{step:3,question:"⏱️ 如何计算时间？",hint:"层数",answer:"每一轮 BFS 表示一分钟。我们处理完队列中当前层的所有节点后，时间 +1。"},{step:4,question:"🛑 什么时候结束？",hint:"队列为空",answer:"当队列为空时，扩散结束。最后检查是否还有新鲜橘子剩余，如果有返回 -1，否则返回分钟数。"}],codeSteps:[{title:"第1步：初始化队列",description:"由多源起点",code:`public int orangesRotting(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    Queue<int[]> queue = new LinkedList<>();
    int freshCount = 0;
    
    // 扫描全图，腐烂入队，统计新鲜
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.offer(new int[]{i, j});
            } else if (grid[i][j] == 1) {
                freshCount++;
            }
        }
    }
    // 如果没有新鲜橘子，直接返回0
    if (freshCount == 0) return 0;
    // ...
}`,explanation:"将所有初始腐烂橘子加入队列，这一步是多源BFS的关键。"},{title:"第2步：BFS扩散",description:"按层遍历",code:`    int minutes = 0;
    int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};
    
    while (!queue.isEmpty() && freshCount > 0) {
        int size = queue.size();
        minutes++; // 开始新的一分钟
        
        for (int i = 0; i < size; i++) {
            int[] point = queue.poll();
            for (int[] dir : dirs) {
                int r = point[0] + dir[0];
                int c = point[1] + dir[1];
                // 越界或不是新鲜橘子，跳过
                if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] != 1) continue;
                
                // 传染
                grid[r][c] = 2;
                freshCount--;
                queue.offer(new int[]{r, c});
            }
        }
    }
    // ...`,explanation:"BFS标准层序遍历模板。注意 minutes++ 的位置。"},{title:"第3步：返回结果",description:"检查剩余",code:`    return freshCount == 0 ? minutes : -1;
}`,explanation:"如果还有新鲜橘子没被感染，说明它是孤岛，返回-1。"},{title:"第4步：完整代码",description:"汇总",code:`public int orangesRotting(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    Queue<int[]> queue = new LinkedList<>();
    int freshCount = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 2) queue.offer(new int[]{i, j});
            else if (grid[i][j] == 1) freshCount++;
        }
    }
    if (freshCount == 0) return 0;
    int minutes = 0;
    int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};
    while (!queue.isEmpty() && freshCount > 0) {
        int size = queue.size();
        minutes++;
        for (int i = 0; i < size; i++) {
            int[] p = queue.poll();
            for (int[] d : dirs) {
                int r = p[0] + d[0], c = p[1] + d[1];
                if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == 1) {
                    grid[r][c] = 2;
                    freshCount--;
                    queue.offer(new int[]{r, c});
                }
            }
        }
    }
    return freshCount == 0 ? minutes : -1;
}`,explanation:"📊 复杂度：时间O(MN)，空间O(MN)。"}],interview:{approach:"【面试回答模板】\\n\\n典型的多源 BFS 问题。\\n\\n1. **初始化**：遍历网格，将所有初始状态为“腐烂”的橘子坐标加入队列，并统计“新鲜”橘子的数量。\\n2. **BFS**：按层遍历。每过一层（即一分钟），将队头腐烂橘子周围的新鲜橘子感染（置为2），并加入队列。\\n3. **终止**：当队列为空或没有新鲜橘子时结束。\\n4. **结果**：如果新鲜橘子归零，返回分钟数；否则返回 -1。",timeComplexity:"O(M×N)，所有点最多进出队列一次",spaceComplexity:"O(M×N)",followUp:[{question:"DFS能解吗？",answer:"很难。DFS适合找连通性，不适合找“最短时间/层数”。如果强行用DFS，需要反复更新到达每个点的最短时间，效率低。"}]}},{id:"course-schedule",title:"课程表",titleEn:"Course Schedule",category:"graph",difficulty:"medium",description:"你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。在选修某些课程之前需要一些先修课程。先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则必须先学习课程 bi 。请你判断是否可能完成所有课程的学习？",examples:[{input:"numCourses = 2, prerequisites = [[1,0]]",output:"true"},{input:"numCourses = 2, prerequisites = [[1,0],[0,1]]",output:"false",explanation:"存在循环依赖"}],thinkingGuide:[{step:1,question:"🎓 课程有依赖关系，意味着什么？",hint:"有向图",answer:"这构成了一个有向图。如果课程 A 依赖 B，则 B 指向 A。题目要求判断能否修完所有课，其实就是判断这个有向图中是否有**环**。"},{step:2,question:"🔄 如何检测有向图是否有环？",hint:"拓扑排序",answer:"拓扑排序（Topological Sort）可以用来检测。如果能完成拓扑排序，说明无环；否则有环。"},{step:3,question:"🛠️ Kahn算法的具体步骤？",hint:"入度",answer:"1. 计算每个节点的入度（依赖课程数）。\\n2. 将入度为0的节点（无依赖）加入队列。\\n3. 从队列取出节点，将其指向的邻居节点入度-1。\\n4. 如果邻居节点入度变为0，也加入队列。\\n5. 统计出队节点总数，如果等于课程总数，则成功。"},{step:4,question:"🧪 DFS能做吗？",hint:"递归状态",answer:"DFS也可以。用三种状态标记：未访问、访问中、已完成。如果在“访问中”再次遇到该节点，说明有环。"}],codeSteps:[{title:"第1步：建图和计算入度",description:"初始化",code:`public boolean canFinish(int numCourses, int[][] prerequisites) {
    int[] indegree = new int[numCourses];
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) graph.add(new ArrayList<>());
    
    for (int[] relation : prerequisites) {
        // relation[1] -> relation[0]
        graph.get(relation[1]).add(relation[0]);
        indegree[relation[0]]++;
    }
    // ...
}`,explanation:"有向边由前置课程指向后续课程。"},{title:"第2步：入度为0入队",description:"BFS起点",code:`    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) queue.offer(i);
    }
    // ...`,explanation:"入度为0表示这门课可以直接修。"},{title:"第3步：BFS拓扑排序",description:"核心循环",code:`    int count = 0; // 记录已修课程数
    while (!queue.isEmpty()) {
        int course = queue.poll();
        count++;
        
        for (int nextCourse : graph.get(course)) {
            indegree[nextCourse]--;
            if (indegree[nextCourse] == 0) {
                queue.offer(nextCourse);
            }
        }
    }
    
    return count == numCourses;
}`,explanation:"每修完一门课，它的后续课程依赖减1。"},{title:"第4步：完整代码",description:"汇总",code:`public boolean canFinish(int numCourses, int[][] prerequisites) {
    int[] indegree = new int[numCourses];
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) graph.add(new ArrayList<>());
    for (int[] r : prerequisites) {
        graph.get(r[1]).add(r[0]);
        indegree[r[0]]++;
    }
    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) queue.offer(i);
    int count = 0;
    while (!queue.isEmpty()) {
        count++;
        for (int next : graph.get(queue.poll())) {
            if (--indegree[next] == 0) queue.offer(next);
        }
    }
    return count == numCourses;
}`,explanation:"📊 复杂度：时间O(V+E)，空间O(V+E)。"}],interview:{approach:"【面试回答模板】\\n\\n典型的拓扑排序问题。\\n\\n1. **核心**：判断有向图是否有环。使用 Kahn 算法（基于 BFS）。\\n2. **实现**：\\n   - 构建邻接表，并统计每个节点的入度。\\n   - 将所有入度为 0 的节点入队。\\n   - 循环出队，每修一门课，将其所有后继课程入度减 1。若减为 0 则入队。\\n3. **结果**：比较出队（已修）课程数是否等于总课程数。",timeComplexity:"O(V+E)，V是课程数，E是依赖关系数",spaceComplexity:"O(V+E)，存储图结构",followUp:[{question:"如何输出所有可能的学习路径？",answer:"这是一个复杂的全排列生成问题，需要在拓扑排序的基础上使用回溯法。"},{question:"DFS 怎么写？",answer:"使用 visited 数组记录状态：0-未访问，1-正在访问（递归栈中），2-已完成。如果遇到 1，说明有环。"}]}},{id:"implement-trie",title:"实现 Trie (前缀树)",titleEn:"Implement Trie (Prefix Tree)",category:"graph",difficulty:"medium",description:'Trie（发音类似 "try"）或者说前缀树是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。请你实现 Trie 类。',examples:[{input:`["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]`,output:"[null, null, true, false, true, null, true]"}],thinkingGuide:[{step:1,question:"🌳 Trie（前缀树）是干什么的？",hint:"高效前缀搜索",answer:"一种多叉树结构，专门用于高效处理字符串的前缀匹配。每个节点代表一个字符。"},{step:2,question:"🧱 节点结构怎么设计？",hint:"子节点数组",answer:"每个节点包含一个大小为 26 的 `children` 数组（对应 a-z）和一个 `isEnd` 布尔标记（表示是否是单词结尾）。"},{step:3,question:"📥 如何插入单词？",hint:"逐层向下",answer:"从根节点开始，按照单词的每个字符向下遍历。如果子节点不存在，就创建新的。遍历完后，将最后一个节点标记为 `isEnd = true`。"},{step:4,question:"🔍 如何查找单词或前缀？",hint:"一样遍历",answer:"同样的遍历逻辑。如果中途子节点不存在，返回 false。如果是查找单词，最后检查 `isEnd`；如果是前缀，只要路径存在就返回 true。"}],codeSteps:[{title:"第1步：Trie节点嵌套类",description:"数据结构",code:`class Trie {
    // 定义节点结构
    class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEnd = false;
    }
    
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }
    // ...
}`,explanation:"标准Trie节点结构。"},{title:"第2步：插入操作",description:"Insert",code:`    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }
    // ...`,explanation:"根据字符路径创建节点，末尾标记。"},{title:"第3步：通用查找",description:"Search Prefix",code:`    // 辅助函数：查找前缀对应的最后一个节点
    private TrieNode searchPrefix(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) return null;
            node = node.children[index];
        }
        return node;
    }

    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEnd;
    }

    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }`,explanation:"search要求isEnd为true，startsWith只要求路径存在。"},{title:"第4步：完整代码",description:"汇总",code:`class Trie {
    class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEnd = false;
    }
    private TrieNode root;
    public Trie() { root = new TrieNode(); }
    
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int i = c - 'a';
            if (node.children[i] == null) node.children[i] = new TrieNode();
            node = node.children[i];
        }
        node.isEnd = true;
    }
    
    private TrieNode find(String s) {
        TrieNode node = root;
        for (char c : s.toCharArray()) {
            int i = c - 'a';
            if (node.children[i] == null) return null;
            node = node.children[i];
        }
        return node;
    }
    
    public boolean search(String word) {
        TrieNode node = find(word);
        return node != null && node.isEnd;
    }
    
    public boolean startsWith(String prefix) {
        return find(prefix) != null;
    }
}`,explanation:"📊 复杂度：时间O(L)，空间O(26*L)。L是单词长度。"}],interview:{approach:"【面试回答模板】\\n\\n实现 Trie 树（前缀树）。\\n\\n1. **结构**：定义 TrieNode，包含 `children[26]` 数组和 `isEnd` 标记。\\n2. **Insert**：从根开始，按字符索引向下走，不存在则 new，最后标记 isEnd。\\n3. **Search**：同样向下走，如果遇到 null 返回 false。最后检查 isEnd。\\n4. **StartsWith**：逻辑同 Search，但最后不需要检查 isEnd，只要节点存在即可。",timeComplexity:"O(L)，L是字符串长度",spaceComplexity:"O(N×26×L)，N是单词数量，最坏情况无公共前缀",followUp:[{question:"如果字符集不仅是小写字母？",answer:"可以用 HashMap<Character, TrieNode> 替代 children数组。"},{question:"如何删除一个单词？",answer:"递归删除。回溯时如果节点没有其他子节点且 isEnd 为 false，则可以移除该节点。"}]}},{id:"intersection-of-two-linked-lists",title:"相交链表",titleEn:"Intersection of Two Linked Lists",category:"linked-list",difficulty:"easy",description:"给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。",examples:[{input:"listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], 相交节点值为 8",output:"8"},{input:"listA = [2,6,4], listB = [1,5], 不相交",output:"null"}],thinkingGuide:[{step:1,question:"🤔 两个链表相交是什么意思？",hint:"Y字形",answer:'它们从某一点开始合并，之后的所有节点都相同（引用相同，不仅值相同）。形状像一个躺着的 "Y" 或 ">"。'},{step:2,question:"📏 长度不一样怎么办？",hint:"对齐",answer:"如果 A 长 B 短，A 的指针先走 `lenA - lenB` 步，然后一起走，相遇点即为交点。"},{step:3,question:"💡 有更优雅的写法吗？",hint:"走完A走B",answer:"双指针法：pA 走 A，走到头转到 B；pB 走 B，走到头转到 A。"},{step:4,question:"✨ 为什么这样能相遇？",hint:"总路程相等",answer:"pA 走了 `lenA + common + lenB`，pB 走了 `lenB + common + lenA`。步数相同，一定会同时到达交点（或者同时到达 null）。"}],codeSteps:[{title:"第1步：双指针初始化",description:"指向头节点",code:`public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    ListNode pA = headA;
    ListNode pB = headB;
    // ...
}`,explanation:"准备两个指针同时遍历。"},{title:"第2步：循环直到相遇",description:"核心逻辑",code:`    while (pA != pB) {
        // pA走完A转B，否则走一步
        pA = (pA == null) ? headB : pA.next;
        // pB走完B转A，否则走一步
        pB = (pB == null) ? headA : pB.next;
    }
    // ...`,explanation:"如果相交，会在交点相遇；如果不相交，最后都会变成 null（相等退出）。"},{title:"第3步：返回结果",description:"相遇点",code:`    return pA;
}`,explanation:"pA 就是交点或 null。"},{title:"第4步：完整代码",description:"汇总",code:`public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    ListNode pA = headA, pB = headB;
    while (pA != pB) {
        pA = (pA == null) ? headB : pA.next;
        pB = (pB == null) ? headA : pB.next;
    }
    return pA;
}`,explanation:"📊 复杂度：时间O(M+N)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用双指针浪漫相遇法。\\n\\n1. **思路**：让两个指针走过的路程相等。A指针走完A链表后走B，B指针走完B链表后走A。\\n2. **原理解析**：设链表A非公共部分长a，链表B非公共部分长b，公共部分长c。\\n   - 指针A路程：a + c + b\\n   - 指针B路程：b + c + a\\n   - 所以它们一定会在进入公共部分的起点相遇。\\n3. **兜底**：如果不相交，它们会同时走到末尾的 null，也会相等退出。",timeComplexity:"O(M+N)",spaceComplexity:"O(1)",followUp:[{question:"如果链表有环？",answer:"问题会变得很复杂。需要先判断各自是否有环，如果有，判断入环点是否相同等情况。"}]}},{id:"reverse-linked-list",title:"反转链表",titleEn:"Reverse Linked List",category:"linked-list",difficulty:"easy",description:"给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。",examples:[{input:"head = [1,2,3,4,5]",output:"[5,4,3,2,1]"},{input:"head = [1,2]",output:"[2,1]"}],thinkingGuide:[{step:1,question:"🔄 反转链表的核心动作是什么？",hint:"改变指向",answer:"把 curr.next 指向 prev。但在改变指向前，必须先保存 curr.next，否则链表就断了。"},{step:2,question:"🛠️ 需要几个指针？",hint:"三个",answer:"需要 prev（前驱）、curr（当前）、next（后继）三个指针。初始时 prev = null, curr = head。"},{step:3,question:"📝 迭代过程是怎样的？",hint:"移动",answer:"1. 保存 next = curr.next\\n2. 反转 curr.next = prev\\n3. 移动 prev = curr\\n4. 移动 curr = next"},{step:4,question:"🛑 结束条件？",hint:"curr为null",answer:"当 curr 为 null 时，链表遍历结束，此时 prev 指向原链表的尾部（新链表的头），返回 prev。"}],codeSteps:[{title:"第1步：初始化指针",description:"双指针",code:`public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    // ...
}`,explanation:"prev 将成为新链表的头。"},{title:"第2步：循环反转",description:"核心逻辑",code:`    while (curr != null) {
        ListNode next = curr.next;  // 1. 暂存后继节点
        curr.next = prev;           // 2. 修改引用指向前驱
        prev = curr;                // 3. prev暂存当前节点
        curr = next;                // 4. curr继续往下走
    }
    // ...`,explanation:"经典的四步操作，顺序不能乱。"},{title:"第3步：返回结果",description:"新头节点",code:`    return prev;
}`,explanation:"循环结束时 curr 是 null，prev 是原尾节点（新头）。"},{title:"第4步：完整代码",description:"汇总",code:`public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用迭代法（双指针）。\\n\\n1. **定义**：prev 指针指向 null，curr 指针指向 head。\\n2. **遍历**：在遍历过程中，先用 next 指针保存 curr.next，然后将 curr.next 指向 prev（反转），最后同步移动 prev 和 curr。\\n3. **结果**：遍历结束时，curr 为 null，prev 即为反转后的头节点。",timeComplexity:"O(n)，遍历一次链表",spaceComplexity:"O(1)，仅使用常数个指针",followUp:[{question:"递归怎么写？",answer:"reverse(head) 返回新头。head.next.next = head; head.next = null; 返回新头。需要注意 Base Case。"}]}},{id:"palindrome-linked-list",title:"回文链表",titleEn:"Palindrome Linked List",category:"linked-list",difficulty:"easy",description:"给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。",examples:[{input:"head = [1,2,2,1]",output:"true"},{input:"head = [1,2]",output:"false"}],thinkingGuide:[{step:1,question:"🤔 回文链表的难点在哪？",hint:"不能随机访问",answer:"无法像数组那样直接用双指针从两头向中间比较。必须找到中点，操作其中一半。"},{step:2,question:"💡 如何O(1)空间解决？",hint:"快慢指针 + 反转",answer:"1. 快慢指针找中点。\\n2. 反转后半部分链表。\\n3. 比较前半部分和反转后的后半部分。\\n4. (可选) 恢复链表。"},{step:3,question:"🐢 找中点细节？",hint:"偶数长度",answer:"快指针一次走两步，慢指针一次走一步。快指针停在末尾时，慢指针在中点（或中点前一个）。"},{step:4,question:"🔄 怎么比较？",hint:"逐个节点",answer:"双指针分别从头节点和后半部分头节点开始，逐个比较值。如果都相等且遍历完，就是回文。"}],codeSteps:[{title:"第1步：找中点",description:"快慢指针",code:`public boolean isPalindrome(ListNode head) {
    if (head == null) return true;
    ListNode fast = head, slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // ...
}`,explanation:"循环结束时，slow 位于中点（奇数长）或后半段起点（偶数长）。"},{title:"第2步：反转后半部分",description:"调用反转函数",code:`    ListNode secondHalf = reverse(slow);
    ListNode firstHalf = head;
    ListNode p1 = firstHalf;
    ListNode p2 = secondHalf;
    boolean result = true;
    // ...`,explanation:"将后半段链表反转，以便从外向内（在原链表视角是向内）比较。"},{title:"第3步：比较",description:"逐节点对比",code:`    while (result && p2 != null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }
    // 恢复链表（可选但推荐）
    reverse(secondHalf);
    return result;
}

private ListNode reverse(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,explanation:"比较过程中一旦发现不相等，即可标记为 false。记得最后恢复链表结构。"},{title:"第4步：完整代码",description:"汇总",code:`public boolean isPalindrome(ListNode head) {
    if (head == null) return true;
    ListNode fast = head, slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    ListNode second = reverse(slow);
    ListNode p1 = head, p2 = second;
    boolean isPal = true;
    while (isPal && p2 != null) {
        if (p1.val != p2.val) isPal = false;
        p1 = p1.next;
        p2 = p2.next;
    }
    reverse(second);
    return isPal;
}

private ListNode reverse(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n三步走策略（O(1)空间）：\\n\\n1. **找中点**：使用快慢指针，快指针两步，慢指针一步，找到链表中间节点。\\n2. **反转后半**：从中间节点开始，反转后半部分链表。\\n3. **比较**：前后两个指针同步走，比较值是否相等。\\n\\n最后记得恢复链表，不要破坏原结构，这是一个加分项。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"递归怎么做？",answer:"利用递归栈模拟倒序遍历。定义全局变量 frontPointer，递归到最底层（尾部）后，与 frontPointer 比较，然后 frontPointer 右移。空间 O(n)。"}]}},{id:"linked-list-cycle",title:"环形链表",titleEn:"Linked List Cycle",category:"linked-list",difficulty:"easy",description:"给你一个链表的头节点 head ，判断链表中是否有环。",examples:[{input:"head = [3,2,0,-4], pos = 1",output:"true"},{input:"head = [1], pos = -1",output:"false"}],thinkingGuide:[{step:1,question:"🏃 怎么判断链表有环？",hint:"操场跑圈",answer:"想象两个人跑步。如果跑道是直的，快的会先到终点。如果是环形的，快的总会追上慢的（套圈）。"},{step:2,question:"🐢 算法如何设计？",hint:"快慢指针",answer:"定义 slow 指针每次走 1 步，fast 指针每次走 2 步。"},{step:3,question:"🛑 终止条件？",hint:"相遇或结束",answer:"如果 fast 走到 null，说明无环。如果 fast 和 slow 相遇（fast == slow），说明有环。"},{step:4,question:"🤔 为什么一定会相遇？",hint:"相对速度",answer:"fast 相对 slow 的速度是 1 步/次。在环中，fast 会一步步缩短与 slow 的距离，像时钟的秒针追分针一样，绝对不会跳过去。"}],codeSteps:[{title:"第1步：初始化",description:"定义快慢指针",code:`public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    ListNode slow = head;
    ListNode fast = head;
    // ...
}`,explanation:"一般从头节点开始。"},{title:"第2步：追及循环",description:"快慢跑",code:`    while (fast != null && fast.next != null) {
        slow = slow.next;       // 慢走1步
        fast = fast.next.next;  // 快走2步
        
        if (slow == fast) {
            return true;        // 相遇即有环
        }
    }
    return false; // 跑到尽头即无环
}`,explanation:"注意检查 fast.next 防止空指针异常。"},{title:"第3步：完整代码",description:"汇总",code:`public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用 Floyd 判圈算法（快慢指针）。\\n\\n1. **原理**：定义两个指针，slow 每次走一步，fast 每次走两步。\\n2. **判断**：\\n   - 如果链表无环，fast 会先到达尾部 null。\\n   - 如果链表有环，fast 会进入环并在环内追上 slow，两人相遇。\\n3. **效率**：空间复杂度 O(1)，时间复杂度 O(n)。",timeComplexity:"O(n)，快指针大约跑两圈",spaceComplexity:"O(1)",followUp:[{question:"如果 fast 走 3 步呢？",answer:"也能相遇，但可能绕更多圈。相对速度是 2，可能出现跳过的情况（取决于环长），但最终还是会撞上。走 2 步最稳。"}]}},{id:"linked-list-cycle-ii",title:"环形链表 II",titleEn:"Linked List Cycle II",category:"linked-list",difficulty:"medium",description:"给定一个链表的头节点 head ，返回链表开始入环的第一个节点。如果链表无环，则返回 null。",examples:[{input:"head = [3,2,0,-4], pos = 1",output:"返回索引为 1 的链表节点"},{input:"head = [1], pos = -1",output:"null"}],thinkingGuide:[{step:1,question:"🎯 题目不仅要判圈，还要找入口？",hint:"数学推导",answer:"是的。在 fast 和 slow 相遇后，还需要一步操作才能找到入口。"},{step:2,question:"📐 怎么推导？",hint:"设距离",answer:"设头到入口距离为 x，入口到相遇点为 y，环长为 C。\\n相遇时：\\nslow 走了 x + y\\nfast 走了 x + y + n*C\\n因为 fast = 2*slow，所以 x + y + n*C = 2(x + y)。\\n解得 x = n*C - y。"},{step:3,question:"💡 这个公式 x = n*C - y 意味着什么？",hint:"两者相遇",answer:"意味着：一个指针从头开始走 x 步；另一个指针从相遇点继续走 n*C - y 步（也就是走完剩下的一圈距离），它们会在入口处相遇。"},{step:4,question:"🏃 操作步骤？",hint:"同速",answer:"1. 快慢指针找相遇点。\\n2. 保持一个指针在相遇点，另一个指针回到 Head。\\n3. 两个指针同时每次走 1 步，再次相遇点就是入口。"}],codeSteps:[{title:"第1步：快慢指针找相遇",description:"和很多题目一样",code:`public ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break; // 找到相遇点，跳出循环
        }
    }
    // 检查是否是因为到了末尾才退出的
    if (fast == null || fast.next == null) return null;
    // ...
}`,explanation:"先确认有环。"},{title:"第2步：找入口",description:"数学魔法",code:`    // fast回到头部（这里复用fast变量）
    fast = head;
    // slow还在相遇点
    
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next; // 两个都走一步
    }
    
    return slow; // 相遇点即为入口
}`,explanation:"根据 x = nC - y，两者此时相距 x，必然在入口相遇。"},{title:"第3步：完整代码",description:"汇总",code:`public ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            ListNode ptr1 = head;
            ListNode ptr2 = slow;
            while (ptr1 != ptr2) {
                ptr1 = ptr1.next;
                ptr2 = ptr2.next;
            }
            return ptr1;
        }
    }
    return null;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n1. **判圈**：快慢指针找到相遇点。\\n2. **找入口**：利用数学推导 `offset = n * Loop - remaining`。让一个指针回到头节点，另一个指针保留在相遇点。\\n3. **同步走**：两个指针都每次走一步，它们一定会在环的入口处相遇。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"n*C - y 是什么意思？",answer:"相遇点离环入口的剩余距离是 C - y。n*C - y 只是多转了几圈，最终还是会停在入口。"}]}},{id:"merge-two-sorted-lists",title:"合并两个有序链表",titleEn:"Merge Two Sorted Lists",category:"linked-list",difficulty:"easy",description:"将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。",examples:[{input:"list1 = [1,2,4], list2 = [1,3,4]",output:"[1,1,2,3,4,4]"},{input:"list1 = [], list2 = [0]",output:"[0]"}],thinkingGuide:[{step:1,question:"🧵 就像拉链一样合并？",hint:"两两比较",answer:"是的。我们可以用两个指针分别指向两个链表的头，比较它们的值，谁小谁就先进入新链表。"},{step:2,question:"🛠️ 新链表的头怎么定？",hint:"哨兵节点",answer:"为了避免处理空头的情况，创建一个 `dummy` 节点（哨兵），最后返回 `dummy.next`。"},{step:3,question:"🔄 过程是怎样的？",hint:"While循环",answer:"只要 list1 和 list2 都不为空，就比较 val，把较小的接到 tail 后面，然后移动指针。"},{step:4,question:"🔚 剩下的节点怎么办？",hint:"直接接上",answer:"如果一个链表先走完了，另一个链表剩下的部分直接接到后面就行了（因为是有序的）。"}],codeSteps:[{title:"第1步：初始化",description:"哨兵和指针",code:`public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dummy = new ListNode(-1);
    ListNode tail = dummy;
    // ...
}`,explanation:"dummy 节点让代码逻辑统一，不需要判断头节点是否为空。"},{title:"第2步：循环比较",description:"择优录取",code:`    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    // ...`,explanation:"谁小移谁，tail 紧随其后。"},{title:"第3步：连接剩余",description:"处理尾巴",code:`    if (list1 != null) {
        tail.next = list1;
    } else if (list2 != null) {
        tail.next = list2;
    }
    
    return dummy.next;
}`,explanation:"不管剩下多少，直接由next指针连过去，O(1)操作。"},{title:"第4步：完整代码",description:"汇总",code:`public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dummy = new ListNode(-1);
    ListNode tail = dummy;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = (list1 != null) ? list1 : list2;
    return dummy.next;
}`,explanation:"📊 复杂度：时间O(m+n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用迭代法（双指针）。\\n\\n1. **哨兵**：创建 dummy 节点简化头节点处理。\\n2. **比较**：两个指针分别遍历 l1, l2，谁小就把谁接到 dummy 后面，并移动对应指针。\\n3. **收尾**：如果一个链表先空，直接把另一个链表剩余部分接上。\\n\\n这种方法清晰且鲁棒。",timeComplexity:"O(m+n)",spaceComplexity:"O(1)",followUp:[{question:"递归怎么写？",answer:"Base case: if (!l1) return l2; if (!l2) return l1; Recursive: if (l1<l2) { l1.next = merge(l1.next, l2); return l1; }"}]}},{id:"add-two-numbers",title:"两数相加",titleEn:"Add Two Numbers",category:"linked-list",difficulty:"medium",description:"给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。请你将两个数相加，并以相同形式返回一个表示和的链表。",examples:[{input:"l1 = [2,4,3], l2 = [5,6,4]",output:"[7,0,8]",explanation:"342 + 465 = 807"},{input:"l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",output:"[8,9,9,9,0,0,0,1]"}],thinkingGuide:[{step:1,question:"🔢 怎么把链表看成数字相加？",hint:"逆序存储",answer:"链表本身就是逆序存储的（个位在头节点），这正好符合我们小学做加法的习惯：从个位（头节点）开始一位位往后算。"},{step:2,question:"➕ 加法运算的核心是什么？",hint:"进位",answer:"当前位的和 = 节点1的值 + 节点2的值 + 进位(carry)。结果位的值是 sum % 10，新的进位是 sum / 10。"},{step:3,question:"🧵 两个链表长度不一样怎么办？",hint:"补0",answer:"只要还有一个链表没走完，或者还有进位（carry > 0），就继续循环。缺少的那个节点视为0即可。"},{step:4,question:"📝 结果链表怎么构建？",hint:"哨兵/虚拟头节点",answer:"新建一个 `dummy` 节点。每次算出一个个位数，就 new `ListNode(val)` 接到 `curr` 后面，`curr` 后移。"}],codeSteps:[{title:"第1步：初始化",description:"定义变量",code:`public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    int carry = 0;
    // ...
}`,explanation:"carry 用于保存进位，dummy 用于简化链表构建。"},{title:"第2步：循环相加",description:"遍历链表",code:`    while (l1 != null || l2 != null || carry != 0) {
        // 取值，若链表已空则取0
        int val1 = (l1 != null) ? l1.val : 0;
        int val2 = (l2 != null) ? l2.val : 0;
        
        // 计算当前 sum 和 新的 carry
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        
        // 创建新节点
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        
        // 移动指针
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    return dummy.next;
}`,explanation:"核心逻辑：三个条件满足其一（l1有数、l2有数、还有进位）就继续。"},{title:"第3步：完整代码",description:"汇总",code:`public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    int carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        int x = (l1 != null) ? l1.val : 0;
        int y = (l2 != null) ? l2.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    return dummy.next;
}`,explanation:"📊 复杂度：时间O(max(m,n))，空间O(1)（不算结果链表）。"}],interview:{approach:"【面试回答模板】\\n\\n使用模拟法。\\n\\n1. **初始化**：创建一个 Dummy Head 方便返回结果，变量 `carry` 存储进位。\\n2. **循环**：只要 `l1` 或 `l2` 不为空，或者 `carry > 0`（最后还有进位），就继续。\\n3. **计算**：对于空节点视作 0，计算 `sum = v1 + v2 + carry`。新节点值是 `sum % 10`，新进位是 `sum / 10`。\\n\\n逻辑清晰，且能自然处理不同长度链表和由于最高位进位导致的长度增加。",timeComplexity:"O(max(m,n))",spaceComplexity:"O(1)（返回结果不计入空间复杂度）",followUp:[{question:"如果链表是正序存储的（高位在头）？",answer:"两种解法：1. 反转链表后相加（变成这一题）。2. 使用栈（Stack）先把所有数字压进去，弹出来计算就是低位到高位。"}]}},{id:"remove-nth-from-end",title:"删除链表的倒数第 N 个结点",titleEn:"Remove Nth Node From End of List",category:"linked-list",difficulty:"medium",description:"给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",examples:[{input:"head = [1,2,3,4,5], n = 2",output:"[1,2,3,5]"},{input:"head = [1], n = 1",output:"[]"}],thinkingGuide:[{step:1,question:"🤔 怎么只遍历一次就找到倒数第 N 个节点？",hint:"尺子",answer:"想象一把长为 N 的尺子。让「尺子」的右端先走到链表头部的第 N+1 个位置，左端还在起点。"},{step:2,question:"🏃 然后怎么做？",hint:"同步平移",answer:"让尺子整体向右移动（快慢指针同时走），直到尺子右端到达链表末尾 null。"},{step:3,question:"🎯 此时慢指针在哪？",hint:"倒数第N+1",answer:"此时左端（慢指针）正好停在倒数第 N 个节点的前一个节点（即倒数第 N+1 个位置）。"},{step:4,question:"✂️ 为什么要停在前一个？",hint:"删除操作",answer:"因为单向链表要删除一个节点，必须拿到它前面那个节点的引用，才能执行 `prev.next = prev.next.next`。"}],codeSteps:[{title:"第1步：初始化",description:"哨兵和指针",code:`public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0, head);
    ListNode fast = dummy;
    ListNode slow = dummy;
    // ...
}`,explanation:"dummy 是为了处理可能删除头节点的情况（如 [1], n=1）。"},{title:"第2步：拉开间距",description:"快指针先跑",code:`    // 快指针先走 n+1 步
    for (int i = 0; i <= n; i++) {
        fast = fast.next;
    }
    // ...`,explanation:"现在 fast 和 slow 之间隔了 n 个节点。"},{title:"第3步：同步移动与删除",description:"找到并删除",code:`    // 两个指针一起走，直到 fast 到底
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // 此时 slow 在待删除节点的前一个位置
    slow.next = slow.next.next;
    
    return dummy.next;
}`,explanation:"执行删除操作，并返回新链表头。"},{title:"第4步：完整代码",description:"汇总",code:`public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0, head);
    ListNode fast = dummy, slow = dummy;
    for (int i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}`,explanation:"📊 复杂度：时间O(n)一次遍历，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用快慢指针（双指针）。\\n\\n1. **技巧**：使用 Dummy Head 处理删除头节点的边界情况。\\n2. **步骤**：\\n   - 让 Fast 指针先走 `n + 1` 步。\\n   - 然后 Fast 和 Slow 同时移动，直到 Fast 指向 null。\\n   - 此时 Slow 正好处于倒数第 `n + 1` 个节点（待删除节点的前驱）。\\n3. **删除**：执行 `slow.next = slow.next.next`。\\n\\n核心在于让两个指针保持 `n` 的间距，一次遍历解决问题。",timeComplexity:"O(n)，一次遍历",spaceComplexity:"O(1)",followUp:[{question:"为什么要走 n+1 步而不是 n 步？",answer:"走 n 步 slow 会停在倒数第 n 个节点本身。走 n+1 步 slow 停在其前驱，方便做删除操作 (`prev.next = target.next`)。"}]}},{id:"swap-nodes-in-pairs",title:"两两交换链表中的节点",titleEn:"Swap Nodes in Pairs",category:"linked-list",difficulty:"medium",description:"给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。",examples:[{input:"head = [1,2,3,4]",output:"[2,1,4,3]"},{input:"head = [1]",output:"[1]"}],thinkingGuide:[{step:1,question:"🔄 交换两个节点需要动几个指针？",hint:"画图看看",answer:"需要动3个指针。假设是 `prev -> 1 -> 2 -> 3`，变成 `prev -> 2 -> 1 -> 3`。\\n需要修改：`prev.next` (指向2), `1.next` (指向3), `2.next` (指向1)。"},{step:2,question:"🔁 如何处理这种重复操作？",hint:"迭代或递归",answer:"两种方式：迭代法更直观，空间O(1)；递归法代码更简洁，但从理解上迭代法是基础。"},{step:3,question:"🛡️ 头节点也要交换怎么处理？",hint:"虚拟头节点",answer:"老规矩，用 Dummy Node 指向 Head。那么第一个 pair (1,2) 也可以看作是 `dummy -> 1 -> 2`，跟中间的逻辑就一样了。"},{step:4,question:"🛑 循环终止条件？",hint:"剩0个或1个",answer:"如果 `curr.next` (第一个节点) 为空，或者 `curr.next.next` (第二个节点) 为空，就不用换了。"}],codeSteps:[{title:"第1步：初始化",description:"哨兵和指针",code:`public ListNode swapPairs(ListNode head) {
    ListNode dummy = new ListNode(0, head);
    ListNode prev = dummy;
    // ...
}`,explanation:"prev 表示要交换的这一对节点的前驱节点。"},{title:"第2步：交换逻辑",description:"三步走",code:`    while (prev.next != null && prev.next.next != null) {
        ListNode first = prev.next;
        ListNode second = prev.next.next;
        
        // 1. 前驱指向第二个
        prev.next = second;
        // 2. 第一个指向第三个（即原本第二个的next）
        first.next = second.next;
        // 3. 第二个指向第一个
        second.next = first;
        
        // 指针后移两步，准备处理下一对
        prev = first;
    }
    return dummy.next;
}`,explanation:"注意顺序，不要把链表断开了。first此时到了后面，成为下一轮的prev。"},{title:"第3步：完整代码",description:"汇总",code:`public ListNode swapPairs(ListNode head) {
    ListNode dummy = new ListNode(0, head);
    ListNode prev = dummy;
    while (prev.next != null && prev.next.next != null) {
        ListNode first = prev.next;
        ListNode second = prev.next.next;
        prev.next = second;
        first.next = second.next;
        second.next = first;
        prev = first;
    }
    return dummy.next;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n推荐使用**迭代法**加上**虚拟头节点**。\\n\\n1. **初始化**：Dummy 节点指向 head，`prev` 指针指向 Dummy。\\n2. **循环**：只要 `prev` 后面还有两个节点（`node1`, `node2`），就执行交换：\\n   - `prev.next` 指向 `node2`\\n   - `node1.next` 指向 `node2.next`（接上下面的链表）\\n   - `node2.next` 指向 `node1`（完成反转）\\n3. **步进**：`prev` 移动到 `node1`（原来的第一个，现在排在后面了），准备处理下一对。\\n\\n这种方法空间复杂度O(1)，且不易出错。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"递归怎么写？",answer:"`ListNode next = head.next; head.next = swapPairs(next.next); next.next = head; return next;`。代码短但空间O(n)。"}]}},{id:"reverse-nodes-in-k-group",title:"K 个一组翻转链表",titleEn:"Reverse Nodes in k-Group",category:"linked-list",difficulty:"hard",description:"给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。",examples:[{input:"head = [1,2,3,4,5], k = 2",output:"[2,1,4,3,5]"},{input:"head = [1,2,3,4,5], k = 3",output:"[3,2,1,4,5]"}],thinkingGuide:[{step:1,question:"🧐 题目要求每 K 个一组翻转，不足 K 个不翻转。",hint:"分解子问题",answer:"先把链表按 K 个一组切分开，每一组内部用“反转链表”的逻辑，然后把这些组再重新连起来。"},{step:2,question:"🔄 翻转一个子链表需要哪些参数？",hint:"头和尾",answer:"需要知道这一组的 `start` 和 `end`。翻转后，原来的 `start` 变成了尾，要连向下一组的头；原来的 `end` 变成了头，要被上一组的尾连上。"},{step:3,question:"🔍 怎么检查是否足够 K 个？",hint:"循环",answer:"用一个指针从当前位置往后走 K 步，如果中途遇到 null，说明不足 K 个，不用翻转，直接返回。"},{step:4,question:"🧵 怎么把各组穿起来？",hint:"哨兵节点",answer:"维护一个 `prevGroupEnd` 指针（初始指向 dummy），每次翻转完一组，就让 `prevGroupEnd.next` 指向这一组新的头，更新 `prevGroupEnd` 为这一组新的尾。"}],codeSteps:[{title:"第1步：初始化",description:"哨兵和辅助函数",code:`public ListNode reverseKGroup(ListNode head, int k) {
    ListNode dummy = new ListNode(0, head);
    ListNode prevGroupEnd = dummy;
    // ...
}

// 辅助函数：反转区间 [start, end) 的链表，返回新的头（即end的前一个）
// 注意：这个简化写法可以直接在主函数里做
`,explanation:"prevGroupEnd 始终指向已处理好的部分的尾部。"},{title:"第2步：循环检查 K 个",description:"寻找分组边界",code:`    while (true) {
        ListNode kth = prevGroupEnd;
        // 往后走 k 步
        for (int i = 0; i < k; i++) {
            kth = kth.next;
            if (kth == null) return dummy.next; // 不足 k 个，保持原样结束
        }
        
        // 记录下一组的起点
        ListNode nextGroupStart = kth.next;
        ListNode groupStart = prevGroupEnd.next;
        
        // 切断连接（虽然反转时会自动处理，但逻辑上理解为切断更好）
        kth.next = null;
        // ...`,explanation:"如果 kth 为 null，直接 return，代码简洁安全。"},{title:"第3步：翻转当前组并连接",description:"标准反转",code:`        // 反转 groupStart 到 kth
        reverse(groupStart);
        
        // 连接前后
        prevGroupEnd.next = kth; // kth 变成了新的头
        groupStart.next = nextGroupStart; // 原来的头变成了尾，连向下一组
        
        // 更新指针
        prevGroupEnd = groupStart;
    }
}

private void reverse(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
}`,explanation:"反转函数标准写法。注意这里传入的是已经断开的子链表。"},{title:"第4步：完整代码",description:"汇总",code:`public ListNode reverseKGroup(ListNode head, int k) {
    ListNode dummy = new ListNode(0, head);
    ListNode prevGroupEnd = dummy;
    while (true) {
        ListNode kth = prevGroupEnd;
        for (int i = 0; i < k; i++) {
            kth = kth.next;
            if (kth == null) return dummy.next;
        }
        ListNode groupStart = prevGroupEnd.next;
        ListNode nextGroupStart = kth.next;
        kth.next = null;
        reverse(groupStart);
        prevGroupEnd.next = kth;
        groupStart.next = nextGroupStart;
        prevGroupEnd = groupStart;
    }
}
private void reverse(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n逻辑清晰的分组迭代法。\\n\\n1. **分组**：用指针对链表进行遍历，每 K 个节点为一组。\\n2. **判断**：如果当前剩余节点不足 K 个，直接结束。\\n3. **翻转**：对选定的 K 个节点进行标准链表反转（调用 reverse 函数）。\\n4. **连接**：利用 `prevGroupEnd` 维护前每一组反转后的尾部，将其指向当前组新的头；当前组新的尾指向下一组的头。\\n\\n关键点在于理清 `prevGroupEnd`、`groupStart`、`kth`、`nextGroupStart` 这四个指针的关系。",timeComplexity:"O(n)，每个节点被遍历两次",spaceComplexity:"O(1)",followUp:[{question:"不用辅助函数怎么写？",answer:"可以直接在循环内部维护 prev/curr/next 进行反转，但代码可读性会变差。推荐封装 `reverse`。"}]}},{id:"copy-list-with-random-pointer",title:"随机链表的复制",titleEn:"Copy List with Random Pointer",category:"linked-list",difficulty:"medium",description:"给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。构造这个链表的深拷贝。",examples:[{input:"head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",output:"[[7,null],[13,0],[11,4],[10,2],[1,0]]"}],thinkingGuide:[{step:1,question:"🤔 为什么不能直接复制？",hint:"random指针",answer:"普通链表复制很容易，但这里的 `random` 指针可能指向还未创建的节点，或者指向很后面的节点。"},{step:2,question:"🧩 如何建立原节点和新节点的联系？",hint:"哈希表",answer:"最直观的方法是用 HashMap，`key` 是原节点，`value` 是新节点。第一遍遍历创建所有新节点存入 Map，第二遍遍历对照 Map 连接 next 和 random。"},{step:3,question:"⚡ 能否不用额外空间（HashMap）？",hint:"拼接到原节点后面",answer:"可以！把新复制的节点 `A'` 直接插在原节点 `A` 后面：`A -> A' -> B -> B'`。"},{step:4,question:"🔗 这样怎么处理 random？",hint:"相对位置",answer:"如果 `A.random` 指向 `C`，那么 `A'` 的 random 就应该指向 `C'`，也就是 `A.random.next`。"}],codeSteps:[{title:"方法一：HashMap法",description:"简单直观",code:`public Node copyRandomList(Node head) {
    if (head == null) return null;
    // 1. 建立映射
    Map<Node, Node> map = new HashMap<>();
    Node curr = head;
    while (curr != null) {
        map.put(curr, new Node(curr.val));
        curr = curr.next;
    }
    // 2. 连接指针
    curr = head;
    while (curr != null) {
        map.get(curr).next = map.get(curr.next);
        map.get(curr).random = map.get(curr.random);
        curr = curr.next;
    }
    return map.get(head);
}`,explanation:"空间复杂度 O(n)，适合面试第一反应。"},{title:"方法二：拼接+拆分（优选）",description:"步骤1：复制并拼接",code:`    // 1. 复制节点插在原节点后面
    Node curr = head;
    while (curr != null) {
        Node newNode = new Node(curr.val);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
    }`,explanation:"变成 A->A'->B->B' 的样子。"},{title:"步骤2：处理Random",description:"利用邻近关系",code:`    // 2. 设置 random
    curr = head;
    while (curr != null) {
        if (curr.random != null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }`,explanation:"核心：A'.random = A.random.next。"},{title:"步骤3：拆分链表",description:"恢复原样",code:`    // 3. 拆分
    curr = head;
    Node newHead = head.next;
    while (curr != null) {
        Node newNode = curr.next;
        curr.next = newNode.next;
        if (newNode.next != null) {
            newNode.next = newNode.next.next;
        }
        curr = curr.next;
    }
    return newHead;`,explanation:"把A和A'分开，记得两个链表都要正确终止。"},{title:"方法二完整代码",description:"最优解",code:`public Node copyRandomList(Node head) {
    if (head == null) return null;
    Node curr = head;
    while (curr != null) {
        Node newNode = new Node(curr.val);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
    }
    curr = head;
    while (curr != null) {
        if (curr.random != null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }
    Node newHead = head.next;
    curr = head;
    while (curr != null) {
        Node newNode = curr.next;
        curr.next = newNode.next;
        if (newNode.next != null) newNode.next = newNode.next.next;
        curr = curr.next;
    }
    return newHead;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)（不算结果链表）。"}],interview:{approach:"【面试回答模板】\\n\\n我介绍两种方法：\\n\\n1. **HashMap法**：先遍历一遍创建新节点并建立 `原节点 -> 新节点` 的映射。再遍历一遍，通过 Map 查找到对应的 next 和 random 节点连接起来。空间 O(n)。\\n\\n2. **拼接拆分法（O(1)空间）**：\\n   - **第一步**：在每个原节点后面插入复制节点（`A->A'->B->B'`）。\\n   - **第二步**：遍历链表，`A'.random` 就是 `A.random.next`。\\n   - **第三步**：把长链表拆分成原链表和新链表。\\n\\n面试时通常要求 O(1) 空间，推荐第二种。",timeComplexity:"O(n)",spaceComplexity:"O(1)（不计结果） vs O(n)（Map法）",followUp:[{question:"如果链表中有环怎么办？",answer:"这两种方法都天然支持有环的情况。HashMap 会存下环上的节点，拼接法也会正确处理 random 指向之前节点的情况。"}]}},{id:"sort-list",title:"排序链表",titleEn:"Sort List",category:"linked-list",difficulty:"medium",description:"给你链表的头结点 head ，请将其按升序排列并返回排序后的链表。",examples:[{input:"head = [4,2,1,3]",output:"[1,2,3,4]"},{input:"head = [-1,5,3,4,0]",output:"[-1,0,3,4,5]"}],thinkingGuide:[{step:1,question:"⚖️ 链表排序要求 O(n log n)，选哪个算法？",hint:"归并排序",answer:"归并排序（Merge Sort）最适合链表。因为归并排序的核心是“合并”，链表合并不需要像数组那样申请额外空间，只需改变指针。"},{step:2,question:"✂️ 怎么把链表切成两半？",hint:"快慢指针",answer:"用快慢指针法找中点。slow 走一步，fast 走两步，当 fast 到头时，slow 就在中间。记得要把链表从中点断开（`slow.next = null`）。"},{step:3,question:"🔄 递归流程是怎样的？",hint:"分治",answer:"1. 找中点切断。\\n2. 递归 sort 左半部分。\\n3. 递归 sort 右半部分。\\n4. merge 两个有序部分。"}],codeSteps:[{title:"第1步：主函数与找中点",description:"快慢指针",code:`public ListNode sortList(ListNode head) {
    // Base case：空或只有一个节点
    if (head == null || head.next == null) return head;
    
    // 快慢指针找中点
    ListNode slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    ListNode mid = slow.next;
    slow.next = null; // 切断
    
    // 递归排序
    ListNode left = sortList(head);
    ListNode right = sortList(mid);
    
    // 合并
    return merge(left, right);
}`,explanation:"让 fast 从 head.next 出发，可以保证 slow 停在前半段的尾部，方便切断。"},{title:"第2步：合并函数",description:"标准合并双指针",code:`private ListNode merge(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}`,explanation:"就是“合并两个有序链表”那道题的代码。"},{title:"第3步：完整代码",description:"汇总",code:`public ListNode sortList(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    ListNode mid = slow.next;
    slow.next = null;
    return merge(sortList(head), sortList(mid));
}

private ListNode merge(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}`,explanation:"📊 复杂度：时间O(n log n)，空间O(log n)（栈空间）。"}],interview:{approach:"【面试回答模板】\\n\\n链表排序首选**归并排序**。\\n\\n1. **找中点**：使用快慢指针找到链表中心，并将链表断开成两半。注意 Fast 指针初始位置 `head.next` 可以避免只有两个节点时的死循环。\\n2. **递归**：对左右两半分别递归调用排序函数。\\n3. **合并**：使用标准的“合并两个有序链表”方法将结果合并。\\n\\n这种方法时间复杂度稳定 O(n log n)。",timeComplexity:"O(n log n)",spaceComplexity:"O(log n)（递归栈空间），如果是迭代版归并排序可以做到 O(1)。",followUp:[{question:"如何实现快速排序（Quick Sort）？",answer:"选头节点做 Pivot，把链表分成<Pivot, =Pivot, >Pivot 三部分，递归排序并连接。但最坏情况可能 O(n^2)，不如归并排序稳定。"}]}},{id:"merge-k-sorted-lists",title:"合并 K 个升序链表",titleEn:"Merge k Sorted Lists",category:"linked-list",difficulty:"hard",description:"给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。",examples:[{input:"lists = [[1,4,5],[1,3,4],[2,6]]",output:"[1,1,2,3,4,4,5,6]"},{input:"lists = []",output:"[]"}],thinkingGuide:[{step:1,question:"🤔 两个链表合并我们会，K 个怎么办？",hint:"逐一合并",answer:"最简单的方法：先合并 arr[0] 和 arr[1]，结果再和 arr[2] 合并... 但这样效率低，越往后链表越长。"},{step:2,question:"⚖️ 怎么优化合并过程？",hint:"分治 or 最小堆",answer:"方法1：分治（Merge Sort思想），两两合并，轮次减少。方法2：优先队列（最小堆），因为我们需要每次从 K 个头节点中选出最小的那个。"},{step:3,question:"🏔️ 为什么选最小堆？",hint:"动态维护最小值",answer:"堆可以让我们在 O(log K) 时间内找到最小值。每次取出一个节点，就把它的 next 放入堆中，直到堆为空。"},{step:4,question:"🛑 复杂度对比？",hint:"堆 vs 分治",answer:"两个方法时间复杂度都是 O(N log K)（N是总节点数）。堆的解法通常代码更短，更容易理解。"}],codeSteps:[{title:"第1步：初始化最小堆",description:"定义Comparator",code:`public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    // 最小堆，按节点值从小到大排序
    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
    
    // 把所有链表的头节点放入堆中
    for (ListNode node : lists) {
        if (node != null) pq.offer(node);
    }
    // ...
}`,explanation:"只有非空节点才入堆。初始化复杂度 O(K log K)。"},{title:"第2步：构建结果链表",description:"不断出堆入堆",code:`    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    
    while (!pq.isEmpty()) {
        // 1. 取出当前最小的节点
        ListNode minNode = pq.poll();
        curr.next = minNode;
        curr = curr.next;
        
        // 2. 如果该节点还有后续，放入堆中
        if (minNode.next != null) {
            pq.offer(minNode.next);
        }
    }
    
    return dummy.next;
}`,explanation:"每次 poll 出来的是当前所有链表头中最小的，接上去后，把它的 next（如果存在）放回去竞选。"},{title:"第3步：完整代码",description:"汇总",code:`public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
    for (ListNode node : lists) {
        if (node != null) pq.offer(node);
    }
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    while (!pq.isEmpty()) {
        ListNode minNode = pq.poll();
        curr.next = minNode;
        curr = curr.next;
        if (minNode.next != null) pq.offer(minNode.next);
    }
    return dummy.next;
}`,explanation:"📊 复杂度：时间O(N log K)，空间O(K)（堆的大小）。"}],interview:{approach:"【面试回答模板】\\n\\n推荐使用**优先队列（最小堆）**。\\n\\n1. **初始化**：维护一个大小为 K 的最小堆，将所有链表的头节点入堆。\\n2. **循环**：每次从堆中取出最小节点 `min`，接到结果链表后面。\\n3. **补充**：如果 `min.next` 不为空，将其入堆。\\n4. **结束**：直到堆为空。\\n\\n时间复杂度 O(N log K)，其中 N 是总节点数，K 是链表个数。\\n\\n也可以提一下**分治法**（类似于归并排序的 merge 过程），两两合并，复杂度也是 O(N log K)，但空间优于递归合并。",timeComplexity:"O(N log K)",spaceComplexity:"O(K)（堆）或 O(log K)（分治递归）",followUp:[{question:"数据量超级大内存放不下怎么办？",answer:"那就是外部排序题了。思路类似，链表在磁盘上，内存只维护一个 K 大小的堆进行多路归并。"}]}},{id:"lru-cache",title:"LRU 缓存",titleEn:"LRU Cache",category:"linked-list",difficulty:"medium",description:"请你设计并实现一个满足 LRU (最近最少使用) 缓存约束的数据结构。实现 LRUCache 类：LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存；int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1；void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value；如果不存在，则向缓存中插入该组 key-value。如果插入操作导致关键字数量超过 capacity ，则应该逐出最久未使用的关键字。函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。",examples:[{input:`["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]`,output:"[null, null, null, 1, null, -1, null, -1, 3, 4]"}],thinkingGuide:[{step:1,question:"🤔 什么是 LRU？",hint:"最近最少使用",answer:"当缓存满时，优先淘汰那个“很久没被访问过”的数据。也就是说，每次访问（get/put）一个数据，它就变成了“最新的”。"},{step:2,question:"⚡ 要求 O(1) 的查找和插入/删除，用什么结构？",hint:"组合拳",answer:"查找 O(1) -> 必须用 HashMap。\\n排序和移动 O(1) -> 必须用链表（数组移动是 O(N)）。\\n合起来就是：**哈希表 + 双向链表**。"},{step:3,question:"🔗 为什么是双向链表？",hint:"删除自身",answer:"因为删除链表中间的一个节点，需要知道它的前驱。单向链表只能从头遍历，双向链表可以直接获得 prev 指针实现 O(1) 删除。"},{step:4,question:"📍 具体逻辑？",hint:"头尾",answer:"Hash Map 存 `<key, Node>`。链表：越靠近头部表示越新，越靠近尾部表示越旧。\\nAccess: 移到头部。\\nFull: 删除尾部 Node 并在 Map 中移除。"}],codeSteps:[{title:"第1步：定义双向节点",description:"Node类",code:`class Node {
    int key, value;
    Node prev, next;
    Node(int k, int v) { key = k; value = v; }
}
`,explanation:"保存 key 是为了在淘汰链表尾部节点时，能反向通过 key 删除 Map 中的条目。"},{title:"第2步：初始化 LRUCache",description:"哨兵节点",code:`class LRUCache {
    private Map<Integer, Node> map;
    private Node head, tail;
    private int capacity;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        // 虚拟头尾节点，避免 null 检查
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    // ...`,explanation:"使用 dummy head 和 tail 可以极大简化链表操作代码。"},{title:"第3步：核心操作",description:"Get 和 Put",code:`    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        moveToHead(node); // 访问了，移到头部
        return node.value;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node node = map.get(key);
            node.value = value;
            moveToHead(node);
        } else {
            Node newNode = new Node(key, value);
            map.put(key, newNode);
            addToHead(newNode);
            if (map.size() > capacity) {
                Node tailNode = removeTail();
                map.remove(tailNode.key);
            }
        }
    }`,explanation:"逻辑清晰：存在则更新并提前，不存在则插入。超容则淘汰尾部。"},{title:"第4步：链表辅助函数",description:"原子操作",code:`    // 插入到头节点之后
    private void addToHead(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }
    
    // 删除任意节点
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // 移动到头部 = 删除 + 插到头部
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }
    
    // 删除真实尾节点
    private Node removeTail() {
        Node res = tail.prev;
        removeNode(res);
        return res;
    }
}`,explanation:"这些 private 方法是实现 O(1) 的基础。"}],interview:{approach:"【面试回答模板】\\n\\nLRU 缓存的核心是 **哈希表 + 双向链表**。\\n\\n1. **哈希表**：存储 `key -> Node` 的映射，实现 O(1) 查找。\\n2. **双向链表**：维护数据的访问顺序。**MRU（最近使用）**在链表头，**LRU（最久未用）**在链表尾。\\n3. **Get**：如果存在，将节点移动到链表头部，返回 value。\\n4. **Put**：如果存在，更新 value 并移到头部；如果不存在，创建新节点插到头部。如果超容，删除链表尾部节点（并删除 Map 中对应 Key）。\\n\\n使用 **Dummy Head** 和 **Dummy Tail** 可以避免处理空链表的繁琐逻辑。",timeComplexity:"Get 和 Put 均为 O(1)",spaceComplexity:"O(capacity)",followUp:[{question:"不用内置 LinkedHashMap 可以吗？",answer:"当然，面试官通常就是让你手写这个双向链表逻辑，而不是直接继承 LinkedHashMap。"}]}},{id:"max-subarray",title:"最大子数组和",titleEn:"Maximum Subarray",category:"array",difficulty:"medium",description:"给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。",examples:[{input:"nums = [-2,1,-3,4,-1,2,1,-5,4]",output:"6",explanation:"[4,-1,2,1]"},{input:"nums = [1]",output:"1"}],thinkingGuide:[{step:1,question:"🧐 什么是“最大子数组和”？",hint:"连续",answer:"就是在一个数组里找一段**连续**的数字，让它们的和最大。比如 [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]，最大的一段是 [ 4, -1, 2, 1 ]，和为 6。"},{step:2,question:"💡 这道题的核心思想是什么？",hint:"贪心/DP",answer:"关键在于：**如果前面的累加和是负数，它对后面只有坏处，不如直接舍弃，从头开始算。**"},{step:3,question:"📝 如何定义 DP 状态？",hint:"以i结尾",answer:"`dp[i]` 表示“以第 i 个数字结尾的最大子数组和”。注意必须包含 `nums[i]`。"},{step:4,question:"🔄 状态转移方程怎么写？",hint:"择优",answer:"`dp[i] = max(nums[i], dp[i-1] + nums[i])`。解释：要么自己另起炉灶（nums[i]），要么接上前面的辉煌（dp[i-1] + nums[i]）。"},{step:5,question:"📉 空间能优化吗？",hint:"滚动变量",answer:"可以。我们只需要前一个状态 `dp[i-1]`，所以用一个变量 `currentSum` 记录即可，不需要整个数组。"}],codeSteps:[{title:"第1步：Kadane算法核心",description:"定义变量",code:`public int maxSubArray(int[] nums) {
    int maxSum = nums[0]; // 全局最大和
    int currentSum = nums[0]; // 当前子数组和（以当前元素结尾）
    // ...
}`,explanation:"初始化为第一个元素，防止数组全为负数时返回0（应该是最大的那个负数）。"},{title:"第2步：一次遍历",description:"贪心选择",code:`    for (int i = 1; i < nums.length; i++) {
        // 核心：若 currentSum + nums[i] 还不如 nums[i] 大（说明 currentSum 是负的），就丢弃前面的
        if (currentSum + nums[i] > nums[i]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }
        
        // 实时更新全局最大值
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}`,explanation:"currentSum 维护的是“当前还在尝试延续的子数组和”。"},{title:"第3步：简洁写法",description:"Math.max",code:`public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n这道题最经典的是 **Kadane 算法**（动态规划/贪心）。\\n\\n1. **核心逻辑**：遍历数组，维护一个 `currentSum`。对于当前元素 `nums[i]`，我们做个选择：是加入前面的 `currentSum`，还是另起炉灶？\\n2. **判断标准**：如果 `currentSum` 是正的，加上它有增益，就加上；如果是负的，加上它反而变小，不如直接从 `nums[i]` 重新开始。\\n3. **公式**：`currentSum = max(nums[i], currentSum + nums[i])`。\\n4. **结果**：遍历过程中维护一个全局 `maxSum` 即可。\\n\\n时间复杂度 O(n)，空间 O(1)。",timeComplexity:"O(n)，只需遍历一次",spaceComplexity:"O(1)，只用了几个变量",followUp:[{question:"如果要求返回这个子数组的起始位置呢？",answer:"在 currentSum 重新开始（currentSum = nums[i]）时，记录 tempStart = i。当更新 maxSum 时，更新 finalStart = tempStart, finalEnd = i。"},{question:"如果用分治法怎么做？",answer:"类似线段树。维护四个值：lSum（左起最大和）、rSum（右起最大和）、mSum（中间最大和）、iSum（总和）。pushUp 时合并。复杂度也是 O(n)，但适合经常修改数组的情况。"}]}},{id:"merge-intervals",title:"合并区间",titleEn:"Merge Intervals",category:"array",difficulty:"medium",description:"以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。",examples:[{input:"intervals = [[1,3],[2,6],[8,10],[15,18]]",output:"[[1,6],[8,10],[15,18]]"},{input:"intervals = [[1,4],[4,5]]",output:"[[1,5]]"}],thinkingGuide:[{step:1,question:"🤔 乱序的区间怎么合并？",hint:"排序",answer:"先按区间的**左端点**从小到大排序。这样相近的区间就会挨在一起，方便合并。"},{step:2,question:"🔗 什么时候两个区间重叠？",hint:"比较端点",answer:"排序后，如果当前区间 `curr` 的左端点 <= 上一个区间 `prev` 的右端点，说明有重叠。"},{step:3,question:"🛠️ 重叠了怎么合并？",hint:"融合",answer:"合并后的右端点 = `max(prev.end, curr.end)`。左端点不用变，因为已经排过序了，prev.start 一定 <= curr.start。"},{step:4,question:"🚫 如果不重叠呢？",hint:"新开始",answer:"如果不重叠，说明上一个合并好的区间结束了，把它加入结果集，然后当前区间成为新的“待合并区间”。"}],codeSteps:[{title:"第1步：排序",description:"按Start升序",code:`public int[][] merge(int[][] intervals) {
    if (intervals.length == 0) return new int[0][];
    // 按左端点排序
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    
    List<int[]> result = new ArrayList<>();
    int[] currentInterval = intervals[0];
    result.add(currentInterval);
    // ...
}`,explanation:"先把第一个区间放入结果集作为“当前区间”，后面不断更新它或添加新的。"},{title:"第2步：遍历合并",description:"贪心策略",code:`    for (int[] interval : intervals) {
        int currentEnd = currentInterval[1];
        int nextStart = interval[0];
        int nextEnd = interval[1];

        if (currentEnd >= nextStart) {
            // 重叠，合并：更新右端点
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            // 不重叠，开始新区间
            currentInterval = interval;
            result.add(currentInterval);
        }
    }
    
    return result.toArray(new int[result.size()][]);
}`,explanation:"result中存放引用，修改 currentInterval[1] 会直接更新结果集里的那个数组。"},{title:"第3步：完整代码",description:"汇总",code:`public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> res = new ArrayList<>();
    int[] curr = intervals[0];
    res.add(curr);
    for (int[] interval : intervals) {
        if (curr[1] >= interval[0]) {
            curr[1] = Math.max(curr[1], interval[1]);
        } else {
            curr = interval;
            res.add(curr);
        }
    }
    return res.toArray(new int[res.size()][]);
}`,explanation:"📊 复杂度：时间O(n log n)（主要是排序），空间O(log n)（排序栈空间）。"}],interview:{approach:"【面试回答模板】\\n\\n这是一个经典的排序+遍历问题。\\n\\n1. **排序**：首先根据区间的左端点进行升序排序。这是关键，保证了我们只需要关注相邻或相近的区间。\\n2. **遍历**：维护一个 `current` 区间（或者放到结果列表里直接修改）。\\n3. **判断**：遍历后续区间，如果后续区间的 start <= current.end，说明重叠，我们将 current.end 更新为两者 end 的最大值。\\n4. **不重叠**：如果后续区间 start > current.end，说明断开了，将后续区间作为新的 current 加入结果列表。\\n\\n核心在于排序将复杂的拓扑关系简化为了线性扫描问题。",timeComplexity:"O(N log N)，依赖于排序算法",spaceComplexity:"O(log N)，主要是 Java Arrays.sort 的递归栈开销",followUp:[{question:"如果区间已经排好序了？",answer:"那就是 O(N) 时间复杂度，直接遍历合并即可。"},{question:"区间是作为一个流不断进来的？",answer:"那可以用 TreeMap 维护区间，在插入时检查 floorKey 和 ceilingKey 进行合并，复杂度 O(log N) 每次插入。"}]}},{id:"rotate-array",title:"轮转数组",titleEn:"Rotate Array",category:"array",difficulty:"medium",description:"给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。",examples:[{input:"nums = [1,2,3,4,5,6,7], k = 3",output:"[5,6,7,1,2,3,4]"},{input:"nums = [-1,-100,3,99], k = 2",output:"[3,99,-1,-100]"}],thinkingGuide:[{step:1,question:"🤔 这里的 K 很大怎么办？",hint:"取模",answer:"如果 K > nums.length，其实每轮转 length 次就回到原点了。所以先 `k = k % n`。"},{step:2,question:"🤸 直接想法？",hint:"额外数组",answer:"开一个新数组 `newArr[i] = nums[(i - k + n) % n]`（或者正向算 `(i+k)%n`），然后拷回去。但题目要求原地 O(1)。"},{step:3,question:"🧠 翻转大法好！",hint:"三次翻转",answer:"这是一个经典 trick：\\n1. 翻转整个数组 [7,6,5,4,3,2,1]\\n2. 翻转前 k 个 [5,6,7, 4,3,2,1]\\n3. 翻转后 n-k 个 [5,6,7, 1,2,3,4]\\n神不知鬼不觉就完成了轮转。"}],codeSteps:[{title:"第1步：辅助函数",description:"反转区间",code:`// 反转 nums 中 [start, end] 区间的元素
private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}`,explanation:"双指针头尾向中间逼近交换。"},{title:"第2步：三次翻转逻辑",description:"整体->部分",code:`public void rotate(int[] nums, int k) {
    int n = nums.length;
    k %= n; // 防止 k 越界
    
    reverse(nums, 0, n - 1); // 1. 翻转全部
    reverse(nums, 0, k - 1); // 2. 翻转前 k 个
    reverse(nums, k, n - 1); // 3. 翻转后 n-k 个
}`,explanation:"简单好记。原理是 `(X^T Y^T)^T = YX` 的思想（虽然不是矩阵转置，但直觉类似）。"},{title:"第3步：完整代码",description:"汇总",code:`public void rotate(int[] nums, int k) {
    int n = nums.length;
    k %= n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
}
private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}`,explanation:"📊 复杂度：时间O(n)遍历三次，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n最经典且无需额外空间的解法是**三次翻转法**。\\n\\n假设我们有一个数组 `[1,2,3,4,5,6,7]`，k=3。\\n1. **整体翻转**：`[7,6,5,4,3,2,1]`。此时原来的尾部元素到了头部，但顺序是反的。\\n2. **翻转前 K 个**：`[5,6,7, 4,3,2,1]`。前 K 个元素顺序恢复。\\n3. **翻转剩余部分**：`[5,6,7, 1,2,3,4]`。后半部分顺序恢复。\\n\\n这种方法代码简短，只需写一个 reverse 辅助函数，且满足原地 O(1) 空间要求。",timeComplexity:"O(n)，每个元素被搬运2次",spaceComplexity:"O(1)",followUp:[{question:"如果不让用翻转，怎么做？",answer:"环状替换（Cyclic Replacements）。从 start=0 开始，把 nums[i] 放到 (i+k)%n，挤出来的数再往下放。需要注意最大公约数 gcd(n, k) > 1 时的循环情况（可能需要多轮）。代码比较难写对。"}]}},{id:"product-except-self",title:"除自身以外数组的乘积",titleEn:"Product of Array Except Self",category:"array",difficulty:"medium",description:"给你一个整数数组 nums，返回数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。请不要使用除法，且在 O(n) 时间复杂度内完成此题。",examples:[{input:"nums = [1,2,3,4]",output:"[24,12,8,6]"},{input:"nums = [-1,1,0,-3,3]",output:"[0,0,9,0,0]"}],thinkingGuide:[{step:1,question:"🚫 题目限制不能用除法，怎么办？",hint:"分解",answer:"如果不准用除法（总乘积/当前数），我们就得想办法直接算出“除了自己以外其他数的乘积”。"},{step:2,question:"💡 如何拆解这个问题？",hint:"左右两边",answer:"对于每个数 `nums[i]`，它的结果 = (左边所有数的乘积) * (右边所有数的乘积)。"},{step:3,question:"🔄 怎么高效计算左右乘积？",hint:"前缀/后缀",answer:"我们可以先遍历一次，计算出每个位置的“左侧乘积”；再反向遍历一次，计算出“右侧乘积”。"},{step:4,question:"📉 空间复杂度要求 O(1)（不算输出数组）？",hint:"复用数组",answer:"先用 `answer` 数组存所有的“左侧乘积”。然后反向遍历时，用一个变量 `R` 累乘右边的数，直接乘到 `answer[i]` 上。"}],codeSteps:[{title:"第1步：计算左侧前缀积",description:"Left Pass",code:`public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] answer = new int[n];
    
    // answer[i] 表示 nums[0]...nums[i-1] 的乘积
    answer[0] = 1;
    for (int i = 1; i < n; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }
    // ...
}`,explanation:"此时 answer[i] 只有左边的乘积信息。"},{title:"第2步：乘上右侧后缀积",description:"Right Pass",code:`    // R 为右侧所有数字的乘积
    int R = 1;
    // 从右向左遍历
    for (int i = n - 1; i >= 0; i--) {
        // 对于索引 i，左边的积是 answer[i]，右边的积是 R
        answer[i] = answer[i] * R;
        
        // R 需要包含当前的 nums[i]，以便传给下一个（即左边那个）
        R *= nums[i];
    }
    
    return answer;
}`,explanation:"巧妙利用一个变量 R 省去了一个数组的空间。"},{title:"第3步：完整代码",description:"汇总",code:`public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] answer = new int[n];
    answer[0] = 1;
    for (int i = 1; i < n; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }
    int R = 1;
    for (int i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;
        R *= nums[i];
    }
    return answer;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)（输出数组不计入）。"}],interview:{approach:"【面试回答模板】\\n\\n核心思路是**左右乘积法**。\\n\\n1. **分解**：将问题拆分为“左边所有数的乘积” * “右边所有数的乘积”。\\n2. **左遍历**：创建一个 `answer` 数组，第一遍遍历计算前缀积。`answer[i]` 存 `0` 到 `i-1` 的乘积。\\n3. **右遍历**：不用额外开数组，用一个变量 `R` 维护后缀积。从右向左遍历，将 `R` 乘到 `answer[i]` 上，并更新 `R`。\\n\\n这样既满足 O(n) 时间，也满足 O(1) 空间（题目说明输出数组不计入空间复杂度）。",timeComplexity:"O(n)，两次遍历",spaceComplexity:"O(1)，除输出数组外只用到常数变量",followUp:[{question:"如果允许用除法且数组可以有0？",answer:"需要统计0的个数。如果有两个及以上0，结果全0；如果有一个0，除了该位置是其他数的积，其余都是0；如果没有0，则是总积除以当前数。"}]}},{id:"first-missing-positive",title:"缺失的第一个正数",titleEn:"First Missing Positive",category:"array",difficulty:"hard",description:"给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。",examples:[{input:"nums = [1,2,0]",output:"3"},{input:"nums = [3,4,-1,1]",output:"2"}],thinkingGuide:[{step:1,question:"🧐 最小的正整数可能是几？",hint:"范围",answer:"如果数组是 [1, 2, 3]，缺 4。如果数组是 [-1, 99]，缺 1。\\n极端情况下，答案的范围一定是 `[1, n+1]` 之间（n 是数组长度）。"},{step:2,question:"💡 既然数值范围和索引范围相关，能利用吗？",hint:"坑位归位",answer:"核心思想：**把数字 x 放到索引 x-1 的位置上**。例如数字 3 应该放在索引 2 的位置。"},{step:3,question:"🔄 具体的“原地哈希”怎么做？",hint:"交换",answer:"遍历数组，如果 `nums[i]` 在 [1, n] 范围内，并且它不在正确的位置（`nums[i] != nums[nums[i]-1]`），就把它交换到正确的位置去。**注意要用 while 持续交换**，直到当前位置的数由无法交换为止。"},{step:4,question:"🔍 最后怎么找缺失值？",hint:"检查",answer:"再次遍历数组，第一个 `nums[i] != i+1` 的位置，`i+1` 就是缺失的数。"}],codeSteps:[{title:"第1步：原地交换",description:"归位操作",code:`public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    for (int i = 0; i < n; i++) {
        // 核心循环：
        // 1. 必须是正数 > 0
        // 2. 必须 <= n (超出范围的不用管)
        // 3. 必须不在正确位置上 (避免死循环和重复交换)
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            // 交换 nums[i] 和 nums[nums[i]-1]
            int correctPos = nums[i] - 1;
            swap(nums, i, correctPos);
        }
    }
    // ...
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`,explanation:"由 while 保证当前位置能换的都换好了，或者换来了一个不合法的数。"},{title:"第2步：查找缺失值",description:"一次遍历",code:`    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return n + 1; // 都对应上了，说明缺的是 n+1
}`,explanation:"第一个位置不对应的就是答案。"},{title:"第3步：完整代码",description:"汇总",code:`public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            swap(nums, i, nums[i] - 1);
        }
    }
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) return i + 1;
    }
    return n + 1;
}
private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。尽管有while，由于每个元素最多被交换归位一次，总体仍是O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n使用**原地哈希（Cycle Sort 思路）**。\\n\\n1. **核心观察**：缺失的第一个正数一定在 `[1, N+1]` 之间。\\n2. **归位**：我们尝试把数组变成 `nums[i] == i+1` 的形式。遍历数组，如果 `nums[i]` 是一个在 `[1, N]` 范围内的正数，且它没有放在正确的位置（即 `nums[i]-1` 处），我们就把它交换过去。\\n3. **查找**：交换完成后，再次遍历数组。第一个 `nums[i] != i+1` 的 `i+1` 就是答案。如果都正确，答案是 `N+1`。\\n\\n这种方法充分利用了数组索引作为哈希表的特性，达到了 O(n) 时间和 O(1) 空间。",timeComplexity:"O(n)。外层 for 循环执行 n 次，内层 while 循环总共交换次数不会超过 n 次。",spaceComplexity:"O(1)，原地修改数组",followUp:[{question:"必须修改原数组吗？",answer:"如果不允许修改，只能用 HashSet (空间 O(n)) 或者 二分查找 (时间 O(n log n) 不符合要求)。题目通常允许修改。"}]}},{id:"set-matrix-zeroes",title:"矩阵置零",titleEn:"Set Matrix Zeroes",category:"matrix",difficulty:"medium",description:"给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用原地算法。",examples:[{input:"matrix = [[1,1,1],[1,0,1],[1,1,1]]",output:"[[1,0,1],[0,0,0],[1,0,1]]"},{input:"matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",output:"[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"}],thinkingGuide:[{step:1,question:"🚫 简单的 O(mn) 空间解法是什么？",hint:"副本",answer:"新建一个同样的矩阵，读原矩阵，写新矩阵。遇到0就把新矩阵行列置0。或者记录哪些行哪些列有0。"},{step:2,question:"📉 如何优化到 O(1) 空间？",hint:"利用首行首列",answer:"我们可以用矩阵的**第一行**和**第一列**来代替额外的标记数组。"},{step:3,question:"⚠️ 第一行第一列本身有0怎么办？",hint:"额外变量",answer:"因为第一行第一列即充当记录板，又包含原始数据，容易混淆。所以通过**两个布尔变量** `row0`, `col0` 单独记录“第一行/列原本是否有0”。"},{step:4,question:"🔄 流程是怎样的？",hint:"四步走",answer:"1. 检查首行首列是否有0，记录到变量。\\n2. 遍历其余部分，若 `matrix[i][j] == 0`，则标记 `matrix[i][0]` 和 `matrix[0][j]` 为0。\\n3. 根据标记，将内部元素置0。\\n4. 最后根据变量处理首行首列。"}],codeSteps:[{title:"第1步：记录首行首列状态",description:"是否有0",code:`public void setZeroes(int[][] matrix) {
    int m = matrix.length, n = matrix[0].length;
    boolean row0 = false, col0 = false;
    
    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) col0 = true;
    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) row0 = true;
    // ...
}`,explanation:"先把最特殊的边界情况保存下来，防止后续复用时覆盖。"},{title:"第2步：使用首行首列做标记",description:"遍历Inner",code:`    // 从 (1,1) 开始遍历
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // ...`,explanation:"如果内部有0，就把对应的“抬头”和“行首”置0。"},{title:"第3步：根据标记置零",description:"倒序或正序",code:`    // 再次从 (1,1) 开始遍历，根据标记置0
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // ...`,explanation:"这里只处理 (1,1) 之后的部分，首行首列最后处理。"},{title:"第4步：处理首行首列与汇总",description:"Full Code",code:`public void setZeroes(int[][] matrix) {
    int m = matrix.length, n = matrix[0].length;
    boolean row0 = false, col0 = false;
    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) col0 = true;
    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) row0 = true;
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0; matrix[0][j] = 0;
            }
        }
    }
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (row0) for (int j = 0; j < n; j++) matrix[0][j] = 0;
    if (col0) for (int i = 0; i < m; i++) matrix[i][0] = 0;
}`,explanation:"📊 复杂度：时间O(mn)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n使用**首行首列作为标记数组**，实现原地 O(1) 空间。\\n\\n1. **记录**：首先用两个布尔变量 `row0`, `col0` 记录第一行和第一列原本是否包含 0。\\n2. **标记**：遍历矩阵其余部分（1 到 m, 1 到 n）。如果 `matrix[i][j] == 0`，就将 `matrix[i][0]` 和 `matrix[0][j]` 设为 0。\\n3. **置零**：再次遍历其余部分，如果对应的行首或列首为 0，则将 `matrix[i][j]` 设为 0。\\n4. **恢复**：最后根据 `row0`, `col0` 决定是否将第一行和第一列全设为 0。\\n\\n这种方法避免了开辟新矩阵或行列数组，只需常数空间。",timeComplexity:"O(mn)，遍历两次矩阵",spaceComplexity:"O(1)，只用了两个变量",followUp:[{question:"只能用一个变量怎么做？",answer:"可以用 matrix[0][0] 代表 row0，额外用一个 col0 变量记录第一列。逻辑稍微复杂一点点。"}]}},{id:"spiral-matrix",title:"螺旋矩阵",titleEn:"Spiral Matrix",category:"matrix",difficulty:"medium",description:"给你一个 m 行 n 列的矩阵 matrix ，请按照顺时针螺旋顺序，返回矩阵中的所有元素。",examples:[{input:"matrix = [[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",output:"[1,2,3,4,8,12,11,10,9,5,6,7]"}],thinkingGuide:[{step:1,question:"🌀 怎么还没转晕？如何模拟螺旋路径？",hint:"四个边界",answer:"通过维护四个变量 `top`, `bottom`, `left`, `right` 来限定当前的未遍历区域。"},{step:2,question:"🏁 遍历的顺序是怎样的？",hint:"顺时针",answer:"1. 向右 (top行, left->right)\\n2. 向下 (right列, top->bottom)\\n3. 向左 (bottom行, right->left)\\n4. 向上 (left列, bottom->top)"},{step:3,question:"🚧 每走完一条边要做什么？",hint:"收缩",answer:"比如走完“向右”的 top 行，`top++`，因为这一行已经处理完了。同理 `right--`, `bottom--`, `left++`。"},{step:4,question:"🛑 循环何时结束？",hint:"错位",answer:"当 `top > bottom` 或 `left > right` 时，说明所有元素都已经遍历完成。注意：向左和向上的遍历需要额外检查 `if (top <= bottom)` 和 `if (left <= right)` 以防重复。"}],codeSteps:[{title:"第1步：初始化边界",description:"定义范围",code:`public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> res = new ArrayList<>();
    if (matrix.length == 0) return res;
    
    int top = 0, bottom = matrix.length - 1;
    int left = 0, right = matrix[0].length - 1;
    // ...
}`,explanation:"准备四个指针包围整个矩阵。"},{title:"第2步：螺旋遍历",description:"四步走",code:`    while (top <= bottom && left <= right) {
        // 1. 向右
        for (int j = left; j <= right; j++) res.add(matrix[top][j]);
        top++;
        
        // 2. 向下
        for (int i = top; i <= bottom; i++) res.add(matrix[i][right]);
        right--;
        
        // 3. 向左 (需检查是否越界)
        if (top <= bottom) {
            for (int j = right; j >= left; j--) res.add(matrix[bottom][j]);
            bottom--;
        }
        
        // 4. 向上 (需检查是否越界)
        if (left <= right) {
            for (int i = bottom; i >= top; i--) res.add(matrix[i][left]);
            left++;
        }
    }
    return res;
}`,explanation:"注意向左和向上时的if判断，这是防止单行或单列矩阵被重复遍历的关键。"},{title:"第3步：完整代码",description:"汇总",code:`public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> res = new ArrayList<>();
    if (matrix == null || matrix.length == 0) return res;
    int top = 0, bottom = matrix.length - 1;
    int left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) res.add(matrix[top][j]);
        top++;
        for (int i = top; i <= bottom; i++) res.add(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (int j = right; j >= left; j--) res.add(matrix[bottom][j]);
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) res.add(matrix[i][left]);
            left++;
        }
    }
    return res;
}`,explanation:"📊 复杂度：时间O(mn)，空间O(1)（不算输出）。"}],interview:{approach:"【面试回答模板】\\n\\n这道题是考察代码控制能力的模拟题。\\n\\n1. **状态**：维护 `top`, `bottom`, `left`, `right` 四个边界。\\n2. **循环**：只要 `top <= bottom` 且 `left <= right` 就继续。\\n3. **顺序**：严格按照 **右 -> 下 -> 左 -> 上** 的顺序遍历。\\n4. **细节**：每次遍历完一行或一列，就收缩对应的边界（如 `top++`）。\\n5. **防坑**：在执行“向左”和“向上”之前，必须再次检查边界是否仍然有效（`top <= bottom` 等），防止类似于只有一行时重复添加到结果中。\\n\\n时间复杂度 O(mn)，一次遍历所有对角。",timeComplexity:"O(mn)，遍历矩阵所有元素一次",spaceComplexity:"O(1)，除返回结果外只需常数变数",followUp:[{question:"如果是生成螺旋矩阵（给你 n，生成 n*n）？",answer:"逻辑完全一样，只是把 `res.add(val)` 改成 `matrix[i][j] = val++`。"}]}},{id:"rotate-image",title:"旋转图像",titleEn:"Rotate Image",category:"matrix",difficulty:"medium",description:"给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。",examples:[{input:"matrix = [[1,2,3],[4,5,6],[7,8,9]]",output:"[[7,4,1],[8,5,2],[9,6,3]]"},{input:"matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",output:"[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"}],thinkingGuide:[{step:1,question:"🤔 顺时针旋转 90 度后，坐标怎么变？",hint:"观察",answer:"`matrix[i][j]` 会跑到 `matrix[j][n-1-i]` 的位置。直接按这个公式赋值需要额外空间。"},{step:2,question:"🧠 数学变换法（推荐）",hint:"转置+镜像",answer:"1. 先**沿对角线翻转**（转置），`(i, j)` -> `(j, i)`。\\n2. 再**左右镜像翻转**，`(j, i)` -> `(j, n-1-i)`。\\n合起来正好就是我们要的 `(j, n-1-i)`！"},{step:3,question:"🐢 另一种方法：分层旋转？",hint:"洋葱圈",answer:"从外向内，一圈圈旋转四个对应的点。逻辑比较复杂，容易写错下标，不仅试不如第一种方法稳。"}],codeSteps:[{title:"第1步：转置矩阵",description:"沿主对角线交换",code:`public void rotate(int[][] matrix) {
    int n = matrix.length;
    // 只需要遍历上三角（j > i）
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // ...
}`,explanation:"swap(matrix[i][j], matrix[j][i]) 实现转置。"},{title:"第2步：左右翻转",description:"水平镜像",code:`    // 每一行内部左右翻转
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n / 2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
}`,explanation:"两步都完成后，矩阵就顺时针旋转了 90 度。"},{title:"第3步：完整代码",description:"汇总",code:`public void rotate(int[][] matrix) {
    int n = matrix.length;
    // 1. Transpose
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // 2. Reflect
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n / 2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
}`,explanation:"📊 复杂度：时间O(n^2)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n最优雅的方法是**先转置，再左右翻转**。\\n\\n1. **转置 (Transpose)**：遍历矩阵的上三角区域，交换 `matrix[i][j]` 和 `matrix[j][i]`。此时行变列，列变行。\\n2. **翻转 (Reflect)**：遍历每一行，将该行左右对称翻转。\\n\\n**效果**：\\n- 原来在第一行的元素（如 `[1,2,3]`），转置后变成了第一列 `[1,2,3]^T`。\\n- 左右翻转后，第一列不受到影响？不对，左右翻转是对“行”操作。\\n- 举例：`1 2 3` -> 转置 -> `1 4 7` (第1行变为 `1,4,7`) -> 翻转 -> `7 4 1`。\\n- 最终效果就是顺时针旋转 90 度。",timeComplexity:"O(N^2)，每个元素被访问两次",spaceComplexity:"O(1)，原地修改",followUp:[{question:"如果要逆时针旋转 90 度？",answer:"先转置，然后**上下翻转**（或者先左右翻转再转置）。"}]}},{id:"search-matrix-ii",title:"搜索二维矩阵 II",titleEn:"Search a 2D Matrix II",category:"matrix",difficulty:"medium",description:"编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：每行的元素从左到右升序排列。每列的元素从上到下升序排列。",examples:[{input:"matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",output:"true"},{input:"matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20",output:"false"}],thinkingGuide:[{step:1,question:"🤔 矩阵从左到右递增，从上到下递增。暴力搜是 O(mn)，能更快吗？",hint:"剔除法",answer:"利用有序性质，我们可以每次排除一行或一列。"},{step:2,question:"📍 从哪个位置开始搜最好？",hint:"右上角/左下角",answer:"从**右上角** `(0, n-1)` 开始。\\n- 如果当前值 `> target`：肯定不在这一列（下面更大），所以 `col--`。\\n- 如果当前值 `< target`：肯定不在这一行（左边更小），所以 `row++`。"},{step:3,question:"🚫 为什么不能从左上角开始？",hint:"歧义",answer:"左上角往右和往下都是变大，如果当前值 < target，你不知道是该往右找还是往下找，没法剪枝。"}],codeSteps:[{title:"第1步：初始化指针",description:"右上角",code:`public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0) return false;
    int m = matrix.length;
    int n = matrix[0].length;
    
    // 指针指向右上角
    int row = 0;
    int col = n - 1;
    // ...
}`,explanation:"选择右上角或者左下角均可。"},{title:"第2步：搜索与剪枝",description:"类似BST",code:`    while (row < m && col >= 0) {
        if (matrix[row][col] == target) {
            return true; // 找到了
        } else if (matrix[row][col] > target) {
            // 当前值太大了，这一列下面只会更大，所以排除这一列
            col--;
        } else {
            // 当前值太小了，这一行左边只会更小，所以排除这一行
            row++;
        }
    }
    return false; // 越界了还没找到
}`,explanation:"整个过程就像在二叉搜索树中查找一样。"},{title:"第3步：完整代码",description:"汇总",code:`public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0) return false;
    int m = matrix.length, n = matrix[0].length;
    int row = 0, col = n - 1;
    while (row < m && col >= 0) {
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`,explanation:"📊 复杂度：时间O(m+n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n利用矩阵**行列递增**的特性，从**右上角**（或左下角）开始搜索。\\n\\n1. **初始化**：`row = 0`, `col = n-1`。\\n2. **比较**：\\n   - 如果 `matrix[row][col] == target`：返回 true。\\n   - 如果 `matrix[row][col] > target`：说明这一列后面的数都比 target 大，排除这一列，`col--`。\\n   - 如果 `matrix[row][col] < target`：说明这一行左边的数都比 target 小，排除这一行，`row++`。\\n3. **终止**：如果越界都没找到，返回 false。\\n\\n这种方法每次移动都能排除一行或一列，最差情况就是从右上角走到左下角，步数是 m+n。",timeComplexity:"O(m + n)",spaceComplexity:"O(1)",followUp:[{question:"如果矩阵每一行首接上一行尾有序（Search 2D Matrix I）？",answer:"那就可以把整个矩阵当成一个长的一维排序数组，直接用一次二分查找 O(log(mn))。"}]}}],zj=[{id:"climbing-stairs",title:"爬楼梯",titleEn:"Climbing Stairs",category:"dp",difficulty:"easy",description:"假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？",examples:[{input:"n = 2",output:"2",explanation:"两种方法：1+1 或直接2"},{input:"n = 3",output:"3",explanation:"三种方法：1+1+1, 1+2, 2+1"},{input:"n = 4",output:"5",explanation:"五种方法：1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2"}],thinkingGuide:[{step:1,question:"🪜 想象你站在第n阶楼梯上，你是怎么到达这里的？",hint:"你最后一步走了几阶？",answer:"你最后一步要么走了1阶（从第n-1阶来），要么走了2阶（从第n-2阶来）。所以到达第n阶的方法数 = 到达第n-1阶的方法数 + 到达第n-2阶的方法数。"},{step:2,question:"🔢 这个规律让你想到了什么数学概念？",hint:"1, 1, 2, 3, 5, 8...",answer:"这就是斐波那契数列！f(n) = f(n-1) + f(n-2)。爬楼梯问题本质上就是求斐波那契数列的第n项。"},{step:3,question:"🛑 最小的情况是什么？我们需要什么初始值？",hint:"想想n=1和n=2的情况",answer:"n=1时只有1种方法（走1阶），n=2时有2种方法（1+1或2）。这就是我们的初始条件：dp[1]=1, dp[2]=2。"},{step:4,question:"🚀 如果用数组存储所有结果，空间复杂度是多少？能优化吗？",hint:"计算dp[n]只需要哪些值？",answer:"用数组需要O(n)空间。但计算dp[n]只需要dp[n-1]和dp[n-2]，所以只用两个变量就够了，空间优化到O(1)！"}],codeSteps:[{title:"定义方法签名",description:"确定输入输出：输入是楼梯阶数n，输出是方法总数",code:`public int climbStairs(int n) {
    // 待实现
}`,explanation:"返回类型是int，因为方法数是整数。参数n表示楼梯总阶数。"},{title:"处理边界情况",description:"当n很小时，直接返回结果",code:`public int climbStairs(int n) {
    // 边界情况：n<=2时直接返回n
    if (n <= 2) {
        return n;
    }
}`,explanation:"n=1返回1，n=2返回2。这既是边界处理，也是我们的初始条件。"},{title:"初始化两个变量",description:"用两个变量代替数组，记录前两个状态",code:`public int climbStairs(int n) {
    if (n <= 2) return n;
    
    // prev2代表dp[i-2]，prev1代表dp[i-1]
    int prev2 = 1;  // dp[1] = 1
    int prev1 = 2;  // dp[2] = 2
}`,explanation:'prev2存储"前前一个"状态，prev1存储"前一个"状态。初始时prev2=1（1阶的方法数），prev1=2（2阶的方法数）。'},{title:"循环计算：确定循环范围",description:"从第3阶开始计算，直到第n阶",code:`public int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    
    // 从3开始，因为1和2已经有初始值了
    for (int i = 3; i <= n; i++) {
        // 计算当前阶的方法数
    }
}`,explanation:"为什么从3开始？因为dp[1]和dp[2]已经知道了。为什么i<=n？因为我们要计算到第n阶。"},{title:"状态转移：计算当前值",description:"当前方法数 = 前一阶方法数 + 前两阶方法数",code:`public int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;  // dp[i] = dp[i-1] + dp[i-2]
        // 更新变量，为下一轮做准备
        prev2 = prev1;
        prev1 = curr;
    }
}`,explanation:'curr是当前阶的方法数。计算完后，要更新prev2和prev1：prev2变成原来的prev1，prev1变成curr。这样下一轮循环时，prev2和prev1就是新的"前两个"状态。'},{title:"返回结果",description:"循环结束后，prev1就是第n阶的方法数",code:`public int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;  // 最终prev1就是dp[n]
}`,explanation:"循环结束时，prev1存的就是dp[n]的值，即到达第n阶的方法总数。"}],interview:{approach:"这道题的核心是发现规律：到达第n阶的方法数等于到达n-1阶和n-2阶的方法数之和，本质是斐波那契数列。我使用动态规划，用两个变量滚动更新，将空间复杂度从O(n)优化到O(1)。",timeComplexity:"O(n)：只需要一次循环从3到n",spaceComplexity:"O(1)：只用了两个变量prev1和prev2",followUp:[{question:"如果每次可以爬1、2、3阶呢？",answer:"状态转移变为dp[n] = dp[n-1] + dp[n-2] + dp[n-3]，需要三个变量滚动更新。"},{question:"能用矩阵快速幂优化到O(log n)吗？",answer:"可以！斐波那契数列可以用矩阵表示：[f(n), f(n-1)] = [f(2), f(1)] × [[1,1],[1,0]]^(n-2)，用快速幂计算矩阵的n次方。"},{question:"如果n非常大，结果会溢出怎么办？",answer:"可以对结果取模，比如对10^9+7取模，或者使用BigInteger类。"}]}},{id:"pascals-triangle",title:"杨辉三角",titleEn:"Pascals Triangle",category:"dp",difficulty:"easy",description:"给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。在「杨辉三角」中，每个数是它左上方和右上方的数的和。",examples:[{input:"numRows = 5",output:"[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",explanation:"每个数是上方两数之和"},{input:"numRows = 1",output:"[[1]]",explanation:"第一行只有一个1"}],thinkingGuide:[{step:1,question:"📐 杨辉三角有什么规律？",hint:"观察每个数是怎么来的",answer:"每行的首尾都是1，中间的每个数等于它正上方和左上方两个数的和。比如第3行的2 = 第2行的1+1。"},{step:2,question:"🔢 第i行有多少个数？",hint:"第1行有1个，第2行有2个...",answer:"第i行有i个数（i从1开始数）。如果从0开始数，第i行有i+1个数。"},{step:3,question:'💻 如何用代码表示"上方两数之和"？',hint:"假设上一行是prevRow，当前位置是j",answer:"当前数 = prevRow[j-1] + prevRow[j]。j-1是左上方，j是正上方。"},{step:4,question:"🚧 边界情况怎么处理？",hint:"每行的第一个和最后一个",answer:"当j=0或j=i时（首尾位置），直接设为1，不需要计算。"}],codeSteps:[{title:"定义方法和返回类型",description:"返回一个二维列表，每个内部列表是一行",code:`public List<List<Integer>> generate(int numRows) {
    // 待实现
}`,explanation:"返回类型是List<List<Integer>>，外层List存所有行，内层List存每行的数字。"},{title:"创建结果容器",description:"用ArrayList存储所有行",code:`public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> result = new ArrayList<>();
}`,explanation:"result用来存储最终的杨辉三角，每生成一行就添加进去。"},{title:"外层循环：遍历每一行",description:"从第0行到第numRows-1行",code:`public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> result = new ArrayList<>();
    
    for (int i = 0; i < numRows; i++) {
        List<Integer> row = new ArrayList<>();
        // 生成第i行
    }
}`,explanation:"i表示当前是第几行（从0开始）。每行创建一个新的ArrayList。"},{title:"内层循环：生成每行的数字",description:"第i行有i+1个数字",code:`for (int i = 0; i < numRows; i++) {
    List<Integer> row = new ArrayList<>();
    
    for (int j = 0; j <= i; j++) {
        // 计算第j个位置的值
    }
    
    result.add(row);
}`,explanation:"j从0到i，共i+1个数。循环结束后把这一行添加到result中。"},{title:"计算每个位置的值",description:"首尾为1，中间为上方两数之和",code:`for (int j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
        // 首尾位置，值为1
        row.add(1);
    } else {
        // 中间位置，等于上一行的两个数之和
        List<Integer> prevRow = result.get(i - 1);
        row.add(prevRow.get(j - 1) + prevRow.get(j));
    }
}`,explanation:"j==0是行首，j==i是行尾，都是1。中间位置取上一行的j-1和j位置相加。"},{title:"返回完整结果",description:"所有行生成完毕，返回result",code:`public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> result = new ArrayList<>();
    
    for (int i = 0; i < numRows; i++) {
        List<Integer> row = new ArrayList<>();
        for (int j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.add(1);
            } else {
                row.add(result.get(i-1).get(j-1) + result.get(i-1).get(j));
            }
        }
        result.add(row);
    }
    
    return result;
}`,explanation:"完整代码：外层循环遍历行，内层循环生成每行的数字，最后返回整个杨辉三角。"}],interview:{approach:"杨辉三角的规律是：每行首尾为1，中间的数等于上一行对应位置的两个数之和。我用两层循环，外层遍历行，内层生成每行的数字。",timeComplexity:"O(n²)：需要生成n行，第i行有i个数，总共1+2+...+n = n(n+1)/2个数",spaceComplexity:"O(n²)：存储整个杨辉三角",followUp:[{question:"如果只要返回第n行呢？",answer:"可以只保留上一行，空间优化到O(n)。或者利用组合数公式C(n,k)直接计算。"},{question:"杨辉三角和组合数有什么关系？",answer:"第n行第k个数就是C(n,k)，即从n个元素中选k个的方案数。"},{question:"如何高效获取第n行第k个数？",answer:"用公式C(n,k) = C(n,k-1) × (n-k+1) / k递推计算，避免计算阶乘。"}]}},{id:"house-robber",title:"打家劫舍",titleEn:"House Robber",category:"dp",difficulty:"medium",description:"你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。给定一个代表每个房屋存放金额的非负整数数组，计算你不触动警报装置的情况下，一夜之内能够偷窃到的最高金额。",examples:[{input:"nums = [1,2,3,1]",output:"4",explanation:"偷第1间（金额1）和第3间（金额3），总共1+3=4"},{input:"nums = [2,7,9,3,1]",output:"12",explanation:"偷第1间（2）、第3间（9）、第5间（1），总共2+9+1=12"}],thinkingGuide:[{step:1,question:"🤔 对于第i间房，你有几种选择？",hint:"偷还是不偷",answer:"两种选择：偷或不偷。如果偷第i间，就不能偷第i-1间；如果不偷第i间，金额和偷到第i-1间时相同。"},{step:2,question:"📉 如何用dp[i]表示状态？",hint:"dp[i]表示什么含义",answer:"dp[i]表示偷到第i间房时能获得的最大金额（不一定偷第i间）。"},{step:3,question:"🔄 状态转移方程是什么？",hint:"偷和不偷哪个更好",answer:"dp[i] = max(dp[i-1], dp[i-2] + nums[i])。不偷第i间：dp[i-1]；偷第i间：dp[i-2] + nums[i]。取较大值。"},{step:4,question:"🚦 初始条件是什么？",hint:"前两间房的情况",answer:"dp[0] = nums[0]（只有一间房，必偷）。dp[1] = max(nums[0], nums[1])（两间房，偷金额大的那间）。"},{step:5,question:"🚀 能优化空间吗？",hint:"计算dp[i]需要哪些值",answer:"只需要dp[i-1]和dp[i-2]，所以用两个变量就够了，空间从O(n)优化到O(1)。"}],codeSteps:[{title:"定义方法签名",description:"输入是金额数组，输出是最大金额",code:`public int rob(int[] nums) {
    // 待实现
}`,explanation:"参数nums是每间房的金额，返回能偷到的最大金额。"},{title:"处理边界情况",description:"只有一间房时直接返回",code:`public int rob(int[] nums) {
    int n = nums.length;
    if (n == 1) {
        return nums[0];  // 只有一间房，直接偷
    }
}`,explanation:"只有一间房时，没有选择，必须偷这间。"},{title:"初始化两个状态变量",description:"用两个变量代替dp数组",code:`public int rob(int[] nums) {
    int n = nums.length;
    if (n == 1) return nums[0];
    
    // prev2 = dp[i-2], prev1 = dp[i-1]
    int prev2 = nums[0];  // 第一间房的最大金额
    int prev1 = Math.max(nums[0], nums[1]);  // 前两间房的最大金额
}`,explanation:"prev2对应dp[0]=nums[0]，prev1对应dp[1]=max(nums[0],nums[1])。"},{title:"循环遍历剩余房屋",description:"从第3间房开始计算",code:`public int rob(int[] nums) {
    int n = nums.length;
    if (n == 1) return nums[0];
    
    int prev2 = nums[0];
    int prev1 = Math.max(nums[0], nums[1]);
    
    // 从第3间房（下标2）开始
    for (int i = 2; i < n; i++) {
        // 计算偷到第i间的最大金额
    }
}`,explanation:"为什么从i=2开始？因为i=0和i=1的情况已经在初始化时处理了。"},{title:"状态转移：选择偷或不偷",description:"比较偷当前房和不偷当前房的收益",code:`for (int i = 2; i < n; i++) {
    // 不偷第i间：prev1
    // 偷第i间：prev2 + nums[i]
    int curr = Math.max(prev1, prev2 + nums[i]);
    
    // 滚动更新
    prev2 = prev1;
    prev1 = curr;
}`,explanation:"curr是偷到第i间时的最大金额。然后滚动更新：prev2变成原来的prev1，prev1变成curr。"},{title:"返回最终结果",description:"prev1就是偷完所有房的最大金额",code:`public int rob(int[] nums) {
    int n = nums.length;
    if (n == 1) return nums[0];
    
    int prev2 = nums[0];
    int prev1 = Math.max(nums[0], nums[1]);
    
    for (int i = 2; i < n; i++) {
        int curr = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}`,explanation:"循环结束后，prev1存储的就是偷完所有房屋能获得的最大金额。"}],interview:{approach:"这是经典的动态规划问题。对于每间房，我们选择偷或不偷：偷的话加上当前金额但不能偷上一间，不偷的话金额和上一间相同。状态转移方程是dp[i] = max(dp[i-1], dp[i-2] + nums[i])。用滚动数组优化空间到O(1)。",timeComplexity:"O(n)：遍历一次数组",spaceComplexity:"O(1)：只用两个变量",followUp:[{question:"如果房屋围成一个圈呢？（打家劫舍II）",answer:"分两种情况：偷第一间不偷最后一间，或不偷第一间可偷最后一间。分别计算取最大值。"},{question:"如果房屋是树形结构呢？（打家劫舍III）",answer:"树形DP，每个节点返回两个值：偷这个节点的最大值和不偷这个节点的最大值。"},{question:"如何输出具体偷了哪些房？",answer:"额外记录每个状态是从哪个状态转移来的，最后回溯路径。"}]}},{id:"perfect-squares",title:"完全平方数",titleEn:"Perfect Squares",category:"dp",difficulty:"medium",description:"给你一个整数 n，返回和为 n 的完全平方数的最少数量。完全平方数是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。",examples:[{input:"n = 12",output:"3",explanation:"12 = 4 + 4 + 4（三个4相加）"},{input:"n = 13",output:"2",explanation:"13 = 4 + 9（4和9相加）"}],thinkingGuide:[{step:1,question:"🧩 这道题像什么类型的问题？",hint:"用若干个数凑出目标值",answer:"这是完全背包问题！我们有无限个完全平方数（1,4,9,16...），要用最少的数凑出n。"},{step:2,question:"📉 dp[i]应该表示什么？",hint:"凑出i需要多少个数",answer:"dp[i]表示凑出数字i所需的最少完全平方数个数。"},{step:3,question:"🔄 状态转移方程是什么？",hint:"尝试每个可用的完全平方数",answer:"对于每个完全平方数j²（j²≤i），dp[i] = min(dp[i], dp[i-j²] + 1)。意思是：用一个j²，剩下的i-j²需要dp[i-j²]个数。"},{step:4,question:"🚦 初始条件是什么？",hint:"凑出0需要几个数",answer:"dp[0] = 0，凑出0不需要任何数。其他位置初始化为一个很大的值（表示还没计算）。"},{step:5,question:"❓ 为什么初始化为很大的值而不是0？",hint:"我们要求最小值",answer:"因为我们要取min，如果初始化为0，min永远是0。初始化为一个大值（如n+1或Integer.MAX_VALUE），才能正确更新。"}],codeSteps:[{title:"定义方法签名",description:"输入是目标数n，输出是最少的完全平方数个数",code:`public int numSquares(int n) {
    // 待实现
}`,explanation:"返回凑出n所需的最少完全平方数个数。"},{title:"创建并初始化dp数组",description:"dp[i]表示凑出i的最少个数",code:`public int numSquares(int n) {
    // dp[i] = 凑出i的最少完全平方数个数
    int[] dp = new int[n + 1];
    
    // 初始化为最大值，方便后面取min
    Arrays.fill(dp, Integer.MAX_VALUE);
    
    // 凑出0需要0个数
    dp[0] = 0;
}`,explanation:"数组大小是n+1，因为要计算dp[0]到dp[n]。初始化为MAX_VALUE，dp[0]=0是基础情况。"},{title:"外层循环：遍历每个目标值",description:"从1到n，依次计算每个数的最少个数",code:`public int numSquares(int n) {
    int[] dp = new int[n + 1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;
    
    // 计算dp[1], dp[2], ..., dp[n]
    for (int i = 1; i <= n; i++) {
        // 尝试每个完全平方数
    }
}`,explanation:"从小到大计算，因为dp[i]依赖于更小的dp值。"},{title:"内层循环：尝试每个完全平方数",description:"遍历所有不超过i的完全平方数",code:`for (int i = 1; i <= n; i++) {
    // j是完全平方数的底数，j*j是完全平方数
    for (int j = 1; j * j <= i; j++) {
        // 尝试用一个j*j
    }
}`,explanation:"j从1开始，j*j就是1,4,9,16...。条件j*j<=i保证完全平方数不超过当前目标。"},{title:"状态转移：更新最小值",description:"比较使用当前完全平方数是否更优",code:`for (int i = 1; i <= n; i++) {
    for (int j = 1; j * j <= i; j++) {
        // 用一个j*j，剩下i-j*j需要dp[i-j*j]个数
        // 总共需要dp[i-j*j] + 1个数
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}`,explanation:"如果用一个j²，剩下的数是i-j²，需要dp[i-j²]个完全平方数，加上这个j²就是dp[i-j²]+1个。"},{title:"返回结果",description:"dp[n]就是凑出n的最少个数",code:`public int numSquares(int n) {
    int[] dp = new int[n + 1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    return dp[n];
}`,explanation:"完整代码：初始化dp数组，双层循环计算每个dp值，最后返回dp[n]。"}],interview:{approach:"这是完全背包问题的变形。dp[i]表示凑出i的最少完全平方数个数。对于每个i，尝试所有不超过i的完全平方数j²，状态转移方程是dp[i] = min(dp[i], dp[i-j²] + 1)。",timeComplexity:"O(n√n)：外层n次，内层√n次",spaceComplexity:"O(n)：dp数组",followUp:[{question:"能用BFS做吗？",answer:"可以！从n开始，每次减去一个完全平方数，找到0的最短路径。BFS天然找最短路径。"},{question:"四平方和定理是什么？",answer:"任何正整数都可以表示为最多4个完全平方数之和。所以答案只可能是1,2,3,4。"},{question:"如何判断答案是1？",answer:"当n本身是完全平方数时，答案是1。判断方法：(int)Math.sqrt(n) * (int)Math.sqrt(n) == n"}]}},{id:"coin-change",title:"零钱兑换",titleEn:"Coin Change",category:"dp",difficulty:"medium",description:"给你一个整数数组 coins，表示不同面额的硬币；以及一个整数 amount，表示总金额。计算并返回可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。你可以认为每种硬币的数量是无限的。",examples:[{input:"coins = [1,2,5], amount = 11",output:"3",explanation:"11 = 5 + 5 + 1，最少3枚硬币"},{input:"coins = [2], amount = 3",output:"-1",explanation:"只有面额2的硬币，无法凑出3"},{input:"coins = [1], amount = 0",output:"0",explanation:"金额0不需要硬币"}],thinkingGuide:[{step:1,question:'💡 这道题和"完全平方数"有什么相似之处？',hint:"都是用若干个数凑目标",answer:'非常相似！都是完全背包问题。"完全平方数"用1,4,9,16...凑n，这道题用coins数组里的数凑amount。'},{step:2,question:"📉 dp[i]表示什么？",hint:"凑出金额i需要多少硬币",answer:"dp[i]表示凑出金额i所需的最少硬币数。如果无法凑出，dp[i]保持为一个很大的值。"},{step:3,question:"🔄 状态转移方程是什么？",hint:"尝试每种硬币",answer:"对于每种硬币coin（coin≤i），dp[i] = min(dp[i], dp[i-coin] + 1)。用一枚coin，剩下的金额i-coin需要dp[i-coin]枚。"},{step:4,question:"🚦 如何判断无法凑出？",hint:"初始值和最终值的关系",answer:"初始化dp为amount+1（一个不可能的大值）。如果最后dp[amount]还是大于amount，说明无法凑出，返回-1。"},{step:5,question:"❓ 为什么用amount+1而不是Integer.MAX_VALUE？",hint:"考虑+1操作",answer:"因为要做dp[i-coin]+1，如果用MAX_VALUE会溢出变成负数。amount+1足够大（最多用amount个1元硬币），又不会溢出。"}],codeSteps:[{title:"定义方法签名",description:"输入硬币数组和目标金额，输出最少硬币数",code:`public int coinChange(int[] coins, int amount) {
    // 待实现
}`,explanation:"返回凑出amount的最少硬币数，无法凑出返回-1。"},{title:"创建并初始化dp数组",description:'用amount+1作为"无穷大"',code:`public int coinChange(int[] coins, int amount) {
    // dp[i] = 凑出金额i的最少硬币数
    int[] dp = new int[amount + 1];
    
    // 初始化为amount+1（不可能的值）
    Arrays.fill(dp, amount + 1);
    
    // 凑出0元需要0枚硬币
    dp[0] = 0;
}`,explanation:'amount+1是一个安全的"无穷大"：比任何有效答案都大，又不会在+1时溢出。'},{title:"外层循环：遍历每个金额",description:"从1到amount依次计算",code:`public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    // 计算dp[1], dp[2], ..., dp[amount]
    for (int i = 1; i <= amount; i++) {
        // 尝试每种硬币
    }
}`,explanation:"从小到大计算，保证计算dp[i]时，所有更小的dp值已经算好了。"},{title:"内层循环：尝试每种硬币",description:"遍历coins数组中的每种硬币",code:`for (int i = 1; i <= amount; i++) {
    for (int coin : coins) {
        // 只有当硬币面额不超过当前金额时才能用
        if (coin <= i) {
            // 尝试用这枚硬币
        }
    }
}`,explanation:"用foreach遍历所有硬币。条件coin<=i确保硬币面额不超过当前要凑的金额。"},{title:"状态转移：更新最小值",description:"比较使用当前硬币是否更优",code:`for (int i = 1; i <= amount; i++) {
    for (int coin : coins) {
        if (coin <= i) {
            // 用一枚coin，剩下i-coin需要dp[i-coin]枚
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
}`,explanation:"如果用一枚面额为coin的硬币，剩下的金额是i-coin，需要dp[i-coin]枚硬币，总共dp[i-coin]+1枚。"},{title:"返回结果：处理无法凑出的情况",description:"检查dp[amount]是否有效",code:`public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // 如果dp[amount]还是初始值，说明无法凑出
    return dp[amount] > amount ? -1 : dp[amount];
}`,explanation:"如果dp[amount]>amount，说明没有被更新过，无法凑出，返回-1；否则返回dp[amount]。"}],interview:{approach:"这是经典的完全背包问题。dp[i]表示凑出金额i的最少硬币数。对于每个金额i，尝试每种硬币coin，状态转移方程是dp[i] = min(dp[i], dp[i-coin] + 1)。初始化为amount+1避免溢出，最后检查是否能凑出。",timeComplexity:"O(amount × n)：amount是金额，n是硬币种类数",spaceComplexity:"O(amount)：dp数组",followUp:[{question:"如果要求凑出amount的方案数呢？",answer:"状态转移变为dp[i] += dp[i-coin]，初始dp[0]=1（凑出0有一种方案：不选任何硬币）。"},{question:"能用BFS做吗？",answer:"可以！从0开始，每次加一枚硬币，找到amount的最短路径。但空间复杂度可能更高。"},{question:"如果每种硬币只能用一次呢？",answer:"变成0-1背包问题，内层循环要倒序遍历，或者增加一个维度表示硬币使用情况。"}]}},{id:"word-break",title:"单词拆分",titleEn:"Word Break",category:"dp",difficulty:"medium",description:"给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。",examples:[{input:'s = "leetcode", wordDict = ["leet","code"]',output:"true",explanation:'"leetcode"可以拆分为"leet"+"code"'},{input:'s = "applepenapple", wordDict = ["apple","pen"]',output:"true",explanation:'可以拆分为"apple"+"pen"+"apple"，单词可以重复使用'},{input:'s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',output:"false",explanation:"无法拆分"}],thinkingGuide:[{step:1,question:"📉 dp[i]应该表示什么？",hint:"前i个字符能否被拆分",answer:"dp[i]表示字符串s的前i个字符（s[0..i-1]）能否被字典中的单词拼接而成。dp[i]是布尔值。"},{step:2,question:"✅ 如何判断dp[i]是否为true？",hint:"枚举分割点",answer:"枚举分割点j（0≤j<i）：如果dp[j]为true，且s[j..i-1]在字典中，那么dp[i]=true。意思是：前j个字符能拆分，剩下的j到i-1也是一个完整单词。"},{step:3,question:"🚦 初始条件是什么？",hint:"空字符串能否被拆分",answer:'dp[0]=true，空字符串可以被"拆分"（不需要任何单词）。这是递推的起点。'},{step:4,question:"🚀 如何高效判断子串是否在字典中？",hint:"什么数据结构查找快",answer:"把字典转成HashSet，查找时间O(1)。否则每次查找都要遍历整个字典。"},{step:5,question:"🛑 找到一个有效分割后还需要继续吗？",hint:"我们只需要判断能否拆分",answer:"不需要！一旦发现dp[i]=true，就可以break跳出内层循环，继续计算dp[i+1]。"}],codeSteps:[{title:"定义方法签名",description:"输入字符串和字典，输出能否拆分",code:`public boolean wordBreak(String s, List<String> wordDict) {
    // 待实现
}`,explanation:"返回true表示s可以被字典中的单词拼接，false表示不能。"},{title:"将字典转为HashSet",description:"加速单词查找",code:`public boolean wordBreak(String s, List<String> wordDict) {
    // 用Set加速查找，O(1)时间判断单词是否在字典中
    Set<String> dict = new HashSet<>(wordDict);
}`,explanation:"HashSet的contains方法是O(1)，比List的O(n)快得多。"},{title:"创建并初始化dp数组",description:"dp[i]表示前i个字符能否拆分",code:`public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    int n = s.length();
    
    // dp[i] = s的前i个字符能否被拆分
    boolean[] dp = new boolean[n + 1];
    
    // 空字符串可以被拆分
    dp[0] = true;
}`,explanation:"数组大小n+1，dp[0]到dp[n]。dp[0]=true是基础情况。"},{title:"外层循环：遍历每个位置",description:"计算dp[1]到dp[n]",code:`public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    int n = s.length();
    boolean[] dp = new boolean[n + 1];
    dp[0] = true;
    
    // 计算dp[1], dp[2], ..., dp[n]
    for (int i = 1; i <= n; i++) {
        // 枚举分割点j
    }
}`,explanation:"i表示要判断前i个字符能否拆分。"},{title:"内层循环：枚举分割点",description:"尝试在位置j处分割",code:`for (int i = 1; i <= n; i++) {
    // j是分割点：前j个字符 + 第j到i-1个字符
    for (int j = 0; j < i; j++) {
        // 检查是否能在j处分割
        if (dp[j] && dict.contains(s.substring(j, i))) {
            dp[i] = true;
            break;  // 找到一个就够了
        }
    }
}`,explanation:"j从0到i-1。如果dp[j]=true（前j个能拆分）且s[j..i-1]在字典中，则dp[i]=true。找到一个有效分割就break。"},{title:"返回结果",description:"dp[n]表示整个字符串能否拆分",code:`public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    int n = s.length();
    boolean[] dp = new boolean[n + 1];
    dp[0] = true;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.contains(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n];
}`,explanation:"dp[n]表示s的前n个字符（即整个字符串）能否被拆分。"}],interview:{approach:"动态规划。dp[i]表示s的前i个字符能否被字典中的单词拼接。对于每个位置i，枚举分割点j：如果dp[j]=true且s[j..i-1]在字典中，则dp[i]=true。用HashSet加速字典查找。",timeComplexity:"O(n²)：两层循环，substring也是O(n)但可以优化",spaceComplexity:"O(n)：dp数组",followUp:[{question:"如果要返回所有可能的拆分方案呢？",answer:"用回溯+记忆化搜索。记录每个位置能拆分成哪些单词，然后DFS生成所有路径。"},{question:"能用Trie优化吗？",answer:"可以！把字典建成Trie，在枚举分割点时沿着Trie走，可以提前剪枝。"},{question:"如何优化substring的开销？",answer:"可以限制内层循环的范围：j只需要从i-maxWordLen到i-minWordLen，其中maxWordLen和minWordLen是字典中单词的最大和最小长度。"}]}},{id:"longest-increasing-subsequence",title:"最长递增子序列",titleEn:"Longest Increasing Subsequence",category:"dp",difficulty:"medium",description:"给你一个整数数组 nums，找到其中最长严格递增子序列的长度。子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。",examples:[{input:"nums = [10,9,2,5,3,7,101,18]",output:"4",explanation:"最长递增子序列是[2,3,7,101]或[2,3,7,18]，长度为4"},{input:"nums = [0,1,0,3,2,3]",output:"4",explanation:"最长递增子序列是[0,1,2,3]"},{input:"nums = [7,7,7,7,7,7,7]",output:"1",explanation:"所有元素相同，最长递增子序列只有一个元素"}],thinkingGuide:[{step:1,question:"📉 dp[i]应该表示什么？",hint:"以第i个元素结尾",answer:"dp[i]表示以nums[i]结尾的最长递增子序列的长度。注意：必须以nums[i]结尾，不是前i个元素中的最长。"},{step:2,question:"🔍 如何计算dp[i]？",hint:"找前面比nums[i]小的元素",answer:"遍历所有j<i，如果nums[j]<nums[i]，说明nums[i]可以接在以nums[j]结尾的序列后面，dp[i] = max(dp[i], dp[j]+1)。"},{step:3,question:"🚦 初始值是什么？",hint:"单个元素也是递增子序列",answer:"每个dp[i]初始化为1，因为单独一个元素nums[i]本身就是长度为1的递增子序列。"},{step:4,question:"🏁 最终答案是什么？",hint:"最长的不一定以最后一个元素结尾",answer:"答案是所有dp[i]中的最大值，不是dp[n-1]！因为最长递增子序列不一定以数组最后一个元素结尾。"},{step:5,question:"⏱️ 这个解法的时间复杂度是多少？能优化吗？",hint:"两层循环",answer:"O(n²)。可以用二分查找优化到O(n log n)：维护一个数组，数组中第i个位置存储长度为i+1的递增子序列的最小结尾元素。"}],codeSteps:[{title:"定义方法签名",description:"输入数组，输出最长递增子序列的长度",code:`public int lengthOfLIS(int[] nums) {
    // 待实现
}`,explanation:"返回最长严格递增子序列的长度。"},{title:"创建并初始化dp数组",description:"每个位置初始化为1",code:`public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    
    // dp[i] = 以nums[i]结尾的LIS长度
    int[] dp = new int[n];
    
    // 初始化：单个元素的LIS长度为1
    Arrays.fill(dp, 1);
}`,explanation:"每个元素自己就是一个长度为1的递增子序列，所以初始化为1。"},{title:"初始化最大长度变量",description:"记录全局最大值",code:`public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    
    // 记录最长长度，初始为1（至少有一个元素）
    int maxLen = 1;
}`,explanation:"用maxLen记录所有dp[i]中的最大值，最后返回它。"},{title:"外层循环：遍历每个位置",description:"计算以每个元素结尾的LIS长度",code:`public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    int maxLen = 1;
    
    // 从第2个元素开始（第1个元素dp[0]=1已经确定）
    for (int i = 1; i < n; i++) {
        // 找前面所有比nums[i]小的元素
    }
}`,explanation:"i从1开始，因为dp[0]=1已经是正确的（只有一个元素）。"},{title:"内层循环：找前面更小的元素",description:"遍历所有j<i，更新dp[i]",code:`for (int i = 1; i < n; i++) {
    for (int j = 0; j < i; j++) {
        // 如果nums[j] < nums[i]，可以接在后面
        if (nums[j] < nums[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    // 更新全局最大值
    maxLen = Math.max(maxLen, dp[i]);
}`,explanation:"对于每个j<i，如果nums[j]<nums[i]，说明nums[i]可以接在以nums[j]结尾的序列后面，长度变为dp[j]+1。取所有可能中的最大值。"},{title:"返回最大长度",description:"maxLen就是最长递增子序列的长度",code:`public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    int maxLen = 1;
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    
    return maxLen;
}`,explanation:"完整代码：初始化dp数组，双层循环计算每个dp[i]，同时更新maxLen，最后返回maxLen。"}],interview:{approach:"动态规划。dp[i]表示以nums[i]结尾的最长递增子序列长度。对于每个位置i，遍历前面所有位置j，如果nums[j]<nums[i]，则dp[i] = max(dp[i], dp[j]+1)。最终答案是所有dp[i]的最大值。",timeComplexity:"O(n²)：两层循环",spaceComplexity:"O(n)：dp数组",followUp:[{question:"如何优化到O(n log n)？",answer:"维护一个数组tails，tails[i]表示长度为i+1的LIS的最小结尾元素。遍历nums，用二分查找在tails中找到第一个>=当前元素的位置并替换。"},{question:"如何输出具体的最长递增子序列？",answer:"记录每个位置的前驱（从哪个位置转移来的），找到dp最大的位置后，沿着前驱回溯。"},{question:"如果是最长非递减子序列呢？",answer:"把条件nums[j]<nums[i]改成nums[j]<=nums[i]即可。"}]}},{id:"max-product-subarray",title:"乘积最大子数组",titleEn:"Maximum Product Subarray",category:"dp",difficulty:"medium",description:"给你一个整数数组 nums，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。测试用例的答案是一个 32 位整数。子数组是数组的连续子序列。",examples:[{input:"nums = [2,3,-2,4]",output:"6",explanation:"子数组[2,3]的乘积最大，为6"},{input:"nums = [-2,0,-1]",output:"0",explanation:"结果不能为2，因为[-2,-1]不是连续子数组"},{input:"nums = [-2,3,-4]",output:"24",explanation:"整个数组的乘积：(-2)×3×(-4)=24"}],thinkingGuide:[{step:1,question:'🤔 这道题和"最大子数组和"有什么不同？',hint:"乘法有什么特殊性",answer:"乘法中负数×负数=正数！所以一个很小的负数乘以一个负数可能变成最大值。我们不能只记录最大值，还要记录最小值。"},{step:2,question:"📊 需要维护哪些状态？",hint:"最大和最小",answer:"需要同时维护以当前位置结尾的最大乘积maxProd和最小乘积minProd。因为最小的负数乘以一个负数可能变成最大。"},{step:3,question:"🔄 状态如何转移？",hint:"当前元素有三种选择",answer:"对于nums[i]，新的最大值可能是：nums[i]本身、nums[i]×前一个最大值、nums[i]×前一个最小值。最小值同理。"},{step:4,question:"❓ 为什么nums[i]本身也是一个选择？",hint:"想想前面乘积为0的情况",answer:'如果前面的乘积是0，或者nums[i]乘以前面的结果反而变小了，那就从nums[i]重新开始。这相当于"断开"前面的子数组。'},{step:5,question:"🚦 初始值和最终答案是什么？",hint:"从第一个元素开始",answer:"初始maxProd=minProd=result=nums[0]。每次更新后，用maxProd更新result。最后返回result。"}],codeSteps:[{title:"定义方法签名",description:"输入数组，输出最大乘积",code:`public int maxProduct(int[] nums) {
    // 待实现
}`,explanation:"返回连续子数组的最大乘积。"},{title:"初始化状态变量",description:"用第一个元素初始化",code:`public int maxProduct(int[] nums) {
    // 以当前位置结尾的最大乘积
    int maxProd = nums[0];
    // 以当前位置结尾的最小乘积
    int minProd = nums[0];
    // 全局最大乘积
    int result = nums[0];
}`,explanation:"三个变量：maxProd记录当前最大，minProd记录当前最小（可能是负数），result记录全局最大。"},{title:"遍历数组",description:"从第二个元素开始",code:`public int maxProduct(int[] nums) {
    int maxProd = nums[0];
    int minProd = nums[0];
    int result = nums[0];
    
    // 从第二个元素开始遍历
    for (int i = 1; i < nums.length; i++) {
        int curr = nums[i];
        // 计算新的最大和最小
    }
}`,explanation:"从i=1开始，因为i=0的情况已经在初始化时处理了。"},{title:"保存旧的最大值",description:"因为计算最小值时需要用到旧的最大值",code:`for (int i = 1; i < nums.length; i++) {
    int curr = nums[i];
    
    // 保存旧的maxProd，因为下面会被覆盖
    int tempMax = maxProd;
    
    // 计算新的最大值和最小值
}`,explanation:"计算新minProd时需要用旧的maxProd，但如果先更新maxProd，旧值就丢失了。所以先保存。"},{title:"更新最大值和最小值",description:"三者取最大/最小",code:`for (int i = 1; i < nums.length; i++) {
    int curr = nums[i];
    int tempMax = maxProd;
    
    // 新最大 = max(当前值, 当前×旧最大, 当前×旧最小)
    maxProd = Math.max(curr, Math.max(curr * maxProd, curr * minProd));
    
    // 新最小 = min(当前值, 当前×旧最大, 当前×旧最小)
    minProd = Math.min(curr, Math.min(curr * tempMax, curr * minProd));
    
    // 更新全局最大
    result = Math.max(result, maxProd);
}`,explanation:"注意计算minProd时用的是tempMax（旧的maxProd），而不是新的maxProd。"},{title:"返回结果",description:"result就是最大乘积",code:`public int maxProduct(int[] nums) {
    int maxProd = nums[0];
    int minProd = nums[0];
    int result = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        int curr = nums[i];
        int tempMax = maxProd;
        
        maxProd = Math.max(curr, Math.max(curr * maxProd, curr * minProd));
        minProd = Math.min(curr, Math.min(curr * tempMax, curr * minProd));
        
        result = Math.max(result, maxProd);
    }
    
    return result;
}`,explanation:"完整代码：初始化三个变量，遍历数组更新最大最小值，最后返回全局最大值。"}],interview:{approach:"这道题的关键是负数×负数=正数，所以需要同时维护以当前位置结尾的最大乘积和最小乘积。对于每个位置，新的最大值可能来自：当前元素本身、当前元素×前一个最大值、当前元素×前一个最小值。最小值同理。",timeComplexity:"O(n)：遍历一次数组",spaceComplexity:"O(1)：只用几个变量",followUp:[{question:"如果数组中有0怎么办？",answer:'0会"切断"子数组，因为任何数×0=0。我们的算法已经处理了这种情况：当curr=0时，maxProd和minProd都会变成0，相当于重新开始。'},{question:"如果要返回具体的子数组呢？",answer:"记录maxProd取得最大值时的起始和结束位置。每次maxProd=curr时，起始位置重置为i。"},{question:"能用分治法做吗？",answer:'可以，类似"最大子数组和"的分治解法，但需要维护更多信息：左端最大/最小乘积、右端最大/最小乘积、整体最大/最小乘积。'}]}},{id:"partition-equal-subset-sum",title:"分割等和子集",titleEn:"Partition Equal Subset Sum",category:"dp",difficulty:"medium",description:"给你一个只包含正整数的非空数组 nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。",examples:[{input:"nums = [1,5,11,5]",output:"true",explanation:"可以分割成[1,5,5]和[11]，和都是11"},{input:"nums = [1,2,3,5]",output:"false",explanation:"无法分割成两个和相等的子集"}],thinkingGuide:[{step:1,question:"🤔 两个子集和相等意味着什么？",hint:"总和的一半",answer:"如果总和是sum，那么每个子集的和必须是sum/2。所以问题变成：能否从数组中选出一些数，使它们的和等于sum/2？"},{step:2,question:"🛑 什么情况下一定不可能？",hint:"奇数能被2整除吗",answer:"如果sum是奇数，不可能分成两个相等的整数，直接返回false。"},{step:3,question:"🎒 这个问题像什么经典问题？",hint:"选或不选",answer:"0-1背包问题！每个数要么选（放入子集1），要么不选（放入子集2）。目标是选出的数的和等于sum/2。"},{step:4,question:"📉 dp[j]表示什么？",hint:"能否凑出j",answer:"dp[j]表示能否从数组中选出一些数，使它们的和等于j。dp[j]是布尔值。"},{step:5,question:"🔄 为什么内层循环要倒序？",hint:"0-1背包的特点",answer:"因为每个数只能用一次。如果正序，dp[j-num]可能已经被当前这个num更新过了，相当于num被用了多次。倒序保证dp[j-num]是上一轮的值。"}],codeSteps:[{title:"定义方法签名",description:"输入数组，输出能否分割",code:`public boolean canPartition(int[] nums) {
    // 待实现
}`,explanation:"返回true表示可以分割成两个和相等的子集。"},{title:"计算总和并判断奇偶",description:"奇数直接返回false",code:`public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
        sum += num;
    }
    
    // 奇数无法分成两个相等的整数
    if (sum % 2 != 0) {
        return false;
    }
    
    int target = sum / 2;  // 目标：选出和为target的子集
}`,explanation:"先算总和，如果是奇数直接返回false。否则目标是凑出sum/2。"},{title:"创建并初始化dp数组",description:"dp[j]表示能否凑出j",code:`public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) sum += num;
    if (sum % 2 != 0) return false;
    int target = sum / 2;
    
    // dp[j] = 能否凑出和为j
    boolean[] dp = new boolean[target + 1];
    
    // 凑出0总是可以的（不选任何数）
    dp[0] = true;
}`,explanation:"dp数组大小是target+1。dp[0]=true，因为和为0可以通过不选任何数实现。"},{title:"外层循环：遍历每个数",description:"考虑是否选择当前数",code:`public boolean canPartition(int[] nums) {
    // ... 前面的代码 ...
    
    // 遍历每个数
    for (int num : nums) {
        // 更新dp数组
    }
}`,explanation:"对于每个数num，更新dp数组，考虑选或不选这个数。"},{title:"内层循环：倒序更新dp",description:"从target到num倒序遍历",code:`for (int num : nums) {
    // 倒序遍历，保证每个数只用一次
    for (int j = target; j >= num; j--) {
        // 如果不选num，dp[j]保持不变
        // 如果选num，dp[j] = dp[j-num]
        dp[j] = dp[j] || dp[j - num];
    }
}`,explanation:"倒序是关键！dp[j] = dp[j] || dp[j-num]：要么不选num（保持原值），要么选num（看dp[j-num]）。"},{title:"返回结果",description:"dp[target]表示能否凑出target",code:`public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) sum += num;
    if (sum % 2 != 0) return false;
    int target = sum / 2;
    
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    
    for (int num : nums) {
        for (int j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    
    return dp[target];
}`,explanation:"dp[target]表示能否从数组中选出一些数，使它们的和等于target（即sum/2）。"}],interview:{approach:"这是0-1背包问题的变形。首先判断总和是否为偶数，如果是奇数直接返回false。然后目标变成：能否选出一些数使和等于sum/2。用一维dp数组，dp[j]表示能否凑出j。内层循环倒序遍历，保证每个数只用一次。",timeComplexity:"O(n × target)：n是数组长度，target是sum/2",spaceComplexity:"O(target)：一维dp数组",followUp:[{question:"如果要分成k个和相等的子集呢？",answer:"用回溯+剪枝，或者状态压缩DP。难度大大增加。"},{question:"如果要求两个子集的差最小呢？",answer:"还是0-1背包，找能凑出的最接近sum/2的值，答案是sum - 2×该值。"},{question:"能用位运算优化吗？",answer:"可以用bitset，dp |= dp << num，时间复杂度不变但常数更小。"}]}},{id:"longest-valid-parentheses",title:"最长有效括号",titleEn:"Longest Valid Parentheses",category:"dp",difficulty:"hard",description:"给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。",examples:[{input:'s = "(()"',output:"2",explanation:'最长有效括号子串是"()"'},{input:'s = ")()())"',output:"4",explanation:'最长有效括号子串是"()()"'},{input:'s = ""',output:"0",explanation:"空字符串"}],thinkingGuide:[{step:1,question:"📉 dp[i]应该表示什么？",hint:"以第i个字符结尾",answer:"dp[i]表示以s[i]结尾的最长有效括号子串的长度。注意：必须以s[i]结尾。"},{step:2,question:"🛑 如果s[i]是'('，dp[i]是多少？",hint:"有效括号能以'('结尾吗",answer:"dp[i]=0。有效括号必须以')'结尾，不可能以'('结尾。"},{step:3,question:"🔍 如果s[i]是')'，有哪些情况？",hint:"看s[i-1]是什么",answer:`两种情况：1) s[i-1]='('，形成"...()"；2) s[i-1]=')'，形成"...))"，需要找到与s[i]配对的'('。`},{step:4,question:"1️⃣ 情况1：s[i-1]='('时，dp[i]怎么算？",hint:'"()"前面可能还有有效括号',answer:'dp[i] = dp[i-2] + 2。"()"本身长度2，加上"()"前面的有效括号长度dp[i-2]。'},{step:5,question:"2️⃣ 情况2：s[i-1]=')'时，如何找配对的'('？",hint:"跳过s[i-1]对应的有效括号",answer:"与s[i]配对的'('在位置i-1-dp[i-1]。如果该位置是'('，dp[i] = dp[i-1] + 2 + dp[i-dp[i-1]-2]。"}],codeSteps:[{title:"定义方法签名",description:"输入括号字符串，输出最长有效长度",code:`public int longestValidParentheses(String s) {
    // 待实现
}`,explanation:"返回最长有效括号子串的长度。"},{title:"处理边界情况",description:"空字符串或长度小于2",code:`public int longestValidParentheses(String s) {
    int n = s.length();
    if (n < 2) {
        return 0;  // 长度小于2不可能有有效括号
    }
}`,explanation:'有效括号至少需要2个字符"()"。'},{title:"创建dp数组",description:"dp[i]表示以s[i]结尾的最长有效括号长度",code:`public int longestValidParentheses(String s) {
    int n = s.length();
    if (n < 2) return 0;
    
    // dp[i] = 以s[i]结尾的最长有效括号长度
    int[] dp = new int[n];
    int maxLen = 0;
}`,explanation:"dp数组初始化为0（Java默认）。maxLen记录全局最大值。"},{title:"遍历字符串",description:"从第二个字符开始",code:`public int longestValidParentheses(String s) {
    int n = s.length();
    if (n < 2) return 0;
    int[] dp = new int[n];
    int maxLen = 0;
    
    // 从i=1开始，因为i=0不可能形成有效括号
    for (int i = 1; i < n; i++) {
        // 只处理')'，因为'('结尾的dp值为0
        if (s.charAt(i) == ')') {
            // 分情况讨论
        }
    }
}`,explanation:"只有当s[i]=')'时才需要计算dp[i]，因为有效括号必须以')'结尾。"},{title:"情况1：s[i-1]='('",description:'形成"...()"的情况',code:`if (s.charAt(i) == ')') {
    if (s.charAt(i - 1) == '(') {
        // 形成"...()"，长度 = "()"前面的有效长度 + 2
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
    } else {
        // s[i-1] == ')'
    }
    maxLen = Math.max(maxLen, dp[i]);
}`,explanation:'i>=2时加上dp[i-2]，否则只有"()"本身，长度为2。'},{title:"情况2：s[i-1]=')'",description:`形成"...))"的情况，需要找配对的'('`,code:`if (s.charAt(i - 1) == ')') {
    // 与s[i]配对的'('的位置
    int j = i - 1 - dp[i - 1];
    
    // 如果j位置是'('，可以配对
    if (j >= 0 && s.charAt(j) == '(') {
        // 长度 = dp[i-1] + 2 + j前面的有效长度
        dp[i] = dp[i - 1] + 2 + (j >= 1 ? dp[j - 1] : 0);
    }
}`,explanation:"j = i-1-dp[i-1]是跳过s[i-1]对应的有效括号后的位置。如果s[j]='('，它与s[i]配对。"},{title:"完整代码",description:"整合所有情况",code:`public int longestValidParentheses(String s) {
    int n = s.length();
    if (n < 2) return 0;
    
    int[] dp = new int[n];
    int maxLen = 0;
    
    for (int i = 1; i < n; i++) {
        if (s.charAt(i) == ')') {
            if (s.charAt(i - 1) == '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - 1 - dp[i - 1] >= 0 && 
                       s.charAt(i - 1 - dp[i - 1]) == '(') {
                dp[i] = dp[i - 1] + 2 + 
                        (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
    }
    
    return maxLen;
}`,explanation:"完整代码：处理两种情况，注意边界检查，最后返回maxLen。"}],interview:{approach:`动态规划。dp[i]表示以s[i]结尾的最长有效括号长度。只有s[i]=')'时dp[i]才可能非零。分两种情况：1) s[i-1]='('，形成"()"，dp[i]=dp[i-2]+2；2) s[i-1]=')'，需要找与s[i]配对的'('，位置是i-1-dp[i-1]。`,timeComplexity:"O(n)：遍历一次字符串",spaceComplexity:"O(n)：dp数组",followUp:[{question:"能用栈做吗？",answer:`可以！栈中存下标，遇到'('入栈，遇到')'出栈。栈底保持一个"分隔符"下标，用于计算长度。`},{question:"能用O(1)空间吗？",answer:"可以！从左到右扫描一次，再从右到左扫描一次。分别用两个计数器记录'('和')'的数量。"},{question:"如果要返回最长有效括号子串本身呢？",answer:"记录maxLen取得最大值时的结束位置，然后用substring截取。"}]}}],Bj=[{id:"bubble-sort",title:"冒泡排序",titleEn:"Bubble Sort",category:"sorting",difficulty:"easy",description:'冒泡排序是最简单的排序算法之一。它重复地走访要排序的数列，一次比较两个相邻的元素，如果顺序错误就把它们交换过来。就像水中的气泡一样，大的数字会慢慢"浮"到数组的末尾。',examples:[{input:"arr = [64, 34, 25, 12, 22]",output:"[12, 22, 25, 34, 64]",explanation:"通过多轮比较和交换，将数组从小到大排序"}],thinkingGuide:[{step:1,question:"🛁 你见过水里的气泡吗？大气泡会怎样？",hint:"大气泡会慢慢浮到水面上",answer:'冒泡排序就像气泡上浮！大的数字就像大气泡，会慢慢"浮"到数组的右边（末尾）。我们每次比较相邻的两个数，如果左边的比右边的大，就交换它们的位置。'},{step:2,question:"🔢 如果有数组 [5, 3, 8, 1]，第一次比较谁和谁？",hint:"从最左边开始，比较第1个和第2个",answer:'比较5和3。因为5>3，所以交换，变成[3, 5, 8, 1]。然后比较5和8，5<8不用交换。再比较8和1，8>1交换，变成[3, 5, 1, 8]。一轮下来，最大的8已经"浮"到最右边了！'},{step:3,question:"🔄 一轮结束后，数组变成[3, 5, 1, 8]，还需要继续吗？",hint:"8已经在正确位置了，但3、5、1还没排好",answer:"继续！第二轮：比较3和5（不换）→比较5和1（交换）→得到[3, 1, 5, 8]。第三轮：比较3和1（交换）→得到[1, 3, 5, 8]。排好了！"},{step:4,question:"💡 冒泡排序的核心思想是什么？",hint:'每一轮都会把一个最大的数"冒泡"到正确位置',answer:'核心思想：通过相邻元素的比较和交换，每一轮都把当前未排序部分的最大值"冒泡"到末尾。n个数需要n-1轮，每轮比较次数逐渐减少。'}],codeSteps:[{title:"定义方法签名",description:"创建一个方法，接收整数数组作为参数",code:`public void bubbleSort(int[] arr) {
    int n = arr.length;
    // 待实现
}`,explanation:"方法名bubbleSort，参数是要排序的数组。先获取数组长度n，后面会用到。"},{title:"外层循环控制轮数",description:"n个数需要n-1轮比较",code:`public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        // 每轮把一个最大的数冒泡到末尾
    }
}`,explanation:"i从0到n-2，共n-1轮。为什么是n-1轮？因为排好n-1个数后，最后一个自然就在正确位置了。"},{title:"内层循环比较相邻元素",description:"每轮比较相邻的两个数",code:`public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            // 比较arr[j]和arr[j+1]
        }
    }
}`,explanation:"j < n-1-i：因为每轮结束后，末尾的i个数已经排好了，不需要再比较。这是一个重要的优化！"},{title:"比较并交换",description:"如果左边的数比右边大，就交换",code:`for (int j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
        // 交换arr[j]和arr[j+1]
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
}`,explanation:"用临时变量temp保存arr[j]，然后交换两个数的位置。这是交换两个变量的经典写法。"},{title:"优化：提前结束",description:"如果某一轮没有发生交换，说明已经排好了",code:`for (int i = 0; i < n - 1; i++) {
    boolean swapped = false;
    for (int j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
        }
    }
    if (!swapped) break; // 没有交换，提前结束
}`,explanation:"用swapped标记是否发生交换，如果一轮下来都没交换，说明数组已经有序，可以提前结束。"}],interview:{approach:'【面试回答模板】\\n\\n冒泡排序的核心思想是**通过相邻元素的比较和交换**，让大的元素逐渐"冒泡"到数组末尾。\\n\\n1. **过程**：外层循环控制轮数（n-1轮），内层循环进行相邻比较和交换。\\n2. **优化**：添加 `swapped` 标记，如果某一轮没有任何交换，说明数组已经有序，提前结束。\\n3. **特点**：稳定排序，空间 O(1)，但时间 O(n²) 较慢，一般只用于教学或极小数据量。',timeComplexity:"O(n²)：两层循环，每层最多n次",spaceComplexity:"O(1)：只用了几个临时变量",followUp:[{question:"冒泡排序是稳定的吗？",answer:"是稳定的，因为只有当arr[j]>arr[j+1]时才交换，相等时不交换，所以相同元素的相对顺序不变。"},{question:"最好情况下时间复杂度是多少？",answer:"如果加了swapped优化，最好情况（已排序）是O(n)，只需要一轮比较。"}]}},{id:"selection-sort",title:"选择排序",titleEn:"Selection Sort",category:"sorting",difficulty:"easy",description:"选择排序的思想很简单：每次从未排序的部分中选出最小的元素，放到已排序部分的末尾。就像排队时，每次找出最矮的人，让他站到队伍最前面。",examples:[{input:"arr = [64, 25, 12, 22, 11]",output:"[11, 12, 22, 25, 64]",explanation:"每次选出最小的数放到前面"}],thinkingGuide:[{step:1,question:"如果让你给5个小朋友按身高排队，你会怎么做？",hint:"可以每次找出最矮的那个",answer:"选择排序就像这样！每次从还没排好的小朋友中，找出最矮的那个，让他站到队伍最前面。然后在剩下的人中再找最矮的，站到第二个位置...以此类推。"},{step:2,question:"数组[64, 25, 12, 22, 11]中，最小的数是哪个？在哪个位置？",hint:"遍历整个数组，记录最小值的位置",answer:"最小的是11，在位置4（从0开始数）。找到后，把11和位置0的64交换，数组变成[11, 25, 12, 22, 64]。"},{step:3,question:"现在11已经在正确位置了，接下来怎么做？",hint:"在[25, 12, 22, 64]中找最小的",answer:"在位置1到4中找最小的，是12（位置2）。把12和位置1的25交换，得到[11, 12, 25, 22, 64]。继续这个过程直到排完。"},{step:4,question:"选择排序和冒泡排序有什么区别？",hint:"想想交换的次数",answer:"选择排序每轮只交换一次（找到最小值后才交换），而冒泡排序可能交换多次。选择排序的交换次数更少，但比较次数一样多。"}],codeSteps:[{title:"定义方法签名",description:"创建选择排序方法",code:`public void selectionSort(int[] arr) {
    int n = arr.length;
    // 待实现
}`,explanation:"接收数组，原地排序，不需要返回值。"},{title:"外层循环确定当前位置",description:"从位置0开始，依次确定每个位置的值",code:`public void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        // 找到位置i应该放的最小值
    }
}`,explanation:"i表示当前要确定的位置，从0到n-2。最后一个位置不用处理，因为前面都排好了它自然就对了。"},{title:"假设当前位置是最小值",description:"用minIdx记录最小值的位置",code:`for (int i = 0; i < n - 1; i++) {
    int minIdx = i; // 假设当前位置就是最小值
    // 在后面找更小的
}`,explanation:"先假设位置i的元素是最小的，然后去后面找有没有更小的。"},{title:"在剩余部分找最小值",description:"遍历i+1到n-1，找真正的最小值",code:`for (int i = 0; i < n - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j; // 更新最小值位置
        }
    }
}`,explanation:"j从i+1开始，如果arr[j]比当前最小值还小，就更新minIdx。"},{title:"交换到正确位置",description:"把最小值交换到位置i",code:`for (int i = 0; i < n - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    // 交换
    int temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
}`,explanation:"找到最小值后，和位置i的元素交换。每轮只交换一次！"}],interview:{approach:"选择排序每次从未排序部分选出最小元素，放到已排序部分末尾。时间复杂度O(n²)，但交换次数少，最多n-1次。",timeComplexity:"O(n²)：两层循环，外层n次，内层平均n/2次",spaceComplexity:"O(1)：只用了几个临时变量",followUp:[{question:"选择排序是稳定的吗？",answer:"不稳定。例如[5a, 5b, 3]，第一轮会把3和5a交换，变成[3, 5b, 5a]，两个5的相对顺序变了。"},{question:"选择排序的优势是什么？",answer:"交换次数少（最多n-1次），适合交换成本高的场景。"}]}},{id:"insertion-sort",title:"插入排序",titleEn:"Insertion Sort",category:"sorting",difficulty:"easy",description:"插入排序就像整理扑克牌：每次拿到一张新牌，就把它插入到手中已排好序的牌的正确位置。从第二张牌开始，每张牌都要找到自己的位置插进去。",examples:[{input:"arr = [5, 2, 4, 6, 1, 3]",output:"[1, 2, 3, 4, 5, 6]",explanation:"像整理扑克牌一样，逐个插入到正确位置"}],thinkingGuide:[{step:1,question:"你打牌时是怎么整理手中的牌的？",hint:"每拿到一张新牌，就插到合适的位置",answer:"插入排序就像整理扑克牌！假设左手已经有几张排好序的牌，每次右手拿到一张新牌，就从右往左找，找到合适的位置插进去。"},{step:2,question:'数组[5, 2, 4, 6, 1, 3]，第一张牌5已经"在手上"了，接下来处理谁？',hint:"从第二个元素开始",answer:"处理2。把2拿起来（保存到临时变量），然后和左边的5比较。2<5，所以5往右移一位，2插到5原来的位置。变成[2, 5, 4, 6, 1, 3]。"},{step:3,question:"现在处理4，应该插到哪里？",hint:"4比5小，比2大",answer:"4拿起来，和5比较，4<5，5右移。再和2比较，4>2，停！4插到2和5之间。变成[2, 4, 5, 6, 1, 3]。"},{step:4,question:"插入排序什么时候效率最高？",hint:"想想如果数组已经基本有序会怎样",answer:"当数组基本有序时，插入排序效率最高！因为每个元素只需要比较很少几次就能找到位置。这是插入排序的优势。"}],codeSteps:[{title:"定义方法签名",description:"创建插入排序方法",code:`public void insertionSort(int[] arr) {
    int n = arr.length;
    // 待实现
}`,explanation:"接收数组，原地排序。"},{title:"从第二个元素开始遍历",description:"第一个元素默认已排序",code:`public void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        // 把arr[i]插入到前面已排序的部分
    }
}`,explanation:'i从1开始，因为位置0的元素默认已经"在手上"了。'},{title:"保存当前要插入的值",description:"用key保存当前元素",code:`for (int i = 1; i < n; i++) {
    int key = arr[i]; // 拿起这张牌
    int j = i - 1;    // 从左边第一张牌开始比较
}`,explanation:"key保存要插入的值，j指向已排序部分的最后一个元素。"},{title:"向左找插入位置",description:"比key大的元素都往右移",code:`for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    
    // 比key大的元素往右移
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // 右移
        j--;
    }
}`,explanation:"while循环：只要j>=0且arr[j]>key，就把arr[j]右移一位，然后j--继续往左找。"},{title:"插入到正确位置",description:"把key放到j+1的位置",code:`for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    
    arr[j + 1] = key; // 插入
}`,explanation:"循环结束时，j+1就是key应该插入的位置。为什么是j+1？因为循环结束时j要么是-1，要么arr[j]<=key。"}],interview:{approach:"插入排序像整理扑克牌，每次把一个元素插入到已排序部分的正确位置。对于基本有序的数组效率很高。",timeComplexity:"O(n²)：最坏情况每个元素都要移动到最前面",spaceComplexity:"O(1)：原地排序，只用常数空间",followUp:[{question:"插入排序是稳定的吗？",answer:"是稳定的，因为只有arr[j]>key时才移动，相等时不移动，所以相同元素的相对顺序不变。"},{question:"最好情况下时间复杂度是多少？",answer:"O(n)，当数组已经有序时，每个元素只需要比较一次。"}]}},{id:"quick-sort",title:"快速排序",titleEn:"Quick Sort",category:"sorting",difficulty:"medium",description:'快速排序是最常用的排序算法之一。它的核心思想是"分而治之"：选一个基准值，把数组分成两部分，左边都比基准小，右边都比基准大，然后递归地对两部分排序。',examples:[{input:"arr = [10, 7, 8, 9, 1, 5]",output:"[1, 5, 7, 8, 9, 10]",explanation:"通过分治法快速排序"}],thinkingGuide:[{step:1,question:"🤔 如果让你把一群人按身高分成两组，你会怎么做？",hint:"找一个人当标准",answer:'快速排序就是这样！选一个人当"基准"，比他矮的站左边，比他高的站右边。然后对左边和右边分别再做同样的事情。'},{step:2,question:"🔪 数组[10, 7, 8, 9, 1, 5]，如果选最后一个元素5作为基准，怎么分？",hint:"比5小的放左边，比5大的放右边",answer:"遍历数组，1比5小放左边，7、8、9、10都比5大放右边。结果：[1, 5, 7, 8, 9, 10]，5已经在正确位置了！"},{step:3,question:"🔄 分完之后，左边[1]和右边[7, 8, 9, 10]怎么处理？",hint:"递归",answer:"递归！左边只有一个元素，不用排了。右边继续选基准、分区、递归...直到所有部分都只剩一个元素。"},{step:4,question:"⏳ 快速排序的时间复杂度是多少？",hint:"取决于基准的选择",answer:"平均O(nlogn)，最坏O(n²)。最坏情况是每次选的基准都是最大或最小值，导致分区极不平衡。"}],codeSteps:[{title:"定义主方法",description:"快速排序的入口",code:`public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        // 分区并获取基准位置
        // 递归排序左右两部分
    }
}`,explanation:"low和high是要排序的范围。只有当low<high时才需要排序。"},{title:"分区函数框架",description:"把数组分成两部分",code:`private int partition(int[] arr, int low, int high) {
    int pivot = arr[high]; // 选最后一个元素作为基准
    int i = low - 1;       // i指向小于基准的区域的最后一个元素
    // 遍历并分区
    return i + 1; // 返回基准的最终位置
}`,explanation:"pivot是基准值，i用来追踪小于基准的元素应该放的位置。"},{title:"遍历并分区",description:"把小于基准的元素换到左边",code:`private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // 交换arr[i]和arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return i + 1;
}`,explanation:"遍历low到high-1，如果arr[j]<pivot，就把它换到左边（i的位置）。"},{title:"把基准放到正确位置",description:"基准应该在i+1的位置",code:`private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // 把基准放到正确位置
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}`,explanation:"分区结束后，i+1左边都是小于基准的，右边都是大于基准的，把基准放到i+1位置。"},{title:"递归排序",description:"对左右两部分递归排序",code:`public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        
        quickSort(arr, low, pi - 1);  // 排序左边
        quickSort(arr, pi + 1, high); // 排序右边
    }
}`,explanation:"pi是基准的位置，它已经在正确位置了。递归排序左边[low, pi-1]和右边[pi+1, high]。"}],interview:{approach:"【面试回答模板】\\n\\n快速排序使用**分治法**。\\n\\n1. **分区 (Partition)**：选择一个基准值 (Pivot)，将数组分成两部分，小于基准的在左边，大于基准的在右边。\\n2. **递归 (Recursion)**：对左右两部分分别进行快速排序。\\n3. **终止**：当子数组长度为0或1时停止。\\n\\n它是原地排序，不需要额外数组，但递归需要栈空间。",timeComplexity:"O(nlogn)平均，O(n²)最坏",spaceComplexity:"O(logn)：递归栈空间",followUp:[{question:"如何避免最坏情况？",answer:"随机选择基准，或者选择三数取中（首、中、尾三个数的中位数）作为基准。"},{question:"快速排序是稳定的吗？",answer:"不稳定，因为分区时相同元素可能被交换到不同位置。"}]}},{id:"merge-sort",title:"归并排序",titleEn:"Merge Sort",category:"sorting",difficulty:"medium",description:"归并排序也是分治法的典型应用。它把数组分成两半，分别排序，然后把两个有序数组合并成一个有序数组。就像两队已经排好队的人合并成一队。",examples:[{input:"arr = [38, 27, 43, 3, 9, 82, 10]",output:"[3, 9, 10, 27, 38, 43, 82]",explanation:"通过分治和合并实现排序"}],thinkingGuide:[{step:1,question:"👯 如果有两队已经按身高排好的人，怎么把他们合并成一队？",hint:"每次比较两队最前面的人",answer:"每次比较两队最前面的人，谁矮谁先出列。这样合并出来的队伍也是按身高排好的！"},{step:2,question:"📚 数组[38, 27, 43, 3]怎么用归并排序？",hint:"先分成两半",answer:"分治大法！分成[38, 27]和[43, 3]。再分：[38]、[27]、[43]、[3]。单元素天然有序。"},{step:3,question:"🔁 怎么合并回来？",hint:"两两合并",answer:"合并：[27, 38]、[3, 43]。最后合并这两个有序数组：比较27和3取3，比较27和43取27... 结果：[3, 27, 38, 43]。"},{step:4,question:"🆚 归并排序和快速排序有什么区别？",hint:"想想工作是在分的时候做还是合的时候做",answer:'快速排序的工作在"分"的时候做（partition），归并排序的工作在"合"的时候做（merge）。此外，归并排序是稳定的，且需要额外 O(n) 空间。'}],codeSteps:[{title:"定义主方法",description:"归并排序的入口",code:`public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        // 递归排序左右两半
        // 合并两个有序数组
    }
}`,explanation:"left和right是要排序的范围。mid是中点，用left+(right-left)/2避免溢出。"},{title:"递归排序两半",description:"先分别排序左右两部分",code:`public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        mergeSort(arr, left, mid);      // 排序左半部分
        mergeSort(arr, mid + 1, right); // 排序右半部分
        
        merge(arr, left, mid, right);   // 合并
    }
}`,explanation:"先递归排序左半部分[left, mid]，再递归排序右半部分[mid+1, right]，最后合并。"},{title:"合并函数框架",description:"合并两个有序数组",code:`private void merge(int[] arr, int left, int mid, int right) {
    // 创建临时数组
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int[] L = new int[n1];
    int[] R = new int[n2];
    
    // 复制数据到临时数组
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
}`,explanation:"创建两个临时数组L和R，分别存储左半部分和右半部分的数据。"},{title:"合并两个有序数组",description:"每次取较小的那个",code:`private void merge(int[] arr, int left, int mid, int right) {
    // ... 创建临时数组的代码 ...
    
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
}`,explanation:"i指向L的当前元素，j指向R的当前元素，k指向合并后数组的当前位置。每次取较小的放入arr[k]。"},{title:"处理剩余元素",description:"把剩余的元素复制过去",code:`// 复制L的剩余元素
while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
}

// 复制R的剩余元素
while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
}`,explanation:"当一边遍历完后，另一边可能还有剩余元素，直接复制过去即可。"}],interview:{approach:"【面试回答模板】\\n\\n归并排序采用**分治策略**。\\n\\n1. **分**：将数组从中间平分，递归分解直到只剩一个元素。\\n2. **合**：将两个有序子数组合并成一个有序数组。合并时使用两个指针，每次取较小的元素放入临时数组。\\n\\n特点：稳定排序，时间复杂度严格 O(nlogn)，但缺点是需要 O(n) 的额外空间。",timeComplexity:"O(nlogn)：分logn层，每层合并O(n)",spaceComplexity:"O(n)：需要额外的临时数组",followUp:[{question:"归并排序是稳定的吗？",answer:"是稳定的，因为合并时相等元素取左边的，保持了相对顺序。"},{question:"归并排序的缺点是什么？",answer:"需要O(n)的额外空间，空间复杂度较高。"}]}},{id:"heap-sort",title:"堆排序",titleEn:"Heap Sort",category:"sorting",difficulty:"medium",description:"堆排序利用堆这种数据结构来排序。堆是一种完全二叉树，最大堆的每个节点都大于等于它的子节点。我们先建立最大堆，然后不断取出堆顶（最大值）放到数组末尾。",examples:[{input:"arr = [12, 11, 13, 5, 6, 7]",output:"[5, 6, 7, 11, 12, 13]",explanation:"利用堆的性质进行排序"}],thinkingGuide:[{step:1,question:"什么是堆？最大堆有什么特点？",hint:"想象一个金字塔",answer:"堆是一种完全二叉树。最大堆的特点是：每个节点都大于等于它的子节点，所以堆顶一定是最大值！"},{step:2,question:"如果堆顶是最大值，怎么用它来排序？",hint:"每次取出最大值放到最后",answer:"每次把堆顶（最大值）和数组最后一个元素交换，然后把堆的大小减1，重新调整堆。这样最大值就到了数组末尾！"},{step:3,question:"如何把一个数组变成最大堆？",hint:"从最后一个非叶子节点开始调整",answer:'从最后一个非叶子节点开始，向前遍历，对每个节点做"下沉"操作（如果比子节点小就交换）。'},{step:4,question:"堆排序的时间复杂度是多少？",hint:"建堆O(n)，每次调整O(logn)",answer:"建堆O(n)，然后n次取出堆顶并调整，每次调整O(logn)，总共O(nlogn)。"}],codeSteps:[{title:"定义主方法",description:"堆排序的入口",code:`public void heapSort(int[] arr) {
    int n = arr.length;
    
    // 1. 建立最大堆
    // 2. 依次取出堆顶
}`,explanation:"堆排序分两步：先建堆，再依次取出堆顶。"},{title:"建立最大堆",description:"从最后一个非叶子节点开始调整",code:`public void heapSort(int[] arr) {
    int n = arr.length;
    
    // 建立最大堆
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}`,explanation:"n/2-1是最后一个非叶子节点的索引。从它开始向前遍历，对每个节点调用heapify。"},{title:"依次取出堆顶",description:"把堆顶和最后一个元素交换，然后调整堆",code:`public void heapSort(int[] arr) {
    int n = arr.length;
    
    // 建立最大堆
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // 依次取出堆顶
    for (int i = n - 1; i > 0; i--) {
        // 交换堆顶和最后一个元素
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        
        // 调整堆
        heapify(arr, i, 0);
    }
}`,explanation:"每次把堆顶arr[0]和arr[i]交换，然后对前i个元素调整堆。"},{title:"heapify函数框架",description:"调整以i为根的子树为最大堆",code:`private void heapify(int[] arr, int n, int i) {
    int largest = i;      // 假设根节点最大
    int left = 2 * i + 1; // 左子节点
    int right = 2 * i + 2; // 右子节点
    
    // 找出最大的节点
    // 如果最大的不是根，交换并递归调整
}`,explanation:"在数组表示的堆中，节点i的左子节点是2i+1，右子节点是2i+2。"},{title:"完成heapify",description:"找最大节点并调整",code:`private void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    // 如果左子节点更大
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // 如果右子节点更大
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // 如果最大的不是根
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        
        heapify(arr, n, largest); // 递归调整
    }
}`,explanation:"找出根、左子、右子中最大的，如果不是根就交换，然后递归调整被交换的子树。"}],interview:{approach:"堆排序利用最大堆的性质，先建堆，然后不断取出堆顶（最大值）放到数组末尾。时间复杂度稳定O(nlogn)，原地排序。",timeComplexity:"O(nlogn)：建堆O(n)，n次调整每次O(logn)",spaceComplexity:"O(1)：原地排序",followUp:[{question:"堆排序是稳定的吗？",answer:"不稳定，因为堆顶和末尾元素交换时可能改变相同元素的相对顺序。"},{question:"堆排序的优势是什么？",answer:"时间复杂度稳定O(nlogn)，空间复杂度O(1)，适合对空间要求严格的场景。"}]}},{id:"counting-sort",title:"计数排序",titleEn:"Counting Sort",category:"sorting",difficulty:"easy",description:"计数排序不是基于比较的排序，而是统计每个数出现的次数，然后按顺序输出。就像数糖果：先数每种颜色有几颗，然后按颜色顺序一颗颗放出来。",examples:[{input:"arr = [4, 2, 2, 8, 3, 3, 1]",output:"[1, 2, 2, 3, 3, 4, 8]",explanation:"统计每个数的个数，然后按顺序输出"}],thinkingGuide:[{step:1,question:"🍬 如果有一堆红、黄、蓝三种颜色的糖果，怎么按颜色排好？",hint:"可以先数每种颜色有几颗",answer:"计数排序就像数糖果！先准备三个盒子（红、黄、蓝），把糖果按颜色放进去并数个数。然后按顺序把糖果从盒子里拿出来。"},{step:2,question:"📊 数组[4, 2, 2, 8, 3, 3, 1]，每个数出现几次？",hint:"用一个数组来记录",answer:"1出现1次，2出现2次，3出现2次，4出现1次，8出现1次。用count数组记录：count[1]=1, count[2]=2, count[3]=2, count[4]=1, count[8]=1。"},{step:3,question:"🔢 有了计数数组，怎么得到排序结果？",hint:"从小到大遍历计数数组",answer:"遍历count数组，count[i]是几就输出几个i。count[1]=1输出1个1，count[2]=2输出2个2...得到[1, 2, 2, 3, 3, 4, 8]。"},{step:4,question:"💡 计数排序什么时候适用？",hint:"想想如果数值范围很大会怎样",answer:"计数排序适合数值范围不大的整数排序。如果范围是0-100，只需要101大小的数组。但如果范围是0-10亿，就不适合了！"}],codeSteps:[{title:"找出最大值",description:"确定计数数组的大小",code:`public void countingSort(int[] arr) {
    int max = arr[0];
    for (int num : arr) {
        if (num > max) max = num;
    }
    // 创建计数数组
    int[] count = new int[max + 1];
}`,explanation:"计数数组大小为max+1，索引0到max"},{title:"统计每个数的个数",description:"遍历数组，统计出现次数",code:`for (int num : arr) {
    count[num]++;
}`,explanation:"count[num]记录num出现的次数"},{title:"按顺序输出",description:"遍历计数数组，输出排序结果",code:`int index = 0;
for (int i = 0; i <= max; i++) {
    while (count[i] > 0) {
        arr[index++] = i;
        count[i]--;
    }
}`,explanation:"count[i]是几就输出几个i"},{title:"完整代码",description:"CountingSort 类的完整实现",code:`public class CountingSort {
    public void countingSort(int[] arr) {
        if (arr.length == 0) return;
        
        // 找最大值
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        
        // 统计每个数的个数
        int[] count = new int[max + 1];
        for (int num : arr) {
            count[num]++;
        }
        
        // 按顺序输出
        int index = 0;
        for (int i = 0; i <= max; i++) {
            while (count[i] > 0) {
                arr[index++] = i;
                count[i]--;
            }
        }
    }
}`,explanation:"完整的计数排序实现，包含找最大值、统计和输出三个步骤。"}],interview:{approach:"【面试回答模板】\\n\\n计数排序是一种**非比较排序**算法。\\n\\n1. **统计**：遍历数组，统计每个数字出现的次数，存入计数数组。\\n2. **输出**：遍历计数数组，按顺序输出对应数量的数字。\\n3. **适用**：适合**数值范围不大**的整数排序。\\n\\n时间复杂度 O(n+k)，空间复杂度 O(k)，其中 k 是数值范围。",timeComplexity:"O(n + k)：n是元素个数，k是数值范围",spaceComplexity:"O(k)：需要k大小的计数数组",followUp:[{question:"计数排序可以是稳定的吗？",answer:"可以。如果不直接通过count数组输出，而是对count数组做前缀和，然后从后往前遍历原数组放置元素，就是稳定的。"},{question:"如果数组中有负数怎么办？",answer:"找出最小值min，将所有数减去min映射到非负区间，排序后再加回min。或者直接使用偏移量。"}]}},{id:"radix-sort",title:"基数排序",titleEn:"Radix Sort",category:"sorting",difficulty:"medium",description:"基数排序是按位排序：先按个位排，再按十位排，再按百位排...就像整理学号，先按最后一位数字分组，再按倒数第二位分组，以此类推。",examples:[{input:"arr = [170, 45, 75, 90, 802, 24, 2, 66]",output:"[2, 24, 45, 66, 75, 90, 170, 802]",explanation:"先按个位排，再按十位排，再按百位排"}],thinkingGuide:[{step:1,question:"📚 如果要按学号排序，学号是三位数，怎么排？",hint:"可以一位一位地排",answer:"基数排序就是这样！先按个位数字分成10组（0-9），按顺序收集。再按十位分组收集。最后按百位分组收集。神奇的是，这样就排好了！"},{step:2,question:"1️⃣ [170, 45, 75, 90, 802, 24, 2, 66]按个位怎么分？",hint:"个位是0的一组，是2的一组...",answer:"个位0: [170, 90]，个位2: [802, 2]，个位4: [24]，个位5: [45, 75]，个位6: [66]。收集后：[170, 90, 802, 2, 24, 45, 75, 66]。"},{step:3,question:"🔟 继续按十位分组，会怎样？",hint:"注意2的十位是0",answer:"十位0: [802, 2]，十位2: [24]，十位4: [45]，十位6: [66]，十位7: [170, 75]，十位9: [90]。收集后：[802, 2, 24, 45, 66, 170, 75, 90]。"},{step:4,question:"🔄 为什么从低位到高位排序能得到正确结果？",hint:"想想稳定排序的特点",answer:"关键是每轮排序必须是**稳定的**！这样高位相同时，低位的顺序会保持。比如45和75，按十位排序时都在7组，但45在75前面（个位排序的结果），所以最终45在75前面。"}],codeSteps:[{title:"找最大值确定位数",description:"最大值的位数决定需要排几轮",code:`public void radixSort(int[] arr) {
    int max = arr[0];
    for (int num : arr) {
        if (num > max) max = num;
    }
    // 按每一位排序
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}`,explanation:"exp表示当前处理的位：1是个位，10是十位，100是百位"},{title:"按某一位进行计数排序",description:"对当前位使用计数排序",code:`private void countingSortByDigit(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10]; // 0-9
    
    // 统计当前位的数字出现次数
    for (int num : arr) {
        int digit = (num / exp) % 10;
        count[digit]++;
    }
    // ...
}`,explanation:"(num / exp) % 10 取出当前位的数字"},{title:"计算累积计数",description:"确定每个数字的最终位置",code:`// 累积计数
for (int i = 1; i < 10; i++) {
    count[i] += count[i - 1];
}`,explanation:'count[i]变成"小于等于i的数字个数"'},{title:"从后往前放置元素",description:"保证稳定性",code:`// 从后往前，保证稳定性
for (int i = n - 1; i >= 0; i--) {
    int digit = (arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
}
// 复制回原数组
System.arraycopy(output, 0, arr, 0, n);`,explanation:"从后往前遍历保证相同数字的相对顺序不变"},{title:"完整代码",description:"RadixSort 类的完整实现",code:`public class RadixSort {
    public void radixSort(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countingSortByDigit(arr, exp);
        }
    }
    
    private void countingSortByDigit(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];
        
        for (int num : arr) {
            count[(num / exp) % 10]++;
        }
        
        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        
        System.arraycopy(output, 0, arr, 0, n);
    }
}`,explanation:"完整的基数排序实现，包含多次计数排序的过程。"}],interview:{approach:"【面试回答模板】\\n\\n基数排序是一种**非比较排序**，利用了整数的位数性质。\\n\\n1. **按位排序**：从低位到高位（LSD）或从高位到低位（MSD）进行排序。\\n2. **稳定性**：要求每一轮的排序（通常用计数排序）必须是**稳定的**，这样高位相同时不会打乱低位的顺序。\\n\\n时间复杂度 O(d×(n+k))，其中 d 是位数。适合**位数不多**的整数排序。",timeComplexity:"O(d × (n + k))：d是位数，n是元素个数，k是基数",spaceComplexity:"O(n + k)：需要额外的桶/数组空间",followUp:[{question:"基数排序与计数排序有什么关系？",answer:"基数排序通常使用计数排序作为每一位的子排序算法。"},{question:"基数排序能排负数吗？",answer:"可以直接排吗不行。需要特殊处理，比如将负数和正数分开排，或者所有数加上偏移量转为正数。"}]}},{id:"bucket-sort",title:"桶排序",titleEn:"Bucket Sort",category:"sorting",difficulty:"medium",description:'桶排序把数据分到几个"桶"里，每个桶内部排序，然后按桶的顺序合并。就像把学生按分数段分组，每组内部排序，然后合并成总排名。',examples:[{input:"arr = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51]",output:"[0.23, 0.25, 0.32, 0.42, 0.47, 0.51, 0.52]",explanation:"分到不同桶，桶内排序，然后合并"}],thinkingGuide:[{step:1,question:"🗑️ 如果要给100个学生按分数排名，怎么快速排？",hint:"可以先按分数段分组",answer:"桶排序就像这样！先按分数段分组：90-100分一组，80-89分一组...每组内部排序，然后按组合并。如果分布均匀，每组人数少，排序很快！"},{step:2,question:"📥 [0.42, 0.32, 0.23, 0.52]分到5个桶，怎么分？",hint:"0-0.2一个桶，0.2-0.4一个桶...",answer:"桶0(0-0.2): 空，桶1(0.2-0.4): [0.32, 0.23]，桶2(0.4-0.6): [0.42, 0.52]，桶3和4: 空。"},{step:3,question:"🔄 每个桶内怎么排序？",hint:"可以用插入排序",answer:"桶1排序后: [0.23, 0.32]，桶2排序后: [0.42, 0.52]。按桶顺序合并: [0.23, 0.32, 0.42, 0.52]。"},{step:4,question:"📝 桶排序什么时候效率高？",hint:"想想如果所有数都在一个桶里会怎样",answer:"当数据**分布均匀**时效率最高！如果所有数都落在一个桶里，就退化成只有一层的普通排序了（最坏情况）。"}],codeSteps:[{title:"创建桶",description:"根据数据范围创建桶",code:`public void bucketSort(float[] arr) {
    int n = arr.length;
    if (n <= 0) return;
    
    // 创建n个桶
    List<List<Float>> buckets = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        buckets.add(new ArrayList<>());
    }
}`,explanation:"通常创建n个桶，假设数据在[0,1)范围内"},{title:"分配元素到桶",description:"根据值决定放入哪个桶",code:`for (float num : arr) {
    int bucketIdx = (int) (n * num); // 确定桶的索引
    if (bucketIdx == n) bucketIdx--; // 处理1.0的情况
    buckets.get(bucketIdx).add(num);
}`,explanation:"n*num计算桶索引，0.32放入桶3（假设n=10）"},{title:"桶内排序并合并",description:"对每个桶排序后合并",code:`// 桶内排序
for (List<Float> bucket : buckets) {
    Collections.sort(bucket);
}

// 合并
int index = 0;
for (List<Float> bucket : buckets) {
    for (float num : bucket) {
        arr[index++] = num;
    }
}`,explanation:"桶内可以使用插入排序等简单算法，这里直接用Collections.sort"},{title:"完整代码",description:"BucketSort 类的完整实现",code:`import java.util.*;

public class BucketSort {
    public void bucketSort(float[] arr) {
        int n = arr.length;
        if (n <= 0) return;
        
        List<List<Float>> buckets = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            buckets.add(new ArrayList<>());
        }
        
        for (float num : arr) {
            int bucketIdx = (int) (n * num);
            if (bucketIdx == n) bucketIdx--;
            buckets.get(bucketIdx).add(num);
        }
        
        for (List<Float> bucket : buckets) {
            Collections.sort(bucket);
        }
        
        int index = 0;
        for (List<Float> bucket : buckets) {
            for (float num : bucket) {
                arr[index++] = num;
            }
        }
    }
}`,explanation:"完整的桶排序实现，包含分桶、分配、排序和合并。"}],interview:{approach:'【面试回答模板】\\n\\n桶排序采用**分治策略**。\\n\\n1. **分桶**：将数据根据范围分配到若干个"桶"中。\\n2. **排序**：对每个桶内部进行排序（常用插入排序）。\\n3. **合并**：按顺序将桶内数据合并。\\n\\n**效率**：当数据**均匀分布**时，时间复杂度接近 O(n)。适用于外部排序或数据分布比较均匀的场景。',timeComplexity:"O(n + k)：平均情况，k是桶的数量",spaceComplexity:"O(n + k)：需要k个桶的空间",followUp:[{question:"桶排序与计数排序有什么区别？",answer:"计数排序本质上是桶大小为1的桶排序。桶排序通常每个桶是一个范围，桶内还需要排序。"},{question:"桶排序的最坏情况是什么？",answer:"当所有数据都分配到同一个桶中时，时间复杂度退化为桶内排序算法的复杂度（通常是O(nlogn)或O(n^2)）。"}]}},{id:"shell-sort",title:"希尔排序",titleEn:"Shell Sort",category:"sorting",difficulty:"medium",description:"希尔排序是插入排序的改进版。它先让间隔较大的元素有序，然后逐渐缩小间隔，最后间隔为1时就是普通插入排序。就像先粗略整理，再精细整理。",examples:[{input:"arr = [12, 34, 54, 2, 3]",output:"[2, 3, 12, 34, 54]",explanation:"先按大间隔排序，逐渐缩小间隔"}],thinkingGuide:[{step:1,question:"📚 如果书架上的书很乱，怎么快速整理？",hint:"可以先把相隔较远的书大致排好",answer:"希尔排序就像这样！先把间隔5本的书排好（第1本和第6本比较），再把间隔3本的排好，最后间隔1本（相邻的）排好。这样比一本本整理快！"},{step:2,question:"📏 数组长度为5，间隔怎么选？",hint:"通常从n/2开始，每次减半",answer:"间隔序列：2, 1。先按间隔2排序（0和2比，1和3比...），再按间隔1排序（普通插入排序）。"},{step:3,question:"🔢 [12, 34, 54, 2, 3]按间隔2怎么排？",hint:"把间隔为2的元素看成一组",answer:"组1: [12, 54, 3]（位置0,2,4），组2: [34, 2]（位置1,3）。组1排序后[3, 12, 54]，组2排序后[2, 34]。合并得[3, 2, 12, 34, 54]。"},{step:4,question:"🚀 希尔排序为什么比插入排序快？",hint:"想想大间隔排序的作用",answer:"大间隔排序让元素快速移动到大致正确的位置，减少了后续小间隔排序时的移动次数。就像先粗调再微调，比直接微调快！"}],codeSteps:[{title:"选择初始间隔",description:"通常从n/2开始",code:`public void shellSort(int[] arr) {
    int n = arr.length;
    
    // 间隔从n/2开始，每次减半
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // 对每个间隔进行插入排序
    }
}`,explanation:"gap是当前间隔，从n/2逐渐减小到1"},{title:"对每个间隔进行插入排序",description:"类似插入排序，但间隔是gap而不是1",code:`for (int gap = n / 2; gap > 0; gap /= 2) {
    for (int i = gap; i < n; i++) {
        int temp = arr[i];
        int j = i;
        
        while (j >= gap && arr[j - gap] > temp) {
            arr[j] = arr[j - gap];
            j -= gap;
        }
        arr[j] = temp;
    }
}`,explanation:"和插入排序类似，但比较和移动的间隔是gap"},{title:"完整代码",description:"ShellSort 类的完整实现",code:`public class ShellSort {
    public void shellSort(int[] arr) {
        int n = arr.length;
        
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j = i;
                
                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
                arr[j] = temp;
            }
        }
    }
}`,explanation:"完整的希尔排序实现。"}],interview:{approach:"【面试回答模板】\\n\\n希尔排序是**插入排序的优化版本**。\\n\\n1. **分组**：通过设置**间隔 (Gap)**，将数组分成若干个子序列。\\n2. **排序**：对每个子序列进行插入排序。\\n3. **缩小间隔**：逐渐缩小间隔，直到间隔为1，进行最后一次插入排序。\\n\\n**优势**：允许元素大幅度移动，减少了插入排序中数据移动的次数。时间复杂度突破了 O(n^2)。",timeComplexity:"O(nlogn) ~ O(n²)：取决于间隔序列",spaceComplexity:"O(1)：原地排序",followUp:[{question:"希尔排序的间隔序列怎么选？",answer:"希尔增量（n/2, n/4...）最常用，但最坏情况O(n^2)。Hibbard增量（2^k-1）可达到O(n^(3/2))。"},{question:"希尔排序是稳定的吗？",answer:"不稳定。因为相同元素可能被分到不同组，并在各自组内移动，导致相对顺序改变。"}]}}],Vj=[{id:"linear-search",title:"线性查找",titleEn:"Linear Search",category:"searching",difficulty:"easy",description:"线性查找是最简单的查找算法。它从数组的第一个元素开始，逐个检查每个元素，直到找到目标值或遍历完整个数组。就像在书架上一本一本地找书。",examples:[{input:"arr = [10, 20, 30, 40, 50], target = 30",output:"2",explanation:"30在索引2的位置"},{input:"arr = [10, 20, 30, 40, 50], target = 35",output:"-1",explanation:"35不在数组中"}],thinkingGuide:[{step:1,question:"如果让你在一排书中找一本特定的书，你会怎么做？",hint:"最简单的方法",answer:"从第一本开始，一本一本地看书名，直到找到为止。这就是线性查找的思想！"},{step:2,question:"在数组[10, 20, 30, 40, 50]中找30，需要检查几次？",hint:"从头开始数",answer:"检查10（不是）→检查20（不是）→检查30（找到了！）。需要检查3次。"},{step:3,question:"如果要找的数不在数组中，怎么办？",hint:"遍历完整个数组",answer:'遍历完整个数组都没找到，就返回-1表示"没找到"。'},{step:4,question:"线性查找的时间复杂度是多少？",hint:"最坏情况要遍历整个数组",answer:"O(n)，最坏情况下要检查所有n个元素。"}],codeSteps:[{title:"定义方法签名",description:"接收数组和目标值，返回索引",code:`public int linearSearch(int[] arr, int target) {
    // 遍历数组查找
    return -1; // 没找到
}`,explanation:"返回目标值的索引，如果没找到返回-1。"},{title:"遍历数组",description:"从头到尾检查每个元素",code:`public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        // 检查arr[i]是否等于target
    }
    return -1;
}`,explanation:"i从0到arr.length-1，遍历每个元素。"},{title:"检查并返回",description:"找到就返回索引",code:`public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // 找到了，返回索引
        }
    }
    return -1; // 没找到
}`,explanation:"如果arr[i]==target，说明找到了，立即返回索引i。"}],interview:{approach:"线性查找从数组第一个元素开始，逐个检查每个元素，直到找到目标值或遍历完整个数组。简单直观，适用于无序数组。",timeComplexity:"O(n)：最坏情况遍历整个数组",spaceComplexity:"O(1)：只用了常数空间",followUp:[{question:"线性查找的优缺点是什么？",answer:"优点：简单，适用于任何数组（有序无序都可以）。缺点：效率低，大数据量时很慢。"},{question:"什么时候用线性查找？",answer:"数据量小、数组无序、只查找一次时适合用线性查找。"}]}},{id:"binary-search-basic",title:"二分查找（基础）",titleEn:"Binary Search (Basic)",category:"searching",difficulty:"easy",description:"二分查找是一种高效的查找算法，但要求数组必须是有序的。它每次比较中间元素，如果目标值小于中间元素就在左半部分找，否则在右半部分找。每次都能排除一半的元素！",examples:[{input:"arr = [1, 3, 5, 7, 9, 11, 13], target = 7",output:"3",explanation:"7在索引3的位置"},{input:"arr = [1, 3, 5, 7, 9, 11, 13], target = 6",output:"-1",explanation:"6不在数组中"}],thinkingGuide:[{step:1,question:'🔢 猜数字游戏：1-100中猜一个数，每次告诉你"大了"或"小了"，最少几次能猜中？',hint:"每次猜中间的数",answer:"最多7次！每次猜中间的数，就能排除一半。100→50→25→12→6→3→1或2。这就是二分查找的思想！"},{step:2,question:"🎯 在有序数组[1, 3, 5, 7, 9, 11, 13]中找7，怎么用二分法？",hint:"先看中间的数",answer:"中间是7（索引3），正好就是要找的！如果找9：中间是7，9>7，在右半部分[9, 11, 13]中找。"},{step:3,question:"🛑 二分查找的前提条件是什么？",hint:"数组必须...",answer:"数组必须是有序的！如果数组无序，二分查找就不能用了。"},{step:4,question:"⏱️ 二分查找的时间复杂度是多少？",hint:"每次排除一半",answer:"O(logn)，因为每次都能排除一半的元素，最多需要log₂n次比较。"}],codeSteps:[{title:"定义方法和边界",description:"用left和right表示查找范围",code:`public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    // 在[left, right]范围内查找
    return -1;
}`,explanation:"left和right是查找范围的左右边界，初始是整个数组。"},{title:"循环查找",description:"当left<=right时继续查找",code:`public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        // 计算中间位置
        // 比较并缩小范围
    }
    return -1;
}`,explanation:"left<=right表示还有元素可查。如果left>right说明没找到。"},{title:"计算中间位置",description:"避免溢出的写法",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    // 比较arr[mid]和target
}`,explanation:"用left+(right-left)/2而不是(left+right)/2，避免整数溢出。"},{title:"比较并缩小范围",description:"根据比较结果决定往左还是往右",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) {
        return mid; // 找到了
    } else if (arr[mid] < target) {
        left = mid + 1; // 在右半部分找
    } else {
        right = mid - 1; // 在左半部分找
    }
}`,explanation:"如果arr[mid]==target，找到了。如果arr[mid]<target，目标在右边，left=mid+1。否则目标在左边，right=mid-1。"}],interview:{approach:"【面试回答模板】\\n\\n二分查找的核心是**减治法**（Decrease and Conquer）。\\n\\n1. **前提**：数组必须**有序**。\\n2. **过程**：维护 `left` 和 `right` 两个指针。每次比较中间元素 `mid`。\\n   - 如果 `arr[mid] == target`：找到。\\n   - 如果 `arr[mid] < target`：目标在右半部分，`left = mid + 1`。\\n   - 如果 `arr[mid] > target`：目标在左半部分，`right = mid - 1`。\\n3. **效率**：每次排除一半，时间复杂度 O(logn)，非常高效。",timeComplexity:"O(logn)：每次排除一半",spaceComplexity:"O(1)：只用了常数空间",followUp:[{question:"为什么用left+(right-left)/2而不是(left+right)/2？",answer:"避免整数溢出。当left和right都很大时，left+right可能超过int的最大值。"},{question:"如果数组有重复元素，怎么找第一个等于target的位置？",answer:"找到target后不立即返回，而是继续在左半部分找，直到找不到为止。"}]}},{id:"binary-search-first",title:"二分查找第一个位置",titleEn:"Binary Search First Position",category:"searching",difficulty:"medium",description:"在有序数组中查找目标值第一次出现的位置。如果数组中有多个相同的目标值，返回最左边那个的索引。",examples:[{input:"arr = [1, 2, 2, 2, 3, 4], target = 2",output:"1",explanation:"第一个2在索引1的位置"},{input:"arr = [1, 2, 2, 2, 3, 4], target = 5",output:"-1",explanation:"5不在数组中"}],thinkingGuide:[{step:1,question:"在[1, 2, 2, 2, 3, 4]中找第一个2，普通二分查找会返回什么？",hint:"中间的2",answer:"普通二分查找可能返回索引2或3（中间的2），但我们要的是第一个2（索引1）。"},{step:2,question:"找到一个2后，怎么确定它是不是第一个？",hint:"看它左边还有没有2",answer:"找到2后，不要立即返回，继续在左半部分找。如果左边还有2，就更新答案。"},{step:3,question:"什么时候停止查找？",hint:"左边没有2了",answer:"当left>right时停止。此时记录的答案就是第一个2的位置。"},{step:4,question:"如果数组中没有目标值，怎么处理？",hint:"答案的初始值",answer:"答案初始化为-1。如果从没找到过目标值，最后返回-1。"}],codeSteps:[{title:"定义方法和变量",description:"用result记录答案",code:`public int searchFirst(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    int result = -1; // 记录答案
    
    // 二分查找
    return result;
}`,explanation:"result初始化为-1，表示还没找到。"},{title:"二分查找框架",description:"标准的二分查找循环",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) {
        // 找到了，但可能不是第一个
    } else if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}`,explanation:"基本框架和普通二分查找一样。"},{title:"找到后继续往左找",description:"记录答案并继续在左半部分查找",code:`if (arr[mid] == target) {
    result = mid;      // 记录当前位置
    right = mid - 1;   // 继续在左半部分找
}`,explanation:"找到target后，记录位置，然后继续在左边找，看有没有更靠前的。"},{title:"完整代码",description:"组合所有部分",code:`public int searchFirst(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1; // 继续往左找
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}`,explanation:"关键是找到target后不立即返回，而是记录并继续往左找。"}],interview:{approach:"在标准二分查找的基础上，找到目标值后不立即返回，而是记录位置并继续在左半部分查找，直到找不到为止。",timeComplexity:"O(logn)：仍然是二分查找",spaceComplexity:"O(1)：只用了常数空间",followUp:[{question:"如何找最后一个等于target的位置？",answer:"找到后记录位置，然后继续在右半部分找（left=mid+1）。"},{question:"如何找第一个大于等于target的位置？",answer:"当arr[mid]>=target时记录并往左找，否则往右找。"}]}},{id:"binary-search-last",title:"二分查找最后一个位置",titleEn:"Binary Search Last Position",category:"searching",difficulty:"medium",description:"在有序数组中查找目标值最后一次出现的位置。如果数组中有多个相同的目标值，返回最右边那个的索引。",examples:[{input:"arr = [1, 2, 2, 2, 3, 4], target = 2",output:"3",explanation:"最后一个2在索引3的位置"}],thinkingGuide:[{step:1,question:"找最后一个2和找第一个2有什么区别？",hint:"往哪边继续找",answer:"找第一个往左找，找最后一个往右找。找到2后，继续在右半部分找。"},{step:2,question:"找到一个2后，怎么继续？",hint:"更新left还是right",answer:"记录当前位置，然后left=mid+1，继续在右半部分找。"}],codeSteps:[{title:"定义方法和变量",description:"和找第一个类似",code:`public int searchLast(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    int result = -1;
    
    // 二分查找
    return result;
}`,explanation:"框架和找第一个一样。"},{title:"找到后继续往右找",description:"记录答案并继续在右半部分查找",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) {
        result = mid;
        left = mid + 1; // 继续往右找
    } else if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}`,explanation:"关键区别：找到target后，left=mid+1，继续往右找。"}],interview:{approach:"找到目标值后记录位置，然后继续在右半部分查找，直到找不到为止。",timeComplexity:"O(logn)",spaceComplexity:"O(1)",followUp:[{question:"如何同时找第一个和最后一个位置？",answer:"分别调用两个函数，或者用一个函数加参数控制方向。"}]}},{id:"binary-search-rotated",title:"旋转数组查找",titleEn:"Search in Rotated Sorted Array",category:"searching",difficulty:"medium",description:'在旋转排序数组中查找目标值。旋转数组是将有序数组的某个位置"切开"，把前半部分移到后面。例如[4,5,6,7,0,1,2]是[0,1,2,4,5,6,7]旋转后的结果。',examples:[{input:"arr = [4, 5, 6, 7, 0, 1, 2], target = 0",output:"4",explanation:"0在索引4的位置"},{input:"arr = [4, 5, 6, 7, 0, 1, 2], target = 3",output:"-1",explanation:"3不在数组中"}],thinkingGuide:[{step:1,question:"🌀 旋转数组 [4, 5, 6, 7, 0, 1, 2] 有什么特点？",hint:"分成两段",answer:"它由两段有序的子数组组成：前半段 [4, 5, 6, 7] 和后半段 [0, 1, 2]。且前半段所有元素 > 后半段所有元素。"},{step:2,question:"⚖️ 怎么判断 mid 在哪一段？",hint:"和 arr[left] 比较",answer:"通过比较 `arr[mid]` 和 `arr[left]`：\\n- 如果 `arr[mid] >= arr[left]`，说明 mid 落在**前半段**（左边有序）。\\n- 否则 mid 落在**后半段**（右边有序）。"},{step:3,question:"🔍 怎么决定往左找还是往右找？",hint:"利用有序的那一半",answer:"1. 先确定有序区间：\\n   - 如果左边有序，判断 target 是否在 `[left, mid]` 内。在则 `right = mid - 1`，否则 `left = mid + 1`。\\n   - 如果右边有序，判断 target 是否在 `[mid, right]` 内。在则 `left = mid + 1`，否则 `right = mid - 1`。"}],codeSteps:[{title:"定义方法和边界",description:"标准二分查找框架",code:`public int search(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        // 判断mid在哪一段，然后决定方向
    }
    return -1;
}`,explanation:"基本框架和普通二分查找一样，关键是如何决定方向。"},{title:"判断mid在哪一段",description:"和arr[left]比较",code:`if (arr[mid] >= arr[left]) {
    // mid在前半段（左边有序）
} else {
    // mid在后半段（右边有序）
}`,explanation:"arr[mid]>=arr[left]说明mid在前半段，此时[left, mid]是有序的。"},{title:"mid在前半段的情况",description:"判断target是否在[left, mid]范围内",code:`if (arr[mid] >= arr[left]) {
    // 左边有序
    if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1; // target在左边
    } else {
        left = mid + 1;  // target在右边
    }
}`,explanation:"如果target在[arr[left], arr[mid])范围内，就往左找，否则往右找。"},{title:"mid在后半段的情况",description:"判断target是否在[mid, right]范围内",code:`else {
    // 右边有序
    if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;  // target在右边
    } else {
        right = mid - 1; // target在左边
    }
}`,explanation:"如果target在(arr[mid], arr[right]]范围内，就往右找，否则往左找。"}],interview:{approach:"【面试回答模板】\\n\\n对于旋转排序数组，我们仍然可以使用**二分查找**，核心在于**判断哪一半是有序的**。\\n\\n1. **判断有序区间**：如果 `arr[mid] >= arr[left]`，说明左半边 `[left, mid]` 是有序的；否则右半边 `[mid, right]` 是有序的。\\n2. **查找 Target**：\\n   - 如果左半边有序且 target 在这个范围内，就查左边，否则查右边。\\n   - 如果右半边有序且 target 在这个范围内，就查右边，否则查左边。\\n\\n时间复杂度 O(logn)。注意如果有重复元素，最坏退化为 O(n)。",timeComplexity:"O(logn)：仍然是二分查找",spaceComplexity:"O(1)",followUp:[{question:"如果数组有重复元素怎么办？",answer:"当arr[left]==arr[mid]==arr[right]时，无法判断mid在哪一段，需要left++和right--缩小范围。最坏情况退化为O(n)。"}]}},{id:"binary-search-sqrt",title:"求平方根",titleEn:"Square Root",category:"searching",difficulty:"easy",description:"计算并返回x的平方根（只保留整数部分）。例如sqrt(8)=2，因为2²=4<8<9=3²。",examples:[{input:"x = 8",output:"2",explanation:"8的平方根是2.828...，整数部分是2"},{input:"x = 4",output:"2",explanation:"4的平方根正好是2"}],thinkingGuide:[{step:1,question:"怎么找8的平方根的整数部分？",hint:"找一个数n，使得n²<=8<(n+1)²",answer:"我们要找最大的n，使得n²<=8。1²=1<=8，2²=4<=8，3²=9>8。所以答案是2。"},{step:2,question:"怎么用二分法来找？",hint:"在[1, x]范围内找",answer:"在[1, x]范围内二分查找。如果mid²<=x，说明mid可能是答案或者答案更大，往右找。如果mid²>x，说明mid太大了，往左找。"},{step:3,question:"为什么要记录答案而不是直接返回？",hint:"我们要找的是最大的满足条件的数",answer:"因为我们要找最大的n使得n²<=x。每次找到满足条件的mid，都要记录下来，然后继续往右找看有没有更大的。"}],codeSteps:[{title:"处理特殊情况",description:"x为0或1时直接返回",code:`public int mySqrt(int x) {
    if (x < 2) return x;
    
    // 二分查找
}`,explanation:"0的平方根是0，1的平方根是1，直接返回。"},{title:"定义查找范围",description:"在[1, x/2]范围内查找",code:`public int mySqrt(int x) {
    if (x < 2) return x;
    
    int left = 1;
    int right = x / 2; // 平方根不会超过x/2
    int result = 1;
    
    // 二分查找
    return result;
}`,explanation:"当x>=2时，sqrt(x)<=x/2，所以right可以设为x/2。"},{title:"二分查找",description:"找最大的n使得n²<=x",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    
    if ((long)mid * mid <= x) {
        result = mid;      // mid可能是答案
        left = mid + 1;    // 继续往右找更大的
    } else {
        right = mid - 1;   // mid太大了
    }
}`,explanation:"注意mid*mid可能溢出，要转成long。如果mid²<=x，记录答案并往右找。"}],interview:{approach:"用二分查找在[1, x/2]范围内找最大的n使得n²<=x。每次找到满足条件的mid就记录，然后继续往右找。",timeComplexity:"O(logx)：二分查找",spaceComplexity:"O(1)",followUp:[{question:"还有什么方法可以求平方根？",answer:"牛顿迭代法，收敛更快。公式：x_{n+1} = (x_n + a/x_n) / 2"}]}},{id:"interpolation-search",title:"插值查找",titleEn:"Interpolation Search",category:"searching",difficulty:"medium",description:'插值查找是二分查找的改进：不是每次都取中间，而是根据目标值估计位置。就像查字典，找"张"字会直接翻到后面，而不是从中间开始。',examples:[{input:"arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 8",output:"7",explanation:"根据值的分布估计位置"}],thinkingGuide:[{step:1,question:'📚 查字典找"张"字，你会从哪里开始翻？',hint:'"张"是Z开头，在字典后面',answer:"你会直接翻到字典后面，而不是从中间开始！插值查找就是这个思想：根据目标值在范围中的相对位置，估计它可能在哪里。"},{step:2,question:"1️⃣ 在[1,2,3,...,10]中找8，怎么估计位置？",hint:"8在1-10中偏后面",answer:"用公式：pos = left + (target - arr[left]) / (arr[right] - arr[left]) * (right - left)。8在1-10中占(8-1)/(10-1)=7/9≈78%的位置，所以估计在位置7附近。"},{step:3,question:"2️⃣ 估计位置后怎么继续？",hint:"和二分查找类似",answer:"如果估计位置的值正好是目标，就找到了。否则根据大小关系缩小范围，继续估计。"},{step:4,question:"📝 插值查找什么时候比二分查找好？",hint:"想想数据分布",answer:"当数据**分布均匀**时，插值查找更快（O(log log n)）。但如果数据分布不均匀，可能比二分查找还慢！"}],codeSteps:[{title:"定义方法",description:"初始化左右边界",code:`public int interpolationSearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    // 待实现
}`,explanation:"初始化左右边界"},{title:"计算估计位置",description:"根据值的分布估计",code:`while (left <= right && target >= arr[left] && target <= arr[right]) {
    if (left == right) {
        if (arr[left] == target) return left;
        return -1;
    }
    
    // 估计位置
    int pos = left + (target - arr[left]) * (right - left) / (arr[right] - arr[left]);
    
    if (arr[pos] == target) {
        return pos;
    } else if (arr[pos] < target) {
        left = pos + 1;
    } else {
        right = pos - 1;
    }
}
return -1;`,explanation:"注意要检查target是否在范围内，避免除以0或越界"},{title:"完整代码",description:"InterpolationSearch 类的完整实现",code:`public class InterpolationSearch {
    public int interpolationSearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right && target >= arr[left] && target <= arr[right]) {
            if (left == right) {
                if (arr[left] == target) return left;
                return -1;
            }
            
            int pos = left + (target - arr[left]) * (right - left) / (arr[right] - arr[left]);
            
            if (arr[pos] == target) {
                return pos;
            } else if (arr[pos] < target) {
                left = pos + 1;
            } else {
                right = pos - 1;
            }
        }
        
        return -1;
    }
}`,explanation:"插值查找完整实现。"}],interview:{approach:"【面试回答模板】\\n\\n插值查找是**二分查找的改进版**。\\n\\n1. **原理**：不直接取中间位置，而是根据目标值在范围内的**相对分布**来估计位置。\\n2. **公式**：`mid = left + (target - arr[left]) * (right - left) / (arr[right] - arr[left])`。\\n3. **适用**：数据**均匀分布**时效率极高，接近 O(1)（准确说是 O(log log n)）。\\n\\n缺点：数据分布极不均匀时可能退化为 O(n)。",timeComplexity:"O(log log n)：数据均匀分布时",spaceComplexity:"O(1)：只用几个变量",followUp:[{question:"插值查找与二分查找哪个更好？",answer:"没有绝对的好坏。均匀分布用插值，分布不均或未知用二分（更稳定）。"},{question:"插值查找需要数组有序吗？",answer:"需要。和二分查找一样，建立在有序数组基础上。"}]}},{id:"fibonacci-search",title:"斐波那契查找",titleEn:"Fibonacci Search",category:"searching",difficulty:"medium",description:"斐波那契查找利用斐波那契数列来确定查找位置。它的分割点不是中间，而是按黄金分割比例。这样可以减少比较次数。",examples:[{input:"arr = [1, 4, 7, 9, 12, 17, 21], target = 12",output:"4",explanation:"使用斐波那契数列确定分割点"}],thinkingGuide:[{step:1,question:"🐚 你听说过黄金分割吗？0.618是什么？",hint:"一种美学上的完美比例",answer:"黄金分割比例约0.618，斐波那契数列相邻两数的比值趋近于0.618。斐波那契查找就是用这个比例来分割数组，而不是简单的一半一半。"},{step:2,question:"🔢 数组长度为7，需要多大的斐波那契数？",hint:"斐波那契数列：1,1,2,3,5,8,13...",answer:"需要找到第一个大于等于7的斐波那契数，是8。然后用F(k-1)=5作为分割点。"},{step:3,question:"✂️ 分割点确定后怎么查找？",hint:"和二分查找类似，但分割比例不同",answer:"比较分割点的值和目标值，如果目标小就在左边找（用F(k-2)分割），如果目标大就在右边找（用F(k-1)分割）。"},{step:4,question:"📝 斐波那契查找比二分查找好在哪？",hint:"想想计算分割点的方式",answer:"斐波那契查找只用加减法计算分割点，而二分查找要用除法。在某些硬件上加减法更快。但实际差别不大，更多是理论意义。"}],codeSteps:[{title:"生成斐波那契数列",description:"准备足够长的斐波那契数列",code:`int[] fib = new int[n + 10];
fib[0] = 0; fib[1] = 1;
for (int i = 2; i < fib.length; i++) fib[i] = fib[i-1] + fib[i-2];`,explanation:"斐波那契数列：0,1,1,2,3,5,8,13..."},{title:"扩展数组",description:"如果数组长度不够，用最后一个元素填充",code:`int k = 0;
while (fib[k] < n) k++;
int[] temp = Arrays.copyOf(arr, fib[k]);
for (int i = n; i < fib[k]; i++) temp[i] = arr[n - 1];`,explanation:"保证数组长度等于斐波那契数"},{title:"按斐波那契分割查找",description:"使用斐波那契数确定分割点",code:`int left = 0;
while (k > 0) {
    int mid = Math.min(left + fib[k-1] - 1, n - 1);
    if (target < temp[mid]) {
        k -= 1;
    } else if (target > temp[mid]) {
        left = mid + 1;
        k -= 2;
    } else {
        return Math.min(mid, n - 1);
    }
}`,explanation:"分割点是left + fib[k-1] - 1"},{title:"完整代码",description:"FibonacciSearch 类的完整实现",code:`import java.util.Arrays;

public class FibonacciSearch {
    public int fibonacciSearch(int[] arr, int target) {
        int n = arr.length;
        int[] fib = new int[n + 10];
        fib[0] = 0; fib[1] = 1;
        for (int i = 2; i < fib.length; i++) fib[i] = fib[i-1] + fib[i-2];
        
        int k = 0;
        while (fib[k] < n) k++;
        
        int[] temp = Arrays.copyOf(arr, fib[k]);
        for (int i = n; i < fib[k]; i++) temp[i] = arr[n - 1];
        
        int left = 0;
        while (k > 0) {
            int mid = Math.min(left + fib[k-1] - 1, n - 1);
            if (target < temp[mid]) {
                k -= 1;
            } else if (target > temp[mid]) {
                left = mid + 1;
                k -= 2;
            } else {
                return Math.min(mid, n - 1);
            }
        }
        return -1;
    }
}`,explanation:"斐波那契查找完整实现。"}],interview:{approach:"【面试回答模板】\\n\\n斐波那契查找利用**斐波那契数列**的性质（接近黄金分割比）来确定分割点。\\n\\n1. **原理**：将数组长度补齐为斐波那契数 F[k]。分割点设为 F[k-1]。\\n2. **特点**：计算分割点只用加减法（mid = low + F[k-1] - 1），避免了二分查找的除法/位运算。\\n\\n适用：在除法运算非常耗时的旧式计算机上更有优势，现在主要作为算法思想考察。",timeComplexity:"O(log n)：和二分查找同一量级",spaceComplexity:"O(log n) 或 O(n)：取决于是否复制数组",followUp:[{question:"为什么要补齐数组长度？",answer:"为了让查找区间的长度始终匹配斐波那契数列，便于递归分割。"}]}},{id:"bst-search",title:"二叉搜索树查找",titleEn:"BST Search",category:"searching",difficulty:"easy",description:"二叉搜索树（BST）是一种特殊的二叉树：每个节点的左子树都比它小，右子树都比它大。查找时根据大小关系往左或往右走。",examples:[{input:"BST: [8,3,10,1,6,null,14], target = 6",output:"true",explanation:"8→3→6，找到了"}],thinkingGuide:[{step:1,question:"🌳 如果把猜数字游戏画成一棵树会怎样？",hint:"每次猜中间的数，大了往左，小了往右",answer:"二叉搜索树就像猜数字游戏的决策树！根节点是中间的数，左边都是比它小的，右边都是比它大的。查找时根据大小关系选择走左边还是右边。"},{step:2,question:"1️⃣ 在BST中找6，根节点是8，怎么走？",hint:"6比8小还是大？",answer:"6<8，所以往左走，到节点3。"},{step:3,question:"🔄 现在在节点3，接下来怎么走？",hint:"6比3大还是小？",answer:"6>3，往右走，到节点6。6==6，找到了！"},{step:4,question:"💡 BST查找的效率取决于什么？",hint:"想想树的形状",answer:"取决于树的高度！如果树是平衡的，高度是log n，查找O(log n)。如果树退化成链表（比如按顺序插入），高度是n，查找O(n)。"}],codeSteps:[{title:"定义树节点",description:"BST节点包含值和左右子节点",code:`class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
}`,explanation:"每个节点有值和两个子节点指针"},{title:"迭代查找",description:"从根节点开始，根据大小关系移动",code:`public TreeNode search(TreeNode root, int target) {
    while (root != null && root.val != target) {
        if (target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return root;
}`,explanation:"小于往左，大于往右，直到找到或为空"},{title:"完整代码",description:"BSTSearch 类的完整实现",code:`public class BSTSearch {
    public TreeNode search(TreeNode root, int target) {
        while (root != null && root.val != target) {
            if (target < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return root;
    }
    
    public TreeNode searchRecursive(TreeNode root, int target) {
        if (root == null || root.val == target) return root;
        if (target < root.val) return searchRecursive(root.left, target);
        return searchRecursive(root.right, target);
    }
}`,explanation:"包含迭代和递归两种实现方式。"}],interview:{approach:"【面试回答模板】\\n\\nBST查找利用了二叉搜索树的性质：**左 < 根 < 右**。\\n\\n1. **过程**：从根节点开始，如果 target 小于当前值，走左子树；如果 target 大于当前值，走右子树。\\n2. **效率**：时间复杂度取决于**树的高度**。\\n   - 平均/平衡情况：O(logn)。\\n   - 最坏情况（退化为链表）：O(n)。\\n\\n这也是为什么会有 AVL 树、红黑树等平衡二叉树的原因。",timeComplexity:"O(log n) ~ O(n)：取决于树高",spaceComplexity:"O(1)：迭代实现",followUp:[{question:"如何避免最坏情况？",answer:"通过旋转操作保持树的平衡（如AVL树、红黑树）。"},{question:"BST不仅能查找，还能做什么？",answer:"还能支持O(logn)的插入、删除，以及求前驱、后继、排名等操作。"}]}},{id:"avl-search",title:"AVL树查找",titleEn:"AVL Search",category:"searching",difficulty:"medium",description:"AVL树是一种自平衡的二叉搜索树：任何节点的左右子树高度差不超过1。这保证了查找效率始终是O(log n)。",examples:[{input:"AVL树查找",output:"O(log n)",explanation:"自平衡保证高度为log n"}],thinkingGuide:[{step:1,question:"⚖️ 如果天平两边重量差太多会怎样？",hint:"会倾斜",answer:'AVL树就像一个自动平衡的天平！每次插入或删除后，如果左右子树高度差超过1，就会自动"旋转"来恢复平衡。'},{step:2,question:"1️⃣ 什么是平衡因子？",hint:"左右子树的高度差",answer:"平衡因子 = 左子树高度 - 右子树高度。AVL树要求每个节点的平衡因子只能是-1、0、1。"},{step:3,question:"2️⃣ AVL树的查找和普通BST有什么区别？",hint:"查找过程本身",answer:"查找过程完全一样！区别在于AVL树保证了树的高度是log n，所以查找效率稳定在O(log n)。"},{step:4,question:"📝 AVL树的优缺点是什么？",hint:"想想维护平衡的代价",answer:"优点：查找效率稳定O(log n)。缺点：插入删除时需要旋转来维护平衡，比普通BST慢一些。适合查找多、修改少的场景。"}],codeSteps:[{title:"AVL节点定义",description:"比普通BST多一个高度属性",code:`class AVLNode {
    int val;
    int height;
    AVLNode left, right;
    AVLNode(int val) { this.val = val; this.height = 1; }
}`,explanation:"height用于计算平衡因子"},{title:"查找方法",description:"和普通BST查找完全一样",code:`public AVLNode search(AVLNode root, int target) {
    while (root != null && root.val != target) {
        if (target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return root;
}`,explanation:"查找过程不涉及平衡操作"},{title:"完整代码",description:"AVLSearch 类的查找部分",code:`public class AVLSearch {
    public AVLNode search(AVLNode root, int target) {
        while (root != null && root.val != target) {
            if (target < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return root;
    }
    
    private int height(AVLNode node) {
        return node == null ? 0 : node.height;
    }
    
    // 旋转等平衡操作略
}`,explanation:"AVL树的查找代码与普通BST相同，核心在于插入删除时的平衡维护。"}],interview:{approach:"【面试回答模板】\\n\\nAVL树是**严格平衡**的二叉搜索树。\\n\\n1. **性质**：任何节点的两个子树的高度差（平衡因子）不超过 1。\\n2. **优势**：保证树的高度严格限制在 logn，因此查找的时间复杂度**稳定为 O(logn)**。\\n3. **代价**：插入和删除时需要通过**旋转**（左旋、右旋）来维护平衡，开销比普通BST大。\\n\\n适用：**查找频繁、插入删除较少**的场景。",timeComplexity:"O(log n)：严格平衡",spaceComplexity:"O(1)：查找过程",followUp:[{question:"AVL树和红黑树的区别？",answer:"AVL树更严格平衡，查找更快；红黑树平衡条件宽松，插入删除更快。"}]}},{id:"rbtree-search",title:"红黑树查找",titleEn:"Red-Black Tree Search",category:"searching",difficulty:"hard",description:"红黑树是另一种自平衡二叉搜索树，通过节点着色（红/黑）和旋转来保持平衡。它比AVL树的平衡条件更宽松，插入删除更快。",examples:[{input:"红黑树查找",output:"O(log n)",explanation:"自平衡保证高度为O(log n)"}],thinkingGuide:[{step:1,question:"🔴 红黑树为什么叫这个名字？",hint:"节点有颜色",answer:'红黑树的每个节点都有颜色：红色或黑色。通过一些颜色规则来保持平衡，比如"红色节点的子节点必须是黑色"、"从根到叶子的每条路径黑色节点数相同"。'},{step:2,question:"1️⃣ 红黑树有哪些规则？",hint:"关于颜色的规则",answer:"1.节点是红或黑 2.根是黑色 3.叶子(NIL)是黑色 4.红节点的子节点是黑色 5.每条路径黑色节点数相同。这些规则保证了树的平衡。"},{step:3,question:"2️⃣ 红黑树的查找和普通BST有什么区别？",hint:"查找过程本身",answer:"查找过程完全一样！颜色只用于维护平衡，不影响查找逻辑。"},{step:4,question:"📝 红黑树和AVL树怎么选？",hint:"想想各自的特点",answer:"AVL树更严格平衡，查找稍快。红黑树平衡条件宽松，插入删除更快。Java的TreeMap、HashMap（链表转树）都用红黑树。"}],codeSteps:[{title:"红黑树节点定义",description:"比普通BST多一个颜色属性",code:`class RBNode {
    int val;
    boolean isRed; // true=红，false=黑
    RBNode left, right, parent;
    
    RBNode(int val) {
        this.val = val;
        this.isRed = true; // 新节点默认红色
    }
}`,explanation:"isRed表示节点颜色"},{title:"查找方法",description:"和普通BST完全一样",code:`public RBNode search(RBNode root, int target) {
    while (root != null && root.val != target) {
        if (target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return root;
}`,explanation:"查找不涉及颜色，只看值的大小"},{title:"完整代码",description:"RedBlackSearch 类的查找部分",code:`public class RedBlackSearch {
    public RBNode search(RBNode root, int target) {
        while (root != null && root.val != target) {
            if (target < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return root;
    }
}`,explanation:"红黑树的查找代码与BST相同，复杂性在于变色和旋转维护平衡。"}],interview:{approach:"【面试回答模板】\\n\\n红黑树是一种**近似平衡**的二叉搜索树。\\n\\n1. **规则**：通过节点着色（红/黑）和 5 条性质限制，保证最长路径不会超过最短路径的两倍。\\n2. **应用**：因为其平衡条件比 AVL 树宽松，插入删除时的旋转次数更少，性能更优。\\n3. **场景**：广泛用于 **Map**, **Set** 的底层实现（如 Java TreeMap, C++ std::map）。\\n\\n时间复杂度 O(log n)。",timeComplexity:"O(log n)",spaceComplexity:"O(1)",followUp:[{question:"Java HashMap中红黑树的使用？",answer:"当链表长度超过8且数组长度超过64时，链表会转为红黑树。"},{question:"为什么不用AVL树做HashMap？",answer:"HashMap需频繁插入删除，红黑树的调整代价比AVL小。"}]}},{id:"hash-search",title:"哈希查找",titleEn:"Hash Search",category:"searching",difficulty:"easy",description:"哈希表通过哈希函数直接计算元素的存储位置，实现O(1)的查找效率。就像图书馆的书架编号，根据书名直接算出在哪个书架。",examples:[{input:"HashMap查找key",output:"O(1)",explanation:"哈希函数直接定位"}],thinkingGuide:[{step:1,question:"🗺️ 图书馆怎么快速找到一本书？",hint:"不是一本本找，而是根据编号",answer:"图书馆给每本书一个编号，根据编号直接去对应的书架找。哈希表也是这样：用哈希函数把key转成数组下标，直接访问那个位置。"},{step:2,question:"1️⃣ 什么是哈希函数？",hint:"把任意值转成数组下标",answer:'哈希函数把key（比如字符串"apple"）转成一个数字（比如5），这个数字就是数组下标。好的哈希函数应该让不同的key尽量分散。'},{step:3,question:"2️⃣ 如果两个key算出同一个下标怎么办？",hint:"这叫哈希冲突",answer:"常见解决方法：1.链地址法：同一个位置用链表存多个元素 2.开放地址法：冲突时找下一个空位置。Java的HashMap用链地址法。"},{step:4,question:"🚀 哈希表查找为什么这么快？",hint:"想想查找过程",answer:"因为不需要比较！直接用哈希函数算出位置，一步到位。但如果冲突很多，效率会下降。好的哈希函数和合适的容量很重要。"}],codeSteps:[{title:"使用Java HashMap",description:"Java已经实现了高效的哈希表",code:`import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 1);
map.put("banana", 2);`,explanation:"HashMap是Java中最常用的哈希表实现"},{title:"查找元素",description:"使用get方法查找",code:`// 查找
Integer value = map.get("apple"); // 返回1
boolean exists = map.containsKey("apple"); // 返回true`,explanation:"get返回值，containsKey判断是否存在"},{title:"完整代码",description:"HashSearch 示例",code:`import java.util.HashMap;

public class HashSearch {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        
        map.put("apple", 1);
        map.put("banana", 2);
        
        System.out.println(map.get("apple"));
        System.out.println(map.containsKey("banana"));
    }
}`,explanation:"展示标准HashMap的使用。"}],interview:{approach:"【面试回答模板】\\n\\n哈希查找利用**哈希表**数据结构。\\n\\n1. **原理**：通过**哈希函数**将 Key 映射到数组下标，直接访问内存地址。\\n2. **冲突**：当不同 Key 映射到同一位置时，使用**拉链法**（链表/红黑树）或**开放寻址法**解决。\\n3. **效率**：平均时间复杂度 **O(1)**，是查找速度最快的数据结构。\\n\\n最坏情况 O(n)（所有 Key 冲突）。",timeComplexity:"O(1)：平均情况",spaceComplexity:"O(n)：需要存储所有元素",followUp:[{question:"解决哈希冲突有哪些方法？",answer:"链地址法（Java采用）、开放地址法（线性探测、二次探测）、再哈希法。"},{question:"哈希表的扩容机制？",answer:"当 loadFactor > 0.75 时，容量翻倍，由于下标 = hash & (n-1)，需要重新计算 hash (Rehash)。"}]}}],vy=[{id:"two-sum",title:"两数之和",titleEn:"Two Sum",category:"hash",difficulty:"easy",description:`给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次同一个元素。`,examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"因为 nums[0] + nums[1] == 9，返回 [0, 1]"},{input:"nums = [3,2,4], target = 6",output:"[1,2]"}],thinkingGuide:[{step:1,question:"🤔 看到这道题，你的第一反应是什么？",hint:"最直接的方法是什么？不用考虑效率",answer:'最直接的想法是：用两层循环，外层选第一个数，内层找第二个数，看它们的和是否等于target。这就是"暴力解法"。'},{step:2,question:"🐢 暴力解法的问题在哪里？",hint:"想想时间复杂度",answer:"两层循环意味着 O(n²) 的时间复杂度。如果数组有10000个元素，需要执行1亿次比较，太慢了！"},{step:3,question:"🎯 我们真正需要做的是什么？",hint:"把问题简化一下",answer:"对于每个数 nums[i]，我们需要找到另一个数 = target - nums[i]。问题变成了：如何快速判断某个数是否存在于数组中？"},{step:4,question:"⚡ 什么数据结构可以实现 O(1) 的查找？",hint:"想想你学过的数据结构",answer:"哈希表（HashMap）！它可以在 O(1) 时间内判断一个元素是否存在。这就是本题的关键突破口！"},{step:5,question:"🗝️ 哈希表里应该存什么？",hint:"我们需要返回的是下标",answer:"Key 存数组的值，Value 存对应的下标。这样找到配对的数时，能直接拿到它的下标。"}],codeSteps:[{title:"定义方法签名",description:"首先确定输入输出：输入是int数组和目标值，输出是两个下标组成的数组",code:`public int[] twoSum(int[] nums, int target) {
    // 待实现
}`,explanation:"返回类型是int[]，因为要返回两个下标"},{title:"创建哈希表",description:"用HashMap存储：数字 -> 下标",code:`public int[] twoSum(int[] nums, int target) {
    // key: 数字, value: 下标
    Map<Integer, Integer> map = new HashMap<>();
}`,explanation:"HashMap<Integer, Integer>: 第一个Integer是数字，第二个是下标"},{title:"遍历数组",description:"用for循环遍历每个元素",code:`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        // 处理每个元素
    }
}`,explanation:"需要下标i，所以用传统for循环而不是foreach"},{title:"计算目标差值",description:"当前数需要配对的数 = target - 当前数",code:`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
    }
}`,explanation:"如果target是9，当前数是2，那配对数就是7"},{title:"查找并返回结果",description:"检查配对数是否已在哈希表中",code:`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
    }
}`,explanation:"找到了就返回两个下标：配对数的下标和当前下标"},{title:"存入当前数字",description:"没找到配对，就把当前数字存起来",code:`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[] {};
}`,explanation:"先查后存，避免一个数字和自己配对"}],interview:{approach:"这道题的核心思路是用哈希表优化查找。暴力解法需要O(n²)，因为对每个数都要遍历一次数组找配对。使用哈希表后，查找配对数的时间从O(n)降到O(1)，总体时间复杂度降为O(n)。",timeComplexity:"O(n)，只需要遍历数组一次",spaceComplexity:"O(n)，哈希表最多存储n个元素",followUp:[{question:"如果数组是有序的，有更好的方法吗？",answer:"可以用双指针！左右指针从两端向中间移动，和大了右指针左移，和小了左指针右移，空间复杂度降为O(1)。"},{question:"如果要找所有满足条件的数对呢？",answer:"不能提前return，需要用一个List收集所有结果。注意去重问题。"},{question:"为什么先检查再存入，而不是先存入再检查？",answer:"为了避免一个数字和自己配对。比如target=6，数组有个3，如果先存入，3会和自己配对。"}]}},{id:"group-anagrams",title:"字母异位词分组",titleEn:"Group Anagrams",category:"hash",difficulty:"medium",description:`给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。

字母异位词是由重新排列源单词的所有字母得到的一个新单词。`,examples:[{input:'strs = ["eat","tea","tan","ate","nat","bat"]',output:'[["bat"],["nat","tan"],["ate","eat","tea"]]'},{input:'strs = [""]',output:'[[""]]'}],thinkingGuide:[{step:1,question:"🔍 什么是字母异位词？它们有什么共同特点？",hint:'想想 "eat" 和 "tea" 的关系',answer:"字母异位词包含完全相同的字母，只是排列顺序不同。如果把字母排序后，它们会变成完全一样的字符串！"},{step:2,question:"🤔 如何判断两个词是否是异位词？",hint:"利用刚才发现的特点",answer:'把两个词的字母都排序，如果排序后相同，就是异位词。比如 "eat" → "aet"，"tea" → "aet"，相同！'},{step:3,question:"📦 如何把异位词分到同一组？",hint:"想想什么数据结构可以把相同的东西放一起",answer:"用哈希表！Key是排序后的字符串，Value是原字符串的列表。所有异位词排序后相同，自然会被放到同一个列表里。"}],codeSteps:[{title:"定义方法签名",description:"输入字符串数组，输出分组后的列表",code:`public List<List<String>> groupAnagrams(String[] strs) {
    // 待实现
}`,explanation:"返回List<List<String>>，外层是所有分组，内层是每组的单词"},{title:"创建哈希表",description:"用HashMap存储：排序后的字符串 -> 原字符串列表",code:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
}`,explanation:"Key是排序后的字符串，Value是属于这个分组的所有原字符串"},{title:"遍历每个字符串",description:"对每个字符串进行处理",code:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String str : strs) {
        // 处理每个字符串
    }
}`,explanation:"用foreach遍历，因为不需要下标"},{title:"生成排序后的Key",description:"将字符串排序作为哈希表的Key",code:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String str : strs) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
    }
}`,explanation:"先转char数组，排序后再转回字符串"},{title:"添加到对应分组",description:"将原字符串添加到对应Key的列表中",code:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String str : strs) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        if (!map.containsKey(key)) {
            map.put(key, new ArrayList<>());
        }
        map.get(key).add(str);
    }
}`,explanation:"如果Key不存在，先创建空列表；然后添加原字符串"},{title:"返回结果",description:"将哈希表的所有Value转为List返回",code:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String str : strs) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        if (!map.containsKey(key)) {
            map.put(key, new ArrayList<>());
        }
        map.get(key).add(str);
    }
    return new ArrayList<>(map.values());
}`,explanation:"map.values()返回所有分组，用ArrayList包装后返回"}],interview:{approach:'核心思路是找到异位词的"共同标识"。排序后的字符串是最直观的标识，所有异位词排序后都相同。用这个标识作为哈希表的Key，就能把异位词分到同一组。',timeComplexity:"O(n * k * log k)，n是字符串数量，k是最长字符串长度",spaceComplexity:"O(n * k)，存储所有字符串",followUp:[{question:"有没有O(n*k)的方法？",answer:'可以用字符计数代替排序。统计每个字母出现次数，生成类似"a1b2c3"的Key。'},{question:"如果字符串很长，怎么优化？",answer:"字符计数法更优，因为排序是O(k*logk)，计数是O(k)。"}]}},{id:"longest-consecutive-sequence",title:"最长连续序列",titleEn:"Longest Consecutive Sequence",category:"hash",difficulty:"medium",description:`给定一个未排序的整数数组 nums，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。`,examples:[{input:"nums = [100,4,200,1,3,2]",output:"4",explanation:"最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。"},{input:"nums = [0,3,7,2,5,8,4,6,0,1]",output:"9"}],thinkingGuide:[{step:1,question:"🤔 最直接的方法是什么？",hint:"如果可以排序的话",answer:"排序后遍历，统计连续数字的长度。但排序需要O(n*logn)，不满足O(n)的要求。"},{step:2,question:"⚡ 如何在O(1)时间判断一个数是否存在？",hint:"用什么数据结构",answer:"用HashSet！把所有数字放入Set，就能O(1)判断任意数字是否存在。"},{step:3,question:"🚀 如何避免重复计算？",hint:"什么时候开始计数",answer:"只从序列的起点开始计数！如果num-1存在，说明num不是起点，跳过。这样每个数字最多被访问两次。"}],codeSteps:[{title:"定义方法签名",description:"输入数组，输出最长连续序列长度",code:`public int longestConsecutive(int[] nums) {
    // 待实现
}`,explanation:"返回int类型的长度"},{title:"创建HashSet",description:"将所有数字放入Set中",code:`public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        set.add(num);
    }
}`,explanation:"HashSet自动去重，且查找是O(1)"},{title:"遍历并找起点",description:"只处理序列的起点（前一个数不存在）",code:`public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        set.add(num);
    }
    int maxLen = 0;
    for (int num : set) {
        if (!set.contains(num - 1)) {
            // num是序列起点
        }
    }
}`,explanation:"如果num-1存在，num就不是起点，跳过"},{title:"计算序列长度",description:"从起点开始，不断查找下一个数",code:`public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        set.add(num);
    }
    int maxLen = 0;
    for (int num : set) {
        if (!set.contains(num - 1)) {
            int currentNum = num;
            int currentLen = 1;
            while (set.contains(currentNum + 1)) {
                currentNum++;
                currentLen++;
            }
            maxLen = Math.max(maxLen, currentLen);
        }
    }
    return maxLen;
}`,explanation:"用while循环不断查找num+1，直到断开"}],interview:{approach:"关键是用HashSet实现O(1)查找，并且只从序列起点开始计数避免重复。判断起点的方法是检查num-1是否存在，不存在则是起点。",timeComplexity:"O(n)，虽然有嵌套循环，但每个数字最多被访问两次",spaceComplexity:"O(n)，HashSet存储所有数字",followUp:[{question:"为什么时间复杂度是O(n)而不是O(n²)？",answer:"虽然有嵌套循环，但内层while只在起点时执行，每个数字最多被访问两次（一次加入Set，一次在while中）。"},{question:"能否用并查集解决？",answer:"可以，把相邻的数字合并到同一个集合，最后找最大集合。但实现更复杂。"}]}},{id:"move-zeroes",title:"移动零",titleEn:"Move Zeroes",category:"two-pointer",difficulty:"easy",description:`给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意，必须在不复制数组的情况下原地对数组进行操作。`,examples:[{input:"nums = [0,1,0,3,12]",output:"[1,3,12,0,0]"},{input:"nums = [0]",output:"[0]"}],thinkingGuide:[{step:1,question:"🤔 最直接的方法是什么？",hint:"如果可以用额外空间",answer:"创建新数组，先放非零元素，再补零。但题目要求原地操作。"},{step:2,question:"🐢 原地操作的关键是什么？",hint:"想想如何区分已处理和未处理的区域",answer:"用双指针！一个指针指向下一个非零元素应该放的位置，另一个遍历数组。"},{step:3,question:"⚡ 具体怎么移动？",hint:"遇到非零元素怎么办",answer:"遇到非零元素就和slow位置交换，然后slow前进。这样slow左边都是非零元素。"}],codeSteps:[{title:"定义方法签名",description:"原地修改数组，无返回值",code:`public void moveZeroes(int[] nums) {
    // 待实现
}`,explanation:"返回void，直接修改原数组"},{title:"初始化慢指针",description:"slow指向下一个非零元素应放的位置",code:`public void moveZeroes(int[] nums) {
    int slow = 0;
}`,explanation:"slow从0开始，表示第一个位置"},{title:"快指针遍历",description:"fast遍历整个数组",code:`public void moveZeroes(int[] nums) {
    int slow = 0;
    for (int fast = 0; fast < nums.length; fast++) {
        // 处理每个元素
    }
}`,explanation:"fast负责遍历，slow负责记录位置"},{title:"交换非零元素",description:"遇到非零元素就交换到slow位置",code:`public void moveZeroes(int[] nums) {
    int slow = 0;
    for (int fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != 0) {
            int temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
            slow++;
        }
    }
}`,explanation:"交换后slow前进，保证slow左边都是非零元素"}],interview:{approach:"使用快慢双指针，slow维护非零区域的边界，fast遍历数组。遇到非零元素就交换到slow位置，这样所有零自然被移到末尾。",timeComplexity:"O(n)，只遍历一次数组",spaceComplexity:"O(1)，原地操作",followUp:[{question:"能否减少交换次数？",answer:"可以先统计非零元素个数，然后直接覆盖，最后补零。但交换更直观。"},{question:"如果要移动特定值而不是0？",answer:"把条件改成nums[fast] != target即可。"}]}},{id:"container-with-most-water",title:"盛最多水的容器",titleEn:"Container With Most Water",category:"two-pointer",difficulty:"medium",description:`给定一个长度为 n 的整数数组 height。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。`,examples:[{input:"height = [1,8,6,2,5,4,8,3,7]",output:"49",explanation:"选择第2条和第9条线，面积 = min(8,7) * 7 = 49"},{input:"height = [1,1]",output:"1"}],thinkingGuide:[{step:1,question:"📐 面积怎么计算？",hint:"想想容器的形状",answer:"面积 = 宽度 × 高度 = (right - left) × min(height[left], height[right])"},{step:2,question:"🐢 暴力解法是什么？",hint:"枚举所有可能",answer:"两层循环枚举所有线的组合，计算面积取最大值。时间O(n²)。"},{step:3,question:"🚀 如何优化？",hint:"从两端开始",answer:"双指针从两端向中间移动。每次移动较短的那条线，因为移动较长的线只会让面积变小或不变。"}],codeSteps:[{title:"定义方法签名",description:"输入高度数组，输出最大面积",code:`public int maxArea(int[] height) {
    // 待实现
}`,explanation:"返回int类型的最大面积"},{title:"初始化双指针",description:"左右指针分别指向两端",code:`public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = 0;
}`,explanation:"从最宽的容器开始"},{title:"循环移动指针",description:"当左右指针未相遇时继续",code:`public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = 0;
    while (left < right) {
        // 计算并移动
    }
}`,explanation:"left < right保证至少有两条线"},{title:"计算面积并更新",description:"计算当前面积，更新最大值",code:`public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = 0;
    while (left < right) {
        int area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);
    }
}`,explanation:"面积 = 宽度 × 较短边"},{title:"移动较短的指针",description:"移动高度较小的指针",code:`public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = 0;
    while (left < right) {
        int area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}`,explanation:"移动较短边才可能找到更大的面积"}],interview:{approach:"双指针从两端向中间移动，每次移动较短的那条线。因为面积受限于较短边，移动较长边不可能增大面积。",timeComplexity:"O(n)，每个元素最多访问一次",spaceComplexity:"O(1)，只用了几个变量",followUp:[{question:"为什么移动较短边？",answer:"面积 = 宽 × min(高)。移动后宽度减1，只有增大min(高)才可能增大面积。移动较长边不会增大min(高)。"},{question:"如果两边相等怎么办？",answer:"移动哪边都可以，不影响正确性。"}]}},{id:"three-sum",title:"三数之和",titleEn:"3Sum",category:"two-pointer",difficulty:"medium",description:`给你一个整数数组 nums，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k，同时还满足 nums[i] + nums[j] + nums[k] == 0。

请你返回所有和为 0 且不重复的三元组。`,examples:[{input:"nums = [-1,0,1,2,-1,-4]",output:"[[-1,-1,2],[-1,0,1]]"},{input:"nums = [0,0,0]",output:"[[0,0,0]]"}],thinkingGuide:[{step:1,question:"🤔 和两数之和有什么关系？",hint:"固定一个数后",answer:"固定第一个数nums[i]后，问题变成在剩余数组中找两个数，使它们的和等于-nums[i]。"},{step:2,question:"⚡ 如何避免重复？",hint:"排序有什么好处",answer:"先排序！这样相同的数字会相邻，遇到重复数字就跳过。"},{step:3,question:"🚀 内层如何高效查找？",hint:"有序数组用什么方法",answer:"有序数组用双指针！左右指针从两端向中间移动，和大了右移，和小了左移。"}],codeSteps:[{title:"定义方法签名",description:"输入数组，输出所有三元组",code:`public List<List<Integer>> threeSum(int[] nums) {
    // 待实现
}`,explanation:"返回List<List<Integer>>，每个内层List是一个三元组"},{title:"排序数组",description:"排序便于去重和双指针",code:`public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
}`,explanation:"排序后相同数字相邻，方便跳过重复"},{title:"固定第一个数",description:"外层循环固定第一个数",code:`public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        // 双指针找另外两个数
    }
}`,explanation:"跳过重复的第一个数，避免重复三元组"},{title:"初始化双指针",description:"在i后面的区间用双指针",code:`public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1;
        int right = nums.length - 1;
        // 双指针查找
    }
}`,explanation:"left从i+1开始，right从末尾开始"},{title:"双指针查找",description:"根据和的大小移动指针",code:`public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1;
        int right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}`,explanation:"找到答案后跳过重复元素，继续找下一组"}],interview:{approach:"先排序，然后固定第一个数，用双指针在剩余区间找另外两个数。排序使得去重变得简单，双指针使得查找变成O(n)。",timeComplexity:"O(n²)，排序O(nlogn) + 双重循环O(n²)",spaceComplexity:"O(1)，不算结果数组的话",followUp:[{question:"能否用哈希表？",answer:"可以，但去重更复杂。双指针更适合这道题。"},{question:"如果是四数之和呢？",answer:"再加一层循环，固定两个数后用双指针。时间O(n³)。"}]}},{id:"trapping-rain-water",title:"接雨水",titleEn:"Trapping Rain Water",category:"two-pointer",difficulty:"hard",description:"给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。",examples:[{input:"height = [0,1,0,2,1,0,1,3,2,1,2,1]",output:"6",explanation:"上面是由数组表示的高度图，在这种情况下，可以接 6 个单位的雨水。"},{input:"height = [4,2,0,3,2,5]",output:"9"}],thinkingGuide:[{step:1,question:"🌊 每个位置能接多少水？",hint:"取决于什么",answer:"取决于左右两边最高柱子中较矮的那个。water[i] = min(leftMax, rightMax) - height[i]"},{step:2,question:"🤔 如何知道每个位置的leftMax和rightMax？",hint:"预处理",answer:"可以预处理两个数组，分别存储每个位置的左边最大值和右边最大值。"},{step:3,question:"🚀 能否优化空间？",hint:"双指针",answer:"用双指针！从两端向中间移动，维护leftMax和rightMax。较小的那边决定当前能接的水。"}],codeSteps:[{title:"定义方法签名",description:"输入高度数组，输出总水量",code:`public int trap(int[] height) {
    // 待实现
}`,explanation:"返回int类型的总水量"},{title:"初始化双指针和最大值",description:"左右指针和对应的最大高度",code:`public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
}`,explanation:"leftMax记录左边遇到的最大高度，rightMax同理"},{title:"双指针移动",description:"根据哪边较小来决定处理哪边",code:`public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            // 处理左边
        } else {
            // 处理右边
        }
    }
}`,explanation:"较小的一边可以确定能接的水量"},{title:"计算水量",description:"更新最大值并计算当前位置的水量",code:`public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}`,explanation:"如果当前高度大于等于最大值，更新最大值；否则计算水量"}],interview:{approach:"每个位置能接的水 = min(左边最高, 右边最高) - 当前高度。用双指针从两端向中间移动，较小的一边可以确定能接的水量。",timeComplexity:"O(n)，只遍历一次",spaceComplexity:"O(1)，只用了几个变量",followUp:[{question:"还有什么方法？",answer:"1. 预处理leftMax和rightMax数组，O(n)空间。2. 单调栈，按层计算。"},{question:"为什么双指针有效？",answer:"因为较小的一边决定水量。如果height[left] < height[right]，那么left位置的水量只取决于leftMax。"}]}},{id:"longest-substring-without-repeating",title:"无重复字符的最长子串",titleEn:"Longest Substring Without Repeating Characters",category:"sliding-window",difficulty:"medium",description:"给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。",examples:[{input:'s = "abcabcbb"',output:"3",explanation:'因为无重复字符的最长子串是 "abc"，所以其长度为 3。'},{input:'s = "bbbbb"',output:"1",explanation:'因为无重复字符的最长子串是 "b"，所以其长度为 1。'}],thinkingGuide:[{step:1,question:"🤔 什么是子串？",hint:"和子序列的区别",answer:"子串是连续的，子序列可以不连续。这道题要找连续的无重复字符序列。"},{step:2,question:"⚡ 如何判断窗口内是否有重复？",hint:"用什么数据结构",answer:"用HashSet或HashMap记录窗口内的字符。"},{step:3,question:"🔄 遇到重复字符怎么办？",hint:"收缩窗口",answer:"从左边收缩窗口，直到没有重复字符为止。"}],codeSteps:[{title:"定义方法签名",description:"输入字符串，输出最长长度",code:`public int lengthOfLongestSubstring(String s) {
    // 待实现
}`,explanation:"返回int类型的最大长度"},{title:"初始化窗口和Set",description:"用Set记录窗口内的字符",code:`public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0;
    int maxLen = 0;
}`,explanation:"left是窗口左边界，right通过for循环移动"},{title:"扩展窗口",description:"右指针遍历字符串",code:`public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0;
    int maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        // 处理当前字符
    }
}`,explanation:"right每次向右移动一位"},{title:"收缩窗口",description:"如果有重复，从左边收缩",code:`public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0;
    int maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        while (set.contains(c)) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(c);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,explanation:"不断移除左边字符直到没有重复"}],interview:{approach:"滑动窗口 + HashSet。右指针扩展窗口，遇到重复字符时左指针收缩窗口。窗口内始终保持无重复字符。",timeComplexity:"O(n)，每个字符最多被访问两次",spaceComplexity:"O(min(m,n))，m是字符集大小",followUp:[{question:"能否用HashMap优化？",answer:"可以，HashMap存字符的最新位置，遇到重复时直接跳到重复字符的下一位。"},{question:"如果是找最长的有k个重复字符的子串？",answer:"用HashMap统计每个字符的出现次数，当某个字符超过k次时收缩窗口。"}]}},{id:"find-all-anagrams",title:"找到字符串中所有字母异位词",titleEn:"Find All Anagrams in a String",category:"sliding-window",difficulty:"medium",description:"给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。",examples:[{input:'s = "cbaebabacd", p = "abc"',output:"[0,6]",explanation:'起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。'},{input:'s = "abab", p = "ab"',output:"[0,1,2]"}],thinkingGuide:[{step:1,question:"🔍 什么是异位词？",hint:"字母组成相同",answer:"异位词是字母相同但顺序不同的词。判断方法：统计字母频率是否相同。"},{step:2,question:"⚡ 如何高效比较？",hint:"固定窗口大小",answer:"用固定大小为p.length的滑动窗口，比较窗口内字符频率和p的字符频率。"},{step:3,question:"🚀 如何优化比较过程？",hint:"维护一个计数器",answer:"用一个计数器记录还需要匹配的字符数，当计数器为0时说明完全匹配。"}],codeSteps:[{title:"定义方法签名",description:"输入两个字符串，输出起始索引列表",code:`public List<Integer> findAnagrams(String s, String p) {
    // 待实现
}`,explanation:"返回所有异位词子串的起始位置"},{title:"统计p的字符频率",description:"用数组统计p中每个字符出现次数",code:`public List<Integer> findAnagrams(String s, String p) {
    List<Integer> result = new ArrayList<>();
    int[] count = new int[26];
    for (char c : p.toCharArray()) {
        count[c - 'a']++;
    }
    int need = p.length();
}`,explanation:"count数组记录每个字母还需要多少个，need记录总共还需要多少个"},{title:"滑动窗口遍历",description:"固定大小的窗口滑过s",code:`public List<Integer> findAnagrams(String s, String p) {
    List<Integer> result = new ArrayList<>();
    int[] count = new int[26];
    for (char c : p.toCharArray()) {
        count[c - 'a']++;
    }
    int need = p.length();
    for (int right = 0; right < s.length(); right++) {
        // 处理右边界
        // 处理左边界
    }
}`,explanation:"right遍历s，left = right - p.length() + 1"},{title:"完整实现",description:"处理进入和离开窗口的字符",code:`public List<Integer> findAnagrams(String s, String p) {
    List<Integer> result = new ArrayList<>();
    int[] count = new int[26];
    for (char c : p.toCharArray()) {
        count[c - 'a']++;
    }
    int need = p.length();
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (count[c - 'a'] > 0) need--;
        count[c - 'a']--;
        
        if (right >= p.length()) {
            char left = s.charAt(right - p.length());
            count[left - 'a']++;
            if (count[left - 'a'] > 0) need++;
        }
        
        if (need == 0) result.add(right - p.length() + 1);
    }
    return result;
}`,explanation:"进入窗口时减count和need，离开窗口时加回来"}],interview:{approach:"固定大小的滑动窗口 + 字符计数。维护一个need计数器，当need为0时说明窗口内是p的异位词。",timeComplexity:"O(n)，只遍历s一次",spaceComplexity:"O(1)，只用了固定大小的数组",followUp:[{question:"如果字符不只是小写字母？",answer:"用HashMap代替数组，或者用更大的数组（如128大小覆盖ASCII）。"}]}},{id:"subarray-sum-equals-k",title:"和为K的子数组",titleEn:"Subarray Sum Equals K",category:"substring",difficulty:"medium",description:"给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的子数组的个数。",examples:[{input:"nums = [1,1,1], k = 2",output:"2"},{input:"nums = [1,2,3], k = 3",output:"2"}],thinkingGuide:[{step:1,question:"🐢 暴力解法是什么？",hint:"枚举所有子数组",answer:"两层循环枚举起点和终点，计算每个子数组的和。时间O(n²)或O(n³)。"},{step:2,question:"💡 前缀和有什么用？",hint:"子数组和的计算",answer:"sum[i..j] = prefixSum[j] - prefixSum[i-1]。如果prefixSum[j] - prefixSum[i-1] = k，说明找到一个和为k的子数组。"},{step:3,question:"🚀 如何快速找到满足条件的前缀和？",hint:"变形等式",answer:"找prefixSum[i-1] = prefixSum[j] - k。用哈希表存储前缀和出现的次数！"}],codeSteps:[{title:"定义方法签名",description:"输入数组和目标值，输出子数组个数",code:`public int subarraySum(int[] nums, int k) {
    // 待实现
}`,explanation:"返回和为k的子数组数量"},{title:"初始化",description:"哈希表存前缀和出现次数",code:`public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);  // 前缀和为0出现1次
    int prefixSum = 0;
    int count = 0;
}`,explanation:"map.put(0,1)处理从头开始的子数组"},{title:"遍历计算",description:"边遍历边统计",code:`public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);
    int prefixSum = 0;
    int count = 0;
    for (int num : nums) {
        prefixSum += num;
        count += map.getOrDefault(prefixSum - k, 0);
        map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);
    }
    return count;
}`,explanation:"查找prefixSum - k出现的次数，然后存入当前前缀和"}],interview:{approach:"前缀和 + 哈希表。sum[i..j] = prefixSum[j] - prefixSum[i-1] = k，即找prefixSum[i-1] = prefixSum[j] - k。",timeComplexity:"O(n)，只遍历一次",spaceComplexity:"O(n)，哈希表存储前缀和",followUp:[{question:"为什么不能用滑动窗口？",answer:"因为数组可能有负数，窗口和不是单调的，无法确定收缩方向。"},{question:"如果数组都是正数？",answer:"可以用滑动窗口，和大了收缩，和小了扩展。"}]}},{id:"sliding-window-maximum",title:"滑动窗口最大值",titleEn:"Sliding Window Maximum",category:"substring",difficulty:"hard",description:`给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。`,examples:[{input:"nums = [1,3,-1,-3,5,3,6,7], k = 3",output:"[3,3,5,5,6,7]"},{input:"nums = [1], k = 1",output:"[1]"}],thinkingGuide:[{step:1,question:"🐢 暴力解法是什么？",hint:"每个窗口都求最大值",answer:"每个窗口遍历k个元素找最大值，时间O(n*k)。"},{step:2,question:"⚡ 如何优化？",hint:"用什么数据结构",answer:"用单调队列！队列中元素从大到小排列，队首就是最大值。"},{step:3,question:"🔧 单调队列如何维护？",hint:"入队和出队的规则",answer:"入队时，把比当前元素小的都移除（它们不可能成为最大值）。出队时，如果队首已经不在窗口内就移除。"}],codeSteps:[{title:"定义方法签名",description:"输入数组和窗口大小，输出最大值数组",code:`public int[] maxSlidingWindow(int[] nums, int k) {
    // 待实现
}`,explanation:"返回每个窗口的最大值"},{title:"初始化单调队列",description:"用Deque存储下标",code:`public int[] maxSlidingWindow(int[] nums, int k) {
    int[] result = new int[nums.length - k + 1];
    Deque<Integer> deque = new LinkedList<>();
}`,explanation:"存下标而不是值，方便判断是否在窗口内"},{title:"遍历数组",description:"维护单调队列并记录结果",code:`public int[] maxSlidingWindow(int[] nums, int k) {
    int[] result = new int[nums.length - k + 1];
    Deque<Integer> deque = new LinkedList<>();
    for (int i = 0; i < nums.length; i++) {
        // 移除不在窗口内的元素
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        // 移除比当前元素小的元素
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        deque.offerLast(i);
        // 记录结果
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    return result;
}`,explanation:"队首是当前窗口最大值的下标"}],interview:{approach:"单调队列（递减）。队首是当前窗口最大值。入队时移除比当前小的元素，出队时检查是否在窗口内。",timeComplexity:"O(n)，每个元素最多入队出队各一次",spaceComplexity:"O(k)，队列最多存k个元素",followUp:[{question:"为什么用单调递减队列？",answer:"因为要找最大值。如果一个元素比后面的元素小，它永远不可能成为最大值。"},{question:"能否用堆？",answer:"可以，但需要延迟删除，实现更复杂，时间O(nlogk)。"}]}},{id:"minimum-window-substring",title:"最小覆盖子串",titleEn:"Minimum Window Substring",category:"substring",difficulty:"hard",description:'给你一个字符串 s、一个字符串 t。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""。',examples:[{input:'s = "ADOBECODEBANC", t = "ABC"',output:'"BANC"',explanation:`最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。`},{input:'s = "a", t = "a"',output:'"a"'}],thinkingGuide:[{step:1,question:"🤔 什么是覆盖子串？",hint:"包含所有字符",answer:'子串中包含t的所有字符（包括重复的）。比如t="AAB"，子串至少要有2个A和1个B。'},{step:2,question:"⚡ 如何判断是否覆盖？",hint:"统计字符",answer:"用两个计数器：一个统计t中每个字符需要的数量，一个统计窗口中每个字符的数量。"},{step:3,question:"🚀 如何找最小？",hint:"滑动窗口",answer:"先扩展右边界直到覆盖，然后收缩左边界找最小，记录结果后继续扩展。"}],codeSteps:[{title:"定义方法签名",description:"输入两个字符串，输出最小覆盖子串",code:`public String minWindow(String s, String t) {
    // 待实现
}`,explanation:"返回最小的覆盖子串，不存在返回空串"},{title:"统计t的字符需求",description:"用数组统计每个字符需要多少个",code:`public String minWindow(String s, String t) {
    int[] need = new int[128];
    for (char c : t.toCharArray()) {
        need[c]++;
    }
    int required = t.length();
}`,explanation:"need数组记录每个字符还需要多少个，required是总共还需要多少个"},{title:"滑动窗口",description:"扩展和收缩窗口",code:`public String minWindow(String s, String t) {
    int[] need = new int[128];
    for (char c : t.toCharArray()) {
        need[c]++;
    }
    int required = t.length();
    int left = 0, minLen = Integer.MAX_VALUE, minStart = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (need[c] > 0) required--;
        need[c]--;
        
        while (required == 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            char leftChar = s.charAt(left);
            need[leftChar]++;
            if (need[leftChar] > 0) required++;
            left++;
        }
    }
    return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
}`,explanation:"扩展直到覆盖，收缩找最小，记录结果"}],interview:{approach:"滑动窗口 + 字符计数。扩展右边界直到覆盖t，然后收缩左边界找最小覆盖，记录结果后继续扩展。",timeComplexity:"O(n)，每个字符最多访问两次",spaceComplexity:"O(1)，固定大小的数组",followUp:[{question:"如果t中有重复字符怎么处理？",answer:"计数器自然处理了重复，need[c]记录的是需要的数量。"},{question:"如何优化？",answer:"可以先过滤s中不在t中的字符，减少无效遍历。"}]}},{id:"permutations",title:"全排列",titleEn:"Permutations",category:"backtracking",difficulty:"medium",description:"给定一个不含重复数字的数组 nums，返回其所有可能的全排列。你可以按任意顺序返回答案。",examples:[{input:"nums = [1,2,3]",output:"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"},{input:"nums = [0,1]",output:"[[0,1],[1,0]]"}],thinkingGuide:[{step:1,question:'🎯 先理解题目：什么是"排列"？和"组合"有什么区别？',hint:"想想[1,2]和[2,1]是一个答案还是两个答案？",answer:"排列考虑顺序！[1,2]和[2,1]是两个不同的排列。组合不考虑顺序，它们是同一个。所以这道题要求我们生成所有可能的顺序。"},{step:2,question:"🤔 用最笨的方法怎么做？",hint:"如果让你手动列出[1,2,3]的所有排列，你会怎么做？",answer:'手动方法：第一个位置可以放1、2或3，确定第一个后，第二个位置从剩下的数里选，第三个位置放最后剩的那个。这就是"逐个位置做选择"的思路！'},{step:3,question:"🌳 能不能画出这个过程？",hint:"把每一步的选择画成一棵树",answer:"可以画成决策树！根节点是空，第一层选第一个数（3种选择），第二层选第二个数（2种选择），第三层选第三个数（1种选择）。每条从根到叶子的路径就是一个排列！"},{step:4,question:'💡 这种"选择-探索-撤销"的模式叫什么？',hint:"往前走走不通就退回来",answer:"这就是回溯法！核心思想：做出选择 → 递归探索 → 撤销选择（回溯）。就像走迷宫，走不通就退回来试另一条路。"},{step:5,question:"📝 需要哪些变量来记录状态？",hint:"需要知道当前已经选了哪些数，哪些数还没用",answer:"需要两个关键变量：① path（路径）：记录当前已选的数字序列；② used（已用标记）：boolean数组，记录每个数字是否已被使用。"},{step:6,question:"🔚 什么时候停止递归？",hint:"什么时候说明一个排列已经完成了？",answer:"当path的长度等于nums的长度时，说明所有位置都填满了，得到一个完整的排列！此时把path加入结果集。"},{step:7,question:"⚠️ 收集结果时有个常见坑，是什么？",hint:"path是会变的，直接加进去会怎样？",answer:"必须用 new ArrayList<>(path) 复制一份！因为path是引用类型，后续会被修改。如果直接加入result.add(path)，最后所有结果都会变成一样的（最后的状态）。"},{step:8,question:"📋 总结一下回溯模板的三个核心步骤？",hint:"每次循环里做了什么？",answer:"回溯三部曲：① 做选择：path.add(nums[i]); used[i]=true; ② 递归：backtrack(...); ③ 撤销选择：path.remove(...); used[i]=false。这个模板适用于几乎所有回溯题！"}],codeSteps:[{title:"第1步：确定方法签名",description:"明确输入输出，创建结果容器",code:`public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    // 调用回溯函数
    return result;
}`,explanation:`🤔 为什么返回List<List<Integer>>？因为有多个排列，每个排列是一个Integer列表。
💡 result用来收集所有的排列结果。`},{title:"第2步：设计回溯函数参数",description:"思考需要传递哪些信息",code:`public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    boolean[] used = new boolean[nums.length];
    List<Integer> path = new ArrayList<>();
    backtrack(nums, path, used, result);
    return result;
}

private void backtrack(int[] nums, List<Integer> path, 
                       boolean[] used, List<List<Integer>> result) {
    // 待实现
}`,explanation:`🤔 为什么用boolean[] used？用来O(1)时间判断某个数字是否已经被选过。
🤔 为什么path用List而不是数组？因为需要动态添加和删除元素。
💡 参数设计原则：传递"需要知道但会变化的信息"。`},{title:"第3步：写终止条件",description:"什么时候找到一个完整的排列？",code:`private void backtrack(int[] nums, List<Integer> path, 
                       boolean[] used, List<List<Integer>> result) {
    // 终止条件：路径长度等于数组长度
    if (path.size() == nums.length) {
        result.add(new ArrayList<>(path));  // 必须复制！
        return;
    }
}`,explanation:`🤔 为什么是 path.size() == nums.length？因为排列要用完所有数字。
⚠️ 必须 new ArrayList<>(path)！否则所有结果都指向同一个对象。
💡 return后回溯到上一层继续探索其他分支。`},{title:"第4步：遍历所有选择",description:"对于当前位置，可以选择哪些数字？",code:`private void backtrack(int[] nums, List<Integer> path, 
                       boolean[] used, List<List<Integer>> result) {
    if (path.size() == nums.length) {
        result.add(new ArrayList<>(path));
        return;
    }
    
    // 遍历所有可能的选择
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;  // 跳过已使用的数字
        // TODO: 做选择、递归、撤销
    }
}`,explanation:`🤔 为什么遍历整个nums数组？因为排列中每个位置都可能放任何一个未使用的数。
🤔 为什么用 if(used[i]) continue？跳过已经在path中的数字，避免重复使用。
💡 这和"子集"问题不同——子集只往后选，排列可以选任何未用过的。`},{title:"第5步：做选择→递归→撤销（核心！）",description:"回溯三部曲完整实现",code:`private void backtrack(int[] nums, List<Integer> path, 
                       boolean[] used, List<List<Integer>> result) {
    if (path.size() == nums.length) {
        result.add(new ArrayList<>(path));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        // ① 做选择
        path.add(nums[i]);
        used[i] = true;
        
        // ② 递归探索
        backtrack(nums, path, used, result);
        
        // ③ 撤销选择（回溯）
        path.remove(path.size() - 1);
        used[i] = false;
    }
}`,explanation:`🎯 这就是回溯的精髓！
① 做选择：把nums[i]加入路径，标记为已使用
② 递归：进入下一层决策
③ 撤销：恢复现场，让其他分支可以使用这个数

💡 记住这个模板，90%的回溯题都是这个套路！`}],interview:{approach:`【面试回答模板】

这道题我用回溯法来解决。

首先分析问题：排列需要考虑顺序，[1,2]和[2,1]是不同的答案，所以本质是遍历所有可能的排列方式。

核心思路：把问题看成一棵决策树，每个节点选择一个未使用的数字，当路径长度等于数组长度时就得到一个排列。

实现要点：
1. 用path记录当前选择的路径
2. 用used数组标记哪些数字已使用
3. 回溯三部曲：做选择→递归→撤销选择`,timeComplexity:"O(n! × n)。一共有n!个排列（n×(n-1)×...×1），每个排列需要O(n)时间复制到结果集。",spaceComplexity:"O(n)。递归调用栈最深n层，used数组O(n)，path最长n个元素。不算结果集的话就是O(n)。",followUp:[{question:"如果数组有重复数字呢？比如[1,1,2]",answer:'这就是"全排列II"。解法：先排序，然后剪枝。当nums[i]==nums[i-1]且nums[i-1]没被用过时跳过，避免同一层选择重复的数。代码：if(i>0 && nums[i]==nums[i-1] && !used[i-1]) continue;'},{question:"还有其他实现方式吗？",answer:"可以用交换法！不需要used数组。思路：固定第i个位置，将nums[i]和后面的元素逐个交换，递归处理i+1位置。代码更简洁但不太直观。"},{question:"这道题的时间复杂度怎么分析的？",answer:"决策树分析：第1层n个选择，第2层n-1个选择...所以是n×(n-1)×...×1=n!个叶子节点。每个叶子节点需要O(n)复制，总共O(n!×n)。"}]}},{id:"subsets",title:"子集",titleEn:"Subsets",category:"backtracking",difficulty:"medium",description:"给你一个整数数组 nums，数组中的元素互不相同。返回该数组所有可能的子集（幂集）。\\n\\n解集不能包含重复的子集。你可以按任意顺序返回解集。",examples:[{input:"nums = [1,2,3]",output:"[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"},{input:"nums = [0]",output:"[[],[0]]"}],thinkingGuide:[{step:1,question:"🎯 什么是子集？和排列有什么本质区别？",hint:"[1,2]和[2,1]算一个还是两个？",answer:'子集不考虑顺序！[1,2]和[2,1]是同一个子集。而排列考虑顺序，它们是两个不同的排列。子集的本质是：对每个元素决定"选"还是"不选"。'},{step:2,question:"🔢 一个n元素的数组有多少个子集？",hint:"每个元素两种选择",answer:'2^n个！因为每个元素有"选"和"不选"两种选择，n个元素就是2×2×...×2=2^n。比如[1,2,3]有2³=8个子集。'},{step:3,question:"🤔 怎么避免生成重复的子集？",hint:"[1,2]和[2,1]怎么只算一次？",answer:'关键技巧：只往后选，不往前选！假设已选了2，下次只能从2后面的数里选。用一个start参数记录"从哪开始选"。'},{step:4,question:"📍 和排列的代码有什么区别？",hint:"看递归参数",answer:"排列：for循环遍历所有未用过的元素（可以选前面的）。子集：for循环从start开始遍历（只能选后面的）。递归时传i+1，保证不回头。"},{step:5,question:"⭐ 什么时候收集结果？这是和排列最大的不同！",hint:"空集也是子集",answer:"进入函数就立刻收集！因为每个节点（包括中间节点）都代表一个有效子集。排列要等路径长度等于n才收集，子集是走过的每一步都收集。"},{step:6,question:"🌳 画一下决策树？",hint:"对比排列的树",answer:"根=[]，选1得[1]，再选2得[1,2]，再选3得[1,2,3]。回溯到[1]，选3得[1,3]...每个节点都是一个子集！不需要走到叶子节点才算数。"},{step:7,question:"❓子集需要used数组吗？",hint:"想想start参数的作用",answer:"不需要！因为start保证只往后选，天然不会重复选同一个元素。排列需要used是因为可以选前面的元素。"}],codeSteps:[{title:"第1步：主方法框架",description:"初始化结果集，调用回溯函数",code:`public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, 0, new ArrayList<>(), result);
    return result;
}`,explanation:`💡 start从0开始，表示可以选择nums[0]及之后的元素。
🤔 为什么没有used数组？因为start参数保证只往后选，不需要额外标记。`},{title:"第2步：先收集结果！",description:"每个节点都是一个有效子集",code:`private void backtrack(int[] nums, int start, 
                       List<Integer> path, List<List<Integer>> result) {
    // 关键：每个节点都是有效子集，包括空集！
    result.add(new ArrayList<>(path));
    
    // TODO: 遍历并递归
}`,explanation:`⭐ 这是和排列最大的区别！
排列：if(path.size()==n) 才收集
子集：一进函数就收集

💡 第一次进入时path为空，正好收集到空集[]`},{title:"第3步：遍历选择（只往后选）",description:"for循环从start开始，保证不回头",code:`private void backtrack(int[] nums, int start, 
                       List<Integer> path, List<List<Integer>> result) {
    result.add(new ArrayList<>(path));
    
    for (int i = start; i < nums.length; i++) {
        path.add(nums[i]);
        backtrack(nums, i + 1, path, result);  // i+1保证只往后选
        path.remove(path.size() - 1);
    }
}`,explanation:`🎯 核心：for从start开始，递归传i+1

对比排列：for从0开始，需要used数组判重

💡 这个"只往后选"的模式是组合类问题的通用技巧！`}],interview:{approach:'【面试回答模板】\\n\\n这道题我用回溯法。\\n\\n关键点1：子集不考虑顺序，[1,2]和[2,1]是同一个子集。\\n\\n关键点2：用start参数控制"只往后选"，避免重复。\\n\\n关键点3：每个递归节点都是一个有效子集，进入函数就立刻收集结果。\\n\\nn个元素共有2^n个子集，因为每个元素都有选/不选两种状态。',timeComplexity:"O(n × 2^n)。共2^n个子集，每个子集复制到结果集需要O(n)时间。",spaceComplexity:"O(n)。递归深度最多n层。不算结果集的话就是O(n)。",followUp:[{question:"如果数组有重复元素呢？比如[1,2,2]",answer:'这是"子集II"。解法：先排序，然后在同一层跳过重复元素。if(i>start && nums[i]==nums[i-1]) continue; 注意是i>start不是i>0。'},{question:"能否用位运算实现？",answer:"可以！用0到2^n-1的每个数的二进制表示一个子集。二进制第i位为1表示选nums[i]。代码更简洁但不太直观。"},{question:"子集和组合有什么区别？",answer:'子集是所有大小的组合的并集。"组合"通常指固定大小k的子集，子集则包含所有大小（0到n）。'}]}},{id:"letter-combinations",title:"电话号码的字母组合",titleEn:"Letter Combinations of a Phone Number",category:"backtracking",difficulty:"medium",description:"给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按任意顺序返回。\\n\\n给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。",examples:[{input:'digits = "23"',output:'["ad","ae","af","bd","be","bf","cd","ce","cf"]'},{input:'digits = ""',output:"[]"}],thinkingGuide:[{step:1,question:'🎯 先理解题意：输入"23"代表什么？',hint:"想想老式手机键盘",answer:'2对应abc，3对应def。输入"23"意味着第一个字母从abc中选，第二个字母从def中选。所以答案是所有可能的组合。'},{step:2,question:'📊 "23"有多少种组合？',hint:"每个数字的选择数相乘",answer:"3×3=9种。一般地，如果每个数字有m个字母，n位数字就有m^n种组合。"},{step:3,question:"🌳 如何画出决策树？",hint:"第一层是第一个数字的选择",answer:"根节点是空。第一层：选a/b/c。第二层：每个分支下再选d/e/f。每条从根到叶子的路径就是一个组合！"},{step:4,question:"💡 这和全排列/子集有什么区别？",hint:"每一层的选择范围不同",answer:"区别很大！全排列/子集是在同一个数组里选择。这里每一层的选择范围不同（由当前数字决定）。但本质还是回溯遍历决策树。"},{step:5,question:"🔧 需要什么预处理？",hint:"怎么根据数字快速找到对应字母",answer:'需要一个数字到字母的映射！可以用String数组：mapping[2]="abc"，mapping[3]="def"...下标0和1没有对应字母。'},{step:6,question:"📝 回溯函数需要哪些参数？",hint:'需要知道"当前处理到第几个数字"',answer:"核心参数：index（当前处理的数字下标）。每层根据index获取对应字母列表，遍历选择，递归处理index+1。"},{step:7,question:"⚠️ 边界情况是什么？",hint:"输入为空字符串",answer:"如果digits为空，直接返回空列表！不需要进入回溯。这是常见的边界处理。"}],codeSteps:[{title:"第1步：建立数字到字母的映射",description:"使用数组存储映射关系",code:`private String[] mapping = {
    "",     // 0
    "",     // 1
    "abc",  // 2
    "def",  // 3
    "ghi",  // 4
    "jkl",  // 5
    "mno",  // 6
    "pqrs", // 7
    "tuv",  // 8
    "wxyz"  // 9
};`,explanation:"💡 用数组比HashMap更快！下标就是数字，值就是对应的字母串。\\n🤔 为什么0和1是空串？因为它们不对应任何字母。"},{title:"第2步：主方法处理边界",description:"空输入直接返回",code:`public List<String> letterCombinations(String digits) {
    List<String> result = new ArrayList<>();
    if (digits.isEmpty()) return result;  // 边界！
    backtrack(digits, 0, new StringBuilder(), result);
    return result;
}`,explanation:'⚠️ 必须先判断空输入！否则会进入回溯返回[""]而不是[]。\\n💡 用StringBuilder而不是String拼接，效率更高。'},{title:"第3步：回溯函数——终止条件",description:"处理完所有数字时收集结果",code:`private void backtrack(String digits, int index, 
                       StringBuilder path, List<String> result) {
    if (index == digits.length()) {
        result.add(path.toString());
        return;
    }
    // TODO: 遍历并选择
}`,explanation:"🤔 为什么是 index == digits.length()？\\n因为下标从0开始，处理完最后一个数字后index变成length。\\n这时path里已经存了完整的组合。"},{title:"第4步：遍历当前数字对应的字母",description:"获取映射，逐个尝试",code:`private void backtrack(String digits, int index, 
                       StringBuilder path, List<String> result) {
    if (index == digits.length()) {
        result.add(path.toString());
        return;
    }
    
    // 获取当前数字对应的字母
    char digit = digits.charAt(index);
    String letters = mapping[digit - '0'];
    
    // 遍历每个字母
    for (char c : letters.toCharArray()) {
        path.append(c);                    // 做选择
        backtrack(digits, index + 1, path, result);  // 递归
        path.deleteCharAt(path.length() - 1);        // 撤销
    }
}`,explanation:`🎯 关键点：
1. digit - '0' 将字符转为数字
2. 每层的选择范围由当前数字决定
3. StringBuilder的append/deleteCharAt比String的+效率高`}],interview:{approach:"【面试回答模板】\\n\\n这道题用回溯法遍历所有可能的字母组合。\\n\\n首先建立数字到字母的映射（用数组，下标是数字）。\\n\\n回溯思路：用index表示当前处理到第几个数字，每层获取该数字对应的字母，遍历选择。\\n\\n终止条件：index等于digits长度时，说明选完了所有数字对应的字母，收集结果。\\n\\n注意边界：空字符串直接返回空列表。",timeComplexity:"O(4^n × n)。最坏情况每个数字对应4个字母（如7、9），共4^n种组合，每个组合需要O(n)时间复制。",spaceComplexity:"O(n)。递归深度为n（数字个数）。",followUp:[{question:"能否用迭代实现？",answer:"可以！用队列。初始放入空串，每次取出所有字符串，追加当前数字的每个字母后放回。类似BFS的层序遍历。"},{question:"这道题需要used数组或start参数吗？",answer:"不需要！因为每层选择的范围不同（由不同数字决定），天然不会重复。"},{question:"时间复杂度为什么不是3^n？",answer:"因为7和9对应4个字母。最坏情况全是7或9，所以是4^n。平均情况介于3^n和4^n之间。"}]}},{id:"combination-sum",title:"组合总和",titleEn:"Combination Sum",category:"backtracking",difficulty:"medium",description:"给你一个无重复元素的整数数组 candidates 和一个目标整数 target，找出 candidates 中可以使数字和为目标数 target 的所有不同组合，并以列表形式返回。你可以按任意顺序返回这些组合。\\n\\ncandidates 中的同一个数字可以无限制重复被选取。",examples:[{input:"candidates = [2,3,6,7], target = 7",output:"[[2,2,3],[7]]"},{input:"candidates = [2,3,5], target = 8",output:"[[2,2,2,2],[2,3,3],[3,5]]"}],thinkingGuide:[{step:1,question:"🎯 这道题的核心目标是什么？",hint:"找什么样的组合",answer:"找出所有加起来等于target的数字组合。比如target=7，可以是[7]或[2,2,3]。"},{step:2,question:'💡 和"子集"问题有什么关键区别？',hint:"元素能用几次",answer:"子集问题每个元素最多用一次。这道题元素可以重复使用！比如2可以选多次变成[2,2,3]。"},{step:3,question:'🔧 代码上怎么实现"可重复"？',hint:"递归时start参数怎么传",answer:'关键：递归时传i而不是i+1！子集传i+1表示"不能再选当前元素"，这里传i表示"还可以继续选当前元素"。'},{step:4,question:"📐 什么时候停止递归？有两种情况",hint:"想想remain的值",answer:"情况1：remain==0（凑够了target），收集结果。情况2：remain<0（超过了），剪枝返回。"},{step:5,question:"✂️ 能否进一步优化剪枝？",hint:"排序有什么好处",answer:"先排序！如果当前数字已经大于remain，后面更大的数字肯定不行，直接break。这样可以跳过很多无效尝试。"},{step:6,question:"🤔 需要避免重复组合吗？",hint:"[2,3]和[3,2]算一个还是两个",answer:"是的！[2,3]和[3,2]是同一个组合。用start参数保证只往后选（或选自己）就能避免。"}],codeSteps:[{title:"第1步：主方法框架",description:"初始化并调用回溯",code:"public List<List<Integer>> combinationSum(int[] candidates, int target) {\\n    List<List<Integer>> result = new ArrayList<>();\\n    // 可选优化：Arrays.sort(candidates);\\n    backtrack(candidates, target, 0, new ArrayList<>(), result);\\n    return result;\\n}",explanation:"💡 排序是可选的优化，可以让剪枝更高效。\\n🤔 初始remain就是target（还需要凑的数）。"},{title:"第2步：回溯函数——两个终止条件",description:"凑够了或超了都要停止",code:"private void backtrack(int[] candidates, int remain, int start,\\n                       List<Integer> path, List<List<Integer>> result) {\\n    if (remain < 0) return;  // 剪枝：超过target了\\n    if (remain == 0) {       // 正好凑够\\n        result.add(new ArrayList<>(path));\\n        return;\\n    }\\n    // TODO: 遍历选择\\n}",explanation:"⭐ 用remain（剩余值）比用sum（当前和）更直观。\\n🤔 remain=0说明path里的数加起来正好等于target。"},{title:"第3步：遍历选择（可重复选自己）",description:"从start开始，递归传i不是i+1",code:"private void backtrack(int[] candidates, int remain, int start,\\n                       List<Integer> path, List<List<Integer>> result) {\\n    if (remain < 0) return;\\n    if (remain == 0) {\\n        result.add(new ArrayList<>(path));\\n        return;\\n    }\\n    \\n    for (int i = start; i < candidates.length; i++) {\\n        path.add(candidates[i]);\\n        // 关键：传i不是i+1，允许重复使用\\n        backtrack(candidates, remain - candidates[i], i, path, result);\\n        path.remove(path.size() - 1);\\n    }\\n}",explanation:"🎯 核心区别就在这里！\\n子集/排列：backtrack(..., i+1, ...)\\n组合总和：backtrack(..., i, ...)\\n\\n传i意味着下次还可以选candidates[i]。"}],interview:{approach:"【面试回答模板】\\n\\n这道题用回溯法解决。\\n\\n核心特点：元素可以重复使用。所以递归时传i而不是i+1。\\n\\n用remain记录还需要凑多少。remain==0时收集结果，remain<0时剪枝。\\n\\n用start参数保证只往后或往自己选，避免重复组合。\\n\\n可选优化：先排序，当candidates[i]>remain时直接break。",timeComplexity:"O(n^(target/min))。最坏情况用最小的数凑target，递归深度是target/min。",spaceComplexity:"O(target/min)。递归栈深度。",followUp:[{question:"如果每个数字只能用一次？",answer:'这是"组合总和II"。递归时传i+1，同时先排序后跳过相邻重复元素。'},{question:"如何进一步优化？",answer:"先排序。在for循环中加if(candidates[i]>remain) break; 因为后面的数更大，肯定不行。"},{question:'这道题和"零钱兑换"有什么关系？',answer:"本质相同！零钱兑换是求最少硬币数（DP或BFS），这道题是列出所有组合（回溯）。"}]}},{id:"generate-parentheses",title:"括号生成",titleEn:"Generate Parentheses",category:"backtracking",difficulty:"medium",description:"数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。",examples:[{input:"n = 3",output:'["((()))","(()())","(())()","()(())","()()()"]'},{input:"n = 1",output:'["()"]'}],thinkingGuide:[{step:1,question:'🎯 什么才是"有效"的括号？',hint:"左右括号的数量关系",answer:"两个关键规则：① 最终生成时，左括号总数 == 右括号总数 == n。② 在生成过程中的【任何时刻】，已放入的右括号数量不能超过左括号数量（否则无法闭合）。"},{step:2,question:"🌲 这个决策树长什么样？",hint:"每一步有两个选择",answer:'从空串开始，每一步尝试放一个"("或者")"。如果不加限制，这是一棵二叉树。'},{step:3,question:"✂️ 什么时候可以放左括号？",hint:"有限额吗",answer:'只要左括号的总数还没达到n，就可以放"("。'},{step:4,question:"✂️ 什么时候可以放右括号？",hint:"能随便放吗",answer:'只有当【目前已有左括号 > 目前已有右括号】时，才能放")"。这保证了规则②。'},{step:5,question:"🏁 什么时候是个头？",hint:"长度",answer:"当生成的字符串长度等于 2*n 时，说明放满了，加入结果集。"},{step:6,question:"📝 需要哪些参数记录状态？",hint:"不仅仅是path",answer:"需要：left（已用左括号数）、right（已用右括号数）。不用传path里具体是什么，只关心数量。"}],codeSteps:[{title:"第1步：主方法框架",description:"初始化",code:"public List<String> generateParenthesis(int n) {\\n    List<String> result = new ArrayList<>();\\n    // 从0个左括号、0个右括号开始\\n    backtrack(n, 0, 0, new StringBuilder(), result);\\n    return result;\\n}",explanation:"💡 使用StringBuilder因为需要频繁修改字符串。"},{title:"第2步：回溯函数——终止条件",description:"找够了就返回",code:"private void backtrack(int n, int left, int right,\\n                       StringBuilder path, List<String> result) {\\n    // 终止条件：总长度达到2n\\n    if (path.length() == 2 * n) {\\n        result.add(path.toString());\\n        return;\\n    }\\n    // TODO: 尝试放左括号或右括号\\n}",explanation:"🤔 为什么是2*n？因为n对括号意味着总共2n个字符。"},{title:"第3步：尝试放左括号",description:"只要没超限额就能放",code:"private void backtrack(int n, int left, int right,\\n                       StringBuilder path, List<String> result) {\\n    if (path.length() == 2 * n) {\\n        result.add(path.toString());\\n        return;\\n    }\\n    \\n    // 只要左括号不够n个，就可以放\\n    if (left < n) {\\n        path.append(\\'(\\');\\n        backtrack(n, left + 1, right, path, result);\\n        path.deleteCharAt(path.length() - 1); // 撤销\\n    }\\n    \\n    // TODO: 尝试放右括号\\n}",explanation:"💡 left + 1 表示又用掉了一个左括号额度。"},{title:"第4步：尝试放右括号",description:"必须有未闭合的左括号才能放",code:"private void backtrack(int n, int left, int right,\\n                       StringBuilder path, List<String> result) {\\n    // ...前文省略...\\n    \\n    if (left < n) { ... }\\n    \\n    // 只有右括号少于左括号时，才能放\\n    if (right < left) {\\n        path.append(\\')\\');\\n        backtrack(n, left, right + 1, path, result);\\n        path.deleteCharAt(path.length() - 1);\\n    }\\n}",explanation:'🎯 核心剪枝：right < left 保证了括号的有效性。如果right==left，再放右括号就变成")..."，非法！'}],interview:{approach:"【面试回答模板】\\n\\n这道题用回溯法生成。\\n\\n核心在于维护两个计数器：left（已放左括号数）和right（已放右括号数）。\\n\\n每次递归有两个选择：\\n1. 如果left < n，可以放左括号。\\n2. 如果right < left，可以放右括号（保证有效闭合）。\\n\\n当path长度等于2n时，收集结果。\\n\\n这种方法通过剪枝保证了生成的每一步都是合法的，不需要最后再验证。",timeComplexity:"O(4^n / √n)。这是第n个卡特兰数，渐近复杂度如此。简单说就是指数级。",spaceComplexity:"O(n)。递归深度最大为2n。",followUp:[{question:"不用backtrack，用暴力法怎么做？",answer:"生成所有2^2n种由(和)组成的序列，然后验证每个是否有效。效率非常低。"},{question:"如何验证一个括号字符串是否有效？",answer:"维护一个balance变量，初始0。遇到(加1，遇到)减1。过程中如果balance<0则非法，最后必须balance==0。"}]}},{id:"word-search",title:"单词搜索",titleEn:"Word Search",category:"backtracking",difficulty:"medium",description:'给定一个 m x n 二维字符网格 board 和一个字符串单词 word。如果 word 存在于网格中，返回 true；否则，返回 false。\\n\\n单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中"相邻"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。',examples:[{input:'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',output:"true"},{input:'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',output:"true"}],thinkingGuide:[{step:1,question:"🎯 这道题的本质是什么？",hint:"在迷宫里找路",answer:"这是一个典型的图/网格搜索问题。我们需要在网格中找到一条路径，使得路径上的字符连起来等于目标单词。"},{step:2,question:"🚀 从哪里开始搜索？",hint:"起点确定吗",answer:"起点不确定！所以需要遍历网格中的【每一个格子】。如果某个格子字符等于单词的第一个字母，就从这里开始DFS搜索。"},{step:3,question:"🚶 DFS搜索的规则是什么？",hint:"四个方向",answer:"从当前格子出发，可以向上下左右四个方向走。如果邻居格子等于单词的下一个字母，就继续走下去。"},{step:4,question:'🚫 如何避免走"回头路"？',hint:"同一个单元格不能重复使用",answer:'需要标记已访问！可以用一个visited数组，或者更省空间的办法：临时修改board中的字符（比如改成"#"），递归回来后再改回去（回溯）。'},{step:5,question:"🛑 什么时候返回true，什么时候返回false？",hint:"找到最后一个字符",answer:"成功：当索引index等于word长度时，说明全都匹配上了。失败：越界、字符不匹配、或者已访问过。"}],codeSteps:[{title:"第1步：主方法遍历起点",description:"尝试以每个格子为起点",code:"public boolean exist(char[][] board, String word) {\\n    for (int i = 0; i < board.length; i++) {\\n        for (int j = 0; j < board[0].length; j++) {\\n            // 从(i,j)开始搜索，匹配word的第0个字符\\n            if (backtrack(board, word, i, j, 0)) {\\n                return true;\\n            }\\n        }\\n    }\\n    return false;\\n}",explanation:"💡 只要有一个起点成功找到路径，就返回true。"},{title:"第2步：回溯函数——失败条件",description:"越界或不匹配",code:"private boolean backtrack(char[][] board, String word, int i, int j, int index) {\\n    // 成功找到所有字符\\n    if (index == word.length()) return true;\\n    \\n    // 越界检查 或 字符不匹配 或 已访问(#)\\n    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || \\n        board[i][j] != word.charAt(index)) {\\n        return false;\\n    }\\n    \\n    // TODO: 标记访问并递归\\n}",explanation:"⚠️ 边界检查很重要！一定要先检查越界，再访问数组。"},{title:"第3步：标记、递归、回溯",description:"核心搜索逻辑",code:`private boolean backtrack(char[][] board, String word, int i, int j, int index) {
    // ...前文省略...
    
    // 1. 标记已访问（暂存原字符）
    char temp = board[i][j];
    board[i][j] = '#';
    
    // 2. 递归搜索四个方向
    boolean found = backtrack(board, word, i + 1, j, index + 1) ||
                    backtrack(board, word, i - 1, j, index + 1) ||
                    backtrack(board, word, i, j + 1, index + 1) ||
                    backtrack(board, word, i, j - 1, index + 1);
    
    // 3. 回溯（恢复原字符）
    board[i][j] = temp;
    
    return found;
}`,explanation:"💡 技巧：直接修改board[i][j]='#'来标记已访问，省去了O(mn)的visited数组空间。\\n⚠️ 别忘了最后要把board[i][j]改回temp，否则会影响其他起点的搜索。"}],interview:{approach:"【面试回答模板】\\n\\n这道题是典型的网格DFS搜索。\\n\\n思路：\\n1. 遍历网格中的每个格子，如果它和单词首字母匹配，就从它开始DFS。\\n\\n2. DFS函数接收坐标(i, j)和当前匹配到的单词索引index。\\n\\n3. 在DFS中，先判断是否越界、是否匹配、是否已访问。\\n\\n4. 关键点：为了不重复使用格子，我会在进入递归前把board[i][j]改成特殊字符（如'#'），递归结束后再改回去（回溯）。\\n\\n5. 只要四个方向中有一个返回true，就说明找到了。",timeComplexity:"O(M×N×3^L)。M,N是网格大小，L是单词长度。每次递归有3个方向可走（除去回头的方向）。",spaceComplexity:"O(L)。递归深度最大为单词长度。如果不修改原数组用visited数组，则是O(M×N)。",followUp:[{question:"如果要搜索多个单词怎么办？",answer:"如果是给一个字典列表（如Word Search II），应该用Trie树（字典树）构建前缀树，然后只遍历一次网格。"},{question:"为什么时间复杂度是3^L不是4^L？",answer:"因为除了第一步看似有4个方向，后续每步都不会走回头路（已标记），所以只有3个方向可选。"}]}},{id:"palindrome-partitioning",title:"分割回文串",titleEn:"Palindrome Partitioning",category:"backtracking",difficulty:"medium",description:"给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。",examples:[{input:'s = "aab"',output:'[["a","a","b"],["aa","b"]]'},{input:'s = "a"',output:'[["a"]]'}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"切西瓜",answer:'把一个字符串切成好几段，每一段都必须是回文串。比如"aab"可以切成["a","a","b"]或["aa","b"]。'},{step:2,question:"🤔 如何用回溯模拟切割过程？",hint:"第一刀切在哪",answer:'我们可以枚举第一刀的位置。比如"aab"，第一刀可以切在"a"后面，也可以切在"aa"后面。切完第一刀（如果第一段是回文），就对剩下的部分分别继续递归。'},{step:3,question:"🌲 决策树是怎样的？",hint:"for循环尝试切分点",answer:"横向扩展：尝试截取长度为1, 2, ..., n的前缀。纵向深入：对剩余的后缀字符串继续切割。"},{step:4,question:"🛑 什么时候停止？",hint:"切完了",answer:"当切割线start到达字符串末尾时，说明已经切完且全都合格，收集当前切分方案。"},{step:5,question:"🚀 如何优化回文判断？",hint:"每次都判断O(n)有点慢",answer:"可以用动态规划预处理！dp[i][j]表示s[i..j]是否回文。这样回溯时的判断就从O(n)变成了O(1)。"}],codeSteps:[{title:"第1步：主方法框架",description:"初始化",code:"public List<List<String>> partition(String s) {\\n    List<List<String>> result = new ArrayList<>();\\n    backtrack(s, 0, new ArrayList<>(), result);\\n    return result;\\n}",explanation:"start从0开始，表示当前的切割起始位置。"},{title:"第2步：回溯函数——遍历切割点",description:"尝试每一个可能的切割位置",code:"private void backtrack(String s, int start, \\n                       List<String> path, List<List<String>> result) {\\n    // 终止条件：切到了最后\\n    if (start == s.length()) {\\n        result.add(new ArrayList<>(path));\\n        return;\\n    }\\n    \\n    // 从start处开始截取，长度至少为1\\n    for (int end = start + 1; end <= s.length(); end++) {\\n        // 截取 [start, end) 的子串\\n        String sub = s.substring(start, end);\\n        \\n        // TODO: 判断回文并递归\\n    }\\n}",explanation:"💡 substring是左闭右开区间，所以end从start+1开始，直到s.length()。"},{title:"第3步：判断回文并处理",description:"只有回文串才切割",code:"private void backtrack(String s, int start, \\n                       List<String> path, List<List<String>> result) {\\n    // ...前文省略...\\n    for (int end = start + 1; end <= s.length(); end++) {\\n        String sub = s.substring(start, end);\\n        \\n        // 只有当前截取的是回文，才继续切剩下的\\n        if (isPalindrome(sub)) {\\n            path.add(sub);\\n            backtrack(s, end, path, result);  // 新的start变成end\\n            path.remove(path.size() - 1);\\n        }\\n    }\\n}",explanation:"🎯 核心逻辑：如果前缀sub不是回文，就直接跳过（剪枝），尝试更长的sub。"},{title:"第4步：回文验证辅助函数",description:"双指针法",code:"private boolean isPalindrome(String s) {\\n    int left = 0, right = s.length() - 1;\\n    while (left < right) {\\n        if (s.charAt(left++) != s.charAt(right--)) {\\n            return false;\\n        }\\n    }\\n    return true;\\n}",explanation:"也可以用DP预处理优化，但在面试中先写出双指针法通常足够且更简单。"}],interview:{approach:"【面试回答模板】\\n\\n这道题用回溯法解决。\\n\\n思路是将问题分解为：\\n1. 在当前位置切一刀，如果切下来的前缀是回文串，就放入path。\\n2. 对剩余的后缀字符串递归继续切。\\n\\n终止条件是切到了字符串末尾。\\n\\n回文判断可以用双指针法，时间复杂度O(n)。如果字符串很长，可以用动态规划预处理一个boolean[][] dp表，把判断降低到O(1)。",timeComplexity:"O(n × 2^n)。在最坏情况下（如全是一样的字符），有2^n种分割方案（每两个字符间切或不切），每种方案需要O(n)时间构造结果。",spaceComplexity:"O(n)。递归深度最大为n。",followUp:[{question:"如何优化时间复杂度？",answer:"使用DP预处理回文判断。dp[i][j] = (s[i]==s[j] && dp[i+1][j-1])。"},{question:"分割有多少种可能性？",answer:"这实际上对应着在n-1个空隙中放隔板，每个空隙放或不放，共2^(n-1)种可能。"}]}},{id:"n-queens",title:"N皇后",titleEn:"N-Queens",category:"backtracking",difficulty:"hard",description:"按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。\\n\\nn 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。\\n\\n给你一个整数 n，返回所有不同的 n 皇后问题的解决方案。",examples:[{input:"n = 4",output:'[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'},{input:"n = 1",output:'[["Q"]]'}],thinkingGuide:[{step:1,question:"🎯 每一行能放几个皇后？",hint:"想想行冲突",answer:"每一行只能放一个！因为同一行如果有两个，它们就能互相攻击。所以我们可以一行一行地尝试放置。"},{step:2,question:"🤔 放置时需要检查哪些冲突？",hint:"列、斜线",answer:"1. 垂直方向（同一列）。2. 左上到右下斜线。3. 右上到左下斜线。不需要检查水平方向，因为我们是逐行放置的，天然保证一行一个。"},{step:3,question:"📐 斜线上的坐标有什么规律？",hint:"坐标(r, c)",answer:"左上到右下斜线（╲）：row - col 是常数。右上到左下斜线（╱）：row + col 是常数。利用这个规律可以快速判断斜线冲突。"},{step:4,question:"🌲 回溯的流程是？",hint:"DFS",answer:"从第0行开始，尝试在第0行的每一列放皇后。如果位置合法，就放下去，然后递归去放第1行...如果某一行没地方放，就回溯。"},{step:5,question:"🛑 何时收集结果？",hint:"行数",answer:"当成功放置完第 n-1 行（即 row == n）时，说明找到了一个合法解，把它加入结果集。"}],codeSteps:[{title:"第1步：主方法与初始化",description:"初始化棋盘",code:"public List<List<String>> solveNQueens(int n) {\\n    List<List<String>> result = new ArrayList<>();\\n    char[][] board = new char[n][n];\\n    // 初始化填充 '.'\\n    for (char[] row : board) Arrays.fill(row, '.');\\n    \\n    backtrack(board, 0, result);\\n    return result;\\n}",explanation:"board数组用于回溯过程中记录状态，最后再转成List<String>。"},{title:"第2步：回溯函数",description:"逐行尝试",code:"private void backtrack(char[][] board, int row, List<List<String>> result) {\\n    // 终止条件：所有行都放好了\\n    if (row == board.length) {\\n        result.add(construct(board));\\n        return;\\n    }\\n    \\n    // 尝试当前行的每一列\\n    for (int col = 0; col < board.length; col++) {\\n        if (isValid(board, row, col)) {\\n            board[row][col] = 'Q';     // 放置\\n            backtrack(board, row + 1, result); // 递归下一行\\n            board[row][col] = '.';     // 撤销（回溯）\\n        }\\n    }\\n}",explanation:"row表示当前正在处理哪一行。"},{title:"第3步：验证函数（检查冲突）",description:"检查列和两个对角线",code:"private boolean isValid(char[][] board, int row, int col) {\\n    // 1. 检查列（上方是否有皇后）\\n    for (int i = 0; i < row; i++) {\\n        if (board[i][col] == 'Q') return false;\\n    }\\n    \\n    // 2. 检查左上对角线\\n    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {\\n        if (board[i][j] == 'Q') return false;\\n    }\\n    \\n    // 3. 检查右上对角线\\n    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {\\n        if (board[i][j] == 'Q') return false;\\n    }\\n    \\n    return true;\\n}",explanation:"🤔 为什么不用检查行？因为我们是backtrack(row+1)，一行只放一个。\\n🤔 为什么只检查上方？因为下方的还没放。"},{title:"第4步：构造结果",description:"将char[][]转为List<String>",code:"private List<String> construct(char[][] board) {\\n    List<String> list = new ArrayList<>();\\n    for (char[] row : board) {\\n        list.add(new String(row));\\n    }\\n    return list;\\n}",explanation:"简单的数据类型转换。"}],interview:{approach:"【面试回答模板】\\n\\nN皇后是经典的回溯题。\\n\\n策略：逐行放置。每一行尝试在每一列在该位置放置皇后。\\n\\n判断合法性：\\n1. 列方向不能有皇后。\\n2. 两个对角线方向不能有皇后。\\n（行方向天然合法，因为我们一行只放一个）\\n\\n为了验证合法性，可以直接扫描上方区域（代码里写的isValid方法），时间复杂度每步O(n)。\\n\\n优化：可以用三个boolean数组（或哈希集）分别记录：\\n- cols[]：列是否被占\\n- diag1[]：左上-右下对角线是否被占（对于(r,c)，index = r - c + n）\\n- diag2[]：右上-左下对角线是否被占（对于(r,c)，index = r + c）\\n这样判断合法性就是O(1)了。",timeComplexity:"O(N!)。第一行有N种选法，第二行N-1种...虽然有剪枝，但上界是N!。",spaceComplexity:"O(N)。递归栈深度为N，棋盘空间为N^2。",followUp:[{question:"如何用位运算优化空间？",answer:"用三个整数（bitmask）分别表示列、左斜、右斜的占用情况。位运算能极大地提高效率，常用于N皇后求解个数问题（N-Queens II）。"},{question:"N=1到N=10的解的个数？",answer:"1对应1个，2和3无解，4对应2个...8对应92个。面试时记住8皇后有92个解是加分项。"}]}},{id:"search-insert-position",title:"搜索插入位置",titleEn:"Search Insert Position",category:"binary-search",difficulty:"easy",description:"给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。\\n\\n请必须使用时间复杂度为 O(log n) 的算法。",examples:[{input:"nums = [1,3,5,6], target = 5",output:"2"},{input:"nums = [1,3,5,6], target = 2",output:"1"},{input:"nums = [1,3,5,6], target = 7",output:"4"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"找位置或插入位置",answer:"在有序数组中找target的位置；如果不存在，返回它应该插入的位置（保持有序）。插入位置就是第一个大于等于target的位置。"},{step:2,question:"🤔 为什么用二分查找？",hint:"看时间复杂度要求",answer:"题目要求O(log n)，数组又是有序的，自然想到二分查找。遍历是O(n)不满足要求。"},{step:3,question:"📝 二分查找的核心变量有哪些？",hint:"left、right、mid",answer:"left和right定义搜索区间，mid是中间位置。我们用左闭右闭区间[left, right]，所以循环条件是left <= right。"},{step:4,question:"🔄 如何缩小搜索区间？",hint:"比较nums[mid]和target",answer:"如果nums[mid] == target，直接返回mid。如果nums[mid] < target，target在右半边，left = mid + 1。如果nums[mid] > target，target在左半边，right = mid - 1。"},{step:5,question:"❓ 找不到时为什么返回left？",hint:"循环结束时left的位置",answer:"循环结束时，left指向第一个大于target的位置，正好是插入位置！因为每次target > nums[mid]时left右移，target < nums[mid]时right左移，最终left越过right时，left就是第一个>=target的位置。"}],codeSteps:[{title:"第1步：定义方法和初始化边界",description:"设置左闭右闭区间",code:`public int searchInsert(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    // TODO: 二分查找
}`,explanation:"🤔 为什么right是length-1？\\n因为我们用左闭右闭区间[left, right]，right必须是有效下标。"},{title:"第2步：二分循环框架",description:"循环条件和计算mid",code:`public int searchInsert(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        // TODO: 比较并缩小区间
    }
    return left;
}`,explanation:"🤔 为什么是left <= right？\\n左闭右闭区间，当left == right时区间仍有一个元素需要检查。\\n\\n💡 mid的计算用left + (right-left)/2避免整数溢出。"},{title:"第3步：处理找到目标的情况",description:"相等时直接返回",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) {
        return mid;  // 找到了，直接返回位置
    }
    // TODO: 处理不等情况
}`,explanation:"✅ 找到target就直接返回mid，这是最简单的情况。"},{title:"第4步：缩小搜索区间",description:"根据比较结果移动指针",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] < target) {
        left = mid + 1;  // target在右半边
    } else {
        right = mid - 1;  // target在左半边
    }
}
return left;`,explanation:"🔑 关键逻辑：\\n• nums[mid] < target：mid太小，target在右边，所以left = mid + 1\\n• nums[mid] > target：mid太大，target在左边，所以right = mid - 1\\n\\n⚠️ 为什么是mid±1？因为mid已经比较过了，不需要再包含在下一轮搜索中。"},{title:"第5步：完整代码",description:"汇总所有逻辑",code:`public int searchInsert(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;  // 没找到，left就是插入位置
}`,explanation:'📊 复杂度分析：\\n• 时间：O(log n)，每次砍掉一半\\n• 空间：O(1)，只用了几个变量\\n\\n💡 记忆技巧：left最终指向"第一个大于等于target的位置"，这也叫做"左边界"。'}],interview:{approach:"【面试回答模板】\\n\\n这道题用二分查找解决。\\n\\n核心思路：在有序数组中用二分查找目标值。找到就返回位置，找不到时left指针会停在第一个大于target的位置，正好是插入位置。\\n\\n时间复杂度O(log n)，空间O(1)。",timeComplexity:"O(log n)，每次循环搜索区间减半",spaceComplexity:"O(1)，只用了常数个变量",followUp:[{question:"为什么循环结束后返回left而不是right？",answer:"循环结束时left > right，left指向第一个大于target的位置（即插入位置），right指向最后一个小于target的位置。"},{question:"如果数组有重复元素呢？",answer:"这道题没有重复元素。如果有重复，需要明确是找第一个还是最后一个位置，用变体的二分查找。"}]}},{id:"search-2d-matrix",title:"搜索二维矩阵",titleEn:"Search a 2D Matrix",category:"binary-search",difficulty:"medium",description:`给你一个满足下述两条属性的 m x n 整数矩阵：

每行中的整数从左到右按非严格递增顺序排列。
每行的第一个整数大于前一行的最后一个整数。

给你一个整数 target，如果 target 在矩阵中，返回 true；否则，返回 false。`,examples:[{input:"matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",output:"true"},{input:"matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",output:"false"}],thinkingGuide:[{step:1,question:"🎯 矩阵有什么特殊性质？",hint:"观察整体有序性",answer:"每行递增，且下一行的开头大于上一行的结尾。这意味着如果把矩阵按行展开，就是一个完全有序的一维数组！"},{step:2,question:"🤔 如何利用这个性质？",hint:"降维打击",answer:"既然展开后是有序数组，就可以直接用二分查找！不需要先找行再找列，一次二分就够了。"},{step:3,question:"📝 如何做下标映射？",hint:"一维转二维",answer:"一维下标idx对应二维坐标：行 = idx / n，列 = idx % n（n是列数）。比如idx=5，n=4，则是第1行第1列。"},{step:4,question:"🔍 搜索范围是什么？",hint:"一维数组的范围",answer:"左边界left=0，右边界right=m*n-1（总元素数-1）。中间位置mid也是一维下标，需要转换后访问。"}],codeSteps:[{title:"第1步：获取矩阵尺寸和初始化边界",description:"计算总元素数",code:`public boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length;      // 行数
    int n = matrix[0].length;   // 列数
    int left = 0;
    int right = m * n - 1;      // 总共m*n个元素
}`,explanation:"💡 把矩阵看成一维数组，有m*n个元素，下标从0到m*n-1。"},{title:"第2步：二分查找框架",description:"标准二分结构",code:`public boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length, n = matrix[0].length;
    int left = 0, right = m * n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        // TODO: 获取mid位置的值并比较
    }
    return false;
}`,explanation:"🤔 和普通二分完全一样，唯一区别是访问元素时需要下标转换。"},{title:"第3步：下标转换获取元素值",description:"一维下标转二维坐标",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    // 关键：一维下标转二维坐标
    int row = mid / n;    // 行号
    int col = mid % n;    // 列号
    int val = matrix[row][col];
    // TODO: 比较val和target
}`,explanation:"🔑 核心映射公式：\\n• row = mid / n（除以列数得到行号）\\n• col = mid % n（模列数得到列号）\\n\\n例如：mid=7, n=4 → row=1, col=3"},{title:"第4步：完整代码",description:"根据比较结果缩小区间",code:`public boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length, n = matrix[0].length;
    int left = 0, right = m * n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int val = matrix[mid / n][mid % n];
        
        if (val == target) {
            return true;
        } else if (val < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}`,explanation:"📊 复杂度分析：\\n• 时间：O(log(m*n))，二分查找\\n• 空间：O(1)\\n\\n💡 这道题的关键是识别出矩阵可以展开成有序数组，从而用标准二分解决。"}],interview:{approach:"【面试回答模板】\\n\\n这道题的关键是发现矩阵的特殊性质：每行递增且下一行比上一行大，展开后就是一个有序数组。\\n\\n因此可以用一次二分查找。把矩阵看成m*n长度的一维数组，一维下标idx转二维坐标：(idx/n, idx%n)。\\n\\n时间O(log(mn))，空间O(1)。",timeComplexity:"O(log(m*n))，一次二分查找",spaceComplexity:"O(1)，常数空间",followUp:[{question:"如果矩阵只保证每行每列有序，但不保证下一行比上一行大呢？",answer:"那就不能展开成一维了。可以从右上角或左下角开始搜索：比target大就往左走，比target小就往下走。时间O(m+n)。"},{question:"为什么不能用两次二分（先找行再找列）？",answer:"可以用，但代码更复杂。利用矩阵的特殊性质一次二分更简洁。"}]}},{id:"find-first-and-last",title:"在排序数组中查找元素的第一个和最后一个位置",titleEn:"Find First and Last Position of Element in Sorted Array",category:"binary-search",difficulty:"medium",description:`给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。`,examples:[{input:"nums = [5,7,7,8,8,10], target = 8",output:"[3,4]"},{input:"nums = [5,7,7,8,8,10], target = 6",output:"[-1,-1]"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"找范围",answer:"在有序数组（可能有重复）中找target第一次出现和最后一次出现的位置。比如[5,7,7,8,8,10]中找8，返回[3,4]。"},{step:2,question:"🤔 普通二分能解决吗？",hint:"找到一个后怎么办",answer:"普通二分找到任意一个8就返回了，但我们需要找第一个和最后一个。需要改进：找到后不停止，继续往一边找。"},{step:3,question:"📝 如何找第一个位置（左边界）？",hint:"找到后往哪走",answer:"找到target后，不直接返回，而是记录当前位置，然后right = mid - 1继续往左找。循环结束时记录的就是第一个位置。"},{step:4,question:"📝 如何找最后一个位置（右边界）？",hint:"对称的操作",answer:"找到target后，记录当前位置，然后left = mid + 1继续往右找。循环结束时记录的就是最后一个位置。"},{step:5,question:"💡 为什么分两次二分？",hint:"代码清晰度",answer:"可以写一个通用函数传参控制方向，但分成findFirst和findLast两个函数更清晰易懂，面试时推荐这种写法。"}],codeSteps:[{title:"第1步：主方法框架",description:"调用两个辅助函数",code:`public int[] searchRange(int[] nums, int target) {
    int first = findFirst(nums, target);
    int last = findLast(nums, target);
    return new int[] {first, last};
}`,explanation:"💡 分解问题：找左边界和右边界各做一次二分。"},{title:"第2步：findFirst找左边界",description:"找到后继续往左",code:`private int findFirst(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    int result = -1;  // 没找到返回-1
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result = mid;      // 记录找到的位置
            right = mid - 1;   // 继续往左找更小的下标
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}`,explanation:"🔑 关键：找到target后不返回，而是right = mid - 1继续往左找，直到找到第一个。"},{title:"第3步：findLast找右边界",description:"找到后继续往右",code:`private int findLast(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result = mid;      // 记录找到的位置
            left = mid + 1;    // 继续往右找更大的下标
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}`,explanation:"🔑 和findFirst的唯一区别：找到后left = mid + 1往右找，而不是往左。"},{title:"第4步：完整代码汇总",description:"三个方法组合",code:`public int[] searchRange(int[] nums, int target) {
    return new int[] {findFirst(nums, target), findLast(nums, target)};
}

private int findFirst(int[] nums, int target) {
    int left = 0, right = nums.length - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) { result = mid; right = mid - 1; }
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}

private int findLast(int[] nums, int target) {
    int left = 0, right = nums.length - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) { result = mid; left = mid + 1; }
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}`,explanation:"📊 复杂度：时间O(log n)（两次二分），空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n这道题用两次二分查找解决。\\n\\n找左边界：找到target后不停止，继续往左找（right = mid - 1）。\\n找右边界：找到target后不停止，继续往右找（left = mid + 1）。\\n\\n两次二分各O(log n)，总时间O(log n)，空间O(1)。",timeComplexity:"O(log n)，两次二分查找",spaceComplexity:"O(1)，常数空间",followUp:[{question:"能否一次二分？",answer:"可以用一个函数找左边界，然后从那里线性或再二分找右边界。但两次二分代码更清晰。"},{question:"如果target不存在怎么处理？",answer:"result初始化为-1，如果从未找到就返回-1。两个都是-1就返回[-1,-1]。"}]}},{id:"search-rotated-sorted-array",title:"搜索旋转排序数组",titleEn:"Search in Rotated Sorted Array",category:"binary-search",difficulty:"medium",description:`整数数组 nums 按升序排列，数组中的值互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]。

给你旋转后的数组 nums 和一个整数 target，如果 nums 中存在这个目标值 target，则返回它的下标，否则返回 -1。`,examples:[{input:"nums = [4,5,6,7,0,1,2], target = 0",output:"4"},{input:"nums = [4,5,6,7,0,1,2], target = 3",output:"-1"}],thinkingGuide:[{step:1,question:"🎯 旋转数组有什么特点？",hint:"画图理解",answer:"比如[4,5,6,7,0,1,2]是[0,1,2,4,5,6,7]旋转得到。旋转后分成两段有序子数组：[4,5,6,7]和[0,1,2]，前段所有元素都大于后段。"},{step:2,question:"🤔 能直接二分吗？",hint:"数组不完全有序",answer:"不能直接二分，但可以利用一个性质：虽然整体不有序，但左右两半至少有一半是有序的！"},{step:3,question:"📝 如何判断哪半边有序？",hint:"和左边界比较",answer:"如果nums[mid] >= nums[left]，说明左半段[left, mid]是有序的。否则右半段[mid, right]是有序的。"},{step:4,question:"🔍 知道哪半边有序后怎么办？",hint:"判断target在不在有序的那半边",answer:"如果左半边有序，检查target是否落在[nums[left], nums[mid])区间内。如果是，往左找；否则往右找。右半边有序同理。"},{step:5,question:"💡 为什么这样能找到？",hint:"排除法",answer:"每次都能确定target在哪半边：要么在有序的那半边（直接判断范围），要么在无序的那半边。无序那半边继续用同样方法处理。"}],codeSteps:[{title:"第1步：初始化边界",description:"标准二分框架",code:`public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    // TODO: 二分查找
}`,explanation:"和普通二分一样的起点。"},{title:"第2步：二分循环和判断mid",description:"先判断是否找到",code:`while (left <= right) {
    int mid = left + (right - left) / 2;
    
    if (nums[mid] == target) {
        return mid;  // 找到了直接返回
    }
    // TODO: 判断哪半边有序，决定搜索方向
}
return -1;`,explanation:"先处理最简单的情况：直接找到target。"},{title:"第3步：判断左半边是否有序",description:"和左边界比较",code:`if (nums[mid] >= nums[left]) {
    // 左半段 [left, mid] 是有序的
    if (target >= nums[left] && target < nums[mid]) {
        // target在有序的左半段
        right = mid - 1;
    } else {
        // target在右半段
        left = mid + 1;
    }
}`,explanation:`🔑 关键判断：
• nums[mid] >= nums[left] → 左半段有序
• target在[nums[left], nums[mid])范围内 → 往左找
• 否则 → 往右找`},{title:"第4步：处理右半边有序的情况",description:"对称的逻辑",code:`else {
    // 右半段 [mid, right] 是有序的
    if (target > nums[mid] && target <= nums[right]) {
        // target在有序的右半段
        left = mid + 1;
    } else {
        // target在左半段
        right = mid - 1;
    }
}`,explanation:`🔑 和左半边对称：
• 右半段有序
• target在(nums[mid], nums[right]]范围内 → 往右找
• 否则 → 往左找`},{title:"第5步：完整代码",description:"组合所有逻辑",code:`public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        
        if (nums[mid] >= nums[left]) {
            // 左半段有序
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 右半段有序
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}`,explanation:`📊 复杂度：时间O(log n)，空间O(1)。

💡 记忆技巧：先判断哪半边有序，再判断target在不在有序那半边。`}],interview:{approach:"【面试回答模板】\\n\\n这道题用二分查找。关键观察是：旋转数组分成两段，每次二分至少有一半是有序的。\\n\\n每次循环：\\n1. 判断nums[mid] >= nums[left]确定左半段是否有序\\n2. 检查target是否落在有序那半边的范围内\\n3. 根据结果决定往哪边找\\n\\n时间O(log n)，空间O(1)。",timeComplexity:"O(log n)，标准二分",spaceComplexity:"O(1)，常数空间",followUp:[{question:"如果数组有重复元素怎么办？",answer:"当nums[mid] == nums[left]时，无法判断在哪段，只能left++跳过。最坏情况变成O(n)，比如[1,1,1,1,1]。"},{question:"为什么用>=而不是>来判断左半边有序？",answer:"考虑只有两个元素的情况：[3,1]，mid=0=left，需要>=才能正确判断左半边有序。"}]}},{id:"find-minimum-rotated",title:"寻找旋转排序数组中的最小值",titleEn:"Find Minimum in Rotated Sorted Array",category:"binary-search",difficulty:"medium",description:`已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次旋转后，得到输入数组。

给你一个元素值互不相同的数组 nums，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的最小元素。`,examples:[{input:"nums = [3,4,5,1,2]",output:"1"},{input:"nums = [4,5,6,7,0,1,2]",output:"0"}],thinkingGuide:[{step:1,question:"🎯 最小值在哪里？",hint:"旋转点",answer:"旋转数组比如[3,4,5,1,2]，最小值就在旋转点，即从大变小的位置。5到→1这里，1就是最小值。"},{step:2,question:"🤔 如果没有旋转呢？",hint:"比如[1,2,3]",answer:"没有旋转时，数组完全有序，第一个元素就是最小值。我们的二分算法也能处理这种情况。"},{step:3,question:"📝 如何用二分找旋转点？",hint:"和哪个边界比较",answer:"和right比较：如果nums[mid] > nums[right]，说明旋转点在mid右边；否则在mid左边或就是mid。"},{step:4,question:"❓ 为什么和right比较而不和left比较？",hint:"思考未旋转的情况",answer:"如果用nums[mid] > nums[left]来判断，当数组未旋转时（如[1,2,3]），中间元素总是大于左边的，无法区分是否旋转过。"},{step:5,question:"🔑 这道题的二分有什么特殊之处？",hint:"循环条件和right更新",answer:"循环条件是left < right（不是<=），因为我们最终要找到一个位置，不是判断存在不存在。right = mid（不是mid-1），因为mid本身可能是最小值。"}],codeSteps:[{title:"第1步：初始化边界",description:"左闭右闭区间",code:`public int findMin(int[] nums) {
    int left = 0;
    int right = nums.length - 1;
    // TODO: 二分找旋转点
}`,explanation:"和普通二分一样的初始化。"},{title:"第2步：二分循环（注意条件）",description:"left < right",code:`public int findMin(int[] nums) {
    int left = 0, right = nums.length - 1;
    
    while (left < right) {  // 注意：是<不是<=
        int mid = left + (right - left) / 2;
        // TODO: 和right比较并缩小范围
    }
    return nums[left];
}`,explanation:`🤔 为什么是left < right？
因为我们要找到一个具体位置，当left == right时就找到了。`},{title:"第3步：和right比较决定方向",description:"判断最小值在哪边",code:`while (left < right) {
    int mid = left + (right - left) / 2;
    
    if (nums[mid] > nums[right]) {
        // mid在左段，最小值在mid右边
        left = mid + 1;
    } else {
        // mid在右段或未旋转，最小值在mid左边或就是mid
        right = mid;  // 注意：不是mid-1
    }
}`,explanation:`🔑 关键逻辑：
• nums[mid] > nums[right]：中间比右边大，说明旋转点在右边
• 否则：旋转点在左边或就是mid，所以right = mid`},{title:"第4步：完整代码",description:"返回最小值",code:`public int findMin(int[] nums) {
    int left = 0, right = nums.length - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];  // 或nums[right]，此时left == right
}`,explanation:`📊 复杂度：时间O(log n)，空间O(1)。

💡 记忆技巧：这是“找最小值”型二分，特点是：
• 循环条件left < right
• right = mid（不排除mid）
• 最终left指向答案`}],interview:{approach:"【面试回答模板】\\n\\n这道题用二分查找找旋转点。\\n\\n关键是和right比较：\\n• nums[mid] > nums[right]：最小值在右边，left = mid + 1\\n• 否则：最小值在左边或就是mid，right = mid\\n\\n这是“找最小值”型二分，循环用left < right。\\n\\n时间O(log n)，空间O(1)。",timeComplexity:"O(log n)",spaceComplexity:"O(1)",followUp:[{question:"为什么和right比较而不是left？",answer:"和left比较无法区分有没有旋转。比如[1,2,3]，mid总是>left，但它没有旋转。"},{question:"如果有重复元素怎么办？",answer:"当nums[mid] == nums[right]时，无法判断在哪边，只能right--跳过。最坏情况O(n)。"}]}},{id:"median-two-sorted-arrays",title:"寻找两个正序数组的中位数",titleEn:"Median of Two Sorted Arrays",category:"binary-search",difficulty:"hard",description:`给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

算法的时间复杂度应该为 O(log (m+n))。`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000",explanation:"合并数组 = [1,2,3]，中位数 2"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000",explanation:"合并数组 = [1,2,3,4]，中位数 (2 + 3) / 2 = 2.5"}],thinkingGuide:[{step:1,question:"🎯 中位数的本质是什么？",hint:"分割",answer:"中位数把所有元素分成相等的两半，左半边最大值 <= 右半边最小值。如果总数为奇，中位数=左半最大值；如果为偶，中位数=（左半最大+右半最小）/2。"},{step:2,question:"🤔 最简单的方法是什么？",hint:"合并数组",answer:"合并两个有序数组，然后找中间位置。时间O(m+n)，但题目要求O(log(m+n))。"},{step:3,question:"📝 如何用二分达到O(log)？",hint:"在哪里二分",answer:"在较短的数组上二分找分割点i，另一个数组的分割点j可以计算得到：j = (m+n+1)/2 - i。"},{step:4,question:"🔍 什么是正确的分割？",hint:"左边要小于右边",answer:"分割正确的条件：maxLeft1 <= minRight2 且 maxLeft2 <= minRight1，即左半边最大值小于等于右半边最小值。"},{step:5,question:"❓ 如果分割不对怎么调整？",hint:"移动分割点",answer:"如果maxLeft1 > minRight2，说明数组1左边太大，分割点要左移；否则右移。"}],codeSteps:[{title:"第1步：确保nums1是较短的数组",description:"在较短数组上二分",code:`public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // 确保enums1是较短的
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    int m = nums1.length, n = nums2.length;
    // TODO: 二分找分割点
}`,explanation:"💡 在较短数组上二分可以减少搜索范围，也保证j不会越界。"},{title:"第2步：二分查找分割点",description:"设置边界和循环",code:`int left = 0, right = m;  // 在nums1上二分

while (left <= right) {
    int i = (left + right) / 2;     // nums1的分割点
    int j = (m + n + 1) / 2 - i;    // nums2的分割点
    // TODO: 计算左右边界并判断
}`,explanation:`🔑 核心关系：i + j = (m + n + 1) / 2
这保证左半边有(m+n+1)/2个元素。`},{title:"第3步：计算分割点两侧的值",description:"处理边界情况",code:`// 左半边最大值
int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i-1];
int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j-1];

// 右半边最小值
int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];
int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];`,explanation:`❗ 边界处理很重要！
• i==0时nums1左半边为空，用MIN_VALUE
• i==m时nums1右半边为空，用MAX_VALUE
这样不影响max/min的计算。`},{title:"第4步：判断分割是否正确",description:"调整或返回结果",code:`if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
    // 分割正确，计算中位数
    if ((m + n) % 2 == 1) {
        return Math.max(maxLeft1, maxLeft2);
    } else {
        return (Math.max(maxLeft1, maxLeft2) + 
                Math.min(minRight1, minRight2)) / 2.0;
    }
} else if (maxLeft1 > minRight2) {
    right = i - 1;  // nums1左边太大，左移i
} else {
    left = i + 1;   // nums1左边太小，右移i
}`,explanation:`🔑 分割正确的条件：
• 左半边最大 <= 右半边最小
• 即maxLeft1 <= minRight2 且 maxLeft2 <= minRight1`},{title:"第5步：完整代码",description:"组合所有逻辑",code:`public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    int m = nums1.length, n = nums2.length;
    int left = 0, right = m;
    
    while (left <= right) {
        int i = (left + right) / 2;
        int j = (m + n + 1) / 2 - i;
        
        int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i-1];
        int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];
        int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j-1];
        int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 == 1) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                return (Math.max(maxLeft1, maxLeft2) + 
                        Math.min(minRight1, minRight2)) / 2.0;
            }
        } else if (maxLeft1 > minRight2) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
    return 0;
}`,explanation:`📊 复杂度：时间O(log(min(m,n)))，空间O(1)。

💡 这是一道经典难题，面试时如果写不出来，可以先说思路，再说合并法O(m+n)的解法。`}],interview:{approach:"【面试回答模板】\\n\\n这道题的核心思想是二分查找分割点。\\n\\n中位数把所有元素分成两半，左半最大 <= 右半最小。在较短数组上二分找i，另一个数组的j = (m+n+1)/2 - i。\\n\\n检查分割是否正确：maxLeft1 <= minRight2 且 maxLeft2 <= minRight1。\\n\\n时间O(log(min(m,n)))，空间O(1)。",timeComplexity:"O(log(min(m,n)))，在较短数组上二分",spaceComplexity:"O(1)，只用常数空间",followUp:[{question:"为什么在较短数组上二分？",answer:"两个原因：1. 减少二分次数；2. 保证j不会越界（如果i取到最大，j可能为负）。"},{question:"这道题太难了怎么办？",answer:"面试时先说思路：二分找分割点。如果写不出来，说清楚合并法O(m+n)的解法也可以部分得分。"}]}},{id:"valid-parentheses",title:"有效的括号",titleEn:"Valid Parentheses",category:"stack",difficulty:"easy",description:`给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。`,examples:[{input:'s = "()"',output:"true"},{input:'s = "()[]{}"',output:"true"},{input:'s = "(]"',output:"false"}],thinkingGuide:[{step:1,question:"🎯 括号匹配的规则是什么？",hint:"配对和顺序",answer:'每个左括号必须有对应的右括号闭合，且必须按正确顺序闭合。比如"([])"有效，"([)]"无效。'},{step:2,question:"🤔 为什么用栈？",hint:"后进先出",answer:"最后出现的左括号要最先匹配（被最近的右括号闭合）。这正是栈的后进先出特性！"},{step:3,question:"📝 遇到左括号怎么办？",hint:"保存起来等待匹配",answer:"直接入栈，等待后续的右括号来匹配。"},{step:4,question:"📝 遇到右括号怎么办？",hint:"和栈顶比较",answer:"检查栈顶是否是对应的左括号。是则弹出（匹配成功），否则返回false（匹配失败）。"},{step:5,question:"⚠️ 最后还要检查什么？",hint:"可能有剩余",answer:"遍历结束后栈必须为空！如果还有剩余左括号没被匹配，也是无效的。"}],codeSteps:[{title:"第1步：创建栈",description:"用于存储未匹配的左括号",code:`public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    // TODO: 遍历处理每个字符
}`,explanation:"💡 栈存储遇到的左括号，等待后续右括号匹配。"},{title:"第2步：遍历处理左括号",description:"左括号直接入栈",code:`for (char c : s.toCharArray()) {
    if (c == '(' || c == '[' || c == '{') {
        stack.push(c);
    } else {
        // TODO: 处理右括号
    }
}`,explanation:"遇到左括号就入栈，等待匹配。"},{title:"第3步：处理右括号",description:"检查栈顶是否匹配",code:`else {
    if (stack.isEmpty()) return false;  // 没有左括号可匹配
    char top = stack.pop();
    if (c == ')' && top != '(') return false;
    if (c == ']' && top != '[') return false;
    if (c == '}' && top != '{') return false;
}`,explanation:"🔑 关键：右括号必须和栈顶的左括号类型匹配。"},{title:"第4步：完整代码",description:"最后检查栈是否为空",code:`public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if (c == ')' && top != '(') return false;
            if (c == ']' && top != '[') return false;
            if (c == '}' && top != '{') return false;
        }
    }
    return stack.isEmpty();  // 栈为空才是有效的
}`,explanation:'📊 复杂度：时间O(n)，空间O(n)。\\n\\n💡 常见错误：忘记最后检查栈是否为空。比如"((("会把所有左括号入栈，但没有右括号匹配，应该返回false。'}],interview:{approach:"【面试回答模板】\\n\\n用栈解决。遇到左括号入栈，遇到右括号检查栈顶是否匹配。最后栈为空才有效。\\n\\n时间O(n)，空间O(n)。",timeComplexity:"O(n)，遍历一次字符串",spaceComplexity:"O(n)，最坏情况全是左括号",followUp:[{question:"如何优化代码？",answer:"用HashMap存储括号对应关系：map.put(')', '(')，代码更简洁。"},{question:"如果只有一种括号呢？",answer:"可以用计数器代替栈，遇到左括号+1，右括号-1，过程中不能为负，最后为0。"}]}},{id:"min-stack",title:"最小栈",titleEn:"Min Stack",category:"stack",difficulty:"medium",description:`设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类：
- MinStack() 初始化堆栈对象。
- void push(int val) 将元素val推入堆栈。
- void pop() 删除堆栈顶部的元素。
- int top() 获取堆栈顶部的元素。
- int getMin() 获取堆栈中的最小元素。`,examples:[{input:`["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]`,output:"[null,null,null,null,-3,null,0,-2]"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"O(1)获取最小值",answer:"设计一个栈，除了普通的push/pop/top操作，还要能在O(1)时间内获取栈中的最小元素。"},{step:2,question:"🤔 为什么普通栈不行？",hint:"每次都要遍历",answer:"普通栈获取最小值需要遍历所有元素，是O(n)。而且pop后最小值可能改变，需要重新计算。"},{step:3,question:"💡 核心思想是什么？",hint:"辅助栈",answer:"用一个辅助栈minStack，同步记录每个状态下的最小值。每次push/pop时，minStack也同步操作。"},{step:4,question:"📝 push时minStack怎么更新？",hint:"和当前最小值比较",answer:"比较新元素和minStack栈顶，压入较小的那个。这样minStack栈顶始终是当前最小值。"}],codeSteps:[{title:"第1步：定义数据结构",description:"两个栈",code:`class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
}`,explanation:"💡 stack存数据，minStack存每个状态的最小值。"},{title:"第2步：实现push",description:"同步更新最小值栈",code:`public void push(int val) {
    stack.push(val);
    if (minStack.isEmpty() || val <= minStack.peek()) {
        minStack.push(val);
    } else {
        minStack.push(minStack.peek());  // 压入当前最小值
    }
}`,explanation:"🔑 关键：minStack始终和stack同步，栈顶是当前状态的最小值。"},{title:"第3步：实现pop和top",description:"同步弹出",code:`public void pop() {
    stack.pop();
    minStack.pop();  // 同步弹出
}

public int top() {
    return stack.peek();
}`,explanation:"pop时两个栈都弹出，保持同步。"},{title:"第4步：实现getMin",description:"O(1)返回最小值",code:`public int getMin() {
    return minStack.peek();
}`,explanation:"🎉 minStack栈顶就是当前最小值，O(1)！"}],interview:{approach:"【面试回答模板】\\n\\n用辅助栈minStack同步记录每个状态的最小值。push时压入当前最小值，pop时同步弹出。getMin直接返回minStack栈顶。\\n\\n所有操作O(1)，空间O(n)。",timeComplexity:"O(1)，所有操作",spaceComplexity:"O(n)，辅助栈",followUp:[{question:"能否只用一个栈？",answer:"可以，存储差值（val - min），或存储(val, min)对。"}]}},{id:"decode-string",title:"字符串解码",titleEn:"Decode String",category:"stack",difficulty:"medium",description:`给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。`,examples:[{input:'s = "3[a]2[bc]"',output:'"aaabcbc"'},{input:'s = "3[a2[c]]"',output:'"accaccacc"'}],thinkingGuide:[{step:1,question:"🎯 解码规则是什么？",hint:"k[字符串]",answer:"数字k后面跟着[字符串]，表示里面的内容重复k次。可能嵌套，如3[a2[c]]解码为accaccacc。"},{step:2,question:"🤔 为什么用栈？",hint:"嵌套结构",answer:"括号可能嵌套，需要从内到外处理。这正是栈的后进先出特性！"},{step:3,question:"📝 栈里存什么？",hint:"遇到[时保存状态",answer:"用两个栈：countStack存重复次数，stringStack存之前的字符串。遇到[时保存当前状态，遇到]时恢复并拼接。"},{step:4,question:"🔄 如何处理多位数字？",hint:"比如10[a]",answer:"数字可能有多位，用k = k * 10 + (c - '0')累加计算。"}],codeSteps:[{title:"第1步：初始化栈和变量",description:"准备数据结构",code:`public String decodeString(String s) {
    Stack<Integer> countStack = new Stack<>();
    Stack<StringBuilder> stringStack = new Stack<>();
    StringBuilder current = new StringBuilder();
    int k = 0;
    // TODO: 遍历处理
}`,explanation:"countStack存重复次数，stringStack存之前的字符串，current是当前正在构建的字符串。"},{title:"第2步：处理数字和字母",description:"累加数字，拼接字母",code:`for (char c : s.toCharArray()) {
    if (Character.isDigit(c)) {
        k = k * 10 + (c - '0');  // 处理多位数
    } else if (Character.isLetter(c)) {
        current.append(c);
    }
    // TODO: 处理[和]
}`,explanation:"数字可能多位，要累加。字母直接加到current。"},{title:"第3步：处理[和]",description:"保存和恢复状态",code:`else if (c == '[') {
    countStack.push(k);
    stringStack.push(current);
    current = new StringBuilder();
    k = 0;
} else if (c == ']') {
    int count = countStack.pop();
    StringBuilder prev = stringStack.pop();
    for (int i = 0; i < count; i++) {
        prev.append(current);
    }
    current = prev;
}`,explanation:`🔑 关键逻辑：
• [：保存当前状态，开始新的收集
• ]：恢复之前状态，重复拼接`},{title:"第4步：完整代码",description:"汇总所有逻辑",code:`public String decodeString(String s) {
    Stack<Integer> countStack = new Stack<>();
    Stack<StringBuilder> stringStack = new Stack<>();
    StringBuilder current = new StringBuilder();
    int k = 0;
    
    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) {
            k = k * 10 + (c - '0');
        } else if (c == '[') {
            countStack.push(k);
            stringStack.push(current);
            current = new StringBuilder();
            k = 0;
        } else if (c == ']') {
            int count = countStack.pop();
            StringBuilder prev = stringStack.pop();
            for (int i = 0; i < count; i++) prev.append(current);
            current = prev;
        } else {
            current.append(c);
        }
    }
    return current.toString();
}`,explanation:"📊 复杂度：时间O(n)，n是解码后的长度；空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n用两个栈：countStack存重复次数，stringStack存字符串。\\n\\n遇到[时保存当前状态，遇到]时恢复状态并重复拼接。\\n\\n时间空间都O(n)。",timeComplexity:"O(n)，n是解码后的长度",spaceComplexity:"O(n)",followUp:[{question:"能否用递归？",answer:"可以，遇到[递归处理，遇到]返回。"}]}},{id:"daily-temperatures",title:"每日温度",titleEn:"Daily Temperatures",category:"stack",difficulty:"medium",description:"给定一个整数数组 temperatures，表示每天的温度，返回一个数组 answer，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。",examples:[{input:"temperatures = [73,74,75,71,69,72,76,73]",output:"[1,1,4,2,1,1,0,0]"},{input:"temperatures = [30,40,50,60]",output:"[1,1,1,0]"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"找下一个更高温度",answer:"对每一天，找到下一个更高温度出现在几天后。比如[73,74,75,71,69,72,76,73]，第一天等待1天，第三天等待4天。"},{step:2,question:"🤔 暴力解法是什么？",hint:"对每天向后找",answer:"对每一天，向后遍历找第一个更高的温度。时间O(n²)，可以优化。"},{step:3,question:"💡 单调栈是什么？",hint:"栈内元素有序",answer:"单调栈是栈内元素保持递增或递减的栈。这道题用递减栈，栈顶是最近的未找到答案的元素。"},{step:4,question:"📝 为什么栈里存下标？",hint:"需要计算天数差",answer:"存下标而不是值，因为需要计算“等待天数”= 当前下标 - 栈内下标。"}],codeSteps:[{title:"第1步：初始化",description:"结果数组和栈",code:`public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] result = new int[n];  // 默认都是0
    Stack<Integer> stack = new Stack<>();  // 存下标
}`,explanation:"result默认是0，表示没找到更高温度。"},{title:"第2步：遍历并维护单调栈",description:"遇到更高温度时弹出",code:`for (int i = 0; i < n; i++) {
    while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
        int idx = stack.pop();
        result[idx] = i - idx;  // 等待天数
    }
    stack.push(i);
}`,explanation:`🔑 关键逻辑：
• 当前温度 > 栈顶温度：栈顶找到答案了！
• 弹出并记录天数差
• 当前下标入栈，等待查找`},{title:"第3步：完整代码",description:"汇总",code:`public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
            int idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }
    return result;
}`,explanation:"📊 复杂度：时间O(n)，每个元素最多入栈出栈各1次；空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n用单调递减栈。栈里存下标，遇到更高温度时弹出所有比它低的，计算天数差。\\n\\n时间O(n)，空间O(n)。",timeComplexity:"O(n)，每个元素最多入栈出栈各1次",spaceComplexity:"O(n)",followUp:[{question:"为什么用递减栈？",answer:"因为要找下一个更大的元素，递减栈保证栈顶是最近的未找到答案的元素。"}]}},{id:"largest-rectangle-histogram",title:"柱状图中最大的矩形",titleEn:"Largest Rectangle in Histogram",category:"stack",difficulty:"hard",description:`给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。

求在该柱状图中，能够勾勒出来的矩形的最大面积。`,examples:[{input:"heights = [2,1,5,6,2,3]",output:"10",explanation:"最大的矩形为图中红色区域，面积为 10"},{input:"heights = [2,4]",output:"4"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"最大矩形面积",answer:"在柱状图中找能勾勒出来的最大矩形面积。每个柱子宽度为1，高度由数组给出。"},{step:2,question:"🤔 如何计算以某个柱子为高的矩形面积？",hint:"向两边扩展",answer:"找左边第一个比它矮的和右边第一个比它矮的，宽度 = 右边界 - 左边界 - 1。"},{step:3,question:"💡 如何高效找左右边界？",hint:"单调栈",answer:"用单调递增栈，栈里存下标。弹出时，栈顶就是左边界，当前元素就是右边界。"},{step:4,question:"❓ 为什么末尾要加0？",hint:"确保所有柱子都被处理",answer:"如果数组本身是递增的，柱子不会被弹出。末尾加0确保所有柱子最终都会被弹出计算。"}],codeSteps:[{title:"第1步：初始化",description:"栈和结果",code:`public int largestRectangleArea(int[] heights) {
    int n = heights.length;
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
}`,explanation:"栈存下标，maxArea记录最大面积。"},{title:"第2步：遍历并维护单调栈",description:"遍历到n（末尾加0）",code:`for (int i = 0; i <= n; i++) {
    int h = (i == n) ? 0 : heights[i];  // 末尾加0
    while (!stack.isEmpty() && h < heights[stack.peek()]) {
        int height = heights[stack.pop()];
        int width = stack.isEmpty() ? i : i - stack.peek() - 1;
        maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
}`,explanation:`🔑 关键逻辑：
• 遇到更矮的柱子时，弹出并计算面积
• 宽度 = 右边界(i) - 左边界(栈顶) - 1`},{title:"第3步：完整代码",description:"汇总",code:`public int largestRectangleArea(int[] heights) {
    int n = heights.length;
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        while (!stack.isEmpty() && h < heights[stack.peek()]) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}`,explanation:"📊 复杂度：时间O(n)，空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n用单调递增栈。弹出时计算以该柱子为高的矩形面积：高度是柱子高度，宽度是左右边界之间的距离。\\n\\n时间O(n)，空间O(n)。",timeComplexity:"O(n)",spaceComplexity:"O(n)",followUp:[{question:"为什么末尾加0？",answer:"确保所有柱子都被弹出处理。"},{question:"这道题和接雨水有什么关系？",answer:"都可以用单调栈。接雨水是找左右边界的较小值，按层计算。"}]}},{id:"kth-largest-element",title:"数组中的第K个最大元素",titleEn:"Kth Largest Element in an Array",category:"heap",difficulty:"medium",description:`给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。`,examples:[{input:"nums = [3,2,1,5,6,4], k = 2",output:"5"},{input:"nums = [3,2,3,1,2,4,5,5,6], k = 4",output:"4"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"第k大",answer:"找数组中第k个最大的元素。注意是排序后第k大，不是第k个不同的元素。"},{step:2,question:"🤔 最简单的方法？",hint:"排序",answer:"排序后取第k大，时间O(nlogn)。但其实不需要完全排序。"},{step:3,question:"💡 如何用堆优化？",hint:"维护k个最大",answer:"用小顶堆维护k个最大元素。堆大小超过k就弹出最小的，最终堆顶就是第k大。"},{step:4,question:"❓ 为什么用小顶堆？",hint:"堆顶是最小",answer:"小顶堆维护k个最大元素，堆顶是其中最小的，即第k大。如果用大顶堆，需要维护n-k+1个元素。"}],codeSteps:[{title:"第1步：创建小顶堆",description:"Java默认就是小顶堆",code:`public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>();
}`,explanation:"PriorityQueue默认是小顶堆，堆顶是最小值。"},{title:"第2步：遍历并维护堆大小",description:"超过k就弹出",code:`for (int num : nums) {
    heap.offer(num);
    if (heap.size() > k) {
        heap.poll();  // 弹出最小的
    }
}`,explanation:"🔑 关键：堆始终保持k个元素，是当前见过的k个最大的。"},{title:"第3步：完整代码",description:"返回堆顶",code:`public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>();
    for (int num : nums) {
        heap.offer(num);
        if (heap.size() > k) {
            heap.poll();
        }
    }
    return heap.peek();  // 堆顶就是第k大
}`,explanation:"📊 复杂度：时间O(nlogk)，空间O(k)。"}],interview:{approach:"【面试回答模板】\\n\\n用小顶堆维护k个最大元素。遍历数组，堆大小超过k就弹出最小的。最后堆顶就是第k大。\\n\\n时间O(nlogk)，空间O(k)。",timeComplexity:"O(nlogk)",spaceComplexity:"O(k)",followUp:[{question:"还有什么方法？",answer:"快速选择算法，平均O(n)，最坏O(n²)。"},{question:"为什么用小顶堆而不是大顶堆？",answer:"小顶堆维护k个最大，堆顶是其中最小的，即第k大。大顶堆需要维护n-k+1个元素。"}]}},{id:"top-k-frequent",title:"前K个高频元素",titleEn:"Top K Frequent Elements",category:"heap",difficulty:"medium",description:"给你一个整数数组 nums 和一个整数 k，请你返回其中出现频率前 k 高的元素。你可以按任意顺序返回答案。",examples:[{input:"nums = [1,1,1,2,2,3], k = 2",output:"[1,2]"},{input:"nums = [1], k = 1",output:"[1]"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"频率最高的k个",answer:"找出数组中出现频率最高的k个元素，順序不限。"},{step:2,question:"🤔 第一步做什么？",hint:"统计频率",answer:"用HashMap统计每个元素的出现次数。"},{step:3,question:"📝 如何找前k高频？",hint:"堆",answer:"用小顶堆（按频率排序）维护k个元素。堆顶是频率最低的，超过k就弹出。"},{step:4,question:"💡 还有什么方法？",hint:"桶排序",answer:"可以用桶排序：按频率分桶，从高频桶开始取k个，时间O(n)。"}],codeSteps:[{title:"第1步：统计频率",description:"用HashMap",code:`public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> count = new HashMap<>();
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
}`,explanation:"count存储每个元素的出现次数。"},{title:"第2步：用小顶堆找k个高频",description:"按频率排序的堆",code:`PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));
for (int num : count.keySet()) {
    heap.offer(num);
    if (heap.size() > k) {
        heap.poll();  // 弹出频率最低的
    }
}`,explanation:"🔑 关键：堆按频率排序，不是按元素值。"},{title:"第3步：完整代码",description:"汇总",code:`public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> count = new HashMap<>();
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
    
    PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));
    for (int num : count.keySet()) {
        heap.offer(num);
        if (heap.size() > k) heap.poll();
    }
    
    int[] result = new int[k];
    for (int i = 0; i < k; i++) result[i] = heap.poll();
    return result;
}`,explanation:"📊 复杂度：时间O(nlogk)，空间O(n)。"}],interview:{approach:"【面试回答模板】\\n\\n先用HashMap统计频率，再用小顶堆（按频率排序）维护k个高频元素。\\n\\n时间O(nlogk)，空间O(n)。",timeComplexity:"O(nlogk)",spaceComplexity:"O(n)",followUp:[{question:"还有什么方法？",answer:"桶排序，O(n)时间。按频率分桶，从高频桶开始取k个。"}]}},{id:"find-median-data-stream",title:"数据流的中位数",titleEn:"Find Median from Data Stream",category:"heap",difficulty:"hard",description:`中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

实现 MedianFinder 类：
- MedianFinder() 初始化 MedianFinder 对象。
- void addNum(int num) 将数据流中的整数 num 添加到数据结构中。
- double findMedian() 返回到目前为止所有元素的中位数。`,examples:[{input:`["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]`,output:"[null, null, null, 1.5, null, 2.0]"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"动态中位数",answer:"设计一个数据结构，支持动态添加元素，并能随时返回已添加元素的中位数。"},{step:2,question:"🤔 维护有序数组可以吗？",hint:"插入代价",answer:"有序数组插入是O(n)，中位数是O(1)。我们想要更快的插入。"},{step:3,question:"💡 如何用两个堆？",hint:"分成两半",answer:"用大顶堆存较小的一半，小顶堆存较大的一半。保持两堆大小差不超过1，中位数就是堆顶元素。"},{step:4,question:"📝 如何保持平衡？",hint:"addNum时调整",answer:"每次addNum：先加入大顶堆，把大顶堆最大的给小顶堆，然后如果小顶堆过大就还给大顶堆。"}],codeSteps:[{title:"第1步：定义两个堆",description:"大顶堆+小顶堆",code:`class MedianFinder {
    private PriorityQueue<Integer> maxHeap;  // 左半边，大顶堆
    private PriorityQueue<Integer> minHeap;  // 右半边，小顶堆
    
    public MedianFinder() {
        maxHeap = new PriorityQueue<>((a, b) -> b - a);
        minHeap = new PriorityQueue<>();
    }
}`,explanation:"maxHeap存较小的一半，minHeap存较大的一半。"},{title:"第2步：实现addNum",description:"添加并保持平衡",code:`public void addNum(int num) {
    maxHeap.offer(num);
    minHeap.offer(maxHeap.poll());  // 把最大的给小顶堆
    if (minHeap.size() > maxHeap.size()) {
        maxHeap.offer(minHeap.poll());  // 平衡大小
    }
}`,explanation:"🔑 关键逻辑：确保omaxHeap的最大值 <= minHeap的最小值，且大小差不超过1。"},{title:"第3步：实现findMedian",description:"返回中位数",code:`public double findMedian() {
    if (maxHeap.size() > minHeap.size()) {
        return maxHeap.peek();
    } else {
        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }
}`,explanation:"奇数个返回大顶堆顶，偶数个返回两堆顶平均。"}],interview:{approach:"【面试回答模板】\\n\\n用两个堆：大顶堆存较小的一半，小顶堆存较大的一半。保持大小差不超过1，中位数就是堆顶。\\n\\naddNum: O(logn), findMedian: O(1)。",timeComplexity:"addNum: O(logn), findMedian: O(1)",spaceComplexity:"O(n)",followUp:[{question:"如果数据有大量重复？",answer:"可以用TreeMap存(值, 计数)，但实现更复杂。"}]}},{id:"best-time-buy-sell-stock",title:"买卖股票的最佳时机",titleEn:"Best Time to Buy and Sell Stock",category:"greedy",difficulty:"easy",description:`给定一个数组 prices，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0。`,examples:[{input:"prices = [7,1,5,3,6,4]",output:"5",explanation:"在第 2 天买入，在第 5 天卖出，利润 = 6-1 = 5"},{input:"prices = [7,6,4,3,1]",output:"0",explanation:"没有交易完成，最大利润为 0"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"买卖一次",answer:"只能进行一次买卖，找最大利润。要在低点买入，高点卖出，且卖出必须在买入之后。"},{step:2,question:"🤔 暴力解法？",hint:"枚举买卖日",answer:"两层循环枚举买入日和卖出日，计算最大利润。时间O(n²)，可以优化。"},{step:3,question:"💡 如何优化到O(n)？",hint:"一次遍历",answer:"遍历时记录到目前为止的最低价格，计算当天卖出的利润，取最大值。"},{step:4,question:"📝 为什么这样是正确的？",hint:"贪心思想",answer:"对于每一天，如果要卖出，一定在之前最低点买入才能获得最大利润。"}],codeSteps:[{title:"第1步：初始化变量",description:"最低价和最大利润",code:`public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
}`,explanation:"minPrice记录到目前为止的最低价，maxProfit记录最大利润。"},{title:"第2步：遍历更新",description:"贪心计算",code:`for (int price : prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
}`,explanation:"🔑 每天都更新最低价和最大利润。"},{title:"第3步：完整代码",description:"汇总",code:`public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n贪心算法。遍历时维护到目前为止的最低价格，计算当天卖出的利润，取最大值。\\n\\n时间O(n)，空间O(1)。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"如果可以多次交易？",answer:"累加所有上涨的差价，只要今天比昨天贵就卖。"},{question:"如果最多交易k次？",answer:"用动态规划，dp[i][j]表示第i天完成j次交易的最大利润。"}]}},{id:"jump-game",title:"跳跃游戏",titleEn:"Jump Game",category:"greedy",difficulty:"medium",description:`给你一个非负整数数组 nums，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。`,examples:[{input:"nums = [2,3,1,1,4]",output:"true",explanation:"可以先跳 1 步到下标 1，然后跳 3 步到达最后一个下标"},{input:"nums = [3,2,1,0,4]",output:"false",explanation:"无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"能否到达结尾",answer:"从下标0出发，nums[i]表示最多能跳i步，判断能否到达最后一个下标。"},{step:2,question:"🤔 核心思想是什么？",hint:"最远可达",answer:"维护能到达的最远位置maxReach，如果maxReach >= 最后一个下标，就能到达。"},{step:3,question:"📝 如何更新最远位置？",hint:"贪心",answer:"遍历每个位置，maxReach = max(maxReach, i + nums[i])。每个位置都尽可能跳得远。"},{step:4,question:"⚠️ 什么时候无法到达？",hint:"当前位置超过maxReach",answer:"如果当前位置i > maxReach，说明根本走不到这个位置，返回false。"}],codeSteps:[{title:"第1步：初始化最远可达",description:"从0开始",code:`public boolean canJump(int[] nums) {
    int maxReach = 0;
}`,explanation:"初始时最远只能到达位置0。"},{title:"第2步：遍历更新",description:"贪心更新最远位置",code:`for (int i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;  // 到不了这
    maxReach = Math.max(maxReach, i + nums[i]);
}`,explanation:"🔑 关键：如果i > maxReach，说明这个位置走不到。"},{title:"第3步：完整代码",description:"汇总",code:`public boolean canJump(int[] nums) {
    int maxReach = 0;
    for (int i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n贪心算法。维护能到达的最远位置，遍历更新。如果某个位置超过最远可达，返回false。\\n\\n时间O(n)，空间O(1)。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"如果要求最少跳跃次数？",answer:"贪心，每次跳到能使下一步跳得最远的位置。见跳跃游戏II。"}]}},{id:"jump-game-ii",title:"跳跃游戏 II",titleEn:"Jump Game II",category:"greedy",difficulty:"medium",description:`给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i]
i + j < n

返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。`,examples:[{input:"nums = [2,3,1,1,4]",output:"2",explanation:"跳到下标 1，然后跳到最后一个下标"},{input:"nums = [2,3,0,1,4]",output:"2"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"最少跳跃次数",answer:"和跳跃游戏I类似，但这次要求最少跳跃次数到达结尾。保证能到达。"},{step:2,question:"🤔 如何贪心？",hint:"每次跳远一点",answer:"在当前跳跃范围内，找到能跳得最远的位置作为下一跳的起点。"},{step:3,question:"📝 什么时候增加跳跃次数？",hint:"到达边界时",answer:"当遍历到当前跳跃的边界时，必须跳一次，更新边界为最远可达位置。"},{step:4,question:"⚠️ 为什么遍历到n-1？",hint:"最后一个位置",answer:"到达最后一个位置时不需要再跳，避免多算一次。"}],codeSteps:[{title:"第1步：初始化变量",description:"跳跃次数、边界、最远",code:`public int jump(int[] nums) {
    int jumps = 0;
    int end = 0;       // 当前跳跃的边界
    int farthest = 0;  // 最远可达位置
}`,explanation:"end是当前跳跃能到达的边界，farthest是当前范围内能到达的最远位置。"},{title:"第2步：遍历更新",description:"到达边界时跳跃",code:`for (int i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i == end) {  // 到达当前边界
        jumps++;
        end = farthest;  // 更新边界
    }
}`,explanation:"🔑 关键：到达边界时必须跳一次，更新边界为最远可达。"},{title:"第3步：完整代码",description:"汇总",code:`public int jump(int[] nums) {
    int jumps = 0, end = 0, farthest = 0;
    
    for (int i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i == end) {
            jumps++;
            end = farthest;
        }
    }
    return jumps;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)。"}],interview:{approach:"【面试回答模板】\\n\\n贪心算法。维护当前跳跃的边界和最远可达位置。到达边界时必须跳一次，更新边界为最远可达。\\n\\n时间O(n)，空间O(1)。",timeComplexity:"O(n)",spaceComplexity:"O(1)",followUp:[{question:"为什么遍历到n-1而不是n？",answer:"到达最后一个位置时不需要再跳，避免多算一次。"}]}},{id:"partition-labels",title:"划分字母区间",titleEn:"Partition Labels",category:"greedy",difficulty:"medium",description:`给你一个字符串 s。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s。

返回一个表示每个字符串片段的长度的列表。`,examples:[{input:'s = "ababcbacadefegdehijhklij"',output:"[9,7,8]",explanation:'划分结果为 "ababcbaca"、"defegde"、"hijhklij"'},{input:'s = "eccbbbbdec"',output:"[10]"}],thinkingGuide:[{step:1,question:"🎯 题目要求什么？",hint:"划分字符串",answer:'把字符串划分成尽可能多的片段，保证同一字母只出现在一个片段中。比如"ababcbaca"里a、b、c都只在这一段。'},{step:2,question:"🤔 如何确定片段边界？",hint:"每个字母的范围",answer:"片段必须包含某个字母的所有出现，所以边界至少要到该字母最后出现的位置。"},{step:3,question:"📝 具体怎么做？",hint:"预处理+贪心",answer:"先记录每个字母最后出现的位置，然后遍历时不断扩展边界为当前遇到字母的最后位置的最大值。"},{step:4,question:"💡 什么时候切分？",hint:"到达边界时",answer:"当遍历位置等于当前边界时，说明这个片段内的所有字母都不会再出现，可以切分。"}],codeSteps:[{title:"第1步：记录每个字母最后出现位置",description:"预处理",code:`public List<Integer> partitionLabels(String s) {
    int[] last = new int[26];
    for (int i = 0; i < s.length(); i++) {
        last[s.charAt(i) - 'a'] = i;
    }
}`,explanation:"last[c]存储字母c最后出现的下标。"},{title:"第2步：遍历并贪心划分",description:"扩展边界，到达时切分",code:`List<Integer> result = new ArrayList<>();
int start = 0, end = 0;

for (int i = 0; i < s.length(); i++) {
    end = Math.max(end, last[s.charAt(i) - 'a']);
    if (i == end) {  // 到达当前片段边界
        result.add(end - start + 1);
        start = end + 1;
    }
}`,explanation:"🔑 关键：每遇到一个字母，就把边界扩展到它最后出现的位置。到达边界时切分。"},{title:"第3步：完整代码",description:"汇总",code:`public List<Integer> partitionLabels(String s) {
    int[] last = new int[26];
    for (int i = 0; i < s.length(); i++) {
        last[s.charAt(i) - 'a'] = i;
    }
    
    List<Integer> result = new ArrayList<>();
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        end = Math.max(end, last[s.charAt(i) - 'a']);
        if (i == end) {
            result.add(end - start + 1);
            start = end + 1;
        }
    }
    return result;
}`,explanation:"📊 复杂度：时间O(n)，空间O(1)（只用了26大小的数组）。"}],interview:{approach:"【面试回答模板】\\n\\n贪心算法。先记录每个字母最后出现的位置，然后遍历时不断扩展当前片段的边界，到达边界时切分。\\n\\n时间O(n)，空间O(1)。",timeComplexity:"O(n)",spaceComplexity:"O(1)，只用了26大小的数组",followUp:[{question:"为什么这样划分是最优的？",answer:"每次到达边界就切分，保证了片段数最多且满足条件。"}]}}],Ms=[...vy,...Dj,...Rj,...zj,...Bj,...Vj],vn=[{id:"hash",name:"哈希",nameEn:"Hash Table",icon:"{ }",description:"用空间换时间，O(1)查找",color:"#10b981",gradient:"from-emerald-500/20 to-emerald-600/10",problems:["two-sum","group-anagrams","longest-consecutive-sequence"]},{id:"two-pointer",name:"双指针",nameEn:"Two Pointers",icon:"⇄",description:"左右指针/快慢指针",color:"#f59e0b",gradient:"from-amber-500/20 to-amber-600/10",problems:["move-zeroes","container-with-most-water","three-sum","trapping-rain-water"]},{id:"sliding-window",name:"滑动窗口",nameEn:"Sliding Window",icon:"▭",description:"动态维护区间",color:"#8b5cf6",gradient:"from-violet-500/20 to-violet-600/10",problems:["longest-substring-without-repeating","find-all-anagrams"]},{id:"substring",name:"子串",nameEn:"Substring",icon:"[ ]",description:"前缀和/单调队列",color:"#ec4899",gradient:"from-pink-500/20 to-pink-600/10",problems:["subarray-sum-equals-k","sliding-window-maximum","minimum-window-substring"]},{id:"backtracking",name:"回溯",nameEn:"Backtracking",icon:"↺",description:"穷举搜索",color:"#ef4444",gradient:"from-red-500/20 to-red-600/10",problems:["permutations","subsets","letter-combinations","combination-sum","generate-parentheses","word-search","palindrome-partitioning","n-queens"]},{id:"binary-search",name:"二分查找",nameEn:"Binary Search",icon:"⌖",description:"有序数组O(logn)查找",color:"#06b6d4",gradient:"from-cyan-500/20 to-cyan-600/10",problems:["search-insert-position","search-2d-matrix","find-first-and-last","search-rotated-sorted-array","find-minimum-rotated","median-two-sorted-arrays"]},{id:"stack",name:"栈",nameEn:"Stack",icon:"▤",description:"后进先出/单调栈",color:"#3b82f6",gradient:"from-blue-500/20 to-blue-600/10",problems:["valid-parentheses","min-stack","decode-string","daily-temperatures","largest-rectangle-histogram"]},{id:"heap",name:"堆",nameEn:"Heap",icon:"△",description:"优先队列/TopK",color:"#a855f7",gradient:"from-purple-500/20 to-purple-600/10",problems:["kth-largest-element","top-k-frequent","find-median-data-stream"]},{id:"greedy",name:"贪心算法",nameEn:"Greedy",icon:"✓",description:"局部最优到全局最优",color:"#22c55e",gradient:"from-green-500/20 to-green-600/10",problems:["best-time-buy-sell-stock","jump-game","jump-game-ii","partition-labels"]},{id:"binary-tree",name:"二叉树",nameEn:"Binary Tree",icon:"🌳",description:"递归/遍历/构造",color:"#14b8a6",gradient:"from-teal-500/20 to-teal-600/10",problems:["binary-tree-inorder","max-depth","invert-tree","symmetric-tree","diameter-binary-tree","level-order","sorted-array-to-bst","validate-bst","kth-smallest-bst","right-side-view","flatten-binary-tree","construct-tree","path-sum-iii","lowest-common-ancestor","max-path-sum"]},{id:"dp",name:"动态规划",nameEn:"Dynamic Programming",icon:"📊",description:"状态转移/最优子结构",color:"#f97316",gradient:"from-orange-500/20 to-orange-600/10",problems:["climbing-stairs","pascals-triangle","house-robber","perfect-squares","coin-change","word-break","longest-increasing-subsequence","max-product-subarray","partition-equal-subset","longest-valid-parentheses"]},{id:"multi-dp",name:"多维DP",nameEn:"Multi-dimensional DP",icon:"🧮",description:"二维状态转移",color:"#6366f1",gradient:"from-indigo-500/20 to-indigo-600/10",problems:["unique-paths","min-path-sum","longest-palindrome-substring","longest-common-subsequence","edit-distance"]},{id:"technique",name:"技巧",nameEn:"Techniques",icon:"💡",description:"位运算/数学技巧",color:"#eab308",gradient:"from-yellow-500/20 to-yellow-600/10",problems:["single-number","majority-element","sort-colors","next-permutation","find-duplicate"]},{id:"graph",name:"图论",nameEn:"Graph",icon:"🔗",description:"BFS/DFS/拓扑排序",color:"#ec4899",gradient:"from-pink-500/20 to-pink-600/10",problems:["number-of-islands","rotting-oranges","course-schedule","implement-trie"]},{id:"linked-list",name:"链表",nameEn:"Linked List",icon:"🔗",description:"指针操作/快慢指针",color:"#84cc16",gradient:"from-lime-500/20 to-lime-600/10",problems:["intersection-list","reverse-list","palindrome-list","linked-list-cycle","linked-list-cycle-ii","merge-two-lists","add-two-numbers","remove-nth-node","swap-pairs","reverse-k-group","copy-random-list","sort-list","merge-k-lists","lru-cache"]},{id:"array",name:"普通数组",nameEn:"Array",icon:"📋",description:"遍历/原地操作",color:"#0ea5e9",gradient:"from-sky-500/20 to-sky-600/10",problems:["max-subarray","merge-intervals","rotate-array","product-except-self","first-missing-positive"]},{id:"matrix",name:"矩阵",nameEn:"Matrix",icon:"⊞",description:"二维数组操作",color:"#d946ef",gradient:"from-fuchsia-500/20 to-fuchsia-600/10",problems:["set-matrix-zeroes","spiral-matrix","rotate-image","search-matrix-ii"]},{id:"sorting",name:"排序算法",nameEn:"Sorting",icon:"↕",description:"冒泡/选择/快排/归并",color:"#f43f5e",gradient:"from-rose-500/20 to-rose-600/10",problems:["bubble-sort","selection-sort","insertion-sort","merge-sort","quick-sort","heap-sort","counting-sort","radix-sort","bucket-sort","shell-sort"]},{id:"searching",name:"查找算法",nameEn:"Searching",icon:"🔍",description:"线性/二分/哈希查找",color:"#0891b2",gradient:"from-cyan-600/20 to-cyan-700/10",problems:["linear-search","binary-search-basic","binary-search-first","binary-search-last","binary-search-rotated","binary-search-sqrt","interpolation-search","fibonacci-search","bst-search","avl-search","rbtree-search","hash-search"]}],kp=A.createContext({});function Lp(n){const a=A.useRef(null);return a.current===null&&(a.current=n()),a.current}const Mp=typeof window<"u",by=Mp?A.useLayoutEffect:A.useEffect,Ql=A.createContext(null);function qp(n,a){n.indexOf(a)===-1&&n.push(a)}function Dp(n,a){const s=n.indexOf(a);s>-1&&n.splice(s,1)}const oi=(n,a,s)=>s>a?a:s<n?n:s;let Rp=()=>{};const li={},wy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Sy(n){return typeof n=="object"&&n!==null}const Ty=n=>/^0[^.\s]+$/u.test(n);function zp(n){let a;return()=>(a===void 0&&(a=n()),a)}const pn=n=>n,_j=(n,a)=>s=>a(n(s)),Fs=(...n)=>n.reduce(_j),Hs=(n,a,s)=>{const o=a-n;return o===0?1:(s-n)/o};class Bp{constructor(){this.subscriptions=[]}add(a){return qp(this.subscriptions,a),()=>Dp(this.subscriptions,a)}notify(a,s,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,s,o);else for(let p=0;p<u;p++){const d=this.subscriptions[p];d&&d(a,s,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mn=n=>n*1e3,dn=n=>n/1e3;function jy(n,a){return a?n*(1e3/a):0}const Oy=(n,a,s)=>(((1-3*s+3*a)*n+(3*s-6*a))*n+3*a)*n,Uj=1e-7,Hj=12;function Pj(n,a,s,o,u){let p,d,m=0;do d=a+(s-a)/2,p=Oy(d,o,u)-n,p>0?s=d:a=d;while(Math.abs(p)>Uj&&++m<Hj);return d}function Is(n,a,s,o){if(n===a&&s===o)return pn;const u=p=>Pj(p,0,1,n,s);return p=>p===0||p===1?p:Oy(u(p),a,o)}const Ay=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,Ny=n=>a=>1-n(1-a),Ey=Is(.33,1.53,.69,.99),Vp=Ny(Ey),Cy=Ay(Vp),ky=n=>(n*=2)<1?.5*Vp(n):.5*(2-Math.pow(2,-10*(n-1))),_p=n=>1-Math.sin(Math.acos(n)),Ly=Ny(_p),My=Ay(_p),Gj=Is(.42,0,1,1),Yj=Is(0,0,.58,1),qy=Is(.42,0,.58,1),Xj=n=>Array.isArray(n)&&typeof n[0]!="number",Dy=n=>Array.isArray(n)&&typeof n[0]=="number",Kj={linear:pn,easeIn:Gj,easeInOut:qy,easeOut:Yj,circIn:_p,circInOut:My,circOut:Ly,backIn:Vp,backInOut:Cy,backOut:Ey,anticipate:ky},Qj=n=>typeof n=="string",X0=n=>{if(Dy(n)){Rp(n.length===4);const[a,s,o,u]=n;return Is(a,s,o,u)}else if(Qj(n))return Kj[n];return n},yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Fj(n,a){let s=new Set,o=new Set,u=!1,p=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function h(x){d.has(x)&&(f.schedule(x),n()),x(m)}const f={schedule:(x,g=!1,v=!1)=>{const T=v&&u?s:o;return g&&d.add(x),T.has(x)||T.add(x),x},cancel:x=>{o.delete(x),d.delete(x)},process:x=>{if(m=x,u){p=!0;return}u=!0,[s,o]=[o,s],s.forEach(h),s.clear(),u=!1,p&&(p=!1,f.process(x))}};return f}const Ij=40;function Ry(n,a){let s=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},p=()=>s=!0,d=yl.reduce((U,I)=>(U[I]=Fj(p),U),{}),{setup:m,read:h,resolveKeyframes:f,preUpdate:x,update:g,preRender:v,render:S,postRender:T}=d,j=()=>{const U=li.useManualTiming?u.timestamp:performance.now();s=!1,li.useManualTiming||(u.delta=o?1e3/60:Math.max(Math.min(U-u.timestamp,Ij),1)),u.timestamp=U,u.isProcessing=!0,m.process(u),h.process(u),f.process(u),x.process(u),g.process(u),v.process(u),S.process(u),T.process(u),u.isProcessing=!1,s&&a&&(o=!1,n(j))},q=()=>{s=!0,o=!0,u.isProcessing||n(j)};return{schedule:yl.reduce((U,I)=>{const Q=d[I];return U[I]=(Z,k=!1,R=!1)=>(s||q(),Q.schedule(Z,k,R)),U},{}),cancel:U=>{for(let I=0;I<yl.length;I++)d[yl[I]].cancel(U)},state:u,steps:d}}const{schedule:Gt,cancel:Pi,state:ye,steps:Sd}=Ry(typeof requestAnimationFrame<"u"?requestAnimationFrame:pn,!0);let Tl;function Zj(){Tl=void 0}const He={now:()=>(Tl===void 0&&He.set(ye.isProcessing||li.useManualTiming?ye.timestamp:performance.now()),Tl),set:n=>{Tl=n,queueMicrotask(Zj)}},zy=n=>a=>typeof a=="string"&&a.startsWith(n),Up=zy("--"),Jj=zy("var(--"),Hp=n=>Jj(n)?$j.test(n.split("/*")[0].trim()):!1,$j=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,kr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ps={...kr,transform:n=>oi(0,1,n)},vl={...kr,default:1},qs=n=>Math.round(n*1e5)/1e5,Pp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Wj(n){return n==null}const tO=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gp=(n,a)=>s=>!!(typeof s=="string"&&tO.test(s)&&s.startsWith(n)||a&&!Wj(s)&&Object.prototype.hasOwnProperty.call(s,a)),By=(n,a,s)=>o=>{if(typeof o!="string")return o;const[u,p,d,m]=o.match(Pp);return{[n]:parseFloat(u),[a]:parseFloat(p),[s]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},eO=n=>oi(0,255,n),Td={...kr,transform:n=>Math.round(eO(n))},ya={test:Gp("rgb","red"),parse:By("red","green","blue"),transform:({red:n,green:a,blue:s,alpha:o=1})=>"rgba("+Td.transform(n)+", "+Td.transform(a)+", "+Td.transform(s)+", "+qs(Ps.transform(o))+")"};function nO(n){let a="",s="",o="",u="";return n.length>5?(a=n.substring(1,3),s=n.substring(3,5),o=n.substring(5,7),u=n.substring(7,9)):(a=n.substring(1,2),s=n.substring(2,3),o=n.substring(3,4),u=n.substring(4,5),a+=a,s+=s,o+=o,u+=u),{red:parseInt(a,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const Zd={test:Gp("#"),parse:nO,transform:ya.transform},Zs=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),Vi=Zs("deg"),qn=Zs("%"),pt=Zs("px"),iO=Zs("vh"),aO=Zs("vw"),K0={...qn,parse:n=>qn.parse(n)/100,transform:n=>qn.transform(n*100)},mr={test:Gp("hsl","hue"),parse:By("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+qn.transform(qs(a))+", "+qn.transform(qs(s))+", "+qs(Ps.transform(o))+")"},ie={test:n=>ya.test(n)||Zd.test(n)||mr.test(n),parse:n=>ya.test(n)?ya.parse(n):mr.test(n)?mr.parse(n):Zd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ya.transform(n):mr.transform(n),getAnimatableNone:n=>{const a=ie.parse(n);return a.alpha=0,ie.transform(a)}},rO=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sO(n){var a,s;return isNaN(n)&&typeof n=="string"&&(((a=n.match(Pp))==null?void 0:a.length)||0)+(((s=n.match(rO))==null?void 0:s.length)||0)>0}const Vy="number",_y="color",oO="var",lO="var(",Q0="${}",uO=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Gs(n){const a=n.toString(),s=[],o={color:[],number:[],var:[]},u=[];let p=0;const m=a.replace(uO,h=>(ie.test(h)?(o.color.push(p),u.push(_y),s.push(ie.parse(h))):h.startsWith(lO)?(o.var.push(p),u.push(oO),s.push(h)):(o.number.push(p),u.push(Vy),s.push(parseFloat(h))),++p,Q0)).split(Q0);return{values:s,split:m,indexes:o,types:u}}function Uy(n){return Gs(n).values}function Hy(n){const{split:a,types:s}=Gs(n),o=a.length;return u=>{let p="";for(let d=0;d<o;d++)if(p+=a[d],u[d]!==void 0){const m=s[d];m===Vy?p+=qs(u[d]):m===_y?p+=ie.transform(u[d]):p+=u[d]}return p}}const cO=n=>typeof n=="number"?0:ie.test(n)?ie.getAnimatableNone(n):n;function dO(n){const a=Uy(n);return Hy(n)(a.map(cO))}const Gi={test:sO,parse:Uy,createTransformer:Hy,getAnimatableNone:dO};function jd(n,a,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(a-n)*6*s:s<1/2?a:s<2/3?n+(a-n)*(2/3-s)*6:n}function pO({hue:n,saturation:a,lightness:s,alpha:o}){n/=360,a/=100,s/=100;let u=0,p=0,d=0;if(!a)u=p=d=s;else{const m=s<.5?s*(1+a):s+a-s*a,h=2*s-m;u=jd(h,m,n+1/3),p=jd(h,m,n),d=jd(h,m,n-1/3)}return{red:Math.round(u*255),green:Math.round(p*255),blue:Math.round(d*255),alpha:o}}function ql(n,a){return s=>s>0?a:n}const Xt=(n,a,s)=>n+(a-n)*s,Od=(n,a,s)=>{const o=n*n,u=s*(a*a-o)+o;return u<0?0:Math.sqrt(u)},fO=[Zd,ya,mr],mO=n=>fO.find(a=>a.test(n));function F0(n){const a=mO(n);if(!a)return!1;let s=a.parse(n);return a===mr&&(s=pO(s)),s}const I0=(n,a)=>{const s=F0(n),o=F0(a);if(!s||!o)return ql(n,a);const u={...s};return p=>(u.red=Od(s.red,o.red,p),u.green=Od(s.green,o.green,p),u.blue=Od(s.blue,o.blue,p),u.alpha=Xt(s.alpha,o.alpha,p),ya.transform(u))},Jd=new Set(["none","hidden"]);function hO(n,a){return Jd.has(n)?s=>s<=0?n:a:s=>s>=1?a:n}function gO(n,a){return s=>Xt(n,a,s)}function Yp(n){return typeof n=="number"?gO:typeof n=="string"?Hp(n)?ql:ie.test(n)?I0:vO:Array.isArray(n)?Py:typeof n=="object"?ie.test(n)?I0:xO:ql}function Py(n,a){const s=[...n],o=s.length,u=n.map((p,d)=>Yp(p)(p,a[d]));return p=>{for(let d=0;d<o;d++)s[d]=u[d](p);return s}}function xO(n,a){const s={...n,...a},o={};for(const u in s)n[u]!==void 0&&a[u]!==void 0&&(o[u]=Yp(n[u])(n[u],a[u]));return u=>{for(const p in o)s[p]=o[p](u);return s}}function yO(n,a){const s=[],o={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const p=a.types[u],d=n.indexes[p][o[p]],m=n.values[d]??0;s[u]=m,o[p]++}return s}const vO=(n,a)=>{const s=Gi.createTransformer(a),o=Gs(n),u=Gs(a);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?Jd.has(n)&&!u.values.length||Jd.has(a)&&!o.values.length?hO(n,a):Fs(Py(yO(o,u),u.values),s):ql(n,a)};function Gy(n,a,s){return typeof n=="number"&&typeof a=="number"&&typeof s=="number"?Xt(n,a,s):Yp(n)(n,a)}const bO=n=>{const a=({timestamp:s})=>n(s);return{start:(s=!0)=>Gt.update(a,s),stop:()=>Pi(a),now:()=>ye.isProcessing?ye.timestamp:He.now()}},Yy=(n,a,s=10)=>{let o="";const u=Math.max(Math.round(a/s),2);for(let p=0;p<u;p++)o+=Math.round(n(p/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Dl=2e4;function Xp(n){let a=0;const s=50;let o=n.next(a);for(;!o.done&&a<Dl;)a+=s,o=n.next(a);return a>=Dl?1/0:a}function wO(n,a=100,s){const o=s({...n,keyframes:[0,a]}),u=Math.min(Xp(o),Dl);return{type:"keyframes",ease:p=>o.next(u*p).value/a,duration:dn(u)}}const SO=5;function Xy(n,a,s){const o=Math.max(a-SO,0);return jy(s-n(o),a-o)}const Ft={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ad=.001;function TO({duration:n=Ft.duration,bounce:a=Ft.bounce,velocity:s=Ft.velocity,mass:o=Ft.mass}){let u,p,d=1-a;d=oi(Ft.minDamping,Ft.maxDamping,d),n=oi(Ft.minDuration,Ft.maxDuration,dn(n)),d<1?(u=f=>{const x=f*d,g=x*n,v=x-s,S=$d(f,d),T=Math.exp(-g);return Ad-v/S*T},p=f=>{const g=f*d*n,v=g*s+s,S=Math.pow(d,2)*Math.pow(f,2)*n,T=Math.exp(-g),j=$d(Math.pow(f,2),d);return(-u(f)+Ad>0?-1:1)*((v-S)*T)/j}):(u=f=>{const x=Math.exp(-f*n),g=(f-s)*n+1;return-Ad+x*g},p=f=>{const x=Math.exp(-f*n),g=(s-f)*(n*n);return x*g});const m=5/n,h=OO(u,p,m);if(n=Mn(n),isNaN(h))return{stiffness:Ft.stiffness,damping:Ft.damping,duration:n};{const f=Math.pow(h,2)*o;return{stiffness:f,damping:d*2*Math.sqrt(o*f),duration:n}}}const jO=12;function OO(n,a,s){let o=s;for(let u=1;u<jO;u++)o=o-n(o)/a(o);return o}function $d(n,a){return n*Math.sqrt(1-a*a)}const AO=["duration","bounce"],NO=["stiffness","damping","mass"];function Z0(n,a){return a.some(s=>n[s]!==void 0)}function EO(n){let a={velocity:Ft.velocity,stiffness:Ft.stiffness,damping:Ft.damping,mass:Ft.mass,isResolvedFromDuration:!1,...n};if(!Z0(n,NO)&&Z0(n,AO))if(n.visualDuration){const s=n.visualDuration,o=2*Math.PI/(s*1.2),u=o*o,p=2*oi(.05,1,1-(n.bounce||0))*Math.sqrt(u);a={...a,mass:Ft.mass,stiffness:u,damping:p}}else{const s=TO(n);a={...a,...s,mass:Ft.mass},a.isResolvedFromDuration=!0}return a}function Rl(n=Ft.visualDuration,a=Ft.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:o,restDelta:u}=s;const p=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],m={done:!1,value:p},{stiffness:h,damping:f,mass:x,duration:g,velocity:v,isResolvedFromDuration:S}=EO({...s,velocity:-dn(s.velocity||0)}),T=v||0,j=f/(2*Math.sqrt(h*x)),q=d-p,C=dn(Math.sqrt(h/x)),P=Math.abs(q)<5;o||(o=P?Ft.restSpeed.granular:Ft.restSpeed.default),u||(u=P?Ft.restDelta.granular:Ft.restDelta.default);let U;if(j<1){const Q=$d(C,j);U=Z=>{const k=Math.exp(-j*C*Z);return d-k*((T+j*C*q)/Q*Math.sin(Q*Z)+q*Math.cos(Q*Z))}}else if(j===1)U=Q=>d-Math.exp(-C*Q)*(q+(T+C*q)*Q);else{const Q=C*Math.sqrt(j*j-1);U=Z=>{const k=Math.exp(-j*C*Z),R=Math.min(Q*Z,300);return d-k*((T+j*C*q)*Math.sinh(R)+Q*q*Math.cosh(R))/Q}}const I={calculatedDuration:S&&g||null,next:Q=>{const Z=U(Q);if(S)m.done=Q>=g;else{let k=Q===0?T:0;j<1&&(k=Q===0?Mn(T):Xy(U,Q,Z));const R=Math.abs(k)<=o,at=Math.abs(d-Z)<=u;m.done=R&&at}return m.value=m.done?d:Z,m},toString:()=>{const Q=Math.min(Xp(I),Dl),Z=Yy(k=>I.next(Q*k).value,Q,30);return Q+"ms "+Z},toTransition:()=>{}};return I}Rl.applyToOptions=n=>{const a=wO(n,100,Rl);return n.ease=a.ease,n.duration=Mn(a.duration),n.type="keyframes",n};function Wd({keyframes:n,velocity:a=0,power:s=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:p=500,modifyTarget:d,min:m,max:h,restDelta:f=.5,restSpeed:x}){const g=n[0],v={done:!1,value:g},S=R=>m!==void 0&&R<m||h!==void 0&&R>h,T=R=>m===void 0?h:h===void 0||Math.abs(m-R)<Math.abs(h-R)?m:h;let j=s*a;const q=g+j,C=d===void 0?q:d(q);C!==q&&(j=C-g);const P=R=>-j*Math.exp(-R/o),U=R=>C+P(R),I=R=>{const at=P(R),ct=U(R);v.done=Math.abs(at)<=f,v.value=v.done?C:ct};let Q,Z;const k=R=>{S(v.value)&&(Q=R,Z=Rl({keyframes:[v.value,T(v.value)],velocity:Xy(U,R,v.value),damping:u,stiffness:p,restDelta:f,restSpeed:x}))};return k(0),{calculatedDuration:null,next:R=>{let at=!1;return!Z&&Q===void 0&&(at=!0,I(R),k(R)),Q!==void 0&&R>=Q?Z.next(R-Q):(!at&&I(R),v)}}}function CO(n,a,s){const o=[],u=s||li.mix||Gy,p=n.length-1;for(let d=0;d<p;d++){let m=u(n[d],n[d+1]);if(a){const h=Array.isArray(a)?a[d]||pn:a;m=Fs(h,m)}o.push(m)}return o}function kO(n,a,{clamp:s=!0,ease:o,mixer:u}={}){const p=n.length;if(Rp(p===a.length),p===1)return()=>a[0];if(p===2&&a[0]===a[1])return()=>a[1];const d=n[0]===n[1];n[0]>n[p-1]&&(n=[...n].reverse(),a=[...a].reverse());const m=CO(a,o,u),h=m.length,f=x=>{if(d&&x<n[0])return a[0];let g=0;if(h>1)for(;g<n.length-2&&!(x<n[g+1]);g++);const v=Hs(n[g],n[g+1],x);return m[g](v)};return s?x=>f(oi(n[0],n[p-1],x)):f}function LO(n,a){const s=n[n.length-1];for(let o=1;o<=a;o++){const u=Hs(0,a,o);n.push(Xt(s,1,u))}}function MO(n){const a=[0];return LO(a,n.length-1),a}function qO(n,a){return n.map(s=>s*a)}function DO(n,a){return n.map(()=>a||qy).splice(0,n.length-1)}function Ds({duration:n=300,keyframes:a,times:s,ease:o="easeInOut"}){const u=Xj(o)?o.map(X0):X0(o),p={done:!1,value:a[0]},d=qO(s&&s.length===a.length?s:MO(a),n),m=kO(d,a,{ease:Array.isArray(u)?u:DO(a,u)});return{calculatedDuration:n,next:h=>(p.value=m(h),p.done=h>=n,p)}}const RO=n=>n!==null;function Kp(n,{repeat:a,repeatType:s="loop"},o,u=1){const p=n.filter(RO),m=u<0||a&&s!=="loop"&&a%2===1?0:p.length-1;return!m||o===void 0?p[m]:o}const zO={decay:Wd,inertia:Wd,tween:Ds,keyframes:Ds,spring:Rl};function Ky(n){typeof n.type=="string"&&(n.type=zO[n.type])}class Qp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,s){return this.finished.then(a,s)}}const BO=n=>n/100;class Fp extends Qp{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var o,u;const{motionValue:s}=this.options;s&&s.updatedAt!==He.now()&&this.tick(He.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(u=(o=this.options).onStop)==null||u.call(o))},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;Ky(a);const{type:s=Ds,repeat:o=0,repeatDelay:u=0,repeatType:p,velocity:d=0}=a;let{keyframes:m}=a;const h=s||Ds;h!==Ds&&typeof m[0]!="number"&&(this.mixKeyframes=Fs(BO,Gy(m[0],m[1])),m=[0,100]);const f=h({...a,keyframes:m});p==="mirror"&&(this.mirroredGenerator=h({...a,keyframes:[...m].reverse(),velocity:-d})),f.calculatedDuration===null&&(f.calculatedDuration=Xp(f));const{calculatedDuration:x}=f;this.calculatedDuration=x,this.resolvedDuration=x+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=f}updateTime(a){const s=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(a,s=!1){const{generator:o,totalDuration:u,mixKeyframes:p,mirroredGenerator:d,resolvedDuration:m,calculatedDuration:h}=this;if(this.startTime===null)return o.next(0);const{delay:f=0,keyframes:x,repeat:g,repeatType:v,repeatDelay:S,type:T,onUpdate:j,finalKeyframe:q}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-u/this.speed,this.startTime)),s?this.currentTime=a:this.updateTime(a);const C=this.currentTime-f*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?C<0:C>u;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let U=this.currentTime,I=o;if(g){const R=Math.min(this.currentTime,u)/m;let at=Math.floor(R),ct=R%1;!ct&&R>=1&&(ct=1),ct===1&&at--,at=Math.min(at,g+1),!!(at%2)&&(v==="reverse"?(ct=1-ct,S&&(ct-=S/m)):v==="mirror"&&(I=d)),U=oi(0,1,ct)*m}const Q=P?{done:!1,value:x[0]}:I.next(U);p&&(Q.value=p(Q.value));let{done:Z}=Q;!P&&h!==null&&(Z=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Z);return k&&T!==Wd&&(Q.value=Kp(x,this.options,q,this.speed)),j&&j(Q.value),k&&this.finish(),Q}then(a,s){return this.finished.then(a,s)}get duration(){return dn(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+dn(a)}get time(){return dn(this.currentTime)}set time(a){var s;a=Mn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(He.now());const s=this.playbackSpeed!==a;this.playbackSpeed=a,s&&(this.time=dn(this.currentTime))}play(){var u,p;if(this.isStopped)return;const{driver:a=bO,startTime:s}=this.options;this.driver||(this.driver=a(d=>this.tick(d))),(p=(u=this.options).onPlay)==null||p.call(u);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=s??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(He.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var a,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(a=this.options).onComplete)==null||s.call(a)}cancel(){var a,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(a=this.options).onCancel)==null||s.call(a)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),a.observe(this)}}function VO(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const va=n=>n*180/Math.PI,tp=n=>{const a=va(Math.atan2(n[1],n[0]));return ep(a)},_O={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:tp,rotateZ:tp,skewX:n=>va(Math.atan(n[1])),skewY:n=>va(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},ep=n=>(n=n%360,n<0&&(n+=360),n),J0=tp,$0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),W0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),UO={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:$0,scaleY:W0,scale:n=>($0(n)+W0(n))/2,rotateX:n=>ep(va(Math.atan2(n[6],n[5]))),rotateY:n=>ep(va(Math.atan2(-n[2],n[0]))),rotateZ:J0,rotate:J0,skewX:n=>va(Math.atan(n[4])),skewY:n=>va(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function np(n){return n.includes("scale")?1:0}function ip(n,a){if(!n||n==="none")return np(a);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(s)o=UO,u=s;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=_O,u=m}if(!u)return np(a);const p=o[a],d=u[1].split(",").map(PO);return typeof p=="function"?p(d):d[p]}const HO=(n,a)=>{const{transform:s="none"}=getComputedStyle(n);return ip(s,a)};function PO(n){return parseFloat(n.trim())}const Lr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mr=new Set(Lr),t1=n=>n===kr||n===pt,GO=new Set(["x","y","z"]),YO=Lr.filter(n=>!GO.has(n));function XO(n){const a=[];return YO.forEach(s=>{const o=n.getValue(s);o!==void 0&&(a.push([s,o.get()]),o.set(s.startsWith("scale")?1:0))}),a}const ba={width:({x:n},{paddingLeft:a="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(a)-parseFloat(s),height:({y:n},{paddingTop:a="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(a)-parseFloat(s),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>ip(a,"x"),y:(n,{transform:a})=>ip(a,"y")};ba.translateX=ba.x;ba.translateY=ba.y;const wa=new Set;let ap=!1,rp=!1,sp=!1;function Qy(){if(rp){const n=Array.from(wa).filter(o=>o.needsMeasurement),a=new Set(n.map(o=>o.element)),s=new Map;a.forEach(o=>{const u=XO(o);u.length&&(s.set(o,u),o.render())}),n.forEach(o=>o.measureInitialState()),a.forEach(o=>{o.render();const u=s.get(o);u&&u.forEach(([p,d])=>{var m;(m=o.getValue(p))==null||m.set(d)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}rp=!1,ap=!1,wa.forEach(n=>n.complete(sp)),wa.clear()}function Fy(){wa.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(rp=!0)})}function KO(){sp=!0,Fy(),Qy(),sp=!1}class Ip{constructor(a,s,o,u,p,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=s,this.name=o,this.motionValue=u,this.element=p,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),ap||(ap=!0,Gt.read(Fy),Gt.resolveKeyframes(Qy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:s,element:o,motionValue:u}=this;if(a[0]===null){const p=u==null?void 0:u.get(),d=a[a.length-1];if(p!==void 0)a[0]=p;else if(o&&s){const m=o.readValue(s,d);m!=null&&(a[0]=m)}a[0]===void 0&&(a[0]=d),u&&p===void 0&&u.set(a[0])}VO(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const QO=n=>n.startsWith("--");function FO(n,a,s){QO(a)?n.style.setProperty(a,s):n.style[a]=s}const IO=zp(()=>window.ScrollTimeline!==void 0),ZO={};function JO(n,a){const s=zp(n);return()=>ZO[a]??s()}const Iy=JO(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ls=([n,a,s,o])=>`cubic-bezier(${n}, ${a}, ${s}, ${o})`,e1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ls([0,.65,.55,1]),circOut:Ls([.55,0,1,.45]),backIn:Ls([.31,.01,.66,-.59]),backOut:Ls([.33,1.53,.69,.99])};function Zy(n,a){if(n)return typeof n=="function"?Iy()?Yy(n,a):"ease-out":Dy(n)?Ls(n):Array.isArray(n)?n.map(s=>Zy(s,a)||e1.easeOut):e1[n]}function $O(n,a,s,{delay:o=0,duration:u=300,repeat:p=0,repeatType:d="loop",ease:m="easeOut",times:h}={},f=void 0){const x={[a]:s};h&&(x.offset=h);const g=Zy(m,u);Array.isArray(g)&&(x.easing=g);const v={delay:o,duration:u,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:p+1,direction:d==="reverse"?"alternate":"normal"};return f&&(v.pseudoElement=f),n.animate(x,v)}function Jy(n){return typeof n=="function"&&"applyToOptions"in n}function WO({type:n,...a}){return Jy(n)&&Iy()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class tA extends Qp{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:s,name:o,keyframes:u,pseudoElement:p,allowFlatten:d=!1,finalKeyframe:m,onComplete:h}=a;this.isPseudoElement=!!p,this.allowFlatten=d,this.options=a,Rp(typeof a.type!="string");const f=WO(a);this.animation=$O(s,o,u,f,p),f.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!p){const x=Kp(u,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(x):FO(s,o,x),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var a,s;(s=(a=this.animation).finish)==null||s.call(a)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var a,s;this.isPseudoElement||(s=(a=this.animation).commitStyles)==null||s.call(a)}get duration(){var s,o;const a=((o=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:o.call(s).duration)||0;return dn(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+dn(a)}get time(){return dn(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=Mn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:s}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,a&&IO()?(this.animation.timeline=a,pn):s(this)}}const $y={anticipate:ky,backInOut:Cy,circInOut:My};function eA(n){return n in $y}function nA(n){typeof n.ease=="string"&&eA(n.ease)&&(n.ease=$y[n.ease])}const n1=10;class iA extends tA{constructor(a){nA(a),Ky(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:s,onUpdate:o,onComplete:u,element:p,...d}=this.options;if(!s)return;if(a!==void 0){s.set(a);return}const m=new Fp({...d,autoplay:!1}),h=Mn(this.finishedTime??this.time);s.setWithVelocity(m.sample(h-n1).value,m.sample(h).value,n1),m.stop()}}const i1=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Gi.test(n)||n==="0")&&!n.startsWith("url("));function aA(n){const a=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==a)return!0}function rA(n,a,s,o){const u=n[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const p=n[n.length-1],d=i1(u,a),m=i1(p,a);return!d||!m?!1:aA(n)||(s==="spring"||Jy(s))&&o}function op(n){n.duration=0,n.type="keyframes"}const sA=new Set(["opacity","clipPath","filter","transform"]),oA=zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lA(n){var x;const{motionValue:a,name:s,repeatDelay:o,repeatType:u,damping:p,type:d}=n;if(!(((x=a==null?void 0:a.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:f}=a.owner.getProps();return oA()&&s&&sA.has(s)&&(s!=="transform"||!f)&&!h&&!o&&u!=="mirror"&&p!==0&&d!=="inertia"}const uA=40;class cA extends Qp{constructor({autoplay:a=!0,delay:s=0,type:o="keyframes",repeat:u=0,repeatDelay:p=0,repeatType:d="loop",keyframes:m,name:h,motionValue:f,element:x,...g}){var T;super(),this.stop=()=>{var j,q;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(q=this.keyframeResolver)==null||q.cancel()},this.createdAt=He.now();const v={autoplay:a,delay:s,type:o,repeat:u,repeatDelay:p,repeatType:d,name:h,motionValue:f,element:x,...g},S=(x==null?void 0:x.KeyframeResolver)||Ip;this.keyframeResolver=new S(m,(j,q,C)=>this.onKeyframesResolved(j,q,v,!C),h,f,x),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(a,s,o,u){this.keyframeResolver=void 0;const{name:p,type:d,velocity:m,delay:h,isHandoff:f,onUpdate:x}=o;this.resolvedAt=He.now(),rA(a,p,d,m)||((li.instantAnimations||!h)&&(x==null||x(Kp(a,o,s))),a[0]=a[a.length-1],op(o),o.repeat=0);const v={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>uA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...o,keyframes:a},S=!f&&lA(v)?new iA({...v,element:v.motionValue.owner.current}):new Fp(v);S.finished.then(()=>this.notifyFinished()).catch(pn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(a,s){return this.finished.finally(a).then(()=>{})}get animation(){var a;return this._animation||((a=this.keyframeResolver)==null||a.resume(),KO()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var a;this._animation&&this.animation.cancel(),(a=this.keyframeResolver)==null||a.cancel()}}const dA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pA(n){const a=dA.exec(n);if(!a)return[,];const[,s,o,u]=a;return[`--${s??o}`,u]}function Wy(n,a,s=1){const[o,u]=pA(n);if(!o)return;const p=window.getComputedStyle(a).getPropertyValue(o);if(p){const d=p.trim();return wy(d)?parseFloat(d):d}return Hp(u)?Wy(u,a,s+1):u}function Zp(n,a){return(n==null?void 0:n[a])??(n==null?void 0:n.default)??n}const tv=new Set(["width","height","top","left","right","bottom",...Lr]),fA={test:n=>n==="auto",parse:n=>n},ev=n=>a=>a.test(n),nv=[kr,pt,qn,Vi,aO,iO,fA],a1=n=>nv.find(ev(n));function mA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ty(n):!0}const hA=new Set(["brightness","contrast","saturate","opacity"]);function gA(n){const[a,s]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[o]=s.match(Pp)||[];if(!o)return n;const u=s.replace(o,"");let p=hA.has(a)?1:0;return o!==s&&(p*=100),a+"("+p+u+")"}const xA=/\b([a-z-]*)\(.*?\)/gu,lp={...Gi,getAnimatableNone:n=>{const a=n.match(xA);return a?a.map(gA).join(" "):n}},r1={...kr,transform:Math.round},yA={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:vl,scaleX:vl,scaleY:vl,scaleZ:vl,skew:Vi,skewX:Vi,skewY:Vi,distance:pt,translateX:pt,translateY:pt,translateZ:pt,x:pt,y:pt,z:pt,perspective:pt,transformPerspective:pt,opacity:Ps,originX:K0,originY:K0,originZ:pt},Jp={borderWidth:pt,borderTopWidth:pt,borderRightWidth:pt,borderBottomWidth:pt,borderLeftWidth:pt,borderRadius:pt,radius:pt,borderTopLeftRadius:pt,borderTopRightRadius:pt,borderBottomRightRadius:pt,borderBottomLeftRadius:pt,width:pt,maxWidth:pt,height:pt,maxHeight:pt,top:pt,right:pt,bottom:pt,left:pt,padding:pt,paddingTop:pt,paddingRight:pt,paddingBottom:pt,paddingLeft:pt,margin:pt,marginTop:pt,marginRight:pt,marginBottom:pt,marginLeft:pt,backgroundPositionX:pt,backgroundPositionY:pt,...yA,zIndex:r1,fillOpacity:Ps,strokeOpacity:Ps,numOctaves:r1},vA={...Jp,color:ie,backgroundColor:ie,outlineColor:ie,fill:ie,stroke:ie,borderColor:ie,borderTopColor:ie,borderRightColor:ie,borderBottomColor:ie,borderLeftColor:ie,filter:lp,WebkitFilter:lp},iv=n=>vA[n];function av(n,a){let s=iv(n);return s!==lp&&(s=Gi),s.getAnimatableNone?s.getAnimatableNone(a):void 0}const bA=new Set(["auto","none","0"]);function wA(n,a,s){let o=0,u;for(;o<n.length&&!u;){const p=n[o];typeof p=="string"&&!bA.has(p)&&Gs(p).values.length&&(u=n[o]),o++}if(u&&s)for(const p of a)n[p]=av(s,u)}class SA extends Ip{constructor(a,s,o,u,p){super(a,s,o,u,p,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:s,name:o}=this;if(!s||!s.current)return;super.readKeyframes();for(let h=0;h<a.length;h++){let f=a[h];if(typeof f=="string"&&(f=f.trim(),Hp(f))){const x=Wy(f,s.current);x!==void 0&&(a[h]=x),h===a.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!tv.has(o)||a.length!==2)return;const[u,p]=a,d=a1(u),m=a1(p);if(d!==m)if(t1(d)&&t1(m))for(let h=0;h<a.length;h++){const f=a[h];typeof f=="string"&&(a[h]=parseFloat(f))}else ba[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:s}=this,o=[];for(let u=0;u<a.length;u++)(a[u]===null||mA(a[u]))&&o.push(u);o.length&&wA(a,o,s)}measureInitialState(){const{element:a,unresolvedKeyframes:s,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ba[o](a.measureViewportBox(),window.getComputedStyle(a.current)),s[0]=this.measuredOrigin;const u=s[s.length-1];u!==void 0&&a.getValue(o,u).jump(u,!1)}measureEndState(){var m;const{element:a,name:s,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const u=a.getValue(s);u&&u.jump(this.measuredOrigin,!1);const p=o.length-1,d=o[p];o[p]=ba[s](a.measureViewportBox(),window.getComputedStyle(a.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([h,f])=>{a.getValue(h).set(f)}),this.resolveNoneKeyframes()}}function TA(n,a,s){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const u=(s==null?void 0:s[n])??o.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}const rv=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function sv(n){return Sy(n)&&"offsetHeight"in n}const s1=30,jA=n=>!isNaN(parseFloat(n));class OA{constructor(a,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var p;const u=He.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((p=this.events.change)==null||p.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=s.owner}setCurrent(a){this.current=a,this.updatedAt=He.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=jA(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,s){this.events[a]||(this.events[a]=new Bp);const o=this.events[a].add(s);return a==="change"?()=>{o(),Gt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,s){this.passiveEffect=a,this.stopPassiveEffect=s}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,s,o){this.set(s),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,s=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var a;(a=this.events.change)==null||a.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=He.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>s1)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,s1);return jy(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(a){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=a(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var a,s;(a=this.dependents)==null||a.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Tr(n,a){return new OA(n,a)}const{schedule:$p}=Ry(queueMicrotask,!1),yn={x:!1,y:!1};function ov(){return yn.x||yn.y}function AA(n){return n==="x"||n==="y"?yn[n]?null:(yn[n]=!0,()=>{yn[n]=!1}):yn.x||yn.y?null:(yn.x=yn.y=!0,()=>{yn.x=yn.y=!1})}function lv(n,a){const s=TA(n),o=new AbortController,u={passive:!0,...a,signal:o.signal};return[s,u,()=>o.abort()]}function o1(n){return!(n.pointerType==="touch"||ov())}function NA(n,a,s={}){const[o,u,p]=lv(n,s),d=m=>{if(!o1(m))return;const{target:h}=m,f=a(h,m);if(typeof f!="function"||!h)return;const x=g=>{o1(g)&&(f(g),h.removeEventListener("pointerleave",x))};h.addEventListener("pointerleave",x,u)};return o.forEach(m=>{m.addEventListener("pointerenter",d,u)}),p}const uv=(n,a)=>a?n===a?!0:uv(n,a.parentElement):!1,Wp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,EA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function CA(n){return EA.has(n.tagName)||n.tabIndex!==-1}const jl=new WeakSet;function l1(n){return a=>{a.key==="Enter"&&n(a)}}function Nd(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const kA=(n,a)=>{const s=n.currentTarget;if(!s)return;const o=l1(()=>{if(jl.has(s))return;Nd(s,"down");const u=l1(()=>{Nd(s,"up")}),p=()=>Nd(s,"cancel");s.addEventListener("keyup",u,a),s.addEventListener("blur",p,a)});s.addEventListener("keydown",o,a),s.addEventListener("blur",()=>s.removeEventListener("keydown",o),a)};function u1(n){return Wp(n)&&!ov()}function LA(n,a,s={}){const[o,u,p]=lv(n,s),d=m=>{const h=m.currentTarget;if(!u1(m))return;jl.add(h);const f=a(h,m),x=(S,T)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),jl.has(h)&&jl.delete(h),u1(S)&&typeof f=="function"&&f(S,{success:T})},g=S=>{x(S,h===window||h===document||s.useGlobalTarget||uv(h,S.target))},v=S=>{x(S,!1)};window.addEventListener("pointerup",g,u),window.addEventListener("pointercancel",v,u)};return o.forEach(m=>{(s.useGlobalTarget?window:m).addEventListener("pointerdown",d,u),sv(m)&&(m.addEventListener("focus",f=>kA(f,u)),!CA(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),p}function cv(n){return Sy(n)&&"ownerSVGElement"in n}function MA(n){return cv(n)&&n.tagName==="svg"}const Te=n=>!!(n&&n.getVelocity),qA=[...nv,ie,Gi],DA=n=>qA.find(ev(n)),tf=A.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function c1(n,a){if(typeof n=="function")return n(a);n!=null&&(n.current=a)}function RA(...n){return a=>{let s=!1;const o=n.map(u=>{const p=c1(u,a);return!s&&typeof p=="function"&&(s=!0),p});if(s)return()=>{for(let u=0;u<o.length;u++){const p=o[u];typeof p=="function"?p():c1(n[u],null)}}}}function zA(...n){return A.useCallback(RA(...n),n)}class BA extends A.Component{getSnapshotBeforeUpdate(a){const s=this.props.childRef.current;if(s&&a.isPresent&&!this.props.isPresent){const o=s.offsetParent,u=sv(o)&&o.offsetWidth||0,p=this.props.sizeRef.current;p.height=s.offsetHeight||0,p.width=s.offsetWidth||0,p.top=s.offsetTop,p.left=s.offsetLeft,p.right=u-p.width-p.left}return null}componentDidUpdate(){}render(){return this.props.children}}function VA({children:n,isPresent:a,anchorX:s,root:o}){const u=A.useId(),p=A.useRef(null),d=A.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=A.useContext(tf),h=zA(p,n==null?void 0:n.ref);return A.useInsertionEffect(()=>{const{width:f,height:x,top:g,left:v,right:S}=d.current;if(a||!p.current||!f||!x)return;const T=s==="left"?`left: ${v}`:`right: ${S}`;p.current.dataset.motionPopId=u;const j=document.createElement("style");m&&(j.nonce=m);const q=o??document.head;return q.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${x}px !important;
            ${T}px !important;
            top: ${g}px !important;
          }
        `),()=>{q.contains(j)&&q.removeChild(j)}},[a]),b.jsx(BA,{isPresent:a,childRef:p,sizeRef:d,children:A.cloneElement(n,{ref:h})})}const _A=({children:n,initial:a,isPresent:s,onExitComplete:o,custom:u,presenceAffectsLayout:p,mode:d,anchorX:m,root:h})=>{const f=Lp(UA),x=A.useId();let g=!0,v=A.useMemo(()=>(g=!1,{id:x,initial:a,isPresent:s,custom:u,onExitComplete:S=>{f.set(S,!0);for(const T of f.values())if(!T)return;o&&o()},register:S=>(f.set(S,!1),()=>f.delete(S))}),[s,f,o]);return p&&g&&(v={...v}),A.useMemo(()=>{f.forEach((S,T)=>f.set(T,!1))},[s]),A.useEffect(()=>{!s&&!f.size&&o&&o()},[s]),d==="popLayout"&&(n=b.jsx(VA,{isPresent:s,anchorX:m,root:h,children:n})),b.jsx(Ql.Provider,{value:v,children:n})};function UA(){return new Map}function dv(n=!0){const a=A.useContext(Ql);if(a===null)return[!0,null];const{isPresent:s,onExitComplete:o,register:u}=a,p=A.useId();A.useEffect(()=>{if(n)return u(p)},[n]);const d=A.useCallback(()=>n&&o&&o(p),[p,o,n]);return!s&&o?[!1,d]:[!0]}const bl=n=>n.key||"";function d1(n){const a=[];return A.Children.forEach(n,s=>{A.isValidElement(s)&&a.push(s)}),a}const p1=({children:n,custom:a,initial:s=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:p="sync",propagate:d=!1,anchorX:m="left",root:h})=>{const[f,x]=dv(d),g=A.useMemo(()=>d1(n),[n]),v=d&&!f?[]:g.map(bl),S=A.useRef(!0),T=A.useRef(g),j=Lp(()=>new Map),[q,C]=A.useState(g),[P,U]=A.useState(g);by(()=>{S.current=!1,T.current=g;for(let Z=0;Z<P.length;Z++){const k=bl(P[Z]);v.includes(k)?j.delete(k):j.get(k)!==!0&&j.set(k,!1)}},[P,v.length,v.join("-")]);const I=[];if(g!==q){let Z=[...g];for(let k=0;k<P.length;k++){const R=P[k],at=bl(R);v.includes(at)||(Z.splice(k,0,R),I.push(R))}return p==="wait"&&I.length&&(Z=I),U(d1(Z)),C(g),null}const{forceRender:Q}=A.useContext(kp);return b.jsx(b.Fragment,{children:P.map(Z=>{const k=bl(Z),R=d&&!f?!1:g===P||v.includes(k),at=()=>{if(j.has(k))j.set(k,!0);else return;let ct=!0;j.forEach(vt=>{vt||(ct=!1)}),ct&&(Q==null||Q(),U(T.current),d&&(x==null||x()),o&&o())};return b.jsx(_A,{isPresent:R,initial:!S.current||s?void 0:!1,custom:a,presenceAffectsLayout:u,mode:p,root:h,onExitComplete:R?void 0:at,anchorX:m,children:Z},k)})})},pv=A.createContext({strict:!1}),f1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},jr={};for(const n in f1)jr[n]={isEnabled:a=>f1[n].some(s=>!!a[s])};function HA(n){for(const a in n)jr[a]={...jr[a],...n[a]}}const PA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||PA.has(n)}let fv=n=>!zl(n);function GA(n){typeof n=="function"&&(fv=a=>a.startsWith("on")?!zl(a):n(a))}try{GA(require("@emotion/is-prop-valid").default)}catch{}function YA(n,a,s){const o={};for(const u in n)u==="values"&&typeof n.values=="object"||(fv(u)||s===!0&&zl(u)||!a&&!zl(u)||n.draggable&&u.startsWith("onDrag"))&&(o[u]=n[u]);return o}const Fl=A.createContext({});function Il(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ys(n){return typeof n=="string"||Array.isArray(n)}const ef=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nf=["initial",...ef];function Zl(n){return Il(n.animate)||nf.some(a=>Ys(n[a]))}function mv(n){return!!(Zl(n)||n.variants)}function XA(n,a){if(Zl(n)){const{initial:s,animate:o}=n;return{initial:s===!1||Ys(s)?s:void 0,animate:Ys(o)?o:void 0}}return n.inherit!==!1?a:{}}function KA(n){const{initial:a,animate:s}=XA(n,A.useContext(Fl));return A.useMemo(()=>({initial:a,animate:s}),[m1(a),m1(s)])}function m1(n){return Array.isArray(n)?n.join(" "):n}const Xs={};function QA(n){for(const a in n)Xs[a]=n[a],Up(a)&&(Xs[a].isCSSVariable=!0)}function hv(n,{layout:a,layoutId:s}){return Mr.has(n)||n.startsWith("origin")||(a||s!==void 0)&&(!!Xs[n]||n==="opacity")}const FA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},IA=Lr.length;function ZA(n,a,s){let o="",u=!0;for(let p=0;p<IA;p++){const d=Lr[p],m=n[d];if(m===void 0)continue;let h=!0;if(typeof m=="number"?h=m===(d.startsWith("scale")?1:0):h=parseFloat(m)===0,!h||s){const f=rv(m,Jp[d]);if(!h){u=!1;const x=FA[d]||d;o+=`${x}(${f}) `}s&&(a[d]=f)}}return o=o.trim(),s?o=s(a,u?"":o):u&&(o="none"),o}function af(n,a,s){const{style:o,vars:u,transformOrigin:p}=n;let d=!1,m=!1;for(const h in a){const f=a[h];if(Mr.has(h)){d=!0;continue}else if(Up(h)){u[h]=f;continue}else{const x=rv(f,Jp[h]);h.startsWith("origin")?(m=!0,p[h]=x):o[h]=x}}if(a.transform||(d||s?o.transform=ZA(a,n.transform,s):o.transform&&(o.transform="none")),m){const{originX:h="50%",originY:f="50%",originZ:x=0}=p;o.transformOrigin=`${h} ${f} ${x}`}}const rf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function gv(n,a,s){for(const o in a)!Te(a[o])&&!hv(o,s)&&(n[o]=a[o])}function JA({transformTemplate:n},a){return A.useMemo(()=>{const s=rf();return af(s,a,n),Object.assign({},s.vars,s.style)},[a])}function $A(n,a){const s=n.style||{},o={};return gv(o,s,n),Object.assign(o,JA(n,a)),o}function WA(n,a){const s={},o=$A(n,a);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=o,s}const t4={offset:"stroke-dashoffset",array:"stroke-dasharray"},e4={offset:"strokeDashoffset",array:"strokeDasharray"};function n4(n,a,s=1,o=0,u=!0){n.pathLength=1;const p=u?t4:e4;n[p.offset]=pt.transform(-o);const d=pt.transform(a),m=pt.transform(s);n[p.array]=`${d} ${m}`}function xv(n,{attrX:a,attrY:s,attrScale:o,pathLength:u,pathSpacing:p=1,pathOffset:d=0,...m},h,f,x){if(af(n,m,f),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:v}=n;g.transform&&(v.transform=g.transform,delete g.transform),(v.transform||g.transformOrigin)&&(v.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),v.transform&&(v.transformBox=(x==null?void 0:x.transformBox)??"fill-box",delete g.transformBox),a!==void 0&&(g.x=a),s!==void 0&&(g.y=s),o!==void 0&&(g.scale=o),u!==void 0&&n4(g,u,p,d,!1)}const yv=()=>({...rf(),attrs:{}}),vv=n=>typeof n=="string"&&n.toLowerCase()==="svg";function i4(n,a,s,o){const u=A.useMemo(()=>{const p=yv();return xv(p,a,vv(o),n.transformTemplate,n.style),{...p.attrs,style:{...p.style}}},[a]);if(n.style){const p={};gv(p,n.style,n),u.style={...p,...u.style}}return u}const a4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sf(n){return typeof n!="string"||n.includes("-")?!1:!!(a4.indexOf(n)>-1||/[A-Z]/u.test(n))}function r4(n,a,s,{latestValues:o},u,p=!1){const m=(sf(n)?i4:WA)(a,o,u,n),h=YA(a,typeof n=="string",p),f=n!==A.Fragment?{...h,...m,ref:s}:{},{children:x}=a,g=A.useMemo(()=>Te(x)?x.get():x,[x]);return A.createElement(n,{...f,children:g})}function h1(n){const a=[{},{}];return n==null||n.values.forEach((s,o)=>{a[0][o]=s.get(),a[1][o]=s.getVelocity()}),a}function of(n,a,s,o){if(typeof a=="function"){const[u,p]=h1(o);a=a(s!==void 0?s:n.custom,u,p)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[u,p]=h1(o);a=a(s!==void 0?s:n.custom,u,p)}return a}function Ol(n){return Te(n)?n.get():n}function s4({scrapeMotionValuesFromProps:n,createRenderState:a},s,o,u){return{latestValues:o4(s,o,u,n),renderState:a()}}function o4(n,a,s,o){const u={},p=o(n,{});for(const v in p)u[v]=Ol(p[v]);let{initial:d,animate:m}=n;const h=Zl(n),f=mv(n);a&&f&&!h&&n.inherit!==!1&&(d===void 0&&(d=a.initial),m===void 0&&(m=a.animate));let x=s?s.initial===!1:!1;x=x||d===!1;const g=x?m:d;if(g&&typeof g!="boolean"&&!Il(g)){const v=Array.isArray(g)?g:[g];for(let S=0;S<v.length;S++){const T=of(n,v[S]);if(T){const{transitionEnd:j,transition:q,...C}=T;for(const P in C){let U=C[P];if(Array.isArray(U)){const I=x?U.length-1:0;U=U[I]}U!==null&&(u[P]=U)}for(const P in j)u[P]=j[P]}}}return u}const bv=n=>(a,s)=>{const o=A.useContext(Fl),u=A.useContext(Ql),p=()=>s4(n,a,o,u);return s?p():Lp(p)};function lf(n,a,s){var p;const{style:o}=n,u={};for(const d in o)(Te(o[d])||a.style&&Te(a.style[d])||hv(d,n)||((p=s==null?void 0:s.getValue(d))==null?void 0:p.liveStyle)!==void 0)&&(u[d]=o[d]);return u}const l4=bv({scrapeMotionValuesFromProps:lf,createRenderState:rf});function wv(n,a,s){const o=lf(n,a,s);for(const u in n)if(Te(n[u])||Te(a[u])){const p=Lr.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[p]=n[u]}return o}const u4=bv({scrapeMotionValuesFromProps:wv,createRenderState:yv}),c4=Symbol.for("motionComponentSymbol");function hr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function d4(n,a,s){return A.useCallback(o=>{o&&n.onMount&&n.onMount(o),a&&(o?a.mount(o):a.unmount()),s&&(typeof s=="function"?s(o):hr(s)&&(s.current=o))},[a])}const uf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),p4="framerAppearId",Sv="data-"+uf(p4),Tv=A.createContext({});function f4(n,a,s,o,u){var j,q;const{visualElement:p}=A.useContext(Fl),d=A.useContext(pv),m=A.useContext(Ql),h=A.useContext(tf).reducedMotion,f=A.useRef(null);o=o||d.renderer,!f.current&&o&&(f.current=o(n,{visualState:a,parent:p,props:s,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:h}));const x=f.current,g=A.useContext(Tv);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&m4(f.current,s,u,g);const v=A.useRef(!1);A.useInsertionEffect(()=>{x&&v.current&&x.update(s,m)});const S=s[Sv],T=A.useRef(!!S&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,S))&&((q=window.MotionHasOptimisedAnimation)==null?void 0:q.call(window,S)));return by(()=>{x&&(v.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),T.current&&x.animationState&&x.animationState.animateChanges())}),A.useEffect(()=>{x&&(!T.current&&x.animationState&&x.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,S)}),T.current=!1),x.enteringChildren=void 0)}),x}function m4(n,a,s,o){const{layoutId:u,layout:p,drag:d,dragConstraints:m,layoutScroll:h,layoutRoot:f,layoutCrossfade:x}=a;n.projection=new s(n.latestValues,a["data-framer-portal-id"]?void 0:jv(n.parent)),n.projection.setOptions({layoutId:u,layout:p,alwaysMeasureLayout:!!d||m&&hr(m),visualElement:n,animationType:typeof p=="string"?p:"both",initialPromotionConfig:o,crossfade:x,layoutScroll:h,layoutRoot:f})}function jv(n){if(n)return n.options.allowProjection!==!1?n.projection:jv(n.parent)}function Ed(n,{forwardMotionProps:a=!1}={},s,o){s&&HA(s);const u=sf(n)?u4:l4;function p(m,h){let f;const x={...A.useContext(tf),...m,layoutId:h4(m)},{isStatic:g}=x,v=KA(m),S=u(m,g);if(!g&&Mp){g4();const T=x4(x);f=T.MeasureLayout,v.visualElement=f4(n,S,x,o,T.ProjectionNode)}return b.jsxs(Fl.Provider,{value:v,children:[f&&v.visualElement?b.jsx(f,{visualElement:v.visualElement,...x}):null,r4(n,m,d4(S,v.visualElement,h),S,g,a)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=A.forwardRef(p);return d[c4]=n,d}function h4({layoutId:n}){const a=A.useContext(kp).id;return a&&n!==void 0?a+"-"+n:n}function g4(n,a){A.useContext(pv).strict}function x4(n){const{drag:a,layout:s}=jr;if(!a&&!s)return{};const o={...a,...s};return{MeasureLayout:a!=null&&a.isEnabled(n)||s!=null&&s.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function y4(n,a){if(typeof Proxy>"u")return Ed;const s=new Map,o=(p,d)=>Ed(p,d,n,a),u=(p,d)=>o(p,d);return new Proxy(u,{get:(p,d)=>d==="create"?o:(s.has(d)||s.set(d,Ed(d,void 0,n,a)),s.get(d))})}function Ov({top:n,left:a,right:s,bottom:o}){return{x:{min:a,max:s},y:{min:n,max:o}}}function v4({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function b4(n,a){if(!a)return n;const s=a({x:n.left,y:n.top}),o=a({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:o.y,right:o.x}}function Cd(n){return n===void 0||n===1}function up({scale:n,scaleX:a,scaleY:s}){return!Cd(n)||!Cd(a)||!Cd(s)}function xa(n){return up(n)||Av(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Av(n){return g1(n.x)||g1(n.y)}function g1(n){return n&&n!=="0%"}function Bl(n,a,s){const o=n-s,u=a*o;return s+u}function x1(n,a,s,o,u){return u!==void 0&&(n=Bl(n,u,o)),Bl(n,s,o)+a}function cp(n,a=0,s=1,o,u){n.min=x1(n.min,a,s,o,u),n.max=x1(n.max,a,s,o,u)}function Nv(n,{x:a,y:s}){cp(n.x,a.translate,a.scale,a.originPoint),cp(n.y,s.translate,s.scale,s.originPoint)}const y1=.999999999999,v1=1.0000000000001;function w4(n,a,s,o=!1){const u=s.length;if(!u)return;a.x=a.y=1;let p,d;for(let m=0;m<u;m++){p=s[m],d=p.projectionDelta;const{visualElement:h}=p.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&p.options.layoutScroll&&p.scroll&&p!==p.root&&xr(n,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),d&&(a.x*=d.x.scale,a.y*=d.y.scale,Nv(n,d)),o&&xa(p.latestValues)&&xr(n,p.latestValues))}a.x<v1&&a.x>y1&&(a.x=1),a.y<v1&&a.y>y1&&(a.y=1)}function gr(n,a){n.min=n.min+a,n.max=n.max+a}function b1(n,a,s,o,u=.5){const p=Xt(n.min,n.max,u);cp(n,a,s,p,o)}function xr(n,a){b1(n.x,a.x,a.scaleX,a.scale,a.originX),b1(n.y,a.y,a.scaleY,a.scale,a.originY)}function Ev(n,a){return Ov(b4(n.getBoundingClientRect(),a))}function S4(n,a,s){const o=Ev(n,s),{scroll:u}=a;return u&&(gr(o.x,u.offset.x),gr(o.y,u.offset.y)),o}const w1=()=>({translate:0,scale:1,origin:0,originPoint:0}),yr=()=>({x:w1(),y:w1()}),S1=()=>({min:0,max:0}),Jt=()=>({x:S1(),y:S1()}),dp={current:null},Cv={current:!1};function T4(){if(Cv.current=!0,!!Mp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>dp.current=n.matches;n.addEventListener("change",a),a()}else dp.current=!1}const j4=new WeakMap;function O4(n,a,s){for(const o in a){const u=a[o],p=s[o];if(Te(u))n.addValue(o,u);else if(Te(p))n.addValue(o,Tr(u,{owner:n}));else if(p!==u)if(n.hasValue(o)){const d=n.getValue(o);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(o);n.addValue(o,Tr(d!==void 0?d:u,{owner:n}))}}for(const o in s)a[o]===void 0&&n.removeValue(o);return a}const T1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class A4{scrapeMotionValuesFromProps(a,s,o){return{}}constructor({parent:a,props:s,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:p,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ip,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=He.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Gt.render(this.render,!1,!0))};const{latestValues:h,renderState:f}=d;this.latestValues=h,this.baseTarget={...h},this.initialValues=s.initial?{...h}:{},this.renderState=f,this.parent=a,this.props=s,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!p,this.isControllingVariants=Zl(s),this.isVariantNode=mv(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:x,...g}=this.scrapeMotionValuesFromProps(s,{},this);for(const v in g){const S=g[v];h[v]!==void 0&&Te(S)&&S.set(h[v])}}mount(a){var s;this.current=a,j4.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,u)=>this.bindToMotionValue(u,o)),Cv.current||T4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:dp.current,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var a;this.projection&&this.projection.unmount(),Pi(this.notifyUpdate),Pi(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(a=this.parent)==null||a.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const o=this.features[s];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,s){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Mr.has(a);o&&this.onBindTransform&&this.onBindTransform();const u=s.on("change",d=>{this.latestValues[a]=d,this.props.onUpdate&&Gt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let p;window.MotionCheckAppearSync&&(p=window.MotionCheckAppearSync(this,a,s)),this.valueSubscriptions.set(a,()=>{u(),p&&p(),s.owner&&s.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in jr){const s=jr[a];if(!s)continue;const{isEnabled:o,Feature:u}=s;if(!this.features[a]&&u&&o(this.props)&&(this.features[a]=new u(this)),this.features[a]){const p=this.features[a];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,s){this.latestValues[a]=s}update(a,s){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let o=0;o<T1.length;o++){const u=T1[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const p="on"+u,d=a[p];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=O4(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(a),()=>s.variantChildren.delete(a)}addValue(a,s){const o=this.values.get(a);s!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,s),this.values.set(a,s),this.latestValues[a]=s.get())}removeValue(a){this.values.delete(a);const s=this.valueSubscriptions.get(a);s&&(s(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,s){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&s!==void 0&&(o=Tr(s===null?void 0:s,{owner:this}),this.addValue(a,o)),o}readValue(a,s){let o=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return o!=null&&(typeof o=="string"&&(wy(o)||Ty(o))?o=parseFloat(o):!DA(o)&&Gi.test(s)&&(o=av(a,s)),this.setBaseTarget(a,Te(o)?o.get():o)),Te(o)?o.get():o}setBaseTarget(a,s){this.baseTarget[a]=s}getBaseTarget(a){var p;const{initial:s}=this.props;let o;if(typeof s=="string"||typeof s=="object"){const d=of(this.props,s,(p=this.presenceContext)==null?void 0:p.custom);d&&(o=d[a])}if(s&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!Te(u)?u:this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]}on(a,s){return this.events[a]||(this.events[a]=new Bp),this.events[a].add(s)}notify(a,...s){this.events[a]&&this.events[a].notify(...s)}scheduleRenderMicrotask(){$p.render(this.render)}}class kv extends A4{constructor(){super(...arguments),this.KeyframeResolver=SA}sortInstanceNodePosition(a,s){return a.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(a,s){return a.style?a.style[s]:void 0}removeValueFromRenderState(a,{vars:s,style:o}){delete s[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;Te(a)&&(this.childSubscription=a.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function Lv(n,{style:a,vars:s},o,u){const p=n.style;let d;for(d in a)p[d]=a[d];u==null||u.applyProjectionStyles(p,o);for(d in s)p.setProperty(d,s[d])}function N4(n){return window.getComputedStyle(n)}class E4 extends kv{constructor(){super(...arguments),this.type="html",this.renderInstance=Lv}readValueFromInstance(a,s){var o;if(Mr.has(s))return(o=this.projection)!=null&&o.isProjecting?np(s):HO(a,s);{const u=N4(a),p=(Up(s)?u.getPropertyValue(s):u[s])||0;return typeof p=="string"?p.trim():p}}measureInstanceViewportBox(a,{transformPagePoint:s}){return Ev(a,s)}build(a,s,o){af(a,s,o.transformTemplate)}scrapeMotionValuesFromProps(a,s,o){return lf(a,s,o)}}const Mv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function C4(n,a,s,o){Lv(n,a,void 0,o);for(const u in a.attrs)n.setAttribute(Mv.has(u)?u:uf(u),a.attrs[u])}class k4 extends kv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Jt}getBaseTargetFromProps(a,s){return a[s]}readValueFromInstance(a,s){if(Mr.has(s)){const o=iv(s);return o&&o.default||0}return s=Mv.has(s)?s:uf(s),a.getAttribute(s)}scrapeMotionValuesFromProps(a,s,o){return wv(a,s,o)}build(a,s,o){xv(a,s,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(a,s,o,u){C4(a,s,o,u)}mount(a){this.isSVGTag=vv(a.tagName),super.mount(a)}}const L4=(n,a)=>sf(n)?new k4(a):new E4(a,{allowProjection:n!==A.Fragment});function br(n,a,s){const o=n.getProps();return of(o,a,s!==void 0?s:o.custom,n)}const pp=n=>Array.isArray(n);function M4(n,a,s){n.hasValue(a)?n.getValue(a).set(s):n.addValue(a,Tr(s))}function q4(n){return pp(n)?n[n.length-1]||0:n}function D4(n,a){const s=br(n,a);let{transitionEnd:o={},transition:u={},...p}=s||{};p={...p,...o};for(const d in p){const m=q4(p[d]);M4(n,d,m)}}function R4(n){return!!(Te(n)&&n.add)}function fp(n,a){const s=n.getValue("willChange");if(R4(s))return s.add(a);if(!s&&li.WillChange){const o=new li.WillChange("auto");n.addValue("willChange",o),o.add(a)}}function qv(n){return n.props[Sv]}const z4=n=>n!==null;function B4(n,{repeat:a,repeatType:s="loop"},o){const u=n.filter(z4),p=a&&s!=="loop"&&a%2===1?0:u.length-1;return u[p]}const V4={type:"spring",stiffness:500,damping:25,restSpeed:10},_4=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),U4={type:"keyframes",duration:.8},H4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},P4=(n,{keyframes:a})=>a.length>2?U4:Mr.has(n)?n.startsWith("scale")?_4(a[1]):V4:H4;function G4({when:n,delay:a,delayChildren:s,staggerChildren:o,staggerDirection:u,repeat:p,repeatType:d,repeatDelay:m,from:h,elapsed:f,...x}){return!!Object.keys(x).length}const cf=(n,a,s,o={},u,p)=>d=>{const m=Zp(o,n)||{},h=m.delay||o.delay||0;let{elapsed:f=0}=o;f=f-Mn(h);const x={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-f,onUpdate:v=>{a.set(v),m.onUpdate&&m.onUpdate(v)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:a,element:p?void 0:u};G4(m)||Object.assign(x,P4(n,x)),x.duration&&(x.duration=Mn(x.duration)),x.repeatDelay&&(x.repeatDelay=Mn(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let g=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(op(x),x.delay===0&&(g=!0)),(li.instantAnimations||li.skipAnimations)&&(g=!0,op(x),x.delay=0),x.allowFlatten=!m.type&&!m.ease,g&&!p&&a.get()!==void 0){const v=B4(x.keyframes,m);if(v!==void 0){Gt.update(()=>{x.onUpdate(v),x.onComplete()});return}}return m.isSync?new Fp(x):new cA(x)};function Y4({protectedKeys:n,needsAnimating:a},s){const o=n.hasOwnProperty(s)&&a[s]!==!0;return a[s]=!1,o}function Dv(n,a,{delay:s=0,transitionOverride:o,type:u}={}){let{transition:p=n.getDefaultTransition(),transitionEnd:d,...m}=a;o&&(p=o);const h=[],f=u&&n.animationState&&n.animationState.getState()[u];for(const x in m){const g=n.getValue(x,n.latestValues[x]??null),v=m[x];if(v===void 0||f&&Y4(f,x))continue;const S={delay:s,...Zp(p||{},x)},T=g.get();if(T!==void 0&&!g.isAnimating&&!Array.isArray(v)&&v===T&&!S.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const C=qv(n);if(C){const P=window.MotionHandoffAnimation(C,x,Gt);P!==null&&(S.startTime=P,j=!0)}}fp(n,x),g.start(cf(x,g,v,n.shouldReduceMotion&&tv.has(x)?{type:!1}:S,n,j));const q=g.animation;q&&h.push(q)}return d&&Promise.all(h).then(()=>{Gt.update(()=>{d&&D4(n,d)})}),h}function Rv(n,a,s,o=0,u=1){const p=Array.from(n).sort((f,x)=>f.sortNodePosition(x)).indexOf(a),d=n.size,m=(d-1)*o;return typeof s=="function"?s(p,d):u===1?p*o:m-p*o}function mp(n,a,s={}){var h;const o=br(n,a,s.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=o||{};s.transitionOverride&&(u=s.transitionOverride);const p=o?()=>Promise.all(Dv(n,o,s)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:x=0,staggerChildren:g,staggerDirection:v}=u;return X4(n,a,f,x,g,v,s)}:()=>Promise.resolve(),{when:m}=u;if(m){const[f,x]=m==="beforeChildren"?[p,d]:[d,p];return f().then(()=>x())}else return Promise.all([p(),d(s.delay)])}function X4(n,a,s=0,o=0,u=0,p=1,d){const m=[];for(const h of n.variantChildren)h.notify("AnimationStart",a),m.push(mp(h,a,{...d,delay:s+(typeof o=="function"?0:o)+Rv(n.variantChildren,h,o,u,p)}).then(()=>h.notify("AnimationComplete",a)));return Promise.all(m)}function K4(n,a,s={}){n.notify("AnimationStart",a);let o;if(Array.isArray(a)){const u=a.map(p=>mp(n,p,s));o=Promise.all(u)}else if(typeof a=="string")o=mp(n,a,s);else{const u=typeof a=="function"?br(n,a,s.custom):a;o=Promise.all(Dv(n,u,s))}return o.then(()=>{n.notify("AnimationComplete",a)})}function zv(n,a){if(!Array.isArray(a))return!1;const s=a.length;if(s!==n.length)return!1;for(let o=0;o<s;o++)if(a[o]!==n[o])return!1;return!0}const Q4=nf.length;function Bv(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Bv(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const a={};for(let s=0;s<Q4;s++){const o=nf[s],u=n.props[o];(Ys(u)||u===!1)&&(a[o]=u)}return a}const F4=[...ef].reverse(),I4=ef.length;function Z4(n){return a=>Promise.all(a.map(({animation:s,options:o})=>K4(n,s,o)))}function J4(n){let a=Z4(n),s=j1(),o=!0;const u=h=>(f,x)=>{var v;const g=br(n,x,h==="exit"?(v=n.presenceContext)==null?void 0:v.custom:void 0);if(g){const{transition:S,transitionEnd:T,...j}=g;f={...f,...j,...T}}return f};function p(h){a=h(n)}function d(h){const{props:f}=n,x=Bv(n.parent)||{},g=[],v=new Set;let S={},T=1/0;for(let q=0;q<I4;q++){const C=F4[q],P=s[C],U=f[C]!==void 0?f[C]:x[C],I=Ys(U),Q=C===h?P.isActive:null;Q===!1&&(T=q);let Z=U===x[C]&&U!==f[C]&&I;if(Z&&o&&n.manuallyAnimateOnMount&&(Z=!1),P.protectedKeys={...S},!P.isActive&&Q===null||!U&&!P.prevProp||Il(U)||typeof U=="boolean")continue;const k=$4(P.prevProp,U);let R=k||C===h&&P.isActive&&!Z&&I||q>T&&I,at=!1;const ct=Array.isArray(U)?U:[U];let vt=ct.reduce(u(C),{});Q===!1&&(vt={});const{prevResolvedValues:ht={}}=P,xt={...ht,...vt},yt=H=>{R=!0,v.has(H)&&(at=!0,v.delete(H)),P.needsAnimating[H]=!0;const B=n.getValue(H);B&&(B.liveStyle=!1)};for(const H in xt){const B=vt[H],et=ht[H];if(S.hasOwnProperty(H))continue;let st=!1;pp(B)&&pp(et)?st=!zv(B,et):st=B!==et,st?B!=null?yt(H):v.add(H):B!==void 0&&v.has(H)?yt(H):P.protectedKeys[H]=!0}P.prevProp=U,P.prevResolvedValues=vt,P.isActive&&(S={...S,...vt}),o&&n.blockInitialAnimation&&(R=!1);const wt=Z&&k;R&&(!wt||at)&&g.push(...ct.map(H=>{const B={type:C};if(typeof H=="string"&&o&&!wt&&n.manuallyAnimateOnMount&&n.parent){const{parent:et}=n,st=br(et,H);if(et.enteringChildren&&st){const{delayChildren:N}=st.transition||{};B.delay=Rv(et.enteringChildren,n,N)}}return{animation:H,options:B}}))}if(v.size){const q={};if(typeof f.initial!="boolean"){const C=br(n,Array.isArray(f.initial)?f.initial[0]:f.initial);C&&C.transition&&(q.transition=C.transition)}v.forEach(C=>{const P=n.getBaseTarget(C),U=n.getValue(C);U&&(U.liveStyle=!0),q[C]=P??null}),g.push({animation:q})}let j=!!g.length;return o&&(f.initial===!1||f.initial===f.animate)&&!n.manuallyAnimateOnMount&&(j=!1),o=!1,j?a(g):Promise.resolve()}function m(h,f){var g;if(s[h].isActive===f)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(v=>{var S;return(S=v.animationState)==null?void 0:S.setActive(h,f)}),s[h].isActive=f;const x=d(h);for(const v in s)s[v].protectedKeys={};return x}return{animateChanges:d,setActive:m,setAnimateFunction:p,getState:()=>s,reset:()=>{s=j1(),o=!0}}}function $4(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!zv(a,n):!1}function ga(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function j1(){return{animate:ga(!0),whileInView:ga(),whileHover:ga(),whileTap:ga(),whileDrag:ga(),whileFocus:ga(),exit:ga()}}class Yi{constructor(a){this.isMounted=!1,this.node=a}update(){}}class W4 extends Yi{constructor(a){super(a),a.animationState||(a.animationState=J4(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();Il(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:s}=this.node.prevProps||{};a!==s&&this.updateAnimationControlsSubscription()}unmount(){var a;this.node.animationState.reset(),(a=this.unmountControls)==null||a.call(this)}}let t5=0;class e5 extends Yi{constructor(){super(...arguments),this.id=t5++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:s}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const u=this.node.animationState.setActive("exit",!a);s&&!a&&u.then(()=>{s(this.id)})}mount(){const{register:a,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const n5={animation:{Feature:W4},exit:{Feature:e5}};function Ks(n,a,s,o={passive:!0}){return n.addEventListener(a,s,o),()=>n.removeEventListener(a,s)}function Js(n){return{point:{x:n.pageX,y:n.pageY}}}const i5=n=>a=>Wp(a)&&n(a,Js(a));function Rs(n,a,s,o){return Ks(n,a,i5(s),o)}const Vv=1e-4,a5=1-Vv,r5=1+Vv,_v=.01,s5=0-_v,o5=0+_v;function Ee(n){return n.max-n.min}function l5(n,a,s){return Math.abs(n-a)<=s}function O1(n,a,s,o=.5){n.origin=o,n.originPoint=Xt(a.min,a.max,n.origin),n.scale=Ee(s)/Ee(a),n.translate=Xt(s.min,s.max,n.origin)-n.originPoint,(n.scale>=a5&&n.scale<=r5||isNaN(n.scale))&&(n.scale=1),(n.translate>=s5&&n.translate<=o5||isNaN(n.translate))&&(n.translate=0)}function zs(n,a,s,o){O1(n.x,a.x,s.x,o?o.originX:void 0),O1(n.y,a.y,s.y,o?o.originY:void 0)}function A1(n,a,s){n.min=s.min+a.min,n.max=n.min+Ee(a)}function u5(n,a,s){A1(n.x,a.x,s.x),A1(n.y,a.y,s.y)}function N1(n,a,s){n.min=a.min-s.min,n.max=n.min+Ee(a)}function Bs(n,a,s){N1(n.x,a.x,s.x),N1(n.y,a.y,s.y)}function cn(n){return[n("x"),n("y")]}const Uv=({current:n})=>n?n.ownerDocument.defaultView:null,E1=(n,a)=>Math.abs(n-a);function c5(n,a){const s=E1(n.x,a.x),o=E1(n.y,a.y);return Math.sqrt(s**2+o**2)}class Hv{constructor(a,s,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:p=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Ld(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,T=c5(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!T)return;const{point:j}=v,{timestamp:q}=ye;this.history.push({...j,timestamp:q});const{onStart:C,onMove:P}=this.handlers;S||(C&&C(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=kd(S,this.transformPagePoint),Gt.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:T,onSessionEnd:j,resumeAnimation:q}=this.handlers;if(this.dragSnapToOrigin&&q&&q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Ld(v.type==="pointercancel"?this.lastMoveEventInfo:kd(S,this.transformPagePoint),this.history);this.startEvent&&T&&T(v,C),j&&j(v,C)},!Wp(a))return;this.dragSnapToOrigin=p,this.handlers=s,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=u||window;const m=Js(a),h=kd(m,this.transformPagePoint),{point:f}=h,{timestamp:x}=ye;this.history=[{...f,timestamp:x}];const{onSessionStart:g}=s;g&&g(a,Ld(h,this.history)),this.removeListeners=Fs(Rs(this.contextWindow,"pointermove",this.handlePointerMove),Rs(this.contextWindow,"pointerup",this.handlePointerUp),Rs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),Pi(this.updatePoint)}}function kd(n,a){return a?{point:a(n.point)}:n}function C1(n,a){return{x:n.x-a.x,y:n.y-a.y}}function Ld({point:n},a){return{point:n,delta:C1(n,Pv(a)),offset:C1(n,d5(a)),velocity:p5(a,.1)}}function d5(n){return n[0]}function Pv(n){return n[n.length-1]}function p5(n,a){if(n.length<2)return{x:0,y:0};let s=n.length-1,o=null;const u=Pv(n);for(;s>=0&&(o=n[s],!(u.timestamp-o.timestamp>Mn(a)));)s--;if(!o)return{x:0,y:0};const p=dn(u.timestamp-o.timestamp);if(p===0)return{x:0,y:0};const d={x:(u.x-o.x)/p,y:(u.y-o.y)/p};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function f5(n,{min:a,max:s},o){return a!==void 0&&n<a?n=o?Xt(a,n,o.min):Math.max(n,a):s!==void 0&&n>s&&(n=o?Xt(s,n,o.max):Math.min(n,s)),n}function k1(n,a,s){return{min:a!==void 0?n.min+a:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function m5(n,{top:a,left:s,bottom:o,right:u}){return{x:k1(n.x,s,u),y:k1(n.y,a,o)}}function L1(n,a){let s=a.min-n.min,o=a.max-n.max;return a.max-a.min<n.max-n.min&&([s,o]=[o,s]),{min:s,max:o}}function h5(n,a){return{x:L1(n.x,a.x),y:L1(n.y,a.y)}}function g5(n,a){let s=.5;const o=Ee(n),u=Ee(a);return u>o?s=Hs(a.min,a.max-o,n.min):o>u&&(s=Hs(n.min,n.max-u,a.min)),oi(0,1,s)}function x5(n,a){const s={};return a.min!==void 0&&(s.min=a.min-n.min),a.max!==void 0&&(s.max=a.max-n.min),s}const hp=.35;function y5(n=hp){return n===!1?n=0:n===!0&&(n=hp),{x:M1(n,"left","right"),y:M1(n,"top","bottom")}}function M1(n,a,s){return{min:q1(n,a),max:q1(n,s)}}function q1(n,a){return typeof n=="number"?n:n[a]||0}const v5=new WeakMap;class b5{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:s=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const p=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(Js(g).point)},d=(g,v)=>{const{drag:S,dragPropagation:T,onDragStart:j}=this.getProps();if(S&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=AA(S),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),cn(C=>{let P=this.getAxisMotionValue(C).get()||0;if(qn.test(P)){const{projection:U}=this.visualElement;if(U&&U.layout){const I=U.layout.layoutBox[C];I&&(P=Ee(I)*(parseFloat(P)/100))}}this.originPoint[C]=P}),j&&Gt.postRender(()=>j(g,v)),fp(this.visualElement,"transform");const{animationState:q}=this.visualElement;q&&q.setActive("whileDrag",!0)},m=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:T,onDirectionLock:j,onDrag:q}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:C}=v;if(T&&this.currentDirection===null){this.currentDirection=w5(C),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",v.point,C),this.updateAxis("y",v.point,C),this.visualElement.render(),q&&q(g,v)},h=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v,this.stop(g,v),this.latestPointerEvent=null,this.latestPanInfo=null},f=()=>cn(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)==null?void 0:v.play())}),{dragSnapToOrigin:x}=this.getProps();this.panSession=new Hv(a,{onSessionStart:p,onStart:d,onMove:m,onSessionEnd:h,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:Uv(this.visualElement)})}stop(a,s){const o=a||this.latestPointerEvent,u=s||this.latestPanInfo,p=this.isDragging;if(this.cancel(),!p||!u||!o)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:m}=this.getProps();m&&Gt.postRender(()=>m(o,u))}cancel(){this.isDragging=!1;const{projection:a,animationState:s}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(a,s,o){const{drag:u}=this.getProps();if(!o||!wl(a,u,this.currentDirection))return;const p=this.getAxisMotionValue(a);let d=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(d=f5(d,this.constraints[a],this.elastic[a])),p.set(d)}resolveConstraints(){var p;const{dragConstraints:a,dragElastic:s}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(p=this.visualElement.projection)==null?void 0:p.layout,u=this.constraints;a&&hr(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=m5(o.layoutBox,a):this.constraints=!1,this.elastic=y5(s),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&cn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=x5(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:s}=this.getProps();if(!a||!hr(a))return!1;const o=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const p=S4(o,u.root,this.visualElement.getTransformPagePoint());let d=h5(u.layout.layoutBox,p);if(s){const m=s(v4(d));this.hasMutatedConstraints=!!m,m&&(d=Ov(m))}return d}startAnimation(a){const{drag:s,dragMomentum:o,dragElastic:u,dragTransition:p,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},f=cn(x=>{if(!wl(x,s,this.currentDirection))return;let g=h&&h[x]||{};d&&(g={min:0,max:0});const v=u?200:1e6,S=u?40:1e7,T={type:"inertia",velocity:o?a[x]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...p,...g};return this.startAxisValueAnimation(x,T)});return Promise.all(f).then(m)}startAxisValueAnimation(a,s){const o=this.getAxisMotionValue(a);return fp(this.visualElement,a),o.start(cf(a,o,0,s,this.visualElement,!1))}stopAnimation(){cn(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){cn(a=>{var s;return(s=this.getAxisMotionValue(a).animation)==null?void 0:s.pause()})}getAnimationState(a){var s;return(s=this.getAxisMotionValue(a).animation)==null?void 0:s.state}getAxisMotionValue(a){const s=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps(),u=o[s];return u||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){cn(s=>{const{drag:o}=this.getProps();if(!wl(s,o,this.currentDirection))return;const{projection:u}=this.visualElement,p=this.getAxisMotionValue(s);if(u&&u.layout){const{min:d,max:m}=u.layout.layoutBox[s];p.set(a[s]-Xt(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:s}=this.getProps(),{projection:o}=this.visualElement;if(!hr(s)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};cn(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const h=m.get();u[d]=g5({min:h,max:h},this.constraints[d])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),cn(d=>{if(!wl(d,a,null))return;const m=this.getAxisMotionValue(d),{min:h,max:f}=this.constraints[d];m.set(Xt(h,f,u[d]))})}addListeners(){if(!this.visualElement.current)return;v5.set(this.visualElement,this);const a=this.visualElement.current,s=Rs(a,"pointerdown",h=>{const{drag:f,dragListener:x=!0}=this.getProps();f&&x&&this.start(h)}),o=()=>{const{dragConstraints:h}=this.getProps();hr(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,p=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Gt.read(o);const d=Ks(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:f})=>{this.isDragging&&f&&(cn(x=>{const g=this.getAxisMotionValue(x);g&&(this.originPoint[x]+=h[x].translate,g.set(g.get()+h[x].translate))}),this.visualElement.render())}));return()=>{d(),s(),p(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:p=!1,dragElastic:d=hp,dragMomentum:m=!0}=a;return{...a,drag:s,dragDirectionLock:o,dragPropagation:u,dragConstraints:p,dragElastic:d,dragMomentum:m}}}function wl(n,a,s){return(a===!0||a===n)&&(s===null||s===n)}function w5(n,a=10){let s=null;return Math.abs(n.y)>a?s="y":Math.abs(n.x)>a&&(s="x"),s}class S5 extends Yi{constructor(a){super(a),this.removeGroupControls=pn,this.removeListeners=pn,this.controls=new b5(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pn}unmount(){this.removeGroupControls(),this.removeListeners()}}const D1=n=>(a,s)=>{n&&Gt.postRender(()=>n(a,s))};class T5 extends Yi{constructor(){super(...arguments),this.removePointerDownListener=pn}onPointerDown(a){this.session=new Hv(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Uv(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:s,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:D1(a),onStart:D1(s),onMove:o,onEnd:(p,d)=>{delete this.session,u&&Gt.postRender(()=>u(p,d))}}}mount(){this.removePointerDownListener=Rs(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Al={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function R1(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const ks={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(pt.test(n))n=parseFloat(n);else return n;const s=R1(n,a.target.x),o=R1(n,a.target.y);return`${s}% ${o}%`}},j5={correct:(n,{treeScale:a,projectionDelta:s})=>{const o=n,u=Gi.parse(n);if(u.length>5)return o;const p=Gi.createTransformer(n),d=typeof u[0]!="number"?1:0,m=s.x.scale*a.x,h=s.y.scale*a.y;u[0+d]/=m,u[1+d]/=h;const f=Xt(m,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=f),typeof u[3+d]=="number"&&(u[3+d]/=f),p(u)}};let Md=!1;class O5 extends A.Component{componentDidMount(){const{visualElement:a,layoutGroup:s,switchLayoutGroup:o,layoutId:u}=this.props,{projection:p}=a;QA(A5),p&&(s.group&&s.group.add(p),o&&o.register&&u&&o.register(p),Md&&p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,onExitComplete:()=>this.safeToRemove()})),Al.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:s,visualElement:o,drag:u,isPresent:p}=this.props,{projection:d}=o;return d&&(d.isPresent=p,Md=!0,u||a.layoutDependency!==s||s===void 0||a.isPresent!==p?d.willUpdate():this.safeToRemove(),a.isPresent!==p&&(p?d.promote():d.relegate()||Gt.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),$p.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:s,switchLayoutGroup:o}=this.props,{projection:u}=a;Md=!0,u&&(u.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function Gv(n){const[a,s]=dv(),o=A.useContext(kp);return b.jsx(O5,{...n,layoutGroup:o,switchLayoutGroup:A.useContext(Tv),isPresent:a,safeToRemove:s})}const A5={borderRadius:{...ks,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ks,borderTopRightRadius:ks,borderBottomLeftRadius:ks,borderBottomRightRadius:ks,boxShadow:j5};function N5(n,a,s){const o=Te(n)?n:Tr(n);return o.start(cf("",o,a,s)),o.animation}const E5=(n,a)=>n.depth-a.depth;class C5{constructor(){this.children=[],this.isDirty=!1}add(a){qp(this.children,a),this.isDirty=!0}remove(a){Dp(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(E5),this.isDirty=!1,this.children.forEach(a)}}function k5(n,a){const s=He.now(),o=({timestamp:u})=>{const p=u-s;p>=a&&(Pi(o),n(p-a))};return Gt.setup(o,!0),()=>Pi(o)}const Yv=["TopLeft","TopRight","BottomLeft","BottomRight"],L5=Yv.length,z1=n=>typeof n=="string"?parseFloat(n):n,B1=n=>typeof n=="number"||pt.test(n);function M5(n,a,s,o,u,p){u?(n.opacity=Xt(0,s.opacity??1,q5(o)),n.opacityExit=Xt(a.opacity??1,0,D5(o))):p&&(n.opacity=Xt(a.opacity??1,s.opacity??1,o));for(let d=0;d<L5;d++){const m=`border${Yv[d]}Radius`;let h=V1(a,m),f=V1(s,m);if(h===void 0&&f===void 0)continue;h||(h=0),f||(f=0),h===0||f===0||B1(h)===B1(f)?(n[m]=Math.max(Xt(z1(h),z1(f),o),0),(qn.test(f)||qn.test(h))&&(n[m]+="%")):n[m]=f}(a.rotate||s.rotate)&&(n.rotate=Xt(a.rotate||0,s.rotate||0,o))}function V1(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const q5=Xv(0,.5,Ly),D5=Xv(.5,.95,pn);function Xv(n,a,s){return o=>o<n?0:o>a?1:s(Hs(n,a,o))}function _1(n,a){n.min=a.min,n.max=a.max}function un(n,a){_1(n.x,a.x),_1(n.y,a.y)}function U1(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function H1(n,a,s,o,u){return n-=a,n=Bl(n,1/s,o),u!==void 0&&(n=Bl(n,1/u,o)),n}function R5(n,a=0,s=1,o=.5,u,p=n,d=n){if(qn.test(a)&&(a=parseFloat(a),a=Xt(d.min,d.max,a/100)-d.min),typeof a!="number")return;let m=Xt(p.min,p.max,o);n===p&&(m-=a),n.min=H1(n.min,a,s,m,u),n.max=H1(n.max,a,s,m,u)}function P1(n,a,[s,o,u],p,d){R5(n,a[s],a[o],a[u],a.scale,p,d)}const z5=["x","scaleX","originX"],B5=["y","scaleY","originY"];function G1(n,a,s,o){P1(n.x,a,z5,s?s.x:void 0,o?o.x:void 0),P1(n.y,a,B5,s?s.y:void 0,o?o.y:void 0)}function Y1(n){return n.translate===0&&n.scale===1}function Kv(n){return Y1(n.x)&&Y1(n.y)}function X1(n,a){return n.min===a.min&&n.max===a.max}function V5(n,a){return X1(n.x,a.x)&&X1(n.y,a.y)}function K1(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function Qv(n,a){return K1(n.x,a.x)&&K1(n.y,a.y)}function Q1(n){return Ee(n.x)/Ee(n.y)}function F1(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}class _5{constructor(){this.members=[]}add(a){qp(this.members,a),a.scheduleRender()}remove(a){if(Dp(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(a){const s=this.members.findIndex(u=>a===u);if(s===0)return!1;let o;for(let u=s;u>=0;u--){const p=this.members[u];if(p.isPresent!==!1){o=p;break}}return o?(this.promote(o),!0):!1}promote(a,s){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,s&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:s,resumingFrom:o}=a;s.onExitComplete&&s.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function U5(n,a,s){let o="";const u=n.x.translate/a.x,p=n.y.translate/a.y,d=(s==null?void 0:s.z)||0;if((u||p||d)&&(o=`translate3d(${u}px, ${p}px, ${d}px) `),(a.x!==1||a.y!==1)&&(o+=`scale(${1/a.x}, ${1/a.y}) `),s){const{transformPerspective:f,rotate:x,rotateX:g,rotateY:v,skewX:S,skewY:T}=s;f&&(o=`perspective(${f}px) ${o}`),x&&(o+=`rotate(${x}deg) `),g&&(o+=`rotateX(${g}deg) `),v&&(o+=`rotateY(${v}deg) `),S&&(o+=`skewX(${S}deg) `),T&&(o+=`skewY(${T}deg) `)}const m=n.x.scale*a.x,h=n.y.scale*a.y;return(m!==1||h!==1)&&(o+=`scale(${m}, ${h})`),o||"none"}const qd=["","X","Y","Z"],H5=1e3;let P5=0;function Dd(n,a,s,o){const{latestValues:u}=a;u[n]&&(s[n]=u[n],a.setStaticValue(n,0),o&&(o[n]=0))}function Fv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const s=qv(a);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:u,layoutId:p}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Gt,!(u||p))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&Fv(o)}function Iv({attachResizeListener:n,defaultParent:a,measureScroll:s,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(d={},m=a==null?void 0:a()){this.id=P5++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(X5),this.nodes.forEach(I5),this.nodes.forEach(Z5),this.nodes.forEach(K5)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new C5)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Bp),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const h=this.eventHandlers.get(d);h&&h.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=cv(d)&&!MA(d),this.instance=d;const{layoutId:m,layout:h,visualElement:f}=this.options;if(f&&!f.current&&f.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||m)&&(this.isLayoutDirty=!0),n){let x,g=0;const v=()=>this.root.updateBlockedByResize=!1;Gt.read(()=>{g=window.innerWidth}),n(d,()=>{const S=window.innerWidth;S!==g&&(g=S,this.root.updateBlockedByResize=!0,x&&x(),x=k5(v,250),Al.hasAnimatedSinceResize&&(Al.hasAnimatedSinceResize=!1,this.nodes.forEach(J1)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&f&&(m||h)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:g,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||f.getDefaultTransition()||eN,{onLayoutAnimationStart:j,onLayoutAnimationComplete:q}=f.getProps(),C=!this.targetLayout||!Qv(this.targetLayout,S),P=!g&&v;if(this.options.layoutRoot||this.resumeFrom||P||g&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...Zp(T,"layout"),onPlay:j,onComplete:q};(f.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(x,P)}else g||J1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(J5),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const g=this.path[x];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:m,layout:h}=this.options;if(m===void 0&&!h)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(I1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Z1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(F5),this.nodes.forEach(G5),this.nodes.forEach(Y5)):this.nodes.forEach(Z1),this.clearAllSnapshots();const m=He.now();ye.delta=oi(0,1e3/60,m-ye.timestamp),ye.timestamp=m,ye.isProcessing=!0,Sd.update.process(ye),Sd.preRender.process(ye),Sd.render.process(ye),ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Q5),this.sharedNodes.forEach($5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ee(this.snapshot.measuredBox.x)&&!Ee(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m&&this.instance){const h=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Kv(this.projectionDelta),h=this.getTransformTemplate(),f=h?h(this.latestValues,""):void 0,x=f!==this.prevTransformTemplateValue;d&&this.instance&&(m||xa(this.latestValues)||x)&&(u(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let h=this.removeElementScroll(m);return d&&(h=this.removeTransform(h)),nN(h),{animationId:this.root.animationId,measuredBox:m,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:d}=this.options;if(!d)return Jt();const m=d.measureViewportBox();if(!(((f=this.scroll)==null?void 0:f.wasRoot)||this.path.some(iN))){const{scroll:x}=this.root;x&&(gr(m.x,x.offset.x),gr(m.y,x.offset.y))}return m}removeElementScroll(d){var h;const m=Jt();if(un(m,d),(h=this.scroll)!=null&&h.wasRoot)return m;for(let f=0;f<this.path.length;f++){const x=this.path[f],{scroll:g,options:v}=x;x!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&un(m,d),gr(m.x,g.offset.x),gr(m.y,g.offset.y))}return m}applyTransform(d,m=!1){const h=Jt();un(h,d);for(let f=0;f<this.path.length;f++){const x=this.path[f];!m&&x.options.layoutScroll&&x.scroll&&x!==x.root&&xr(h,{x:-x.scroll.offset.x,y:-x.scroll.offset.y}),xa(x.latestValues)&&xr(h,x.latestValues)}return xa(this.latestValues)&&xr(h,this.latestValues),h}removeTransform(d){const m=Jt();un(m,d);for(let h=0;h<this.path.length;h++){const f=this.path[h];if(!f.instance||!xa(f.latestValues))continue;up(f.latestValues)&&f.updateSnapshot();const x=Jt(),g=f.measurePageBox();un(x,g),G1(m,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,x)}return xa(this.latestValues)&&G1(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var v;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==m;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:g}=this.options;if(!(!this.layout||!(x||g))){if(this.resolvedRelativeTargetAt=ye.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),Bs(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Jt(),this.targetWithTransforms=Jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),u5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):un(this.target,this.layout.layoutBox),Nv(this.target,this.targetDelta)):un(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),Bs(this.relativeTargetOrigin,this.target,S.target),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||up(this.parent.latestValues)||Av(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var T;const d=this.getLead(),m=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(h=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ye.timestamp&&(h=!1),h)return;const{layout:f,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||x))return;un(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,v=this.treeScale.y;w4(this.layoutCorrected,this.treeScale,this.path,m),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Jt());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),zs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==v||!F1(this.projectionDelta.x,this.prevProjectionDelta.x)||!F1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yr(),this.projectionDelta=yr(),this.projectionDeltaWithTransform=yr()}setAnimationOrigin(d,m=!1){const h=this.snapshot,f=h?h.latestValues:{},x={...this.latestValues},g=yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const v=Jt(),S=h?h.source:void 0,T=this.layout?this.layout.source:void 0,j=S!==T,q=this.getStack(),C=!q||q.members.length<=1,P=!!(j&&!C&&this.options.crossfade===!0&&!this.path.some(tN));this.animationProgress=0;let U;this.mixTargetDelta=I=>{const Q=I/1e3;$1(g.x,d.x,Q),$1(g.y,d.y,Q),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bs(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),W5(this.relativeTarget,this.relativeTargetOrigin,v,Q),U&&V5(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=Jt()),un(U,this.relativeTarget)),j&&(this.animationValues=x,M5(x,f,this.latestValues,Q,P,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var m,h,f;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(f=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||f.stop(),this.pendingAnimation&&(Pi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Gt.update(()=>{Al.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Tr(0)),this.currentAnimation=N5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),d.onUpdate&&d.onUpdate(x)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(H5),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:h,layout:f,latestValues:x}=d;if(!(!m||!h||!f)){if(this!==d&&this.layout&&f&&Zv(this.options.animationType,this.layout.layoutBox,f.layoutBox)){h=this.target||Jt();const g=Ee(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+g;const v=Ee(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+v}un(m,h),xr(m,x),zs(this.projectionDeltaWithTransform,this.layoutCorrected,m,x)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new _5),this.sharedNodes.get(d).add(m);const f=m.options.initialPromotionConfig;m.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var m;const{layoutId:d}=this.options;return d?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:d}=this.options;return d?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:h}={}){const f=this.getStack();f&&f.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(m=!0),!m)return;const f={};h.z&&Dd("z",d,f,this.animationValues);for(let x=0;x<qd.length;x++)Dd(`rotate${qd[x]}`,d,f,this.animationValues),Dd(`skew${qd[x]}`,d,f,this.animationValues);d.render();for(const x in f)d.setStaticValue(x,f[x]),this.animationValues&&(this.animationValues[x]=f[x]);d.scheduleRender()}applyProjectionStyles(d,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Ol(m==null?void 0:m.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none";return}const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Ol(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!xa(this.latestValues)&&(d.transform=h?h({},""):"none",this.hasProjected=!1);return}d.visibility="";const x=f.animationValues||f.latestValues;this.applyTransformsToTarget();let g=U5(this.projectionDeltaWithTransform,this.treeScale,x);h&&(g=h(x,g)),d.transform=g;const{x:v,y:S}=this.projectionDelta;d.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,f.animationValues?d.opacity=f===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:d.opacity=f===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const T in Xs){if(x[T]===void 0)continue;const{correct:j,applyTo:q,isCSSVariable:C}=Xs[T],P=g==="none"?x[T]:j(x[T],f);if(q){const U=q.length;for(let I=0;I<U;I++)d[q[I]]=P}else C?this.options.visualElement.renderState.vars[T]=P:d[T]=P}this.options.layoutId&&(d.pointerEvents=f===this?Ol(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(I1),this.root.sharedNodes.clear()}}}function G5(n){n.updateLayout()}function Y5(n){var s;const a=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:u}=n.layout,{animationType:p}=n.options,d=a.source!==n.layout.source;p==="size"?cn(g=>{const v=d?a.measuredBox[g]:a.layoutBox[g],S=Ee(v);v.min=o[g].min,v.max=v.min+S}):Zv(p,a.layoutBox,o)&&cn(g=>{const v=d?a.measuredBox[g]:a.layoutBox[g],S=Ee(o[g]);v.max=v.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+S)});const m=yr();zs(m,o,a.layoutBox);const h=yr();d?zs(h,n.applyTransform(u,!0),a.measuredBox):zs(h,o,a.layoutBox);const f=!Kv(m);let x=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:S}=g;if(v&&S){const T=Jt();Bs(T,a.layoutBox,v.layoutBox);const j=Jt();Bs(j,o,S.layoutBox),Qv(T,j)||(x=!0),g.options.layoutRoot&&(n.relativeTarget=j,n.relativeTargetOrigin=T,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:a,delta:h,layoutDelta:m,hasLayoutChanged:f,hasRelativeLayoutChanged:x})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function X5(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function K5(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Q5(n){n.clearSnapshot()}function I1(n){n.clearMeasurements()}function Z1(n){n.isLayoutDirty=!1}function F5(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function J1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function I5(n){n.resolveTargetDelta()}function Z5(n){n.calcProjection()}function J5(n){n.resetSkewAndRotation()}function $5(n){n.removeLeadSnapshot()}function $1(n,a,s){n.translate=Xt(a.translate,0,s),n.scale=Xt(a.scale,1,s),n.origin=a.origin,n.originPoint=a.originPoint}function W1(n,a,s,o){n.min=Xt(a.min,s.min,o),n.max=Xt(a.max,s.max,o)}function W5(n,a,s,o){W1(n.x,a.x,s.x,o),W1(n.y,a.y,s.y,o)}function tN(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const eN={duration:.45,ease:[.4,0,.1,1]},tx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ex=tx("applewebkit/")&&!tx("chrome/")?Math.round:pn;function nx(n){n.min=ex(n.min),n.max=ex(n.max)}function nN(n){nx(n.x),nx(n.y)}function Zv(n,a,s){return n==="position"||n==="preserve-aspect"&&!l5(Q1(a),Q1(s),.2)}function iN(n){var a;return n!==n.root&&((a=n.scroll)==null?void 0:a.wasRoot)}const aN=Iv({attachResizeListener:(n,a)=>Ks(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Rd={current:void 0},Jv=Iv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Rd.current){const n=new aN({});n.mount(window),n.setOptions({layoutScroll:!0}),Rd.current=n}return Rd.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),rN={pan:{Feature:T5},drag:{Feature:S5,ProjectionNode:Jv,MeasureLayout:Gv}};function ix(n,a,s){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",s==="Start");const u="onHover"+s,p=o[u];p&&Gt.postRender(()=>p(a,Js(a)))}class sN extends Yi{mount(){const{current:a}=this.node;a&&(this.unmount=NA(a,(s,o)=>(ix(this.node,o,"Start"),u=>ix(this.node,u,"End"))))}unmount(){}}class oN extends Yi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fs(Ks(this.node.current,"focus",()=>this.onFocus()),Ks(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ax(n,a,s){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",s==="Start");const u="onTap"+(s==="End"?"":s),p=o[u];p&&Gt.postRender(()=>p(a,Js(a)))}class lN extends Yi{mount(){const{current:a}=this.node;a&&(this.unmount=LA(a,(s,o)=>(ax(this.node,o,"Start"),(u,{success:p})=>ax(this.node,u,p?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const gp=new WeakMap,zd=new WeakMap,uN=n=>{const a=gp.get(n.target);a&&a(n)},cN=n=>{n.forEach(uN)};function dN({root:n,...a}){const s=n||document;zd.has(s)||zd.set(s,{});const o=zd.get(s),u=JSON.stringify(a);return o[u]||(o[u]=new IntersectionObserver(cN,{root:n,...a})),o[u]}function pN(n,a,s){const o=dN(a);return gp.set(n,s),o.observe(n),()=>{gp.delete(n),o.unobserve(n)}}const fN={some:0,all:1};class mN extends Yi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:s,margin:o,amount:u="some",once:p}=a,d={root:s?s.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:fN[u]},m=h=>{const{isIntersecting:f}=h;if(this.isInView===f||(this.isInView=f,p&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:x,onViewportLeave:g}=this.node.getProps(),v=f?x:g;v&&v(h)};return pN(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:s}=this.node;["amount","margin","root"].some(hN(a,s))&&this.startObserver()}unmount(){}}function hN({viewport:n={}},{viewport:a={}}={}){return s=>n[s]!==a[s]}const gN={inView:{Feature:mN},tap:{Feature:lN},focus:{Feature:oN},hover:{Feature:sN}},xN={layout:{ProjectionNode:Jv,MeasureLayout:Gv}},yN={...n5,...gN,...rN,...xN},Ze=y4(yN,L4),vN=[{icon:"{ }",name:"哈希表",desc:"O(1)查找"},{icon:"⇄",name:"双指针",desc:"左右夹逼"},{icon:"▭",name:"滑动窗口",desc:"动态区间"},{icon:"[ ]",name:"子串",desc:"字符处理"},{icon:"↺",name:"回溯",desc:"穷举搜索"},{icon:"⌖",name:"二分查找",desc:"折半查找"},{icon:"▤",name:"栈",desc:"后进先出"},{icon:"△",name:"堆",desc:"优先队列"},{icon:"✓",name:"贪心",desc:"局部最优"},{icon:"🌳",name:"二叉树",desc:"递归遍历"},{icon:"📊",name:"动态规划",desc:"状态转移"},{icon:"🔗",name:"链表",desc:"指针操作"},{icon:"📋",name:"数组",desc:"原地操作"},{icon:"⊞",name:"矩阵",desc:"二维操作"},{icon:"🔗",name:"图论",desc:"BFS/DFS"},{icon:"💡",name:"技巧",desc:"位运算"},{icon:"↕",name:"排序",desc:"快排/归并"},{icon:"🔍",name:"查找",desc:"线性/二分"}],rx=[{step:1,title:"理解题意",desc:"分析问题本质",icon:ij},{step:2,title:"思路推导",desc:"循循善诱引导",icon:Ll},{step:3,title:"代码实现",desc:"逐步构建代码",icon:$T},{step:4,title:"面试技巧",desc:"掌握表达方法",icon:tj}],sx={hash:{bg:"bg-emerald-50",border:"border-emerald-300",text:"text-emerald-700",gradient:"from-emerald-400 to-teal-500"},"two-pointer":{bg:"bg-amber-50",border:"border-amber-300",text:"text-amber-700",gradient:"from-amber-400 to-orange-500"},"sliding-window":{bg:"bg-violet-50",border:"border-violet-300",text:"text-violet-700",gradient:"from-violet-400 to-purple-500"},substring:{bg:"bg-pink-50",border:"border-pink-300",text:"text-pink-700",gradient:"from-pink-400 to-rose-500"},backtracking:{bg:"bg-red-50",border:"border-red-300",text:"text-red-700",gradient:"from-red-400 to-rose-500"},"binary-search":{bg:"bg-cyan-50",border:"border-cyan-300",text:"text-cyan-700",gradient:"from-cyan-400 to-blue-500"},stack:{bg:"bg-blue-50",border:"border-blue-300",text:"text-blue-700",gradient:"from-blue-400 to-indigo-500"},heap:{bg:"bg-purple-50",border:"border-purple-300",text:"text-purple-700",gradient:"from-purple-400 to-violet-500"},greedy:{bg:"bg-green-50",border:"border-green-300",text:"text-green-700",gradient:"from-green-400 to-emerald-500"},"binary-tree":{bg:"bg-teal-50",border:"border-teal-300",text:"text-teal-700",gradient:"from-teal-400 to-cyan-500"},dp:{bg:"bg-orange-50",border:"border-orange-300",text:"text-orange-700",gradient:"from-orange-400 to-amber-500"},"multi-dp":{bg:"bg-indigo-50",border:"border-indigo-300",text:"text-indigo-700",gradient:"from-indigo-400 to-blue-500"},technique:{bg:"bg-yellow-50",border:"border-yellow-300",text:"text-yellow-700",gradient:"from-yellow-400 to-amber-500"},graph:{bg:"bg-rose-50",border:"border-rose-300",text:"text-rose-700",gradient:"from-rose-400 to-pink-500"},"linked-list":{bg:"bg-lime-50",border:"border-lime-300",text:"text-lime-700",gradient:"from-lime-400 to-green-500"},array:{bg:"bg-sky-50",border:"border-sky-300",text:"text-sky-700",gradient:"from-sky-400 to-blue-500"},matrix:{bg:"bg-fuchsia-50",border:"border-fuchsia-300",text:"text-fuchsia-700",gradient:"from-fuchsia-400 to-purple-500"},sorting:{bg:"bg-rose-50",border:"border-rose-300",text:"text-rose-700",gradient:"from-rose-400 to-red-500"},searching:{bg:"bg-cyan-50",border:"border-cyan-300",text:"text-cyan-700",gradient:"from-cyan-500 to-teal-500"}};function bN(){const n=Nj(),s=new URLSearchParams(n).get("category"),[o,u]=A.useState(s?[s]:vn.map(v=>v.id)),[p,d]=A.useState([]);A.useEffect(()=>{const v=localStorage.getItem("completedProblems");v&&d(JSON.parse(v))},[]),A.useEffect(()=>{s&&u([s])},[s]);const m=v=>{u(S=>S.includes(v)?S.filter(T=>T!==v):[...S,v])},h=()=>u(vn.map(v=>v.id)),f=()=>u([]),x=Ms.filter(v=>o.includes(v.category)).length,g=vn.filter(v=>o.includes(v.id)).map(v=>({category:v,problems:Ms.filter(S=>S.category===v.id)})).filter(v=>v.problems.length>0);return b.jsx(Ml,{"data-loc":"client/src/pages/Home.tsx:110",children:b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:111",className:"min-h-screen",children:[b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:113",className:"container py-6 sm:py-12",children:b.jsxs(Ze.div,{"data-loc":"client/src/pages/Home.tsx:114",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-4 sm:p-8 shadow-lg border border-rose-200/50",children:[b.jsxs("h1",{"data-loc":"client/src/pages/Home.tsx:120",className:"text-2xl sm:text-4xl font-bold mb-2 text-rose-800",children:["用",b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:121",className:"text-rose-600",children:"一套方法"})]}),b.jsxs("h1",{"data-loc":"client/src/pages/Home.tsx:123",className:"text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-rose-800",children:["解决",b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:124",className:"text-amber-600",children:"多类题目"})]}),b.jsx("p",{"data-loc":"client/src/pages/Home.tsx:126",className:"text-rose-700/80 max-w-2xl mb-6 sm:mb-8 text-sm sm:text-base",children:"专为零基础小白设计，从思路分析到代码实现，循循善诱带你掌握算法面试核心技巧。不是死记硬背，而是理解分析问题的思考过程。"}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:131",className:"flex flex-wrap gap-2 sm:gap-3",children:vN.map((v,S)=>b.jsxs(Ze.div,{"data-loc":"client/src/pages/Home.tsx:133",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:S*.03},className:"flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/70 border border-rose-200/60 text-rose-700 shadow-sm backdrop-blur-sm",children:[b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:140",className:"text-base sm:text-lg text-rose-500",children:v.icon}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:141",children:[b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:142",className:"text-xs sm:text-sm font-medium text-rose-800",children:v.name}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:143",className:"text-[10px] sm:text-xs text-rose-600/70 hidden sm:block",children:v.desc})]})]},v.name))})]})}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:152",className:"container py-4 sm:py-8",children:b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:153",className:"bg-gradient-to-r from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-rose-200/50",children:[b.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:154",className:"text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-rose-800",children:"学习路径"}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:155",className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 max-w-4xl",children:rx.map((v,S)=>b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:157",className:"flex items-center w-full sm:w-auto",children:[b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:158",className:"flex items-center gap-3",children:[b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:159",className:se("w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md flex-shrink-0",S===0?"bg-gradient-to-r from-rose-400 to-amber-500 text-white":"bg-white/80 text-rose-600 border border-rose-200"),children:v.step}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:165",children:[b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:166",className:"font-medium text-rose-800 text-sm sm:text-base",children:v.title}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:167",className:"text-xs sm:text-sm text-rose-600/70",children:v.desc})]})]}),S<rx.length-1&&b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:171",className:"hidden sm:block mx-4 sm:mx-6 text-rose-400",children:"→"})]},v.step))})]})}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:180",className:"container py-4 sm:py-8",children:[b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:181",className:"bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-rose-200/50 mb-6",children:[b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:182",className:"flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2",children:[b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:183",className:"flex items-center gap-2 sm:gap-3 flex-wrap",children:[b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:184",className:"text-rose-500",children:"▼"}),b.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:185",className:"text-base sm:text-lg font-semibold text-rose-800",children:"选择题目类别"}),b.jsxs("span",{"data-loc":"client/src/pages/Home.tsx:186",className:"text-xs sm:text-sm text-rose-600/70",children:["已选 ",o.length," 类，共 ",x," 题"]})]}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:190",className:"flex items-center gap-2",children:[b.jsx("button",{"data-loc":"client/src/pages/Home.tsx:191",onClick:h,className:"text-xs sm:text-sm text-rose-600/70 hover:text-rose-600 transition-colors",children:"全选"}),b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:197",className:"text-rose-400",children:"×"}),b.jsx("button",{"data-loc":"client/src/pages/Home.tsx:198",onClick:f,className:"text-xs sm:text-sm text-rose-600/70 hover:text-rose-600 transition-colors",children:"清空"})]})]}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:208",className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3",children:vn.map(v=>{const S=o.includes(v.id),T=sx[v.id]||{bg:"bg-gray-50",border:"border-gray-300",text:"text-gray-700"},j=Ms.filter(q=>q.category===v.id).length;return b.jsxs(Ze.button,{"data-loc":"client/src/pages/Home.tsx:215",onClick:()=>m(v.id),whileHover:{scale:1.02},whileTap:{scale:.98},className:se("relative p-3 sm:p-4 rounded-xl border-2 transition-all text-left shadow-sm backdrop-blur-sm",S?`${T.bg} ${T.border}`:"bg-white/70 border-rose-100 hover:border-rose-200"),children:[b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:228",className:se("absolute top-2 sm:top-3 left-2 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-colors",S?`${T.border} ${T.bg}`:"border-rose-200 bg-white/80"),children:S&&b.jsx(Kd,{"data-loc":"client/src/pages/Home.tsx:235",className:se("w-3 h-3 sm:w-4 sm:h-4",T.text)})}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:239",className:"pt-3 sm:pt-4",children:[b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:240",className:"flex items-center gap-1.5 sm:gap-2 mb-1",children:[b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:241",className:se("text-base sm:text-lg",S?T.text:"text-rose-400"),children:v.icon}),b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:244",className:se("font-medium text-xs sm:text-sm",S?T.text:"text-rose-700"),children:v.name})]}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:251",className:"text-xs sm:text-sm text-rose-600/60",children:[j," 题"]})]})]},v.id)})})]}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:262",className:"space-y-4 sm:space-y-6",children:g.map(({category:v,problems:S})=>{const T=sx[v.id]||{gradient:"from-gray-400 to-gray-500"};return b.jsxs(Ze.div,{"data-loc":"client/src/pages/Home.tsx:267",initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white/70 backdrop-blur-md rounded-2xl border border-rose-200/50 overflow-hidden shadow-lg",children:[b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:274",className:se("px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r text-white",T.gradient),children:b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:275",className:"flex items-center gap-2 sm:gap-3",children:[b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:276",className:"text-lg sm:text-xl",children:v.icon}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:277",children:[b.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:278",className:"font-semibold text-sm sm:text-base",children:v.name}),b.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:279",className:"text-xs sm:text-sm text-white/80",children:[S.length," 道题目"]})]})]})}),b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:285",className:"divide-y divide-rose-100/50",children:S.map((j,q)=>{const C=p.includes(j.id);return b.jsx(_i,{"data-loc":"client/src/pages/Home.tsx:290",href:`/problem/${j.id}`,children:b.jsxs(Ze.div,{"data-loc":"client/src/pages/Home.tsx:294",whileHover:{backgroundColor:"rgba(251, 207, 232, 0.2)"},className:"px-4 sm:px-5 py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer gap-1 sm:gap-0",children:[b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:298",className:"flex items-center gap-2 sm:gap-4",children:[b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:299",className:"text-xs sm:text-sm text-rose-400 font-mono w-6 sm:w-8",children:String(q+1).padStart(2,"0")}),b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:302",className:"font-medium text-rose-800 text-sm sm:text-base",children:j.title}),b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:303",className:se("text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded font-medium",j.difficulty==="easy"&&"bg-green-100/80 text-green-700",j.difficulty==="medium"&&"bg-amber-100/80 text-amber-700",j.difficulty==="hard"&&"bg-red-100/80 text-red-700"),children:j.difficulty==="easy"?"简单":j.difficulty==="medium"?"中等":"困难"})]}),b.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:312",className:"flex items-center gap-2 sm:gap-3 ml-8 sm:ml-0",children:[C&&b.jsx(Kd,{"data-loc":"client/src/pages/Home.tsx:314",className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500"}),b.jsx("span",{"data-loc":"client/src/pages/Home.tsx:316",className:"text-rose-400",children:"→"})]})]})},j.id)})})]},v.id)})}),g.length===0&&b.jsx("div",{"data-loc":"client/src/pages/Home.tsx:330",className:"text-center py-12 sm:py-20 bg-white/60 backdrop-blur-md rounded-2xl border border-rose-200/50",children:b.jsx("p",{"data-loc":"client/src/pages/Home.tsx:331",className:"text-rose-600/70",children:"请选择至少一个题目类别"})})]})]})})}function ox({code:n,fileName:a}){const[s,o]=A.useState(!1),u=()=>{navigator.clipboard.writeText(n),o(!0),setTimeout(()=>o(!1),2e3)},p=m=>{const h=m.split(`
`);return h.map((f,x)=>{const g=[];let v=f,S=0;const T=v.match(/(\/\/.*)/);if(T){const j=v.indexOf(T[1]);j>0&&g.push(d(v.substring(0,j),`${x}-${S++}`)),g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:48",className:"text-rose-600/70 italic",children:T[1]},`${x}-comment`)),v=""}else g.push(d(v,`${x}-${S++}`));return b.jsxs("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:55",children:[g,x<h.length-1&&`
`]},x)})},d=(m,h)=>{const f=["public","private","class","return","new","if","else","for","while","int","void","boolean","String","Map","HashMap","List","ArrayList","Set","HashSet","Stack","Queue","PriorityQueue","Integer","Character","Arrays","Math","Collections","double","long","TreeNode","ListNode"],x=["true","false","null"],g=[],v=new RegExp(`(\\b(?:${f.join("|")})\\b)|(\\b(?:${x.join("|")})\\b)|(\\b\\d+\\b)|("[^"]*")`,"g");let S=0,T,j=0;for(;(T=v.exec(m))!==null;)T.index>S&&g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:75",children:m.substring(S,T.index)},`${h}-${j++}`)),T[1]?g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:79",className:"text-purple-400 font-medium",children:T[1]},`${h}-${j++}`)):T[2]?g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:81",className:"text-orange-400",children:T[2]},`${h}-${j++}`)):T[3]?g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:83",className:"text-orange-400",children:T[3]},`${h}-${j++}`)):T[4]&&g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:85",className:"text-green-400",children:T[4]},`${h}-${j++}`)),S=v.lastIndex;return S<m.length&&g.push(b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:92",children:m.substring(S)},`${h}-${j++}`)),g.length>0?g:m};return b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:99",className:"bg-[#1e1e2e] rounded-lg overflow-hidden shadow-lg border border-gray-700",children:[a&&b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:101",className:"flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-gray-700",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:102",className:"flex items-center gap-2",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:103",className:"flex gap-1.5",children:[b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:104",className:"w-3 h-3 rounded-full bg-red-500"}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:105",className:"w-3 h-3 rounded-full bg-yellow-500"}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:106",className:"w-3 h-3 rounded-full bg-green-500"})]}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:108",className:"text-sm text-rose-500/60 ml-2",children:a})]}),b.jsx("button",{"data-loc":"client/src/pages/ProblemDetail.tsx:110",onClick:u,className:"p-1.5 hover:bg-gray-700 rounded transition-colors",children:s?b.jsx(sy,{"data-loc":"client/src/pages/ProblemDetail.tsx:115",className:"w-4 h-4 text-green-400"}):b.jsx(oy,{"data-loc":"client/src/pages/ProblemDetail.tsx:117",className:"w-4 h-4 text-rose-500/60"})})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:122",className:"flex",children:[b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:124",className:"py-4 px-3 bg-[#181825] text-rose-600/70 text-sm font-mono select-none border-r border-gray-700",children:n.split(`
`).map((m,h)=>b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:126",className:"leading-relaxed text-right",children:h+1},h))}),b.jsx("pre",{"data-loc":"client/src/pages/ProblemDetail.tsx:130",className:"p-4 overflow-x-auto text-sm flex-1",children:b.jsx("code",{"data-loc":"client/src/pages/ProblemDetail.tsx:131",className:"font-mono text-gray-200 leading-relaxed",children:p(n)})})]})]})}function wN(){const{id:n}=hy(),[,a]=Cp(),[s,o]=A.useState("thinking"),[u,p]=A.useState([1]),[d,m]=A.useState({}),[h,f]=A.useState({}),[x,g]=A.useState(0),v=Ms.find(k=>k.id===n),S=v?vn.find(k=>k.id===v.category):null,T=v?Ms.filter(k=>k.category===v.category):[],j=T.findIndex(k=>k.id===n),q=j>0?T[j-1]:null,C=j<T.length-1?T[j+1]:null;A.useEffect(()=>{g(0)},[n,s]);const P=k=>{p(R=>R.includes(k)?R.filter(at=>at!==k):[...R,k])},U=k=>{m(R=>({...R,[k]:!R[k]}))},I=k=>{f(R=>({...R,[k]:!R[k]}))};if(!v)return b.jsx(Ml,{"data-loc":"client/src/pages/ProblemDetail.tsx:183",children:b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:184",className:"min-h-screen flex items-center justify-center",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:185",className:"text-center bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg",children:[b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:186",className:"text-rose-700/80 mb-4",children:"题目不存在"}),b.jsx(_i,{"data-loc":"client/src/pages/ProblemDetail.tsx:187",href:"/",children:b.jsx(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:188",className:"bg-amber-500 hover:bg-amber-600 text-white",children:"返回首页"})})]})})});const Q=[{id:"thinking",label:"思路引导",icon:"💡"},{id:"code",label:"代码实现",icon:"</>"},{id:"solution",label:"完整代码",icon:"▶"},{id:"interview",label:"面试技巧",icon:"📋"}],Z=(k,R)=>R>=k.length-1?k[k.length-1].code:k[R].code;return b.jsx(Ml,{"data-loc":"client/src/pages/ProblemDetail.tsx:212",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:213",className:"min-h-screen",children:[b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:215",className:"sticky top-16 z-40 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-gray-700 shadow-lg",children:b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:216",className:"container",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:217",className:"flex items-center justify-between h-14",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:218",className:"flex items-center gap-4",children:[b.jsx(_i,{"data-loc":"client/src/pages/ProblemDetail.tsx:219",href:`/?category=${v.category}`,children:b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:220",variant:"ghost",size:"sm",className:"gap-2 text-gray-300 hover:text-white hover:bg-gray-700",children:[b.jsx(vd,{"data-loc":"client/src/pages/ProblemDetail.tsx:221",className:"w-4 h-4"}),"返回"]})}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:225",className:se("text-xs px-2 py-1 rounded font-medium",v.difficulty==="easy"&&"bg-green-500/20 text-green-400",v.difficulty==="medium"&&"bg-amber-500/20 text-amber-400",v.difficulty==="hard"&&"bg-red-500/20 text-red-400"),children:v.difficulty==="easy"?"简单":v.difficulty==="medium"?"中等":"困难"}),b.jsxs("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:233",className:"text-sm text-rose-500/60 flex items-center gap-1",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:234",className:"text-cyan-400",children:S==null?void 0:S.icon}),S==null?void 0:S.name]})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:239",className:"flex items-center gap-2",children:[b.jsxs("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:240",className:"text-sm text-rose-600/70",children:[j+1," / ",T.length]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:243",className:"flex items-center gap-1",children:[b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:244",variant:"ghost",size:"sm",disabled:!q,onClick:()=>q&&a(`/problem/${q.id}`),className:"text-rose-500/60 hover:text-white hover:bg-gray-700 disabled:opacity-50",children:[b.jsx(vd,{"data-loc":"client/src/pages/ProblemDetail.tsx:251",className:"w-4 h-4"}),"上一题"]}),b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:254",variant:"ghost",size:"sm",disabled:!C,onClick:()=>C&&a(`/problem/${C.id}`),className:"text-rose-500/60 hover:text-white hover:bg-gray-700 disabled:opacity-50",children:["下一题",b.jsx(R0,{"data-loc":"client/src/pages/ProblemDetail.tsx:262",className:"w-4 h-4"})]})]})]})]})})}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:271",className:"container py-6",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:272",className:"flex gap-6",children:[b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:274",className:"w-[30%] flex-shrink-0",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:275",className:"sticky top-36 space-y-4",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:277",className:"bg-[#1e1e2e]/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-700",children:[b.jsx("h1",{"data-loc":"client/src/pages/ProblemDetail.tsx:278",className:"text-xl font-bold mb-3 text-white",children:v.title}),b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:279",className:"text-sm text-gray-300 whitespace-pre-line leading-relaxed",children:v.description})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:285",className:"bg-[#1e1e2e]/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-700",children:[b.jsxs("h3",{"data-loc":"client/src/pages/ProblemDetail.tsx:286",className:"text-sm font-semibold mb-3 flex items-center gap-2 text-white",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:287",className:"text-cyan-400",children:"▷"}),"示例"]}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:290",className:"space-y-3",children:v.examples.map((k,R)=>b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:292",className:"bg-[#181825] rounded-lg p-3 border border-gray-700",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:293",className:"space-y-2 text-sm",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:294",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:295",className:"text-rose-600/70",children:"输入："}),b.jsx("code",{"data-loc":"client/src/pages/ProblemDetail.tsx:296",className:"text-cyan-400 ml-1 font-mono text-xs",children:k.input})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:298",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:299",className:"text-rose-600/70",children:"输出："}),b.jsx("code",{"data-loc":"client/src/pages/ProblemDetail.tsx:300",className:"text-green-400 ml-1 font-mono text-xs",children:k.output})]}),k.explanation&&b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:303",className:"text-rose-600/70 text-xs pt-1 border-t border-gray-700 mt-2",children:k.explanation})]})},R))})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:314",className:"bg-[#1e1e2e]/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-700",children:[b.jsxs("h3",{"data-loc":"client/src/pages/ProblemDetail.tsx:315",className:"text-sm font-semibold mb-3 flex items-center gap-2 text-white",children:[b.jsx(z0,{"data-loc":"client/src/pages/ProblemDetail.tsx:316",className:"w-4 h-4 text-cyan-400"}),"复杂度分析"]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:319",className:"space-y-2",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:320",className:"flex items-center gap-2 text-sm",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:321",className:"text-yellow-400",children:"⚡"}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:322",className:"text-rose-600/70",children:"时间："}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:323",className:"text-gray-300",children:v.interview.timeComplexity})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:325",className:"flex items-center gap-2 text-sm",children:[b.jsx(B0,{"data-loc":"client/src/pages/ProblemDetail.tsx:326",className:"w-4 h-4 text-blue-400"}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:327",className:"text-rose-600/70",children:"空间："}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:328",className:"text-gray-300",children:v.interview.spaceComplexity})]})]})]})]})}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:336",className:"flex-1 min-w-0",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:338",className:"bg-[#1e1e2e]/90 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg",children:[b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:339",className:"flex border-b border-gray-700",children:Q.map(k=>b.jsxs("button",{"data-loc":"client/src/pages/ProblemDetail.tsx:341",onClick:()=>o(k.id),className:se("flex-1 px-4 py-3 text-sm font-medium transition-colors relative",s===k.id?"text-cyan-400":"text-rose-600/70 hover:text-gray-300"),children:[b.jsxs("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:351",className:"flex items-center justify-center gap-2",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:352",children:k.icon}),k.label]}),s===k.id&&b.jsx(Ze.div,{"data-loc":"client/src/pages/ProblemDetail.tsx:356",layoutId:"activeTab",className:"absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"})]},k.id))}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:365",className:"p-6",children:b.jsxs(p1,{"data-loc":"client/src/pages/ProblemDetail.tsx:366",mode:"wait",children:[s==="thinking"&&b.jsxs(Ze.div,{"data-loc":"client/src/pages/ProblemDetail.tsx:369",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"space-y-4",children:[b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:376",className:"bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6",children:b.jsxs("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:377",className:"text-sm text-cyan-300",children:[b.jsx("strong",{"data-loc":"client/src/pages/ProblemDetail.tsx:378",children:"学习方法："}),"先自己思考每个问题，再查看提示和答案。这样能更好地理解解题思路。"]})}),v.thinkingGuide.map(k=>b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:383",className:"bg-[#181825] rounded-lg overflow-hidden border border-gray-700",children:[b.jsxs("button",{"data-loc":"client/src/pages/ProblemDetail.tsx:387",onClick:()=>P(k.step),className:"w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800/50 transition-colors",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:391",className:"flex items-center gap-3",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:392",className:se("w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",u.includes(k.step)?"bg-cyan-500 text-white":"bg-gray-700 text-rose-500/60"),children:k.step}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:400",className:"font-medium text-left text-gray-200",children:k.question})]}),u.includes(k.step)?b.jsx(ZT,{"data-loc":"client/src/pages/ProblemDetail.tsx:403",className:"w-4 h-4 text-rose-600/70"}):b.jsx(IT,{"data-loc":"client/src/pages/ProblemDetail.tsx:405",className:"w-4 h-4 text-rose-600/70"})]}),b.jsx(p1,{"data-loc":"client/src/pages/ProblemDetail.tsx:409",children:u.includes(k.step)&&b.jsx(Ze.div,{"data-loc":"client/src/pages/ProblemDetail.tsx:411",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"border-t border-gray-700",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:417",className:"p-4 space-y-3",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:418",className:"flex gap-2",children:[b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:419",variant:"outline",size:"sm",onClick:()=>U(k.step),className:"gap-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 bg-transparent",children:[b.jsx(Fd,{"data-loc":"client/src/pages/ProblemDetail.tsx:425",className:"w-4 h-4"}),"查看提示"]}),b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:428",variant:"outline",size:"sm",onClick:()=>I(k.step),className:"gap-2 border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent",children:[b.jsx(nj,{"data-loc":"client/src/pages/ProblemDetail.tsx:434",className:"w-4 h-4"}),"查看答案"]})]}),d[k.step]&&b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:440",className:"bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3",children:b.jsxs("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:441",className:"text-sm text-yellow-300",children:[b.jsx("strong",{"data-loc":"client/src/pages/ProblemDetail.tsx:442",children:"提示："}),k.hint]})}),h[k.step]&&b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:448",className:"bg-green-500/10 border border-green-500/30 rounded-lg p-3",children:b.jsxs("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:449",className:"text-sm text-green-300",children:[b.jsx("strong",{"data-loc":"client/src/pages/ProblemDetail.tsx:450",children:"答案："}),k.answer]})})]})})})]},k.step))]},"thinking"),s==="code"&&b.jsx(Ze.div,{"data-loc":"client/src/pages/ProblemDetail.tsx:465",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:471",className:"flex gap-4",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:473",className:"w-[25%] flex-shrink-0",children:[b.jsx("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:474",className:"text-sm font-medium text-rose-600/70 mb-3",children:"代码构建步骤"}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:475",className:"space-y-1",children:v.codeSteps.map((k,R)=>b.jsxs("button",{"data-loc":"client/src/pages/ProblemDetail.tsx:477",onClick:()=>g(R),className:se("w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2",x===R?"bg-cyan-500/20 text-cyan-400 border border-cyan-500/50":"hover:bg-gray-800 text-rose-500/60 border border-transparent"),children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:487",className:se("w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0",x===R?"bg-cyan-500 text-white":"bg-gray-700 text-rose-500/60"),children:R+1}),b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:495",className:"text-xs font-medium truncate",children:k.title})]},R))})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:502",className:"flex-1 min-w-0 space-y-4",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:504",children:[b.jsx("h3",{"data-loc":"client/src/pages/ProblemDetail.tsx:505",className:"text-lg font-semibold mb-1 text-white",children:v.codeSteps[x].title}),b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:508",className:"text-sm text-rose-500/60",children:v.codeSteps[x].description})]}),b.jsx(ox,{"data-loc":"client/src/pages/ProblemDetail.tsx:514",code:Z(v.codeSteps,x),fileName:"Solution.java"}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:520",className:"bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4",children:b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:521",className:"flex items-start gap-2",children:[b.jsx(Fd,{"data-loc":"client/src/pages/ProblemDetail.tsx:522",className:"w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:523",children:[b.jsx("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:524",className:"font-medium text-yellow-400 mb-1",children:"代码解释"}),b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:525",className:"text-sm text-yellow-200/80",children:v.codeSteps[x].explanation})]})]})}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:533",className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:534",variant:"outline",size:"sm",disabled:x===0,onClick:()=>g(k=>k-1),className:"border-gray-600 text-rose-500/60 hover:bg-gray-800 disabled:opacity-50 bg-transparent",children:[b.jsx(vd,{"data-loc":"client/src/pages/ProblemDetail.tsx:541",className:"w-4 h-4 mr-1"}),"上一步"]}),b.jsxs("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:544",className:"text-sm text-rose-600/70",children:[x+1," / ",v.codeSteps.length]}),b.jsxs(ii,{"data-loc":"client/src/pages/ProblemDetail.tsx:547",variant:"outline",size:"sm",disabled:x===v.codeSteps.length-1,onClick:()=>g(k=>k+1),className:"border-gray-600 text-rose-500/60 hover:bg-gray-800 disabled:opacity-50 bg-transparent",children:["下一步",b.jsx(R0,{"data-loc":"client/src/pages/ProblemDetail.tsx:555",className:"w-4 h-4 ml-1"})]})]})]})]})},"code"),s==="solution"&&b.jsxs(Ze.div,{"data-loc":"client/src/pages/ProblemDetail.tsx:565",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"space-y-4",children:[b.jsx(ox,{"data-loc":"client/src/pages/ProblemDetail.tsx:572",code:v.codeSteps[v.codeSteps.length-1].code,fileName:"Solution.java"}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:578",className:"bg-[#181825] rounded-lg border border-gray-700 p-4",children:[b.jsx("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:579",className:"font-medium mb-4 text-white",children:"代码构建回顾"}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:580",className:"space-y-3",children:v.codeSteps.map((k,R)=>b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:582",className:"flex items-start gap-3",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:583",className:"w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-medium flex-shrink-0",children:R+1}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:586",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:587",className:"font-medium text-sm text-gray-200",children:k.title}),b.jsxs("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:588",className:"text-rose-600/70 text-sm",children:[" - ",k.explanation]})]})]},R))})]})]},"solution"),s==="interview"&&b.jsxs(Ze.div,{"data-loc":"client/src/pages/ProblemDetail.tsx:599",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"space-y-6",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:607",className:"bg-[#181825] rounded-lg border border-gray-700 p-4",children:[b.jsxs("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:608",className:"font-medium mb-3 flex items-center gap-2 text-white",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:609",className:"text-cyan-400",children:"💡"}),"面试讲解思路"]}),b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:612",className:"text-gray-300 leading-relaxed",children:v.interview.approach})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:618",className:"grid grid-cols-2 gap-4",children:[b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:619",className:"bg-[#181825] rounded-lg border border-gray-700 p-4",children:[b.jsxs("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:620",className:"font-medium mb-2 flex items-center gap-2 text-white",children:[b.jsx(z0,{"data-loc":"client/src/pages/ProblemDetail.tsx:621",className:"w-4 h-4 text-yellow-400"}),"时间复杂度"]}),b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:624",className:"text-gray-300",children:v.interview.timeComplexity})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:626",className:"bg-[#181825] rounded-lg border border-gray-700 p-4",children:[b.jsxs("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:627",className:"font-medium mb-2 flex items-center gap-2 text-white",children:[b.jsx(B0,{"data-loc":"client/src/pages/ProblemDetail.tsx:628",className:"w-4 h-4 text-blue-400"}),"空间复杂度"]}),b.jsx("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:631",className:"text-gray-300",children:v.interview.spaceComplexity})]})]}),b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:636",className:"bg-[#181825] rounded-lg border border-gray-700 p-4",children:[b.jsxs("h4",{"data-loc":"client/src/pages/ProblemDetail.tsx:637",className:"font-medium mb-4 flex items-center gap-2 text-white",children:[b.jsx("span",{"data-loc":"client/src/pages/ProblemDetail.tsx:638",className:"text-cyan-400",children:"❓"}),"常见追问"]}),b.jsx("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:641",className:"space-y-4",children:v.interview.followUp.map((k,R)=>b.jsxs("div",{"data-loc":"client/src/pages/ProblemDetail.tsx:643",className:"border-l-2 border-cyan-500/50 pl-4",children:[b.jsxs("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:644",className:"font-medium text-sm mb-1 text-gray-200",children:["Q: ",k.question]}),b.jsxs("p",{"data-loc":"client/src/pages/ProblemDetail.tsx:645",className:"text-rose-500/60 text-sm",children:["A: ",k.answer]})]},R))})]})]},"interview")]})})]})})]})})]})})}function SN({code:n}){const[a,s]=A.useState(!1),o=()=>{navigator.clipboard.writeText(n),s(!0),setTimeout(()=>s(!1),2e3)};return b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:19",className:"bg-gray-900 rounded-lg overflow-hidden shadow-lg",children:[b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:20",className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:21",className:"flex items-center gap-2",children:[b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:22",className:"flex gap-1.5",children:[b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:23",className:"w-3 h-3 rounded-full bg-rose-400"}),b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:24",className:"w-3 h-3 rounded-full bg-amber-400"}),b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:25",className:"w-3 h-3 rounded-full bg-green-400"})]}),b.jsx("span",{"data-loc":"client/src/pages/Templates.tsx:27",className:"text-sm text-gray-400 ml-2",children:"Template.java"})]}),b.jsx("button",{"data-loc":"client/src/pages/Templates.tsx:29",onClick:o,className:"p-1.5 hover:bg-gray-700 rounded transition-colors",children:a?b.jsx(sy,{"data-loc":"client/src/pages/Templates.tsx:34",className:"w-4 h-4 text-green-400"}):b.jsx(oy,{"data-loc":"client/src/pages/Templates.tsx:36",className:"w-4 h-4 text-gray-400"})})]}),b.jsx("pre",{"data-loc":"client/src/pages/Templates.tsx:40",className:"p-4 overflow-x-auto text-sm",children:b.jsx("code",{"data-loc":"client/src/pages/Templates.tsx:41",className:"font-mono text-gray-200 leading-relaxed whitespace-pre",children:n})})]})}const fr={hash:{name:"哈希表模板",description:"用空间换时间，实现O(1)的查找",code:`// 哈希表通用模板
public ReturnType solve(int[] nums, int target) {
    // 1. 创建哈希表
    Map<KeyType, ValueType> map = new HashMap<>();
    
    // 2. 遍历数组
    for (int i = 0; i < nums.length; i++) {
        // 3. 计算需要查找的值
        int complement = target - nums[i];
        
        // 4. 在哈希表中查找
        if (map.containsKey(complement)) {
            // 找到了，返回结果
            return result;
        }
        
        // 5. 存入当前元素
        map.put(nums[i], i);
    }
    
    return defaultResult;
}`,keyPoints:["先查后存：避免元素和自己匹配","Key存什么：根据需要查找的内容决定","Value存什么：通常是下标或计数","时间O(n)，空间O(n)"]},twoPointer:{name:"双指针模板",description:"左右指针相向移动，适用于有序数组",code:`// 双指针通用模板
public ReturnType solve(int[] nums) {
    // 1. 初始化左右指针
    int left = 0;
    int right = nums.length - 1;
    
    // 2. 循环条件：左右指针未相遇
    while (left < right) {
        // 3. 根据条件移动指针
        if (满足条件) {
            // 记录结果
            left++;
            right--;
        } else if (需要增大) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
}`,keyPoints:["初始化：left=0, right=length-1","循环条件：left < right 或 left <= right","移动策略：根据当前状态决定移动哪个指针","时间O(n)，空间O(1)"]},slidingWindow:{name:"滑动窗口模板",description:"动态维护一个区间，适用于子串/子数组问题",code:`// 滑动窗口通用模板
public ReturnType solve(String s) {
    // 1. 初始化窗口边界和状态
    int left = 0;
    Map<Character, Integer> window = new HashMap<>();
    int result = 0;
    
    // 2. 右指针扩展窗口
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        // 更新窗口状态
        window.put(c, window.getOrDefault(c, 0) + 1);
        
        // 3. 收缩窗口（当不满足条件时）
        while (不满足条件) {
            char d = s.charAt(left);
            // 更新窗口状态
            window.put(d, window.get(d) - 1);
            left++;
        }
        
        // 4. 更新结果
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}`,keyPoints:["右指针负责扩展窗口","左指针负责收缩窗口","窗口状态用HashMap或数组维护","时间O(n)，空间O(k)"]},backtracking:{name:"回溯模板",description:"穷举所有可能，适用于排列组合问题",code:`// 回溯通用模板
public List<List<Integer>> solve(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, new ArrayList<>(), result);
    return result;
}

private void backtrack(int[] nums, List<Integer> path, 
                       List<List<Integer>> result) {
    // 1. 终止条件
    if (满足条件) {
        result.add(new ArrayList<>(path));
        return;
    }
    
    // 2. 遍历选择
    for (int i = start; i < nums.length; i++) {
        // 剪枝（可选）
        if (不满足条件) continue;
        
        // 3. 做选择
        path.add(nums[i]);
        
        // 4. 递归
        backtrack(nums, path, result);
        
        // 5. 撤销选择
        path.remove(path.size() - 1);
    }
}`,keyPoints:["做选择 → 递归 → 撤销选择","排列问题：用visited数组标记已使用","组合问题：用start参数避免重复","注意复制path：new ArrayList<>(path)"]},binarySearch:{name:"二分查找模板",description:"有序数组O(logn)查找",code:`// 二分查找通用模板
public int binarySearch(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;  // 找到目标
        } else if (nums[mid] < target) {
            left = mid + 1;  // 目标在右半边
        } else {
            right = mid - 1;  // 目标在左半边
        }
    }
    
    return -1;  // 未找到
}

// 找左边界
public int leftBound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}`,keyPoints:["防止溢出：mid = left + (right - left) / 2","左闭右闭：while (left <= right)","找左边界：找到后继续往左搜索","找右边界：找到后继续往右搜索"]},stack:{name:"单调栈模板",description:"找下一个更大/更小元素",code:`// 单调栈通用模板（找下一个更大元素）
public int[] nextGreater(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        // 当前元素比栈顶大，弹出栈顶
        while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
            int idx = stack.pop();
            result[idx] = nums[i];  // 找到了下一个更大元素
        }
        stack.push(i);  // 当前元素入栈
    }
    
    // 栈中剩余元素没有下一个更大元素
    while (!stack.isEmpty()) {
        result[stack.pop()] = -1;
    }
    
    return result;
}`,keyPoints:["栈中存下标而不是值","递增栈：找下一个更大元素","递减栈：找下一个更小元素","时间O(n)，每个元素最多入栈出栈各一次"]}};function TN(){var u,p;const[n,a]=A.useState("hash"),s=[{id:"hash",data:fr.hash,category:vn.find(d=>d.id==="hash")},{id:"twoPointer",data:fr.twoPointer,category:vn.find(d=>d.id==="two-pointer")},{id:"slidingWindow",data:fr.slidingWindow,category:vn.find(d=>d.id==="sliding-window")},{id:"backtracking",data:fr.backtracking,category:vn.find(d=>d.id==="backtracking")},{id:"binarySearch",data:fr.binarySearch,category:vn.find(d=>d.id==="binary-search")},{id:"stack",data:fr.stack,category:vn.find(d=>d.id==="stack")}],o=s.find(d=>d.id===n);return b.jsx(Ml,{"data-loc":"client/src/pages/Templates.tsx:286",children:b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:287",className:"min-h-screen pb-20",children:[b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:289",className:"bg-gradient-to-b from-rose-50/80 to-transparent",children:b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:290",className:"container py-6 sm:py-12",children:b.jsxs(Ze.div,{"data-loc":"client/src/pages/Templates.tsx:291",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[b.jsx("h1",{"data-loc":"client/src/pages/Templates.tsx:296",className:"text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-rose-800",children:"解题模板"}),b.jsx("p",{"data-loc":"client/src/pages/Templates.tsx:297",className:"text-rose-700/70 max-w-2xl text-sm sm:text-base",children:"掌握这些通用模板，可以快速解决80%的算法题目。每个模板都是经过提炼的最佳实践。"})]})})}),b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:304",className:"container py-4 sm:py-8",children:b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:305",className:"flex flex-col lg:flex-row gap-4 sm:gap-8",children:[b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:307",className:"lg:w-64 flex-shrink-0",children:b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:308",className:"lg:sticky lg:top-24 space-y-2 bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-rose-200/50",children:b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:309",className:"flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0",children:s.map(d=>{var m;return b.jsx("button",{"data-loc":"client/src/pages/Templates.tsx:311",onClick:()=>a(d.id),className:se("flex-shrink-0 lg:w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all",n===d.id?"bg-rose-100/80 text-rose-700 border border-rose-300":"hover:bg-rose-50/80 text-rose-600/80 bg-white/50"),children:b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:321",className:"flex items-center gap-2 sm:gap-3",children:[b.jsx("span",{"data-loc":"client/src/pages/Templates.tsx:322",className:"text-base sm:text-lg",children:(m=d.category)==null?void 0:m.icon}),b.jsx("span",{"data-loc":"client/src/pages/Templates.tsx:323",className:"font-medium text-sm sm:text-base whitespace-nowrap",children:d.data.name})]})},d.id)})})})}),b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:332",className:"flex-1 min-w-0",children:o&&b.jsxs(Ze.div,{"data-loc":"client/src/pages/Templates.tsx:334",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.3},className:"space-y-4 sm:space-y-6",children:[b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:342",className:"bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-rose-200/50 shadow-lg",children:[b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:343",className:"flex items-center gap-3 mb-4",children:[b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:344",className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-lg sm:text-xl bg-rose-100/80",children:(u=o.category)==null?void 0:u.icon}),b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:349",children:[b.jsx("h2",{"data-loc":"client/src/pages/Templates.tsx:350",className:"text-lg sm:text-xl font-bold text-rose-800",children:o.data.name}),b.jsx("p",{"data-loc":"client/src/pages/Templates.tsx:351",className:"text-xs sm:text-sm text-rose-600/70",children:o.data.description})]})]}),b.jsx(SN,{"data-loc":"client/src/pages/Templates.tsx:356",code:o.data.code})]}),b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:360",className:"bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-rose-200/50 shadow-lg",children:[b.jsxs("h3",{"data-loc":"client/src/pages/Templates.tsx:361",className:"text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-rose-800",children:[b.jsx(Fd,{"data-loc":"client/src/pages/Templates.tsx:362",className:"w-4 h-4 sm:w-5 sm:h-5 text-amber-500"}),"关键要点"]}),b.jsx("ul",{"data-loc":"client/src/pages/Templates.tsx:365",className:"space-y-2 sm:space-y-3",children:o.data.keyPoints.map((d,m)=>b.jsxs("li",{"data-loc":"client/src/pages/Templates.tsx:367",className:"flex items-start gap-2 sm:gap-3",children:[b.jsx(Kd,{"data-loc":"client/src/pages/Templates.tsx:368",className:"w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5"}),b.jsx("span",{"data-loc":"client/src/pages/Templates.tsx:369",className:"text-rose-700/80 text-sm sm:text-base",children:d})]},m))})]}),b.jsxs("div",{"data-loc":"client/src/pages/Templates.tsx:376",className:"bg-gradient-to-br from-rose-50/80 via-cream-50/90 to-amber-50/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-rose-200/50 shadow-lg",children:[b.jsxs("h3",{"data-loc":"client/src/pages/Templates.tsx:377",className:"text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-rose-800",children:[b.jsx(Ll,{"data-loc":"client/src/pages/Templates.tsx:378",className:"w-4 h-4 sm:w-5 sm:h-5 text-rose-500"}),"相关题目"]}),b.jsx("div",{"data-loc":"client/src/pages/Templates.tsx:381",className:"grid gap-2 sm:gap-3",children:(p=o.category)==null?void 0:p.problems.slice(0,5).map(d=>{const m=vy.find(h=>h.id===d);return m?b.jsxs("a",{"data-loc":"client/src/pages/Templates.tsx:386",href:`/problem/${d}`,className:"flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-white/70 hover:bg-rose-50/80 transition-colors border border-rose-200/50",children:[b.jsx("span",{"data-loc":"client/src/pages/Templates.tsx:391",className:"font-medium text-rose-800 text-sm sm:text-base",children:m.title}),b.jsx("span",{"data-loc":"client/src/pages/Templates.tsx:392",className:se("text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded",m.difficulty==="easy"&&"bg-green-100/80 text-green-700",m.difficulty==="medium"&&"bg-amber-100/80 text-amber-700",m.difficulty==="hard"&&"bg-red-100/80 text-red-700"),children:m.difficulty==="easy"?"简单":m.difficulty==="medium"?"中等":"困难"})]},d):null})})]})]},o.id)})]})})]})})}function jN(){return b.jsx(xy,{"data-loc":"client/src/App.tsx:13",base:"/".replace(/\/$/,""),children:b.jsxs(Cj,{"data-loc":"client/src/App.tsx:14",children:[b.jsx(Cs,{"data-loc":"client/src/App.tsx:15",path:"/",component:bN}),b.jsx(Cs,{"data-loc":"client/src/App.tsx:16",path:"/problem/:id",component:wN}),b.jsx(Cs,{"data-loc":"client/src/App.tsx:17",path:"/templates",component:TN}),b.jsx(Cs,{"data-loc":"client/src/App.tsx:18",path:"/404",component:Y0}),b.jsx(Cs,{"data-loc":"client/src/App.tsx:19",component:Y0})]})})}function ON(){return b.jsx(kj,{"data-loc":"client/src/App.tsx:27",children:b.jsx(Mj,{"data-loc":"client/src/App.tsx:28",defaultTheme:"light",switchable:!0,children:b.jsxs(HT,{"data-loc":"client/src/App.tsx:29",children:[b.jsx($2,{"data-loc":"client/src/App.tsx:30"}),b.jsx(jN,{"data-loc":"client/src/App.tsx:31"})]})})})}y2.createRoot(document.getElementById("root")).render(b.jsx(ON,{"data-loc":"client/src/main.tsx:5"}));
