!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired870;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired870=a);var i=a("eopHt"),o=a("bpxeT"),u=a("2TvXO"),s=(i=a("eopHt"),a("lvC14")),l=a("dYN6e"),c=a("cqmI4"),f=a("1VFfL"),d=a("1GZuu");function p(t){return n=e(o)(e(u).mark((function n(){var r,a,o,p,h,g,m,y,b,x=arguments;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=x.length>0&&void 0!==x[0]?x[0]:1,n.prev=1,n.next=4,t(r);case 4:a=n.sent,o=a.data,p=o.results,h=o.total_results,g=(0,d.makePaginationOptions)(h),(0,d.removeHiddenPagination)(),y=null!==(m=(0,s.getGenreOptions)())&&void 0!==m?m:[],b=(0,l.makeMovieList)(p,y),c.listRef.innerHTML=b,new(e(f))(c.paginationContainer,g).on("afterMove",v(t)),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(1),console.log(n.t0);case 19:t===i.getPopularForKidsZero&&(c.zeroPlus.disabled=!0,c.sixPlus.disabled=!1,c.twelvePlus.disabled=!1),t===i.getPopularForKidsSix&&(c.zeroPlus.disabled=!1,c.sixPlus.disabled=!0,c.twelvePlus.disabled=!1),t===i.getPopularForKidsTwelve&&(c.zeroPlus.disabled=!1,c.sixPlus.disabled=!1,c.twelvePlus.disabled=!0);case 22:case"end":return n.stop()}}),n,null,[[1,16]])}))),function(){return n.apply(this,arguments)};var n}function v(t){return n=e(o)(e(u).mark((function n(r){var a,i,o,f,d,p;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.page,e.next=3,t(a);case 3:i=e.sent,o=i.data.results,d=null!==(f=(0,s.getGenreOptions)())&&void 0!==f?f:[],p=(0,l.makeMovieList)(o,d),c.listRef.innerHTML=p,document.documentElement.scrollTo({top:0,behavior:"smooth"});case 10:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n}c=a("cqmI4");a("a4V2g");var h=a("cP0sx"),g=a("9iAID"),m=a("8MBJY"),y=a("a2hTj"),b=a("8nrFW"),x=function(e,t,n){var r=e.textContent.trim(),a=r.length,i=[];e.textContent="";for(var o=0;o<a;o++){var u=document.createElement(t);n&&n.length&&u.classList.add(n),u.textContent=" "===r[o]?" ":r[o],e.before(u),i.push(u)}return i},w=function(t,n,r,a,i,o,u,s){if(Array.isArray(n.letterize_id)||(n.letterize_id=[]),!n.letterize_id.includes(s)){n.letterize_id.push(s);for(var l=e(b)(n.childNodes),c=l.length,f=0;f<c;f++){var d=void 0;switch(l[f].nodeType){case 1:-1===Array.prototype.indexOf.call(t,l[f])&&w(t,l[f],r,a,i,o,u,s);break;case 3:var p,v;d=x(l[f],r,a),(p=o).push.apply(p,e(b)(d)),(v=i[u]).push.apply(v,e(b)(d))}}}},M=function(){"use strict";function t(n){e(m)(this,t);var r=function(e){return e instanceof NodeList||e instanceof HTMLCollection||Array.isArray(e)?e:e instanceof HTMLElement?[e]:"string"==typeof e?document.querySelectorAll(e):null}(n.targets);if(r&&r.length){var a=r.length;t.numInstances=(t.numInstances||0)+1;for(var i=n.wrapper||"span",o=n.className,u=t.numInstances,s=[],l=[],c=0;c<a;c++)s[c]=[],w(r,r[c],i,o,s,l,c,u);this._wrapper=i,this._targets=r,this._list=s,this._listAll=l,this._className=o}else console.error("Letterize: targets '".concat(r,"' not found or not specified"))}return e(y)(t,[{key:"listAll",get:function(){return this._listAll}},{key:"list",get:function(){return this._list}},{key:"targets",get:function(){return this._targets}},{key:"className",get:function(){return this._className}},{key:"wrapper",get:function(){return this._wrapper}},{key:"deletterize",value:function(){for(var t=this.listAll.length,n=0;n<t;n++){var r;(r=this.listAll[n]).before.apply(r,e(b)(Array.from(this.listAll[n].childNodes))),this.listAll[n].remove()}this._wrapper=void 0,this._targets=void 0,this._list=void 0,this._listAll=void 0,this._className=void 0,this.deletterize=void 0}}]),t}(),P={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},k={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},O=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],T={CSS:{},springs:{}};function A(e,t,n){return Math.min(Math.max(e,t),n)}function C(e,t){return e.indexOf(t)>-1}function I(e,t){return e.apply(null,t)}var L={arr:function(e){return Array.isArray(e)},obj:function(e){return C(Object.prototype.toString.call(e),"Object")},pth:function(e){return L.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||L.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return L.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return L.hex(e)||L.rgb(e)||L.hsl(e)},key:function(e){return!P.hasOwnProperty(e)&&!k.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function D(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function E(e,t){var n=D(e),r=A(L.und(n[0])?1:n[0],.1,100),a=A(L.und(n[1])?100:n[1],.1,100),i=A(L.und(n[2])?10:n[2],.1,100),o=A(L.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),s=i/(2*Math.sqrt(a*r)),l=s<1?u*Math.sqrt(1-s*s):0,c=s<1?(s*u-o)/l:-o+u;function f(e){var n=t?t*e/1e3:e;return n=s<1?Math.exp(-n*s*u)*(1*Math.cos(l*n)+c*Math.sin(l*n)):(1+c*n)*Math.exp(-n*u),0===e||1===e?e:1-n}return t?f:function(){var t=T.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===f(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return T.springs[e]=i,i}}function _(e){return void 0===e&&(e=10),function(t){return Math.ceil(A(t,1e-6,1)*e)*(1/e)}}var N,F,B=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(t!==n||r!==o)for(var s=0;s<11;++s)u[s]=a(s*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(l(e),n,o)}}function l(n){for(var o=0,s=1;10!==s&&u[s]<=n;++s)o+=e;--s;var l=o+(n-u[s])/(u[s+1]-u[s])*e,c=i(l,t,r);return c>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var u=i(t,n,r);if(0===u)return t;t-=(a(t,n,r)-e)/u}return t}(n,l,t,r):0===c?l:function(e,t,n,r,i){var o,u,s=0;do{(o=a(u=t+(n-t)/2,r,i)-e)>0?n=u:t=u}while(Math.abs(o)>1e-7&&++s<10);return u}(n,o,o+e,t,r)}}}(),S=(N={linear:function(){return function(e){return e}}},F={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=A(e,1,10),r=A(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){F[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(F).forEach((function(e){var t=F[e];N["easeIn"+e]=t,N["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},N["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},N["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),N);function H(e,t){if(L.fnc(e))return e;var n=e.split("(")[0],r=S[n],a=D(e);switch(n){case"spring":return E(e,t);case"cubicBezier":return I(B,a);case"steps":return I(_,a);default:return I(r,a)}}function q(e){try{return document.querySelectorAll(e)}catch(e){return}}function z(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function j(e){return e.reduce((function(e,t){return e.concat(L.arr(t)?j(t):t)}),[])}function X(e){return L.arr(e)?e:(L.str(e)&&(e=q(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function V(e,t){return e.some((function(e){return e===t}))}function Y(e){var t={};for(var n in e)t[n]=e[n];return t}function Z(e,t){var n=Y(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function G(e,t){var n=Y(e);for(var r in t)n[r]=L.und(e[r])?t[r]:e[r];return n}function W(e){return L.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:L.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):L.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=u;else{var c=u<.5?u*(1+o):u+o-u*o,f=2*u-c;t=l(f,c,i+1/3),n=l(f,c,i),r=l(f,c,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+s+")"}(e):void 0;var t,n}function $(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function K(e,t){return L.fnc(e)?e(t.target,t.id,t.total):e}function R(e,t){return e.getAttribute(t)}function Q(e,t,n){if(V([n,"deg","rad","turn"],$(t)))return t;var r=T.CSS[t+n];if(!L.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var o=100/a.offsetWidth;i.removeChild(a);var u=o*parseFloat(t);return T.CSS[t+n]=u,u}function U(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?Q(e,a,n):a}}function J(e,t){return L.dom(e)&&!L.inp(e)&&(!L.nil(R(e,t))||L.svg(e)&&e[t])?"attribute":L.dom(e)&&V(O,t)?"transform":L.dom(e)&&"transform"!==t&&U(e,t)?"css":null!=e[t]?"object":void 0}function ee(e){if(L.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function te(e,t,n,r){var a=C(t,"scale")?1:0+function(e){return C(e,"translate")||"perspective"===e?"px":C(e,"rotate")||C(e,"skew")?"deg":void 0}(t),i=ee(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?Q(e,i,r):i}function ne(e,t,n,r){switch(J(e,t)){case"transform":return te(e,t,r,n);case"css":return U(e,t,n);case"attribute":return R(e,t);default:return e[t]||0}}function re(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=$(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function ae(e,t){if(L.col(e))return W(e);if(/\s/g.test(e))return e;var n=$(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function ie(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function oe(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=ie(t,i)),t=i}return r}function ue(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*R(e,"r")}(e);case"rect":return function(e){return 2*R(e,"width")+2*R(e,"height")}(e);case"line":return function(e){return ie({x:R(e,"x1"),y:R(e,"y1")},{x:R(e,"x2"),y:R(e,"y2")})}(e);case"polyline":return oe(e);case"polygon":return function(e){var t=e.points;return oe(e)+ie(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function se(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;L.svg(t)&&L.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=R(r,"viewBox"),o=a.width,u=a.height,s=n.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function le(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=se(e.el,e.svg),i=r(),o=r(-1),u=r(1),s=n?1:a.w/a.vW,l=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*l;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function ce(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=ae(L.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:L.str(e)||t?r.split(n):[]}}function fe(e){return z(e?j(L.arr(e)?e.map(X):X(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function de(e){var t=fe(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:ee(e)}}}))}function pe(e,t){var n=Y(t);if(/^spring/.test(n.easing)&&(n.duration=E(n.easing)),L.arr(e)){var r=e.length;2===r&&!L.obj(e[0])?e={value:e}:L.fnc(t.duration)||(n.duration=t.duration/r)}var a=L.arr(e)?e:[e];return a.map((function(e,n){var r=L.obj(e)&&!L.pth(e)?e:{value:e};return L.und(r.delay)&&(r.delay=n?0:t.delay),L.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return G(e,n)}))}function ve(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=G(function(e){for(var t=z(j(e.map((function(e){return Object.keys(e)}))),(function(e){return L.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)L.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)L.key(a)&&n.push({name:a,tweens:pe(t[a],e)});return n}function he(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=K(e[r],t);L.arr(a)&&1===(a=a.map((function(e){return K(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=L.arr(i)?i[1]:i,u=$(o),s=ne(t.target,e.name,u,t),l=n?n.to.original:s,c=L.arr(i)?i[0]:l,f=$(c)||$(s),d=u||f;return L.und(o)&&(o=l),a.from=ce(c,d),a.to=ce(re(o,c),d),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=H(a.easing,a.duration),a.isPath=L.pth(i),a.isPathTargetInsideSVG=a.isPath&&L.svg(t.target),a.isColor=L.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var ge={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function me(e,t){de(e).forEach((function(e){for(var n in t){var r=K(t[n],e),a=e.target,i=$(r),o=ne(a,n,i,e),u=re(ae(r,i||$(o)),o),s=J(a,n);ge[s](a,n,u,e.transforms,!0)}}))}function ye(e,t){return z(j(e.map((function(e){return t.map((function(t){return function(e,t){var n=J(e.target,t.name);if(n){var r=he(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!L.und(e)}))}function be(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var xe=0;var we=[],Me=function(){var e;function t(n){for(var r=we.length,a=0;a<r;){var i=we[a];i.paused?(we.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ke.suspendWhenDocumentHidden&&(Pe()?e=cancelAnimationFrame(e):(we.forEach((function(e){return e._onDocumentVisibility()})),Me()))})),function(){e||Pe()&&ke.suspendWhenDocumentHidden||!(we.length>0)||(e=requestAnimationFrame(t))}}();function Pe(){return!!document&&document.hidden}function ke(e){void 0===e&&(e={});var t,n=0,r=0,a=0,i=0,o=null;function u(e){var t=window.Promise&&new Promise((function(e){return o=e}));return e.finished=t,t}var s=function(e){var t=Z(P,e),n=Z(k,e),r=ve(n,e),a=de(e.targets),i=ye(a,r),o=be(i,n),u=xe;return xe++,G(t,{id:u,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}(e);u(s);function l(){var e=s.direction;"alternate"!==e&&(s.direction="normal"!==e?"normal":"reverse"),s.reversed=!s.reversed,t.forEach((function(e){return e.reversed=s.reversed}))}function c(e){return s.reversed?s.duration-e:e}function f(){n=0,r=c(s.currentTime)*(1/ke.speed)}function d(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=s.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,u=o.length-1,l=o[u];u&&(l=z(o,(function(t){return e<t.end}))[0]||l);for(var c=A(e-l.start-l.delay,0,l.duration)/l.duration,f=isNaN(c)?1:l.easing(c),d=l.to.strings,p=l.round,v=[],h=l.to.numbers.length,g=void 0,m=0;m<h;m++){var y=void 0,b=l.to.numbers[m],x=l.from.numbers[m]||0;y=l.isPath?le(l.value,f*b,l.isPathTargetInsideSVG):x+f*(b-x),p&&(l.isColor&&m>2||(y=Math.round(y*p)/p)),v.push(y)}var w=d.length;if(w){g=d[0];for(var M=0;M<w;M++){d[M];var P=d[M+1],k=v[M];isNaN(k)||(g+=P?k+P:k+" ")}}else g=v[0];ge[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,t++}}function v(e){s[e]&&!s.passThrough&&s[e](s)}function h(e){var f=s.duration,h=s.delay,g=f-s.endDelay,m=c(e);s.progress=A(m/f*100,0,100),s.reversePlayback=m<s.currentTime,t&&function(e){if(s.reversePlayback)for(var n=i;n--;)d(e,t[n]);else for(var r=0;r<i;r++)d(e,t[r])}(m),!s.began&&s.currentTime>0&&(s.began=!0,v("begin")),!s.loopBegan&&s.currentTime>0&&(s.loopBegan=!0,v("loopBegin")),m<=h&&0!==s.currentTime&&p(0),(m>=g&&s.currentTime!==f||!f)&&p(f),m>h&&m<g?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,v("changeBegin")),v("change"),p(m)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,v("changeComplete")),s.currentTime=A(m,0,f),s.began&&v("update"),e>=f&&(r=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(n=a,v("loopComplete"),s.loopBegan=!1,"alternate"===s.direction&&l()):(s.paused=!0,s.completed||(s.completed=!0,v("loopComplete"),v("complete"),!s.passThrough&&"Promise"in window&&(o(),u(s)))))}return s.reset=function(){var e=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.loopBegan=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===e,s.remaining=s.loop,t=s.children;for(var n=i=t.length;n--;)s.children[n].reset();(s.reversed&&!0!==s.loop||"alternate"===e&&1===s.loop)&&s.remaining++,p(s.reversed?s.duration:0)},s._onDocumentVisibility=f,s.set=function(e,t){return me(e,t),s},s.tick=function(e){a=e,n||(n=a),h((a+(r-n))*ke.speed)},s.seek=function(e){h(c(e))},s.pause=function(){s.paused=!0,f()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,we.push(s),f(),Me())},s.reverse=function(){l(),s.completed=!s.reversed,f()},s.restart=function(){s.reset(),s.play()},s.remove=function(e){Te(fe(e),s)},s.reset(),s.autoplay&&s.play(),s}function Oe(e,t){for(var n=t.length;n--;)V(e,t[n].animatable.target)&&t.splice(n,1)}function Te(e,t){var n=t.animations,r=t.children;Oe(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;Oe(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ke.version="3.2.1",ke.speed=1,ke.suspendWhenDocumentHidden=!0,ke.running=we,ke.remove=function(e){for(var t=fe(e),n=we.length;n--;){Te(t,we[n])}},ke.get=ne,ke.set=me,ke.convertPx=Q,ke.path=function(e,t){var n=L.str(e)?q(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:se(n),totalLength:ue(n)*(r/100)}}},ke.setDashoffset=function(e){var t=ue(e);return e.setAttribute("stroke-dasharray",t),t},ke.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?H(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,u="first"===o,s="center"===o,l="last"===o,c=L.arr(e),f=c?parseFloat(e[0]):parseFloat(e),d=c?parseFloat(e[1]):0,p=$(c?e[1]:e)||0,v=t.start||0+(c?f:0),h=[],g=0;return function(e,t,m){if(u&&(o=0),s&&(o=(m-1)/2),l&&(o=m-1),!h.length){for(var y=0;y<m;y++){if(a){var b=s?(a[0]-1)/2:o%a[0],x=s?(a[1]-1)/2:Math.floor(o/a[0]),w=b-y%a[0],M=x-Math.floor(y/a[0]),P=Math.sqrt(w*w+M*M);"x"===i&&(P=-w),"y"===i&&(P=-M),h.push(P)}else h.push(Math.abs(o-y));g=Math.max.apply(Math,h)}r&&(h=h.map((function(e){return r(e/g)*g}))),"reverse"===n&&(h=h.map((function(e){return i?e<0?-1*e:-e:Math.abs(g-e)})))}return v+(c?(d-f)/g:f)*(Math.round(100*h[t])/100)+p}},ke.timeline=function(e){void 0===e&&(e={});var t=ke(e);return t.duration=0,t.add=function(n,r){var a=we.indexOf(t),i=t.children;function o(e){e.passThrough=!0}a>-1&&we.splice(a,1);for(var u=0;u<i.length;u++)o(i[u]);var s=G(n,Z(k,e));s.targets=s.targets||e.targets;var l=t.duration;s.autoplay=!1,s.direction=t.direction,s.timelineOffset=L.und(r)?l:re(r,l),o(t),t.seek(s.timelineOffset);var c=ke(s);o(c),i.push(c);var f=be(i,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ke.easing=H,ke.penner=S,ke.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var Ae=ke,Ce=new M({targets:".animate-me"});Ae.timeline({targets:Ce.listAll,delay:Ae.stagger(100,{grid:[Ce.list[0].length,Ce.list.length],from:"center"}),loop:!0}).add({scale:.5}).add({letterSpacing:"10px"}).add({scale:1}).add({letterSpacing:"6px"});Ae({targets:"svg #XMLID5",keyframes:[{translateX:-1200},{rotateY:180},{translateX:1500},{rotateY:0},{translateX:-1200},{rotateY:180},{translateX:300}],easing:"easeInOutSine",duration:6e4}),d=a("1GZuu");document.addEventListener("DOMContentLoaded",(function(){(0,d.addHiddenPagination)(),c.listRef.addEventListener("click",h.openMovieInfo),c.zeroPlus.addEventListener("click",p(i.getPopularForKidsZero)),c.sixPlus.addEventListener("click",p(i.getPopularForKidsSix)),c.twelvePlus.addEventListener("click",p(i.getPopularForKidsTwelve)),g.btnUp.addEventListener()}))}();
//# sourceMappingURL=kids.223819e2.js.map