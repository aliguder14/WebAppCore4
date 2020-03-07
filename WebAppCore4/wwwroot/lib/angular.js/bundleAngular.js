/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.8"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.8",major:1,minor:7,dot:8,codeName:"enthusiastic-oblation"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&(a||(a={}),r(d,function(b,d){null==a[d]&&(a[d]="")}));a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y,z){'use strict';function Fa(a,b,c){if(!a)throw Pa("areq",b||"?",c||"required");return a}function Ga(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;Z(a)&&(a=a.join(" "));Z(b)&&(b=b.join(" "));return a+" "+b}function Qa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function $(a,b,c){var d="";a=Z(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,k){a&&0<a.length&&(d+=0<k?" ":"",d+=c?b+a:a+b)});return d}function Ha(a){if(a instanceof A)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return A(va(a))}if(1===a.nodeType)return A(a)}function va(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){s(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function aa(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
N;a.domOperation=function(){a.$$domOperationFired=!0;b();b=N};a.$$prepared=!0}return a}function ha(a,b){Ia(a,b);Ja(a,b)}function Ia(a,b){b.from&&(a.css(b.from),b.from=null)}function Ja(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),k=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),f,k);c.preparationClasses&&(d.preparationClasses=ba(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==N?d.domOperation:null;wa(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){G(a)&&(a=a.split(" "));var c={};s(a,function(a){a.length&&(c[a]=!0)});return c}var f={};a=d(a);b=d(b);s(b,function(a,c){f[c]=1});c=d(c);s(c,function(a,c){f[c]=1===f[c]?null:-1});var k={addClass:"",removeClass:""};s(f,function(c,b){var d,f;1===c?(d="addClass",
f=!a[b]||a[b+"-remove"]):-1===c&&(d="removeClass",f=a[b]||a[b+"-add"]);f&&(k[d].length&&(k[d]+=" "),k[d]+=b)});return k}function K(a){return a instanceof A?a[0]:a}function Ua(a,b,c,d){a="";c&&(a=$(c,"ng-",!0));d.addClass&&(a=ba(a,$(d.addClass,"-add")));d.removeClass&&(a=ba(a,$(d.removeClass,"-remove")));a.length&&(d.preparationClasses=a,b.addClass(a))}function xa(a,b){var c=b?"paused":"",d=ca+"PlayState";ma(a,[d,c]);return[d,c]}function ma(a,b){a.style[b[0]]=b[1]}function ba(a,b){return a?b?a+" "+
b:a:b}function Ka(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,c){var b=f[a];if(b){var L=b.charAt(0);if("-"===L||"+"===L||0<=L)b=Va(b);0===b&&(b=null);d[c]=b}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ya(a){return 0===a||null!=a}function La(a,b){var c=M,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Ma(a,b,c){s(c,
function(c){a[c]=za(a[c])?a[c]:b.style.getPropertyValue(c)})}var M,Aa,ca,Ba;void 0===Y.ontransitionend&&void 0!==Y.onwebkittransitionend?(M="WebkitTransition",Aa="webkitTransitionEnd transitionend"):(M="transition",Aa="transitionend");void 0===Y.onanimationend&&void 0!==Y.onwebkitanimationend?(ca="WebkitAnimation",Ba="webkitAnimationEnd animationend"):(ca="animation",Ba="animationend");var qa=ca+"Delay",Ca=ca+"Duration",na=M+"Delay",Na=M+"Duration",Pa=z.$$minErr("ng"),ra={blockTransitions:function(a,
b){var c=b?"-"+b+"s":"";ma(a,[na,c]);return[na,c]}},Wa={transitionDuration:Na,transitionDelay:na,transitionProperty:M+"Property",animationDuration:Ca,animationDelay:qa,animationIterationCount:ca+"IterationCount"},Xa={transitionDuration:Na,transitionDelay:na,animationDuration:Ca,animationDelay:qa},Da,wa,s,Z,za,sa,Ea,ta,G,R,A,N;z.module("ngAnimate",[],function(){N=z.noop;Da=z.copy;wa=z.extend;A=z.element;s=z.forEach;Z=z.isArray;G=z.isString;ta=z.isObject;R=z.isUndefined;za=z.isDefined;Ea=z.isFunction;
sa=z.isElement}).info({angularVersion:"1.7.8"}).directive("ngAnimateSwap",["$animate",function(a){return{restrict:"A",transclude:"element",terminal:!0,priority:550,link:function(b,c,d,f,k){var e,Q;b.$watchCollection(d.ngAnimateSwap||d["for"],function(b){e&&a.leave(e);Q&&(Q.$destroy(),Q=null);(b||0===b)&&k(function(b,d){e=b;Q=d;a.enter(b,null,c)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===
a)}var k=d.ngAnimateChildren;G(k)&&0===k.length?c.data("$$ngAnimateChildren",!0):(f(a(k)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),e=0;e<b.length;e++)b[e]();f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){return{addClass:a.addClass,
removeClass:a.removeClass,from:a.from,to:a.to}}function c(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function d(a,b){if(a&&b){var d=c(b);return a.split(" ").some(function(a){return d[a]})}}function f(a,b,c){return e[a].some(function(a){return a(b,c)})}function k(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&k(a)});
e.skip.push(function(a,b){return!a.structural&&!k(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;var c=a.addClass,f=a.removeClass,k=b.addClass,e=b.removeClass;return R(c)&&R(f)||R(k)&&R(e)?!1:d(c,e)||d(f,k)});this.$get=["$$rAF",
"$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(c,d,e,C,U,oa,H,u,t,I,da){function ia(a){O.delete(a.target)}function v(){var a=!1;return function(b){a?b():d.$$postDigest(function(){a=!0;b()})}}function ua(a,b,c){var g=[],l=m[c];l&&s(l,function(l){Oa.call(l.node,b)?g.push(l.callback):"leave"===c&&Oa.call(l.node,a)&&g.push(l.callback)});return g}function h(a,b,c){var l=va(b);return a.filter(function(a){return!(a.node===
l&&(!c||a.callback===c))})}function q(a,J,w){function e(a,b,l,g){u(function(){var a=ua(ia,m,b);a.length?c(function(){s(a,function(a){a(h,l,g)});"close"!==l||m.parentNode||D.off(m)}):"close"!==l||m.parentNode||D.off(m)});a.progress(b,l,g)}function I(a){var b=h,c=n;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),c.activeClasses=null);W(h,n);ha(h,n);n.domOperation();q.complete(!a)}var n=Da(w),h=Ha(a),m=K(h),ia=m&&
m.parentNode,n=pa(n),q=new H,u=v();Z(n.addClass)&&(n.addClass=n.addClass.join(" "));n.addClass&&!G(n.addClass)&&(n.addClass=null);Z(n.removeClass)&&(n.removeClass=n.removeClass.join(" "));n.removeClass&&!G(n.removeClass)&&(n.removeClass=null);n.from&&!ta(n.from)&&(n.from=null);n.to&&!ta(n.to)&&(n.to=null);if(!(B&&m&&fa(m,J,w)&&Ya(m,n)))return I(),q;var x=0<=["enter","move","leave"].indexOf(J),r=da(),P=r||O.get(m);w=!P&&y.get(m)||{};var p=!!w.state;P||p&&1===w.state||(P=!E(m,ia,J));if(P)return r&&
e(q,J,"start",b(n)),I(),r&&e(q,J,"close",b(n)),q;x&&F(m);r={structural:x,element:h,event:J,addClass:n.addClass,removeClass:n.removeClass,close:I,options:n,runner:q};if(p){if(f("skip",r,w)){if(2===w.state)return I(),q;T(h,w,r);return w.runner}if(f("cancel",r,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return T(h,w,r),w.runner;else if(f("join",r,w))if(2===w.state)T(h,r,{});else return Ua(t,h,x?J:null,n),J=r.event=w.event,n=T(h,w,r),w.runner}else T(h,r,{});(p=r.structural)||
(p="animate"===r.event&&0<Object.keys(r.options.to||{}).length||k(r));if(!p)return I(),g(m),q;var C=(w.counter||0)+1;r.counter=C;l(m,1,r);d.$$postDigest(function(){h=Ha(a);var c=y.get(m),d=!c,c=c||{},t=0<(h.parent()||[]).length&&("animate"===c.event||c.structural||k(c));if(d||c.counter!==C||!t){d&&(W(h,n),ha(h,n));if(d||x&&c.event!==J)n.domOperation(),q.end();t||g(m)}else J=!c.structural&&k(c,!0)?"setClass":c.event,l(m,2),c=oa(h,J,c.options),q.setHost(c),e(q,J,"start",b(n)),c.done(function(a){I(!a);
(a=y.get(m))&&a.counter===C&&g(m);e(q,J,"close",b(n))})});return q}function F(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=y.get(a);if(c)switch(b){case 2:c.runner.end();case 1:y.delete(a)}})}function g(a){a.removeAttribute("data-ng-animate");y.delete(a)}function E(a,b,c){c=C[0].body;var l=K(e),g=a===c||"HTML"===a.nodeName,d=a===l,t=!1,m=O.get(a),h;for((a=A.data(a,"$ngAnimatePin"))&&(b=K(a));b;){d||(d=b===l);if(1!==b.nodeType)break;
a=y.get(b)||{};if(!t){var f=O.get(b);if(!0===f&&!1!==m){m=!0;break}else!1===f&&(m=!1);t=a.structural}if(R(h)||!0===h)a=A.data(b,"$$ngAnimateChildren"),za(a)&&(h=a);if(t&&!1===h)break;g||(g=b===c);if(g&&d)break;if(!d&&(a=A.data(b,"$ngAnimatePin"))){b=K(a);continue}b=b.parentNode}return(!t||h)&&!0!==m&&d&&g}function l(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);c=(b=y.get(a))?wa(b,c):c;y.set(a,c)}var y=new U,O=new U,B=null,P=d.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&
(P(),d.$$postDigest(function(){d.$$postDigest(function(){null===B&&(B=!0)})}))}),m=Object.create(null);U=a.customFilter();var la=a.classNameFilter();I=function(){return!0};var fa=U||I,Ya=la?function(a,b){var c=[a.getAttribute("class"),b.addClass,b.removeClass].join(" ");return la.test(c)}:I,W=aa(t),Oa=Y.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},D={on:function(a,b,c){var l=va(b);m[a]=m[a]||[];m[a].push({node:l,callback:c});A(b).on("$destroy",function(){y.get(l)||
D.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var l=m[a];l&&(m[a]=1===arguments.length?null:h(l,b,c))}else for(l in b=arguments[0],m)m[l]=h(m[l],b)},pin:function(a,b){Fa(sa(a),"element","not an element");Fa(sa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,l){c=c||{};c.domOperation=l;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!B;else if(sa(a)){var l=K(a);if(1===c)b=!O.get(l);else{if(!O.has(l))A(a).on("$destroy",
ia);O.set(l,!b)}}else b=B=!!a;return b}};return D}]}]).provider("$$animateCache",function(){var a=0,b=Object.create(null);this.$get=[function(){return{cacheKey:function(b,d,f,k){var e=b.parentNode;b=[e.$$ngAnimateParentKey||(e.$$ngAnimateParentKey=++a),d,b.getAttribute("class")];f&&b.push(f);k&&b.push(k);return b.join(" ")},containsCachedAnimationWithoutDuration:function(a){return(a=b[a])&&!a.isValid||!1},flush:function(){b=Object.create(null)},count:function(a){return(a=b[a])?a.total:0},get:function(a){return(a=
b[a])&&a.value},put:function(a,d,f){b[a]?(b[a].total++,b[a].value=d):b[a]={total:1,value:d,isValid:f}}}}]}).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler","$$animateCache",function(a,d,f,k,e,Q,L){function x(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;f.set(d,a);for(var h;t;){if(h=f.get(t)){h.processed||(h=b(h));break}t=t.parentNode}(h||
c).children.push(a);return a}var c={children:[]},d,f=new e;for(d=0;d<a.length;d++){var da=a[d];f.set(da.domNode,a[d]={domNode:da.domNode,element:da.element,fn:da.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var t=0,f=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=t,t=0,b.push(f),f=[]);f.push(g);g.children.forEach(function(a){t++;c.push(a)});a--}f.length&&b.push(f);return b}(c)}var C=[],U=aa(a);return function(e,
H,u){function t(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function I(a){var b=[],c={};s(a,function(a,d){var l=K(a.element),g=0<=["enter","move"].indexOf(a.event),l=a.structural?t(l):[];if(l.length){var f=g?"to":"from";s(l,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:A(a)}})}else b.push(a)});var d={},g={};s(c,function(c,
t){var f=c.from,e=c.to;if(f&&e){var h=a[f.animationID],k=a[e.animationID],E=f.animationID.toString();if(!g[E]){var I=g[E]={structural:!0,beforeStart:function(){h.beforeStart();k.beforeStart()},close:function(){h.close();k.close()},classes:da(h.classes,k.classes),from:h,to:k,anchors:[]};I.classes.length?b.push(I):(b.push(h),b.push(k))}g[E].anchors.push({out:f.element,"in":e.element})}else f=f?f.animationID:e.animationID,e=f.toString(),d[e]||(d[e]=!0,b.push(a[f]))});return b}function da(a,b){a=a.split(" ");
b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var g=a[d];if("ng-"!==g.substring(0,3))for(var t=0;t<b.length;t++)if(g===b[t]){c.push(g);break}}return c.join(" ")}function ia(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function v(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function ua(){var a=e.data("$$animationRunner");!a||"leave"===H&&u.$$domOperationFired||a.end()}function h(b){e.off("$destroy",
ua);e.removeData("$$animationRunner");U(e,u);ha(e,u);u.domOperation();E&&a.removeClass(e,E);F.complete(!b)}u=pa(u);var q=0<=["enter","move","leave"].indexOf(H),F=new k({end:function(){h()},cancel:function(){h(!0)}});if(!b.length)return h(),F;var g=Ga(e.attr("class"),Ga(u.addClass,u.removeClass)),E=u.tempClasses;E&&(g+=" "+E,u.tempClasses=null);q&&e.data("$$animatePrepareClasses","ng-"+H+"-prepare");e.data("$$animationRunner",F);C.push({element:e,classes:g,event:H,structural:q,options:u,beforeStart:function(){E=
(E?E+" ":"")+"ng-animate";a.addClass(e,E);var b=e.data("$$animatePrepareClasses");b&&a.removeClass(e,b)},close:h});e.on("$destroy",ua);if(1<C.length)return F;d.$$postDigest(function(){var b=[];s(C,function(a){a.element.data("$$animationRunner")?b.push(a):a.close()});C.length=0;var d=I(b),g=[];s(d,function(a){var b=a.from?a.from.element:a.element,c=u.addClass,d=L.cacheKey(b[0],a.event,(c?c+" ":"")+"ng-animate",u.removeClass);g.push({element:b,domNode:K(b),fn:function(){var b,c=a.close;if(L.containsCachedAnimationWithoutDuration(d))c();
else{a.beforeStart();if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var g=ia(a);g&&(b=g.start)}b?(b=b(),b.done(function(a){c(!a)}),v(a,b)):c()}}})});for(var d=x(g),t=0;t<d.length;t++)for(var f=d[t],e=0;e<f.length;e++){var h=f[e],k=h.element;d[t][e]=h.fn;0===t?k.removeData("$$animatePrepareClasses"):(h=k.data("$$animatePrepareClasses"))&&a.addClass(k,h)}Q(d)});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){this.$get=["$window","$$jqLite","$$AnimateRunner",
"$timeout","$$animateCache","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,c,d,f,k,e,Q,L,x){function C(d,f,e,x){var v,s="stagger-"+e;0<k.count(e)&&(v=k.get(s),v||(f=$(f,"-stagger"),c.addClass(d,f),v=Ka(a,d,x),v.animationDuration=Math.max(v.animationDuration,0),v.transitionDuration=Math.max(v.transitionDuration,0),c.removeClass(d,f),k.put(s,v,!0)));return v||{}}function U(a){u.push(a);L.waitUntilQuiet(function(){k.flush();for(var a=e(),b=0;b<u.length;b++)u[b](a);u.length=0})}
function z(c,d,f,e){d=k.get(f);d||(d=Ka(a,c,Wa),"infinite"===d.animationIterationCount&&(d.animationIterationCount=1));k.put(f,d,e||0<d.transitionDuration||0<d.animationDuration);c=d;f=c.animationDelay;e=c.transitionDelay;c.maxDelay=f&&e?Math.max(f,e):f||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var H=aa(c),u=[];return function(a,b){function e(){v()}function L(){v(!0)}function v(b){if(!(P||la&&m)){P=!0;m=!1;V&&!g.$$skipPreparationClasses&&
c.removeClass(a,V);ba&&c.removeClass(a,ba);xa(l,!1);ra.blockTransitions(l,!1);s(y,function(a){l.style[a[0]]=""});H(a,g);ha(a,g);Object.keys(E).length&&s(E,function(a,b){a?l.style.setProperty(b,a):l.style.removeProperty(b)});if(g.onDone)g.onDone();w&&w.length&&a.off(w.join(" "),q);var d=a.data("$$animateCss");d&&(f.cancel(d[0].timer),a.removeData("$$animateCss"));fa&&fa.complete(!b)}}function u(a){p.blockTransition&&ra.blockTransitions(l,a);p.blockKeyframeAnimation&&xa(l,!!a)}function h(){fa=new d({end:e,
cancel:L});U(N);v();return{$$willAnimate:!1,start:function(){return fa},end:e}}function q(a){a.stopPropagation();var b=a.originalEvent||a;b.target===l&&(a=b.$manualTimeStamp||Date.now(),b=parseFloat(b.elapsedTime.toFixed(3)),Math.max(a-J,0)>=G&&b>=D&&(la=!0,v()))}function F(){function b(){if(!P){u(!1);s(y,function(a){l.style[a[0]]=a[1]});H(a,g);c.addClass(a,ba);if(p.recalculateTimingStyles){T=l.getAttribute("class")+" "+V;ka=k.cacheKey(l,ja,g.addClass,g.removeClass);r=z(l,T,ka,!1);ga=r.maxDelay;W=
Math.max(ga,0);D=r.maxDuration;if(0===D){v();return}p.hasTransitions=0<r.transitionDuration;p.hasAnimations=0<r.animationDuration}p.applyAnimationDelay&&(ga="boolean"!==typeof g.delay&&ya(g.delay)?parseFloat(g.delay):ga,W=Math.max(ga,0),r.animationDelay=ga,ea=[qa,ga+"s"],y.push(ea),l.style[ea[0]]=ea[1]);G=1E3*W;R=1E3*D;if(g.easing){var e,h=g.easing;p.hasTransitions&&(e=M+"TimingFunction",y.push([e,h]),l.style[e]=h);p.hasAnimations&&(e=ca+"TimingFunction",y.push([e,h]),l.style[e]=h)}r.transitionDuration&&
w.push(Aa);r.animationDuration&&w.push(Ba);J=Date.now();var m=G+1.5*R;e=J+m;var h=a.data("$$animateCss")||[],F=!0;if(h.length){var n=h[0];(F=e>n.expectedEndTime)?f.cancel(n.timer):h.push(v)}F&&(m=f(d,m,!1),h[0]={timer:m,expectedEndTime:e},h.push(v),a.data("$$animateCss",h));if(w.length)a.on(w.join(" "),q);g.to&&(g.cleanupStyles&&Ma(E,l,Object.keys(g.to)),Ja(a,g))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}if(!P)if(l.parentNode){var e=
function(a){if(la)m&&a&&(m=!1,v());else if(m=!a,r.animationDuration)if(a=xa(l,m),m)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},h=0<aa&&(r.transitionDuration&&0===X.transitionDuration||r.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);h?f(b,Math.floor(h*aa*1E3),!1):b();A.resume=function(){e(!0)};A.pause=function(){e(!1)}}else v()}var g=b||{};g.$$prepared||(g=pa(Da(g)));var E={},l=K(a);if(!l||!l.parentNode||!x.enabled())return h();var y=[],O=
a.attr("class"),B=Qa(g),P,m,la,fa,A,W,G,D,R,J,w=[];if(0===g.duration||!Q.animations&&!Q.transitions)return h();var ja=g.event&&Z(g.event)?g.event.join(" "):g.event,Y=ja&&g.structural,n="",S="";Y?n=$(ja,"ng-",!0):ja&&(n=ja);g.addClass&&(S+=$(g.addClass,"-add"));g.removeClass&&(S.length&&(S+=" "),S+=$(g.removeClass,"-remove"));g.applyClassesEarly&&S.length&&H(a,g);var V=[n,S].join(" ").trim(),T=O+" "+V,O=B.to&&0<Object.keys(B.to).length;if(!(0<(g.keyframeStyle||"").length||O||V))return h();var X,ka=
k.cacheKey(l,ja,g.addClass,g.removeClass);if(k.containsCachedAnimationWithoutDuration(ka))return V=null,h();0<g.stagger?(B=parseFloat(g.stagger),X={transitionDelay:B,animationDelay:B,transitionDuration:0,animationDuration:0}):X=C(l,V,ka,Xa);g.$$skipPreparationClasses||c.addClass(a,V);g.transitionStyle&&(B=[M,g.transitionStyle],ma(l,B),y.push(B));0<=g.duration&&(B=0<l.style[M].length,B=La(g.duration,B),ma(l,B),y.push(B));g.keyframeStyle&&(B=[ca,g.keyframeStyle],ma(l,B),y.push(B));var aa=X?0<=g.staggerIndex?
g.staggerIndex:k.count(ka):0;(n=0===aa)&&!g.skipBlocking&&ra.blockTransitions(l,9999);var r=z(l,T,ka,!Y),ga=r.maxDelay;W=Math.max(ga,0);D=r.maxDuration;var p={};p.hasTransitions=0<r.transitionDuration;p.hasAnimations=0<r.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"===r.transitionProperty;p.applyTransitionDuration=O&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=g.duration&&p.hasAnimations;p.applyTransitionDelay=ya(g.delay)&&(p.applyTransitionDuration||
p.hasTransitions);p.applyAnimationDelay=ya(g.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<S.length;if(p.applyTransitionDuration||p.applyAnimationDuration)D=g.duration?parseFloat(g.duration):D,p.applyTransitionDuration&&(p.hasTransitions=!0,r.transitionDuration=D,B=0<l.style[M+"Property"].length,y.push(La(D,B))),p.applyAnimationDuration&&(p.hasAnimations=!0,r.animationDuration=D,y.push([Ca,D+"s"]));if(0===D&&!p.recalculateTimingStyles)return h();var ba=$(V,"-active");if(null!=g.delay){var ea;
"boolean"!==typeof g.delay&&(ea=parseFloat(g.delay),W=Math.max(ea,0));p.applyTransitionDelay&&y.push([na,ea+"s"]);p.applyAnimationDelay&&y.push([qa,ea+"s"])}null==g.duration&&0<r.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||n);G=1E3*W;R=1E3*D;g.skipBlocking||(p.blockTransition=0<r.transitionDuration,p.blockKeyframeAnimation=0<r.animationDuration&&0<X.animationDelay&&0===X.animationDuration);g.from&&(g.cleanupStyles&&Ma(E,l,Object.keys(g.from)),Ia(a,g));p.blockTransition||
p.blockKeyframeAnimation?u(D):g.skipBlocking||ra.blockTransitions(l,!1);return{$$willAnimate:!0,end:e,start:function(){if(!P)return A={end:e,cancel:L,resume:null,pause:null},fa=new d(A),U(F),fa}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,k,e,Q){function L(a){return a.replace(/\bng-\S+\b/g,"")}function x(a,b){G(a)&&
(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function C(c,e,f){function k(a){var b={},c=K(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=H.scrollTop;break;case "left":d+=H.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function v(){var c=L(f.attr("class")||""),d=x(c,q),c=x(q,c),d=a(h,{to:k(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?
d:null}function C(){h.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim")}var h=A(K(e).cloneNode(!0)),q=L(h.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");h.addClass("ng-anchor");u.append(h);var F;c=function(){var c=a(h,{addClass:"ng-anchor-out",delay:!0,from:k(e)});return c.$$willAnimate?c:null}();if(!c&&(F=v(),!F))return C();var g=c||F;return{start:function(){function a(){c&&c.end()}var b,c=g.start();c.done(function(){c=null;if(!F&&(F=v()))return c=
F.start(),c.done(function(){c=null;C();b.complete()}),c;C();b.complete()});return b=new d({end:a,cancel:a})}}}function z(a,b,c,e){var f=oa(a,N),k=oa(b,N),h=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&h.push(a)});if(f||k||0!==h.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());k&&b.push(k.start());s(h,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function oa(c){var d=c.element,e=c.options||
{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=ba(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!k.animations&&!k.transitions)return N;var H=Q[0].body;c=K(f);var u=A(c.parentNode&&11===c.parentNode.nodeType||H.contains(c)?c:H);return function(a){return a.from&&a.to?z(a.from,a.to,a.classes,a.anchors):oa(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=
["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=Z(c)?c:c.split(" ");for(var d=[],f={},k=0;k<c.length;k++){var s=c[k],z=a.$$registeredAnimations[s];z&&!f[s]&&(d.push(b.get(z)),f[s]=!0)}return d}var k=aa(d);return function(a,b,d,x){function C(){x.domOperation();k(a,x)}function z(a,b,d,f,e){switch(d){case "animate":b=[b,f.from,f.to,e];break;case "setClass":b=[b,t,I,e];break;case "addClass":b=[b,t,e];break;case "removeClass":b=[b,I,e];break;default:b=[b,e]}b.push(f);if(a=a.apply(a,
b))if(Ea(a.start)&&(a=a.start()),a instanceof c)a.done(e);else if(Ea(a))return a;return N}function A(a,b,d,e,f){var h=[];s(e,function(e){var l=e[f];l&&h.push(function(){var e,f,h=!1,k=function(a){h||(h=!0,(f||N)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=z(l,a,b,d,function(a){k(!1===a)});return e})});return h}function H(a,b,d,e,f){var h=A(a,b,d,e,f);if(0===h.length){var k,q;"beforeSetClass"===f?(k=A(a,"removeClass",d,e,"beforeRemoveClass"),q=A(a,"addClass",d,e,"beforeAddClass")):
"setClass"===f&&(k=A(a,"removeClass",d,e,"removeClass"),q=A(a,"addClass",d,e,"addClass"));k&&(h=h.concat(k));q&&(h=h.concat(q))}if(0!==h.length)return function(a){var b=[];h.length&&s(h,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var u=!1;3===arguments.length&&ta(d)&&(x=d,d=null);x=pa(x);d||(d=a.attr("class")||"",x.addClass&&(d+=" "+x.addClass),x.removeClass&&(d+=" "+x.removeClass));var t=x.addClass,I=x.removeClass,G=f(d),K,v;if(G.length){var M,
h;"leave"===b?(h="leave",M="afterLeave"):(h="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(K=H(a,b,x,G,h));v=H(a,b,x,G,M)}if(K||v){var q;return{$$willAnimate:!0,end:function(){q?q.end():(u=!0,C(),ha(a,x),q=new c,q.complete(!0));return q},start:function(){function b(c){u=!0;C();ha(a,x);q.complete(c)}if(q)return q;q=new c;var d,f=[];K&&f.push(function(a){d=K(a)});f.length?f.push(function(a){C();a(!0)}):C();v&&f.push(function(a){d=v(a)});q.setHost({end:function(){u||((d||
N)(void 0),b(void 0))},cancel:function(){u||((d||N)(!0),b(!0))}});c.chain(f,b);return q}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),e=d(a.to);if(b||e)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());e&&
d.push(e.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,l){'use strict';var c="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),m=function(a,e){if(-1!==e.indexOf(a[0].nodeName))return!0};l.module("ngAria",["ng"]).info({angularVersion:"1.7.8"}).provider("$aria",function(){function a(a,c,n,g){return function(d,f,b){if(!b.hasOwnProperty("ngAriaDisable")){var p=b.$normalize(c);!e[p]||m(f,n)||b[p]||d.$watch(b[a],function(b){b=g?!b:!!b;f.attr(c,b)})}}}var e={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,
ariaValue:!0,tabindex:!0,bindKeydown:!0,bindRoleForClick:!0};this.config=function(a){e=l.extend(e,a)};this.$get=function(){return{config:function(a){return e[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",c,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked",
"aria-checked",c,!1)}]).directive("ngReadonly",["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",c,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",c,!1)}]).directive("ngModel",["$aria",function(a){function e(e,g,d,f){return a.config(g)&&!d.attr(e)&&(f||!m(d,c))&&("hidden"!==d.attr("type")||"INPUT"!==d[0].nodeName)}function k(a,e){return!e.attr("role")&&e.attr("type")===a&&!m(e,c)}function h(a,e){var d=a.type,f=a.role;return"checkbox"===
(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(c,g){if(!g.hasOwnProperty("ngAriaDisable")){var d=h(g,c);return{post:function(f,b,c,g){function h(){return g.$modelValue}function m(a){b.attr("aria-checked",c.value==g.$viewValue)}function n(){b.attr("aria-checked",!g.$isEmpty(g.$viewValue))}var l=e("tabindex","tabindex",b,!1);switch(d){case "radio":case "checkbox":k(d,
b)&&b.attr("role",d);e("aria-checked","ariaChecked",b,!1)&&f.$watch(h,"radio"===d?m:n);l&&b.attr("tabindex",0);break;case "range":k(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var q=!b.attr("aria-valuemin")&&(c.hasOwnProperty("min")||c.hasOwnProperty("ngMin")),r=!b.attr("aria-valuemax")&&(c.hasOwnProperty("max")||c.hasOwnProperty("ngMax")),s=!b.attr("aria-valuenow");q&&c.$observe("min",function(a){b.attr("aria-valuemin",a)});r&&c.$observe("max",function(a){b.attr("aria-valuemax",a)});
s&&f.$watch(h,function(a){b.attr("aria-valuenow",a)})}l&&b.attr("tabindex",0)}!c.hasOwnProperty("ngRequired")&&g.$validators.required&&e("aria-required","ariaRequired",b,!1)&&c.$observe("required",function(){b.attr("aria-required",!!c.required)});e("aria-invalid","ariaInvalid",b,!0)&&f.$watch(function(){return g.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",c,!1)}]).directive("ngMessages",function(){return{restrict:"A",
require:"?ngMessages",link:function(a,c,k,h){k.hasOwnProperty("ngAriaDisable")||c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,e){return{restrict:"A",compile:function(k,h){if(!h.hasOwnProperty("ngAriaDisable")){var l=e(h.ngClick);return function(e,d,f){if(!m(d,c)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeydown")&&!f.ngKeydown&&!f.ngKeypress&&
!f.ngKeyup))d.on("keydown",function(a){function d(){l(e,{$event:a})}var f=a.which||a.keyCode;if(13===f||32===f)-1!==c.indexOf(a.target.nodeName)||a.target.isContentEditable||a.preventDefault(),e.$apply(d)})}}}}}]).directive("ngDblclick",["$aria",function(a){return function(e,k,h){h.hasOwnProperty("ngAriaDisable")||!a.config("tabindex")||k.attr("tabindex")||m(k,c)||k.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e){'use strict';function m(d,k,l){var a=l.baseHref(),h=d[0];return function(f,b,c){var d,g;c=c||{};g=c.expires;d=e.isDefined(c.path)?c.path:a;e.isUndefined(b)&&(g="Thu, 01 Jan 1970 00:00:00 GMT",b="");e.isString(g)&&(g=new Date(g));b=encodeURIComponent(f)+"="+encodeURIComponent(b);b=b+(d?";path="+d:"")+(c.domain?";domain="+c.domain:"");b+=g?";expires="+g.toUTCString():"";b+=c.secure?";secure":"";b+=c.samesite?";samesite="+c.samesite:"";c=b.length+1;4096<c&&k.warn("Cookie '"+f+"' possibly not set or overflowed because it was too large ("+
c+" > 4096 bytes)!");h.cookie=b}}e.module("ngCookies",["ng"]).info({angularVersion:"1.7.8"}).provider("$cookies",[function(){var d=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(k,l){return{get:function(a){return k()[a]},getObject:function(a){return(a=this.get(a))?e.fromJson(a):a},getAll:function(){return k()},put:function(a,h,f){l(a,h,f?e.extend({},d,f):d)},putObject:function(a,d,f){this.put(a,e.toJson(d),f)},remove:function(a,h){l(a,void 0,h?e.extend({},d,h):d)}}}]}]);m.$inject=
["$document","$log","$browser"];e.module("ngCookies").provider("$$cookieWriter",function(){this.$get=m})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(){'use strict';function g(a,f){f=f||Error;return function(){var d=arguments[0],e;e="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){e=e+(1==d?"?":"&")+"p"+(d-1)+"=";var q=encodeURIComponent,b;b=arguments[d];b="function"==typeof b?b.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof b?"undefined":"string"!=typeof b?JSON.stringify(b):b;e+=q(b)}return new f(e)}}(function(a){function f(a,b,d){return a[b]||(a[b]=d())}var d=g("$injector"),
e=g("ng");a=f(a,"angular",Object);a.$$minErr=a.$$minErr||g;return f(a,"module",function(){var a={};return function(b,g,l){var m={};if("hasOwnProperty"===b)throw e("badname","module");g&&a.hasOwnProperty(b)&&(a[b]=null);return f(a,b,function(){function a(b,d,e,c){c||(c=f);return function(){c[e||"push"]([b,d,arguments]);return h}}function c(a,d,c){c||(c=f);return function(f,e){e&&"function"===typeof e&&(e.$$moduleName=b);c.push([a,d,arguments]);return h}}if(!g)throw d("nomod",b);var f=[],k=[],n=[],
p=a("$injector","invoke","push",k),h={_invokeQueue:f,_configBlocks:k,_runBlocks:n,info:function(a){if("undefined"!==typeof a){if(null===a||"object"!==typeof a)throw e("aobj","value");m=a;return this}return m},requires:g,name:b,provider:c("$provide","provider"),factory:c("$provide","factory"),service:c("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:c("$provide","decorator",k),animation:c("$animateProvider","register"),filter:c("$filterProvider",
"register"),controller:c("$controllerProvider","register"),directive:c("$compileProvider","directive"),component:c("$compileProvider","component"),config:p,run:function(a){n.push(a);return this}};l&&p(l);return h})}})})(window)})(window);
//# sourceMappingURL=angular-loader.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(l){'use strict';function f(a,b){for(var c=a.split(/\n/g),m=0;m<c.length;m++){var d=c[m];if(b>=d.length)b-=d.length;else return{h:m+1,f:b+1}}}function v(a){function b(){return a}var c=w[a];if(null!=c)return c;b.$$watchDelegate=function(b,c,d){var e=b.$watch(q,function(){c(a,a,b);e()},d);return e};w[a]=b;b.exp=a;b.expressions=[];return b}function D(a,b){function c(c){c=a(c);return null==c?c:c-b}if(0===b)return a;var d;c.$$watchDelegate=function(c,p,e){return d=c.$watch(a,function(a,d){p(null==
a?a:a-b,null==d?d:d-b,c)},e)};return c}function h(a,b){var c=this;this.b=a;this.e=b;if(void 0===b.other)throw e("reqother");this.d=function(a){return c.C(a)};this.d.$$watchDelegate=function(a,b,d){return c.P(a,b,d)};this.d.exp=a.exp;this.d.expressions=a.expressions}function n(a,b,c,d){var e=this;this.scope=b;this.oa=a;this.J=c;this.qa=d;this.U=void 0;this.K=q;this.ka=b.$watch(a.b,function(a){return e.ja(a)},d)}function r(a,b){h.call(this,a,b)}function x(){}function s(a,b,c,d){h.call(this,a,b);this.offset=
c;this.M=d}function y(){}function g(a,b){this.u=a;this.A=b;this.i=[];this.g=[];this.I=[];this.s="";this.q=null}function t(a,b,c){this.c=a;this.scope=b;this.W=void 0;this.J=c;var d=this;this.la=b.$watchGroup(a.g,function(a,b){d.Ea(a,b)})}function u(a,b){b.b=a.b;b.B=a.B;b.v=a.v;b.e=a.e;b.k=a.k;b.c=a.c;b.n=a.n;b.D=a.D;b.l=a.l}function z(a){u(a,this)}function d(a,b,c,d,e,p,f,g){this.text=a;this.index=b||0;this.w=c;this.M=d;this.Da=e;this.pa=!!p;this.u=f;this.A=!!g;this.D=this.c=this.k=this.e=this.v=this.B=
this.b=null;this.L=[];this.F=this.j=this.ca=this.O=this.da=this.l=this.n=this.o=this.a=this.d=null}function A(a){switch(a){case "{":return"}";case "[":return"]";case "(":return")";default:return null}}function E(a){switch(a){case "}":return"{";case "]":return"[";case ")":return"(";default:return null}}var w=Object.create(null);h.prototype.T=function(a){return this.e[this.R(a)]};h.prototype.C=function(a){return this.T(this.b(a))(a)};h.prototype.P=function(a,b,c){var d=new n(this,a,b,c);return function(){d.H()}};
n.prototype.ja=function(a){var b=this;this.K();a=this.oa.T(a);this.K=this.scope.$watch(a,function(a,d){return b.na(a,d)},this.qa)};n.prototype.na=function(a,b){this.J.call(null,a,a===b?a:this.U,this.scope);this.U=a};n.prototype.H=function(){this.ka();this.K()};x.prototype=h.prototype;r.prototype=new x;r.prototype.R=function(a){return void 0!==this.e[a]?a:"other"};y.prototype=h.prototype;s.prototype=new y;s.prototype.R=function(a){if(isNaN(a))return"other";if(void 0!==this.e[a])return a;a=this.M(a-
this.offset);return void 0!==this.e[a]?a:"other"};g.prototype.S=function(){this.s&&(null==this.q?this.i.push(this.s):(this.i.push(this.q.join("")),this.q=null),this.s="")};g.prototype.p=function(a){a.length&&(this.s?this.q?this.q.push(a):this.q=[this.s,a]:this.s=a)};g.prototype.G=function(a){this.S();this.I.push(this.i.length);this.g.push(a);this.i.push("")};g.prototype.ma=function(a){for(var b=Array(this.g.length),c=0;c<this.g.length;c++)b[c]=this.g[c](a);return b};g.prototype.C=function(a){for(var b=
0;b<this.I.length;b++){var c=a[b];if(this.A&&void 0===c)return;this.i[this.I[b]]=c}return this.i.join("")};g.prototype.ea=function(a,b){var c=this;this.S();if(!a||0!==this.g.length){if(0===this.i.length)return v("");this.u&&1<this.i.length&&e.throwNoconcat(b);if(0===this.g.length)return 1!==this.i.length&&this.r(),v(this.i[0]);var d=function(a){return c.C(c.ma(a))};d.$$watchDelegate=function(a,b,d){return c.P(a,b,d)};d.exp=b;d.expressions=Array(this.g.length);for(var f=0;f<this.g.length;f++)d.expressions[f]=
this.g[f].exp;return d}};g.prototype.P=function(a,b){var c=new t(this,a,b);return function(){c.H()}};t.prototype.Ea=function(a,b){var c=this.c.C(a);this.J.call(null,c,a===b?c:this.W,this.scope);this.W=c};t.prototype.H=function(){this.la()};var F=new z(new d("",0,null,null,null,!1,null,!1));d.prototype.pushState=function(){this.L.push(new z(this));u(F,this)};d.prototype.V=function(){0===this.L.length&&this.r();var a=this.L.pop();u(a,this)};d.prototype.m=function(a,b){a.lastIndex=this.index;var c=a.exec(this.text);
return null==c||!0!==b&&c.index!==this.index?null:(this.index=a.lastIndex,c)};d.prototype.t=function(a){return this.m(a,!0)};d.prototype.ha=function(a){return!!this.m(a)};d.prototype.Ba=function(a){this.o=[a];do{for(this.a=this.o.pop();this.a;)this.a();this.ga(this.a)}while(0<this.o.length)};d.prototype.r=function(){throw e("logicbug",this.text);};d.prototype.ga=function(a){void 0===a&&this.r()};var G=/\s*(\w+)\s*/g;d.prototype.ia=function(){var a=this.m(G);if(null==a)throw a=f(this.text,this.index),
e("reqarg",a.h,a.f,this.text);var b=a[1];if("select"===b||"plural"===b)throw a=f(this.text,this.index),e("reqcomma",b,a.h,a.f,this.text);a=f(this.text,this.index);throw e("unknarg",b,a.h,a.f,this.text);};d.prototype.Ca=function(a){this.da=a.index;this.O=a[0];this.ca="'"===this.O?H:I;this.a=this.ua};var H=/\\(?:\\|'|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{2}|[0-7]{3}|\r\n|\n|[\s\S])|'/g,I=/\\(?:\\|"|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{2}|[0-7]{3}|\r\n|\n|[\s\S])|"/g;d.prototype.ua=function(){var a=this.t(this.ca);if(null==
a)throw a=f(this.text,this.da),e("untermstr",a.h,a.f,this.text);a[0]===this.O&&(this.a=null)};var J=/\s*(plural|select)\s*,\s*/g;d.prototype.ya=function(){var a=this.t(J);null==a&&this.ia();switch(a[1]){case "plural":this.a=this.za;break;case "select":this.a=this.Aa;break;default:this.r()}};d.prototype.za=function(){this.e=Object.create(null);this.n=this.N;this.a=this.xa};d.prototype.Aa=function(){this.e=Object.create(null);this.a=this.n=this.ba};var k=/[0]|(?:[1-9][0-9]*)/g,K=new RegExp("\\s*offset\\s*:\\s*("+
k.source+")","g");d.prototype.xa=function(){var a=this.m(K);this.v=null==a?0:parseInt(a[1],10);this.B=D(this.b,this.v);this.a=this.N};d.prototype.Q=function(a,b){if(void 0!==this.e[a]){var c=f(this.text,b);throw e("dupvalue",a,c.h,c.f,this.text);}};var L=/\s*(\w+)/g;d.prototype.ba=function(){var a=this.m(L);null==a?(this.d=(new r(this.b,this.e)).d,this.a=null):(this.k=a[1],this.Q(this.k,a.index),this.a=this.aa)};var M=new RegExp("\\s*(?:(?:=("+k.source+"))|(\\w+))","g");d.prototype.N=function(){var a=
this.m(M);null==a?(this.d=(new s(this.b,this.e,this.v,this.M)).d,this.a=null):(this.k=null!=a[1]?parseInt(a[1],10):a[2],this.Q(this.k,a.index),this.a=this.aa)};var N=/\s*\{/g;d.prototype.aa=function(){if(!this.ha(N)){var a=f(this.text,this.index);throw e("reqopenbrace",this.k,a.h,a.f,this.text);}this.D=this.index;this.c=new g(this.u,this.A);this.a=this.$};var O=/\\.|{{|}/g,P=/\\.|{{|#|}/g,B=/\\.|{{/g;d.prototype.fa=function(){var a=this.index,b;if(null==this.n){if(b=this.t(B),null==b)return this.F=
this.text.substring(a),this.index=this.text.length,null}else if(b=this.t(this.n===this.N?P:O),null==b)throw a=f(this.text,this.D),e("reqendbrace",this.k,a.h,a.f,this.text);var c=b[0];this.F=this.text.substring(a,b.index);return c};d.prototype.$=function(){var a=this.index,b=this.fa();null==b?(this.index=this.text.length,this.c.p(this.text.substring(a)),this.a=null):"\\"===b[0]?this.c.p(this.F+b[1]):(this.c.p(this.F),"{{"===b?(this.pushState(),this.o.push(this.ta),this.a=this.X):"}"===b?(this.e[this.k]=
this.c.ea(!1,this.text),this.a=this.n):"#"===b?this.c.G(this.B):this.r())};d.prototype.va=function(){this.c=new g(this.u,this.A);this.a=this.Z};d.prototype.Z=function(){var a=this.index,b=this.t(B);if(null==b)this.index=this.text.length,this.c.p(this.text.substring(a)),this.d=this.c.ea(this.pa,this.text),this.a=null;else{var c=b[0];"\\"===c[0]?this.c.p(this.text.substring(a,b.index)+c[1]):(this.c.p(this.text.substring(a,b.index)),this.pushState(),this.o.push(this.wa),this.a=this.X)}};d.prototype.wa=
function(){var a=this.d;this.V();this.c.G(a);this.a=this.Z};d.prototype.X=function(){this.d=null;this.o.push(this.sa);this.a=this.ra};d.prototype.ta=function(){var a=this.d;this.V();this.c.G(a);this.a=this.$};var Q=/\s*}}/g;d.prototype.sa=function(){if(null==this.m(Q)){var a=f(this.text,this.index);throw e("reqendinterp","}}",a.h,a.f,this.text);}null==this.d&&(this.d=this.w(this.b,this.Da),this.d.exp=this.b.exp,this.d.expressions=this.b.expressions);this.a=null};d.prototype.ra=function(){this.j=[];
this.l=this.index;this.a=this.Y};var R=/[[\]{}()'",]/g;d.prototype.Y=function(){var a=this.t(R);if(null==a){if(0===this.j.length){this.index=this.text.length;this.b=this.w(this.text.substring(this.l,this.index));this.b.exp=this.text.substring(this.l,this.index);this.b.expressions=this.b.expressions;this.a=null;return}throw e("badexpr",this.Ga(this.j[0]),this.text);}var b=a[0];if("'"===b||'"'===b)this.o.push(this.Y),this.Ca(a);else if(","===b){if(this.u)throw a=f(this.text,this.index),e("unsafe",this.u,
a.h,a.f,this.text);0===this.j.length&&(this.b=this.w(this.text.substring(this.l,a.index)),this.b.exp=this.text.substring(this.l,a.index),this.b.expressions=this.b.expressions,this.a=null,this.a=this.ya)}else if(null!=A(b))this.j.unshift(b);else{var c=E(b);null==c&&this.r();if(0<this.j.length){if(c===this.j[0]){this.j.shift();return}a=f(this.text,this.index);throw e("badexpr",b,a.h,a.f,A(this.j[0]),this.text);}this.index=a.index;this.b=this.w(this.text.substring(this.l,this.index));this.b.exp=this.text.substring(this.l,
this.index);this.b.expressions=this.b.expressions;this.a=null}};var S=["$$messageFormat","$delegate",function(a,b){if("{{"!==b.startSymbol()||"}}"!==b.endSymbol())throw e("nochgmustache");var c=a.interpolate;c.startSymbol=b.startSymbol;c.endSymbol=b.endSymbol;return c}],e,q,C,k=l.angular.module("ngMessageFormat",["ng"]);k.info({angularVersion:"1.7.8"});k.factory("$$messageFormat",["$parse","$locale","$sce","$exceptionHandler",function(a,b,c,f){function g(a,b,d){return function(g){try{return g=a?c.getTrusted(a,
g):c.valueOf(g),b&&void 0===g?g:C(g)}catch(h){f(e.interr(d,h))}}}return{interpolate:function(c,e,f,h){c=new d(c,0,a,b.pluralCat,g(f,h,c),e,f,h);c.Ba(c.va);return c.d}}}]);k.config(["$provide",function(a){e=l.angular.$interpolateMinErr;q=l.angular.noop;C=l.angular.$$stringify;a.decorator("$interpolate",S)}])})(window,window.Fa);
//# sourceMappingURL=angular-message-format.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z,l){'use strict';function q(n){return["$animate",function(u){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(m,f,a,e,r){var b,h,s;if(!n){b=f[0];s=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var k=function(c){h=c?v(c)?c:c.split(/[\s,]+/):null;e.reRender()};a?(k(m.$eval(a)),m.$watchCollection(a,k)):k(s)}var g,t;e.register(b,t={test:function(c){var b=h;c=b?v(b)?0<=b.indexOf(c):b.hasOwnProperty(c):void 0;return c},attach:function(){g||
r(function(c,a){u.enter(c,null,f);g=c;var d=g.$$attachId=e.getAttachId();g.on("$destroy",function(){g&&g.$$attachId===d&&(e.deregister(b,n),t.detach());a.$destroy()})})},detach:function(){if(g){var c=g;g=null;u.leave(c)}}},n);m.$on("$destroy",function(){e.deregister(b,n)})}}}]}var x,v,p,y;l.module("ngMessages",[],function(){x=l.forEach;v=l.isArray;p=l.isString;y=l.element}).info({angularVersion:"1.7.8"}).directive("ngMessages",["$animate",function(n){function u(f,a){return p(a)&&0===a.length||m(f.$eval(a))}
function m(f){return p(f)?f.length:!!f}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(f,a,e){function r(c,b){for(var d=b,a=[];d&&d!==c;){var e=d.$$ngMessageNode;if(e&&e.length)return k[e];d.childNodes.length&&-1===a.indexOf(d)?(a.push(d),d=d.childNodes[d.childNodes.length-1]):d.previousSibling?d=d.previousSibling:(d=d.parentNode,a.push(d))}}var b=this,h=0,s=0;this.getAttachId=function(){return s++};var k=this.messages={},g,t;this.render=function(c){c=c||
{};g=!1;t=c;for(var w=u(a,e.ngMessagesMultiple)||u(a,e.multiple),d=[],r={},h=0,k=b.head,s=!1,l=0;null!=k;){l++;var p=k.message,q=!1;s||x(c,function(b,c){m(b)&&!q&&(h++,p.test(c)&&!r[c]&&(q=r[c]=!0,p.attach()))});q?s=!w:d.push(p);k=k.next}x(d,function(c){c.detach()});c=d.length!==l;(w=b.default&&!c&&0<h)?b.default.attach():b.default&&b.default.detach();c||w?n.setClass(f,"ng-active","ng-inactive"):n.setClass(f,"ng-inactive","ng-active")};a.$watchCollection(e.ngMessages||e["for"],b.render);this.reRender=
function(){g||(g=!0,a.$evalAsync(function(){g&&t&&b.render(t)}))};this.register=function(c,a,d){if(d)b.default=a;else{d=h.toString();k[d]={message:a};var e=f[0];a=k[d];b.head?(e=r(e,c))?(a.next=e.next,e.next=a):(a.next=b.head,b.head=a):b.head=a;c.$$ngMessageNode=d;h++}b.reRender()};this.deregister=function(a,e){if(e)delete b.default;else{var d=a.$$ngMessageNode;delete a.$$ngMessageNode;var g=k[d];if(g){var h=r(f[0],a);h?h.next=g.next:b.head=g.next}delete k[d]}b.reRender()}}]}}]).directive("ngMessagesInclude",
["$templateRequest","$document","$compile",function(n,l,m){function f(a,e){var f=m.$$createComment?m.$$createComment("ngMessagesInclude",e):l[0].createComment(" ngMessagesInclude: "+e+" "),f=y(f);a.after(f);a.remove()}return{restrict:"AE",require:"^^ngMessages",link:function(a,e,l){var b=l.ngMessagesInclude||l.src;n(b).then(function(h){a.$$destroyed||(p(h)&&!h.trim()?f(e,b):m(h)(a,function(a){e.after(a);f(e,b)}))})}}}]).directive("ngMessage",q()).directive("ngMessageExp",q()).directive("ngMessageDefault",
q(!0))})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/**
 * @license AngularJS v1.7.8
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {

'use strict';

/* global routeToRegExp: true */

/**
 * @param {string} path - The path to parse. (It is assumed to have query and hash stripped off.)
 * @param {Object} opts - Options.
 * @return {Object} - An object containing an array of path parameter names (`keys`) and a regular
 *     expression (`regexp`) that can be used to identify a matching URL and extract the path
 *     parameter values.
 *
 * @description
 * Parses the given path, extracting path parameter names and a regular expression to match URLs.
 *
 * Originally inspired by `pathRexp` in `visionmedia/express/lib/utils.js`.
 */
function routeToRegExp(path, opts) {
  var keys = [];

  var pattern = path
    .replace(/([().])/g, '\\$1')
    .replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function(_, slash, key, option) {
      var optional = option === '?' || option === '*?';
      var star = option === '*' || option === '*?';
      keys.push({name: key, optional: optional});
      slash = slash || '';
      return (
        (optional ? '(?:' + slash : slash + '(?:') +
        (star ? '(.+?)' : '([^/]+)') +
        (optional ? '?)?' : ')')
      );
    })
    .replace(/([/$*])/g, '\\$1');

  if (opts.ignoreTrailingSlashes) {
    pattern = pattern.replace(/\/+$/, '') + '/*';
  }

  return {
    keys: keys,
    regexp: new RegExp(
      '^' + pattern + '(?:[?#]|$)',
      opts.caseInsensitiveMatch ? 'i' : ''
    )
  };
}

'use strict';

/* global routeToRegExp: false */

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 *
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc.
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = [
    '$log', '$$taskTrackerFactory',
    function($log, $$taskTrackerFactory) {
      return new angular.mock.$Browser($log, $$taskTrackerFactory);
    }
  ];
};

