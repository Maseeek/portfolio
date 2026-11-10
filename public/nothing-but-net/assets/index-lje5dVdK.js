const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LandingPage-DvSbVinX.js","assets/Navbar-D-3khrC-.js","assets/Navbar-CqB1nGYv.css","assets/proxy-DHHD6_PQ.js","assets/zap-opVuLpL2.js","assets/LandingPage-M7-GsOId.css","assets/Home-xtPkf4ih.js","assets/Loading-CgTVxg4c.js","assets/loading-DGTlYvuH.css","assets/Results-SBiGvOPv.js","assets/index-Dszpg6Rc.js","assets/Results-COwl7Knz.css","assets/RegisterPage-DTv0pFVv.js","assets/RegisterPage-CZk-PAd9.css","assets/Login-D4enlZPR.js","assets/Login-DWJlDF1t.css","assets/ProfilePage-BQ7PvLYX.js","assets/ProfilePage-GQGhuaPJ.css","assets/VerifyEmailPage-Bo7MuoF1.js","assets/VerificationSuccessPage-dY9jcLhq.js","assets/ForgotPasswordPage-fDlDom05.js","assets/ResetPasswordPage-CAqivikr.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();const BE="modulepreload",zE=function(a){return"/nothing-but-net/"+a},C_={},ea=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let f=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=f(n.map(h=>{if(h=zE(h),h in C_)return;C_[h]=!0;const g=h.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":BE,g||(x.as="script"),x.crossOrigin="",x.href=h,m&&x.setAttribute("nonce",m),document.head.appendChild(x),g)return new Promise((y,E)=>{x.addEventListener("load",y),x.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(f){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=f,window.dispatchEvent(d),!d.defaultPrevented)throw f}return o.then(f=>{for(const d of f||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})};function HE(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kd={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function VE(){if(D_)return Yo;D_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:u}}return Yo.Fragment=e,Yo.jsx=n,Yo.jsxs=n,Yo}var U_;function GE(){return U_||(U_=1,kd.exports=VE()),kd.exports}var Me=GE(),Xd={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function kE(){if(L_)return dt;L_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(O,Z,ye){this.props=O,this.context=Z,this.refs=T,this.updater=ye||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(O,Z,ye){this.props=O,this.context=Z,this.refs=T,this.updater=ye||y}var D=L.prototype=new v;D.constructor=L,E(D,S.prototype),D.isPureReactComponent=!0;var N=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function H(O,Z,ye,_e,Oe,je){return ye=je.ref,{$$typeof:a,type:O,key:Z,ref:ye!==void 0?ye:null,props:je}}function Q(O,Z){return H(O.type,Z,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function U(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return Z[ye]})}var k=/\/+/g;function re(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):Z.toString(36)}function se(){}function pe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(se,se):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function fe(O,Z,ye,_e,Oe){var je=typeof O;(je==="undefined"||je==="boolean")&&(O=null);var te=!1;if(O===null)te=!0;else switch(je){case"bigint":case"string":case"number":te=!0;break;case"object":switch(O.$$typeof){case a:case e:te=!0;break;case g:return te=O._init,fe(te(O._payload),Z,ye,_e,Oe)}}if(te)return Oe=Oe(O),te=_e===""?"."+re(O,0):_e,N(Oe)?(ye="",te!=null&&(ye=te.replace(k,"$&/")+"/"),fe(Oe,Z,ye,"",function(Ke){return Ke})):Oe!=null&&(A(Oe)&&(Oe=Q(Oe,ye+(Oe.key==null||O&&O.key===Oe.key?"":(""+Oe.key).replace(k,"$&/")+"/")+te)),Z.push(Oe)),1;te=0;var ve=_e===""?".":_e+":";if(N(O))for(var we=0;we<O.length;we++)_e=O[we],je=ve+re(_e,we),te+=fe(_e,Z,ye,je,Oe);else if(we=x(O),typeof we=="function")for(O=we.call(O),we=0;!(_e=O.next()).done;)_e=_e.value,je=ve+re(_e,we++),te+=fe(_e,Z,ye,je,Oe);else if(je==="object"){if(typeof O.then=="function")return fe(pe(O),Z,ye,_e,Oe);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return te}function I(O,Z,ye){if(O==null)return O;var _e=[],Oe=0;return fe(O,_e,"","",function(je){return Z.call(ye,je,Oe++)}),_e}function V(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var ie=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ee(){}return dt.Children={map:I,forEach:function(O,Z,ye){I(O,function(){Z.apply(this,arguments)},ye)},count:function(O){var Z=0;return I(O,function(){Z++}),Z},toArray:function(O){return I(O,function(Z){return Z})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},dt.Component=S,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=L,dt.StrictMode=r,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,dt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},dt.cache=function(O){return function(){return O.apply(null,arguments)}},dt.cloneElement=function(O,Z,ye){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var _e=E({},O.props),Oe=O.key,je=void 0;if(Z!=null)for(te in Z.ref!==void 0&&(je=void 0),Z.key!==void 0&&(Oe=""+Z.key),Z)!B.call(Z,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Z.ref===void 0||(_e[te]=Z[te]);var te=arguments.length-2;if(te===1)_e.children=ye;else if(1<te){for(var ve=Array(te),we=0;we<te;we++)ve[we]=arguments[we+2];_e.children=ve}return H(O.type,Oe,void 0,void 0,je,_e)},dt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},dt.createElement=function(O,Z,ye){var _e,Oe={},je=null;if(Z!=null)for(_e in Z.key!==void 0&&(je=""+Z.key),Z)B.call(Z,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Oe[_e]=Z[_e]);var te=arguments.length-2;if(te===1)Oe.children=ye;else if(1<te){for(var ve=Array(te),we=0;we<te;we++)ve[we]=arguments[we+2];Oe.children=ve}if(O&&O.defaultProps)for(_e in te=O.defaultProps,te)Oe[_e]===void 0&&(Oe[_e]=te[_e]);return H(O,je,void 0,void 0,null,Oe)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:d,render:O}},dt.isValidElement=A,dt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:V}},dt.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},dt.startTransition=function(O){var Z=P.T,ye={};P.T=ye;try{var _e=O(),Oe=P.S;Oe!==null&&Oe(ye,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(Ee,ie)}catch(je){ie(je)}finally{P.T=Z}},dt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},dt.use=function(O){return P.H.use(O)},dt.useActionState=function(O,Z,ye){return P.H.useActionState(O,Z,ye)},dt.useCallback=function(O,Z){return P.H.useCallback(O,Z)},dt.useContext=function(O){return P.H.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O,Z){return P.H.useDeferredValue(O,Z)},dt.useEffect=function(O,Z,ye){var _e=P.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _e.useEffect(O,Z)},dt.useId=function(){return P.H.useId()},dt.useImperativeHandle=function(O,Z,ye){return P.H.useImperativeHandle(O,Z,ye)},dt.useInsertionEffect=function(O,Z){return P.H.useInsertionEffect(O,Z)},dt.useLayoutEffect=function(O,Z){return P.H.useLayoutEffect(O,Z)},dt.useMemo=function(O,Z){return P.H.useMemo(O,Z)},dt.useOptimistic=function(O,Z){return P.H.useOptimistic(O,Z)},dt.useReducer=function(O,Z,ye){return P.H.useReducer(O,Z,ye)},dt.useRef=function(O){return P.H.useRef(O)},dt.useState=function(O){return P.H.useState(O)},dt.useSyncExternalStore=function(O,Z,ye){return P.H.useSyncExternalStore(O,Z,ye)},dt.useTransition=function(){return P.H.useTransition()},dt.version="19.1.0",dt}var N_;function Ip(){return N_||(N_=1,Xd.exports=kE()),Xd.exports}var oe=Ip();const nD=HE(oe);var Wd={exports:{}},jo={},qd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function XE(){return O_||(O_=1,function(a){function e(I,V){var ie=I.length;I.push(V);e:for(;0<ie;){var Ee=ie-1>>>1,O=I[Ee];if(0<o(O,V))I[Ee]=V,I[ie]=O,ie=Ee;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var V=I[0],ie=I.pop();if(ie!==V){I[0]=ie;e:for(var Ee=0,O=I.length,Z=O>>>1;Ee<Z;){var ye=2*(Ee+1)-1,_e=I[ye],Oe=ye+1,je=I[Oe];if(0>o(_e,ie))Oe<O&&0>o(je,_e)?(I[Ee]=je,I[Oe]=ie,Ee=Oe):(I[Ee]=_e,I[ye]=ie,Ee=ye);else if(Oe<O&&0>o(je,ie))I[Ee]=je,I[Oe]=ie,Ee=Oe;else break e}}return V}function o(I,V){var ie=I.sortIndex-V.sortIndex;return ie!==0?ie:I.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],h=[],g=1,_=null,x=3,y=!1,E=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=I)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(h)}}function P(I){if(T=!1,N(I),!E)if(n(m)!==null)E=!0,B||(B=!0,re());else{var V=n(h);V!==null&&fe(P,V.startTime-I)}}var B=!1,H=-1,Q=5,A=-1;function U(){return S?!0:!(a.unstable_now()-A<Q)}function k(){if(S=!1,B){var I=a.unstable_now();A=I;var V=!0;try{e:{E=!1,T&&(T=!1,L(H),H=-1),y=!0;var ie=x;try{t:{for(N(I),_=n(m);_!==null&&!(_.expirationTime>I&&U());){var Ee=_.callback;if(typeof Ee=="function"){_.callback=null,x=_.priorityLevel;var O=Ee(_.expirationTime<=I);if(I=a.unstable_now(),typeof O=="function"){_.callback=O,N(I),V=!0;break t}_===n(m)&&r(m),N(I)}else r(m);_=n(m)}if(_!==null)V=!0;else{var Z=n(h);Z!==null&&fe(P,Z.startTime-I),V=!1}}break e}finally{_=null,x=ie,y=!1}V=void 0}}finally{V?re():B=!1}}}var re;if(typeof D=="function")re=function(){D(k)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,pe=se.port2;se.port1.onmessage=k,re=function(){pe.postMessage(null)}}else re=function(){v(k,0)};function fe(I,V){H=v(function(){I(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(I){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var ie=x;x=V;try{return I()}finally{x=ie}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ie=x;x=I;try{return V()}finally{x=ie}},a.unstable_scheduleCallback=function(I,V,ie){var Ee=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ie+O,I={id:g++,callback:V,priorityLevel:I,startTime:ie,expirationTime:O,sortIndex:-1},ie>Ee?(I.sortIndex=ie,e(h,I),n(m)===null&&I===n(h)&&(T?(L(H),H=-1):T=!0,fe(P,ie-Ee))):(I.sortIndex=O,e(m,I),E||y||(E=!0,B||(B=!0,re()))),I},a.unstable_shouldYield=U,a.unstable_wrapCallback=function(I){var V=x;return function(){var ie=x;x=V;try{return I.apply(this,arguments)}finally{x=ie}}}}(Yd)),Yd}var P_;function WE(){return P_||(P_=1,qd.exports=XE()),qd.exports}var jd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function qE(){if(F_)return On;F_=1;var a=Ip();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,g)},On.flushSync=function(m){var h=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=g,r.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.1.0",On}var I_;function YE(){if(I_)return jd.exports;I_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),jd.exports=qE(),jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function jE(){if(B_)return jo;B_=1;var a=WE(),e=Ip(),n=YE();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===s)return d(c),t;if(p===l)return d(c),i;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=c,l=p;else{for(var M=!1,R=c.child;R;){if(R===s){M=!0,s=c,l=p;break}if(R===l){M=!0,l=c,s=p;break}R=R.sibling}if(!M){for(R=p.child;R;){if(R===s){M=!0,s=p,l=c;break}if(R===l){M=!0,l=p,s=c;break}R=R.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function h(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=h(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case D:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var fe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Ee=[],O=-1;function Z(t){return{current:t}}function ye(t){0>O||(t.current=Ee[O],Ee[O]=null,O--)}function _e(t,i){O++,Ee[O]=t.current,t.current=i}var Oe=Z(null),je=Z(null),te=Z(null),ve=Z(null);function we(t,i){switch(_e(te,i),_e(je,t),_e(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?i_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=i_(i),t=a_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Oe),_e(Oe,t)}function Ke(){ye(Oe),ye(je),ye(te)}function Ge(t){t.memoizedState!==null&&_e(ve,t);var i=Oe.current,s=a_(i,t.type);i!==s&&(_e(je,t),_e(Oe,s))}function mt(t){je.current===t&&(ye(Oe),ye(je)),ve.current===t&&(ye(ve),Go._currentValue=ie)}var Kt=Object.prototype.hasOwnProperty,gt=a.unstable_scheduleCallback,Mt=a.unstable_cancelCallback,Ot=a.unstable_shouldYield,st=a.unstable_requestPaint,At=a.unstable_now,G=a.unstable_getCurrentPriorityLevel,Pt=a.unstable_ImmediatePriority,yt=a.unstable_UserBlockingPriority,wt=a.unstable_NormalPriority,We=a.unstable_LowPriority,F=a.unstable_IdlePriority,b=a.log,w=a.unstable_setDisableYieldValue,X=null,K=null;function J(t){if(typeof b=="function"&&w(t),K&&typeof K.setStrictMode=="function")try{K.setStrictMode(X,t)}catch{}}var Ae=Math.clz32?Math.clz32:Je,Re=Math.log,ke=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Re(t)/ke|0)|0}var be=256,Ue=4194304;function He(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var c=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~p,l!==0?c=He(l):(M&=R,M!==0?c=He(M):s||(s=R&~t,s!==0&&(c=He(s))))):(R=l&~p,R!==0?c=He(R):M!==0?c=He(M):s||(s=l&~t,s!==0&&(c=He(s)))),c===0?0:i!==0&&i!==c&&(i&p)===0&&(p=c&-c,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:c}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ct(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Fe(){var t=Ue;return Ue<<=1,(Ue&62914560)===0&&(Ue=4194304),t}function Ce(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,i,s,l,c,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,ne=t.hiddenUpdates;for(s=M&~s;0<s;){var me=31-Ae(s),xe=1<<me;R[me]=0,z[me]=-1;var le=ne[me];if(le!==null)for(ne[me]=null,me=0;me<le.length;me++){var ce=le[me];ce!==null&&(ce.lane&=-536870913)}s&=~xe}l!==0&&Se(t,l,0),p!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~i))}function Se(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ae(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Le(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ae(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function It(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:M_(t.type))}function oi(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var xn=Math.random().toString(36).slice(2),Sn="__reactFiber$"+xn,An="__reactProps$"+xn,Ii="__reactContainer$"+xn,Js="__reactEvents$"+xn,Tl="__reactListeners$"+xn,Al="__reactHandles$"+xn,Bi="__reactResources$"+xn,ia="__reactMarker$"+xn;function Yr(t){delete t[Sn],delete t[An],delete t[Js],delete t[Tl],delete t[Al]}function aa(t){var i=t[Sn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ii]||s[Sn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=l_(t);t!==null;){if(s=t[Sn])return s;t=l_(t)}return i}t=s,s=t.parentNode}return null}function Si(t){if(t=t[Sn]||t[Ii]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Na(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function yi(t){var i=t[Bi];return i||(i=t[Bi]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function rn(t){t[ia]=!0}var $s=new Set,Rl={};function ra(t,i){Oa(t,i),Oa(t+"Capture",i)}function Oa(t,i){for(Rl[t]=i,t=0;t<i.length;t++)$s.add(i[t])}var Vc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wl={},Cl={};function C(t){return Kt.call(Cl,t)?!0:Kt.call(wl,t)?!1:Vc.test(t)?Cl[t]=!0:(wl[t]=!0,!1)}function Y(t,i,s){if(C(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function de(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ae(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var $,Ne;function ze(t){if($===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$=i&&i[1]||"",Ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$+t+Ne}var Pe=!1;function Ve(t,i){if(!t||Pe)return"";Pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var le=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){le=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){le=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],R=p[1];if(M&&R){var z=M.split(`
`),ne=R.split(`
`);for(c=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(l===z.length||c===ne.length)for(l=z.length-1,c=ne.length-1;1<=l&&0<=c&&z[l]!==ne[c];)c--;for(;1<=l&&0<=c;l--,c--)if(z[l]!==ne[c]){if(l!==1||c!==1)do if(l--,c--,0>c||z[l]!==ne[c]){var me=`
`+z[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=c);break}}}finally{Pe=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ze(s):""}function Ze(t){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return Ve(t.type,!1);case 11:return Ve(t.type.render,!1);case 1:return Ve(t.type,!0);case 31:return ze("Activity");default:return""}}function et(t){try{var i="";do i+=Ze(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Xe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Bt(t){var i=ft(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qt(t){t._valueTracker||(t._valueTracker=Bt(t))}function Zt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ft(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $e=/[\n"\\]/g;function lt(t){return t.replace($e,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Et(t,i,s,l,c,p,M,R){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Xe(i)):t.value!==""+Xe(i)&&(t.value=""+Xe(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?zi(t,M,Xe(i)):s!=null?zi(t,M,Xe(s)):l!=null&&t.removeAttribute("value"),c==null&&p!=null&&(t.defaultChecked=!!p),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Xe(R):t.removeAttribute("name")}function Ln(t,i,s,l,c,p,M,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+Xe(s):"",i=i!=null?""+Xe(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function zi(t,i,s){i==="number"&&Dt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function cn(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Xe(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Pa(t,i,s){if(i!=null&&(i=""+Xe(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Xe(s):""}function zt(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(fe(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Xe(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function sn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Vn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Rn(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in i)l=i[c],i.hasOwnProperty(c)&&s[c]!==l&&yn(t,c,l)}else for(var p in i)i.hasOwnProperty(p)&&yn(t,p,i[p])}function pr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),IS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return IS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Zr=null;function rm(t){var i=Si(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(Et(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+lt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=l[An]||null;if(!c)throw Error(r(90));Et(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Zt(l)}break e;case"textarea":Pa(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&cn(t,!!s.multiple,i,!1)}}}var Xc=!1;function sm(t,i,s){if(Xc)return t(i,s);Xc=!0;try{var l=t(i);return l}finally{if(Xc=!1,(jr!==null||Zr!==null)&&(mu(),jr&&(i=jr,t=Zr,Zr=jr=null,rm(i),t)))for(i=0;i<t.length;i++)rm(t[i])}}function eo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(oa)try{var to={};Object.defineProperty(to,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Wc=!1}var Fa=null,qc=null,Ul=null;function om(){if(Ul)return Ul;var t,i=qc,s=i.length,l,c="value"in Fa?Fa.value:Fa.textContent,p=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[p-l];l++);return Ul=c.slice(t,1<l?1-l:void 0)}function Ll(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function lm(){return!1}function Gn(t){function i(s,l,c,p,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Nl:lm,this.isPropagationStopped=lm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),i}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Gn(mr),no=g({},mr,{view:0,detail:0}),BS=Gn(no),Yc,jc,io,Pl=g({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Yc=t.screenX-io.screenX,jc=t.screenY-io.screenY):jc=Yc=0,io=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),um=Gn(Pl),zS=g({},Pl,{dataTransfer:0}),HS=Gn(zS),VS=g({},no,{relatedTarget:0}),Zc=Gn(VS),GS=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),kS=Gn(GS),XS=g({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WS=Gn(XS),qS=g({},mr,{data:0}),cm=Gn(qS),YS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ZS[t])?!!i[t]:!1}function Kc(){return KS}var QS=g({},no,{key:function(t){if(t.key){var i=YS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JS=Gn(QS),$S=g({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Gn($S),ey=g({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),ty=Gn(ey),ny=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Gn(ny),ay=g({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Gn(ay),sy=g({},mr,{newState:0,oldState:0}),oy=Gn(sy),ly=[9,13,27,32],Qc=oa&&"CompositionEvent"in window,ao=null;oa&&"documentMode"in document&&(ao=document.documentMode);var uy=oa&&"TextEvent"in window&&!ao,dm=oa&&(!Qc||ao&&8<ao&&11>=ao),hm=" ",pm=!1;function mm(t,i){switch(t){case"keyup":return ly.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function cy(t,i){switch(t){case"compositionend":return gm(i);case"keypress":return i.which!==32?null:(pm=!0,hm);case"textInput":return t=i.data,t===hm&&pm?null:t;default:return null}}function fy(t,i){if(Kr)return t==="compositionend"||!Qc&&mm(t,i)?(t=om(),Ul=qc=Fa=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dm&&i.locale!=="ko"?null:i.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!dy[t.type]:i==="textarea"}function vm(t,i,s,l){jr?Zr?Zr.push(l):Zr=[l]:jr=l,i=yu(i,"onChange"),0<i.length&&(s=new Ol("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ro=null,so=null;function hy(t){J0(t,0)}function Fl(t){var i=Na(t);if(Zt(i))return t}function xm(t,i){if(t==="change")return i}var Sm=!1;if(oa){var Jc;if(oa){var $c="oninput"in document;if(!$c){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),$c=typeof ym.oninput=="function"}Jc=$c}else Jc=!1;Sm=Jc&&(!document.documentMode||9<document.documentMode)}function Em(){ro&&(ro.detachEvent("onpropertychange",Mm),so=ro=null)}function Mm(t){if(t.propertyName==="value"&&Fl(so)){var i=[];vm(i,so,t,kc(t)),sm(hy,i)}}function py(t,i,s){t==="focusin"?(Em(),ro=i,so=s,ro.attachEvent("onpropertychange",Mm)):t==="focusout"&&Em()}function my(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(so)}function gy(t,i){if(t==="click")return Fl(i)}function _y(t,i){if(t==="input"||t==="change")return Fl(i)}function vy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:vy;function oo(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!Kt.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,i){var s=bm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=bm(s)}}function Am(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Am(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Dt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Dt(t.document)}return i}function ef(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var xy=oa&&"documentMode"in document&&11>=document.documentMode,Qr=null,tf=null,lo=null,nf=!1;function wm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;nf||Qr==null||Qr!==Dt(l)||(l=Qr,"selectionStart"in l&&ef(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&oo(lo,l)||(lo=l,l=yu(tf,"onSelect"),0<l.length&&(i=new Ol("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Qr)))}function gr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Jr={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},af={},Cm={};oa&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function _r(t){if(af[t])return af[t];if(!Jr[t])return t;var i=Jr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Cm)return af[t]=i[s];return t}var Dm=_r("animationend"),Um=_r("animationiteration"),Lm=_r("animationstart"),Sy=_r("transitionrun"),yy=_r("transitionstart"),Ey=_r("transitioncancel"),Nm=_r("transitionend"),Om=new Map,rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rf.push("scrollEnd");function Ei(t,i){Om.set(t,i),ra(i,[t])}var Pm=new WeakMap;function li(t,i){if(typeof t=="object"&&t!==null){var s=Pm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:et(i)},Pm.set(t,i),i)}return{value:t,source:i,stack:et(i)}}var ui=[],$r=0,sf=0;function Il(){for(var t=$r,i=sf=$r=0;i<t;){var s=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var c=ui[i];ui[i++]=null;var p=ui[i];if(ui[i++]=null,l!==null&&c!==null){var M=l.pending;M===null?c.next=c:(c.next=M.next,M.next=c),l.pending=c}p!==0&&Fm(s,c,p)}}function Bl(t,i,s,l){ui[$r++]=t,ui[$r++]=i,ui[$r++]=s,ui[$r++]=l,sf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function of(t,i,s,l){return Bl(t,i,s,l),zl(t)}function es(t,i){return Bl(t,null,null,i),zl(t)}function Fm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var c=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(c=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,c&&i!==null&&(c=31-Ae(s),t=p.hiddenUpdates,l=t[c],l===null?t[c]=[i]:l.push(i),i.lane=s|536870912),p):null}function zl(t){if(50<Oo)throw Oo=0,hd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ts={};function My(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,s,l){return new My(t,i,s,l)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,i){var s=t.alternate;return s===null?(s=Jn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Im(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Hl(t,i,s,l,c,p){var M=0;if(l=t,typeof t=="function")lf(t)&&(M=1);else if(typeof t=="string")M=TE(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=Jn(31,s,i,c),t.elementType=A,t.lanes=p,t;case E:return vr(s.children,c,p,i);case T:M=8,c|=24;break;case S:return t=Jn(12,s,i,c|2),t.elementType=S,t.lanes=p,t;case P:return t=Jn(13,s,i,c),t.elementType=P,t.lanes=p,t;case B:return t=Jn(19,s,i,c),t.elementType=B,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case D:M=10;break e;case L:M=9;break e;case N:M=11;break e;case H:M=14;break e;case Q:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Jn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function vr(t,i,s,l){return t=Jn(7,t,l,i),t.lanes=s,t}function uf(t,i,s){return t=Jn(6,t,null,i),t.lanes=s,t}function cf(t,i,s){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ns=[],is=0,Vl=null,Gl=0,ci=[],fi=0,xr=null,ua=1,ca="";function Sr(t,i){ns[is++]=Gl,ns[is++]=Vl,Vl=t,Gl=i}function Bm(t,i,s){ci[fi++]=ua,ci[fi++]=ca,ci[fi++]=xr,xr=t;var l=ua;t=ca;var c=32-Ae(l)-1;l&=~(1<<c),s+=1;var p=32-Ae(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,ua=1<<32-Ae(i)+c|s<<c|l,ca=p+t}else ua=1<<p|s<<c|l,ca=t}function ff(t){t.return!==null&&(Sr(t,1),Bm(t,1,0))}function df(t){for(;t===Vl;)Vl=ns[--is],ns[is]=null,Gl=ns[--is],ns[is]=null;for(;t===xr;)xr=ci[--fi],ci[fi]=null,ca=ci[--fi],ci[fi]=null,ua=ci[--fi],ci[fi]=null}var Bn=null,en=null,Ft=!1,yr=null,Hi=!1,hf=Error(r(519));function Er(t){var i=Error(r(418,""));throw fo(li(i,t)),hf}function zm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[Sn]=t,i[An]=l,s){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(s=0;s<Fo.length;s++)St(Fo[s],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":St("invalid",i),Ln(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),qt(i);break;case"select":St("invalid",i);break;case"textarea":St("invalid",i),zt(i,l.value,l.defaultValue,l.children),qt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||n_(i.textContent,s)?(l.popover!=null&&(St("beforetoggle",i),St("toggle",i)),l.onScroll!=null&&St("scroll",i),l.onScrollEnd!=null&&St("scrollend",i),l.onClick!=null&&(i.onclick=Eu),i=!0):i=!1,i||Er(t)}function Hm(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bn=Bn.return}}function uo(t){if(t!==Bn)return!1;if(!Ft)return Hm(t),Ft=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Cd(t.type,t.memoizedProps)),s=!s),s&&en&&Er(t),Hm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){en=bi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}en=null}}else i===27?(i=en,Ja(t.type)?(t=Nd,Nd=null,en=t):en=i):en=Bn?bi(t.stateNode.nextSibling):null;return!0}function co(){en=Bn=null,Ft=!1}function Vm(){var t=yr;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),yr=null),t}function fo(t){yr===null?yr=[t]:yr.push(t)}var pf=Z(null),Mr=null,fa=null;function Ia(t,i,s){_e(pf,i._currentValue),i._currentValue=s}function da(t){t._currentValue=pf.current,ye(pf)}function mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function gf(t,i,s,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var p=c.dependencies;if(p!==null){var M=c.child;p=p.firstContext;e:for(;p!==null;){var R=p;p=c;for(var z=0;z<i.length;z++)if(R.context===i[z]){p.lanes|=s,R=p.alternate,R!==null&&(R.lanes|=s),mf(p.return,s,t),l||(M=null);break e}p=R.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),mf(M,s,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function ho(t,i,s,l){t=null;for(var c=i,p=!1;c!==null;){if(!p){if((c.flags&524288)!==0)p=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var R=c.type;Qn(c.pendingProps.value,M.value)||(t!==null?t.push(R):t=[R])}}else if(c===ve.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}c=c.return}t!==null&&gf(i,t,s,l),i.flags|=262144}function kl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Mr=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Gm(Mr,t)}function Xl(t,i){return Mr===null&&br(t),Gm(t,i)}function Gm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(t===null)throw Error(r(308));fa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else fa=fa.next=i;return s}var by=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Ty=a.unstable_scheduleCallback,Ay=a.unstable_NormalPriority,mn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new by,data:new Map,refCount:0}}function po(t){t.refCount--,t.refCount===0&&Ty(Ay,function(){t.controller.abort()})}var mo=null,vf=0,as=0,rs=null;function Ry(t,i){if(mo===null){var s=mo=[];vf=0,as=Sd(),rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return vf++,i.then(km,km),i}function km(){if(--vf===0&&mo!==null){rs!==null&&(rs.status="fulfilled");var t=mo;mo=null,as=0,rs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function wy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(l.status="rejected",l.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),l}var Xm=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ry(t,i),Xm!==null&&Xm(t,i)};var Tr=Z(null);function xf(){var t=Tr.current;return t!==null?t:jt.pooledCache}function Wl(t,i){i===null?_e(Tr,Tr.current):_e(Tr,i.pool)}function Wm(){var t=xf();return t===null?null:{parent:mn._currentValue,pool:t}}var go=Error(r(460)),qm=Error(r(474)),ql=Error(r(542)),Sf={then:function(){}};function Ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yl(){}function jm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Yl,Yl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Km(t),t;default:if(typeof i.status=="string")i.then(Yl,Yl);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=l}},function(l){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Km(t),t}throw _o=i,go}}var _o=null;function Zm(){if(_o===null)throw Error(r(459));var t=_o;return _o=null,t}function Km(t){if(t===go||t===ql)throw Error(r(483))}var Ba=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,i=zl(t),Fm(t,null,s),i}return Bl(t,l,i,s),zl(t)}function vo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Le(t,s)}}function Mf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?c=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?c=p=i:p=p.next=i}else c=p=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var bf=!1;function xo(){if(bf){var t=rs;if(t!==null)throw t}}function So(t,i,s,l){bf=!1;var c=t.updateQueue;Ba=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var z=R,ne=z.next;z.next=null,M===null?p=ne:M.next=ne,M=z;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==M&&(R===null?me.firstBaseUpdate=ne:R.next=ne,me.lastBaseUpdate=z))}if(p!==null){var xe=c.baseState;M=0,me=ne=z=null,R=p;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(Tt&le)===le:(l&le)===le){le!==0&&le===as&&(bf=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var at=t,tt=R;le=i;var Wt=s;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){xe=at.call(Wt,xe,le);break e}xe=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,le=typeof at=="function"?at.call(Wt,xe,le):at,le==null)break e;xe=g({},xe,le);break e;case 2:Ba=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=c.callbacks,ce===null?c.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ne=me=ce,z=xe):me=me.next=ce,M|=le;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);me===null&&(z=xe),c.baseState=z,c.firstBaseUpdate=ne,c.lastBaseUpdate=me,p===null&&(c.shared.lanes=0),ja|=M,t.lanes=M,t.memoizedState=xe}}function Qm(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Jm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Qm(s[t],i)}var ss=Z(null),jl=Z(0);function $m(t,i){t=xa,_e(jl,t),_e(ss,i),xa=t|i.baseLanes}function Tf(){_e(jl,xa),_e(ss,ss.current)}function Af(){xa=jl.current,ye(ss),ye(jl)}var Va=0,_t=null,kt=null,fn=null,Zl=!1,os=!1,Ar=!1,Kl=0,yo=0,ls=null,Cy=0;function on(){throw Error(r(321))}function Rf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Qn(t[s],i[s]))return!1;return!0}function wf(t,i,s,l,c,p){return Va=p,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Fg:Ig,Ar=!1,p=s(l,c),Ar=!1,os&&(p=tg(i,s,l,c)),eg(t),p}function eg(t){I.H=nu;var i=kt!==null&&kt.next!==null;if(Va=0,fn=kt=_t=null,Zl=!1,yo=0,ls=null,i)throw Error(r(300));t===null||En||(t=t.dependencies,t!==null&&kl(t)&&(En=!0))}function tg(t,i,s,l){_t=t;var c=0;do{if(os&&(ls=null),yo=0,os=!1,25<=c)throw Error(r(301));if(c+=1,fn=kt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}I.H=Fy,p=i(s,l)}while(os);return p}function Dy(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Eo(i):i,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Cf(){var t=Kl!==0;return Kl=0,t}function Df(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Uf(t){if(Zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Zl=!1}Va=0,fn=kt=_t=null,os=!1,yo=Kl=0,ls=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?_t.memoizedState=fn=t:fn=fn.next=t,fn}function dn(){if(kt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var i=fn===null?_t.memoizedState:fn.next;if(i!==null)fn=i,kt=t;else{if(t===null)throw _t.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},fn===null?_t.memoizedState=fn=t:fn=fn.next=t}return fn}function Lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var i=yo;return yo+=1,ls===null&&(ls=[]),t=jm(ls,t,i),i=_t,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Fg:Ig),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===D)return Nn(t)}throw Error(r(438,String(t)))}function Nf(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_t.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Lf(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=U;return i.index++,s}function ha(t,i){return typeof i=="function"?i(t):i}function Jl(t){var i=dn();return Of(i,kt,t)}function Of(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var c=t.baseQueue,p=l.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}i.baseQueue=c=p,l.pending=null}if(p=t.baseState,c===null)t.memoizedState=p;else{i=c.next;var R=M=null,z=null,ne=i,me=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(Tt&xe)===xe:(Va&xe)===xe){var le=ne.revertLane;if(le===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===as&&(me=!0);else if((Va&le)===le){ne=ne.next,le===as&&(me=!0);continue}else xe={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=xe,M=p):z=z.next=xe,_t.lanes|=le,ja|=le;xe=ne.action,Ar&&s(p,xe),p=ne.hasEagerState?ne.eagerState:s(p,xe)}else le={lane:xe,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=le,M=p):z=z.next=le,_t.lanes|=xe,ja|=xe;ne=ne.next}while(ne!==null&&ne!==i);if(z===null?M=p:z.next=R,!Qn(p,t.memoizedState)&&(En=!0,me&&(s=rs,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=z,l.lastRenderedState=p}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Pf(t){var i=dn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,p=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);Qn(p,i.memoizedState)||(En=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function ng(t,i,s){var l=_t,c=dn(),p=Ft;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=i();var M=!Qn((kt||c).memoizedState,s);M&&(c.memoizedState=s,En=!0),c=c.queue;var R=rg.bind(null,l,c,t);if(Mo(2048,8,R,[t]),c.getSnapshot!==i||M||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,us(9,$l(),ag.bind(null,l,c,s,i),null),jt===null)throw Error(r(349));p||(Va&124)!==0||ig(l,i,s)}return s}function ig(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=Lf(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function ag(t,i,s,l){i.value=s,i.getSnapshot=l,sg(i)&&og(t)}function rg(t,i,s){return s(function(){sg(i)&&og(t)})}function sg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Qn(t,s)}catch{return!0}}function og(t){var i=es(t,2);i!==null&&ii(i,t,2)}function Ff(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Ar){J(!0);try{s()}finally{J(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},i}function lg(t,i,s,l){return t.baseState=s,Of(t,kt,typeof l=="function"?l:ha)}function Uy(t,i,s,l,c){if(tu(t))throw Error(r(485));if(t=i.action,t!==null){var p={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};I.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,ug(i,p)):(p.next=s.next,i.pending=s.next=p)}}function ug(t,i){var s=i.action,l=i.payload,c=t.state;if(i.isTransition){var p=I.T,M={};I.T=M;try{var R=s(c,l),z=I.S;z!==null&&z(M,R),cg(t,i,R)}catch(ne){If(t,i,ne)}finally{I.T=p}}else try{p=s(c,l),cg(t,i,p)}catch(ne){If(t,i,ne)}}function cg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){fg(t,i,l)},function(l){return If(t,i,l)}):fg(t,i,s)}function fg(t,i,s){i.status="fulfilled",i.value=s,dg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,ug(t,s)))}function If(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,dg(i),i=i.next;while(i!==l)}t.action=null}function dg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function hg(t,i){return i}function pg(t,i){if(Ft){var s=jt.formState;if(s!==null){e:{var l=_t;if(Ft){if(en){t:{for(var c=en,p=Hi;c.nodeType!==8;){if(!p){c=null;break t}if(c=bi(c.nextSibling),c===null){c=null;break t}}p=c.data,c=p==="F!"||p==="F"?c:null}if(c){en=bi(c.nextSibling),l=c.data==="F!";break e}}Er(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:i},s.queue=l,s=Ng.bind(null,_t,l),l.dispatch=s,l=Ff(!1),p=Gf.bind(null,_t,!1,l.queue),l=kn(),c={state:i,dispatch:null,action:t,pending:null},l.queue=c,s=Uy.bind(null,_t,c,p,s),c.dispatch=s,l.memoizedState=t,[i,s,!1]}function mg(t){var i=dn();return gg(i,kt,t)}function gg(t,i,s){if(i=Of(t,i,hg)[0],t=Jl(ha)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Eo(i)}catch(M){throw M===go?ql:M}else l=i;i=dn();var c=i.queue,p=c.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,us(9,$l(),Ly.bind(null,c,s),null)),[l,p,t]}function Ly(t,i){t.action=i}function _g(t){var i=dn(),s=kt;if(s!==null)return gg(i,s,t);dn(),i=i.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function us(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=_t.updateQueue,i===null&&(i=Lf(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function $l(){return{destroy:void 0,resource:void 0}}function vg(){return dn().memoizedState}function eu(t,i,s,l){var c=kn();l=l===void 0?null:l,_t.flags|=t,c.memoizedState=us(1|i,$l(),s,l)}function Mo(t,i,s,l){var c=dn();l=l===void 0?null:l;var p=c.memoizedState.inst;kt!==null&&l!==null&&Rf(l,kt.memoizedState.deps)?c.memoizedState=us(i,p,s,l):(_t.flags|=t,c.memoizedState=us(1|i,p,s,l))}function xg(t,i){eu(8390656,8,t,i)}function Sg(t,i){Mo(2048,8,t,i)}function yg(t,i){return Mo(4,2,t,i)}function Eg(t,i){return Mo(4,4,t,i)}function Mg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function bg(t,i,s){s=s!=null?s.concat([t]):null,Mo(4,4,Mg.bind(null,i,t),s)}function Bf(){}function Tg(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Rf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ag(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Rf(i,l[1]))return l[0];if(l=t(),Ar){J(!0);try{t()}finally{J(!1)}}return s.memoizedState=[l,i],l}function zf(t,i,s){return s===void 0||(Va&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=C0(),_t.lanes|=t,ja|=t,s)}function Rg(t,i,s,l){return Qn(s,i)?s:ss.current!==null?(t=zf(t,s,l),Qn(t,i)||(En=!0),t):(Va&42)===0?(En=!0,t.memoizedState=s):(t=C0(),_t.lanes|=t,ja|=t,i)}function wg(t,i,s,l,c){var p=V.p;V.p=p!==0&&8>p?p:8;var M=I.T,R={};I.T=R,Gf(t,!1,i,s);try{var z=c(),ne=I.S;if(ne!==null&&ne(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var me=wy(z,l);bo(t,i,me,ni(t))}else bo(t,i,l,ni(t))}catch(xe){bo(t,i,{then:function(){},status:"rejected",reason:xe},ni())}finally{V.p=p,I.T=M}}function Ny(){}function Hf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var c=Cg(t).queue;wg(t,c,i,ie,s===null?Ny:function(){return Dg(t),s(l)})}function Cg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:ie},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Dg(t){var i=Cg(t).next.queue;bo(t,i,{},ni())}function Vf(){return Nn(Go)}function Ug(){return dn().memoizedState}function Lg(){return dn().memoizedState}function Oy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();t=za(s);var l=Ha(i,t,s);l!==null&&(ii(l,i,s),vo(l,i,s)),i={cache:_f()},t.payload=i;return}i=i.return}}function Py(t,i,s){var l=ni();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},tu(t)?Og(i,s):(s=of(t,i,s,l),s!==null&&(ii(s,t,l),Pg(s,i,l)))}function Ng(t,i,s){var l=ni();bo(t,i,s,l)}function bo(t,i,s,l){var c={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(tu(t))Og(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,R=p(M,s);if(c.hasEagerState=!0,c.eagerState=R,Qn(R,M))return Bl(t,i,c,0),jt===null&&Il(),!1}catch{}finally{}if(s=of(t,i,c,l),s!==null)return ii(s,t,l),Pg(s,i,l),!0}return!1}function Gf(t,i,s,l){if(l={lane:2,revertLane:Sd(),action:l,hasEagerState:!1,eagerState:null,next:null},tu(t)){if(i)throw Error(r(479))}else i=of(t,s,l,2),i!==null&&ii(i,t,2)}function tu(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function Og(t,i){os=Zl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Pg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Le(t,s)}}var nu={readContext:Nn,use:Ql,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},Fg={readContext:Nn,use:Ql,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:xg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,eu(4194308,4,Mg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return eu(4194308,4,t,i)},useInsertionEffect:function(t,i){eu(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Ar){J(!0);try{t()}finally{J(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var c=s(i);if(Ar){J(!0);try{s(i)}finally{J(!1)}}}else c=i;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=Py.bind(null,_t,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Ff(t);var i=t.queue,s=Ng.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Bf,useDeferredValue:function(t,i){var s=kn();return zf(s,t,i)},useTransition:function(){var t=Ff(!1);return t=wg.bind(null,_t,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=_t,c=kn();if(Ft){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),jt===null)throw Error(r(349));(Tt&124)!==0||ig(l,i,s)}c.memoizedState=s;var p={value:s,getSnapshot:i};return c.queue=p,xg(rg.bind(null,l,p,t),[t]),l.flags|=2048,us(9,$l(),ag.bind(null,l,p,s,i),null),s},useId:function(){var t=kn(),i=jt.identifierPrefix;if(Ft){var s=ca,l=ua;s=(l&~(1<<32-Ae(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Kl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Cy++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Vf,useFormState:pg,useActionState:pg,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Gf.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:Nf,useCacheRefresh:function(){return kn().memoizedState=Oy.bind(null,_t)}},Ig={readContext:Nn,use:Ql,useCallback:Tg,useContext:Nn,useEffect:Sg,useImperativeHandle:bg,useInsertionEffect:yg,useLayoutEffect:Eg,useMemo:Ag,useReducer:Jl,useRef:vg,useState:function(){return Jl(ha)},useDebugValue:Bf,useDeferredValue:function(t,i){var s=dn();return Rg(s,kt.memoizedState,t,i)},useTransition:function(){var t=Jl(ha)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Eo(t),i]},useSyncExternalStore:ng,useId:Ug,useHostTransitionStatus:Vf,useFormState:mg,useActionState:mg,useOptimistic:function(t,i){var s=dn();return lg(s,kt,t,i)},useMemoCache:Nf,useCacheRefresh:Lg},Fy={readContext:Nn,use:Ql,useCallback:Tg,useContext:Nn,useEffect:Sg,useImperativeHandle:bg,useInsertionEffect:yg,useLayoutEffect:Eg,useMemo:Ag,useReducer:Pf,useRef:vg,useState:function(){return Pf(ha)},useDebugValue:Bf,useDeferredValue:function(t,i){var s=dn();return kt===null?zf(s,t,i):Rg(s,kt.memoizedState,t,i)},useTransition:function(){var t=Pf(ha)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Eo(t),i]},useSyncExternalStore:ng,useId:Ug,useHostTransitionStatus:Vf,useFormState:_g,useActionState:_g,useOptimistic:function(t,i){var s=dn();return kt!==null?lg(s,kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Lg},cs=null,To=0;function iu(t){var i=To;return To+=1,cs===null&&(cs=[]),jm(cs,t,i)}function Ao(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function au(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Bg(t){var i=t._init;return i(t._payload)}function zg(t){function i(j,W){if(t){var ee=j.deletions;ee===null?(j.deletions=[W],j.flags|=16):ee.push(W)}}function s(j,W){if(!t)return null;for(;W!==null;)i(j,W),W=W.sibling;return null}function l(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function c(j,W){return j=la(j,W),j.index=0,j.sibling=null,j}function p(j,W,ee){return j.index=ee,t?(ee=j.alternate,ee!==null?(ee=ee.index,ee<W?(j.flags|=67108866,W):ee):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function M(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,W,ee,ge){return W===null||W.tag!==6?(W=uf(ee,j.mode,ge),W.return=j,W):(W=c(W,ee),W.return=j,W)}function z(j,W,ee,ge){var Ye=ee.type;return Ye===E?me(j,W,ee.props.children,ge,ee.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===Q&&Bg(Ye)===W.type)?(W=c(W,ee.props),Ao(W,ee),W.return=j,W):(W=Hl(ee.type,ee.key,ee.props,null,j.mode,ge),Ao(W,ee),W.return=j,W)}function ne(j,W,ee,ge){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=cf(ee,j.mode,ge),W.return=j,W):(W=c(W,ee.children||[]),W.return=j,W)}function me(j,W,ee,ge,Ye){return W===null||W.tag!==7?(W=vr(ee,j.mode,ge,Ye),W.return=j,W):(W=c(W,ee),W.return=j,W)}function xe(j,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=uf(""+W,j.mode,ee),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return ee=Hl(W.type,W.key,W.props,null,j.mode,ee),Ao(ee,W),ee.return=j,ee;case y:return W=cf(W,j.mode,ee),W.return=j,W;case Q:var ge=W._init;return W=ge(W._payload),xe(j,W,ee)}if(fe(W)||re(W))return W=vr(W,j.mode,ee,null),W.return=j,W;if(typeof W.then=="function")return xe(j,iu(W),ee);if(W.$$typeof===D)return xe(j,Xl(j,W),ee);au(j,W)}return null}function le(j,W,ee,ge){var Ye=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Ye!==null?null:R(j,W,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:return ee.key===Ye?z(j,W,ee,ge):null;case y:return ee.key===Ye?ne(j,W,ee,ge):null;case Q:return Ye=ee._init,ee=Ye(ee._payload),le(j,W,ee,ge)}if(fe(ee)||re(ee))return Ye!==null?null:me(j,W,ee,ge,null);if(typeof ee.then=="function")return le(j,W,iu(ee),ge);if(ee.$$typeof===D)return le(j,W,Xl(j,ee),ge);au(j,ee)}return null}function ce(j,W,ee,ge,Ye){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get(ee)||null,R(W,j,""+ge,Ye);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case x:return j=j.get(ge.key===null?ee:ge.key)||null,z(W,j,ge,Ye);case y:return j=j.get(ge.key===null?ee:ge.key)||null,ne(W,j,ge,Ye);case Q:var vt=ge._init;return ge=vt(ge._payload),ce(j,W,ee,ge,Ye)}if(fe(ge)||re(ge))return j=j.get(ee)||null,me(W,j,ge,Ye,null);if(typeof ge.then=="function")return ce(j,W,ee,iu(ge),Ye);if(ge.$$typeof===D)return ce(j,W,ee,Xl(W,ge),Ye);au(W,ge)}return null}function at(j,W,ee,ge){for(var Ye=null,vt=null,Qe=W,nt=W=0,bn=null;Qe!==null&&nt<ee.length;nt++){Qe.index>nt?(bn=Qe,Qe=null):bn=Qe.sibling;var Ut=le(j,Qe,ee[nt],ge);if(Ut===null){Qe===null&&(Qe=bn);break}t&&Qe&&Ut.alternate===null&&i(j,Qe),W=p(Ut,W,nt),vt===null?Ye=Ut:vt.sibling=Ut,vt=Ut,Qe=bn}if(nt===ee.length)return s(j,Qe),Ft&&Sr(j,nt),Ye;if(Qe===null){for(;nt<ee.length;nt++)Qe=xe(j,ee[nt],ge),Qe!==null&&(W=p(Qe,W,nt),vt===null?Ye=Qe:vt.sibling=Qe,vt=Qe);return Ft&&Sr(j,nt),Ye}for(Qe=l(Qe);nt<ee.length;nt++)bn=ce(Qe,j,nt,ee[nt],ge),bn!==null&&(t&&bn.alternate!==null&&Qe.delete(bn.key===null?nt:bn.key),W=p(bn,W,nt),vt===null?Ye=bn:vt.sibling=bn,vt=bn);return t&&Qe.forEach(function(ir){return i(j,ir)}),Ft&&Sr(j,nt),Ye}function tt(j,W,ee,ge){if(ee==null)throw Error(r(151));for(var Ye=null,vt=null,Qe=W,nt=W=0,bn=null,Ut=ee.next();Qe!==null&&!Ut.done;nt++,Ut=ee.next()){Qe.index>nt?(bn=Qe,Qe=null):bn=Qe.sibling;var ir=le(j,Qe,Ut.value,ge);if(ir===null){Qe===null&&(Qe=bn);break}t&&Qe&&ir.alternate===null&&i(j,Qe),W=p(ir,W,nt),vt===null?Ye=ir:vt.sibling=ir,vt=ir,Qe=bn}if(Ut.done)return s(j,Qe),Ft&&Sr(j,nt),Ye;if(Qe===null){for(;!Ut.done;nt++,Ut=ee.next())Ut=xe(j,Ut.value,ge),Ut!==null&&(W=p(Ut,W,nt),vt===null?Ye=Ut:vt.sibling=Ut,vt=Ut);return Ft&&Sr(j,nt),Ye}for(Qe=l(Qe);!Ut.done;nt++,Ut=ee.next())Ut=ce(Qe,j,nt,Ut.value,ge),Ut!==null&&(t&&Ut.alternate!==null&&Qe.delete(Ut.key===null?nt:Ut.key),W=p(Ut,W,nt),vt===null?Ye=Ut:vt.sibling=Ut,vt=Ut);return t&&Qe.forEach(function(IE){return i(j,IE)}),Ft&&Sr(j,nt),Ye}function Wt(j,W,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:e:{for(var Ye=ee.key;W!==null;){if(W.key===Ye){if(Ye=ee.type,Ye===E){if(W.tag===7){s(j,W.sibling),ge=c(W,ee.props.children),ge.return=j,j=ge;break e}}else if(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===Q&&Bg(Ye)===W.type){s(j,W.sibling),ge=c(W,ee.props),Ao(ge,ee),ge.return=j,j=ge;break e}s(j,W);break}else i(j,W);W=W.sibling}ee.type===E?(ge=vr(ee.props.children,j.mode,ge,ee.key),ge.return=j,j=ge):(ge=Hl(ee.type,ee.key,ee.props,null,j.mode,ge),Ao(ge,ee),ge.return=j,j=ge)}return M(j);case y:e:{for(Ye=ee.key;W!==null;){if(W.key===Ye)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){s(j,W.sibling),ge=c(W,ee.children||[]),ge.return=j,j=ge;break e}else{s(j,W);break}else i(j,W);W=W.sibling}ge=cf(ee,j.mode,ge),ge.return=j,j=ge}return M(j);case Q:return Ye=ee._init,ee=Ye(ee._payload),Wt(j,W,ee,ge)}if(fe(ee))return at(j,W,ee,ge);if(re(ee)){if(Ye=re(ee),typeof Ye!="function")throw Error(r(150));return ee=Ye.call(ee),tt(j,W,ee,ge)}if(typeof ee.then=="function")return Wt(j,W,iu(ee),ge);if(ee.$$typeof===D)return Wt(j,W,Xl(j,ee),ge);au(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,W!==null&&W.tag===6?(s(j,W.sibling),ge=c(W,ee),ge.return=j,j=ge):(s(j,W),ge=uf(ee,j.mode,ge),ge.return=j,j=ge),M(j)):s(j,W)}return function(j,W,ee,ge){try{To=0;var Ye=Wt(j,W,ee,ge);return cs=null,Ye}catch(Qe){if(Qe===go||Qe===ql)throw Qe;var vt=Jn(29,Qe,null,j.mode);return vt.lanes=ge,vt.return=j,vt}finally{}}}var fs=zg(!0),Hg=zg(!1),di=Z(null),Vi=null;function Ga(t){var i=t.alternate;_e(gn,gn.current&1),_e(di,t),Vi===null&&(i===null||ss.current!==null||i.memoizedState!==null)&&(Vi=t)}function Vg(t){if(t.tag===22){if(_e(gn,gn.current),_e(di,t),Vi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Vi=t)}}else ka()}function ka(){_e(gn,gn.current),_e(di,di.current)}function pa(t){ye(di),Vi===t&&(Vi=null),ye(gn)}var gn=Z(0);function ru(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Ld(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function kf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Xf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ni(),c=za(l);c.payload=i,s!=null&&(c.callback=s),i=Ha(t,c,l),i!==null&&(ii(i,t,l),vo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ni(),c=za(l);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Ha(t,c,l),i!==null&&(ii(i,t,l),vo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ni(),l=za(s);l.tag=2,i!=null&&(l.callback=i),i=Ha(t,l,s),i!==null&&(ii(i,t,s),vo(i,t,s))}};function Gg(t,i,s,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!oo(s,l)||!oo(c,p):!0}function kg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Xf.enqueueReplaceState(i,i.state,null)}function Rr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var c in t)s[c]===void 0&&(s[c]=t[c])}return s}var su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xg(t){su(t)}function Wg(t){console.error(t)}function qg(t){su(t)}function ou(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wf(t,i,s){return s=za(s),s.tag=3,s.payload={element:null},s.callback=function(){ou(t,i)},s}function jg(t){return t=za(t),t.tag=3,t}function Zg(t,i,s,l){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var p=l.value;t.payload=function(){return c(p)},t.callback=function(){Yg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Yg(i,s,l),typeof c!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Iy(t,i,s,l,c){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ho(i,s,c,!0),s=di.current,s!==null){switch(s.tag){case 13:return Vi===null?md():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=c,l===Sf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),_d(t,l,c)),!1;case 22:return s.flags|=65536,l===Sf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),_d(t,l,c)),!1}throw Error(r(435,s.tag))}return _d(t,l,c),md(),!1}if(Ft)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,l!==hf&&(t=Error(r(422),{cause:l}),fo(li(t,s)))):(l!==hf&&(i=Error(r(423),{cause:l}),fo(li(i,s))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=li(l,s),c=Wf(t.stateNode,l,c),Mf(t,c),tn!==4&&(tn=2)),!1;var p=Error(r(520),{cause:l});if(p=li(p,s),No===null?No=[p]:No.push(p),tn!==4&&(tn=2),i===null)return!0;l=li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=c&-c,s.lanes|=t,t=Wf(s.stateNode,l,t),Mf(s,t),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Za===null||!Za.has(p))))return s.flags|=65536,c&=-c,s.lanes|=c,c=jg(c),Zg(c,t,s,l),Mf(s,c),!1}s=s.return}while(s!==null);return!1}var Kg=Error(r(461)),En=!1;function wn(t,i,s,l){i.child=t===null?Hg(i,null,s,l):fs(i,t.child,s,l)}function Qg(t,i,s,l,c){s=s.render;var p=i.ref;if("ref"in l){var M={};for(var R in l)R!=="ref"&&(M[R]=l[R])}else M=l;return br(i),l=wf(t,i,s,M,p,c),R=Cf(),t!==null&&!En?(Df(t,i,c),ma(t,i,c)):(Ft&&R&&ff(i),i.flags|=1,wn(t,i,l,c),i.child)}function Jg(t,i,s,l,c){if(t===null){var p=s.type;return typeof p=="function"&&!lf(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,$g(t,i,p,l,c)):(t=Hl(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!$f(t,c)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:oo,s(M,l)&&t.ref===i.ref)return ma(t,i,c)}return i.flags|=1,t=la(p,l),t.ref=i.ref,t.return=i,i.child=t}function $g(t,i,s,l,c){if(t!==null){var p=t.memoizedProps;if(oo(p,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=p,$f(t,c))(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,ma(t,i,c)}return qf(t,i,s,l,c)}function e0(t,i,s){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=p!==null?p.baseLanes|s:s,t!==null){for(c=i.child=t.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return t0(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(i,p!==null?p.cachePool:null),p!==null?$m(i,p):Tf(),Vg(i);else return i.lanes=i.childLanes=536870912,t0(t,i,p!==null?p.baseLanes|s:s,s)}else p!==null?(Wl(i,p.cachePool),$m(i,p),ka(),i.memoizedState=null):(t!==null&&Wl(i,null),Tf(),ka());return wn(t,i,c,s),i.child}function t0(t,i,s,l){var c=xf();return c=c===null?null:{parent:mn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},t!==null&&Wl(i,null),Tf(),Vg(i),t!==null&&ho(t,i,l,!0),null}function lu(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function qf(t,i,s,l,c){return br(i),s=wf(t,i,s,l,void 0,c),l=Cf(),t!==null&&!En?(Df(t,i,c),ma(t,i,c)):(Ft&&l&&ff(i),i.flags|=1,wn(t,i,s,c),i.child)}function n0(t,i,s,l,c,p){return br(i),i.updateQueue=null,s=tg(i,l,s,c),eg(t),l=Cf(),t!==null&&!En?(Df(t,i,p),ma(t,i,p)):(Ft&&l&&ff(i),i.flags|=1,wn(t,i,s,p),i.child)}function i0(t,i,s,l,c){if(br(i),i.stateNode===null){var p=ts,M=s.contextType;typeof M=="object"&&M!==null&&(p=Nn(M)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Xf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},yf(i),M=s.contextType,p.context=typeof M=="object"&&M!==null?Nn(M):ts,p.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(kf(i,s,M,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&Xf.enqueueReplaceState(p,p.state,null),So(i,l,p,c),xo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){p=i.stateNode;var R=i.memoizedProps,z=Rr(s,R);p.props=z;var ne=p.context,me=s.contextType;M=ts,typeof me=="object"&&me!==null&&(M=Nn(me));var xe=s.getDerivedStateFromProps;me=typeof xe=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||ne!==M)&&kg(i,p,l,M),Ba=!1;var le=i.memoizedState;p.state=le,So(i,l,p,c),xo(),ne=i.memoizedState,R||le!==ne||Ba?(typeof xe=="function"&&(kf(i,s,xe,l),ne=i.memoizedState),(z=Ba||Gg(i,s,z,l,le,ne,M))?(me||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),p.props=l,p.state=ne,p.context=M,l=z):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,Ef(t,i),M=i.memoizedProps,me=Rr(s,M),p.props=me,xe=i.pendingProps,le=p.context,ne=s.contextType,z=ts,typeof ne=="object"&&ne!==null&&(z=Nn(ne)),R=s.getDerivedStateFromProps,(ne=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==xe||le!==z)&&kg(i,p,l,z),Ba=!1,le=i.memoizedState,p.state=le,So(i,l,p,c),xo();var ce=i.memoizedState;M!==xe||le!==ce||Ba||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof R=="function"&&(kf(i,s,R,l),ce=i.memoizedState),(me=Ba||Gg(i,s,me,l,le,ce,z)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(ne||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ce,z),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ce,z)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),p.props=l,p.state=ce,p.context=z,l=me):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),l=!1)}return p=l,lu(t,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,t!==null&&l?(i.child=fs(i,t.child,null,c),i.child=fs(i,null,s,c)):wn(t,i,s,c),i.memoizedState=p.state,t=i.child):t=ma(t,i,c),t}function a0(t,i,s,l){return co(),i.flags|=256,wn(t,i,s,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(t){return{baseLanes:t,cachePool:Wm()}}function Zf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function r0(t,i,s){var l=i.pendingProps,c=!1,p=(i.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),M&&(c=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ft){if(c?Ga(i):ka(),Ft){var R=en,z;if(z=R){e:{for(z=R,R=Hi;z.nodeType!==8;){if(!R){R=null;break e}if(z=bi(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(i.memoizedState={dehydrated:R,treeContext:xr!==null?{id:ua,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},z=Jn(18,null,null,0),z.stateNode=R,z.return=i,i.child=z,Bn=i,en=null,z=!0):z=!1}z||Er(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Ld(R)?i.lanes=32:i.lanes=536870912,null;pa(i)}return R=l.children,l=l.fallback,c?(ka(),c=i.mode,R=uu({mode:"hidden",children:R},c),l=vr(l,c,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,c=i.child,c.memoizedState=jf(s),c.childLanes=Zf(t,M,s),i.memoizedState=Yf,l):(Ga(i),Kf(i,R))}if(z=t.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(p)i.flags&256?(Ga(i),i.flags&=-257,i=Qf(t,i,s)):i.memoizedState!==null?(ka(),i.child=t.child,i.flags|=128,i=null):(ka(),c=l.fallback,R=i.mode,l=uu({mode:"visible",children:l.children},R),c=vr(c,R,s,null),c.flags|=2,l.return=i,c.return=i,l.sibling=c,i.child=l,fs(i,t.child,null,s),l=i.child,l.memoizedState=jf(s),l.childLanes=Zf(t,M,s),i.memoizedState=Yf,i=c);else if(Ga(i),Ld(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var ne=M.dgst;M=ne,l=Error(r(419)),l.stack="",l.digest=M,fo({value:l,source:null,stack:null}),i=Qf(t,i,s)}else if(En||ho(t,i,s,!1),M=(s&t.childLanes)!==0,En||M){if(M=jt,M!==null&&(l=s&-s,l=(l&42)!==0?1:it(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==z.retryLane))throw z.retryLane=l,es(t,l),ii(M,t,l),Kg;R.data==="$?"||md(),i=Qf(t,i,s)}else R.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,en=bi(R.nextSibling),Bn=i,Ft=!0,yr=null,Hi=!1,t!==null&&(ci[fi++]=ua,ci[fi++]=ca,ci[fi++]=xr,ua=t.id,ca=t.overflow,xr=i),i=Kf(i,l.children),i.flags|=4096);return i}return c?(ka(),c=l.fallback,R=i.mode,z=t.child,ne=z.sibling,l=la(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,ne!==null?c=la(ne,c):(c=vr(c,R,s,null),c.flags|=2),c.return=i,l.return=i,l.sibling=c,i.child=l,l=c,c=i.child,R=t.child.memoizedState,R===null?R=jf(s):(z=R.cachePool,z!==null?(ne=mn._currentValue,z=z.parent!==ne?{parent:ne,pool:ne}:z):z=Wm(),R={baseLanes:R.baseLanes|s,cachePool:z}),c.memoizedState=R,c.childLanes=Zf(t,M,s),i.memoizedState=Yf,l):(Ga(i),s=t.child,t=s.sibling,s=la(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Kf(t,i){return i=uu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function uu(t,i){return t=Jn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Qf(t,i,s){return fs(i,t.child,null,s),t=Kf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function s0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),mf(t.return,i,s)}function Jf(t,i,s,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=c)}function o0(t,i,s){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(wn(t,i,l.children,s),l=gn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s0(t,s,i);else if(t.tag===19)s0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(_e(gn,l),c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&ru(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Jf(i,!1,c,s,p);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ru(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Jf(i,!0,s,null,p);break;case"together":Jf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ja|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ho(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=la(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=la(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function $f(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function By(t,i,s){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Ia(i,mn,t.memoizedState.cache),co();break;case 27:case 5:Ge(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Ia(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(i),i.flags|=128,null):(s&i.child.childLanes)!==0?r0(t,i,s):(Ga(i),t=ma(t,i,s),t!==null?t.sibling:null);Ga(i);break;case 19:var c=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ho(t,i,s,!1),l=(s&i.childLanes)!==0),c){if(l)return o0(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(gn,gn.current),l)break;return null;case 22:case 23:return i.lanes=0,e0(t,i,s);case 24:Ia(i,mn,t.memoizedState.cache)}return ma(t,i,s)}function l0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)En=!0;else{if(!$f(t,s)&&(i.flags&128)===0)return En=!1,By(t,i,s);En=(t.flags&131072)!==0}else En=!1,Ft&&(i.flags&1048576)!==0&&Bm(i,Gl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,c=l._init;if(l=c(l._payload),i.type=l,typeof l=="function")lf(l)?(t=Rr(l,t),i.tag=1,i=i0(null,i,l,t,s)):(i.tag=0,i=qf(null,i,l,t,s));else{if(l!=null){if(c=l.$$typeof,c===N){i.tag=11,i=Qg(null,i,l,t,s);break e}else if(c===H){i.tag=14,i=Jg(null,i,l,t,s);break e}}throw i=pe(l)||l,Error(r(306,i,""))}}return i;case 0:return qf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,c=Rr(l,i.pendingProps),i0(t,i,l,c,s);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var p=i.memoizedState;c=p.element,Ef(t,i),So(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Ia(i,mn,l),l!==p.cache&&gf(i,[mn],s,!0),xo(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=a0(t,i,l,s);break e}else if(l!==c){c=li(Error(r(424)),i),fo(c),i=a0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=bi(t.firstChild),Bn=i,Ft=!0,yr=null,Hi=!0,s=Hg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(co(),l===c){i=ma(t,i,s);break e}wn(t,i,l,s)}i=i.child}return i;case 26:return lu(t,i),t===null?(s=d_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ft||(s=i.type,t=i.pendingProps,l=Mu(te.current).createElement(s),l[Sn]=i,l[An]=t,Dn(l,s,t),rn(l),i.stateNode=l):i.memoizedState=d_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ge(i),t===null&&Ft&&(l=i.stateNode=u_(i.type,i.pendingProps,te.current),Bn=i,Hi=!0,c=en,Ja(i.type)?(Nd=c,en=bi(l.firstChild)):en=c),wn(t,i,i.pendingProps.children,s),lu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ft&&((c=l=en)&&(l=dE(l,i.type,i.pendingProps,Hi),l!==null?(i.stateNode=l,Bn=i,en=bi(l.firstChild),Hi=!1,c=!0):c=!1),c||Er(i)),Ge(i),c=i.type,p=i.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,Cd(c,p)?l=null:M!==null&&Cd(c,M)&&(i.flags|=32),i.memoizedState!==null&&(c=wf(t,i,Dy,null,null,s),Go._currentValue=c),lu(t,i),wn(t,i,l,s),i.child;case 6:return t===null&&Ft&&((t=s=en)&&(s=hE(s,i.pendingProps,Hi),s!==null?(i.stateNode=s,Bn=i,en=null,t=!0):t=!1),t||Er(i)),null;case 13:return r0(t,i,s);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,s):wn(t,i,l,s),i.child;case 11:return Qg(t,i,i.type,i.pendingProps,s);case 7:return wn(t,i,i.pendingProps,s),i.child;case 8:return wn(t,i,i.pendingProps.children,s),i.child;case 12:return wn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ia(i,i.type,l.value),wn(t,i,l.children,s),i.child;case 9:return c=i.type._context,l=i.pendingProps.children,br(i),c=Nn(c),l=l(c),i.flags|=1,wn(t,i,l,s),i.child;case 14:return Jg(t,i,i.type,i.pendingProps,s);case 15:return $g(t,i,i.type,i.pendingProps,s);case 19:return o0(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=uu(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=la(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return e0(t,i,s);case 24:return br(i),l=Nn(mn),t===null?(c=xf(),c===null&&(c=jt,p=_f(),c.pooledCache=p,p.refCount++,p!==null&&(c.pooledCacheLanes|=s),c=p),i.memoizedState={parent:l,cache:c},yf(i),Ia(i,mn,c)):((t.lanes&s)!==0&&(Ef(t,i),So(i,null,null,s),xo()),c=t.memoizedState,p=i.memoizedState,c.parent!==l?(c={parent:l,cache:l},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Ia(i,mn,l)):(l=p.cache,Ia(i,mn,l),l!==c.cache&&gf(i,[mn],s,!0))),wn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ga(t){t.flags|=4}function u0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!__(i)){if(i=di.current,i!==null&&((Tt&4194048)===Tt?Vi!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||i!==Vi))throw _o=Sf,qm;t.flags|=8192}}function cu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Fe():536870912,t.lanes|=i,ms|=i)}function Ro(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function zy(t,i,s){var l=i.pendingProps;switch(df(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),da(mn),Ke(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(uo(i)?ga(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vm())),Jt(i),null;case 26:return s=i.memoizedState,t===null?(ga(i),s!==null?(Jt(i),u0(i,s)):(Jt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ga(i),Jt(i),u0(i,s)):(Jt(i),i.flags&=-16777217):(t.memoizedProps!==l&&ga(i),Jt(i),i.flags&=-16777217),null;case 27:mt(i),s=te.current;var c=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Jt(i),null}t=Oe.current,uo(i)?zm(i):(t=u_(c,l,s),i.stateNode=t,ga(i))}return Jt(i),null;case 5:if(mt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Jt(i),null}if(t=Oe.current,uo(i))zm(i);else{switch(c=Mu(te.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(s,{is:l.is}):c.createElement(s)}}t[Sn]=i,t[An]=l;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=t;e:switch(Dn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ga(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ga(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=te.current,uo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,c=Bn,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[Sn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||n_(t.nodeValue,s)),t||Er(i)}else t=Mu(t).createTextNode(l),t[Sn]=i,i.stateNode=t}return Jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=uo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Sn]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),c=!1}else c=Vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(pa(i),i):(pa(i),null)}if(pa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==c&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),cu(i,i.updateQueue),Jt(i),null;case 4:return Ke(),t===null&&bd(i.stateNode.containerInfo),Jt(i),null;case 10:return da(i.type),Jt(i),null;case 19:if(ye(gn),c=i.memoizedState,c===null)return Jt(i),null;if(l=(i.flags&128)!==0,p=c.rendering,p===null)if(l)Ro(c,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=ru(t),p!==null){for(i.flags|=128,Ro(c,!1),t=p.updateQueue,i.updateQueue=t,cu(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Im(s,t),s=s.sibling;return _e(gn,gn.current&1|2),i.child}t=t.sibling}c.tail!==null&&At()>hu&&(i.flags|=128,l=!0,Ro(c,!1),i.lanes=4194304)}else{if(!l)if(t=ru(p),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,cu(i,t),Ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Ft)return Jt(i),null}else 2*At()-c.renderingStartTime>hu&&s!==536870912&&(i.flags|=128,l=!0,Ro(c,!1),i.lanes=4194304);c.isBackwards?(p.sibling=i.child,i.child=p):(t=c.last,t!==null?t.sibling=p:i.child=p,c.last=p)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=At(),i.sibling=null,t=gn.current,_e(gn,l?t&1|2:t&1),i):(Jt(i),null);case 22:case 23:return pa(i),Af(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),s=i.updateQueue,s!==null&&cu(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ye(Tr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),da(mn),Jt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Hy(t,i){switch(df(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return da(mn),Ke(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return mt(i),null;case 13:if(pa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));co()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ye(gn),null;case 4:return Ke(),null;case 10:return da(i.type),null;case 22:case 23:return pa(i),Af(),t!==null&&ye(Tr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return da(mn),null;case 25:return null;default:return null}}function c0(t,i){switch(df(i),i.tag){case 3:da(mn),Ke();break;case 26:case 27:case 5:mt(i);break;case 4:Ke();break;case 13:pa(i);break;case 19:ye(gn);break;case 10:da(i.type);break;case 22:case 23:pa(i),Af(),t!==null&&ye(Tr);break;case 24:da(mn)}}function wo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==c)}}catch(R){Yt(i,i.return,R)}}function Xa(t,i,s){try{var l=i.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var p=c.next;l=p;do{if((l.tag&t)===t){var M=l.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,c=i;var z=s,ne=R;try{ne()}catch(me){Yt(c,z,me)}}}l=l.next}while(l!==p)}}catch(me){Yt(i,i.return,me)}}function f0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Jm(i,s)}catch(l){Yt(t,t.return,l)}}}function d0(t,i,s){s.props=Rr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,i,l)}}function Co(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(c){Yt(t,i,c)}}function Gi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(c){Yt(t,i,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Yt(t,i,c)}else s.current=null}function h0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(c){Yt(t,t.return,c)}}function ed(t,i,s){try{var l=t.stateNode;oE(l,t.type,s,i),l[An]=i}catch(c){Yt(t,t.return,c)}}function p0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Eu));else if(l!==4&&(l===27&&Ja(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(nd(t,i,s),t=t.sibling;t!==null;)nd(t,i,s),t=t.sibling}function fu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ja(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(fu(t,i,s),t=t.sibling;t!==null;)fu(t,i,s),t=t.sibling}function m0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Dn(i,l,s),i[Sn]=t,i[An]=s}catch(p){Yt(t,t.return,p)}}var _a=!1,ln=!1,id=!1,g0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Vy(t,i){if(t=t.containerInfo,Rd=Cu,t=Rm(t),ef(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,R=-1,z=-1,ne=0,me=0,xe=t,le=null;t:for(;;){for(var ce;xe!==s||c!==0&&xe.nodeType!==3||(R=M+c),xe!==p||l!==0&&xe.nodeType!==3||(z=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)le=xe,xe=ce;for(;;){if(xe===t)break t;if(le===s&&++ne===c&&(R=M),le===p&&++me===l&&(z=M),(ce=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ce}s=R===-1||z===-1?null:{start:R,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(wd={focusedElem:t,selectionRange:s},Cu=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,p=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=i,c=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var at=Rr(s.type,c,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(at,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Yt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Ud(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function _0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Wa(t,s),l&4&&wo(5,s);break;case 1:if(Wa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Yt(s,s.return,M)}else{var c=Rr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(c,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Yt(s,s.return,M)}}l&64&&f0(s),l&512&&Co(s,s.return);break;case 3:if(Wa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Jm(t,i)}catch(M){Yt(s,s.return,M)}}break;case 27:i===null&&l&4&&m0(s);case 26:case 5:Wa(t,s),i===null&&l&4&&h0(s),l&512&&Co(s,s.return);break;case 12:Wa(t,s);break;case 13:Wa(t,s),l&4&&S0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Ky.bind(null,s),pE(t,s))));break;case 22:if(l=s.memoizedState!==null||_a,!l){i=i!==null&&i.memoizedState!==null||ln,c=_a;var p=ln;_a=l,(ln=i)&&!p?qa(t,s,(s.subtreeFlags&8772)!==0):Wa(t,s),_a=c,ln=p}break;case 30:break;default:Wa(t,s)}}function v0(t){var i=t.alternate;i!==null&&(t.alternate=null,v0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Yr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Xn=!1;function va(t,i,s){for(s=s.child;s!==null;)x0(t,i,s),s=s.sibling}function x0(t,i,s){if(K&&typeof K.onCommitFiberUnmount=="function")try{K.onCommitFiberUnmount(X,s)}catch{}switch(s.tag){case 26:ln||Gi(s,i),va(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ln||Gi(s,i);var l=Qt,c=Xn;Ja(s.type)&&(Qt=s.stateNode,Xn=!1),va(t,i,s),Bo(s.stateNode),Qt=l,Xn=c;break;case 5:ln||Gi(s,i);case 6:if(l=Qt,c=Xn,Qt=null,va(t,i,s),Qt=l,Xn=c,Qt!==null)if(Xn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(s.stateNode)}catch(p){Yt(s,i,p)}else try{Qt.removeChild(s.stateNode)}catch(p){Yt(s,i,p)}break;case 18:Qt!==null&&(Xn?(t=Qt,o_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),qo(t)):o_(Qt,s.stateNode));break;case 4:l=Qt,c=Xn,Qt=s.stateNode.containerInfo,Xn=!0,va(t,i,s),Qt=l,Xn=c;break;case 0:case 11:case 14:case 15:ln||Xa(2,s,i),ln||Xa(4,s,i),va(t,i,s);break;case 1:ln||(Gi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&d0(s,i,l)),va(t,i,s);break;case 21:va(t,i,s);break;case 22:ln=(l=ln)||s.memoizedState!==null,va(t,i,s),ln=l;break;default:va(t,i,s)}}function S0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qo(t)}catch(s){Yt(i,i.return,s)}}function Gy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new g0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new g0),i;default:throw Error(r(435,t.tag))}}function ad(t,i){var s=Gy(t);i.forEach(function(l){var c=Qy.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}function $n(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],p=t,M=i,R=M;e:for(;R!==null;){switch(R.tag){case 27:if(Ja(R.type)){Qt=R.stateNode,Xn=!1;break e}break;case 5:Qt=R.stateNode,Xn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(Qt===null)throw Error(r(160));x0(p,M,c),Qt=null,Xn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)y0(i,t),i=i.sibling}var Mi=null;function y0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),ei(t),l&4&&(Xa(3,t,t.return),wo(3,t),Xa(5,t,t.return));break;case 1:$n(i,t),ei(t),l&512&&(ln||s===null||Gi(s,s.return)),l&64&&_a&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var c=Mi;if($n(i,t),ei(t),l&512&&(ln||s===null||Gi(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":p=c.getElementsByTagName("title")[0],(!p||p[ia]||p[Sn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=c.createElement(l),c.head.insertBefore(p,c.querySelector("head > title"))),Dn(p,l,s),p[Sn]=t,rn(p),l=p;break e;case"link":var M=m_("link","href",c).get(l+(s.href||""));if(M){for(var R=0;R<M.length;R++)if(p=M[R],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(R,1);break t}}p=c.createElement(l),Dn(p,l,s),c.head.appendChild(p);break;case"meta":if(M=m_("meta","content",c).get(l+(s.content||""))){for(R=0;R<M.length;R++)if(p=M[R],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(R,1);break t}}p=c.createElement(l),Dn(p,l,s),c.head.appendChild(p);break;default:throw Error(r(468,l))}p[Sn]=t,rn(p),l=p}t.stateNode=l}else g_(c,t.type,t.stateNode);else t.stateNode=p_(c,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?g_(c,t.type,t.stateNode):p_(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ed(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),ei(t),l&512&&(ln||s===null||Gi(s,s.return)),s!==null&&l&4&&ed(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),ei(t),l&512&&(ln||s===null||Gi(s,s.return)),t.flags&32){c=t.stateNode;try{sn(c,"")}catch(ce){Yt(t,t.return,ce)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,ed(t,c,s!==null?s.memoizedProps:c)),l&1024&&(id=!0);break;case 6:if($n(i,t),ei(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ce){Yt(t,t.return,ce)}}break;case 3:if(Au=null,c=Mi,Mi=bu(i.containerInfo),$n(i,t),Mi=c,ei(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qo(i.containerInfo)}catch(ce){Yt(t,t.return,ce)}id&&(id=!1,E0(t));break;case 4:l=Mi,Mi=bu(t.stateNode.containerInfo),$n(i,t),ei(t),Mi=l;break;case 12:$n(i,t),ei(t);break;case 13:$n(i,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(cd=At()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ad(t,l)));break;case 22:c=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,ne=_a,me=ln;if(_a=ne||c,ln=me||z,$n(i,t),ln=me,_a=ne,ei(t),l&8192)e:for(i=t.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||z||_a||ln||wr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(p=z.stateNode,c)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=z.stateNode;var xe=z.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(ce){Yt(z,z.return,ce)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ce){Yt(z,z.return,ce)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ad(t,s))));break;case 19:$n(i,t),ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ad(t,l)));break;case 30:break;case 21:break;default:$n(i,t),ei(t)}}function ei(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(p0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var c=s.stateNode,p=td(t);fu(t,p,c);break;case 5:var M=s.stateNode;s.flags&32&&(sn(M,""),s.flags&=-33);var R=td(t);fu(t,R,M);break;case 3:case 4:var z=s.stateNode.containerInfo,ne=td(t);nd(t,ne,z);break;default:throw Error(r(161))}}catch(me){Yt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function E0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;E0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Wa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)_0(t,i.alternate,i),i=i.sibling}function wr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Xa(4,i,i.return),wr(i);break;case 1:Gi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&d0(i,i.return,s),wr(i);break;case 27:Bo(i.stateNode);case 26:case 5:Gi(i,i.return),wr(i);break;case 22:i.memoizedState===null&&wr(i);break;case 30:wr(i);break;default:wr(i)}t=t.sibling}}function qa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,c=t,p=i,M=p.flags;switch(p.tag){case 0:case 11:case 15:qa(c,p,s),wo(4,p);break;case 1:if(qa(c,p,s),l=p,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){Yt(l,l.return,ne)}if(l=p,c=l.updateQueue,c!==null){var R=l.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Qm(z[c],R)}catch(ne){Yt(l,l.return,ne)}}s&&M&64&&f0(p),Co(p,p.return);break;case 27:m0(p);case 26:case 5:qa(c,p,s),s&&l===null&&M&4&&h0(p),Co(p,p.return);break;case 12:qa(c,p,s);break;case 13:qa(c,p,s),s&&M&4&&S0(c,p);break;case 22:p.memoizedState===null&&qa(c,p,s),Co(p,p.return);break;case 30:break;default:qa(c,p,s)}i=i.sibling}}function rd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&po(s))}function sd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&po(t))}function ki(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)M0(t,i,s,l),i=i.sibling}function M0(t,i,s,l){var c=i.flags;switch(i.tag){case 0:case 11:case 15:ki(t,i,s,l),c&2048&&wo(9,i);break;case 1:ki(t,i,s,l);break;case 3:ki(t,i,s,l),c&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&po(t)));break;case 12:if(c&2048){ki(t,i,s,l),t=i.stateNode;try{var p=i.memoizedProps,M=p.id,R=p.onPostCommit;typeof R=="function"&&R(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Yt(i,i.return,z)}}else ki(t,i,s,l);break;case 13:ki(t,i,s,l);break;case 23:break;case 22:p=i.stateNode,M=i.alternate,i.memoizedState!==null?p._visibility&2?ki(t,i,s,l):Do(t,i):p._visibility&2?ki(t,i,s,l):(p._visibility|=2,ds(t,i,s,l,(i.subtreeFlags&10256)!==0)),c&2048&&rd(M,i);break;case 24:ki(t,i,s,l),c&2048&&sd(i.alternate,i);break;default:ki(t,i,s,l)}}function ds(t,i,s,l,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=t,M=i,R=s,z=l,ne=M.flags;switch(M.tag){case 0:case 11:case 15:ds(p,M,R,z,c),wo(8,M);break;case 23:break;case 22:var me=M.stateNode;M.memoizedState!==null?me._visibility&2?ds(p,M,R,z,c):Do(p,M):(me._visibility|=2,ds(p,M,R,z,c)),c&&ne&2048&&rd(M.alternate,M);break;case 24:ds(p,M,R,z,c),c&&ne&2048&&sd(M.alternate,M);break;default:ds(p,M,R,z,c)}i=i.sibling}}function Do(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,c=l.flags;switch(l.tag){case 22:Do(s,l),c&2048&&rd(l.alternate,l);break;case 24:Do(s,l),c&2048&&sd(l.alternate,l);break;default:Do(s,l)}i=i.sibling}}var Uo=8192;function hs(t){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)b0(t),t=t.sibling}function b0(t){switch(t.tag){case 26:hs(t),t.flags&Uo&&t.memoizedState!==null&&RE(Mi,t.memoizedState,t.memoizedProps);break;case 5:hs(t);break;case 3:case 4:var i=Mi;Mi=bu(t.stateNode.containerInfo),hs(t),Mi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Uo,Uo=16777216,hs(t),Uo=i):hs(t));break;default:hs(t)}}function T0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Lo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,R0(l,t)}T0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)A0(t),t=t.sibling}function A0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,du(t)):Lo(t);break;default:Lo(t)}}function du(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,R0(l,t)}T0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Xa(8,i,i.return),du(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,du(i));break;default:du(i)}t=t.sibling}}function R0(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Xa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:po(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else e:for(s=t;Mn!==null;){l=Mn;var c=l.sibling,p=l.return;if(v0(l),l===s){Mn=null;break e}if(c!==null){c.return=p,Mn=c;break e}Mn=p}}}var ky={getCacheForType:function(t){var i=Nn(mn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Xy=typeof WeakMap=="function"?WeakMap:Map,Ht=0,jt=null,xt=null,Tt=0,Vt=0,ti=null,Ya=!1,ps=!1,od=!1,xa=0,tn=0,ja=0,Cr=0,ld=0,hi=0,ms=0,No=null,Wn=null,ud=!1,cd=0,hu=1/0,pu=null,Za=null,Cn=0,Ka=null,gs=null,_s=0,fd=0,dd=null,w0=null,Oo=0,hd=null;function ni(){if((Ht&2)!==0&&Tt!==0)return Tt&-Tt;if(I.T!==null){var t=as;return t!==0?t:Sd()}return Ct()}function C0(){hi===0&&(hi=(Tt&536870912)===0||Ft?q():536870912);var t=di.current;return t!==null&&(t.flags|=32),hi}function ii(t,i,s){(t===jt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(vs(t,0),Qa(t,Tt,hi,!1)),Be(t,s),((Ht&2)===0||t!==jt)&&(t===jt&&((Ht&2)===0&&(Cr|=s),tn===4&&Qa(t,Tt,hi,!1)),Xi(t))}function D0(t,i,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||De(t,i),c=l?Yy(t,i):gd(t,i,!0),p=l;do{if(c===0){ps&&!l&&Qa(t,i,0,!1);break}else{if(s=t.current.alternate,p&&!Wy(s)){c=gd(t,i,!1),p=!1;continue}if(c===2){if(p=i,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var R=t;c=No;var z=R.current.memoizedState.isDehydrated;if(z&&(vs(R,M).flags|=256),M=gd(R,M,!1),M!==2){if(od&&!z){R.errorRecoveryDisabledLanes|=p,Cr|=p,c=4;break e}p=Wn,Wn=c,p!==null&&(Wn===null?Wn=p:Wn.push.apply(Wn,p))}c=M}if(p=!1,c!==2)continue}}if(c===1){vs(t,0),Qa(t,i,0,!0);break}e:{switch(l=t,p=c,p){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Qa(l,i,hi,!Ya);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(c=cd+300-At(),10<c)){if(Qa(l,i,hi,!Ya),qe(l,0,!0)!==0)break e;l.timeoutHandle=r_(U0.bind(null,l,s,Wn,pu,ud,i,hi,Cr,ms,Ya,p,2,-0,0),c);break e}U0(l,s,Wn,pu,ud,i,hi,Cr,ms,Ya,p,0,-0,0)}}break}while(!0);Xi(t)}function U0(t,i,s,l,c,p,M,R,z,ne,me,xe,le,ce){if(t.timeoutHandle=-1,xe=i.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Vo={stylesheets:null,count:0,unsuspend:AE},b0(i),xe=wE(),xe!==null)){t.cancelPendingCommit=xe(B0.bind(null,t,i,p,s,l,c,M,R,z,me,1,le,ce)),Qa(t,p,M,!ne);return}B0(t,i,p,s,l,c,M,R,z)}function Wy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var c=s[l],p=c.getSnapshot;c=c.value;try{if(!Qn(p(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qa(t,i,s,l){i&=~ld,i&=~Cr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var c=i;0<c;){var p=31-Ae(c),M=1<<p;l[p]=-1,c&=~M}s!==0&&Se(t,s,i)}function mu(){return(Ht&6)===0?(Po(0),!1):!0}function pd(){if(xt!==null){if(Vt===0)var t=xt.return;else t=xt,fa=Mr=null,Uf(t),cs=null,To=0,t=xt;for(;t!==null;)c0(t.alternate,t),t=t.return;xt=null}}function vs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,uE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),pd(),jt=t,xt=s=la(t.current,null),Tt=i,Vt=0,ti=null,Ya=!1,ps=De(t,i),od=!1,ms=hi=ld=Cr=ja=tn=0,Wn=No=null,ud=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var c=31-Ae(l),p=1<<c;i|=t[c],l&=~p}return xa=i,Il(),s}function L0(t,i){_t=null,I.H=nu,i===go||i===ql?(i=Zm(),Vt=3):i===qm?(i=Zm(),Vt=4):Vt=i===Kg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,xt===null&&(tn=1,ou(t,li(i,t.current)))}function N0(){var t=I.H;return I.H=nu,t===null?nu:t}function O0(){var t=I.A;return I.A=ky,t}function md(){tn=4,Ya||(Tt&4194048)!==Tt&&di.current!==null||(ps=!0),(ja&134217727)===0&&(Cr&134217727)===0||jt===null||Qa(jt,Tt,hi,!1)}function gd(t,i,s){var l=Ht;Ht|=2;var c=N0(),p=O0();(jt!==t||Tt!==i)&&(pu=null,vs(t,i)),i=!1;var M=tn;e:do try{if(Vt!==0&&xt!==null){var R=xt,z=ti;switch(Vt){case 8:pd(),M=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var ne=Vt;if(Vt=0,ti=null,xs(t,R,z,ne),s&&ps){M=0;break e}break;default:ne=Vt,Vt=0,ti=null,xs(t,R,z,ne)}}qy(),M=tn;break}catch(me){L0(t,me)}while(!0);return i&&t.shellSuspendCounter++,fa=Mr=null,Ht=l,I.H=c,I.A=p,xt===null&&(jt=null,Tt=0,Il()),M}function qy(){for(;xt!==null;)P0(xt)}function Yy(t,i){var s=Ht;Ht|=2;var l=N0(),c=O0();jt!==t||Tt!==i?(pu=null,hu=At()+500,vs(t,i)):ps=De(t,i);e:do try{if(Vt!==0&&xt!==null){i=xt;var p=ti;t:switch(Vt){case 1:Vt=0,ti=null,xs(t,i,p,1);break;case 2:case 9:if(Ym(p)){Vt=0,ti=null,F0(i);break}i=function(){Vt!==2&&Vt!==9||jt!==t||(Vt=7),Xi(t)},p.then(i,i);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Ym(p)?(Vt=0,ti=null,F0(i)):(Vt=0,ti=null,xs(t,i,p,7));break;case 5:var M=null;switch(xt.tag){case 26:M=xt.memoizedState;case 5:case 27:var R=xt;if(!M||__(M)){Vt=0,ti=null;var z=R.sibling;if(z!==null)xt=z;else{var ne=R.return;ne!==null?(xt=ne,gu(ne)):xt=null}break t}}Vt=0,ti=null,xs(t,i,p,5);break;case 6:Vt=0,ti=null,xs(t,i,p,6);break;case 8:pd(),tn=6;break e;default:throw Error(r(462))}}jy();break}catch(me){L0(t,me)}while(!0);return fa=Mr=null,I.H=l,I.A=c,Ht=s,xt!==null?0:(jt=null,Tt=0,Il(),tn)}function jy(){for(;xt!==null&&!Ot();)P0(xt)}function P0(t){var i=l0(t.alternate,t,xa);t.memoizedProps=t.pendingProps,i===null?gu(t):xt=i}function F0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=n0(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=n0(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:Uf(i);default:c0(s,i),i=xt=Im(i,xa),i=l0(s,i,xa)}t.memoizedProps=t.pendingProps,i===null?gu(t):xt=i}function xs(t,i,s,l){fa=Mr=null,Uf(i),cs=null,To=0;var c=i.return;try{if(Iy(t,c,i,s,Tt)){tn=1,ou(t,li(s,t.current)),xt=null;return}}catch(p){if(c!==null)throw xt=c,p;tn=1,ou(t,li(s,t.current)),xt=null;return}i.flags&32768?(Ft||l===1?t=!0:ps||(Tt&536870912)!==0?t=!1:(Ya=t=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),I0(i,t)):gu(i)}function gu(t){var i=t;do{if((i.flags&32768)!==0){I0(i,Ya);return}t=i.return;var s=zy(i.alternate,i,xa);if(s!==null){xt=s;return}if(i=i.sibling,i!==null){xt=i;return}xt=i=t}while(i!==null);tn===0&&(tn=5)}function I0(t,i){do{var s=Hy(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);tn=6,xt=null}function B0(t,i,s,l,c,p,M,R,z){t.cancelPendingCommit=null;do _u();while(Cn!==0);if((Ht&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(p=i.lanes|i.childLanes,p|=sf,Te(t,s,p,M,R,z),t===jt&&(xt=jt=null,Tt=0),gs=i,Ka=t,_s=s,fd=p,dd=c,w0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Jy(wt,function(){return k0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,c=V.p,V.p=2,M=Ht,Ht|=4;try{Vy(t,i,s)}finally{Ht=M,V.p=c,I.T=l}}Cn=1,z0(),H0(),V0()}}function z0(){if(Cn===1){Cn=0;var t=Ka,i=gs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=V.p;V.p=2;var c=Ht;Ht|=4;try{y0(i,t);var p=wd,M=Rm(t.containerInfo),R=p.focusedElem,z=p.selectionRange;if(M!==R&&R&&R.ownerDocument&&Am(R.ownerDocument.documentElement,R)){if(z!==null&&ef(R)){var ne=z.start,me=z.end;if(me===void 0&&(me=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ce=le.getSelection(),at=R.textContent.length,tt=Math.min(z.start,at),Wt=z.end===void 0?tt:Math.min(z.end,at);!ce.extend&&tt>Wt&&(M=Wt,Wt=tt,tt=M);var j=Tm(R,tt),W=Tm(R,Wt);if(j&&W&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==W.node||ce.focusOffset!==W.offset)){var ee=xe.createRange();ee.setStart(j.node,j.offset),ce.removeAllRanges(),tt>Wt?(ce.addRange(ee),ce.extend(W.node,W.offset)):(ee.setEnd(W.node,W.offset),ce.addRange(ee))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ge=xe[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Cu=!!Rd,wd=Rd=null}finally{Ht=c,V.p=l,I.T=s}}t.current=i,Cn=2}}function H0(){if(Cn===2){Cn=0;var t=Ka,i=gs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=V.p;V.p=2;var c=Ht;Ht|=4;try{_0(t,i.alternate,i)}finally{Ht=c,V.p=l,I.T=s}}Cn=3}}function V0(){if(Cn===4||Cn===3){Cn=0,st();var t=Ka,i=gs,s=_s,l=w0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,gs=Ka=null,G0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Za=null),It(s),i=i.stateNode,K&&typeof K.onCommitFiberRoot=="function")try{K.onCommitFiberRoot(X,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,c=V.p,V.p=2,I.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var R=l[M];p(R.value,{componentStack:R.stack})}}finally{I.T=i,V.p=c}}(_s&3)!==0&&_u(),Xi(t),c=t.pendingLanes,(s&4194090)!==0&&(c&42)!==0?t===hd?Oo++:(Oo=0,hd=t):Oo=0,Po(0)}}function G0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,po(i)))}function _u(t){return z0(),H0(),V0(),k0()}function k0(){if(Cn!==5)return!1;var t=Ka,i=fd;fd=0;var s=It(_s),l=I.T,c=V.p;try{V.p=32>s?32:s,I.T=null,s=dd,dd=null;var p=Ka,M=_s;if(Cn=0,gs=Ka=null,_s=0,(Ht&6)!==0)throw Error(r(331));var R=Ht;if(Ht|=4,A0(p.current),M0(p,p.current,M,s),Ht=R,Po(0,!1),K&&typeof K.onPostCommitFiberRoot=="function")try{K.onPostCommitFiberRoot(X,p)}catch{}return!0}finally{V.p=c,I.T=l,G0(t,i)}}function X0(t,i,s){i=li(s,i),i=Wf(t.stateNode,i,2),t=Ha(t,i,2),t!==null&&(Be(t,2),Xi(t))}function Yt(t,i,s){if(t.tag===3)X0(t,t,s);else for(;i!==null;){if(i.tag===3){X0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Za===null||!Za.has(l))){t=li(s,t),s=jg(2),l=Ha(i,s,2),l!==null&&(Zg(s,l,i,t),Be(l,2),Xi(l));break}}i=i.return}}function _d(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Xy;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(od=!0,c.add(s),t=Zy.bind(null,t,i,s),i.then(t,t))}function Zy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,jt===t&&(Tt&s)===s&&(tn===4||tn===3&&(Tt&62914560)===Tt&&300>At()-cd?(Ht&2)===0&&vs(t,0):ld|=s,ms===Tt&&(ms=0)),Xi(t)}function W0(t,i){i===0&&(i=Fe()),t=es(t,i),t!==null&&(Be(t,i),Xi(t))}function Ky(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),W0(t,s)}function Qy(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),W0(t,s)}function Jy(t,i){return gt(t,i)}var vu=null,Ss=null,vd=!1,xu=!1,xd=!1,Dr=0;function Xi(t){t!==Ss&&t.next===null&&(Ss===null?vu=Ss=t:Ss=Ss.next=t),xu=!0,vd||(vd=!0,eE())}function Po(t,i){if(!xd&&xu){xd=!0;do for(var s=!1,l=vu;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var p=0;else{var M=l.suspendedLanes,R=l.pingedLanes;p=(1<<31-Ae(42|t)+1)-1,p&=c&~(M&~R),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Z0(l,p))}else p=Tt,p=qe(l,l===jt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||De(l,p)||(s=!0,Z0(l,p));l=l.next}while(s);xd=!1}}function $y(){q0()}function q0(){xu=vd=!1;var t=0;Dr!==0&&(lE()&&(t=Dr),Dr=0);for(var i=At(),s=null,l=vu;l!==null;){var c=l.next,p=Y0(l,i);p===0?(l.next=null,s===null?vu=c:s.next=c,c===null&&(Ss=s)):(s=l,(t!==0||(p&3)!==0)&&(xu=!0)),l=c}Po(t)}function Y0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ae(p),R=1<<M,z=c[M];z===-1?((R&s)===0||(R&l)!==0)&&(c[M]=ct(R,i)):z<=i&&(t.expiredLanes|=R),p&=~R}if(i=jt,s=Tt,s=qe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Mt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Mt(l),It(s)){case 2:case 8:s=yt;break;case 32:s=wt;break;case 268435456:s=F;break;default:s=wt}return l=j0.bind(null,t),s=gt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Mt(l),t.callbackPriority=2,t.callbackNode=null,2}function j0(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(_u()&&t.callbackNode!==s)return null;var l=Tt;return l=qe(t,t===jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(D0(t,l,i),Y0(t,At()),t.callbackNode!=null&&t.callbackNode===s?j0.bind(null,t):null)}function Z0(t,i){if(_u())return null;D0(t,i,!0)}function eE(){cE(function(){(Ht&6)!==0?gt(Pt,$y):q0()})}function Sd(){return Dr===0&&(Dr=q()),Dr}function K0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(""+t)}function Q0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function tE(t,i,s,l,c){if(i==="submit"&&s&&s.stateNode===c){var p=K0((c[An]||null).action),M=l.submitter;M&&(i=(i=M[An]||null)?K0(i.formAction):M.getAttribute("formAction"),i!==null&&(p=i,M=null));var R=new Ol("action","action",null,l,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dr!==0){var z=M?Q0(c,M):new FormData(c);Hf(s,{pending:!0,data:z,method:c.method,action:p},null,z)}}else typeof p=="function"&&(R.preventDefault(),z=M?Q0(c,M):new FormData(c),Hf(s,{pending:!0,data:z,method:c.method,action:p},p,z))},currentTarget:c}]})}}for(var yd=0;yd<rf.length;yd++){var Ed=rf[yd],nE=Ed.toLowerCase(),iE=Ed[0].toUpperCase()+Ed.slice(1);Ei(nE,"on"+iE)}Ei(Dm,"onAnimationEnd"),Ei(Um,"onAnimationIteration"),Ei(Lm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Sy,"onTransitionRun"),Ei(yy,"onTransitionStart"),Ei(Ey,"onTransitionCancel"),Ei(Nm,"onTransitionEnd"),Oa("onMouseEnter",["mouseout","mouseover"]),Oa("onMouseLeave",["mouseout","mouseover"]),Oa("onPointerEnter",["pointerout","pointerover"]),Oa("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function J0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var R=l[M],z=R.instance,ne=R.currentTarget;if(R=R.listener,z!==p&&c.isPropagationStopped())break e;p=R,c.currentTarget=ne;try{p(c)}catch(me){su(me)}c.currentTarget=null,p=z}else for(M=0;M<l.length;M++){if(R=l[M],z=R.instance,ne=R.currentTarget,R=R.listener,z!==p&&c.isPropagationStopped())break e;p=R,c.currentTarget=ne;try{p(c)}catch(me){su(me)}c.currentTarget=null,p=z}}}}function St(t,i){var s=i[Js];s===void 0&&(s=i[Js]=new Set);var l=t+"__bubble";s.has(l)||($0(i,t,2,!1),s.add(l))}function Md(t,i,s){var l=0;i&&(l|=4),$0(s,t,l,i)}var Su="_reactListening"+Math.random().toString(36).slice(2);function bd(t){if(!t[Su]){t[Su]=!0,$s.forEach(function(s){s!=="selectionchange"&&(aE.has(s)||Md(s,!1,t),Md(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Su]||(i[Su]=!0,Md("selectionchange",!1,i))}}function $0(t,i,s,l){switch(M_(i)){case 2:var c=UE;break;case 8:c=LE;break;default:c=Bd}s=c.bind(null,i,s,t),c=void 0,!Wc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Td(t,i,s,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var R=l.stateNode.containerInfo;if(R===c)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;R!==null;){if(M=aa(R),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){l=p=M;continue e}R=R.parentNode}}l=l.return}sm(function(){var ne=p,me=kc(s),xe=[];e:{var le=Om.get(t);if(le!==void 0){var ce=Ol,at=t;switch(t){case"keypress":if(Ll(s)===0)break e;case"keydown":case"keyup":ce=JS;break;case"focusin":at="focus",ce=Zc;break;case"focusout":at="blur",ce=Zc;break;case"beforeblur":case"afterblur":ce=Zc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=ty;break;case Dm:case Um:case Lm:ce=kS;break;case Nm:ce=iy;break;case"scroll":case"scrollend":ce=BS;break;case"wheel":ce=ry;break;case"copy":case"cut":case"paste":ce=WS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=fm;break;case"toggle":case"beforetoggle":ce=oy}var tt=(i&4)!==0,Wt=!tt&&(t==="scroll"||t==="scrollend"),j=tt?le!==null?le+"Capture":null:le;tt=[];for(var W=ne,ee;W!==null;){var ge=W;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||j===null||(ge=eo(W,j),ge!=null&&tt.push(Io(W,ge,ee))),Wt)break;W=W.return}0<tt.length&&(le=new ce(le,at,null,s,me),xe.push({event:le,listeners:tt}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&s!==Gc&&(at=s.relatedTarget||s.fromElement)&&(aa(at)||at[Ii]))break e;if((ce||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(at=s.relatedTarget||s.toElement,ce=ne,at=at?aa(at):null,at!==null&&(Wt=u(at),tt=at.tag,at!==Wt||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(ce=null,at=ne),ce!==at)){if(tt=um,ge="onMouseLeave",j="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(tt=fm,ge="onPointerLeave",j="onPointerEnter",W="pointer"),Wt=ce==null?le:Na(ce),ee=at==null?le:Na(at),le=new tt(ge,W+"leave",ce,s,me),le.target=Wt,le.relatedTarget=ee,ge=null,aa(me)===ne&&(tt=new tt(j,W+"enter",at,s,me),tt.target=ee,tt.relatedTarget=Wt,ge=tt),Wt=ge,ce&&at)t:{for(tt=ce,j=at,W=0,ee=tt;ee;ee=ys(ee))W++;for(ee=0,ge=j;ge;ge=ys(ge))ee++;for(;0<W-ee;)tt=ys(tt),W--;for(;0<ee-W;)j=ys(j),ee--;for(;W--;){if(tt===j||j!==null&&tt===j.alternate)break t;tt=ys(tt),j=ys(j)}tt=null}else tt=null;ce!==null&&e_(xe,le,ce,tt,!1),at!==null&&Wt!==null&&e_(xe,Wt,at,tt,!0)}}e:{if(le=ne?Na(ne):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Ye=xm;else if(_m(le))if(Sm)Ye=_y;else{Ye=my;var vt=py}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&pr(ne.elementType)&&(Ye=xm):Ye=gy;if(Ye&&(Ye=Ye(t,ne))){vm(xe,Ye,s,me);break e}vt&&vt(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&zi(le,"number",le.value)}switch(vt=ne?Na(ne):window,t){case"focusin":(_m(vt)||vt.contentEditable==="true")&&(Qr=vt,tf=ne,lo=null);break;case"focusout":lo=tf=Qr=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,wm(xe,s,me);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":wm(xe,s,me)}var Qe;if(Qc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Kr?mm(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(dm&&s.locale!=="ko"&&(Kr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Kr&&(Qe=om()):(Fa=me,qc="value"in Fa?Fa.value:Fa.textContent,Kr=!0)),vt=yu(ne,nt),0<vt.length&&(nt=new cm(nt,t,null,s,me),xe.push({event:nt,listeners:vt}),Qe?nt.data=Qe:(Qe=gm(s),Qe!==null&&(nt.data=Qe)))),(Qe=uy?cy(t,s):fy(t,s))&&(nt=yu(ne,"onBeforeInput"),0<nt.length&&(vt=new cm("onBeforeInput","beforeinput",null,s,me),xe.push({event:vt,listeners:nt}),vt.data=Qe)),tE(xe,t,ne,s,me)}J0(xe,i)})}function Io(t,i,s){return{instance:t,listener:i,currentTarget:s}}function yu(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||p===null||(c=eo(t,s),c!=null&&l.unshift(Io(t,c,p)),c=eo(t,i),c!=null&&l.push(Io(t,c,p))),t.tag===3)return l;t=t.return}return[]}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e_(t,i,s,l,c){for(var p=i._reactName,M=[];s!==null&&s!==l;){var R=s,z=R.alternate,ne=R.stateNode;if(R=R.tag,z!==null&&z===l)break;R!==5&&R!==26&&R!==27||ne===null||(z=ne,c?(ne=eo(s,p),ne!=null&&M.unshift(Io(s,ne,z))):c||(ne=eo(s,p),ne!=null&&M.push(Io(s,ne,z)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var rE=/\r\n?/g,sE=/\u0000|\uFFFD/g;function t_(t){return(typeof t=="string"?t:""+t).replace(rE,`
`).replace(sE,"")}function n_(t,i){return i=t_(i),t_(t)===i}function Eu(){}function Xt(t,i,s,l,c,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||sn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&sn(t,""+l);break;case"className":de(t,"class",l);break;case"tabIndex":de(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":de(t,s,l);break;case"style":Rn(t,l,p);break;case"data":if(i!=="object"){de(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Dl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Xt(t,i,"name",c.name,c,null),Xt(t,i,"formEncType",c.formEncType,c,null),Xt(t,i,"formMethod",c.formMethod,c,null),Xt(t,i,"formTarget",c.formTarget,c,null)):(Xt(t,i,"encType",c.encType,c,null),Xt(t,i,"method",c.method,c,null),Xt(t,i,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Dl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Eu);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Dl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":St("beforetoggle",t),St("toggle",t),Y(t,"popover",l);break;case"xlinkActuate":ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ae(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ae(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ae(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ae(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Y(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=sa.get(s)||s,Y(t,s,l))}}function Ad(t,i,s,l,c,p){switch(s){case"style":Rn(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?sn(t,l):(typeof l=="number"||typeof l=="bigint")&&sn(t,""+l);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Eu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),p=t[An]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(i,p,c),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,c);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Y(t,s,l)}}}function Dn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var l=!1,c=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Xt(t,i,p,M,s,null)}}c&&Xt(t,i,"srcSet",s.srcSet,s,null),l&&Xt(t,i,"src",s.src,s,null);return;case"input":St("invalid",t);var R=p=M=c=null,z=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":c=me;break;case"type":M=me;break;case"checked":z=me;break;case"defaultChecked":ne=me;break;case"value":p=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:Xt(t,i,l,me,s,null)}}Ln(t,p,R,z,ne,M,c,!1),qt(t);return;case"select":St("invalid",t),l=M=p=null;for(c in s)if(s.hasOwnProperty(c)&&(R=s[c],R!=null))switch(c){case"value":p=R;break;case"defaultValue":M=R;break;case"multiple":l=R;default:Xt(t,i,c,R,s,null)}i=p,s=M,t.multiple=!!l,i!=null?cn(t,!!l,i,!1):s!=null&&cn(t,!!l,s,!0);return;case"textarea":St("invalid",t),p=c=l=null;for(M in s)if(s.hasOwnProperty(M)&&(R=s[M],R!=null))switch(M){case"value":l=R;break;case"defaultValue":c=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Xt(t,i,M,R,s,null)}zt(t,l,c,p),qt(t);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(t,i,z,l,s,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(l=0;l<Fo.length;l++)St(Fo[l],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Xt(t,i,ne,l,s,null)}return;default:if(pr(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&Ad(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Xt(t,i,R,l,s,null))}function oE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,p=null,M=null,R=null,z=null,ne=null,me=null;for(ce in s){var xe=s[ce];if(s.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=xe;default:l.hasOwnProperty(ce)||Xt(t,i,ce,null,l,xe)}}for(var le in l){var ce=l[le];if(xe=s[le],l.hasOwnProperty(le)&&(ce!=null||xe!=null))switch(le){case"type":p=ce;break;case"name":c=ce;break;case"checked":ne=ce;break;case"defaultChecked":me=ce;break;case"value":M=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:ce!==xe&&Xt(t,i,le,ce,l,xe)}}Et(t,M,R,z,ne,me,p,c);return;case"select":ce=M=R=le=null;for(p in s)if(z=s[p],s.hasOwnProperty(p)&&z!=null)switch(p){case"value":break;case"multiple":ce=z;default:l.hasOwnProperty(p)||Xt(t,i,p,null,l,z)}for(c in l)if(p=l[c],z=s[c],l.hasOwnProperty(c)&&(p!=null||z!=null))switch(c){case"value":le=p;break;case"defaultValue":R=p;break;case"multiple":M=p;default:p!==z&&Xt(t,i,c,p,l,z)}i=R,s=M,l=ce,le!=null?cn(t,!!s,le,!1):!!l!=!!s&&(i!=null?cn(t,!!s,i,!0):cn(t,!!s,s?[]:"",!1));return;case"textarea":ce=le=null;for(R in s)if(c=s[R],s.hasOwnProperty(R)&&c!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(t,i,R,null,l,c)}for(M in l)if(c=l[M],p=s[M],l.hasOwnProperty(M)&&(c!=null||p!=null))switch(M){case"value":le=c;break;case"defaultValue":ce=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==p&&Xt(t,i,M,c,l,p)}Pa(t,le,ce);return;case"option":for(var at in s)if(le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Xt(t,i,at,null,l,le)}for(z in l)if(le=l[z],ce=s[z],l.hasOwnProperty(z)&&le!==ce&&(le!=null||ce!=null))switch(z){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Xt(t,i,z,le,l,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)le=s[tt],s.hasOwnProperty(tt)&&le!=null&&!l.hasOwnProperty(tt)&&Xt(t,i,tt,null,l,le);for(ne in l)if(le=l[ne],ce=s[ne],l.hasOwnProperty(ne)&&le!==ce&&(le!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,i));break;default:Xt(t,i,ne,le,l,ce)}return;default:if(pr(i)){for(var Wt in s)le=s[Wt],s.hasOwnProperty(Wt)&&le!==void 0&&!l.hasOwnProperty(Wt)&&Ad(t,i,Wt,void 0,l,le);for(me in l)le=l[me],ce=s[me],!l.hasOwnProperty(me)||le===ce||le===void 0&&ce===void 0||Ad(t,i,me,le,l,ce);return}}for(var j in s)le=s[j],s.hasOwnProperty(j)&&le!=null&&!l.hasOwnProperty(j)&&Xt(t,i,j,null,l,le);for(xe in l)le=l[xe],ce=s[xe],!l.hasOwnProperty(xe)||le===ce||le==null&&ce==null||Xt(t,i,xe,le,l,ce)}var Rd=null,wd=null;function Mu(t){return t.nodeType===9?t:t.ownerDocument}function i_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Cd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dd=null;function lE(){var t=window.event;return t&&t.type==="popstate"?t===Dd?!1:(Dd=t,!0):(Dd=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(t){return s_.resolve(null).then(t).catch(fE)}:r_;function fE(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function o_(t,i){var s=i,l=0,c=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Bo(M.documentElement),s&2&&Bo(M.body),s&4)for(s=M.head,Bo(s),M=s.firstChild;M;){var R=M.nextSibling,z=M.nodeName;M[ia]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=R}}if(c===0){t.removeChild(p),qo(i);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:l=s.charCodeAt(0)-48;else l=0;s=p}while(s);qo(i)}function Ud(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ud(s),Yr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function dE(t,i,s,l){for(;t.nodeType===1;){var c=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ia])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var p=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function hE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=bi(t.nextSibling),t===null))return null;return t}function Ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function pE(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function bi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Nd=null;function l_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function u_(t,i,s){switch(i=Mu(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Bo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yr(t)}var pi=new Map,c_=new Set;function bu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=V.d;V.d={f:mE,r:gE,D:_E,C:vE,L:xE,m:SE,X:EE,S:yE,M:ME};function mE(){var t=Sa.f(),i=mu();return t||i}function gE(t){var i=Si(t);i!==null&&i.tag===5&&i.type==="form"?Dg(i):Sa.r(t)}var Es=typeof document>"u"?null:document;function f_(t,i,s){var l=Es;if(l&&typeof i=="string"&&i){var c=lt(i);c='link[rel="'+t+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),c_.has(c)||(c_.add(c),t={rel:t,crossOrigin:s,href:i},l.querySelector(c)===null&&(i=l.createElement("link"),Dn(i,"link",t),rn(i),l.head.appendChild(i)))}}function _E(t){Sa.D(t),f_("dns-prefetch",t,null)}function vE(t,i){Sa.C(t,i),f_("preconnect",t,i)}function xE(t,i,s){Sa.L(t,i,s);var l=Es;if(l&&t&&i){var c='link[rel="preload"][as="'+lt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+lt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+lt(s.imageSizes)+'"]')):c+='[href="'+lt(t)+'"]';var p=c;switch(i){case"style":p=Ms(t);break;case"script":p=bs(t)}pi.has(p)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),pi.set(p,t),l.querySelector(c)!==null||i==="style"&&l.querySelector(zo(p))||i==="script"&&l.querySelector(Ho(p))||(i=l.createElement("link"),Dn(i,"link",t),rn(i),l.head.appendChild(i)))}}function SE(t,i){Sa.m(t,i);var s=Es;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+lt(l)+'"][href="'+lt(t)+'"]',p=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=bs(t)}if(!pi.has(p)&&(t=g({rel:"modulepreload",href:t},i),pi.set(p,t),s.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ho(p)))return}l=s.createElement("link"),Dn(l,"link",t),rn(l),s.head.appendChild(l)}}}function yE(t,i,s){Sa.S(t,i,s);var l=Es;if(l&&t){var c=yi(l).hoistableStyles,p=Ms(t);i=i||"default";var M=c.get(p);if(!M){var R={loading:0,preload:null};if(M=l.querySelector(zo(p)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=pi.get(p))&&Od(t,s);var z=M=l.createElement("link");rn(z),Dn(z,"link",t),z._p=new Promise(function(ne,me){z.onload=ne,z.onerror=me}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Tu(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:R},c.set(p,M)}}}function EE(t,i){Sa.X(t,i);var s=Es;if(s&&t){var l=yi(s).hoistableScripts,c=bs(t),p=l.get(c);p||(p=s.querySelector(Ho(c)),p||(t=g({src:t,async:!0},i),(i=pi.get(c))&&Pd(t,i),p=s.createElement("script"),rn(p),Dn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function ME(t,i){Sa.M(t,i);var s=Es;if(s&&t){var l=yi(s).hoistableScripts,c=bs(t),p=l.get(c);p||(p=s.querySelector(Ho(c)),p||(t=g({src:t,async:!0,type:"module"},i),(i=pi.get(c))&&Pd(t,i),p=s.createElement("script"),rn(p),Dn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function d_(t,i,s,l){var c=(c=te.current)?bu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ms(s.href),s=yi(c).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ms(s.href);var p=yi(c).hoistableStyles,M=p.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=c.querySelector(zo(t)))&&!p._p&&(M.instance=p,M.state.loading=5),pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(t,s),p||bE(c,t,s,M.state))),i&&l===null)throw Error(r(528,""));return M}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=bs(s),s=yi(c).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+lt(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function h_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function bE(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),rn(i),t.head.appendChild(i))}function bs(t){return'[src="'+lt(t)+'"]'}function Ho(t){return"script[async]"+t}function p_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+lt(s.href)+'"]');if(l)return i.instance=l,rn(l),l;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),rn(l),Dn(l,"style",c),Tu(l,s.precedence,t),i.instance=l;case"stylesheet":c=Ms(s.href);var p=t.querySelector(zo(c));if(p)return i.state.loading|=4,i.instance=p,rn(p),p;l=h_(s),(c=pi.get(c))&&Od(l,c),p=(t.ownerDocument||t).createElement("link"),rn(p);var M=p;return M._p=new Promise(function(R,z){M.onload=R,M.onerror=z}),Dn(p,"link",l),i.state.loading|=4,Tu(p,s.precedence,t),i.instance=p;case"script":return p=bs(s.src),(c=t.querySelector(Ho(p)))?(i.instance=c,rn(c),c):(l=s,(c=pi.get(p))&&(l=g({},s),Pd(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),rn(c),Dn(c,"link",l),t.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Tu(l,s.precedence,t));return i.instance}function Tu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,p=c,M=0;M<l.length;M++){var R=l[M];if(R.dataset.precedence===i)p=R;else if(p!==c)break}p?p.parentNode.insertBefore(t,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Od(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Pd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Au=null;function m_(t,i,s){if(Au===null){var l=new Map,c=Au=new Map;c.set(s,l)}else c=Au,l=c.get(s),l||(l=new Map,c.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),c=0;c<s.length;c++){var p=s[c];if(!(p[ia]||p[Sn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(i)||"";M=t+M;var R=l.get(M);R?R.push(p):l.set(M,[p])}}return l}function g_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function TE(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function __(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Vo=null;function AE(){}function RE(t,i,s){if(Vo===null)throw Error(r(475));var l=Vo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Ms(s.href),p=t.querySelector(zo(c));if(p){t=p._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Ru.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=p,rn(p);return}p=t.ownerDocument||t,s=h_(s),(c=pi.get(c))&&Od(s,c),p=p.createElement("link"),rn(p);var M=p;M._p=new Promise(function(R,z){M.onload=R,M.onerror=z}),Dn(p,"link",s),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ru.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function wE(){if(Vo===null)throw Error(r(475));var t=Vo;return t.stylesheets&&t.count===0&&Fd(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Fd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Ru(){if(this.count--,this.count===0){if(this.stylesheets)Fd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wu=null;function Fd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wu=new Map,i.forEach(CE,t),wu=null,Ru.call(t))}function CE(t,i){if(!(i.state.loading&4)){var s=wu.get(t);if(s)var l=s.get(null);else{s=new Map,wu.set(t,s);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<c.length;p++){var M=c[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}c=i.instance,M=c.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,c),s.set(M,c),this.count++,l=Ru.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),p?p.parentNode.insertBefore(c,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),i.state.loading|=4}}var Go={$$typeof:D,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function DE(t,i,s,l,c,p,M,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function v_(t,i,s,l,c,p,M,R,z,ne,me,xe){return t=new DE(t,i,s,M,R,z,ne,xe),i=1,p===!0&&(i|=24),p=Jn(3,null,null,i),t.current=p,p.stateNode=t,i=_f(),i.refCount++,t.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},yf(p),t}function x_(t){return t?(t=ts,t):ts}function S_(t,i,s,l,c,p){c=x_(c),l.context===null?l.context=c:l.pendingContext=c,l=za(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Ha(t,l,i),s!==null&&(ii(s,t,i),vo(s,t,i))}function y_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Id(t,i){y_(t,i),(t=t.alternate)&&y_(t,i)}function E_(t){if(t.tag===13){var i=es(t,67108864);i!==null&&ii(i,t,67108864),Id(t,67108864)}}var Cu=!0;function UE(t,i,s,l){var c=I.T;I.T=null;var p=V.p;try{V.p=2,Bd(t,i,s,l)}finally{V.p=p,I.T=c}}function LE(t,i,s,l){var c=I.T;I.T=null;var p=V.p;try{V.p=8,Bd(t,i,s,l)}finally{V.p=p,I.T=c}}function Bd(t,i,s,l){if(Cu){var c=zd(l);if(c===null)Td(t,i,l,Du,s),b_(t,l);else if(OE(c,t,i,s,l))l.stopPropagation();else if(b_(t,l),i&4&&-1<NE.indexOf(t)){for(;c!==null;){var p=Si(c);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=He(p.pendingLanes);if(M!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var z=1<<31-Ae(M);R.entanglements[1]|=z,M&=~z}Xi(p),(Ht&6)===0&&(hu=At()+500,Po(0))}}break;case 13:R=es(p,2),R!==null&&ii(R,p,2),mu(),Id(p,2)}if(p=zd(l),p===null&&Td(t,i,l,Du,s),p===c)break;c=p}c!==null&&l.stopPropagation()}else Td(t,i,l,null,s)}}function zd(t){return t=kc(t),Hd(t)}var Du=null;function Hd(t){if(Du=null,t=aa(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Du=t,null}function M_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case Pt:return 2;case yt:return 8;case wt:case We:return 32;case F:return 268435456;default:return 32}default:return 32}}var Vd=!1,$a=null,er=null,tr=null,ko=new Map,Xo=new Map,nr=[],NE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(t,i){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Wo(t,i,s,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=Si(i),i!==null&&E_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function OE(t,i,s,l,c){switch(i){case"focusin":return $a=Wo($a,t,i,s,l,c),!0;case"dragenter":return er=Wo(er,t,i,s,l,c),!0;case"mouseover":return tr=Wo(tr,t,i,s,l,c),!0;case"pointerover":var p=c.pointerId;return ko.set(p,Wo(ko.get(p)||null,t,i,s,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Xo.set(p,Wo(Xo.get(p)||null,t,i,s,l,c)),!0}return!1}function T_(t){var i=aa(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,oi(t.priority,function(){if(s.tag===13){var l=ni();l=it(l);var c=es(s,l);c!==null&&ii(c,s,l),Id(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=zd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Gc=l,s.target.dispatchEvent(l),Gc=null}else return i=Si(s),i!==null&&E_(i),t.blockedOn=s,!1;i.shift()}return!0}function A_(t,i,s){Uu(t)&&s.delete(i)}function PE(){Vd=!1,$a!==null&&Uu($a)&&($a=null),er!==null&&Uu(er)&&(er=null),tr!==null&&Uu(tr)&&(tr=null),ko.forEach(A_),Xo.forEach(A_)}function Lu(t,i){t.blockedOn===i&&(t.blockedOn=null,Vd||(Vd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,PE)))}var Nu=null;function R_(t){Nu!==t&&(Nu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Nu===t&&(Nu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],c=t[i+2];if(typeof l!="function"){if(Hd(l||s)===null)continue;break}var p=Si(s);p!==null&&(t.splice(i,3),i-=3,Hf(p,{pending:!0,data:c,method:s.method,action:l},l,c))}}))}function qo(t){function i(z){return Lu(z,t)}$a!==null&&Lu($a,t),er!==null&&Lu(er,t),tr!==null&&Lu(tr,t),ko.forEach(i),Xo.forEach(i);for(var s=0;s<nr.length;s++){var l=nr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<nr.length&&(s=nr[0],s.blockedOn===null);)T_(s),s.blockedOn===null&&nr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var c=s[l],p=s[l+1],M=c[An]||null;if(typeof p=="function")M||R_(s);else if(M){var R=null;if(p&&p.hasAttribute("formAction")){if(c=p,M=p[An]||null)R=M.formAction;else if(Hd(c)!==null)continue}else R=M.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),R_(s)}}}function Gd(t){this._internalRoot=t}Ou.prototype.render=Gd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ni();S_(s,l,t,i,null,null)},Ou.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;S_(t.current,2,null,t,null,null),mu(),i[Ii]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ct();t={blockedOn:null,target:t,priority:i};for(var s=0;s<nr.length&&i!==0&&i<nr[s].priority;s++);nr.splice(s,0,t),s===0&&T_(t)}};var w_=e.version;if(w_!=="19.1.0")throw Error(r(527,w_,"19.1.0"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var FE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{X=Pu.inject(FE),K=Pu}catch{}}return jo.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",c=Xg,p=Wg,M=qg,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=v_(t,1,!1,null,null,s,l,c,p,M,R,null),t[Ii]=i.current,bd(t),new Gd(i)},jo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,c="",p=Xg,M=Wg,R=qg,z=null,ne=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(z=s.unstable_transitionCallbacks),s.formState!==void 0&&(ne=s.formState)),i=v_(t,1,!0,i,s??null,l,c,p,M,R,z,ne),i.context=x_(null),s=i.current,l=ni(),l=it(l),c=za(l),c.callback=null,Ha(s,c,l),s=l,i.current.lanes=s,Be(i,s),Xi(i),t[Ii]=i.current,bd(t),new Ou(i)},jo.version="19.1.0",jo}var z_;function ZE(){if(z_)return Wd.exports;z_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Wd.exports=jE(),Wd.exports}var KE=ZE(),Zo={},H_;function QE(){if(H_)return Zo;H_=1,Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.parse=f,Zo.serialize=h;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,y){const E=new u,T=x.length;if(T<2)return E;const S=(y==null?void 0:y.decode)||g;let v=0;do{const L=x.indexOf("=",v);if(L===-1)break;const D=x.indexOf(";",v),N=D===-1?T:D;if(L>N){v=x.lastIndexOf(";",L-1)+1;continue}const P=d(x,v,L),B=m(x,L,P),H=x.slice(P,B);if(E[H]===void 0){let Q=d(x,L+1,N),A=m(x,N,Q);const U=S(x.slice(Q,A));E[H]=U}v=N+1}while(v<T);return E}function d(x,y,E){do{const T=x.charCodeAt(y);if(T!==32&&T!==9)return y}while(++y<E);return E}function m(x,y,E){for(;y>E;){const T=x.charCodeAt(--y);if(T!==32&&T!==9)return y+1}return E}function h(x,y,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const S=T(y);if(!e.test(S))throw new TypeError(`argument val is invalid: ${y}`);let v=x+"="+S;if(!E)return v;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);v+="; Max-Age="+E.maxAge}if(E.domain){if(!n.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);v+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);v+="; Path="+E.path}if(E.expires){if(!_(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);v+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(v+="; HttpOnly"),E.secure&&(v+="; Secure"),E.partitioned&&(v+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return v}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function _(x){return o.call(x)==="[object Date]"}return Zo}QE();var V_="popstate";function JE(a={}){function e(r,o){let{pathname:u,search:f,hash:d}=r.location;return Lh("",{pathname:u,search:f,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ul(o)}return eM(e,n,null,a)}function $t(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Ki(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $E(){return Math.random().toString(36).substring(2,10)}function G_(a,e){return{usr:a.state,key:a.key,idx:e}}function Lh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?qs(e):e,state:n,key:e&&e.key||r||$E()}}function ul({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function qs(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function eM(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,f=o.history,d="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let S=g(),v=S==null?null:S-h;h=S,m&&m({action:d,location:T.location,delta:v})}function x(S,v){d="PUSH";let L=Lh(T.location,S,v);h=g()+1;let D=G_(L,h),N=T.createHref(L);try{f.pushState(D,"",N)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(N)}u&&m&&m({action:d,location:T.location,delta:1})}function y(S,v){d="REPLACE";let L=Lh(T.location,S,v);h=g();let D=G_(L,h),N=T.createHref(L);f.replaceState(D,"",N),u&&m&&m({action:d,location:T.location,delta:0})}function E(S){let v=o.location.origin!=="null"?o.location.origin:o.location.href,L=typeof S=="string"?S:ul(S);return L=L.replace(/ $/,"%20"),$t(v,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,v)}let T={get action(){return d},get location(){return a(o,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(V_,_),m=S,()=>{o.removeEventListener(V_,_),m=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let v=E(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:y,go(S){return f.go(S)}};return T}function ox(a,e,n="/"){return tM(a,e,n,!1)}function tM(a,e,n,r){let o=typeof e=="string"?qs(e):e,u=Da(o.pathname||"/",n);if(u==null)return null;let f=lx(a);nM(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let h=hM(u);d=fM(f[m],h,r)}return d}function lx(a,e=[],n=[],r=""){let o=(u,f,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&($t(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let h=Ra([r,m.relativePath]),g=n.concat(m);u.children&&u.children.length>0&&($t(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),lx(u.children,e,g,h)),!(u.path==null&&!u.index)&&e.push({path:h,score:uM(h,u.index),routesMeta:g})};return a.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))o(u,f);else for(let m of ux(u.path))o(u,f,m)}),e}function ux(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let f=ux(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),o&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function nM(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:cM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var iM=/^:[\w-]+$/,aM=3,rM=2,sM=1,oM=10,lM=-2,k_=a=>a==="*";function uM(a,e){let n=a.split("/"),r=n.length;return n.some(k_)&&(r+=lM),e&&(r+=rM),n.filter(o=>!k_(o)).reduce((o,u)=>o+(iM.test(u)?aM:u===""?sM:oM),r)}function cM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function fM(a,e,n=!1){let{routesMeta:r}=a,o={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],h=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=vc({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),x=m.route;if(!_&&h&&n&&!r[r.length-1].route.index&&(_=vc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),f.push({params:o,pathname:Ra([u,_.pathname]),pathnameBase:_M(Ra([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=Ra([u,_.pathnameBase]))}return f}function vc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=dM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:_},x)=>{if(g==="*"){let E=d[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[x];return _&&!y?h[g]=void 0:h[g]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:f,pattern:a}}function dM(a,e=!1,n=!0){Ki(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function hM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ki(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Da(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function pM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?qs(a):a;return{pathname:n?n.startsWith("/")?n:mM(n,e):e,search:vM(r),hash:xM(o)}}function mM(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zd(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cx(a){let e=gM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function fx(a,e,n,r=!1){let o;typeof a=="string"?o=qs(a):(o={...a},$t(!o.pathname||!o.pathname.includes("?"),Zd("?","pathname","search",o)),$t(!o.pathname||!o.pathname.includes("#"),Zd("#","pathname","hash",o)),$t(!o.search||!o.search.includes("#"),Zd("#","search","hash",o)));let u=a===""||o.pathname==="",f=u?"/":o.pathname,d;if(f==null)d=n;else{let _=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;o.pathname=x.join("/")}d=_>=0?e[_]:"/"}let m=pM(o,d),h=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var Ra=a=>a.join("/").replace(/\/\/+/g,"/"),_M=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),vM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,xM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function SM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var dx=["POST","PUT","PATCH","DELETE"];new Set(dx);var yM=["GET",...dx];new Set(yM);var Ys=oe.createContext(null);Ys.displayName="DataRouter";var wc=oe.createContext(null);wc.displayName="DataRouterState";var hx=oe.createContext({isTransitioning:!1});hx.displayName="ViewTransition";var EM=oe.createContext(new Map);EM.displayName="Fetchers";var MM=oe.createContext(null);MM.displayName="Await";var ta=oe.createContext(null);ta.displayName="Navigation";var ml=oe.createContext(null);ml.displayName="Location";var na=oe.createContext({outlet:null,matches:[],isDataRoute:!1});na.displayName="Route";var Bp=oe.createContext(null);Bp.displayName="RouteError";function bM(a,{relative:e}={}){$t(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=oe.useContext(ta),{hash:o,pathname:u,search:f}=_l(a,{relative:e}),d=u;return n!=="/"&&(d=u==="/"?n:Ra([n,u])),r.createHref({pathname:d,search:f,hash:o})}function gl(){return oe.useContext(ml)!=null}function hr(){return $t(gl(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext(ml).location}var px="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mx(a){oe.useContext(ta).static||oe.useLayoutEffect(a)}function zp(){let{isDataRoute:a}=oe.useContext(na);return a?IM():TM()}function TM(){$t(gl(),"useNavigate() may be used only in the context of a <Router> component.");let a=oe.useContext(Ys),{basename:e,navigator:n}=oe.useContext(ta),{matches:r}=oe.useContext(na),{pathname:o}=hr(),u=JSON.stringify(cx(r)),f=oe.useRef(!1);return mx(()=>{f.current=!0}),oe.useCallback((m,h={})=>{if(Ki(f.current,px),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=fx(m,JSON.parse(u),o,h.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ra([e,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[e,n,u,o,a])}oe.createContext(null);function iD(){let{matches:a}=oe.useContext(na),e=a[a.length-1];return e?e.params:{}}function _l(a,{relative:e}={}){let{matches:n}=oe.useContext(na),{pathname:r}=hr(),o=JSON.stringify(cx(n));return oe.useMemo(()=>fx(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function AM(a,e){return gx(a,e)}function gx(a,e,n,r){var L;$t(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=oe.useContext(ta),{matches:f}=oe.useContext(na),d=f[f.length-1],m=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let D=_&&_.path||"";_x(h,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=hr(),y;if(e){let D=typeof e=="string"?qs(e):e;$t(g==="/"||((L=D.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=x;let E=y.pathname||"/",T=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=!u&&n&&n.matches&&n.matches.length>0?n.matches:ox(a,{pathname:T});Ki(_||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ki(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=UM(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:Ra([g,o.encodeLocation?o.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:Ra([g,o.encodeLocation?o.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,n,r);return e&&v?oe.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function RM(){let a=FM(),e=SM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:u},"ErrorBoundary")," or"," ",oe.createElement("code",{style:u},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),n?oe.createElement("pre",{style:o},n):null,f)}var wM=oe.createElement(RM,null),CM=class extends oe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?oe.createElement(na.Provider,{value:this.props.routeContext},oe.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DM({routeContext:a,match:e,children:n}){let r=oe.useContext(Ys);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement(na.Provider,{value:a},n)}function UM(a,e=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let o=a,u=n==null?void 0:n.errors;if(u!=null){let m=o.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);$t(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,d=-1;if(n)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:g,errors:_}=n,x=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!_||_[h.route.id]===void 0);if(h.route.lazy||x){f=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let _,x=!1,y=null,E=null;n&&(_=u&&h.route.id?u[h.route.id]:void 0,y=h.route.errorElement||wM,f&&(d<0&&g===0?(_x("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):d===g&&(x=!0,E=h.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),S=()=>{let v;return _?v=y:x?v=E:h.route.Component?v=oe.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=m,oe.createElement(DM,{match:h,routeContext:{outlet:m,matches:T,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?oe.createElement(CM,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:S(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):S()},null)}function Hp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LM(a){let e=oe.useContext(Ys);return $t(e,Hp(a)),e}function NM(a){let e=oe.useContext(wc);return $t(e,Hp(a)),e}function OM(a){let e=oe.useContext(na);return $t(e,Hp(a)),e}function Vp(a){let e=OM(a),n=e.matches[e.matches.length-1];return $t(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function PM(){return Vp("useRouteId")}function FM(){var r;let a=oe.useContext(Bp),e=NM("useRouteError"),n=Vp("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function IM(){let{router:a}=LM("useNavigate"),e=Vp("useNavigate"),n=oe.useRef(!1);return mx(()=>{n.current=!0}),oe.useCallback(async(o,u={})=>{Ki(n.current,px),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:e,...u}))},[a,e])}var X_={};function _x(a,e,n){!e&&!X_[a]&&(X_[a]=!0,Ki(!1,n))}oe.memo(BM);function BM({routes:a,future:e,state:n}){return gx(a,void 0,n,e)}function wi(a){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:u=!1}){$t(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=oe.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=qs(n));let{pathname:m="/",search:h="",hash:g="",state:_=null,key:x="default"}=n,y=oe.useMemo(()=>{let E=Da(m,f);return E==null?null:{location:{pathname:E,search:h,hash:g,state:_,key:x},navigationType:r}},[f,m,h,g,_,x,r]);return Ki(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:oe.createElement(ta.Provider,{value:d},oe.createElement(ml.Provider,{children:e,value:y}))}function HM({children:a,location:e}){return AM(Nh(a),e)}function Nh(a,e=[]){let n=[];return oe.Children.forEach(a,(r,o)=>{if(!oe.isValidElement(r))return;let u=[...e,o];if(r.type===oe.Fragment){n.push.apply(n,Nh(r.props.children,u));return}$t(r.type===wi,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Nh(r.props.children,u)),n.push(f)}),n}var oc="get",lc="application/x-www-form-urlencoded";function Cc(a){return a!=null&&typeof a.tagName=="string"}function VM(a){return Cc(a)&&a.tagName.toLowerCase()==="button"}function GM(a){return Cc(a)&&a.tagName.toLowerCase()==="form"}function kM(a){return Cc(a)&&a.tagName.toLowerCase()==="input"}function XM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function WM(a,e){return a.button===0&&(!e||e==="_self")&&!XM(a)}var Fu=null;function qM(){if(Fu===null)try{new FormData(document.createElement("form"),0),Fu=!1}catch{Fu=!0}return Fu}var YM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kd(a){return a!=null&&!YM.has(a)?(Ki(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lc}"`),null):a}function jM(a,e){let n,r,o,u,f;if(GM(a)){let d=a.getAttribute("action");r=d?Da(d,e):null,n=a.getAttribute("method")||oc,o=Kd(a.getAttribute("enctype"))||lc,u=new FormData(a)}else if(VM(a)||kM(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(r=m?Da(m,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||oc,o=Kd(a.getAttribute("formenctype"))||Kd(d.getAttribute("enctype"))||lc,u=new FormData(d,a),!qM()){let{name:h,type:g,value:_}=a;if(g==="image"){let x=h?`${h}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else h&&u.append(h,_)}}else{if(Cc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=oc,r=null,o=lc,f=a}return u&&o==="text/plain"&&(f=u,u=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:u,body:f}}function Gp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function ZM(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function QM(a,e,n){let r=await Promise.all(a.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await ZM(u,n);return f.links?f.links():[]}return[]}));return tb(r.flat(1).filter(KM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function W_(a,e,n,r,o,u){let f=(m,h)=>n[h]?m.route.id!==n[h].route.id:!0,d=(m,h)=>{var g;return n[h].pathname!==m.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,h)=>f(m,h)||d(m,h)):u==="data"?e.filter((m,h)=>{var _;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function JM(a,e,{includeHydrateFallback:n}={}){return $M(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function $M(a){return[...new Set(a)]}function eb(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function tb(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let u=JSON.stringify(eb(o));return n.has(u)||(n.add(u),r.push({key:u,link:o})),r},[])}var nb=new Set([100,101,204,205]);function ib(a,e){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":e&&Da(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function vx(){let a=oe.useContext(Ys);return Gp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function ab(){let a=oe.useContext(wc);return Gp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var kp=oe.createContext(void 0);kp.displayName="FrameworkContext";function xx(){let a=oe.useContext(kp);return Gp(a,"You must render this element inside a <HydratedRouter> element"),a}function rb(a,e){let n=oe.useContext(kp),[r,o]=oe.useState(!1),[u,f]=oe.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:_}=e,x=oe.useRef(null);oe.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=v=>{v.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),oe.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let y=()=>{o(!0)},E=()=>{o(!1),f(!1)};return n?a!=="intent"?[u,x,{}]:[u,x,{onFocus:Ko(d,y),onBlur:Ko(m,E),onMouseEnter:Ko(h,y),onMouseLeave:Ko(g,E),onTouchStart:Ko(_,y)}]:[!1,x,{}]}function Ko(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function sb({page:a,...e}){let{router:n}=vx(),r=oe.useMemo(()=>ox(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?oe.createElement(lb,{page:a,matches:r,...e}):null}function ob(a){let{manifest:e,routeModules:n}=xx(),[r,o]=oe.useState([]);return oe.useEffect(()=>{let u=!1;return QM(a,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[a,e,n]),r}function lb({page:a,matches:e,...n}){let r=hr(),{manifest:o,routeModules:u}=xx(),{basename:f}=vx(),{loaderData:d,matches:m}=ab(),h=oe.useMemo(()=>W_(a,e,m,o,r,"data"),[a,e,m,o,r]),g=oe.useMemo(()=>W_(a,e,m,o,r,"assets"),[a,e,m,o,r]),_=oe.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(v=>{var D;let L=o.routes[v.route.id];!L||!L.hasLoader||(!h.some(N=>N.route.id===v.route.id)&&v.route.id in d&&((D=u[v.route.id])!=null&&D.shouldRevalidate)||L.hasClientLoader?T=!0:E.add(v.route.id))}),E.size===0)return[];let S=ib(a,f);return T&&E.size>0&&S.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,d,r,o,h,e,a,u]),x=oe.useMemo(()=>JM(g,o),[g,o]),y=ob(g);return oe.createElement(oe.Fragment,null,_.map(E=>oe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),x.map(E=>oe.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),y.map(({key:E,link:T})=>oe.createElement("link",{key:E,...T})))}function ub(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sx&&(window.__reactRouterVersion="7.5.3")}catch{}function cb({basename:a,children:e,window:n}){let r=oe.useRef();r.current==null&&(r.current=JE({window:n,v5Compat:!0}));let o=r.current,[u,f]=oe.useState({action:o.action,location:o.location}),d=oe.useCallback(m=>{oe.startTransition(()=>f(m))},[f]);return oe.useLayoutEffect(()=>o.listen(d),[o,d]),oe.createElement(zM,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:o})}var yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ex=oe.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:u,replace:f,state:d,target:m,to:h,preventScrollReset:g,viewTransition:_,...x},y){let{basename:E}=oe.useContext(ta),T=typeof h=="string"&&yx.test(h),S,v=!1;if(typeof h=="string"&&T&&(S=h,Sx))try{let A=new URL(window.location.href),U=h.startsWith("//")?new URL(A.protocol+h):new URL(h),k=Da(U.pathname,E);U.origin===A.origin&&k!=null?h=k+U.search+U.hash:v=!0}catch{Ki(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=bM(h,{relative:o}),[D,N,P]=rb(r,x),B=pb(h,{replace:f,state:d,target:m,preventScrollReset:g,relative:o,viewTransition:_});function H(A){e&&e(A),A.defaultPrevented||B(A)}let Q=oe.createElement("a",{...x,...P,href:S||L,onClick:v||u?e:H,ref:ub(y,N),target:m,"data-discover":!T&&n==="render"?"true":void 0});return D&&!T?oe.createElement(oe.Fragment,null,Q,oe.createElement(sb,{page:L})):Q});Ex.displayName="Link";var fb=oe.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:u,to:f,viewTransition:d,children:m,...h},g){let _=_l(f,{relative:h.relative}),x=hr(),y=oe.useContext(wc),{navigator:E,basename:T}=oe.useContext(ta),S=y!=null&&xb(_)&&d===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,L=x.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(L=L.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&T&&(D=Da(D,T)||D);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=L===v||!o&&L.startsWith(v)&&L.charAt(N)==="/",B=D!=null&&(D===v||!o&&D.startsWith(v)&&D.charAt(v.length)==="/"),H={isActive:P,isPending:B,isTransitioning:S},Q=P?e:void 0,A;typeof r=="function"?A=r(H):A=[r,P?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let U=typeof u=="function"?u(H):u;return oe.createElement(Ex,{...h,"aria-current":Q,className:A,ref:g,style:U,to:f,viewTransition:d},typeof m=="function"?m(H):m)});fb.displayName="NavLink";var db=oe.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:u,method:f=oc,action:d,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:_,...x},y)=>{let E=_b(),T=vb(d,{relative:h}),S=f.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&yx.test(d),L=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let N=D.nativeEvent.submitter,P=(N==null?void 0:N.getAttribute("formmethod"))||f;E(N||D.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:o,state:u,relative:h,preventScrollReset:g,viewTransition:_})};return oe.createElement("form",{ref:y,method:S,action:T,onSubmit:r?m:L,...x,"data-discover":!v&&a==="render"?"true":void 0})});db.displayName="Form";function hb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mx(a){let e=oe.useContext(Ys);return $t(e,hb(a)),e}function pb(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:u,viewTransition:f}={}){let d=zp(),m=hr(),h=_l(a,{relative:u});return oe.useCallback(g=>{if(WM(g,e)){g.preventDefault();let _=n!==void 0?n:ul(m)===ul(h);d(a,{replace:_,state:r,preventScrollReset:o,relative:u,viewTransition:f})}},[m,d,h,n,r,e,a,o,u,f])}var mb=0,gb=()=>`__${String(++mb)}__`;function _b(){let{router:a}=Mx("useSubmit"),{basename:e}=oe.useContext(ta),n=PM();return oe.useCallback(async(r,o={})=>{let{action:u,method:f,encType:d,formData:m,body:h}=jM(r,e);if(o.navigate===!1){let g=o.fetcherKey||gb();await a.fetch(g,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:h,formMethod:o.method||f,formEncType:o.encType||d,flushSync:o.flushSync})}else await a.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:h,formMethod:o.method||f,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,e,n])}function vb(a,{relative:e}={}){let{basename:n}=oe.useContext(ta),r=oe.useContext(na);$t(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={..._l(a||".",{relative:e})},f=hr();if(a==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Ra([n,u.pathname])),ul(u)}function xb(a,e={}){let n=oe.useContext(hx);$t(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mx("useViewTransitionState"),o=_l(a,{relative:e.relative});if(!n.isTransitioning)return!1;let u=Da(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=Da(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vc(o.pathname,f)!=null||vc(o.pathname,u)!=null}new TextEncoder;[...nb];var q_={},Sb="@vercel/analytics",yb="1.5.0",Eb=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function bx(){return typeof window<"u"}function Tx(){try{const a="production"}catch{}return"production"}function Mb(a="auto"){if(a==="auto"){window.vam=Tx();return}window.vam=a}function bb(){return(bx()?window.vam:Tx())||"production"}function Oh(){return bb()==="development"}function Tb(a){return a.scriptSrc?a.scriptSrc:Oh()?"https://va.vercel-scripts.com/v1/script.debug.js":a.basePath?`${a.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function Ab(a={debug:!0}){var e;if(!bx())return;Mb(a.mode),Eb(),a.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",a.beforeSend));const n=Tb(a);if(document.head.querySelector(`script[src*="${n}"]`))return;const r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn=Sb+(a.framework?`/${a.framework}`:""),r.dataset.sdkv=yb,a.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),a.endpoint?r.dataset.endpoint=a.endpoint:a.basePath&&(r.dataset.endpoint=`${a.basePath}/insights`),a.dsn&&(r.dataset.dsn=a.dsn),r.onerror=()=>{const o=Oh()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${o}`)},Oh()&&a.debug===!1&&(r.dataset.debug="false"),document.head.appendChild(r)}function Rb({route:a,path:e}){var n;(n=window.va)==null||n.call(window,"pageview",{route:a,path:e})}function wb(){if(!(typeof process>"u"||typeof q_>"u"))return q_.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function Cb(a){return oe.useEffect(()=>{var e;a.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",a.beforeSend))},[a.beforeSend]),oe.useEffect(()=>{Ab({framework:a.framework||"react",basePath:a.basePath??wb(),...a.route!==void 0&&{disableAutoTrack:!0},...a})},[]),oe.useEffect(()=>{a.route&&a.path&&Rb({route:a.route,path:a.path})},[a.route,a.path]),null}function Ax(a,e){return function(){return a.apply(e,arguments)}}const{toString:Db}=Object.prototype,{getPrototypeOf:Xp}=Object,{iterator:Dc,toStringTag:Rx}=Symbol,Uc=(a=>e=>{const n=Db.call(e);return a[n]||(a[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Pi=a=>(a=a.toLowerCase(),e=>Uc(e)===a),Lc=a=>e=>typeof e===a,{isArray:js}=Array,cl=Lc("undefined");function Ub(a){return a!==null&&!cl(a)&&a.constructor!==null&&!cl(a.constructor)&&Yn(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const wx=Pi("ArrayBuffer");function Lb(a){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(a):e=a&&a.buffer&&wx(a.buffer),e}const Nb=Lc("string"),Yn=Lc("function"),Cx=Lc("number"),Nc=a=>a!==null&&typeof a=="object",Ob=a=>a===!0||a===!1,uc=a=>{if(Uc(a)!=="object")return!1;const e=Xp(a);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Rx in a)&&!(Dc in a)},Pb=Pi("Date"),Fb=Pi("File"),Ib=Pi("Blob"),Bb=Pi("FileList"),zb=a=>Nc(a)&&Yn(a.pipe),Hb=a=>{let e;return a&&(typeof FormData=="function"&&a instanceof FormData||Yn(a.append)&&((e=Uc(a))==="formdata"||e==="object"&&Yn(a.toString)&&a.toString()==="[object FormData]"))},Vb=Pi("URLSearchParams"),[Gb,kb,Xb,Wb]=["ReadableStream","Request","Response","Headers"].map(Pi),qb=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vl(a,e,{allOwnKeys:n=!1}={}){if(a===null||typeof a>"u")return;let r,o;if(typeof a!="object"&&(a=[a]),js(a))for(r=0,o=a.length;r<o;r++)e.call(null,a[r],r,a);else{const u=n?Object.getOwnPropertyNames(a):Object.keys(a),f=u.length;let d;for(r=0;r<f;r++)d=u[r],e.call(null,a[d],d,a)}}function Dx(a,e){e=e.toLowerCase();const n=Object.keys(a);let r=n.length,o;for(;r-- >0;)if(o=n[r],e===o.toLowerCase())return o;return null}const Hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ux=a=>!cl(a)&&a!==Hr;function Ph(){const{caseless:a}=Ux(this)&&this||{},e={},n=(r,o)=>{const u=a&&Dx(e,o)||o;uc(e[u])&&uc(r)?e[u]=Ph(e[u],r):uc(r)?e[u]=Ph({},r):js(r)?e[u]=r.slice():e[u]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&vl(arguments[r],n);return e}const Yb=(a,e,n,{allOwnKeys:r}={})=>(vl(e,(o,u)=>{n&&Yn(o)?a[u]=Ax(o,n):a[u]=o},{allOwnKeys:r}),a),jb=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Zb=(a,e,n,r)=>{a.prototype=Object.create(e.prototype,r),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:e.prototype}),n&&Object.assign(a.prototype,n)},Kb=(a,e,n,r)=>{let o,u,f;const d={};if(e=e||{},a==null)return e;do{for(o=Object.getOwnPropertyNames(a),u=o.length;u-- >0;)f=o[u],(!r||r(f,a,e))&&!d[f]&&(e[f]=a[f],d[f]=!0);a=n!==!1&&Xp(a)}while(a&&(!n||n(a,e))&&a!==Object.prototype);return e},Qb=(a,e,n)=>{a=String(a),(n===void 0||n>a.length)&&(n=a.length),n-=e.length;const r=a.indexOf(e,n);return r!==-1&&r===n},Jb=a=>{if(!a)return null;if(js(a))return a;let e=a.length;if(!Cx(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=a[e];return n},$b=(a=>e=>a&&e instanceof a)(typeof Uint8Array<"u"&&Xp(Uint8Array)),eT=(a,e)=>{const r=(a&&a[Dc]).call(a);let o;for(;(o=r.next())&&!o.done;){const u=o.value;e.call(a,u[0],u[1])}},tT=(a,e)=>{let n;const r=[];for(;(n=a.exec(e))!==null;)r.push(n);return r},nT=Pi("HTMLFormElement"),iT=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Y_=(({hasOwnProperty:a})=>(e,n)=>a.call(e,n))(Object.prototype),aT=Pi("RegExp"),Lx=(a,e)=>{const n=Object.getOwnPropertyDescriptors(a),r={};vl(n,(o,u)=>{let f;(f=e(o,u,a))!==!1&&(r[u]=f||o)}),Object.defineProperties(a,r)},rT=a=>{Lx(a,(e,n)=>{if(Yn(a)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=a[n];if(Yn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sT=(a,e)=>{const n={},r=o=>{o.forEach(u=>{n[u]=!0})};return js(a)?r(a):r(String(a).split(e)),n},oT=()=>{},lT=(a,e)=>a!=null&&Number.isFinite(a=+a)?a:e;function uT(a){return!!(a&&Yn(a.append)&&a[Rx]==="FormData"&&a[Dc])}const cT=a=>{const e=new Array(10),n=(r,o)=>{if(Nc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[o]=r;const u=js(r)?[]:{};return vl(r,(f,d)=>{const m=n(f,o+1);!cl(m)&&(u[d]=m)}),e[o]=void 0,u}}return r};return n(a,0)},fT=Pi("AsyncFunction"),dT=a=>a&&(Nc(a)||Yn(a))&&Yn(a.then)&&Yn(a.catch),Nx=((a,e)=>a?setImmediate:e?((n,r)=>(Hr.addEventListener("message",({source:o,data:u})=>{o===Hr&&u===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Hr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Yn(Hr.postMessage)),hT=typeof queueMicrotask<"u"?queueMicrotask.bind(Hr):typeof process<"u"&&process.nextTick||Nx,pT=a=>a!=null&&Yn(a[Dc]),he={isArray:js,isArrayBuffer:wx,isBuffer:Ub,isFormData:Hb,isArrayBufferView:Lb,isString:Nb,isNumber:Cx,isBoolean:Ob,isObject:Nc,isPlainObject:uc,isReadableStream:Gb,isRequest:kb,isResponse:Xb,isHeaders:Wb,isUndefined:cl,isDate:Pb,isFile:Fb,isBlob:Ib,isRegExp:aT,isFunction:Yn,isStream:zb,isURLSearchParams:Vb,isTypedArray:$b,isFileList:Bb,forEach:vl,merge:Ph,extend:Yb,trim:qb,stripBOM:jb,inherits:Zb,toFlatObject:Kb,kindOf:Uc,kindOfTest:Pi,endsWith:Qb,toArray:Jb,forEachEntry:eT,matchAll:tT,isHTMLForm:nT,hasOwnProperty:Y_,hasOwnProp:Y_,reduceDescriptors:Lx,freezeMethods:rT,toObjectSet:sT,toCamelCase:iT,noop:oT,toFiniteNumber:lT,findKey:Dx,global:Hr,isContextDefined:Ux,isSpecCompliantForm:uT,toJSONObject:cT,isAsyncFn:fT,isThenable:dT,setImmediate:Nx,asap:hT,isIterable:pT};function ut(a,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}he.inherits(ut,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:he.toJSONObject(this.config),code:this.code,status:this.status}}});const Ox=ut.prototype,Px={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Px[a]={value:a}});Object.defineProperties(ut,Px);Object.defineProperty(Ox,"isAxiosError",{value:!0});ut.from=(a,e,n,r,o,u)=>{const f=Object.create(Ox);return he.toFlatObject(a,f,function(m){return m!==Error.prototype},d=>d!=="isAxiosError"),ut.call(f,a.message,e,n,r,o),f.cause=a,f.name=a.name,u&&Object.assign(f,u),f};const mT=null;function Fh(a){return he.isPlainObject(a)||he.isArray(a)}function Fx(a){return he.endsWith(a,"[]")?a.slice(0,-2):a}function j_(a,e,n){return a?a.concat(e).map(function(o,u){return o=Fx(o),!n&&u?"["+o+"]":o}).join(n?".":""):e}function gT(a){return he.isArray(a)&&!a.some(Fh)}const _T=he.toFlatObject(he,{},null,function(e){return/^is[A-Z]/.test(e)});function Oc(a,e,n){if(!he.isObject(a))throw new TypeError("target must be an object");e=e||new FormData,n=he.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,S){return!he.isUndefined(S[T])});const r=n.metaTokens,o=n.visitor||g,u=n.dots,f=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&he.isSpecCompliantForm(e);if(!he.isFunction(o))throw new TypeError("visitor must be a function");function h(E){if(E===null)return"";if(he.isDate(E))return E.toISOString();if(!m&&he.isBlob(E))throw new ut("Blob is not supported. Use a Buffer instead.");return he.isArrayBuffer(E)||he.isTypedArray(E)?m&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function g(E,T,S){let v=E;if(E&&!S&&typeof E=="object"){if(he.endsWith(T,"{}"))T=r?T:T.slice(0,-2),E=JSON.stringify(E);else if(he.isArray(E)&&gT(E)||(he.isFileList(E)||he.endsWith(T,"[]"))&&(v=he.toArray(E)))return T=Fx(T),v.forEach(function(D,N){!(he.isUndefined(D)||D===null)&&e.append(f===!0?j_([T],N,u):f===null?T:T+"[]",h(D))}),!1}return Fh(E)?!0:(e.append(j_(S,T,u),h(E)),!1)}const _=[],x=Object.assign(_T,{defaultVisitor:g,convertValue:h,isVisitable:Fh});function y(E,T){if(!he.isUndefined(E)){if(_.indexOf(E)!==-1)throw Error("Circular reference detected in "+T.join("."));_.push(E),he.forEach(E,function(v,L){(!(he.isUndefined(v)||v===null)&&o.call(e,v,he.isString(L)?L.trim():L,T,x))===!0&&y(v,T?T.concat(L):[L])}),_.pop()}}if(!he.isObject(a))throw new TypeError("data must be an object");return y(a),e}function Z_(a){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Wp(a,e){this._pairs=[],a&&Oc(a,this,e)}const Ix=Wp.prototype;Ix.append=function(e,n){this._pairs.push([e,n])};Ix.toString=function(e){const n=e?function(r){return e.call(this,r,Z_)}:Z_;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function vT(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bx(a,e,n){if(!e)return a;const r=n&&n.encode||vT;he.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let u;if(o?u=o(e,n):u=he.isURLSearchParams(e)?e.toString():new Wp(e,n).toString(r),u){const f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+u}return a}class K_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){he.forEach(this.handlers,function(r){r!==null&&e(r)})}}const zx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xT=typeof URLSearchParams<"u"?URLSearchParams:Wp,ST=typeof FormData<"u"?FormData:null,yT=typeof Blob<"u"?Blob:null,ET={isBrowser:!0,classes:{URLSearchParams:xT,FormData:ST,Blob:yT},protocols:["http","https","file","blob","url","data"]},qp=typeof window<"u"&&typeof document<"u",Ih=typeof navigator=="object"&&navigator||void 0,MT=qp&&(!Ih||["ReactNative","NativeScript","NS"].indexOf(Ih.product)<0),bT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",TT=qp&&window.location.href||"http://localhost",AT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qp,hasStandardBrowserEnv:MT,hasStandardBrowserWebWorkerEnv:bT,navigator:Ih,origin:TT},Symbol.toStringTag,{value:"Module"})),In={...AT,...ET};function RT(a,e){return Oc(a,new In.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,u){return In.isNode&&he.isBuffer(n)?(this.append(r,n.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},e))}function wT(a){return he.matchAll(/\w+|\[(\w*)]/g,a).map(e=>e[0]==="[]"?"":e[1]||e[0])}function CT(a){const e={},n=Object.keys(a);let r;const o=n.length;let u;for(r=0;r<o;r++)u=n[r],e[u]=a[u];return e}function Hx(a){function e(n,r,o,u){let f=n[u++];if(f==="__proto__")return!0;const d=Number.isFinite(+f),m=u>=n.length;return f=!f&&he.isArray(o)?o.length:f,m?(he.hasOwnProp(o,f)?o[f]=[o[f],r]:o[f]=r,!d):((!o[f]||!he.isObject(o[f]))&&(o[f]=[]),e(n,r,o[f],u)&&he.isArray(o[f])&&(o[f]=CT(o[f])),!d)}if(he.isFormData(a)&&he.isFunction(a.entries)){const n={};return he.forEachEntry(a,(r,o)=>{e(wT(r),o,n,0)}),n}return null}function DT(a,e,n){if(he.isString(a))try{return(e||JSON.parse)(a),he.trim(a)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(a)}const xl={transitional:zx,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,u=he.isObject(e);if(u&&he.isHTMLForm(e)&&(e=new FormData(e)),he.isFormData(e))return o?JSON.stringify(Hx(e)):e;if(he.isArrayBuffer(e)||he.isBuffer(e)||he.isStream(e)||he.isFile(e)||he.isBlob(e)||he.isReadableStream(e))return e;if(he.isArrayBufferView(e))return e.buffer;if(he.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(u){if(r.indexOf("application/x-www-form-urlencoded")>-1)return RT(e,this.formSerializer).toString();if((d=he.isFileList(e))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Oc(d?{"files[]":e}:e,m&&new m,this.formSerializer)}}return u||o?(n.setContentType("application/json",!1),DT(e)):e}],transformResponse:[function(e){const n=this.transitional||xl.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(he.isResponse(e)||he.isReadableStream(e))return e;if(e&&he.isString(e)&&(r&&!this.responseType||o)){const f=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(d){if(f)throw d.name==="SyntaxError"?ut.from(d,ut.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:In.classes.FormData,Blob:In.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};he.forEach(["delete","get","head","post","put","patch"],a=>{xl.headers[a]={}});const UT=he.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),LT=a=>{const e={};let n,r,o;return a&&a.split(`
`).forEach(function(f){o=f.indexOf(":"),n=f.substring(0,o).trim().toLowerCase(),r=f.substring(o+1).trim(),!(!n||e[n]&&UT[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Q_=Symbol("internals");function Qo(a){return a&&String(a).trim().toLowerCase()}function cc(a){return a===!1||a==null?a:he.isArray(a)?a.map(cc):String(a)}function NT(a){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(a);)e[r[1]]=r[2];return e}const OT=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Qd(a,e,n,r,o){if(he.isFunction(r))return r.call(this,e,n);if(o&&(e=n),!!he.isString(e)){if(he.isString(r))return e.indexOf(r)!==-1;if(he.isRegExp(r))return r.test(e)}}function PT(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function FT(a,e){const n=he.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(a,r+n,{value:function(o,u,f){return this[r].call(this,e,o,u,f)},configurable:!0})})}let jn=class{constructor(e){e&&this.set(e)}set(e,n,r){const o=this;function u(d,m,h){const g=Qo(m);if(!g)throw new Error("header name must be a non-empty string");const _=he.findKey(o,g);(!_||o[_]===void 0||h===!0||h===void 0&&o[_]!==!1)&&(o[_||m]=cc(d))}const f=(d,m)=>he.forEach(d,(h,g)=>u(h,g,m));if(he.isPlainObject(e)||e instanceof this.constructor)f(e,n);else if(he.isString(e)&&(e=e.trim())&&!OT(e))f(LT(e),n);else if(he.isObject(e)&&he.isIterable(e)){let d={},m,h;for(const g of e){if(!he.isArray(g))throw TypeError("Object iterator must return a key-value pair");d[h=g[0]]=(m=d[h])?he.isArray(m)?[...m,g[1]]:[m,g[1]]:g[1]}f(d,n)}else e!=null&&u(n,e,r);return this}get(e,n){if(e=Qo(e),e){const r=he.findKey(this,e);if(r){const o=this[r];if(!n)return o;if(n===!0)return NT(o);if(he.isFunction(n))return n.call(this,o,r);if(he.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Qo(e),e){const r=he.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Qd(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let o=!1;function u(f){if(f=Qo(f),f){const d=he.findKey(r,f);d&&(!n||Qd(r,r[d],d,n))&&(delete r[d],o=!0)}}return he.isArray(e)?e.forEach(u):u(e),o}clear(e){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const u=n[r];(!e||Qd(this,this[u],u,e,!0))&&(delete this[u],o=!0)}return o}normalize(e){const n=this,r={};return he.forEach(this,(o,u)=>{const f=he.findKey(r,u);if(f){n[f]=cc(o),delete n[u];return}const d=e?PT(u):String(u).trim();d!==u&&delete n[u],n[d]=cc(o),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return he.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=e&&he.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[Q_]=this[Q_]={accessors:{}}).accessors,o=this.prototype;function u(f){const d=Qo(f);r[d]||(FT(o,f),r[d]=!0)}return he.isArray(e)?e.forEach(u):u(e),this}};jn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);he.reduceDescriptors(jn.prototype,({value:a},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>a,set(r){this[n]=r}}});he.freezeMethods(jn);function Jd(a,e){const n=this||xl,r=e||n,o=jn.from(r.headers);let u=r.data;return he.forEach(a,function(d){u=d.call(n,u,o.normalize(),e?e.status:void 0)}),o.normalize(),u}function Vx(a){return!!(a&&a.__CANCEL__)}function Zs(a,e,n){ut.call(this,a??"canceled",ut.ERR_CANCELED,e,n),this.name="CanceledError"}he.inherits(Zs,ut,{__CANCEL__:!0});function Gx(a,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?a(n):e(new ut("Request failed with status code "+n.status,[ut.ERR_BAD_REQUEST,ut.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function IT(a){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return e&&e[1]||""}function BT(a,e){a=a||10;const n=new Array(a),r=new Array(a);let o=0,u=0,f;return e=e!==void 0?e:1e3,function(m){const h=Date.now(),g=r[u];f||(f=h),n[o]=m,r[o]=h;let _=u,x=0;for(;_!==o;)x+=n[_++],_=_%a;if(o=(o+1)%a,o===u&&(u=(u+1)%a),h-f<e)return;const y=g&&h-g;return y?Math.round(x*1e3/y):void 0}}function zT(a,e){let n=0,r=1e3/e,o,u;const f=(h,g=Date.now())=>{n=g,o=null,u&&(clearTimeout(u),u=null),a.apply(null,h)};return[(...h)=>{const g=Date.now(),_=g-n;_>=r?f(h,g):(o=h,u||(u=setTimeout(()=>{u=null,f(o)},r-_)))},()=>o&&f(o)]}const xc=(a,e,n=3)=>{let r=0;const o=BT(50,250);return zT(u=>{const f=u.loaded,d=u.lengthComputable?u.total:void 0,m=f-r,h=o(m),g=f<=d;r=f;const _={loaded:f,total:d,progress:d?f/d:void 0,bytes:m,rate:h||void 0,estimated:h&&d&&g?(d-f)/h:void 0,event:u,lengthComputable:d!=null,[e?"download":"upload"]:!0};a(_)},n)},J_=(a,e)=>{const n=a!=null;return[r=>e[0]({lengthComputable:n,total:a,loaded:r}),e[1]]},$_=a=>(...e)=>he.asap(()=>a(...e)),HT=In.hasStandardBrowserEnv?((a,e)=>n=>(n=new URL(n,In.origin),a.protocol===n.protocol&&a.host===n.host&&(e||a.port===n.port)))(new URL(In.origin),In.navigator&&/(msie|trident)/i.test(In.navigator.userAgent)):()=>!0,VT=In.hasStandardBrowserEnv?{write(a,e,n,r,o,u){const f=[a+"="+encodeURIComponent(e)];he.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),he.isString(r)&&f.push("path="+r),he.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read(a){const e=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function GT(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function kT(a,e){return e?a.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):a}function kx(a,e,n){let r=!GT(e);return a&&(r||n==!1)?kT(a,e):e}const ev=a=>a instanceof jn?{...a}:a;function Wr(a,e){e=e||{};const n={};function r(h,g,_,x){return he.isPlainObject(h)&&he.isPlainObject(g)?he.merge.call({caseless:x},h,g):he.isPlainObject(g)?he.merge({},g):he.isArray(g)?g.slice():g}function o(h,g,_,x){if(he.isUndefined(g)){if(!he.isUndefined(h))return r(void 0,h,_,x)}else return r(h,g,_,x)}function u(h,g){if(!he.isUndefined(g))return r(void 0,g)}function f(h,g){if(he.isUndefined(g)){if(!he.isUndefined(h))return r(void 0,h)}else return r(void 0,g)}function d(h,g,_){if(_ in e)return r(h,g);if(_ in a)return r(void 0,h)}const m={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:d,headers:(h,g,_)=>o(ev(h),ev(g),_,!0)};return he.forEach(Object.keys(Object.assign({},a,e)),function(g){const _=m[g]||o,x=_(a[g],e[g],g);he.isUndefined(x)&&_!==d||(n[g]=x)}),n}const Xx=a=>{const e=Wr({},a);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:u,headers:f,auth:d}=e;e.headers=f=jn.from(f),e.url=Bx(kx(e.baseURL,e.url,e.allowAbsoluteUrls),a.params,a.paramsSerializer),d&&f.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let m;if(he.isFormData(n)){if(In.hasStandardBrowserEnv||In.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[h,...g]=m?m.split(";").map(_=>_.trim()).filter(Boolean):[];f.setContentType([h||"multipart/form-data",...g].join("; "))}}if(In.hasStandardBrowserEnv&&(r&&he.isFunction(r)&&(r=r(e)),r||r!==!1&&HT(e.url))){const h=o&&u&&VT.read(u);h&&f.set(o,h)}return e},XT=typeof XMLHttpRequest<"u",WT=XT&&function(a){return new Promise(function(n,r){const o=Xx(a);let u=o.data;const f=jn.from(o.headers).normalize();let{responseType:d,onUploadProgress:m,onDownloadProgress:h}=o,g,_,x,y,E;function T(){y&&y(),E&&E(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let S=new XMLHttpRequest;S.open(o.method.toUpperCase(),o.url,!0),S.timeout=o.timeout;function v(){if(!S)return;const D=jn.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),P={data:!d||d==="text"||d==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:D,config:a,request:S};Gx(function(H){n(H),T()},function(H){r(H),T()},P),S=null}"onloadend"in S?S.onloadend=v:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(v)},S.onabort=function(){S&&(r(new ut("Request aborted",ut.ECONNABORTED,a,S)),S=null)},S.onerror=function(){r(new ut("Network Error",ut.ERR_NETWORK,a,S)),S=null},S.ontimeout=function(){let N=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const P=o.transitional||zx;o.timeoutErrorMessage&&(N=o.timeoutErrorMessage),r(new ut(N,P.clarifyTimeoutError?ut.ETIMEDOUT:ut.ECONNABORTED,a,S)),S=null},u===void 0&&f.setContentType(null),"setRequestHeader"in S&&he.forEach(f.toJSON(),function(N,P){S.setRequestHeader(P,N)}),he.isUndefined(o.withCredentials)||(S.withCredentials=!!o.withCredentials),d&&d!=="json"&&(S.responseType=o.responseType),h&&([x,E]=xc(h,!0),S.addEventListener("progress",x)),m&&S.upload&&([_,y]=xc(m),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",y)),(o.cancelToken||o.signal)&&(g=D=>{S&&(r(!D||D.type?new Zs(null,a,S):D),S.abort(),S=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const L=IT(o.url);if(L&&In.protocols.indexOf(L)===-1){r(new ut("Unsupported protocol "+L+":",ut.ERR_BAD_REQUEST,a));return}S.send(u||null)})},qT=(a,e)=>{const{length:n}=a=a?a.filter(Boolean):[];if(e||n){let r=new AbortController,o;const u=function(h){if(!o){o=!0,d();const g=h instanceof Error?h:this.reason;r.abort(g instanceof ut?g:new Zs(g instanceof Error?g.message:g))}};let f=e&&setTimeout(()=>{f=null,u(new ut(`timeout ${e} of ms exceeded`,ut.ETIMEDOUT))},e);const d=()=>{a&&(f&&clearTimeout(f),f=null,a.forEach(h=>{h.unsubscribe?h.unsubscribe(u):h.removeEventListener("abort",u)}),a=null)};a.forEach(h=>h.addEventListener("abort",u));const{signal:m}=r;return m.unsubscribe=()=>he.asap(d),m}},YT=function*(a,e){let n=a.byteLength;if(n<e){yield a;return}let r=0,o;for(;r<n;)o=r+e,yield a.slice(r,o),r=o},jT=async function*(a,e){for await(const n of ZT(a))yield*YT(n,e)},ZT=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const e=a.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},tv=(a,e,n,r)=>{const o=jT(a,e);let u=0,f,d=m=>{f||(f=!0,r&&r(m))};return new ReadableStream({async pull(m){try{const{done:h,value:g}=await o.next();if(h){d(),m.close();return}let _=g.byteLength;if(n){let x=u+=_;n(x)}m.enqueue(new Uint8Array(g))}catch(h){throw d(h),h}},cancel(m){return d(m),o.return()}},{highWaterMark:2})},Pc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Wx=Pc&&typeof ReadableStream=="function",KT=Pc&&(typeof TextEncoder=="function"?(a=>e=>a.encode(e))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),qx=(a,...e)=>{try{return!!a(...e)}catch{return!1}},QT=Wx&&qx(()=>{let a=!1;const e=new Request(In.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!e}),nv=64*1024,Bh=Wx&&qx(()=>he.isReadableStream(new Response("").body)),Sc={stream:Bh&&(a=>a.body)};Pc&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Sc[e]&&(Sc[e]=he.isFunction(a[e])?n=>n[e]():(n,r)=>{throw new ut(`Response type '${e}' is not supported`,ut.ERR_NOT_SUPPORT,r)})})})(new Response);const JT=async a=>{if(a==null)return 0;if(he.isBlob(a))return a.size;if(he.isSpecCompliantForm(a))return(await new Request(In.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(he.isArrayBufferView(a)||he.isArrayBuffer(a))return a.byteLength;if(he.isURLSearchParams(a)&&(a=a+""),he.isString(a))return(await KT(a)).byteLength},$T=async(a,e)=>{const n=he.toFiniteNumber(a.getContentLength());return n??JT(e)},e1=Pc&&(async a=>{let{url:e,method:n,data:r,signal:o,cancelToken:u,timeout:f,onDownloadProgress:d,onUploadProgress:m,responseType:h,headers:g,withCredentials:_="same-origin",fetchOptions:x}=Xx(a);h=h?(h+"").toLowerCase():"text";let y=qT([o,u&&u.toAbortSignal()],f),E;const T=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let S;try{if(m&&QT&&n!=="get"&&n!=="head"&&(S=await $T(g,r))!==0){let P=new Request(e,{method:"POST",body:r,duplex:"half"}),B;if(he.isFormData(r)&&(B=P.headers.get("content-type"))&&g.setContentType(B),P.body){const[H,Q]=J_(S,xc($_(m)));r=tv(P.body,nv,H,Q)}}he.isString(_)||(_=_?"include":"omit");const v="credentials"in Request.prototype;E=new Request(e,{...x,signal:y,method:n.toUpperCase(),headers:g.normalize().toJSON(),body:r,duplex:"half",credentials:v?_:void 0});let L=await fetch(E);const D=Bh&&(h==="stream"||h==="response");if(Bh&&(d||D&&T)){const P={};["status","statusText","headers"].forEach(A=>{P[A]=L[A]});const B=he.toFiniteNumber(L.headers.get("content-length")),[H,Q]=d&&J_(B,xc($_(d),!0))||[];L=new Response(tv(L.body,nv,H,()=>{Q&&Q(),T&&T()}),P)}h=h||"text";let N=await Sc[he.findKey(Sc,h)||"text"](L,a);return!D&&T&&T(),await new Promise((P,B)=>{Gx(P,B,{data:N,headers:jn.from(L.headers),status:L.status,statusText:L.statusText,config:a,request:E})})}catch(v){throw T&&T(),v&&v.name==="TypeError"&&/Load failed|fetch/i.test(v.message)?Object.assign(new ut("Network Error",ut.ERR_NETWORK,a,E),{cause:v.cause||v}):ut.from(v,v&&v.code,a,E)}}),zh={http:mT,xhr:WT,fetch:e1};he.forEach(zh,(a,e)=>{if(a){try{Object.defineProperty(a,"name",{value:e})}catch{}Object.defineProperty(a,"adapterName",{value:e})}});const iv=a=>`- ${a}`,t1=a=>he.isFunction(a)||a===null||a===!1,Yx={getAdapter:a=>{a=he.isArray(a)?a:[a];const{length:e}=a;let n,r;const o={};for(let u=0;u<e;u++){n=a[u];let f;if(r=n,!t1(n)&&(r=zh[(f=String(n)).toLowerCase()],r===void 0))throw new ut(`Unknown adapter '${f}'`);if(r)break;o[f||"#"+u]=r}if(!r){const u=Object.entries(o).map(([d,m])=>`adapter ${d} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=e?u.length>1?`since :
`+u.map(iv).join(`
`):" "+iv(u[0]):"as no adapter specified";throw new ut("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return r},adapters:zh};function $d(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Zs(null,a)}function av(a){return $d(a),a.headers=jn.from(a.headers),a.data=Jd.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Yx.getAdapter(a.adapter||xl.adapter)(a).then(function(r){return $d(a),r.data=Jd.call(a,a.transformResponse,r),r.headers=jn.from(r.headers),r},function(r){return Vx(r)||($d(a),r&&r.response&&(r.response.data=Jd.call(a,a.transformResponse,r.response),r.response.headers=jn.from(r.response.headers))),Promise.reject(r)})}const jx="1.9.0",Fc={};["object","boolean","number","function","string","symbol"].forEach((a,e)=>{Fc[a]=function(r){return typeof r===a||"a"+(e<1?"n ":" ")+a}});const rv={};Fc.transitional=function(e,n,r){function o(u,f){return"[Axios v"+jx+"] Transitional option '"+u+"'"+f+(r?". "+r:"")}return(u,f,d)=>{if(e===!1)throw new ut(o(f," has been removed"+(n?" in "+n:"")),ut.ERR_DEPRECATED);return n&&!rv[f]&&(rv[f]=!0,console.warn(o(f," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(u,f,d):!0}};Fc.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function n1(a,e,n){if(typeof a!="object")throw new ut("options must be an object",ut.ERR_BAD_OPTION_VALUE);const r=Object.keys(a);let o=r.length;for(;o-- >0;){const u=r[o],f=e[u];if(f){const d=a[u],m=d===void 0||f(d,u,a);if(m!==!0)throw new ut("option "+u+" must be "+m,ut.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ut("Unknown option "+u,ut.ERR_BAD_OPTION)}}const fc={assertOptions:n1,validators:Fc},Wi=fc.validators;let kr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new K_,response:new K_}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const u=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?u&&!String(r.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+u):r.stack=u}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Wr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:u}=n;r!==void 0&&fc.assertOptions(r,{silentJSONParsing:Wi.transitional(Wi.boolean),forcedJSONParsing:Wi.transitional(Wi.boolean),clarifyTimeoutError:Wi.transitional(Wi.boolean)},!1),o!=null&&(he.isFunction(o)?n.paramsSerializer={serialize:o}:fc.assertOptions(o,{encode:Wi.function,serialize:Wi.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),fc.assertOptions(n,{baseUrl:Wi.spelling("baseURL"),withXsrfToken:Wi.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let f=u&&he.merge(u.common,u[n.method]);u&&he.forEach(["delete","get","head","post","put","patch","common"],E=>{delete u[E]}),n.headers=jn.concat(f,u);const d=[];let m=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(m=m&&T.synchronous,d.unshift(T.fulfilled,T.rejected))});const h=[];this.interceptors.response.forEach(function(T){h.push(T.fulfilled,T.rejected)});let g,_=0,x;if(!m){const E=[av.bind(this),void 0];for(E.unshift.apply(E,d),E.push.apply(E,h),x=E.length,g=Promise.resolve(n);_<x;)g=g.then(E[_++],E[_++]);return g}x=d.length;let y=n;for(_=0;_<x;){const E=d[_++],T=d[_++];try{y=E(y)}catch(S){T.call(this,S);break}}try{g=av.call(this,y)}catch(E){return Promise.reject(E)}for(_=0,x=h.length;_<x;)g=g.then(h[_++],h[_++]);return g}getUri(e){e=Wr(this.defaults,e);const n=kx(e.baseURL,e.url,e.allowAbsoluteUrls);return Bx(n,e.params,e.paramsSerializer)}};he.forEach(["delete","get","head","options"],function(e){kr.prototype[e]=function(n,r){return this.request(Wr(r||{},{method:e,url:n,data:(r||{}).data}))}});he.forEach(["post","put","patch"],function(e){function n(r){return function(u,f,d){return this.request(Wr(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}kr.prototype[e]=n(),kr.prototype[e+"Form"]=n(!0)});let i1=class Zx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(u){n=u});const r=this;this.promise.then(o=>{if(!r._listeners)return;let u=r._listeners.length;for(;u-- >0;)r._listeners[u](o);r._listeners=null}),this.promise.then=o=>{let u;const f=new Promise(d=>{r.subscribe(d),u=d}).then(o);return f.cancel=function(){r.unsubscribe(u)},f},e(function(u,f,d){r.reason||(r.reason=new Zs(u,f,d),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Zx(function(o){e=o}),cancel:e}}};function a1(a){return function(n){return a.apply(null,n)}}function r1(a){return he.isObject(a)&&a.isAxiosError===!0}const Hh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hh).forEach(([a,e])=>{Hh[e]=a});function Kx(a){const e=new kr(a),n=Ax(kr.prototype.request,e);return he.extend(n,kr.prototype,e,{allOwnKeys:!0}),he.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return Kx(Wr(a,o))},n}const an=Kx(xl);an.Axios=kr;an.CanceledError=Zs;an.CancelToken=i1;an.isCancel=Vx;an.VERSION=jx;an.toFormData=Oc;an.AxiosError=ut;an.Cancel=an.CanceledError;an.all=function(e){return Promise.all(e)};an.spread=a1;an.isAxiosError=r1;an.mergeConfig=Wr;an.AxiosHeaders=jn;an.formToJSON=a=>Hx(he.isHTMLForm(a)?new FormData(a):a);an.getAdapter=Yx.getAdapter;an.HttpStatusCode=Hh;an.default=an;const{Axios:sD,AxiosError:oD,CanceledError:lD,isCancel:uD,CancelToken:cD,VERSION:fD,all:dD,Cancel:hD,isAxiosError:pD,spread:mD,toFormData:gD,AxiosHeaders:_D,HttpStatusCode:vD,formToJSON:xD,getAdapter:SD,mergeConfig:yD}=an,Iu={userId:"maciek-demo-01",username:"Maciek Geneja",email:"maciekgeneja@gmail.com",role:"Pro Athlete",isPro:!0,subscriptionPlan:"pro",emailVerified:!0,exp:4102444800};function sv(a){const e=btoa(JSON.stringify({alg:"HS256",typ:"JWT"})),n=btoa(JSON.stringify(a));return`${e}.${n}.demo-signature`}const Qx={_id:"session-2026-11-10",sessionDate:"2026-11-10T18:30:00.000Z",fg_percentage:75,makes:18,misses:6,total_shots:24,longest_streak:8,longestStreak:8,shots_results:[1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1],shot_angles:[47.2,48.5,41.8,49.1,47.9,48.3,53.4,48,49.2,47.6,48.8,49,47.5,48.1,48.9,42.1,47.8,52.9,48.4,49.3,43,48.2,41.5,48.7]},s1=[{_id:"session-2026-10-14",sessionDate:"2026-10-14T17:15:00.000Z",fg_percentage:58.3,makes:14,misses:10,total_shots:24,longest_streak:4,longestStreak:4,shots_results:[1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1],shot_angles:[44.2,40.5,46.8,47.1,53.9,41.2,48,47.2,48.6,49,42.5,47.1]},{_id:"session-2026-10-21",sessionDate:"2026-10-21T18:00:00.000Z",fg_percentage:64,makes:16,misses:9,total_shots:25,longest_streak:5,longestStreak:5,shots_results:[1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1],shot_angles:[46.1,47.4,41.9,48.2,47.8,48.5,49.1,47.9,42.8,48,52.4,47.7]},{_id:"session-2026-10-28",sessionDate:"2026-10-28T19:10:00.000Z",fg_percentage:68,makes:17,misses:8,total_shots:25,longest_streak:6,longestStreak:6,shots_results:[1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1],shot_angles:[47,48.1,47.5,42.3,48.4,48.9,47.8,48.2,49,48.6,41.7,47.9]},{_id:"session-2026-11-04",sessionDate:"2026-11-04T18:45:00.000Z",fg_percentage:72,makes:18,misses:7,total_shots:25,longest_streak:7,longestStreak:7,shots_results:[1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1],shot_angles:[47.8,42,48.3,48.7,47.9,48.5,49.1,48,48.4,52.8,47.6,48.2]},Qx],o1={plan:"pro",limits:{planName:"Pro Showcase",dailyCount:99,weeklyCount:99,maxDuration:300,features:["makes_misses","shot_angles","fg_progression","session_fg"]},usage:{count:5,remaining:94}};function l1(){try{localStorage.getItem("authToken")||localStorage.setItem("authToken",sv(Iu)),sessionStorage.getItem("analysisResults")||sessionStorage.setItem("analysisResults",JSON.stringify(Qx))}catch(e){console.warn("Could not seed demo storage:",e)}const a=window.fetch.bind(window);window.fetch=async(e,n)=>{const r=typeof e=="string"?e:(e==null?void 0:e.url)||"";return r.includes("/api/user-limits")?new Response(JSON.stringify(o1),{status:200,headers:{"Content-Type":"application/json"}}):r.includes("/api/profile")?new Response(JSON.stringify(Iu),{status:200,headers:{"Content-Type":"application/json"}}):r.includes("/api/sessions/")?new Response(JSON.stringify([...s1].reverse()),{status:200,headers:{"Content-Type":"application/json"}}):r.includes("/api/login")||r.includes("/api/register")?new Response(JSON.stringify({token:sv(Iu),user:Iu}),{status:200,headers:{"Content-Type":"application/json"}}):r.includes("/api/session")||r.includes("/api/logout")?new Response(JSON.stringify({success:!0}),{status:200,headers:{"Content-Type":"application/json"}}):a(e,n)}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yp="182",u1=0,ov=1,c1=2,dc=1,f1=2,sl=3,dr=0,Zn=1,Aa=2,wa=0,zs=1,Vh=2,lv=3,uv=4,d1=5,Br=100,h1=101,p1=102,m1=103,g1=104,_1=200,v1=201,x1=202,S1=203,Gh=204,kh=205,y1=206,E1=207,M1=208,b1=209,T1=210,A1=211,R1=212,w1=213,C1=214,Xh=0,Wh=1,qh=2,Vs=3,Yh=4,jh=5,Zh=6,Kh=7,Jx=0,D1=1,U1=2,Zi=0,$x=1,eS=2,tS=3,nS=4,iS=5,aS=6,rS=7,sS=300,qr=301,Gs=302,Qh=303,Jh=304,Ic=306,$h=1e3,si=1001,ep=1002,Un=1003,L1=1004,Bu=1005,pn=1006,eh=1007,Vr=1008,_i=1009,oS=1010,lS=1011,fl=1012,jp=1013,Qi=1014,Ui=1015,Ji=1016,Zp=1017,Kp=1018,dl=1020,uS=35902,cS=35899,fS=1021,dS=1022,vi=1023,Ua=1026,Gr=1027,hS=1028,Qp=1029,ks=1030,Jp=1031,$p=1033,hc=33776,pc=33777,mc=33778,gc=33779,tp=35840,np=35841,ip=35842,ap=35843,rp=36196,sp=37492,op=37496,lp=37488,up=37489,cp=37490,fp=37491,dp=37808,hp=37809,pp=37810,mp=37811,gp=37812,_p=37813,vp=37814,xp=37815,Sp=37816,yp=37817,Ep=37818,Mp=37819,bp=37820,Tp=37821,Ap=36492,Rp=36494,wp=36495,Cp=36283,Dp=36284,Up=36285,Lp=36286,N1=3200,O1=0,P1=1,cr="",gi="srgb",Xs="srgb-linear",yc="linear",Gt="srgb",Ts=7680,cv=519,F1=512,I1=513,B1=514,em=515,z1=516,H1=517,tm=518,V1=519,fv=35044,dv="300 es",ji=2e3,Ec=2001;function pS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Mc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function G1(){const a=Mc("canvas");return a.style.display="block",a}const hv={};function pv(...a){const e="THREE."+a.shift();console.log(e,...a)}function rt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Lt(...a){const e="THREE."+a.shift();console.error(e,...a)}function hl(...a){const e=a.join(" ");e in hv||(hv[e]=!0,rt(...a))}function k1(a,e,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Np=180/Math.PI;function Sl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function bt(a,e,n){return Math.max(e,Math.min(n,a))}function X1(a,e){return(a%e+e)%e}function nh(a,e,n){return(1-n)*a+n*e}function Jo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*o+e.x,this.y=u*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,f,d){let m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],x=u[f+0],y=u[f+1],E=u[f+2],T=u[f+3];if(d<=0){e[n+0]=m,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=E,e[n+3]=T;return}if(_!==T||m!==x||h!==y||g!==E){let S=m*x+h*y+g*E+_*T;S<0&&(x=-x,y=-y,E=-E,T=-T,S=-S);let v=1-d;if(S<.9995){const L=Math.acos(S),D=Math.sin(L);v=Math.sin(v*L)/D,d=Math.sin(d*L)/D,m=m*v+x*d,h=h*v+y*d,g=g*v+E*d,_=_*v+T*d}else{m=m*v+x*d,h=h*v+y*d,g=g*v+E*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=L,h*=L,g*=L,_*=L}}e[n]=m,e[n+1]=h,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,u,f){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],_=u[f],x=u[f+1],y=u[f+2],E=u[f+3];return e[n]=d*E+g*_+m*y-h*x,e[n+1]=m*E+g*x+h*_-d*y,e[n+2]=h*E+g*y+d*x-m*_,e[n+3]=g*E-d*_-m*x-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),_=d(u/2),x=m(r/2),y=m(o/2),E=m(u/2);switch(f){case"XYZ":this._x=x*g*_+h*y*E,this._y=h*y*_-x*g*E,this._z=h*g*E+x*y*_,this._w=h*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+h*y*E,this._y=h*y*_-x*g*E,this._z=h*g*E-x*y*_,this._w=h*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-h*y*E,this._y=h*y*_+x*g*E,this._z=h*g*E+x*y*_,this._w=h*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-h*y*E,this._y=h*y*_+x*g*E,this._z=h*g*E-x*y*_,this._w=h*g*_+x*y*E;break;case"YZX":this._x=x*g*_+h*y*E,this._y=h*y*_+x*g*E,this._z=h*g*E-x*y*_,this._w=h*g*_-x*y*E;break;case"XZY":this._x=x*g*_-h*y*E,this._y=h*y*_-x*g*E,this._z=h*g*E+x*y*_,this._w=h*g*_+x*y*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],f=n[1],d=n[5],m=n[9],h=n[2],g=n[6],_=n[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-h)*y,this._z=(f-o)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(u+h)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(u-h)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(f-o)/y,this._x=(u+h)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,f=e._w,d=n._x,m=n._y,h=n._z,g=n._w;return this._x=r*g+f*d+o*h-u*m,this._y=o*g+f*m+u*d-r*h,this._z=u*g+f*h+r*m-o*d,this._w=f*g-r*d-o*m-u*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,f=-f,d=-d);let m=1-n;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,n=Math.sin(n*h)/g,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,r=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,f=e.y,d=e.z,m=e.w,h=2*(f*o-d*r),g=2*(d*n-u*o),_=2*(u*r-f*n);return this.x=n+m*h+f*_-d*g,this.y=r+m*g+d*h-u*_,this.z=o+m*_+u*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,f=n.x,d=n.y,m=n.z;return this.x=o*m-u*d,this.y=u*f-r*m,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new ue,mv=new yl;class ht{constructor(e,n,r,o,u,f,d,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,f,d,m,h)}set(e,n,r,o,u,f,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,f=r[0],d=r[3],m=r[6],h=r[1],g=r[4],_=r[7],x=r[2],y=r[5],E=r[8],T=o[0],S=o[3],v=o[6],L=o[1],D=o[4],N=o[7],P=o[2],B=o[5],H=o[8];return u[0]=f*T+d*L+m*P,u[3]=f*S+d*D+m*B,u[6]=f*v+d*N+m*H,u[1]=h*T+g*L+_*P,u[4]=h*S+g*D+_*B,u[7]=h*v+g*N+_*H,u[2]=x*T+y*L+E*P,u[5]=x*S+y*D+E*B,u[8]=x*v+y*N+E*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return n*f*g-n*d*h-r*u*g+r*d*m+o*u*h-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=g*f-d*h,x=d*m-g*u,y=h*u-f*m,E=n*_+r*x+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(o*h-g*r)*T,e[2]=(d*r-o*f)*T,e[3]=x*T,e[4]=(g*n-o*m)*T,e[5]=(o*u-d*n)*T,e[6]=y*T,e[7]=(r*m-h*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,f,d){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*f+h*d)+f+e,-o*h,o*m,-o*(-h*f+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ah.makeScale(e,n)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,n){return this.premultiply(ah.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new ht,gv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_v=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W1(){const a={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Gt&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cr?yc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Xs]:{primaries:e,whitePoint:r,transfer:yc,toXYZ:gv,fromXYZ:_v,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:gv,fromXYZ:_v,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),a}const Rt=W1();function Ca(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Hs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let As;class q1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Mc("canvas")),As.width=e.width,As.height=e.height;const o=As.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=Ca(u[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ca(n[r]/255)*255):n[r]=Ca(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y1=0;class nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?u.push(rh(o[f].image)):u.push(rh(o[f]))}else u=rh(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?q1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let j1=0;const sh=new ue;class Hn extends Ks{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,r=si,o=si,u=pn,f=Vr,d=vi,m=_i,h=Hn.DEFAULT_ANISOTROPY,g=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Sl(),this.name="",this.source=new nm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=sS;Hn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,n=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const m=e.elements,h=m[0],g=m[4],_=m[8],x=m[1],y=m[5],E=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(h+1)/2,N=(y+1)/2,P=(v+1)/2,B=(g+x)/4,H=(_+T)/4,Q=(E+S)/4;return D>N&&D>P?D<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(D),o=B/r,u=H/r):N>P?N<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(N),r=B/o,u=Q/o):P<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(P),r=H/u,o=Q/u),this.set(r,o,u,n),this}let L=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z1 extends Ks{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n);const o={width:e,height:n,depth:r.depth},u=new Hn(o);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new nm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Z1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class mS extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K1 extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(u,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),zu.copy(r.boundingBox)),zu.applyMatrix4(e.matrixWorld),this.union(zu)}const o=e.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Hu.subVectors(this.max,$o),Rs.subVectors(e.a,$o),ws.subVectors(e.b,$o),Cs.subVectors(e.c,$o),ar.subVectors(ws,Rs),rr.subVectors(Cs,ws),Ur.subVectors(Rs,Cs);let n=[0,-ar.z,ar.y,0,-rr.z,rr.y,0,-Ur.z,Ur.y,ar.z,0,-ar.x,rr.z,0,-rr.x,Ur.z,0,-Ur.x,-ar.y,ar.x,0,-rr.y,rr.x,0,-Ur.y,Ur.x,0];return!oh(n,Rs,ws,Cs,Hu)||(n=[1,0,0,0,1,0,0,0,1],!oh(n,Rs,ws,Cs,Hu))?!1:(Vu.crossVectors(ar,rr),n=[Vu.x,Vu.y,Vu.z],oh(n,Rs,ws,Cs,Hu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Ti=new ue,zu=new El,Rs=new ue,ws=new ue,Cs=new ue,ar=new ue,rr=new ue,Ur=new ue,$o=new ue,Hu=new ue,Vu=new ue,Lr=new ue;function oh(a,e,n,r,o){for(let u=0,f=a.length-3;u<=f;u+=3){Lr.fromArray(a,u);const d=o.x*Math.abs(Lr.x)+o.y*Math.abs(Lr.y)+o.z*Math.abs(Lr.z),m=e.dot(Lr),h=n.dot(Lr),g=r.dot(Lr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Q1=new El,el=new ue,lh=new ue;class Bc{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Q1.setFromPoints(e).getCenter(r);let o=0;for(let u=0,f=e.length;u<f;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const n=el.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(el,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(lh)),this.expandByPoint(el.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ea=new ue,uh=new ue,Gu=new ue,sr=new ue,ch=new ue,ku=new ue,fh=new ue;class gS{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ea.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,n),Ea.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){uh.copy(e).add(n).multiplyScalar(.5),Gu.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(uh);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Gu),d=sr.dot(this.direction),m=-sr.dot(Gu),h=sr.lengthSq(),g=Math.abs(1-f*f);let _,x,y,E;if(g>0)if(_=f*m-d,x=f*d-m,E=u*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,y=_*(_+f*x+2*d)+x*(f*_+x+2*m)+h}else x=u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+h;else x=-u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+h;else x<=-E?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+h):x<=E?(_=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+h):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+h);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(uh).addScaledVector(Gu,x),y}intersectSphere(e,n){Ea.subVectors(e.center,this.origin);const r=Ea.dot(this.direction),o=Ea.dot(Ea)-r*r,u=e.radius*e.radius;if(o>u)return null;const f=Math.sqrt(u-o),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,f,d,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>o||((u>r||isNaN(r))&&(r=u),(f<o||isNaN(o))&&(o=f),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,n,r,o,u){ch.subVectors(n,e),ku.subVectors(r,e),fh.crossVectors(ch,ku);let f=this.direction.dot(fh),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;sr.subVectors(this.origin,e);const m=d*this.direction.dot(ku.crossVectors(sr,ku));if(m<0)return null;const h=d*this.direction.dot(ch.cross(sr));if(h<0||m+h>f)return null;const g=-d*sr.dot(fh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,n,r,o,u,f,d,m,h,g,_,x,y,E,T,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,f,d,m,h,g,_,x,y,E,T,S)}set(e,n,r,o,u,f,d,m,h,g,_,x,y,E,T,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=h,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),u=1/Ds.setFromMatrixColumn(e,1).length(),f=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*_,E=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=h,n[1]=y+E*h,n[5]=x-T*h,n[9]=-d*m,n[2]=T-x*h,n[6]=E+y*h,n[10]=f*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,E=h*g,T=h*_;n[0]=x+T*d,n[4]=E*d-y,n[8]=f*h,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=y*d-E,n[6]=T+x*d,n[10]=f*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,E=h*g,T=h*_;n[0]=x-T*d,n[4]=-f*_,n[8]=E+y*d,n[1]=y+E*d,n[5]=f*g,n[9]=T-x*d,n[2]=-f*h,n[6]=d,n[10]=f*m}else if(e.order==="ZYX"){const x=f*g,y=f*_,E=d*g,T=d*_;n[0]=m*g,n[4]=E*h-y,n[8]=x*h+T,n[1]=m*_,n[5]=T*h+x,n[9]=y*h-E,n[2]=-h,n[6]=d*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,y=f*h,E=d*m,T=d*h;n[0]=m*g,n[4]=T-x*_,n[8]=E*_+y,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-h*g,n[6]=y*_+E,n[10]=x-T*_}else if(e.order==="XZY"){const x=f*m,y=f*h,E=d*m,T=d*h;n[0]=m*g,n[4]=-_,n[8]=h*g,n[1]=x*_+T,n[5]=f*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=d*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J1,e,$1)}lookAt(e,n,r){const o=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),or.crossVectors(r,ai),or.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),or.crossVectors(r,ai)),or.normalize(),Xu.crossVectors(ai,or),o[0]=or.x,o[4]=Xu.x,o[8]=ai.x,o[1]=or.y,o[5]=Xu.y,o[9]=ai.y,o[2]=or.z,o[6]=Xu.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,f=r[0],d=r[4],m=r[8],h=r[12],g=r[1],_=r[5],x=r[9],y=r[13],E=r[2],T=r[6],S=r[10],v=r[14],L=r[3],D=r[7],N=r[11],P=r[15],B=o[0],H=o[4],Q=o[8],A=o[12],U=o[1],k=o[5],re=o[9],se=o[13],pe=o[2],fe=o[6],I=o[10],V=o[14],ie=o[3],Ee=o[7],O=o[11],Z=o[15];return u[0]=f*B+d*U+m*pe+h*ie,u[4]=f*H+d*k+m*fe+h*Ee,u[8]=f*Q+d*re+m*I+h*O,u[12]=f*A+d*se+m*V+h*Z,u[1]=g*B+_*U+x*pe+y*ie,u[5]=g*H+_*k+x*fe+y*Ee,u[9]=g*Q+_*re+x*I+y*O,u[13]=g*A+_*se+x*V+y*Z,u[2]=E*B+T*U+S*pe+v*ie,u[6]=E*H+T*k+S*fe+v*Ee,u[10]=E*Q+T*re+S*I+v*O,u[14]=E*A+T*se+S*V+v*Z,u[3]=L*B+D*U+N*pe+P*ie,u[7]=L*H+D*k+N*fe+P*Ee,u[11]=L*Q+D*re+N*I+P*O,u[15]=L*A+D*se+N*V+P*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],f=e[1],d=e[5],m=e[9],h=e[13],g=e[2],_=e[6],x=e[10],y=e[14],E=e[3],T=e[7],S=e[11],v=e[15],L=m*y-h*x,D=d*y-h*_,N=d*x-m*_,P=f*y-h*g,B=f*x-m*g,H=f*_-d*g;return n*(T*L-S*D+v*N)-r*(E*L-S*P+v*B)+o*(E*D-T*P+v*H)-u*(E*N-T*B+S*H)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=e[9],x=e[10],y=e[11],E=e[12],T=e[13],S=e[14],v=e[15],L=_*S*h-T*x*h+T*m*y-d*S*y-_*m*v+d*x*v,D=E*x*h-g*S*h-E*m*y+f*S*y+g*m*v-f*x*v,N=g*T*h-E*_*h+E*d*y-f*T*y-g*d*v+f*_*v,P=E*_*m-g*T*m-E*d*x+f*T*x+g*d*S-f*_*S,B=n*L+r*D+o*N+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/B;return e[0]=L*H,e[1]=(T*x*u-_*S*u-T*o*y+r*S*y+_*o*v-r*x*v)*H,e[2]=(d*S*u-T*m*u+T*o*h-r*S*h-d*o*v+r*m*v)*H,e[3]=(_*m*u-d*x*u-_*o*h+r*x*h+d*o*y-r*m*y)*H,e[4]=D*H,e[5]=(g*S*u-E*x*u+E*o*y-n*S*y-g*o*v+n*x*v)*H,e[6]=(E*m*u-f*S*u-E*o*h+n*S*h+f*o*v-n*m*v)*H,e[7]=(f*x*u-g*m*u+g*o*h-n*x*h-f*o*y+n*m*y)*H,e[8]=N*H,e[9]=(E*_*u-g*T*u-E*r*y+n*T*y+g*r*v-n*_*v)*H,e[10]=(f*T*u-E*d*u+E*r*h-n*T*h-f*r*v+n*d*v)*H,e[11]=(g*d*u-f*_*u-g*r*h+n*_*h+f*r*y-n*d*y)*H,e[12]=P*H,e[13]=(g*T*o-E*_*o+E*r*x-n*T*x-g*r*S+n*_*S)*H,e[14]=(E*d*o-f*T*o-E*r*m+n*T*m+f*r*S-n*d*S)*H,e[15]=(f*_*o-g*d*o+g*r*m-n*_*m-f*r*x+n*d*x)*H,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,f=e.x,d=e.y,m=e.z,h=u*f,g=u*d;return this.set(h*f+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*f,0,h*m-o*d,g*m+o*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,f){return this.set(1,r,u,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,f=n._y,d=n._z,m=n._w,h=u+u,g=f+f,_=d+d,x=u*h,y=u*g,E=u*_,T=f*g,S=f*_,v=d*_,L=m*h,D=m*g,N=m*_,P=r.x,B=r.y,H=r.z;return o[0]=(1-(T+v))*P,o[1]=(y+N)*P,o[2]=(E-D)*P,o[3]=0,o[4]=(y-N)*B,o[5]=(1-(x+v))*B,o[6]=(S+L)*B,o[7]=0,o[8]=(E+D)*H,o[9]=(S-L)*H,o[10]=(1-(x+T))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let u=Ds.set(o[0],o[1],o[2]).length();const f=Ds.set(o[4],o[5],o[6]).length(),d=Ds.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),Ai.copy(this);const h=1/u,g=1/f,_=1/d;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,n.setFromRotationMatrix(Ai),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,o,u,f,d=ji,m=!1){const h=this.elements,g=2*u/(n-e),_=2*u/(r-o),x=(n+e)/(n-e),y=(r+o)/(r-o);let E,T;if(m)E=u/(f-u),T=f*u/(f-u);else if(d===ji)E=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Ec)E=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,u,f,d=ji,m=!1){const h=this.elements,g=2/(n-e),_=2/(r-o),x=-(n+e)/(n-e),y=-(r+o)/(r-o);let E,T;if(m)E=1/(f-u),T=f/(f-u);else if(d===ji)E=-2/(f-u),T=-(f+u)/(f-u);else if(d===Ec)E=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new ue,Ai=new un,J1=new ue(0,0,0),$1=new ue(1,1,1),or=new ue,Xu=new ue,ai=new ue,vv=new un,xv=new yl;class La{constructor(e=0,n=0,r=0,o=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],f=o[4],d=o[8],m=o[1],h=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xv.setFromEuler(this),this.setFromQuaternion(xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class _S{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eA=0;const Sv=new ue,Us=new yl,Ma=new un,Wu=new ue,tl=new ue,tA=new ue,nA=new yl,yv=new ue(1,0,0),Ev=new ue(0,1,0),Mv=new ue(0,0,1),bv={type:"added"},iA={type:"removed"},Ls={type:"childadded",child:null},dh={type:"childremoved",child:null};class Kn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eA++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new ue,n=new La,r=new yl,o=new ue(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new ht}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(yv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,n){return Sv.copy(e).applyQuaternion(this.quaternion),this.position.add(Sv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Wu.copy(e):Wu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(tl,Wu,this.up):Ma.lookAt(Wu,tl,this.up),this.quaternion.setFromRotationMatrix(Ma),o&&(Ma.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Ma),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iA),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,tA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,nA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(u(e.materials,this.material[m]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(e.animations,m))}}if(n){const d=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Kn.DEFAULT_UP=new ue(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new ue,ba=new ue,hh=new ue,Ta=new ue,Ns=new ue,Os=new ue,Tv=new ue,ph=new ue,mh=new ue,gh=new ue,_h=new nn,vh=new nn,xh=new nn;class Di{constructor(e=new ue,n=new ue,r=new ue){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ri.subVectors(e,n),o.cross(Ri);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Ri.subVectors(o,n),ba.subVectors(r,n),hh.subVectors(e,n);const f=Ri.dot(Ri),d=Ri.dot(ba),m=Ri.dot(hh),h=ba.dot(ba),g=ba.dot(hh),_=f*h-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(h*m-d*g)*x,E=(f*g-d*m)*x;return u.set(1-y-E,E,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,n,r,o,u,f,d,m){return this.getBarycoord(e,n,r,o,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ta.x),m.addScaledVector(f,Ta.y),m.addScaledVector(d,Ta.z),m)}static getInterpolatedAttribute(e,n,r,o,u,f){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(e,n),vh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(_h,u.x),f.addScaledVector(vh,u.y),f.addScaledVector(xh,u.z),f}static isFrontFacing(e,n,r,o){return Ri.subVectors(r,n),ba.subVectors(e,n),Ri.cross(ba).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ri.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return Di.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let f,d;Ns.subVectors(o,r),Os.subVectors(u,r),ph.subVectors(e,r);const m=Ns.dot(ph),h=Os.dot(ph);if(m<=0&&h<=0)return n.copy(r);mh.subVectors(e,o);const g=Ns.dot(mh),_=Os.dot(mh);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(r).addScaledVector(Ns,f);gh.subVectors(e,u);const y=Ns.dot(gh),E=Os.dot(gh);if(E>=0&&y<=E)return n.copy(u);const T=y*h-m*E;if(T<=0&&h>=0&&E<=0)return d=h/(h-E),n.copy(r).addScaledVector(Os,d);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return Tv.subVectors(u,o),d=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(Tv,d);const v=1/(S+T+x);return f=T*v,d=x*v,n.copy(r).addScaledVector(Ns,f).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},qu={h:0,s:0,l:0};function Sh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Nt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=X1(e,1),n=bt(n,0,1),r=bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Sh(f,u,e+1/3),this.g=Sh(f,u,e),this.b=Sh(f,u,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=gi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gi){const r=vS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Rt.workingToColorSpace(Fn.copy(this),e),Math.round(bt(Fn.r*255,0,255))*65536+Math.round(bt(Fn.g*255,0,255))*256+Math.round(bt(Fn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Fn.copy(this),n);const r=Fn.r,o=Fn.g,u=Fn.b,f=Math.max(r,o,u),d=Math.min(r,o,u);let m,h;const g=(d+f)/2;if(d===f)m=0,h=0;else{const _=f-d;switch(h=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(o-u)/_+(o<u?6:0);break;case o:m=(u-r)/_+2;break;case u:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=gi){Rt.workingToColorSpace(Fn.copy(this),e);const n=Fn.r,r=Fn.g,o=Fn.b;return e!==gi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(qu);const r=nh(lr.h,qu.h,n),o=nh(lr.s,qu.s,n),u=nh(lr.l,qu.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Nt;Nt.NAMES=vS;let aA=0;class Ml extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=zs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=kh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(n){const u=o(e.textures),f=o(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xS extends Ml{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.combine=Jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ue,Yu=new ot;let rA=0;class Ni{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=fv,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Yu.fromBufferAttribute(this,n),Yu.applyMatrix3(e),this.setXY(n,Yu.x,Yu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Jo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array),u=qn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fv&&(e.usage=this.usage),e}}class SS extends Ni{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class yS extends Ni{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Oi extends Ni{constructor(e,n,r){super(new Float32Array(e),n,r)}}let sA=0;const mi=new un,yh=new Kn,Ps=new ue,ri=new El,nl=new El,Tn=new ue;class Fi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pS(e)?yS:SS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,r){return mi.makeTranslation(e,n,r),this.applyMatrix4(mi),this}scale(e,n,r){return mi.makeScale(e,n,r),this.applyMatrix4(mi),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ri.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ri.min,nl.min),ri.expandByPoint(Tn),Tn.addVectors(ri.max,nl.max),ri.expandByPoint(Tn)):(ri.expandByPoint(nl.min),ri.expandByPoint(nl.max))}ri.getCenter(r);let o=0;for(let u=0,f=e.count;u<f;u++)Tn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(Tn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Tn.fromBufferAttribute(d,h),m&&(Ps.fromBufferAttribute(e,h),Tn.add(Ps)),o=Math.max(o,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new ue,m[Q]=new ue;const h=new ue,g=new ue,_=new ue,x=new ot,y=new ot,E=new ot,T=new ue,S=new ue;function v(Q,A,U){h.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,U),x.fromBufferAttribute(u,Q),y.fromBufferAttribute(u,A),E.fromBufferAttribute(u,U),g.sub(h),_.sub(h),y.sub(x),E.sub(x);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),d[Q].add(T),d[A].add(T),d[U].add(T),m[Q].add(S),m[A].add(S),m[U].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Q=0,A=L.length;Q<A;++Q){const U=L[Q],k=U.start,re=U.count;for(let se=k,pe=k+re;se<pe;se+=3)v(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new ue,N=new ue,P=new ue,B=new ue;function H(Q){P.fromBufferAttribute(o,Q),B.copy(P);const A=d[Q];D.copy(A),D.sub(P.multiplyScalar(P.dot(A))).normalize(),N.crossVectors(B,A);const k=N.dot(m[Q])<0?-1:1;f.setXYZW(Q,D.x,D.y,D.z,k)}for(let Q=0,A=L.length;Q<A;++Q){const U=L[Q],k=U.start,re=U.count;for(let se=k,pe=k+re;se<pe;se+=3)H(e.getX(se+0)),H(e.getX(se+1)),H(e.getX(se+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new ue,u=new ue,f=new ue,d=new ue,m=new ue,h=new ue,g=new ue,_=new ue;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),d.add(g),m.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,_=d.normalized,x=new h.constructor(m.length*g);let y=0,E=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let v=0;v<g;v++)x[E++]=h[y++]}return new Ni(x,g,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);n.setAttribute(d,h)}const u=this.morphAttributes;for(const d in u){const m=[],h=u[d];for(let g=0,_=h.length;g<_;g++){const x=h[g],y=e(x,r);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const h=f[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,x=h.length;_<x;_++){const y=h[_];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const u=e.morphAttributes;for(const h in u){const g=[],_=u[h];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Av=new un,Nr=new gS,ju=new Bc,Rv=new ue,Zu=new ue,Ku=new ue,Qu=new ue,Eh=new ue,Ju=new ue,wv=new ue,$u=new ue;class xi extends Kn{constructor(e=new Fi,n=new xS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){Ju.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const g=d[m],_=u[m];g!==0&&(Eh.fromBufferAttribute(_,e),f?Ju.addScaledVector(Eh,g):Ju.addScaledVector(Eh.sub(n),g))}n.add(Ju)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ju.copy(r.boundingSphere),ju.applyMatrix4(u),Nr.copy(e.ray).recast(e.near),!(ju.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(ju,Rv)===null||Nr.origin.distanceToSquared(Rv)>(e.far-e.near)**2))&&(Av.copy(u).invert(),Nr.copy(e.ray).applyMatrix4(Av),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,h=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=f[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let N=L,P=D;N<P;N+=3){const B=d.getX(N),H=d.getX(N+1),Q=d.getX(N+2);o=ec(this,v,e,r,h,g,_,B,H,Q),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=E,v=T;S<v;S+=3){const L=d.getX(S),D=d.getX(S+1),N=d.getX(S+2);o=ec(this,f,e,r,h,g,_,L,D,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=f[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let N=L,P=D;N<P;N+=3){const B=N,H=N+1,Q=N+2;o=ec(this,v,e,r,h,g,_,B,H,Q),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let S=E,v=T;S<v;S+=3){const L=S,D=S+1,N=S+2;o=ec(this,f,e,r,h,g,_,L,D,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function oA(a,e,n,r,o,u,f,d){let m;if(e.side===Zn?m=r.intersectTriangle(f,u,o,!0,d):m=r.intersectTriangle(o,u,f,e.side===dr,d),m===null)return null;$u.copy(d),$u.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo($u);return h<n.near||h>n.far?null:{distance:h,point:$u.clone(),object:a}}function ec(a,e,n,r,o,u,f,d,m,h){a.getVertexPosition(d,Zu),a.getVertexPosition(m,Ku),a.getVertexPosition(h,Qu);const g=oA(a,e,n,r,Zu,Ku,Qu,wv);if(g){const _=new ue;Di.getBarycoord(wv,Zu,Ku,Qu,_),o&&(g.uv=Di.getInterpolatedAttribute(o,d,m,h,_,new ot)),u&&(g.uv1=Di.getInterpolatedAttribute(u,d,m,h,_,new ot)),f&&(g.normal=Di.getInterpolatedAttribute(f,d,m,h,_,new ue),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:h,normal:new ue,materialIndex:0};Di.getNormal(Zu,Ku,Qu,x.normal),g.face=x,g.barycoord=_}return g}class bl extends Fi{constructor(e=1,n=1,r=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:f};const d=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const m=[],h=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,o,f,2),E("x","z","y",1,-1,e,r,-n,o,f,3),E("x","y","z",1,-1,e,n,r,o,u,4),E("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new Oi(h,3)),this.setAttribute("normal",new Oi(g,3)),this.setAttribute("uv",new Oi(_,2));function E(T,S,v,L,D,N,P,B,H,Q,A){const U=N/H,k=P/Q,re=N/2,se=P/2,pe=B/2,fe=H+1,I=Q+1;let V=0,ie=0;const Ee=new ue;for(let O=0;O<I;O++){const Z=O*k-se;for(let ye=0;ye<fe;ye++){const _e=ye*U-re;Ee[T]=_e*L,Ee[S]=Z*D,Ee[v]=pe,h.push(Ee.x,Ee.y,Ee.z),Ee[T]=0,Ee[S]=0,Ee[v]=B>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),_.push(ye/H),_.push(1-O/Q),V+=1}}for(let O=0;O<Q;O++)for(let Z=0;Z<H;Z++){const ye=x+Z+fe*O,_e=x+Z+fe*(O+1),Oe=x+(Z+1)+fe*(O+1),je=x+(Z+1)+fe*O;m.push(ye,_e,je),m.push(_e,Oe,je),ie+=6}d.addGroup(y,ie,A),y+=ie,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function zn(a){const e={};for(let n=0;n<a.length;n++){const r=Ws(a[n]);for(const o in r)e[o]=r[o]}return e}function lA(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function ES(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const uA={clone:Ws,merge:zn};var cA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ml{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cA,this.fragmentShader=fA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=lA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bc extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new ue,Cv=new ot,Dv=new ot;class Ci extends bc{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,Cv,Dv),n.subVectors(Dv,Cv)}setViewOffset(e,n,r,o,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(th*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;u+=f.offsetX*o/m,n-=f.offsetY*r/h,o*=f.width/m,r*=f.height/h}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Is=1;class dA extends Kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(Fs,Is,e,n);o.layers=this.layers,this.add(o);const u=new Ci(Fs,Is,e,n);u.layers=this.layers,this.add(u);const f=new Ci(Fs,Is,e,n);f.layers=this.layers,this.add(f);const d=new Ci(Fs,Is,e,n);d.layers=this.layers,this.add(d);const m=new Ci(Fs,Is,e,n);m.layers=this.layers,this.add(m);const h=new Ci(Fs,Is,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,f,d,m]=n;for(const h of n)this.remove(h);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,h,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,u),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class MS extends Hn{constructor(e=[],n=qr,r,o,u,f,d,m,h,g){super(e,n,r,o,u,f,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new MS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new bl(5,5,5),u=new $i({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:wa});u.uniforms.tEquirect.value=n;const f=new xi(o,u),d=n.minFilter;return n.minFilter===Vr&&(n.minFilter=pn),new dA(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(u)}}class tc extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,f=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,r),v=this._getHandJoint(h,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;h.inputState.pinching&&x>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new tc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Uv extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new La,this.environmentIntensity=1,this.environmentRotation=new La,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class TS extends Hn{constructor(e=null,n=1,r=1,o,u,f,d,m,h=Un,g=Un,_,x){super(null,f,d,m,h,g,o,u,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new ue,pA=new ue,mA=new ht;class Ir{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=bh.subVectors(r,n).cross(pA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(bh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||mA.getNormalMatrix(e),o=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Bc,gA=new ot(.5,.5),nc=new ue;class AS{constructor(e=new Ir,n=new Ir,r=new Ir,o=new Ir,u=new Ir,f=new Ir){this.planes=[e,n,r,o,u,f]}set(e,n,r,o,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ji,r=!1){const o=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],h=u[3],g=u[4],_=u[5],x=u[6],y=u[7],E=u[8],T=u[9],S=u[10],v=u[11],L=u[12],D=u[13],N=u[14],P=u[15];if(o[0].setComponents(h-f,y-g,v-E,P-L).normalize(),o[1].setComponents(h+f,y+g,v+E,P+L).normalize(),o[2].setComponents(h+d,y+_,v+T,P+D).normalize(),o[3].setComponents(h-d,y-_,v-T,P-D).normalize(),r)o[4].setComponents(m,x,S,N).normalize(),o[5].setComponents(h-m,y-x,v-S,P-N).normalize();else if(o[4].setComponents(h-m,y-x,v-S,P-N).normalize(),n===ji)o[5].setComponents(h+m,y+x,v+S,P+N).normalize();else if(n===Ec)o[5].setComponents(m,x,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=gA.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(nc.x=o.normal.x>0?e.max.x:e.min.x,nc.y=o.normal.y>0?e.max.y:e.min.y,nc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _A extends Ml{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new ue,Ac=new ue,Lv=new un,il=new gS,ic=new Bc,Th=new ue,Nv=new ue;class vA extends Kn{constructor(e=new Fi,n=new _A){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)Tc.fromBufferAttribute(n,o-1),Ac.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Tc.distanceTo(Ac);e.setAttribute("lineDistance",new Oi(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(o),ic.radius+=u,e.ray.intersectsSphere(ic)===!1)return;Lv.copy(o).invert(),il.copy(e.ray).applyMatrix4(Lv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=y,S=E-1;T<S;T+=h){const v=g.getX(T),L=g.getX(T+1),D=ac(this,e,il,m,v,L,T);D&&n.push(D)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(y),v=ac(this,e,il,m,T,S,E-1);v&&n.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=y,S=E-1;T<S;T+=h){const v=ac(this,e,il,m,T,T+1,T);v&&n.push(v)}if(this.isLineLoop){const T=ac(this,e,il,m,E-1,y,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function ac(a,e,n,r,o,u,f){const d=a.geometry.attributes.position;if(Tc.fromBufferAttribute(d,o),Ac.fromBufferAttribute(d,u),n.distanceSqToSegment(Tc,Ac,Th,Nv)>r)return;Th.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(Th);if(!(h<e.near||h>e.far))return{distance:h,point:Nv.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const Ov=new ue,Pv=new ue;class xA extends vA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,u=n.count;o<u;o+=2)Ov.fromBufferAttribute(n,o),Pv.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Ov.distanceTo(Pv);e.setAttribute("lineDistance",new Oi(r,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pl extends Hn{constructor(e,n,r=Qi,o,u,f,d=Un,m=Un,h,g=Ua,_=1){if(g!==Ua&&g!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,u,f,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class SA extends pl{constructor(e,n=Qi,r=qr,o,u,f=Un,d=Un,m,h=Ua){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,u,f,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class RS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xr extends Fi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,f=n/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,_=e/d,x=n/m,y=[],E=[],T=[],S=[];for(let v=0;v<g;v++){const L=v*x-f;for(let D=0;D<h;D++){const N=D*_-u;E.push(N,-L,0),T.push(0,0,1),S.push(D/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const D=L+h*v,N=L+h*(v+1),P=L+1+h*(v+1),B=L+1+h*v;y.push(D,N,B),y.push(N,P,B)}this.setIndex(y),this.setAttribute("position",new Oi(E,3)),this.setAttribute("normal",new Oi(T,3)),this.setAttribute("uv",new Oi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ol extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yA extends Ml{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EA extends Ml{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wS extends bc{constructor(e=-1,n=1,r=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,f=u+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class MA extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Fv(a,e,n,r){const o=TA(r);switch(n){case fS:return a*e;case hS:return a*e/o.components*o.byteLength;case Qp:return a*e/o.components*o.byteLength;case ks:return a*e*2/o.components*o.byteLength;case Jp:return a*e*2/o.components*o.byteLength;case dS:return a*e*3/o.components*o.byteLength;case vi:return a*e*4/o.components*o.byteLength;case $p:return a*e*4/o.components*o.byteLength;case hc:case pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case np:case ap:return Math.max(a,16)*Math.max(e,8)/4;case tp:case ip:return Math.max(a,8)*Math.max(e,8)/2;case rp:case sp:case lp:case up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case op:case cp:case fp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case pp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case gp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case _p:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case xp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case bp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ap:case Rp:case wp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Cp:case Dp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Up:case Lp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TA(a){switch(a){case _i:case oS:return{byteLength:1,components:1};case fl:case lS:case Ji:return{byteLength:2,components:1};case Zp:case Kp:return{byteLength:2,components:4};case Qi:case jp:case Ui:return{byteLength:4,components:1};case uS:case cS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CS(){let a=null,e=!1,n=null,r=null;function o(u,f){n(u,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function AA(a){const e=new WeakMap;function n(d,m){const h=d.array,g=d.usage,_=h.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,h,g),d.onUploadCallback();let y;if(h instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=a.SHORT;else if(h instanceof Uint32Array)y=a.UNSIGNED_INT;else if(h instanceof Int32Array)y=a.INT;else if(h instanceof Int8Array)y=a.BYTE;else if(h instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const g=m.array,_=m.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];a.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:u,update:f}}var RA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$A=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iR="gl_FragColor = linearToOutputTexel( gl_FragColor );",aR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_R=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ER=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$R=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ow=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ww=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:RA,alphahash_pars_fragment:wA,alphamap_fragment:CA,alphamap_pars_fragment:DA,alphatest_fragment:UA,alphatest_pars_fragment:LA,aomap_fragment:NA,aomap_pars_fragment:OA,batching_pars_vertex:PA,batching_vertex:FA,begin_vertex:IA,beginnormal_vertex:BA,bsdfs:zA,iridescence_fragment:HA,bumpmap_pars_fragment:VA,clipping_planes_fragment:GA,clipping_planes_pars_fragment:kA,clipping_planes_pars_vertex:XA,clipping_planes_vertex:WA,color_fragment:qA,color_pars_fragment:YA,color_pars_vertex:jA,color_vertex:ZA,common:KA,cube_uv_reflection_fragment:QA,defaultnormal_vertex:JA,displacementmap_pars_vertex:$A,displacementmap_vertex:eR,emissivemap_fragment:tR,emissivemap_pars_fragment:nR,colorspace_fragment:iR,colorspace_pars_fragment:aR,envmap_fragment:rR,envmap_common_pars_fragment:sR,envmap_pars_fragment:oR,envmap_pars_vertex:lR,envmap_physical_pars_fragment:xR,envmap_vertex:uR,fog_vertex:cR,fog_pars_vertex:fR,fog_fragment:dR,fog_pars_fragment:hR,gradientmap_pars_fragment:pR,lightmap_pars_fragment:mR,lights_lambert_fragment:gR,lights_lambert_pars_fragment:_R,lights_pars_begin:vR,lights_toon_fragment:SR,lights_toon_pars_fragment:yR,lights_phong_fragment:ER,lights_phong_pars_fragment:MR,lights_physical_fragment:bR,lights_physical_pars_fragment:TR,lights_fragment_begin:AR,lights_fragment_maps:RR,lights_fragment_end:wR,logdepthbuf_fragment:CR,logdepthbuf_pars_fragment:DR,logdepthbuf_pars_vertex:UR,logdepthbuf_vertex:LR,map_fragment:NR,map_pars_fragment:OR,map_particle_fragment:PR,map_particle_pars_fragment:FR,metalnessmap_fragment:IR,metalnessmap_pars_fragment:BR,morphinstance_vertex:zR,morphcolor_vertex:HR,morphnormal_vertex:VR,morphtarget_pars_vertex:GR,morphtarget_vertex:kR,normal_fragment_begin:XR,normal_fragment_maps:WR,normal_pars_fragment:qR,normal_pars_vertex:YR,normal_vertex:jR,normalmap_pars_fragment:ZR,clearcoat_normal_fragment_begin:KR,clearcoat_normal_fragment_maps:QR,clearcoat_pars_fragment:JR,iridescence_pars_fragment:$R,opaque_fragment:ew,packing:tw,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:aw,dithering_pars_fragment:rw,roughnessmap_fragment:sw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:uw,shadowmap_vertex:cw,shadowmask_pars_fragment:fw,skinbase_vertex:dw,skinning_pars_vertex:hw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:gw,specularmap_pars_fragment:_w,tonemapping_fragment:vw,tonemapping_pars_fragment:xw,transmission_fragment:Sw,transmission_pars_fragment:yw,uv_pars_fragment:Ew,uv_pars_vertex:Mw,uv_vertex:bw,worldpos_vertex:Tw,background_vert:Aw,background_frag:Rw,backgroundCube_vert:ww,backgroundCube_frag:Cw,cube_vert:Dw,cube_frag:Uw,depth_vert:Lw,depth_frag:Nw,distance_vert:Ow,distance_frag:Pw,equirect_vert:Fw,equirect_frag:Iw,linedashed_vert:Bw,linedashed_frag:zw,meshbasic_vert:Hw,meshbasic_frag:Vw,meshlambert_vert:Gw,meshlambert_frag:kw,meshmatcap_vert:Xw,meshmatcap_frag:Ww,meshnormal_vert:qw,meshnormal_frag:Yw,meshphong_vert:jw,meshphong_frag:Zw,meshphysical_vert:Kw,meshphysical_frag:Qw,meshtoon_vert:Jw,meshtoon_frag:$w,points_vert:e2,points_frag:t2,shadow_vert:n2,shadow_frag:i2,sprite_vert:a2,sprite_frag:r2},Ie={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Yi={basic:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:zn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:zn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:zn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:zn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:zn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:zn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:zn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:zn([Ie.lights,Ie.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Yi.physical={uniforms:zn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const rc={r:0,b:0,g:0},Pr=new La,s2=new un;function o2(a,e,n,r,o,u,f){const d=new Nt(0);let m=u===!0?0:1,h,g,_=null,x=0,y=null;function E(D){let N=D.isScene===!0?D.background:null;return N&&N.isTexture&&(N=(D.backgroundBlurriness>0?n:e).get(N)),N}function T(D){let N=!1;const P=E(D);P===null?v(d,m):P&&P.isColor&&(v(P,1),N=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(D,N){const P=E(N);P&&(P.isCubeTexture||P.mapping===Ic)?(g===void 0&&(g=new xi(new bl(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ws(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,H,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Pr.copy(N.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(Pr)),g.material.toneMapped=Rt.getTransfer(P.colorSpace)!==Gt,(_!==P||x!==P.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,y=a.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new xi(new Xr(2,2),new $i({name:"BackgroundMaterial",uniforms:Ws(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(P.colorSpace)!==Gt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||y!==a.toneMapping)&&(h.material.needsUpdate=!0,_=P,x=P.version,y=a.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function v(D,N){D.getRGB(rc,ES(a)),r.buffers.color.setClear(rc.r,rc.g,rc.b,N,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,N=1){d.set(D),m=N,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(d,m)},render:T,addToRenderList:S,dispose:L}}function l2(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let u=o,f=!1;function d(U,k,re,se,pe){let fe=!1;const I=_(se,re,k);u!==I&&(u=I,h(u.object)),fe=y(U,se,re,pe),fe&&E(U,se,re,pe),pe!==null&&e.update(pe,a.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,N(U,k,re,se),pe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return a.createVertexArray()}function h(U){return a.bindVertexArray(U)}function g(U){return a.deleteVertexArray(U)}function _(U,k,re){const se=re.wireframe===!0;let pe=r[U.id];pe===void 0&&(pe={},r[U.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let I=fe[se];return I===void 0&&(I=x(m()),fe[se]=I),I}function x(U){const k=[],re=[],se=[];for(let pe=0;pe<n;pe++)k[pe]=0,re[pe]=0,se[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:re,attributeDivisors:se,object:U,attributes:{},index:null}}function y(U,k,re,se){const pe=u.attributes,fe=k.attributes;let I=0;const V=re.getAttributes();for(const ie in V)if(V[ie].location>=0){const O=pe[ie];let Z=fe[ie];if(Z===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;I++}return u.attributesNum!==I||u.index!==se}function E(U,k,re,se){const pe={},fe=k.attributes;let I=0;const V=re.getAttributes();for(const ie in V)if(V[ie].location>=0){let O=fe[ie];O===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),pe[ie]=Z,I++}u.attributes=pe,u.attributesNum=I,u.index=se}function T(){const U=u.newAttributes;for(let k=0,re=U.length;k<re;k++)U[k]=0}function S(U){v(U,0)}function v(U,k){const re=u.newAttributes,se=u.enabledAttributes,pe=u.attributeDivisors;re[U]=1,se[U]===0&&(a.enableVertexAttribArray(U),se[U]=1),pe[U]!==k&&(a.vertexAttribDivisor(U,k),pe[U]=k)}function L(){const U=u.newAttributes,k=u.enabledAttributes;for(let re=0,se=k.length;re<se;re++)k[re]!==U[re]&&(a.disableVertexAttribArray(re),k[re]=0)}function D(U,k,re,se,pe,fe,I){I===!0?a.vertexAttribIPointer(U,k,re,pe,fe):a.vertexAttribPointer(U,k,re,se,pe,fe)}function N(U,k,re,se){T();const pe=se.attributes,fe=re.getAttributes(),I=k.defaultAttributeValues;for(const V in fe){const ie=fe[V];if(ie.location>=0){let Ee=pe[V];if(Ee===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),Ee!==void 0){const O=Ee.normalized,Z=Ee.itemSize,ye=e.get(Ee);if(ye===void 0)continue;const _e=ye.buffer,Oe=ye.type,je=ye.bytesPerElement,te=Oe===a.INT||Oe===a.UNSIGNED_INT||Ee.gpuType===jp;if(Ee.isInterleavedBufferAttribute){const ve=Ee.data,we=ve.stride,Ke=Ee.offset;if(ve.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ie.locationSize;Ge++)v(ie.location+Ge,ve.meshPerAttribute);U.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<ie.locationSize;Ge++)S(ie.location+Ge);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ie.locationSize;Ge++)D(ie.location+Ge,Z/ie.locationSize,Oe,O,we*je,(Ke+Z/ie.locationSize*Ge)*je,te)}else{if(Ee.isInstancedBufferAttribute){for(let ve=0;ve<ie.locationSize;ve++)v(ie.location+ve,Ee.meshPerAttribute);U.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ve=0;ve<ie.locationSize;ve++)S(ie.location+ve);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let ve=0;ve<ie.locationSize;ve++)D(ie.location+ve,Z/ie.locationSize,Oe,O,Z*je,Z/ie.locationSize*ve*je,te)}}else if(I!==void 0){const O=I[V];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ie.location,O);break;case 3:a.vertexAttrib3fv(ie.location,O);break;case 4:a.vertexAttrib4fv(ie.location,O);break;default:a.vertexAttrib1fv(ie.location,O)}}}}L()}function P(){Q();for(const U in r){const k=r[U];for(const re in k){const se=k[re];for(const pe in se)g(se[pe].object),delete se[pe];delete k[re]}delete r[U]}}function B(U){if(r[U.id]===void 0)return;const k=r[U.id];for(const re in k){const se=k[re];for(const pe in se)g(se[pe].object),delete se[pe];delete k[re]}delete r[U.id]}function H(U){for(const k in r){const re=r[k];if(re[U.id]===void 0)continue;const se=re[U.id];for(const pe in se)g(se[pe].object),delete se[pe];delete re[U.id]}}function Q(){A(),f=!0,u!==o&&(u=o,h(u.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:H,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function u2(a,e,n){let r;function o(h){r=h}function u(h,g){a.drawArrays(r,h,g),n.update(g,r,1)}function f(h,g,_){_!==0&&(a.drawArraysInstanced(r,h,g,_),n.update(g,r,_))}function d(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,r,1)}function m(h,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)f(h[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];n.update(E,r,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function c2(a,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(H){return!(H!==vi&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const Q=H===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==_i&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ui&&!Q)}function m(H){if(H==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=m(h);g!==h&&(rt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),D=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),B=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:N,maxSamples:P,samples:B}}function f2(a){const e=this;let n=null,r=0,o=!1,u=!1;const f=new Ir,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||o;return o=x,r=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=a.get(_);if(!o||E===null||E.length===0||u&&!S)u?g(null):h();else{const L=u?0:r,D=L*4;let N=v.clippingState||null;m.value=N,N=g(E,x,D,y);for(let P=0;P!==D;++P)N[P]=n[P];v.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,y,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const v=y+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,N=y;D!==T;++D,N+=4)f.copy(_[D]).applyMatrix4(L,d),f.normal.toArray(S,N),S[N+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function d2(a){let e=new WeakMap;function n(f,d){return d===Qh?f.mapping=qr:d===Jh&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qh||d===Jh)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const h=new bS(m.height);return h.fromEquirectangularTexture(a,f),e.set(f,h),f.addEventListener("dispose",o),n(h.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const fr=4,Iv=[.125,.215,.35,.446,.526,.582],zr=20,h2=256,al=new wS,Bv=new Nt;let Ah=null,Rh=0,wh=0,Ch=!1;const p2=new ue;class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:f=256,position:d=p2}=u;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,wh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qr||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ji,format:vi,colorSpace:Xs,depthBuffer:!1},o=Hv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=m2(u)),this._blurMaterial=_2(u,e,n),this._ggxMaterial=g2(u,e,n)}return o}_compileMaterial(e){const n=new xi(new Fi,e);this._renderer.compile(n,al)}_sceneToCubeUV(e,n,r,o,u){const m=new Ci(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Bv),_.toneMapping=Zi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new bl,new xS({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(Bv),v=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(m.up.set(0,h[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[D],u.y,u.z)):N===1?(m.up.set(0,0,h[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[D],u.z)):(m.up.set(0,h[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[D]));const P=this._cubeSize;Bs(o,N*P,D>2?P:0,P,P),_.setRenderTarget(o),v&&_.render(T,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=L}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===qr||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const u=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Bs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,al)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),x=0+h*1.25,y=_*x,{_lodMax:E}=this,T=this._sizeLods[r],S=3*T*(r>E-fr?r-E+fr:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-n,Bs(u,S,v,3*T,2*T),o.setRenderTarget(u),o.render(d,al),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-r,Bs(e,S,v,3*T,2*T),o.setRenderTarget(e),o.render(d,al)}_blur(e,n,r,o,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",u),this._halfBlur(f,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,f,d){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const x=h.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*zr-1),T=u/E,S=isFinite(u)?1+Math.floor(g*T):zr;S>zr&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zr}`);const v=[];let L=0;for(let H=0;H<zr;++H){const Q=H/T,A=Math.exp(-Q*Q/2);v.push(A),H===0?L+=A:H<S&&(L+=2*A)}for(let H=0;H<v.length;H++)v[H]=v[H]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const N=this._sizeLods[o],P=3*N*(o>D-fr?o-D+fr:0),B=4*(this._cubeSize-N);Bs(n,P,B,3*N,2*N),m.setRenderTarget(n),m.render(_,al)}}function m2(a){const e=[],n=[],r=[];let o=a;const u=a-fr+1+Iv.length;for(let f=0;f<u;f++){const d=Math.pow(2,o);e.push(d);let m=1/d;f>a-fr?m=Iv[f-a+fr-1]:f===0&&(m=0),n.push(m);const h=1/(d-2),g=-h,_=1+h,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,S=2,v=1,L=new Float32Array(T*E*y),D=new Float32Array(S*E*y),N=new Float32Array(v*E*y);for(let B=0;B<y;B++){const H=B%3*2/3-1,Q=B>2?0:-1,A=[H,Q,0,H+2/3,Q,0,H+2/3,Q+1,0,H,Q,0,H+2/3,Q+1,0,H,Q+1,0];L.set(A,T*E*B),D.set(x,S*E*B);const U=[B,B,B,B,B,B];N.set(U,v*E*B)}const P=new Fi;P.setAttribute("position",new Ni(L,T)),P.setAttribute("uv",new Ni(D,S)),P.setAttribute("faceIndex",new Ni(N,v)),r.push(new xi(P,null)),o>fr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Hv(a,e,n){const r=new Li(a,e,n);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function g2(a,e,n){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function _2(a,e,n){const r=new Float32Array(zr),o=new ue(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Vv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Gv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v2(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,h=m===Qh||m===Jh,g=m===qr||m===Gs;if(h||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new zv(a)),_=h?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return h&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new zv(a)),_=h?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d){let m=0;const h=6;for(let g=0;g<h;g++)d[g]!==void 0&&m++;return m===h}function u(d){const m=d.target;m.removeEventListener("dispose",u);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function x2(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&hl("WebGLRenderer: "+r+" extension not supported."),o}}}function S2(a,e,n,r){const o={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete o[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function h(_){const x=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const L=y.array;T=y.version;for(let D=0,N=L.length;D<N;D+=3){const P=L[D+0],B=L[D+1],H=L[D+2];x.push(P,B,B,H,H,P)}}else if(E!==void 0){const L=E.array;T=E.version;for(let D=0,N=L.length/3-1;D<N;D+=3){const P=D+0,B=D+1,H=D+2;x.push(P,B,B,H,H,P)}}else return;const S=new(pS(x)?yS:SS)(x,1);S.version=T;const v=u.get(_);v&&e.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&h(_)}else h(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function y2(a,e,n){let r;function o(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,y){a.drawElements(r,y,u,x*f),n.update(y,r,1)}function h(x,y,E){E!==0&&(a.drawElementsInstanced(r,y,u,x*f,E),n.update(y,r,E))}function g(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];n.update(S,r,1)}function _(x,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)h(x[v]/f,y[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,T,0,E);let v=0;for(let L=0;L<E;L++)v+=y[L]*T[L];n.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function E2(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(u/3);break;case a.LINES:n.lines+=d*(u/2);break;case a.LINE_STRIP:n.lines+=d*(u-1);break;case a.LINE_LOOP:n.lines+=d*u;break;case a.POINTS:n.points+=d*u;break;default:Lt("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function M2(a,e,n){const r=new WeakMap,o=new nn;function u(f,d,m){const h=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let A=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",A)};x!==void 0&&x.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;y===!0&&(D=1),E===!0&&(D=2),T===!0&&(D=3);let N=d.attributes.position.count*D,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const B=new Float32Array(N*P*4*_),H=new mS(B,N,P,_);H.type=Ui,H.needsUpdate=!0;const Q=D*4;for(let U=0;U<_;U++){const k=S[U],re=v[U],se=L[U],pe=N*P*4*U;for(let fe=0;fe<k.count;fe++){const I=fe*Q;y===!0&&(o.fromBufferAttribute(k,fe),B[pe+I+0]=o.x,B[pe+I+1]=o.y,B[pe+I+2]=o.z,B[pe+I+3]=0),E===!0&&(o.fromBufferAttribute(re,fe),B[pe+I+4]=o.x,B[pe+I+5]=o.y,B[pe+I+6]=o.z,B[pe+I+7]=0),T===!0&&(o.fromBufferAttribute(se,fe),B[pe+I+8]=o.x,B[pe+I+9]=o.y,B[pe+I+10]=o.z,B[pe+I+11]=se.itemSize===4?o.w:1)}}x={count:_,texture:H,size:new ot(N,P)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let y=0;for(let T=0;T<h.length;T++)y+=h[T];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function b2(a,e,n,r){let o=new WeakMap;function u(m){const h=r.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==h&&(e.update(_),o.set(_,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==h&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,h))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==h&&(x.update(),o.set(x,h))}return _}function f(){o=new WeakMap}function d(m){const h=m.target;h.removeEventListener("dispose",d),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:u,dispose:f}}const T2={[$x]:"LINEAR_TONE_MAPPING",[eS]:"REINHARD_TONE_MAPPING",[tS]:"CINEON_TONE_MAPPING",[nS]:"ACES_FILMIC_TONE_MAPPING",[aS]:"AGX_TONE_MAPPING",[rS]:"NEUTRAL_TONE_MAPPING",[iS]:"CUSTOM_TONE_MAPPING"};function A2(a,e,n,r,o){const u=new Li(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),f=new Li(e,n,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),d=new Fi;d.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Oi([0,2,0,0,2,0],2));const m=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new xi(d,m),g=new wS(-1,1,1,-1,0,1);let _=null,x=null,y=!1,E,T=null,S=[],v=!1;this.setSize=function(L,D){u.setSize(L,D),f.setSize(L,D);for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(L,D)}},this.setEffects=function(L){S=L,v=S.length>0&&S[0].isRenderPass===!0;const D=u.width,N=u.height;for(let P=0;P<S.length;P++){const B=S[P];B.setSize&&B.setSize(D,N)}},this.begin=function(L,D){if(y||L.toneMapping===Zi&&S.length===0)return!1;if(T=D,D!==null){const N=D.width,P=D.height;(u.width!==N||u.height!==P)&&this.setSize(N,P)}return v===!1&&L.setRenderTarget(u),E=L.toneMapping,L.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(L,D){L.toneMapping=E,y=!0;let N=u,P=f;for(let B=0;B<S.length;B++){const H=S[B];if(H.enabled!==!1&&(H.render(L,P,N,D),H.needsSwap!==!1)){const Q=N;N=P,P=Q}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,m.defines={},Rt.getTransfer(_)===Gt&&(m.defines.SRGB_TRANSFER="");const B=T2[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(T),L.render(h,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const DS=new Hn,Op=new pl(1,1),US=new mS,LS=new K1,NS=new MS,kv=[],Xv=[],Wv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function Qs(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let u=kv[o];if(u===void 0&&(u=new Float32Array(o),kv[o]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(u,d)}return u}function _n(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function vn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Hc(a,e){let n=Xv[e];n===void 0&&(n=new Int32Array(e),Xv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function R2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function w2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2fv(this.addr,e),vn(n,e)}}function C2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;a.uniform3fv(this.addr,e),vn(n,e)}}function D2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4fv(this.addr,e),vn(n,e)}}function U2(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,r))return;Yv.set(r),a.uniformMatrix2fv(this.addr,!1,Yv),vn(n,r)}}function L2(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,r))return;qv.set(r),a.uniformMatrix3fv(this.addr,!1,qv),vn(n,r)}}function N2(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,r))return;Wv.set(r),a.uniformMatrix4fv(this.addr,!1,Wv),vn(n,r)}}function O2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function P2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2iv(this.addr,e),vn(n,e)}}function F2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3iv(this.addr,e),vn(n,e)}}function I2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4iv(this.addr,e),vn(n,e)}}function B2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function z2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2uiv(this.addr,e),vn(n,e)}}function H2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3uiv(this.addr,e),vn(n,e)}}function V2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4uiv(this.addr,e),vn(n,e)}}function G2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(Op.compareFunction=n.isReversedDepthBuffer()?tm:em,u=Op):u=DS,n.setTexture2D(e||u,o)}function k2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||LS,o)}function X2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||NS,o)}function W2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||US,o)}function q2(a){switch(a){case 5126:return R2;case 35664:return w2;case 35665:return C2;case 35666:return D2;case 35674:return U2;case 35675:return L2;case 35676:return N2;case 5124:case 35670:return O2;case 35667:case 35671:return P2;case 35668:case 35672:return F2;case 35669:case 35673:return I2;case 5125:return B2;case 36294:return z2;case 36295:return H2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return W2}}function Y2(a,e){a.uniform1fv(this.addr,e)}function j2(a,e){const n=Qs(e,this.size,2);a.uniform2fv(this.addr,n)}function Z2(a,e){const n=Qs(e,this.size,3);a.uniform3fv(this.addr,n)}function K2(a,e){const n=Qs(e,this.size,4);a.uniform4fv(this.addr,n)}function Q2(a,e){const n=Qs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function J2(a,e){const n=Qs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function $2(a,e){const n=Qs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function eC(a,e){a.uniform1iv(this.addr,e)}function tC(a,e){a.uniform2iv(this.addr,e)}function nC(a,e){a.uniform3iv(this.addr,e)}function iC(a,e){a.uniform4iv(this.addr,e)}function aC(a,e){a.uniform1uiv(this.addr,e)}function rC(a,e){a.uniform2uiv(this.addr,e)}function sC(a,e){a.uniform3uiv(this.addr,e)}function oC(a,e){a.uniform4uiv(this.addr,e)}function lC(a,e,n){const r=this.cache,o=e.length,u=Hc(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),vn(r,u));let f;this.type===a.SAMPLER_2D_SHADOW?f=Op:f=DS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||f,u[d])}function uC(a,e,n){const r=this.cache,o=e.length,u=Hc(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||LS,u[f])}function cC(a,e,n){const r=this.cache,o=e.length,u=Hc(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||NS,u[f])}function fC(a,e,n){const r=this.cache,o=e.length,u=Hc(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||US,u[f])}function dC(a){switch(a){case 5126:return Y2;case 35664:return j2;case 35665:return Z2;case 35666:return K2;case 35674:return Q2;case 35675:return J2;case 35676:return $2;case 5124:case 35670:return eC;case 35667:case 35671:return tC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return aC;case 36294:return rC;case 36295:return sC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return lC;case 35679:case 36299:case 36307:return uC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return fC}}class hC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=q2(n.type)}}class pC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dC(n.type)}}class mC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function jv(a,e){a.seq.push(e),a.map[e.id]=e}function gC(a,e,n){const r=a.name,o=r.length;for(Dh.lastIndex=0;;){const u=Dh.exec(r),f=Dh.lastIndex;let d=u[1];const m=u[2]==="]",h=u[3];if(m&&(d=d|0),h===void 0||h==="["&&f+2===o){jv(n,h===void 0?new hC(d,a,e):new pC(d,a,e));break}else{let _=n.map[d];_===void 0&&(_=new mC(d),jv(n,_)),n=_}}}class _c{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(n,f),m=e.getUniformLocation(n,d.name);gC(d,m,this)}const o=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):u.push(f);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,f=n.length;u!==f;++u){const d=n[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Zv(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const _C=37297;let vC=0;function xC(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=o;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Kv=new ht;function SC(a){Rt._getMatrix(Kv,Rt.workingColorSpace,a);const e=`mat3( ${Kv.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(a)){case yc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Qv(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+xC(a.getShaderSource(e),d)}else return u}function yC(a,e){const n=SC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const EC={[$x]:"Linear",[eS]:"Reinhard",[tS]:"Cineon",[nS]:"ACESFilmic",[aS]:"AgX",[rS]:"Neutral",[iS]:"Custom"};function MC(a,e){const n=EC[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sc=new ue;function bC(){Rt.getLuminanceCoefficients(sc);const a=sc.x.toFixed(4),e=sc.y.toFixed(4),n=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function AC(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function RC(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(e,o),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function ll(a){return a!==""}function Jv(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(a){return a.replace(wC,DC)}const CC=new Map;function DC(a,e){let n=pt[e];if(n===void 0){const r=CC.get(e);if(r!==void 0)n=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Pp(n)}const UC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(a){return a.replace(UC,LC)}function LC(a,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function tx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const NC={[dc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function OC(a){return NC[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PC={[qr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function FC(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":PC[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const IC={[Gs]:"ENVMAP_MODE_REFRACTION"};function BC(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":IC[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zC={[Jx]:"ENVMAP_BLENDING_MULTIPLY",[D1]:"ENVMAP_BLENDING_MIX",[U1]:"ENVMAP_BLENDING_ADD"};function HC(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":zC[a.combine]||"ENVMAP_BLENDING_NONE"}function VC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function GC(a,e,n,r){const o=a.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=OC(n),h=FC(n),g=BC(n),_=HC(n),x=VC(n),y=TC(n),E=AC(u),T=o.createProgram();let S,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ll).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ll).join(`
`),v.length>0&&(v+=`
`)):(S=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),v=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?pt.tonemapping_pars_fragment:"",n.toneMapping!==Zi?MC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,yC("linearToOutputTexel",n.outputColorSpace),bC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ll).join(`
`)),f=Pp(f),f=Jv(f,n),f=$v(f,n),d=Pp(d),d=Jv(d,n),d=$v(d,n),f=ex(f),d=ex(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+S+f,N=L+v+d,P=Zv(o,o.VERTEX_SHADER,D),B=Zv(o,o.FRAGMENT_SHADER,N);o.attachShader(T,P),o.attachShader(T,B),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function H(k){if(a.debug.checkShaderErrors){const re=o.getProgramInfoLog(T)||"",se=o.getShaderInfoLog(P)||"",pe=o.getShaderInfoLog(B)||"",fe=re.trim(),I=se.trim(),V=pe.trim();let ie=!0,Ee=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ie=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,T,P,B);else{const O=Qv(o,P,"vertex"),Z=Qv(o,B,"fragment");Lt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+O+`
`+Z)}else fe!==""?rt("WebGLProgram: Program Info Log:",fe):(I===""||V==="")&&(Ee=!1);Ee&&(k.diagnostics={runnable:ie,programLog:fe,vertexShader:{log:I,prefix:S},fragmentShader:{log:V,prefix:v}})}o.deleteShader(P),o.deleteShader(B),Q=new _c(o,T),A=RC(o,T)}let Q;this.getUniforms=function(){return Q===void 0&&H(this),Q};let A;this.getAttributes=function(){return A===void 0&&H(this),A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(T,_C)),U},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=B,this}let kC=0;class XC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WC(e),n.set(e,r)),r}}class WC{constructor(e){this.id=kC++,this.code=e,this.usedTimes=0}}function qC(a,e,n,r,o,u,f){const d=new _S,m=new XC,h=new Set,g=[],_=new Map,x=o.logarithmicDepthBuffer;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return h.add(A),A===0?"uv":`uv${A}`}function S(A,U,k,re,se){const pe=re.fog,fe=se.geometry,I=A.isMeshStandardMaterial?re.environment:null,V=(A.isMeshStandardMaterial?n:e).get(A.envMap||I),ie=V&&V.mapping===Ic?V.image.height:null,Ee=E[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&rt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const O=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Z=O!==void 0?O.length:0;let ye=0;fe.morphAttributes.position!==void 0&&(ye=1),fe.morphAttributes.normal!==void 0&&(ye=2),fe.morphAttributes.color!==void 0&&(ye=3);let _e,Oe,je,te;if(Ee){const Ct=Yi[Ee];_e=Ct.vertexShader,Oe=Ct.fragmentShader}else _e=A.vertexShader,Oe=A.fragmentShader,m.update(A),je=m.getVertexShaderID(A),te=m.getFragmentShaderID(A);const ve=a.getRenderTarget(),we=a.state.buffers.depth.getReversed(),Ke=se.isInstancedMesh===!0,Ge=se.isBatchedMesh===!0,mt=!!A.map,Kt=!!A.matcap,gt=!!V,Mt=!!A.aoMap,Ot=!!A.lightMap,st=!!A.bumpMap,At=!!A.normalMap,G=!!A.displacementMap,Pt=!!A.emissiveMap,yt=!!A.metalnessMap,wt=!!A.roughnessMap,We=A.anisotropy>0,F=A.clearcoat>0,b=A.dispersion>0,w=A.iridescence>0,X=A.sheen>0,K=A.transmission>0,J=We&&!!A.anisotropyMap,Ae=F&&!!A.clearcoatMap,Re=F&&!!A.clearcoatNormalMap,ke=F&&!!A.clearcoatRoughnessMap,Je=w&&!!A.iridescenceMap,be=w&&!!A.iridescenceThicknessMap,Ue=X&&!!A.sheenColorMap,He=X&&!!A.sheenRoughnessMap,qe=!!A.specularMap,De=!!A.specularColorMap,ct=!!A.specularIntensityMap,q=K&&!!A.transmissionMap,Fe=K&&!!A.thicknessMap,Ce=!!A.gradientMap,Be=!!A.alphaMap,Te=A.alphaTest>0,Se=!!A.alphaHash,Le=!!A.extensions;let it=Zi;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=a.toneMapping);const It={shaderID:Ee,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Oe,defines:A.defines,customVertexShaderID:je,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&se._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&se.instanceColor!==null,instancingMorph:Ke&&se.morphTexture!==null,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xs,alphaToCoverage:!!A.alphaToCoverage,map:mt,matcap:Kt,envMap:gt,envMapMode:gt&&V.mapping,envMapCubeUVHeight:ie,aoMap:Mt,lightMap:Ot,bumpMap:st,normalMap:At,displacementMap:G,emissiveMap:Pt,normalMapObjectSpace:At&&A.normalMapType===P1,normalMapTangentSpace:At&&A.normalMapType===O1,metalnessMap:yt,roughnessMap:wt,anisotropy:We,anisotropyMap:J,clearcoat:F,clearcoatMap:Ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:ke,dispersion:b,iridescence:w,iridescenceMap:Je,iridescenceThicknessMap:be,sheen:X,sheenColorMap:Ue,sheenRoughnessMap:He,specularMap:qe,specularColorMap:De,specularIntensityMap:ct,transmission:K,transmissionMap:q,thicknessMap:Fe,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===zs&&A.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:Se,combine:A.combine,mapUv:mt&&T(A.map.channel),aoMapUv:Mt&&T(A.aoMap.channel),lightMapUv:Ot&&T(A.lightMap.channel),bumpMapUv:st&&T(A.bumpMap.channel),normalMapUv:At&&T(A.normalMap.channel),displacementMapUv:G&&T(A.displacementMap.channel),emissiveMapUv:Pt&&T(A.emissiveMap.channel),metalnessMapUv:yt&&T(A.metalnessMap.channel),roughnessMapUv:wt&&T(A.roughnessMap.channel),anisotropyMapUv:J&&T(A.anisotropyMap.channel),clearcoatMapUv:Ae&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(A.sheenRoughnessMap.channel),specularMapUv:qe&&T(A.specularMap.channel),specularColorMapUv:De&&T(A.specularColorMap.channel),specularIntensityMapUv:ct&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:Fe&&T(A.thicknessMap.channel),alphaMapUv:Be&&T(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(At||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!fe.attributes.uv&&(mt||Be),fog:!!pe,useFog:A.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:se.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ye,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:it,decodeVideoTexture:mt&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Gt,decodeVideoTextureEmissive:Pt&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Aa,flipSided:A.side===Zn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function v(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)U.push(k),U.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(L(U,A),D(U,A),U.push(a.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function L(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function D(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function N(A){const U=E[A.type];let k;if(U){const re=Yi[U];k=uA.clone(re.uniforms)}else k=A.uniforms;return k}function P(A,U){let k=_.get(U);return k!==void 0?++k.usedTimes:(k=new GC(a,U,A,u),g.push(k),_.set(U,k)),k}function B(A){if(--A.usedTimes===0){const U=g.indexOf(A);g[U]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function H(A){m.remove(A)}function Q(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:N,acquireProgram:P,releaseProgram:B,releaseShaderCache:H,programs:g,dispose:Q}}function YC(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function o(f,d,m){a.get(f)[d]=m}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function jC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function nx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ix(){const a=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function f(_,x,y,E,T,S){let v=a[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},a[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=S),e++,v}function d(_,x,y,E,T,S){const v=f(_,x,y,E,T,S);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(_,x,y,E,T,S){const v=f(_,x,y,E,T,S);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function h(_,x){n.length>1&&n.sort(_||jC),r.length>1&&r.sort(x||nx),o.length>1&&o.sort(x||nx)}function g(){for(let _=e,x=a.length;_<x;_++){const y=a[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:d,unshift:m,finish:g,sort:h}}function ZC(){let a=new WeakMap;function e(r,o){const u=a.get(r);let f;return u===void 0?(f=new ix,a.set(r,[f])):o>=u.length?(f=new ix,u.push(f)):f=u[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function KC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new Nt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return a[e.id]=n,n}}}function QC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let JC=0;function $C(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function e3(a){const e=new KC,n=QC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ue);const o=new ue,u=new un,f=new un;function d(h){let g=0,_=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,E=0,T=0,S=0,v=0,L=0,D=0,N=0,P=0,B=0,H=0;h.sort($C);for(let A=0,U=h.length;A<U;A++){const k=h[A],re=k.color,se=k.intensity,pe=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ks?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=re.r*se,_+=re.g*se,x+=re.b*se;else if(k.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(k.sh.coefficients[I],se);H++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,ie=n.get(k);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=k.shadow.matrix,L++}r.directional[y]=I,y++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(re).multiplyScalar(se),I.distance=pe,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,r.spot[T]=I;const V=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,V.updateMatrices(k),k.castShadow&&B++),r.spotLightMatrix[T]=V.matrix,k.castShadow){const ie=n.get(k);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,r.spotShadow[T]=ie,r.spotShadowMap[T]=fe,N++}T++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(re).multiplyScalar(se),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=I,S++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const V=k.shadow,ie=n.get(k);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,ie.shadowCameraNear=V.camera.near,ie.shadowCameraFar=V.camera.far,r.pointShadow[E]=ie,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=k.shadow.matrix,D++}r.point[E]=I,E++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(se),I.groundColor.copy(k.groundColor).multiplyScalar(se),r.hemi[v]=I,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==E||Q.spotLength!==T||Q.rectAreaLength!==S||Q.hemiLength!==v||Q.numDirectionalShadows!==L||Q.numPointShadows!==D||Q.numSpotShadows!==N||Q.numSpotMaps!==P||Q.numLightProbes!==H)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+P-B,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=H,Q.directionalLength=y,Q.pointLength=E,Q.spotLength=T,Q.rectAreaLength=S,Q.hemiLength=v,Q.numDirectionalShadows=L,Q.numPointShadows=D,Q.numSpotShadows=N,Q.numSpotMaps=P,Q.numLightProbes=H,r.version=JC++)}function m(h,g){let _=0,x=0,y=0,E=0,T=0;const S=g.matrixWorldInverse;for(let v=0,L=h.length;v<L;v++){const D=h[v];if(D.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),_++}else if(D.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),f.identity(),u.copy(D.matrixWorld),u.premultiply(S),f.extractRotation(u),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:r}}function ax(a){const e=new e3(a),n=[],r=[];function o(g){h.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function t3(a){let e=new WeakMap;function n(o,u=0){const f=e.get(o);let d;return f===void 0?(d=new ax(a),e.set(o,[d])):u>=f.length?(d=new ax(a),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const n3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a3=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],r3=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],rx=new un,rl=new ue,Uh=new ue;function s3(a,e,n){let r=new AS;const o=new ot,u=new ot,f=new nn,d=new yA,m=new EA,h={},g=n.maxTextureSize,_={[dr]:Zn,[Zn]:dr,[Aa]:Aa},x=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:n3,fragmentShader:i3}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Fi;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let v=this.type;this.render=function(B,H,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===f1&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=dc);const A=a.getRenderTarget(),U=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),re=a.state;re.setBlending(wa),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const se=v!==this.type;se&&H.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=B.length;pe<fe;pe++){const I=B[pe],V=I.shadow;if(V===void 0){rt("WebGLShadowMap:",I,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ie=V.getFrameExtents();if(o.multiply(ie),u.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/ie.x),o.x=u.x*ie.x,V.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/ie.y),o.y=u.y*ie.y,V.mapSize.y=u.y)),V.map===null||se===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sl){if(I.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Li(o.x,o.y,{format:ks,type:Ji,minFilter:pn,magFilter:pn,generateMipmaps:!1}),V.map.texture.name=I.name+".shadowMap",V.map.depthTexture=new pl(o.x,o.y,Ui),V.map.depthTexture.name=I.name+".shadowMapDepth",V.map.depthTexture.format=Ua,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un}else{I.isPointLight?(V.map=new bS(o.x),V.map.depthTexture=new SA(o.x,Qi)):(V.map=new Li(o.x,o.y),V.map.depthTexture=new pl(o.x,o.y,Qi)),V.map.depthTexture.name=I.name+".shadowMap",V.map.depthTexture.format=Ua;const O=a.state.buffers.depth.getReversed();this.type===dc?(V.map.depthTexture.compareFunction=O?tm:em,V.map.depthTexture.minFilter=pn,V.map.depthTexture.magFilter=pn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un)}V.camera.updateProjectionMatrix()}const Ee=V.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Ee;O++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,O),a.clear();else{O===0&&(a.setRenderTarget(V.map),a.clear());const Z=V.getViewport(O);f.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),re.viewport(f)}if(I.isPointLight){const Z=V.camera,ye=V.matrix,_e=I.distance||Z.far;_e!==Z.far&&(Z.far=_e,Z.updateProjectionMatrix()),rl.setFromMatrixPosition(I.matrixWorld),Z.position.copy(rl),Uh.copy(Z.position),Uh.add(a3[O]),Z.up.copy(r3[O]),Z.lookAt(Uh),Z.updateMatrixWorld(),ye.makeTranslation(-rl.x,-rl.y,-rl.z),rx.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(rx,Z.coordinateSystem,Z.reversedDepth)}else V.updateMatrices(I);r=V.getFrustum(),N(H,Q,V.camera,I,this.type)}V.isPointLightShadow!==!0&&this.type===sl&&L(V,Q),V.needsUpdate=!1}v=this.type,S.needsUpdate=!1,a.setRenderTarget(A,U,k)};function L(B,H){const Q=e.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Li(o.x,o.y,{format:ks,type:Ji})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(H,null,Q,x,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(H,null,Q,y,T,null)}function D(B,H,Q,A){let U=null;const k=Q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)U=k;else if(U=Q.isPointLight===!0?m:d,a.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const re=U.uuid,se=H.uuid;let pe=h[re];pe===void 0&&(pe={},h[re]=pe);let fe=pe[se];fe===void 0&&(fe=U.clone(),pe[se]=fe,H.addEventListener("dispose",P)),U=fe}if(U.visible=H.visible,U.wireframe=H.wireframe,A===sl?U.side=H.shadowSide!==null?H.shadowSide:H.side:U.side=H.shadowSide!==null?H.shadowSide:_[H.side],U.alphaMap=H.alphaMap,U.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,U.map=H.map,U.clipShadows=H.clipShadows,U.clippingPlanes=H.clippingPlanes,U.clipIntersection=H.clipIntersection,U.displacementMap=H.displacementMap,U.displacementScale=H.displacementScale,U.displacementBias=H.displacementBias,U.wireframeLinewidth=H.wireframeLinewidth,U.linewidth=H.linewidth,Q.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const re=a.properties.get(U);re.light=Q}return U}function N(B,H,Q,A,U){if(B.visible===!1)return;if(B.layers.test(H.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===sl)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,B.matrixWorld);const se=e.update(B),pe=B.material;if(Array.isArray(pe)){const fe=se.groups;for(let I=0,V=fe.length;I<V;I++){const ie=fe[I],Ee=pe[ie.materialIndex];if(Ee&&Ee.visible){const O=D(B,Ee,A,U);B.onBeforeShadow(a,B,H,Q,se,O,ie),a.renderBufferDirect(Q,null,se,O,B,ie),B.onAfterShadow(a,B,H,Q,se,O,ie)}}}else if(pe.visible){const fe=D(B,pe,A,U);B.onBeforeShadow(a,B,H,Q,se,fe,null),a.renderBufferDirect(Q,null,se,fe,B,null),B.onAfterShadow(a,B,H,Q,se,fe,null)}}const re=B.children;for(let se=0,pe=re.length;se<pe;se++)N(re[se],H,Q,A,U)}function P(B){B.target.removeEventListener("dispose",P);for(const Q in h){const A=h[Q],U=B.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const o3={[Xh]:Wh,[qh]:Zh,[Yh]:Kh,[Vs]:jh,[Wh]:Xh,[Zh]:qh,[Kh]:Yh,[jh]:Vs};function l3(a,e){function n(){let q=!1;const Fe=new nn;let Ce=null;const Be=new nn(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!q&&(a.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){q=Te},setClear:function(Te,Se,Le,it,It){It===!0&&(Te*=it,Se*=it,Le*=it),Fe.set(Te,Se,Le,it),Be.equals(Fe)===!1&&(a.clearColor(Te,Se,Le,it),Be.copy(Fe))},reset:function(){q=!1,Ce=null,Be.set(-1,0,0,0)}}}function r(){let q=!1,Fe=!1,Ce=null,Be=null,Te=null;return{setReversed:function(Se){if(Fe!==Se){const Le=e.get("EXT_clip_control");Se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Fe=Se;const it=Te;Te=null,this.setClear(it)}},getReversed:function(){return Fe},setTest:function(Se){Se?ve(a.DEPTH_TEST):we(a.DEPTH_TEST)},setMask:function(Se){Ce!==Se&&!q&&(a.depthMask(Se),Ce=Se)},setFunc:function(Se){if(Fe&&(Se=o3[Se]),Be!==Se){switch(Se){case Xh:a.depthFunc(a.NEVER);break;case Wh:a.depthFunc(a.ALWAYS);break;case qh:a.depthFunc(a.LESS);break;case Vs:a.depthFunc(a.LEQUAL);break;case Yh:a.depthFunc(a.EQUAL);break;case jh:a.depthFunc(a.GEQUAL);break;case Zh:a.depthFunc(a.GREATER);break;case Kh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=Se}},setLocked:function(Se){q=Se},setClear:function(Se){Te!==Se&&(Fe&&(Se=1-Se),a.clearDepth(Se),Te=Se)},reset:function(){q=!1,Ce=null,Be=null,Te=null,Fe=!1}}}function o(){let q=!1,Fe=null,Ce=null,Be=null,Te=null,Se=null,Le=null,it=null,It=null;return{setTest:function(Ct){q||(Ct?ve(a.STENCIL_TEST):we(a.STENCIL_TEST))},setMask:function(Ct){Fe!==Ct&&!q&&(a.stencilMask(Ct),Fe=Ct)},setFunc:function(Ct,oi,xn){(Ce!==Ct||Be!==oi||Te!==xn)&&(a.stencilFunc(Ct,oi,xn),Ce=Ct,Be=oi,Te=xn)},setOp:function(Ct,oi,xn){(Se!==Ct||Le!==oi||it!==xn)&&(a.stencilOp(Ct,oi,xn),Se=Ct,Le=oi,it=xn)},setLocked:function(Ct){q=Ct},setClear:function(Ct){It!==Ct&&(a.clearStencil(Ct),It=Ct)},reset:function(){q=!1,Fe=null,Ce=null,Be=null,Te=null,Se=null,Le=null,it=null,It=null}}}const u=new n,f=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,T=!1,S=null,v=null,L=null,D=null,N=null,P=null,B=null,H=new Nt(0,0,0),Q=0,A=!1,U=null,k=null,re=null,se=null,pe=null;const fe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const ie=a.getParameter(a.VERSION);ie.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ie)[1]),I=V>=1):ie.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),I=V>=2);let Ee=null,O={};const Z=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),_e=new nn().fromArray(Z),Oe=new nn().fromArray(ye);function je(q,Fe,Ce,Be){const Te=new Uint8Array(4),Se=a.createTexture();a.bindTexture(q,Se),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<Ce;Le++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Fe,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(Fe+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return Se}const te={};te[a.TEXTURE_2D]=je(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=je(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=je(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=je(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(a.DEPTH_TEST),f.setFunc(Vs),st(!1),At(ov),ve(a.CULL_FACE),Mt(wa);function ve(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function we(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function Ke(q,Fe){return _[q]!==Fe?(a.bindFramebuffer(q,Fe),_[q]=Fe,q===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Fe),q===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ge(q,Fe){let Ce=y,Be=!1;if(q){Ce=x.get(Fe),Ce===void 0&&(Ce=[],x.set(Fe,Ce));const Te=q.textures;if(Ce.length!==Te.length||Ce[0]!==a.COLOR_ATTACHMENT0){for(let Se=0,Le=Te.length;Se<Le;Se++)Ce[Se]=a.COLOR_ATTACHMENT0+Se;Ce.length=Te.length,Be=!0}}else Ce[0]!==a.BACK&&(Ce[0]=a.BACK,Be=!0);Be&&a.drawBuffers(Ce)}function mt(q){return E!==q?(a.useProgram(q),E=q,!0):!1}const Kt={[Br]:a.FUNC_ADD,[h1]:a.FUNC_SUBTRACT,[p1]:a.FUNC_REVERSE_SUBTRACT};Kt[m1]=a.MIN,Kt[g1]=a.MAX;const gt={[_1]:a.ZERO,[v1]:a.ONE,[x1]:a.SRC_COLOR,[Gh]:a.SRC_ALPHA,[T1]:a.SRC_ALPHA_SATURATE,[M1]:a.DST_COLOR,[y1]:a.DST_ALPHA,[S1]:a.ONE_MINUS_SRC_COLOR,[kh]:a.ONE_MINUS_SRC_ALPHA,[b1]:a.ONE_MINUS_DST_COLOR,[E1]:a.ONE_MINUS_DST_ALPHA,[A1]:a.CONSTANT_COLOR,[R1]:a.ONE_MINUS_CONSTANT_COLOR,[w1]:a.CONSTANT_ALPHA,[C1]:a.ONE_MINUS_CONSTANT_ALPHA};function Mt(q,Fe,Ce,Be,Te,Se,Le,it,It,Ct){if(q===wa){T===!0&&(we(a.BLEND),T=!1);return}if(T===!1&&(ve(a.BLEND),T=!0),q!==d1){if(q!==S||Ct!==A){if((v!==Br||N!==Br)&&(a.blendEquation(a.FUNC_ADD),v=Br,N=Br),Ct)switch(q){case zs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vh:a.blendFunc(a.ONE,a.ONE);break;case lv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",q);break}else switch(q){case zs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case lv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",q);break}L=null,D=null,P=null,B=null,H.set(0,0,0),Q=0,S=q,A=Ct}return}Te=Te||Fe,Se=Se||Ce,Le=Le||Be,(Fe!==v||Te!==N)&&(a.blendEquationSeparate(Kt[Fe],Kt[Te]),v=Fe,N=Te),(Ce!==L||Be!==D||Se!==P||Le!==B)&&(a.blendFuncSeparate(gt[Ce],gt[Be],gt[Se],gt[Le]),L=Ce,D=Be,P=Se,B=Le),(it.equals(H)===!1||It!==Q)&&(a.blendColor(it.r,it.g,it.b,It),H.copy(it),Q=It),S=q,A=!1}function Ot(q,Fe){q.side===Aa?we(a.CULL_FACE):ve(a.CULL_FACE);let Ce=q.side===Zn;Fe&&(Ce=!Ce),st(Ce),q.blending===zs&&q.transparent===!1?Mt(wa):Mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),u.setMask(q.colorWrite);const Be=q.stencilWrite;d.setTest(Be),Be&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Pt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):we(a.SAMPLE_ALPHA_TO_COVERAGE)}function st(q){U!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),U=q)}function At(q){q!==u1?(ve(a.CULL_FACE),q!==k&&(q===ov?a.cullFace(a.BACK):q===c1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):we(a.CULL_FACE),k=q}function G(q){q!==re&&(I&&a.lineWidth(q),re=q)}function Pt(q,Fe,Ce){q?(ve(a.POLYGON_OFFSET_FILL),(se!==Fe||pe!==Ce)&&(a.polygonOffset(Fe,Ce),se=Fe,pe=Ce)):we(a.POLYGON_OFFSET_FILL)}function yt(q){q?ve(a.SCISSOR_TEST):we(a.SCISSOR_TEST)}function wt(q){q===void 0&&(q=a.TEXTURE0+fe-1),Ee!==q&&(a.activeTexture(q),Ee=q)}function We(q,Fe,Ce){Ce===void 0&&(Ee===null?Ce=a.TEXTURE0+fe-1:Ce=Ee);let Be=O[Ce];Be===void 0&&(Be={type:void 0,texture:void 0},O[Ce]=Be),(Be.type!==q||Be.texture!==Fe)&&(Ee!==Ce&&(a.activeTexture(Ce),Ee=Ce),a.bindTexture(q,Fe||te[q]),Be.type=q,Be.texture=Fe)}function F(){const q=O[Ee];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{a.compressedTexImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function w(){try{a.compressedTexImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function X(){try{a.texSubImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function K(){try{a.texSubImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function J(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Ae(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Re(){try{a.texStorage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function ke(){try{a.texStorage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Je(){try{a.texImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function be(){try{a.texImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Ue(q){_e.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function He(q){Oe.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Oe.copy(q))}function qe(q,Fe){let Ce=h.get(Fe);Ce===void 0&&(Ce=new WeakMap,h.set(Fe,Ce));let Be=Ce.get(q);Be===void 0&&(Be=a.getUniformBlockIndex(Fe,q.name),Ce.set(q,Be))}function De(q,Fe){const Be=h.get(Fe).get(q);m.get(Fe)!==Be&&(a.uniformBlockBinding(Fe,Be,q.__bindingPointIndex),m.set(Fe,Be))}function ct(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Ee=null,O={},_={},x=new WeakMap,y=[],E=null,T=!1,S=null,v=null,L=null,D=null,N=null,P=null,B=null,H=new Nt(0,0,0),Q=0,A=!1,U=null,k=null,re=null,se=null,pe=null,_e.set(0,0,a.canvas.width,a.canvas.height),Oe.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:we,bindFramebuffer:Ke,drawBuffers:Ge,useProgram:mt,setBlending:Mt,setMaterial:Ot,setFlipSided:st,setCullFace:At,setLineWidth:G,setPolygonOffset:Pt,setScissorTest:yt,activeTexture:wt,bindTexture:We,unbindTexture:F,compressedTexImage2D:b,compressedTexImage3D:w,texImage2D:Je,texImage3D:be,updateUBOMapping:qe,uniformBlockBinding:De,texStorage2D:Re,texStorage3D:ke,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:J,compressedTexSubImage3D:Ae,scissor:Ue,viewport:He,reset:ct}}function u3(a,e,n,r,o,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return y?new OffscreenCanvas(F,b):Mc("canvas")}function T(F,b,w){let X=1;const K=We(F);if((K.width>w||K.height>w)&&(X=w/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const J=Math.floor(X*K.width),Ae=Math.floor(X*K.height);_===void 0&&(_=E(J,Ae));const Re=b?E(J,Ae):_;return Re.width=J,Re.height=Ae,Re.getContext("2d").drawImage(F,0,0,J,Ae),rt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+Ae+")."),Re}else return"data"in F&&rt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),F;return F}function S(F){return F.generateMipmaps}function v(F){a.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(F,b,w,X,K=!1){if(F!==null){if(a[F]!==void 0)return a[F];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let J=b;if(b===a.RED&&(w===a.FLOAT&&(J=a.R32F),w===a.HALF_FLOAT&&(J=a.R16F),w===a.UNSIGNED_BYTE&&(J=a.R8)),b===a.RED_INTEGER&&(w===a.UNSIGNED_BYTE&&(J=a.R8UI),w===a.UNSIGNED_SHORT&&(J=a.R16UI),w===a.UNSIGNED_INT&&(J=a.R32UI),w===a.BYTE&&(J=a.R8I),w===a.SHORT&&(J=a.R16I),w===a.INT&&(J=a.R32I)),b===a.RG&&(w===a.FLOAT&&(J=a.RG32F),w===a.HALF_FLOAT&&(J=a.RG16F),w===a.UNSIGNED_BYTE&&(J=a.RG8)),b===a.RG_INTEGER&&(w===a.UNSIGNED_BYTE&&(J=a.RG8UI),w===a.UNSIGNED_SHORT&&(J=a.RG16UI),w===a.UNSIGNED_INT&&(J=a.RG32UI),w===a.BYTE&&(J=a.RG8I),w===a.SHORT&&(J=a.RG16I),w===a.INT&&(J=a.RG32I)),b===a.RGB_INTEGER&&(w===a.UNSIGNED_BYTE&&(J=a.RGB8UI),w===a.UNSIGNED_SHORT&&(J=a.RGB16UI),w===a.UNSIGNED_INT&&(J=a.RGB32UI),w===a.BYTE&&(J=a.RGB8I),w===a.SHORT&&(J=a.RGB16I),w===a.INT&&(J=a.RGB32I)),b===a.RGBA_INTEGER&&(w===a.UNSIGNED_BYTE&&(J=a.RGBA8UI),w===a.UNSIGNED_SHORT&&(J=a.RGBA16UI),w===a.UNSIGNED_INT&&(J=a.RGBA32UI),w===a.BYTE&&(J=a.RGBA8I),w===a.SHORT&&(J=a.RGBA16I),w===a.INT&&(J=a.RGBA32I)),b===a.RGB&&(w===a.UNSIGNED_INT_5_9_9_9_REV&&(J=a.RGB9_E5),w===a.UNSIGNED_INT_10F_11F_11F_REV&&(J=a.R11F_G11F_B10F)),b===a.RGBA){const Ae=K?yc:Rt.getTransfer(X);w===a.FLOAT&&(J=a.RGBA32F),w===a.HALF_FLOAT&&(J=a.RGBA16F),w===a.UNSIGNED_BYTE&&(J=Ae===Gt?a.SRGB8_ALPHA8:a.RGBA8),w===a.UNSIGNED_SHORT_4_4_4_4&&(J=a.RGBA4),w===a.UNSIGNED_SHORT_5_5_5_1&&(J=a.RGB5_A1)}return(J===a.R16F||J===a.R32F||J===a.RG16F||J===a.RG32F||J===a.RGBA16F||J===a.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function N(F,b){let w;return F?b===null||b===Qi||b===dl?w=a.DEPTH24_STENCIL8:b===Ui?w=a.DEPTH32F_STENCIL8:b===fl&&(w=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===dl?w=a.DEPTH_COMPONENT24:b===Ui?w=a.DEPTH_COMPONENT32F:b===fl&&(w=a.DEPTH_COMPONENT16),w}function P(F,b){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Un&&F.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function B(F){const b=F.target;b.removeEventListener("dispose",B),Q(b),b.isVideoTexture&&g.delete(b)}function H(F){const b=F.target;b.removeEventListener("dispose",H),U(b)}function Q(F){const b=r.get(F);if(b.__webglInit===void 0)return;const w=F.source,X=x.get(w);if(X){const K=X[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(F),Object.keys(X).length===0&&x.delete(w)}r.remove(F)}function A(F){const b=r.get(F);a.deleteTexture(b.__webglTexture);const w=F.source,X=x.get(w);delete X[b.__cacheKey],f.memory.textures--}function U(F){const b=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let K=0;K<b.__webglFramebuffer[X].length;K++)a.deleteFramebuffer(b.__webglFramebuffer[X][K]);else a.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)a.deleteFramebuffer(b.__webglFramebuffer[X]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const w=F.textures;for(let X=0,K=w.length;X<K;X++){const J=r.get(w[X]);J.__webglTexture&&(a.deleteTexture(J.__webglTexture),f.memory.textures--),r.remove(w[X])}r.remove(F)}let k=0;function re(){k=0}function se(){const F=k;return F>=o.maxTextures&&rt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),k+=1,F}function pe(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function fe(F,b){const w=r.get(F);if(F.isVideoTexture&&yt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&w.__version!==F.version){const X=F.image;if(X===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(w,F,b);return}}else F.isExternalTexture&&(w.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,w.__webglTexture,a.TEXTURE0+b)}function I(F,b){const w=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&w.__version!==F.version){te(w,F,b);return}else F.isExternalTexture&&(w.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,w.__webglTexture,a.TEXTURE0+b)}function V(F,b){const w=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&w.__version!==F.version){te(w,F,b);return}n.bindTexture(a.TEXTURE_3D,w.__webglTexture,a.TEXTURE0+b)}function ie(F,b){const w=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&w.__version!==F.version){ve(w,F,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,w.__webglTexture,a.TEXTURE0+b)}const Ee={[$h]:a.REPEAT,[si]:a.CLAMP_TO_EDGE,[ep]:a.MIRRORED_REPEAT},O={[Un]:a.NEAREST,[L1]:a.NEAREST_MIPMAP_NEAREST,[Bu]:a.NEAREST_MIPMAP_LINEAR,[pn]:a.LINEAR,[eh]:a.LINEAR_MIPMAP_NEAREST,[Vr]:a.LINEAR_MIPMAP_LINEAR},Z={[F1]:a.NEVER,[V1]:a.ALWAYS,[I1]:a.LESS,[em]:a.LEQUAL,[B1]:a.EQUAL,[tm]:a.GEQUAL,[z1]:a.GREATER,[H1]:a.NOTEQUAL};function ye(F,b){if(b.type===Ui&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===eh||b.magFilter===Bu||b.magFilter===Vr||b.minFilter===pn||b.minFilter===eh||b.minFilter===Bu||b.minFilter===Vr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,Ee[b.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,Ee[b.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,Ee[b.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,O[b.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Bu&&b.minFilter!==Vr||b.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _e(F,b){let w=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",B));const X=b.source;let K=x.get(X);K===void 0&&(K={},x.set(X,K));const J=pe(b);if(J!==F.__cacheKey){K[J]===void 0&&(K[J]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,w=!0),K[J].usedTimes++;const Ae=K[F.__cacheKey];Ae!==void 0&&(K[F.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(b)),F.__cacheKey=J,F.__webglTexture=K[J].texture}return w}function Oe(F,b,w){return Math.floor(Math.floor(F/w)/b)}function je(F,b,w,X){const J=F.updateRanges;if(J.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,w,X,b.data);else{J.sort((be,Ue)=>be.start-Ue.start);let Ae=0;for(let be=1;be<J.length;be++){const Ue=J[Ae],He=J[be],qe=Ue.start+Ue.count,De=Oe(He.start,b.width,4),ct=Oe(Ue.start,b.width,4);He.start<=qe+1&&De===ct&&Oe(He.start+He.count-1,b.width,4)===De?Ue.count=Math.max(Ue.count,He.start+He.count-Ue.start):(++Ae,J[Ae]=He)}J.length=Ae+1;const Re=a.getParameter(a.UNPACK_ROW_LENGTH),ke=a.getParameter(a.UNPACK_SKIP_PIXELS),Je=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let be=0,Ue=J.length;be<Ue;be++){const He=J[be],qe=Math.floor(He.start/4),De=Math.ceil(He.count/4),ct=qe%b.width,q=Math.floor(qe/b.width),Fe=De,Ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ct),a.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,ct,q,Fe,Ce,w,X,b.data)}F.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Re),a.pixelStorei(a.UNPACK_SKIP_PIXELS,ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,Je)}}function te(F,b,w){let X=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=a.TEXTURE_3D);const K=_e(F,b),J=b.source;n.bindTexture(X,F.__webglTexture,a.TEXTURE0+w);const Ae=r.get(J);if(J.version!==Ae.__version||K===!0){n.activeTexture(a.TEXTURE0+w);const Re=Rt.getPrimaries(Rt.workingColorSpace),ke=b.colorSpace===cr?null:Rt.getPrimaries(b.colorSpace),Je=b.colorSpace===cr||Re===ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let be=T(b.image,!1,o.maxTextureSize);be=wt(b,be);const Ue=u.convert(b.format,b.colorSpace),He=u.convert(b.type);let qe=D(b.internalFormat,Ue,He,b.colorSpace,b.isVideoTexture);ye(X,b);let De;const ct=b.mipmaps,q=b.isVideoTexture!==!0,Fe=Ae.__version===void 0||K===!0,Ce=J.dataReady,Be=P(b,be);if(b.isDepthTexture)qe=N(b.format===Gr,b.type),Fe&&(q?n.texStorage2D(a.TEXTURE_2D,1,qe,be.width,be.height):n.texImage2D(a.TEXTURE_2D,0,qe,be.width,be.height,0,Ue,He,null));else if(b.isDataTexture)if(ct.length>0){q&&Fe&&n.texStorage2D(a.TEXTURE_2D,Be,qe,ct[0].width,ct[0].height);for(let Te=0,Se=ct.length;Te<Se;Te++)De=ct[Te],q?Ce&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,De.width,De.height,Ue,He,De.data):n.texImage2D(a.TEXTURE_2D,Te,qe,De.width,De.height,0,Ue,He,De.data);b.generateMipmaps=!1}else q?(Fe&&n.texStorage2D(a.TEXTURE_2D,Be,qe,be.width,be.height),Ce&&je(b,be,Ue,He)):n.texImage2D(a.TEXTURE_2D,0,qe,be.width,be.height,0,Ue,He,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Fe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,qe,ct[0].width,ct[0].height,be.depth);for(let Te=0,Se=ct.length;Te<Se;Te++)if(De=ct[Te],b.format!==vi)if(Ue!==null)if(q){if(Ce)if(b.layerUpdates.size>0){const Le=Fv(De.width,De.height,b.format,b.type);for(const it of b.layerUpdates){const It=De.data.subarray(it*Le/De.data.BYTES_PER_ELEMENT,(it+1)*Le/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,it,De.width,De.height,1,Ue,It)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,be.depth,Ue,De.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,qe,De.width,De.height,be.depth,0,De.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ce&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,be.depth,Ue,He,De.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Te,qe,De.width,De.height,be.depth,0,Ue,He,De.data)}else{q&&Fe&&n.texStorage2D(a.TEXTURE_2D,Be,qe,ct[0].width,ct[0].height);for(let Te=0,Se=ct.length;Te<Se;Te++)De=ct[Te],b.format!==vi?Ue!==null?q?Ce&&n.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,De.width,De.height,Ue,De.data):n.compressedTexImage2D(a.TEXTURE_2D,Te,qe,De.width,De.height,0,De.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ce&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,De.width,De.height,Ue,He,De.data):n.texImage2D(a.TEXTURE_2D,Te,qe,De.width,De.height,0,Ue,He,De.data)}else if(b.isDataArrayTexture)if(q){if(Fe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,qe,be.width,be.height,be.depth),Ce)if(b.layerUpdates.size>0){const Te=Fv(be.width,be.height,b.format,b.type);for(const Se of b.layerUpdates){const Le=be.data.subarray(Se*Te/be.data.BYTES_PER_ELEMENT,(Se+1)*Te/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Se,be.width,be.height,1,Ue,He,Le)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ue,He,be.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,qe,be.width,be.height,be.depth,0,Ue,He,be.data);else if(b.isData3DTexture)q?(Fe&&n.texStorage3D(a.TEXTURE_3D,Be,qe,be.width,be.height,be.depth),Ce&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ue,He,be.data)):n.texImage3D(a.TEXTURE_3D,0,qe,be.width,be.height,be.depth,0,Ue,He,be.data);else if(b.isFramebufferTexture){if(Fe)if(q)n.texStorage2D(a.TEXTURE_2D,Be,qe,be.width,be.height);else{let Te=be.width,Se=be.height;for(let Le=0;Le<Be;Le++)n.texImage2D(a.TEXTURE_2D,Le,qe,Te,Se,0,Ue,He,null),Te>>=1,Se>>=1}}else if(ct.length>0){if(q&&Fe){const Te=We(ct[0]);n.texStorage2D(a.TEXTURE_2D,Be,qe,Te.width,Te.height)}for(let Te=0,Se=ct.length;Te<Se;Te++)De=ct[Te],q?Ce&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ue,He,De):n.texImage2D(a.TEXTURE_2D,Te,qe,Ue,He,De);b.generateMipmaps=!1}else if(q){if(Fe){const Te=We(be);n.texStorage2D(a.TEXTURE_2D,Be,qe,Te.width,Te.height)}Ce&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ue,He,be)}else n.texImage2D(a.TEXTURE_2D,0,qe,Ue,He,be);S(b)&&v(X),Ae.__version=J.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ve(F,b,w){if(b.image.length!==6)return;const X=_e(F,b),K=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+w);const J=r.get(K);if(K.version!==J.__version||X===!0){n.activeTexture(a.TEXTURE0+w);const Ae=Rt.getPrimaries(Rt.workingColorSpace),Re=b.colorSpace===cr?null:Rt.getPrimaries(b.colorSpace),ke=b.colorSpace===cr||Ae===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Je=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let Se=0;Se<6;Se++)!Je&&!be?Ue[Se]=T(b.image[Se],!0,o.maxCubemapSize):Ue[Se]=be?b.image[Se].image:b.image[Se],Ue[Se]=wt(b,Ue[Se]);const He=Ue[0],qe=u.convert(b.format,b.colorSpace),De=u.convert(b.type),ct=D(b.internalFormat,qe,De,b.colorSpace),q=b.isVideoTexture!==!0,Fe=J.__version===void 0||X===!0,Ce=K.dataReady;let Be=P(b,He);ye(a.TEXTURE_CUBE_MAP,b);let Te;if(Je){q&&Fe&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,ct,He.width,He.height);for(let Se=0;Se<6;Se++){Te=Ue[Se].mipmaps;for(let Le=0;Le<Te.length;Le++){const it=Te[Le];b.format!==vi?qe!==null?q?Ce&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,0,0,it.width,it.height,qe,it.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,ct,it.width,it.height,0,it.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,0,0,it.width,it.height,qe,De,it.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,ct,it.width,it.height,0,qe,De,it.data)}}}else{if(Te=b.mipmaps,q&&Fe){Te.length>0&&Be++;const Se=We(Ue[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,ct,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(be){q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue[Se].width,Ue[Se].height,qe,De,Ue[Se].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,Ue[Se].width,Ue[Se].height,0,qe,De,Ue[Se].data);for(let Le=0;Le<Te.length;Le++){const It=Te[Le].image[Se].image;q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,0,0,It.width,It.height,qe,De,It.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,ct,It.width,It.height,0,qe,De,It.data)}}else{q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,qe,De,Ue[Se]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,qe,De,Ue[Se]);for(let Le=0;Le<Te.length;Le++){const it=Te[Le];q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,0,0,qe,De,it.image[Se]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,ct,qe,De,it.image[Se])}}}S(b)&&v(a.TEXTURE_CUBE_MAP),J.__version=K.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function we(F,b,w,X,K,J){const Ae=u.convert(w.format,w.colorSpace),Re=u.convert(w.type),ke=D(w.internalFormat,Ae,Re,w.colorSpace),Je=r.get(b),be=r.get(w);if(be.__renderTarget=b,!Je.__hasExternalTextures){const Ue=Math.max(1,b.width>>J),He=Math.max(1,b.height>>J);K===a.TEXTURE_3D||K===a.TEXTURE_2D_ARRAY?n.texImage3D(K,J,ke,Ue,He,b.depth,0,Ae,Re,null):n.texImage2D(K,J,ke,Ue,He,0,Ae,Re,null)}n.bindFramebuffer(a.FRAMEBUFFER,F),Pt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,X,K,be.__webglTexture,0,G(b)):(K===a.TEXTURE_2D||K>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,X,K,be.__webglTexture,J),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(F,b,w){if(a.bindRenderbuffer(a.RENDERBUFFER,F),b.depthBuffer){const X=b.depthTexture,K=X&&X.isDepthTexture?X.type:null,J=N(b.stencilBuffer,K),Ae=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Pt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,G(b),J,b.width,b.height):w?a.renderbufferStorageMultisample(a.RENDERBUFFER,G(b),J,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,J,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ae,a.RENDERBUFFER,F)}else{const X=b.textures;for(let K=0;K<X.length;K++){const J=X[K],Ae=u.convert(J.format,J.colorSpace),Re=u.convert(J.type),ke=D(J.internalFormat,Ae,Re,J.colorSpace);Pt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,G(b),ke,b.width,b.height):w?a.renderbufferStorageMultisample(a.RENDERBUFFER,G(b),ke,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ke,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ge(F,b,w){const X=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(b.depthTexture);if(K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),K.__webglTexture===void 0){K.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),ye(a.TEXTURE_CUBE_MAP,b.depthTexture);const Je=u.convert(b.depthTexture.format),be=u.convert(b.depthTexture.type);let Ue;b.depthTexture.format===Ua?Ue=a.DEPTH_COMPONENT24:b.depthTexture.format===Gr&&(Ue=a.DEPTH24_STENCIL8);for(let He=0;He<6;He++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ue,b.width,b.height,0,Je,be,null)}}else fe(b.depthTexture,0);const J=K.__webglTexture,Ae=G(b),Re=X?a.TEXTURE_CUBE_MAP_POSITIVE_X+w:a.TEXTURE_2D,ke=b.depthTexture.format===Gr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ua)Pt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,Re,J,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,ke,Re,J,0);else if(b.depthTexture.format===Gr)Pt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,Re,J,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,ke,Re,J,0);else throw new Error("Unknown depthTexture format")}function mt(F){const b=r.get(F),w=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const X=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=X}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(w)for(let X=0;X<6;X++)Ge(b.__webglFramebuffer[X],F,X);else{const X=F.texture.mipmaps;X&&X.length>0?Ge(b.__webglFramebuffer[0],F,0):Ge(b.__webglFramebuffer,F,0)}else if(w){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=a.createRenderbuffer(),Ke(b.__webglDepthbuffer[X],F,!1);else{const K=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[X];a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,J)}}else{const X=F.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Ke(b.__webglDepthbuffer,F,!1);else{const K=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,J)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Kt(F,b,w){const X=r.get(F);b!==void 0&&we(X.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),w!==void 0&&mt(F)}function gt(F){const b=F.texture,w=r.get(F),X=r.get(b);F.addEventListener("dispose",H);const K=F.textures,J=F.isWebGLCubeRenderTarget===!0,Ae=K.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=a.createTexture()),X.__version=b.version,f.memory.textures++),J){w.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){w.__webglFramebuffer[Re]=[];for(let ke=0;ke<b.mipmaps.length;ke++)w.__webglFramebuffer[Re][ke]=a.createFramebuffer()}else w.__webglFramebuffer[Re]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){w.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)w.__webglFramebuffer[Re]=a.createFramebuffer()}else w.__webglFramebuffer=a.createFramebuffer();if(Ae)for(let Re=0,ke=K.length;Re<ke;Re++){const Je=r.get(K[Re]);Je.__webglTexture===void 0&&(Je.__webglTexture=a.createTexture(),f.memory.textures++)}if(F.samples>0&&Pt(F)===!1){w.__webglMultisampledFramebuffer=a.createFramebuffer(),w.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let Re=0;Re<K.length;Re++){const ke=K[Re];w.__webglColorRenderbuffer[Re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,w.__webglColorRenderbuffer[Re]);const Je=u.convert(ke.format,ke.colorSpace),be=u.convert(ke.type),Ue=D(ke.internalFormat,Je,be,ke.colorSpace,F.isXRRenderTarget===!0),He=G(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,He,Ue,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,w.__webglColorRenderbuffer[Re])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(w.__webglDepthRenderbuffer=a.createRenderbuffer(),Ke(w.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(J){n.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),ye(a.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)we(w.__webglFramebuffer[Re][ke],F,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else we(w.__webglFramebuffer[Re],F,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(b)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let Re=0,ke=K.length;Re<ke;Re++){const Je=K[Re],be=r.get(Je);let Ue=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ue,be.__webglTexture),ye(Ue,Je),we(w.__webglFramebuffer,F,Je,a.COLOR_ATTACHMENT0+Re,Ue,0),S(Je)&&v(Ue)}n.unbindTexture()}else{let Re=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Re,X.__webglTexture),ye(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)we(w.__webglFramebuffer[ke],F,b,a.COLOR_ATTACHMENT0,Re,ke);else we(w.__webglFramebuffer,F,b,a.COLOR_ATTACHMENT0,Re,0);S(b)&&v(Re),n.unbindTexture()}F.depthBuffer&&mt(F)}function Mt(F){const b=F.textures;for(let w=0,X=b.length;w<X;w++){const K=b[w];if(S(K)){const J=L(F),Ae=r.get(K).__webglTexture;n.bindTexture(J,Ae),v(J),n.unbindTexture()}}}const Ot=[],st=[];function At(F){if(F.samples>0){if(Pt(F)===!1){const b=F.textures,w=F.width,X=F.height;let K=a.COLOR_BUFFER_BIT;const J=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=r.get(F),Re=b.length>1;if(Re)for(let Je=0;Je<b.length;Je++)n.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ke=F.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Je=0;Je<b.length;Je++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(K|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(K|=a.STENCIL_BUFFER_BIT)),Re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[Je]);const be=r.get(b[Je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,be,0)}a.blitFramebuffer(0,0,w,X,0,0,w,X,K,a.NEAREST),m===!0&&(Ot.length=0,st.length=0,Ot.push(a.COLOR_ATTACHMENT0+Je),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ot.push(J),st.push(J),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,st)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Re)for(let Je=0;Je<b.length;Je++){n.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[Je]);const be=r.get(b[Je]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.TEXTURE_2D,be,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const b=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function G(F){return Math.min(o.maxSamples,F.samples)}function Pt(F){const b=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(F){const b=f.render.frame;g.get(F)!==b&&(g.set(F,b),F.update())}function wt(F,b){const w=F.colorSpace,X=F.format,K=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||w!==Xs&&w!==cr&&(Rt.getTransfer(w)===Gt?(X!==vi||K!==_i)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",w)),b}function We(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=Kt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function c3(a,e){function n(r,o=cr){let u;const f=Rt.getTransfer(o);if(r===_i)return a.UNSIGNED_BYTE;if(r===Zp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Kp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===uS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===cS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===oS)return a.BYTE;if(r===lS)return a.SHORT;if(r===fl)return a.UNSIGNED_SHORT;if(r===jp)return a.INT;if(r===Qi)return a.UNSIGNED_INT;if(r===Ui)return a.FLOAT;if(r===Ji)return a.HALF_FLOAT;if(r===fS)return a.ALPHA;if(r===dS)return a.RGB;if(r===vi)return a.RGBA;if(r===Ua)return a.DEPTH_COMPONENT;if(r===Gr)return a.DEPTH_STENCIL;if(r===hS)return a.RED;if(r===Qp)return a.RED_INTEGER;if(r===ks)return a.RG;if(r===Jp)return a.RG_INTEGER;if(r===$p)return a.RGBA_INTEGER;if(r===hc||r===pc||r===mc||r===gc)if(f===Gt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tp||r===np||r===ip||r===ap)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===tp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===np)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ip)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rp||r===sp||r===op||r===lp||r===up||r===cp||r===fp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===rp||r===sp)return f===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===op)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===lp)return u.COMPRESSED_R11_EAC;if(r===up)return u.COMPRESSED_SIGNED_R11_EAC;if(r===cp)return u.COMPRESSED_RG11_EAC;if(r===fp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===Sp||r===yp||r===Ep||r===Mp||r===bp||r===Tp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===dp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_p)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tp)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ap||r===Rp||r===wp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ap)return f===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cp||r===Dp||r===Up||r===Lp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Dp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Up)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const f3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class h3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new RS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new $i({vertexShader:f3,fragmentShader:d3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new Xr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p3 extends Ks{constructor(e,n){super();const r=this;let o=null,u=1,f=null,d="local-floor",m=1,h=null,g=null,_=null,x=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",S=new h3,v={},L=n.getContextAttributes();let D=null,N=null;const P=[],B=[],H=new ot;let Q=null;const A=new Ci;A.viewport=new nn;const U=new Ci;U.viewport=new nn;const k=[A,U],re=new MA;let se=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ve=P[te];return ve===void 0&&(ve=new Mh,P[te]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(te){let ve=P[te];return ve===void 0&&(ve=new Mh,P[te]=ve),ve.getGripSpace()},this.getHand=function(te){let ve=P[te];return ve===void 0&&(ve=new Mh,P[te]=ve),ve.getHandSpace()};function fe(te){const ve=B.indexOf(te.inputSource);if(ve===-1)return;const we=P[ve];we!==void 0&&(we.update(te.inputSource,te.frame,h||f),we.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",V);for(let te=0;te<P.length;te++){const ve=B[te];ve!==null&&(B[te]=null,P[te].disconnect(ve))}se=null,pe=null,S.reset();for(const te in v)delete v[te];e.setRenderTarget(D),y=null,x=null,_=null,o=null,N=null,je.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",I),o.addEventListener("inputsourceschange",V),L.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(H),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ke=null,Ge=null;L.depth&&(Ge=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=L.stencil?Gr:Ua,Ke=L.stencil?dl:Qi);const mt={colorFormat:n.RGBA8,depthFormat:Ge,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(mt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Li(x.textureWidth,x.textureHeight,{format:vi,type:_i,depthTexture:new pl(x.textureWidth,x.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(o,n,we),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Li(y.framebufferWidth,y.framebufferHeight,{format:vi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await o.requestReferenceSpace(d),je.setContext(o),je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(te){for(let ve=0;ve<te.removed.length;ve++){const we=te.removed[ve],Ke=B.indexOf(we);Ke>=0&&(B[Ke]=null,P[Ke].disconnect(we))}for(let ve=0;ve<te.added.length;ve++){const we=te.added[ve];let Ke=B.indexOf(we);if(Ke===-1){for(let mt=0;mt<P.length;mt++)if(mt>=B.length){B.push(we),Ke=mt;break}else if(B[mt]===null){B[mt]=we,Ke=mt;break}if(Ke===-1)break}const Ge=P[Ke];Ge&&Ge.connect(we)}}const ie=new ue,Ee=new ue;function O(te,ve,we){ie.setFromMatrixPosition(ve.matrixWorld),Ee.setFromMatrixPosition(we.matrixWorld);const Ke=ie.distanceTo(Ee),Ge=ve.projectionMatrix.elements,mt=we.projectionMatrix.elements,Kt=Ge[14]/(Ge[10]-1),gt=Ge[14]/(Ge[10]+1),Mt=(Ge[9]+1)/Ge[5],Ot=(Ge[9]-1)/Ge[5],st=(Ge[8]-1)/Ge[0],At=(mt[8]+1)/mt[0],G=Kt*st,Pt=Kt*At,yt=Ke/(-st+At),wt=yt*-st;if(ve.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(wt),te.translateZ(yt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const We=Kt+yt,F=gt+yt,b=G-wt,w=Pt+(Ke-wt),X=Mt*gt/F*We,K=Ot*gt/F*We;te.projectionMatrix.makePerspective(b,w,X,K,We,F),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Z(te,ve){ve===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ve.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ve=te.near,we=te.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(we=S.depthFar)),re.near=U.near=A.near=ve,re.far=U.far=A.far=we,(se!==re.near||pe!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),se=re.near,pe=re.far),re.layers.mask=te.layers.mask|6,A.layers.mask=re.layers.mask&3,U.layers.mask=re.layers.mask&5;const Ke=te.parent,Ge=re.cameras;Z(re,Ke);for(let mt=0;mt<Ge.length;mt++)Z(Ge[mt],Ke);Ge.length===2?O(re,A,U):re.projectionMatrix.copy(A.projectionMatrix),ye(te,re,Ke)};function ye(te,ve,we){we===null?te.matrix.copy(ve.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ve.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Np*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(te){m=te,x!==null&&(x.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(re)},this.getCameraTexture=function(te){return v[te]};let _e=null;function Oe(te,ve){if(g=ve.getViewerPose(h||f),E=ve,g!==null){const we=g.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ke=!1;we.length!==re.cameras.length&&(re.cameras.length=0,Ke=!0);for(let gt=0;gt<we.length;gt++){const Mt=we[gt];let Ot=null;if(y!==null)Ot=y.getViewport(Mt);else{const At=_.getViewSubImage(x,Mt);Ot=At.viewport,gt===0&&(e.setRenderTargetTextures(N,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(N))}let st=k[gt];st===void 0&&(st=new Ci,st.layers.enable(gt),st.viewport=new nn,k[gt]=st),st.matrix.fromArray(Mt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Mt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),gt===0&&(re.matrix.copy(st.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Ke===!0&&re.cameras.push(st)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const gt=_.getDepthInformation(we[0]);gt&&gt.isValid&&gt.texture&&S.init(gt,o.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let gt=0;gt<we.length;gt++){const Mt=we[gt].camera;if(Mt){let Ot=v[Mt];Ot||(Ot=new RS,v[Mt]=Ot);const st=_.getCameraImage(Mt);Ot.sourceTexture=st}}}}for(let we=0;we<P.length;we++){const Ke=B[we],Ge=P[we];Ke!==null&&Ge!==void 0&&Ge.update(Ke,ve,h||f)}_e&&_e(te,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),E=null}const je=new CS;je.setAnimationLoop(Oe),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Fr=new La,m3=new un;function g3(a,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,ES(a)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,L,D,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,N)):v.isMeshMatcapMaterial?(u(S,v),E(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),T(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,L,D):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Zn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Zn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,N=L.envMapRotation;D&&(S.envMap.value=D,Fr.copy(N),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),S.envMapRotation.value.setFromMatrix4(m3.makeRotationFromEuler(Fr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=D*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function _3(a,e,n,r){let o={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const N=D.program;r.uniformBlockBinding(L,N)}function h(L,D){let N=o[L.id];N===void 0&&(E(L),N=g(L),o[L.id]=N,L.addEventListener("dispose",S));const P=D.program;r.updateUBOMapping(L,P);const B=e.render.frame;u[L.id]!==B&&(x(L),u[L.id]=B)}function g(L){const D=_();L.__bindingPointIndex=D;const N=a.createBuffer(),P=L.__size,B=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,P,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,N),N}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=o[L.id],N=L.uniforms,P=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let B=0,H=N.length;B<H;B++){const Q=Array.isArray(N[B])?N[B]:[N[B]];for(let A=0,U=Q.length;A<U;A++){const k=Q[A];if(y(k,B,A,P)===!0){const re=k.__offset,se=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<se.length;fe++){const I=se[fe],V=T(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,re+pe,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,pe),pe+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,re,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(L,D,N,P){const B=L.value,H=D+"_"+N;if(P[H]===void 0)return typeof B=="number"||typeof B=="boolean"?P[H]=B:P[H]=B.clone(),!0;{const Q=P[H];if(typeof B=="number"||typeof B=="boolean"){if(Q!==B)return P[H]=B,!0}else if(Q.equals(B)===!1)return Q.copy(B),!0}return!1}function E(L){const D=L.uniforms;let N=0;const P=16;for(let H=0,Q=D.length;H<Q;H++){const A=Array.isArray(D[H])?D[H]:[D[H]];for(let U=0,k=A.length;U<k;U++){const re=A[U],se=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,fe=se.length;pe<fe;pe++){const I=se[pe],V=T(I),ie=N%P,Ee=ie%V.boundary,O=ie+Ee;N+=Ee,O!==0&&P-O<V.storage&&(N+=P-O),re.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=N,N+=V.storage}}}const B=N%P;return B>0&&(N+=P-B),L.__size=N,L.__cache={},this}function T(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",L),D}function S(L){const D=L.target;D.removeEventListener("dispose",S);const N=f.indexOf(D.__bindingPointIndex);f.splice(N,1),a.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function v(){for(const L in o)a.deleteBuffer(o[L]);f=[],o={},u={}}return{bind:m,update:h,dispose:v}}const v3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function x3(){return qi===null&&(qi=new TS(v3,16,16,ks,Ji),qi.name="DFG_LUT",qi.minFilter=pn,qi.magFilter=pn,qi.wrapS=si,qi.wrapT=si,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class S3{constructor(e={}){const{canvas:n=G1(),context:r=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=_i}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const T=y,S=new Set([$p,Jp,Qp]),v=new Set([_i,Qi,fl,dl,Zp,Kp]),L=new Uint32Array(4),D=new Int32Array(4);let N=null,P=null;const B=[],H=[];let Q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=gi;let k=0,re=0,se=null,pe=-1,fe=null;const I=new nn,V=new nn;let ie=null;const Ee=new Nt(0);let O=0,Z=n.width,ye=n.height,_e=1,Oe=null,je=null;const te=new nn(0,0,Z,ye),ve=new nn(0,0,Z,ye);let we=!1;const Ke=new AS;let Ge=!1,mt=!1;const Kt=new un,gt=new ue,Mt=new nn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function At(){return se===null?_e:1}let G=r;function Pt(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yp}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Ct,!1),G===null){const Y="webgl2";if(G=Pt(Y,C),G===null)throw Pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Lt("WebGLRenderer: "+C.message),C}let yt,wt,We,F,b,w,X,K,J,Ae,Re,ke,Je,be,Ue,He,qe,De,ct,q,Fe,Ce,Be,Te;function Se(){yt=new x2(G),yt.init(),Ce=new c3(G,yt),wt=new c2(G,yt,e,Ce),We=new l3(G,yt),wt.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),F=new E2(G),b=new YC,w=new u3(G,yt,We,b,wt,Ce,F),X=new d2(A),K=new v2(A),J=new AA(G),Be=new l2(G,J),Ae=new S2(G,J,F,Be),Re=new b2(G,Ae,J,F),ct=new M2(G,wt,w),He=new f2(b),ke=new qC(A,X,K,yt,wt,Be,He),Je=new g3(A,b),be=new ZC,Ue=new t3(yt),De=new o2(A,X,K,We,Re,E,m),qe=new s3(A,Re,wt),Te=new _3(G,F,wt,We),q=new u2(G,yt,F),Fe=new y2(G,yt,F),F.programs=ke.programs,A.capabilities=wt,A.extensions=yt,A.properties=b,A.renderLists=be,A.shadowMap=qe,A.state=We,A.info=F}Se(),T!==_i&&(Q=new A2(T,n.width,n.height,o,u));const Le=new p3(A,G);this.xr=Le,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=yt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=yt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(Z,ye,!1))},this.getSize=function(C){return C.set(Z,ye)},this.setSize=function(C,Y,de=!0){if(Le.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,ye=Y,n.width=Math.floor(C*_e),n.height=Math.floor(Y*_e),de===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),Q!==null&&Q.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(Z*_e,ye*_e).floor()},this.setDrawingBufferSize=function(C,Y,de){Z=C,ye=Y,_e=de,n.width=Math.floor(C*de),n.height=Math.floor(Y*de),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(T===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,Y,de,ae){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Y,de,ae),We.viewport(I.copy(te).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,Y,de,ae){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,Y,de,ae),We.scissor(V.copy(ve).multiplyScalar(_e).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){We.setScissorTest(we=C)},this.setOpaqueSort=function(C){Oe=C},this.setTransparentSort=function(C){je=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,de=!0){let ae=0;if(C){let $=!1;if(se!==null){const Ne=se.texture.format;$=S.has(Ne)}if($){const Ne=se.texture.type,ze=v.has(Ne),Pe=De.getClearColor(),Ve=De.getClearAlpha(),Ze=Pe.r,et=Pe.g,Xe=Pe.b;ze?(L[0]=Ze,L[1]=et,L[2]=Xe,L[3]=Ve,G.clearBufferuiv(G.COLOR,0,L)):(D[0]=Ze,D[1]=et,D[2]=Xe,D[3]=Ve,G.clearBufferiv(G.COLOR,0,D))}else ae|=G.COLOR_BUFFER_BIT}Y&&(ae|=G.DEPTH_BUFFER_BIT),de&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Ct,!1),De.dispose(),be.dispose(),Ue.dispose(),b.dispose(),X.dispose(),K.dispose(),Re.dispose(),Be.dispose(),Te.dispose(),ke.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Tl),Le.removeEventListener("sessionend",Al),Bi.stop()};function it(C){C.preventDefault(),pv("WebGLRenderer: Context Lost."),U=!0}function It(){pv("WebGLRenderer: Context Restored."),U=!1;const C=F.autoReset,Y=qe.enabled,de=qe.autoUpdate,ae=qe.needsUpdate,$=qe.type;Se(),F.autoReset=C,qe.enabled=Y,qe.autoUpdate=de,qe.needsUpdate=ae,qe.type=$}function Ct(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){const Y=C.target;Y.removeEventListener("dispose",oi),xn(Y)}function xn(C){Sn(C),b.remove(C)}function Sn(C){const Y=b.get(C).programs;Y!==void 0&&(Y.forEach(function(de){ke.releaseProgram(de)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,de,ae,$,Ne){Y===null&&(Y=Ot);const ze=$.isMesh&&$.matrixWorld.determinant()<0,Pe=Rl(C,Y,de,ae,$);We.setMaterial(ae,ze);let Ve=de.index,Ze=1;if(ae.wireframe===!0){if(Ve=Ae.getWireframeAttribute(de),Ve===void 0)return;Ze=2}const et=de.drawRange,Xe=de.attributes.position;let ft=et.start*Ze,Bt=(et.start+et.count)*Ze;Ne!==null&&(ft=Math.max(ft,Ne.start*Ze),Bt=Math.min(Bt,(Ne.start+Ne.count)*Ze)),Ve!==null?(ft=Math.max(ft,0),Bt=Math.min(Bt,Ve.count)):Xe!=null&&(ft=Math.max(ft,0),Bt=Math.min(Bt,Xe.count));const qt=Bt-ft;if(qt<0||qt===1/0)return;Be.setup($,ae,Pe,de,Ve);let Zt,Dt=q;if(Ve!==null&&(Zt=J.get(Ve),Dt=Fe,Dt.setIndex(Zt)),$.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*At()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if($.isLine){let $e=ae.linewidth;$e===void 0&&($e=1),We.setLineWidth($e*At()),$.isLineSegments?Dt.setMode(G.LINES):$.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else $.isPoints?Dt.setMode(G.POINTS):$.isSprite&&Dt.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $e=$._multiDrawStarts,lt=$._multiDrawCounts,Et=$._multiDrawCount,Ln=Ve?J.get(Ve).bytesPerElement:1,zi=b.get(ae).currentProgram.getUniforms();for(let cn=0;cn<Et;cn++)zi.setValue(G,"_gl_DrawID",cn),Dt.render($e[cn]/Ln,lt[cn])}else if($.isInstancedMesh)Dt.renderInstances(ft,qt,$.count);else if(de.isInstancedBufferGeometry){const $e=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,lt=Math.min(de.instanceCount,$e);Dt.renderInstances(ft,qt,lt)}else Dt.render(ft,qt)};function An(C,Y,de){C.transparent===!0&&C.side===Aa&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,yi(C,Y,de),C.side=dr,C.needsUpdate=!0,yi(C,Y,de),C.side=Aa):yi(C,Y,de)}this.compile=function(C,Y,de=null){de===null&&(de=C),P=Ue.get(de),P.init(Y),H.push(P),de.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),C!==de&&C.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const ae=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ne=$.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Pe=Ne[ze];An(Pe,de,$),ae.add(Pe)}else An(Ne,de,$),ae.add(Ne)}),P=H.pop(),ae},this.compileAsync=function(C,Y,de=null){const ae=this.compile(C,Y,de);return new Promise($=>{function Ne(){if(ae.forEach(function(ze){b.get(ze).currentProgram.isReady()&&ae.delete(ze)}),ae.size===0){$(C);return}setTimeout(Ne,10)}yt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ii=null;function Js(C){Ii&&Ii(C)}function Tl(){Bi.stop()}function Al(){Bi.start()}const Bi=new CS;Bi.setAnimationLoop(Js),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(C){Ii=C,Le.setAnimationLoop(C),C===null?Bi.stop():Bi.start()},Le.addEventListener("sessionstart",Tl),Le.addEventListener("sessionend",Al),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const de=Le.enabled===!0&&Le.isPresenting===!0,ae=Q!==null&&(se===null||de)&&Q.begin(A,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,se),P=Ue.get(C,H.length),P.init(Y),H.push(P),Kt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ke.setFromProjectionMatrix(Kt,ji,Y.reversedDepth),mt=this.localClippingEnabled,Ge=He.init(this.clippingPlanes,mt),N=be.get(C,B.length),N.init(),B.push(N),Le.enabled===!0&&Le.isPresenting===!0){const ze=A.xr.getDepthSensingMesh();ze!==null&&ia(ze,Y,-1/0,A.sortObjects)}ia(C,Y,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(Oe,je),st=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,st&&De.addToRenderList(N,C),this.info.render.frame++,Ge===!0&&He.beginShadows();const $=P.state.shadowsArray;if(qe.render($,C,Y),Ge===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&Q.hasRenderPass())===!1){const ze=N.opaque,Pe=N.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ve=Y.cameras;if(Pe.length>0)for(let Ze=0,et=Ve.length;Ze<et;Ze++){const Xe=Ve[Ze];aa(ze,Pe,C,Xe)}st&&De.render(C);for(let Ze=0,et=Ve.length;Ze<et;Ze++){const Xe=Ve[Ze];Yr(N,C,Xe,Xe.viewport)}}else Pe.length>0&&aa(ze,Pe,C,Y),st&&De.render(C),Yr(N,C,Y)}se!==null&&re===0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se)),ae&&Q.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),Be.resetDefaultState(),pe=-1,fe=null,H.pop(),H.length>0?(P=H[H.length-1],Ge===!0&&He.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function ia(C,Y,de,ae){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ke.intersectsSprite(C)){ae&&Mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Kt);const ze=Re.update(C),Pe=C.material;Pe.visible&&N.push(C,ze,Pe,de,Mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ke.intersectsObject(C))){const ze=Re.update(C),Pe=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Mt.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Mt.copy(ze.boundingSphere.center)),Mt.applyMatrix4(C.matrixWorld).applyMatrix4(Kt)),Array.isArray(Pe)){const Ve=ze.groups;for(let Ze=0,et=Ve.length;Ze<et;Ze++){const Xe=Ve[Ze],ft=Pe[Xe.materialIndex];ft&&ft.visible&&N.push(C,ze,ft,de,Mt.z,Xe)}}else Pe.visible&&N.push(C,ze,Pe,de,Mt.z,null)}}const Ne=C.children;for(let ze=0,Pe=Ne.length;ze<Pe;ze++)ia(Ne[ze],Y,de,ae)}function Yr(C,Y,de,ae){const{opaque:$,transmissive:Ne,transparent:ze}=C;P.setupLightsView(de),Ge===!0&&He.setGlobalState(A.clippingPlanes,de),ae&&We.viewport(I.copy(ae)),$.length>0&&Si($,Y,de),Ne.length>0&&Si(Ne,Y,de),ze.length>0&&Si(ze,Y,de),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function aa(C,Y,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const ft=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Li(1,1,{generateMipmaps:!0,type:ft?Ji:_i,minFilter:Vr,samples:wt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[ae.id],ze=ae.viewport||I;Ne.setSize(ze.z*A.transmissionResolutionScale,ze.w*A.transmissionResolutionScale);const Pe=A.getRenderTarget(),Ve=A.getActiveCubeFace(),Ze=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(Ee),O=A.getClearAlpha(),O<1&&A.setClearColor(16777215,.5),A.clear(),st&&De.render(de);const et=A.toneMapping;A.toneMapping=Zi;const Xe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),Ge===!0&&He.setGlobalState(A.clippingPlanes,ae),Si(C,de,ae),w.updateMultisampleRenderTarget(Ne),w.updateRenderTargetMipmap(Ne),yt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Bt=0,qt=Y.length;Bt<qt;Bt++){const Zt=Y[Bt],{object:Dt,geometry:$e,material:lt,group:Et}=Zt;if(lt.side===Aa&&Dt.layers.test(ae.layers)){const Ln=lt.side;lt.side=Zn,lt.needsUpdate=!0,Na(Dt,de,ae,$e,lt,Et),lt.side=Ln,lt.needsUpdate=!0,ft=!0}}ft===!0&&(w.updateMultisampleRenderTarget(Ne),w.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Pe,Ve,Ze),A.setClearColor(Ee,O),Xe!==void 0&&(ae.viewport=Xe),A.toneMapping=et}function Si(C,Y,de){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ne=C.length;$<Ne;$++){const ze=C[$],{object:Pe,geometry:Ve,group:Ze}=ze;let et=ze.material;et.allowOverride===!0&&ae!==null&&(et=ae),Pe.layers.test(de.layers)&&Na(Pe,Y,de,Ve,et,Ze)}}function Na(C,Y,de,ae,$,Ne){C.onBeforeRender(A,Y,de,ae,$,Ne),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,Y,de,ae,C,Ne),$.transparent===!0&&$.side===Aa&&$.forceSinglePass===!1?($.side=Zn,$.needsUpdate=!0,A.renderBufferDirect(de,Y,ae,$,C,Ne),$.side=dr,$.needsUpdate=!0,A.renderBufferDirect(de,Y,ae,$,C,Ne),$.side=Aa):A.renderBufferDirect(de,Y,ae,$,C,Ne),C.onAfterRender(A,Y,de,ae,$,Ne)}function yi(C,Y,de){Y.isScene!==!0&&(Y=Ot);const ae=b.get(C),$=P.state.lights,Ne=P.state.shadowsArray,ze=$.state.version,Pe=ke.getParameters(C,$.state,Ne,Y,de),Ve=ke.getProgramCacheKey(Pe);let Ze=ae.programs;ae.environment=C.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(C.isMeshStandardMaterial?K:X).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",oi),Ze=new Map,ae.programs=Ze);let et=Ze.get(Ve);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===ze)return $s(C,Pe),et}else Pe.uniforms=ke.getUniforms(C),C.onBeforeCompile(Pe,A),et=ke.acquireProgram(Pe,Ve),Ze.set(Ve,et),ae.uniforms=Pe.uniforms;const Xe=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=He.uniform),$s(C,Pe),ae.needsLights=Oa(C),ae.lightsStateVersion=ze,ae.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMap.value=$.state.directionalShadowMap,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotShadowMap.value=$.state.spotShadowMap,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMap.value=$.state.pointShadowMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=et,ae.uniformsList=null,et}function rn(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=_c.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function $s(C,Y){const de=b.get(C);de.outputColorSpace=Y.outputColorSpace,de.batching=Y.batching,de.batchingColor=Y.batchingColor,de.instancing=Y.instancing,de.instancingColor=Y.instancingColor,de.instancingMorph=Y.instancingMorph,de.skinning=Y.skinning,de.morphTargets=Y.morphTargets,de.morphNormals=Y.morphNormals,de.morphColors=Y.morphColors,de.morphTargetsCount=Y.morphTargetsCount,de.numClippingPlanes=Y.numClippingPlanes,de.numIntersection=Y.numClipIntersection,de.vertexAlphas=Y.vertexAlphas,de.vertexTangents=Y.vertexTangents,de.toneMapping=Y.toneMapping}function Rl(C,Y,de,ae,$){Y.isScene!==!0&&(Y=Ot),w.resetTextureUnits();const Ne=Y.fog,ze=ae.isMeshStandardMaterial?Y.environment:null,Pe=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xs,Ve=(ae.isMeshStandardMaterial?K:X).get(ae.envMap||ze),Ze=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,et=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!de.morphAttributes.position,ft=!!de.morphAttributes.normal,Bt=!!de.morphAttributes.color;let qt=Zi;ae.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(qt=A.toneMapping);const Zt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Dt=Zt!==void 0?Zt.length:0,$e=b.get(ae),lt=P.state.lights;if(Ge===!0&&(mt===!0||C!==fe)){const yn=C===fe&&ae.id===pe;He.setState(ae,C,yn)}let Et=!1;ae.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==lt.state.version||$e.outputColorSpace!==Pe||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==Ve||ae.fog===!0&&$e.fog!==Ne||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==He.numPlanes||$e.numIntersection!==He.numIntersection)||$e.vertexAlphas!==Ze||$e.vertexTangents!==et||$e.morphTargets!==Xe||$e.morphNormals!==ft||$e.morphColors!==Bt||$e.toneMapping!==qt||$e.morphTargetsCount!==Dt)&&(Et=!0):(Et=!0,$e.__version=ae.version);let Ln=$e.currentProgram;Et===!0&&(Ln=yi(ae,Y,$));let zi=!1,cn=!1,Pa=!1;const zt=Ln.getUniforms(),sn=$e.uniforms;if(We.useProgram(Ln.program)&&(zi=!0,cn=!0,Pa=!0),ae.id!==pe&&(pe=ae.id,cn=!0),zi||fe!==C){We.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",C.projectionMatrix),zt.setValue(G,"viewMatrix",C.matrixWorldInverse);const Rn=zt.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,gt.setFromMatrixPosition(C.matrixWorld)),wt.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),fe!==C&&(fe=C,cn=!0,Pa=!0)}if($e.needsLights&&(lt.state.directionalShadowMap.length>0&&zt.setValue(G,"directionalShadowMap",lt.state.directionalShadowMap,w),lt.state.spotShadowMap.length>0&&zt.setValue(G,"spotShadowMap",lt.state.spotShadowMap,w),lt.state.pointShadowMap.length>0&&zt.setValue(G,"pointShadowMap",lt.state.pointShadowMap,w)),$.isSkinnedMesh){zt.setOptional(G,$,"bindMatrix"),zt.setOptional(G,$,"bindMatrixInverse");const yn=$.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),zt.setValue(G,"boneTexture",yn.boneTexture,w))}$.isBatchedMesh&&(zt.setOptional(G,$,"batchingTexture"),zt.setValue(G,"batchingTexture",$._matricesTexture,w),zt.setOptional(G,$,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",$._indirectTexture,w),zt.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",$._colorsTexture,w));const Vn=de.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ct.update($,de,Ln),(cn||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,zt.setValue(G,"receiveShadow",$.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(sn.envMap.value=Ve,sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(sn.envMapIntensity.value=Y.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=x3()),cn&&(zt.setValue(G,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&ra(sn,Pa),Ne&&ae.fog===!0&&Je.refreshFogUniforms(sn,Ne),Je.refreshMaterialUniforms(sn,ae,_e,ye,P.state.transmissionRenderTarget[C.id]),_c.upload(G,rn($e),sn,w)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(_c.upload(G,rn($e),sn,w),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(G,"center",$.center),zt.setValue(G,"modelViewMatrix",$.modelViewMatrix),zt.setValue(G,"normalMatrix",$.normalMatrix),zt.setValue(G,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const yn=ae.uniformsGroups;for(let Rn=0,pr=yn.length;Rn<pr;Rn++){const sa=yn[Rn];Te.update(sa,Ln),Te.bind(sa,Ln)}}return Ln}function ra(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Oa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,Y,de){const ae=b.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Y,b.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const de=b.get(C);de.__webglFramebuffer=Y,de.__useDefaultFramebuffer=Y===void 0};const Vc=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,de=0){se=C,k=Y,re=de;let ae=null,$=!1,Ne=!1;if(C){const Pe=b.get(C);if(Pe.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),I.copy(C.viewport),V.copy(C.scissor),ie=C.scissorTest,We.viewport(I),We.scissor(V),We.setScissorTest(ie),pe=-1;return}else if(Pe.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Pe.__hasExternalTextures)w.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const Ze=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[Y])?ae=Ze[Y][de]:ae=Ze[Y],$=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?ae=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?ae=Ze[de]:ae=Ze,I.copy(C.viewport),V.copy(C.scissor),ie=C.scissorTest}else I.copy(te).multiplyScalar(_e).floor(),V.copy(ve).multiplyScalar(_e).floor(),ie=we;if(de!==0&&(ae=Vc),We.bindFramebuffer(G.FRAMEBUFFER,ae)&&We.drawBuffers(C,ae),We.viewport(I),We.scissor(V),We.setScissorTest(ie),$){const Pe=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,de)}else if(Ne){const Pe=Y;for(let Ve=0;Ve<C.textures.length;Ve++){const Ze=b.get(C.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,Ze.__webglTexture,de,Pe)}}else if(C!==null&&de!==0){const Pe=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,de)}pe=-1},this.readRenderTargetPixels=function(C,Y,de,ae,$,Ne,ze,Pe=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){We.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const Ze=C.textures[Pe],et=Ze.format,Xe=Ze.type;if(!wt.textureFormatReadable(et)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Xe)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ae&&de>=0&&de<=C.height-$&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(Y,de,ae,$,Ce.convert(et),Ce.convert(Xe),Ne))}finally{const Ze=se!==null?b.get(se).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,Y,de,ae,$,Ne,ze,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve)if(Y>=0&&Y<=C.width-ae&&de>=0&&de<=C.height-$){We.bindFramebuffer(G.FRAMEBUFFER,Ve);const Ze=C.textures[Pe],et=Ze.format,Xe=Ze.type;if(!wt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ft),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(Y,de,ae,$,Ce.convert(et),Ce.convert(Xe),0);const Bt=se!==null?b.get(se).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,Bt);const qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await k1(G,qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ft),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(ft),G.deleteSync(qt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,de=0){const ae=Math.pow(2,-de),$=Math.floor(C.image.width*ae),Ne=Math.floor(C.image.height*ae),ze=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;w.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,ze,Pe,$,Ne),We.unbindTexture()};const wl=G.createFramebuffer(),Cl=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,de=null,ae=null,$=0,Ne=null){Ne===null&&($!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=$,$=0):Ne=0);let ze,Pe,Ve,Ze,et,Xe,ft,Bt,qt;const Zt=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(de!==null)ze=de.max.x-de.min.x,Pe=de.max.y-de.min.y,Ve=de.isBox3?de.max.z-de.min.z:1,Ze=de.min.x,et=de.min.y,Xe=de.isBox3?de.min.z:0;else{const Vn=Math.pow(2,-$);ze=Math.floor(Zt.width*Vn),Pe=Math.floor(Zt.height*Vn),C.isDataArrayTexture?Ve=Zt.depth:C.isData3DTexture?Ve=Math.floor(Zt.depth*Vn):Ve=1,Ze=0,et=0,Xe=0}ae!==null?(ft=ae.x,Bt=ae.y,qt=ae.z):(ft=0,Bt=0,qt=0);const Dt=Ce.convert(Y.format),$e=Ce.convert(Y.type);let lt;Y.isData3DTexture?(w.setTexture3D(Y,0),lt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(w.setTexture2DArray(Y,0),lt=G.TEXTURE_2D_ARRAY):(w.setTexture2D(Y,0),lt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Et=G.getParameter(G.UNPACK_ROW_LENGTH),Ln=G.getParameter(G.UNPACK_IMAGE_HEIGHT),zi=G.getParameter(G.UNPACK_SKIP_PIXELS),cn=G.getParameter(G.UNPACK_SKIP_ROWS),Pa=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ze),G.pixelStorei(G.UNPACK_SKIP_ROWS,et),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Xe);const zt=C.isDataArrayTexture||C.isData3DTexture,sn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Vn=b.get(C),yn=b.get(Y),Rn=b.get(Vn.__renderTarget),pr=b.get(yn.__renderTarget);We.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let sa=0;sa<Ve;sa++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(C).__webglTexture,$,Xe+sa),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ne,qt+sa)),G.blitFramebuffer(Ze,et,ze,Pe,ft,Bt,ze,Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||b.has(C)){const Vn=b.get(C),yn=b.get(Y);We.bindFramebuffer(G.READ_FRAMEBUFFER,wl),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cl);for(let Rn=0;Rn<Ve;Rn++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vn.__webglTexture,$,Xe+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vn.__webglTexture,$),sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,Ne,qt+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,Ne),$!==0?G.blitFramebuffer(Ze,et,ze,Pe,ft,Bt,ze,Pe,G.COLOR_BUFFER_BIT,G.NEAREST):sn?G.copyTexSubImage3D(lt,Ne,ft,Bt,qt+Rn,Ze,et,ze,Pe):G.copyTexSubImage2D(lt,Ne,ft,Bt,Ze,et,ze,Pe);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else sn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(lt,Ne,ft,Bt,qt,ze,Pe,Ve,Dt,$e,Zt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(lt,Ne,ft,Bt,qt,ze,Pe,Ve,Dt,Zt.data):G.texSubImage3D(lt,Ne,ft,Bt,qt,ze,Pe,Ve,Dt,$e,Zt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,ft,Bt,ze,Pe,Dt,$e,Zt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,ft,Bt,Zt.width,Zt.height,Dt,Zt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,ft,Bt,ze,Pe,Dt,$e,Zt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Et),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ln),G.pixelStorei(G.UNPACK_SKIP_PIXELS,zi),G.pixelStorei(G.UNPACK_SKIP_ROWS,cn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Pa),Ne===0&&Y.generateMipmaps&&G.generateMipmap(lt),We.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){k=0,re=0,se=null,We.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}function y3({mouseForce:a=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:o=8,iterationsPoisson:u=8,dt:f=.014,BFECC:d=!1,resolution:m=.4,isBounce:h=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:_={},className:x="",autoDemo:y=!0,autoSpeed:E=.5,autoIntensity:T=2.2,takeoverDuration:S=.25,autoResumeDelay:v=1e3,autoRampDuration:L=.6}){const D=oe.useRef(null),N=oe.useRef(null),P=oe.useRef(null),B=oe.useRef(null),H=oe.useRef(null),Q=oe.useRef(!0),A=oe.useRef(null);return oe.useEffect(()=>{if(!D.current)return;function U(b){let w;Array.isArray(b)&&b.length>0?b.length===1?w=[b[0],b[0]]:w=b:w=["#ffffff","#ffffff"];const X=w.length,K=new Uint8Array(X*4);for(let Ae=0;Ae<X;Ae++){const Re=new Nt(w[Ae]);K[Ae*4+0]=Math.round(Re.r*255),K[Ae*4+1]=Math.round(Re.g*255),K[Ae*4+2]=Math.round(Re.b*255),K[Ae*4+3]=255}const J=new TS(K,X,1,vi);return J.magFilter=pn,J.minFilter=pn,J.wrapS=si,J.wrapT=si,J.generateMipmaps=!1,J.needsUpdate=!0,J}const k=U(g),re=new Nt("#26035e"),se=new nn(re.r,re.g,re.b,1);class pe{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(w){this.container=w,this.pixelRatio=Math.min(window.devicePixelRatio||1,1.5),this.resize(),this.renderer=new S3({antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Nt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new bA,this.clock.start()}resize(){if(!this.container)return;const w=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(w.width)),this.height=Math.max(1,Math.floor(w.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const fe=new pe;class I{constructor(){this.mouseMoved=!1,this.coords=new ot,this.coords_old=new ot,this.diff=new ot,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ot,this.takeoverTo=new ot,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(w){this.container=w,this.docTarget=w.ownerDocument||null;const X=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);X&&(this.listenerTarget=X,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(w,X){if(!this.container)return!1;const K=this.container.getBoundingClientRect();return K.width===0||K.height===0?!1:w>=K.left&&w<=K.right&&X>=K.top&&X<=K.bottom}updateHoverState(w,X){return this.isHoverInside=this.isPointInside(w,X),this.isHoverInside}setCoords(w,X){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const K=this.container.getBoundingClientRect();if(K.width===0||K.height===0)return;const J=(w-K.left)/K.width,Ae=(X-K.top)/K.height;this.coords.set(J*2-1,-(Ae*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(w,X){this.coords.set(w,X),this.mouseMoved=!0}onDocumentMouseMove(w){if(this.updateHoverState(w.clientX,w.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const X=this.container.getBoundingClientRect();if(X.width===0||X.height===0)return;const K=(w.clientX-X.left)/X.width,J=(w.clientY-X.top)/X.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(K*2-1,-(J*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(w.clientX,w.clientY),this.hasUserControl=!0}}onDocumentTouchStart(w){if(w.touches.length!==1)return;const X=w.touches[0];this.updateHoverState(X.clientX,X.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(X.clientX,X.clientY),this.hasUserControl=!0)}onDocumentTouchMove(w){if(w.touches.length!==1)return;const X=w.touches[0];this.updateHoverState(X.clientX,X.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(X.clientX,X.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const w=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(w>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const X=w*w*(3-2*w);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,X)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const V=new I;class ie{constructor(w,X,K){this.mouse=w,this.manager=X,this.enabled=K.enabled,this.speed=K.speed,this.resumeDelay=K.resumeDelay||3e3,this.rampDurationMs=(K.rampDuration||0)*1e3,this.active=!1,this.current=new ot(0,0),this.target=new ot,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ot,this.pickNewTarget()}pickNewTarget(){const w=Math.random;this.target.set((w()*2-1)*(1-this.margin),(w()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const w=performance.now();if(w-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=w,this.activationTime=w),!this.active)return;this.mouse.isAutoActive=!0;let K=(w-this.lastTime)/1e3;this.lastTime=w,K>.2&&(K=.016);const J=this._tmpDir.subVectors(this.target,this.current),Ae=J.length();if(Ae<.01){this.pickNewTarget();return}J.normalize();let Re=1;if(this.rampDurationMs>0){const be=Math.min(1,(w-this.activationTime)/this.rampDurationMs);Re=be*be*(3-2*be)}const ke=this.speed*K*Re,Je=Math.min(ke,Ae);this.current.addScaledVector(J,Je),this.mouse.setNormalized(this.current.x,this.current.y)}}const Ee=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,O=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Z=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,ye=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,_e=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Oe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,je=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,te=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ve=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,we=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Ke{constructor(w){var X;this.props=w||{},this.uniforms=(X=this.props.material)==null?void 0:X.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Uv,this.camera=new bc,this.uniforms&&(this.material=new ol(this.props.material),this.geometry=new Xr(2,2),this.plane=new xi(this.geometry,this.material),this.scene.add(this.plane))}update(){fe.renderer.setRenderTarget(this.props.output||null),fe.renderer.render(this.scene,this.camera),fe.renderer.setRenderTarget(null)}}class Ge extends Ke{constructor(w){super({material:{vertexShader:Ee,fragmentShader:ye,uniforms:{boundarySpace:{value:w.cellScale},px:{value:w.cellScale},fboSize:{value:w.fboSize},velocity:{value:w.src.texture},dt:{value:w.dt},isBFECC:{value:!0}}},output:w.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const w=new Fi,X=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);w.setAttribute("position",new Ni(X,3));const K=new ol({vertexShader:O,fragmentShader:ye,uniforms:this.uniforms});this.line=new xA(w,K),this.scene.add(this.line)}update({dt:w,isBounce:X,BFECC:K}){this.uniforms.dt.value=w,this.line.visible=X,this.uniforms.isBFECC.value=K,super.update()}}class mt extends Ke{constructor(w){super({output:w.dst}),this.init(w)}init(w){super.init();const X=new Xr(1,1),K=new ol({vertexShader:Z,fragmentShader:je,blending:Vh,depthWrite:!1,uniforms:{px:{value:w.cellScale},force:{value:new ot(0,0)},center:{value:new ot(0,0)},scale:{value:new ot(w.cursor_size,w.cursor_size)}}});this.mouse=new xi(X,K),this.scene.add(this.mouse)}update(w){const X=V.diff.x/2*w.mouse_force,K=V.diff.y/2*w.mouse_force,J=w.cursor_size*w.cellScale.x,Ae=w.cursor_size*w.cellScale.y,Re=Math.min(Math.max(V.coords.x,-1+J+w.cellScale.x*2),1-J-w.cellScale.x*2),ke=Math.min(Math.max(V.coords.y,-1+Ae+w.cellScale.y*2),1-Ae-w.cellScale.y*2),Je=this.mouse.material.uniforms;Je.force.value.set(X,K),Je.center.value.set(Re,ke),Je.scale.value.set(w.cursor_size,w.cursor_size),super.update()}}class Kt extends Ke{constructor(w){super({material:{vertexShader:Ee,fragmentShader:we,uniforms:{boundarySpace:{value:w.boundarySpace},velocity:{value:w.src.texture},velocity_new:{value:w.dst_.texture},v:{value:w.viscous},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst,output0:w.dst_,output1:w.dst}),this.init()}update({viscous:w,iterations:X,dt:K}){let J,Ae;this.uniforms.v.value=w;for(let Re=0;Re<X;Re++)Re%2===0?(J=this.props.output0,Ae=this.props.output1):(J=this.props.output1,Ae=this.props.output0),this.uniforms.velocity_new.value=J.texture,this.props.output=Ae,this.uniforms.dt.value=K,super.update();return Ae}}class gt extends Ke{constructor(w){super({material:{vertexShader:Ee,fragmentShader:Oe,uniforms:{boundarySpace:{value:w.boundarySpace},velocity:{value:w.src.texture},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst}),this.init()}update({vel:w}){this.uniforms.velocity.value=w.texture,super.update()}}class Mt extends Ke{constructor(w){super({material:{vertexShader:Ee,fragmentShader:te,uniforms:{boundarySpace:{value:w.boundarySpace},pressure:{value:w.dst_.texture},divergence:{value:w.src.texture},px:{value:w.cellScale}}},output:w.dst,output0:w.dst_,output1:w.dst}),this.init()}update({iterations:w}){let X,K;for(let J=0;J<w;J++)J%2===0?(X=this.props.output0,K=this.props.output1):(X=this.props.output1,K=this.props.output0),this.uniforms.pressure.value=X.texture,this.props.output=K,super.update();return K}}class Ot extends Ke{constructor(w){super({material:{vertexShader:Ee,fragmentShader:ve,uniforms:{boundarySpace:{value:w.boundarySpace},pressure:{value:w.src_p.texture},velocity:{value:w.src_v.texture},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst}),this.init()}update({vel:w,pressure:X}){this.uniforms.velocity.value=w.texture,this.uniforms.pressure.value=X.texture,super.update()}}class st{constructor(w){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...w},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ot,this.cellScale=new ot,this.boundarySpace=new ot,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ji:Ui}createAllFBO(){const X={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:pn,magFilter:pn,wrapS:si,wrapT:si};for(let K in this.fbos)this.fbos[K]=new Li(this.fboSize.x,this.fboSize.y,X)}createShaderPass(){this.advection=new Ge({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new mt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Kt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ot({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const w=Math.max(1,Math.round(this.options.resolution*fe.width)),X=Math.max(1,Math.round(this.options.resolution*fe.height)),K=1/w,J=1/X;this.cellScale.set(K,J),this.fboSize.set(w,X)}resize(){this.calcSize();for(let w in this.fbos)this.fbos[w].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let w=this.fbos.vel_1;this.options.isViscous&&(w=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:w});const X=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:w,pressure:X})}}class At{constructor(){this.init()}init(){this.simulation=new st,this.scene=new Uv,this.camera=new bc,this.output=new xi(new Xr(2,2),new ol({vertexShader:Ee,fragmentShader:_e,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ot},palette:{value:k},bgColor:{value:se}}})),this.scene.add(this.output)}addScene(w){this.scene.add(w)}resize(){this.simulation.resize()}render(){fe.renderer.setRenderTarget(null),fe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class G{constructor(w){this.props=w,fe.init(w.$wrapper),V.init(w.$wrapper),V.autoIntensity=w.autoIntensity,V.takeoverDuration=w.takeoverDuration,this.lastUserInteraction=performance.now(),V.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ie(V,this,{enabled:w.autoDemo,speed:w.autoSpeed,resumeDelay:w.autoResumeDelay,rampDuration:w.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Q.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(fe.renderer.domElement),this.output=new At}resize(){fe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),V.update(),fe.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),V.dispose(),fe.renderer){const w=fe.renderer.domElement;if(w&&w.parentNode&&w.parentNode.removeChild(w),this.output&&this.output.simulation){const X=this.output.simulation.fbos;for(let K in X)X[K]&&X[K].dispose()}k&&k.dispose(),fe.renderer.dispose()}}catch{}}}const Pt=D.current;Pt.style.position=Pt.style.position||"relative",Pt.style.overflow=Pt.style.overflow||"hidden";const yt=new G({$wrapper:Pt,autoDemo:y,autoSpeed:E,autoIntensity:T,takeoverDuration:S,autoResumeDelay:v,autoRampDuration:L});N.current=yt,(()=>{var X;if(!N.current)return;const b=(X=N.current.output)==null?void 0:X.simulation;if(!b)return;const w=b.options.resolution;Object.assign(b.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:u,dt:f,BFECC:d,resolution:m,isBounce:h}),m!==w&&b.resize()})(),yt.start();const We=new IntersectionObserver(b=>{const w=b[0],X=w.isIntersecting&&w.intersectionRatio>0;Q.current=X,N.current&&(X&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});We.observe(Pt),H.current=We;const F=new ResizeObserver(()=>{N.current&&(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return F.observe(Pt),P.current=F,()=>{if(B.current&&cancelAnimationFrame(B.current),P.current)try{P.current.disconnect()}catch{}if(H.current)try{H.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[JSON.stringify(g)]),oe.useEffect(()=>{var se;const U=N.current;if(!U)return;const k=(se=U.output)==null?void 0:se.simulation;if(!k)return;const re=k.options.resolution;Object.assign(k.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:u,dt:f,BFECC:d,resolution:m,isBounce:h}),U.autoDriver&&(U.autoDriver.enabled=y,U.autoDriver.speed=E,U.autoDriver.resumeDelay=v,U.autoDriver.rampDurationMs=L*1e3,U.autoDriver.mouse&&(U.autoDriver.mouse.autoIntensity=T,U.autoDriver.mouse.takeoverDuration=S)),m!==re&&k.resize()},[a,e,n,r,o,u,f,d,m,h,y,E,T,S,v,L]),Me.jsx("div",{ref:D,className:`liquid-ether-container ${x||""}`,style:{padding:0,margin:0,..._}})}const im="http://localhost:3000",E3="http://localhost:5001",am=im;async function M3(a,e){const n=document.getElementById("outcome");try{const r=await fetch(`${am}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:e})}),o=await r.json().catch(()=>({error:"Failed to parse server response."}));if(!r.ok)throw new Error(o.error||o.message||`Login failed with status: ${r.status}`);if(!o.token)throw console.error("Login response successful, but no token received:",o),new Error("Login successful, but no authentication token was provided by the server.");return localStorage.setItem("authToken",o.token),n&&(n.textContent="Login successful! Redirecting...",n.style.color="green"),o}catch(r){throw r.message==="Failed to fetch"&&(r.message="Connection failed. Is the backend server running?"),console.error("Login error (from auth.js):",r.message),n&&(n.textContent=r.message,n.style.color="red"),r}}async function b3(a,e,n,r){const o=document.getElementById("reg-outcome");if(n!==r)throw o&&(o.textContent="Passwords don't match!",o.style.color="red"),new Error("Passwords don't match!");try{const u=await fetch(`${am}/api/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,email:e,password:n})}),f=await u.json().catch(()=>({error:"Failed to parse server response."}));if(!u.ok)throw new Error(f.error||f.message||`Registration failed with status: ${u.status}`);return o&&(o.textContent="Registration successful! Redirecting...",o.style.color="green"),f}catch(u){throw u.message==="Failed to fetch"&&(u.message="Connection failed. Is the backend server running?"),o&&(o.textContent=u.message,o.style.color="red"),console.error("Registration error (in auth.js):",u.message),u.message&&console.error("Detailed error:",u),u}}function T3(){const a=localStorage.getItem("authToken");if(!a)return!1;try{const e=JSON.parse(atob(a.split(".")[1]));return new Date(e.exp*1e3)<new Date?(console.log("Token has expired. Logging out."),Rc(),!1):!0}catch(e){return console.error("Failed to parse token, logging out.",e),Rc(),!1}}function A3(){const a=localStorage.getItem("authToken");if(!a)return null;try{const e=JSON.parse(atob(a.split(".")[1]));return console.log(e),{userId:e.userId,username:e.username,email:e.email,isPro:e.isPro,subscriptionPlan:e.subscriptionPlan,expires:new Date(e.exp*1e3),verified:e.emailVerified}}catch{return null}}function Rc(){localStorage.removeItem("authToken"),window.location.href="login",fetch(`${am}/api/logout`,{method:"POST"}).catch(a=>console.error("Logout API error:",a))}function Fp(){const a=document.getElementById("auth-btn");if(!a)return;T3()?(a.innerHTML=`
            

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A63D40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 3H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6"></path>
    <polyline points="7 9 2 12 7 15"></polyline>
    <line x1="14" y1="12" x2="2" y2="12"></line>
</svg>
            Logout
        `,a.onclick=Rc):(a.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3H9a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6"></path>
                <polyline points="10 9 15 12 10 15"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Login
        `,a.onclick=()=>{window.location.href="login"})}document.addEventListener("DOMContentLoaded",()=>{Fp();const a=document.getElementById("auth-btn");a&&a.addEventListener("click",()=>{Fp()})});document.addEventListener("DOMContentLoaded",()=>{Fp();const a=document.getElementById("loginForm");a&&a.addEventListener("submit",async r=>{var f,d;r.preventDefault();const o=(f=document.getElementById("username"))==null?void 0:f.value,u=(d=document.getElementById("password"))==null?void 0:d.value;o&&u&&await M3(o,u)});const e=document.getElementById("registerForm");e&&e.addEventListener("submit",async r=>{var m,h,g,_;r.preventDefault();const o=(m=document.getElementById("reg-username"))==null?void 0:m.value,u=(h=document.getElementById("reg-email"))==null?void 0:h.value,f=(g=document.getElementById("reg-password"))==null?void 0:g.value,d=(_=document.getElementById("reg-confirm-password"))==null?void 0:_.value;o&&u&&f&&d&&await b3(o,u,f,d)});const n=document.getElementById("logout-btn");n&&n.addEventListener("click",Rc)});async function R3(a){try{const e=A3(),n={userId:(e==null?void 0:e.userId)||null,makes:a.makes,misses:a.misses,longest_streak:a.longest_streak,average_angle:a.average_angle,average_make_angle:a.average_make_angle,average_miss_angle:a.average_miss_angle,fg_percentage:a.fg_percentage,shot_angles:a.shot_angles,shots_results:a.shots_results,total_shots:a.total_shots},r=await fetch(`${im}/api/session`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),o=await r.json();r.ok?console.log("Session saved successfully:",o):console.error("Failed to save session:",o.error)}catch(e){console.error("Error saving session:",e)}}async function w3(a){return new Promise((e,n)=>{const r=document.createElement("video");r.preload="metadata",r.onloadedmetadata=()=>{window.URL.revokeObjectURL(r.src),e(r.duration)},r.onerror=()=>{n("Could not load video metadata.")},r.src=URL.createObjectURL(a)})}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),sx=a=>{const e=D3(a);return e.charAt(0).toUpperCase()+e.slice(1)},OS=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),U3=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=oe.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:f,...d},m)=>oe.createElement("svg",{ref:m,...L3,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:OS("lucide",o),...!u&&!U3(d)&&{"aria-hidden":"true"},...d},[...f.map(([h,g])=>oe.createElement(h,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=(a,e)=>{const n=oe.forwardRef(({className:r,...o},u)=>oe.createElement(N3,{ref:u,iconNode:e,className:OS(`lucide-${C3(sx(a))}`,`lucide-${a}`,r),...o}));return n.displayName=sx(a),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],P3=PS("circle-check-big",O3);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],I3=PS("loader-circle",F3),B3=({onDismiss:a,onViewResults:e})=>Me.jsx("div",{className:"popup-overlay",children:Me.jsxs("div",{className:"popup-content glass",style:{border:"1px solid rgba(255, 255, 255, 0.3)",padding:"2rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem",maxWidth:"400px",width:"90%"},children:[Me.jsx("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"50%",padding:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:Me.jsx(P3,{size:48,color:"#ffffff"})}),Me.jsxs("div",{style:{textAlign:"center"},children:[Me.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"0.5rem",color:"white"},children:"Analysis Complete!"}),Me.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)"},children:"Your basketball shots have been analyzed successfully."})]}),Me.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%"},children:[Me.jsx("button",{onClick:a,style:{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid rgba(255, 255, 255, 0.3)",background:"transparent",color:"white",cursor:"pointer",fontSize:"1rem",transition:"background 0.2s"},children:"Dismiss"}),Me.jsx("button",{onClick:e,style:{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"none",background:"white",color:"#ff5805",fontWeight:"bold",cursor:"pointer",fontSize:"1rem",transition:"transform 0.1s"},children:"View Results"})]})]})}),z3=({onDismiss:a,progress:e})=>{const n=e<100;return Me.jsxs("div",{className:"popup-overlay",style:{zIndex:1e3},children:[Me.jsxs("div",{className:"popup-content glass",style:{border:"1px solid rgba(255, 255, 255, 0.3)",padding:"2rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem",maxWidth:"400px",width:"90%"},children:[Me.jsx("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"50%",padding:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:Me.jsx(I3,{size:48,color:"#ffffff",className:"animate-spin",style:{animation:"spin 2s linear infinite"}})}),Me.jsxs("div",{style:{textAlign:"center",width:"100%"},children:[Me.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"0.5rem",color:"white"},children:n?`Uploading Video: ${e||0}%`:"Processing Video..."}),n&&Me.jsx("div",{style:{width:"100%",height:"8px",backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"4px",marginTop:"1rem",overflow:"hidden"},children:Me.jsx("div",{style:{width:`${e||0}%`,height:"100%",backgroundColor:"var(--accent-color, #ff5805)",transition:"width 0.3s ease-out"}})}),Me.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",marginTop:"1rem"},children:n?"Please wait while your video uploads to our servers.":"Your video is being processed in the background. You will be notified when it is done."})]}),Me.jsx("div",{style:{display:"flex",gap:"1rem",width:"100%"},children:Me.jsx("button",{onClick:a,style:{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid rgba(255, 255, 255, 0.3)",background:"white",color:"#ff5805",fontWeight:"bold",cursor:"pointer",fontSize:"1rem",transition:"transform 0.1s"},children:"Got it"})})]}),Me.jsx("style",{children:`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `})]})},ED=()=>Me.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:Me.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})}),MD=()=>Me.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",children:Me.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})}),bD=()=>Me.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",children:Me.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})}),TD=()=>Me.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Me.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),Me.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),H3=()=>Me.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Me.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Me.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),V3=({onClose:a,planName:e,maxDuration:n,actualDuration:r,maxCount:o,reason:u,isGuest:f})=>{const d=zp(),m=()=>{a(),d("/profile?tab=pricing")},h=()=>{a(),d("/login")};return Me.jsx("div",{className:"popup-overlay",onClick:a,children:Me.jsxs("div",{className:"popup-content glass animate-fade-in",onClick:g=>g.stopPropagation(),style:{maxWidth:"450px"},children:[Me.jsx("button",{className:"close-button",onClick:a,"aria-label":"Close",children:Me.jsx(H3,{})}),Me.jsxs("div",{className:"header-section",children:[Me.jsx("div",{className:"gradient-bar-std",style:{background:"var(--accent-color)"}}),Me.jsx("h2",{style:{color:"var(--accent-color)"},children:"Limit Exceeded"}),Me.jsx("p",{className:"subtitle",children:u==="duration"?"This video is too long for your current plan.":"You've reached your analysis limit for this period."})]}),Me.jsxs("div",{className:"stats-indicator glass",style:{margin:"20px 0",padding:"15px"},children:[Me.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[Me.jsx("span",{children:"Current Plan:"}),Me.jsx("span",{style:{fontWeight:"bold"},children:e.charAt(0).toUpperCase()+e.slice(1)})]}),u==="duration"?Me.jsxs(Me.Fragment,{children:[Me.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[Me.jsx("span",{children:"Max Allowed:"}),Me.jsxs("span",{style:{fontWeight:"bold"},children:[n/60," min"]})]}),Me.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"#ff4b4b"},children:[Me.jsx("span",{children:"Video Length:"}),Me.jsxs("span",{style:{fontWeight:"bold"},children:[Math.round(r/60*10)/10," min"]})]})]}):Me.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"#ff4b4b"},children:[Me.jsx("span",{children:"Limit:"}),Me.jsxs("span",{style:{fontWeight:"bold"},children:[o," analyses / ",f?"day":"week"]})]})]}),Me.jsx("p",{style:{color:"var(--text-secondary)",textAlign:"center",marginBottom:"30px"},children:f?"Create a free account to unlock more analyses, or go Pro for unlimited access and advanced metrics!":"Upgrade your plan to increase your limits and unlock elite performance tracking."}),Me.jsxs("div",{className:"button-group",style:{flexDirection:"column",gap:"10px"},children:[f?Me.jsx("button",{className:"analyze-button",onClick:h,style:{width:"100%"},children:"Sign Up / Login"}):Me.jsx("button",{className:"analyze-button",onClick:m,style:{width:"100%"},children:"View Plans & Upgrade"}),Me.jsx("button",{className:"back-button",onClick:a,style:{width:"100%",border:"1px solid rgba(255,255,255,0.1)"},children:"Maybe Later"})]})]})})},G3=()=>{const[a,e]=oe.useState({plan:"guest",limits:{dailyCount:1,weeklyCount:0,maxDuration:60,features:["makes_misses"]},usage:{count:0,remaining:1},loading:!0,error:null}),n=oe.useCallback(async()=>{try{const u=localStorage.getItem("authToken"),f={};u&&(f.Authorization=`Bearer ${u}`);const d=await fetch(`${im}/api/user-limits`,{headers:f});if(!d.ok)throw new Error("Failed to fetch entitlements");const m=await d.json();e({...m,loading:!1,error:null})}catch(u){console.error("Error fetching entitlements:",u),e(f=>({...f,loading:!1,error:u.message}))}},[]);return oe.useEffect(()=>{n()},[n]),{...a,hasFeature:u=>{var f,d;return(d=(f=a.limits)==null?void 0:f.features)==null?void 0:d.includes(u)},canAnalyze:()=>{var u;return((u=a.usage)==null?void 0:u.remaining)>0},refresh:n}},FS=oe.createContext({status:"idle",result:null,error:null,uploadProgress:0,startAnalysis:()=>Promise.resolve()}),AD=()=>{const a=oe.useContext(FS);return a===void 0&&console.error("useAnalysis must be used within an AnalysisProvider"),a},k3=({children:a})=>{const[e,n]=oe.useState("idle"),[r,o]=oe.useState(null),[u,f]=oe.useState(null),[d,m]=oe.useState(!1),[h,g]=oe.useState(!1),[_,x]=oe.useState(!1),[y,E]=oe.useState({planName:"",maxDuration:0,actualDuration:0,isGuest:!0}),[T,S]=oe.useState(0),{limits:v,usage:L,refresh:D}=G3(),N=hr(),P=zp(),B=async(U,k,re,se)=>{var pe,fe;if(L.remaining<=0){E({reason:"count",planName:v.planName||L.plan,maxCount:L.plan==="guest"?v.dailyCount:v.weeklyCount,isGuest:L.plan==="guest"}),x(!0);return}try{const I=await w3(U);if(I>v.maxDuration){E({reason:"duration",planName:v.planName||L.plan,maxDuration:v.maxDuration,actualDuration:I,isGuest:L.plan==="guest"}),x(!0);return}}catch(I){console.error("Duration check failed:",I),f("Could not verify video duration.");return}n("processing"),m(!0),f(null),o(null),S(0);try{const I=new FormData;I.append("video",U),I.append("hoopLeft",JSON.stringify(k)),I.append("hoopRight",JSON.stringify(re)),I.append("showAngle",se);const ie=(await an.post(`${E3}/upload-and-analyze`,I,{onUploadProgress:Ee=>{const O=Math.round(Ee.loaded*100/Ee.total);S(O)}})).data;ie.success?(o(ie.data),n("completed"),N.pathname!=="/results"&&g(!0),sessionStorage.setItem("analysisResults",JSON.stringify(ie.data)),await R3(ie.data),D()):(n("failed"),f(ie.error||"Upload failed"))}catch(I){n("failed");const V=((fe=(pe=I.response)==null?void 0:pe.data)==null?void 0:fe.error)||I.message||"Upload failed";f(V)}},H=()=>{n("idle"),o(null),g(!1)},Q=()=>{m(!1)},A=()=>{H(),P("/results")};return Me.jsxs(FS.Provider,{value:{startAnalysis:B,status:e,error:u,result:r,uploadProgress:T},children:[a,d&&Me.jsx(z3,{onDismiss:Q,progress:T}),h&&e==="completed"&&Me.jsx(B3,{onDismiss:H,onViewResults:A}),_&&Me.jsx(V3,{onClose:()=>x(!1),...y})]})};l1();an.interceptors.request.use(a=>(a.url&&a.url.includes("/api/profile")&&(a.adapter=async()=>({data:{userId:"maciek-demo-01",username:"Maciek Geneja",email:"maciekgeneja@gmail.com",role:"Pro Athlete",isPro:!0,subscriptionPlan:"pro",emailVerified:!0},status:200,statusText:"OK",headers:{},config:a})),a));const X3=oe.lazy(()=>ea(()=>import("./LandingPage-DvSbVinX.js"),__vite__mapDeps([0,1,2,3,4,5]))),W3=oe.lazy(()=>ea(()=>import("./Home-xtPkf4ih.js"),__vite__mapDeps([6,1,2,7,8]))),q3=oe.lazy(()=>ea(()=>import("./Results-SBiGvOPv.js"),__vite__mapDeps([9,1,2,7,8,10,3,4,11]))),Y3=oe.lazy(()=>ea(()=>import("./RegisterPage-DTv0pFVv.js"),__vite__mapDeps([12,1,2,13,8]))),j3=oe.lazy(()=>ea(()=>import("./Login-D4enlZPR.js"),__vite__mapDeps([14,1,2,8,15]))),Z3=oe.lazy(()=>ea(()=>import("./ProfilePage-BQ7PvLYX.js"),__vite__mapDeps([16,1,2,7,8,10,3,17]))),K3=oe.lazy(()=>ea(()=>import("./VerifyEmailPage-Bo7MuoF1.js"),__vite__mapDeps([18,1,2]))),Q3=oe.lazy(()=>ea(()=>import("./VerificationSuccessPage-dY9jcLhq.js"),__vite__mapDeps([19,1,2]))),J3=oe.lazy(()=>ea(()=>import("./ForgotPasswordPage-fDlDom05.js"),__vite__mapDeps([20,1,2,8,15]))),$3=oe.lazy(()=>ea(()=>import("./ResetPasswordPage-CAqivikr.js"),__vite__mapDeps([21,1,2,8,15]))),eD=()=>Me.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"#d64b17",fontSize:"1.2rem",fontWeight:"bold"},children:"Loading..."});function tD(){return oe.useEffect(()=>{const a=e=>{const n=e.clientX,r=e.clientY;document.documentElement.style.setProperty("--mouse-x",`${n}px`),document.documentElement.style.setProperty("--mouse-y",`${r}px`)};return window.addEventListener("mousemove",a),()=>window.removeEventListener("mousemove",a)},[]),Me.jsxs(cb,{basename:"/nothing-but-net",children:[Me.jsx(Cb,{}),Me.jsx("svg",{style:{position:"absolute",width:0,height:0,pointerEvents:"none"},children:Me.jsx("defs",{children:Me.jsxs("filter",{id:"goo",children:[Me.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"8",result:"blur"}),Me.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),Me.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),Me.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-2},children:[Me.jsx(y3,{mouseForce:20,cursorSize:100,isViscous:!1,iterationsPoisson:4,iterationsViscous:4,viscous:30,colors:["#ffd214","#ff5805","#ff4606"],resolution:.2,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,isBounce:!1,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),Me.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.4)",pointerEvents:"none"}})]}),Me.jsx(k3,{children:Me.jsx(oe.Suspense,{fallback:Me.jsx(eD,{}),children:Me.jsxs(HM,{children:[Me.jsx(wi,{path:"/",element:Me.jsx(X3,{})}),Me.jsx(wi,{path:"/dashboard",element:Me.jsx(W3,{})}),Me.jsx(wi,{path:"/results",element:Me.jsx(q3,{})}),Me.jsx(wi,{path:"/register",element:Me.jsx(Y3,{})}),Me.jsx(wi,{path:"/login",element:Me.jsx(j3,{})}),Me.jsx(wi,{path:"/profile",element:Me.jsx(Z3,{})}),Me.jsx(wi,{path:"/verify-email/:token",element:Me.jsx(K3,{})}),Me.jsx(wi,{path:"/verification-success",element:Me.jsx(Q3,{})}),Me.jsx(wi,{path:"/forgot-password",element:Me.jsx(J3,{})}),Me.jsx(wi,{path:"/reset-password/:token",element:Me.jsx($3,{})})]})})})]})}KE.createRoot(document.getElementById("root")).render(Me.jsx(oe.StrictMode,{children:Me.jsx(tD,{})}));export{im as A,H3 as C,ED as E,Ex as L,TD as M,nD as R,MD as U,AD as a,an as b,PS as c,G3 as d,b3 as e,bD as f,A3 as g,I3 as h,T3 as i,Me as j,hr as k,M3 as l,iD as m,Rc as n,oe as r,zp as u};
