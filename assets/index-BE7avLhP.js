(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=a(l);fetch(l.href,u)}})();var Wf={exports:{}},Xo={};var m0;function dS(){if(m0)return Xo;m0=1;var h=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:h,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Xo.Fragment=n,Xo.jsx=a,Xo.jsxs=a,Xo}var g0;function pS(){return g0||(g0=1,Wf.exports=dS()),Wf.exports}var B=pS(),Xf={exports:{}},Ze={};var v0;function mS(){if(v0)return Ze;v0=1;var h=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(R){return R===null||typeof R!="object"?null:(R=S&&R[S]||R["@@iterator"],typeof R=="function"?R:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,A={};function O(R,W,F){this.props=R,this.context=W,this.refs=A,this.updater=F||b}O.prototype.isReactComponent={},O.prototype.setState=function(R,W){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,W,"setState")},O.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function C(){}C.prototype=O.prototype;function U(R,W,F){this.props=R,this.context=W,this.refs=A,this.updater=F||b}var L=U.prototype=new C;L.constructor=U,x(L,O.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function I(){}var w={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function X(R,W,F){var xe=F.ref;return{$$typeof:h,type:R,key:W,ref:xe!==void 0?xe:null,props:F}}function me(R,W){return X(R.type,W,R.props)}function le(R){return typeof R=="object"&&R!==null&&R.$$typeof===h}function $(R){var W={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(F){return W[F]})}var Y=/\/+/g;function oe(R,W){return typeof R=="object"&&R!==null&&R.key!=null?$(""+R.key):W.toString(36)}function Q(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(I,I):(R.status="pending",R.then(function(W){R.status==="pending"&&(R.status="fulfilled",R.value=W)},function(W){R.status==="pending"&&(R.status="rejected",R.reason=W)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function se(R,W,F,xe,Me){var Ee=typeof R;(Ee==="undefined"||Ee==="boolean")&&(R=null);var be=!1;if(R===null)be=!0;else switch(Ee){case"bigint":case"string":case"number":be=!0;break;case"object":switch(R.$$typeof){case h:case n:be=!0;break;case g:return be=R._init,se(be(R._payload),W,F,xe,Me)}}if(be)return Me=Me(R),be=xe===""?"."+oe(R,0):xe,H(Me)?(F="",be!=null&&(F=be.replace(Y,"$&/")+"/"),se(Me,W,F,"",function(Ge){return Ge})):Me!=null&&(le(Me)&&(Me=me(Me,F+(Me.key==null||R&&R.key===Me.key?"":(""+Me.key).replace(Y,"$&/")+"/")+be)),W.push(Me)),1;be=0;var Te=xe===""?".":xe+":";if(H(R))for(var we=0;we<R.length;we++)xe=R[we],Ee=Te+oe(xe,we),be+=se(xe,W,F,Ee,Me);else if(we=E(R),typeof we=="function")for(R=we.call(R),we=0;!(xe=R.next()).done;)xe=xe.value,Ee=Te+oe(xe,we++),be+=se(xe,W,F,Ee,Me);else if(Ee==="object"){if(typeof R.then=="function")return se(Q(R),W,F,xe,Me);throw W=String(R),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return be}function ne(R,W,F){if(R==null)return R;var xe=[],Me=0;return se(R,xe,"","",function(Ee){return W.call(F,Ee,Me++)}),xe}function _e(R){if(R._status===-1){var W=R._result,F=W();F.then(function(xe){(R._status===0||R._status===-1)&&(R._status=1,R._result=xe,F.status===void 0&&(F.status="fulfilled",F.value=xe))},function(xe){(R._status===0||R._status===-1)&&(R._status=2,R._result=xe,F.status===void 0&&(F.status="rejected",F.reason=xe))}),R._status===-1&&(R._status=0,R._result=F)}if(R._status===1)return R._result.default;throw R._result}var de=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function Le(R){var W=w.T,F={};F.types=W!==null?W.types:null,w.T=F;try{var xe=R(),Me=w.S;Me!==null&&Me(F,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(I,de)}catch(Ee){de(Ee)}finally{W!==null&&F.types!==null&&(W.types=F.types),w.T=W}}function re(R){var W=w.T;if(W!==null){var F=W.types;F===null?W.types=[R]:F.indexOf(R)===-1&&F.push(R)}else Le(re.bind(null,R))}var ge={map:ne,forEach:function(R,W,F){ne(R,function(){W.apply(this,arguments)},F)},count:function(R){var W=0;return ne(R,function(){W++}),W},toArray:function(R){return ne(R,function(W){return W})||[]},only:function(R){if(!le(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return Ze.Activity=p,Ze.Children=ge,Ze.Component=O,Ze.Fragment=a,Ze.Profiler=l,Ze.PureComponent=U,Ze.StrictMode=s,Ze.Suspense=m,Ze.ViewTransition=_,Ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,Ze.__COMPILER_RUNTIME={__proto__:null,c:function(R){return w.H.useMemoCache(R)}},Ze.addTransitionType=re,Ze.cache=function(R){return function(){return R.apply(null,arguments)}},Ze.cacheSignal=function(){return null},Ze.cloneElement=function(R,W,F){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var xe=x({},R.props),Me=R.key;if(W!=null)for(Ee in W.key!==void 0&&(Me=""+W.key),W)!P.call(W,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&W.ref===void 0||(xe[Ee]=W[Ee]);var Ee=arguments.length-2;if(Ee===1)xe.children=F;else if(1<Ee){for(var be=Array(Ee),Te=0;Te<Ee;Te++)be[Te]=arguments[Te+2];xe.children=be}return X(R.type,Me,xe)},Ze.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},Ze.createElement=function(R,W,F){var xe,Me={},Ee=null;if(W!=null)for(xe in W.key!==void 0&&(Ee=""+W.key),W)P.call(W,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Me[xe]=W[xe]);var be=arguments.length-2;if(be===1)Me.children=F;else if(1<be){for(var Te=Array(be),we=0;we<be;we++)Te[we]=arguments[we+2];Me.children=Te}if(R&&R.defaultProps)for(xe in be=R.defaultProps,be)Me[xe]===void 0&&(Me[xe]=be[xe]);return X(R,Ee,Me)},Ze.createRef=function(){return{current:null}},Ze.forwardRef=function(R){return{$$typeof:f,render:R}},Ze.isValidElement=le,Ze.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:_e}},Ze.memo=function(R,W){return{$$typeof:v,type:R,compare:W===void 0?null:W}},Ze.startTransition=Le,Ze.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},Ze.use=function(R){return w.H.use(R)},Ze.useActionState=function(R,W,F){return w.H.useActionState(R,W,F)},Ze.useCallback=function(R,W){return w.H.useCallback(R,W)},Ze.useContext=function(R){return w.H.useContext(R)},Ze.useDebugValue=function(){},Ze.useDeferredValue=function(R,W){return w.H.useDeferredValue(R,W)},Ze.useEffect=function(R,W){return w.H.useEffect(R,W)},Ze.useEffectEvent=function(R){return w.H.useEffectEvent(R)},Ze.useId=function(){return w.H.useId()},Ze.useImperativeHandle=function(R,W,F){return w.H.useImperativeHandle(R,W,F)},Ze.useInsertionEffect=function(R,W){return w.H.useInsertionEffect(R,W)},Ze.useLayoutEffect=function(R,W){return w.H.useLayoutEffect(R,W)},Ze.useMemo=function(R,W){return w.H.useMemo(R,W)},Ze.useOptimistic=function(R,W){return w.H.useOptimistic(R,W)},Ze.useReducer=function(R,W,F){return w.H.useReducer(R,W,F)},Ze.useRef=function(R){return w.H.useRef(R)},Ze.useState=function(R){return w.H.useState(R)},Ze.useSyncExternalStore=function(R,W,F){return w.H.useSyncExternalStore(R,W,F)},Ze.useTransition=function(){return w.H.useTransition()},Ze.version="19.3.0",Ze}var y0;function Zd(){return y0||(y0=1,Xf.exports=mS()),Xf.exports}var _t=Zd(),Yf={exports:{}},Yo={},Zf={exports:{}},Qf={};var _0;function gS(){return _0||(_0=1,(function(h){function n(Q,se){var ne=Q.length;Q.push(se);e:for(;0<ne;){var _e=ne-1>>>1,de=Q[_e];if(0<l(de,se))Q[_e]=se,Q[ne]=de,ne=_e;else break e}}function a(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var se=Q[0],ne=Q.pop();if(ne!==se){Q[0]=ne;e:for(var _e=0,de=Q.length,Le=de>>>1;_e<Le;){var re=2*(_e+1)-1,ge=Q[re],R=re+1,W=Q[R];if(0>l(ge,ne))R<de&&0>l(W,ge)?(Q[_e]=W,Q[R]=ne,_e=R):(Q[_e]=ge,Q[re]=ne,_e=re);else if(R<de&&0>l(W,ne))Q[_e]=W,Q[R]=ne,_e=R;else break e}}return se}function l(Q,se){var ne=Q.sortIndex-se.sortIndex;return ne!==0?ne:Q.id-se.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;h.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();h.unstable_now=function(){return d.now()-f}}var m=[],v=[],g=1,p=null,_=3,S=!1,E=!1,b=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function U(Q){for(var se=a(v);se!==null;){if(se.callback===null)s(v);else if(se.startTime<=Q)s(v),se.sortIndex=se.expirationTime,n(m,se);else break;se=a(v)}}function L(Q){if(b=!1,U(Q),!E)if(a(m)!==null)E=!0,H||(H=!0,le());else{var se=a(v);se!==null&&oe(L,se.startTime-Q)}}var H=!1,I=-1,w=5,P=-1;function X(){return x?!0:!(h.unstable_now()-P<w)}function me(){if(x=!1,H){var Q=h.unstable_now();P=Q;var se=!0;try{e:{E=!1,b&&(b=!1,O(I),I=-1),S=!0;var ne=_;try{t:{for(U(Q),p=a(m);p!==null&&!(p.expirationTime>Q&&X());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,_=p.priorityLevel;var de=_e(p.expirationTime<=Q);if(Q=h.unstable_now(),typeof de=="function"){p.callback=de,U(Q),se=!0;break t}p===a(m)&&s(m),U(Q)}else s(m);p=a(m)}if(p!==null)se=!0;else{var Le=a(v);Le!==null&&oe(L,Le.startTime-Q),se=!1}}break e}finally{p=null,_=ne,S=!1}se=void 0}}finally{se?le():H=!1}}}var le;if(typeof C=="function")le=function(){C(me)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Y=$.port2;$.port1.onmessage=me,le=function(){Y.postMessage(null)}}else le=function(){A(me,0)};function oe(Q,se){I=A(function(){Q(h.unstable_now())},se)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(Q){Q.callback=null},h.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Q?Math.floor(1e3/Q):5},h.unstable_getCurrentPriorityLevel=function(){return _},h.unstable_next=function(Q){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var ne=_;_=se;try{return Q()}finally{_=ne}},h.unstable_requestPaint=function(){x=!0},h.unstable_runWithPriority=function(Q,se){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ne=_;_=Q;try{return se()}finally{_=ne}},h.unstable_scheduleCallback=function(Q,se,ne){var _e=h.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,Q){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ne+de,Q={id:g++,callback:se,priorityLevel:Q,startTime:ne,expirationTime:de,sortIndex:-1},ne>_e?(Q.sortIndex=ne,n(v,Q),a(m)===null&&Q===a(v)&&(b?(O(I),I=-1):b=!0,oe(L,ne-_e))):(Q.sortIndex=de,n(m,Q),E||S||(E=!0,H||(H=!0,le()))),Q},h.unstable_shouldYield=X,h.unstable_wrapCallback=function(Q){var se=_;return function(){var ne=_;_=se;try{return Q.apply(this,arguments)}finally{_=ne}}}})(Qf)),Qf}var x0;function vS(){return x0||(x0=1,Zf.exports=gS()),Zf.exports}var Kf={exports:{}},Mn={};var b0;function yS(){if(b0)return Mn;b0=1;var h=Zd();function n(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function f(g,p,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===d?d:""+S,children:g,containerInfo:p,implementation:_}}var m=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.browser=function(g){return{$$typeof:u,_reason:g}},Mn.createPortal=function(g,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return f(g,p,null,_)},Mn.flushSync=function(g){var p=m.T,_=s.p;try{if(m.T=null,s.p=2,g)return g()}finally{m.T=p,s.p=_,s.d.f()}},Mn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Mn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Mn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var _=p.as,S=v(_,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:b}):_==="script"&&s.d.X(g,{crossOrigin:S,integrity:E,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=v(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(g)},Mn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,S=v(_,p.crossOrigin);s.d.L(g,_,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(g,p){if(typeof g=="string")if(p){var _=v(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(g)},Mn.requestFormReset=function(g){s.d.r(g)},Mn.unstable_batchedUpdates=function(g,p){return g(p)},Mn.useFormState=function(g,p,_){return m.H.useFormState(g,p,_)},Mn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Mn.version="19.3.0",Mn}var S0;function _S(){if(S0)return Kf.exports;S0=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(n){console.error(n)}}return h(),Kf.exports=yS(),Kf.exports}var M0;function xS(){if(M0)return Yo;M0=1;var h=vS(),n=Zd(),a=_S();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var t=e,i=t;i&&!i.alternate;)t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,r=t;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){i=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return m(o),e;if(c===r)return m(o),t;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=o,r=c;else{for(var y=!1,T=o.child;T;){if(T===i){y=!0,i=o,r=c;break}if(T===r){y=!0,r=o,i=c;break}T=T.sibling}if(!y){for(T=c.child;T;){if(T===i){y=!0,i=c,r=o;break}if(T===r){y=!0,r=c,i=o;break}T=T.sibling}if(!y)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}function p(e,t,i,r,o,c){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&i(e,r,o,c)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&p(e.child,t,i,r,o,c))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function E(e){var t=[null,null],i=_(e);return i===null||b(t,e,i.child,{foundSelf:!1}),t}function b(e,t,i,r){for(;i!==null;){if(i===t)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return e[1]=i,!0;e[0]=i}else if((i.tag!==22||i.memoizedState===null)&&b(e,t,i.child,r))return!0;i=i.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var A=null,O=null;function C(e,t,i){return e===i?!0:e===t?(A=e,!0):!1}function U(e,t,i){return e===i?(O=e,!1):e===t?(O!==null&&(A=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function H(e,t,i){for(var r=0,o=e;o;o=i(o))r++;o=0;for(var c=t;c;c=i(c))o++;for(;0<r-o;)e=i(e),r--;for(;0<o-r;)t=i(t),o--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=i(e),t=i(t)}return null}var I=Object.assign,w=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),ge=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),W=Symbol.for("react.recoverable"),F=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Symbol.for("react.client.reference");function Ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case $:return"Profiler";case le:return"StrictMode";case se:return"Suspense";case ne:return"SuspenseList";case Le:return"Activity";case R:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case oe:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return t=e.displayName||null,t!==null?t:Ee(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return Ee(e(t))}catch{}}return null}var be=Array.isArray,Te=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ge={pending:!1,data:null,method:null,action:null},kt=[],Wt=-1;function xt(e){return{current:e}}function pt(e){0>Wt||(e.current=kt[Wt],kt[Wt]=null,Wt--)}function We(e,t){Wt++,kt[Wt]=e.current,e.current=t}var Qe=xt(null),mn=xt(null),Et=xt(null),N=xt(null);function M(e,t){switch(We(Et,t),We(mn,e),We(Qe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tv(t),e=wv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(Qe),We(Qe,e)}function ee(){pt(Qe),pt(mn),pt(Et)}function ve(e){var t=e.memoizedState;t!==null&&(Ms._currentValue=t.memoizedState,We(N,e)),t=Qe.current;var i=wv(t,e.type);t!==i&&(We(mn,e),We(Qe,i))}function Ae(e){mn.current===e&&(pt(Qe),pt(mn)),N.current===e&&(pt(N),Ms._currentValue=Ge)}var Ne,Xe;function Re(e){if(Ne===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Ne=t&&t[1]||"",Xe=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+e+Xe}var ye=!1;function Fe(e,t){if(!e||ye)return"";ye=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(Ce){var k=Ce}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(Ce){k=Ce}fe=!1;try{var te=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),fe=!0,new e}finally{fe&&(te!==void 0?Object.defineProperty(e.prototype,"props",te):delete e.prototype.props)}}}else{try{throw Error()}catch(Ce){k=Ce}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(Ce){if(Ce&&k&&typeof Ce.stack=="string")return[Ce.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),y=c[0],T=c[1];if(y&&T){var z=y.split(`
`),j=T.split(`
`);for(o=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;if(r===z.length||o===j.length)for(r=z.length-1,o=j.length-1;1<=r&&0<=o&&z[r]!==j[o];)o--;for(;1<=r&&0<=o;r--,o--)if(z[r]!==j[o]){if(r!==1||o!==1)do if(r--,o--,0>o||z[r]!==j[o]){var ie=`
`+z[r].replace(" at new "," at ");return e.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",e.displayName)),ie}while(1<=r&&0<=o);break}}}finally{ye=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Re(i):""}function je(e,t){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==t&&t!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return Fe(e.type,!1);case 11:return Fe(e.type.render,!1);case 1:return Fe(e.type,!0);case 31:return Re("Activity");case 30:return Re("ViewTransition");default:return""}}function Be(e){try{var t="",i=null;do t+=je(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ke=Object.prototype.hasOwnProperty,Ve=h.unstable_scheduleCallback,lt=h.unstable_cancelCallback,Rt=h.unstable_shouldYield,Qt=h.unstable_requestPaint,V=h.unstable_now,he=h.unstable_getCurrentPriorityLevel,Se=h.unstable_ImmediatePriority,ze=h.unstable_UserBlockingPriority,Pe=h.unstable_NormalPriority,mt=h.unstable_LowPriority,Xt=h.unstable_IdlePriority,cn=h.log,Yi=h.unstable_setDisableYieldValue,bt=null,It=null;function Yt(e){if(typeof cn=="function"&&Yi(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(bt,e)}catch{}}var Tn=Math.clz32?Math.clz32:xu,yu=Math.log,_u=Math.LN2;function xu(e){return e>>>=0,e===0?32:31-(yu(e)/_u|0)|0}var D=256,ae=262144,ce=4194304;function J(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var o=0,c=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~c,r!==0?o=J(r):(y&=T,y!==0?o=J(y):i||(i=T&~e,i!==0&&(o=J(i))))):(T=r&~c,T!==0?o=J(T):y!==0?o=J(y):i||(i=r&~e,i!==0&&(o=J(i)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,i=t&-t,c>=i||c===32&&(i&4194048)!==0)?t:o}function Ie(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Tn(i),o=1<<r;t|=e[r],i&=~o}return t}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=ce;return ce<<=1,(ce&62914560)===0&&(ce=4194304),e}function ct(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ut(e,t,i,r,o,c){var y=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,j=e.hiddenUpdates;for(i=y&~i;0<i;){var ie=31-Tn(i),fe=1<<ie;T[ie]=0,z[ie]=-1;var k=j[ie];if(k!==null)for(j[ie]=null,ie=0;ie<k.length;ie++){var te=k[ie];te!==null&&(te.lane&=-536870913)}i&=~fe}r!==0&&Ht(e,r,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(y&~t))}function Ht(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Tn(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function wn(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Tn(i),o=1<<r;o&t|e[r]&t&&(e[r]|=t),i&=~o}}function si(e,t){var i=t&-t;return i=(i&42)!==0?1:_i(i),(i&(e.suspendedLanes|t))!==0?0:i}function _i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rt(){var e=we.p;return e!==0?e:(e=window.event,e===void 0?32:l0(e.type))}function Or(e,t){var i=we.p;try{return we.p=e,t()}finally{we.p=i}}var At=Math.random().toString(36).slice(2),Ot="__reactFiber$"+At,gn="__reactProps$"+At,oi="__reactContainer$"+At,Ur="__reactEvents$"+At,vn="__reactListeners$"+At,Zi="__reactHandles$"+At,Br="__reactResources$"+At,nn="__reactMarker$"+At,va="__reactLoad$"+At;function Pr(e){delete e[Ot],delete e[gn],delete e[vn],delete e[Zi]}function Ni(e){var t;if(t=e[Ot])return t;for(var i=e.parentNode;i;){if(t=i[oi]||i[Ot]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Fv(e);e!==null;){if(i=e[Ot])return i;e=Fv(e)}return t}e=i,i=e.parentNode}return null}function Gr(e){if(e=e[Ot]||e[oi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function io(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ir(e){var t=e[Br];return t||(t=e[Br]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function un(e){e[nn]=!0}function rp(e){e[va]=void 0}var sp=new Set,op={};function $a(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(op[e]=t,e=0;e<t.length;e++)sp.add(t[e])}var L_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lp={},cp={};function N_(e){return ke.call(cp,e)?!0:ke.call(lp,e)?!1:L_.test(e)?cp[e]=!0:(lp[e]=!0,!1)}var gt=!1;function up(){var e=gt;return gt=!1,e}function yl(e,t,i){if(N_(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,i)}}function _l(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,i)}}function Qi(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,r)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z_(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(y){i=""+y,c.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bu(e){if(!e._valueTracker){var t=hp(e)?"checked":"value";e._valueTracker=z_(e,t,""+e[t])}}function fp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=hp(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}var O_=/[\n"\\]/g;function li(e){return e.replace(O_,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Su(e,t,i,r,o,c,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?y==="number"&&e.value==t?Mu(e,qn(e.value)):Mu(e,qn(t)):i!=null?Mu(e,qn(i)):r!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+qn(T):e.removeAttribute("name")}function dp(e,t,i,r,o,c,y,T){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){bu(e);return}i=i!=null?""+qn(i):"",t=t!=null?""+qn(t):i,T||t===e.value||(e.value=t),e.defaultValue=t}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),bu(e)}function Mu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Vr(e,t,i,r){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&r&&(e[i].defaultSelected=!0)}else{for(i=""+qn(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pp(e,t,i){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+qn(i):""}function mp(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(s(92));if(be(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=qn(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),bu(e)}function Fr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var U_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gp(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||U_.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function vp(e,t,i){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",gt=!0);for(var o in t)r=t[o],t.hasOwnProperty(o)&&i[o]!==r&&(gp(e,o,r),gt=!0)}else for(var c in t)t.hasOwnProperty(c)&&gp(e,c,t[c])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return P_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zi(){}var wu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kr=null,qr=null;function yp(e){var t=Gr(e);if(t&&(e=t.stateNode)){var i=e[gn]||null;e:switch(e=t.stateNode,t.type){case"input":if(Su(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var o=r[gn]||null;if(!o)throw Error(s(90));Su(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&fp(r)}break e;case"textarea":pp(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Vr(e,!!i.multiple,t,!1)}}}var Au=!1;function _p(e,t,i){if(Au)return e(t,i);Au=!0;try{var r=e(t);return r}finally{if(Au=!1,(kr!==null||qr!==null)&&(xc(),kr&&(t=kr,e=qr,qr=kr=null,yp(t),e)))for(t=0;t<e.length;t++)yp(e[t])}}function ao(e,t){var i=e.stateNode;if(i===null)return null;var r=i[gn]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(Ki)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Cu=!1}var ya=null,Du=null,bl=null;function xp(){if(bl)return bl;var e,t=Du,i=t.length,r,o="value"in ya?ya.value:ya.textContent,c=o.length;for(e=0;e<i&&t[e]===o[e];e++);var y=i-e;for(r=1;r<=y&&t[i-r]===o[c-r];r++);return bl=o.slice(e,1<r?1-r:void 0)}function Sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function bp(){return!1}function Cn(e){function t(i,r,o,c,y){this._reactName=i,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(i=e[T],this[T]=i?i(c):c[T]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ml:bp,this.isPropagationStopped=bp,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),t}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Cn(_a),so=I({},_a,{view:0,detail:0}),G_=Cn(so),Ru,Lu,oo,wl=I({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Ru=e.screenX-oo.screenX,Lu=e.screenY-oo.screenY):Lu=Ru=0,oo=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),Sp=Cn(wl),I_=I({},wl,{dataTransfer:0}),H_=Cn(I_),V_=I({},so,{relatedTarget:0}),Nu=Cn(V_),F_=I({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=Cn(F_),q_=I({},_a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j_=Cn(q_),W_=I({},_a,{data:0}),Mp=Cn(W_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z_[e])?!!t[e]:!1}function zu(){return Q_}var K_=I({},so,{key:function(e){if(e.key){var t=X_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J_=Cn(K_),$_=I({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Cn($_),ex=I({},_a,{submitter:0}),tx=Cn(ex),nx=I({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),ix=Cn(nx),ax=I({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=Cn(ax),sx=I({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Cn(sx),lx=I({},_a,{newState:0,oldState:0,source:0}),cx=Cn(lx),ux=[9,13,27,32],Ou=Ki&&"CompositionEvent"in window,lo=null;Ki&&"documentMode"in document&&(lo=document.documentMode);var hx=Ki&&"TextEvent"in window&&!lo,wp=Ki&&(!Ou||lo&&8<lo&&11>=lo),Ep=" ",Ap=!1;function Cp(e,t){switch(e){case"keyup":return ux.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function fx(e,t){switch(e){case"compositionend":return Dp(t);case"keypress":return t.which!==32?null:(Ap=!0,Ep);case"textInput":return e=t.data,e===Ep&&Ap?null:e;default:return null}}function dx(e,t){if(jr)return e==="compositionend"||!Ou&&Cp(e,t)?(e=xp(),bl=Du=ya=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wp&&t.locale!=="ko"?null:t.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!px[e.type]:t==="textarea"}function Lp(e,t,i,r){kr?qr?qr.push(r):qr=[r]:kr=r,t=Ec(t,"onChange"),0<t.length&&(i=new Tl("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var co=null,uo=null;function mx(e){yv(e,0)}function El(e){var t=io(e);if(fp(t))return e}function Np(e,t){if(e==="change")return t}var zp=!1;if(Ki){var Uu;if(Ki){var Bu="oninput"in document;if(!Bu){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Bu=typeof Op.oninput=="function"}Uu=Bu}else Uu=!1;zp=Uu&&(!document.documentMode||9<document.documentMode)}function Up(){co&&(co.detachEvent("onpropertychange",Bp),uo=co=null)}function Bp(e){if(e.propertyName==="value"&&El(uo)){var t=[];Lp(t,uo,e,Eu(e)),_p(mx,t)}}function gx(e,t,i){e==="focusin"?(Up(),co=t,uo=i,co.attachEvent("onpropertychange",Bp)):e==="focusout"&&Up()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(uo)}function yx(e,t){if(e==="click")return El(t)}function _x(e,t){if(e==="input"||e==="change")return El(t)}function xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:xx;function ho(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var o=i[r];if(!ke.call(t,o)||!jn(e[o],t[o]))return!1}return!0}function Pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,t){var i=Pp(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Pp(i)}}function Ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pu(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Pu(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bx=Ki&&"documentMode"in document&&11>=document.documentMode,Wr=null,Iu=null,fo=null,Hu=!1;function Vp(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Hu||Wr==null||Wr!==Pu(r)||(r=Wr,"selectionStart"in r&&Gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fo&&ho(fo,r)||(fo=r,r=Ec(Iu,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=Wr)))}function er(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Xr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Vu={},Fp={};Ki&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function tr(e){if(Vu[e])return Vu[e];if(!Xr[e])return e;var t=Xr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Fp)return Vu[e]=t[i];return e}var kp=tr("animationend"),qp=tr("animationiteration"),jp=tr("animationstart"),Sx=tr("transitionrun"),Mx=tr("transitionstart"),Tx=tr("transitioncancel"),Wp=tr("transitionend"),Xp=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function xi(e,t){Xp.set(e,t),$a(t,[e])}var wx=0;function Ji(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ti.identifierPrefix;var i=wx++;return e="_"+e+"t_"+i.toString(32)+"_",t.autoName=e}function Yp(e){if(e==null||typeof e=="string")return e;var t=null,i=ds;if(i!==null)for(var r=0;r<i.length;r++){var o=e[i[r]];if(o!=null){if(o==="none")return"none";t=t==null?o:t+(" "+o)}}return t??e.default}function $i(e,t){return e=Yp(e),t=Yp(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Yr=0,ku=0;function Cl(){for(var e=Yr,t=ku=Yr=0;t<e;){var i=ci[t];ci[t++]=null;var r=ci[t];ci[t++]=null;var o=ci[t];ci[t++]=null;var c=ci[t];if(ci[t++]=null,r!==null&&o!==null){var y=r.pending;y===null?o.next=o:(o.next=y.next,y.next=o),r.pending=o}c!==0&&Zp(i,o,c)}}function Dl(e,t,i,r){ci[Yr++]=e,ci[Yr++]=t,ci[Yr++]=i,ci[Yr++]=r,ku|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function qu(e,t,i,r){return Dl(e,t,i,r),Rl(e)}function nr(e,t){return Dl(e,null,null,t),Rl(e)}function Zp(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var o=!1,c=e.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-Tn(i),e=c.hiddenUpdates,r=e[o],r===null?e[o]=[t]:r.push(t),t.lane=i|536870912),c):null}function Rl(e){if(50<Uo)throw Uo=0,_c=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zr={};function Ex(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,t,i,r){return new Ex(e,t,i,r)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,t){var i=e.alternate;return i===null?(i=Bn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&1206910976,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Qp(e,t){e.flags&=1206910978;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ll(e,t,i,r,o,c){var y=0;if(r=e,typeof r=="function")ju(r)&&(y=1);else if(typeof r=="string")y=eS(e,i,Qe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Le:return e=Bn(31,i,t,o),e.elementType=Le,e.lanes=c,e;case me:return ir(i.children,o,c,t);case le:y=8,o|=24;break;case $:return e=Bn(12,i,t,o|2),e.elementType=$,e.lanes=c,e;case se:return e=Bn(13,i,t,o),e.elementType=se,e.lanes=c,e;case ne:return e=Bn(19,i,t,o),e.elementType=ne,e.lanes=c,e;case re:case R:return e=o|32,e=Bn(30,i,t,e),e.elementType=R,e.lanes=c,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case oe:y=10;break e;case Y:y=9;break e;case Q:y=11;break e;case _e:y=14;break e;case de:y=16,r=null;break e}y=29,i=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Bn(y,i,t,o),t.elementType=e,t.type=r,t.lanes=c,t}function ir(e,t,i,r){return e=Bn(7,e,r,t),e.lanes=i,e}function Wu(e,t,i){return e=Bn(6,e,null,t),e.lanes=i,e}function Kp(e){var t=Bn(18,null,null,0);return t.stateNode=e,t}function Xu(e,t,i){return t=Bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jp=new WeakMap;function ui(e,t){if(typeof e=="object"&&e!==null){var i=Jp.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Be(t)},Jp.set(e,t),t)}return{value:e,source:t,stack:Be(t)}}var Qr=[],Kr=0,Nl=null,po=0,hi=[],fi=0,xa=null,Oi=1,Ui="";function ta(e,t){Qr[Kr++]=po,Qr[Kr++]=Nl,Nl=e,po=t}function $p(e,t,i){hi[fi++]=Oi,hi[fi++]=Ui,hi[fi++]=xa,xa=e;var r=Oi;e=Ui;var o=32-Tn(r)-1;r&=~(1<<o),i+=1;var c=32-Tn(t)+o;if(30<c){var y=o-o%5;c=(r&(1<<y)-1).toString(32),r>>=y,o-=y,Oi=1<<32-Tn(t)+o|i<<o|r,Ui=c+e}else Oi=1<<c|i<<o|r,Ui=e}function zl(e){e.return!==null&&(ta(e,1),$p(e,1,0))}function Yu(e){for(;e===Nl;)Nl=Qr[--Kr],Qr[Kr]=null,po=Qr[--Kr],Qr[Kr]=null;for(;e===xa;)xa=hi[--fi],hi[fi]=null,Ui=hi[--fi],hi[fi]=null,Oi=hi[--fi],hi[fi]=null}function em(e,t){hi[fi++]=Oi,hi[fi++]=Ui,hi[fi++]=xa,Oi=t.id,Ui=t.overflow,xa=e}var hn=null,Lt=null,nt=!1,ba=null,di=!1,Zu=Error(s(519));function Sa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(ui(t,e)),Zu}function tm(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[Ot]=e,t[gn]=r,i){case"dialog":ot("cancel",t),ot("close",t);break;case"iframe":case"object":case"embed":ot("load",t);break;case"video":case"audio":for(i=0;i<Po.length;i++)ot(Po[i],t);break;case"source":ot("error",t);break;case"img":case"image":case"link":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"input":ot("invalid",t),dp(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ot("invalid",t);break;case"textarea":ot("invalid",t),mp(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||Sv(t.textContent,i)?(r.popover!=null&&(ot("beforetoggle",t),ot("toggle",t)),r.onScroll!=null&&ot("scroll",t),r.onScrollEnd!=null&&ot("scrollend",t),r.onClick!=null&&(t.onclick=zi),t=!0):t=!1,t||Sa(e,!0)}function Ol(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:hn=hn.return}}function Jr(e){if(e!==hn)return!1;if(!nt)return Ol(e),nt=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Ef(e.type,e.memoizedProps)),i=!i),i&&Lt&&Sa(e),Ol(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Lt=Vv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Lt=Vv(e)}else t===27?(t=Lt,Ga(e.type)?(e=Uf,Uf=null,Lt=e):Lt=t):Lt=hn?mi(e.stateNode.nextSibling):null;return!0}function ar(){Lt=hn=null,nt=!1}function Qu(){var e=ba;return e!==null&&(In===null?In=e:In.push.apply(In,e),ba=null),e}function mo(e){ba===null?ba=[e]:ba.push(e)}var Ku=xt(null),rr=null,na=null;function Ma(e,t,i){We(Ku,t._currentValue),t._currentValue=i}function ia(e){e._currentValue=Ku.current,pt(Ku)}function Ul(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function Ju(e,t,i,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var y=o.child;c=c.firstContext;e:for(;c!==null;){var T=c;c=o;for(var z=0;z<t.length;z++)if(T.context===t[z]){c.lanes|=i,T=c.alternate,T!==null&&(T.lanes|=i),Ul(c.return,i,e),r||(y=null);break e}c=T.next}}else if(o.tag===18){if(y=o.return,y===null)throw Error(s(341));y.lanes|=i,c=y.alternate,c!==null&&(c.lanes|=i),Ul(y,i,e),y=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=i,y=o.alternate,y!==null&&(y.lanes|=i),Ul(o.return,i,e),y=o.child,y=y!==null?y.sibling:null):y=o.child;if(y!==null)y.return=o;else for(y=o;y!==null;){if(y===e){y=null;break}if(o=y.sibling,o!==null){o.return=y.return,y=o;break}y=y.return}o=y}}function sr(e,t,i,r){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var y=o.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=o.type;jn(o.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(o===N.current){if(y=o.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ms):e=[Ms])}o=o.return}return e!==null&&Ju(t,e,i,r),t.flags|=262144,e!==null}function Bl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){rr=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return nm(rr,e)}function Pl(e,t){return rr===null&&or(e),nm(e,t)}function nm(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},na===null){if(e===null)throw Error(s(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return i}var Ax=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Cx=h.unstable_scheduleCallback,Dx=h.unstable_NormalPriority,Kt={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new Ax,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&Cx(Dx,function(){e.controller.abort()})}function im(e,t){if((e.pendingLanes&4194048)!==0){var i=e.transitionTypes;for(i===null&&(i=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];i.indexOf(r)===-1&&i.push(r)}}}var vo=null;function Rx(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var yo=null,eh=0,lr=0,$r=null;function Lx(e,t){if(yo===null){var i=yo=[];eh=0,lr=vf(),$r={status:"pending",value:void 0,then:function(r){i.push(r)}}}return eh++,t.then(am,am),t}function am(){if(--eh===0&&(vo=null,yo!==null)){$r!==null&&($r.status="fulfilled");var e=yo;yo=null,lr=0,$r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nx(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var o=0;o<i.length;o++)(0,i[o])(t)},function(o){for(r.status="rejected",r.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),r}var rm=Te.S;Te.S=function(e,t){if(Kg=V(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lx(e,t),vo!==null)for(var i=vs;i!==null;)im(i,vo),i=i.next;if(i=e.types,i!==null){for(var r=vs;r!==null;)im(r,i),r=r.next;if(lr!==0){r=vo,r===null&&(r=vo=[]);for(var o=0;o<i.length;o++){var c=i[o];r.indexOf(c)===-1&&r.push(c)}}}rm!==null&&rm(e,t)};var cr=xt(null);function th(){var e=cr.current;return e!==null?e:Dt.pooledCache}function Gl(e,t){t===null?We(cr,cr.current):We(cr,t.pool)}function sm(){var e=th();return e===null?null:{parent:Kt._currentValue,pool:e}}var es=Error(s(460)),nh=Error(s(474)),Il=Error(s(542)),Hl={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lm(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(zi,zi),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,um(e),e===void 0&&!("reason"in t)?Error(s(600)):e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=Dt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=r}},function(r){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,um(e),e}throw hr=t,es}}function ur(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(hr=i,es):i}}var hr=null;function cm(){if(hr===null)throw Error(s(459));var e=hr;return hr=null,e}function um(e){if(e===es||e===Il)throw Error(s(483))}var ts=null,_o=0;function Vl(e){var t=_o;return _o+=1,ts===null&&(ts=[]),lm(ts,e,t)}function Ta(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fl(e,t){throw t.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hm(e){function t(q,G){if(e){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function i(q,G){if(!e)return null;for(;G!==null;)t(q,G),G=G.sibling;return null}function r(q){for(var G=new Map;q!==null;)q.key===null?G.set(q.index,q):G.set(q.key,q),q=q.sibling;return G}function o(q,G){return q=ea(q,G),q.index=0,q.sibling=null,q}function c(q,G,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=2,G):K):(q.flags|=134217730,G)):(q.flags|=1048576,G)}function y(q){return e&&q.alternate===null&&(q.flags|=134217730),q}function T(q,G,K,ue){return G===null||G.tag!==6?(G=Wu(K,q.mode,ue),G.return=q,G):(G=o(G,K),G.return=q,G)}function z(q,G,K,ue){var Oe=K.type;return Oe===me?(q=ie(q,G,K.props.children,ue,K.key),Ta(q,K),q):G!==null&&(G.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===de&&ur(Oe)===G.type)?(G=o(G,K.props),Ta(G,K),G.return=q,G):(G=Ll(K.type,K.key,K.props,null,q.mode,ue),Ta(G,K),G.return=q,G)}function j(q,G,K,ue){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Xu(K,q.mode,ue),G.return=q,G):(G=o(G,K.children||[]),G.return=q,G)}function ie(q,G,K,ue,Oe){return G===null||G.tag!==7?(G=ir(K,q.mode,ue,Oe),G.return=q,G):(G=o(G,K),G.return=q,G)}function fe(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Wu(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case P:return K=Ll(G.type,G.key,G.props,null,q.mode,K),Ta(K,G),K.return=q,K;case X:return G=Xu(G,q.mode,K),G.return=q,G;case de:return G=ur(G),fe(q,G,K)}if(be(G)||xe(G))return G=ir(G,q.mode,K,null),G.return=q,G;if(typeof G.then=="function")return fe(q,Vl(G),K);if(G.$$typeof===oe)return fe(q,Pl(q,G),K);Fl(q,G)}return null}function k(q,G,K,ue){var Oe=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Oe!==null?null:T(q,G,""+K,ue);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return K.key===Oe?z(q,G,K,ue):null;case X:return K.key===Oe?j(q,G,K,ue):null;case de:return K=ur(K),k(q,G,K,ue)}if(be(K)||xe(K))return Oe!==null?null:ie(q,G,K,ue,null);if(typeof K.then=="function")return k(q,G,Vl(K),ue);if(K.$$typeof===oe)return k(q,G,Pl(q,K),ue);Fl(q,K)}return null}function te(q,G,K,ue,Oe){if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return q=q.get(K)||null,T(G,q,""+ue,Oe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case P:return q=q.get(ue.key===null?K:ue.key)||null,z(G,q,ue,Oe);case X:return q=q.get(ue.key===null?K:ue.key)||null,j(G,q,ue,Oe);case de:return ue=ur(ue),te(q,G,K,ue,Oe)}if(be(ue)||xe(ue))return q=q.get(K)||null,ie(G,q,ue,Oe,null);if(typeof ue.then=="function")return te(q,G,K,Vl(ue),Oe);if(ue.$$typeof===oe)return te(q,G,K,Pl(G,ue),Oe);Fl(G,ue)}return null}function Ce(q,G,K,ue){for(var Oe=null,ft=null,He=G,qe=G=0,en=null;He!==null&&qe<K.length;qe++){He.index>qe?(en=He,He=null):en=He.sibling;var dt=k(q,He,K[qe],ue);if(dt===null){He===null&&(He=en);break}e&&He&&dt.alternate===null&&t(q,He),G=c(dt,G,qe),ft===null?Oe=dt:ft.sibling=dt,ft=dt,He=en}if(qe===K.length)return i(q,He),nt&&ta(q,qe),Oe;if(He===null){for(;qe<K.length;qe++)He=fe(q,K[qe],ue),He!==null&&(G=c(He,G,qe),ft===null?Oe=He:ft.sibling=He,ft=He);return nt&&ta(q,qe),Oe}for(He=r(He);qe<K.length;qe++)en=te(He,q,qe,K[qe],ue),en!==null&&(e&&(dt=en.alternate,dt!==null&&He.delete(dt.key===null?qe:dt.key)),G=c(en,G,qe),ft===null?Oe=en:ft.sibling=en,ft=en);return e&&He.forEach(function(ka){return t(q,ka)}),nt&&ta(q,qe),Oe}function Ue(q,G,K,ue){if(K==null)throw Error(s(151));for(var Oe=null,ft=null,He=G,qe=G=0,en=null,dt=K.next();He!==null&&!dt.done;qe++,dt=K.next()){He.index>qe?(en=He,He=null):en=He.sibling;var ka=k(q,He,dt.value,ue);if(ka===null){He===null&&(He=en);break}e&&He&&ka.alternate===null&&t(q,He),G=c(ka,G,qe),ft===null?Oe=ka:ft.sibling=ka,ft=ka,He=en}if(dt.done)return i(q,He),nt&&ta(q,qe),Oe;if(He===null){for(;!dt.done;qe++,dt=K.next())dt=fe(q,dt.value,ue),dt!==null&&(G=c(dt,G,qe),ft===null?Oe=dt:ft.sibling=dt,ft=dt);return nt&&ta(q,qe),Oe}for(He=r(He);!dt.done;qe++,dt=K.next())dt=te(He,q,qe,dt.value,ue),dt!==null&&(e&&(en=dt.alternate,en!==null&&He.delete(en.key===null?qe:en.key)),G=c(dt,G,qe),ft===null?Oe=dt:ft.sibling=dt,ft=dt);return e&&He.forEach(function(fS){return t(q,fS)}),nt&&ta(q,qe),Oe}function Je(q,G,K,ue){if(typeof K=="object"&&K!==null&&K.type===me&&K.key===null&&K.props.ref===void 0&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case P:e:{for(var Oe=K.key;G!==null;){if(G.key===Oe){if(Oe=K.type,Oe===me){if(G.tag===7){i(q,G.sibling),ue=o(G,K.props.children),Ta(ue,K),ue.return=q,q=ue;break e}}else if(G.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===de&&ur(Oe)===G.type){i(q,G.sibling),ue=o(G,K.props),Ta(ue,K),ue.return=q,q=ue;break e}i(q,G);break}else t(q,G);G=G.sibling}K.type===me?(ue=ir(K.props.children,q.mode,ue,K.key),Ta(ue,K),ue.return=q,q=ue):(ue=Ll(K.type,K.key,K.props,null,q.mode,ue),Ta(ue,K),ue.return=q,q=ue)}return y(q);case X:e:{for(Oe=K.key;G!==null;){if(G.key===Oe)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){i(q,G.sibling),ue=o(G,K.children||[]),ue.return=q,q=ue;break e}else{i(q,G);break}else t(q,G);G=G.sibling}ue=Xu(K,q.mode,ue),ue.return=q,q=ue}return y(q);case de:return K=ur(K),Je(q,G,K,ue)}if(be(K))return Ce(q,G,K,ue);if(xe(K)){if(Oe=xe(K),typeof Oe!="function")throw Error(s(150));return K=Oe.call(K),Ue(q,G,K,ue)}if(typeof K.then=="function")return Je(q,G,Vl(K),ue);if(K.$$typeof===oe)return Je(q,G,Pl(q,K),ue);Fl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(i(q,G.sibling),ue=o(G,K),ue.return=q,q=ue):(i(q,G),ue=Wu(K,q.mode,ue),ue.return=q,q=ue),y(q)):i(q,G)}return function(q,G,K,ue){try{_o=0;var Oe=Je(q,G,K,ue);return ts=null,Oe}catch(He){if(He===es||He===Il)throw He;var ft=Bn(29,He,null,q.mode);return ft.lanes=ue,ft.return=q,ft}}}var fr=hm(!0),fm=hm(!1),wa=!1;function ih(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(yt&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Rl(e),Zp(e,null,i),t}return Dl(e,r,t,i),Rl(e)}function xo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,wn(e,i)}}function rh(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?o=c=y:c=c.next=y,i=i.next}while(i!==null);c===null?o=c=t:c=c.next=t}else o=c=t;i={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var sh=!1;function bo(){if(sh){var e=$r;if(e!==null)throw e}}function So(e,t,i,r){sh=!1;var o=e.updateQueue;wa=!1;var c=o.firstBaseUpdate,y=o.lastBaseUpdate,T=o.shared.pending;if(T!==null){o.shared.pending=null;var z=T,j=z.next;z.next=null,y===null?c=j:y.next=j,y=z;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,T=ie.lastBaseUpdate,T!==y&&(T===null?ie.firstBaseUpdate=j:T.next=j,ie.lastBaseUpdate=z))}if(c!==null){var fe=o.baseState;y=0,ie=j=z=null,T=c;do{var k=T.lane&-536870913,te=k!==T.lane;if(te?(ht&k)===k:(r&k)===k){k!==0&&k===lr&&(sh=!0),ie!==null&&(ie=ie.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ce=e,Ue=T;k=t;var Je=i;switch(Ue.tag){case 1:if(Ce=Ue.payload,typeof Ce=="function"){fe=Ce.call(Je,fe,k);break e}fe=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=Ue.payload,k=typeof Ce=="function"?Ce.call(Je,fe,k):Ce,k==null)break e;fe=I({},fe,k);break e;case 2:wa=!0}}k=T.callback,k!==null&&(e.flags|=64,te&&(e.flags|=8192),te=o.callbacks,te===null?o.callbacks=[k]:te.push(k))}else te={lane:k,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ie===null?(j=ie=te,z=fe):ie=ie.next=te,y|=k;if(T=T.next,T===null){if(T=o.shared.pending,T===null)break;te=T,T=te.next,te.next=null,o.lastBaseUpdate=te,o.shared.pending=null}}while(!0);ie===null&&(z=fe),o.baseState=z,o.firstBaseUpdate=j,o.lastBaseUpdate=ie,c===null&&(o.shared.lanes=0),Oa|=y,e.lanes=y,e.memoizedState=fe}}function dm(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function pm(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)dm(i[e],t)}var Ca=xt(null),kl=xt(0);function mm(e,t){e=la,We(kl,e),We(Ca,t),la=e|t.baseLanes}function oh(){We(kl,la),We(Ca,Ca.current)}function lh(){la=kl.current,pt(Ca),pt(kl)}var _n=xt(null),En=null;function Da(e){var t=e.alternate;We(xn,xn.current&1),We(_n,e),En===null&&(t===null||Ca.current!==null||t.memoizedState!==null)&&(En=e)}function ch(e){We(xn,xn.current),We(_n,e),En===null&&(En=e)}function gm(e){e.tag===22?(We(xn,xn.current),We(_n,e),En===null&&(En=e)):Ra()}function Ra(){We(xn,xn.current),We(_n,_n.current)}function Wn(e){pt(_n),En===e&&(En=null),pt(xn)}var xn=xt(0);function Mo(e,t){We(_n,_n.current),We(xn,t)}function uh(e){pt(xn),pt(_n),En===e&&(En=null)}function ql(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||zf(i)||Of(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=0,Ke=null,Ct=null,Jt=null,jl=!1,ns=!1,dr=!1,Wl=0,To=0,is=null,zx=0;function qt(){throw Error(s(321))}function hh(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!jn(e[i],t[i]))return!1;return!0}function fh(e,t,i,r,o,c){return aa=c,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Te.H=e===null||e.memoizedState===null?$m:eg,dr=!1,c=i(r,o),dr=!1,ns&&(c=ym(t,i,r,o)),vm(e),c}function vm(e){Te.H=$l;var t=Ct!==null&&Ct.next!==null;if(aa=0,Jt=Ct=Ke=null,jl=!1,To=0,is=null,t)throw Error(s(300));e===null||$t||(e=e.dependencies,e!==null&&Bl(e)&&($t=!0))}function ym(e,t,i,r){Ke=e;var o=0;do{if(ns&&(is=null),To=0,ns=!1,25<=o)throw Error(s(301));if(o+=1,Jt=Ct=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Te.H=Vx,c=t(i,r)}while(ns);return c}function Ox(){var e=Te.H,t=e.useState()[0];return t=typeof t.then=="function"?wo(t):t,e=e.useState()[0],(Ct!==null?Ct.memoizedState:null)!==e&&(Ke.flags|=1024),t}function dh(){var e=Wl!==0;return Wl=0,e}function ph(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function mh(e){if(jl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}jl=!1}aa=0,Jt=Ct=Ke=null,ns=!1,To=Wl=0,is=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ke.memoizedState=Jt=e:Jt=Jt.next=e,Jt}function Zt(){if(Ct===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=Ct.next;var t=Jt===null?Ke.memoizedState:Jt.next;if(t!==null)Jt=t,Ct=e;else{if(e===null)throw Ke.alternate===null?Error(s(467)):Error(s(310));Ct=e,e={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Jt===null?Ke.memoizedState=Jt=e:Jt=Jt.next=e}return Jt}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var t=To;return To+=1,is===null&&(is=[]),e=lm(is,e,t),t=Ke,(Jt===null?t.memoizedState:Jt.next)===null&&(t=t.alternate,Te.H=t===null||t.memoizedState===null?$m:eg),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wo(e);if(e.$$typeof===W)return;if(e.$$typeof===oe)return yn(e)}throw Error(s(438,String(e)))}function gh(e){var t=null,i=Ke.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=Ke.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Xl(),Ke.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=ge;return t.index++,i}function ra(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=Zt();return vh(t,Ct,e)}function vh(e,t,i){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var o=e.baseQueue,c=r.pending;if(c!==null){if(o!==null){var y=o.next;o.next=c.next,c.next=y}t.baseQueue=o=c,r.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var T=y=null,z=null,j=t,ie=!1;do{var fe=j.lane&-536870913;if(fe!==j.lane?(ht&fe)===fe:(aa&fe)===fe){var k=j.revertLane;if(k===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),fe===lr&&(ie=!0);else if((aa&k)===k){j=j.next,k===lr&&(ie=!0);continue}else fe={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},z===null?(T=z=fe,y=c):z=z.next=fe,Ke.lanes|=k,Oa|=k;fe=j.action,dr&&i(c,fe),c=j.hasEagerState?j.eagerState:i(c,fe)}else k={lane:fe,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},z===null?(T=z=k,y=c):z=z.next=k,Ke.lanes|=fe,Oa|=fe;j=j.next}while(j!==null&&j!==t);if(z===null?y=c:z.next=T,!jn(c,e.memoizedState)&&($t=!0,ie&&(i=$r,i!==null)))throw i;e.memoizedState=c,e.baseState=y,e.baseQueue=z,r.lastRenderedState=c}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function yh(e){var t=Zt(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var r=i.dispatch,o=i.pending,c=t.memoizedState;if(o!==null){i.pending=null;var y=o=o.next;do c=e(c,y.action),y=y.next;while(y!==o);jn(c,t.memoizedState)||($t=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),i.lastRenderedState=c}return[c,r]}function _m(e,t,i){var r=Ke,o=Zt(),c=nt;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=t();var y=!jn((Ct||o).memoizedState,i);if(y&&(o.memoizedState=i,$t=!0),o=o.queue,bh(Sm.bind(null,r,o,e),[e]),e=o.getSnapshot!==t||y||Jt!==null&&(Jt.memoizedState.tag&1)!==0,as(e?9:8,{destroy:void 0},bm.bind(null,r,o,i,t),null),e){if(r.flags|=2048,Dt===null)throw Error(s(349));c||(aa&127)!==0||xm(r,t,i)}return i}function xm(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ke.updateQueue,t===null?(t=Xl(),Ke.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function bm(e,t,i,r){t.value=i,t.getSnapshot=r,Mm(t)&&Tm(e)}function Sm(e,t,i){return i(function(){Mm(t)&&Tm(e)})}function Mm(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!jn(e,i)}catch{return!0}}function Tm(e){var t=nr(e,2);t!==null&&Hn(t,e,2)}function _h(e){var t=Dn();if(typeof e=="function"){var i=e;if(e=i(),dr){Yt(!0);try{i()}finally{Yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function wm(e,t,i,r){return e.baseState=i,vh(e,Ct,typeof r=="function"?r:ra)}function Ux(e,t,i,r,o){if(Jl(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){c.listeners.push(y)}};Te.T!==null?i(!0):c.isTransition=!1,r(c),i=t.pending,i===null?(c.next=t.pending=c,Em(t,c)):(c.next=i.next,t.pending=i.next=c)}}function Em(e,t){var i=t.action,r=t.payload,o=e.state;if(t.isTransition){var c=Te.T,y={};y.types=c!==null?c.types:null,Te.T=y;try{var T=i(o,r),z=Te.S;z!==null&&z(y,T),Am(e,t,T)}catch(j){xh(e,t,j)}finally{c!==null&&y.types!==null&&(c.types=y.types),Te.T=c}}else try{c=i(o,r),Am(e,t,c)}catch(j){xh(e,t,j)}}function Am(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Cm(e,t,r)},function(r){return xh(e,t,r)}):Cm(e,t,i)}function Cm(e,t,i){t.status="fulfilled",t.value=i,Dm(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Em(e,i)))}function xh(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,Dm(t),t=t.next;while(t!==r)}e.action=null}function Dm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rm(e,t){return t}function Lm(e,t){if(nt){var i=Dt.formState;if(i!==null){e:{var r=Ke;if(nt){if(Lt){t:{for(var o=Lt,c=di;o.nodeType!==8;){if(!c){o=null;break t}if(o=mi(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Lt=mi(o.nextSibling),r=o.data==="F!";break e}}Sa(r)}r=!1}r&&(t=i[0])}}return i=Dn(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:t},i.queue=r,i=Qm.bind(null,Ke,r),r.dispatch=i,r=_h(!1),c=Eh.bind(null,Ke,!1,r.queue),r=Dn(),o={state:t,dispatch:null,action:e,pending:null},r.queue=o,i=Ux.bind(null,Ke,o,c,i),o.dispatch=i,r.memoizedState=e,[t,i,!1]}function Nm(e){var t=Zt();return zm(t,Ct,e)}function zm(e,t,i){if(t=vh(e,t,Rm)[0],e=Zl(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=wo(t)}catch(y){throw y===es?Il:y}else r=t;t=Zt();var o=t.queue,c=o.dispatch;return i!==t.memoizedState&&(Ke.flags|=2048,as(9,{destroy:void 0},Bx.bind(null,o,i),null)),[r,c,e]}function Bx(e,t){e.action=t}function Om(e){var t=Zt(),i=Ct;if(i!==null)return zm(t,i,e);Zt(),t=t.memoizedState,i=Zt();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function as(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=Ke.updateQueue,t===null&&(t=Xl(),Ke.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function Um(){return Zt().memoizedState}function Ql(e,t,i,r){var o=Dn();Ke.flags|=e,o.memoizedState=as(1|t,{destroy:void 0},i,r===void 0?null:r)}function Kl(e,t,i,r){var o=Zt();r=r===void 0?null:r;var c=o.memoizedState.inst;Ct!==null&&r!==null&&hh(r,Ct.memoizedState.deps)?o.memoizedState=as(t,c,i,r):(Ke.flags|=e,o.memoizedState=as(1|t,c,i,r))}function Bm(e,t){Ql(8390656,8,e,t)}function bh(e,t){Kl(2048,8,e,t)}function Px(e){Ke.flags|=4;var t=Ke.updateQueue;if(t===null)t=Xl(),Ke.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Pm(e){var t=Zt().memoizedState;return Px({ref:t,nextImpl:e}),function(){if((yt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Gm(e,t){return Kl(4,2,e,t)}function Im(e,t){return Kl(4,4,e,t)}function Hm(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vm(e,t,i){i=i!=null?i.concat([e]):null,Kl(4,4,Hm.bind(null,t,e),i)}function Sh(){}function Fm(e,t){var i=Zt();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&hh(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function km(e,t){var i=Zt();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&hh(t,r[1]))return r[0];if(r=e(),dr){Yt(!0);try{e()}finally{Yt(!1)}}return i.memoizedState=[r,t],r}function Mh(e,t,i){return i===void 0||(aa&1073741824)!==0&&(ht&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=$g(),Ke.lanes|=e,Oa|=e,i)}function qm(e,t,i,r){return jn(i,t)?i:Ca.current!==null?(e=Mh(e,i,r),jn(e,t)||($t=!0),e):(aa&106)===0||(aa&1073741824)!==0&&(ht&261930)===0?($t=!0,e.memoizedState=i):(e=$g(),Ke.lanes|=e,Oa|=e,t)}function jm(e,t,i,r,o){var c=we.p;we.p=c!==0&&8>c?c:8;var y=Te.T,T={};T.types=y!==null?y.types:null,Te.T=T,Eh(e,!1,t,i);try{var z=o(),j=Te.S;if(j!==null&&j(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=Nx(z,r);Eo(e,t,ie,Qn(e))}else Eo(e,t,r,Qn(e))}catch(fe){Eo(e,t,{then:function(){},status:"rejected",reason:fe},Qn())}finally{we.p=c,y!==null&&T.types!==null&&(y.types=T.types),Te.T=y}}function Gx(){}function Th(e,t,i,r){if(e.tag!==5)throw Error(s(476));var o=Wm(e).queue;jm(e,o,t,Ge,i===null?Gx:function(){return Xm(e),i(r)})}function Wm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ge,baseState:Ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:Ge},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xm(e){var t=Wm(e);t.next===null&&(t=e.alternate.memoizedState),Eo(e,t.next.queue,{},Qn())}function wh(){return yn(Ms)}function Ym(){return Zt().memoizedState}function Zm(){return Zt().memoizedState}function Ix(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=Qn();e=Ea(i);var r=Aa(t,e,i);r!==null&&(Hn(r,t,i),xo(r,t,i)),t={cache:$u()},e.payload=t;return}t=t.return}}function Hx(e,t,i){var r=Qn();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Jl(e)?Km(t,i):(i=qu(e,t,i,r),i!==null&&(Hn(i,e,r),Jm(i,t,r)))}function Qm(e,t,i){var r=Qn();Eo(e,t,i,r)}function Eo(e,t,i,r){var o={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))Km(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var y=t.lastRenderedState,T=c(y,i);if(o.hasEagerState=!0,o.eagerState=T,jn(T,y))return Dl(e,t,o,0),Dt===null&&Cl(),!1}catch{}if(i=qu(e,t,o,r),i!==null)return Hn(i,e,r),Jm(i,t,r),!0}return!1}function Eh(e,t,i,r){if(r={lane:2,revertLane:vf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Jl(e)){if(t)throw Error(s(479))}else t=qu(e,i,r,2),t!==null&&Hn(t,e,2)}function Jl(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function Km(e,t){ns=jl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Jm(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,wn(e,i)}}var $l={readContext:yn,use:Yl,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt,useEffectEvent:qt},$m={readContext:yn,use:Yl,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:Bm,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Ql(4194308,4,Hm.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Ql(4194308,4,e,t)},useInsertionEffect:function(e,t){Ql(4,2,e,t)},useMemo:function(e,t){var i=Dn();t=t===void 0?null:t;var r=e();if(dr){Yt(!0);try{e()}finally{Yt(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=Dn();if(i!==void 0){var o=i(t);if(dr){Yt(!0);try{i(t)}finally{Yt(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=Hx.bind(null,Ke,e),[r.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:function(e){e=_h(e);var t=e.queue,i=Qm.bind(null,Ke,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Sh,useDeferredValue:function(e,t){var i=Dn();return Mh(i,e,t)},useTransition:function(){var e=_h(!1);return e=jm.bind(null,Ke,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=Ke,o=Dn();if(nt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),Dt===null)throw Error(s(349));(ht&127)!==0||xm(r,t,i)}o.memoizedState=i;var c={value:i,getSnapshot:t};return o.queue=c,Bm(Sm.bind(null,r,c,e),[e]),r.flags|=2048,as(9,{destroy:void 0},bm.bind(null,r,c,i,t),null),i},useId:function(){var e=Dn(),t=Dt.identifierPrefix;if(nt){var i=Ui,r=Oi;i=(r&~(1<<32-Tn(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Wl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=zx++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wh,useFormState:Lm,useActionState:Lm,useOptimistic:function(e){var t=Dn();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Eh.bind(null,Ke,!0,i),i.dispatch=t,[e,t]},useMemoCache:gh,useCacheRefresh:function(){return Dn().memoizedState=Ix.bind(null,Ke)},useEffectEvent:function(e){var t=Dn(),i={impl:e};return t.memoizedState=i,function(){if((yt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},eg={readContext:yn,use:Yl,useCallback:Fm,useContext:yn,useEffect:bh,useImperativeHandle:Vm,useInsertionEffect:Gm,useLayoutEffect:Im,useMemo:km,useReducer:Zl,useRef:Um,useState:function(){return Zl(ra)},useDebugValue:Sh,useDeferredValue:function(e,t){var i=Zt();return qm(i,Ct.memoizedState,e,t)},useTransition:function(){var e=Zl(ra)[0],t=Zt().memoizedState;return[typeof e=="boolean"?e:wo(e),t]},useSyncExternalStore:_m,useId:Ym,useHostTransitionStatus:wh,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,t){var i=Zt();return wm(i,Ct,e,t)},useMemoCache:gh,useCacheRefresh:Zm,useEffectEvent:Pm},Vx={readContext:yn,use:Yl,useCallback:Fm,useContext:yn,useEffect:bh,useImperativeHandle:Vm,useInsertionEffect:Gm,useLayoutEffect:Im,useMemo:km,useReducer:yh,useRef:Um,useState:function(){return yh(ra)},useDebugValue:Sh,useDeferredValue:function(e,t){var i=Zt();return Ct===null?Mh(i,e,t):qm(i,Ct.memoizedState,e,t)},useTransition:function(){var e=yh(ra)[0],t=Zt().memoizedState;return[typeof e=="boolean"?e:wo(e),t]},useSyncExternalStore:_m,useId:Ym,useHostTransitionStatus:wh,useFormState:Om,useActionState:Om,useOptimistic:function(e,t){var i=Zt();return Ct!==null?wm(i,Ct,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:gh,useCacheRefresh:Zm,useEffectEvent:Pm};function Ah(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:I({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ch={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=Qn(),o=Ea(r);o.payload=t,i!=null&&(o.callback=i),t=Aa(e,o,r),t!==null&&(Hn(t,e,r),xo(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=Qn(),o=Ea(r);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=Aa(e,o,r),t!==null&&(Hn(t,e,r),xo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Qn(),r=Ea(i);r.tag=2,t!=null&&(r.callback=t),t=Aa(e,r,i),t!==null&&(Hn(t,e,i),xo(t,e,i))}};function tg(e,t,i,r,o,c,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,y):t.prototype&&t.prototype.isPureReactComponent?!ho(i,r)||!ho(o,c):!0}function ng(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&Ch.enqueueReplaceState(t,t.state,null)}function pr(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=I({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}function ig(e){Al(e)}function ag(e){console.error(e)}function rg(e){Al(e)}function ec(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function sg(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Dh(e,t,i){return i=Ea(i),i.tag=3,i.payload={element:null},i.callback=function(){ec(e,t)},i}function og(e){return e=Ea(e),e.tag=3,e}function lg(e,t,i,r){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;e.payload=function(){return o(c)},e.callback=function(){sg(t,i,r)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){sg(t,i,r),typeof o!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function Fx(e,t,i,r,o){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&sr(t,i,o,!0),i=_n.current,i!==null){switch(i.tag){case 31:case 13:case 19:return En===null?bc():i.alternate===null&&jt===0&&(jt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,r===Hl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),pf(e,r,o)),!1;case 22:return i.flags|=65536,r===Hl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),pf(e,r,o)),!1}throw Error(s(435,i.tag))}return pf(e,r,o),bc(),!1}if(nt)return t=_n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==Zu&&(e=Error(s(422),{cause:r}),mo(ui(e,i)))):(r!==Zu&&(t=Error(s(423),{cause:r}),mo(ui(t,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=ui(r,i),o=Dh(e.stateNode,r,o),rh(e,o),jt!==4&&(jt=2)),!1;var c=Error(s(520),{cause:r});if(c=ui(c,i),Oo===null?Oo=[c]:Oo.push(c),jt!==4&&(jt=2),t===null)return!0;r=ui(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=Dh(i.stateNode,r,e),rh(i,e),!1;case 1:if(t=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ua===null||!Ua.has(c))))return i.flags|=65536,o&=-o,i.lanes|=o,o=og(o),lg(o,e,i,r),rh(i,o),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Rh=Error(s(461)),$t=!1;function an(e,t,i,r){t.child=e===null?fm(t,null,i,r):fr(t,e.child,i,r)}function cg(e,t,i,r,o){i=i.render;var c=t.ref;if("ref"in r){var y={};for(var T in r)T!=="ref"&&(y[T]=r[T])}else y=r;return or(t),r=fh(e,t,i,y,c,o),T=dh(),e!==null&&!$t?(ph(e,t,o),sa(e,t,o)):(nt&&T&&zl(t),t.flags|=1,an(e,t,r,o),t.child)}function ug(e,t,i,r,o){if(e===null){var c=i.type;return typeof c=="function"&&!ju(c)&&c.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=c,hg(e,t,c,r,o)):(e=Ll(i.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Gh(e,o)){var y=c.memoizedProps;if(i=i.compare,i=i!==null?i:ho,i(y,r)&&e.ref===t.ref)return sa(e,t,o)}return t.flags|=1,e=ea(c,r),e.ref=t.ref,e.return=t,t.child=e}function hg(e,t,i,r,o){if(e!==null){var c=e.memoizedProps;if(ho(c,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=c,Gh(e,o))(e.flags&131072)!==0&&($t=!0);else return t.lanes=e.lanes,sa(e,t,o)}return Lh(e,t,i,r,o)}function fg(e,t,i,r){var o=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~c}else r=0,t.child=null;return dg(e,t,c,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(t,c!==null?c.cachePool:null),c!==null?mm(t,c):oh(),gm(t);else return r=t.lanes=536870912,dg(e,t,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Gl(t,c.cachePool),mm(t,c),Ra(),t.memoizedState=null):(e!==null&&Gl(t,null),oh(),Ra());return an(e,t,o,i),t.child}function Ao(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dg(e,t,i,r,o){var c=th();return c=c===null?null:{parent:Kt._currentValue,pool:c},t.memoizedState={baseLanes:i,cachePool:c},e!==null&&Gl(t,null),oh(),gm(t),e!==null&&sr(e,t,r,!0),t.childLanes=o,null}function tc(e,t){return t=nc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pg(e,t,i){return fr(t,e.child,null,i),e=tc(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function kx(e,t,i){var r=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(nt){if(r.mode==="hidden")return e=tc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ao(null,e);if(ch(t),(e=Lt)?(e=Hv(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Oi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},i=Kp(e),i.return=t,t.child=i,hn=t,Lt=null)):e=null,e===null)throw Sa(t);return t.lanes=536870912,null}return tc(t,r)}var c=e.memoizedState;if(c!==null){var y=c.dehydrated;if(ch(t),o)if(t.flags&256)t.flags&=-257,t=pg(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if($t||sr(e,t,i,!1),o=(i&e.childLanes)!==0,$t||o){if(Ca.current===null){if(r=Dt,r!==null&&(y=si(r,i),y!==0&&y!==c.retryLane))throw c.retryLane=y,nr(e,y),Hn(r,e,y),Rh;bc()}t=pg(e,t,i)}else e=c.treeContext,Lt=mi(y.nextSibling),hn=t,nt=!0,ba=null,di=!1,e!==null&&em(t,e),t=tc(t,r),t.flags|=134221824;return t}return e=ea(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rs(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Lh(e,t,i,r,o){return or(t),i=fh(e,t,i,r,void 0,o),r=dh(),e!==null&&!$t?(ph(e,t,o),sa(e,t,o)):(nt&&r&&zl(t),t.flags|=1,an(e,t,i,o),t.child)}function mg(e,t,i,r,o,c){return or(t),t.updateQueue=null,i=ym(t,r,i,o),vm(e),r=dh(),e!==null&&!$t?(ph(e,t,c),sa(e,t,c)):(nt&&r&&zl(t),t.flags|=1,an(e,t,i,c),t.child)}function gg(e,t,i,r,o){if(or(t),t.stateNode===null){var c=Zr,y=i.contextType;typeof y=="object"&&y!==null&&(c=yn(y)),c=new i(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ch,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},ih(t),y=i.contextType,c.context=typeof y=="object"&&y!==null?yn(y):Zr,c.state=t.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(Ah(t,i,y,r),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(y=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),y!==c.state&&Ch.enqueueReplaceState(c,c.state,null),So(t,r,c,o),bo(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var T=t.memoizedProps,z=pr(i,T);c.props=z;var j=c.context,ie=i.contextType;y=Zr,typeof ie=="object"&&ie!==null&&(y=yn(ie));var fe=i.getDerivedStateFromProps;ie=typeof fe=="function"||typeof c.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,ie||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(T||j!==y)&&ng(t,c,r,y),wa=!1;var k=t.memoizedState;c.state=k,So(t,r,c,o),bo(),j=t.memoizedState,T||k!==j||wa?(typeof fe=="function"&&(Ah(t,i,fe,r),j=t.memoizedState),(z=wa||tg(t,i,z,r,k,j,y))?(ie||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=j),c.props=r,c.state=j,c.context=y,r=z):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,ah(e,t),y=t.memoizedProps,ie=pr(i,y),c.props=ie,fe=t.pendingProps,k=c.context,j=i.contextType,z=Zr,typeof j=="object"&&j!==null&&(z=yn(j)),T=i.getDerivedStateFromProps,(j=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y!==fe||k!==z)&&ng(t,c,r,z),wa=!1,k=t.memoizedState,c.state=k,So(t,r,c,o),bo();var te=t.memoizedState;y!==fe||k!==te||wa||e!==null&&e.dependencies!==null&&Bl(e.dependencies)?(typeof T=="function"&&(Ah(t,i,T,r),te=t.memoizedState),(ie=wa||tg(t,i,ie,r,k,te,z)||e!==null&&e.dependencies!==null&&Bl(e.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,te,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,te,z)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||y===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=te),c.props=r,c.state=te,c.context=z,r=ie):(typeof c.componentDidUpdate!="function"||y===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,rs(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=fr(t,e.child,null,o),t.child=fr(t,null,i,o)):an(e,t,i,o),t.memoizedState=c.state,e=t.child):e=sa(e,t,o),e}function vg(e,t,i,r){return ar(),t.flags|=256,an(e,t,i,r),t.child}var Nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zh(e){return{baseLanes:e,cachePool:sm()}}function Oh(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Zn),e}function yg(e,t,i){var r=t.pendingProps,o=!1,c=(t.flags&128)!==0,y;if((y=c)||(y=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),y&&(o=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(nt){if(o?Da(t):Ra(),(e=Lt)?(e=Hv(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Oi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},i=Kp(e),i.return=t,t.child=i,hn=t,Lt=null)):e=null,e===null)throw Sa(t);return Of(e)?t.lanes=32:t.lanes=536870912,null}return c=r.children,r=r.fallback,o?(Ra(),o=t.mode,c=nc({mode:"hidden",children:c},o),r=ir(r,o,i,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=zh(i),r.childLanes=Oh(e,y,i),t.memoizedState=Nh,Ao(null,r)):(Da(t),Uh(t,c))}var T=e.memoizedState;if(T!==null){var z=T.dehydrated;if(z!==null)return qx(e,t,c,y,r,z,T,i)}return o?(Ra(),o=r.fallback,c=t.mode,T=e.child,z=T.sibling,r=ea(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,z!==null?o=ea(z,o):(o=ir(o,c,i,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,Ao(null,r),r=t.child,o=e.child.memoizedState,o===null?o=zh(i):(c=o.cachePool,c!==null?(T=Kt._currentValue,c=c.parent!==T?{parent:T,pool:T}:c):c=sm(),o={baseLanes:o.baseLanes|i,cachePool:c}),r.memoizedState=o,r.childLanes=Oh(e,y,i),t.memoizedState=Nh,Ao(e.child,r)):(Da(t),i=e.child,e=i.sibling,i=ea(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=i,t.memoizedState=null,i)}function Uh(e,t){return t=nc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nc(e,t){return e=Bn(22,e,null,t),e.lanes=0,e}function ic(e,t,i){return fr(t,e.child,null,i),e=Uh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qx(e,t,i,r,o,c,y,T){if(i)return t.flags&256?(Da(t),t.flags&=-257,ic(e,t,T)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,null):(Ra(),c=o.fallback,y=t.mode,o=nc({mode:"visible",children:o.children},y),c=ir(c,y,T,null),c.flags|=2,o.return=t,c.return=t,o.sibling=c,t.child=o,fr(t,e.child,null,T),o=t.child,o.memoizedState=zh(T),o.childLanes=Oh(e,r,T),t.memoizedState=Nh,Ao(null,o));if(Da(t),Of(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(o=Error(s(419)),o.stack="",o.digest=r,mo({value:o,source:null,stack:null})),ic(e,t,T)}if($t||sr(e,t,T,!1),r=(T&e.childLanes)!==0,$t||r){if(Ca.current!==null)return ic(e,t,T);if(r=Dt,r!==null&&(o=si(r,T),o!==0&&o!==y.retryLane))throw y.retryLane=o,nr(e,o),Hn(r,e,o),Rh;return zf(c)||bc(),ic(e,t,T)}return zf(c)?(t.flags|=192,t.child=e.child,null):(e=y.treeContext,Lt=mi(c.nextSibling),hn=t,nt=!0,ba=null,di=!1,e!==null&&em(t,e),t=Uh(t,o.children),t.flags|=134221824,t)}function _g(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,i)}function xg(e){for(var t=null;e!==null;){var i=e.alternate;i!==null&&ql(i)===null&&(t=e),e=e.sibling}return t}function ac(e,t,i,r,o,c){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:o,treeForkCount:c}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=i,y.tailMode=o,y.treeForkCount=c)}function Bh(e){var t=e.child;for(e.child=null;t!==null;){var i=t.sibling;t.sibling=e.child,e.child=t,t=i}}function Ph(e,t,i){var r=t.pendingProps,o=r.revealOrder,c=r.tail;r=r.children;var y=xn.current;if(t.flags&128)return Mo(t,y),null;var T=(y&2)!==0;if(T?(y=y&1|2,t.flags|=128):y&=1,Mo(t,y),o==="backwards"&&e!==null?(Bh(e),an(e,t,r,i),Bh(e)):an(e,t,r,i),r=nt?po:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_g(e,i,t);else if(e.tag===19)_g(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":i=xg(t.child),i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null,Bh(t)),ac(t,!0,o,null,c,r);break;case"unstable_legacy-backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ql(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}ac(t,!0,i,null,c,r);break;case"together":ac(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:i=xg(t.child),i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),ac(t,!1,o,i,c,r)}return t.child}function bg(e,t,i){var r=t.pendingProps;return Ma(t,t.type,r.value),an(e,t,r.children,i),t.child}function sa(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Oa|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(sr(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=ea(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ea(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Gh(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Bl(e)))}function jx(e,t,i){switch(t.tag){case 3:M(t,t.stateNode.containerInfo),Ma(t,Kt,e.memoizedState.cache),ar();break;case 27:case 5:ve(t);break;case 4:M(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ch(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Da(t),t.flags|=128,null;r=sr(e,t,i,!1);var o=t.child.childLanes;return r||(i&o)!==0?yg(e,t,i):(Da(t),e=sa(e,t,i),e!==null?e.sibling:null)}Da(t);break;case 19:if(t.flags&128)return Ph(e,t,i);if(o=(e.flags&128)!==0,r=(i&t.childLanes)!==0,r||(sr(e,t,i,!1),r=(i&t.childLanes)!==0),o){if(r)return Ph(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Mo(t,xn.current),r)break;return null;case 22:return t.lanes=0,fg(e,t,i,t.pendingProps);case 24:Ma(t,Kt,e.memoizedState.cache)}return sa(e,t,i)}function Sg(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)$t=!0;else{if(!Gh(e,i)&&(t.flags&128)===0)return $t=!1,jx(e,t,i);$t=(e.flags&131072)!==0}else $t=!1,nt&&(t.flags&1048576)!==0&&$p(t,po,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ur(t.elementType),t.type=e,typeof e=="function")ju(e)?(r=pr(e,r),t.tag=1,t=gg(null,t,e,r,i)):(t.tag=0,t=Lh(null,t,e,r,i));else{if(e!=null){var o=e.$$typeof;if(o===Q){t.tag=11,t=cg(null,t,e,r,i);break e}else if(o===_e){t.tag=14,t=ug(null,t,e,r,i);break e}else if(o===oe){t.tag=10,t.type=e,t=bg(null,t,i);break e}}throw t=Ee(e)||e,Error(s(306,t,""))}}return t;case 0:return Lh(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,o=pr(r,t.pendingProps),gg(e,t,r,o,i);case 3:e:{if(M(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;o=c.element,ah(e,t),So(t,r,null,i);var y=t.memoizedState;if(r=y.cache,Ma(t,Kt,r),r!==c.cache&&Ju(t,[Kt],i,!0),bo(),r=y.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=vg(e,t,r,i);break e}else if(r!==o){o=ui(Error(s(424)),t),mo(o),t=vg(e,t,r,i);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Lt=mi(e.firstChild),hn=t,nt=!0,ba=null,di=!0,i=fm(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(ar(),r===o){t=sa(e,t,i);break e}an(e,t,r,i)}t=t.child}return t;case 26:return rs(e,t),e===null?(i=Xv(t.type,null,t.pendingProps,null))?t.memoizedState=i:nt||(t.stateNode=Ev(t.type,t.pendingProps,Et.current,t)):t.memoizedState=Xv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&nt&&(r=t.stateNode=kv(t.type,t.pendingProps,Et.current),hn=t,di=!0,o=Lt,Ga(t.type)?(Uf=o,Lt=mi(r.firstChild)):Lt=o),an(e,t,t.pendingProps.children,i),rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&nt&&((o=r=Lt)&&(r=Ib(r,t.type,t.pendingProps,di),r!==null?(t.stateNode=r,hn=t,Lt=mi(r.firstChild),di=!1,o=!0):o=!1),o||Sa(t)),ve(t),o=t.type,c=t.pendingProps,y=e!==null?e.memoizedProps:null,r=c.children,Ef(o,c)?r=null:y!==null&&Ef(o,y)&&(t.flags|=32),t.memoizedState!==null&&(o=fh(e,t,Ox,null,null,i),Ms._currentValue=o),rs(e,t),an(e,t,r,i),t.child;case 6:return e===null&&nt&&((e=i=Lt)&&(i=Hb(i,t.pendingProps,di),i!==null?(t.stateNode=i,hn=t,Lt=null,e=!0):e=!1),e||Sa(t)),null;case 13:return yg(e,t,i);case 4:return M(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,i):an(e,t,r,i),t.child;case 11:return cg(e,t,t.type,t.pendingProps,i);case 7:return r=t.pendingProps,rs(e,t),an(e,t,r,i),t.child;case 8:return an(e,t,t.pendingProps.children,i),t.child;case 12:return an(e,t,t.pendingProps.children,i),t.child;case 10:return bg(e,t,i);case 9:return o=t.type._context,r=t.pendingProps.children,or(t),o=yn(o),r=r(o),t.flags|=1,an(e,t,r,i),t.child;case 14:return ug(e,t,t.type,t.pendingProps,i);case 15:return hg(e,t,t.type,t.pendingProps,i);case 19:return Ph(e,t,i);case 31:return kx(e,t,i);case 22:return fg(e,t,i,t.pendingProps);case 24:return or(t),r=yn(Kt),e===null?(o=th(),o===null&&(o=Dt,c=$u(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=i),o=c),t.memoizedState={parent:r,cache:o},ih(t),Ma(t,Kt,o)):((e.lanes&i)!==0&&(ah(e,t),So(t,null,null,i),bo()),o=e.memoizedState,c=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Ma(t,Kt,r)):(r=c.cache,Ma(t,Kt,r),r!==o.cache&&Ju(t,[Kt],i,!0))),an(e,t,t.pendingProps.children,i),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!=="auto"?t.flags|=e===null?18882560:18874368:nt&&zl(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:rs(e,t),an(e,t,r.children,i),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function oa(e){e.flags|=4}function Ih(e,t,i,r,o){var c;if((c=(e.mode&32)!==0)&&(c=i===null?Kv(t,r):Kv(t,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(iv())e.flags|=8192;else throw hr=Hl,nh}else e.flags&=-16777217}function Mg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jv(t))if(iv())e.flags|=8192;else throw hr=Hl,nh}function rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?et():536870912,e.lanes|=t,us|=t)}function Co(e,t){if(!nt)switch(e.tailMode){case"visible":break;case"collapsed":for(var i=e.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null}}function Nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,r|=o.subtreeFlags&1206910976,r|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function Wx(e,t,i){var r=t.pendingProps;switch(Yu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(t),null;case 1:return Nt(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ia(Kt),ee(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qu())),Nt(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(oa(t),c!==null?(Nt(t),Mg(t,c)):(Nt(t),Ih(t,o,null,r,i))):c?c!==e.memoizedState?(oa(t),Nt(t),Mg(t,c)):(Nt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&oa(t),Nt(t),Ih(t,o,e,r,i)),null;case 27:if(Ae(t),i=Et.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&oa(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Nt(t),t.subtreeFlags&=-33554433,null}e=Qe.current,Jr(t)?tm(t):(e=kv(o,r,i),t.stateNode=e,oa(t))}return Nt(t),t.subtreeFlags&=-33554433,null;case 5:if(Ae(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&oa(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Nt(t),t.subtreeFlags&=-33554433,null}if(c=Qe.current,Jr(t))tm(t);else{var y=Io(Et.current);switch(c){case 1:c=y.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=y.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=y.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?y.createElement(o,{is:r.is}):y.createElement(o)}}c[Ot]=t,c[gn]=r;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)c.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=c;e:switch(Sn(c,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&oa(t)}}return Nt(t),t.subtreeFlags&=-33554433,Ih(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&oa(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=Et.current,Jr(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,o=hn,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[Ot]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Sv(e.nodeValue,i)),e||Sa(t,!0)}else e=Io(e).createTextNode(r),e[Ot]=t,t.stateNode=e}return Nt(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=Jr(t),i!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ot]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Nt(t),e=!1}else i=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Nt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Ot]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Nt(t),o=!1}else o=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),rc(t,t.updateQueue),Nt(t),null);case 4:return ee(),e===null&&bf(t.stateNode.containerInfo),t.flags|=67108864,Nt(t),null;case 10:return ia(t.type),Nt(t),null;case 19:if(uh(t),r=t.memoizedState,r===null)return Nt(t),null;if(o=(t.flags&128)!==0,c=r.rendering,c===null)if(o)Co(r,!1);else{if(jt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ql(e),c!==null){for(t.flags|=128,Co(r,!1),e=c.updateQueue,t.updateQueue=e,rc(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Qp(i,e),i=i.sibling;return Mo(t,xn.current&1|2),nt&&ta(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&V()>vc&&(t.flags|=128,o=!0,Co(r,!1),t.lanes=4194304)}else{if(!o)if(e=ql(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,rc(t,e),Co(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!nt)return Nt(t),null}else 2*V()-r.renderingStartTime>vc&&i!==536870912&&(t.flags|=128,o=!0,Co(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}if(r.tail!==null){e=r.tail;e:{for(i=e;i!==null;){if(i.alternate!==null){i=!1;break e}i=i.sibling}i=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=V(),e.sibling=null,c=xn.current,c=o?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||nt?Mo(t,c):(i=c,We(_n,t),We(xn,i),En===null&&(En=t)),nt&&ta(t,r.treeForkCount),e}return Nt(t),null;case 22:case 23:return Wn(t),lh(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(Nt(t),t.subtreeFlags&6&&(t.flags|=8192)):Nt(t),i=t.updateQueue,i!==null&&rc(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&pt(cr),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ia(Kt),Nt(t),null;case 25:return null;case 30:return t.flags|=33554432,Nt(t),null}throw Error(s(156,t.tag))}function Xx(e,t){switch(Yu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Kt),ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(s(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return uh(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ee(),null;case 10:return ia(t.type),null;case 22:case 23:return Wn(t),lh(),e!==null&&pt(cr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Kt),null;case 25:return null;default:return null}}function Tg(e,t){switch(Yu(t),t.tag){case 3:ia(Kt),ee();break;case 26:case 27:case 5:Ae(t);break;case 4:ee();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:uh(t);break;case 10:ia(t.type);break;case 22:case 23:Wn(t),lh(),e!==null&&pt(cr);break;case 24:ia(Kt)}}function Do(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var o=r.next;i=o;do{if((i.tag&e)===e){r=void 0;var c=i.create,y=i.inst;r=c(),y.destroy=r}i=i.next}while(i!==o)}}catch(T){Tt(t,t.return,T)}}function La(e,t,i){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){var y=r.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,o=t;var z=i,j=T;try{j()}catch(ie){Tt(o,z,ie)}}}r=r.next}while(r!==c)}}catch(ie){Tt(t,t.return,ie)}}function wg(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{pm(t,i)}catch(r){Tt(e,e.return,r)}}}function Eg(e,t,i){i.props=pr(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){Tt(e,t,r)}}function Bi(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var o=e.stateNode,c=Ji(e.memoizedProps,o);(o.ref===null||o.ref.name!==c)&&(o.ref=zv(c)),r=o.ref;break;case 7:if(e.stateNode===null){var y=new Kn(e);p(e.child,!1,Pb,y,void 0,void 0),e.stateNode=y}r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(T){Tt(e,t,T)}}function bn(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(o){Tt(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){Tt(e,t,o)}else i.current=null}function sc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var i=0;i<t.length;i++)Iv(e.stateNode,t[i])}function Ag(e){for(var t=e.return;t!==null&&(Vh(t)&&Iv(e.stateNode,t.stateNode),!Hh(t));)t=t.return}function Ro(e){for(var t=e.return;t!==null&&(Vh(t)&&Gb(e.stateNode,t.stateNode),!Hh(t));)t=t.return}function Hh(e){return e.tag===5||e.tag===3||e.tag===27}function Vh(e){return e&&e.tag===7&&e.stateNode!==null}function Fh(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(o){Tt(e,e.return,o)}}function kh(e,t,i){try{var r=e.stateNode;_b(r,e.type,i,t),r[gn]=t}catch(o){Tt(e,e.return,o)}}function Cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function qh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jh(e,t,i,r){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(o,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(o),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=zi)),sc(e,r),gt=!0;else if(o!==4&&(o===27&&(sc(e,r),r=null,Ga(e.type)&&(i=e.stateNode,t=null)),e=e.child,e!==null))for(jh(e,t,i,r),e=e.sibling;e!==null;)jh(e,t,i,r),e=e.sibling}function oc(e,t,i,r){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?i.insertBefore(o,t):i.appendChild(o),sc(e,r),gt=!0;else if(o!==4&&(o===27&&(sc(e,r),r=null,Ga(e.type)&&(i=e.stateNode)),e=e.child,e!==null))for(oc(e,t,i,r),e=e.sibling;e!==null;)oc(e,t,i,r),e=e.sibling}function Dg(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Sn(t,r,i),t[Ot]=e,t[gn]=i}catch(c){Tt(e,e.return,c)}}var lc=!1,Xn=null;function Rg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(lc=!0)}var Pi=null;function Lg(){var e=Pi;return Pi=null,e}var Pn=0;function ss(e,t,i,r,o){return Pn=0,Ng(e.child,t,i,r,o)}function Ng(e,t,i,r,o){for(var c=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(r!==null){var T=Df(y);r.push(T),T.view&&(c=!0)}else c||Df(y).view&&(c=!0);lc=!0,Lv(y,Pn===0?t:t+"_"+Pn,i),Pn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||Ng(e.child,t,i,r,o)&&(c=!0));e=e.sibling}return c}function Gi(e,t){for(;e!==null;)e.tag===5?Nv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Gi(e.child,t)),e=e.sibling}function cc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(cc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(s(544));var i=t.name;t=$i(t.default,t.share),t!=="none"&&(ss(e,i,t,null,!1)||Gi(e.child,!1))}e=e.sibling}}function Wh(e,t){if(e.tag===30){var i=e.stateNode,r=e.memoizedProps,o=Ji(r,i),c=$i(r.default,i.paired?r.share:r.enter);c!=="none"?ss(e,o,c,null,!1)?(cc(e),i.paired||t||ps(e,r.onEnter)):Gi(e.child,!1):cc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Wh(e,t),e=e.sibling;else cc(e)}function Xh(e){if(Xn!==null&&Xn.size!==0){var t=Xn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var i=e.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var o=t.get(r);if(o!==void 0){var c=$i(i.default,i.share);if(c!=="none"&&(ss(e,r,c,null,!1)?(c=e.stateNode,o.paired=c,c.paired=o,ps(e,i.onShare)):Gi(e.child,!1)),t.delete(r),t.size===0)break}}}Xh(e)}e=e.sibling}}}function Yh(e){if(e.tag===30){var t=e.memoizedProps,i=Ji(t,e.stateNode),r=Xn!==null?Xn.get(i):void 0,o=$i(t.default,r!==void 0?t.share:t.exit);o!=="none"&&(ss(e,i,o,null,!1)?r!==void 0?(o=e.stateNode,r.paired=o,o.paired=r,Xn.delete(i),ps(e,t.onShare)):ps(e,t.onExit):Gi(e.child,!1)),Xn!==null&&Xh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Yh(e),e=e.sibling;else Xn!==null&&Xh(e)}function zg(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,i=Ji(t,e.stateNode);t=$i(t.default,t.update),e.flags&=-5,t!=="none"&&ss(e,i,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&zg(e);e=e.sibling}}function Zh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Gi(e.child,!1))}Zh(e)}e=e.sibling}}function uc(e){if(e.tag===30)e.stateNode.paired=null,Gi(e.child,!1),Zh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)uc(e),e=e.sibling;else Zh(e)}function Og(e){for(e=e.child;e!==null;)e.tag===30?Gi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Og(e),e=e.sibling}function Qh(e,t,i,r,o,c,y){for(var T=!1;t!==null;){if(t.tag===5){var z=t.stateNode;if(c!==null&&Pn<c.length){var j=c[Pn],ie=Df(z);(j.view||ie.view)&&(T=!0);var fe;if(fe=(e.flags&4)===0)if(ie.clip)fe=!0;else{fe=j.rect;var k=ie.rect;fe=fe.y!==k.y||fe.x!==k.x||fe.height!==k.height||fe.width!==k.width}fe&&(e.flags|=4),ie.abs?ie=!j.abs:(j=j.rect,ie=ie.rect,ie=j.height!==ie.height||j.width!==ie.width),ie&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Lv(z,Pn===0?i:i+"_"+Pn,o),T&&(e.flags&4)!==0||(Pi===null&&(Pi=[]),Pi.push(z,Pn===0?r:r+"_"+Pn,t.memoizedProps)),Pn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&y?e.flags|=t.flags&32:Qh(e,t.child,i,r,o,c,y)&&(T=!0));t=t.sibling}return T}function Ug(e,t){for(e=e.child;e!==null;){if(e.tag===30){var i=e.memoizedProps,r=e.stateNode,o=Ji(i,r),c=$i(i.default,i.update),y;y=e.memoizedState,e.memoizedState=null,r=e;var T=e.child;Pn=0,o=Qh(r,T,o,o,c,y,!1),(e.flags&4)!==0&&o&&ps(e,i.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Ug(e);e=e.sibling}}var fn=!1,St=!1,Ii=!1,Kh=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,dn=null,Hi=!1,Lo=!1,hc=!1,Jh=!1;function Yx(e,t,i){if(e=e.containerInfo,Tf=Ts,e=Hp(e),Gu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,y=o.focusNode;o=o.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break e}var T=0,z=-1,j=-1,ie=0,fe=0,k=e,te=null;t:for(;;){for(var Ce;k!==r||c!==0&&k.nodeType!==3||(z=T+c),k!==y||o!==0&&k.nodeType!==3||(j=T+o),k.nodeType===3&&(T+=k.nodeValue.length),(Ce=k.firstChild)!==null;)te=k,k=Ce;for(;;){if(k===e)break t;if(te===r&&++ie===c&&(z=T),te===y&&++fe===o&&(j=T),(Ce=k.nextSibling)!==null)break;k=te,te=k.parentNode}k=Ce}r=z===-1||j===-1?null:{start:z,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(wf={focusedElem:e,selectionRange:r},Ts=!1,i=(i&335544064)===i,dn=t,t=i?9270:1024;dn!==null;){if(e=dn,i&&(r=e.deletions,r!==null))for(c=0;c<r.length;c++)i&&Yh(r[c]);if(e.alternate===null&&(e.flags&2)!==0)i&&Rg(e),fc(i);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Yh(r),fc(i);continue}else if(r!==null&&r.memoizedState!==null){i&&Rg(e),fc(i);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,dn=r):(i&&zg(e),fc(i))}}Xn=null}function fc(e){for(;dn!==null;){var t=dn,i=e,r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&r!==null){i=void 0,o=r.memoizedProps,r=r.memoizedState;var c=t.stateNode;try{var y=pr(t.type,o);i=c.getSnapshotBeforeUpdate(y,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(T){Tt(t,t.return,T)}}break;case 3:if((o&1024)!==0){if(r=t.stateNode.containerInfo,i=r.nodeType,i===9)Nf(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Nf(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=Ji(r.memoizedProps,r.stateNode),o=t.memoizedProps,o=$i(o.default,o.update),o!=="none"&&ss(r,i,o,r.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,dn=r;break}dn=t.return}}function Pg(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(e,i),r&4&&Do(5,i);break;case 1:if(Vi(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(y){Tt(i,i.return,y)}else{var o=pr(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Tt(i,i.return,y)}}r&64&&wg(i),r&512&&Bi(i,i.return);break;case 3:if(Vi(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{pm(e,t)}catch(y){Tt(i,i.return,y)}}break;case 27:t===null&&r&4&&Dg(i);case 26:case 5:Vi(e,i),t===null&&r&4&&Fh(i),r&512&&Bi(i,i.return);break;case 12:Vi(e,i);break;case 31:Vi(e,i),r&4&&Vg(e,i);break;case 13:Vi(e,i),r&4&&Fg(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=sb.bind(null,i),Vb(e,i))));break;case 22:if(r=i.memoizedState!==null||fn,!r){var c=t!==null&&t.memoizedState!==null||St;t=fn,o=St,fn=r,(St=c)&&!o?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Mi(e,i,r)):Vi(e,i),fn=t,St=o}break;case 30:Vi(e,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:Vi(e,i)}}function $h(e,t){for(e=e.child;e!==null;)Gg(e,t),e=e.sibling}function Gg(e,t){switch(e.tag){case 5:case 26:try{var i=e.stateNode;if(t){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var o=e.stateNode,c=e.memoizedProps.style,y=c!=null&&c.hasOwnProperty("display")?c.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(z){Tt(e,e.return,z)}ef(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,gt=!0}catch(z){Tt(e,e.return,z)}break;case 18:try{var T=e.stateNode;t?Rv(T,!0):Rv(e.stateNode,!1)}catch(z){Tt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&$h(e,t);break;default:$h(e,t)}}function ef(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var i=e,r=t;switch(i.tag){case 4:Gg(i,r);break e;case 22:i.memoizedState===null&&ef(i,r);break e;default:ef(i,r)}}e=e.sibling}}function Ig(e){var t=e.alternate;t!==null&&(e.alternate=null,Ig(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pt=null,Gn=!1;function bi(e,t,i){for(i=i.child;i!==null;)Hg(e,t,i),i=i.sibling}function Hg(e,t,i){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(bt,i)}catch{}switch(i.tag){case 26:St||bn(i,t),bi(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!St&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:St||bn(i,t),Ro(i);var r=Pt,o=Gn;Ga(i.type)&&(Pt=i.stateNode,Gn=!1),bi(e,t,i),qv(i.stateNode,i.type,i.memoizedProps),Pt=r,Gn=o;break;case 5:St||bn(i,t),Ro(i);case 6:if(i.tag===6&&Ro(i),r=Pt,o=Gn,Pt=null,bi(e,t,i),Pt=r,Gn=o,Pt!==null)if(Gn)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(i.stateNode),gt=!0}catch(c){Tt(i,t,c)}else try{Pt.removeChild(i.stateNode),gt=!0}catch(c){Tt(i,t,c)}break;case 18:Pt!==null&&(Gn?(e=Pt,Dv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),ws(e)):Dv(Pt,i.stateNode));break;case 4:r=Pt,o=Gn,Pt=i.stateNode.containerInfo,Gn=!0,bi(e,t,i),Pt=r,Gn=o;break;case 0:case 11:case 14:case 15:La(2,i,t),St||La(4,i,t),bi(e,t,i);break;case 1:St||(bn(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Eg(i,t,r)),bi(e,t,i);break;case 21:bi(e,t,i);break;case 22:St=(r=St)||i.memoizedState!==null,bi(e,t,i),St=r;break;case 30:bn(i,t),bi(e,t,i);break;case 7:St||bn(i,t),bi(e,t,i);break;default:bi(e,t,i)}}function Vg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ws(e)}catch(i){Tt(t,t.return,i)}}}function Fg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ws(e)}catch(i){Tt(t,t.return,i)}}function Zx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bg),t;default:throw Error(s(435,e.tag))}}function dc(e,t){var i=Zx(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var o=ob.bind(null,e,r);r.then(o,o)}})}function Rn(e,t,i){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],y=e,T=t,z=T;e:for(;z!==null;){switch(z.tag){case 27:if(Ga(z.type)){Pt=z.stateNode,Gn=!1;break e}break;case 5:Pt=z.stateNode,Gn=!1;break e;case 3:case 4:Pt=z.stateNode.containerInfo,Gn=!0;break e}z=z.return}if(Pt===null)throw Error(s(160));Hg(y,T,c),Pt=null,Gn=!1,y=c.alternate,y!==null&&(y.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kg(t,e,i),t=t.sibling}var Si=null;function kg(e,t,i){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var y=r[c];y.ref.impl=y.nextImpl}Rn(t,e,i),Ln(e),o&4&&(La(3,e,e.return),Do(3,e),La(5,e,e.return));break;case 1:Rn(t,e,i),Ln(e),o&512&&(St||r===null||bn(r,r.return)),o&64&&fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:if(c=Si,Rn(t,e,i),Ln(e),o&512&&(St||r===null||bn(r,r.return)),o&4)if(o=r!==null?r.memoizedState:null,i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null)if(fn)e.stateNode=Ev(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,i=e.memoizedProps,o=c.ownerDocument||c;t:switch(t){case"title":r=o.getElementsByTagName("title")[0],(!r||r[nn]||r[Ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=o.createElement(t),o.head.insertBefore(r,o.querySelector("head > title"))),Sn(r,t,i),r[Ot]=e,un(r),t=r;break e;case"link":if(c=Qv("link","href",o).get(t+(i.href||""))){for(y=0;y<c.length;y++)if(r=c[y],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(y,1);break t}}r=o.createElement(t),Sn(r,t,i),o.head.appendChild(r);break;case"meta":if(c=Qv("meta","content",o).get(t+(i.content||""))){for(y=0;y<c.length;y++)if(r=c[y],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(y,1);break t}}r=o.createElement(t),Sn(r,t,i),o.head.appendChild(r);break;default:throw Error(s(468,t))}r[Ot]=e,un(r),t=r}e.stateNode=t}else fn||If(c,e.type,e.stateNode);else e.stateNode=Zv(c,i,e.memoizedProps);else o!==i?(o===null?(t=r.stateNode,t===null||St||t.parentNode.removeChild(t)):o.count--,i===null?fn||If(c,e.type,e.stateNode):Zv(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&kh(e,e.memoizedProps,r.memoizedProps);break;case 27:Rn(t,e,i),Ln(e),o&512&&(St||r===null||bn(r,r.return)),r!==null&&o&4&&kh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(c=Ii,Ii=!1,Rn(t,e,i),Ii=c,Ln(e),o&512&&(St||r===null||bn(r,r.return)),e.flags&32){t=e.stateNode;try{Fr(t,""),gt=!0}catch(ie){Tt(e,e.return,ie)}}o&4&&e.stateNode!=null&&(t=e.memoizedProps,kh(e,t,r!==null?r.memoizedProps:t)),o&1024&&(Kh=!0);break;case 6:if(Rn(t,e,i),Ln(e),o&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t,gt=!0}catch(ie){Tt(e,e.return,ie)}}break;case 3:if(gt=!1,Cc=null,c=Si,Si=Ho(t.containerInfo),Rn(t,e,i),Si=c,Ln(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(ie){Tt(e,e.return,ie)}Kh&&(Kh=!1,qg(e)),gt=!1;break;case 4:o=Ii,Ii=fn,r=up(),c=Si,Si=Ho(e.stateNode.containerInfo),Rn(t,e,i),Ln(e),Si=c,gt&&Lo&&(hc=!0),gt=r,Ii=o;break;case 12:Rn(t,e,i),Ln(e);break;case 31:Rn(t,e,i),Ln(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,dc(e,t)));break;case 13:Rn(t,e,i),Ln(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(gc=V()),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,dc(e,t)));break;case 22:c=e.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var T=fn,z=St,j=Ii;fn=T||c,Ii=j||c,St=z||y,Rn(t,e,i),St=z,Ii=j,fn=T,Ln(e),o&8192&&(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,!c||r===null||y||fn||St||(t=y||St,i=fn,r=St,fn=c||fn,St=t,Na(e,2),fn=i,St=r),!c&&Ii||$h(e,c)),o&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,dc(e,i))));break;case 19:Rn(t,e,i),Ln(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,dc(e,t)));break;case 30:o&512&&(St||r===null||bn(r,r.return)),o=up(),c=Lo,y=(i&335544064)===i,T=e.memoizedProps,Lo=y&&$i(T.default,T.update)!=="none",Rn(t,e,i),Ln(e),y&&r!==null&&gt&&(e.flags|=4),Lo=c,gt=o;break;case 21:break;case 7:o&512&&(St||r===null||bn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Rn(t,e,i),Ln(e)}}function Ln(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(Cg(r)){i=r;break}r=r.return}r=null;for(var o=e.return;o!==null;){if(Vh(o)){var c=o.stateNode;r===null?r=[c]:r.push(c)}if(Hh(o))break;o=o.return}var y=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var T=i.stateNode,z=qh(e);oc(e,z,T,y);break;case 5:var j=i.stateNode;i.flags&32&&(Fr(j,""),i.flags&=-33);var ie=qh(e);oc(e,ie,j,y);break;case 3:case 4:var fe=i.stateNode.containerInfo,k=qh(e);jh(e,k,fe,y);break;default:throw Error(s(161))}}catch(te){Tt(e,e.return,te)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qg(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ts=!0,t.reset(),Ts=!1),e=e.sibling}}function os(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)jg(t,e),t=t.sibling;else Ug(t)}function jg(e,t){var i=e.alternate;if(i===null)Wh(e,!1);else switch(e.tag){case 3:if(Jh=Hi=!1,Lg(),os(t,e),!Hi&&!hc){if(e=Pi,e!==null)for(var r=0;r<e.length;r+=3){i=e[r];var o=e[r+1];Nv(i,e[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jh=!0}Pi=null;break;case 5:os(t,e);break;case 4:r=Hi,Hi=!1,os(t,e),Hi&&(hc=!0),Hi=r;break;case 22:e.memoizedState===null&&(i.memoizedState!==null?Wh(e,!1):os(t,e));break;case 30:r=Hi,o=Lg(),Hi=!1,os(t,e),Hi&&(e.flags|=4);var c=e.memoizedProps,y=e.stateNode;t=Ji(c,y),y=Ji(i.memoizedProps,y);var T=$i(c.default,c.update);T==="none"?t=!1:(c=i.memoizedState,i.memoizedState=null,i=e.child,Pn=0,t=Qh(e,i,t,y,T,c,!0),Pn!==(c===null?0:c.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ps(e,e.memoizedProps.onUpdate),Pi=o):o!==null&&(o.push.apply(o,Pi),Pi=o),Hi=(e.flags&32)!==0?!0:r;break;default:os(t,e)}}function Vi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pg(e,t.alternate,t),t=t.sibling}function Na(e,t){for(e=e.child;e!==null;){var i=e,r=t;switch(i.tag){case 0:case 11:case 14:case 15:La(4,i,i.return),Na(i,r);break;case 1:bn(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&Eg(i,i.return,o),Na(i,r);break;case 27:(r&2)!==0&&qv(i.stateNode,i.type,i.memoizedProps);case 5:bn(i,i.return),i.tag!==5&&i.tag!==27||Ro(i),Na(i,r);break;case 6:Ro(i);break;case 26:bn(i,i.return),o=i.stateNode,i.memoizedState!==null||o===null||St||o.parentNode.removeChild(o),Na(i,r);break;case 22:i.memoizedState===null&&Na(i,r);break;case 30:bn(i,i.return),Na(i,r);break;case 7:bn(i,i.return);default:Na(i,r)}e=e.sibling}}function Mi(e,t,i){for(i=(t.subtreeFlags&8772)!==0?i:i&-2,t=t.child;t!==null;){var r=t.alternate,o=e,c=t,y=c.flags,T=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Mi(o,c,i),Do(4,c);break;case 1:if(Mi(o,c,i),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(ie){Tt(r,r.return,ie)}if(r=c,o=r.updateQueue,o!==null){var z=r.stateNode;try{var j=o.shared.hiddenCallbacks;if(j!==null)for(o.shared.hiddenCallbacks=null,o=0;o<j.length;o++)dm(j[o],z)}catch(ie){Tt(r,r.return,ie)}}T&&y&64&&wg(c),Bi(c,c.return);break;case 27:(i&2)!==0&&Dg(c);case 5:c.tag!==5&&c.tag!==27||Ag(c),Mi(o,c,i),T&&r===null&&y&4&&Fh(c),Bi(c,c.return);break;case 6:Ag(c);break;case 26:z=c.stateNode,c.memoizedState!==null||z===null||fn||If(Ho(z.ownerDocument),c.type,z),Mi(o,c,i),T&&r===null&&y&4&&Fh(c),Bi(c,c.return);break;case 12:Mi(o,c,i);break;case 31:Mi(o,c,i),T&&y&4&&Vg(o,c);break;case 13:Mi(o,c,i),T&&y&4&&Fg(o,c);break;case 22:c.memoizedState===null&&Mi(o,c,i),Bi(c,c.return);break;case 30:Mi(o,c,i),Bi(c,c.return);break;case 7:Bi(c,c.return);default:Mi(o,c,i)}t=t.sibling}}function tf(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&go(i))}function nf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&go(e))}function pi(e,t,i,r){var o=(i&335544064)===i;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;t!==null;)Wg(e,t,i,r),t=t.sibling;else o&&Og(t)}function Wg(e,t,i,r){var o=(i&335544064)===i;o&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&uc(t);var c=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,i,r),c&2048&&Do(9,t);break;case 1:pi(e,t,i,r);break;case 3:pi(e,t,i,r),o&&Jh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),c&2048&&(c=null,t.alternate!==null&&(c=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==c&&(t.refCount++,c!=null&&go(c)));break;case 12:if(c&2048){pi(e,t,i,r),c=t.stateNode;try{var y=t.memoizedProps,T=y.id,z=y.onPostCommit;typeof z=="function"&&z(T,t.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){Tt(t,t.return,j)}}else pi(e,t,i,r);break;case 31:pi(e,t,i,r);break;case 13:pi(e,t,i,r);break;case 23:break;case 22:y=t.stateNode,T=t.alternate,t.memoizedState!==null?(o&&T!==null&&T.memoizedState===null&&uc(T),y._visibility&2?pi(e,t,i,r):No(e,t)):(o&&T!==null&&T.memoizedState!==null&&uc(t),y._visibility&2?pi(e,t,i,r):(y._visibility|=2,ls(e,t,i,r,(t.subtreeFlags&10256)!==0||!1))),c&2048&&tf(T,t);break;case 24:pi(e,t,i,r),c&2048&&nf(t.alternate,t);break;case 30:o&&(c=t.alternate,c!==null&&(Gi(c.child,!0),Gi(t.child,!0))),pi(e,t,i,r);break;default:pi(e,t,i,r)}}function ls(e,t,i,r,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,y=t,T=i,z=r,j=y.flags;switch(y.tag){case 0:case 11:case 15:ls(c,y,T,z,o),Do(8,y);break;case 23:break;case 22:var ie=y.stateNode;y.memoizedState!==null?ie._visibility&2?ls(c,y,T,z,o):No(c,y):(ie._visibility|=2,ls(c,y,T,z,o)),o&&j&2048&&tf(y.alternate,y);break;case 24:ls(c,y,T,z,o),o&&j&2048&&nf(y.alternate,y);break;default:ls(c,y,T,z,o)}t=t.sibling}}function No(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,o=r.flags;switch(r.tag){case 22:No(i,r),o&2048&&tf(r.alternate,r);break;case 24:No(i,r),o&2048&&nf(r.alternate,r);break;default:No(i,r)}t=t.sibling}}var mr=8192;function gr(e,t,i){if(e.subtreeFlags&mr)for(e=e.child;e!==null;)Xg(e,t,i),e=e.sibling}function Xg(e,t,i){switch(e.tag){case 26:gr(e,t,i),e.flags&mr&&(e.memoizedState!==null?tS(i,Si,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&e0(i,e)));break;case 5:gr(e,t,i),e.flags&mr&&(e=e.stateNode,(t&335544128)===t&&e0(i,e));break;case 3:case 4:var r=Si;Si=Ho(e.stateNode.containerInfo),gr(e,t,i),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=mr,mr=16777216,gr(e,t,i),mr=r):gr(e,t,i));break;case 30:if((e.flags&mr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var o=e.stateNode;o.paired=null,Xn===null&&(Xn=new Map),Xn.set(r,o)}gr(e,t,i);break;default:gr(e,t,i)}}function Yg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];dn=r,Qg(r,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:zo(e),e.flags&2048&&La(9,e,e.return);break;case 3:zo(e);break;case 12:zo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pc(e)):zo(e);break;default:zo(e)}}function pc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];dn=r,Qg(r,e)}Yg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),pc(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,pc(t));break;default:pc(t)}e=e.sibling}}function Qg(e,t){for(;dn!==null;){var i=dn;switch(i.tag){case 0:case 11:case 15:La(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:go(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,dn=r;else e:for(i=e;dn!==null;){r=dn;var o=r.sibling,c=r.return;if(Ig(r),r===i){dn=null;break e}if(o!==null){o.return=c,dn=o;break e}dn=c}}}var Qx={getCacheForType:function(e){var t=yn(Kt),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return yn(Kt).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,yt=0,Dt=null,st=null,ht=0,Mt=0,Yn=null,za=!1,cs=!1,af=!1,la=0,jt=0,Oa=0,vr=0,mc=0,Zn=0,us=0,Oo=null,In=null,rf=!1,gc=0,Kg=0,vc=1/0,yc=null,Ua=null,Vt=0,Ti=null,yr=null,Fi=0,sf=0,of=null,Jg=null,hs=null,fs=null,ds=null,Uo=0,_c=null;function Qn(){return(yt&2)!==0&&ht!==0?ht&-ht:Te.T!==null?vf():rt()}function $g(){if(Zn===0)if((ht&536870912)===0||nt){var e=ae;ae<<=1,(ae&3932160)===0&&(ae=262144),Zn=e}else Zn=536870912;return e=_n.current,e!==null&&(e.flags|=32),Zn}function ps(e,t){if(t!=null){var i=e.stateNode,r=i.ref;r===null&&(r=i.ref=zv(Ji(e.memoizedProps,i))),fs===null&&(fs=[]),fs.push(t.bind(null,r))}}function Hn(e,t,i){(e===Dt&&(Mt===2||Mt===9)||e.cancelPendingCommit!==null)&&(ms(e,0),Ba(e,ht,Zn,!1)),tt(e,i),((yt&2)===0||e!==Dt)&&(e===Dt&&((yt&2)===0&&(vr|=i),jt===4&&Ba(e,ht,Zn,!1)),ki(e))}function ev(e,t,i){if((yt&6)!==0)throw Error(s(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Ie(e,t),o=r?eb(e,t):cf(e,t,!0),c=r;do{if(o===0){cs&&!r&&Ba(e,t,0,!1);break}else{if(i=e.current.alternate,c&&!Jx(i)){o=cf(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var T=e;o=Oo;var z=T.current.memoizedState.isDehydrated;if(z&&(ms(T,y).flags|=256),y=cf(T,y,!1),y!==2&&y!==6){if(af&&!z){T.errorRecoveryDisabledLanes|=c,vr|=c,o=4;break e}c=In,In=o,c!==null&&(In===null?In=c:In.push.apply(In,c))}o=y}if(c=!1,o!==2)continue}}if(o===1){ms(e,0),Ba(e,t,0,!0);break}e:{switch(r=e,c=o,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ba(r,t,Zn,!za);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=gc+300-V(),10<o)){if(Ba(r,t,Zn,!za),pe(r,0,!0)!==0)break e;Fi=t,r.timeoutHandle=Cf(tv.bind(null,r,i,In,yc,rf,t,Zn,vr,us,za,c,"Throttled",-0,0),o);break e}tv(r,i,In,yc,rf,t,Zn,vr,us,za,c,null,-0,0)}}break}while(!0);ki(e)}function tv(e,t,i,r,o,c,y,T,z,j,ie,fe,k,te){e.timeoutHandle=-1;var Ce=t.subtreeFlags,Ue=(c&335544064)===c;if(fe=null,(Ue||Ce&8192||(Ce&16785408)===16785408)&&(fe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Xn=null,Xg(t,c,fe),Ue&&(Ce=fe,Ue=e.containerInfo,Ue=(Ue.nodeType===9?Ue:Ue.ownerDocument).__reactViewTransition,Ue!=null&&(Ce.count++,Ce.waitingForViewTransition=!0,Ce=ko.bind(Ce),Ue.finished.then(Ce,Ce))),Ce=(c&62914560)===c?gc-V():(c&4194048)===c?Kg-V():0,Ce=nS(fe,Ce),Ce!==null)){Fi=c,e.cancelPendingCommit=Ce(cv.bind(null,e,t,c,i,r,o,y,T,z,j,ie,fe,null,k,te)),Ba(e,c,y,!j);return}cv(e,t,c,i,r,o,y,T,z,j,ie,fe)}function Jx(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var o=i[r],c=o.getSnapshot;o=o.value;try{if(!jn(c(),o))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ba(e,t,i,r){t=Ye(e,t),t&=~mc,t&=~vr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var c=31-Tn(o),y=1<<c;r[c]=-1,o&=~y}i!==0&&Ht(e,i,t)}function xc(){return(yt&6)===0?(Bo(0),!1):!0}function lf(){if(st!==null){if(Mt===0)var e=st.return;else e=st,na=rr=null,mh(e),ts=null,_o=0,e=st;for(;e!==null;)Tg(e.alternate,e),e=e.return;st=null}}function ms(e,t){var i=e.timeoutHandle;return i!==-1&&(e.timeoutHandle=-1,Sb(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Fi=0,lf(),Dt=e,st=i=ea(e.current,null),ht=t,Mt=0,Yn=null,za=!1,cs=Ie(e,t),af=!1,us=Zn=mc=vr=Oa=jt=0,In=Oo=null,rf=!1,la=Ye(e,t),Cl(),i}function nv(e,t){Ke=null,Te.H=$l,t===es||t===Il?(t=cm(),Mt=3):t===nh?(t=cm(),Mt=4):Mt=t===Rh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yn=t,st===null&&(jt=1,ec(e,ui(t,e.current)))}function iv(){var e=_n.current;return e===null?!0:(ht&4194048)===ht?En===null:(ht&62914560)===ht||(ht&536870912)!==0?e===En:!1}function av(){var e=Te.H;return Te.H=$l,e===null?$l:e}function rv(){var e=Te.A;return Te.A=Qx,e}function bc(){jt=4,za||(ht&4194048)!==ht&&_n.current!==null||(cs=!0),(Oa&134217727)===0&&(vr&134217727)===0||Dt===null||Ba(Dt,ht,Zn,!1)}function cf(e,t,i){var r=yt;yt|=2;var o=av(),c=rv();(Dt!==e||ht!==t)&&(yc=null,ms(e,t)),t=!1;var y=jt;e:do try{if(Mt!==0&&st!==null){var T=st,z=Yn;switch(Mt){case 8:lf(),y=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(t=!0);var j=Mt;if(Mt=0,Yn=null,gs(e,T,z,j),i&&cs){y=0;break e}break;default:j=Mt,Mt=0,Yn=null,gs(e,T,z,j)}}$x(),y=jt;break}catch(ie){nv(e,ie)}while(!0);return t&&e.shellSuspendCounter++,na=rr=null,yt=r,Te.H=o,Te.A=c,st===null&&(Dt=null,ht=0,Cl()),y}function $x(){for(;st!==null;)sv(st)}function eb(e,t){var i=yt;yt|=2;var r=av(),o=rv();Dt!==e||ht!==t?(yc=null,vc=V()+500,ms(e,t)):cs=Ie(e,t);e:do try{if(Mt!==0&&st!==null){t=st;var c=Yn;t:switch(Mt){case 1:Mt=0,Yn=null,gs(e,t,c,1);break;case 2:case 9:if(om(c)){Mt=0,Yn=null,ov(t);break}t=function(){Mt!==2&&Mt!==9||Dt!==e||(Mt=7),ki(e)},c.then(t,t);break e;case 3:Mt=7;break e;case 4:Mt=5;break e;case 7:om(c)?(Mt=0,Yn=null,ov(t)):(Mt=0,Yn=null,gs(e,t,c,7));break;case 5:var y=null;switch(st.tag){case 26:y=st.memoizedState;case 5:case 27:var T=st;if(y?Jv(y):T.stateNode.complete){Mt=0,Yn=null;var z=T.sibling;if(z!==null)st=z;else{var j=T.return;j!==null?(st=j,Sc(j)):st=null}break t}}Mt=0,Yn=null,gs(e,t,c,5);break;case 6:Mt=0,Yn=null,gs(e,t,c,6);break;case 8:lf(),jt=6;break e;default:throw Error(s(462))}}tb();break}catch(ie){nv(e,ie)}while(!0);return na=rr=null,Te.H=r,Te.A=o,yt=i,st!==null?0:(Dt=null,ht=0,Cl(),jt)}function tb(){for(;st!==null&&!Rt();)sv(st)}function sv(e){var t=Sg(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?Sc(e):st=t}function ov(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=mg(i,t,t.pendingProps,t.type,void 0,ht);break;case 11:t=mg(i,t,t.pendingProps,t.type.render,t.ref,ht);break;case 5:mh(t);var r=t;r===hn&&(nt?(Ol(r),r.tag===5&&r.stateNode!=null&&(Lt=r.stateNode)):(Ol(r),nt=!0));default:Tg(i,t),t=st=Qp(t,la),t=Sg(i,t,la)}e.memoizedProps=e.pendingProps,t===null?Sc(e):st=t}function gs(e,t,i,r){na=rr=null,mh(t),ts=null,_o=0;var o=t.return;try{if(Fx(e,o,t,i,ht)){jt=1,ec(e,ui(i,e.current)),st=null;return}}catch(c){if(o!==null)throw st=o,c;jt=1,ec(e,ui(i,e.current)),st=null;return}t.flags&32768?(nt||r===1?e=!0:cs||(ht&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=_n.current,r!==null&&r.tag===13&&(r.flags|=16384))),lv(t,e)):Sc(t)}function Sc(e){var t=e;do{if((t.flags&32768)!==0){lv(t,za);return}e=t.return;var i=Wx(t.alternate,t,la);if(i!==null){st=i;return}if(t=t.sibling,t!==null){st=t;return}st=t=e}while(t!==null);jt===0&&(jt=5)}function lv(e,t){do{var i=Xx(e.alternate,e);if(i!==null){i.flags&=32767,st=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){st=e;return}st=e=i}while(e!==null);jt=6,st=null}function cv(e,t,i,r,o,c,y,T,z,j,ie,fe){e.cancelPendingCommit=null;do Mc();while(Vt!==0);if((yt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===Dt&&(st=Dt=null,ht=0),yr=t,Ti=e,Fi=i,of=o,Jg=r,nb(e,t,i,y,T,z,fe)}}function nb(e,t,i,r,o,c,y){var T=t.lanes|t.childLanes;if(sf=T,T|=ku,ut(e,i,T,r,o,c),fs=null,(i&335544064)===i?(ds=Rx(e),r=10262):(ds=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,lb(Pe,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),lc=!1,r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=Te.T,Te.T=null,o=we.p,we.p=2,c=yt,yt|=4;try{Yx(e,t,i)}finally{yt=c,we.p=o,Te.T=r}}Vt=1,lc?hs=Cb(y,e.containerInfo,ds,uf,hf,ab,ff,df,ib):(uf(),hf(),ff())}function ib(e){if(Vt!==0){var t=Ti.onRecoverableError;t(e,{componentStack:null})}}function ab(){Vt===3&&(Vt=0,jg(yr,Ti),Vt=4)}function uf(){if(Vt===1){Vt=0;var e=Ti,t=yr,i=Fi,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=Te.T,Te.T=null;var o=we.p;we.p=2;var c=yt;yt|=4;try{Lo=hc=!1,kg(t,e,i),i=wf;var y=Hp(e.containerInfo),T=i.focusedElem,z=i.selectionRange;if(y!==T&&T&&T.ownerDocument&&Ip(T.ownerDocument.documentElement,T)){if(z!==null&&Gu(T)){var j=z.start,ie=z.end;if(ie===void 0&&(ie=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(ie,T.value.length);else{var fe=T.ownerDocument||document,k=fe&&fe.defaultView||window;if(k.getSelection){var te=k.getSelection(),Ce=T.textContent.length,Ue=Math.min(z.start,Ce),Je=z.end===void 0?Ue:Math.min(z.end,Ce);!te.extend&&Ue>Je&&(y=Je,Je=Ue,Ue=y);var q=Gp(T,Ue),G=Gp(T,Je);if(q&&G&&(te.rangeCount!==1||te.anchorNode!==q.node||te.anchorOffset!==q.offset||te.focusNode!==G.node||te.focusOffset!==G.offset)){var K=fe.createRange();K.setStart(q.node,q.offset),te.removeAllRanges(),Ue>Je?(te.addRange(K),te.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),te.addRange(K))}}}}for(fe=[],te=T;te=te.parentNode;)te.nodeType===1&&fe.push({element:te,left:te.scrollLeft,top:te.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<fe.length;T++){var ue=fe[T];ue.element.scrollLeft=ue.left,ue.element.scrollTop=ue.top}}Ts=!!Tf,wf=Tf=null}finally{yt=c,we.p=o,Te.T=r}}e.current=t,Vt=2}}function hf(){if(Vt===2){Vt=0;var e=Ti,t=yr,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=Te.T,Te.T=null;var r=we.p;we.p=2;var o=yt;yt|=4;try{Pg(e,t.alternate,t)}finally{yt=o,we.p=r,Te.T=i}}Vt=3}}function ff(){if(Vt===4||Vt===3){Vt=0;var e=hs;hs=null,Qt();var t=Ti,i=yr,r=Fi,o=Jg,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?Vt=5:(Vt=0,yr=Ti=null,uv(t,t.pendingLanes)),c=t.pendingLanes,c===0&&(Ua=null),Bt(r),i=i.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=Te.T,c=we.p,we.p=2,Te.T=null;try{for(var y=t.onRecoverableError,T=0;T<o.length;T++){var z=o[T];y(z.value,{componentStack:z.stack})}}finally{Te.T=i,we.p=c}}if(o=fs,y=ds,ds=null,o!==null&&(fs=null,y===null&&(y=[]),e!==null))for(z=0;z<o.length;z++)i=(0,o[z])(y),i!==void 0&&e.finished.finally(i);(Fi&3)!==0&&Mc(),ki(t),c=t.pendingLanes,(r&261930)!==0&&(c&42)!==0?t===_c?Uo++:(Uo=0,_c=t):(Uo=0,_c=null),Bo(0)}}function uv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,go(t)))}function Mc(){return hs!==null&&(hs.skipTransition(),hs=null),uf(),hf(),ff(),df()}function df(){if(Vt!==5)return!1;var e=Ti,t=sf;sf=0;var i=Bt(Fi),r=Te.T,o=we.p;try{we.p=32>i?32:i,Te.T=null,i=of,of=null;var c=Ti,y=Fi;if(Vt=0,yr=Ti=null,Fi=0,(yt&6)!==0)throw Error(s(331));var T=yt;if(yt|=4,Zg(c.current),Wg(c,c.current,y,i),yt=T,Bo(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(bt,c)}catch{}return!0}finally{we.p=o,Te.T=r,uv(e,t)}}function hv(e,t,i){t=ui(i,t),t=Dh(e.stateNode,t,2),e=Aa(e,t,2),e!==null&&(tt(e,2),ki(e))}function Tt(e,t,i){if(e.tag===3)hv(e,e,i);else for(;t!==null;){if(t.tag===3){hv(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))){e=ui(i,e),i=og(2),r=Aa(t,i,2),r!==null&&(lg(i,r,t,e),tt(r,2),ki(r));break}}t=t.return}}function pf(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new Kx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(i)||(af=!0,o.add(i),e=rb.bind(null,e,t,i),t.then(e,e))}function rb(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Dt===e&&(ht&i)===i&&((jt===4||jt===3&&(ht&62914560)===ht&&300>V()-gc)&&(yt&2)===0?ms(e,0):mc|=i,us===ht&&(us=0)),ki(e)}function fv(e,t){t===0&&(t=et()),e=nr(e,t),e!==null&&(tt(e,t),ki(e))}function sb(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),fv(e,i)}function ob(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),fv(e,i)}function lb(e,t){return Ve(e,t)}var vs=null,ys=null,mf=!1,Tc=!1,gf=!1,Pa=0;function ki(e){e!==ys&&e.next===null&&(ys===null?vs=ys=e:ys=ys.next=e),Tc=!0,mf||(mf=!0,ub())}function Bo(e,t){if(!gf&&Tc){gf=!0;do for(var i=!1,r=vs;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var y=r.suspendedLanes,T=r.pingedLanes;c=(1<<31-Tn(42|e)+1)-1,c&=o&~(y&~T),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,gv(r,c))}else c=ht,c=pe(r,r===Dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ie(r,c)||(i=!0,gv(r,c));r=r.next}while(i);gf=!1}}function cb(){dv()}function dv(){Tc=mf=!1;var e=0;Pa!==0&&bb()&&(e=Pa);for(var t=V(),i=null,r=vs;r!==null;){var o=r.next,c=pv(r,t);c===0?(r.next=null,i===null?vs=o:i.next=o,o===null&&(ys=i)):(i=r,(e!==0||(c&3)!==0)&&(Tc=!0)),r=o}Vt!==0&&Vt!==5||Bo(e),Pa!==0&&(Pa=0)}function pv(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var y=31-Tn(c),T=1<<y,z=o[y];z===-1?((T&i)===0||(T&r)!==0)&&(o[y]=$e(T,t)):z<=t&&(e.expiredLanes|=T),c&=~T}if(t=Dt,i=ht,i=pe(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Mt===2||Mt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&lt(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Ie(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&lt(r),Bt(i)){case 2:case 8:i=ze;break;case 32:i=Pe;break;case 268435456:i=Xt;break;default:i=Pe}return r=mv.bind(null,e),i=Ve(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&lt(r),e.callbackPriority=2,e.callbackNode=null,2}function mv(e,t){if(Vt!==0&&Vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Mc()&&e.callbackNode!==i)return null;var r=ht;return r=pe(e,e===Dt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ev(e,r,t),pv(e,V()),e.callbackNode!=null&&e.callbackNode===i?mv.bind(null,e):null)}function gv(e,t){if(Mc())return null;ev(e,t,!0)}function ub(){Mb(function(){(yt&6)!==0?Ve(Se,cb):dv()})}function vf(){if(Pa===0){var e=lr;e===0&&(e=D,D<<=1,(D&261888)===0&&(D=256)),Pa=e}return Pa}function vv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(e)}function hb(e,t,i,r,o){if(t==="submit"&&i&&i.stateNode===o){var c=vv((o[gn]||null).action),y=r.submitter;y&&(t=(t=y[gn]||null)?vv(t.formAction):y.getAttribute("formAction"),t!==null&&(c=t,y=null));var T=new Tl("action","action",null,r,o);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Pa!==0){var z=new FormData(o,y);Th(i,{pending:!0,data:z,method:o.method,action:c},null,z)}}else typeof c=="function"&&(T.preventDefault(),z=new FormData(o,y),Th(i,{pending:!0,data:z,method:o.method,action:c},c,z))},currentTarget:o}]})}}for(var yf=0;yf<Fu.length;yf++){var _f=Fu[yf],fb=_f.toLowerCase(),db=_f[0].toUpperCase()+_f.slice(1);xi(fb,"on"+db)}xi(kp,"onAnimationEnd"),xi(qp,"onAnimationIteration"),xi(jp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Sx,"onTransitionRun"),xi(Mx,"onTransitionStart"),xi(Tx,"onTransitionCancel"),xi(Wp,"onTransitionEnd"),Hr("onMouseEnter",["mouseout","mouseover"]),Hr("onMouseLeave",["mouseout","mouseover"]),Hr("onPointerEnter",["pointerout","pointerover"]),Hr("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function yv(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],o=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var y=r.length-1;0<=y;y--){var T=r[y],z=T.instance,j=T.currentTarget;if(T=T.listener,z!==c&&o.isPropagationStopped())break e;c=T,o.currentTarget=j;try{c(o)}catch(ie){Al(ie)}o.currentTarget=null,c=z}else for(y=0;y<r.length;y++){if(T=r[y],z=T.instance,j=T.currentTarget,T=T.listener,z!==c&&o.isPropagationStopped())break e;c=T,o.currentTarget=j;try{c(o)}catch(ie){Al(ie)}o.currentTarget=null,c=z}}}}function ot(e,t){var i=t[Ur];i===void 0&&(i=t[Ur]=new Set);var r=e+"__bubble";i.has(r)||(_v(t,e,2,!1),i.add(r))}function xf(e,t,i){var r=0;t&&(r|=4),_v(i,e,r,t)}var wc="_reactListening"+Math.random().toString(36).slice(2);function bf(e){if(!e[wc]){e[wc]=!0,sp.forEach(function(i){i!=="selectionchange"&&(pb.has(i)||xf(i,!1,e),xf(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wc]||(t[wc]=!0,xf("selectionchange",!1,t))}}function _v(e,t,i,r){switch(l0(t)){case 2:var o=sS;break;case 8:o=oS;break;default:o=Vf}i=o.bind(null,t,i,e),o=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function Sf(e,t,i,r,o){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var T=r.stateNode.containerInfo;if(T===o)break;if(y===4)for(y=r.return;y!==null;){var z=y.tag;if((z===3||z===4)&&y.stateNode.containerInfo===o)return;y=y.return}for(;T!==null;){if(y=Ni(T),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){r=c=y;continue e}T=T.parentNode}}r=r.return}_p(function(){var j=c,ie=Eu(i),fe=[];e:{var k=Xp.get(e);if(k!==void 0){var te=Tl,Ce=e;switch(e){case"keypress":if(Sl(i)===0)break e;case"keydown":case"keyup":te=J_;break;case"focusin":Ce="focus",te=Nu;break;case"focusout":Ce="blur",te=Nu;break;case"beforeblur":case"afterblur":te=Nu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=ix;break;case kp:case qp:case jp:te=k_;break;case Wp:te=rx;break;case"scroll":case"scrollend":te=G_;break;case"wheel":te=ox;break;case"copy":case"cut":case"paste":te=j_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=Tp;break;case"submit":te=tx;break;case"toggle":case"beforetoggle":te=cx}var Ue=(t&4)!==0,Je=!Ue&&(e==="scroll"||e==="scrollend"),q=Ue?k!==null?k+"Capture":null:k;Ue=[];for(var G=j,K;G!==null;){var ue=G;if(K=ue.stateNode,ue=ue.tag,ue!==5&&ue!==26&&ue!==27||K===null||q===null||(ue=ao(G,q),ue!=null&&Ue.push(Go(G,ue,K))),Je)break;G=G.return}0<Ue.length&&(k=new te(k,Ce,null,i,ie),fe.push({event:k,listeners:Ue}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",te&&i!==wu&&(Ce=i.relatedTarget||i.fromElement)&&(Ni(Ce)||Ce[oi]))break e;(k||te)&&(Ce=ie.window===ie?ie:(te=ie.ownerDocument)?te.defaultView||te.parentWindow:window,k?(te=i.relatedTarget||i.toElement,k=j,te=te?Ni(te):null,te!==null&&(Je=u(te),Ue=te.tag,te!==Je||Ue!==5&&Ue!==27&&Ue!==6)&&(te=null)):(k=null,te=j),k!==te&&(Ue=Sp,ue="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Ue=Tp,ue="onPointerLeave",q="onPointerEnter",G="pointer"),Je=k==null?Ce:io(k),K=te==null?Ce:io(te),Ce=new Ue(ue,G+"leave",k,i,ie),Ce.target=Je,Ce.relatedTarget=K,ue=null,Ni(ie)===j&&(Ue=new Ue(q,G+"enter",te,i,ie),Ue.target=K,Ue.relatedTarget=Je,ue=Ue),Je=ue,Ue=k&&te?H(k,te,mb):null,k!==null&&xv(fe,Ce,k,Ue,!1),te!==null&&Je!==null&&xv(fe,Je,te,Ue,!0)))}e:{if(k=j?io(j):window,te=k.nodeName&&k.nodeName.toLowerCase(),te==="select"||te==="input"&&k.type==="file")var Oe=Np;else if(Rp(k))if(zp)Oe=_x;else{Oe=vx;var ft=gx}else te=k.nodeName,!te||te.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?j&&Tu(j.elementType)&&(Oe=Np):Oe=yx;if(Oe&&(Oe=Oe(e,j))){Lp(fe,Oe,i,ie);break e}ft&&ft(e,k,j)}switch(ft=j?io(j):window,e){case"focusin":(Rp(ft)||ft.contentEditable==="true")&&(Wr=ft,Iu=j,fo=null);break;case"focusout":fo=Iu=Wr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Vp(fe,i,ie);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Vp(fe,i,ie)}var He;if(Ou)e:{switch(e){case"compositionstart":var qe="onCompositionStart";break e;case"compositionend":qe="onCompositionEnd";break e;case"compositionupdate":qe="onCompositionUpdate";break e}qe=void 0}else jr?Cp(e,i)&&(qe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(qe="onCompositionStart");qe&&(wp&&i.locale!=="ko"&&(jr||qe!=="onCompositionStart"?qe==="onCompositionEnd"&&jr&&(He=xp()):(ya=ie,Du="value"in ya?ya.value:ya.textContent,jr=!0)),ft=Ec(j,qe),0<ft.length&&(qe=new Mp(qe,e,null,i,ie),fe.push({event:qe,listeners:ft}),He?qe.data=He:(He=Dp(i),He!==null&&(qe.data=He)))),(He=hx?fx(e,i):dx(e,i))&&(qe=Ec(j,"onBeforeInput"),0<qe.length&&(ft=new Mp("onBeforeInput","beforeinput",null,i,ie),fe.push({event:ft,listeners:qe}),ft.data=He)),hb(fe,e,j,i,ie)}yv(fe,t)})}function Go(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ec(e,t){for(var i=t+"Capture",r=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=ao(e,i),o!=null&&r.unshift(Go(e,o,c)),o=ao(e,t),o!=null&&r.push(Go(e,o,c))),e.tag===3)return r;e=e.return}return[]}function mb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xv(e,t,i,r,o){for(var c=t._reactName,y=[];i!==null&&i!==r;){var T=i,z=T.alternate,j=T.stateNode;if(T=T.tag,z!==null&&z===r)break;T!==5&&T!==26&&T!==27||j===null||(z=j,o?(j=ao(i,c),j!=null&&y.unshift(Go(i,j,z))):o||(j=ao(i,c),j!=null&&y.push(Go(i,j,z)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var gb=/\r\n?/g,vb=/\u0000|\uFFFD/g;function bv(e){return(typeof e=="string"?e:""+e).replace(gb,`
`).replace(vb,"")}function Sv(e,t){return t=bv(t),bv(e)===t}function wt(e,t,i,r,o,c){switch(i){case"children":if(typeof r=="string")t==="body"||t==="textarea"&&r===""||Fr(e,r);else if(typeof r=="number"||typeof r=="bigint")t!=="body"&&Fr(e,""+r);else return;break;case"className":_l(e,"class",r);break;case"tabIndex":_l(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_l(e,i,r);break;case"style":vp(e,r,c);return;case"data":if(t!=="object"){_l(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=xl(r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(t!=="input"&&wt(e,t,"name",o.name,o,null),wt(e,t,"formEncType",o.formEncType,o,null),wt(e,t,"formMethod",o.formMethod,o,null),wt(e,t,"formTarget",o.formTarget,o,null)):(wt(e,t,"encType",o.encType,o,null),wt(e,t,"method",o.method,o,null),wt(e,t,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=xl(r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=zi);return;case"onScroll":r!=null&&ot("scroll",e);return;case"onScrollEnd":r!=null&&ot("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(o.children!=null)throw Error(s(60));c?.__html!==i&&(e.innerHTML=i)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=xl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":ot("beforetoggle",e),ot("toggle",e),yl(e,"popover",r);break;case"xlinkActuate":Qi(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qi(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qi(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qi(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qi(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=B_.get(i)||i,yl(e,i,r);else return}gt=!0}function Mf(e,t,i,r,o,c){switch(i){case"style":vp(e,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(o.children!=null)throw Error(s(60));c?.__html!==i&&(e.innerHTML=i)}}break;case"children":if(typeof r=="string")Fr(e,r);else if(typeof r=="number"||typeof r=="bigint")Fr(e,""+r);else return;break;case"onScroll":r!=null&&ot("scroll",e);return;case"onScrollEnd":r!=null&&ot("scrollend",e);return;case"onClick":r!=null&&(e.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!op.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),c=i.slice(2,o?i.length-7:void 0),t=e[gn]||null,t=t!=null?t[i]:null,typeof t=="function"&&e.removeEventListener(c,t,o),typeof r=="function")){typeof t!="function"&&t!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(c,r,o);break e}gt=!0,i in e?e[i]=r:r===!0?e.setAttribute(i,""):yl(e,i,r)}return}gt=!0}function Sn(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",e),ot("load",e);var r=!1,o=!1,c;for(c in i)if(i.hasOwnProperty(c)){var y=i[c];if(y!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:wt(e,t,c,y,i,null)}}o&&wt(e,t,"srcSet",i.srcSet,i,null),r&&wt(e,t,"src",i.src,i,null);return;case"input":ot("invalid",e);var T=c=y=o=null,z=null,j=null;for(r in i)if(i.hasOwnProperty(r)){var ie=i[r];if(ie!=null)switch(r){case"name":o=ie;break;case"type":y=ie;break;case"checked":z=ie;break;case"defaultChecked":j=ie;break;case"value":c=ie;break;case"defaultValue":T=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,t));break;default:wt(e,t,r,ie,i,null)}}dp(e,c,T,z,j,y,o,!1);return;case"select":ot("invalid",e),r=y=c=null;for(o in i)if(i.hasOwnProperty(o)&&(T=i[o],T!=null))switch(o){case"value":c=T;break;case"defaultValue":y=T;break;case"multiple":r=T;default:wt(e,t,o,T,i,null)}t=c,i=y,e.multiple=!!r,t!=null?Vr(e,!!r,t,!1):i!=null&&Vr(e,!!r,i,!0);return;case"textarea":ot("invalid",e),c=o=r=null;for(y in i)if(i.hasOwnProperty(y)&&(T=i[y],T!=null))switch(y){case"value":r=T;break;case"defaultValue":o=T;break;case"children":c=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:wt(e,t,y,T,i,null)}mp(e,r,o,c);return;case"option":for(z in i)i.hasOwnProperty(z)&&(r=i[z],r!=null)&&(z==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":wt(e,t,z,r,i,null));return;case"dialog":ot("beforetoggle",e),ot("toggle",e),ot("cancel",e),ot("close",e);break;case"iframe":case"object":ot("load",e);break;case"video":case"audio":for(r=0;r<Po.length;r++)ot(Po[r],e);break;case"image":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"embed":case"source":case"link":ot("error",e),ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in i)if(i.hasOwnProperty(j)&&(r=i[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:wt(e,t,j,r,i,null)}return;default:if(Tu(t)){for(ie in i)i.hasOwnProperty(ie)&&(r=i[ie],r!==void 0&&Mf(e,t,ie,r,i,void 0));return}}for(T in i)i.hasOwnProperty(T)&&(r=i[T],r!=null&&wt(e,t,T,r,i,null))}var yb={};function _b(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,y=null,T=null,z=null,j=null,ie=null;for(te in i){var fe=i[te];if(i.hasOwnProperty(te)&&fe!=null)switch(te){case"checked":break;case"value":break;case"defaultValue":z=fe;default:r.hasOwnProperty(te)||wt(e,t,te,null,r,fe)}}for(var k in r){var te=r[k];if(fe=i[k],r.hasOwnProperty(k)&&(te!=null||fe!=null))switch(k){case"type":te!==fe&&(gt=!0),c=te;break;case"name":te!==fe&&(gt=!0),o=te;break;case"checked":te!==fe&&(gt=!0),j=te;break;case"defaultChecked":te!==fe&&(gt=!0),ie=te;break;case"value":te!==fe&&(gt=!0),y=te;break;case"defaultValue":te!==fe&&(gt=!0),T=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(s(137,t));break;default:te!==fe&&wt(e,t,k,te,r,fe)}}Su(e,y,T,z,j,ie,c,o);return;case"select":te=y=T=k=null;for(c in i)if(z=i[c],i.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":te=z;default:r.hasOwnProperty(c)||wt(e,t,c,null,r,z)}for(o in r)if(c=r[o],z=i[o],r.hasOwnProperty(o)&&(c!=null||z!=null))switch(o){case"value":c!==z&&(gt=!0),k=c;break;case"defaultValue":c!==z&&(gt=!0),T=c;break;case"multiple":c!==z&&(gt=!0),y=c;default:c!==z&&wt(e,t,o,c,r,z)}t=T,i=y,r=te,k!=null?Vr(e,!!i,k,!1):!!r!=!!i&&(t!=null?Vr(e,!!i,t,!0):Vr(e,!!i,i?[]:"",!1));return;case"textarea":te=k=null;for(T in i)if(o=i[T],i.hasOwnProperty(T)&&o!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:wt(e,t,T,null,r,o)}for(y in r)if(o=r[y],c=i[y],r.hasOwnProperty(y)&&(o!=null||c!=null))switch(y){case"value":o!==c&&(gt=!0),k=o;break;case"defaultValue":o!==c&&(gt=!0),te=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==c&&wt(e,t,y,o,r,c)}pp(e,k,te);return;case"option":for(var Ce in i)k=i[Ce],i.hasOwnProperty(Ce)&&k!=null&&!r.hasOwnProperty(Ce)&&(Ce==="selected"?e.selected=!1:wt(e,t,Ce,null,r,k));for(z in r)k=r[z],te=i[z],r.hasOwnProperty(z)&&k!==te&&(k!=null||te!=null)&&(z==="selected"?(k!==te&&(gt=!0),e.selected=k&&typeof k!="function"&&typeof k!="symbol"):wt(e,t,z,k,r,te));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ue in i)k=i[Ue],i.hasOwnProperty(Ue)&&k!=null&&!r.hasOwnProperty(Ue)&&wt(e,t,Ue,null,r,k);for(j in r)if(k=r[j],te=i[j],r.hasOwnProperty(j)&&k!==te&&(k!=null||te!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,t));break;default:wt(e,t,j,k,r,te)}return;default:if(Tu(t)){for(var Je in i)k=i[Je],i.hasOwnProperty(Je)&&k!==void 0&&!r.hasOwnProperty(Je)&&Mf(e,t,Je,void 0,r,k);for(ie in r)k=r[ie],te=i[ie],!r.hasOwnProperty(ie)||k===te||k===void 0&&te===void 0||Mf(e,t,ie,k,r,te);return}}for(var q in i)k=i[q],i.hasOwnProperty(q)&&k!=null&&!r.hasOwnProperty(q)&&wt(e,t,q,null,r,k);for(fe in r)k=r[fe],te=i[fe],!r.hasOwnProperty(fe)||k===te||k==null&&te==null||wt(e,t,fe,k,r,te)}function Mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var o=i[r],c=o.transferSize,y=o.initiatorType,T=o.duration;if(c&&T&&Mv(y)){for(y=0,T=o.responseEnd,r+=1;r<i.length;r++){var z=i[r],j=z.startTime;if(j>T)break;var ie=z.transferSize,fe=z.initiatorType;ie&&Mv(fe)&&(z=z.responseEnd,y+=ie*(z<T?1:(T-j)/(z-j)))}if(--r,t+=8*(c+y)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tf=null,wf=null;function Io(e){return e.nodeType===9?e:e.ownerDocument}function Tv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ev(e,t,i,r){return i=Io(i).createElement(e),i[Ot]=r,i[gn]=t,Sn(i,e,t),un(i),i}function Ef(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Af=null;function bb(){var e=window.event;return e&&e.type==="popstate"?e===Af?!1:(Af=e,!0):(Af=null,!1)}var Cf=typeof setTimeout=="function"?setTimeout:void 0,Sb=typeof clearTimeout=="function"?clearTimeout:void 0,Av=typeof Promise=="function"?Promise:void 0,Cv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Cf,Mb=typeof queueMicrotask=="function"?queueMicrotask:typeof Av<"u"?function(e){return Av.resolve(null).then(e).catch(Tb)}:Cf;function Tb(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Dv(e,t){var i=t,r=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(o),ws(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Bf(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Bf(i);for(var c=i.firstChild;c;){var y=c.nextSibling,T=c.nodeName;c[nn]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=y}}else i==="body"&&Bf(e.ownerDocument.body);i=o}while(i);ws(t)}function Rv(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function Lv(e,t,i){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,i!=null&&(e.style.viewTransitionClass=i),i=getComputedStyle(e),i.display==="inline"){if(t=e.getClientRects(),t.length===1)var r=1;else for(var o=r=0;o<t.length;o++){var c=t[o];0<c.width&&0<c.height&&r++}r===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+i.paddingTop,e.marginBottom="-"+i.paddingBottom)}}function Nv(e,t){e=e.style,t=t.style;var i=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(i=t.display,e.display=i==null||typeof i=="boolean"?"":i,i=t.margin,i!=null?e.margin=i:(i=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=i==null||typeof i=="boolean"?"":i,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function wb(e,t,i){return i=i.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=i.innerHeight&&e.left<=i.innerWidth}}function Df(e){var t=e.getBoundingClientRect(),i=getComputedStyle(e);return wb(t,i,e)}function Eb(e){return e.documentElement.clientHeight}function Ab(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Cb(e,t,i,r,o,c,y,T,z){var j=t.nodeType===9?t:t.ownerDocument;try{var ie=j.startViewTransition({update:function(){var k=j.defaultView,te=k.navigation&&k.navigation.transition,Ce=j.fonts.status;r();var Ue=[];if(Ce==="loaded"&&(Eb(j),j.fonts.status==="loading"&&Ue.push(j.fonts.ready)),Ce=Ue.length,e!==null)for(var Je=e.suspenseyImages,q=0,G=0;G<Je.length;G++){var K=Je[G];if(!K.complete){var ue=K.getBoundingClientRect();if(0<ue.bottom&&0<ue.right&&ue.top<k.innerHeight&&ue.left<k.innerWidth){if(q+=$v(K),q>Dc){Ue.length=Ce;break}K=new Promise(Ab.bind(K)),Ue.push(K)}}}if(0<Ue.length)return k=Promise.race([Promise.all(Ue),new Promise(function(Oe){return setTimeout(Oe,500)})]).then(o,o),(te?Promise.allSettled([te.finished,k]):k).then(c,c);if(o(),te)return te.finished.then(c,c);c()},types:i});j.__reactViewTransition=ie;var fe=[];return ie.ready.then(function(){for(var k=j.documentElement.getAnimations({subtree:!0}),te=0;te<k.length;te++){var Ce=k[te],Ue=Ce.effect,Je=Ue.pseudoElement;if(Je!=null&&Je.startsWith("::view-transition")){fe.push(Ce),Ce=Ue.getKeyframes();for(var q=Je=void 0,G=!0,K=0;K<Ce.length;K++){var ue=Ce[K],Oe=ue.width;if(Je===void 0)Je=Oe;else if(Je!==Oe){G=!1;break}if(Oe=ue.height,q===void 0)q=Oe;else if(q!==Oe){G=!1;break}delete ue.width,delete ue.height,ue.transform==="none"&&delete ue.transform}G&&Je!==void 0&&q!==void 0&&(Ue.setKeyframes(Ce),G=getComputedStyle(Ue.target,Ue.pseudoElement),G.width!==Je||G.height!==q)&&(G=Ce[0],G.width=Je,G.height=q,G=Ce[Ce.length-1],G.width=Je,G.height=q,Ue.setKeyframes(Ce))}}y()},function(k){j.__reactViewTransition===ie&&(j.__reactViewTransition=null);try{typeof k=="object"&&k!==null&&k.name==="InvalidStateError"&&(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null),k!==null&&z(k)}finally{r(),o(),y()}}),ie.finished.finally(function(){for(var k=0;k<fe.length;k++)fe[k].cancel();j.__reactViewTransition===ie&&(j.__reactViewTransition=null),T()}),ie}catch{return r(),o(),y(),null}}function _r(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}_r.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:I({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},_r.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,i=e.getAnimations({subtree:!0}),r=[],o=0;o<i.length;o++){var c=i[o].effect;c!==null&&c.target===e&&c.pseudoElement===t&&r.push(i[o])}return r},_r.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function zv(e){return{name:e,group:new _r("group",e),imagePair:new _r("image-pair",e),old:new _r("old",e),new:new _r("new",e)}}function Kn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Kn.prototype.addEventListener=function(e,t,i){var r=null,o=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Uv(c,e,t,i)===-1){var y=this,T=t;i!=null&&typeof i!="boolean"&&i.once===!0&&(T=function(z){y.removeEventListener(e,t,i),typeof t=="function"?t.call(this,z):t.handleEvent(z)}),r!==null&&(o=y.removeEventListener.bind(y,e,t,i),r.addEventListener("abort",o,{once:!0}),o=r.removeEventListener.bind(r,"abort",o)),r=_s(i),c.push({type:e,listener:t,optionsOrUseCapture:i,attachedListener:T,cleanup:o}),p(this._fragmentFiber.child,!1,Db,e,T,r)}this._eventListeners=c}};function Db(e,t,i,r){return x(e).addEventListener(t,i,r),!1}Kn.prototype.removeEventListener=function(e,t,i){var r=this._eventListeners;if(r!==null&&(t=Uv(r,e,t,i),t!==-1)){var o=r[t];i=o.attachedListener;var c=o.cleanup;o=_s(o.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Rb,e,i,o),r.splice(t,1),c!==null&&c()}};function Rb(e,t,i,r){return x(e).removeEventListener(t,i,r),!1}function _s(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ov(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Uv(e,t,i,r){if(e.length===0)return-1;r=Ov(r);for(var o=0;o<e.length;o++){var c=e[o];if(c.type===t&&c.listener===i&&Ov(c.optionsOrUseCapture)===r)return o}return-1}Kn.prototype.dispatchEvent=function(e){var t=_(this._fragmentFiber);if(t===null)return!0;t=x(t);var i=this._eventListeners;if(i!==null&&0<i.length||!e.bubbles){var r=t.nodeType===9?t.createComment(""):document.createTextNode("");if(i)for(var o=0;o<i.length;o++){var c=i[o];r.addEventListener(c.type,c.attachedListener,_s(c.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),i)for(o=0;o<i.length;o++)c=i[o],r.removeEventListener(c.type,c.attachedListener,_s(c.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Kn.prototype.focus=function(e){p(this._fragmentFiber.child,!0,Bv,e,void 0,void 0)};function Bv(e,t){return e.tag===6?!1:(e=x(e),Fb(e,t))}Kn.prototype.focusLast=function(e){var t=[];p(this._fragmentFiber.child,!0,Rf,t,void 0,void 0);for(var i=t.length-1;0<=i&&!Bv(t[i],e);i--);};function Rf(e,t){return t.push(e),!1}Kn.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=x(e),e=Io(e).activeElement,e!==null&&p(this._fragmentFiber.child,!1,Lb,e,void 0,void 0))};function Lb(e,t){return e.tag===6?!1:(e=x(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Kn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),p(this._fragmentFiber.child,!1,Nb,e,void 0,void 0)};function Nb(e,t){return e.tag===6||(e=x(e),t.observe(e)),!1}Kn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),p(this._fragmentFiber.child,!1,zb,e,void 0,void 0);for(var i=t=0;i<wi.length;i++){var r=wi[i];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):wi[t++]=r}wi.length=t}};function zb(e,t){return e.tag===6||(e=x(e),t.unobserve(e)),!1}var wi=[],Lf=!1;function Ob(e,t,i){wi.push({fragmentInstance:e,observer:t,instance:i}),Lf||(Lf=!0,kb(function(){Lf=!1;var r=wi;wi=[];for(var o=0;o<r.length;o++){var c=r[o];c.observer.unobserve(c.instance)}}))}Kn.prototype.getClientRects=function(){var e=[];return p(this._fragmentFiber.child,!1,Ub,e,void 0,void 0),e};function Ub(e,t){if(e.tag===6){e=e.stateNode;var i=e.ownerDocument.createRange();i.selectNodeContents(e),t.push.apply(t,i.getClientRects())}else e=x(e),t.push.apply(t,e.getClientRects());return!1}Kn.prototype.getRootNode=function(e){var t=_(this._fragmentFiber);return t===null?this:x(t).getRootNode(e)},Kn.prototype.compareDocumentPosition=function(e){var t=_(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,Rf,i,void 0,void 0);var r=x(t);if(i.length===0){if(i=r,S(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(i=t)}t=this._fragmentFiber;var o=r=i.compareDocumentPosition(e);return i===e?o=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=E(t)[1],i===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=x(i).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=x(i[0]),o=x(i[i.length-1]);var c=S(this._fragmentFiber)?t.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=t.compareDocumentPosition(e),T=o.compareDocumentPosition(e),z=y&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&c&&y&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||c&&o===e||z||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!c&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Bb(t,this._fragmentFiber,i[0],i[i.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Bb(e,t,i,r,o){var c=Ni(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)e:{for(;c!==null;){if(c.tag===7&&(c===t||c.alternate===t)){i=!0;break e}c=c.return}i=!1}return i}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=o.ownerDocument,o===c||o===c.documentElement||o===c.body;e:{for(c=t,t=_(t);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==t&&c.alternate!==t)){c=!0;break e}c=c.return}c=!1}return c}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!c)&&!(t=c===i)&&(t=H(i,c,L),t===null?t=!1:(p(t,!0,C,c,i),c=A,A=null,t=c!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!c)&&!(t=c===r)&&(t=H(r,c,L),t===null?t=!1:(p(t,!0,U,c,r),c=A,O=A=null,t=c!==null)),t):!1}function Pv(e,t){var i=e.ownerDocument.createRange();i.selectNodeContents(e),e=i.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Kn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var t=[];p(this._fragmentFiber.child,!1,Rf,t,void 0,void 0);var i=e!==!1;if(t.length===0){var r=E(this._fragmentFiber);if(r=i?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=x(r),Pv(e,i);return}if(r=x(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=i?t.length-1:0;r!==(i?-1:t.length);){var o=t[r];o.tag===6?(o=x(o),Pv(o,i)):x(o).scrollIntoView(e),r+=i?-1:1}};function Pb(e,t){return e=x(e),Gv(e,t),!1}function Gv(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Iv(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];e.addEventListener(o.type,o.attachedListener,_s(o.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(c){for(var y=0,T=0;T<wi.length;T++){var z=wi[T];(z.fragmentInstance!==t||z.observer!==c||z.instance!==e)&&(wi[y++]=z)}wi.length=y,c.observe(e)}),Gv(e,t))}function Gb(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];e.removeEventListener(o.type,o.attachedListener,_s(o.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?Ob(t,c,e):c.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Nf(i),Pr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Ib(e,t,i,r){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[nn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Hb(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=mi(e.nextSibling),e===null))return null;return e}function Hv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mi(e.nextSibling),e===null))return null;return e}function zf(e){return e.data==="$?"||e.data==="$~"}function Of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uf=null;function Vv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return mi(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Fv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Fb(e,t){function i(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",i,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",i,!0)}return r}function kb(e){Cv(function(){Cv(function(t){return e(t)})})}function kv(e,t,i){switch(t=Io(i),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qv(e,t,i){for(var r in i){var o=i[r];i.hasOwnProperty(r)&&o!=null&&wt(e,t,r,null,yb,o)}i.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===zi&&(e.onclick=null),Pr(e)}function Bf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pr(e)}var gi=new Map,jv=new Set;function Ho(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ca=we.d;we.d={f:qb,r:jb,D:Wb,C:Xb,L:Yb,m:Zb,X:Kb,S:Qb,M:Jb};function qb(){var e=ca.f(),t=xc();return e||t}function jb(e){var t=Gr(e);t!==null&&t.tag===5&&t.type==="form"?Xm(t):ca.r(e)}var xs=typeof document>"u"?null:document;function Wv(e,t,i){var r=xs;if(r&&typeof t=="string"&&t){var o=li(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),jv.has(o)||(jv.add(o),e={rel:e,crossOrigin:i,href:t},r.querySelector(o)===null&&(t=r.createElement("link"),Sn(t,"link",e),un(t),r.head.appendChild(t)))}}function Wb(e){ca.D(e),Wv("dns-prefetch",e,null)}function Xb(e,t){ca.C(e,t),Wv("preconnect",e,t)}function Yb(e,t,i){ca.L(e,t,i);var r=xs;if(r&&e&&t){var o='link[rel="preload"][as="'+li(t)+'"]';t==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+li(i.imageSizes)+'"]')):o+='[href="'+li(e)+'"]';var c=o;switch(t){case"style":c=bs(e);break;case"script":c=Ss(e)}if(!(gi.has(c)||(e=I({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),gi.set(c,e),r.querySelector(o)!==null||t==="style"&&r.querySelector(Vo(c))||t==="script"&&r.querySelector(Fo(c))))){var y=r.createElement("link");Sn(y,"link",e),t==="style"&&(y[va]=!0,y.onload=y.onerror=function(){rp(y)}),un(y),r.head.appendChild(y)}}}function Zb(e,t){ca.m(e,t);var i=xs;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+li(r)+'"][href="'+li(e)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ss(e)}if(!gi.has(c)&&(e=I({rel:"modulepreload",href:e},t),gi.set(c,e),i.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Fo(c)))return}r=i.createElement("link"),Sn(r,"link",e),un(r),i.head.appendChild(r)}}}function Qb(e,t,i){ca.S(e,t,i);var r=xs;if(r&&e){var o=Ir(r).hoistableStyles,c=bs(e);t=t||"default";var y=o.get(c);if(!y){var T={loading:0,preload:null};if(y=r.querySelector(Vo(c)))T.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},i),(i=gi.get(c))&&Pf(e,i);var z=y=r.createElement("link");un(z),Sn(z,"link",e),z._p=new Promise(function(j,ie){z.onload=j,z.onerror=ie}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ac(y,t,r)}y={type:"stylesheet",instance:y,count:1,state:T},o.set(c,y)}}}function Kb(e,t){ca.X(e,t);var i=xs;if(i&&e){var r=Ir(i).hoistableScripts,o=Ss(e),c=r.get(o);c||(c=i.querySelector(Fo(o)),c||(e=I({src:e,async:!0},t),(t=gi.get(o))&&Gf(e,t),c=i.createElement("script"),un(c),Sn(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function Jb(e,t){ca.M(e,t);var i=xs;if(i&&e){var r=Ir(i).hoistableScripts,o=Ss(e),c=r.get(o);c||(c=i.querySelector(Fo(o)),c||(e=I({src:e,async:!0,type:"module"},t),(t=gi.get(o))&&Gf(e,t),c=i.createElement("script"),un(c),Sn(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function Xv(e,t,i,r){var o=(o=Et.current)?Ho(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=bs(i.href),t=Ir(o).hoistableStyles,r=t.get(i),r||(r={type:"style",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=bs(i.href);var c=Ir(o).hoistableStyles,y=c.get(e);if(y||(o=o.ownerDocument||o,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,y),(c=o.querySelector(Vo(e)))?c._p||(y.instance=c,y.state.loading=5):(c=gi.get(e),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(e,c)),$b(o,e,c,y.state))),t&&r===null)throw Error(s(528,""));return y}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(i=Ss(i),t=Ir(o).hoistableScripts,r=t.get(i),r||(r={type:"script",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function bs(e){return'href="'+li(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function Yv(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function $b(e,t,i,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[va]!==!0){r.loading=1;return}}else t=e.createElement("link"),t[va]=!0,t.onload=t.onerror=rp.bind(null,t),Sn(t,"link",i),un(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}function Ss(e){return'[src="'+li(e)+'"]'}function Fo(e){return"script[async]"+e}function Zv(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+li(i.href)+'"]');if(r)return t.instance=r,un(r),r;var o=I({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),un(r),Sn(r,"style",o),Ac(r,i.precedence,e),t.instance=r;case"stylesheet":o=bs(i.href);var c=e.querySelector(Vo(o));if(c)return t.state.loading|=4,t.instance=c,un(c),c;r=Yv(i),(o=gi.get(o))&&Pf(r,o),c=(e.ownerDocument||e).createElement("link"),un(c);var y=c;return y._p=new Promise(function(T,z){y.onload=T,y.onerror=z}),Sn(c,"link",r),t.state.loading|=4,Ac(c,i.precedence,e),t.instance=c;case"script":return c=Ss(i.src),(o=e.querySelector(Fo(c)))?(t.instance=o,un(o),o):(r=i,(o=gi.get(c))&&(r=I({},i),Gf(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),un(o),Sn(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Ac(r,i.precedence,e));return t.instance}function Ac(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,y=0;y<r.length;y++){var T=r[y];if(T.dataset.precedence===t)c=T;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Pf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cc=null;function Qv(e,t,i){if(Cc===null){var r=new Map,o=Cc=new Map;o.set(i,r)}else o=Cc,r=o.get(i),r||(r=new Map,o.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var c=i[o];if(!(c[nn]||c[Ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var y=c.getAttribute(t)||"";y=e+y;var T=r.get(y);T?T.push(c):r.set(y,[c])}}return r}function If(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function eS(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Kv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Jv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $v(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function e0(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=$v(t),e.suspenseyImages.push(t)),e=iS.bind(e),t.decode().then(e,e))}function tS(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var o=bs(r.href),c=t.querySelector(Vo(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ko.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=c,un(c);return}c=t.ownerDocument||t,r=Yv(r),(o=gi.get(o))&&Pf(r,o),c=c.createElement("link"),un(c);var y=c;y._p=new Promise(function(T,z){y.onload=T,y.onerror=z}),Sn(c,"link",r),i.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=ko.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Dc=0;function nS(e,t){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Dc===0&&(Dc=62500*xb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Dc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(o)}}:null}function t0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Lc(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ko(){this.count--,t0(this)}function iS(){this.imgCount--,t0(this)}var Rc=null;function Lc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rc=new Map,t.forEach(aS,e),Rc=null,ko.call(e))}function aS(e,t){if(!(t.state.loading&4)){var i=Rc.get(e);if(i)var r=i.get(null);else{i=new Map,Rc.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var y=o[c];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),r=y)}r&&i.set(null,r)}o=t.instance,y=o.getAttribute("data-precedence"),c=i.get(y)||r,c===r&&i.set(null,o),i.set(y,o),this.count++,r=ko.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Ms={$$typeof:oe,Provider:null,Consumer:null,_currentValue:Ge,_currentValue2:Ge,_threadCount:0};function rS(e,t,i,r,o,c,y,T,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function n0(e,t,i,r,o,c,y,T,z,j,ie,fe){return e=new rS(e,t,i,y,z,j,ie,fe,T),t=1,c===!0&&(t|=24),c=Bn(3,null,null,t),e.current=c,c.stateNode=e,t=$u(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:t},ih(c),e}function i0(e){return e?(e=Zr,e):Zr}function a0(e,t,i,r,o,c){o=i0(o),r.context===null?r.context=o:r.pendingContext=o,r=Ea(t),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Aa(e,r,t),i!==null&&(Hn(i,e,t),xo(i,e,t))}function r0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Hf(e,t){r0(e,t),(e=e.alternate)&&r0(e,t)}function s0(e){if(e.tag===13||e.tag===31){var t=nr(e,67108864);t!==null&&Hn(t,e,67108864),Hf(e,67108864)}}function o0(e){if(e.tag===13||e.tag===31){var t=Qn();t=_i(t);var i=nr(e,t);i!==null&&Hn(i,e,t),Hf(e,t)}}var Ts=!0;function sS(e,t,i,r){var o=Te.T;Te.T=null;var c=we.p;try{we.p=2,Vf(e,t,i,r)}finally{we.p=c,Te.T=o}}function oS(e,t,i,r){var o=Te.T;Te.T=null;var c=we.p;try{we.p=8,Vf(e,t,i,r)}finally{we.p=c,Te.T=o}}function Vf(e,t,i,r){if(Ts){var o=Ff(r);if(o===null)Sf(e,t,r,Nc,i),c0(e,r);else if(cS(o,e,t,i,r))r.stopPropagation();else if(c0(e,r),t&4&&-1<lS.indexOf(e)){for(;o!==null;){var c=Gr(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var y=J(c.pendingLanes);if(y!==0){var T=c;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var z=1<<31-Tn(y);T.entanglements[1]|=z,y&=~z}ki(c),(yt&6)===0&&(vc=V()+500,Bo(0))}}break;case 31:case 13:T=nr(c,2),T!==null&&Hn(T,c,2),xc(),Hf(c,2)}if(c=Ff(r),c===null&&Sf(e,t,r,Nc,i),c===o)break;o=c}o!==null&&r.stopPropagation()}else Sf(e,t,r,null,i)}}function Ff(e){return e=Eu(e),kf(e)}var Nc=null;function kf(e){if(Nc=null,e=Ni(e),e!==null){var t=u(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=d(t),e!==null)return e;e=null}else if(i===31){if(e=f(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nc=e,null}function l0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(he()){case Se:return 2;case ze:return 8;case Pe:case mt:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var qf=!1,Ia=null,Ha=null,Va=null,qo=new Map,jo=new Map,Fa=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(e,t){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(t.pointerId)}}function Wo(e,t,i,r,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Gr(t),t!==null&&s0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cS(e,t,i,r,o){switch(t){case"focusin":return Ia=Wo(Ia,e,t,i,r,o),!0;case"dragenter":return Ha=Wo(Ha,e,t,i,r,o),!0;case"mouseover":return Va=Wo(Va,e,t,i,r,o),!0;case"pointerover":var c=o.pointerId;return qo.set(c,Wo(qo.get(c)||null,e,t,i,r,o)),!0;case"gotpointercapture":return c=o.pointerId,jo.set(c,Wo(jo.get(c)||null,e,t,i,r,o)),!0}return!1}function u0(e){var t=Ni(e.target);if(t!==null){var i=u(t);if(i!==null){if(t=i.tag,t===13){if(t=d(i),t!==null){e.blockedOn=t,Or(e.priority,function(){o0(i)});return}}else if(t===31){if(t=f(i),t!==null){e.blockedOn=t,Or(e.priority,function(){o0(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Ff(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);wu=r,i.target.dispatchEvent(r),wu=null}else return t=Gr(i),t!==null&&s0(t),e.blockedOn=i,!1;t.shift()}return!0}function h0(e,t,i){zc(e)&&i.delete(t)}function uS(){qf=!1,Ia!==null&&zc(Ia)&&(Ia=null),Ha!==null&&zc(Ha)&&(Ha=null),Va!==null&&zc(Va)&&(Va=null),qo.forEach(h0),jo.forEach(h0)}function Oc(e,t){e.blockedOn===t&&(e.blockedOn=null,qf||(qf=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,uS)))}var Uc=null;function f0(e){Uc!==e&&(Uc=e,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Uc===e&&(Uc=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],o=e[t+2];if(typeof r!="function"){if(kf(r||i)===null)continue;break}var c=Gr(i);c!==null&&(e.splice(t,3),t-=3,Th(c,{pending:!0,data:o,method:i.method,action:r},r,o))}}))}function ws(e){function t(z){return Oc(z,e)}Ia!==null&&Oc(Ia,e),Ha!==null&&Oc(Ha,e),Va!==null&&Oc(Va,e),qo.forEach(t),jo.forEach(t);for(var i=0;i<Fa.length;i++){var r=Fa[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Fa.length&&(i=Fa[0],i.blockedOn===null);)u0(i),i.blockedOn===null&&Fa.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],y=o[gn]||null;if(typeof c=="function")y||f0(i);else if(y){var T=null;if(c&&c.hasAttribute("formAction")){if(o=c,y=c[gn]||null)T=y.formAction;else if(kf(o)!==null)continue}else T=y.action;typeof T=="function"?i[r+1]=T:(i.splice(r,3),r-=3),f0(i)}}}function d0(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(y){return o=y})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function jf(e){this._internalRoot=e}Bc.prototype.render=jf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var i=t.current,r=Qn();a0(i,r,e,t,null,null)},Bc.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;a0(e.current,2,null,e,null,null),xc(),t[oi]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Fa.length&&t!==0&&t<Fa[i].priority;i++);Fa.splice(i,0,e),i===0&&u0(e)}};var p0=n.version;if(p0!=="19.3.0")throw Error(s(527,p0,"19.3.0"));we.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Te,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{bt=Pc.inject(hS),It=Pc}catch{}}return Yo.createRoot=function(e,t){if(!l(e))throw Error(s(299));var i=!1,r="",o=ig,c=ag,y=rg;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=n0(e,1,!1,null,null,i,r,null,o,c,y,d0),e[oi]=t.current,bf(e),new jf(t)},Yo.hydrateRoot=function(e,t,i){if(!l(e))throw Error(s(299));var r=!1,o="",c=ig,y=ag,T=rg,z=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.formState!==void 0&&(z=i.formState)),t=n0(e,1,!0,t,i??null,r,o,z,c,y,T,d0),t.context=i0(null),i=t.current,r=Qn(),r=_i(r),o=Ea(r),o.callback=null,Aa(i,o,r),i=r,t.current.lanes=i,tt(t,i),ki(t),e[oi]=t.current,bf(e),new Bc(t)},Yo.version="19.3.0",Yo}var T0;function bS(){if(T0)return Yf.exports;T0=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(n){console.error(n)}}return h(),Yf.exports=xS(),Yf.exports}var SS=bS();const Qd="149",MS=0,w0=1,TS=2,$y=1,wS=2,ol=3,Ka=0,Vn=1,Li=2,Za=0,Ws=1,Ys=2,E0=3,A0=4,ES=5,qs=100,AS=101,CS=102,C0=103,D0=104,DS=200,RS=201,LS=202,NS=203,e_=204,t_=205,zS=206,OS=207,US=208,BS=209,PS=210,GS=0,IS=1,HS=2,Id=3,VS=4,FS=5,kS=6,qS=7,Kd=0,jS=1,WS=2,ga=0,XS=1,YS=2,ZS=3,QS=4,KS=5,n_=300,Zs=301,Qs=302,Hd=303,Vd=304,pu=306,ul=1e3,Di=1001,Fd=1002,Un=1003,R0=1004,Jf=1005,ei=1006,JS=1007,hl=1008,Rr=1009,$S=1010,eM=1011,i_=1012,tM=1013,Er=1014,Ar=1015,fl=1016,nM=1017,iM=1018,Xs=1020,aM=1021,Ri=1023,rM=1024,sM=1025,Cr=1026,Ks=1027,oM=1028,lM=1029,cM=1030,uM=1031,hM=1033,$f=33776,ed=33777,td=33778,nd=33779,L0=35840,N0=35841,z0=35842,O0=35843,fM=36196,U0=37492,B0=37496,P0=37808,G0=37809,I0=37810,H0=37811,V0=37812,F0=37813,k0=37814,q0=37815,j0=37816,W0=37817,X0=37818,Y0=37819,Z0=37820,Q0=37821,id=36492,dM=36283,K0=36284,J0=36285,$0=36286,Lr=3e3,Ut=3001,pM=3200,mM=3201,a_=0,gM=1,ji="srgb",dl="srgb-linear",ad=7680,vM=519,kd=35044,ey="300 es",qd=1035;class $s{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){if(this._listeners===void 0)return!1;const s=this._listeners;return s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){if(this._listeners===void 0)return;const l=this._listeners[n];if(l!==void 0){const u=l.indexOf(a);u!==-1&&l.splice(u,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const s=this._listeners[n.type];if(s!==void 0){n.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,n);n.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,ty=180/Math.PI;function Qa(){const h=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[h&255]+An[h>>8&255]+An[h>>16&255]+An[h>>24&255]+"-"+An[n&255]+An[n>>8&255]+"-"+An[n>>16&15|64]+An[n>>24&255]+"-"+An[a&63|128]+An[a>>8&255]+"-"+An[a>>16&255]+An[a>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function ti(h,n,a){return Math.max(n,Math.min(a,h))}function yM(h,n){return(h%n+n)%n}function sd(h,n,a){return(1-a)*h+a*n}function ny(h){return(h&h-1)===0&&h!==0}function jd(h){return Math.pow(2,Math.floor(Math.log(h)/Math.LN2))}function Ya(h,n){switch(n.constructor){case Float32Array:return h;case Uint16Array:return h/65535;case Uint8Array:return h/255;case Int16Array:return Math.max(h/32767,-1);case Int8Array:return Math.max(h/127,-1);default:throw new Error("Invalid component type.")}}function zt(h,n){switch(n.constructor){case Float32Array:return h;case Uint16Array:return Math.round(h*65535);case Uint8Array:return Math.round(h*255);case Int16Array:return Math.round(h*32767);case Int8Array:return Math.round(h*127);default:throw new Error("Invalid component type.")}}class at{constructor(n=0,a=0){at.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,l=n.elements;return this.x=l[0]*a+l[3]*s+l[6],this.y=l[1]*a+l[4]*s+l[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Math.max(n.x,Math.min(a.x,this.x)),this.y=Math.max(n.y,Math.min(a.y,this.y)),this}clampScalar(n,a){return this.x=Math.max(n,Math.min(a,this.x)),this.y=Math.max(n,Math.min(a,this.y)),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),l=Math.sin(a),u=this.x-n.x,d=this.y-n.y;return this.x=u*s-d*l+n.x,this.y=u*l+d*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ii{constructor(){ii.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(n,a,s,l,u,d,f,m,v){const g=this.elements;return g[0]=n,g[1]=l,g[2]=f,g[3]=a,g[4]=u,g[5]=m,g[6]=s,g[7]=d,g[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,l=a.elements,u=this.elements,d=s[0],f=s[3],m=s[6],v=s[1],g=s[4],p=s[7],_=s[2],S=s[5],E=s[8],b=l[0],x=l[3],A=l[6],O=l[1],C=l[4],U=l[7],L=l[2],H=l[5],I=l[8];return u[0]=d*b+f*O+m*L,u[3]=d*x+f*C+m*H,u[6]=d*A+f*U+m*I,u[1]=v*b+g*O+p*L,u[4]=v*x+g*C+p*H,u[7]=v*A+g*U+p*I,u[2]=_*b+S*O+E*L,u[5]=_*x+S*C+E*H,u[8]=_*A+S*U+E*I,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],l=n[2],u=n[3],d=n[4],f=n[5],m=n[6],v=n[7],g=n[8];return a*d*g-a*f*v-s*u*g+s*f*m+l*u*v-l*d*m}invert(){const n=this.elements,a=n[0],s=n[1],l=n[2],u=n[3],d=n[4],f=n[5],m=n[6],v=n[7],g=n[8],p=g*d-f*v,_=f*m-g*u,S=v*u-d*m,E=a*p+s*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return n[0]=p*b,n[1]=(l*v-g*s)*b,n[2]=(f*s-l*d)*b,n[3]=_*b,n[4]=(g*a-l*m)*b,n[5]=(l*u-f*a)*b,n[6]=S*b,n[7]=(s*m-v*a)*b,n[8]=(d*a-s*u)*b,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,l,u,d,f){const m=Math.cos(u),v=Math.sin(u);return this.set(s*m,s*v,-s*(m*d+v*f)+d+n,-l*v,l*m,-l*(-v*d+m*f)+f+a,0,0,1),this}scale(n,a){return this.premultiply(od.makeScale(n,a)),this}rotate(n){return this.premultiply(od.makeRotation(-n)),this}translate(n,a){return this.premultiply(od.makeTranslation(n,a)),this}makeTranslation(n,a){return this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let l=0;l<9;l++)if(a[l]!==s[l])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ii;function r_(h){for(let n=h.length-1;n>=0;--n)if(h[n]>=65535)return!0;return!1}function hu(h){return document.createElementNS("http://www.w3.org/1999/xhtml",h)}function Dr(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)}function cu(h){return h<.0031308?h*12.92:1.055*Math.pow(h,.41666)-.055}const ld={[ji]:{[dl]:Dr},[dl]:{[ji]:cu}},Nn={legacyMode:!0,get workingColorSpace(){return dl},set workingColorSpace(h){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(h,n,a){if(this.legacyMode||n===a||!n||!a)return h;if(ld[n]&&ld[n][a]!==void 0){const s=ld[n][a];return h.r=s(h.r),h.g=s(h.g),h.b=s(h.b),h}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(h,n){return this.convert(h,this.workingColorSpace,n)},toWorkingColorSpace:function(h,n){return this.convert(h,n,this.workingColorSpace)}},s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={r:0,g:0,b:0},Ei={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function cd(h,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?h+(n-h)*6*a:a<1/2?n:a<2/3?h+(n-h)*6*(2/3-a):h}function Ic(h,n){return n.r=h.r,n.g=h.g,n.b=h.b,n}class vt{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,a===void 0&&s===void 0?this.set(n):this.setRGB(n,a,s)}set(n){return n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n),this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=ji){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Nn.toWorkingColorSpace(this,a),this}setRGB(n,a,s,l=Nn.workingColorSpace){return this.r=n,this.g=a,this.b=s,Nn.toWorkingColorSpace(this,l),this}setHSL(n,a,s,l=Nn.workingColorSpace){if(n=yM(n,1),a=ti(a,0,1),s=ti(s,0,1),a===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+a):s+a-s*a,d=2*s-u;this.r=cd(d,u,n+1/3),this.g=cd(d,u,n),this.b=cd(d,u,n-1/3)}return Nn.toWorkingColorSpace(this,l),this}setStyle(n,a=ji){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let l;if(l=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(n)){let u;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return this.r=Math.min(255,parseInt(u[1],10))/255,this.g=Math.min(255,parseInt(u[2],10))/255,this.b=Math.min(255,parseInt(u[3],10))/255,Nn.toWorkingColorSpace(this,a),s(u[4]),this;if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return this.r=Math.min(100,parseInt(u[1],10))/100,this.g=Math.min(100,parseInt(u[2],10))/100,this.b=Math.min(100,parseInt(u[3],10))/100,Nn.toWorkingColorSpace(this,a),s(u[4]),this;break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)){const m=parseFloat(u[1])/360,v=parseFloat(u[2])/100,g=parseFloat(u[3])/100;return s(u[4]),this.setHSL(m,v,g,a)}break}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(n)){const u=l[1],d=u.length;if(d===3)return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,Nn.toWorkingColorSpace(this,a),this;if(d===6)return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,Nn.toWorkingColorSpace(this,a),this}return n&&n.length>0?this.setColorName(n,a):this}setColorName(n,a=ji){const s=s_[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Dr(n.r),this.g=Dr(n.g),this.b=Dr(n.b),this}copyLinearToSRGB(n){return this.r=cu(n.r),this.g=cu(n.g),this.b=cu(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=ji){return Nn.fromWorkingColorSpace(Ic(this,rn),n),ti(rn.r*255,0,255)<<16^ti(rn.g*255,0,255)<<8^ti(rn.b*255,0,255)<<0}getHexString(n=ji){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Nn.workingColorSpace){Nn.fromWorkingColorSpace(Ic(this,rn),a);const s=rn.r,l=rn.g,u=rn.b,d=Math.max(s,l,u),f=Math.min(s,l,u);let m,v;const g=(f+d)/2;if(f===d)m=0,v=0;else{const p=d-f;switch(v=g<=.5?p/(d+f):p/(2-d-f),d){case s:m=(l-u)/p+(l<u?6:0);break;case l:m=(u-s)/p+2;break;case u:m=(s-l)/p+4;break}m/=6}return n.h=m,n.s=v,n.l=g,n}getRGB(n,a=Nn.workingColorSpace){return Nn.fromWorkingColorSpace(Ic(this,rn),a),n.r=rn.r,n.g=rn.g,n.b=rn.b,n}getStyle(n=ji){return Nn.fromWorkingColorSpace(Ic(this,rn),n),n!==ji?`color(${n} ${rn.r} ${rn.g} ${rn.b})`:`rgb(${rn.r*255|0},${rn.g*255|0},${rn.b*255|0})`}offsetHSL(n,a,s){return this.getHSL(Ei),Ei.h+=n,Ei.s+=a,Ei.l+=s,this.setHSL(Ei.h,Ei.s,Ei.l),this}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(Ei),n.getHSL(Gc);const s=sd(Ei.h,Gc.h,a),l=sd(Ei.s,Gc.s,a),u=sd(Ei.l,Gc.l,a);return this.setHSL(s,l,u),this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}vt.NAMES=s_;let Es;class o_{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Es===void 0&&(Es=hu("canvas")),Es.width=n.width,Es.height=n.height;const s=Es.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Es}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=hu("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const l=s.getImageData(0,0,n.width,n.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Dr(u[d]/255)*255;return s.putImageData(l,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Dr(a[s]/255)*255):a[s]=Dr(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}class l_{constructor(n=null){this.isSource=!0,this.uuid=Qa(),this.data=n,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?u.push(ud(l[d].image)):u.push(ud(l[d]))}else u=ud(l);s.url=u}return a||(n.images[this.uuid]=s),s}}function ud(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap?o_.getDataURL(h):h.data?{data:Array.from(h.data),width:h.width,height:h.height,type:h.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class Fn extends $s{constructor(n=Fn.DEFAULT_IMAGE,a=Fn.DEFAULT_MAPPING,s=Di,l=Di,u=ei,d=hl,f=Ri,m=Rr,v=Fn.DEFAULT_ANISOTROPY,g=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Qa(),this.name="",this.source=new l_(n),this.mipmaps=[],this.mapping=a,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=v,this.format=f,this.internalFormat=null,this.type=m,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ii,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(n){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.encoding=n.encoding,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==n_)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case ul:n.x=n.x-Math.floor(n.x);break;case Di:n.x=n.x<0?0:1;break;case Fd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case ul:n.y=n.y-Math.floor(n.y);break;case Di:n.y=n.y<0?0:1;break;case Fd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=n_;Fn.DEFAULT_ANISOTROPY=1;class Gt{constructor(n=0,a=0,s=0,l=1){Gt.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=l}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,l){return this.x=n,this.y=a,this.z=s,this.w=l,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,l=this.z,u=this.w,d=n.elements;return this.x=d[0]*a+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*a+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*a+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*a+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,l,u;const m=n.elements,v=m[0],g=m[4],p=m[8],_=m[1],S=m[5],E=m[9],b=m[2],x=m[6],A=m[10];if(Math.abs(g-_)<.01&&Math.abs(p-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(p+b)<.1&&Math.abs(E+x)<.1&&Math.abs(v+S+A-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const C=(v+1)/2,U=(S+1)/2,L=(A+1)/2,H=(g+_)/4,I=(p+b)/4,w=(E+x)/4;return C>U&&C>L?C<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(C),l=H/s,u=I/s):U>L?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=H/l,u=w/l):L<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),s=I/u,l=w/u),this.set(s,l,u,a),this}let O=Math.sqrt((x-E)*(x-E)+(p-b)*(p-b)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(x-E)/O,this.y=(p-b)/O,this.z=(_-g)/O,this.w=Math.acos((v+S+A-1)/2),this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Math.max(n.x,Math.min(a.x,this.x)),this.y=Math.max(n.y,Math.min(a.y,this.y)),this.z=Math.max(n.z,Math.min(a.z,this.z)),this.w=Math.max(n.w,Math.min(a.w,this.w)),this}clampScalar(n,a){return this.x=Math.max(n,Math.min(a,this.x)),this.y=Math.max(n,Math.min(a,this.y)),this.z=Math.max(n,Math.min(a,this.z)),this.w=Math.max(n,Math.min(a,this.w)),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nr extends $s{constructor(n=1,a=1,s={}){super(),this.isWebGLRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new Gt(0,0,n,a),this.scissorTest=!1,this.viewport=new Gt(0,0,n,a);const l={width:n,height:a,depth:1};this.texture=new Fn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:ei,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(n,a,s=1){(this.width!==n||this.height!==a||this.depth!==s)&&(this.width=n,this.height=a,this.depth=s,this.texture.image.width=n,this.texture.image.height=a,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.viewport.copy(n.viewport),this.texture=n.texture.clone(),this.texture.isRenderTargetTexture=!0;const a=Object.assign({},n.texture.image);return this.texture.source=new l_(a),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c_ extends Fn{constructor(n=null,a=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xM extends Fn{constructor(n=null,a=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pl{constructor(n=0,a=0,s=0,l=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=l}static slerpFlat(n,a,s,l,u,d,f){let m=s[l+0],v=s[l+1],g=s[l+2],p=s[l+3];const _=u[d+0],S=u[d+1],E=u[d+2],b=u[d+3];if(f===0){n[a+0]=m,n[a+1]=v,n[a+2]=g,n[a+3]=p;return}if(f===1){n[a+0]=_,n[a+1]=S,n[a+2]=E,n[a+3]=b;return}if(p!==b||m!==_||v!==S||g!==E){let x=1-f;const A=m*_+v*S+g*E+p*b,O=A>=0?1:-1,C=1-A*A;if(C>Number.EPSILON){const L=Math.sqrt(C),H=Math.atan2(L,A*O);x=Math.sin(x*H)/L,f=Math.sin(f*H)/L}const U=f*O;if(m=m*x+_*U,v=v*x+S*U,g=g*x+E*U,p=p*x+b*U,x===1-f){const L=1/Math.sqrt(m*m+v*v+g*g+p*p);m*=L,v*=L,g*=L,p*=L}}n[a]=m,n[a+1]=v,n[a+2]=g,n[a+3]=p}static multiplyQuaternionsFlat(n,a,s,l,u,d){const f=s[l],m=s[l+1],v=s[l+2],g=s[l+3],p=u[d],_=u[d+1],S=u[d+2],E=u[d+3];return n[a]=f*E+g*p+m*S-v*_,n[a+1]=m*E+g*_+v*p-f*S,n[a+2]=v*E+g*S+f*_-m*p,n[a+3]=g*E-f*p-m*_-v*S,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,l){return this._x=n,this._y=a,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a){const s=n._x,l=n._y,u=n._z,d=n._order,f=Math.cos,m=Math.sin,v=f(s/2),g=f(l/2),p=f(u/2),_=m(s/2),S=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=_*g*p+v*S*E,this._y=v*S*p-_*g*E,this._z=v*g*E+_*S*p,this._w=v*g*p-_*S*E;break;case"YXZ":this._x=_*g*p+v*S*E,this._y=v*S*p-_*g*E,this._z=v*g*E-_*S*p,this._w=v*g*p+_*S*E;break;case"ZXY":this._x=_*g*p-v*S*E,this._y=v*S*p+_*g*E,this._z=v*g*E+_*S*p,this._w=v*g*p-_*S*E;break;case"ZYX":this._x=_*g*p-v*S*E,this._y=v*S*p+_*g*E,this._z=v*g*E-_*S*p,this._w=v*g*p+_*S*E;break;case"YZX":this._x=_*g*p+v*S*E,this._y=v*S*p+_*g*E,this._z=v*g*E-_*S*p,this._w=v*g*p-_*S*E;break;case"XZY":this._x=_*g*p-v*S*E,this._y=v*S*p-_*g*E,this._z=v*g*E+_*S*p,this._w=v*g*p+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a!==!1&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,l=Math.sin(s);return this._x=n.x*l,this._y=n.y*l,this._z=n.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],l=a[4],u=a[8],d=a[1],f=a[5],m=a[9],v=a[2],g=a[6],p=a[10],_=s+f+p;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-v)*S,this._z=(d-l)*S}else if(s>f&&s>p){const S=2*Math.sqrt(1+s-f-p);this._w=(g-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(u+v)/S}else if(f>p){const S=2*Math.sqrt(1+f-s-p);this._w=(u-v)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+p-s-f);this._w=(d-l)/S,this._x=(u+v)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(ti(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const l=Math.min(1,a/s);return this.slerp(n,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,l=n._y,u=n._z,d=n._w,f=a._x,m=a._y,v=a._z,g=a._w;return this._x=s*g+d*f+l*v-u*m,this._y=l*g+d*m+u*f-s*v,this._z=u*g+d*v+s*m-l*f,this._w=d*g-s*f-l*m-u*v,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,l=this._y,u=this._z,d=this._w;let f=d*n._w+s*n._x+l*n._y+u*n._z;if(f<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,f=-f):this.copy(n),f>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-f*f;if(m<=Number.EPSILON){const S=1-a;return this._w=S*d+a*this._w,this._x=S*s+a*this._x,this._y=S*l+a*this._y,this._z=S*u+a*this._z,this.normalize(),this._onChangeCallback(),this}const v=Math.sqrt(m),g=Math.atan2(v,f),p=Math.sin((1-a)*g)/v,_=Math.sin(a*g)/v;return this._w=d*p+this._w*_,this._x=s*p+this._x*_,this._y=l*p+this._y*_,this._z=u*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(a*Math.cos(l),s*Math.sin(u),s*Math.cos(u),a*Math.sin(l))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(n=0,a=0,s=0){Z.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(iy.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(iy.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,l=this.z,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6]*l,this.y=u[1]*a+u[4]*s+u[7]*l,this.z=u[2]*a+u[5]*s+u[8]*l,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,l=this.z,u=n.elements,d=1/(u[3]*a+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*a+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*a+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*a+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(n){const a=this.x,s=this.y,l=this.z,u=n.x,d=n.y,f=n.z,m=n.w,v=m*a+d*l-f*s,g=m*s+f*a-u*l,p=m*l+u*s-d*a,_=-u*a-d*s-f*l;return this.x=v*m+_*-u+g*-f-p*-d,this.y=g*m+_*-d+p*-u-v*-f,this.z=p*m+_*-f+v*-d-g*-u,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,l=this.z,u=n.elements;return this.x=u[0]*a+u[4]*s+u[8]*l,this.y=u[1]*a+u[5]*s+u[9]*l,this.z=u[2]*a+u[6]*s+u[10]*l,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Math.max(n.x,Math.min(a.x,this.x)),this.y=Math.max(n.y,Math.min(a.y,this.y)),this.z=Math.max(n.z,Math.min(a.z,this.z)),this}clampScalar(n,a){return this.x=Math.max(n,Math.min(a,this.x)),this.y=Math.max(n,Math.min(a,this.y)),this.z=Math.max(n,Math.min(a,this.z)),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,l=n.y,u=n.z,d=a.x,f=a.y,m=a.z;return this.x=l*m-u*f,this.y=u*d-s*m,this.z=s*f-l*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return hd.copy(this).projectOnVector(n),this.sub(hd)}reflect(n){return this.sub(hd.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(ti(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,l=this.z-n.z;return a*a+s*s+l*l}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const l=Math.sin(a)*n;return this.x=l*Math.sin(s),this.y=Math.cos(a)*n,this.z=l*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),l=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=l,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=(Math.random()-.5)*2,a=Math.random()*Math.PI*2,s=Math.sqrt(1-n**2);return this.x=s*Math.cos(a),this.y=s*Math.sin(a),this.z=n,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new Z,iy=new pl;class ml{constructor(n=new Z(1/0,1/0,1/0),a=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){let a=1/0,s=1/0,l=1/0,u=-1/0,d=-1/0,f=-1/0;for(let m=0,v=n.length;m<v;m+=3){const g=n[m],p=n[m+1],_=n[m+2];g<a&&(a=g),p<s&&(s=p),_<l&&(l=_),g>u&&(u=g),p>d&&(d=p),_>f&&(f=_)}return this.min.set(a,s,l),this.max.set(u,d,f),this}setFromBufferAttribute(n){let a=1/0,s=1/0,l=1/0,u=-1/0,d=-1/0,f=-1/0;for(let m=0,v=n.count;m<v;m++){const g=n.getX(m),p=n.getY(m),_=n.getZ(m);g<a&&(a=g),p<s&&(s=p),_<l&&(l=_),g>u&&(u=g),p>d&&(d=p),_>f&&(f=_)}return this.min.set(a,s,l),this.max.set(u,d,f),this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=xr.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0)if(a&&s.attributes!=null&&s.attributes.position!==void 0){const u=s.attributes.position;for(let d=0,f=u.count;d<f;d++)xr.fromBufferAttribute(u,d).applyMatrix4(n.matrixWorld),this.expandByPoint(xr)}else s.boundingBox===null&&s.computeBoundingBox(),fd.copy(s.boundingBox),fd.applyMatrix4(n.matrixWorld),this.union(fd);const l=n.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],a);return this}containsPoint(n){return!(n.x<this.min.x||n.x>this.max.x||n.y<this.min.y||n.y>this.max.y||n.z<this.min.z||n.z>this.max.z)}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return!(n.max.x<this.min.x||n.min.x>this.max.x||n.max.y<this.min.y||n.min.y>this.max.y||n.max.z<this.min.z||n.min.z>this.max.z)}intersectsSphere(n){return this.clampPoint(n.center,xr),xr.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(Zo),Hc.subVectors(this.max,Zo),As.subVectors(n.a,Zo),Cs.subVectors(n.b,Zo),Ds.subVectors(n.c,Zo),qa.subVectors(Cs,As),ja.subVectors(Ds,Cs),br.subVectors(As,Ds);let a=[0,-qa.z,qa.y,0,-ja.z,ja.y,0,-br.z,br.y,qa.z,0,-qa.x,ja.z,0,-ja.x,br.z,0,-br.x,-qa.y,qa.x,0,-ja.y,ja.x,0,-br.y,br.x,0];return!dd(a,As,Cs,Ds,Hc)||(a=[1,0,0,0,1,0,0,0,1],!dd(a,As,Cs,Ds,Hc))?!1:(Vc.crossVectors(qa,ja),a=[Vc.x,Vc.y,Vc.z],dd(a,As,Cs,Ds,Hc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return xr.copy(n).clamp(this.min,this.max).sub(n).length()}getBoundingSphere(n){return this.getCenter(n.center),n.radius=this.getSize(xr).length()*.5,n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(ua),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const ua=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],xr=new Z,fd=new ml,As=new Z,Cs=new Z,Ds=new Z,qa=new Z,ja=new Z,br=new Z,Zo=new Z,Hc=new Z,Vc=new Z,Sr=new Z;function dd(h,n,a,s,l){for(let u=0,d=h.length-3;u<=d;u+=3){Sr.fromArray(h,u);const f=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=n.dot(Sr),v=a.dot(Sr),g=s.dot(Sr);if(Math.max(-Math.max(m,v,g),Math.min(m,v,g))>f)return!1}return!0}const bM=new ml,Qo=new Z,pd=new Z;class gl{constructor(n=new Z,a=-1){this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):bM.setFromPoints(n).getCenter(s);let l=0;for(let u=0,d=n.length;u<d;u++)l=Math.max(l,s.distanceToSquared(n[u]));return this.radius=Math.sqrt(l),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;Qo.subVectors(n,this.center);const a=Qo.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),l=(s-this.radius)*.5;this.center.addScaledVector(Qo,l/s),this.radius+=l}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(pd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(Qo.copy(n.center).add(pd)),this.expandByPoint(Qo.copy(n.center).sub(pd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ha=new Z,md=new Z,Fc=new Z,Wa=new Z,gd=new Z,kc=new Z,vd=new Z;class Jd{constructor(n=new Z,a=new Z(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.direction).multiplyScalar(n).add(this.origin)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ha)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.direction).multiplyScalar(s).add(this.origin)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ha.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ha.copy(this.direction).multiplyScalar(a).add(this.origin),ha.distanceToSquared(n))}distanceSqToSegment(n,a,s,l){md.copy(n).add(a).multiplyScalar(.5),Fc.copy(a).sub(n).normalize(),Wa.copy(this.origin).sub(md);const u=n.distanceTo(a)*.5,d=-this.direction.dot(Fc),f=Wa.dot(this.direction),m=-Wa.dot(Fc),v=Wa.lengthSq(),g=Math.abs(1-d*d);let p,_,S,E;if(g>0)if(p=d*m-f,_=d*f-m,E=u*g,p>=0)if(_>=-E)if(_<=E){const b=1/g;p*=b,_*=b,S=p*(p+d*_+2*f)+_*(d*p+_+2*m)+v}else _=u,p=Math.max(0,-(d*_+f)),S=-p*p+_*(_+2*m)+v;else _=-u,p=Math.max(0,-(d*_+f)),S=-p*p+_*(_+2*m)+v;else _<=-E?(p=Math.max(0,-(-d*u+f)),_=p>0?-u:Math.min(Math.max(-u,-m),u),S=-p*p+_*(_+2*m)+v):_<=E?(p=0,_=Math.min(Math.max(-u,-m),u),S=_*(_+2*m)+v):(p=Math.max(0,-(d*u+f)),_=p>0?u:Math.min(Math.max(-u,-m),u),S=-p*p+_*(_+2*m)+v);else _=d>0?-u:u,p=Math.max(0,-(d*_+f)),S=-p*p+_*(_+2*m)+v;return s&&s.copy(this.direction).multiplyScalar(p).add(this.origin),l&&l.copy(Fc).multiplyScalar(_).add(md),S}intersectSphere(n,a){ha.subVectors(n.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,u=n.radius*n.radius;if(l>u)return null;const d=Math.sqrt(u-l),f=s-d,m=s+d;return f<0&&m<0?null:f<0?this.at(m,a):this.at(f,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,l,u,d,f,m;const v=1/this.direction.x,g=1/this.direction.y,p=1/this.direction.z,_=this.origin;return v>=0?(s=(n.min.x-_.x)*v,l=(n.max.x-_.x)*v):(s=(n.max.x-_.x)*v,l=(n.min.x-_.x)*v),g>=0?(u=(n.min.y-_.y)*g,d=(n.max.y-_.y)*g):(u=(n.max.y-_.y)*g,d=(n.min.y-_.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),p>=0?(f=(n.min.z-_.z)*p,m=(n.max.z-_.z)*p):(f=(n.max.z-_.z)*p,m=(n.min.z-_.z)*p),s>m||f>l)||((f>s||s!==s)&&(s=f),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,a)}intersectsBox(n){return this.intersectBox(n,ha)!==null}intersectTriangle(n,a,s,l,u){gd.subVectors(a,n),kc.subVectors(s,n),vd.crossVectors(gd,kc);let d=this.direction.dot(vd),f;if(d>0){if(l)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Wa.subVectors(this.origin,n);const m=f*this.direction.dot(kc.crossVectors(Wa,kc));if(m<0)return null;const v=f*this.direction.dot(gd.cross(Wa));if(v<0||m+v>d)return null;const g=-f*Wa.dot(vd);return g<0?null:this.at(g/d,u)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(n,a,s,l,u,d,f,m,v,g,p,_,S,E,b,x){const A=this.elements;return A[0]=n,A[4]=a,A[8]=s,A[12]=l,A[1]=u,A[5]=d,A[9]=f,A[13]=m,A[2]=v,A[6]=g,A[10]=p,A[14]=_,A[3]=S,A[7]=E,A[11]=b,A[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,l=1/Rs.setFromMatrixColumn(n,0).length(),u=1/Rs.setFromMatrixColumn(n,1).length(),d=1/Rs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*l,a[1]=s[1]*l,a[2]=s[2]*l,a[3]=0,a[4]=s[4]*u,a[5]=s[5]*u,a[6]=s[6]*u,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,l=n.y,u=n.z,d=Math.cos(s),f=Math.sin(s),m=Math.cos(l),v=Math.sin(l),g=Math.cos(u),p=Math.sin(u);if(n.order==="XYZ"){const _=d*g,S=d*p,E=f*g,b=f*p;a[0]=m*g,a[4]=-m*p,a[8]=v,a[1]=S+E*v,a[5]=_-b*v,a[9]=-f*m,a[2]=b-_*v,a[6]=E+S*v,a[10]=d*m}else if(n.order==="YXZ"){const _=m*g,S=m*p,E=v*g,b=v*p;a[0]=_+b*f,a[4]=E*f-S,a[8]=d*v,a[1]=d*p,a[5]=d*g,a[9]=-f,a[2]=S*f-E,a[6]=b+_*f,a[10]=d*m}else if(n.order==="ZXY"){const _=m*g,S=m*p,E=v*g,b=v*p;a[0]=_-b*f,a[4]=-d*p,a[8]=E+S*f,a[1]=S+E*f,a[5]=d*g,a[9]=b-_*f,a[2]=-d*v,a[6]=f,a[10]=d*m}else if(n.order==="ZYX"){const _=d*g,S=d*p,E=f*g,b=f*p;a[0]=m*g,a[4]=E*v-S,a[8]=_*v+b,a[1]=m*p,a[5]=b*v+_,a[9]=S*v-E,a[2]=-v,a[6]=f*m,a[10]=d*m}else if(n.order==="YZX"){const _=d*m,S=d*v,E=f*m,b=f*v;a[0]=m*g,a[4]=b-_*p,a[8]=E*p+S,a[1]=p,a[5]=d*g,a[9]=-f*g,a[2]=-v*g,a[6]=S*p+E,a[10]=_-b*p}else if(n.order==="XZY"){const _=d*m,S=d*v,E=f*m,b=f*v;a[0]=m*g,a[4]=-p,a[8]=v*g,a[1]=_*p+b,a[5]=d*g,a[9]=S*p-E,a[2]=E*p-S,a[6]=f*g,a[10]=b*p+_}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(SM,n,MM)}lookAt(n,a,s){const l=this.elements;return Jn.subVectors(n,a),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Xa.crossVectors(s,Jn),Xa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Xa.crossVectors(s,Jn)),Xa.normalize(),qc.crossVectors(Jn,Xa),l[0]=Xa.x,l[4]=qc.x,l[8]=Jn.x,l[1]=Xa.y,l[5]=qc.y,l[9]=Jn.y,l[2]=Xa.z,l[6]=qc.z,l[10]=Jn.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,l=a.elements,u=this.elements,d=s[0],f=s[4],m=s[8],v=s[12],g=s[1],p=s[5],_=s[9],S=s[13],E=s[2],b=s[6],x=s[10],A=s[14],O=s[3],C=s[7],U=s[11],L=s[15],H=l[0],I=l[4],w=l[8],P=l[12],X=l[1],me=l[5],le=l[9],$=l[13],Y=l[2],oe=l[6],Q=l[10],se=l[14],ne=l[3],_e=l[7],de=l[11],Le=l[15];return u[0]=d*H+f*X+m*Y+v*ne,u[4]=d*I+f*me+m*oe+v*_e,u[8]=d*w+f*le+m*Q+v*de,u[12]=d*P+f*$+m*se+v*Le,u[1]=g*H+p*X+_*Y+S*ne,u[5]=g*I+p*me+_*oe+S*_e,u[9]=g*w+p*le+_*Q+S*de,u[13]=g*P+p*$+_*se+S*Le,u[2]=E*H+b*X+x*Y+A*ne,u[6]=E*I+b*me+x*oe+A*_e,u[10]=E*w+b*le+x*Q+A*de,u[14]=E*P+b*$+x*se+A*Le,u[3]=O*H+C*X+U*Y+L*ne,u[7]=O*I+C*me+U*oe+L*_e,u[11]=O*w+C*le+U*Q+L*de,u[15]=O*P+C*$+U*se+L*Le,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],l=n[8],u=n[12],d=n[1],f=n[5],m=n[9],v=n[13],g=n[2],p=n[6],_=n[10],S=n[14],E=n[3],b=n[7],x=n[11],A=n[15];return E*(+u*m*p-l*v*p-u*f*_+s*v*_+l*f*S-s*m*S)+b*(+a*m*S-a*v*_+u*d*_-l*d*S+l*v*g-u*m*g)+x*(+a*v*p-a*f*S-u*d*p+s*d*S+u*f*g-s*v*g)+A*(-l*f*g-a*m*p+a*f*_+l*d*p-s*d*_+s*m*g)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const l=this.elements;return n.isVector3?(l[12]=n.x,l[13]=n.y,l[14]=n.z):(l[12]=n,l[13]=a,l[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],l=n[2],u=n[3],d=n[4],f=n[5],m=n[6],v=n[7],g=n[8],p=n[9],_=n[10],S=n[11],E=n[12],b=n[13],x=n[14],A=n[15],O=p*x*v-b*_*v+b*m*S-f*x*S-p*m*A+f*_*A,C=E*_*v-g*x*v-E*m*S+d*x*S+g*m*A-d*_*A,U=g*b*v-E*p*v+E*f*S-d*b*S-g*f*A+d*p*A,L=E*p*m-g*b*m-E*f*_+d*b*_+g*f*x-d*p*x,H=a*O+s*C+l*U+u*L;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return n[0]=O*I,n[1]=(b*_*u-p*x*u-b*l*S+s*x*S+p*l*A-s*_*A)*I,n[2]=(f*x*u-b*m*u+b*l*v-s*x*v-f*l*A+s*m*A)*I,n[3]=(p*m*u-f*_*u-p*l*v+s*_*v+f*l*S-s*m*S)*I,n[4]=C*I,n[5]=(g*x*u-E*_*u+E*l*S-a*x*S-g*l*A+a*_*A)*I,n[6]=(E*m*u-d*x*u-E*l*v+a*x*v+d*l*A-a*m*A)*I,n[7]=(d*_*u-g*m*u+g*l*v-a*_*v-d*l*S+a*m*S)*I,n[8]=U*I,n[9]=(E*p*u-g*b*u-E*s*S+a*b*S+g*s*A-a*p*A)*I,n[10]=(d*b*u-E*f*u+E*s*v-a*b*v-d*s*A+a*f*A)*I,n[11]=(g*f*u-d*p*u-g*s*v+a*p*v+d*s*S-a*f*S)*I,n[12]=L*I,n[13]=(g*b*l-E*p*l+E*s*_-a*b*_-g*s*x+a*p*x)*I,n[14]=(E*f*l-d*b*l-E*s*m+a*b*m+d*s*x-a*f*x)*I,n[15]=(d*p*l-g*f*l+g*s*m-a*p*m-d*s*_+a*f*_)*I,this}scale(n){const a=this.elements,s=n.x,l=n.y,u=n.z;return a[0]*=s,a[4]*=l,a[8]*=u,a[1]*=s,a[5]*=l,a[9]*=u,a[2]*=s,a[6]*=l,a[10]*=u,a[3]*=s,a[7]*=l,a[11]*=u,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],l=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,l))}makeTranslation(n,a,s){return this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),l=Math.sin(a),u=1-s,d=n.x,f=n.y,m=n.z,v=u*d,g=u*f;return this.set(v*d+s,v*f-l*m,v*m+l*f,0,v*f+l*m,g*f+s,g*m-l*d,0,v*m-l*f,g*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,l,u,d){return this.set(1,s,u,0,n,1,d,0,a,l,1,0,0,0,0,1),this}compose(n,a,s){const l=this.elements,u=a._x,d=a._y,f=a._z,m=a._w,v=u+u,g=d+d,p=f+f,_=u*v,S=u*g,E=u*p,b=d*g,x=d*p,A=f*p,O=m*v,C=m*g,U=m*p,L=s.x,H=s.y,I=s.z;return l[0]=(1-(b+A))*L,l[1]=(S+U)*L,l[2]=(E-C)*L,l[3]=0,l[4]=(S-U)*H,l[5]=(1-(_+A))*H,l[6]=(x+O)*H,l[7]=0,l[8]=(E+C)*I,l[9]=(x-O)*I,l[10]=(1-(_+b))*I,l[11]=0,l[12]=n.x,l[13]=n.y,l[14]=n.z,l[15]=1,this}decompose(n,a,s){const l=this.elements;let u=Rs.set(l[0],l[1],l[2]).length();const d=Rs.set(l[4],l[5],l[6]).length(),f=Rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),n.x=l[12],n.y=l[13],n.z=l[14],Ai.copy(this);const v=1/u,g=1/d,p=1/f;return Ai.elements[0]*=v,Ai.elements[1]*=v,Ai.elements[2]*=v,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,a.setFromRotationMatrix(Ai),s.x=u,s.y=d,s.z=f,this}makePerspective(n,a,s,l,u,d){const f=this.elements,m=2*u/(a-n),v=2*u/(s-l),g=(a+n)/(a-n),p=(s+l)/(s-l),_=-(d+u)/(d-u),S=-2*d*u/(d-u);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=v,f[9]=p,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(n,a,s,l,u,d){const f=this.elements,m=1/(a-n),v=1/(s-l),g=1/(d-u),p=(a+n)*m,_=(s+l)*v,S=(d+u)*g;return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-p,f[1]=0,f[5]=2*v,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=-2*g,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let l=0;l<16;l++)if(a[l]!==s[l])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Rs=new Z,Ai=new Ft,SM=new Z(0,0,0),MM=new Z(1,1,1),Xa=new Z,qc=new Z,Jn=new Z,ay=new Ft,ry=new pl;class mu{constructor(n=0,a=0,s=0,l=mu.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=l}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,l=this._order){return this._x=n,this._y=a,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const l=n.elements,u=l[0],d=l[4],f=l[8],m=l[1],v=l[5],g=l[9],p=l[2],_=l[6],S=l[10];switch(a){case"XYZ":this._y=Math.asin(ti(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,v),this._z=0);break;case"YXZ":this._x=Math.asin(-ti(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,v)):(this._y=Math.atan2(-p,u),this._z=0);break;case"ZXY":this._x=Math.asin(ti(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,S),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ti(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(ti(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,v),this._y=Math.atan2(-p,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-ti(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,v),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return ay.makeRotationFromQuaternion(n),this.setFromRotationMatrix(ay,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return ry.setFromEuler(this),this.setFromQuaternion(ry,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mu.DEFAULT_ORDER="XYZ";class u_{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let TM=0;const sy=new Z,Ls=new pl,fa=new Ft,jc=new Z,Ko=new Z,wM=new Z,EM=new pl,oy=new Z(1,0,0),ly=new Z(0,1,0),cy=new Z(0,0,1),AM={type:"added"},uy={type:"removed"};class sn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const n=new Z,a=new mu,s=new pl,l=new Z(1,1,1);function u(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ii}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new u_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Ls.setFromAxisAngle(n,a),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(n,a){return Ls.setFromAxisAngle(n,a),this.quaternion.premultiply(Ls),this}rotateX(n){return this.rotateOnAxis(oy,n)}rotateY(n){return this.rotateOnAxis(ly,n)}rotateZ(n){return this.rotateOnAxis(cy,n)}translateOnAxis(n,a){return sy.copy(n).applyQuaternion(this.quaternion),this.position.add(sy.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(oy,n)}translateY(n){return this.translateOnAxis(ly,n)}translateZ(n){return this.translateOnAxis(cy,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?jc.copy(n):jc.set(n,a,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Ko,jc,this.up):fa.lookAt(jc,Ko,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Ls.setFromRotationMatrix(fa),this.quaternion.premultiply(Ls.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(AM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(uy)),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){for(let n=0;n<this.children.length;n++){const a=this.children[n];a.parent=null,a.dispatchEvent(uy)}return this.children.length=0,this}attach(n){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),fa.multiply(n.parent.matrixWorld)),n.applyMatrix4(fa),this.add(n),n.updateWorldMatrix(!1,!0),this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a){let s=[];this[n]===a&&s.push(this);for(let l=0,u=this.children.length;l<u;l++){const d=this.children[l].getObjectsByProperty(n,a);d.length>0&&(s=s.concat(d))}return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,n,wM),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,EM,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,l=a.length;s<l;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,l=a.length;s<l;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,l=a.length;s<l;s++){const u=a[s];(u.matrixWorldAutoUpdate===!0||n===!0)&&u.updateMatrixWorld(n)}}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),a===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const f=l[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(n)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(n.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let v=0,g=m.length;v<g;v++){const p=m[v];u(n.shapes,p)}else u(n.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(n.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,v=this.material.length;m<v;m++)f.push(u(n.materials,this.material[m]));l.material=f}else l.material=u(n.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(n).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];l.animations.push(u(n.animations,m))}}if(a){const f=d(n.geometries),m=d(n.materials),v=d(n.textures),g=d(n.images),p=d(n.shapes),_=d(n.skeletons),S=d(n.animations),E=d(n.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),v.length>0&&(s.textures=v),g.length>0&&(s.images=g),p.length>0&&(s.shapes=p),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(f){const m=[];for(const v in f){const g=f[v];delete g.metadata,m.push(g)}return m}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const l=n.children[s];this.add(l.clone())}return this}}sn.DEFAULT_UP=new Z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new Z,da=new Z,yd=new Z,pa=new Z,Ns=new Z,zs=new Z,hy=new Z,_d=new Z,xd=new Z,bd=new Z;class Xi{constructor(n=new Z,a=new Z,s=new Z){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,l){l.subVectors(s,a),Ci.subVectors(n,a),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(n,a,s,l,u){Ci.subVectors(l,a),da.subVectors(s,a),yd.subVectors(n,a);const d=Ci.dot(Ci),f=Ci.dot(da),m=Ci.dot(yd),v=da.dot(da),g=da.dot(yd),p=d*v-f*f;if(p===0)return u.set(-2,-1,-1);const _=1/p,S=(v*m-f*g)*_,E=(d*g-f*m)*_;return u.set(1-S-E,E,S)}static containsPoint(n,a,s,l){return this.getBarycoord(n,a,s,l,pa),pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getUV(n,a,s,l,u,d,f,m){return this.getBarycoord(n,a,s,l,pa),m.set(0,0),m.addScaledVector(u,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(f,pa.z),m}static isFrontFacing(n,a,s,l){return Ci.subVectors(s,a),da.subVectors(n,a),Ci.cross(da).dot(l)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,l){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[l]),this}setFromAttributeAndIndices(n,a,s,l){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,l),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ci.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ci.cross(da).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Xi.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Xi.getBarycoord(n,this.a,this.b,this.c,a)}getUV(n,a,s,l,u){return Xi.getUV(n,this.a,this.b,this.c,a,s,l,u)}containsPoint(n){return Xi.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Xi.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,l=this.b,u=this.c;let d,f;Ns.subVectors(l,s),zs.subVectors(u,s),_d.subVectors(n,s);const m=Ns.dot(_d),v=zs.dot(_d);if(m<=0&&v<=0)return a.copy(s);xd.subVectors(n,l);const g=Ns.dot(xd),p=zs.dot(xd);if(g>=0&&p<=g)return a.copy(l);const _=m*p-g*v;if(_<=0&&m>=0&&g<=0)return d=m/(m-g),a.copy(s).addScaledVector(Ns,d);bd.subVectors(n,u);const S=Ns.dot(bd),E=zs.dot(bd);if(E>=0&&S<=E)return a.copy(u);const b=S*v-m*E;if(b<=0&&v>=0&&E<=0)return f=v/(v-E),a.copy(s).addScaledVector(zs,f);const x=g*E-S*p;if(x<=0&&p-g>=0&&S-E>=0)return hy.subVectors(u,l),f=(p-g)/(p-g+(S-E)),a.copy(l).addScaledVector(hy,f);const A=1/(x+b+_);return d=b*A,f=_*A,a.copy(s).addScaledVector(Ns,d).addScaledVector(zs,f)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}let CM=0;class Ja extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=Ws,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=e_,this.blendDst=t_,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Id,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ad,this.stencilZFail=ad,this.stencilZPass=ad,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn("THREE.Material: '"+a+"' parameter is undefined.");continue}const l=this[a];if(l===void 0){console.warn("THREE."+this.type+": '"+a+"' is not a property of this material.");continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(s.blending=this.blending),this.side!==Ka&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(s.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}if(a){const u=l(n.textures),d=l(n.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const l=a.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=a[u].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class eo extends Ja{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const tn=new Z,Wc=new at;class kn{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=kd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[n+l]=a.array[s+l];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Wc.fromBufferAttribute(this,a),Wc.applyMatrix3(n),this.setXY(a,Wc.x,Wc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)tn.fromBufferAttribute(this,a),tn.applyMatrix3(n),this.setXYZ(a,tn.x,tn.y,tn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)tn.fromBufferAttribute(this,a),tn.applyMatrix4(n),this.setXYZ(a,tn.x,tn.y,tn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)tn.fromBufferAttribute(this,a),tn.applyNormalMatrix(n),this.setXYZ(a,tn.x,tn.y,tn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)tn.fromBufferAttribute(this,a),tn.transformDirection(n),this.setXYZ(a,tn.x,tn.y,tn.z);return this}set(n,a=0){return this.array.set(n,a),this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=Ya(a,this.array)),a}setX(n,a){return this.normalized&&(a=zt(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=Ya(a,this.array)),a}setY(n,a){return this.normalized&&(a=zt(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=Ya(a,this.array)),a}setZ(n,a){return this.normalized&&(a=zt(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=Ya(a,this.array)),a}setW(n,a){return this.normalized&&(a=zt(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=zt(a,this.array),s=zt(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,l){return n*=this.itemSize,this.normalized&&(a=zt(a,this.array),s=zt(s,this.array),l=zt(l,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=l,this}setXYZW(n,a,s,l,u){return n*=this.itemSize,this.normalized&&(a=zt(a,this.array),s=zt(s,this.array),l=zt(l,this.array),u=zt(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=l,this.array[n+3]=u,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==kd&&(n.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(n.updateRange=this.updateRange),n}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class h_ extends kn{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class f_ extends kn{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class yi extends kn{constructor(n,a,s){super(new Float32Array(n),a,s)}}let DM=0;const vi=new Ft,Sd=new sn,Os=new Z,$n=new ml,Jo=new ml,pn=new Z;class ri extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(r_(n)?f_:h_)(n,1):this.index=n,this}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ii().getNormalMatrix(n);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(n),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return vi.makeRotationFromQuaternion(n),this.applyMatrix4(vi),this}rotateX(n){return vi.makeRotationX(n),this.applyMatrix4(vi),this}rotateY(n){return vi.makeRotationY(n),this.applyMatrix4(vi),this}rotateZ(n){return vi.makeRotationZ(n),this.applyMatrix4(vi),this}translate(n,a,s){return vi.makeTranslation(n,a,s),this.applyMatrix4(vi),this}scale(n,a,s){return vi.makeScale(n,a,s),this.applyMatrix4(vi),this}lookAt(n){return Sd.lookAt(n),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(n){const a=[];for(let s=0,l=n.length;s<l;s++){const u=n[s];a.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new yi(a,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,l=a.length;s<l;s++){const u=a[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(n){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(n),a)for(let u=0,d=a.length;u<d;u++){const f=a[u];Jo.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors($n.min,Jo.min),$n.expandByPoint(pn),pn.addVectors($n.max,Jo.max),$n.expandByPoint(pn)):($n.expandByPoint(Jo.min),$n.expandByPoint(Jo.max))}$n.getCenter(s);let l=0;for(let u=0,d=n.count;u<d;u++)pn.fromBufferAttribute(n,u),l=Math.max(l,s.distanceToSquared(pn));if(a)for(let u=0,d=a.length;u<d;u++){const f=a[u],m=this.morphTargetsRelative;for(let v=0,g=f.count;v<g;v++)pn.fromBufferAttribute(f,v),m&&(Os.fromBufferAttribute(n,v),pn.add(Os)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.array,l=a.position.array,u=a.normal.array,d=a.uv.array,f=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*f),4));const m=this.getAttribute("tangent").array,v=[],g=[];for(let X=0;X<f;X++)v[X]=new Z,g[X]=new Z;const p=new Z,_=new Z,S=new Z,E=new at,b=new at,x=new at,A=new Z,O=new Z;function C(X,me,le){p.fromArray(l,X*3),_.fromArray(l,me*3),S.fromArray(l,le*3),E.fromArray(d,X*2),b.fromArray(d,me*2),x.fromArray(d,le*2),_.sub(p),S.sub(p),b.sub(E),x.sub(E);const $=1/(b.x*x.y-x.x*b.y);isFinite($)&&(A.copy(_).multiplyScalar(x.y).addScaledVector(S,-b.y).multiplyScalar($),O.copy(S).multiplyScalar(b.x).addScaledVector(_,-x.x).multiplyScalar($),v[X].add(A),v[me].add(A),v[le].add(A),g[X].add(O),g[me].add(O),g[le].add(O))}let U=this.groups;U.length===0&&(U=[{start:0,count:s.length}]);for(let X=0,me=U.length;X<me;++X){const le=U[X],$=le.start,Y=le.count;for(let oe=$,Q=$+Y;oe<Q;oe+=3)C(s[oe+0],s[oe+1],s[oe+2])}const L=new Z,H=new Z,I=new Z,w=new Z;function P(X){I.fromArray(u,X*3),w.copy(I);const me=v[X];L.copy(me),L.sub(I.multiplyScalar(I.dot(me))).normalize(),H.crossVectors(w,me);const $=H.dot(g[X])<0?-1:1;m[X*4]=L.x,m[X*4+1]=L.y,m[X*4+2]=L.z,m[X*4+3]=$}for(let X=0,me=U.length;X<me;++X){const le=U[X],$=le.start,Y=le.count;for(let oe=$,Q=$+Y;oe<Q;oe+=3)P(s[oe+0]),P(s[oe+1]),P(s[oe+2])}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new kn(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new Z,u=new Z,d=new Z,f=new Z,m=new Z,v=new Z,g=new Z,p=new Z;if(n)for(let _=0,S=n.count;_<S;_+=3){const E=n.getX(_+0),b=n.getX(_+1),x=n.getX(_+2);l.fromBufferAttribute(a,E),u.fromBufferAttribute(a,b),d.fromBufferAttribute(a,x),g.subVectors(d,u),p.subVectors(l,u),g.cross(p),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,x),f.add(g),m.add(g),v.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(x,v.x,v.y,v.z)}else for(let _=0,S=a.count;_<S;_+=3)l.fromBufferAttribute(a,_+0),u.fromBufferAttribute(a,_+1),d.fromBufferAttribute(a,_+2),g.subVectors(d,u),p.subVectors(l,u),g.cross(p),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)pn.fromBufferAttribute(n,a),pn.normalize(),n.setXYZ(a,pn.x,pn.y,pn.z)}toNonIndexed(){function n(f,m){const v=f.array,g=f.itemSize,p=f.normalized,_=new v.constructor(m.length*g);let S=0,E=0;for(let b=0,x=m.length;b<x;b++){f.isInterleavedBufferAttribute?S=m[b]*f.data.stride+f.offset:S=m[b]*g;for(let A=0;A<g;A++)_[E++]=v[S++]}return new kn(_,g,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new ri,s=this.index.array,l=this.attributes;for(const f in l){const m=l[f],v=n(m,s);a.setAttribute(f,v)}const u=this.morphAttributes;for(const f in u){const m=[],v=u[f];for(let g=0,p=v.length;g<p;g++){const _=v[g],S=n(_,s);m.push(S)}a.morphAttributes[f]=m}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const v=d[f];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const v in m)m[v]!==void 0&&(n[v]=m[v]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const m in s){const v=s[m];n.data.attributes[m]=v.toJSON(n.data)}const l={};let u=!1;for(const m in this.morphAttributes){const v=this.morphAttributes[m],g=[];for(let p=0,_=v.length;p<_;p++){const S=v[p];g.push(S.toJSON(n.data))}g.length>0&&(l[m]=g,u=!0)}u&&(n.data.morphAttributes=l,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(n.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const l=n.attributes;for(const v in l){const g=l[v];this.setAttribute(v,g.clone(a))}const u=n.morphAttributes;for(const v in u){const g=[],p=u[v];for(let _=0,S=p.length;_<S;_++)g.push(p[_].clone(a));this.morphAttributes[v]=g}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let v=0,g=d.length;v<g;v++){const p=d[v];this.addGroup(p.start,p.count,p.materialIndex)}const f=n.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=n.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,n.parameters!==void 0&&(this.parameters=Object.assign({},n.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fy=new Ft,Us=new Jd,Md=new gl,$o=new Z,el=new Z,tl=new Z,Td=new Z,Xc=new Z,Yc=new at,Zc=new at,Qc=new at,wd=new Z,Kc=new Z;class ai extends sn{constructor(n=new ri,a=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const l=a[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(n,a){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(l,n);const f=this.morphTargetInfluences;if(u&&f){Xc.set(0,0,0);for(let m=0,v=u.length;m<v;m++){const g=f[m],p=u[m];g!==0&&(Td.fromBufferAttribute(p,n),d?Xc.addScaledVector(Td,g):Xc.addScaledVector(Td.sub(a),g))}a.add(Xc)}return this.isSkinnedMesh&&this.boneTransform(n,a),a}raycast(n,a){const s=this.geometry,l=this.material,u=this.matrixWorld;if(l===void 0||(s.boundingSphere===null&&s.computeBoundingSphere(),Md.copy(s.boundingSphere),Md.applyMatrix4(u),n.ray.intersectsSphere(Md)===!1)||(fy.copy(u).invert(),Us.copy(n.ray).applyMatrix4(fy),s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1))return;let d;const f=s.index,m=s.attributes.position,v=s.attributes.uv,g=s.attributes.uv2,p=s.groups,_=s.drawRange;if(f!==null)if(Array.isArray(l))for(let S=0,E=p.length;S<E;S++){const b=p[S],x=l[b.materialIndex],A=Math.max(b.start,_.start),O=Math.min(f.count,Math.min(b.start+b.count,_.start+_.count));for(let C=A,U=O;C<U;C+=3){const L=f.getX(C),H=f.getX(C+1),I=f.getX(C+2);d=Jc(this,x,n,Us,v,g,L,H,I),d&&(d.faceIndex=Math.floor(C/3),d.face.materialIndex=b.materialIndex,a.push(d))}}else{const S=Math.max(0,_.start),E=Math.min(f.count,_.start+_.count);for(let b=S,x=E;b<x;b+=3){const A=f.getX(b),O=f.getX(b+1),C=f.getX(b+2);d=Jc(this,l,n,Us,v,g,A,O,C),d&&(d.faceIndex=Math.floor(b/3),a.push(d))}}else if(m!==void 0)if(Array.isArray(l))for(let S=0,E=p.length;S<E;S++){const b=p[S],x=l[b.materialIndex],A=Math.max(b.start,_.start),O=Math.min(m.count,Math.min(b.start+b.count,_.start+_.count));for(let C=A,U=O;C<U;C+=3){const L=C,H=C+1,I=C+2;d=Jc(this,x,n,Us,v,g,L,H,I),d&&(d.faceIndex=Math.floor(C/3),d.face.materialIndex=b.materialIndex,a.push(d))}}else{const S=Math.max(0,_.start),E=Math.min(m.count,_.start+_.count);for(let b=S,x=E;b<x;b+=3){const A=b,O=b+1,C=b+2;d=Jc(this,l,n,Us,v,g,A,O,C),d&&(d.faceIndex=Math.floor(b/3),a.push(d))}}}}function RM(h,n,a,s,l,u,d,f){let m;if(n.side===Vn?m=s.intersectTriangle(d,u,l,!0,f):m=s.intersectTriangle(l,u,d,n.side===Ka,f),m===null)return null;Kc.copy(f),Kc.applyMatrix4(h.matrixWorld);const v=a.ray.origin.distanceTo(Kc);return v<a.near||v>a.far?null:{distance:v,point:Kc.clone(),object:h}}function Jc(h,n,a,s,l,u,d,f,m){h.getVertexPosition(d,$o),h.getVertexPosition(f,el),h.getVertexPosition(m,tl);const v=RM(h,n,a,s,$o,el,tl,wd);if(v){l&&(Yc.fromBufferAttribute(l,d),Zc.fromBufferAttribute(l,f),Qc.fromBufferAttribute(l,m),v.uv=Xi.getUV(wd,$o,el,tl,Yc,Zc,Qc,new at)),u&&(Yc.fromBufferAttribute(u,d),Zc.fromBufferAttribute(u,f),Qc.fromBufferAttribute(u,m),v.uv2=Xi.getUV(wd,$o,el,tl,Yc,Zc,Qc,new at));const g={a:d,b:f,c:m,normal:new Z,materialIndex:0};Xi.getNormal($o,el,tl,g.normal),v.face=g}return v}class to extends ri{constructor(n=1,a=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const f=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],v=[],g=[],p=[];let _=0,S=0;E("z","y","x",-1,-1,s,a,n,d,u,0),E("z","y","x",1,-1,s,a,-n,d,u,1),E("x","z","y",1,1,n,s,a,l,d,2),E("x","z","y",1,-1,n,s,-a,l,d,3),E("x","y","z",1,-1,n,a,s,l,u,4),E("x","y","z",-1,-1,n,a,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(p,2));function E(b,x,A,O,C,U,L,H,I,w,P){const X=U/I,me=L/w,le=U/2,$=L/2,Y=H/2,oe=I+1,Q=w+1;let se=0,ne=0;const _e=new Z;for(let de=0;de<Q;de++){const Le=de*me-$;for(let re=0;re<oe;re++){const ge=re*X-le;_e[b]=ge*O,_e[x]=Le*C,_e[A]=Y,v.push(_e.x,_e.y,_e.z),_e[b]=0,_e[x]=0,_e[A]=H>0?1:-1,g.push(_e.x,_e.y,_e.z),p.push(re/I),p.push(1-de/w),se+=1}}for(let de=0;de<w;de++)for(let Le=0;Le<I;Le++){const re=_+Le+oe*de,ge=_+Le+oe*(de+1),R=_+(Le+1)+oe*(de+1),W=_+(Le+1)+oe*de;m.push(re,ge,W),m.push(ge,R,W),ne+=6}f.addGroup(S,ne,P),S+=ne,_+=se}}static fromJSON(n){return new to(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function Js(h){const n={};for(const a in h){n[a]={};for(const s in h[a]){const l=h[a][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?n[a][s]=l.clone():Array.isArray(l)?n[a][s]=l.slice():n[a][s]=l}}return n}function On(h){const n={};for(let a=0;a<h.length;a++){const s=Js(h[a]);for(const l in s)n[l]=s[l]}return n}function LM(h){const n=[];for(let a=0;a<h.length;a++)n.push(h[a].clone());return n}function d_(h){return h.getRenderTarget()===null&&h.outputEncoding===Ut?ji:dl}const NM={clone:Js,merge:On};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Ja{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Js(n.uniforms),this.uniformsGroups=LM(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?a.uniforms[l]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[l]={type:"m4",value:d.toArray()}:a.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class p_ extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(-a[8],-a[9],-a[10]).normalize()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ni extends p_{constructor(n=50,a=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=ty*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return ty*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(n,a,s,l,u,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(rd*.5*this.fov)/this.zoom,s=2*a,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,v=d.fullHeight;u+=d.offsetX*l/m,a-=d.offsetY*s/v,l*=d.width/m,s*=d.height/v}const f=this.filmOffset;f!==0&&(u+=n*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,a,a-s,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Bs=-90,Ps=1;class UM extends sn{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s;const l=new ni(Bs,Ps,n,a);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(1,0,0),this.add(l);const u=new ni(Bs,Ps,n,a);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(-1,0,0),this.add(u);const d=new ni(Bs,Ps,n,a);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const f=new ni(Bs,Ps,n,a);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(0,-1,0),this.add(f);const m=new ni(Bs,Ps,n,a);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,1),this.add(m);const v=new ni(Bs,Ps,n,a);v.layers=this.layers,v.up.set(0,1,0),v.lookAt(0,0,-1),this.add(v)}update(n,a){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget,[l,u,d,f,m,v]=this.children,g=n.getRenderTarget(),p=n.toneMapping,_=n.xr.enabled;n.toneMapping=ga,n.xr.enabled=!1;const S=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0),n.render(a,l),n.setRenderTarget(s,1),n.render(a,u),n.setRenderTarget(s,2),n.render(a,d),n.setRenderTarget(s,3),n.render(a,f),n.setRenderTarget(s,4),n.render(a,m),s.texture.generateMipmaps=S,n.setRenderTarget(s,5),n.render(a,v),n.setRenderTarget(g),n.toneMapping=p,n.xr.enabled=_,s.texture.needsPMREMUpdate=!0}}class m_ extends Fn{constructor(n,a,s,l,u,d,f,m,v,g){n=n!==void 0?n:[],a=a!==void 0?a:Zs,super(n,a,s,l,u,d,f,m,v,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class BM extends Nr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},l=[s,s,s,s,s,s];this.texture=new m_(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:ei}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.encoding=a.encoding,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new to(5,5,5),u=new zr({name:"CubemapFromEquirect",uniforms:Js(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Za});u.uniforms.tEquirect.value=a;const d=new ai(l,u),f=a.minFilter;return a.minFilter===hl&&(a.minFilter=ei),new UM(1,10,this).update(n,d),a.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(n,a,s,l){const u=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,s,l);n.setRenderTarget(u)}}const Ed=new Z,PM=new Z,GM=new ii;class Mr{constructor(n=new Z(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,l){return this.normal.set(n,a,s),this.constant=l,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const l=Ed.subVectors(s,a).cross(PM.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(l,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(this.normal).multiplyScalar(-this.distanceToPoint(n)).add(n)}intersectLine(n,a){const s=n.delta(Ed),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const u=-(n.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:a.copy(s).multiplyScalar(u).add(n.start)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||GM.getNormalMatrix(n),l=this.coplanarPoint(Ed).applyMatrix4(n),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new gl,$c=new Z;class $d{constructor(n=new Mr,a=new Mr,s=new Mr,l=new Mr,u=new Mr,d=new Mr){this.planes=[n,a,s,l,u,d]}set(n,a,s,l,u,d){const f=this.planes;return f[0].copy(n),f[1].copy(a),f[2].copy(s),f[3].copy(l),f[4].copy(u),f[5].copy(d),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n){const a=this.planes,s=n.elements,l=s[0],u=s[1],d=s[2],f=s[3],m=s[4],v=s[5],g=s[6],p=s[7],_=s[8],S=s[9],E=s[10],b=s[11],x=s[12],A=s[13],O=s[14],C=s[15];return a[0].setComponents(f-l,p-m,b-_,C-x).normalize(),a[1].setComponents(f+l,p+m,b+_,C+x).normalize(),a[2].setComponents(f+u,p+v,b+S,C+A).normalize(),a[3].setComponents(f-u,p-v,b-S,C-A).normalize(),a[4].setComponents(f-d,p-g,b-E,C-O).normalize(),a[5].setComponents(f+d,p+g,b+E,C+O).normalize(),this}intersectsObject(n){const a=n.geometry;return a.boundingSphere===null&&a.computeBoundingSphere(),Gs.copy(a.boundingSphere).applyMatrix4(n.matrixWorld),this.intersectsSphere(Gs)}intersectsSprite(n){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(n.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(n){const a=this.planes,s=n.center,l=-n.radius;for(let u=0;u<6;u++)if(a[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const l=a[s];if($c.x=l.normal.x>0?n.max.x:n.min.x,$c.y=l.normal.y>0?n.max.y:n.min.y,$c.z=l.normal.z>0?n.max.z:n.min.z,l.distanceToPoint($c)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function g_(){let h=null,n=!1,a=null,s=null;function l(u,d){a(u,d),s=h.requestAnimationFrame(l)}return{start:function(){n!==!0&&a!==null&&(s=h.requestAnimationFrame(l),n=!0)},stop:function(){h.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(u){a=u},setContext:function(u){h=u}}}function IM(h,n){const a=n.isWebGL2,s=new WeakMap;function l(v,g){const p=v.array,_=v.usage,S=h.createBuffer();h.bindBuffer(g,S),h.bufferData(g,p,_),v.onUploadCallback();let E;if(p instanceof Float32Array)E=5126;else if(p instanceof Uint16Array)if(v.isFloat16BufferAttribute)if(a)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(p instanceof Int16Array)E=5122;else if(p instanceof Uint32Array)E=5125;else if(p instanceof Int32Array)E=5124;else if(p instanceof Int8Array)E=5120;else if(p instanceof Uint8Array)E=5121;else if(p instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:v.version}}function u(v,g,p){const _=g.array,S=g.updateRange;h.bindBuffer(p,v),S.count===-1?h.bufferSubData(p,0,_):(a?h.bufferSubData(p,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):h.bufferSubData(p,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function d(v){return v.isInterleavedBufferAttribute&&(v=v.data),s.get(v)}function f(v){v.isInterleavedBufferAttribute&&(v=v.data);const g=s.get(v);g&&(h.deleteBuffer(g.buffer),s.delete(v))}function m(v,g){if(v.isGLBufferAttribute){const _=s.get(v);(!_||_.version<v.version)&&s.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}v.isInterleavedBufferAttribute&&(v=v.data);const p=s.get(v);p===void 0?s.set(v,l(v,g)):p.version<v.version&&(u(p.buffer,v,g),p.version=v.version)}return{get:d,remove:f,update:m}}class vl extends ri{constructor(n=1,a=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:l};const u=n/2,d=a/2,f=Math.floor(s),m=Math.floor(l),v=f+1,g=m+1,p=n/f,_=a/m,S=[],E=[],b=[],x=[];for(let A=0;A<g;A++){const O=A*_-d;for(let C=0;C<v;C++){const U=C*p-u;E.push(U,-O,0),b.push(0,0,1),x.push(C/f),x.push(1-A/m)}}for(let A=0;A<m;A++)for(let O=0;O<f;O++){const C=O+v*A,U=O+v*(A+1),L=O+1+v*(A+1),H=O+1+v*A;S.push(C,U,H),S.push(U,L,H)}this.setIndex(S),this.setAttribute("position",new yi(E,3)),this.setAttribute("normal",new yi(b,3)),this.setAttribute("uv",new yi(x,2))}static fromJSON(n){return new vl(n.width,n.height,n.widthSegments,n.heightSegments)}}var HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM="vec3 transformed = vec3( position );",XM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ZM=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,QM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r1=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,o1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,T1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,D1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,U1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,eT=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_T=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,RT=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,LT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,NT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,OT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,UT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,BT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IT=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,jT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,tw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,iw=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ow=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,cw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,vw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,it={alphamap_fragment:HM,alphamap_pars_fragment:VM,alphatest_fragment:FM,alphatest_pars_fragment:kM,aomap_fragment:qM,aomap_pars_fragment:jM,begin_vertex:WM,beginnormal_vertex:XM,bsdfs:YM,iridescence_fragment:ZM,bumpmap_pars_fragment:QM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:a1,common:r1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:o1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:h1,encodings_fragment:f1,encodings_pars_fragment:d1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:D1,envmap_vertex:y1,fog_vertex:_1,fog_pars_vertex:x1,fog_fragment:b1,fog_pars_fragment:S1,gradientmap_pars_fragment:M1,lightmap_fragment:T1,lightmap_pars_fragment:w1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:A1,lights_pars_begin:C1,lights_toon_fragment:R1,lights_toon_pars_fragment:L1,lights_phong_fragment:N1,lights_phong_pars_fragment:z1,lights_physical_fragment:O1,lights_physical_pars_fragment:U1,lights_fragment_begin:B1,lights_fragment_maps:P1,lights_fragment_end:G1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:F1,map_fragment:k1,map_pars_fragment:q1,map_particle_fragment:j1,map_particle_pars_fragment:W1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Y1,morphcolor_vertex:Z1,morphnormal_vertex:Q1,morphtarget_pars_vertex:K1,morphtarget_vertex:J1,normal_fragment_begin:$1,normal_fragment_maps:eT,normal_pars_fragment:tT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:lT,output_fragment:cT,packing:uT,premultiplied_alpha_fragment:hT,project_vertex:fT,dithering_fragment:dT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:yT,shadowmap_vertex:_T,shadowmask_pars_fragment:xT,skinbase_vertex:bT,skinning_pars_vertex:ST,skinning_vertex:MT,skinnormal_vertex:TT,specularmap_fragment:wT,specularmap_pars_fragment:ET,tonemapping_fragment:AT,tonemapping_pars_fragment:CT,transmission_fragment:DT,transmission_pars_fragment:RT,uv_pars_fragment:LT,uv_pars_vertex:NT,uv_vertex:zT,uv2_pars_fragment:OT,uv2_pars_vertex:UT,uv2_vertex:BT,worldpos_vertex:PT,background_vert:GT,background_frag:IT,backgroundCube_vert:HT,backgroundCube_frag:VT,cube_vert:FT,cube_frag:kT,depth_vert:qT,depth_frag:jT,distanceRGBA_vert:WT,distanceRGBA_frag:XT,equirect_vert:YT,equirect_frag:ZT,linedashed_vert:QT,linedashed_frag:KT,meshbasic_vert:JT,meshbasic_frag:$T,meshlambert_vert:ew,meshlambert_frag:tw,meshmatcap_vert:nw,meshmatcap_frag:iw,meshnormal_vert:aw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:lw,meshphysical_frag:cw,meshtoon_vert:uw,meshtoon_frag:hw,points_vert:fw,points_frag:dw,shadow_vert:pw,shadow_frag:mw,sprite_vert:gw,sprite_frag:vw},De={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ii},uv2Transform:{value:new ii},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ii}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ii}}},Wi={basic:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:On([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:On([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:On([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:On([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:On([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:On([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:On([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:On([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ii},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:On([De.common,De.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:On([De.lights,De.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Wi.physical={uniforms:On([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new at(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const eu={r:0,b:0,g:0};function yw(h,n,a,s,l,u,d){const f=new vt(0);let m=u===!0?0:1,v,g,p=null,_=0,S=null;function E(x,A){let O=!1,C=A.isScene===!0?A.background:null;C&&C.isTexture&&(C=(A.backgroundBlurriness>0?a:n).get(C));const U=h.xr,L=U.getSession&&U.getSession();L&&L.environmentBlendMode==="additive"&&(C=null),C===null?b(f,m):C&&C.isColor&&(b(C,1),O=!0),(h.autoClear||O)&&h.clear(h.autoClearColor,h.autoClearDepth,h.autoClearStencil),C&&(C.isCubeTexture||C.mapping===pu)?(g===void 0&&(g=new ai(new to(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Js(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=C.encoding!==Ut,(p!==C||_!==C.version||S!==h.toneMapping)&&(g.material.needsUpdate=!0,p=C,_=C.version,S=h.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(v===void 0&&(v=new ai(new vl(2,2),new zr({name:"BackgroundMaterial",uniforms:Js(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(v)),v.material.uniforms.t2D.value=C,v.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,v.material.toneMapped=C.encoding!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),v.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||_!==C.version||S!==h.toneMapping)&&(v.material.needsUpdate=!0,p=C,_=C.version,S=h.toneMapping),v.layers.enableAll(),x.unshift(v,v.geometry,v.material,0,0,null))}function b(x,A){x.getRGB(eu,d_(h)),s.buffers.color.setClear(eu.r,eu.g,eu.b,A,d)}return{getClearColor:function(){return f},setClearColor:function(x,A=1){f.set(x),m=A,b(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(x){m=x,b(f,m)},render:E}}function _w(h,n,a,s){const l=h.getParameter(34921),u=s.isWebGL2?null:n.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,f={},m=x(null);let v=m,g=!1;function p(Y,oe,Q,se,ne){let _e=!1;if(d){const de=b(se,Q,oe);v!==de&&(v=de,S(v.object)),_e=A(Y,se,Q,ne),_e&&O(Y,se,Q,ne)}else{const de=oe.wireframe===!0;(v.geometry!==se.id||v.program!==Q.id||v.wireframe!==de)&&(v.geometry=se.id,v.program=Q.id,v.wireframe=de,_e=!0)}ne!==null&&a.update(ne,34963),(_e||g)&&(g=!1,w(Y,oe,Q,se),ne!==null&&h.bindBuffer(34963,a.get(ne).buffer))}function _(){return s.isWebGL2?h.createVertexArray():u.createVertexArrayOES()}function S(Y){return s.isWebGL2?h.bindVertexArray(Y):u.bindVertexArrayOES(Y)}function E(Y){return s.isWebGL2?h.deleteVertexArray(Y):u.deleteVertexArrayOES(Y)}function b(Y,oe,Q){const se=Q.wireframe===!0;let ne=f[Y.id];ne===void 0&&(ne={},f[Y.id]=ne);let _e=ne[oe.id];_e===void 0&&(_e={},ne[oe.id]=_e);let de=_e[se];return de===void 0&&(de=x(_()),_e[se]=de),de}function x(Y){const oe=[],Q=[],se=[];for(let ne=0;ne<l;ne++)oe[ne]=0,Q[ne]=0,se[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:Q,attributeDivisors:se,object:Y,attributes:{},index:null}}function A(Y,oe,Q,se){const ne=v.attributes,_e=oe.attributes;let de=0;const Le=Q.getAttributes();for(const re in Le)if(Le[re].location>=0){const R=ne[re];let W=_e[re];if(W===void 0&&(re==="instanceMatrix"&&Y.instanceMatrix&&(W=Y.instanceMatrix),re==="instanceColor"&&Y.instanceColor&&(W=Y.instanceColor)),R===void 0||R.attribute!==W||W&&R.data!==W.data)return!0;de++}return v.attributesNum!==de||v.index!==se}function O(Y,oe,Q,se){const ne={},_e=oe.attributes;let de=0;const Le=Q.getAttributes();for(const re in Le)if(Le[re].location>=0){let R=_e[re];R===void 0&&(re==="instanceMatrix"&&Y.instanceMatrix&&(R=Y.instanceMatrix),re==="instanceColor"&&Y.instanceColor&&(R=Y.instanceColor));const W={};W.attribute=R,R&&R.data&&(W.data=R.data),ne[re]=W,de++}v.attributes=ne,v.attributesNum=de,v.index=se}function C(){const Y=v.newAttributes;for(let oe=0,Q=Y.length;oe<Q;oe++)Y[oe]=0}function U(Y){L(Y,0)}function L(Y,oe){const Q=v.newAttributes,se=v.enabledAttributes,ne=v.attributeDivisors;Q[Y]=1,se[Y]===0&&(h.enableVertexAttribArray(Y),se[Y]=1),ne[Y]!==oe&&((s.isWebGL2?h:n.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,oe),ne[Y]=oe)}function H(){const Y=v.newAttributes,oe=v.enabledAttributes;for(let Q=0,se=oe.length;Q<se;Q++)oe[Q]!==Y[Q]&&(h.disableVertexAttribArray(Q),oe[Q]=0)}function I(Y,oe,Q,se,ne,_e){s.isWebGL2===!0&&(Q===5124||Q===5125)?h.vertexAttribIPointer(Y,oe,Q,ne,_e):h.vertexAttribPointer(Y,oe,Q,se,ne,_e)}function w(Y,oe,Q,se){if(s.isWebGL2===!1&&(Y.isInstancedMesh||se.isInstancedBufferGeometry)&&n.get("ANGLE_instanced_arrays")===null)return;C();const ne=se.attributes,_e=Q.getAttributes(),de=oe.defaultAttributeValues;for(const Le in _e){const re=_e[Le];if(re.location>=0){let ge=ne[Le];if(ge===void 0&&(Le==="instanceMatrix"&&Y.instanceMatrix&&(ge=Y.instanceMatrix),Le==="instanceColor"&&Y.instanceColor&&(ge=Y.instanceColor)),ge!==void 0){const R=ge.normalized,W=ge.itemSize,F=a.get(ge);if(F===void 0)continue;const xe=F.buffer,Me=F.type,Ee=F.bytesPerElement;if(ge.isInterleavedBufferAttribute){const be=ge.data,Te=be.stride,we=ge.offset;if(be.isInstancedInterleavedBuffer){for(let Ge=0;Ge<re.locationSize;Ge++)L(re.location+Ge,be.meshPerAttribute);Y.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ge=0;Ge<re.locationSize;Ge++)U(re.location+Ge);h.bindBuffer(34962,xe);for(let Ge=0;Ge<re.locationSize;Ge++)I(re.location+Ge,W/re.locationSize,Me,R,Te*Ee,(we+W/re.locationSize*Ge)*Ee)}else{if(ge.isInstancedBufferAttribute){for(let be=0;be<re.locationSize;be++)L(re.location+be,ge.meshPerAttribute);Y.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let be=0;be<re.locationSize;be++)U(re.location+be);h.bindBuffer(34962,xe);for(let be=0;be<re.locationSize;be++)I(re.location+be,W/re.locationSize,Me,R,W*Ee,W/re.locationSize*be*Ee)}}else if(de!==void 0){const R=de[Le];if(R!==void 0)switch(R.length){case 2:h.vertexAttrib2fv(re.location,R);break;case 3:h.vertexAttrib3fv(re.location,R);break;case 4:h.vertexAttrib4fv(re.location,R);break;default:h.vertexAttrib1fv(re.location,R)}}}}H()}function P(){le();for(const Y in f){const oe=f[Y];for(const Q in oe){const se=oe[Q];for(const ne in se)E(se[ne].object),delete se[ne];delete oe[Q]}delete f[Y]}}function X(Y){if(f[Y.id]===void 0)return;const oe=f[Y.id];for(const Q in oe){const se=oe[Q];for(const ne in se)E(se[ne].object),delete se[ne];delete oe[Q]}delete f[Y.id]}function me(Y){for(const oe in f){const Q=f[oe];if(Q[Y.id]===void 0)continue;const se=Q[Y.id];for(const ne in se)E(se[ne].object),delete se[ne];delete Q[Y.id]}}function le(){$(),g=!0,v!==m&&(v=m,S(v.object))}function $(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:p,reset:le,resetDefaultState:$,dispose:P,releaseStatesOfGeometry:X,releaseStatesOfProgram:me,initAttributes:C,enableAttribute:U,disableUnusedAttributes:H}}function xw(h,n,a,s){const l=s.isWebGL2;let u;function d(v){u=v}function f(v,g){h.drawArrays(u,v,g),a.update(g,u,1)}function m(v,g,p){if(p===0)return;let _,S;if(l)_=h,S="drawArraysInstanced";else if(_=n.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](u,v,g,p),a.update(g,u,p)}this.setMode=d,this.render=f,this.renderInstances=m}function bw(h,n,a){let s;function l(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");s=h.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){if(I==="highp"){if(h.getShaderPrecisionFormat(35633,36338).precision>0&&h.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&h.getShaderPrecisionFormat(35633,36337).precision>0&&h.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&h instanceof WebGL2RenderingContext;let f=a.precision!==void 0?a.precision:"highp";const m=u(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const v=d||n.has("WEBGL_draw_buffers"),g=a.logarithmicDepthBuffer===!0,p=h.getParameter(34930),_=h.getParameter(35660),S=h.getParameter(3379),E=h.getParameter(34076),b=h.getParameter(34921),x=h.getParameter(36347),A=h.getParameter(36348),O=h.getParameter(36349),C=_>0,U=d||n.has("OES_texture_float"),L=C&&U,H=d?h.getParameter(36183):0;return{isWebGL2:d,drawBuffers:v,getMaxAnisotropy:l,getMaxPrecision:u,precision:f,logarithmicDepthBuffer:g,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:O,vertexTextures:C,floatFragmentTextures:U,floatVertexTextures:L,maxSamples:H}}function Sw(h){const n=this;let a=null,s=0,l=!1,u=!1;const d=new Mr,f=new ii,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const S=p.length!==0||_||s!==0||l;return l=_,s=p.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(p,_){a=g(p,_,0)},this.setState=function(p,_,S){const E=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,A=h.get(p);if(!l||E===null||E.length===0||u&&!x)u?g(null):v();else{const O=u?0:s,C=O*4;let U=A.clippingState||null;m.value=U,U=g(E,_,C,S);for(let L=0;L!==C;++L)U[L]=a[L];A.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function v(){m.value!==a&&(m.value=a,m.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function g(p,_,S,E){const b=p!==null?p.length:0;let x=null;if(b!==0){if(x=m.value,E!==!0||x===null){const A=S+b*4,O=_.matrixWorldInverse;f.getNormalMatrix(O),(x===null||x.length<A)&&(x=new Float32Array(A));for(let C=0,U=S;C!==b;++C,U+=4)d.copy(p[C]).applyMatrix4(O,f),d.normal.toArray(x,U),x[U+3]=d.constant}m.value=x,m.needsUpdate=!0}return n.numPlanes=b,n.numIntersection=0,x}}function Mw(h){let n=new WeakMap;function a(d,f){return f===Hd?d.mapping=Zs:f===Vd&&(d.mapping=Qs),d}function s(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const f=d.mapping;if(f===Hd||f===Vd)if(n.has(d)){const m=n.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new BM(m.height/2);return v.fromEquirectangularTexture(h,d),n.set(d,v),d.addEventListener("dispose",l),a(v.texture,d.mapping)}else return null}}return d}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=n.get(f);m!==void 0&&(n.delete(f),m.dispose())}function u(){n=new WeakMap}return{get:s,dispose:u}}class v_ extends p_{constructor(n=-1,a=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-n,d=s+n,f=l+a,m=l-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=v*this.view.offsetX,d=u+v*this.view.width,f-=g*this.view.offsetY,m=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const js=4,dy=[.125,.215,.35,.446,.526,.582],wr=20,Ad=new v_,py=new vt;let Cd=null;const Tr=(1+Math.sqrt(5))/2,Is=1/Tr,my=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Tr,Is),new Z(0,Tr,-Is),new Z(Is,0,Tr),new Z(-Is,0,Tr),new Z(Tr,Is,0),new Z(-Tr,Is,0)];class gy{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,l=100){Cd=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(n,s,l,u),a>0&&this._blur(u,0,0,a),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_y(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Cd),n.scissorTest=!1,tu(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===Zs||n.mapping===Qs?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Cd=this._renderer.getRenderTarget();const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:fl,format:Ri,encoding:Lr,depthBuffer:!1},l=vy(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vy(n,a,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tw(u)),this._blurMaterial=ww(u,n,a)}return l}_compileMaterial(n){const a=new ai(this._lodPlanes[0],n);this._renderer.compile(a,Ad)}_sceneToCubeUV(n,a,s,l){const f=new ni(90,1,a,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,_=g.toneMapping;g.getClearColor(py),g.toneMapping=ga,g.autoClear=!1;const S=new eo({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),E=new ai(new to,S);let b=!1;const x=n.background;x?x.isColor&&(S.color.copy(x),n.background=null,b=!0):(S.color.copy(py),b=!0);for(let A=0;A<6;A++){const O=A%3;O===0?(f.up.set(0,m[A],0),f.lookAt(v[A],0,0)):O===1?(f.up.set(0,0,m[A]),f.lookAt(0,v[A],0)):(f.up.set(0,m[A],0),f.lookAt(0,0,v[A]));const C=this._cubeSize;tu(l,O*C,A>2?C:0,C,C),g.setRenderTarget(l),b&&g.render(E,f),g.render(n,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=p,n.background=x}_textureToCubeUV(n,a){const s=this._renderer,l=n.mapping===Zs||n.mapping===Qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_y()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yy());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ai(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=n;const m=this._cubeSize;tu(a,0,0,3*m,2*m),s.setRenderTarget(a),s.render(d,Ad)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=my[(l-1)%my.length];this._blur(n,l-1,l,u,d)}a.autoClear=s}_blur(n,a,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,s,l,"latitudinal",u),this._halfBlur(d,n,s,s,l,"longitudinal",u)}_halfBlur(n,a,s,l,u,d,f){const m=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,p=new ai(this._lodPlanes[l],v),_=v.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*wr-1),b=u/E,x=isFinite(u)?1+Math.floor(g*b):wr;x>wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${wr}`);const A=[];let O=0;for(let I=0;I<wr;++I){const w=I/b,P=Math.exp(-w*w/2);A.push(P),I===0?O+=P:I<x&&(O+=2*P)}for(let I=0;I<A.length;I++)A[I]=A[I]/O;_.envMap.value=n.texture,_.samples.value=x,_.weights.value=A,_.latitudinal.value=d==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:C}=this;_.dTheta.value=E,_.mipInt.value=C-s;const U=this._sizeLods[l],L=3*U*(l>C-js?l-C+js:0),H=4*(this._cubeSize-U);tu(a,L,H,3*U,2*U),m.setRenderTarget(a),m.render(p,Ad)}}function Tw(h){const n=[],a=[],s=[];let l=h;const u=h-js+1+dy.length;for(let d=0;d<u;d++){const f=Math.pow(2,l);a.push(f);let m=1/f;d>h-js?m=dy[d-h+js-1]:d===0&&(m=0),s.push(m);const v=1/(f-2),g=-v,p=1+v,_=[g,g,p,g,p,p,g,g,p,p,g,p],S=6,E=6,b=3,x=2,A=1,O=new Float32Array(b*E*S),C=new Float32Array(x*E*S),U=new Float32Array(A*E*S);for(let H=0;H<S;H++){const I=H%3*2/3-1,w=H>2?0:-1,P=[I,w,0,I+2/3,w,0,I+2/3,w+1,0,I,w,0,I+2/3,w+1,0,I,w+1,0];O.set(P,b*E*H),C.set(_,x*E*H);const X=[H,H,H,H,H,H];U.set(X,A*E*H)}const L=new ri;L.setAttribute("position",new kn(O,b)),L.setAttribute("uv",new kn(C,x)),L.setAttribute("faceIndex",new kn(U,A)),n.push(L),l>js&&l--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function vy(h,n,a){const s=new Nr(h,n,a);return s.texture.mapping=pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function tu(h,n,a,s,l){h.viewport.set(n,a,s,l),h.scissor.set(n,a,s,l)}function ww(h,n,a){const s=new Float32Array(wr),l=new Z(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${h}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function yy(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function _y(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function ep(){return`

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
	`}function Ew(h){let n=new WeakMap,a=null;function s(f){if(f&&f.isTexture){const m=f.mapping,v=m===Hd||m===Vd,g=m===Zs||m===Qs;if(v||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let p=n.get(f);return a===null&&(a=new gy(h)),p=v?a.fromEquirectangular(f,p):a.fromCubemap(f,p),n.set(f,p),p.texture}else{if(n.has(f))return n.get(f).texture;{const p=f.image;if(v&&p&&p.height>0||g&&p&&l(p)){a===null&&(a=new gy(h));const _=v?a.fromEquirectangular(f):a.fromCubemap(f);return n.set(f,_),f.addEventListener("dispose",u),_.texture}else return null}}}return f}function l(f){let m=0;const v=6;for(let g=0;g<v;g++)f[g]!==void 0&&m++;return m===v}function u(f){const m=f.target;m.removeEventListener("dispose",u);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function Aw(h){const n={};function a(s){if(n[s]!==void 0)return n[s];let l;switch(s){case"WEBGL_depth_texture":l=h.getExtension("WEBGL_depth_texture")||h.getExtension("MOZ_WEBGL_depth_texture")||h.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=h.getExtension("EXT_texture_filter_anisotropic")||h.getExtension("MOZ_EXT_texture_filter_anisotropic")||h.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=h.getExtension("WEBGL_compressed_texture_s3tc")||h.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=h.getExtension("WEBGL_compressed_texture_pvrtc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=h.getExtension(s)}return n[s]=l,l}return{has:function(s){return a(s)!==null},init:function(s){s.isWebGL2?a("EXT_color_buffer_float"):(a("WEBGL_depth_texture"),a("OES_texture_float"),a("OES_texture_half_float"),a("OES_texture_half_float_linear"),a("OES_standard_derivatives"),a("OES_element_index_uint"),a("OES_vertex_array_object"),a("ANGLE_instanced_arrays")),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture")},get:function(s){const l=a(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Cw(h,n,a,s){const l={},u=new WeakMap;function d(p){const _=p.target;_.index!==null&&n.remove(_.index);for(const E in _.attributes)n.remove(_.attributes[E]);_.removeEventListener("dispose",d),delete l[_.id];const S=u.get(_);S&&(n.remove(S),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,a.memory.geometries--}function f(p,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,a.memory.geometries++),_}function m(p){const _=p.attributes;for(const E in _)n.update(_[E],34962);const S=p.morphAttributes;for(const E in S){const b=S[E];for(let x=0,A=b.length;x<A;x++)n.update(b[x],34962)}}function v(p){const _=[],S=p.index,E=p.attributes.position;let b=0;if(S!==null){const O=S.array;b=S.version;for(let C=0,U=O.length;C<U;C+=3){const L=O[C+0],H=O[C+1],I=O[C+2];_.push(L,H,H,I,I,L)}}else{const O=E.array;b=E.version;for(let C=0,U=O.length/3-1;C<U;C+=3){const L=C+0,H=C+1,I=C+2;_.push(L,H,H,I,I,L)}}const x=new(r_(_)?f_:h_)(_,1);x.version=b;const A=u.get(p);A&&n.remove(A),u.set(p,x)}function g(p){const _=u.get(p);if(_){const S=p.index;S!==null&&_.version<S.version&&v(p)}else v(p);return u.get(p)}return{get:f,update:m,getWireframeAttribute:g}}function Dw(h,n,a,s){const l=s.isWebGL2;let u;function d(_){u=_}let f,m;function v(_){f=_.type,m=_.bytesPerElement}function g(_,S){h.drawElements(u,S,f,_*m),a.update(S,u,1)}function p(_,S,E){if(E===0)return;let b,x;if(l)b=h,x="drawElementsInstanced";else if(b=n.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[x](u,S,f,_*m,E),a.update(S,u,E)}this.setMode=d,this.setIndex=v,this.render=g,this.renderInstances=p}function Rw(h){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,f){switch(a.calls++,d){case 4:a.triangles+=f*(u/3);break;case 1:a.lines+=f*(u/2);break;case 3:a.lines+=f*(u-1);break;case 2:a.lines+=f*u;break;case 0:a.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){a.frame++,a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:l,update:s}}function Lw(h,n){return h[0]-n[0]}function Nw(h,n){return Math.abs(n[1])-Math.abs(h[1])}function zw(h,n,a){const s={},l=new Float32Array(8),u=new WeakMap,d=new Gt,f=[];for(let v=0;v<8;v++)f[v]=[v,0];function m(v,g,p,_){const S=v.morphTargetInfluences;if(n.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,x=b!==void 0?b.length:0;let A=u.get(g);if(A===void 0||A.count!==x){let Q=function(){Y.dispose(),u.delete(g),g.removeEventListener("dispose",Q)};var E=Q;A!==void 0&&A.texture.dispose();const U=g.morphAttributes.position!==void 0,L=g.morphAttributes.normal!==void 0,H=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],w=g.morphAttributes.normal||[],P=g.morphAttributes.color||[];let X=0;U===!0&&(X=1),L===!0&&(X=2),H===!0&&(X=3);let me=g.attributes.position.count*X,le=1;me>n.maxTextureSize&&(le=Math.ceil(me/n.maxTextureSize),me=n.maxTextureSize);const $=new Float32Array(me*le*4*x),Y=new c_($,me,le,x);Y.type=Ar,Y.needsUpdate=!0;const oe=X*4;for(let se=0;se<x;se++){const ne=I[se],_e=w[se],de=P[se],Le=me*le*4*se;for(let re=0;re<ne.count;re++){const ge=re*oe;U===!0&&(d.fromBufferAttribute(ne,re),$[Le+ge+0]=d.x,$[Le+ge+1]=d.y,$[Le+ge+2]=d.z,$[Le+ge+3]=0),L===!0&&(d.fromBufferAttribute(_e,re),$[Le+ge+4]=d.x,$[Le+ge+5]=d.y,$[Le+ge+6]=d.z,$[Le+ge+7]=0),H===!0&&(d.fromBufferAttribute(de,re),$[Le+ge+8]=d.x,$[Le+ge+9]=d.y,$[Le+ge+10]=d.z,$[Le+ge+11]=de.itemSize===4?d.w:1)}}A={count:x,texture:Y,size:new at(me,le)},u.set(g,A),g.addEventListener("dispose",Q)}let O=0;for(let U=0;U<S.length;U++)O+=S[U];const C=g.morphTargetsRelative?1:1-O;_.getUniforms().setValue(h,"morphTargetBaseInfluence",C),_.getUniforms().setValue(h,"morphTargetInfluences",S),_.getUniforms().setValue(h,"morphTargetsTexture",A.texture,a),_.getUniforms().setValue(h,"morphTargetsTextureSize",A.size)}else{const b=S===void 0?0:S.length;let x=s[g.id];if(x===void 0||x.length!==b){x=[];for(let L=0;L<b;L++)x[L]=[L,0];s[g.id]=x}for(let L=0;L<b;L++){const H=x[L];H[0]=L,H[1]=S[L]}x.sort(Nw);for(let L=0;L<8;L++)L<b&&x[L][1]?(f[L][0]=x[L][0],f[L][1]=x[L][1]):(f[L][0]=Number.MAX_SAFE_INTEGER,f[L][1]=0);f.sort(Lw);const A=g.morphAttributes.position,O=g.morphAttributes.normal;let C=0;for(let L=0;L<8;L++){const H=f[L],I=H[0],w=H[1];I!==Number.MAX_SAFE_INTEGER&&w?(A&&g.getAttribute("morphTarget"+L)!==A[I]&&g.setAttribute("morphTarget"+L,A[I]),O&&g.getAttribute("morphNormal"+L)!==O[I]&&g.setAttribute("morphNormal"+L,O[I]),l[L]=w,C+=w):(A&&g.hasAttribute("morphTarget"+L)===!0&&g.deleteAttribute("morphTarget"+L),O&&g.hasAttribute("morphNormal"+L)===!0&&g.deleteAttribute("morphNormal"+L),l[L]=0)}const U=g.morphTargetsRelative?1:1-C;_.getUniforms().setValue(h,"morphTargetBaseInfluence",U),_.getUniforms().setValue(h,"morphTargetInfluences",l)}}return{update:m}}function Ow(h,n,a,s){let l=new WeakMap;function u(m){const v=s.render.frame,g=m.geometry,p=n.get(m,g);return l.get(p)!==v&&(n.update(p),l.set(p,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),a.update(m.instanceMatrix,34962),m.instanceColor!==null&&a.update(m.instanceColor,34962)),p}function d(){l=new WeakMap}function f(m){const v=m.target;v.removeEventListener("dispose",f),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:u,dispose:d}}const y_=new Fn,__=new c_,x_=new xM,b_=new m_,xy=[],by=[],Sy=new Float32Array(16),My=new Float32Array(9),Ty=new Float32Array(4);function no(h,n,a){const s=h[0];if(s<=0||s>0)return h;const l=n*a;let u=xy[l];if(u===void 0&&(u=new Float32Array(l),xy[l]=u),n!==0){s.toArray(u,0);for(let d=1,f=0;d!==n;++d)f+=a,h[d].toArray(u,f)}return u}function on(h,n){if(h.length!==n.length)return!1;for(let a=0,s=h.length;a<s;a++)if(h[a]!==n[a])return!1;return!0}function ln(h,n){for(let a=0,s=n.length;a<s;a++)h[a]=n[a]}function gu(h,n){let a=by[n];a===void 0&&(a=new Int32Array(n),by[n]=a);for(let s=0;s!==n;++s)a[s]=h.allocateTextureUnit();return a}function Uw(h,n){const a=this.cache;a[0]!==n&&(h.uniform1f(this.addr,n),a[0]=n)}function Bw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(h.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(on(a,n))return;h.uniform2fv(this.addr,n),ln(a,n)}}function Pw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(h.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(h.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(on(a,n))return;h.uniform3fv(this.addr,n),ln(a,n)}}function Gw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(h.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(on(a,n))return;h.uniform4fv(this.addr,n),ln(a,n)}}function Iw(h,n){const a=this.cache,s=n.elements;if(s===void 0){if(on(a,n))return;h.uniformMatrix2fv(this.addr,!1,n),ln(a,n)}else{if(on(a,s))return;Ty.set(s),h.uniformMatrix2fv(this.addr,!1,Ty),ln(a,s)}}function Hw(h,n){const a=this.cache,s=n.elements;if(s===void 0){if(on(a,n))return;h.uniformMatrix3fv(this.addr,!1,n),ln(a,n)}else{if(on(a,s))return;My.set(s),h.uniformMatrix3fv(this.addr,!1,My),ln(a,s)}}function Vw(h,n){const a=this.cache,s=n.elements;if(s===void 0){if(on(a,n))return;h.uniformMatrix4fv(this.addr,!1,n),ln(a,n)}else{if(on(a,s))return;Sy.set(s),h.uniformMatrix4fv(this.addr,!1,Sy),ln(a,s)}}function Fw(h,n){const a=this.cache;a[0]!==n&&(h.uniform1i(this.addr,n),a[0]=n)}function kw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(h.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(on(a,n))return;h.uniform2iv(this.addr,n),ln(a,n)}}function qw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(h.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(on(a,n))return;h.uniform3iv(this.addr,n),ln(a,n)}}function jw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(h.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(on(a,n))return;h.uniform4iv(this.addr,n),ln(a,n)}}function Ww(h,n){const a=this.cache;a[0]!==n&&(h.uniform1ui(this.addr,n),a[0]=n)}function Xw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(h.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(on(a,n))return;h.uniform2uiv(this.addr,n),ln(a,n)}}function Yw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(h.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(on(a,n))return;h.uniform3uiv(this.addr,n),ln(a,n)}}function Zw(h,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(h.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(on(a,n))return;h.uniform4uiv(this.addr,n),ln(a,n)}}function Qw(h,n,a){const s=this.cache,l=a.allocateTextureUnit();s[0]!==l&&(h.uniform1i(this.addr,l),s[0]=l),a.setTexture2D(n||y_,l)}function Kw(h,n,a){const s=this.cache,l=a.allocateTextureUnit();s[0]!==l&&(h.uniform1i(this.addr,l),s[0]=l),a.setTexture3D(n||x_,l)}function Jw(h,n,a){const s=this.cache,l=a.allocateTextureUnit();s[0]!==l&&(h.uniform1i(this.addr,l),s[0]=l),a.setTextureCube(n||b_,l)}function $w(h,n,a){const s=this.cache,l=a.allocateTextureUnit();s[0]!==l&&(h.uniform1i(this.addr,l),s[0]=l),a.setTexture2DArray(n||__,l)}function e3(h){switch(h){case 5126:return Uw;case 35664:return Bw;case 35665:return Pw;case 35666:return Gw;case 35674:return Iw;case 35675:return Hw;case 35676:return Vw;case 5124:case 35670:return Fw;case 35667:case 35671:return kw;case 35668:case 35672:return qw;case 35669:case 35673:return jw;case 5125:return Ww;case 36294:return Xw;case 36295:return Yw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return $w}}function t3(h,n){h.uniform1fv(this.addr,n)}function n3(h,n){const a=no(n,this.size,2);h.uniform2fv(this.addr,a)}function i3(h,n){const a=no(n,this.size,3);h.uniform3fv(this.addr,a)}function a3(h,n){const a=no(n,this.size,4);h.uniform4fv(this.addr,a)}function r3(h,n){const a=no(n,this.size,4);h.uniformMatrix2fv(this.addr,!1,a)}function s3(h,n){const a=no(n,this.size,9);h.uniformMatrix3fv(this.addr,!1,a)}function o3(h,n){const a=no(n,this.size,16);h.uniformMatrix4fv(this.addr,!1,a)}function l3(h,n){h.uniform1iv(this.addr,n)}function c3(h,n){h.uniform2iv(this.addr,n)}function u3(h,n){h.uniform3iv(this.addr,n)}function h3(h,n){h.uniform4iv(this.addr,n)}function f3(h,n){h.uniform1uiv(this.addr,n)}function d3(h,n){h.uniform2uiv(this.addr,n)}function p3(h,n){h.uniform3uiv(this.addr,n)}function m3(h,n){h.uniform4uiv(this.addr,n)}function g3(h,n,a){const s=this.cache,l=n.length,u=gu(a,l);on(s,u)||(h.uniform1iv(this.addr,u),ln(s,u));for(let d=0;d!==l;++d)a.setTexture2D(n[d]||y_,u[d])}function v3(h,n,a){const s=this.cache,l=n.length,u=gu(a,l);on(s,u)||(h.uniform1iv(this.addr,u),ln(s,u));for(let d=0;d!==l;++d)a.setTexture3D(n[d]||x_,u[d])}function y3(h,n,a){const s=this.cache,l=n.length,u=gu(a,l);on(s,u)||(h.uniform1iv(this.addr,u),ln(s,u));for(let d=0;d!==l;++d)a.setTextureCube(n[d]||b_,u[d])}function _3(h,n,a){const s=this.cache,l=n.length,u=gu(a,l);on(s,u)||(h.uniform1iv(this.addr,u),ln(s,u));for(let d=0;d!==l;++d)a.setTexture2DArray(n[d]||__,u[d])}function x3(h){switch(h){case 5126:return t3;case 35664:return n3;case 35665:return i3;case 35666:return a3;case 35674:return r3;case 35675:return s3;case 35676:return o3;case 5124:case 35670:return l3;case 35667:case 35671:return c3;case 35668:case 35672:return u3;case 35669:case 35673:return h3;case 5125:return f3;case 36294:return d3;case 36295:return p3;case 36296:return m3;case 35678:case 36198:case 36298:case 36306:case 35682:return g3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return y3;case 36289:case 36303:case 36311:case 36292:return _3}}class b3{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.setValue=e3(a.type)}}class S3{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.size=a.size,this.setValue=x3(a.type)}}class M3{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const f=l[u];f.setValue(n,a[f.id],s)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function wy(h,n){h.seq.push(n),h.map[n.id]=n}function T3(h,n,a){const s=h.name,l=s.length;for(Dd.lastIndex=0;;){const u=Dd.exec(s),d=Dd.lastIndex;let f=u[1];const m=u[2]==="]",v=u[3];if(m&&(f=f|0),v===void 0||v==="["&&d+2===l){wy(a,v===void 0?new b3(f,h,n):new S3(f,h,n));break}else{let p=a.map[f];p===void 0&&(p=new M3(f),wy(a,p)),a=p}}}class uu{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,35718);for(let l=0;l<s;++l){const u=n.getActiveUniform(a,l),d=n.getUniformLocation(a,u.name);T3(u,d,this)}}setValue(n,a,s,l){const u=this.map[a];u!==void 0&&u.setValue(n,s,l)}setOptional(n,a,s){const l=a[s];l!==void 0&&this.setValue(n,s,l)}static upload(n,a,s,l){for(let u=0,d=a.length;u!==d;++u){const f=a[u],m=s[f.id];m.needsUpdate!==!1&&f.setValue(n,m.value,l)}}static seqWithValue(n,a){const s=[];for(let l=0,u=n.length;l!==u;++l){const d=n[l];d.id in a&&s.push(d)}return s}}function Ey(h,n,a){const s=h.createShader(n);return h.shaderSource(s,a),h.compileShader(s),s}let w3=0;function E3(h,n){const a=h.split(`
`),s=[],l=Math.max(n-6,0),u=Math.min(n+6,a.length);for(let d=l;d<u;d++){const f=d+1;s.push(`${f===n?">":" "} ${f}: ${a[d]}`)}return s.join(`
`)}function A3(h){switch(h){case Lr:return["Linear","( value )"];case Ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",h),["Linear","( value )"]}}function Ay(h,n,a){const s=h.getShaderParameter(n,35713),l=h.getShaderInfoLog(n).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return a.toUpperCase()+`

`+l+`

`+E3(h.getShaderSource(n),d)}else return l}function C3(h,n){const a=A3(n);return"vec4 "+h+"( vec4 value ) { return LinearTo"+a[0]+a[1]+"; }"}function D3(h,n){let a;switch(n){case XS:a="Linear";break;case YS:a="Reinhard";break;case ZS:a="OptimizedCineon";break;case QS:a="ACESFilmic";break;case KS:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+h+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}function R3(h){return[h.extensionDerivatives||h.envMapCubeUVHeight||h.bumpMap||h.tangentSpaceNormalMap||h.clearcoatNormalMap||h.flatShading||h.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(h.extensionFragDepth||h.logarithmicDepthBuffer)&&h.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",h.extensionDrawBuffers&&h.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(h.extensionShaderTextureLOD||h.envMap||h.transmission)&&h.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ll).join(`
`)}function L3(h){const n=[];for(const a in h){const s=h[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function N3(h,n){const a={},s=h.getProgramParameter(n,35721);for(let l=0;l<s;l++){const u=h.getActiveAttrib(n,l),d=u.name;let f=1;u.type===35674&&(f=2),u.type===35675&&(f=3),u.type===35676&&(f=4),a[d]={type:u.type,location:h.getAttribLocation(n,d),locationSize:f}}return a}function ll(h){return h!==""}function Cy(h,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return h.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Dy(h,n){return h.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const z3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(h){return h.replace(z3,O3)}function O3(h,n){const a=it[n];if(a===void 0)throw new Error("Can not resolve #include <"+n+">");return Wd(a)}const U3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ry(h){return h.replace(U3,B3)}function B3(h,n,a,s){let l="";for(let u=parseInt(n);u<parseInt(a);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Ly(h){let n="precision "+h.precision+` float;
precision `+h.precision+" int;";return h.precision==="highp"?n+=`
#define HIGH_PRECISION`:h.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:h.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function P3(h){let n="SHADOWMAP_TYPE_BASIC";return h.shadowMapType===$y?n="SHADOWMAP_TYPE_PCF":h.shadowMapType===wS?n="SHADOWMAP_TYPE_PCF_SOFT":h.shadowMapType===ol&&(n="SHADOWMAP_TYPE_VSM"),n}function G3(h){let n="ENVMAP_TYPE_CUBE";if(h.envMap)switch(h.envMapMode){case Zs:case Qs:n="ENVMAP_TYPE_CUBE";break;case pu:n="ENVMAP_TYPE_CUBE_UV";break}return n}function I3(h){let n="ENVMAP_MODE_REFLECTION";return h.envMap&&h.envMapMode===Qs&&(n="ENVMAP_MODE_REFRACTION"),n}function H3(h){let n="ENVMAP_BLENDING_NONE";if(h.envMap)switch(h.combine){case Kd:n="ENVMAP_BLENDING_MULTIPLY";break;case jS:n="ENVMAP_BLENDING_MIX";break;case WS:n="ENVMAP_BLENDING_ADD";break}return n}function V3(h){const n=h.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function F3(h,n,a,s){const l=h.getContext(),u=a.defines;let d=a.vertexShader,f=a.fragmentShader;const m=P3(a),v=G3(a),g=I3(a),p=H3(a),_=V3(a),S=a.isWebGL2?"":R3(a),E=L3(u),b=l.createProgram();let x,A,O=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(x=[E].filter(ll).join(`
`),x.length>0&&(x+=`
`),A=[S,E].filter(ll).join(`
`),A.length>0&&(A+=`
`)):(x=[Ly(a),"#define SHADER_NAME "+a.shaderName,E,a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.supportsVertexTextures?"#define VERTEX_TEXTURES":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+g:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.normalMap&&a.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.displacementMap&&a.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",a.specularColorMap?"#define USE_SPECULARCOLORMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEENCOLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",a.vertexTangents?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUvs?"#define USE_UV":"",a.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors&&a.isWebGL2?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0&&a.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",a.morphTargetsCount>0&&a.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0&&a.isWebGL2?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&a.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),A=[S,Ly(a),"#define SHADER_NAME "+a.shaderName,E,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+g:"",a.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.normalMap&&a.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",a.specularColorMap?"#define USE_SPECULARCOLORMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEENCOLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.vertexTangents?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUvs?"#define USE_UV":"",a.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&a.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ga?"#define TONE_MAPPING":"",a.toneMapping!==ga?it.tonemapping_pars_fragment:"",a.toneMapping!==ga?D3("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",it.encodings_pars_fragment,C3("linearToOutputTexel",a.outputEncoding),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ll).join(`
`)),d=Wd(d),d=Cy(d,a),d=Dy(d,a),f=Wd(f),f=Cy(f,a),f=Dy(f,a),d=Ry(d),f=Ry(f),a.isWebGL2&&a.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,A=["#define varying in",a.glslVersion===ey?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===ey?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const C=O+x+d,U=O+A+f,L=Ey(l,35633,C),H=Ey(l,35632,U);if(l.attachShader(b,L),l.attachShader(b,H),a.index0AttributeName!==void 0?l.bindAttribLocation(b,0,a.index0AttributeName):a.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b),h.debug.checkShaderErrors){const P=l.getProgramInfoLog(b).trim(),X=l.getShaderInfoLog(L).trim(),me=l.getShaderInfoLog(H).trim();let le=!0,$=!0;if(l.getProgramParameter(b,35714)===!1){le=!1;const Y=Ay(l,L,"vertex"),oe=Ay(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,35715)+`

Program Info Log: `+P+`
`+Y+`
`+oe)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(X===""||me==="")&&($=!1);$&&(this.diagnostics={runnable:le,programLog:P,vertexShader:{log:X,prefix:x},fragmentShader:{log:me,prefix:A}})}l.deleteShader(L),l.deleteShader(H);let I;this.getUniforms=function(){return I===void 0&&(I=new uu(l,b)),I};let w;return this.getAttributes=function(){return w===void 0&&(w=N3(l,b)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.name=a.shaderName,this.id=w3++,this.cacheKey=n,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=H,this}let k3=0;class q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,l=this._getShaderStage(a),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(n);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new j3(n),a.set(n,s)),s}}class j3{constructor(n){this.id=k3++,this.code=n,this.usedTimes=0}}function W3(h,n,a,s,l,u,d){const f=new u_,m=new q3,v=[],g=l.isWebGL2,p=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w,P,X,me,le){const $=me.fog,Y=le.geometry,oe=w.isMeshStandardMaterial?me.environment:null,Q=(w.isMeshStandardMaterial?a:n).get(w.envMap||oe),se=Q&&Q.mapping===pu?Q.image.height:null,ne=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=_e!==void 0?_e.length:0;let Le=0;Y.morphAttributes.position!==void 0&&(Le=1),Y.morphAttributes.normal!==void 0&&(Le=2),Y.morphAttributes.color!==void 0&&(Le=3);let re,ge,R,W;if(ne){const Te=Wi[ne];re=Te.vertexShader,ge=Te.fragmentShader}else re=w.vertexShader,ge=w.fragmentShader,m.update(w),R=m.getVertexShaderID(w),W=m.getFragmentShaderID(w);const F=h.getRenderTarget(),xe=w.alphaTest>0,Me=w.clearcoat>0,Ee=w.iridescence>0;return{isWebGL2:g,shaderID:ne,shaderName:w.type,vertexShader:re,fragmentShader:ge,defines:w.defines,customVertexShaderID:R,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:_,outputEncoding:F===null?h.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Lr,map:!!w.map,matcap:!!w.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:se,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===gM,tangentSpaceNormalMap:w.normalMapType===a_,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Ut,clearcoat:Me,clearcoatMap:Me&&!!w.clearcoatMap,clearcoatRoughnessMap:Me&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!w.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!w.iridescenceMap,iridescenceThicknessMap:Ee&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Ws,alphaMap:!!w.alphaMap,alphaTest:xe,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!Y.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!$,useFog:w.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:p,skinning:le.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Le,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:h.shadowMap.enabled&&X.length>0,shadowMapType:h.shadowMap.type,toneMapping:w.toneMapped?h.toneMapping:ga,physicallyCorrectLights:h.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===Vn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function x(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)P.push(X),P.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(A(P,w),O(P,w),P.push(h.outputEncoding)),P.push(w.customProgramCacheKey),P.join()}function A(w,P){w.push(P.precision),w.push(P.outputEncoding),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.combine),w.push(P.vertexUvs),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function O(w,P){f.disableAll(),P.isWebGL2&&f.enable(0),P.supportsVertexTextures&&f.enable(1),P.instancing&&f.enable(2),P.instancingColor&&f.enable(3),P.map&&f.enable(4),P.matcap&&f.enable(5),P.envMap&&f.enable(6),P.lightMap&&f.enable(7),P.aoMap&&f.enable(8),P.emissiveMap&&f.enable(9),P.bumpMap&&f.enable(10),P.normalMap&&f.enable(11),P.objectSpaceNormalMap&&f.enable(12),P.tangentSpaceNormalMap&&f.enable(13),P.clearcoat&&f.enable(14),P.clearcoatMap&&f.enable(15),P.clearcoatRoughnessMap&&f.enable(16),P.clearcoatNormalMap&&f.enable(17),P.iridescence&&f.enable(18),P.iridescenceMap&&f.enable(19),P.iridescenceThicknessMap&&f.enable(20),P.displacementMap&&f.enable(21),P.specularMap&&f.enable(22),P.roughnessMap&&f.enable(23),P.metalnessMap&&f.enable(24),P.gradientMap&&f.enable(25),P.alphaMap&&f.enable(26),P.alphaTest&&f.enable(27),P.vertexColors&&f.enable(28),P.vertexAlphas&&f.enable(29),P.vertexUvs&&f.enable(30),P.vertexTangents&&f.enable(31),P.uvsVertexOnly&&f.enable(32),w.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.skinning&&f.enable(4),P.morphTargets&&f.enable(5),P.morphNormals&&f.enable(6),P.morphColors&&f.enable(7),P.premultipliedAlpha&&f.enable(8),P.shadowMapEnabled&&f.enable(9),P.physicallyCorrectLights&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.specularIntensityMap&&f.enable(15),P.specularColorMap&&f.enable(16),P.transmission&&f.enable(17),P.transmissionMap&&f.enable(18),P.thicknessMap&&f.enable(19),P.sheen&&f.enable(20),P.sheenColorMap&&f.enable(21),P.sheenRoughnessMap&&f.enable(22),P.decodeVideoTexture&&f.enable(23),P.opaque&&f.enable(24),w.push(f.mask)}function C(w){const P=E[w.type];let X;if(P){const me=Wi[P];X=NM.clone(me.uniforms)}else X=w.uniforms;return X}function U(w,P){let X;for(let me=0,le=v.length;me<le;me++){const $=v[me];if($.cacheKey===P){X=$,++X.usedTimes;break}}return X===void 0&&(X=new F3(h,P,w,u),v.push(X)),X}function L(w){if(--w.usedTimes===0){const P=v.indexOf(w);v[P]=v[v.length-1],v.pop(),w.destroy()}}function H(w){m.remove(w)}function I(){m.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:C,acquireProgram:U,releaseProgram:L,releaseShaderCache:H,programs:v,dispose:I}}function X3(){let h=new WeakMap;function n(u){let d=h.get(u);return d===void 0&&(d={},h.set(u,d)),d}function a(u){h.delete(u)}function s(u,d,f){h.get(u)[d]=f}function l(){h=new WeakMap}return{get:n,remove:a,update:s,dispose:l}}function Y3(h,n){return h.groupOrder!==n.groupOrder?h.groupOrder-n.groupOrder:h.renderOrder!==n.renderOrder?h.renderOrder-n.renderOrder:h.material.id!==n.material.id?h.material.id-n.material.id:h.z!==n.z?h.z-n.z:h.id-n.id}function Ny(h,n){return h.groupOrder!==n.groupOrder?h.groupOrder-n.groupOrder:h.renderOrder!==n.renderOrder?h.renderOrder-n.renderOrder:h.z!==n.z?n.z-h.z:h.id-n.id}function zy(){const h=[];let n=0;const a=[],s=[],l=[];function u(){n=0,a.length=0,s.length=0,l.length=0}function d(p,_,S,E,b,x){let A=h[n];return A===void 0?(A={id:p.id,object:p,geometry:_,material:S,groupOrder:E,renderOrder:p.renderOrder,z:b,group:x},h[n]=A):(A.id=p.id,A.object=p,A.geometry=_,A.material=S,A.groupOrder=E,A.renderOrder=p.renderOrder,A.z=b,A.group=x),n++,A}function f(p,_,S,E,b,x){const A=d(p,_,S,E,b,x);S.transmission>0?s.push(A):S.transparent===!0?l.push(A):a.push(A)}function m(p,_,S,E,b,x){const A=d(p,_,S,E,b,x);S.transmission>0?s.unshift(A):S.transparent===!0?l.unshift(A):a.unshift(A)}function v(p,_){a.length>1&&a.sort(p||Y3),s.length>1&&s.sort(_||Ny),l.length>1&&l.sort(_||Ny)}function g(){for(let p=n,_=h.length;p<_;p++){const S=h[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:a,transmissive:s,transparent:l,init:u,push:f,unshift:m,finish:g,sort:v}}function Z3(){let h=new WeakMap;function n(s,l){const u=h.get(s);let d;return u===void 0?(d=new zy,h.set(s,[d])):l>=u.length?(d=new zy,u.push(d)):d=u[l],d}function a(){h=new WeakMap}return{get:n,dispose:a}}function Q3(){const h={};return{get:function(n){if(h[n.id]!==void 0)return h[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new Z,color:new vt};break;case"SpotLight":a={position:new Z,direction:new Z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new Z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new Z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":a={color:new vt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return h[n.id]=a,a}}}function K3(){const h={};return{get:function(n){if(h[n.id]!==void 0)return h[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":a={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":a={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return h[n.id]=a,a}}}let J3=0;function $3(h,n){return(n.castShadow?2:0)-(h.castShadow?2:0)+(n.map?1:0)-(h.map?1:0)}function eE(h,n){const a=new Q3,s=K3(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)l.probe.push(new Z);const u=new Z,d=new Ft,f=new Ft;function m(g,p){let _=0,S=0,E=0;for(let me=0;me<9;me++)l.probe[me].set(0,0,0);let b=0,x=0,A=0,O=0,C=0,U=0,L=0,H=0,I=0,w=0;g.sort($3);const P=p!==!0?Math.PI:1;for(let me=0,le=g.length;me<le;me++){const $=g[me],Y=$.color,oe=$.intensity,Q=$.distance,se=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)_+=Y.r*oe*P,S+=Y.g*oe*P,E+=Y.b*oe*P;else if($.isLightProbe)for(let ne=0;ne<9;ne++)l.probe[ne].addScaledVector($.sh.coefficients[ne],oe);else if($.isDirectionalLight){const ne=a.get($);if(ne.color.copy($.color).multiplyScalar($.intensity*P),$.castShadow){const _e=$.shadow,de=s.get($);de.shadowBias=_e.bias,de.shadowNormalBias=_e.normalBias,de.shadowRadius=_e.radius,de.shadowMapSize=_e.mapSize,l.directionalShadow[b]=de,l.directionalShadowMap[b]=se,l.directionalShadowMatrix[b]=$.shadow.matrix,U++}l.directional[b]=ne,b++}else if($.isSpotLight){const ne=a.get($);ne.position.setFromMatrixPosition($.matrixWorld),ne.color.copy(Y).multiplyScalar(oe*P),ne.distance=Q,ne.coneCos=Math.cos($.angle),ne.penumbraCos=Math.cos($.angle*(1-$.penumbra)),ne.decay=$.decay,l.spot[A]=ne;const _e=$.shadow;if($.map&&(l.spotLightMap[I]=$.map,I++,_e.updateMatrices($),$.castShadow&&w++),l.spotLightMatrix[A]=_e.matrix,$.castShadow){const de=s.get($);de.shadowBias=_e.bias,de.shadowNormalBias=_e.normalBias,de.shadowRadius=_e.radius,de.shadowMapSize=_e.mapSize,l.spotShadow[A]=de,l.spotShadowMap[A]=se,H++}A++}else if($.isRectAreaLight){const ne=a.get($);ne.color.copy(Y).multiplyScalar(oe),ne.halfWidth.set($.width*.5,0,0),ne.halfHeight.set(0,$.height*.5,0),l.rectArea[O]=ne,O++}else if($.isPointLight){const ne=a.get($);if(ne.color.copy($.color).multiplyScalar($.intensity*P),ne.distance=$.distance,ne.decay=$.decay,$.castShadow){const _e=$.shadow,de=s.get($);de.shadowBias=_e.bias,de.shadowNormalBias=_e.normalBias,de.shadowRadius=_e.radius,de.shadowMapSize=_e.mapSize,de.shadowCameraNear=_e.camera.near,de.shadowCameraFar=_e.camera.far,l.pointShadow[x]=de,l.pointShadowMap[x]=se,l.pointShadowMatrix[x]=$.shadow.matrix,L++}l.point[x]=ne,x++}else if($.isHemisphereLight){const ne=a.get($);ne.skyColor.copy($.color).multiplyScalar(oe*P),ne.groundColor.copy($.groundColor).multiplyScalar(oe*P),l.hemi[C]=ne,C++}}O>0&&(n.isWebGL2||h.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=De.LTC_FLOAT_1,l.rectAreaLTC2=De.LTC_FLOAT_2):h.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=De.LTC_HALF_1,l.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=_,l.ambient[1]=S,l.ambient[2]=E;const X=l.hash;(X.directionalLength!==b||X.pointLength!==x||X.spotLength!==A||X.rectAreaLength!==O||X.hemiLength!==C||X.numDirectionalShadows!==U||X.numPointShadows!==L||X.numSpotShadows!==H||X.numSpotMaps!==I)&&(l.directional.length=b,l.spot.length=A,l.rectArea.length=O,l.point.length=x,l.hemi.length=C,l.directionalShadow.length=U,l.directionalShadowMap.length=U,l.pointShadow.length=L,l.pointShadowMap.length=L,l.spotShadow.length=H,l.spotShadowMap.length=H,l.directionalShadowMatrix.length=U,l.pointShadowMatrix.length=L,l.spotLightMatrix.length=H+I-w,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=w,X.directionalLength=b,X.pointLength=x,X.spotLength=A,X.rectAreaLength=O,X.hemiLength=C,X.numDirectionalShadows=U,X.numPointShadows=L,X.numSpotShadows=H,X.numSpotMaps=I,l.version=J3++)}function v(g,p){let _=0,S=0,E=0,b=0,x=0;const A=p.matrixWorldInverse;for(let O=0,C=g.length;O<C;O++){const U=g[O];if(U.isDirectionalLight){const L=l.directional[_];L.direction.setFromMatrixPosition(U.matrixWorld),u.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(u),L.direction.transformDirection(A),_++}else if(U.isSpotLight){const L=l.spot[E];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(A),L.direction.setFromMatrixPosition(U.matrixWorld),u.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(u),L.direction.transformDirection(A),E++}else if(U.isRectAreaLight){const L=l.rectArea[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(A),f.identity(),d.copy(U.matrixWorld),d.premultiply(A),f.extractRotation(d),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const L=l.point[S];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(A),S++}else if(U.isHemisphereLight){const L=l.hemi[x];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(A),x++}}}return{setup:m,setupView:v,state:l}}function Oy(h,n){const a=new eE(h,n),s=[],l=[];function u(){s.length=0,l.length=0}function d(p){s.push(p)}function f(p){l.push(p)}function m(p){a.setup(s,p)}function v(p){a.setupView(s,p)}return{init:u,state:{lightsArray:s,shadowsArray:l,lights:a},setupLights:m,setupLightsView:v,pushLight:d,pushShadow:f}}function tE(h,n){let a=new WeakMap;function s(u,d=0){const f=a.get(u);let m;return f===void 0?(m=new Oy(h,n),a.set(u,[m])):d>=f.length?(m=new Oy(h,n),f.push(m)):m=f[d],m}function l(){a=new WeakMap}return{get:s,dispose:l}}class nE extends Ja{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class iE extends Ja{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.referencePosition.copy(n.referencePosition),this.nearDistance=n.nearDistance,this.farDistance=n.farDistance,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}const aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sE(h,n,a){let s=new $d;const l=new at,u=new at,d=new Gt,f=new nE({depthPacking:mM}),m=new iE,v={},g=a.maxTextureSize,p={[Ka]:Vn,[Vn]:Ka,[Li]:Li},_=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:aE,fragmentShader:rE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new ri;E.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ai(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$y,this.render=function(U,L,H){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const I=h.getRenderTarget(),w=h.getActiveCubeFace(),P=h.getActiveMipmapLevel(),X=h.state;X.setBlending(Za),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let me=0,le=U.length;me<le;me++){const $=U[me],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const oe=Y.getFrameExtents();if(l.multiply(oe),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/oe.x),l.x=u.x*oe.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/oe.y),l.y=u.y*oe.y,Y.mapSize.y=u.y)),Y.map===null){const se=this.type!==ol?{minFilter:Un,magFilter:Un}:{};Y.map=new Nr(l.x,l.y,se),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}h.setRenderTarget(Y.map),h.clear();const Q=Y.getViewportCount();for(let se=0;se<Q;se++){const ne=Y.getViewport(se);d.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),X.viewport(d),Y.updateMatrices($,se),s=Y.getFrustum(),C(L,H,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===ol&&A(Y,H),Y.needsUpdate=!1}x.needsUpdate=!1,h.setRenderTarget(I,w,P)};function A(U,L){const H=n.update(b);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Nr(l.x,l.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,h.setRenderTarget(U.mapPass),h.clear(),h.renderBufferDirect(L,null,H,_,b,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,h.setRenderTarget(U.map),h.clear(),h.renderBufferDirect(L,null,H,S,b,null)}function O(U,L,H,I,w,P){let X=null;const me=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(me!==void 0)X=me;else if(X=H.isPointLight===!0?m:f,h.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const le=X.uuid,$=L.uuid;let Y=v[le];Y===void 0&&(Y={},v[le]=Y);let oe=Y[$];oe===void 0&&(oe=X.clone(),Y[$]=oe),X=oe}return X.visible=L.visible,X.wireframe=L.wireframe,P===ol?X.side=L.shadowSide!==null?L.shadowSide:L.side:X.side=L.shadowSide!==null?L.shadowSide:p[L.side],X.alphaMap=L.alphaMap,X.alphaTest=L.alphaTest,X.map=L.map,X.clipShadows=L.clipShadows,X.clippingPlanes=L.clippingPlanes,X.clipIntersection=L.clipIntersection,X.displacementMap=L.displacementMap,X.displacementScale=L.displacementScale,X.displacementBias=L.displacementBias,X.wireframeLinewidth=L.wireframeLinewidth,X.linewidth=L.linewidth,H.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(H.matrixWorld),X.nearDistance=I,X.farDistance=w),X}function C(U,L,H,I,w){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===ol)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);const me=n.update(U),le=U.material;if(Array.isArray(le)){const $=me.groups;for(let Y=0,oe=$.length;Y<oe;Y++){const Q=$[Y],se=le[Q.materialIndex];if(se&&se.visible){const ne=O(U,se,I,H.near,H.far,w);h.renderBufferDirect(H,null,me,ne,U,Q)}}}else if(le.visible){const $=O(U,le,I,H.near,H.far,w);h.renderBufferDirect(H,null,me,$,U,null)}}const X=U.children;for(let me=0,le=X.length;me<le;me++)C(X[me],L,H,I,w)}}function oE(h,n,a){const s=a.isWebGL2;function l(){let V=!1;const he=new Gt;let Se=null;const ze=new Gt(0,0,0,0);return{setMask:function(Pe){Se!==Pe&&!V&&(h.colorMask(Pe,Pe,Pe,Pe),Se=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,mt,Xt,cn,Yi){Yi===!0&&(Pe*=cn,mt*=cn,Xt*=cn),he.set(Pe,mt,Xt,cn),ze.equals(he)===!1&&(h.clearColor(Pe,mt,Xt,cn),ze.copy(he))},reset:function(){V=!1,Se=null,ze.set(-1,0,0,0)}}}function u(){let V=!1,he=null,Se=null,ze=null;return{setTest:function(Pe){Pe?xe(2929):Me(2929)},setMask:function(Pe){he!==Pe&&!V&&(h.depthMask(Pe),he=Pe)},setFunc:function(Pe){if(Se!==Pe){switch(Pe){case GS:h.depthFunc(512);break;case IS:h.depthFunc(519);break;case HS:h.depthFunc(513);break;case Id:h.depthFunc(515);break;case VS:h.depthFunc(514);break;case FS:h.depthFunc(518);break;case kS:h.depthFunc(516);break;case qS:h.depthFunc(517);break;default:h.depthFunc(515)}Se=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){ze!==Pe&&(h.clearDepth(Pe),ze=Pe)},reset:function(){V=!1,he=null,Se=null,ze=null}}}function d(){let V=!1,he=null,Se=null,ze=null,Pe=null,mt=null,Xt=null,cn=null,Yi=null;return{setTest:function(bt){V||(bt?xe(2960):Me(2960))},setMask:function(bt){he!==bt&&!V&&(h.stencilMask(bt),he=bt)},setFunc:function(bt,It,Yt){(Se!==bt||ze!==It||Pe!==Yt)&&(h.stencilFunc(bt,It,Yt),Se=bt,ze=It,Pe=Yt)},setOp:function(bt,It,Yt){(mt!==bt||Xt!==It||cn!==Yt)&&(h.stencilOp(bt,It,Yt),mt=bt,Xt=It,cn=Yt)},setLocked:function(bt){V=bt},setClear:function(bt){Yi!==bt&&(h.clearStencil(bt),Yi=bt)},reset:function(){V=!1,he=null,Se=null,ze=null,Pe=null,mt=null,Xt=null,cn=null,Yi=null}}}const f=new l,m=new u,v=new d,g=new WeakMap,p=new WeakMap;let _={},S={},E=new WeakMap,b=[],x=null,A=!1,O=null,C=null,U=null,L=null,H=null,I=null,w=null,P=!1,X=null,me=null,le=null,$=null,Y=null;const oe=h.getParameter(35661);let Q=!1,se=0;const ne=h.getParameter(7938);ne.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Q=se>=1):ne.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Q=se>=2);let _e=null,de={};const Le=h.getParameter(3088),re=h.getParameter(2978),ge=new Gt().fromArray(Le),R=new Gt().fromArray(re);function W(V,he,Se){const ze=new Uint8Array(4),Pe=h.createTexture();h.bindTexture(V,Pe),h.texParameteri(V,10241,9728),h.texParameteri(V,10240,9728);for(let mt=0;mt<Se;mt++)h.texImage2D(he+mt,0,6408,1,1,0,6408,5121,ze);return Pe}const F={};F[3553]=W(3553,3553,1),F[34067]=W(34067,34069,6),f.setClear(0,0,0,1),m.setClear(1),v.setClear(0),xe(2929),m.setFunc(Id),xt(!1),pt(w0),xe(2884),kt(Za);function xe(V){_[V]!==!0&&(h.enable(V),_[V]=!0)}function Me(V){_[V]!==!1&&(h.disable(V),_[V]=!1)}function Ee(V,he){return S[V]!==he?(h.bindFramebuffer(V,he),S[V]=he,s&&(V===36009&&(S[36160]=he),V===36160&&(S[36009]=he)),!0):!1}function be(V,he){let Se=b,ze=!1;if(V)if(Se=E.get(he),Se===void 0&&(Se=[],E.set(he,Se)),V.isWebGLMultipleRenderTargets){const Pe=V.texture;if(Se.length!==Pe.length||Se[0]!==36064){for(let mt=0,Xt=Pe.length;mt<Xt;mt++)Se[mt]=36064+mt;Se.length=Pe.length,ze=!0}}else Se[0]!==36064&&(Se[0]=36064,ze=!0);else Se[0]!==1029&&(Se[0]=1029,ze=!0);ze&&(a.isWebGL2?h.drawBuffers(Se):n.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Te(V){return x!==V?(h.useProgram(V),x=V,!0):!1}const we={[qs]:32774,[AS]:32778,[CS]:32779};if(s)we[C0]=32775,we[D0]=32776;else{const V=n.get("EXT_blend_minmax");V!==null&&(we[C0]=V.MIN_EXT,we[D0]=V.MAX_EXT)}const Ge={[DS]:0,[RS]:1,[LS]:768,[e_]:770,[PS]:776,[US]:774,[zS]:772,[NS]:769,[t_]:771,[BS]:775,[OS]:773};function kt(V,he,Se,ze,Pe,mt,Xt,cn){if(V===Za){A===!0&&(Me(3042),A=!1);return}if(A===!1&&(xe(3042),A=!0),V!==ES){if(V!==O||cn!==P){if((C!==qs||H!==qs)&&(h.blendEquation(32774),C=qs,H=qs),cn)switch(V){case Ws:h.blendFuncSeparate(1,771,1,771);break;case Ys:h.blendFunc(1,1);break;case E0:h.blendFuncSeparate(0,769,0,1);break;case A0:h.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:h.blendFuncSeparate(770,771,1,771);break;case Ys:h.blendFunc(770,1);break;case E0:h.blendFuncSeparate(0,769,0,1);break;case A0:h.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,L=null,I=null,w=null,O=V,P=cn}return}Pe=Pe||he,mt=mt||Se,Xt=Xt||ze,(he!==C||Pe!==H)&&(h.blendEquationSeparate(we[he],we[Pe]),C=he,H=Pe),(Se!==U||ze!==L||mt!==I||Xt!==w)&&(h.blendFuncSeparate(Ge[Se],Ge[ze],Ge[mt],Ge[Xt]),U=Se,L=ze,I=mt,w=Xt),O=V,P=!1}function Wt(V,he){V.side===Li?Me(2884):xe(2884);let Se=V.side===Vn;he&&(Se=!Se),xt(Se),V.blending===Ws&&V.transparent===!1?kt(Za):kt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),m.setFunc(V.depthFunc),m.setTest(V.depthTest),m.setMask(V.depthWrite),f.setMask(V.colorWrite);const ze=V.stencilWrite;v.setTest(ze),ze&&(v.setMask(V.stencilWriteMask),v.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),v.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Qe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(32926):Me(32926)}function xt(V){X!==V&&(V?h.frontFace(2304):h.frontFace(2305),X=V)}function pt(V){V!==MS?(xe(2884),V!==me&&(V===w0?h.cullFace(1029):V===TS?h.cullFace(1028):h.cullFace(1032))):Me(2884),me=V}function We(V){V!==le&&(Q&&h.lineWidth(V),le=V)}function Qe(V,he,Se){V?(xe(32823),($!==he||Y!==Se)&&(h.polygonOffset(he,Se),$=he,Y=Se)):Me(32823)}function mn(V){V?xe(3089):Me(3089)}function Et(V){V===void 0&&(V=33984+oe-1),_e!==V&&(h.activeTexture(V),_e=V)}function N(V,he,Se){Se===void 0&&(_e===null?Se=33984+oe-1:Se=_e);let ze=de[Se];ze===void 0&&(ze={type:void 0,texture:void 0},de[Se]=ze),(ze.type!==V||ze.texture!==he)&&(_e!==Se&&(h.activeTexture(Se),_e=Se),h.bindTexture(V,he||F[V]),ze.type=V,ze.texture=he)}function M(){const V=de[_e];V!==void 0&&V.type!==void 0&&(h.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ee(){try{h.compressedTexImage2D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{h.compressedTexImage3D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{h.texSubImage2D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{h.texSubImage3D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{h.compressedTexSubImage2D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{h.compressedTexSubImage3D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{h.texStorage2D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{h.texStorage3D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{h.texImage2D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{h.texImage3D.apply(h,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(V){ge.equals(V)===!1&&(h.scissor(V.x,V.y,V.z,V.w),ge.copy(V))}function Ve(V){R.equals(V)===!1&&(h.viewport(V.x,V.y,V.z,V.w),R.copy(V))}function lt(V,he){let Se=p.get(he);Se===void 0&&(Se=new WeakMap,p.set(he,Se));let ze=Se.get(V);ze===void 0&&(ze=h.getUniformBlockIndex(he,V.name),Se.set(V,ze))}function Rt(V,he){const ze=p.get(he).get(V);g.get(he)!==ze&&(h.uniformBlockBinding(he,ze,V.__bindingPointIndex),g.set(he,ze))}function Qt(){h.disable(3042),h.disable(2884),h.disable(2929),h.disable(32823),h.disable(3089),h.disable(2960),h.disable(32926),h.blendEquation(32774),h.blendFunc(1,0),h.blendFuncSeparate(1,0,1,0),h.colorMask(!0,!0,!0,!0),h.clearColor(0,0,0,0),h.depthMask(!0),h.depthFunc(513),h.clearDepth(1),h.stencilMask(4294967295),h.stencilFunc(519,0,4294967295),h.stencilOp(7680,7680,7680),h.clearStencil(0),h.cullFace(1029),h.frontFace(2305),h.polygonOffset(0,0),h.activeTexture(33984),h.bindFramebuffer(36160,null),s===!0&&(h.bindFramebuffer(36009,null),h.bindFramebuffer(36008,null)),h.useProgram(null),h.lineWidth(1),h.scissor(0,0,h.canvas.width,h.canvas.height),h.viewport(0,0,h.canvas.width,h.canvas.height),_={},_e=null,de={},S={},E=new WeakMap,b=[],x=null,A=!1,O=null,C=null,U=null,L=null,H=null,I=null,w=null,P=!1,X=null,me=null,le=null,$=null,Y=null,ge.set(0,0,h.canvas.width,h.canvas.height),R.set(0,0,h.canvas.width,h.canvas.height),f.reset(),m.reset(),v.reset()}return{buffers:{color:f,depth:m,stencil:v},enable:xe,disable:Me,bindFramebuffer:Ee,drawBuffers:be,useProgram:Te,setBlending:kt,setMaterial:Wt,setFlipSided:xt,setCullFace:pt,setLineWidth:We,setPolygonOffset:Qe,setScissorTest:mn,activeTexture:Et,bindTexture:N,unbindTexture:M,compressedTexImage2D:ee,compressedTexImage3D:ve,texImage2D:je,texImage3D:Be,updateUBOMapping:lt,uniformBlockBinding:Rt,texStorage2D:ye,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:Ne,compressedTexSubImage2D:Xe,compressedTexSubImage3D:Re,scissor:ke,viewport:Ve,reset:Qt}}function lE(h,n,a,s,l,u,d){const f=l.isWebGL2,m=l.maxTextures,v=l.maxCubemapSize,g=l.maxTextureSize,p=l.maxSamples,_=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let b;const x=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(N,M){return A?new OffscreenCanvas(N,M):hu("canvas")}function C(N,M,ee,ve){let Ae=1;if((N.width>ve||N.height>ve)&&(Ae=ve/Math.max(N.width,N.height)),Ae<1||M===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Ne=M?jd:Math.floor,Xe=Ne(Ae*N.width),Re=Ne(Ae*N.height);b===void 0&&(b=O(Xe,Re));const ye=ee?O(Xe,Re):b;return ye.width=Xe,ye.height=Re,ye.getContext("2d").drawImage(N,0,0,Xe,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Xe+"x"+Re+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function U(N){return ny(N.width)&&ny(N.height)}function L(N){return f?!1:N.wrapS!==Di||N.wrapT!==Di||N.minFilter!==Un&&N.minFilter!==ei}function H(N,M){return N.generateMipmaps&&M&&N.minFilter!==Un&&N.minFilter!==ei}function I(N){h.generateMipmap(N)}function w(N,M,ee,ve,Ae=!1){if(f===!1)return M;if(N!==null){if(h[N]!==void 0)return h[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ne=M;return M===6403&&(ee===5126&&(Ne=33326),ee===5131&&(Ne=33325),ee===5121&&(Ne=33321)),M===33319&&(ee===5126&&(Ne=33328),ee===5131&&(Ne=33327),ee===5121&&(Ne=33323)),M===6408&&(ee===5126&&(Ne=34836),ee===5131&&(Ne=34842),ee===5121&&(Ne=ve===Ut&&Ae===!1?35907:32856),ee===32819&&(Ne=32854),ee===32820&&(Ne=32855)),(Ne===33325||Ne===33326||Ne===33327||Ne===33328||Ne===34842||Ne===34836)&&n.get("EXT_color_buffer_float"),Ne}function P(N,M,ee){return H(N,ee)===!0||N.isFramebufferTexture&&N.minFilter!==Un&&N.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function X(N){return N===Un||N===R0||N===Jf?9728:9729}function me(N){const M=N.target;M.removeEventListener("dispose",me),$(M),M.isVideoTexture&&E.delete(M)}function le(N){const M=N.target;M.removeEventListener("dispose",le),oe(M)}function $(N){const M=s.get(N);if(M.__webglInit===void 0)return;const ee=N.source,ve=x.get(ee);if(ve){const Ae=ve[M.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&Y(N),Object.keys(ve).length===0&&x.delete(ee)}s.remove(N)}function Y(N){const M=s.get(N);h.deleteTexture(M.__webglTexture);const ee=N.source,ve=x.get(ee);delete ve[M.__cacheKey],d.memory.textures--}function oe(N){const M=N.texture,ee=s.get(N),ve=s.get(M);if(ve.__webglTexture!==void 0&&(h.deleteTexture(ve.__webglTexture),d.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++)h.deleteFramebuffer(ee.__webglFramebuffer[Ae]),ee.__webglDepthbuffer&&h.deleteRenderbuffer(ee.__webglDepthbuffer[Ae]);else{if(h.deleteFramebuffer(ee.__webglFramebuffer),ee.__webglDepthbuffer&&h.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&h.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let Ae=0;Ae<ee.__webglColorRenderbuffer.length;Ae++)ee.__webglColorRenderbuffer[Ae]&&h.deleteRenderbuffer(ee.__webglColorRenderbuffer[Ae]);ee.__webglDepthRenderbuffer&&h.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Ae=0,Ne=M.length;Ae<Ne;Ae++){const Xe=s.get(M[Ae]);Xe.__webglTexture&&(h.deleteTexture(Xe.__webglTexture),d.memory.textures--),s.remove(M[Ae])}s.remove(M),s.remove(N)}let Q=0;function se(){Q=0}function ne(){const N=Q;return N>=m&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+m),Q+=1,N}function _e(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.encoding),M.join()}function de(N,M){const ee=s.get(N);if(N.isVideoTexture&&mn(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(ee,N,M);return}}a.bindTexture(3553,ee.__webglTexture,33984+M)}function Le(N,M){const ee=s.get(N);if(N.version>0&&ee.__version!==N.version){Me(ee,N,M);return}a.bindTexture(35866,ee.__webglTexture,33984+M)}function re(N,M){const ee=s.get(N);if(N.version>0&&ee.__version!==N.version){Me(ee,N,M);return}a.bindTexture(32879,ee.__webglTexture,33984+M)}function ge(N,M){const ee=s.get(N);if(N.version>0&&ee.__version!==N.version){Ee(ee,N,M);return}a.bindTexture(34067,ee.__webglTexture,33984+M)}const R={[ul]:10497,[Di]:33071,[Fd]:33648},W={[Un]:9728,[R0]:9984,[Jf]:9986,[ei]:9729,[JS]:9985,[hl]:9987};function F(N,M,ee){if(ee?(h.texParameteri(N,10242,R[M.wrapS]),h.texParameteri(N,10243,R[M.wrapT]),(N===32879||N===35866)&&h.texParameteri(N,32882,R[M.wrapR]),h.texParameteri(N,10240,W[M.magFilter]),h.texParameteri(N,10241,W[M.minFilter])):(h.texParameteri(N,10242,33071),h.texParameteri(N,10243,33071),(N===32879||N===35866)&&h.texParameteri(N,32882,33071),(M.wrapS!==Di||M.wrapT!==Di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),h.texParameteri(N,10240,X(M.magFilter)),h.texParameteri(N,10241,X(M.minFilter)),M.minFilter!==Un&&M.minFilter!==ei&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),n.has("EXT_texture_filter_anisotropic")===!0){const ve=n.get("EXT_texture_filter_anisotropic");if(M.magFilter===Un||M.minFilter!==Jf&&M.minFilter!==hl||M.type===Ar&&n.has("OES_texture_float_linear")===!1||f===!1&&M.type===fl&&n.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||s.get(M).__currentAnisotropy)&&(h.texParameterf(N,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy)}}function xe(N,M){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",me));const ve=M.source;let Ae=x.get(ve);Ae===void 0&&(Ae={},x.set(ve,Ae));const Ne=_e(M);if(Ne!==N.__cacheKey){Ae[Ne]===void 0&&(Ae[Ne]={texture:h.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),Ae[Ne].usedTimes++;const Xe=Ae[N.__cacheKey];Xe!==void 0&&(Ae[N.__cacheKey].usedTimes--,Xe.usedTimes===0&&Y(M)),N.__cacheKey=Ne,N.__webglTexture=Ae[Ne].texture}return ee}function Me(N,M,ee){let ve=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=35866),M.isData3DTexture&&(ve=32879);const Ae=xe(N,M),Ne=M.source;a.bindTexture(ve,N.__webglTexture,33984+ee);const Xe=s.get(Ne);if(Ne.version!==Xe.__version||Ae===!0){a.activeTexture(33984+ee),h.pixelStorei(37440,M.flipY),h.pixelStorei(37441,M.premultiplyAlpha),h.pixelStorei(3317,M.unpackAlignment),h.pixelStorei(37443,0);const Re=L(M)&&U(M.image)===!1;let ye=C(M.image,Re,!1,g);ye=Et(M,ye);const Fe=U(ye)||f,je=u.convert(M.format,M.encoding);let Be=u.convert(M.type),ke=w(M.internalFormat,je,Be,M.encoding,M.isVideoTexture);F(ve,M,Fe);let Ve;const lt=M.mipmaps,Rt=f&&M.isVideoTexture!==!0,Qt=Xe.__version===void 0||Ae===!0,V=P(M,ye,Fe);if(M.isDepthTexture)ke=6402,f?M.type===Ar?ke=36012:M.type===Er?ke=33190:M.type===Xs?ke=35056:ke=33189:M.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Cr&&ke===6402&&M.type!==i_&&M.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Er,Be=u.convert(M.type)),M.format===Ks&&ke===6402&&(ke=34041,M.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Xs,Be=u.convert(M.type))),Qt&&(Rt?a.texStorage2D(3553,1,ke,ye.width,ye.height):a.texImage2D(3553,0,ke,ye.width,ye.height,0,je,Be,null));else if(M.isDataTexture)if(lt.length>0&&Fe){Rt&&Qt&&a.texStorage2D(3553,V,ke,lt[0].width,lt[0].height);for(let he=0,Se=lt.length;he<Se;he++)Ve=lt[he],Rt?a.texSubImage2D(3553,he,0,0,Ve.width,Ve.height,je,Be,Ve.data):a.texImage2D(3553,he,ke,Ve.width,Ve.height,0,je,Be,Ve.data);M.generateMipmaps=!1}else Rt?(Qt&&a.texStorage2D(3553,V,ke,ye.width,ye.height),a.texSubImage2D(3553,0,0,0,ye.width,ye.height,je,Be,ye.data)):a.texImage2D(3553,0,ke,ye.width,ye.height,0,je,Be,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Rt&&Qt&&a.texStorage3D(35866,V,ke,lt[0].width,lt[0].height,ye.depth);for(let he=0,Se=lt.length;he<Se;he++)Ve=lt[he],M.format!==Ri?je!==null?Rt?a.compressedTexSubImage3D(35866,he,0,0,0,Ve.width,Ve.height,ye.depth,je,Ve.data,0,0):a.compressedTexImage3D(35866,he,ke,Ve.width,Ve.height,ye.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?a.texSubImage3D(35866,he,0,0,0,Ve.width,Ve.height,ye.depth,je,Be,Ve.data):a.texImage3D(35866,he,ke,Ve.width,Ve.height,ye.depth,0,je,Be,Ve.data)}else{Rt&&Qt&&a.texStorage2D(3553,V,ke,lt[0].width,lt[0].height);for(let he=0,Se=lt.length;he<Se;he++)Ve=lt[he],M.format!==Ri?je!==null?Rt?a.compressedTexSubImage2D(3553,he,0,0,Ve.width,Ve.height,je,Ve.data):a.compressedTexImage2D(3553,he,ke,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?a.texSubImage2D(3553,he,0,0,Ve.width,Ve.height,je,Be,Ve.data):a.texImage2D(3553,he,ke,Ve.width,Ve.height,0,je,Be,Ve.data)}else if(M.isDataArrayTexture)Rt?(Qt&&a.texStorage3D(35866,V,ke,ye.width,ye.height,ye.depth),a.texSubImage3D(35866,0,0,0,0,ye.width,ye.height,ye.depth,je,Be,ye.data)):a.texImage3D(35866,0,ke,ye.width,ye.height,ye.depth,0,je,Be,ye.data);else if(M.isData3DTexture)Rt?(Qt&&a.texStorage3D(32879,V,ke,ye.width,ye.height,ye.depth),a.texSubImage3D(32879,0,0,0,0,ye.width,ye.height,ye.depth,je,Be,ye.data)):a.texImage3D(32879,0,ke,ye.width,ye.height,ye.depth,0,je,Be,ye.data);else if(M.isFramebufferTexture){if(Qt)if(Rt)a.texStorage2D(3553,V,ke,ye.width,ye.height);else{let he=ye.width,Se=ye.height;for(let ze=0;ze<V;ze++)a.texImage2D(3553,ze,ke,he,Se,0,je,Be,null),he>>=1,Se>>=1}}else if(lt.length>0&&Fe){Rt&&Qt&&a.texStorage2D(3553,V,ke,lt[0].width,lt[0].height);for(let he=0,Se=lt.length;he<Se;he++)Ve=lt[he],Rt?a.texSubImage2D(3553,he,0,0,je,Be,Ve):a.texImage2D(3553,he,ke,je,Be,Ve);M.generateMipmaps=!1}else Rt?(Qt&&a.texStorage2D(3553,V,ke,ye.width,ye.height),a.texSubImage2D(3553,0,0,0,je,Be,ye)):a.texImage2D(3553,0,ke,je,Be,ye);H(M,Fe)&&I(ve),Xe.__version=Ne.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Ee(N,M,ee){if(M.image.length!==6)return;const ve=xe(N,M),Ae=M.source;a.bindTexture(34067,N.__webglTexture,33984+ee);const Ne=s.get(Ae);if(Ae.version!==Ne.__version||ve===!0){a.activeTexture(33984+ee),h.pixelStorei(37440,M.flipY),h.pixelStorei(37441,M.premultiplyAlpha),h.pixelStorei(3317,M.unpackAlignment),h.pixelStorei(37443,0);const Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let he=0;he<6;he++)!Xe&&!Re?ye[he]=C(M.image[he],!1,!0,v):ye[he]=Re?M.image[he].image:M.image[he],ye[he]=Et(M,ye[he]);const Fe=ye[0],je=U(Fe)||f,Be=u.convert(M.format,M.encoding),ke=u.convert(M.type),Ve=w(M.internalFormat,Be,ke,M.encoding),lt=f&&M.isVideoTexture!==!0,Rt=Ne.__version===void 0||ve===!0;let Qt=P(M,Fe,je);F(34067,M,je);let V;if(Xe){lt&&Rt&&a.texStorage2D(34067,Qt,Ve,Fe.width,Fe.height);for(let he=0;he<6;he++){V=ye[he].mipmaps;for(let Se=0;Se<V.length;Se++){const ze=V[Se];M.format!==Ri?Be!==null?lt?a.compressedTexSubImage2D(34069+he,Se,0,0,ze.width,ze.height,Be,ze.data):a.compressedTexImage2D(34069+he,Se,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?a.texSubImage2D(34069+he,Se,0,0,ze.width,ze.height,Be,ke,ze.data):a.texImage2D(34069+he,Se,Ve,ze.width,ze.height,0,Be,ke,ze.data)}}}else{V=M.mipmaps,lt&&Rt&&(V.length>0&&Qt++,a.texStorage2D(34067,Qt,Ve,ye[0].width,ye[0].height));for(let he=0;he<6;he++)if(Re){lt?a.texSubImage2D(34069+he,0,0,0,ye[he].width,ye[he].height,Be,ke,ye[he].data):a.texImage2D(34069+he,0,Ve,ye[he].width,ye[he].height,0,Be,ke,ye[he].data);for(let Se=0;Se<V.length;Se++){const Pe=V[Se].image[he].image;lt?a.texSubImage2D(34069+he,Se+1,0,0,Pe.width,Pe.height,Be,ke,Pe.data):a.texImage2D(34069+he,Se+1,Ve,Pe.width,Pe.height,0,Be,ke,Pe.data)}}else{lt?a.texSubImage2D(34069+he,0,0,0,Be,ke,ye[he]):a.texImage2D(34069+he,0,Ve,Be,ke,ye[he]);for(let Se=0;Se<V.length;Se++){const ze=V[Se];lt?a.texSubImage2D(34069+he,Se+1,0,0,Be,ke,ze.image[he]):a.texImage2D(34069+he,Se+1,Ve,Be,ke,ze.image[he])}}}H(M,je)&&I(34067),Ne.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function be(N,M,ee,ve,Ae){const Ne=u.convert(ee.format,ee.encoding),Xe=u.convert(ee.type),Re=w(ee.internalFormat,Ne,Xe,ee.encoding);s.get(M).__hasExternalTextures||(Ae===32879||Ae===35866?a.texImage3D(Ae,0,Re,M.width,M.height,M.depth,0,Ne,Xe,null):a.texImage2D(Ae,0,Re,M.width,M.height,0,Ne,Xe,null)),a.bindFramebuffer(36160,N),Qe(M)?_.framebufferTexture2DMultisampleEXT(36160,ve,Ae,s.get(ee).__webglTexture,0,We(M)):(Ae===3553||Ae>=34069&&Ae<=34074)&&h.framebufferTexture2D(36160,ve,Ae,s.get(ee).__webglTexture,0),a.bindFramebuffer(36160,null)}function Te(N,M,ee){if(h.bindRenderbuffer(36161,N),M.depthBuffer&&!M.stencilBuffer){let ve=33189;if(ee||Qe(M)){const Ae=M.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===Ar?ve=36012:Ae.type===Er&&(ve=33190));const Ne=We(M);Qe(M)?_.renderbufferStorageMultisampleEXT(36161,Ne,ve,M.width,M.height):h.renderbufferStorageMultisample(36161,Ne,ve,M.width,M.height)}else h.renderbufferStorage(36161,ve,M.width,M.height);h.framebufferRenderbuffer(36160,36096,36161,N)}else if(M.depthBuffer&&M.stencilBuffer){const ve=We(M);ee&&Qe(M)===!1?h.renderbufferStorageMultisample(36161,ve,35056,M.width,M.height):Qe(M)?_.renderbufferStorageMultisampleEXT(36161,ve,35056,M.width,M.height):h.renderbufferStorage(36161,34041,M.width,M.height),h.framebufferRenderbuffer(36160,33306,36161,N)}else{const ve=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Ae=0;Ae<ve.length;Ae++){const Ne=ve[Ae],Xe=u.convert(Ne.format,Ne.encoding),Re=u.convert(Ne.type),ye=w(Ne.internalFormat,Xe,Re,Ne.encoding),Fe=We(M);ee&&Qe(M)===!1?h.renderbufferStorageMultisample(36161,Fe,ye,M.width,M.height):Qe(M)?_.renderbufferStorageMultisampleEXT(36161,Fe,ye,M.width,M.height):h.renderbufferStorage(36161,ye,M.width,M.height)}}h.bindRenderbuffer(36161,null)}function we(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(36160,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const ve=s.get(M.depthTexture).__webglTexture,Ae=We(M);if(M.depthTexture.format===Cr)Qe(M)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,Ae):h.framebufferTexture2D(36160,36096,3553,ve,0);else if(M.depthTexture.format===Ks)Qe(M)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,Ae):h.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function Ge(N){const M=s.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,N)}else if(ee){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)a.bindFramebuffer(36160,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]=h.createRenderbuffer(),Te(M.__webglDepthbuffer[ve],N,!1)}else a.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=h.createRenderbuffer(),Te(M.__webglDepthbuffer,N,!1);a.bindFramebuffer(36160,null)}function kt(N,M,ee){const ve=s.get(N);M!==void 0&&be(ve.__webglFramebuffer,N,N.texture,36064,3553),ee!==void 0&&Ge(N)}function Wt(N){const M=N.texture,ee=s.get(N),ve=s.get(M);N.addEventListener("dispose",le),N.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=h.createTexture()),ve.__version=M.version,d.memory.textures++);const Ae=N.isWebGLCubeRenderTarget===!0,Ne=N.isWebGLMultipleRenderTargets===!0,Xe=U(N)||f;if(Ae){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)ee.__webglFramebuffer[Re]=h.createFramebuffer()}else{if(ee.__webglFramebuffer=h.createFramebuffer(),Ne)if(l.drawBuffers){const Re=N.texture;for(let ye=0,Fe=Re.length;ye<Fe;ye++){const je=s.get(Re[ye]);je.__webglTexture===void 0&&(je.__webglTexture=h.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&N.samples>0&&Qe(N)===!1){const Re=Ne?M:[M];ee.__webglMultisampledFramebuffer=h.createFramebuffer(),ee.__webglColorRenderbuffer=[],a.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<Re.length;ye++){const Fe=Re[ye];ee.__webglColorRenderbuffer[ye]=h.createRenderbuffer(),h.bindRenderbuffer(36161,ee.__webglColorRenderbuffer[ye]);const je=u.convert(Fe.format,Fe.encoding),Be=u.convert(Fe.type),ke=w(Fe.internalFormat,je,Be,Fe.encoding,N.isXRRenderTarget===!0),Ve=We(N);h.renderbufferStorageMultisample(36161,Ve,ke,N.width,N.height),h.framebufferRenderbuffer(36160,36064+ye,36161,ee.__webglColorRenderbuffer[ye])}h.bindRenderbuffer(36161,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=h.createRenderbuffer(),Te(ee.__webglDepthRenderbuffer,N,!0)),a.bindFramebuffer(36160,null)}}if(Ae){a.bindTexture(34067,ve.__webglTexture),F(34067,M,Xe);for(let Re=0;Re<6;Re++)be(ee.__webglFramebuffer[Re],N,M,36064,34069+Re);H(M,Xe)&&I(34067),a.unbindTexture()}else if(Ne){const Re=N.texture;for(let ye=0,Fe=Re.length;ye<Fe;ye++){const je=Re[ye],Be=s.get(je);a.bindTexture(3553,Be.__webglTexture),F(3553,je,Xe),be(ee.__webglFramebuffer,N,je,36064+ye,3553),H(je,Xe)&&I(3553)}a.unbindTexture()}else{let Re=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(f?Re=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),a.bindTexture(Re,ve.__webglTexture),F(Re,M,Xe),be(ee.__webglFramebuffer,N,M,36064,Re),H(M,Xe)&&I(Re),a.unbindTexture()}N.depthBuffer&&Ge(N)}function xt(N){const M=U(N)||f,ee=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ve=0,Ae=ee.length;ve<Ae;ve++){const Ne=ee[ve];if(H(Ne,M)){const Xe=N.isWebGLCubeRenderTarget?34067:3553,Re=s.get(Ne).__webglTexture;a.bindTexture(Xe,Re),I(Xe),a.unbindTexture()}}}function pt(N){if(f&&N.samples>0&&Qe(N)===!1){const M=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ee=N.width,ve=N.height;let Ae=16384;const Ne=[],Xe=N.stencilBuffer?33306:36096,Re=s.get(N),ye=N.isWebGLMultipleRenderTargets===!0;if(ye)for(let Fe=0;Fe<M.length;Fe++)a.bindFramebuffer(36160,Re.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(36160,36064+Fe,36161,null),a.bindFramebuffer(36160,Re.__webglFramebuffer),h.framebufferTexture2D(36009,36064+Fe,3553,null,0);a.bindFramebuffer(36008,Re.__webglMultisampledFramebuffer),a.bindFramebuffer(36009,Re.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){Ne.push(36064+Fe),N.depthBuffer&&Ne.push(Xe);const je=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(je===!1&&(N.depthBuffer&&(Ae|=256),N.stencilBuffer&&(Ae|=1024)),ye&&h.framebufferRenderbuffer(36008,36064,36161,Re.__webglColorRenderbuffer[Fe]),je===!0&&(h.invalidateFramebuffer(36008,[Xe]),h.invalidateFramebuffer(36009,[Xe])),ye){const Be=s.get(M[Fe]).__webglTexture;h.framebufferTexture2D(36009,36064,3553,Be,0)}h.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,Ae,9728),S&&h.invalidateFramebuffer(36008,Ne)}if(a.bindFramebuffer(36008,null),a.bindFramebuffer(36009,null),ye)for(let Fe=0;Fe<M.length;Fe++){a.bindFramebuffer(36160,Re.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(36160,36064+Fe,36161,Re.__webglColorRenderbuffer[Fe]);const je=s.get(M[Fe]).__webglTexture;a.bindFramebuffer(36160,Re.__webglFramebuffer),h.framebufferTexture2D(36009,36064+Fe,3553,je,0)}a.bindFramebuffer(36009,Re.__webglMultisampledFramebuffer)}}function We(N){return Math.min(p,N.samples)}function Qe(N){const M=s.get(N);return f&&N.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mn(N){const M=d.render.frame;E.get(N)!==M&&(E.set(N,M),N.update())}function Et(N,M){const ee=N.encoding,ve=N.format,Ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===qd||ee!==Lr&&(ee===Ut?f===!1?n.has("EXT_sRGB")===!0&&ve===Ri?(N.format=qd,N.minFilter=ei,N.generateMipmaps=!1):M=o_.sRGBToLinear(M):(ve!==Ri||Ae!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ee)),M}this.allocateTextureUnit=ne,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=Le,this.setTexture3D=re,this.setTextureCube=ge,this.rebindTextures=kt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Qe}function cE(h,n,a){const s=a.isWebGL2;function l(u,d=null){let f;if(u===Rr)return 5121;if(u===nM)return 32819;if(u===iM)return 32820;if(u===$S)return 5120;if(u===eM)return 5122;if(u===i_)return 5123;if(u===tM)return 5124;if(u===Er)return 5125;if(u===Ar)return 5126;if(u===fl)return s?5131:(f=n.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(u===aM)return 6406;if(u===Ri)return 6408;if(u===rM)return 6409;if(u===sM)return 6410;if(u===Cr)return 6402;if(u===Ks)return 34041;if(u===qd)return f=n.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(u===oM)return 6403;if(u===lM)return 36244;if(u===cM)return 33319;if(u===uM)return 33320;if(u===hM)return 36249;if(u===$f||u===ed||u===td||u===nd)if(d===Ut)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(u===$f)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===ed)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===td)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===nd)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(u===$f)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===ed)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===td)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===nd)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===L0||u===N0||u===z0||u===O0)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(u===L0)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===N0)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===z0)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===O0)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===fM)return f=n.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===U0||u===B0)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(u===U0)return d===Ut?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(u===B0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===P0||u===G0||u===I0||u===H0||u===V0||u===F0||u===k0||u===q0||u===j0||u===W0||u===X0||u===Y0||u===Z0||u===Q0)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(u===P0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===G0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===I0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===H0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===V0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===F0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===k0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===q0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===j0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===W0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===X0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Y0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Z0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Q0)return d===Ut?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===id)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(u===id)return d===Ut?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(u===dM||u===K0||u===J0||u===$0)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(u===id)return f.COMPRESSED_RED_RGTC1_EXT;if(u===K0)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===J0)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===$0)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Xs?s?34042:(f=n.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):h[u]!==void 0?h[u]:null}return{convert:l}}class uE extends ni{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n}}class cl extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hE={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let l=null,u=null,d=null;const f=this._targetRay,m=this._grip,v=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(v&&n.hand){d=!0;for(const b of n.hand.values()){const x=a.getJointPose(b,s),A=this._getHandJoint(v,b);x!==null&&(A.matrix.fromArray(x.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.jointRadius=x.radius),A.visible=x!==null}const g=v.joints["index-finger-tip"],p=v.joints["thumb-tip"],_=g.position.distanceTo(p.position),S=.02,E=.005;v.inputState.pinching&&_>S+E?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&_<=S-E&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else m!==null&&n.gripSpace&&(u=a.getPose(n.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(l=a.getPose(n.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hE)))}return f!==null&&(f.visible=l!==null),m!==null&&(m.visible=u!==null),v!==null&&(v.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new cl;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class fE extends Fn{constructor(n,a,s,l,u,d,f,m,v,g){if(g=g!==void 0?g:Cr,g!==Cr&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Cr&&(s=Er),s===void 0&&g===Ks&&(s=Xs),super(null,l,u,d,f,m,g,s,v),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=f!==void 0?f:Un,this.minFilter=m!==void 0?m:Un,this.flipY=!1,this.generateMipmaps=!1}}class dE extends $s{constructor(n,a){super();const s=this;let l=null,u=1,d=null,f="local-floor",m=1,v=null,g=null,p=null,_=null,S=null,E=null;const b=a.getContextAttributes();let x=null,A=null;const O=[],C=[],U=new Set,L=new Map,H=new ni;H.layers.enable(1),H.viewport=new Gt;const I=new ni;I.layers.enable(2),I.viewport=new Gt;const w=[H,I],P=new uE;P.layers.enable(1),P.layers.enable(2);let X=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=O[re];return ge===void 0&&(ge=new Rd,O[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=O[re];return ge===void 0&&(ge=new Rd,O[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=O[re];return ge===void 0&&(ge=new Rd,O[re]=ge),ge.getHandSpace()};function le(re){const ge=C.indexOf(re.inputSource);if(ge===-1)return;const R=O[ge];R!==void 0&&R.dispatchEvent({type:re.type,data:re.inputSource})}function $(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",$),l.removeEventListener("inputsourceschange",Y);for(let re=0;re<O.length;re++){const ge=C[re];ge!==null&&(C[re]=null,O[re].disconnect(ge))}X=null,me=null,n.setRenderTarget(x),S=null,_=null,p=null,l=null,A=null,Le.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){u=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||d},this.setReferenceSpace=function(re){v=re},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return p},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(x=n.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",$),l.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await a.makeXRCompatible(),l.renderState.layers===void 0||n.capabilities.isWebGL2===!1){const ge={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,a,ge),l.updateRenderState({baseLayer:S}),A=new Nr(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Rr,encoding:n.outputEncoding,stencilBuffer:b.stencil})}else{let ge=null,R=null,W=null;b.depth&&(W=b.stencil?35056:33190,ge=b.stencil?Ks:Cr,R=b.stencil?Xs:Er);const F={colorFormat:32856,depthFormat:W,scaleFactor:u};p=new XRWebGLBinding(l,a),_=p.createProjectionLayer(F),l.updateRenderState({layers:[_]}),A=new Nr(_.textureWidth,_.textureHeight,{format:Ri,type:Rr,depthTexture:new fE(_.textureWidth,_.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,encoding:n.outputEncoding,samples:b.antialias?4:0});const xe=n.properties.get(A);xe.__ignoreDepthValues=_.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(m),v=null,d=await l.requestReferenceSpace(f),Le.setContext(l),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function Y(re){for(let ge=0;ge<re.removed.length;ge++){const R=re.removed[ge],W=C.indexOf(R);W>=0&&(C[W]=null,O[W].disconnect(R))}for(let ge=0;ge<re.added.length;ge++){const R=re.added[ge];let W=C.indexOf(R);if(W===-1){for(let xe=0;xe<O.length;xe++)if(xe>=C.length){C.push(R),W=xe;break}else if(C[xe]===null){C[xe]=R,W=xe;break}if(W===-1)break}const F=O[W];F&&F.connect(R)}}const oe=new Z,Q=new Z;function se(re,ge,R){oe.setFromMatrixPosition(ge.matrixWorld),Q.setFromMatrixPosition(R.matrixWorld);const W=oe.distanceTo(Q),F=ge.projectionMatrix.elements,xe=R.projectionMatrix.elements,Me=F[14]/(F[10]-1),Ee=F[14]/(F[10]+1),be=(F[9]+1)/F[5],Te=(F[9]-1)/F[5],we=(F[8]-1)/F[0],Ge=(xe[8]+1)/xe[0],kt=Me*we,Wt=Me*Ge,xt=W/(-we+Ge),pt=xt*-we;ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(pt),re.translateZ(xt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const We=Me+xt,Qe=Ee+xt,mn=kt-pt,Et=Wt+(W-pt),N=be*Ee/Qe*We,M=Te*Ee/Qe*We;re.projectionMatrix.makePerspective(mn,Et,N,M,We,Qe)}function ne(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;P.near=I.near=H.near=re.near,P.far=I.far=H.far=re.far,(X!==P.near||me!==P.far)&&(l.updateRenderState({depthNear:P.near,depthFar:P.far}),X=P.near,me=P.far);const ge=re.parent,R=P.cameras;ne(P,ge);for(let F=0;F<R.length;F++)ne(R[F],ge);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),re.matrix.copy(P.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale);const W=re.children;for(let F=0,xe=W.length;F<xe;F++)W[F].updateMatrixWorld(!0);R.length===2?se(P,H,I):P.projectionMatrix.copy(H.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(re){m=re,_!==null&&(_.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.getPlanes=function(){return U};let _e=null;function de(re,ge){if(g=ge.getViewerPose(v||d),E=ge,g!==null){const R=g.views;S!==null&&(n.setRenderTargetFramebuffer(A,S.framebuffer),n.setRenderTarget(A));let W=!1;R.length!==P.cameras.length&&(P.cameras.length=0,W=!0);for(let F=0;F<R.length;F++){const xe=R[F];let Me=null;if(S!==null)Me=S.getViewport(xe);else{const be=p.getViewSubImage(_,xe);Me=be.viewport,F===0&&(n.setRenderTargetTextures(A,be.colorTexture,_.ignoreDepthValues?void 0:be.depthStencilTexture),n.setRenderTarget(A))}let Ee=w[F];Ee===void 0&&(Ee=new ni,Ee.layers.enable(F),Ee.viewport=new Gt,w[F]=Ee),Ee.matrix.fromArray(xe.transform.matrix),Ee.projectionMatrix.fromArray(xe.projectionMatrix),Ee.viewport.set(Me.x,Me.y,Me.width,Me.height),F===0&&P.matrix.copy(Ee.matrix),W===!0&&P.cameras.push(Ee)}}for(let R=0;R<O.length;R++){const W=C[R],F=O[R];W!==null&&F!==void 0&&F.update(W,ge,v||d)}if(_e&&_e(re,ge),ge.detectedPlanes){s.dispatchEvent({type:"planesdetected",data:ge.detectedPlanes});let R=null;for(const W of U)ge.detectedPlanes.has(W)||(R===null&&(R=[]),R.push(W));if(R!==null)for(const W of R)U.delete(W),L.delete(W),s.dispatchEvent({type:"planeremoved",data:W});for(const W of ge.detectedPlanes)if(!U.has(W))U.add(W),L.set(W,ge.lastChangedTime),s.dispatchEvent({type:"planeadded",data:W});else{const F=L.get(W);W.lastChangedTime>F&&(L.set(W,W.lastChangedTime),s.dispatchEvent({type:"planechanged",data:W}))}}E=null}const Le=new g_;Le.setAnimationLoop(de),this.setAnimationLoop=function(re){_e=re},this.dispose=function(){}}}function pE(h,n){function a(b,x){x.color.getRGB(b.fogColor.value,d_(h)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function s(b,x,A,O,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(b,x):x.isMeshToonMaterial?(l(b,x),g(b,x)):x.isMeshPhongMaterial?(l(b,x),v(b,x)):x.isMeshStandardMaterial?(l(b,x),p(b,x),x.isMeshPhysicalMaterial&&_(b,x,C)):x.isMeshMatcapMaterial?(l(b,x),S(b,x)):x.isMeshDepthMaterial?l(b,x):x.isMeshDistanceMaterial?(l(b,x),E(b,x)):x.isMeshNormalMaterial?l(b,x):x.isLineBasicMaterial?(u(b,x),x.isLineDashedMaterial&&d(b,x)):x.isPointsMaterial?f(b,x,A,O):x.isSpriteMaterial?m(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map),x.alphaMap&&(b.alphaMap.value=x.alphaMap),x.bumpMap&&(b.bumpMap.value=x.bumpMap,b.bumpScale.value=x.bumpScale,x.side===Vn&&(b.bumpScale.value*=-1)),x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap),x.normalMap&&(b.normalMap.value=x.normalMap,b.normalScale.value.copy(x.normalScale),x.side===Vn&&b.normalScale.value.negate()),x.specularMap&&(b.specularMap.value=x.specularMap),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const A=n.get(x).envMap;if(A&&(b.envMap.value=A,b.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap){b.lightMap.value=x.lightMap;const U=h.physicallyCorrectLights!==!0?Math.PI:1;b.lightMapIntensity.value=x.lightMapIntensity*U}x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity);let O;x.map?O=x.map:x.specularMap?O=x.specularMap:x.displacementMap?O=x.displacementMap:x.normalMap?O=x.normalMap:x.bumpMap?O=x.bumpMap:x.roughnessMap?O=x.roughnessMap:x.metalnessMap?O=x.metalnessMap:x.alphaMap?O=x.alphaMap:x.emissiveMap?O=x.emissiveMap:x.clearcoatMap?O=x.clearcoatMap:x.clearcoatNormalMap?O=x.clearcoatNormalMap:x.clearcoatRoughnessMap?O=x.clearcoatRoughnessMap:x.iridescenceMap?O=x.iridescenceMap:x.iridescenceThicknessMap?O=x.iridescenceThicknessMap:x.specularIntensityMap?O=x.specularIntensityMap:x.specularColorMap?O=x.specularColorMap:x.transmissionMap?O=x.transmissionMap:x.thicknessMap?O=x.thicknessMap:x.sheenColorMap?O=x.sheenColorMap:x.sheenRoughnessMap&&(O=x.sheenRoughnessMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),b.uvTransform.value.copy(O.matrix));let C;x.aoMap?C=x.aoMap:x.lightMap&&(C=x.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),b.uv2Transform.value.copy(C.matrix))}function u(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity}function d(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function f(b,x,A,O){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*A,b.scale.value=O*.5,x.map&&(b.map.value=x.map),x.alphaMap&&(b.alphaMap.value=x.alphaMap),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);let C;x.map?C=x.map:x.alphaMap&&(C=x.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),b.uvTransform.value.copy(C.matrix))}function m(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map),x.alphaMap&&(b.alphaMap.value=x.alphaMap),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);let A;x.map?A=x.map:x.alphaMap&&(A=x.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uvTransform.value.copy(A.matrix))}function v(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function p(b,x){b.roughness.value=x.roughness,b.metalness.value=x.metalness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap),n.get(x).envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function _(b,x,A){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap)),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),b.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===Vn&&b.clearcoatNormalScale.value.negate())),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap)),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=A.texture,b.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap)}function S(b,x){x.matcap&&(b.matcap.value=x.matcap)}function E(b,x){b.referencePosition.value.copy(x.referencePosition),b.nearDistance.value=x.nearDistance,b.farDistance.value=x.farDistance}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function mE(h,n,a,s){let l={},u={},d=[];const f=a.isWebGL2?h.getParameter(35375):0;function m(O,C){const U=C.program;s.uniformBlockBinding(O,U)}function v(O,C){let U=l[O.id];U===void 0&&(E(O),U=g(O),l[O.id]=U,O.addEventListener("dispose",x));const L=C.program;s.updateUBOMapping(O,L);const H=n.render.frame;u[O.id]!==H&&(_(O),u[O.id]=H)}function g(O){const C=p();O.__bindingPointIndex=C;const U=h.createBuffer(),L=O.__size,H=O.usage;return h.bindBuffer(35345,U),h.bufferData(35345,L,H),h.bindBuffer(35345,null),h.bindBufferBase(35345,C,U),U}function p(){for(let O=0;O<f;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const C=l[O.id],U=O.uniforms,L=O.__cache;h.bindBuffer(35345,C);for(let H=0,I=U.length;H<I;H++){const w=U[H];if(S(w,H,L)===!0){const P=w.__offset,X=Array.isArray(w.value)?w.value:[w.value];let me=0;for(let le=0;le<X.length;le++){const $=X[le],Y=b($);typeof $=="number"?(w.__data[0]=$,h.bufferSubData(35345,P+me,w.__data)):$.isMatrix3?(w.__data[0]=$.elements[0],w.__data[1]=$.elements[1],w.__data[2]=$.elements[2],w.__data[3]=$.elements[0],w.__data[4]=$.elements[3],w.__data[5]=$.elements[4],w.__data[6]=$.elements[5],w.__data[7]=$.elements[0],w.__data[8]=$.elements[6],w.__data[9]=$.elements[7],w.__data[10]=$.elements[8],w.__data[11]=$.elements[0]):($.toArray(w.__data,me),me+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}h.bufferSubData(35345,P,w.__data)}}h.bindBuffer(35345,null)}function S(O,C,U){const L=O.value;if(U[C]===void 0){if(typeof L=="number")U[C]=L;else{const H=Array.isArray(L)?L:[L],I=[];for(let w=0;w<H.length;w++)I.push(H[w].clone());U[C]=I}return!0}else if(typeof L=="number"){if(U[C]!==L)return U[C]=L,!0}else{const H=Array.isArray(U[C])?U[C]:[U[C]],I=Array.isArray(L)?L:[L];for(let w=0;w<H.length;w++){const P=H[w];if(P.equals(I[w])===!1)return P.copy(I[w]),!0}}return!1}function E(O){const C=O.uniforms;let U=0;const L=16;let H=0;for(let I=0,w=C.length;I<w;I++){const P=C[I],X={boundary:0,storage:0},me=Array.isArray(P.value)?P.value:[P.value];for(let le=0,$=me.length;le<$;le++){const Y=me[le],oe=b(Y);X.boundary+=oe.boundary,X.storage+=oe.storage}if(P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=U,I>0){H=U%L;const le=L-H;H!==0&&le-X.boundary<0&&(U+=L-H,P.__offset=U)}U+=X.storage}return H=U%L,H>0&&(U+=L-H),O.__size=U,O.__cache={},this}function b(O){const C={boundary:0,storage:0};return typeof O=="number"?(C.boundary=4,C.storage=4):O.isVector2?(C.boundary=8,C.storage=8):O.isVector3||O.isColor?(C.boundary=16,C.storage=12):O.isVector4?(C.boundary=16,C.storage=16):O.isMatrix3?(C.boundary=48,C.storage=48):O.isMatrix4?(C.boundary=64,C.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),C}function x(O){const C=O.target;C.removeEventListener("dispose",x);const U=d.indexOf(C.__bindingPointIndex);d.splice(U,1),h.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function A(){for(const O in l)h.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:v,dispose:A}}function gE(){const h=hu("canvas");return h.style.display="block",h}function S_(h={}){this.isWebGLRenderer=!0;const n=h.canvas!==void 0?h.canvas:gE(),a=h.context!==void 0?h.context:null,s=h.depth!==void 0?h.depth:!0,l=h.stencil!==void 0?h.stencil:!0,u=h.antialias!==void 0?h.antialias:!1,d=h.premultipliedAlpha!==void 0?h.premultipliedAlpha:!0,f=h.preserveDrawingBuffer!==void 0?h.preserveDrawingBuffer:!1,m=h.powerPreference!==void 0?h.powerPreference:"default",v=h.failIfMajorPerformanceCaveat!==void 0?h.failIfMajorPerformanceCaveat:!1;let g;a!==null?g=a.getContextAttributes().alpha:g=h.alpha!==void 0?h.alpha:!1;let p=null,_=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Lr,this.physicallyCorrectLights=!1,this.toneMapping=ga,this.toneMappingExposure=1;const b=this;let x=!1,A=0,O=0,C=null,U=-1,L=null;const H=new Gt,I=new Gt;let w=null,P=n.width,X=n.height,me=1,le=null,$=null;const Y=new Gt(0,0,P,X),oe=new Gt(0,0,P,X);let Q=!1;const se=new $d;let ne=!1,_e=!1,de=null;const Le=new Ft,re=new at,ge=new Z,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return C===null?me:1}let F=a;function xe(D,ae){for(let ce=0;ce<D.length;ce++){const J=D[ce],pe=n.getContext(J,ae);if(pe!==null)return pe}return null}try{const D={alpha:!0,depth:s,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",lt,!1),F===null){const ae=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&ae.shift(),F=xe(ae,D),F===null)throw xe(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Me,Ee,be,Te,we,Ge,kt,Wt,xt,pt,We,Qe,mn,Et,N,M,ee,ve,Ae,Ne,Xe,Re,ye,Fe;function je(){Me=new Aw(F),Ee=new bw(F,Me,h),Me.init(Ee),Re=new cE(F,Me,Ee),be=new oE(F,Me,Ee),Te=new Rw,we=new X3,Ge=new lE(F,Me,be,we,Ee,Re,Te),kt=new Mw(b),Wt=new Ew(b),xt=new IM(F,Ee),ye=new _w(F,Me,xt,Ee),pt=new Cw(F,xt,Te,ye),We=new Ow(F,pt,xt,Te),Ae=new zw(F,Ee,Ge),M=new Sw(we),Qe=new W3(b,kt,Wt,Me,Ee,ye,M),mn=new pE(b,we),Et=new Z3,N=new tE(Me,Ee),ve=new yw(b,kt,Wt,be,We,g,d),ee=new sE(b,We,Ee),Fe=new mE(F,Te,Ee,be),Ne=new xw(F,Me,Te,Ee),Xe=new Dw(F,Me,Te,Ee),Te.programs=Qe.programs,b.capabilities=Ee,b.extensions=Me,b.properties=we,b.renderLists=Et,b.shadowMap=ee,b.state=be,b.info=Te}je();const Be=new dE(b,F);this.xr=Be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Me.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Me.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(D){D!==void 0&&(me=D,this.setSize(P,X,!1))},this.getSize=function(D){return D.set(P,X)},this.setSize=function(D,ae,ce){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=D,X=ae,n.width=Math.floor(D*me),n.height=Math.floor(ae*me),ce!==!1&&(n.style.width=D+"px",n.style.height=ae+"px"),this.setViewport(0,0,D,ae)},this.getDrawingBufferSize=function(D){return D.set(P*me,X*me).floor()},this.setDrawingBufferSize=function(D,ae,ce){P=D,X=ae,me=ce,n.width=Math.floor(D*ce),n.height=Math.floor(ae*ce),this.setViewport(0,0,D,ae)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(Y)},this.setViewport=function(D,ae,ce,J){D.isVector4?Y.set(D.x,D.y,D.z,D.w):Y.set(D,ae,ce,J),be.viewport(H.copy(Y).multiplyScalar(me).floor())},this.getScissor=function(D){return D.copy(oe)},this.setScissor=function(D,ae,ce,J){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,ae,ce,J),be.scissor(I.copy(oe).multiplyScalar(me).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(D){be.setScissorTest(Q=D)},this.setOpaqueSort=function(D){le=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(D=!0,ae=!0,ce=!0){let J=0;D&&(J|=16384),ae&&(J|=256),ce&&(J|=1024),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),Et.dispose(),N.dispose(),we.dispose(),kt.dispose(),Wt.dispose(),We.dispose(),ye.dispose(),Fe.dispose(),Qe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",ze),Be.removeEventListener("sessionend",Pe),de&&(de.dispose(),de=null),mt.stop()};function ke(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const D=Te.autoReset,ae=ee.enabled,ce=ee.autoUpdate,J=ee.needsUpdate,pe=ee.type;je(),Te.autoReset=D,ee.enabled=ae,ee.autoUpdate=ce,ee.needsUpdate=J,ee.type=pe}function lt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Rt(D){const ae=D.target;ae.removeEventListener("dispose",Rt),Qt(ae)}function Qt(D){V(D),we.remove(D)}function V(D){const ae=we.get(D).programs;ae!==void 0&&(ae.forEach(function(ce){Qe.releaseProgram(ce)}),D.isShaderMaterial&&Qe.releaseShaderCache(D))}this.renderBufferDirect=function(D,ae,ce,J,pe,Ie){ae===null&&(ae=R);const Ye=pe.isMesh&&pe.matrixWorld.determinant()<0,$e=yu(D,ae,ce,J,pe);be.setMaterial(J,Ye);let et=ce.index,ct=1;J.wireframe===!0&&(et=pt.getWireframeAttribute(ce),ct=2);const tt=ce.drawRange,ut=ce.attributes.position;let Ht=tt.start*ct,wn=(tt.start+tt.count)*ct;Ie!==null&&(Ht=Math.max(Ht,Ie.start*ct),wn=Math.min(wn,(Ie.start+Ie.count)*ct)),et!==null?(Ht=Math.max(Ht,0),wn=Math.min(wn,et.count)):ut!=null&&(Ht=Math.max(Ht,0),wn=Math.min(wn,ut.count));const si=wn-Ht;if(si<0||si===1/0)return;ye.setup(pe,J,$e,ce,et);let _i,Bt=Ne;if(et!==null&&(_i=xt.get(et),Bt=Xe,Bt.setIndex(_i)),pe.isMesh)J.wireframe===!0?(be.setLineWidth(J.wireframeLinewidth*W()),Bt.setMode(1)):Bt.setMode(4);else if(pe.isLine){let rt=J.linewidth;rt===void 0&&(rt=1),be.setLineWidth(rt*W()),pe.isLineSegments?Bt.setMode(1):pe.isLineLoop?Bt.setMode(2):Bt.setMode(3)}else pe.isPoints?Bt.setMode(0):pe.isSprite&&Bt.setMode(4);if(pe.isInstancedMesh)Bt.renderInstances(Ht,si,pe.count);else if(ce.isInstancedBufferGeometry){const rt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Or=Math.min(ce.instanceCount,rt);Bt.renderInstances(Ht,si,Or)}else Bt.render(Ht,si)},this.compile=function(D,ae){function ce(J,pe,Ie){J.transparent===!0&&J.side===Li&&J.forceSinglePass===!1?(J.side=Vn,J.needsUpdate=!0,Yt(J,pe,Ie),J.side=Ka,J.needsUpdate=!0,Yt(J,pe,Ie),J.side=Li):Yt(J,pe,Ie)}_=N.get(D),_.init(),E.push(_),D.traverseVisible(function(J){J.isLight&&J.layers.test(ae.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights(b.physicallyCorrectLights),D.traverse(function(J){const pe=J.material;if(pe)if(Array.isArray(pe))for(let Ie=0;Ie<pe.length;Ie++){const Ye=pe[Ie];ce(Ye,D,J)}else ce(pe,D,J)}),E.pop(),_=null};let he=null;function Se(D){he&&he(D)}function ze(){mt.stop()}function Pe(){mt.start()}const mt=new g_;mt.setAnimationLoop(Se),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(D){he=D,Be.setAnimationLoop(D),D===null?mt.stop():mt.start()},Be.addEventListener("sessionstart",ze),Be.addEventListener("sessionend",Pe),this.render=function(D,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(ae),ae=Be.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,ae,C),_=N.get(D,E.length),_.init(),E.push(_),Le.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),se.setFromProjectionMatrix(Le),_e=this.localClippingEnabled,ne=M.init(this.clippingPlanes,_e),p=Et.get(D,S.length),p.init(),S.push(p),Xt(D,ae,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(le,$),ne===!0&&M.beginShadows();const ce=_.state.shadowsArray;if(ee.render(ce,D,ae),ne===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(p,D),_.setupLights(b.physicallyCorrectLights),ae.isArrayCamera){const J=ae.cameras;for(let pe=0,Ie=J.length;pe<Ie;pe++){const Ye=J[pe];cn(p,D,Ye,Ye.viewport)}}else cn(p,D,ae);C!==null&&(Ge.updateMultisampleRenderTarget(C),Ge.updateRenderTargetMipmap(C)),D.isScene===!0&&D.onAfterRender(b,D,ae),ye.resetDefaultState(),U=-1,L=null,E.pop(),E.length>0?_=E[E.length-1]:_=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Xt(D,ae,ce,J){if(D.visible===!1)return;if(D.layers.test(ae.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ae);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||se.intersectsSprite(D)){J&&ge.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Le);const Ye=We.update(D),$e=D.material;$e.visible&&p.push(D,Ye,$e,ce,ge.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==Te.render.frame&&(D.skeleton.update(),D.skeleton.frame=Te.render.frame),!D.frustumCulled||se.intersectsObject(D))){J&&ge.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Le);const Ye=We.update(D),$e=D.material;if(Array.isArray($e)){const et=Ye.groups;for(let ct=0,tt=et.length;ct<tt;ct++){const ut=et[ct],Ht=$e[ut.materialIndex];Ht&&Ht.visible&&p.push(D,Ye,Ht,ce,ge.z,ut)}}else $e.visible&&p.push(D,Ye,$e,ce,ge.z,null)}}const Ie=D.children;for(let Ye=0,$e=Ie.length;Ye<$e;Ye++)Xt(Ie[Ye],ae,ce,J)}function cn(D,ae,ce,J){const pe=D.opaque,Ie=D.transmissive,Ye=D.transparent;_.setupLightsView(ce),ne===!0&&M.setGlobalState(b.clippingPlanes,ce),Ie.length>0&&Yi(pe,ae,ce),J&&be.viewport(H.copy(J)),pe.length>0&&bt(pe,ae,ce),Ie.length>0&&bt(Ie,ae,ce),Ye.length>0&&bt(Ye,ae,ce),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Yi(D,ae,ce){const J=Ee.isWebGL2;de===null&&(de=new Nr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?fl:Rr,minFilter:hl,samples:J&&u===!0?4:0})),b.getDrawingBufferSize(re),J?de.setSize(re.x,re.y):de.setSize(jd(re.x),jd(re.y));const pe=b.getRenderTarget();b.setRenderTarget(de),b.clear();const Ie=b.toneMapping;b.toneMapping=ga,bt(D,ae,ce),b.toneMapping=Ie,Ge.updateMultisampleRenderTarget(de),Ge.updateRenderTargetMipmap(de),b.setRenderTarget(pe)}function bt(D,ae,ce){const J=ae.isScene===!0?ae.overrideMaterial:null;for(let pe=0,Ie=D.length;pe<Ie;pe++){const Ye=D[pe],$e=Ye.object,et=Ye.geometry,ct=J===null?Ye.material:J,tt=Ye.group;$e.layers.test(ce.layers)&&It($e,ae,ce,et,ct,tt)}}function It(D,ae,ce,J,pe,Ie){D.onBeforeRender(b,ae,ce,J,pe,Ie),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),pe.onBeforeRender(b,ae,ce,J,D,Ie),pe.transparent===!0&&pe.side===Li&&pe.forceSinglePass===!1?(pe.side=Vn,pe.needsUpdate=!0,b.renderBufferDirect(ce,ae,J,pe,D,Ie),pe.side=Ka,pe.needsUpdate=!0,b.renderBufferDirect(ce,ae,J,pe,D,Ie),pe.side=Li):b.renderBufferDirect(ce,ae,J,pe,D,Ie),D.onAfterRender(b,ae,ce,J,pe,Ie)}function Yt(D,ae,ce){ae.isScene!==!0&&(ae=R);const J=we.get(D),pe=_.state.lights,Ie=_.state.shadowsArray,Ye=pe.state.version,$e=Qe.getParameters(D,pe.state,Ie,ae,ce),et=Qe.getProgramCacheKey($e);let ct=J.programs;J.environment=D.isMeshStandardMaterial?ae.environment:null,J.fog=ae.fog,J.envMap=(D.isMeshStandardMaterial?Wt:kt).get(D.envMap||J.environment),ct===void 0&&(D.addEventListener("dispose",Rt),ct=new Map,J.programs=ct);let tt=ct.get(et);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Ye)return Tn(D,$e),tt}else $e.uniforms=Qe.getUniforms(D),D.onBuild(ce,$e,b),D.onBeforeCompile($e,b),tt=Qe.acquireProgram($e,et),ct.set(et,tt),J.uniforms=$e.uniforms;const ut=J.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ut.clippingPlanes=M.uniform),Tn(D,$e),J.needsLights=xu(D),J.lightsStateVersion=Ye,J.needsLights&&(ut.ambientLightColor.value=pe.state.ambient,ut.lightProbe.value=pe.state.probe,ut.directionalLights.value=pe.state.directional,ut.directionalLightShadows.value=pe.state.directionalShadow,ut.spotLights.value=pe.state.spot,ut.spotLightShadows.value=pe.state.spotShadow,ut.rectAreaLights.value=pe.state.rectArea,ut.ltc_1.value=pe.state.rectAreaLTC1,ut.ltc_2.value=pe.state.rectAreaLTC2,ut.pointLights.value=pe.state.point,ut.pointLightShadows.value=pe.state.pointShadow,ut.hemisphereLights.value=pe.state.hemi,ut.directionalShadowMap.value=pe.state.directionalShadowMap,ut.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ut.spotShadowMap.value=pe.state.spotShadowMap,ut.spotLightMatrix.value=pe.state.spotLightMatrix,ut.spotLightMap.value=pe.state.spotLightMap,ut.pointShadowMap.value=pe.state.pointShadowMap,ut.pointShadowMatrix.value=pe.state.pointShadowMatrix);const Ht=tt.getUniforms(),wn=uu.seqWithValue(Ht.seq,ut);return J.currentProgram=tt,J.uniformsList=wn,tt}function Tn(D,ae){const ce=we.get(D);ce.outputEncoding=ae.outputEncoding,ce.instancing=ae.instancing,ce.skinning=ae.skinning,ce.morphTargets=ae.morphTargets,ce.morphNormals=ae.morphNormals,ce.morphColors=ae.morphColors,ce.morphTargetsCount=ae.morphTargetsCount,ce.numClippingPlanes=ae.numClippingPlanes,ce.numIntersection=ae.numClipIntersection,ce.vertexAlphas=ae.vertexAlphas,ce.vertexTangents=ae.vertexTangents,ce.toneMapping=ae.toneMapping}function yu(D,ae,ce,J,pe){ae.isScene!==!0&&(ae=R),Ge.resetTextureUnits();const Ie=ae.fog,Ye=J.isMeshStandardMaterial?ae.environment:null,$e=C===null?b.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Lr,et=(J.isMeshStandardMaterial?Wt:kt).get(J.envMap||Ye),ct=J.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,tt=!!J.normalMap&&!!ce.attributes.tangent,ut=!!ce.morphAttributes.position,Ht=!!ce.morphAttributes.normal,wn=!!ce.morphAttributes.color,si=J.toneMapped?b.toneMapping:ga,_i=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=_i!==void 0?_i.length:0,rt=we.get(J),Or=_.state.lights;if(ne===!0&&(_e===!0||D!==L)){const nn=D===L&&J.id===U;M.setState(J,D,nn)}let At=!1;J.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Or.state.version||rt.outputEncoding!==$e||pe.isInstancedMesh&&rt.instancing===!1||!pe.isInstancedMesh&&rt.instancing===!0||pe.isSkinnedMesh&&rt.skinning===!1||!pe.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==et||J.fog===!0&&rt.fog!==Ie||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==M.numPlanes||rt.numIntersection!==M.numIntersection)||rt.vertexAlphas!==ct||rt.vertexTangents!==tt||rt.morphTargets!==ut||rt.morphNormals!==Ht||rt.morphColors!==wn||rt.toneMapping!==si||Ee.isWebGL2===!0&&rt.morphTargetsCount!==Bt)&&(At=!0):(At=!0,rt.__version=J.version);let Ot=rt.currentProgram;At===!0&&(Ot=Yt(J,ae,pe));let gn=!1,oi=!1,Ur=!1;const vn=Ot.getUniforms(),Zi=rt.uniforms;if(be.useProgram(Ot.program)&&(gn=!0,oi=!0,Ur=!0),J.id!==U&&(U=J.id,oi=!0),gn||L!==D){if(vn.setValue(F,"projectionMatrix",D.projectionMatrix),Ee.logarithmicDepthBuffer&&vn.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),L!==D&&(L=D,oi=!0,Ur=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const nn=vn.map.cameraPosition;nn!==void 0&&nn.setValue(F,ge.setFromMatrixPosition(D.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vn.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||pe.isSkinnedMesh)&&vn.setValue(F,"viewMatrix",D.matrixWorldInverse)}if(pe.isSkinnedMesh){vn.setOptional(F,pe,"bindMatrix"),vn.setOptional(F,pe,"bindMatrixInverse");const nn=pe.skeleton;nn&&(Ee.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),vn.setValue(F,"boneTexture",nn.boneTexture,Ge),vn.setValue(F,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Br=ce.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Ee.isWebGL2===!0)&&Ae.update(pe,ce,J,Ot),(oi||rt.receiveShadow!==pe.receiveShadow)&&(rt.receiveShadow=pe.receiveShadow,vn.setValue(F,"receiveShadow",pe.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Zi.envMap.value=et,Zi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),oi&&(vn.setValue(F,"toneMappingExposure",b.toneMappingExposure),rt.needsLights&&_u(Zi,Ur),Ie&&J.fog===!0&&mn.refreshFogUniforms(Zi,Ie),mn.refreshMaterialUniforms(Zi,J,me,X,de),uu.upload(F,rt.uniformsList,Zi,Ge)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(uu.upload(F,rt.uniformsList,Zi,Ge),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vn.setValue(F,"center",pe.center),vn.setValue(F,"modelViewMatrix",pe.modelViewMatrix),vn.setValue(F,"normalMatrix",pe.normalMatrix),vn.setValue(F,"modelMatrix",pe.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let va=0,Pr=nn.length;va<Pr;va++)if(Ee.isWebGL2){const Ni=nn[va];Fe.update(Ni,Ot),Fe.bind(Ni,Ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ot}function _u(D,ae){D.ambientLightColor.needsUpdate=ae,D.lightProbe.needsUpdate=ae,D.directionalLights.needsUpdate=ae,D.directionalLightShadows.needsUpdate=ae,D.pointLights.needsUpdate=ae,D.pointLightShadows.needsUpdate=ae,D.spotLights.needsUpdate=ae,D.spotLightShadows.needsUpdate=ae,D.rectAreaLights.needsUpdate=ae,D.hemisphereLights.needsUpdate=ae}function xu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(D,ae,ce){we.get(D.texture).__webglTexture=ae,we.get(D.depthTexture).__webglTexture=ce;const J=we.get(D);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ce===void 0,J.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,ae){const ce=we.get(D);ce.__webglFramebuffer=ae,ce.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(D,ae=0,ce=0){C=D,A=ae,O=ce;let J=!0,pe=null,Ie=!1,Ye=!1;if(D){const et=we.get(D);et.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),J=!1):et.__webglFramebuffer===void 0?Ge.setupRenderTarget(D):et.__hasExternalTextures&&Ge.rebindTextures(D,we.get(D.texture).__webglTexture,we.get(D.depthTexture).__webglTexture);const ct=D.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ye=!0);const tt=we.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(pe=tt[ae],Ie=!0):Ee.isWebGL2&&D.samples>0&&Ge.useMultisampledRTT(D)===!1?pe=we.get(D).__webglMultisampledFramebuffer:pe=tt,H.copy(D.viewport),I.copy(D.scissor),w=D.scissorTest}else H.copy(Y).multiplyScalar(me).floor(),I.copy(oe).multiplyScalar(me).floor(),w=Q;if(be.bindFramebuffer(36160,pe)&&Ee.drawBuffers&&J&&be.drawBuffers(D,pe),be.viewport(H),be.scissor(I),be.setScissorTest(w),Ie){const et=we.get(D.texture);F.framebufferTexture2D(36160,36064,34069+ae,et.__webglTexture,ce)}else if(Ye){const et=we.get(D.texture),ct=ae||0;F.framebufferTextureLayer(36160,36064,et.__webglTexture,ce||0,ct)}U=-1},this.readRenderTargetPixels=function(D,ae,ce,J,pe,Ie,Ye){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=we.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ye!==void 0&&($e=$e[Ye]),$e){be.bindFramebuffer(36160,$e);try{const et=D.texture,ct=et.format,tt=et.type;if(ct!==Ri&&Re.convert(ct)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=tt===fl&&(Me.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Me.has("EXT_color_buffer_float"));if(tt!==Rr&&Re.convert(tt)!==F.getParameter(35738)&&!(tt===Ar&&(Ee.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=D.width-J&&ce>=0&&ce<=D.height-pe&&F.readPixels(ae,ce,J,pe,Re.convert(ct),Re.convert(tt),Ie)}finally{const et=C!==null?we.get(C).__webglFramebuffer:null;be.bindFramebuffer(36160,et)}}},this.copyFramebufferToTexture=function(D,ae,ce=0){const J=Math.pow(2,-ce),pe=Math.floor(ae.image.width*J),Ie=Math.floor(ae.image.height*J);Ge.setTexture2D(ae,0),F.copyTexSubImage2D(3553,ce,0,0,D.x,D.y,pe,Ie),be.unbindTexture()},this.copyTextureToTexture=function(D,ae,ce,J=0){const pe=ae.image.width,Ie=ae.image.height,Ye=Re.convert(ce.format),$e=Re.convert(ce.type);Ge.setTexture2D(ce,0),F.pixelStorei(37440,ce.flipY),F.pixelStorei(37441,ce.premultiplyAlpha),F.pixelStorei(3317,ce.unpackAlignment),ae.isDataTexture?F.texSubImage2D(3553,J,D.x,D.y,pe,Ie,Ye,$e,ae.image.data):ae.isCompressedTexture?F.compressedTexSubImage2D(3553,J,D.x,D.y,ae.mipmaps[0].width,ae.mipmaps[0].height,Ye,ae.mipmaps[0].data):F.texSubImage2D(3553,J,D.x,D.y,Ye,$e,ae.image),J===0&&ce.generateMipmaps&&F.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(D,ae,ce,J,pe=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=D.max.x-D.min.x+1,Ye=D.max.y-D.min.y+1,$e=D.max.z-D.min.z+1,et=Re.convert(J.format),ct=Re.convert(J.type);let tt;if(J.isData3DTexture)Ge.setTexture3D(J,0),tt=32879;else if(J.isDataArrayTexture)Ge.setTexture2DArray(J,0),tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,J.flipY),F.pixelStorei(37441,J.premultiplyAlpha),F.pixelStorei(3317,J.unpackAlignment);const ut=F.getParameter(3314),Ht=F.getParameter(32878),wn=F.getParameter(3316),si=F.getParameter(3315),_i=F.getParameter(32877),Bt=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;F.pixelStorei(3314,Bt.width),F.pixelStorei(32878,Bt.height),F.pixelStorei(3316,D.min.x),F.pixelStorei(3315,D.min.y),F.pixelStorei(32877,D.min.z),ce.isDataTexture||ce.isData3DTexture?F.texSubImage3D(tt,pe,ae.x,ae.y,ae.z,Ie,Ye,$e,et,ct,Bt.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(tt,pe,ae.x,ae.y,ae.z,Ie,Ye,$e,et,Bt.data)):F.texSubImage3D(tt,pe,ae.x,ae.y,ae.z,Ie,Ye,$e,et,ct,Bt),F.pixelStorei(3314,ut),F.pixelStorei(32878,Ht),F.pixelStorei(3316,wn),F.pixelStorei(3315,si),F.pixelStorei(32877,_i),pe===0&&J.generateMipmaps&&F.generateMipmap(tt),be.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ge.setTextureCube(D,0):D.isData3DTexture?Ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ge.setTexture2DArray(D,0):Ge.setTexture2D(D,0),be.unbindTexture()},this.resetState=function(){A=0,O=0,C=null,be.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class vE extends S_{}vE.prototype.isWebGL1Renderer=!0;class tp{constructor(n,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(n),this.density=a}clone(){return new tp(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class yE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(n){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=n}}class _E{constructor(n,a){this.isInterleavedBuffer=!0,this.array=n,this.stride=a,this.count=n!==void 0?n.length/a:0,this.usage=kd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qa()}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}copy(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this}copyAt(n,a,s){n*=this.stride,s*=a.stride;for(let l=0,u=this.stride;l<u;l++)this.array[n+l]=a.array[s+l];return this}set(n,a=0){return this.array.set(n,a),this}clone(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qa()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const a=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(a,this.stride);return s.setUsage(this.usage),s}onUpload(n){return this.onUploadCallback=n,this}toJSON(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qa()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new Z;class fu{constructor(n,a,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=n,this.itemSize=a,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(n){this.data.needsUpdate=n}applyMatrix4(n){for(let a=0,s=this.data.count;a<s;a++)zn.fromBufferAttribute(this,a),zn.applyMatrix4(n),this.setXYZ(a,zn.x,zn.y,zn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)zn.fromBufferAttribute(this,a),zn.applyNormalMatrix(n),this.setXYZ(a,zn.x,zn.y,zn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)zn.fromBufferAttribute(this,a),zn.transformDirection(n),this.setXYZ(a,zn.x,zn.y,zn.z);return this}setX(n,a){return this.normalized&&(a=zt(a,this.array)),this.data.array[n*this.data.stride+this.offset]=a,this}setY(n,a){return this.normalized&&(a=zt(a,this.array)),this.data.array[n*this.data.stride+this.offset+1]=a,this}setZ(n,a){return this.normalized&&(a=zt(a,this.array)),this.data.array[n*this.data.stride+this.offset+2]=a,this}setW(n,a){return this.normalized&&(a=zt(a,this.array)),this.data.array[n*this.data.stride+this.offset+3]=a,this}getX(n){let a=this.data.array[n*this.data.stride+this.offset];return this.normalized&&(a=Ya(a,this.array)),a}getY(n){let a=this.data.array[n*this.data.stride+this.offset+1];return this.normalized&&(a=Ya(a,this.array)),a}getZ(n){let a=this.data.array[n*this.data.stride+this.offset+2];return this.normalized&&(a=Ya(a,this.array)),a}getW(n){let a=this.data.array[n*this.data.stride+this.offset+3];return this.normalized&&(a=Ya(a,this.array)),a}setXY(n,a,s){return n=n*this.data.stride+this.offset,this.normalized&&(a=zt(a,this.array),s=zt(s,this.array)),this.data.array[n+0]=a,this.data.array[n+1]=s,this}setXYZ(n,a,s,l){return n=n*this.data.stride+this.offset,this.normalized&&(a=zt(a,this.array),s=zt(s,this.array),l=zt(l,this.array)),this.data.array[n+0]=a,this.data.array[n+1]=s,this.data.array[n+2]=l,this}setXYZW(n,a,s,l,u){return n=n*this.data.stride+this.offset,this.normalized&&(a=zt(a,this.array),s=zt(s,this.array),l=zt(l,this.array),u=zt(u,this.array)),this.data.array[n+0]=a,this.data.array[n+1]=s,this.data.array[n+2]=l,this.data.array[n+3]=u,this}clone(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const a=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)a.push(this.data.array[l+u])}return new kn(new this.array.constructor(a),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new fu(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const a=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)a.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:a,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class M_ extends Ja{constructor(n){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.rotation=n.rotation,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}let Hs;const nl=new Z,Vs=new Z,Fs=new Z,ks=new at,il=new at,T_=new Ft,nu=new Z,al=new Z,iu=new Z,Uy=new at,Ld=new at,By=new at;class xE extends sn{constructor(n){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new ri;const a=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new _E(a,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new fu(s,3,0,!1)),Hs.setAttribute("uv",new fu(s,2,3,!1))}this.geometry=Hs,this.material=n!==void 0?n:new M_,this.center=new at(.5,.5)}raycast(n,a){n.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),T_.copy(n.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(n.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),n.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Fs.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const d=this.center;au(nu.set(-.5,-.5,0),Fs,d,Vs,l,u),au(al.set(.5,-.5,0),Fs,d,Vs,l,u),au(iu.set(.5,.5,0),Fs,d,Vs,l,u),Uy.set(0,0),Ld.set(1,0),By.set(1,1);let f=n.ray.intersectTriangle(nu,al,iu,!1,nl);if(f===null&&(au(al.set(-.5,.5,0),Fs,d,Vs,l,u),Ld.set(0,1),f=n.ray.intersectTriangle(nu,iu,al,!1,nl),f===null))return;const m=n.ray.origin.distanceTo(nl);m<n.near||m>n.far||a.push({distance:m,point:nl.clone(),uv:Xi.getUV(nl,nu,al,iu,Uy,Ld,By,new at),face:null,object:this})}copy(n,a){return super.copy(n,a),n.center!==void 0&&this.center.copy(n.center),this.material=n.material,this}}function au(h,n,a,s,l,u){ks.subVectors(h,a).addScalar(.5).multiply(s),l!==void 0?(il.x=u*ks.x-l*ks.y,il.y=l*ks.x+u*ks.y):il.copy(ks),h.copy(n),h.x+=il.x,h.y+=il.y,h.applyMatrix4(T_)}class w_ extends Ja{constructor(n){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.linewidth=n.linewidth,this.linecap=n.linecap,this.linejoin=n.linejoin,this.fog=n.fog,this}}const Py=new Z,Gy=new Z,Iy=new Ft,Nd=new Jd,ru=new gl;class bE extends sn{constructor(n=new ri,a=new w_){super(),this.isLine=!0,this.type="Line",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=n.material,this.geometry=n.geometry,this}computeLineDistances(){const n=this.geometry;if(n.index===null){const a=n.attributes.position,s=[0];for(let l=1,u=a.count;l<u;l++)Py.fromBufferAttribute(a,l-1),Gy.fromBufferAttribute(a,l),s[l]=s[l-1],s[l]+=Py.distanceTo(Gy);n.setAttribute("lineDistance",new yi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(n,a){const s=this.geometry,l=this.matrixWorld,u=n.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(l),ru.radius+=u,n.ray.intersectsSphere(ru)===!1)return;Iy.copy(l).invert(),Nd.copy(n.ray).applyMatrix4(Iy);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,v=new Z,g=new Z,p=new Z,_=new Z,S=this.isLineSegments?2:1,E=s.index,x=s.attributes.position;if(E!==null){const A=Math.max(0,d.start),O=Math.min(E.count,d.start+d.count);for(let C=A,U=O-1;C<U;C+=S){const L=E.getX(C),H=E.getX(C+1);if(v.fromBufferAttribute(x,L),g.fromBufferAttribute(x,H),Nd.distanceSqToSegment(v,g,_,p)>m)continue;_.applyMatrix4(this.matrixWorld);const w=n.ray.origin.distanceTo(_);w<n.near||w>n.far||a.push({distance:w,point:p.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const A=Math.max(0,d.start),O=Math.min(x.count,d.start+d.count);for(let C=A,U=O-1;C<U;C+=S){if(v.fromBufferAttribute(x,C),g.fromBufferAttribute(x,C+1),Nd.distanceSqToSegment(v,g,_,p)>m)continue;_.applyMatrix4(this.matrixWorld);const H=n.ray.origin.distanceTo(_);H<n.near||H>n.far||a.push({distance:H,point:p.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const l=a[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}const Hy=new Z,Vy=new Z;class SE extends bE{constructor(n,a){super(n,a),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const n=this.geometry;if(n.index===null){const a=n.attributes.position,s=[];for(let l=0,u=a.count;l<u;l+=2)Hy.fromBufferAttribute(a,l),Vy.fromBufferAttribute(a,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Hy.distanceTo(Vy);n.setAttribute("lineDistance",new yi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E_ extends Ja{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const Fy=new Ft,Xd=new Jd,su=new gl,ou=new Z;class ME extends sn{constructor(n=new ri,a=new E_){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,l=this.matrixWorld,u=n.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),su.copy(s.boundingSphere),su.applyMatrix4(l),su.radius+=u,n.ray.intersectsSphere(su)===!1)return;Fy.copy(l).invert(),Xd.copy(n.ray).applyMatrix4(Fy);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,v=s.index,p=s.attributes.position;if(v!==null){const _=Math.max(0,d.start),S=Math.min(v.count,d.start+d.count);for(let E=_,b=S;E<b;E++){const x=v.getX(E);ou.fromBufferAttribute(p,x),ky(ou,x,m,l,n,a,this)}}else{const _=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let E=_,b=S;E<b;E++)ou.fromBufferAttribute(p,E),ky(ou,E,m,l,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const l=a[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function ky(h,n,a,s,l,u,d){const f=Xd.distanceSqToPoint(h);if(f<a){const m=new Z;Xd.closestPointToPoint(h,m),m.applyMatrix4(s);const v=l.ray.origin.distanceTo(m);if(v<l.near||v>l.far)return;u.push({distance:v,distanceToRay:Math.sqrt(f),point:m,index:n,face:null,object:d})}}class vu extends Fn{constructor(n,a,s,l,u,d,f,m,v){super(n,a,s,l,u,d,f,m,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class np extends ri{constructor(n=1,a=1,s=1,l=32,u=1,d=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:n,radiusBottom:a,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:f,thetaLength:m};const v=this;l=Math.floor(l),u=Math.floor(u);const g=[],p=[],_=[],S=[];let E=0;const b=[],x=s/2;let A=0;O(),d===!1&&(n>0&&C(!0),a>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(_,3)),this.setAttribute("uv",new yi(S,2));function O(){const U=new Z,L=new Z;let H=0;const I=(a-n)/s;for(let w=0;w<=u;w++){const P=[],X=w/u,me=X*(a-n)+n;for(let le=0;le<=l;le++){const $=le/l,Y=$*m+f,oe=Math.sin(Y),Q=Math.cos(Y);L.x=me*oe,L.y=-X*s+x,L.z=me*Q,p.push(L.x,L.y,L.z),U.set(oe,I,Q).normalize(),_.push(U.x,U.y,U.z),S.push($,1-X),P.push(E++)}b.push(P)}for(let w=0;w<l;w++)for(let P=0;P<u;P++){const X=b[P][w],me=b[P+1][w],le=b[P+1][w+1],$=b[P][w+1];g.push(X,me,$),g.push(me,le,$),H+=6}v.addGroup(A,H,0),A+=H}function C(U){const L=E,H=new at,I=new Z;let w=0;const P=U===!0?n:a,X=U===!0?1:-1;for(let le=1;le<=l;le++)p.push(0,x*X,0),_.push(0,X,0),S.push(.5,.5),E++;const me=E;for(let le=0;le<=l;le++){const Y=le/l*m+f,oe=Math.cos(Y),Q=Math.sin(Y);I.x=P*Q,I.y=x*X,I.z=P*oe,p.push(I.x,I.y,I.z),_.push(0,X,0),H.x=oe*.5+.5,H.y=Q*.5*X+.5,S.push(H.x,H.y),E++}for(let le=0;le<l;le++){const $=L+le,Y=me+le;U===!0?g.push(Y,Y+1,$):g.push(Y+1,Y,$),w+=3}v.addGroup(A,w,U===!0?1:2),A+=w}}static fromJSON(n){return new np(n.radiusTop,n.radiusBottom,n.height,n.radialSegments,n.heightSegments,n.openEnded,n.thetaStart,n.thetaLength)}}class TE extends Ja{constructor(n){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a_,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class ip extends sn{constructor(n,a=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(n),this.intensity=a}dispose(){}copy(n,a){return super.copy(n,a),this.color.copy(n.color),this.intensity=n.intensity,this}toJSON(n){const a=super.toJSON(n);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),a}}const zd=new Ft,qy=new Z,jy=new Z;class A_{constructor(n){this.camera=n,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(n){const a=this.camera,s=this.matrix;qy.setFromMatrixPosition(n.matrixWorld),a.position.copy(qy),jy.setFromMatrixPosition(n.target.matrixWorld),a.lookAt(jy),a.updateMatrixWorld(),zd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zd)}getViewport(n){return this._viewports[n]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(n){return this.camera=n.camera.clone(),this.bias=n.bias,this.radius=n.radius,this.mapSize.copy(n.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const n={};return this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}}const Wy=new Ft,rl=new Z,Od=new Z;class wE extends A_{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(n,a=0){const s=this.camera,l=this.matrix,u=n.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),rl.setFromMatrixPosition(n.matrixWorld),s.position.copy(rl),Od.copy(s.position),Od.add(this._cubeDirections[a]),s.up.copy(this._cubeUps[a]),s.lookAt(Od),s.updateMatrixWorld(),l.makeTranslation(-rl.x,-rl.y,-rl.z),Wy.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wy)}}class EE extends ip{constructor(n,a,s=0,l=2){super(n,a),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(n){this.intensity=n/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(n,a){return super.copy(n,a),this.distance=n.distance,this.decay=n.decay,this.shadow=n.shadow.clone(),this}}class AE extends A_{constructor(){super(new v_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xy extends ip{constructor(n,a){super(n,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new AE}dispose(){this.shadow.dispose()}copy(n){return super.copy(n),this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}}class CE extends ip{constructor(n,a){super(n,a),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);const DE=["streaks","letters","keycaps","hyperspace"],Yd={variant:"streaks",speed:15,streakOpacity:.6,tileOpacity:.9,fov:75,brightness:1,hue:0,saturation:1},ap=200,Yy=110,Ud=-1200,Zy=140,Bd=-1300,du=-1800,C_="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",RE={streaks:1,letters:.5,keycaps:.7,hyperspace:2.4},Qy={streaks:132106,letters:132106,keycaps:198412,hyperspace:66058};function LE(h,n,a){const s=new ri,l=new Float32Array(n.count*6),u=new Float32Array(n.count*6),d=n.palette.map(g=>new vt(g));for(let g=0;g<n.count;g+=1){const p=Math.random()*Math.PI*2,_=Math.random()*n.radiusSpread+n.radiusMin,S=Math.cos(p)*_,E=Math.sin(p)*_,b=(Math.random()-.5)*2e3,x=Math.random()*n.lengthSpread+n.lengthMin;l[g*6]=S,l[g*6+1]=E,l[g*6+2]=b,l[g*6+3]=S,l[g*6+4]=E,l[g*6+5]=b+x;const A=d[Math.floor(Math.random()*d.length)];u[g*6]=A.r,u[g*6+1]=A.g,u[g*6+2]=A.b,u[g*6+3]=A.r,u[g*6+4]=A.g,u[g*6+5]=A.b}s.setAttribute("position",new kn(l,3)),s.setAttribute("color",new kn(u,3));const f=new w_({vertexColors:!0,transparent:!0,opacity:a*n.opacityScale,blending:Ys}),m=new SE(s,f);h.add(m);const v=s.attributes.position;return{update(g){for(let p=0;p<n.count;p+=1)if(l[p*6+2]+=g,l[p*6+5]+=g,l[p*6+2]>ap){const _=l[p*6+5]-l[p*6+2];l[p*6+2]=du,l[p*6+5]=du+_}v.needsUpdate=!0},setOpacity(g){const p=g*n.opacityScale;f.opacity!==p&&(f.opacity=p)},dispose(){s.dispose(),f.dispose()}}}function NE(h,n){const a=new vl(8,20),s=new eo({color:16777215,transparent:!0,opacity:n,side:Li}),l=[];let u=n;for(let d=0;d<40;d+=1){const f=s.clone();f.color.setHex(Math.random()>.6?11006928:Math.random()>.5?13761253:16777215);const m=new ai(a,f),v=Math.random()*Math.PI*2,g=Math.random()*400+100;m.position.x=Math.cos(v)*g,m.position.y=Math.sin(v)*g,m.position.z=(Math.random()-.5)*2e3,m.lookAt(0,0,m.position.z+100);const p=Math.random()*1.5+.5;m.scale.set(p,p,p),h.add(m),l.push(m)}return{update(d){l.forEach(f=>{f.position.z+=d,f.position.z>ap&&(f.position.z=du)})},setOpacity(d,f){u!==f&&(l.forEach(m=>{m.material.opacity=f}),u=f)},dispose(){a.dispose(),s.dispose(),l.forEach(d=>d.material.dispose())}}}function D_(h){const l=document.createElement("canvas");l.width=768,l.height=768;const u=l.getContext("2d");u&&(u.fillStyle=h,u.font=`700 ${Math.round(128*.68)}px ui-monospace, "SF Mono", Menlo, Consolas, monospace`,u.textAlign="center",u.textBaseline="middle",C_.split("").forEach((f,m)=>{const v=m%6,g=Math.floor(m/6);u.fillText(f,v*128+128/2,g*128+128*.54)}));const d=new vu(l);return d.minFilter=ei,{texture:d,columns:6,rows:6}}function R_(h){return C_.split("").map((n,a)=>{const s=new vl(1,1),l=a%h.columns,u=Math.floor(a/h.columns),d=l/h.columns,f=1-(u+1)/h.rows,m=s.attributes.uv;for(let v=0;v<m.count;v+=1)m.setXY(v,d+m.getX(v)/h.columns,f+m.getY(v)/h.rows);return m.needsUpdate=!0,s})}function zE(h,n){const a=D_("#ffffff"),s=R_(a),l=[16777215,11006928,3462041].map(f=>new eo({map:a.texture,color:f,transparent:!0,opacity:n,depthWrite:!1,side:Li})),u=[];let d=n;for(let f=0;f<260;f+=1){const m=new ai(s[Math.floor(Math.random()*s.length)],l[Math.floor(Math.random()*l.length)]),v=Math.random()*Math.PI*2,g=Math.random()*430+60;m.position.set(Math.cos(v)*g,Math.sin(v)*g,Bd+Math.random()*(Zy-Bd));const p=Math.random()*30+24;m.scale.set(p,p,p),h.add(m),u.push({mesh:m,spin:(Math.random()-.5)*.02,swayX:Math.random()*.5+.2,swayY:Math.random()*.6+.2,phase:Math.random()*Math.PI*2,drift:Math.random()*.9+.2,radius:g})}return{update(f,m){u.forEach(v=>{const{mesh:g}=v;g.position.z+=f;const p=m*v.drift+v.phase;if(g.position.x+=Math.cos(p)*v.drift*.9,g.position.y+=Math.sin(p*.8)*v.drift*.9,g.rotation.z+=v.spin,g.rotation.x=Math.sin(p*.6)*v.swayX,g.rotation.y=Math.cos(p*.5)*v.swayY,g.position.z>Zy){const _=Math.random()*Math.PI*2,S=Math.random()*430+60;g.position.set(Math.cos(_)*S,Math.sin(_)*S,Bd)}})},setOpacity(f,m){d!==m&&(l.forEach(v=>{v.opacity=m}),d=m)},dispose(){s.forEach(f=>f.dispose()),l.forEach(f=>f.dispose()),a.texture.dispose()}}}function OE(h,n,a){const s=new to(h,n,a),l=s.attributes.position;for(let u=0;u<l.count;u+=1)l.getY(u)>0&&l.setXYZ(u,l.getX(u)*.78,l.getY(u),l.getZ(u)*.78);return l.needsUpdate=!0,s.computeVertexNormals(),s}function UE(){const n=document.createElement("canvas");n.width=64,n.height=64;const a=n.getContext("2d");if(a){const s=a.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.4,"rgba(255,255,255,0.5)"),s.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=s,a.fillRect(0,0,64,64)}return new vu(n)}function BE(h,n,a,s,l,u){const d=new ri,f=new Float32Array(n*3);for(let _=0;_<n;_+=1){const S=Math.random()*Math.PI*2,E=Math.random()*u+20;f[_*3]=Math.cos(S)*E,f[_*3+1]=Math.sin(S)*E,f[_*3+2]=(Math.random()-.5)*2e3}d.setAttribute("position",new kn(f,3));const m=UE(),v=new E_({map:m,color:s,size:a,transparent:!0,opacity:l,blending:Ys,depthWrite:!1,sizeAttenuation:!0}),g=new ME(d,v);h.add(g);const p=d.attributes.position;return{positions:f,count:n,material:v,update(_){for(let S=0;S<n;S+=1)f[S*3+2]+=_,f[S*3+2]>ap&&(f[S*3+2]=du);p.needsUpdate=!0},dispose(){d.dispose(),v.dispose(),m.dispose()}}}function PE(h,n,a){const s=D_("#ffffff"),l=R_(s),u=OE(26,14,26),d=[4016196,5266519,2831409].map(b=>new TE({color:b,emissive:200971,transparent:!0,opacity:a})),f=[10352079,16777215].map(b=>new eo({map:s.texture,color:b,transparent:!0,opacity:a,depthWrite:!1,side:Li})),m=new CE(989719,1),v=new Xy(16056315,1.9);v.position.set(.4,1,.7);const g=new Xy(3462041,.45);g.position.set(-.7,-.4,.5);const p=new EE(1096065,.8,900);p.position.set(0,0,140),h.add(m,v,g,p);const _=[];let S=a;for(let b=0;b<95;b+=1){const x=new ai(u,d[Math.floor(Math.random()*d.length)]),A=new ai(l[Math.floor(Math.random()*l.length)],f[Math.floor(Math.random()*f.length)]);A.scale.set(15,15,15),A.position.y=7.2,A.rotation.x=-Math.PI/2,x.add(A);const O=Math.random()*Math.PI*2,C=Math.random()*430+130;x.position.set(Math.cos(O)*C,Math.sin(O)*C,Ud+Math.random()*(Yy-Ud)),x.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const U=Math.random()*1.15+.8;x.scale.set(U,U,U),n.add(x),_.push({mesh:x,spin:(Math.random()-.5)*.03,swayX:(Math.random()-.5)*.026,swayY:(Math.random()-.5)*.03,phase:0,drift:0,radius:C})}const E=BE(n,750,7,7268279,a,620);return{update(b){_.forEach(x=>{if(x.mesh.position.z+=b,x.mesh.rotation.x+=x.swayX,x.mesh.rotation.y+=x.swayY,x.mesh.rotation.z+=x.spin,x.mesh.position.z>Yy){const A=Math.random()*Math.PI*2,O=Math.random()*430+130;x.mesh.position.set(Math.cos(A)*O,Math.sin(A)*O,Ud)}}),E.update(b*1.35)},setOpacity(b,x){E.material.opacity!==b&&(E.material.opacity=b),S!==x&&(d.forEach(A=>{A.opacity=x}),f.forEach(A=>{A.opacity=x}),S=x)},dispose(){u.dispose(),l.forEach(b=>b.dispose()),d.forEach(b=>b.dispose()),f.forEach(b=>b.dispose()),s.texture.dispose(),E.dispose(),h.remove(m,v,g,p)}}}function GE(){const n=document.createElement("canvas");n.width=512,n.height=512;const a=n.getContext("2d");if(a){a.fillStyle="#000000",a.fillRect(0,0,512,512);for(let l=0;l<240;l+=1){const u=Math.random()*512,d=Math.random()*3+.6,f=Math.random()*320+90,m=Math.random()*512,v=(Math.random()*.45+.08).toFixed(3);for(const g of[-512,0,512]){const p=a.createLinearGradient(0,m+g,0,m+g+f);p.addColorStop(0,"rgba(191,219,254,0)"),p.addColorStop(.5,`rgba(224,238,255,${v})`),p.addColorStop(1,"rgba(147,197,253,0)"),a.fillStyle=p,a.fillRect(u,m+g,d,f)}}}const s=new vu(n);return s.wrapS=ul,s.wrapT=ul,s.repeat.set(4,2),s}function IE(){const n=document.createElement("canvas");n.width=256,n.height=256;const a=n.getContext("2d");if(a){const s=a.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.18,"rgba(219,234,254,0.55)"),s.addColorStop(.45,"rgba(96,165,250,0.16)"),s.addColorStop(1,"rgba(2,6,23,0)"),a.fillStyle=s,a.fillRect(0,0,256,256)}return new vu(n)}function HE(h,n){const a=GE(),s=new np(900,240,3e3,64,1,!0);s.rotateX(Math.PI/2);const l=new eo({map:a,side:Vn,transparent:!0,opacity:n*.6,blending:Ys,depthWrite:!1}),u=new ai(s,l);u.position.z=-1400,h.add(u);const d=IE(),f=new M_({map:d,transparent:!0,opacity:n,blending:Ys,depthWrite:!1}),m=new xE(f);m.position.z=-900,m.scale.set(760,760,1),h.add(m);let v=n;return{update(g,p){a.offset.y-=g*.0016,u.rotation.z+=.0016;const _=1+Math.sin(p*1.6)*.06;m.scale.set(760*_,760*_,1)},setOpacity(g,p){v!==p&&(l.opacity=p*.6,f.opacity=p,v=p)},dispose(){s.dispose(),l.dispose(),a.dispose(),f.dispose(),d.dispose()}}}const VE={streaks:{count:400,radiusMin:20,radiusSpread:800,lengthMin:50,lengthSpread:150,palette:[1096065,366185,3462041,16777215],opacityScale:1},letters:{count:260,radiusMin:20,radiusSpread:800,lengthMin:40,lengthSpread:120,palette:[1096065,366185,3462041,16777215],opacityScale:1},keycaps:{count:220,radiusMin:20,radiusSpread:800,lengthMin:40,lengthSpread:140,palette:[1096065,3462041,11006928,16777215],opacityScale:1},hyperspace:{count:1200,radiusMin:6,radiusSpread:760,lengthMin:170,lengthSpread:420,palette:[16777215,14412542,9684477,6333946,13095678],opacityScale:1.45}};function FE(h,n){const a=n(),s=DE.includes(a.variant)?a.variant:Yd.variant,l=new yE;l.background=new vt(Qy[s]),l.fog=new tp(Qy[s],.001);const u=new ni(75,1,.1,2e3);u.position.z=0;const d=new S_({canvas:h,alpha:!0,antialias:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const f=new cl;l.add(f);const m=[LE(f,VE[s],a.streakOpacity)];s==="streaks"&&m.push(NE(f,a.tileOpacity)),s==="letters"&&m.push(zE(f,a.tileOpacity)),s==="keycaps"&&m.push(PE(l,f,a.tileOpacity)),s==="hyperspace"&&m.push(HE(f,a.tileOpacity));let v=0;return{resize(g,p){u.aspect=g/Math.max(1,p),u.updateProjectionMatrix(),d.setSize(g,p,!1)},render(){const g=n();u.fov!==g.fov&&(u.fov=g.fov,u.updateProjectionMatrix()),v+=1/60;const p=g.speed*RE[s];m.forEach(_=>{_.setOpacity?.(g.streakOpacity,g.tileOpacity),_.update?.(p,v)}),d.render(l,u)},dispose(){m.forEach(g=>g.dispose()),d.dispose()}}}function kE({className:h="",...n}){const a=_t.useRef(null),s=_t.useRef(null),l=_t.useRef({...Yd,...n});return l.current={...Yd,...n},_t.useEffect(()=>{const u=a.current,d=s.current;if(!u||!d)return;const f=FE(d,()=>l.current);let m=0,v=!0;const g=()=>{const E=u.getBoundingClientRect();f.resize(E.width,E.height),f.render()},p=()=>{f.render(),m=v&&!document.hidden?requestAnimationFrame(p):0},_=new ResizeObserver(g),S=new IntersectionObserver(([E])=>{v=E?.isIntersecting??!0,v&&!m&&(m=requestAnimationFrame(p)),!v&&m&&(cancelAnimationFrame(m),m=0)});return _.observe(u),S.observe(u),g(),m=requestAnimationFrame(p),()=>{m&&cancelAnimationFrame(m),_.disconnect(),S.disconnect(),f.dispose()}},[]),B.jsx("div",{ref:a,className:`threeui-background warp-field${h?` ${h}`:""}`,children:B.jsx("canvas",{ref:s,style:{filter:`hue-rotate(${l.current.hue}deg) saturate(${l.current.saturation}) brightness(${l.current.brightness})`}})})}const qE=`# A2\r
\r
## A2.1. Động từ nền\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| agree | đồng ý | agree with someone | I agree with this idea. |\r
| answer | trả lời | answer a question | Can you answer this question? |\r
| arrive | đến | arrive at school, arrive home | I usually arrive at school at 7 a.m. |\r
| believe | tin | believe that | I believe that education is important. |\r
| borrow | mượn | borrow a book | Can I borrow your book? |\r
| bring | mang đến | bring something to somewhere | Please bring your notebook to class. |\r
| build | xây dựng | build a house, build a habit | I want to build a good study habit. |\r
| carry | mang, vác | carry a bag | She is carrying a heavy bag. |\r
| choose | chọn | choose between A and B | Students can choose their own subjects. |\r
| collect | thu thập | collect information, collect rubbish | We need to collect more information. |\r
| compare | so sánh | compare A with B | The report compares two different schools. |\r
| continue | tiếp tục | continue doing something | She continued studying after dinner. |\r
| decide | quyết định | decide to do something | I decided to learn English seriously. |\r
| describe | mô tả | describe a place | Can you describe your hometown? |\r
| discover | khám phá | discover something new | Travel helps people discover new cultures. |\r
| discuss | thảo luận | discuss a problem | We discussed the problem in class. |\r
| explain | giải thích | explain something to someone | The teacher explained the grammar clearly. |\r
| fail | thất bại/trượt | fail an exam | He failed the exam because he did not study. |\r
| fill | làm đầy/điền | fill in a form | Please fill in this form. |\r
| follow | đi theo/tuân theo | follow instructions | Students should follow the instructions. |\r
| forget | quên | forget to do something | Do not forget to review your vocabulary. |\r
| happen | xảy ra | happen to someone | Accidents can happen at any time. |\r
| improve | cải thiện | improve skills, improve quality | Practice can improve your speaking skills. |\r
| include | bao gồm | include something | The price includes breakfast. |\r
| introduce | giới thiệu | introduce someone to someone | The teacher introduced a new topic. |\r
| invite | mời | invite someone to somewhere | She invited me to her birthday party. |\r
| join | tham gia | join a club, join a class | I joined an English-speaking club. |\r
| lend | cho mượn | lend something to someone | Can you lend me your pen? |\r
| manage | xoay xở/quản lý | manage to do something | I managed to finish the assignment. |\r
| mention | đề cập | mention a problem | The article mentions several problems. |\r
| offer | đề nghị/cung cấp | offer help, offer a service | The school offers free English classes. |\r
| prepare | chuẩn bị | prepare for an exam | I am preparing for my final exam. |\r
| protect | bảo vệ | protect the environment | Everyone should protect the environment. |\r
| realize | nhận ra | realize that | I realized that I needed more practice. |\r
| receive | nhận | receive an email, receive help | I received useful feedback from my teacher. |\r
| recommend | khuyên/giới thiệu | recommend doing something | I recommend reading short articles. |\r
| refuse | từ chối | refuse to do something | He refused to answer the question. |\r
| remember | nhớ | remember to do something | Remember to review old words. |\r
| repeat | lặp lại | repeat a word, repeat a sentence | Please repeat the sentence slowly. |\r
| replace | thay thế | replace A with B | Many people replace books with online materials. |\r
| require | yêu cầu | require time, require skills | Learning a language requires patience. |\r
| return | trả lại/quay lại | return a book, return home | Please return the book next week. |\r
| share | chia sẻ | share information, share an idea | Students can share their ideas. |\r
| suggest | đề nghị | suggest doing something | I suggest studying a little every day. |\r
| treat | đối xử/điều trị | treat someone well, treat a disease | Parents should treat children with respect. |\r
| avoid | tránh | avoid doing something | Try to avoid translating every word. |\r
| waste | lãng phí | waste time, waste money | Do not waste time memorising useless words. |\r
\r
## A2.2. Từ về số lượng, mức độ và thay đổi\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| amount | lượng, số lượng không đếm được | a large amount of water | A large amount of water is wasted every day. |\r
| number | số lượng đếm được | a large number of people | A large number of students use the internet. |\r
| enough | đủ | enough time, good enough | I do not have enough time today. |\r
| several | một vài, nhiều hơn two | several reasons | There are several reasons for this problem. |\r
| most | hầu hết | most people, most of the time | Most people use smartphones every day. |\r
| whole | toàn bộ | the whole day | I spent the whole day studying. |\r
| half | một nửa | half of the students | Half of the students chose this answer. |\r
| nearly | gần như | nearly half, nearly finished | Nearly half of the class was absent. |\r
| especially | đặc biệt là | especially important | Sleep is especially important for teenagers. |\r
| mainly | chủ yếu | mainly because | The problem exists mainly because of poverty. |\r
| almost | gần như | almost every day | I study English almost every day. |\r
| often | thường xuyên | often used | This word is often used in IELTS. |\r
| rarely | hiếm khi | rarely happen | Serious accidents rarely happen here. |\r
| gradually | dần dần | gradually improve | My reading speed is gradually improving. |\r
| quickly | nhanh chóng | change quickly | Technology changes quickly. |\r
| slowly | chậm rãi | speak slowly | Please speak slowly. |\r
| increase | tăng | increase by, increase in | The number of students increased last year. |\r
| decrease | giảm | decrease by, decrease in | The number of smokers has decreased. |\r
| rise | tăng lên | prices rise | Food prices continue to rise. |\r
| fall | giảm xuống | prices fall | The price fell by ten percent. |\r
| grow | tăng trưởng/phát triển | grow rapidly | The city is growing rapidly. |\r
| become | trở nên | become popular | Online learning has become popular. |\r
| remain | vẫn còn | remain stable | The number remained stable. |\r
| change | thay đổi | change over time | People's habits change over time. |\r
| different | khác nhau | different from | These two methods are very different. |\r
| similar | tương tự | similar to | The two opinions are similar. |\r
| common | phổ biến | common problem | Stress is a common problem among students. |\r
| unusual | bất thường/hiếm | unusual situation | This is an unusual situation. |\r
| possible | có thể | possible solution | We need to find a possible solution. |\r
| impossible | không thể | impossible to do | It is impossible to learn everything in one day. |\r
\r
## A2.3. Từ nối và từ chức năng\r
\r
| Từ/cụm | Nghĩa | Cách dùng | Câu mẫu |\r
|---|---|---|---|\r
| although | mặc dù | although + clause | Although English is difficult, I enjoy learning it. |\r
| however | tuy nhiên | nối hai ý trái ngược | The course is useful. However, it is expensive. |\r
| therefore | vì vậy | chỉ kết quả | The road was flooded; therefore, we stayed home. |\r
| also | cũng | thêm thông tin | The job is well-paid and also interesting. |\r
| too | cũng/quá | cuối câu hoặc trước tính từ | The lesson was too difficult for me. |\r
| either | cũng không | câu phủ định | I do not like this method either. |\r
| instead | thay vào đó | thay thế một lựa chọn | I read at home instead of going out. |\r
| while | trong khi/mặc dù | hai việc hoặc đối lập | Some students study while others work. |\r
| when | khi | thời gian | I listen to English when I travel. |\r
| before | trước khi | thời gian | Review the words before you sleep. |\r
| after | sau khi | thời gian | I write sentences after learning new words. |\r
| unless | trừ khi | điều kiện phủ định | You will not improve unless you practise. |\r
| if | nếu | điều kiện | If I have time, I will read more. |\r
| so | vì vậy | nguyên nhân-kết quả | I was tired, so I went to bed early. |\r
| because | bởi vì | nêu lý do | I study English because I need it for work. |\r
| because of | bởi vì | đi với danh từ | The match was cancelled because of heavy rain. |\r
| as a result | kết quả là | nêu kết quả | He practised every day. As a result, he improved quickly. |\r
| for example | ví dụ | đưa ví dụ | Some hobbies, for example reading, are cheap. |\r
| such as | chẳng hạn như | đưa danh sách ví dụ | I enjoy activities such as walking and swimming. |\r
| in addition | ngoài ra | thêm ý | In addition, the course provides speaking practice. |\r
| first of all | trước hết | mở ý đầu | First of all, students need a quiet place to study. |\r
| finally | cuối cùng | ý cuối | Finally, they agreed on a solution. |\r
| in fact | thực tế là | nhấn mạnh sự thật | In fact, many people prefer online learning. |\r
| in my opinion | theo ý kiến của tôi | nêu ý kiến | In my opinion, public transport should be cheaper. |\r
| at least | ít nhất | mức tối thiểu | Study for at least thirty minutes a day. |\r
| rather than | thay vì | lựa chọn A thay cho B | I prefer reading rather than watching videos. |\r
| both | cả hai | both A and B | Both parents and teachers should help children. |\r
| either...or | hoặc...hoặc | hai lựa chọn | Students can either study online or attend a class. |\r
| neither...nor | không...cũng không | hai điều phủ định | Neither method is perfect. |\r
\r
## A2.4. Cụm động từ phải học\r
\r
| Cụm | Nghĩa | Câu mẫu |\r
|---|---|---|\r
| look for | tìm kiếm | I am looking for a simple English book. |\r
| look after | chăm sóc | Parents look after their children. |\r
| look at | nhìn vào/xem xét | Look at the example carefully. |\r
| find out | tìm ra | I want to find out why I made this mistake. |\r
| give up | từ bỏ | Do not give up when English feels difficult. |\r
| grow up | lớn lên | I grew up in a small town. |\r
| wake up | thức dậy | I wake up at six every morning. |\r
| pick up | nhặt lên/học được | I picked up some new words from the video. |\r
| turn on | bật | Turn on the audio, please. |\r
| turn off | tắt | Turn off your phone during the lesson. |\r
| turn into | biến thành | The small town turned into a busy city. |\r
| take part in | tham gia | Students should take part in school activities. |\r
| take care of | chăm sóc | We must take care of our mental health. |\r
| take place | diễn ra | The event will take place next week. |\r
| take time | mất thời gian | Learning vocabulary takes time. |\r
| make a mistake | mắc lỗi | Everyone makes mistakes when learning. |\r
| make progress | tiến bộ | I am making progress in reading. |\r
| make a decision | đưa ra quyết định | The government needs to make a decision. |\r
| have an effect on | có ảnh hưởng đến | Sleep has an effect on memory. |\r
| pay attention to | chú ý đến | Pay attention to the verb tense. |\r
| spend time doing | dành thời gian làm gì | I spend time reading every evening. |\r
| be interested in | quan tâm/thích | I am interested in environmental issues. |\r
| be good at | giỏi | She is good at explaining ideas. |\r
| be afraid of | sợ | Many learners are afraid of making mistakes. |\r
| be responsible for | chịu trách nhiệm về | Governments are responsible for public safety. |\r
| be similar to | tương tự | This exercise is similar to the test. |\r
\r
## A2.5. Đời sống hằng ngày và giao tiếp\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| advice | lời khuyên | give advice, ask for advice | My teacher gave me useful advice. |\r
| appointment | cuộc hẹn | make an appointment | I made an appointment with the doctor. |\r
| area | khu vực | residential area, local area | This is a quiet residential area. |\r
| behaviour | hành vi | good behaviour, change behaviour | Parents should teach children good behaviour. |\r
| choice | sự lựa chọn | make a choice, have a choice | Everyone has a choice. |\r
| conversation | cuộc trò chuyện | have a conversation | We had a short conversation after class. |\r
| decision | quyết định | make a decision | I need more time to make a decision. |\r
| direction | phương hướng/chỉ đường | ask for directions | We asked for directions to the station. |\r
| event | sự kiện | attend an event | I attended a school event yesterday. |\r
| example | ví dụ | give an example, for example | Can you give an example? |\r
| experience | trải nghiệm/kinh nghiệm | gain experience | Travel gives young people valuable experience. |\r
| habit | thói quen | develop a habit, break a habit | Reading is a useful habit. |\r
| idea | ý tưởng | have an idea, a good idea | I have an idea for our project. |\r
| information | thông tin | find information, useful information | I found the information online. |\r
| language | ngôn ngữ | learn a language, body language | Learning a language takes time. |\r
| message | tin nhắn/thông điệp | send a message | I sent him a message this morning. |\r
| mistake | lỗi | make a mistake, correct a mistake | Everyone makes mistakes when learning. |\r
| opinion | ý kiến | give an opinion, personal opinion | In my opinion, the plan is useful. |\r
| request | yêu cầu | make a request, special request | The customer made a special request. |\r
| rule | quy tắc | follow a rule, break a rule | Students must follow the school rules. |\r
| situation | tình huống | difficult situation | We should stay calm in a difficult situation. |\r
| voice | giọng nói | speak in a loud voice | Please speak in a clear voice. |\r
| worried | lo lắng | feel worried about | She feels worried about the exam. |\r
| surprised | ngạc nhiên | be surprised by | I was surprised by the result. |\r
| polite | lịch sự | be polite to someone | It is important to be polite to others. |\r
| honest | trung thực | be honest with someone | You should be honest with your teacher. |\r
| patient | kiên nhẫn | be patient with | Try to be patient with yourself. |\r
| ready | sẵn sàng | be ready for | I am ready for the test. |\r
| available | có sẵn/rảnh | be available, available online | The course is available online. |\r
| local | địa phương | local people, local food | Tourists should respect local people. |\r
| popular | phổ biến | become popular | Online shopping has become popular. |\r
| useful | hữu ích | useful information, useful skill | This is a useful skill for students. |\r
| usual | thường lệ | as usual | He arrived late as usual. |\r
| in front of | ở phía trước | stand in front of | The teacher stood in front of the class. |\r
| next to | bên cạnh | sit next to | I sat next to my friend. |\r
| get used to | quen với | get used to doing something | I am getting used to speaking English. |\r
\r
---\r
\r
# B1\r
\r
## B1.1. Nguyên nhân, kết quả và giải pháp\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| cause | nguyên nhân/gây ra | cause serious problems | Lack of sleep can cause health problems. |\r
| reason | lý do | main reason | The main reason is the high cost. |\r
| result | kết quả | result in, as a result | Heavy traffic results in delays. |\r
| effect | tác động | have an effect on | Noise has a negative effect on health. |\r
| impact | ảnh hưởng | have an impact on | Technology has a major impact on education. |\r
| consequence | hậu quả | serious consequences | Pollution has serious consequences. |\r
| lead to | dẫn đến | lead to stress | Too much work can lead to stress. |\r
| result in | dẫn đến | result in higher costs | The policy may result in higher costs. |\r
| result from | bắt nguồn từ | result from poverty | Many problems result from poverty. |\r
| contribute to | góp phần vào | contribute to pollution | Cars contribute to air pollution. |\r
| prevent | ngăn chặn | prevent disease | Exercise can prevent some diseases. |\r
| reduce | giảm | reduce the risk | Exercise can reduce the risk of illness. |\r
| solve | giải quyết | solve a problem | Education can help solve social problems. |\r
| deal with | giải quyết/đối phó | deal with stress | Students need to deal with stress. |\r
| tackle | xử lý, giải quyết | tackle climate change | Governments must tackle climate change. |\r
| address | giải quyết một vấn đề | address the problem | The policy addresses the problem of unemployment. |\r
| avoid | tránh | avoid unnecessary costs | People should avoid unnecessary spending. |\r
| provide | cung cấp | provide support | Schools should provide support for learners. |\r
| offer | cung cấp/đề nghị | offer opportunities | The programme offers new opportunities. |\r
| encourage | khuyến khích | encourage healthy habits | Parents should encourage healthy habits. |\r
| allow | cho phép | allow people to work | Technology allows people to work remotely. |\r
| enable | giúp cho có thể | enable students to learn | The internet enables students to access information. |\r
| support | hỗ trợ | support local businesses | Tourists support local businesses. |\r
| promote | thúc đẩy | promote equality | Education can promote social equality. |\r
| recommend | khuyến nghị | recommend that | Experts recommend that people exercise regularly. |\r
| solution | giải pháp | practical solution | Public transport is a practical solution. |\r
| measure | biện pháp | take measures | The government should take measures to reduce pollution. |\r
| approach | cách tiếp cận | effective approach | This is an effective approach to language learning. |\r
| method | phương pháp | learning method | Different learners need different methods. |\r
| strategy | chiến lược | study strategy | Spaced repetition is a useful study strategy. |\r
\r
## B1.2. Giáo dục và học tập\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| education | giáo dục | receive an education | Every child should receive a good education. |\r
| primary education | giáo dục tiểu học | primary education system | Primary education should be free. |\r
| secondary education | giáo dục trung học | secondary school students | Secondary education prepares students for work or university. |\r
| higher education | giáo dục đại học | access to higher education | More students now have access to higher education. |\r
| vocational training | đào tạo nghề | provide vocational training | Vocational training gives people practical skills. |\r
| curriculum | chương trình học | school curriculum | The curriculum should include life skills. |\r
| subject | môn học/chủ đề | school subject | Maths was my favourite subject. |\r
| assignment | bài tập được giao | complete an assignment | I completed the assignment before the deadline. |\r
| coursework | bài tập trong khóa học | submit coursework | Students must submit their coursework on time. |\r
| lecture | bài giảng | attend a lecture | I attended a lecture about climate change. |\r
| concentration | sự tập trung | improve concentration | Exercise can improve concentration. |\r
| knowledge | kiến thức | gain knowledge | Reading helps people gain knowledge. |\r
| information | thông tin | access information | Students can access information online. |\r
| skill | kỹ năng | develop a skill | Practice helps learners develop their skills. |\r
| ability | khả năng | ability to do something | The course improves students' ability to communicate. |\r
| progress | sự tiến bộ | make progress | I am making progress in grammar. |\r
| performance | kết quả thể hiện | academic performance | Sleep affects academic performance. |\r
| qualification | bằng cấp/trình độ | professional qualification | A qualification can improve employment opportunities. |\r
| degree | bằng đại học | obtain a degree | She obtained a degree in biology. |\r
| certificate | chứng chỉ | receive a certificate | He received a certificate after the course. |\r
| deadline | hạn chót | meet a deadline | I must meet the deadline tomorrow. |\r
| assessment | sự đánh giá | regular assessment | Regular assessment can show students' progress. |\r
| feedback | phản hồi | receive feedback | Feedback helps me improve my writing. |\r
| revise | ôn tập/chỉnh sửa | revise for an exam | I need to revise for the exam. |\r
| memorise | ghi nhớ | memorise vocabulary | Do not only memorise vocabulary; use it. |\r
| understand | hiểu | understand a sentence | I can understand the main idea. |\r
| explain | giải thích | explain an idea | Students should explain their answers. |\r
| analyse | phân tích | analyse a text | We need to analyse the writer's opinion. |\r
| research | nghiên cứu | conduct research | Researchers conducted research on sleep. |\r
| academic | học thuật | academic writing | Academic writing requires clear organisation. |\r
| practical | thực tế | practical knowledge | Schools should teach practical knowledge. |\r
| independent | độc lập | independent learner | An independent learner studies without constant help. |\r
| motivated | có động lực | highly motivated | Motivated students usually practise more. |\r
| disciplined | có kỷ luật | disciplined learner | A disciplined learner follows a regular schedule. |\r
\r
## B1.3. Sức khỏe, lối sống và con người\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| health | sức khỏe | physical health | Regular exercise improves physical health. |\r
| mental health | sức khỏe tinh thần | protect mental health | Students should protect their mental health. |\r
| physical health | sức khỏe thể chất | improve physical health | A healthy diet improves physical health. |\r
| disease | bệnh | prevent disease | Vaccines can prevent disease. |\r
| illness | sự ốm/bệnh | serious illness | Stress can contribute to illness. |\r
| treatment | sự điều trị | medical treatment | Some patients need long-term treatment. |\r
| diet | chế độ ăn | healthy diet | A healthy diet provides energy. |\r
| nutrition | dinh dưỡng | good nutrition | Children need good nutrition. |\r
| habit | thói quen | develop a habit | I am trying to develop a reading habit. |\r
| lifestyle | lối sống | healthy lifestyle | A healthy lifestyle reduces health risks. |\r
| routine | thói quen hằng ngày | daily routine | My daily routine includes thirty minutes of reading. |\r
| stress | căng thẳng | reduce stress | Walking can reduce stress. |\r
| pressure | áp lực | face pressure | Teenagers often face academic pressure. |\r
| sleep | giấc ngủ | get enough sleep | Students need to get enough sleep. |\r
| rest | nghỉ ngơi | take a rest | You should take a rest after studying. |\r
| exercise | tập thể dục | regular exercise | Regular exercise is good for the heart. |\r
| obesity | béo phì | childhood obesity | Poor diets can contribute to obesity. |\r
| addiction | sự nghiện | internet addiction | Internet addiction can affect study. |\r
| patient | kiên nhẫn/bệnh nhân | be patient, a patient | Language learners need to be patient. |\r
| confident | tự tin | feel confident | Practice makes me feel more confident. |\r
| nervous | lo lắng | feel nervous | I feel nervous before speaking tests. |\r
| effective | hiệu quả | effective treatment | This is an effective way to reduce stress. |\r
| harmful | có hại | harmful to health | Smoking is harmful to health. |\r
| beneficial | có lợi | beneficial for children | Outdoor activities are beneficial for children. |\r
| balanced | cân bằng | balanced diet | A balanced diet contains different nutrients. |\r
\r
## B1.4. Môi trường, thành phố và giao thông\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| environment | môi trường | protect the environment | We must protect the environment. |\r
| environmental | thuộc môi trường | environmental damage | The factory causes environmental damage. |\r
| pollution | ô nhiễm | air pollution | Air pollution is dangerous for children. |\r
| waste | rác thải/lãng phí | reduce waste | Recycling helps reduce waste. |\r
| rubbish | rác | collect rubbish | Volunteers collected rubbish from the beach. |\r
| plastic | nhựa | plastic waste | Plastic waste harms marine life. |\r
| climate | khí hậu | change in climate | Changes in climate affect farming. |\r
| climate change | biến đổi khí hậu | tackle climate change | Countries must tackle climate change. |\r
| global warming | nóng lên toàn cầu | cause global warming | Greenhouse gases cause global warming. |\r
| energy | năng lượng | save energy | Turning off lights helps save energy. |\r
| renewable energy | năng lượng tái tạo | invest in renewable energy | Governments should invest in renewable energy. |\r
| natural resource | tài nguyên thiên nhiên | use natural resources | We should use natural resources carefully. |\r
| forest | rừng | protect forests | Forests absorb carbon dioxide. |\r
| deforestation | phá rừng | stop deforestation | Deforestation destroys animal habitats. |\r
| wildlife | động vật hoang dã | protect wildlife | National parks protect wildlife. |\r
| ecosystem | hệ sinh thái | damage an ecosystem | Pollution can damage an ecosystem. |\r
| sustainable | bền vững | sustainable development | Cities need sustainable development. |\r
| recycle | tái chế | recycle paper | People should recycle more paper and plastic. |\r
| reuse | tái sử dụng | reuse bags | We can reuse shopping bags. |\r
| public transport | phương tiện công cộng | use public transport | Public transport reduces traffic. |\r
| private car | xe cá nhân | use a private car | Too many private cars cause congestion. |\r
| traffic congestion | tắc nghẽn giao thông | reduce congestion | Better buses can reduce traffic congestion. |\r
| pedestrian | người đi bộ | pedestrian area | The city built a new pedestrian area. |\r
| neighbourhood | khu dân cư | local neighbourhood | My neighbourhood is quiet and safe. |\r
| urban | thuộc đô thị | urban areas | Urban areas have more jobs. |\r
| rural | thuộc nông thôn | rural communities | Rural communities may lack hospitals. |\r
| infrastructure | cơ sở hạ tầng | transport infrastructure | The city needs better infrastructure. |\r
| crowded | đông đúc | crowded city | Big cities are often crowded. |\r
| convenient | tiện lợi | convenient location | Public transport is convenient. |\r
| affordable | vừa túi tiền | affordable housing | Cities need more affordable housing. |\r
\r
## B1.5. Công việc, xã hội và công nghệ\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| employment | việc làm | employment opportunities | Education creates employment opportunities. |\r
| unemployment | thất nghiệp | reduce unemployment | Training can reduce unemployment. |\r
| employee | nhân viên | full-time employee | Each employee receives training. |\r
| employer | người sử dụng lao động | large employer | The company is a major local employer. |\r
| salary | lương | receive a salary | She receives a good salary. |\r
| income | thu nhập | low income | Low-income families need support. |\r
| career | sự nghiệp | career choice | English can help with career choices. |\r
| workplace | nơi làm việc | safe workplace | Everyone deserves a safe workplace. |\r
| teamwork | làm việc nhóm | develop teamwork | Group projects develop teamwork. |\r
| communication | giao tiếp | communication skills | Good communication prevents misunderstandings. |\r
| responsibility | trách nhiệm | take responsibility | People should take responsibility for their actions. |\r
| opportunity | cơ hội | job opportunity | English provides more job opportunities. |\r
| technology | công nghệ | modern technology | Modern technology changes our lives. |\r
| device | thiết bị | electronic device | Most students own an electronic device. |\r
| screen time | thời gian dùng màn hình | limit screen time | Parents should limit children's screen time. |\r
| social media | mạng xã hội | use social media | Social media can connect people. |\r
| website | trang web | visit a website | I found the information on a reliable website. |\r
| online | trực tuyến | study online | Many people study online. |\r
| digital | kỹ thuật số | digital skills | Digital skills are important at work. |\r
| access | tiếp cận/truy cập | access information | The internet gives people access to information. |\r
| privacy | quyền riêng tư | protect privacy | Users should protect their privacy online. |\r
| reliable | đáng tin cậy | reliable source | Always use a reliable source. |\r
| convenient | thuận tiện | convenient service | Online banking is a convenient service. |\r
| expensive | đắt | expensive equipment | Some technology is too expensive for poor families. |\r
\r
## B1.6. Từ vựng mở rộng cho IELTS\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| access | sự tiếp cận/truy cập | access to education | All children should have access to education. |\r
| achievement | thành tựu | academic achievement | Hard work can lead to academic achievement. |\r
| advantage | lợi thế | have an advantage | Bilingual students may have an advantage at work. |\r
| disadvantage | bất lợi | main disadvantage | The main disadvantage is the high cost. |\r
| aim | mục tiêu | aim to do something | The project aims to reduce waste. |\r
| attitude | thái độ | positive attitude | A positive attitude helps students learn. |\r
| background | hoàn cảnh/nền tảng | educational background | People come from different educational backgrounds. |\r
| benefit | lợi ích | bring benefits | Exercise brings many health benefits. |\r
| challenge | thử thách | face a challenge | Young people face many challenges today. |\r
| community | cộng đồng | local community | The project supports the local community. |\r
| communication | giao tiếp | communication skills | Good communication skills are important at work. |\r
| competition | sự cạnh tranh/cuộc thi | strong competition | There is strong competition for university places. |\r
| condition | điều kiện | living conditions | The project improved living conditions. |\r
| confidence | sự tự tin | build confidence | Speaking practice can build confidence. |\r
| connection | sự kết nối/mối liên hệ | make a connection | There is a connection between sleep and health. |\r
| contribution | sự đóng góp | make a contribution | Everyone can make a contribution to society. |\r
| cost | chi phí | cost of living | The cost of living is high in large cities. |\r
| damage | thiệt hại/làm hư hại | cause damage | Floods can cause serious damage. |\r
| demand | nhu cầu | growing demand | There is growing demand for digital skills. |\r
| development | sự phát triển | economic development | Education supports economic development. |\r
| difference | sự khác biệt | make a difference | Small actions can make a difference. |\r
| difficulty | khó khăn | face difficulties | Many learners face difficulties with pronunciation. |\r
| diversity | sự đa dạng | cultural diversity | Cultural diversity makes cities more interesting. |\r
| effort | nỗ lực | make an effort | You need to make an effort every day. |\r
| equality | sự bình đẳng | gender equality | Education can promote gender equality. |\r
| evidence | bằng chứng | clear evidence | There is clear evidence that exercise is beneficial. |\r
| factor | yếu tố | important factor | Cost is an important factor for students. |\r
| freedom | sự tự do | freedom of choice | People value freedom of choice. |\r
| goal | mục tiêu | achieve a goal | I set a goal to read one article daily. |\r
| growth | sự tăng trưởng | population growth | Population growth puts pressure on cities. |\r
| influence | ảnh hưởng | have an influence on | Parents have a strong influence on children. |\r
| limit | giới hạn/hạn chế | set a limit, limit access | Parents should limit screen time. |\r
| opportunity | cơ hội | equal opportunity | Every child deserves an equal opportunity. |\r
| population | dân số | growing population | A growing population needs more housing. |\r
| poverty | nghèo đói | reduce poverty | Education can help reduce poverty. |\r
| purpose | mục đích | main purpose | The main purpose is to help students. |\r
| quality | chất lượng | quality of life | Green spaces improve quality of life. |\r
| relationship | mối quan hệ | family relationship | Good communication improves family relationships. |\r
| risk | rủi ro | reduce the risk | Exercise can reduce the risk of disease. |\r
| safety | sự an toàn | public safety | The law is designed to protect public safety. |\r
| standard | tiêu chuẩn | high standard | The school has a high standard of teaching. |\r
| success | thành công | achieve success | Regular practice is important for success. |\r
| target | mục tiêu cụ thể | reach a target | The company reached its sales target. |\r
| variety | sự đa dạng | a wide variety of | The shop sells a wide variety of products. |\r
| view | quan điểm/cảnh nhìn | express a view | Students should be able to express their views. |\r
| volunteer | tình nguyện viên/tình nguyện | work as a volunteer | She works as a volunteer at a local centre. |\r
| wealth | sự giàu có | create wealth | Education can help create wealth. |\r
| worldwide | trên toàn thế giới | used worldwide | English is used worldwide. |\r
| in contrast | trái lại | in contrast to | In contrast to cities, villages are usually quieter. |\r
| as well as | cũng như | as well as something | The course teaches grammar as well as vocabulary. |\r
| according to | theo như | according to a report | According to a recent report, prices are rising. |\r
| in order to | để | in order to do something | People use public transport in order to save money. |\r
| due to | do/bởi vì | due to bad weather | The flight was delayed due to bad weather. |\r
| instead of | thay vì | instead of doing something | We should walk instead of using the car. |\r
| on the other hand | mặt khác | on the other hand | Cars are convenient. On the other hand, they cause pollution. |\r
\r
## B1.7. Từ vựng mở rộng\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| adapt | thích nghi | adapt to change | Students must adapt to new learning methods. |\r
| afford | có khả năng chi trả | afford to do something | Many families cannot afford private education. |\r
| apply | áp dụng/nộp đơn | apply for a job, apply a rule | She applied for a scholarship. |\r
| argue | tranh luận/lập luận | argue that | Some people argue that exams are necessary. |\r
| attend | tham dự/học | attend a class | I attend an English class twice a week. |\r
| attract | thu hút | attract tourists | Beautiful beaches attract many tourists. |\r
| avoid | tránh | avoid a problem | Good planning can avoid unnecessary problems. |\r
| belong | thuộc về | belong to a group | This book belongs to the school library. |\r
| complain | phàn nàn | complain about | Residents complained about the noise. |\r
| consider | cân nhắc/xem xét | consider doing something | We should consider using public transport. |\r
| contain | chứa đựng | contain information | The report contains useful information. |\r
| contribute | đóng góp | contribute to society | Volunteers contribute to the local community. |\r
| convince | thuyết phục | convince someone that | The evidence convinced people that the plan was useful. |\r
| cope with | đối phó | cope with stress | Students need strategies to cope with stress. |\r
| create | tạo ra | create opportunities | Technology creates new opportunities. |\r
| depend on | phụ thuộc vào | depend on technology | Many businesses depend on technology. |\r
| deserve | xứng đáng | deserve support | Every child deserves a good education. |\r
| destroy | phá hủy | destroy habitats | Deforestation destroys animal habitats. |\r
| encourage | khuyến khích | encourage participation | Teachers should encourage participation. |\r
| expose | khiến tiếp xúc | expose someone to | Reading exposes learners to new vocabulary. |\r
| focus on | tập trung vào | focus on a problem | The report focuses on air pollution. |\r
| guarantee | bảo đảm | guarantee success | Hard work does not always guarantee success. |\r
| handle | xử lý | handle pressure | Young workers must learn to handle pressure. |\r
| ignore | phớt lờ | ignore a problem | We cannot ignore the problem. |\r
| influence | ảnh hưởng | influence behaviour | Advertising influences consumer behaviour. |\r
| involve | liên quan/bao gồm | involve several factors | The decision involves several factors. |\r
| lack | thiếu | lack of resources | A lack of resources can limit progress. |\r
| overcome | vượt qua | overcome a difficulty | Practice helps learners overcome difficulties. |\r
| participate | tham gia | participate in an activity | Students should participate in group activities. |\r
| prevent | ngăn chặn | prevent disease | Exercise can prevent some diseases. |\r
| promote | thúc đẩy | promote healthy habits | Schools should promote healthy habits. |\r
| respond | phản hồi/ứng phó | respond to a problem | Governments must respond to climate change. |\r
| solve | giải quyết | solve a problem | Education cannot solve every social problem. |\r
| suffer | chịu đựng | suffer from stress | Many workers suffer from stress. |\r
| survive | sống sót/tồn tại | survive a crisis | Small businesses struggled to survive the crisis. |\r
| tend to | có xu hướng | tend to do something | Young people tend to use social media daily. |\r
| threaten | đe dọa | threaten wildlife | Climate change threatens wildlife. |\r
| improve | cải thiện | improve access | The project aims to improve access to healthcare. |\r
| deal with | xử lý | deal with an issue | The government needs to deal with this issue. |\r
| point out | chỉ ra | point out a problem | The study points out several weaknesses. |\r
| carry out | tiến hành | carry out research | Scientists carried out research on the topic. |\r
\r
## B1.8. Từ thông dụng mở rộng\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| achieve | đạt được | achieve a goal | She worked hard to achieve her goal. |\r
| admit | thừa nhận | admit a mistake | He admitted his mistake. |\r
| announce | thông báo | announce a decision | The school announced a new decision. |\r
| appear | xuất hiện/có vẻ | appear to be | The problem appears to be serious. |\r
| approve | chấp thuận | approve a plan | The committee approved the plan. |\r
| arrange | sắp xếp | arrange a meeting | We arranged a meeting for Friday. |\r
| balance | cân bằng | maintain a balance | Students should balance study and rest. |\r
| blame | đổ lỗi | blame someone for something | We should not blame one person for the problem. |\r
| calculate | tính toán | calculate the cost | The software calculates the total cost. |\r
| cancel | hủy | cancel a meeting | The event was cancelled because of rain. |\r
| combine | kết hợp | combine work and study | It is difficult to combine work and study. |\r
| confirm | xác nhận | confirm a booking | Please confirm your booking by email. |\r
| consist of | bao gồm | consist of several parts | The course consists of six units. |\r
| contact | liên hệ | contact a teacher | You can contact the teacher by email. |\r
| convince | thuyết phục | convince someone to do something | The evidence convinced the committee to act. |\r
| correct | sửa đúng | correct a mistake | The teacher corrected my mistake. |\r
| deliver | giao/cung cấp | deliver a service | The company delivers a useful service. |\r
| determine | xác định | determine the cause | Scientists are trying to determine the cause. |\r
| divide | chia | divide into groups | The students were divided into three groups. |\r
| earn | kiếm tiền | earn a living | Many people earn a living from tourism. |\r
| examine | kiểm tra/nghiên cứu | examine the evidence | The report examines the evidence carefully. |\r
| exist | tồn tại | exist in many countries | Similar problems exist in many countries. |\r
| expect | mong đợi/dự kiến | expect a result | We expect the number to increase. |\r
| express | thể hiện/diễn đạt | express an opinion | Students should express their opinions clearly. |\r
| force | ép buộc/lực | force someone to do something | No one should be forced to choose a career. |\r
| gain | đạt được/thu được | gain experience | Internships help students gain experience. |\r
| inform | thông báo | inform the public | The government informed the public about the change. |\r
| notice | nhận thấy | notice a difference | I noticed a difference after regular practice. |\r
| occur | xảy ra | occur frequently | These mistakes occur frequently. |\r
| perform | thực hiện | perform a task | Workers must perform the task carefully. |\r
| produce | sản xuất/tạo ra | produce results | Regular practice produces better results. |\r
| publish | xuất bản | publish a report | The organisation published a report. |\r
| react | phản ứng | react to change | People react to change in different ways. |\r
| release | phát hành/thải ra | release information | The organisation released new information. |\r
| remove | loại bỏ | remove a barrier | The programme removes barriers to education. |\r
| spread | lan rộng | spread information | Social media spreads information quickly. |\r
| train | đào tạo | train workers | The company trains new workers. |\r
| trust | tin tưởng | trust a source | Readers should check whether they can trust a source. |\r
| be aware of | nhận thức về | be aware of a problem | Students should be aware of the risks. |\r
| be based on | dựa trên | be based on evidence | The decision should be based on evidence. |\r
| be involved in | tham gia/liên quan | be involved in a project | She is involved in a community project. |\r
| be likely to | có khả năng | be likely to increase | Prices are likely to increase. |\r
| be willing to | sẵn lòng | be willing to help | People are willing to help their community. |\r
| in addition to | ngoài | in addition to study | In addition to study, students need rest. |\r
| in terms of | xét về | in terms of cost | This option is better in terms of cost. |\r
| as a result of | do kết quả của | as a result of pollution | Many diseases occur as a result of pollution. |\r
| at the same time | đồng thời | work at the same time | People can study and work at the same time. |\r
\r
---\r
\r
# B2\r
\r
## B2.1. Từ học thuật thường gặp\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| significant | đáng kể | significant change | There has been a significant change in people's habits. |\r
| substantial | đáng kể/lớn | substantial increase | The city has seen a substantial increase in population. |\r
| essential | thiết yếu | essential skill | Reading is an essential skill for students. |\r
| beneficial | có lợi | beneficial effect | Exercise has a beneficial effect on health. |\r
| detrimental | có hại | detrimental effect | Stress can have a detrimental effect on memory. |\r
| efficient | hiệu quả về nguồn lực | efficient system | Public transport is an efficient system. |\r
| effective | có tác dụng | effective solution | This is an effective solution to the problem. |\r
| appropriate | thích hợp | appropriate method | Teachers should use appropriate methods. |\r
| suitable | phù hợp | suitable for beginners | This book is suitable for beginners. |\r
| relevant | liên quan | relevant information | Students need relevant information. |\r
| accurate | chính xác | accurate information | The report contains accurate information. |\r
| complex | phức tạp | complex problem | Climate change is a complex problem. |\r
| specific | cụ thể | specific example | Give a specific example to support your idea. |\r
| general | chung | general idea | I understand the general idea. |\r
| positive | tích cực | positive impact | Exercise has a positive impact on health. |\r
| negative | tiêu cực | negative consequence | Pollution has negative consequences. |\r
| major | lớn/chính | major factor | Cost is a major factor. |\r
| minor | nhỏ/không quan trọng bằng | minor problem | This is only a minor problem. |\r
| possible | có thể | possible explanation | There are several possible explanations. |\r
| likely | có khả năng | likely to happen | Prices are likely to increase. |\r
| unlikely | ít có khả năng | unlikely to happen | This solution is unlikely to work. |\r
| common | phổ biến | common assumption | This is a common assumption. |\r
| widespread | phổ biến rộng rãi | widespread use | There is widespread use of smartphones. |\r
| traditional | truyền thống | traditional values | Traditional values remain important. |\r
| modern | hiện đại | modern society | Modern society depends on technology. |\r
| current | hiện tại | current situation | The current situation is difficult. |\r
| previous | trước đó | previous research | Previous research supports this view. |\r
| overall | nhìn chung | overall result | The overall result was positive. |\r
| individual | cá nhân | individual responsibility | Everyone has individual responsibility. |\r
| global | toàn cầu | global issue | Climate change is a global issue. |\r
\r
## B2.2. Động từ học thuật và Writing\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| analyse | phân tích | analyse data | The study analyses data from three cities. |\r
| assess | đánh giá | assess the impact | We need to assess the impact of the policy. |\r
| assume | cho rằng/giả định | assume that | We should not assume that technology is always useful. |\r
| indicate | chỉ ra | indicate a trend | The figures indicate a downward trend. |\r
| demonstrate | chứng minh/thể hiện | demonstrate the importance | The results demonstrate the importance of exercise. |\r
| identify | xác định | identify a problem | The report identifies several problems. |\r
| establish | thiết lập/xác lập | establish a connection | The research establishes a connection between sleep and memory. |\r
| estimate | ước tính | estimate the cost | Experts estimate that the cost will rise. |\r
| predict | dự đoán | predict future changes | It is difficult to predict future changes. |\r
| require | yêu cầu | require attention | This issue requires urgent attention. |\r
| involve | liên quan/bao gồm | involve a process | The project involves several stages. |\r
| obtain | đạt được/thu được | obtain information | Researchers obtained information from interviews. |\r
| acquire | tiếp thu/đạt được | acquire knowledge | Students acquire knowledge through reading. |\r
| maintain | duy trì | maintain a balance | People should maintain a healthy balance. |\r
| preserve | bảo tồn | preserve culture | Tourism can help preserve local culture. |\r
| consume | tiêu thụ | consume energy | Buildings consume a lot of energy. |\r
| generate | tạo ra | generate income | Tourism generates income for local people. |\r
| replace | thay thế | replace old systems | New technology may replace old systems. |\r
| adapt | thích nghi | adapt to change | Workers must adapt to technological change. |\r
| regulate | điều chỉnh/kiểm soát | regulate companies | Governments should regulate large companies. |\r
| implement | thực hiện/triển khai | implement a policy | The government implemented a new policy. |\r
| allocate | phân bổ | allocate resources | Schools should allocate resources fairly. |\r
| facilitate | tạo điều kiện | facilitate learning | Technology can facilitate independent learning. |\r
| enhance | nâng cao | enhance the quality | The policy could enhance the quality of education. |\r
| undermine | làm suy yếu | undermine confidence | Constant criticism can undermine confidence. |\r
| promote | thúc đẩy | promote equality | Education promotes social equality. |\r
| tackle | giải quyết | tackle a challenge | Cities must tackle the housing problem. |\r
| prohibit | cấm | prohibit smoking | Some countries prohibit smoking in public places. |\r
| restrict | hạn chế | restrict access | The rule restricts access to the area. |\r
| justify | biện minh/giải thích lý do | justify a decision | The government must justify its decision. |\r
\r
## B2.3. Danh từ trừu tượng và ý tưởng\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| advantage | lợi thế | major advantage | Flexibility is a major advantage of online learning. |\r
| disadvantage | bất lợi | main disadvantage | The main disadvantage is the lack of face-to-face contact. |\r
| benefit | lợi ích | long-term benefit | Exercise has long-term benefits. |\r
| drawback | nhược điểm | major drawback | Cost is a major drawback. |\r
| factor | yếu tố | key factor | Cost is a key factor in this decision. |\r
| feature | đặc điểm | important feature | Flexibility is an important feature of online courses. |\r
| trend | xu hướng | growing trend | Remote work is a growing trend. |\r
| pattern | mô hình/xu hướng | clear pattern | The data shows a clear pattern. |\r
| issue | vấn đề | controversial issue | Climate change is a serious issue. |\r
| concern | mối lo ngại | public concern | Privacy is a growing public concern. |\r
| approach | cách tiếp cận | different approach | We need a different approach to education. |\r
| perspective | góc nhìn | different perspective | Travel gives people a broader perspective. |\r
| attitude | thái độ | positive attitude | A positive attitude helps learners continue. |\r
| behaviour | hành vi | change behaviour | Education can change people's behaviour. |\r
| responsibility | trách nhiệm | social responsibility | Protecting nature is a social responsibility. |\r
| equality | bình đẳng | gender equality | Education can promote gender equality. |\r
| inequality | bất bình đẳng | social inequality | Poverty increases social inequality. |\r
| access | sự tiếp cận | equal access | All children should have equal access to education. |\r
| opportunity | cơ hội | equal opportunity | Everyone deserves equal opportunity. |\r
| stability | sự ổn định | economic stability | Education can support economic stability. |\r
| development | sự phát triển | economic development | Tourism supports economic development. |\r
| growth | sự tăng trưởng | population growth | Population growth creates pressure on cities. |\r
| demand | nhu cầu | growing demand | There is growing demand for digital skills. |\r
| supply | nguồn cung | food supply | Climate change may affect the food supply. |\r
| resource | tài nguyên/nguồn lực | limited resources | Schools often have limited resources. |\r
| evidence | bằng chứng | strong evidence | There is strong evidence that sleep improves memory. |\r
| research | nghiên cứu | scientific research | Scientific research supports this argument. |\r
| policy | chính sách | government policy | The government introduced a new policy. |\r
| regulation | quy định | strict regulation | The industry needs stricter regulation. |\r
| legislation | luật pháp | new legislation | New legislation may protect consumers. |\r
\r
## B2.4. Từ diễn đạt lập luận\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| acknowledge | thừa nhận | acknowledge that | It is important to acknowledge that the problem is complex. |\r
| advocate | ủng hộ/đề xuất | advocate a policy | Many experts advocate better public transport. |\r
| challenge | thách thức/phản biện | challenge an assumption | The findings challenge a common assumption. |\r
| clarify | làm rõ | clarify a point | The second paragraph clarifies the writer's position. |\r
| confirm | xác nhận | confirm a finding | Further research confirmed the original finding. |\r
| contradict | mâu thuẫn với | contradict the evidence | This claim contradicts the available evidence. |\r
| define | định nghĩa | define a term | The author defines the term clearly. |\r
| derive | bắt nguồn/thu được | derive from | Many health problems derive from poor diets. |\r
| distinguish | phân biệt | distinguish between | It is important to distinguish between fact and opinion. |\r
| emphasise | nhấn mạnh | emphasise the importance | The report emphasises the importance of prevention. |\r
| imply | ngụ ý | imply that | The results imply that the policy was ineffective. |\r
| infer | suy ra | infer from the evidence | We can infer that income affects access to education. |\r
| interpret | diễn giải | interpret data | Researchers interpreted the data carefully. |\r
| illustrate | minh họa | illustrate a point | This example illustrates the main argument. |\r
| justify | biện minh/chứng minh hợp lý | justify a decision | The government must justify the decision. |\r
| highlight | làm nổi bật | highlight a problem | The article highlights the dangers of pollution. |\r
| overlook | bỏ qua | overlook an issue | The plan overlooks the needs of rural communities. |\r
| perceive | nhận thức | perceive a problem | People perceive the issue in different ways. |\r
| propose | đề xuất | propose a solution | The researchers proposed a practical solution. |\r
| question | đặt câu hỏi/nghi ngờ | question an assumption | The study questions the assumption that more money solves the problem. |\r
| reflect | phản ánh | reflect a change | The figures reflect changes in consumer behaviour. |\r
| reject | bác bỏ | reject an argument | The committee rejected the proposal. |\r
| reveal | tiết lộ/chỉ ra | reveal a pattern | The results reveal a clear pattern. |\r
| suggest | gợi ý/cho thấy | suggest that | The evidence suggests that the policy worked. |\r
| support | ủng hộ/chứng minh | support an argument | The examples support the writer's argument. |\r
| verify | kiểm chứng | verify information | Researchers must verify the information. |\r
| assume | giả định | make an assumption | We should not make an assumption without evidence. |\r
| attribute | quy cho | attribute something to | The report attributes the increase to population growth. |\r
| correspond | tương ứng | correspond to | The figures correspond to the results of the survey. |\r
| illustrate | minh họa | illustrate a trend | The graph illustrates a downward trend. |\r
\r
## B2.5. Từ về xã hội và chính sách\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| administration | sự quản lý/chính quyền | local administration | The local administration introduced a new policy. |\r
| authority | nhà chức trách/thẩm quyền | local authorities | Local authorities should improve road safety. |\r
| citizen | công dân | ordinary citizens | Citizens have a responsibility to protect public spaces. |\r
| economy | nền kinh tế | global economy | The global economy affects employment. |\r
| economic | thuộc kinh tế | economic growth | Education can support economic growth. |\r
| financial | thuộc tài chính | financial support | Poor families may need financial support. |\r
| fund | tài trợ/quỹ | fund a project | The government funded a healthcare project. |\r
| income | thu nhập | household income | Household income affects living conditions. |\r
| institution | tổ chức/cơ quan | public institution | Universities are important public institutions. |\r
| migration | sự di cư | rural-to-urban migration | Rural-to-urban migration puts pressure on cities. |\r
| minority | thiểu số | minority groups | Policies should protect minority groups. |\r
| organisation | tổ chức | international organisation | The organisation works on environmental issues. |\r
| poverty | nghèo đói | reduce poverty | Economic development may reduce poverty. |\r
| population | dân số | ageing population | An ageing population creates new challenges. |\r
| principle | nguyên tắc | basic principle | Equality is a basic principle of education. |\r
| profession | nghề nghiệp | medical profession | Teaching is a demanding profession. |\r
| resident | cư dân | local residents | Local residents opposed the new airport. |\r
| sector | lĩnh vực/ngành | public sector | The public sector provides essential services. |\r
| service | dịch vụ | public services | Cities need better public services. |\r
| tax | thuế | pay taxes, tax revenue | Taxes help fund public services. |\r
| welfare | phúc lợi | social welfare | The government should protect social welfare. |\r
| access | quyền tiếp cận | equal access | Everyone should have equal access to healthcare. |\r
| inequality | bất bình đẳng | income inequality | Income inequality remains a serious issue. |\r
| legislation | luật pháp | environmental legislation | Strong environmental legislation is necessary. |\r
| participation | sự tham gia | public participation | Public participation can improve decision-making. |\r
| representative | đại diện | elected representative | Citizens can contact their elected representatives. |\r
\r
## B2.6. Từ về số liệu và xu hướng\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| account for | chiếm | account for 30 percent | Online sales account for 30 percent of total sales. |\r
| approximately | xấp xỉ | approximately 40 percent | Approximately 40 percent of students chose option A. |\r
| decline | sự suy giảm | a sharp decline | The chart shows a sharp decline in sales. |\r
| fluctuate | dao động | fluctuate slightly | Prices fluctuated slightly during the year. |\r
| gradual | dần dần | gradual increase | There was a gradual increase in population. |\r
| dramatically | đáng kể/mạnh | increase dramatically | The number increased dramatically after 2010. |\r
| marginally | một chút | rise marginally | The figure rose marginally in the final year. |\r
| proportion | tỷ lệ | a high proportion of | A high proportion of students use smartphones. |\r
| peak | đạt đỉnh | reach a peak | The number reached a peak in July. |\r
| remain stable | giữ ổn định | remain relatively stable | The figures remained relatively stable. |\r
| roughly | khoảng | roughly half | Roughly half of the participants were women. |\r
| statistic | số liệu thống kê | official statistics | Official statistics show a different pattern. |\r
| steady | đều đặn/ổn định | steady growth | The company experienced steady growth. |\r
| trend | xu hướng | upward trend | The graph shows an upward trend. |\r
| vary | thay đổi khác nhau | vary considerably | Results vary considerably between regions. |\r
| figure | con số | the figure for | The figure for transport was the highest. |\r
| data | dữ liệu | collect data | Researchers collected data from 500 people. |\r
| category | hạng mục | in this category | Spending was highest in this category. |\r
| comparison | sự so sánh | make a comparison | The report makes a comparison between two groups. |\r
\r
## B2.7. Từ thông dụng học thuật\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| alternative | lựa chọn thay thế | alternative solution | We need an alternative solution. |\r
| annual | hằng năm | annual income | The report shows annual income levels. |\r
| apparent | rõ ràng/có vẻ | apparent reason | The apparent reason was a lack of funding. |\r
| appropriate | phù hợp | appropriate measure | The government should take appropriate measures. |\r
| average | trung bình | average income | The average income has increased. |\r
| capable | có khả năng | capable of doing | The system is capable of processing large amounts of data. |\r
| central | trung tâm/chủ yếu | central role | Education plays a central role in development. |\r
| widespread | phổ biến rộng rãi | widespread use | There is widespread use of mobile technology. |\r
| closely | một cách chặt chẽ | closely related | The two issues are closely related. |\r
| constant | liên tục | constant pressure | Constant pressure can damage mental health. |\r
| convenient | thuận tiện | convenient option | Online learning is a convenient option. |\r
| critical | quan trọng/nghiêm trọng | critical issue | Water access is a critical issue. |\r
| cultural | thuộc văn hóa | cultural identity | Language is part of cultural identity. |\r
| domestic | trong nước/gia đình | domestic market | The company focuses on the domestic market. |\r
| environmental | thuộc môi trường | environmental impact | We should reduce the environmental impact. |\r
| equivalent | tương đương | equivalent to | One year of study is equivalent to two semesters. |\r
| formal | chính thức/trang trọng | formal education | Not everyone has access to formal education. |\r
| frequent | thường xuyên | frequent use | Frequent use of phones can affect sleep. |\r
| global | toàn cầu | global market | Companies compete in a global market. |\r
| fundamental | nền tảng/cơ bản | fundamental principle | Equality is a fundamental principle. |\r
| initial | ban đầu | initial stage | The project is still at an initial stage. |\r
| internal | bên trong/nội bộ | internal problem | The organisation has an internal problem. |\r
| legal | hợp pháp/thuộc pháp luật | legal requirement | This is a legal requirement. |\r
| negative | tiêu cực | negative impact | Traffic has a negative impact on quality of life. |\r
| permanent | lâu dài/vĩnh viễn | permanent solution | The plan is not a permanent solution. |\r
| physical | thể chất/vật lý | physical activity | Children need regular physical activity. |\r
| potential | tiềm năng | potential benefit | The plan has several potential benefits. |\r
| primary | chính/ban đầu | primary cause | The primary cause was poverty. |\r
| professional | chuyên nghiệp | professional training | Workers need professional training. |\r
| regional | thuộc khu vực | regional development | The project supports regional development. |\r
| relevant | liên quan | relevant evidence | The writer uses relevant evidence. |\r
| secure | bảo đảm/an toàn | secure a job | Education helps people secure a job. |\r
| severe | nghiêm trọng | severe damage | The storm caused severe damage. |\r
| similar | tương tự | similar pattern | The study found a similar pattern. |\r
| social | thuộc xã hội | social issue | Unemployment is a serious social issue. |\r
| stable | ổn định | stable condition | The economy is now relatively stable. |\r
| technical | kỹ thuật | technical skills | Modern jobs require technical skills. |\r
| temporary | tạm thời | temporary solution | This is only a temporary solution. |\r
| widespread | lan rộng | widespread concern | There is widespread concern about the issue. |\r
| access to | quyền tiếp cận | access to healthcare | Everyone should have access to healthcare. |\r
| in comparison with | so với | in comparison with | In comparison with last year, sales increased. |\r
| in relation to | liên quan đến | in relation to cost | The figures are high in relation to cost. |\r
| to some extent | ở một mức độ nào đó | true to some extent | This argument is true to some extent. |\r
| play a role in | đóng vai trò trong | play a role in society | Technology plays a role in modern society. |\r
| take into account | tính đến | take something into account | The policy takes local needs into account. |\r
\r
---\r
\r
# C1\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| inevitable | không thể tránh khỏi | inevitable change | Technological change is inevitable. |\r
| controversial | gây tranh cãi | controversial issue | Animal testing is a controversial issue. |\r
| comprehensive | toàn diện | comprehensive approach | The problem requires a comprehensive approach. |\r
| widespread | lan rộng/phổ biến | widespread problem | Obesity is a widespread problem. |\r
| excessive | quá mức | excessive use | Excessive use of phones can affect sleep. |\r
| vulnerable | dễ bị tổn thương | vulnerable groups | Governments should protect vulnerable groups. |\r
| sustainable | bền vững | sustainable development | Sustainable development should be a priority. |\r
| feasible | khả thi | feasible solution | Public transport is a feasible solution. |\r
| fundamental | cơ bản/nền tảng | fundamental right | Education is a fundamental right. |\r
| crucial | cực kỳ quan trọng | crucial role | Teachers play a crucial role in education. |\r
| compelling | thuyết phục | compelling reason | There is a compelling reason to change the policy. |\r
| coherent | mạch lạc | coherent argument | The essay presents a coherent argument. |\r
| diverse | đa dạng | diverse population | Cities have diverse populations. |\r
| inclusive | bao trùm/hòa nhập | inclusive education | Schools should provide inclusive education. |\r
| autonomous | tự chủ | autonomous learner | An autonomous learner can study independently. |\r
| resilient | kiên cường/có khả năng phục hồi | resilient community | A resilient community can recover after a disaster. |\r
| literacy | khả năng đọc viết/hiểu biết | digital literacy | Digital literacy is essential today. |\r
| implication | hệ quả/hàm ý | social implications | The decision has serious social implications. |\r
| misconception | quan niệm sai | common misconception | This is a common misconception about language learning. |\r
| capacity | năng lực/sức chứa | capacity to learn | Children have a strong capacity to learn languages. |\r
| priority | ưu tiên | top priority | Public health should be a top priority. |\r
| intervention | sự can thiệp | government intervention | Government intervention may be necessary. |\r
| collaboration | sự hợp tác | international collaboration | International collaboration can solve global problems. |\r
| innovation | sự đổi mới | technological innovation | Innovation creates new opportunities. |\r
| productivity | năng suất | increase productivity | Better training can increase productivity. |\r
| inequality | bất bình đẳng | economic inequality | Economic inequality affects access to education. |\r
| marginalised | bị gạt ra bên lề | marginalised groups | Policies should support marginalised groups. |\r
| mitigate | giảm nhẹ | mitigate the effects | Trees can help mitigate the effects of pollution. |\r
| exacerbate | làm trầm trọng hơn | exacerbate a problem | Poor planning can exacerbate traffic problems. |\r
| retain | giữ lại/ghi nhớ | retain information | Review helps students retain information. |\r
\r
## C1.2. Từ học thuật nâng cao\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| ambiguous | mơ hồ | ambiguous statement | The question contains an ambiguous statement. |\r
| arbitrary | tùy ý, không dựa trên nguyên tắc rõ ràng | arbitrary decision | The rule appears arbitrary and unfair. |\r
| coherent | mạch lạc | coherent argument | The essay presents a coherent argument. |\r
| compelling | rất thuyết phục | compelling evidence | The researchers provided compelling evidence. |\r
| considerable | đáng kể | considerable effort | The project required considerable effort. |\r
| consistent | nhất quán | consistent results | The study produced consistent results. |\r
| contentious | gây tranh cãi | contentious issue | Immigration remains a contentious issue. |\r
| conventional | truyền thống/thông thường | conventional approach | The school uses a conventional approach to assessment. |\r
| cumulative | tích lũy | cumulative effect | Small changes can have a cumulative effect. |\r
| decisive | mang tính quyết định | decisive factor | Cost was the decisive factor. |\r
| deficient | thiếu hụt/kém | deficient in | The diet is deficient in essential nutrients. |\r
| empirical | dựa trên thực nghiệm | empirical evidence | The claim is not supported by empirical evidence. |\r
| explicit | rõ ràng, trực tiếp | explicit instruction | Students need explicit instruction. |\r
| inherent | vốn có | inherent risk | Every investment carries an inherent risk. |\r
| intrinsic | nội tại | intrinsic value | Art has intrinsic value beyond its economic benefit. |\r
| marginal | nhỏ/không đáng kể | marginal increase | The policy produced only a marginal increase. |\r
| mutual | lẫn nhau | mutual benefit | The agreement creates mutual benefits. |\r
| objective | khách quan/mục tiêu | objective assessment | The test should provide an objective assessment. |\r
| pervasive | lan rộng, có mặt khắp nơi | pervasive influence | Advertising has a pervasive influence on behaviour. |\r
| preliminary | sơ bộ | preliminary findings | The preliminary findings are promising. |\r
| rational | hợp lý | rational decision | Consumers do not always make rational decisions. |\r
| robust | vững chắc | robust evidence | The theory is supported by robust evidence. |\r
| subtle | tinh tế/khó nhận thấy | subtle difference | There is a subtle difference between the two ideas. |\r
| theoretical | mang tính lý thuyết | theoretical framework | The study uses a clear theoretical framework. |\r
| underlying | tiềm ẩn/nền tảng | underlying cause | Poverty is an underlying cause of poor health. |\r
| valid | hợp lệ/có cơ sở | valid argument | This is a valid argument. |\r
| viable | khả thi | viable alternative | Public transport is a viable alternative to private cars. |\r
| widespread | phổ biến rộng rãi | widespread concern | There is widespread concern about climate change. |\r
| inherent | vốn có | inherent problem | The system has an inherent problem. |\r
| negligible | không đáng kể | negligible impact | The change had a negligible impact on the results. |\r
\r
## C1.3. Động từ nâng cao trong Reading\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| accumulate | tích lũy | accumulate knowledge | Students accumulate knowledge over time. |\r
| ascertain | xác định chắc chắn | ascertain the cause | Researchers tried to ascertain the cause. |\r
| comprise | bao gồm | comprise several parts | The course comprises several practical modules. |\r
| constrain | hạn chế | constrain development | Lack of funding constrains development. |\r
| contemplate | cân nhắc | contemplate a change | The government is contemplating a change in the law. |\r
| constitute | cấu thành | constitute a threat | These activities constitute a threat to wildlife. |\r
| deteriorate | xấu đi | deteriorate rapidly | Air quality deteriorated rapidly. |\r
| diminish | giảm bớt | diminish the impact | Trees can diminish the impact of flooding. |\r
| eliminate | loại bỏ | eliminate a problem | The policy aims to eliminate unnecessary costs. |\r
| emerge | xuất hiện/nổi lên | emerge as a leader | The city emerged as a major technology centre. |\r
| exploit | khai thác/lợi dụng | exploit natural resources | Companies should not exploit natural resources carelessly. |\r
| formulate | xây dựng/đề ra | formulate a policy | Experts formulated a new policy. |\r
| foster | thúc đẩy/nuôi dưỡng | foster creativity | Schools should foster creativity. |\r
| inhibit | cản trở | inhibit growth | High costs inhibit economic growth. |\r
| incorporate | kết hợp/đưa vào | incorporate technology | Schools should incorporate technology into lessons. |\r
| induce | gây ra | induce stress | Long working hours can induce stress. |\r
| integrate | tích hợp/hòa nhập | integrate into society | Education helps migrants integrate into society. |\r
| manipulate | thao túng | manipulate information | Social media can manipulate public opinion. |\r
| mediate | làm trung gian | mediate a conflict | The organisation helped mediate the conflict. |\r
| neglect | bỏ bê | neglect an issue | The policy neglects the needs of rural areas. |\r
| offset | bù đắp | offset the cost | The savings offset the cost of the project. |\r
| persist | tiếp diễn | problem persists | The problem persists despite the new law. |\r
| proliferate | phát triển nhanh lan rộng | proliferate rapidly | Online services have proliferated rapidly. |\r
| reconcile | dung hòa | reconcile two views | The policy tries to reconcile economic growth with environmental protection. |\r
| reinforce | củng cố | reinforce a belief | The evidence reinforces the main argument. |\r
| render | khiến cho | render something ineffective | Poor planning can render the policy ineffective. |\r
| retain | giữ lại | retain information | Regular review helps learners retain information. |\r
| trigger | kích hoạt/gây ra | trigger a reaction | The event triggered a public debate. |\r
| undermine | làm suy yếu | undermine trust | False information undermines public trust. |\r
| utilise | tận dụng/sử dụng | utilise resources | Schools should utilise digital resources effectively. |\r
\r
## C1.4. Cụm học thuật thường gặp\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| a considerable amount of | một lượng đáng kể | a considerable amount of data | The study collected a considerable amount of data. |\r
| a wide range of | nhiều loại/phạm vi rộng | a wide range of services | The website offers a wide range of services. |\r
| be attributed to | được cho là do | be attributed to climate change | The change can be attributed to climate change. |\r
| be conducive to | có lợi cho | conducive to learning | A quiet room is conducive to learning. |\r
| be detrimental to | có hại cho | detrimental to health | Excessive stress is detrimental to health. |\r
| be prone to | dễ có xu hướng/bị | prone to illness | People with poor diets are prone to illness. |\r
| bear in mind | ghi nhớ | bear in mind that | We should bear in mind that the data is limited. |\r
| by means of | bằng phương tiện/cách thức | by means of technology | Students communicate by means of technology. |\r
| in the long term | về lâu dài | benefit in the long term | The policy may save money in the long term. |\r
| in the short term | trong ngắn hạn | cost in the short term | The change may be expensive in the short term. |\r
| in light of | xét theo | in light of new evidence | The policy was changed in light of new evidence. |\r
| with regard to | liên quan đến | with regard to education | With regard to education, access remains unequal. |\r
| in conjunction with | kết hợp với | work in conjunction with | The programme works in conjunction with local schools. |\r
| to a certain extent | ở một mức độ nhất định | true to a certain extent | This argument is true to a certain extent. |\r
| take into account | tính đến | take factors into account | The plan takes local needs into account. |\r
| give rise to | gây ra | give rise to problems | Rapid growth can give rise to social problems. |\r
| play a role in | đóng vai trò trong | play a role in development | Education plays a role in economic development. |\r
| in response to | để đáp lại | act in response to | The government acted in response to public concern. |\r
| from the perspective of | từ góc nhìn | from the perspective of students | The issue looks different from the perspective of students. |\r
| in the absence of | trong trường hợp thiếu/vắng | in the absence of evidence | In the absence of evidence, the claim is weak. |\r
\r
## C1.5. Từ học thuật thường gặp\r
\r
| Từ/cụm | Nghĩa | Cụm thường gặp | Câu mẫu |\r
|---|---|---|---|\r
| adapt | thích nghi/điều chỉnh | adapt to circumstances | Successful organisations adapt to changing circumstances. |\r
| advocate | ủng hộ/đề xuất | advocate reform | Many experts advocate education reform. |\r
| allocate | phân bổ | allocate funding | The government should allocate more funding to healthcare. |\r
| alter | thay đổi | alter behaviour | The campaign may alter public behaviour. |\r
| anticipate | dự đoán/lường trước | anticipate a problem | Planners should anticipate future problems. |\r
| coincide | trùng hợp | coincide with | The change coincided with a rise in demand. |\r
| compile | tổng hợp | compile a report | Researchers compiled a report from several sources. |\r
| conceive | hình thành ý tưởng | conceive an idea | The project was conceived as a way to support young people. |\r
| contradict | mâu thuẫn | contradict the evidence | The claim contradicts the available evidence. |\r
| conventional | truyền thống/thông thường | conventional method | The school uses a conventional method. |\r
| convert | chuyển đổi | convert waste into energy | New technology can convert waste into energy. |\r
| diminish | giảm bớt | diminish the impact | Trees can diminish the impact of flooding. |\r
| eliminate | loại bỏ | eliminate a problem | The policy aims to eliminate unnecessary costs. |\r
| emerge | nổi lên/xuất hiện | emerge as a leader | The city emerged as a centre of innovation. |\r
| enhance | nâng cao | enhance quality | The reform could enhance the quality of education. |\r
| exploit | khai thác/lợi dụng | exploit natural resources | Countries should not exploit natural resources carelessly. |\r
| facilitate | tạo điều kiện | facilitate access | Technology facilitates access to information. |\r
| foster | thúc đẩy/nuôi dưỡng | foster creativity | Schools should foster creativity. |\r
| generate | tạo ra | generate income | Tourism generates income for local communities. |\r
| implement | thực hiện/triển khai | implement a policy | The government implemented a new policy. |\r
| inhibit | cản trở | inhibit growth | High costs inhibit economic growth. |\r
| integrate | tích hợp/hòa nhập | integrate into society | Education helps migrants integrate into society. |\r
| manipulate | thao túng | manipulate information | Social media can manipulate public opinion. |\r
| offset | bù đắp | offset the cost | The savings offset the cost of the project. |\r
| persist | tiếp diễn | problem persists | The problem persists despite the new law. |\r
| reinforce | củng cố | reinforce a belief | The evidence reinforces the main argument. |\r
| retain | giữ lại/ghi nhớ | retain information | Review helps students retain information. |\r
| trigger | gây ra/kích hoạt | trigger a debate | The report triggered a public debate. |\r
| undermine | làm suy yếu | undermine trust | False information undermines public trust. |\r
| utilise | tận dụng/sử dụng | utilise resources | Schools should utilise digital resources effectively. |\r
\r
---\r
\r
`;function jE(h){let n="Tổng hợp",a="Từ vựng";const s=new Set,l=[];for(const u of h.split(/\r?\n/)){const d=u.trim();if(d.startsWith("# ")){n=d.slice(2).trim(),a=`${n}. Từ vựng cốt lõi`;continue}if(d.startsWith("## ")){a=d.slice(3).trim();continue}if(!d.startsWith("|")||/^\|[-|\s]+\|$/.test(d))continue;const f=d.split("|").slice(1,-1).map(b=>b.trim());if(f.length<3||/^(Từ\/cụm|Cụm)$/i.test(f[0]))continue;const[m,v,g,p]=f,_=p?g:"",S=p??g;if(!m||!v||!S)continue;const E=`${m.toLowerCase()}|${v.toLowerCase()}`;s.has(E)||(s.add(E),l.push({english:m,vietnamese:v,collocation:_,example:S,level:n,section:a}))}return l}const WE=jE(qE),XE={agree:"Hai người cùng có chung quan điểm sau khi trao đổi.",answer:"Một người đặt câu hỏi và đang chờ phản hồi.",arrive:"Bạn vừa đến nơi đã hẹn sau một chuyến đi.",believe:"Bạn cho rằng một điều là đúng, dù không thể nhìn thấy ngay.",borrow:"Bạn tạm dùng đồ của người khác và sẽ trả lại sau.",bring:"Bạn mang một vật từ chỗ này đến cho ai đó.",build:"Bạn tạo nên một thứ từng bước, như ngôi nhà hoặc thói quen.",carry:"Bạn đang cầm hoặc mang một vật theo bên mình.",choose:"Có nhiều lựa chọn và bạn quyết định lấy một.",compare:"Bạn đặt hai thứ cạnh nhau để thấy điểm giống và khác.",decide:"Sau khi cân nhắc, bạn đưa ra lựa chọn cuối cùng.",discover:"Bạn tìm thấy điều mới trước đây chưa biết.",discuss:"Nhiều người cùng nói về một vấn đề để hiểu rõ hơn.",explain:"Bạn làm cho một ý tưởng trở nên dễ hiểu với người khác.",forget:"Một thông tin từng biết nhưng hiện tại không nhớ ra.",improve:"Một kỹ năng hoặc tình trạng trở nên tốt hơn theo thời gian.",invite:"Bạn muốn ai đó đến một nơi hoặc tham gia một hoạt động.",join:"Bạn trở thành một phần của nhóm hoặc hoạt động đang diễn ra.",lend:"Bạn đưa đồ của mình cho người khác dùng tạm.",manage:"Tình huống khó nhưng bạn vẫn xoay xở để hoàn thành.",offer:"Bạn chủ động đề nghị giúp đỡ hoặc đưa thứ gì đó cho ai đó.",prepare:"Bạn làm sẵn những việc cần thiết trước một sự kiện.",protect:"Bạn giữ một người hoặc vật khỏi nguy hiểm hay tổn hại.",realize:"Bạn chợt hiểu một điều trước đó chưa nhận ra.",receive:"Một thứ được gửi hoặc trao đến cho bạn.",recommend:"Bạn nói rằng một lựa chọn là đáng thử hoặc phù hợp.",refuse:"Bạn nói không với một lời đề nghị hoặc yêu cầu.",remember:"Bạn có thể gọi lại một thông tin trong đầu.",repeat:"Bạn làm hoặc nói lại điều vừa xảy ra.",replace:"Một thứ mới được dùng thay cho thứ cũ.",require:"Một việc cần có điều gì đó thì mới thực hiện được.",return:"Bạn đưa lại thứ đã mượn hoặc đi trở về nơi cũ.",share:"Bạn cho người khác cùng biết, dùng hoặc có một phần.",suggest:"Bạn đưa ra một ý tưởng để người khác cân nhắc.",avoid:"Bạn chủ động không làm hoặc không đi vào tình huống nào đó.",waste:"Thời gian hoặc tiền bị dùng mà không đem lại ích lợi."};function YE(h){return h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ky(h){const n=XE[h.english.toLowerCase()];if(n)return n;const a=h.example.replace(new RegExp(YE(h.english),"gi"),"_____");return a!==h.example?`Tình huống: ${a}`:`Hãy nghĩ về ngữ cảnh ${h.section.toLowerCase()} và diễn đạt đúng ý này.`}const qi=WE,Pd=["A2","B1","B2","C1"],sl="Small steps every day lead to big changes.",lu=[{stem:"Experts recommend ___ regularly.",choices:["exercise","to exercise","exercising","exercised"],answer:"exercising",explanation:"recommend + V-ing: khi một động từ đi ngay sau “recommend”, dùng dạng -ing. Cũng có cấu trúc khác như “recommend that + clause”.",example:"Experts recommend exercising regularly.",hint:"Sau “recommend”, nếu đi thẳng vào một hành động, hãy nghĩ đến dạng -ing."},{stem:"She is interested ___ learning English.",choices:["at","in","on","for"],answer:"in",explanation:"interested in + noun / V-ing: dùng “in” để nói quan tâm hoặc thích một việc/chủ đề.",example:"She is interested in learning English.",hint:"Cụm này dùng cùng giới từ trong “take an interest in”."},{stem:"This exercise is similar ___ the test.",choices:["with","at","to","for"],answer:"to",explanation:"similar to + noun/pronoun: dùng “to” khi nói một thứ giống hoặc tương tự thứ khác.",example:"This exercise is similar to the test.",hint:"Cụm so sánh cố định là “similar to”."},{stem:"They decided ___ the problem together.",choices:["solve","solving","to solve","solved"],answer:"to solve",explanation:"decide + to V: dùng “to + động từ nguyên mẫu” khi nói quyết định làm việc gì.",example:"They decided to solve the problem together.",hint:"Sau “decide”, hành động được quyết định thường đi với “to + V”."},{stem:"You should pay attention ___ the verb tense.",choices:["to","at","with","for"],answer:"to",explanation:"pay attention to + noun / V-ing: “to” ở đây là giới từ, nên nếu sau nó là động từ thì dùng V-ing.",example:"Pay attention to the verb tense.",hint:"Đây là cụm cố định “pay attention to”."},{stem:"I avoid ___ my phone before bed.",choices:["use","to use","using","used"],answer:"using",explanation:"avoid + V-ing: khi sau “avoid” là một hành động, dùng động từ dạng -ing.",example:"I avoid using my phone before bed.",hint:"“Avoid” nói về việc tránh làm một hành động, nên hành động đó ở dạng -ing."}];function ma(h){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(h);n.lang="en-US",n.rate=.82,n.pitch=1,window.speechSynthesis.speak(n)}function Gd(h,n=qi){const a=n.filter(s=>s.english!==h);return a[Math.floor(Math.random()*a.length)]}function Jy(h){return h.toLowerCase().trim().replace(/[.,;!?]/g,"").replace(/\s+/g," ")}function ZE(h,n){const a=Jy(h);return n.split("/").map(Jy).some(s=>a===s)}function QE(){const[h,n]=_t.useState("home"),[a,s]=_t.useState("A2"),[l,u]=_t.useState(()=>Gd(void 0,qi.filter(M=>M.level==="A2"))),[d,f]=_t.useState("meaning"),[m,v]=_t.useState("vi-en"),[g,p]=_t.useState(""),[_,S]=_t.useState("idle"),[E,b]=_t.useState(!1),[x,A]=_t.useState(!1),[O,C]=_t.useState(!1),[U,L]=_t.useState(0),[H,I]=_t.useState(()=>Number(localStorage.getItem("lingua-correct")??0)),[w,P]=_t.useState(()=>Number(localStorage.getItem("lingua-attempts")??0)),[X,me]=_t.useState(""),[le,$]=_t.useState(()=>qi.find(M=>M.level==="A2")??qi[0]),[Y,oe]=_t.useState(!1),[Q,se]=_t.useState("Nhấn micro, sau đó đọc câu thật rõ ràng."),[ne,_e]=_t.useState(0),[de,Le]=_t.useState("idle"),[re,ge]=_t.useState(!1),[R,W]=_t.useState(!1);_t.useEffect(()=>localStorage.setItem("lingua-correct",String(H)),[H]),_t.useEffect(()=>localStorage.setItem("lingua-attempts",String(w)),[w]);const F=w?Math.round(H/w*100):0,xe=_t.useMemo(()=>qi.filter(M=>M.level===a),[a]),Me=_t.useMemo(()=>xe.filter(M=>`${M.english} ${M.vietnamese} ${M.collocation}`.toLowerCase().includes(X.toLowerCase().trim())),[xe,X]),Ee=_t.useMemo(()=>{const M=new Map;for(const ee of Me){const ve=M.get(ee.section)??[];ve.push(ee),M.set(ee.section,ve)}return[...M.entries()]},[Me]);function be(M){const ee=qi.filter(ve=>ve.level===M);ee.length&&(s(M),me(""),u(Gd(void 0,ee)),$(ee[0]),oe(!1),f("meaning"),p(""),S("idle"),b(!1),A(!1),C(!1),Le("idle"),ge(!1),W(!1))}function Te(M){f(M),p(""),S("idle"),b(!1),A(!1),Le("idle"),ge(!1),W(!1),C(!1)}function we(){u(M=>Gd(M.english,xe)),p(""),S("idle"),b(!1),A(!1),C(!1)}function Ge(M){if(de==="correct")return;const ee=M===lu[ne].answer;Le(ee?"correct":"wrong"),ee&&W(!0),re||(P(ve=>ve+1),ge(!0),ee?(I(ve=>ve+1),L(ve=>ve+1)):L(0)),ee&&ma(lu[ne].example)}function kt(){_!=="correct"&&(S("wrong"),A(!0),E||(P(M=>M+1),b(!0),L(0)))}function Wt(){de!=="correct"&&(Le("wrong"),W(!0),re||(P(M=>M+1),ge(!0),L(0)))}function xt(){_e(M=>(M+1)%lu.length),Le("idle"),ge(!1),W(!1)}function pt(M){if(M.preventDefault(),_==="correct"||!g.trim())return;const ee=d==="dictation"||m==="vi-en"?g.trim().toLowerCase()===l.english.toLowerCase():ZE(g,l.vietnamese);S(ee?"correct":"wrong"),A(ee),E||(P(ve=>ve+1),b(!0),ee?(I(ve=>ve+1),L(ve=>ve+1)):L(0)),ee&&ma(l.example)}const We=m==="vi-en"?l.vietnamese:l.english,Qe=m==="vi-en"?"Từ tiếng Anh là gì?":"Nghĩa tiếng Việt là gì?",mn=m==="vi-en"?"Type in English…":"Gõ nghĩa tiếng Việt…",Et=lu[ne];function N(){const M=window.SpeechRecognition??window.webkitSpeechRecognition;if(!M){se("Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Bạn vẫn có thể nghe và đọc theo.");return}const ee=new M;ee.lang="en-US",ee.interimResults=!1,ee.maxAlternatives=1,se("Đang nghe… hãy đọc câu tiếng Anh."),ee.onresult=ve=>{const Ae=ve.results[0][0].transcript.trim(),Ne=Ae.toLowerCase().replace(/[.,!?]/g,""),Xe=sl.toLowerCase().replace(/[.,!?]/g,"");se(Ne===Xe?`Tuyệt vời! Bạn đọc: “${Ae}”`:`Máy nghe: “${Ae}”. Hãy thử đọc chậm và rõ hơn.`)},ee.onerror=()=>se("Không nghe được giọng nói. Hãy kiểm tra quyền micro và thử lại."),ee.start()}return B.jsxs("main",{className:"app-shell",children:[B.jsx(kE,{className:"site-warp",variant:"letters",speed:3.5,streakOpacity:.18,tileOpacity:.45,hue:155,brightness:.6}),B.jsxs("header",{className:"topbar",children:[B.jsxs("button",{className:"brand",onClick:()=>n("home"),"aria-label":"Về trang chủ Lingua Flow",children:[B.jsx("span",{className:"brand-mark",children:"L"}),B.jsxs("span",{children:["lingua",B.jsx("span",{className:"brand-light",children:"flow"})]})]}),B.jsxs("nav",{"aria-label":"Điều hướng chính",children:[B.jsx("button",{className:h==="home"?"active":"",onClick:()=>n("home"),children:"Tổng quan"}),B.jsx("button",{className:h==="practice"?"active":"",onClick:()=>n("practice"),children:"Luyện tập"}),B.jsx("button",{className:h==="vocabulary"?"active":"",onClick:()=>n("vocabulary"),children:"Từ vựng"})]}),B.jsxs("div",{className:"profile",children:[B.jsxs("span",{className:"streak-mini",children:["⚡ ",U," ngày"]}),B.jsx("span",{className:"avatar",children:"NL"})]})]}),h==="home"&&B.jsxs("section",{className:"home-view",children:[B.jsxs("section",{className:"hero",children:[B.jsxs("div",{className:"hero-copy",children:[B.jsx("p",{className:"eyebrow",children:"HÔM NAY · 15 PHÚT"}),B.jsxs("h1",{children:["Học một ít.",B.jsx("br",{}),B.jsx("em",{children:"Tiến thật xa."})]}),B.jsx("p",{className:"hero-description",children:"Lộ trình nhỏ, phản hồi tức thì và âm thanh chuẩn để tiếng Anh trở thành phản xạ tự nhiên của bạn."}),B.jsxs("div",{className:"hero-actions",children:[B.jsxs("button",{className:"button button-primary",onClick:()=>n("practice"),children:["Bắt đầu học ",B.jsx("span",{children:"→"})]}),B.jsx("button",{className:"button button-quiet",onClick:()=>ma(sl),children:"◉ Nghe mẫu"})]})]}),B.jsxs("div",{className:"hero-panel",children:[B.jsx("p",{children:"Chuỗi học tập"}),B.jsx("strong",{children:U||1}),B.jsx("span",{children:"ngày liên tiếp"}),B.jsxs("div",{className:"week",children:[B.jsx("i",{className:"done",children:"M"}),B.jsx("i",{className:"done",children:"T"}),B.jsx("i",{className:"done",children:"W"}),B.jsx("i",{children:"T"}),B.jsx("i",{children:"F"}),B.jsx("i",{children:"S"}),B.jsx("i",{children:"S"})]})]})]}),B.jsxs("section",{className:"content-grid",children:[B.jsxs("div",{className:"section-heading",children:[B.jsxs("div",{children:[B.jsx("p",{className:"eyebrow dark",children:"LỘ TRÌNH CỦA BẠN"}),B.jsx("h2",{children:"Tiếp tục đúng nhịp"})]}),B.jsx("button",{className:"text-button",onClick:()=>n("practice"),children:"Xem tất cả →"})]}),B.jsxs("article",{className:"lesson-card featured",children:[B.jsx("div",{className:"lesson-icon coral",children:a}),B.jsxs("div",{className:"lesson-main",children:[B.jsxs("span",{children:["TRÌNH ĐỘ ",a," · TỪ VỰNG"]}),B.jsx("h3",{children:a==="A2"?"Daily verbs in context":`Build your ${a} vocabulary`}),B.jsx("p",{children:"Hiểu, nghe và dùng từ theo đúng trình độ hiện tại."}),B.jsx("div",{className:"progress",children:B.jsx("b",{style:{width:"64%"}})}),B.jsxs("small",{children:[xe.length," từ/cụm trong bậc ",a]})]}),B.jsx("button",{className:"play-circle",onClick:()=>n("practice"),"aria-label":"Mở bài học",children:"→"})]}),B.jsxs("div",{className:"lesson-row",children:[B.jsxs("article",{className:"compact-card",children:[B.jsx("div",{className:"lesson-icon lilac",children:"♬"}),B.jsxs("div",{children:[B.jsx("span",{children:"NGHE & NHẮC LẠI"}),B.jsx("h3",{children:"Everyday rhythm"}),B.jsx("p",{children:"5 phút · 8 câu"})]}),B.jsx("button",{onClick:()=>ma(sl),"aria-label":"Nghe bài mẫu",children:"▶"})]}),B.jsxs("article",{className:"compact-card",children:[B.jsx("div",{className:"lesson-icon mint",children:"✦"}),B.jsxs("div",{children:[B.jsx("span",{children:"ÔN TẬP THÔNG MINH"}),B.jsx("h3",{children:"Words to revisit"}),B.jsxs("p",{children:[qi.length," từ trong kho"]})]}),B.jsx("button",{onClick:()=>n("vocabulary"),"aria-label":"Mở từ vựng",children:"→"})]})]})]}),B.jsxs("aside",{className:"daily-card",children:[B.jsx("div",{className:"daily-number",children:"01"}),B.jsxs("div",{children:[B.jsx("p",{className:"eyebrow dark",children:"CÂU HÔM NAY"}),B.jsxs("h2",{children:["“",sl,"”"]}),B.jsx("p",{children:"Nhấn nghe, đọc theo và để trình duyệt ghi nhận giọng của bạn."}),B.jsxs("div",{className:"daily-actions",children:[B.jsx("button",{className:"button button-dark",onClick:()=>ma(sl),children:"🔊 Nghe phát âm"}),B.jsx("button",{className:"button button-outline",onClick:N,children:"◉ Luyện nói"})]}),B.jsx("small",{className:"voice-status",children:Q})]})]}),B.jsxs("section",{className:"level-panel",children:[B.jsxs("div",{children:[B.jsx("p",{className:"eyebrow dark",children:"CHỌN BẬC TIẾNG ANH"}),B.jsx("h2",{children:"Học đúng mức của bạn"})]}),B.jsx("div",{className:"level-switch",children:Pd.map(M=>B.jsxs("button",{className:a===M?"active":"",onClick:()=>be(M),children:[B.jsx("b",{children:M}),B.jsxs("span",{children:[qi.filter(ee=>ee.level===M).length," từ"]})]},M))})]}),B.jsxs("section",{className:"stats-strip",children:[B.jsxs("div",{children:[B.jsx("strong",{children:H}),B.jsx("span",{children:"Từ trả lời đúng"})]}),B.jsxs("div",{children:[B.jsxs("strong",{children:[F,"%"]}),B.jsx("span",{children:"Độ chính xác"})]}),B.jsxs("div",{children:[B.jsx("strong",{children:xe.length}),B.jsxs("span",{children:["Từ bậc ",a]})]})]})]}),h==="practice"&&B.jsxs("section",{className:"practice-view",children:[B.jsxs("div",{className:"page-title",children:[B.jsxs("p",{className:"eyebrow dark",children:["LUYỆN PHẢN XẠ · ",a]}),B.jsx("h1",{children:"Gõ, nghe, rồi nhớ."}),B.jsx("p",{children:"Đảo chiều bài tập bất cứ lúc nào. Gợi ý là tình huống gần nghĩa, không chứa đáp án."})]}),B.jsx("div",{className:"level-switch practice-level-switch",children:Pd.map(M=>B.jsxs("button",{className:a===M?"active":"",onClick:()=>be(M),children:[B.jsx("b",{children:M}),B.jsxs("span",{children:[qi.filter(ee=>ee.level===M).length," từ"]})]},M))}),B.jsxs("div",{className:"practice-mode-switch","aria-label":"Chọn dạng bài tập",children:[B.jsx("button",{className:d==="meaning"?"active":"",onClick:()=>Te("meaning"),children:"01 · Nghĩa từ"}),B.jsx("button",{className:d==="usage"?"active":"",onClick:()=>Te("usage"),children:"02 · Cấu trúc"}),B.jsx("button",{className:d==="dictation"?"active":"",onClick:()=>Te("dictation"),children:"03 · Nghe & gõ"})]}),B.jsxs("div",{className:"practice-layout",children:[d==="meaning"&&B.jsxs("article",{className:"question-card",children:[B.jsxs("div",{className:"question-top",children:[B.jsx("span",{children:"THẺ TỪ VỰNG"}),B.jsxs("span",{className:"score-pill",children:["⚡ Chuỗi ",U]})]}),B.jsxs("div",{className:"direction-toggle","aria-label":"Chọn chiều luyện tập",children:[B.jsx("button",{className:m==="vi-en"?"selected":"",onClick:()=>{v("vi-en"),p(""),S("idle"),b(!1),A(!1),C(!1)},children:"Việt → Anh"}),B.jsx("button",{className:m==="en-vi"?"selected":"",onClick:()=>{v("en-vi"),p(""),S("idle"),b(!1),A(!1),C(!1)},children:"Anh → Việt"})]}),B.jsx("div",{className:"meaning",children:We}),B.jsxs("div",{className:"assist-actions",children:[B.jsx("button",{className:"hint-button",type:"button",onClick:()=>C(M=>!M),children:O?"Ẩn gợi ý":"💡 Mở gợi ý"}),B.jsx("button",{className:"hint-button reveal",type:"button",onClick:kt,children:"Không biết / Hiện đáp án"})]}),O&&B.jsxs("p",{className:"semantic-hint",children:[B.jsx("b",{children:"Gợi ý tình huống:"})," ",Ky(l)]}),B.jsxs("form",{onSubmit:pt,children:[B.jsx("label",{htmlFor:"answer",children:Qe}),B.jsxs("div",{className:"answer-line",children:[B.jsx("input",{id:"answer",disabled:_==="correct",value:g,onChange:M=>p(M.target.value),placeholder:mn,autoFocus:!0}),B.jsx("button",{type:"button",onClick:()=>ma(l.english),"aria-label":"Nghe phát âm tiếng Anh",children:"🔊"})]}),B.jsx("button",{className:"button button-primary full",type:"submit",disabled:_==="correct",children:_==="wrong"?"Kiểm tra lại":"Kiểm tra câu trả lời"})]}),_!=="idle"&&B.jsxs("div",{className:`feedback ${_}`,children:[B.jsx("span",{children:_==="correct"?"Chính xác! Câu ví dụ đang được phát âm.":x?"Đáp án đã mở. Bạn vẫn có thể sửa và kiểm tra lại để nhớ kỹ hơn.":"Chưa đúng. Bạn có thể sửa đáp án và kiểm tra lại, hoặc bấm “Không biết / Hiện đáp án”."}),x&&B.jsxs("p",{className:"answer-context",children:[B.jsx("b",{children:"Đáp án:"})," ",l.english," · ",l.vietnamese,B.jsx("br",{}),B.jsxs("b",{children:[l.collocation||"Ví dụ",":"]})," ",l.example]}),B.jsx("button",{onClick:we,children:"Từ tiếp theo →"})]})]}),d==="usage"&&B.jsxs("article",{className:"question-card usage-card",children:[B.jsxs("div",{className:"question-top",children:[B.jsx("span",{children:"CẤU TRÚC & COLLOCATION"}),B.jsxs("span",{className:"score-pill",children:["⚡ Chuỗi ",U]})]}),B.jsx("p",{className:"usage-label",children:"Chọn dạng từ hoặc giới từ đúng"}),B.jsx("div",{className:"usage-stem",children:Et.stem}),B.jsxs("div",{className:"assist-actions",children:[B.jsx("button",{className:"hint-button",type:"button",onClick:()=>C(M=>!M),children:O?"Ẩn gợi ý":"💡 Mở gợi ý"}),B.jsx("button",{className:"hint-button reveal",type:"button",onClick:Wt,children:"Không biết / Hiện đáp án"})]}),O&&B.jsxs("p",{className:"semantic-hint",children:[B.jsx("b",{children:"Gợi ý:"})," ",Et.hint]}),B.jsx("div",{className:"choice-grid",children:Et.choices.map(M=>B.jsx("button",{disabled:de==="correct",className:R?M===Et.answer?"correct":"wrong-choice":"",onClick:()=>Ge(M),children:M},M))}),de!=="idle"&&B.jsxs("div",{className:`feedback ${de}`,children:[B.jsx("span",{children:de==="correct"?"Chính xác — câu ví dụ đang được phát âm.":R?"Đáp án đúng đã được tô xanh; bạn có thể chọn lại để ghi nhớ.":"Chưa đúng. Bạn có thể chọn lại, hoặc bấm “Không biết / Hiện đáp án”."}),R&&B.jsxs("p",{className:"answer-context",children:[B.jsx("b",{children:"Đáp án:"})," ",Et.answer,B.jsx("br",{}),B.jsx("b",{children:"Quy tắc:"})," ",Et.explanation,B.jsx("br",{}),B.jsx("b",{children:"Ví dụ:"})," ",Et.example]}),B.jsx("button",{onClick:xt,children:"Câu tiếp theo →"})]})]}),d==="dictation"&&B.jsxs("article",{className:"question-card dictation-card",children:[B.jsxs("div",{className:"question-top",children:[B.jsx("span",{children:"NGHE & GÕ TỪ"}),B.jsxs("span",{className:"score-pill",children:["⚡ Chuỗi ",U]})]}),B.jsx("p",{className:"usage-label",children:"Nhấn nghe, sau đó gõ lại từ tiếng Anh bạn nghe được."}),B.jsxs("button",{className:"listen-orb",onClick:()=>ma(l.english),"aria-label":"Nghe từ cần gõ",children:["🔊",B.jsx("span",{children:"Nghe từ"})]}),B.jsxs("div",{className:"assist-actions",children:[B.jsx("button",{className:"hint-button",type:"button",onClick:()=>C(M=>!M),children:O?"Ẩn gợi ý":"💡 Mở gợi ý"}),B.jsx("button",{className:"hint-button reveal",type:"button",onClick:kt,children:"Không biết / Hiện đáp án"})]}),O&&B.jsxs("p",{className:"semantic-hint",children:[B.jsx("b",{children:"Gợi ý tình huống:"})," ",Ky(l)]}),B.jsxs("form",{onSubmit:pt,children:[B.jsx("label",{htmlFor:"dictation-answer",children:"Bạn nghe được từ gì?"}),B.jsxs("div",{className:"answer-line",children:[B.jsx("input",{id:"dictation-answer",disabled:_==="correct",value:g,onChange:M=>p(M.target.value),placeholder:"Gõ từ tiếng Anh…",autoFocus:!0}),B.jsx("button",{type:"button",onClick:()=>ma(l.english),"aria-label":"Nghe lại từ",children:"↻"})]}),B.jsx("button",{className:"button button-primary full",type:"submit",disabled:_==="correct",children:_==="wrong"?"Kiểm tra lại":"Kiểm tra từ đã gõ"})]}),x&&B.jsxs("div",{className:"meaning-reveal",children:[B.jsx("span",{children:_==="correct"?"NGHĨA TIẾNG VIỆT · ĐÃ MỞ KHÓA":"ĐÁP ÁN ĐÚNG"}),B.jsx("strong",{children:l.english}),B.jsxs("p",{children:[l.vietnamese," · ",l.collocation||"Xem ví dụ ở phần đáp án."]})]}),_!=="idle"&&B.jsxs("div",{className:`feedback ${_}`,children:[B.jsx("span",{children:_==="correct"?"Chính xác! Câu ví dụ đang được phát âm.":x?"Đáp án đúng đã hiện; bạn có thể nghe lại, sửa và kiểm tra lại.":"Chưa đúng. Bạn có thể nghe lại và sửa, hoặc bấm “Không biết / Hiện đáp án”."}),x&&B.jsxs("p",{className:"answer-context",children:[B.jsx("b",{children:"Ví dụ:"})," ",l.example]}),B.jsx("button",{onClick:we,children:"Từ tiếp theo →"})]})]}),B.jsxs("aside",{className:"practice-aside",children:[B.jsx("p",{className:"eyebrow dark",children:"TIẾN ĐỘ PHIÊN NÀY"}),B.jsxs("div",{className:"accuracy-ring",style:{background:`conic-gradient(#78c6ad ${F*3.6}deg, #315e5d 0deg)`},children:[B.jsxs("strong",{children:[F,"%"]}),B.jsx("span",{children:"chính xác"})]}),B.jsxs("div",{className:"quick-stat",children:[B.jsx("span",{children:"Đã làm"}),B.jsxs("b",{children:[w," câu"]})]}),B.jsxs("div",{className:"quick-stat",children:[B.jsx("span",{children:"Đúng"}),B.jsxs("b",{children:[H," câu"]})]}),B.jsx("button",{className:"text-button left",onClick:d==="usage"?xt:we,children:d==="usage"?"Bỏ qua câu này →":"Bỏ qua từ này →"})]})]})]}),h==="vocabulary"&&B.jsxs("section",{className:"vocab-view",children:[B.jsxs("div",{className:"page-title",children:[B.jsxs("p",{className:"eyebrow dark",children:["KHO TỪ VỰNG · ",a]}),B.jsx("h1",{children:"Từ vựng theo bậc."}),B.jsx("p",{children:"Mỗi bậc là một kho riêng: chọn A2, B1, B2 hoặc C1 để học đúng danh sách của bậc đó."})]}),B.jsx("div",{className:"level-switch vocab-level-switch",children:Pd.map(M=>B.jsxs("button",{className:a===M?"active":"",onClick:()=>be(M),children:[B.jsx("b",{children:M}),B.jsxs("span",{children:[qi.filter(ee=>ee.level===M).length," từ"]})]},M))}),B.jsxs("div",{className:"vocab-toolbar",children:[B.jsxs("label",{children:[B.jsx("span",{children:"⌕"}),B.jsx("input",{value:X,onChange:M=>me(M.target.value),placeholder:"Tìm từ hoặc nghĩa tiếng Việt"})]}),B.jsxs("span",{children:[Me.length," kết quả ",a]})]}),B.jsxs("div",{className:"vocab-layout",children:[B.jsx("section",{className:"word-browser","aria-label":`Danh sách từ vựng bậc ${a}`,children:Ee.length?Ee.map(([M,ee])=>B.jsxs("section",{className:"word-group",children:[B.jsxs("header",{children:[B.jsx("p",{children:M}),B.jsxs("span",{children:[ee.length," từ"]})]}),B.jsx("div",{className:"word-grid",children:ee.map(ve=>B.jsxs("button",{className:le.english===ve.english&&le.vietnamese===ve.vietnamese?"word-item selected":"word-item",onClick:()=>{$(ve),oe(!1)},children:[B.jsxs("span",{children:[ve.english,B.jsx("small",{children:ve.vietnamese})]}),B.jsx("b",{children:"→"})]},`${ve.section}-${ve.english}-${ve.vietnamese}`))})]},M)):B.jsxs("p",{className:"empty-words",children:["Không có từ nào khớp với tìm kiếm này trong bậc ",a,"."]})}),B.jsx("section",{className:`flashcard ${Y?"flipped":""}`,onClick:()=>oe(M=>!M),role:"button",tabIndex:0,onKeyDown:M=>M.key==="Enter"&&oe(ee=>!ee),children:B.jsxs("div",{className:"flashcard-inner",children:[B.jsxs("div",{className:"flashcard-front",children:[B.jsxs("p",{children:["TỪ VỰNG · ",le.level]}),B.jsx("h2",{children:le.english}),B.jsx("button",{type:"button",onClick:M=>{M.stopPropagation(),ma(le.english)},children:"🔊 Nghe phát âm"}),B.jsx("span",{children:"Chạm để lật thẻ"})]}),B.jsxs("div",{className:"flashcard-back",children:[B.jsx("p",{children:"NGHĨA & NGỮ CẢNH"}),B.jsx("h2",{children:le.vietnamese}),B.jsxs("div",{children:[B.jsx("b",{children:le.collocation}),B.jsx("q",{children:le.example})]}),B.jsx("span",{children:"Chạm để xem từ tiếng Anh"})]})]})})]})]})]})}SS.createRoot(document.getElementById("root")).render(B.jsx(_t.StrictMode,{children:B.jsx(QE,{})}));