angular.mock.$Browser = function($log, $$taskTrackerFactory) {
  var self = this;
  var taskTracker = $$taskTrackerFactory($log);

  this.isMock = true;
  self.$$url = 'http://server/';
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // Task-tracking API
  self.$$completeOutstandingRequest = taskTracker.completeTask;
  self.$$incOutstandingRequestCount = taskTracker.incTaskCount;
  self.notifyWhenNoOutstandingRequests = taskTracker.notifyWhenNoPendingTasks;

  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay, taskType) {
    var timeoutId = self.deferredNextId++;

    delay = delay || 0;
    taskType = taskType || taskTracker.DEFAULT_TASK_TYPE;

    taskTracker.incTaskCount(taskType);
    self.deferredFns.push({
      id: timeoutId,
      type: taskType,
      time: (self.defer.now + delay),
      fn: fn
    });
    self.deferredFns.sort(function(a, b) { return a.time - b.time; });

    return timeoutId;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var taskIndex;

    angular.forEach(self.deferredFns, function(task, index) {
      if (task.id === deferId) taskIndex = index;
    });

    if (angular.isDefined(taskIndex)) {
      var task = self.deferredFns.splice(taskIndex, 1)[0];
      taskTracker.completeTask(angular.noop, task.type);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * See {@link ngMock.$flushPendingsTasks} for more info.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    var nextTime;

    if (angular.isDefined(delay)) {
      // A delay was passed so compute the next time
      nextTime = self.defer.now + delay;
    } else if (self.deferredFns.length) {
      // No delay was passed so set the next time so that it clears the deferred queue
      nextTime = self.deferredFns[self.deferredFns.length - 1].time;
    } else {
      // No delay passed, but there are no deferred tasks so flush - indicates an error!
      throw new Error('No deferred tasks to be flushed');
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= nextTime) {
      // Increment the time and call the next deferred function
      self.defer.now = self.deferredFns[0].time;
      var task = self.deferredFns.shift();
      taskTracker.completeTask(task.fn, task.type);
    }

    // Ensure that the current time is correct
    self.defer.now = nextTime;
  };

  /**
   * @name $browser#defer.getPendingTasks
   *
   * @description
   * Returns the currently pending tasks that need to be flushed.
   * You can request a specific type of tasks only, by specifying a `taskType`.
   *
   * @param {string=} taskType - The type tasks to return.
   */
  self.defer.getPendingTasks = function(taskType) {
    return !taskType
        ? self.deferredFns
        : self.deferredFns.filter(function(task) { return task.type === taskType; });
  };

  /**
   * @name $browser#defer.formatPendingTasks
   *
   * @description
   * Formats each task in a list of pending tasks as a string, suitable for use in error messages.
   *
   * @param {Array<Object>} pendingTasks - A list of task objects.
   * @return {Array<string>} A list of stringified tasks.
   */
  self.defer.formatPendingTasks = function(pendingTasks) {
    return pendingTasks.map(function(task) {
      return '{id: ' + task.id + ', type: ' + task.type + ', time: ' + task.time + '}';
    });
  };

  /**
   * @name $browser#defer.verifyNoPendingTasks
   *
   * @description
   * Verifies that there are no pending tasks that need to be flushed.
   * You can check for a specific type of tasks only, by specifying a `taskType`.
   *
   * See {@link $verifyNoPendingTasks} for more info.
   *
   * @param {string=} taskType - The type tasks to check for.
   */
  self.defer.verifyNoPendingTasks = function(taskType) {
    var pendingTasks = self.defer.getPendingTasks(taskType);

    if (pendingTasks.length) {
      var formattedTasks = self.defer.formatPendingTasks(pendingTasks).join('\n  ');
      throw new Error('Deferred tasks to flush (' + pendingTasks.length + '):\n  ' +
          formattedTasks);
    }
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

  /**
   * @name $browser#poll
   *
   * @description
   * run all fns in pollFns
   */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      // The `$browser` service trims empty hashes; simulate it.
      this.$$url = url.replace(/#$/, '');
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  }
};

/**
 * @ngdoc service
 * @name $flushPendingTasks
 *
 * @description
 * Flushes all currently pending tasks and executes the corresponding callbacks.
 *
 * Optionally, you can also pass a `delay` argument to only flush tasks that are scheduled to be
 * executed within `delay` milliseconds. Currently, `delay` only applies to timeouts, since all
 * other tasks have a delay of 0 (i.e. they are scheduled to be executed as soon as possible, but
 * still asynchronously).
 *
 * If no delay is specified, it uses a delay such that all currently pending tasks are flushed.
 *
 * The types of tasks that are flushed include:
 *
 * - Pending timeouts (via {@link $timeout}).
 * - Pending tasks scheduled via {@link ng.$rootScope.Scope#$applyAsync $applyAsync}.
 * - Pending tasks scheduled via {@link ng.$rootScope.Scope#$evalAsync $evalAsync}.
 *   These include tasks scheduled via `$evalAsync()` indirectly (such as {@link $q} promises).
 *
 * <div class="alert alert-info">
 *   Periodic tasks scheduled via {@link $interval} use a different queue and are not flushed by
 *   `$flushPendingTasks()`. Use {@link ngMock.$interval#flush $interval.flush(millis)} instead.
 * </div>
 *
 * @param {number=} delay - The number of milliseconds to flush.
 */
angular.mock.$FlushPendingTasksProvider = function() {
  this.$get = [
    '$browser',
    function($browser) {
      return function $flushPendingTasks(delay) {
        return $browser.defer.flush(delay);
      };
    }
  ];
};

/**
 * @ngdoc service
 * @name $verifyNoPendingTasks
 *
 * @description
 * Verifies that there are no pending tasks that need to be flushed. It throws an error if there are
 * still pending tasks.
 *
 * You can check for a specific type of tasks only, by specifying a `taskType`.
 *
 * Available task types:
 *
 * - `$timeout`: Pending timeouts (via {@link $timeout}).
 * - `$http`: Pending HTTP requests (via {@link $http}).
 * - `$route`: In-progress route transitions (via {@link $route}).
 * - `$applyAsync`: Pending tasks scheduled via {@link ng.$rootScope.Scope#$applyAsync $applyAsync}.
 * - `$evalAsync`: Pending tasks scheduled via {@link ng.$rootScope.Scope#$evalAsync $evalAsync}.
 *   These include tasks scheduled via `$evalAsync()` indirectly (such as {@link $q} promises).
 *
 * <div class="alert alert-info">
 *   Periodic tasks scheduled via {@link $interval} use a different queue and are not taken into
 *   account by `$verifyNoPendingTasks()`. There is currently no way to verify that there are no
 *   pending {@link $interval} tasks.
 * </div>
 *
 * @param {string=} taskType - The type of tasks to check for.
 */
angular.mock.$VerifyNoPendingTasksProvider = function() {
  this.$get = [
    '$browser',
    function($browser) {
      return function $verifyNoPendingTasks(taskType) {
        return $browser.defer.verifyNoPendingTasks(taskType);
      };
    }
  ];
};

/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *     mode stores an array of errors in `$exceptionHandler.errors`, to allow later assertion of
   *     them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *     {@link ngMock.$log#reset reset()}.
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *     is a bug in the application or test, so this mock will make these tests fail. For any
   *     implementations that expect exceptions to be thrown, the `rethrow` mode will also maintain
   *     a log of thrown errors in `$exceptionHandler.errors`.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length === 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === 'rethrow') {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error('Unknown mode \'' + mode + '\', only \'log\'/\'rethrow\' modes are allowed!');
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift('Expected $log to be empty! Either a message was logged unexpectedly, or ' +
          'an expected log message was not checked and removed:');
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$$intervalFactory',
       function($browser,   $$intervalFactory) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0,
        setIntervalFn = function(tick, delay, deferred, skipApply) {
          var id = nextRepeatId++;
          var fn = !skipApply ? tick : function() {
            tick();
            $browser.defer.flush();
          };

          repeatFns.push({
            nextTime: (now + (delay || 0)),
            delay: delay || 1,
            fn: fn,
            id: id,
            deferred: deferred
          });
          repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime; });

          return id;
        },
        clearIntervalFn = function(id) {
          for (var fnIndex = repeatFns.length - 1; fnIndex >= 0; fnIndex--) {
            if (repeatFns[fnIndex].id === id) {
              repeatFns.splice(fnIndex, 1);
              break;
            }
          }
        };

    var $interval = $$intervalFactory(setIntervalFn, clearIntervalFn);

    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;

      for (var fnIndex = repeatFns.length - 1; fnIndex >= 0; fnIndex--) {
        if (repeatFns[fnIndex].id === promise.$$intervalId) {
          var deferred = repeatFns[fnIndex].deferred;
          deferred.promise.then(undefined, function() {});
          deferred.reject('canceled');
          repeatFns.splice(fnIndex, 1);
          return true;
        }
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      var before = now;
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        if (task.nextTime === before) {
          // this can only happen the first time
          // a zero-delay interval gets triggered
          task.nextTime++;
        }
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


function jsonStringToDate(string) {
  // The R_ISO8061_STR regex is never going to fit into the 100 char limit!
  // eslit-disable-next-line max-len
  var R_ISO8061_STR = /^(-?\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

  var match;
  if ((match = string.match(R_ISO8061_STR))) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumberInMock(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      // eslint-disable-next-line no-throw-literal
      throw {
        name: 'Illegal Argument',
        message: 'Arg \'' + tsStr + '\' passed into TzDate constructor is not a valid date string'
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumberInMock(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumberInMock(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumberInMock(self.origDate.getUTCDate(), 2) + 'T' +
            padNumberInMock(self.origDate.getUTCHours(), 2) + ':' +
            padNumberInMock(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumberInMock(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumberInMock(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error('Method \'' + methodName + '\' is not implemented in the TzDate mock');
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;


/**
 * @ngdoc service
 * @name $animate
 *
 * @description
 * Mock implementation of the {@link ng.$animate `$animate`} service. Exposes two additional methods
 * for testing animations.
 *
 * You need to require the `ngAnimateMock` module in your test suite for instance `beforeEach(module('ngAnimateMock'))`
 */
angular.mock.animate = angular.module('ngAnimateMock', ['ng'])
  .info({ angularVersion: '1.7.8' })

  .config(['$provide', function($provide) {

    $provide.factory('$$forceReflow', function() {
      function reflowFn() {
        reflowFn.totalReflows++;
      }
      reflowFn.totalReflows = 0;
      return reflowFn;
    });

    $provide.factory('$$animateAsyncRun', function() {
      var queue = [];
      var queueFn = function() {
        return function(fn) {
          queue.push(fn);
        };
      };
      queueFn.flush = function() {
        if (queue.length === 0) return false;

        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];

        return true;
      };
      return queueFn;
    });

    $provide.decorator('$$animateJs', ['$delegate', function($delegate) {
      var runners = [];

      var animateJsConstructor = function() {
        var animator = $delegate.apply($delegate, arguments);
        // If no javascript animation is found, animator is undefined
        if (animator) {
          runners.push(animator);
        }
        return animator;
      };

      animateJsConstructor.$closeAndFlush = function() {
        runners.forEach(function(runner) {
          runner.end();
        });
        runners = [];
      };

      return animateJsConstructor;
    }]);

    $provide.decorator('$animateCss', ['$delegate', function($delegate) {
      var runners = [];

      var animateCssConstructor = function(element, options) {
        var animator = $delegate(element, options);
        runners.push(animator);
        return animator;
      };

      animateCssConstructor.$closeAndFlush = function() {
        runners.forEach(function(runner) {
          runner.end();
        });
        runners = [];
      };

      return animateCssConstructor;
    }]);

    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF', '$animateCss', '$$animateJs',
                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
                            function($delegate,   $timeout,   $browser,   $$rAF,   $animateCss,   $$animateJs,
                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        on: $delegate.on,
        off: $delegate.off,
        pin: $delegate.pin,
        get reflows() {
          return $$forceReflow.totalReflows;
        },
        enabled: $delegate.enabled,
        /**
         * @ngdoc method
         * @name $animate#closeAndFlush
         * @description
         *
         * This method will close all pending animations (both {@link ngAnimate#javascript-based-animations Javascript}
         * and {@link ngAnimate.$animateCss CSS}) and it will also flush any remaining animation frames and/or callbacks.
         */
        closeAndFlush: function() {
          // we allow the flush command to swallow the errors
          // because depending on whether CSS or JS animations are
          // used, there may not be a RAF flush. The primary flush
          // at the end of this function must throw an exception
          // because it will track if there were pending animations
          this.flush(true);
          $animateCss.$closeAndFlush();
          $$animateJs.$closeAndFlush();
          this.flush();
        },
        /**
         * @ngdoc method
         * @name $animate#flush
         * @description
         *
         * This method is used to flush the pending callbacks and animation frames to either start
         * an animation or conclude an animation. Note that this will not actually close an
         * actively running animation (see {@link ngMock.$animate#closeAndFlush `closeAndFlush()`} for that).
         */
        flush: function(hideErrors) {
          $rootScope.$digest();

          var doNextRun, somethingFlushed = false;
          do {
            doNextRun = false;

            if ($$rAF.queue.length) {
              $$rAF.flush();
              doNextRun = somethingFlushed = true;
            }

            if ($$animateAsyncRun.flush()) {
              doNextRun = somethingFlushed = true;
            }
          } while (doNextRun);

          if (!somethingFlushed && !hideErrors) {
            throw new Error('No pending animations ready to be closed or flushed');
          }

          $rootScope.$digest();
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: This is not an injectable instance, just a globally available function.
 *
 * Method for serializing common AngularJS objects (scope, elements, etc..) into strings.
 * It is useful for logging objects to the console when debugging.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * <div class="alert alert-info">
 * **Note**: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 * </div>
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an AngularJS application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * ## Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * ## Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * ## Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').then(function(response) {
      authToken = response.headers('A-Token');
      $scope.user = response.data;
    }).catch(function() {
      $scope.status = 'Failed...';
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).then(function(response) {
        $scope.status = '';
      }).catch(function() {
        $scope.status = 'Failed...';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was sent, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] === 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
  ```
 *
 * ## Dynamic responses
 *
 * You define a response to a request by chaining a call to `respond()` onto a definition or expectation.
 * If you provide a **callback** as the first parameter to `respond(callback)` then you can dynamically generate
 * a response based on the properties of the request.
 *
 * The `callback` function should be of the form `function(method, url, data, headers, params)`.
 *
 * ### Query parameters
 *
 * By default, query parameters on request URLs are parsed into the `params` object. So a request URL
 * of `/list?q=searchstr&orderby=-name` would set `params` to be `{q: 'searchstr', orderby: '-name'}`.
 *
 * ### Regex parameter matching
 *
 * If an expectation or definition uses a **regex** to match the URL, you can provide an array of **keys** via a
 * `params` argument. The index of each **key** in the array will match the index of a **group** in the
 * **regex**.
 *
 * The `params` object in the **callback** will now have properties with these keys, which hold the value of the
 * corresponding **group** in the **regex**.
 *
 * This also applies to the `when` and `expect` shortcut methods.
 *
 *
 * ```js
 *   $httpBackend.expect('GET', /\/user\/(.+)/, undefined, undefined, ['id'])
 *     .respond(function(method, url, data, headers, params) {
 *       // for requested url of '/user/1234' params is {id: '1234'}
 *     });
 *
 *   $httpBackend.whenPATCH(/\/user\/(.+)\/article\/(.+)/, undefined, undefined, ['user', 'article'])
 *     .respond(function(method, url, data, headers, params) {
 *       // for url of '/user/1234/article/567' params is {user: '1234', article: '567'}
 *     });
 * ```
 *
 * ## Matching route requests
 *
 * For extra convenience, `whenRoute` and `expectRoute` shortcuts are available. These methods offer colon
 * delimited matching of the url path, ignoring the query string and trailing slashes. This allows declarations
 * similar to how application routes are configured with `$routeProvider`. Because these methods convert
 * the definition url to regex, declaration order is important. Combined with query parameter parsing,
 * the following is possible:
 *
  ```js
    $httpBackend.whenRoute('GET', '/users/:id')
      .respond(function(method, url, data, headers, params) {
        return [200, MockUserList[Number(params.id)]];
      });

    $httpBackend.whenRoute('GET', '/users')
      .respond(function(method, url, data, headers, params) {
        var userList = angular.copy(MockUserList),
          defaultSort = 'lastName',
          count, pages, isPrevious, isNext;

        // paged api response '/v1/users?page=2'
        params.page = Number(params.page) || 1;

        // query for last names '/v1/users?q=Archer'
        if (params.q) {
          userList = $filter('filter')({lastName: params.q});
        }

        pages = Math.ceil(userList.length / pagingLength);
        isPrevious = params.page > 1;
        isNext = params.page < pages;

        return [200, {
          count:    userList.length,
          previous: isPrevious,
          next:     isNext,
          // sort field -> '/v1/users?sortBy=firstName'
          results:  $filter('orderBy')(userList, params.sortBy || defaultSort)
                      .splice((params.page - 1) * pagingLength, pagingLength)
        }];
      });
  ```
 */
angular.mock.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', createHttpBackendMock];

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      matchLatestDefinition = false,
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy,
      // We cache the original backend so that if both ngMock and ngMockE2E override the
      // service the ngMockE2E version can pass through to the real backend
      originalHttpBackend = $delegate.$$originalHttpBackend || $delegate;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText, 'complete']
          : [200, status, data, headers, 'complete'];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {

    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    xhr.$$events = eventHandlers;
    xhr.upload.$$events = uploadEventHandlers;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        if (timeout.then) {
          timeout.then(function() {
            handlePrematureEnd(angular.isDefined(timeout.$$timeoutId) ? 'timeout' : 'abort');
          });
        } else {
          $timeout(function() {
            handlePrematureEnd('timeout');
          }, timeout);
        }
      }

      handleResponse.description = method + ' ' + url;
      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers, wrapped.params(url));
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''), copy(response[4]));
      }

      function handlePrematureEnd(reason) {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '', undefined, reason);
            break;
          }
        }
      }
    }

    function createFatalError(message) {
      var error = new Error(message);
      // In addition to being converted to a rejection, these errors also need to be passed to
      // the $exceptionHandler and be rethrown (so that the test fails).
      error.$$passToExceptionHandler = true;
      return error;
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw createFatalError('Expected ' + expectation + ' with different data\n' +
          'EXPECTED: ' + prettyPrint(expectation.data) + '\n' +
          'GOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw createFatalError('Expected ' + expectation + ' with different headers\n' +
          'EXPECTED: ' + prettyPrint(expectation.headers) + '\n' +
          'GOT:      ' + prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = matchLatestDefinition ? definitions.length : -1, definition;

    while ((definition = definitions[matchLatestDefinition ? --i : ++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          originalHttpBackend(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers);
        } else throw createFatalError('No response defined !');
        return;
      }
    }

    if (wasExpected) {
      throw createFatalError('No response defined !');
    }

    throw createFatalError('Unexpected request: ' + method + ' ' + url + '\n' +
      (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      ```js
   *      {function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers, params)}
   *      ```
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (Array|Object|string),
   *    response headers (Object), HTTP status text (string), and XMLHttpRequest status (string:
   *    `complete`, `error`, `timeout` or `abort`). The respond method returns the `requestHandler`
   *    object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers, keys) {

    assertArgDefined(arguments, 1, 'url');

    var definition = new MockHttpExpectation(method, url, data, headers, keys),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name  $httpBackend#matchLatestDefinitionEnabled
   * @description
   * This method can be used to change which mocked responses `$httpBackend` returns, when defining
   * them with {@link ngMock.$httpBackend#when $httpBackend.when()} (and shortcut methods).
   * By default, `$httpBackend` returns the first definition that matches. When setting
   * `$http.matchLatestDefinitionEnabled(true)`, it will use the last response that matches, i.e. the
   * one that was added last.
   *
   * ```js
   * hb.when('GET', '/url1').respond(200, 'content', {});
   * hb.when('GET', '/url1').respond(201, 'another', {});
   * hb('GET', '/url1'); // receives "content"
   *
   * $http.matchLatestDefinitionEnabled(true)
   * hb('GET', '/url1'); // receives "another"
   *
   * hb.when('GET', '/url1').respond(201, 'onemore', {});
   * hb('GET', '/url1'); // receives "onemore"
   * ```
   *
   * This is useful if a you have a default response that is overriden inside specific tests.
   *
   * Note that different from config methods on providers, `matchLatestDefinitionEnabled()` can be changed
   * even when the application is already running.
   *
   * @param  {Boolean=} value value to set, either `true` or `false`. Default is `false`.
   *                          If omitted, it will return the current value.
   * @return {$httpBackend|Boolean} self when used as a setter, and the current value when used
   *                                as a getter
   */
  $httpBackend.matchLatestDefinitionEnabled = function(value) {
    if (angular.isDefined(value)) {
      matchLatestDefinition = value;
      return this;
    } else {
      return matchLatestDefinition;
    }
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');

  /**
   * @ngdoc method
   * @name $httpBackend#whenRoute
   * @description
   * Creates a new backend definition that compares only with the requested route.
   *
   * @param {string} method HTTP method.
   * @param {string} url HTTP url string that supports colon param matching.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   * See {@link ngMock.$httpBackend#when `when`} for more info.
   */
  $httpBackend.whenRoute = function(method, url) {
    var parsed = parseRouteUrl(url);
    return $httpBackend.when(method, parsed.regexp, undefined, undefined, parsed.keys);
  };

  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *      ```js
   *      {function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers, params)}
   *      ```
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (Array|Object|string),
   *    response headers (Object), HTTP status text (string), and XMLHttpRequest status (string:
   *    `complete`, `error`, `timeout` or `abort`). The respond method returns the `requestHandler`
   *    object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers, keys) {

    assertArgDefined(arguments, 1, 'url');

    var expectation = new MockHttpExpectation(method, url, data, headers, keys),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current expectation.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current expectation.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current expectation.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current expectation.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current expectation.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current expectation.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives an url
   *   and returns true if the url matches the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');

  /**
   * @ngdoc method
   * @name $httpBackend#expectRoute
   * @description
   * Creates a new request expectation that compares only with the requested route.
   *
   * @param {string} method HTTP method.
   * @param {string} url HTTP url string that supports colon param matching.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   * See {@link ngMock.$httpBackend#expect `expect`} for more info.
   */
  $httpBackend.expectRoute = function(method, url) {
    var parsed = parseRouteUrl(url);
    return $httpBackend.expect(method, parsed.regexp, undefined, undefined, parsed.keys);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes pending requests using the trained responses. Requests are flushed in the order they
   * were made, but it is also possible to skip one or more requests (for example to have them
   * flushed later). This is useful for simulating scenarios where responses arrive from the server
   * in any order.
   *
   * If there are no pending requests to flush when the method is called, an exception is thrown (as
   * this is typically a sign of programming error).
   *
   * @param {number=} count - Number of responses to flush. If undefined/null, all pending requests
   *     (starting after `skip`) will be flushed.
   * @param {number=} [skip=0] - Number of pending requests to skip. For example, a value of `5`
   *     would skip the first 5 pending requests and start flushing from the 6th onwards.
   */
  $httpBackend.flush = function(count, skip, digest) {
    if (digest !== false) $rootScope.$digest();

    skip = skip || 0;
    if (skip >= responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        var part = responses.splice(skip, 1);
        if (!part.length) throw new Error('No more pending request to flush !');
        part[0]();
      }
    } else {
      while (responses.length > skip) {
        responses.splice(skip, 1)[0]();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (responses.length) {
      var unflushedDescriptions = responses.map(function(res) { return res.description; });
      throw new Error('Unflushed requests: ' + responses.length + '\n  ' +
                      unflushedDescriptions.join('\n  '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  $httpBackend.$$originalHttpBackend = originalHttpBackend;

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers, keys) {
        assertArgDefined(arguments, 0, 'url');

        // Change url to `null` if `undefined` to stop it throwing an exception further down
        if (angular.isUndefined(url)) url = null;

       return $httpBackend[prefix](method, url, undefined, headers, keys);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers, keys) {
        assertArgDefined(arguments, 0, 'url');

        // Change url to `null` if `undefined` to stop it throwing an exception further down
        if (angular.isUndefined(url)) url = null;

        return $httpBackend[prefix](method, url, data, headers, keys);
      };
    });
  }

  function parseRouteUrl(url) {
    var strippedUrl = stripQueryAndHash(url);
    var parseOptions = {caseInsensitiveMatch: true, ignoreTrailingSlashes: true};
    return routeToRegExp(strippedUrl, parseOptions);
  }
}

function assertArgDefined(args, index, name) {
  if (args.length > index && angular.isUndefined(args[index])) {
    throw new Error('Undefined argument `' + name + '`; the argument is provided but not defined');
  }
}

function stripQueryAndHash(url) {
  return url.replace(/[?#].*$/, '');
}

function MockHttpExpectation(expectedMethod, expectedUrl, expectedData, expectedHeaders,
                             expectedKeys) {

  this.data = expectedData;
  this.headers = expectedHeaders;

  this.match = function(method, url, data, headers) {
    if (expectedMethod !== method) return false;
    if (!this.matchUrl(url)) return false;
    if (angular.isDefined(data) && !this.matchData(data)) return false;
    if (angular.isDefined(headers) && !this.matchHeaders(headers)) return false;
    return true;
  };

  this.matchUrl = function(url) {
    if (!expectedUrl) return true;
    if (angular.isFunction(expectedUrl.test)) return expectedUrl.test(url);
    if (angular.isFunction(expectedUrl)) return expectedUrl(url);
    return (expectedUrl === url || compareUrlWithQuery(url));
  };

  this.matchHeaders = function(headers) {
    if (angular.isUndefined(expectedHeaders)) return true;
    if (angular.isFunction(expectedHeaders)) return expectedHeaders(headers);
    return angular.equals(expectedHeaders, headers);
  };

  this.matchData = function(data) {
    if (angular.isUndefined(expectedData)) return true;
    if (expectedData && angular.isFunction(expectedData.test)) return expectedData.test(data);
    if (expectedData && angular.isFunction(expectedData)) return expectedData(data);
    if (expectedData && !angular.isString(expectedData)) {
      return angular.equals(angular.fromJson(angular.toJson(expectedData)), angular.fromJson(data));
    }
    // eslint-disable-next-line eqeqeq
    return expectedData == data;
  };

  this.toString = function() {
    return expectedMethod + ' ' + expectedUrl;
  };

  this.params = function(url) {
    var queryStr = url.indexOf('?') === -1 ? '' : url.substring(url.indexOf('?') + 1);
    var strippedUrl = stripQueryAndHash(url);

    return angular.extend(extractParamsFromQuery(queryStr), extractParamsFromPath(strippedUrl));
  };

  function compareUrlWithQuery(url) {
    var urlWithQueryRe = /^([^?]*)\?(.*)$/;

    var expectedMatch = urlWithQueryRe.exec(expectedUrl);
    var actualMatch = urlWithQueryRe.exec(url);

    return !!(expectedMatch && actualMatch) &&
      (expectedMatch[1] === actualMatch[1]) &&
      (normalizeQuery(expectedMatch[2]) === normalizeQuery(actualMatch[2]));
  }

  function normalizeQuery(queryStr) {
    return queryStr.split('&').sort().join('&');
  }

  function extractParamsFromPath(strippedUrl) {
    var keyObj = {};

    if (!expectedUrl || !angular.isFunction(expectedUrl.test) ||
        !expectedKeys || !expectedKeys.length) return keyObj;

    var match = expectedUrl.exec(strippedUrl);
    if (!match) return keyObj;

    for (var i = 1, len = match.length; i < len; ++i) {
      var key = expectedKeys[i - 1];
      var val = match[i];
      if (key && val) {
        keyObj[key.name || key] = val;
      }
    }

    return keyObj;
  }

  function extractParamsFromQuery(queryStr) {
    var obj = {},
        keyValuePairs = queryStr.split('&').
            filter(angular.identity).  // Ignore empty segments.
            map(function(keyValue) { return keyValue.replace(/\+/g, '%20').split('='); });

    angular.forEach(keyValuePairs, function(pair) {
      var key = tryDecodeURIComponent(pair[0]);
      if (angular.isDefined(key)) {
        var val = angular.isDefined(pair[1]) ? tryDecodeURIComponent(pair[1]) : true;
        if (!hasOwnProperty.call(obj, key)) {
          obj[key] = val;
        } else if (angular.isArray(obj[key])) {
          obj[key].push(val);
        } else {
          obj[key] = [obj[key], val];
        }
      }
    });

    return obj;
  }

  function tryDecodeURIComponent(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
      // Ignore any invalid uri component
    }
  }
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.$$lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.$$lowercase(headerName) === name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = function() {
    if (isFunction(this.onabort)) {
      this.onabort();
    }
  };

  // This section simulates the events on a real XHR object (and the upload object)
  // When we are testing $httpBackend (inside the AngularJS project) we make partial use of this
  // but store the events directly ourselves on `$$events`, instead of going through the `addEventListener`
  this.$$events = {};
  this.addEventListener = function(name, listener) {
    if (angular.isUndefined(this.$$events[name])) this.$$events[name] = [];
    this.$$events[name].push(listener);
  };

  this.upload = {
    $$events: {},
    addEventListener: this.addEventListener
  };
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   *
   * @deprecated
   * sinceVersion="1.7.3"
   *
   * This method flushes all types of tasks (not only timeouts), which is unintuitive.
   * It is recommended to use {@link ngMock.$flushPendingTasks} instead.
   *
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * _This method is essentially an alias of {@link ngMock.$flushPendingTasks}._
   *
   * <div class="alert alert-warning">
   *   For historical reasons, this method will also flush non-`$timeout` pending tasks, such as
   *   {@link $q} promises and tasks scheduled via
   *   {@link ng.$rootScope.Scope#$applyAsync $applyAsync} and
   *   {@link ng.$rootScope.Scope#$evalAsync $evalAsync}.
   * </div>
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    // For historical reasons, `$timeout.flush()` flushes all types of pending tasks.
    // Keep the same behavior for backwards compatibility (and because it doesn't make sense to
    // selectively flush scheduled events out of order).
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   *
   * @deprecated
   * sinceVersion="1.7.3"
   *
   * This method takes all types of tasks (not only timeouts) into account, which is unintuitive.
   * It is recommended to use {@link ngMock.$verifyNoPendingTasks} instead, which additionally
   * allows checking for timeouts only (with `$verifyNoPendingTasks('$timeout')`).
   *
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed. It throws an error if there
   * are still pending tasks.
   *
   * _This method is essentially an alias of {@link ngMock.$verifyNoPendingTasks} (called with no
   * arguments)._
   *
   * <div class="alert alert-warning">
   *   <p>
   *     For historical reasons, this method will also verify non-`$timeout` pending tasks, such as
   *     pending {@link $http} requests, in-progress {@link $route} transitions, unresolved
   *     {@link $q} promises and tasks scheduled via
   *     {@link ng.$rootScope.Scope#$applyAsync $applyAsync} and
   *     {@link ng.$rootScope.Scope#$evalAsync $evalAsync}.
   *   </p>
   *   <p>
   *     It is recommended to use {@link ngMock.$verifyNoPendingTasks} instead, which additionally
   *     supports verifying a specific type of tasks. For example, you can verify there are no
   *     pending timeouts with `$verifyNoPendingTasks('$timeout')`.
   *   </p>
   * </div>
   */
  $delegate.verifyNoPendingTasks = function() {
    // For historical reasons, `$timeout.verifyNoPendingTasks()` takes all types of pending tasks
    // into account. Keep the same behavior for backwards compatibility.
    var pendingTasks = $browser.defer.getPendingTasks();

    if (pendingTasks.length) {
      var formattedTasks = $browser.defer.formatPendingTasks(pendingTasks).join('\n  ');
      var hasPendingTimeout = pendingTasks.some(function(task) { return task.type === '$timeout'; });
      var extraMessage = hasPendingTimeout ? '' : '\n\nNone of the pending tasks are timeouts. ' +
          'If you only want to verify pending timeouts, use ' +
          '`$verifyNoPendingTasks(\'$timeout\')` instead.';

      throw new Error('Deferred tasks to flush (' + pendingTasks.length + '):\n  ' +
          formattedTasks + extraMessage);
    }
  };

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var rafFn = function(fn) {
    var index = rafFn.queue.length;
    rafFn.queue.push(fn);
    return function() {
      rafFn.queue.splice(index, 1);
    };
  };

  rafFn.queue = [];
  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (rafFn.queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = rafFn.queue.length;
    for (var i = 0; i < length; i++) {
      rafFn.queue[i]();
    }

    rafFn.queue = rafFn.queue.slice(i);
  };

  return rafFn;
}];

/**
 *
 */
var originalRootElement;
angular.mock.$RootElementProvider = function() {
  this.$get = ['$injector', function($injector) {
    originalRootElement = angular.element('<div ng-app></div>').data('$injector', $injector);
    return originalRootElement;
  }];
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['$log', function($log) {
 *   this.log = function() {
 *     $log.info(this.name);
 *   };
 * }]);
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   describe('log()', function() {
 *     it('should write the bound name to the log', inject(function($controller, $log) {
 *       var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *       ctrl.log();
 *
 *       expect(ctrl.name).toEqual('Clark Kent');
 *       expect($log.info.logs).toEqual(['Clark Kent']);
 *     }));
 *   });
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller instance. This is used to simulate
 *                           the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
function createControllerDecorator() {
  angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
    return function(expression, locals, later, ident) {
      if (later && typeof later === 'object') {
        var instantiate = $delegate(expression, locals, true, ident);
        var instance = instantiate();
        angular.extend(instance, later);
        return instance;
      }
      return $delegate(expression, locals, later, ident);
    };
  }];

  return angular.mock.$ControllerDecorator;
}

/**
 * @ngdoc service
 * @name $componentController
 * @description
 * A service that can be used to create instances of component controllers. Useful for unit-testing.
 *
 * Be aware that the controller will be instantiated and attached to the scope as specified in
 * the component definition object. If you do not provide a `$scope` object in the `locals` param
 * then the helper will create a new isolated scope as a child of `$rootScope`.
 *
 * If you are using `$element` or `$attrs` in the controller, make sure to provide them as `locals`.
 * The `$element` must be a jqLite-wrapped DOM element, and `$attrs` should be an object that
 * has all properties / functions that you are using in the controller. If this is getting too complex,
 * you should compile the component instead and access the component's controller via the
 * {@link angular.element#methods `controller`} function.
 *
 * See also the section on {@link guide/component#unit-testing-component-controllers unit-testing component controllers}
 * in the guide.
 *
 * @param {string} componentName the name of the component whose controller we want to instantiate
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @param {string=} ident Override the property name to use when attaching the controller to the scope.
 * @return {Object} Instance of requested controller.
 */
angular.mock.$ComponentControllerProvider = ['$compileProvider',
    function ComponentControllerProvider($compileProvider) {
  this.$get = ['$controller','$injector', '$rootScope', function($controller, $injector, $rootScope) {
    return function $componentController(componentName, locals, bindings, ident) {
      // get all directives associated to the component name
      var directives = $injector.get(componentName + 'Directive');
      // look for those directives that are components
      var candidateDirectives = directives.filter(function(directiveInfo) {
        // components have controller, controllerAs and restrict:'E'
        return directiveInfo.controller && directiveInfo.controllerAs && directiveInfo.restrict === 'E';
      });
      // check if valid directives found
      if (candidateDirectives.length === 0) {
        throw new Error('No component found');
      }
      if (candidateDirectives.length > 1) {
        throw new Error('Too many components found');
      }
      // get the info of the component
      var directiveInfo = candidateDirectives[0];
      // create a scope if needed
      locals = locals || {};
      locals.$scope = locals.$scope || $rootScope.$new(true);
      return $controller(directiveInfo.controller, locals, bindings, ident || directiveInfo.controllerAs);
    };
  }];
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * The `ngMock` module provides support to inject and mock AngularJS services into unit tests.
 * In addition, ngMock also extends various core AngularJS services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 * @installation
 *
 *  First, download the file:
 *  * [Google CDN](https://developers.google.com/speed/libraries/devguide#angularjs) e.g.
 *    `"//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-mocks.js"`
 *  * [NPM](https://www.npmjs.com/) e.g. `npm install angular-mocks@X.Y.Z`
 *  * [Yarn](https://yarnpkg.com) e.g. `yarn add angular-mocks@X.Y.Z`
 *  * [Bower](http://bower.io) e.g. `bower install angular-mocks#X.Y.Z`
 *  * [code.angularjs.org](https://code.angularjs.org/) (discouraged for production use)  e.g.
 *    `"//code.angularjs.org/X.Y.Z/angular-mocks.js"`
 *
 * where X.Y.Z is the AngularJS version you are running.
 *
 * Then, configure your test runner to load `angular-mocks.js` after `angular.js`.
 * This example uses <a href="http://karma-runner.github.io/">Karma</a>:
 *
 * ```
 * config.set({
 *   files: [
 *     'build/angular.js', // and other module files you need
 *     'build/angular-mocks.js',
 *     '<path/to/application/files>',
 *     '<path/to/spec/files>'
 *   ]
 * });
 * ```
 *
 * Including the `angular-mocks.js` file automatically adds the `ngMock` module, so your tests
 *  are ready to go!
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $rootElement: angular.mock.$RootElementProvider,
  $componentController: angular.mock.$ComponentControllerProvider,
  $flushPendingTasks: angular.mock.$FlushPendingTasksProvider,
  $verifyNoPendingTasks: angular.mock.$VerifyNoPendingTasksProvider
}).config(['$provide', '$compileProvider', function($provide, $compileProvider) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', createControllerDecorator($compileProvider));
  $provide.decorator('$httpBackend', angular.mock.$httpBackendDecorator);
}]).info({ angularVersion: '1.7.8' });

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an AngularJS module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]).info({ angularVersion: '1.7.8' });

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * <div class="alert alert-info">
 * **Note**: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 * </div>
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   var myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real server
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 *
 * @example
 * <example name="httpbackend-e2e-testing" module="myAppE2E" deps="angular-mocks.js">
 * <file name="app.js">
 *   var myApp = angular.module('myApp', []);
 *
 *   myApp.controller('MainCtrl', function MainCtrl($http) {
 *     var ctrl = this;
 *
 *     ctrl.phones = [];
 *     ctrl.newPhone = {
 *       name: ''
 *     };
 *
 *     ctrl.getPhones = function() {
 *       $http.get('/phones').then(function(response) {
 *         ctrl.phones = response.data;
 *       });
 *     };
 *
 *     ctrl.addPhone = function(phone) {
 *       $http.post('/phones', phone).then(function() {
 *         ctrl.newPhone = {name: ''};
 *         return ctrl.getPhones();
 *       });
 *     };
 *
 *     ctrl.getPhones();
 *   });
 * </file>
 * <file name="e2e.js">
 *   var myAppDev = angular.module('myAppE2E', ['myApp', 'ngMockE2E']);
 *
 *   myAppDev.run(function($httpBackend) {
 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *   });
 * </file>
 * <file name="index.html">
 *   <div ng-controller="MainCtrl as $ctrl">
 *   <form name="newPhoneForm" ng-submit="$ctrl.addPhone($ctrl.newPhone)">
 *     <input type="text" ng-model="$ctrl.newPhone.name">
 *     <input type="submit" value="Add Phone">
 *   </form>
 *   <h1>Phones</h1>
 *   <ul>
 *     <li ng-repeat="phone in $ctrl.phones">{{phone.name}}</li>
 *   </ul>
 *   </div>
 * </file>
 * </example>
 *
 *
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    ```
 *    { function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers, params)}
 *    ```
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (Array|Object|string), response
 *    headers (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
/**
 * @ngdoc method
 * @name $httpBackend#whenRoute
 * @module ngMockE2E
 * @description
 * Creates a new backend definition that compares only with the requested route.
 *
 * @param {string} method HTTP method.
 * @param {string} url HTTP url string that supports colon param matching.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
/**
 * @ngdoc method
 * @name  $httpBackend#matchLatestDefinitionEnabled
 * @module ngMockE2E
 * @description
 * This method can be used to change which mocked responses `$httpBackend` returns, when defining
 * them with {@link ngMock.$httpBackend#when $httpBackend.when()} (and shortcut methods).
 * By default, `$httpBackend` returns the first definition that matches. When setting
 * `$http.matchLatestDefinitionEnabled(true)`, it will use the last response that matches, i.e. the
 * one that was added last.
 *
 * ```js
 * hb.when('GET', '/url1').respond(200, 'content', {});
 * hb.when('GET', '/url1').respond(201, 'another', {});
 * hb('GET', '/url1'); // receives "content"
 *
 * $http.matchLatestDefinitionEnabled(true)
 * hb('GET', '/url1'); // receives "another"
 *
 * hb.when('GET', '/url1').respond(201, 'onemore', {});
 * hb('GET', '/url1'); // receives "onemore"
 * ```
 *
 * This is useful if a you have a default response that is overriden inside specific tests.
 *
 * Note that different from config methods on providers, `matchLatestDefinitionEnabled()` can be changed
 * even when the application is already running.
 *
 * @param  {Boolean=} value value to set, either `true` or `false`. Default is `false`.
 *                          If omitted, it will return the current value.
 * @return {$httpBackend|Boolean} self when used as a setter, and the current value when used
 *                                as a getter
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @this $rootScope.Scope
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @this $rootScope.Scope
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


(function(jasmineOrMocha) {

  if (!jasmineOrMocha) {
    return;
  }

  var currentSpec = null,
      injectorState = new InjectorState(),
      annotatedFunctions = [],
      wasInjectorCreated = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed each key-value pair will be registered on the module via
   *        {@link auto.$provide $provide}.value, the key being the string name (or token) to associate
   *        with the value on the injector.
   */
  var module = window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return wasInjectorCreated() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var fn, modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            fn = ['$provide', function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            }];
          } else {
            fn = module;
          }
          if (currentSpec.$providerInjector) {
            currentSpec.$providerInjector.invoke(fn);
          } else {
            modules.push(fn);
          }
        });
      }
    }
  };

  module.$$beforeAllHook = (window.before || window.beforeAll);
  module.$$afterAllHook = (window.after || window.afterAll);

  // purely for testing ngMock itself
  module.$$currentSpec = function(to) {
    if (arguments.length === 0) return to;
    currentSpec = to;
  };

  /**
   * @ngdoc function
   * @name angular.mock.module.sharedInjector
   * @description
   *
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function ensures a single injector will be used for all tests in a given describe context.
   * This contrasts with the default behaviour where a new injector is created per test case.
   *
   * Use sharedInjector when you want to take advantage of Jasmine's `beforeAll()`, or mocha's
   * `before()` methods. Call `module.sharedInjector()` before you setup any other hooks that
   * will create (i.e call `module()`) or use (i.e call `inject()`) the injector.
   *
   * You cannot call `sharedInjector()` from within a context already using `sharedInjector()`.
   *
   * ## Example
   *
   * Typically beforeAll is used to make many assertions about a single operation. This can
   * cut down test run-time as the test setup doesn't need to be re-run, and enabling focussed
   * tests each with a single assertion.
   *
   * ```js
   * describe("Deep Thought", function() {
   *
   *   module.sharedInjector();
   *
   *   beforeAll(module("UltimateQuestion"));
   *
   *   beforeAll(inject(function(DeepThought) {
   *     expect(DeepThought.answer).toBeUndefined();
   *     DeepThought.generateAnswer();
   *   }));
   *
   *   it("has calculated the answer correctly", inject(function(DeepThought) {
   *     // Because of sharedInjector, we have access to the instance of the DeepThought service
   *     // that was provided to the beforeAll() hook. Therefore we can test the generated answer
   *     expect(DeepThought.answer).toBe(42);
   *   }));
   *
   *   it("has calculated the answer within the expected time", inject(function(DeepThought) {
   *     expect(DeepThought.runTimeMillennia).toBeLessThan(8000);
   *   }));
   *
   *   it("has double checked the answer", inject(function(DeepThought) {
   *     expect(DeepThought.absolutelySureItIsTheRightAnswer).toBe(true);
   *   }));
   *
   * });
   *
   * ```
   */
  module.sharedInjector = function() {
    if (!(module.$$beforeAllHook && module.$$afterAllHook)) {
      throw Error('sharedInjector() cannot be used unless your test runner defines beforeAll/afterAll');
    }

    var initialized = false;

    module.$$beforeAllHook(/** @this */ function() {
      if (injectorState.shared) {
        injectorState.sharedError = Error('sharedInjector() cannot be called inside a context that has already called sharedInjector()');
        throw injectorState.sharedError;
      }
      initialized = true;
      currentSpec = this;
      injectorState.shared = true;
    });

    module.$$afterAllHook(function() {
      if (initialized) {
        injectorState = new InjectorState();
        module.$$cleanup();
      } else {
        injectorState.sharedError = null;
      }
    });
  };

  module.$$beforeEach = function() {
    if (injectorState.shared && currentSpec && currentSpec !== this) {
      var state = currentSpec;
      currentSpec = this;
      angular.forEach(['$injector','$modules','$providerInjector', '$injectorStrict'], function(k) {
        currentSpec[k] = state[k];
        state[k] = null;
      });
    } else {
      currentSpec = this;
      originalRootElement = null;
      annotatedFunctions = [];
    }
  };

  module.$$afterEach = function() {
    if (injectorState.cleanupAfterEach()) {
      module.$$cleanup();
    }
  };

  module.$$cleanup = function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec.$providerInjector = null;
    currentSpec = null;

    if (injector) {
      // Ensure `$rootElement` is instantiated, before checking `originalRootElement`
      var $rootElement = injector.get('$rootElement');
      var rootNode = $rootElement && $rootElement[0];
      var cleanUpNodes = !originalRootElement ? [] : [originalRootElement[0]];
      if (rootNode && (!originalRootElement || rootNode !== originalRootElement[0])) {
        cleanUpNodes.push(rootNode);
      }
      angular.element.cleanData(cleanUpNodes);

      // Ensure `$destroy()` is available, before calling it
      // (a mocked `$rootScope` might not implement it (or not even be an object at all))
      var $rootScope = injector.get('$rootScope');
      if ($rootScope && $rootScope.$destroy) $rootScope.$destroy();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.$$counter = 0;
  };

  (window.beforeEach || window.setup)(module.$$beforeEach);
  (window.afterEach || window.teardown)(module.$$afterEach);

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as `_myService_`, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function ErrorAddingDeclarationLocationStack(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype = Error.prototype;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    // IE10+ and PhanthomJS do not set stack trace information, until the error is thrown
    if (!errorForStack.stack) {
      try {
        throw errorForStack;
      } catch (e) { /* empty */ }
    }
    return wasInjectorCreated() ? WorkFn.call(currentSpec) : WorkFn;
    /////////////////////
    function WorkFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift(['$injector', function($injector) {
        currentSpec.$providerInjector = $injector;
      }]);
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === 'function') {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          injector.invoke(blockFns[i] || angular.noop, this);
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return wasInjectorCreated() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };

  function InjectorState() {
    this.shared = false;
    this.sharedError = null;

    this.cleanupAfterEach = function() {
      return !this.shared || this.sharedError;
    };
  }
})(window.jasmine || window.mocha);

'use strict';

(function() {
  /**
   * @ngdoc function
   * @name browserTrigger
   * @description
   *
   * This is a global (window) function that is only available when the {@link ngMock} module is
   * included.
   *
   * It can be used to trigger a native browser event on an element, which is useful for unit testing.
   *
   *
   * @param {Object} element Either a wrapped jQuery/jqLite node or a DOMElement
   * @param {string=} eventType Optional event type. If none is specified, the function tries
   *                            to determine the right event type for the element, e.g. `change` for
   *                            `input[text]`.
   * @param {Object=} eventData An optional object which contains additional event data that is used
   *                            when creating the event:
   *
   *  - `bubbles`: [Event.bubbles](https://developer.mozilla.org/docs/Web/API/Event/bubbles).
   *    Not applicable to all events.
   *
   *  - `cancelable`: [Event.cancelable](https://developer.mozilla.org/docs/Web/API/Event/cancelable).
   *    Not applicable to all events.
   *
   *  - `charcode`: [charCode](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/charcode)
   *    for keyboard events (keydown, keypress, and keyup).
   *
   *  - `data`: [data](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/data) for
   *    [CompositionEvents](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent).
   *
   *  - `elapsedTime`: the elapsedTime for
   *    [TransitionEvent](https://developer.mozilla.org/docs/Web/API/TransitionEvent)
   *    and [AnimationEvent](https://developer.mozilla.org/docs/Web/API/AnimationEvent).
   *
   *  - `keycode`: [keyCode](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/keycode)
   *    for keyboard events (keydown, keypress, and keyup).
   *
   *  - `keys`: an array of possible modifier keys (ctrl, alt, shift, meta) for
   *    [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent) and
   *    keyboard events (keydown, keypress, and keyup).
   *
   *  - `relatedTarget`: the
   *    [relatedTarget](https://developer.mozilla.org/docs/Web/API/MouseEvent/relatedTarget)
   *    for [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent).
   *
   *  - `which`: [which](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/which)
   *    for keyboard events (keydown, keypress, and keyup).
   *
   *  - `x`: x-coordinates for [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)
   *    and [TouchEvent](https://developer.mozilla.org/docs/Web/API/TouchEvent).
   *
   *  - `y`: y-coordinates for [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)
   *    and [TouchEvent](https://developer.mozilla.org/docs/Web/API/TouchEvent).
   *
   */
  window.browserTrigger = function browserTrigger(element, eventType, eventData) {
    if (element && !element.nodeName) element = element[0];
    if (!element) return;

    eventData = eventData || {};
    var relatedTarget = eventData.relatedTarget || element;
    var keys = eventData.keys;
    var x = eventData.x;
    var y = eventData.y;

    var inputType = (element.type) ? element.type.toLowerCase() : null,
        nodeName = element.nodeName.toLowerCase();
    if (!eventType) {
      eventType = {
        'text':            'change',
        'textarea':        'change',
        'hidden':          'change',
        'password':        'change',
        'button':          'click',
        'submit':          'click',
        'reset':           'click',
        'image':           'click',
        'checkbox':        'click',
        'radio':           'click',
        'select-one':      'change',
        'select-multiple': 'change',
        '_default_':       'click'
      }[inputType || '_default_'];
    }

    if (nodeName === 'option') {
      element.parentNode.value = element.value;
      element = element.parentNode;
      eventType = 'change';
    }

    keys = keys || [];
    function pressed(key) {
      return keys.indexOf(key) !== -1;
    }

    var evnt;
    if (/transitionend/.test(eventType)) {
      if (window.WebKitTransitionEvent) {
        evnt = new window.WebKitTransitionEvent(eventType, eventData);
        evnt.initEvent(eventType, eventData.bubbles, true);
      } else {
        try {
          evnt = new window.TransitionEvent(eventType, eventData);
        } catch (e) {
          evnt = window.document.createEvent('TransitionEvent');
          evnt.initTransitionEvent(eventType, eventData.bubbles, null, null, eventData.elapsedTime || 0);
        }
      }
    } else if (/animationend/.test(eventType)) {
      if (window.WebKitAnimationEvent) {
        evnt = new window.WebKitAnimationEvent(eventType, eventData);
        evnt.initEvent(eventType, eventData.bubbles, true);
      } else {
        try {
          evnt = new window.AnimationEvent(eventType, eventData);
        } catch (e) {
          evnt = window.document.createEvent('AnimationEvent');
          evnt.initAnimationEvent(eventType, eventData.bubbles, null, null, eventData.elapsedTime || 0);
        }
      }
    } else if (/touch/.test(eventType) && supportsTouchEvents()) {
      evnt = createTouchEvent(element, eventType, x, y);
    } else if (/key/.test(eventType)) {
      evnt = window.document.createEvent('Events');
      evnt.initEvent(eventType, eventData.bubbles, eventData.cancelable);
      evnt.view = window;
      evnt.ctrlKey = pressed('ctrl');
      evnt.altKey = pressed('alt');
      evnt.shiftKey = pressed('shift');
      evnt.metaKey = pressed('meta');
      evnt.keyCode = eventData.keyCode;
      evnt.charCode = eventData.charCode;
      evnt.which = eventData.which;
    } else if (/composition/.test(eventType)) {
      try {
        evnt = new window.CompositionEvent(eventType, {
          data: eventData.data
        });
      } catch (e) {
        // Support: IE9+
        evnt = window.document.createEvent('CompositionEvent', {});
        evnt.initCompositionEvent(
          eventType,
          eventData.bubbles,
          eventData.cancelable,
          window,
          eventData.data,
          null
        );
      }

    } else {
      evnt = window.document.createEvent('MouseEvents');
      x = x || 0;
      y = y || 0;
      evnt.initMouseEvent(eventType, true, true, window, 0, x, y, x, y, pressed('ctrl'),
          pressed('alt'), pressed('shift'), pressed('meta'), 0, relatedTarget);
    }

    /* we're unable to change the timeStamp value directly so this
     * is only here to allow for testing where the timeStamp value is
     * read */
    evnt.$manualTimeStamp = eventData.timeStamp;

    if (!evnt) return;

    if (!eventData.bubbles || supportsEventBubblingInDetachedTree() || isAttachedToDocument(element)) {
      return element.dispatchEvent(evnt);
    } else {
      triggerForPath(element, evnt);
    }
  };

  function supportsTouchEvents() {
    if ('_cached' in supportsTouchEvents) {
      return supportsTouchEvents._cached;
    }
    if (!window.document.createTouch || !window.document.createTouchList) {
      supportsTouchEvents._cached = false;
      return false;
    }
    try {
      window.document.createEvent('TouchEvent');
    } catch (e) {
      supportsTouchEvents._cached = false;
      return false;
    }
    supportsTouchEvents._cached = true;
    return true;
  }

  function createTouchEvent(element, eventType, x, y) {
    var evnt = new window.Event(eventType);
    x = x || 0;
    y = y || 0;

    var touch = window.document.createTouch(window, element, Date.now(), x, y, x, y);
    var touches = window.document.createTouchList(touch);

    evnt.touches = touches;

    return evnt;
  }

  function supportsEventBubblingInDetachedTree() {
    if ('_cached' in supportsEventBubblingInDetachedTree) {
      return supportsEventBubblingInDetachedTree._cached;
    }
    supportsEventBubblingInDetachedTree._cached = false;
    var doc = window.document;
    if (doc) {
      var parent = doc.createElement('div'),
          child = parent.cloneNode();
      parent.appendChild(child);
      parent.addEventListener('e', function() {
        supportsEventBubblingInDetachedTree._cached = true;
      });
      var evnt = window.document.createEvent('Events');
      evnt.initEvent('e', true, true);
      child.dispatchEvent(evnt);
    }
    return supportsEventBubblingInDetachedTree._cached;
  }

  function triggerForPath(element, evnt) {
    var stop = false;

    var _stopPropagation = evnt.stopPropagation;
    evnt.stopPropagation = function() {
      stop = true;
      _stopPropagation.apply(evnt, arguments);
    };
    patchEventTargetForBubbling(evnt, element);
    do {
      element.dispatchEvent(evnt);
      // eslint-disable-next-line no-unmodified-loop-condition
    } while (!stop && (element = element.parentNode));
  }

  function patchEventTargetForBubbling(event, target) {
    event._target = target;
    Object.defineProperty(event, 'target', {get: function() { return this._target;}});
  }

  function isAttachedToDocument(element) {
    while ((element = element.parentNode)) {
        if (element === window) {
            return true;
        }
    }
    return false;
  }
})();


})(window, window.angular);

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(f,c){'use strict';function d(b,a){return"$"===b||"_"===b||(65<=a&&90>=a||97<=a&&122>=a||170===a||181===a||186===a||192<=a&&214>=a||216<=a&&246>=a||248<=a&&705>=a||710<=a&&721>=a||736<=a&&740>=a||748===a||750===a||880<=a&&884>=a||886<=a&&887>=a||890<=a&&893>=a||895===a||902===a||904<=a&&906>=a||908===a||910<=a&&929>=a||931<=a&&1013>=a||1015<=a&&1153>=a||1162<=a&&1327>=a||1329<=a&&1366>=a||1369===a||1377<=a&&1415>=a||1488<=a&&1514>=a||1520<=a&&1522>=a||1568<=a&&1610>=a||1646<=a&&1647>=a||
1649<=a&&1747>=a||1749===a||1765<=a&&1766>=a||1774<=a&&1775>=a||1786<=a&&1788>=a||1791===a||1808===a||1810<=a&&1839>=a||1869<=a&&1957>=a||1969===a||1994<=a&&2026>=a||2036<=a&&2037>=a||2042===a||2048<=a&&2069>=a||2074===a||2084===a||2088===a||2112<=a&&2136>=a||2208<=a&&2228>=a||2308<=a&&2361>=a||2365===a||2384===a||2392<=a&&2401>=a||2417<=a&&2432>=a||2437<=a&&2444>=a||2447<=a&&2448>=a||2451<=a&&2472>=a||2474<=a&&2480>=a||2482===a||2486<=a&&2489>=a||2493===a||2510===a||2524<=a&&2525>=a||2527<=a&&2529>=
a||2544<=a&&2545>=a||2565<=a&&2570>=a||2575<=a&&2576>=a||2579<=a&&2600>=a||2602<=a&&2608>=a||2610<=a&&2611>=a||2613<=a&&2614>=a||2616<=a&&2617>=a||2649<=a&&2652>=a||2654===a||2674<=a&&2676>=a||2693<=a&&2701>=a||2703<=a&&2705>=a||2707<=a&&2728>=a||2730<=a&&2736>=a||2738<=a&&2739>=a||2741<=a&&2745>=a||2749===a||2768===a||2784<=a&&2785>=a||2809===a||2821<=a&&2828>=a||2831<=a&&2832>=a||2835<=a&&2856>=a||2858<=a&&2864>=a||2866<=a&&2867>=a||2869<=a&&2873>=a||2877===a||2908<=a&&2909>=a||2911<=a&&2913>=a||
2929===a||2947===a||2949<=a&&2954>=a||2958<=a&&2960>=a||2962<=a&&2965>=a||2969<=a&&2970>=a||2972===a||2974<=a&&2975>=a||2979<=a&&2980>=a||2984<=a&&2986>=a||2990<=a&&3001>=a||3024===a||3077<=a&&3084>=a||3086<=a&&3088>=a||3090<=a&&3112>=a||3114<=a&&3129>=a||3133===a||3160<=a&&3162>=a||3168<=a&&3169>=a||3205<=a&&3212>=a||3214<=a&&3216>=a||3218<=a&&3240>=a||3242<=a&&3251>=a||3253<=a&&3257>=a||3261===a||3294===a||3296<=a&&3297>=a||3313<=a&&3314>=a||3333<=a&&3340>=a||3342<=a&&3344>=a||3346<=a&&3386>=a||
3389===a||3406===a||3423<=a&&3425>=a||3450<=a&&3455>=a||3461<=a&&3478>=a||3482<=a&&3505>=a||3507<=a&&3515>=a||3517===a||3520<=a&&3526>=a||3585<=a&&3632>=a||3634<=a&&3635>=a||3648<=a&&3654>=a||3713<=a&&3714>=a||3716===a||3719<=a&&3720>=a||3722===a||3725===a||3732<=a&&3735>=a||3737<=a&&3743>=a||3745<=a&&3747>=a||3749===a||3751===a||3754<=a&&3755>=a||3757<=a&&3760>=a||3762<=a&&3763>=a||3773===a||3776<=a&&3780>=a||3782===a||3804<=a&&3807>=a||3840===a||3904<=a&&3911>=a||3913<=a&&3948>=a||3976<=a&&3980>=
a||4096<=a&&4138>=a||4159===a||4176<=a&&4181>=a||4186<=a&&4189>=a||4193===a||4197<=a&&4198>=a||4206<=a&&4208>=a||4213<=a&&4225>=a||4238===a||4256<=a&&4293>=a||4295===a||4301===a||4304<=a&&4346>=a||4348<=a&&4680>=a||4682<=a&&4685>=a||4688<=a&&4694>=a||4696===a||4698<=a&&4701>=a||4704<=a&&4744>=a||4746<=a&&4749>=a||4752<=a&&4784>=a||4786<=a&&4789>=a||4792<=a&&4798>=a||4800===a||4802<=a&&4805>=a||4808<=a&&4822>=a||4824<=a&&4880>=a||4882<=a&&4885>=a||4888<=a&&4954>=a||4992<=a&&5007>=a||5024<=a&&5109>=
a||5112<=a&&5117>=a||5121<=a&&5740>=a||5743<=a&&5759>=a||5761<=a&&5786>=a||5792<=a&&5866>=a||5870<=a&&5880>=a||5888<=a&&5900>=a||5902<=a&&5905>=a||5920<=a&&5937>=a||5952<=a&&5969>=a||5984<=a&&5996>=a||5998<=a&&6E3>=a||6016<=a&&6067>=a||6103===a||6108===a||6176<=a&&6263>=a||6272<=a&&6312>=a||6314===a||6320<=a&&6389>=a||6400<=a&&6430>=a||6480<=a&&6509>=a||6512<=a&&6516>=a||6528<=a&&6571>=a||6576<=a&&6601>=a||6656<=a&&6678>=a||6688<=a&&6740>=a||6823===a||6917<=a&&6963>=a||6981<=a&&6987>=a||7043<=a&&
7072>=a||7086<=a&&7087>=a||7098<=a&&7141>=a||7168<=a&&7203>=a||7245<=a&&7247>=a||7258<=a&&7293>=a||7401<=a&&7404>=a||7406<=a&&7409>=a||7413<=a&&7414>=a||7424<=a&&7615>=a||7680<=a&&7957>=a||7960<=a&&7965>=a||7968<=a&&8005>=a||8008<=a&&8013>=a||8016<=a&&8023>=a||8025===a||8027===a||8029===a||8031<=a&&8061>=a||8064<=a&&8116>=a||8118<=a&&8124>=a||8126===a||8130<=a&&8132>=a||8134<=a&&8140>=a||8144<=a&&8147>=a||8150<=a&&8155>=a||8160<=a&&8172>=a||8178<=a&&8180>=a||8182<=a&&8188>=a||8305===a||8319===a||
8336<=a&&8348>=a||8450===a||8455===a||8458<=a&&8467>=a||8469===a||8472<=a&&8477>=a||8484===a||8486===a||8488===a||8490<=a&&8505>=a||8508<=a&&8511>=a||8517<=a&&8521>=a||8526===a||8544<=a&&8584>=a||11264<=a&&11310>=a||11312<=a&&11358>=a||11360<=a&&11492>=a||11499<=a&&11502>=a||11506<=a&&11507>=a||11520<=a&&11557>=a||11559===a||11565===a||11568<=a&&11623>=a||11631===a||11648<=a&&11670>=a||11680<=a&&11686>=a||11688<=a&&11694>=a||11696<=a&&11702>=a||11704<=a&&11710>=a||11712<=a&&11718>=a||11720<=a&&11726>=
a||11728<=a&&11734>=a||11736<=a&&11742>=a||12293<=a&&12295>=a||12321<=a&&12329>=a||12337<=a&&12341>=a||12344<=a&&12348>=a||12353<=a&&12438>=a||12443<=a&&12447>=a||12449<=a&&12538>=a||12540<=a&&12543>=a||12549<=a&&12589>=a||12593<=a&&12686>=a||12704<=a&&12730>=a||12784<=a&&12799>=a||13312<=a&&19893>=a||19968<=a&&40917>=a||40960<=a&&42124>=a||42192<=a&&42237>=a||42240<=a&&42508>=a||42512<=a&&42527>=a||42538<=a&&42539>=a||42560<=a&&42606>=a||42623<=a&&42653>=a||42656<=a&&42735>=a||42775<=a&&42783>=a||
42786<=a&&42888>=a||42891<=a&&42925>=a||42928<=a&&42935>=a||42999<=a&&43009>=a||43011<=a&&43013>=a||43015<=a&&43018>=a||43020<=a&&43042>=a||43072<=a&&43123>=a||43138<=a&&43187>=a||43250<=a&&43255>=a||43259===a||43261===a||43274<=a&&43301>=a||43312<=a&&43334>=a||43360<=a&&43388>=a||43396<=a&&43442>=a||43471===a||43488<=a&&43492>=a||43494<=a&&43503>=a||43514<=a&&43518>=a||43520<=a&&43560>=a||43584<=a&&43586>=a||43588<=a&&43595>=a||43616<=a&&43638>=a||43642===a||43646<=a&&43695>=a||43697===a||43701<=
a&&43702>=a||43705<=a&&43709>=a||43712===a||43714===a||43739<=a&&43741>=a||43744<=a&&43754>=a||43762<=a&&43764>=a||43777<=a&&43782>=a||43785<=a&&43790>=a||43793<=a&&43798>=a||43808<=a&&43814>=a||43816<=a&&43822>=a||43824<=a&&43866>=a||43868<=a&&43877>=a||43888<=a&&44002>=a||44032<=a&&55203>=a||55216<=a&&55238>=a||55243<=a&&55291>=a||63744<=a&&64109>=a||64112<=a&&64217>=a||64256<=a&&64262>=a||64275<=a&&64279>=a||64285===a||64287<=a&&64296>=a||64298<=a&&64310>=a||64312<=a&&64316>=a||64318===a||64320<=
a&&64321>=a||64323<=a&&64324>=a||64326<=a&&64433>=a||64467<=a&&64829>=a||64848<=a&&64911>=a||64914<=a&&64967>=a||65008<=a&&65019>=a||65136<=a&&65140>=a||65142<=a&&65276>=a||65313<=a&&65338>=a||65345<=a&&65370>=a||65382<=a&&65470>=a||65474<=a&&65479>=a||65482<=a&&65487>=a||65490<=a&&65495>=a||65498<=a&&65500>=a||65536<=a&&65547>=a||65549<=a&&65574>=a||65576<=a&&65594>=a||65596<=a&&65597>=a||65599<=a&&65613>=a||65616<=a&&65629>=a||65664<=a&&65786>=a||65856<=a&&65908>=a||66176<=a&&66204>=a||66208<=a&&
66256>=a||66304<=a&&66335>=a||66352<=a&&66378>=a||66384<=a&&66421>=a||66432<=a&&66461>=a||66464<=a&&66499>=a||66504<=a&&66511>=a||66513<=a&&66517>=a||66560<=a&&66717>=a||66816<=a&&66855>=a||66864<=a&&66915>=a||67072<=a&&67382>=a||67392<=a&&67413>=a||67424<=a&&67431>=a||67584<=a&&67589>=a||67592===a||67594<=a&&67637>=a||67639<=a&&67640>=a||67644===a||67647<=a&&67669>=a||67680<=a&&67702>=a||67712<=a&&67742>=a||67808<=a&&67826>=a||67828<=a&&67829>=a||67840<=a&&67861>=a||67872<=a&&67897>=a||67968<=a&&
68023>=a||68030<=a&&68031>=a||68096===a||68112<=a&&68115>=a||68117<=a&&68119>=a||68121<=a&&68147>=a||68192<=a&&68220>=a||68224<=a&&68252>=a||68288<=a&&68295>=a||68297<=a&&68324>=a||68352<=a&&68405>=a||68416<=a&&68437>=a||68448<=a&&68466>=a||68480<=a&&68497>=a||68608<=a&&68680>=a||68736<=a&&68786>=a||68800<=a&&68850>=a||69635<=a&&69687>=a||69763<=a&&69807>=a||69840<=a&&69864>=a||69891<=a&&69926>=a||69968<=a&&70002>=a||70006===a||70019<=a&&70066>=a||70081<=a&&70084>=a||70106===a||70108===a||70144<=
a&&70161>=a||70163<=a&&70187>=a||70272<=a&&70278>=a||70280===a||70282<=a&&70285>=a||70287<=a&&70301>=a||70303<=a&&70312>=a||70320<=a&&70366>=a||70405<=a&&70412>=a||70415<=a&&70416>=a||70419<=a&&70440>=a||70442<=a&&70448>=a||70450<=a&&70451>=a||70453<=a&&70457>=a||70461===a||70480===a||70493<=a&&70497>=a||70784<=a&&70831>=a||70852<=a&&70853>=a||70855===a||71040<=a&&71086>=a||71128<=a&&71131>=a||71168<=a&&71215>=a||71236===a||71296<=a&&71338>=a||71424<=a&&71449>=a||71840<=a&&71903>=a||71935===a||72384<=
a&&72440>=a||73728<=a&&74649>=a||74752<=a&&74862>=a||74880<=a&&75075>=a||77824<=a&&78894>=a||82944<=a&&83526>=a||92160<=a&&92728>=a||92736<=a&&92766>=a||92880<=a&&92909>=a||92928<=a&&92975>=a||92992<=a&&92995>=a||93027<=a&&93047>=a||93053<=a&&93071>=a||93952<=a&&94020>=a||94032===a||94099<=a&&94111>=a||110592<=a&&110593>=a||113664<=a&&113770>=a||113776<=a&&113788>=a||113792<=a&&113800>=a||113808<=a&&113817>=a||119808<=a&&119892>=a||119894<=a&&119964>=a||119966<=a&&119967>=a||119970===a||119973<=a&&
119974>=a||119977<=a&&119980>=a||119982<=a&&119993>=a||119995===a||119997<=a&&120003>=a||120005<=a&&120069>=a||120071<=a&&120074>=a||120077<=a&&120084>=a||120086<=a&&120092>=a||120094<=a&&120121>=a||120123<=a&&120126>=a||120128<=a&&120132>=a||120134===a||120138<=a&&120144>=a||120146<=a&&120485>=a||120488<=a&&120512>=a||120514<=a&&120538>=a||120540<=a&&120570>=a||120572<=a&&120596>=a||120598<=a&&120628>=a||120630<=a&&120654>=a||120656<=a&&120686>=a||120688<=a&&120712>=a||120714<=a&&120744>=a||120746<=
a&&120770>=a||120772<=a&&120779>=a||124928<=a&&125124>=a||126464<=a&&126467>=a||126469<=a&&126495>=a||126497<=a&&126498>=a||126500===a||126503===a||126505<=a&&126514>=a||126516<=a&&126519>=a||126521===a||126523===a||126530===a||126535===a||126537===a||126539===a||126541<=a&&126543>=a||126545<=a&&126546>=a||126548===a||126551===a||126553===a||126555===a||126557===a||126559===a||126561<=a&&126562>=a||126564===a||126567<=a&&126570>=a||126572<=a&&126578>=a||126580<=a&&126583>=a||126585<=a&&126588>=a||
126590===a||126592<=a&&126601>=a||126603<=a&&126619>=a||126625<=a&&126627>=a||126629<=a&&126633>=a||126635<=a&&126651>=a||131072<=a&&173782>=a||173824<=a&&177972>=a||177984<=a&&178205>=a||178208<=a&&183969>=a||194560<=a&&195101>=a?!0:!1)}function e(b,a){return"$"===b||"_"===b||8204===a||8205===a||(48<=a&&57>=a||65<=a&&90>=a||95===a||97<=a&&122>=a||170===a||181===a||183===a||186===a||192<=a&&214>=a||216<=a&&246>=a||248<=a&&705>=a||710<=a&&721>=a||736<=a&&740>=a||748===a||750===a||768<=a&&884>=a||886<=
a&&887>=a||890<=a&&893>=a||895===a||902<=a&&906>=a||908===a||910<=a&&929>=a||931<=a&&1013>=a||1015<=a&&1153>=a||1155<=a&&1159>=a||1162<=a&&1327>=a||1329<=a&&1366>=a||1369===a||1377<=a&&1415>=a||1425<=a&&1469>=a||1471===a||1473<=a&&1474>=a||1476<=a&&1477>=a||1479===a||1488<=a&&1514>=a||1520<=a&&1522>=a||1552<=a&&1562>=a||1568<=a&&1641>=a||1646<=a&&1747>=a||1749<=a&&1756>=a||1759<=a&&1768>=a||1770<=a&&1788>=a||1791===a||1808<=a&&1866>=a||1869<=a&&1969>=a||1984<=a&&2037>=a||2042===a||2048<=a&&2093>=
a||2112<=a&&2139>=a||2208<=a&&2228>=a||2275<=a&&2403>=a||2406<=a&&2415>=a||2417<=a&&2435>=a||2437<=a&&2444>=a||2447<=a&&2448>=a||2451<=a&&2472>=a||2474<=a&&2480>=a||2482===a||2486<=a&&2489>=a||2492<=a&&2500>=a||2503<=a&&2504>=a||2507<=a&&2510>=a||2519===a||2524<=a&&2525>=a||2527<=a&&2531>=a||2534<=a&&2545>=a||2561<=a&&2563>=a||2565<=a&&2570>=a||2575<=a&&2576>=a||2579<=a&&2600>=a||2602<=a&&2608>=a||2610<=a&&2611>=a||2613<=a&&2614>=a||2616<=a&&2617>=a||2620===a||2622<=a&&2626>=a||2631<=a&&2632>=a||
2635<=a&&2637>=a||2641===a||2649<=a&&2652>=a||2654===a||2662<=a&&2677>=a||2689<=a&&2691>=a||2693<=a&&2701>=a||2703<=a&&2705>=a||2707<=a&&2728>=a||2730<=a&&2736>=a||2738<=a&&2739>=a||2741<=a&&2745>=a||2748<=a&&2757>=a||2759<=a&&2761>=a||2763<=a&&2765>=a||2768===a||2784<=a&&2787>=a||2790<=a&&2799>=a||2809===a||2817<=a&&2819>=a||2821<=a&&2828>=a||2831<=a&&2832>=a||2835<=a&&2856>=a||2858<=a&&2864>=a||2866<=a&&2867>=a||2869<=a&&2873>=a||2876<=a&&2884>=a||2887<=a&&2888>=a||2891<=a&&2893>=a||2902<=a&&2903>=
a||2908<=a&&2909>=a||2911<=a&&2915>=a||2918<=a&&2927>=a||2929===a||2946<=a&&2947>=a||2949<=a&&2954>=a||2958<=a&&2960>=a||2962<=a&&2965>=a||2969<=a&&2970>=a||2972===a||2974<=a&&2975>=a||2979<=a&&2980>=a||2984<=a&&2986>=a||2990<=a&&3001>=a||3006<=a&&3010>=a||3014<=a&&3016>=a||3018<=a&&3021>=a||3024===a||3031===a||3046<=a&&3055>=a||3072<=a&&3075>=a||3077<=a&&3084>=a||3086<=a&&3088>=a||3090<=a&&3112>=a||3114<=a&&3129>=a||3133<=a&&3140>=a||3142<=a&&3144>=a||3146<=a&&3149>=a||3157<=a&&3158>=a||3160<=a&&
3162>=a||3168<=a&&3171>=a||3174<=a&&3183>=a||3201<=a&&3203>=a||3205<=a&&3212>=a||3214<=a&&3216>=a||3218<=a&&3240>=a||3242<=a&&3251>=a||3253<=a&&3257>=a||3260<=a&&3268>=a||3270<=a&&3272>=a||3274<=a&&3277>=a||3285<=a&&3286>=a||3294===a||3296<=a&&3299>=a||3302<=a&&3311>=a||3313<=a&&3314>=a||3329<=a&&3331>=a||3333<=a&&3340>=a||3342<=a&&3344>=a||3346<=a&&3386>=a||3389<=a&&3396>=a||3398<=a&&3400>=a||3402<=a&&3406>=a||3415===a||3423<=a&&3427>=a||3430<=a&&3439>=a||3450<=a&&3455>=a||3458<=a&&3459>=a||3461<=
a&&3478>=a||3482<=a&&3505>=a||3507<=a&&3515>=a||3517===a||3520<=a&&3526>=a||3530===a||3535<=a&&3540>=a||3542===a||3544<=a&&3551>=a||3558<=a&&3567>=a||3570<=a&&3571>=a||3585<=a&&3642>=a||3648<=a&&3662>=a||3664<=a&&3673>=a||3713<=a&&3714>=a||3716===a||3719<=a&&3720>=a||3722===a||3725===a||3732<=a&&3735>=a||3737<=a&&3743>=a||3745<=a&&3747>=a||3749===a||3751===a||3754<=a&&3755>=a||3757<=a&&3769>=a||3771<=a&&3773>=a||3776<=a&&3780>=a||3782===a||3784<=a&&3789>=a||3792<=a&&3801>=a||3804<=a&&3807>=a||3840===
a||3864<=a&&3865>=a||3872<=a&&3881>=a||3893===a||3895===a||3897===a||3902<=a&&3911>=a||3913<=a&&3948>=a||3953<=a&&3972>=a||3974<=a&&3991>=a||3993<=a&&4028>=a||4038===a||4096<=a&&4169>=a||4176<=a&&4253>=a||4256<=a&&4293>=a||4295===a||4301===a||4304<=a&&4346>=a||4348<=a&&4680>=a||4682<=a&&4685>=a||4688<=a&&4694>=a||4696===a||4698<=a&&4701>=a||4704<=a&&4744>=a||4746<=a&&4749>=a||4752<=a&&4784>=a||4786<=a&&4789>=a||4792<=a&&4798>=a||4800===a||4802<=a&&4805>=a||4808<=a&&4822>=a||4824<=a&&4880>=a||4882<=
a&&4885>=a||4888<=a&&4954>=a||4957<=a&&4959>=a||4969<=a&&4977>=a||4992<=a&&5007>=a||5024<=a&&5109>=a||5112<=a&&5117>=a||5121<=a&&5740>=a||5743<=a&&5759>=a||5761<=a&&5786>=a||5792<=a&&5866>=a||5870<=a&&5880>=a||5888<=a&&5900>=a||5902<=a&&5908>=a||5920<=a&&5940>=a||5952<=a&&5971>=a||5984<=a&&5996>=a||5998<=a&&6E3>=a||6002<=a&&6003>=a||6016<=a&&6099>=a||6103===a||6108<=a&&6109>=a||6112<=a&&6121>=a||6155<=a&&6157>=a||6160<=a&&6169>=a||6176<=a&&6263>=a||6272<=a&&6314>=a||6320<=a&&6389>=a||6400<=a&&6430>=
a||6432<=a&&6443>=a||6448<=a&&6459>=a||6470<=a&&6509>=a||6512<=a&&6516>=a||6528<=a&&6571>=a||6576<=a&&6601>=a||6608<=a&&6618>=a||6656<=a&&6683>=a||6688<=a&&6750>=a||6752<=a&&6780>=a||6783<=a&&6793>=a||6800<=a&&6809>=a||6823===a||6832<=a&&6845>=a||6912<=a&&6987>=a||6992<=a&&7001>=a||7019<=a&&7027>=a||7040<=a&&7155>=a||7168<=a&&7223>=a||7232<=a&&7241>=a||7245<=a&&7293>=a||7376<=a&&7378>=a||7380<=a&&7414>=a||7416<=a&&7417>=a||7424<=a&&7669>=a||7676<=a&&7957>=a||7960<=a&&7965>=a||7968<=a&&8005>=a||8008<=
a&&8013>=a||8016<=a&&8023>=a||8025===a||8027===a||8029===a||8031<=a&&8061>=a||8064<=a&&8116>=a||8118<=a&&8124>=a||8126===a||8130<=a&&8132>=a||8134<=a&&8140>=a||8144<=a&&8147>=a||8150<=a&&8155>=a||8160<=a&&8172>=a||8178<=a&&8180>=a||8182<=a&&8188>=a||8255<=a&&8256>=a||8276===a||8305===a||8319===a||8336<=a&&8348>=a||8400<=a&&8412>=a||8417===a||8421<=a&&8432>=a||8450===a||8455===a||8458<=a&&8467>=a||8469===a||8472<=a&&8477>=a||8484===a||8486===a||8488===a||8490<=a&&8505>=a||8508<=a&&8511>=a||8517<=a&&
8521>=a||8526===a||8544<=a&&8584>=a||11264<=a&&11310>=a||11312<=a&&11358>=a||11360<=a&&11492>=a||11499<=a&&11507>=a||11520<=a&&11557>=a||11559===a||11565===a||11568<=a&&11623>=a||11631===a||11647<=a&&11670>=a||11680<=a&&11686>=a||11688<=a&&11694>=a||11696<=a&&11702>=a||11704<=a&&11710>=a||11712<=a&&11718>=a||11720<=a&&11726>=a||11728<=a&&11734>=a||11736<=a&&11742>=a||11744<=a&&11775>=a||12293<=a&&12295>=a||12321<=a&&12335>=a||12337<=a&&12341>=a||12344<=a&&12348>=a||12353<=a&&12438>=a||12441<=a&&12447>=
a||12449<=a&&12538>=a||12540<=a&&12543>=a||12549<=a&&12589>=a||12593<=a&&12686>=a||12704<=a&&12730>=a||12784<=a&&12799>=a||13312<=a&&19893>=a||19968<=a&&40917>=a||40960<=a&&42124>=a||42192<=a&&42237>=a||42240<=a&&42508>=a||42512<=a&&42539>=a||42560<=a&&42607>=a||42612<=a&&42621>=a||42623<=a&&42737>=a||42775<=a&&42783>=a||42786<=a&&42888>=a||42891<=a&&42925>=a||42928<=a&&42935>=a||42999<=a&&43047>=a||43072<=a&&43123>=a||43136<=a&&43204>=a||43216<=a&&43225>=a||43232<=a&&43255>=a||43259===a||43261===
a||43264<=a&&43309>=a||43312<=a&&43347>=a||43360<=a&&43388>=a||43392<=a&&43456>=a||43471<=a&&43481>=a||43488<=a&&43518>=a||43520<=a&&43574>=a||43584<=a&&43597>=a||43600<=a&&43609>=a||43616<=a&&43638>=a||43642<=a&&43714>=a||43739<=a&&43741>=a||43744<=a&&43759>=a||43762<=a&&43766>=a||43777<=a&&43782>=a||43785<=a&&43790>=a||43793<=a&&43798>=a||43808<=a&&43814>=a||43816<=a&&43822>=a||43824<=a&&43866>=a||43868<=a&&43877>=a||43888<=a&&44010>=a||44012<=a&&44013>=a||44016<=a&&44025>=a||44032<=a&&55203>=a||
55216<=a&&55238>=a||55243<=a&&55291>=a||63744<=a&&64109>=a||64112<=a&&64217>=a||64256<=a&&64262>=a||64275<=a&&64279>=a||64285<=a&&64296>=a||64298<=a&&64310>=a||64312<=a&&64316>=a||64318===a||64320<=a&&64321>=a||64323<=a&&64324>=a||64326<=a&&64433>=a||64467<=a&&64829>=a||64848<=a&&64911>=a||64914<=a&&64967>=a||65008<=a&&65019>=a||65024<=a&&65039>=a||65056<=a&&65071>=a||65075<=a&&65076>=a||65101<=a&&65103>=a||65136<=a&&65140>=a||65142<=a&&65276>=a||65296<=a&&65305>=a||65313<=a&&65338>=a||65343===a||
65345<=a&&65370>=a||65382<=a&&65470>=a||65474<=a&&65479>=a||65482<=a&&65487>=a||65490<=a&&65495>=a||65498<=a&&65500>=a||65536<=a&&65547>=a||65549<=a&&65574>=a||65576<=a&&65594>=a||65596<=a&&65597>=a||65599<=a&&65613>=a||65616<=a&&65629>=a||65664<=a&&65786>=a||65856<=a&&65908>=a||66045===a||66176<=a&&66204>=a||66208<=a&&66256>=a||66272===a||66304<=a&&66335>=a||66352<=a&&66378>=a||66384<=a&&66426>=a||66432<=a&&66461>=a||66464<=a&&66499>=a||66504<=a&&66511>=a||66513<=a&&66517>=a||66560<=a&&66717>=a||
66720<=a&&66729>=a||66816<=a&&66855>=a||66864<=a&&66915>=a||67072<=a&&67382>=a||67392<=a&&67413>=a||67424<=a&&67431>=a||67584<=a&&67589>=a||67592===a||67594<=a&&67637>=a||67639<=a&&67640>=a||67644===a||67647<=a&&67669>=a||67680<=a&&67702>=a||67712<=a&&67742>=a||67808<=a&&67826>=a||67828<=a&&67829>=a||67840<=a&&67861>=a||67872<=a&&67897>=a||67968<=a&&68023>=a||68030<=a&&68031>=a||68096<=a&&68099>=a||68101<=a&&68102>=a||68108<=a&&68115>=a||68117<=a&&68119>=a||68121<=a&&68147>=a||68152<=a&&68154>=a||
68159===a||68192<=a&&68220>=a||68224<=a&&68252>=a||68288<=a&&68295>=a||68297<=a&&68326>=a||68352<=a&&68405>=a||68416<=a&&68437>=a||68448<=a&&68466>=a||68480<=a&&68497>=a||68608<=a&&68680>=a||68736<=a&&68786>=a||68800<=a&&68850>=a||69632<=a&&69702>=a||69734<=a&&69743>=a||69759<=a&&69818>=a||69840<=a&&69864>=a||69872<=a&&69881>=a||69888<=a&&69940>=a||69942<=a&&69951>=a||69968<=a&&70003>=a||70006===a||70016<=a&&70084>=a||70090<=a&&70092>=a||70096<=a&&70106>=a||70108===a||70144<=a&&70161>=a||70163<=a&&
70199>=a||70272<=a&&70278>=a||70280===a||70282<=a&&70285>=a||70287<=a&&70301>=a||70303<=a&&70312>=a||70320<=a&&70378>=a||70384<=a&&70393>=a||70400<=a&&70403>=a||70405<=a&&70412>=a||70415<=a&&70416>=a||70419<=a&&70440>=a||70442<=a&&70448>=a||70450<=a&&70451>=a||70453<=a&&70457>=a||70460<=a&&70468>=a||70471<=a&&70472>=a||70475<=a&&70477>=a||70480===a||70487===a||70493<=a&&70499>=a||70502<=a&&70508>=a||70512<=a&&70516>=a||70784<=a&&70853>=a||70855===a||70864<=a&&70873>=a||71040<=a&&71093>=a||71096<=
a&&71104>=a||71128<=a&&71133>=a||71168<=a&&71232>=a||71236===a||71248<=a&&71257>=a||71296<=a&&71351>=a||71360<=a&&71369>=a||71424<=a&&71449>=a||71453<=a&&71467>=a||71472<=a&&71481>=a||71840<=a&&71913>=a||71935===a||72384<=a&&72440>=a||73728<=a&&74649>=a||74752<=a&&74862>=a||74880<=a&&75075>=a||77824<=a&&78894>=a||82944<=a&&83526>=a||92160<=a&&92728>=a||92736<=a&&92766>=a||92768<=a&&92777>=a||92880<=a&&92909>=a||92912<=a&&92916>=a||92928<=a&&92982>=a||92992<=a&&92995>=a||93008<=a&&93017>=a||93027<=
a&&93047>=a||93053<=a&&93071>=a||93952<=a&&94020>=a||94032<=a&&94078>=a||94095<=a&&94111>=a||110592<=a&&110593>=a||113664<=a&&113770>=a||113776<=a&&113788>=a||113792<=a&&113800>=a||113808<=a&&113817>=a||113821<=a&&113822>=a||119141<=a&&119145>=a||119149<=a&&119154>=a||119163<=a&&119170>=a||119173<=a&&119179>=a||119210<=a&&119213>=a||119362<=a&&119364>=a||119808<=a&&119892>=a||119894<=a&&119964>=a||119966<=a&&119967>=a||119970===a||119973<=a&&119974>=a||119977<=a&&119980>=a||119982<=a&&119993>=a||
119995===a||119997<=a&&120003>=a||120005<=a&&120069>=a||120071<=a&&120074>=a||120077<=a&&120084>=a||120086<=a&&120092>=a||120094<=a&&120121>=a||120123<=a&&120126>=a||120128<=a&&120132>=a||120134===a||120138<=a&&120144>=a||120146<=a&&120485>=a||120488<=a&&120512>=a||120514<=a&&120538>=a||120540<=a&&120570>=a||120572<=a&&120596>=a||120598<=a&&120628>=a||120630<=a&&120654>=a||120656<=a&&120686>=a||120688<=a&&120712>=a||120714<=a&&120744>=a||120746<=a&&120770>=a||120772<=a&&120779>=a||120782<=a&&120831>=
a||121344<=a&&121398>=a||121403<=a&&121452>=a||121461===a||121476===a||121499<=a&&121503>=a||121505<=a&&121519>=a||124928<=a&&125124>=a||125136<=a&&125142>=a||126464<=a&&126467>=a||126469<=a&&126495>=a||126497<=a&&126498>=a||126500===a||126503===a||126505<=a&&126514>=a||126516<=a&&126519>=a||126521===a||126523===a||126530===a||126535===a||126537===a||126539===a||126541<=a&&126543>=a||126545<=a&&126546>=a||126548===a||126551===a||126553===a||126555===a||126557===a||126559===a||126561<=a&&126562>=a||
126564===a||126567<=a&&126570>=a||126572<=a&&126578>=a||126580<=a&&126583>=a||126585<=a&&126588>=a||126590===a||126592<=a&&126601>=a||126603<=a&&126619>=a||126625<=a&&126627>=a||126629<=a&&126633>=a||126635<=a&&126651>=a||131072<=a&&173782>=a||173824<=a&&177972>=a||177984<=a&&178205>=a||178208<=a&&183969>=a||194560<=a&&195101>=a||917760<=a&&917999>=a?!0:!1)}c.module("ngParseExt",[]).config(["$parseProvider",function(b){b.setIdentifierFns(d,e)}]).info({angularVersion:"1.7.8"})})(window,window.angular);
//# sourceMappingURL=angular-parse-ext.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,a){'use strict';function M(m,f){f=f||{};a.forEach(f,function(a,d){delete f[d]});for(var d in m)!m.hasOwnProperty(d)||"$"===d.charAt(0)&&"$"===d.charAt(1)||(f[d]=m[d]);return f}var B=a.$$minErr("$resource"),H=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;a.module("ngResource",["ng"]).info({angularVersion:"1.7.8"}).provider("$resource",function(){var m=/^https?:\/\/\[[^\]]*][^/]*/,f=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",
isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(d,F,G,N){function C(a,d){this.template=a;this.defaults=n({},f.defaults,d);this.urlParams={}}var O=a.noop,r=a.forEach,n=a.extend,R=a.copy,P=a.isArray,D=a.isDefined,x=a.isFunction,I=a.isNumber,y=a.$$encodeUriQuery,S=a.$$encodeUriSegment;C.prototype={setUrlParams:function(a,d,f){var g=this,c=f||g.template,s,h,n="",b=g.urlParams=Object.create(null);r(c.split(/\W/),function(a){if("hasOwnProperty"===
a)throw B("badname");!/^\d+$/.test(a)&&a&&(new RegExp("(^|[^\\\\]):"+a+"(\\W|$)")).test(c)&&(b[a]={isQueryParamValue:(new RegExp("\\?.*=:"+a+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");c=c.replace(m,function(b){n=b;return""});d=d||{};r(g.urlParams,function(b,a){s=d.hasOwnProperty(a)?d[a]:g.defaults[a];D(s)&&null!==s?(h=b.isQueryParamValue?y(s,!0):S(s),c=c.replace(new RegExp(":"+a+"(\\W|$)","g"),function(b,a){return h+a})):c=c.replace(new RegExp("(/?):"+a+"(\\W|$)","g"),function(b,a,e){return"/"===
e.charAt(0)?e:a+e})});g.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");a.url=n+c.replace(/\/(\\|%5C)\./,"/.");r(d,function(b,c){g.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}};return function(m,y,z,g){function c(b,c){var d={};c=n({},y,c);r(c,function(c,f){x(c)&&(c=c(b));var e;if(c&&c.charAt&&"@"===c.charAt(0)){e=b;var k=c.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!H.test("."+k))throw B("badmember",k);for(var k=k.split("."),h=0,
n=k.length;h<n&&a.isDefined(e);h++){var g=k[h];e=null!==e?e[g]:void 0}}else e=c;d[f]=e});return d}function s(b){return b.resource}function h(b){M(b||{},this)}var Q=new C(m,g);z=n({},f.defaults.actions,z);h.prototype.toJSON=function(){var b=n({},this);delete b.$promise;delete b.$resolved;delete b.$cancelRequest;return b};r(z,function(b,a){var f=!0===b.hasBody||!1!==b.hasBody&&/^(POST|PUT|PATCH)$/i.test(b.method),g=b.timeout,m=D(b.cancellable)?b.cancellable:Q.defaults.cancellable;g&&!I(g)&&(F.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete b.timeout,g=null);h[a]=function(e,k,J,y){function z(a){p.catch(O);null!==u&&u.resolve(a)}var K={},v,t,w;switch(arguments.length){case 4:w=y,t=J;case 3:case 2:if(x(k)){if(x(e)){t=e;w=k;break}t=k;w=J}else{K=e;v=k;t=J;break}case 1:x(e)?t=e:f?v=e:K=e;break;case 0:break;default:throw B("badargs",arguments.length);}var E=this instanceof h,l=E?v:b.isArray?[]:new h(v),q={},C=b.interceptor&&b.interceptor.request||void 0,D=b.interceptor&&b.interceptor.requestError||void 0,F=b.interceptor&&b.interceptor.response||
s,H=b.interceptor&&b.interceptor.responseError||G.reject,I=t?function(a){t(a,A.headers,A.status,A.statusText)}:void 0;w=w||void 0;var u,L,A;r(b,function(a,b){switch(b){default:q[b]=R(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!E&&m&&(u=G.defer(),q.timeout=u.promise,g&&(L=N(u.resolve,g)));f&&(q.data=v);Q.setUrlParams(q,n({},c(v,b.params||{}),K),b.url);var p=G.resolve(q).then(C).catch(D).then(d),p=p.then(function(c){var e=c.data;if(e){if(P(e)!==!!b.isArray)throw B("badcfg",
a,b.isArray?"array":"object",P(e)?"array":"object",q.method,q.url);if(b.isArray)l.length=0,r(e,function(a){"object"===typeof a?l.push(new h(a)):l.push(a)});else{var d=l.$promise;M(e,l);l.$promise=d}}c.resource=l;A=c;return F(c)},function(a){a.resource=l;A=a;return H(a)}),p=p["finally"](function(){l.$resolved=!0;!E&&m&&(l.$cancelRequest=O,N.cancel(L),u=L=q.timeout=null)});p.then(I,w);return E?p:(l.$promise=p,l.$resolved=!1,m&&(l.$cancelRequest=z),l)};h.prototype["$"+a]=function(b,c,d){x(b)&&(d=c,c=
b,b={});b=h[a].call(this,b,this,c,d);return b.$promise||b}});return h}}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,b){'use strict';function z(b,h){var d=[],c=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(b,c,h,k){b="?"===k||"*?"===k;k="*"===k||"*?"===k;d.push({name:h,optional:b});c=c||"";return(b?"(?:"+c:c+"(?:")+(k?"(.+?)":"([^/]+)")+(b?"?)?":")")}).replace(/([/$*])/g,"\\$1");h.ignoreTrailingSlashes&&(c=c.replace(/\/+$/,"")+"/*");return{keys:d,regexp:new RegExp("^"+c+"(?:[?#]|$)",h.caseInsensitiveMatch?"i":"")}}function A(b){p&&b.get("$route")}function v(u,h,d){return{restrict:"ECA",
terminal:!0,priority:400,transclude:"element",link:function(c,f,g,l,k){function q(){r&&(d.cancel(r),r=null);m&&(m.$destroy(),m=null);s&&(r=d.leave(s),r.done(function(b){!1!==b&&(r=null)}),s=null)}function C(){var g=u.current&&u.current.locals;if(b.isDefined(g&&g.$template)){var g=c.$new(),l=u.current;s=k(g,function(g){d.enter(g,null,s||f).done(function(d){!1===d||!b.isDefined(w)||w&&!c.$eval(w)||h()});q()});m=l.scope=g;m.$emit("$viewContentLoaded");m.$eval(p)}else q()}var m,s,r,w=g.autoscroll,p=g.onload||
"";c.$on("$routeChangeSuccess",C);C()}}}function x(b,h,d){return{restrict:"ECA",priority:-400,link:function(c,f){var g=d.current,l=g.locals;f.html(l.$template);var k=b(f.contents());if(g.controller){l.$scope=c;var q=h(g.controller,l);g.controllerAs&&(c[g.controllerAs]=q);f.data("$ngControllerController",q);f.children().data("$ngControllerController",q)}c[g.resolveAs||"$resolve"]=l;k(c)}}}var D,E,F,G,y=b.module("ngRoute",[]).info({angularVersion:"1.7.8"}).provider("$route",function(){function u(d,
c){return b.extend(Object.create(d),c)}D=b.isArray;E=b.isObject;F=b.isDefined;G=b.noop;var h={};this.when=function(d,c){var f;f=void 0;if(D(c)){f=f||[];for(var g=0,l=c.length;g<l;g++)f[g]=c[g]}else if(E(c))for(g in f=f||{},c)if("$"!==g.charAt(0)||"$"!==g.charAt(1))f[g]=c[g];f=f||c;b.isUndefined(f.reloadOnUrl)&&(f.reloadOnUrl=!0);b.isUndefined(f.reloadOnSearch)&&(f.reloadOnSearch=!0);b.isUndefined(f.caseInsensitiveMatch)&&(f.caseInsensitiveMatch=this.caseInsensitiveMatch);h[d]=b.extend(f,{originalPath:d},
d&&z(d,f));d&&(g="/"===d[d.length-1]?d.substr(0,d.length-1):d+"/",h[g]=b.extend({originalPath:d,redirectTo:d},z(g,f)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};p=!0;this.eagerInstantiationEnabled=function(b){return F(b)?(p=b,this):p};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(d,c,f,g,l,k,q,p){function m(a){var e=t.current;n=A();(x=
!B&&n&&e&&n.$$route===e.$$route&&(!n.reloadOnUrl||!n.reloadOnSearch&&b.equals(n.pathParams,e.pathParams)))||!e&&!n||d.$broadcast("$routeChangeStart",n,e).defaultPrevented&&a&&a.preventDefault()}function s(){var a=t.current,e=n;if(x)a.params=e.params,b.copy(a.params,f),d.$broadcast("$routeUpdate",a);else if(e||a){B=!1;t.current=e;var c=g.resolve(e);p.$$incOutstandingRequestCount("$route");c.then(r).then(w).then(function(g){return g&&c.then(y).then(function(c){e===t.current&&(e&&(e.locals=c,b.copy(e.params,
f)),d.$broadcast("$routeChangeSuccess",e,a))})}).catch(function(b){e===t.current&&d.$broadcast("$routeChangeError",e,a,b)}).finally(function(){p.$$completeOutstandingRequest(G,"$route")})}}function r(a){var e={route:a,hasRedirection:!1};if(a)if(a.redirectTo)if(b.isString(a.redirectTo))e.path=v(a.redirectTo,a.params),e.search=a.params,e.hasRedirection=!0;else{var d=c.path(),f=c.search();a=a.redirectTo(a.pathParams,d,f);b.isDefined(a)&&(e.url=a,e.hasRedirection=!0)}else if(a.resolveRedirectTo)return g.resolve(l.invoke(a.resolveRedirectTo)).then(function(a){b.isDefined(a)&&
(e.url=a,e.hasRedirection=!0);return e});return e}function w(a){var b=!0;if(a.route!==t.current)b=!1;else if(a.hasRedirection){var g=c.url(),d=a.url;d?c.url(d).replace():d=c.path(a.path).search(a.search).replace().url();d!==g&&(b=!1)}return b}function y(a){if(a){var e=b.extend({},a.resolve);b.forEach(e,function(a,c){e[c]=b.isString(a)?l.get(a):l.invoke(a,null,null,c)});a=z(a);b.isDefined(a)&&(e.$template=a);return g.all(e)}}function z(a){var e,c;b.isDefined(e=a.template)?b.isFunction(e)&&(e=e(a.params)):
b.isDefined(c=a.templateUrl)&&(b.isFunction(c)&&(c=c(a.params)),b.isDefined(c)&&(a.loadedTemplateUrl=q.valueOf(c),e=k(c)));return e}function A(){var a,e;b.forEach(h,function(d,g){var f;if(f=!e){var h=c.path();f=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=f[k-1],n=h[k];m&&n&&(l[m.name]=n)}f=l}else f=null;else f=null;f=a=f}f&&(e=u(d,{params:b.extend({},c.search(),a),pathParams:a}),e.$$route=d)});return e||h[null]&&u(h[null],{params:{},pathParams:{}})}function v(a,
c){var d=[];b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),g=f[1];d.push(c[g]);d.push(f[2]||"");delete c[g]}});return d.join("")}var B=!1,n,x,t={routes:h,reload:function(){B=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;B=!1}};d.$evalAsync(function(){m(a);a.defaultPrevented||s()})},updateParams:function(a){if(this.current&&this.current.$$route)a=b.extend({},this.current.params,a),c.path(v(this.current.$$route.originalPath,
a)),c.search(a);else throw H("norout");}};d.$on("$locationChangeStart",m);d.$on("$locationChangeSuccess",s);return t}]}).run(A),H=b.$$minErr("ngRoute"),p;A.$inject=["$injector"];y.provider("$routeParams",function(){this.$get=function(){return{}}});y.directive("ngView",v);y.directive("ngView",x);v.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,c){'use strict';function P(c){var h=[];C(h,E).chars(c);return h.join("")}var D=c.$$minErr("$sanitize"),F,h,G,H,I,q,E,J,K,C;c.module("ngSanitize",[]).provider("$sanitize",function(){function f(a,e){return B(a.split(","),e)}function B(a,e){var d={},b;for(b=0;b<a.length;b++)d[e?q(a[b]):a[b]]=!0;return d}function t(a,e){e&&e.length&&h(a,B(e))}function Q(a){for(var e={},d=0,b=a.length;d<b;d++){var k=a[d];e[k.name]=k.value}return e}function L(a){return a.replace(/&/g,"&amp;").replace(z,function(a){var d=
a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,d=0,b=e.length;d<b;d++){var k=e[d],g=k.name.toLowerCase();if("xmlns:ns1"===g||0===g.lastIndexOf("ns1:",0))a.removeAttributeNode(k),d--,b--}(e=a.firstChild)&&A(e);a=v("nextSibling",a)}}function v(a,e){var d=e[a];if(d&&J.call(e,d))throw D("elclob",
e.outerHTML||e.outerText);return d}var y=!1,g=!1;this.$get=["$$sanitizeUri",function(a){y=!0;g&&h(m,l);return function(e){var d=[];K(e,C(d,function(b,d){return!/^unsafe:/.test(a(b,d))}));return d.join("")}}];this.enableSvg=function(a){return I(a)?(g=a,this):g};this.addValidElements=function(a){y||(H(a)&&(a={htmlElements:a}),t(l,a.svgElements),t(r,a.htmlVoidElements),t(m,a.htmlVoidElements),t(m,a.htmlElements));return this};this.addValidAttrs=function(a){y||h(M,B(a,!0));return this};F=c.bind;h=c.extend;
G=c.forEach;H=c.isArray;I=c.isDefined;q=c.$$lowercase;E=c.noop;K=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);var d=N(a);if(!d)return"";var b=5;do{if(0===b)throw D("uinput");b--;a=d.innerHTML;d=N(a)}while(a!==d.innerHTML);for(b=d.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),Q(b.attributes));break;case 3:e.chars(b.textContent)}var k;if(!(k=b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),k=v("nextSibling",b),!k))for(;null==k;){b=
v("parentNode",b);if(b===d)break;k=v("nextSibling",b);1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=k}for(;b=d.firstChild;)d.removeChild(b)};C=function(a,e){var d=!1,b=F(a,a.push);return{start:function(a,g){a=q(a);!d&&w[a]&&(d=a);d||!0!==m[a]||(b("<"),b(a),G(g,function(d,g){var c=q(g),f="img"===a&&"src"===c||"background"===c;!0!==M[c]||!0===O[c]&&!e(d,f)||(b(" "),b(g),b('="'),b(L(d)),b('"'))}),b(">"))},end:function(a){a=q(a);d||!0!==m[a]||!0===r[a]||(b("</"),b(a),b(">"));a==d&&(d=!1)},chars:function(a){d||
b(L(a))}}};J=s.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)};var z=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^#-~ |!])/g,r=f("area,br,col,hr,img,wbr"),x=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),p=f("rp,rt"),n=h({},p,x),x=h({},x,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),p=h({},p,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
l=f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),w=f("script,style"),m=h({},r,x,p,n),O=f("background,cite,href,longdesc,src,xlink:href,xml:base"),n=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
p=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),M=h({},O,p,n),N=function(a,e){function d(b){b="<remove></remove>"+b;try{var d=(new a.DOMParser).parseFromString(b,"text/html").body;d.firstChild.remove();return d}catch(e){}}function b(a){c.innerHTML=a;e.documentMode&&A(c);return c}var g;if(e&&e.implementation)g=e.implementation.createHTMLDocument("inert");else throw D("noinert");var c=(g.documentElement||g.getDocumentElement()).querySelector("body");c.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';return c.querySelector("svg")?
(c.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',c.querySelector("svg img")?d:b):function(b){b="<remove></remove>"+b;try{b=encodeURI(b)}catch(d){return}var e=new a.XMLHttpRequest;e.responseType="document";e.open("GET","data:text/html;charset=utf-8,"+b,!1);e.send(null);b=e.response.body;b.firstChild.remove();return b}}(s,s.document)}).info({angularVersion:"1.7.8"});c.module("ngSanitize").filter("linky",["$sanitize",function(f){var h=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
t=/^mailto:/i,q=c.$$minErr("linky"),s=c.isDefined,A=c.isFunction,v=c.isObject,y=c.isString;return function(c,z,u){function r(c){c&&l.push(P(c))}function x(c,g){var f,a=p(c);l.push("<a ");for(f in a)l.push(f+'="'+a[f]+'" ');!s(z)||"target"in a||l.push('target="',z,'" ');l.push('href="',c.replace(/"/g,"&quot;"),'">');r(g);l.push("</a>")}if(null==c||""===c)return c;if(!y(c))throw q("notstring",c);for(var p=A(u)?u:v(u)?function(){return u}:function(){return{}},n=c,l=[],w,m;c=n.match(h);)w=c[0],c[2]||
c[4]||(w=(c[3]?"http://":"mailto:")+w),m=c.index,r(n.substr(0,m)),x(w,c[0].replace(t,"")),n=n.substring(m+c[0].length);r(n);return f(l.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,p){'use strict';function q(g,h,s){n.directive(g,["$parse","$swipe",function(a,b){return function(c,e,f){function k(a){if(!d)return!1;var b=Math.abs(a.y-d.y);a=(a.x-d.x)*h;return l&&75>b&&0<a&&30<a&&.3>b/a}var m=a(f[g]),d,l,r=["touch"];p.isDefined(f.ngSwipeDisableMouse)||r.push("mouse");b.bind(e,{start:function(a,b){d=a;l=!0},cancel:function(a){l=!1},end:function(a,b){k(a)&&c.$apply(function(){e.triggerHandler(s);m(c,{$event:b})})}},r)}}])}var n=p.module("ngTouch",[]);n.info({angularVersion:"1.7.8"});
n.factory("$swipe",[function(){function g(a){a=a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function h(a,b){var c=[];p.forEach(a,function(a){(a=n[a][b])&&c.push(a)});return c.join(" ")}var n={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}};
return{bind:function(a,b,c){var e,f,k,m,d=!1;c=c||["mouse","touch","pointer"];a.on(h(c,"start"),function(a){k=g(a);d=!0;f=e=0;m=k;b.start&&b.start(k,a)});var l=h(c,"cancel");if(l)a.on(l,function(a){d=!1;b.cancel&&b.cancel(a)});a.on(h(c,"move"),function(a){if(d&&k){var c=g(a);e+=Math.abs(c.x-m.x);f+=Math.abs(c.y-m.y);m=c;10>e&&10>f||(f>e?(d=!1,b.cancel&&b.cancel(a)):(a.preventDefault(),b.move&&b.move(c,a)))}});a.on(h(c,"end"),function(a){d&&(d=!1,b.end&&b.end(g(a),a))})}}}]);q("ngSwipeLeft",-1,"swipeleft");
q("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map