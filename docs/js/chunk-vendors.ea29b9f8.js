"use strict";(self["webpackChunkfcm_test"]=self["webpackChunkfcm_test"]||[]).push([[504],{1656:function(t,e,n){function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{A:function(){return r}})},1238:function(t,e,n){n.d(e,{FA:function(){return C},Ku:function(){return L},T9:function(){return g},Uj:function(){return c},ZQ:function(){return m},bD:function(){return O},cY:function(){return v},dM:function(){return T},eX:function(){return E},g:function(){return A},nr:function(){return b},p9:function(){return M},sr:function(){return w},zW:function(){return _}});n(4114),n(8992),n(3949),n(4979);
/**
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
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
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
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */
/**
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
 */
function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function w(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function b(){return!y()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){try{return"object"===typeof indexedDB}catch(t){return!1}}function E(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function T(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
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
 */const S="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?I(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new A(r,s,n);return a}}function I(t,e){return t.replace(x,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
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
 */function O(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(k(n)&&k(o)){if(!O(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
const D=1e3,R=2,N=144e5,P=.5;function M(t,e=D,n=R){const r=e*Math.pow(n,t),i=Math.round(P*r*(Math.random()-.5)*2);return Math.min(N,r+i)}
/**
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
 */
/**
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
 */
function L(t){return t&&t._delegate?t._delegate:t}},1106:function(t,e,n){n.d(e,{k:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var o=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)}))):(a(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)})))}))}function s(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return s(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return s(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return s(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},1594:function(t,e,n){n.d(e,{Ay:function(){return Ee}});n(4114),n(8992),n(3215),n(4520),n(3949),n(1454),n(7550);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?m(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var v=p(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function w(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function _(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],g=p&&p.component;return g?(p.configProps&&A(g,s,p.route,p.configProps),a(g,s,i)):a()}var v=u.matched[h],m=v&&v.components[c];if(!v||!m)return l[c]=null,a();l[c]={component:m},s.registerRouteInstance=function(t,e){var n=v.instances[c];(e&&n!==t||!e&&n===t)&&(v.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){v.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==v.instances[c]&&(v.instances[c]=t.componentInstance),T(u)};var y=v.props&&v.props[c];return y&&(r(l[c],{route:u,configProps:y}),A(m,s,u,y)),a(m,s,i)}};function A(t,e,n,i){var o=e.props=C(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function I(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function x(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var k=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},D=X,R=j,N=$,P=U,M=Q,L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=L.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],v=n[6],m=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,w="+"===v||"*"===v,b="?"===v||"*"===v,_=n[2]||a,E=p||g;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!m,pattern:E?H(E):m?".*":"[^"+B(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function $(t,e){return U(j(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",z(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?F:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(k(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function K(t,e){return t.keys=e,t}function z(t){return t&&t.sensitive?"":"i"}function q(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return K(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",z(n));return K(o,e)}function W(t,e,n){return Q(j(t,n),e,n)}function Q(t,e,n){k(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",K(new RegExp("^"+o,z(n)),e)}function X(t,e,n){return k(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?q(t,e):k(t)?G(t,e,n):W(t,e,n)}D.parse=R,D.compile=N,D.tokensToFunction=P,D.tokensToRegExp=M;var Y=Object.create(null);function J(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=D.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=J(c,a,"path "+e.path)}else 0;return o}var l=x(o.path||""),h=e&&e.path||"/",f=l.path?I(l.path,h,n||o.append):h,d=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,g=null==this.activeClass?f:this.activeClass,v=null==this.exactActiveClass?d:this.exactActiveClass,m=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[v]=w(i,m,this.exactPath),u[g]=this.exact||this.exactPath?u[v]:_(i,m);var y=u[v]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},E={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=b})):E[this.event]=b;var T={class:u},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[g],isExactActive:u[v]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?t():t("span",{},S)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":y};else{var A=st(this.$slots.default);if(A){A.isStatic=!1;var C=A.data=r({},A.data);for(var I in C.on=C.on||{},C.on){var x=C.on[I];I in E&&(C.on[I]=Array.isArray(x)?x:[x])}for(var O in E)O in C.on?C.on[O].push(E[O]):C.on[O]=b;var k=A.data.attrs=r({},A.data.attrs);k.href=c,k["aria-current"]=y}else T.on=E}return t(this.tag,T,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?O(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=D(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(pt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var g=gt(c,t),v=J(g,d,'redirect route with path "'+g+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=J(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function gt(t,e){return I(t,e.parent?e.parent.path:"/",!0)}var vt=ct&&window.performance&&window.performance.now?window.performance:Date;function mt(){return vt.now().toFixed(3)}var yt=mt();function wt(){return yt}function bt(t){return yt=t}var _t=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Ct(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Nt(t,o)})).catch((function(t){0})):Nt(s,o))}))}}function St(){var t=wt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){St(),t.state&&t.state.key&&bt(t.state.key)}function Ct(){var t=wt();if(t)return _t[t]}function It(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function xt(t){return Dt(t.x)||Dt(t.y)}function Ot(t){return{x:Dt(t.x)?t.x:window.pageXOffset,y:Dt(t.y)?t.y:window.pageYOffset}}function kt(t){return{x:Dt(t.x)?t.x:0,y:Dt(t.y)?t.y:0}}function Dt(t){return"number"===typeof t}var Rt=/^#\d/;function Nt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Rt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=kt(i),e=It(r,i)}else xt(t)&&(e=Ot(t))}else n&&xt(t)&&(e=Ot(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Mt(t,e){St();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:bt(mt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Lt(t){Mt(t,!0)}var jt={redirected:2,aborted:4,cancelled:8,duplicated:16};function $t(t,e){return Bt(t,e,jt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Kt(e)+'" via a navigation guard.')}function Ft(t,e){var n=Bt(t,e,jt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return Bt(t,e,jt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ut(t,e){return Bt(t,e,jt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function Kt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function zt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function qt(t,e){return zt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Wt(t){return function(e,n,r){var i=!1,o=0,s=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=zt(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Xt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(qt(t,jt.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!qt(t)&&zt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),o(Ft(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(oe(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Wt(h)),d=function(e,n){if(r.pending!==t)return o(Vt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Ut(i,t))):zt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o($t(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Gt(f,d,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Gt(s,d,(function(){if(r.pending!==t)return o(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(O(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(O(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?Mt(e):Lt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(O(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(ge(),(function(n){r&&Tt(t.router,n,e,!0),Pt||ye(n.fullPath)}))},o=Pt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){me(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?me(e):ye(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function pe(){var t=ge();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function me(t){Pt?Mt(ve(t)):window.location.hash=t}function ye(t){Pt?Lt(ve(t)):window.location.replace(ve(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){qt(t,jt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Pt&&i;o&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Te(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Se(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,_e);var Ee=be;function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Se(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}be.install=at,be.version="3.6.5",be.isNavigationFailure=qt,be.NavigationFailureType=jt,be.START_LOCATION=v,ct&&window.Vue&&window.Vue.use(be)},2856:function(t,e,n){n.d(e,{Ay:function(){return Jr}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(3949),n(1454),n(8872),n(7550),n(9848);var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function g(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function v(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,y,2):String(t)}function y(t,e){return e&&e.__v_isRef?e.value:e}function w(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var _=b("key,ref,slot,slot-scope,is");function E(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var T=Object.prototype.hasOwnProperty;function S(t,e){return T.call(t,e)}function A(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var C=/-(\w)/g,I=A((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),x=A((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,k=A((function(t){return t.replace(O,"-$1").toLowerCase()}));function D(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function R(t,e){return t.bind(e)}var N=Function.prototype.bind?R:D;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function M(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function j(t,e,n){}var $=function(t,e,n){return!1},F=function(t){return t};function V(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return V(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return V(t[n],e[n])}))}catch(c){return!1}}function U(t,e){for(var n=0;n<t.length;n++)if(V(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function H(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var K="data-server-rendered",z=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:j,parsePlatformTagName:F,mustUseProp:$,async:!0,_lifecycleHooks:q},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function X(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Y=new RegExp("[^".concat(W.source,".$_\\d]"));function J(t){if(!Y.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z="__proto__"in{},tt="undefined"!==typeof window,et=tt&&window.navigator.userAgent.toLowerCase(),nt=et&&/msie|trident/.test(et),rt=et&&et.indexOf("msie 9.0")>0,it=et&&et.indexOf("edge/")>0;et&&et.indexOf("android");var ot=et&&/iphone|ipad|ipod|ios/.test(et);et&&/chrome\/\d+/.test(et),et&&/phantomjs/.test(et);var st,at=et&&et.match(/firefox\/(\d+)/),ct={}.watch,ut=!1;if(tt)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ut=!0}}),window.addEventListener("test-passive",null,lt)}catch(Zs){}var ht=function(){return void 0===st&&(st=!tt&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),st},ft=tt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,gt="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);pt="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var vt=null;function mt(t){void 0===t&&(t=null),t||vt&&vt._scope.off(),vt=t,t&&t._scope.on()}var yt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),wt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function bt(t){return new yt(void 0,void 0,void 0,String(t))}function _t(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"===typeof SuppressedError&&SuppressedError;var Et=0,Tt=[],St=function(){for(var t=0;t<Tt.length;t++){var e=Tt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Tt.length=0},At=function(){function t(){this._pending=!1,this.id=Et++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Tt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();At.target=null;var Ct=[];function It(t){Ct.push(t),At.target=t}function xt(){Ct.pop(),At.target=Ct[Ct.length-1]}var Ot=Array.prototype,kt=Object.create(Ot),Dt=["push","pop","shift","unshift","splice","sort","reverse"];Dt.forEach((function(t){var e=Ot[t];X(kt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Rt=Object.getOwnPropertyNames(kt),Nt={},Pt=!0;function Mt(t){Pt=t}var Lt={notify:j,depend:j,addSub:j,removeSub:j},jt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Lt:new At,this.vmCount=0,X(t,"__ob__",this),i(t)){if(!n)if(Z)t.__proto__=kt;else for(var r=0,o=Rt.length;r<o;r++){var s=Rt[r];X(t,s,kt[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];Ft(t,s,Nt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)$t(t[e],!1,this.mock)},t}();function $t(t,e,n){return t&&S(t,"__ob__")&&t.__ob__ instanceof jt?t.__ob__:!Pt||!n&&ht()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||qt(t)||t instanceof yt?void 0:new jt(t,e,n)}function Ft(t,e,n,r,o,s,a){void 0===a&&(a=!1);var c=new At,u=Object.getOwnPropertyDescriptor(t,e);if(!u||!1!==u.configurable){var l=u&&u.get,h=u&&u.set;l&&!h||n!==Nt&&2!==arguments.length||(n=t[e]);var f=o?n&&n.__ob__:$t(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=l?l.call(t):n;return At.target&&(c.depend(),f&&(f.dep.depend(),i(e)&&Bt(e))),qt(e)&&!o?e.value:e},set:function(e){var r=l?l.call(t):n;if(H(r,e)){if(h)h.call(t,e);else{if(l)return;if(!o&&qt(r)&&!qt(e))return void(r.value=e);n=e}f=o?e&&e.__ob__:$t(e,!1,s),c.notify()}}}),c}}function Vt(t,e,n){if(!zt(t)){var r=t.__ob__;return i(t)&&g(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&$t(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Ft(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function Ut(t,e){if(i(t)&&g(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||zt(t)||S(t,e)&&(delete t[e],n&&n.dep.notify())}}function Bt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Bt(e)}function Ht(t){return Kt(t,!0),X(t,"__v_isShallow",!0),t}function Kt(t,e){if(!zt(t)){$t(t,e,ht());0}}function zt(t){return!(!t||!t.__v_isReadonly)}function qt(t){return!(!t||!0!==t.__v_isRef)}function Gt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(qt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];qt(r)&&!qt(t)?r.value=t:e[n]=t}})}var Wt="watcher";"".concat(Wt," callback"),"".concat(Wt," getter"),"".concat(Wt," cleanup");var Qt;var Xt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Yt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Jt(){return Qt}function Zt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var te=A((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function ee(t,e){function n(){var t=n.fns;if(!i(t))return Ye(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Ye(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function ne(t,e,n,r,i,s){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=te(c),o(u)||(o(l)?(o(u.fns)&&(u=t[c]=ee(u,s)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)o(t[c])&&(h=te(c),r(h.name,e[c],h.capture))}function re(t,e,n){var r;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),E(r.fns,c)}o(i)?r=ee([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=ee([i,c]),r.merged=!0,t[e]=r}function ie(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=k(u);oe(i,c,u,l,!0)||oe(i,a,u,l,!1)}return i}}function oe(t,e,n,r,i){if(s(e)){if(S(e,n))return t[n]=e[n],i||delete e[n],!0;if(S(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function se(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function ae(t){return u(t)?[bt(t)]:i(t)?ue(t):void 0}function ce(t){return s(t)&&s(t.text)&&c(t.isComment)}function ue(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ue(r,"".concat(e||"","_").concat(n)),ce(r[0])&&ce(l)&&(h[c]=bt(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ce(l)?h[c]=bt(l.text+r):""!==r&&h.push(bt(r)):ce(r)&&ce(l)?h[c]=bt(l.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function le(t,e){var n,r,o,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(gt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(o=Object.keys(t),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=e(t[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function he(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=M(M({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function fe(t){return Ar(this.$options,"filters",t,!0)||F}function de(t,e){return i(t)?-1===t.indexOf(e):t!==e}function pe(t,e,n,r,i){var o=G.keyCodes[e]||n;return i&&r&&!G.keyCodes[e]?de(i,r):o?de(o,t):r?k(r)!==e:void 0===t}function ge(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=L(n));var s=void 0,a=function(i){if("class"===i||"style"===i||_(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||G.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(i),u=k(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function ve(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ye(r,"__static__".concat(t),!1)),r}function me(t,e,n){return ye(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ye(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&we(t[r],"".concat(e,"_").concat(r),n);else we(t,e,n)}function we(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function be(t,e){if(e)if(d(e)){var n=t.on=t.on?M({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function _e(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?_e(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Ee(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Te(t,e){return"string"===typeof t?e+t:t}function Se(t){t._o=me,t._n=w,t._s=m,t._l=le,t._t=he,t._q=V,t._i=U,t._m=ve,t._f=fe,t._k=pe,t._b=ge,t._v=bt,t._e=wt,t._u=_e,t._g=be,t._d=Ee,t._p=Te}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Ce)&&delete n[u];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ie(t){return t.isComment&&t.asyncFactory}function xe(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},e)e[u]&&"$"!==u[0]&&(o[u]=Oe(t,n,u,e[u]))}else o={};for(var l in n)l in o||(o[l]=ke(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),X(o,"$stable",a),X(o,"$key",c),X(o,"$hasNormal",s),o}function Oe(t,e,n,r){var o=function(){var e=vt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ae(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!Ie(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function ke(t,e){return function(){return t[e]}}function De(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Re(t);mt(t),It();var i=Ye(n,null,[t._props||Ht({}),r],t,"setup");if(xt(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Gt(o,i,s)}else for(var s in i)Q(s)||Gt(t,i,s);else 0}}function Re(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};X(e,"_v_attr_proxy",!0),Ne(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Ne(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Me(t)},emit:N(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Gt(t,e,n)}))}}}function Ne(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,Pe(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function Pe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Me(t){return t._slotsProxy||Le(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Le(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function je(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Ae(e._renderChildren,i),t.$scopedSlots=n?xe(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return qe(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return qe(t,e,n,r,i,!0)};var o=n&&n.data;Ft(t,"$attrs",o&&o.attrs||r,null,!0),Ft(t,"$listeners",e._parentListeners||r,null,!0)}var $e=null;function Fe(t){Se(t.prototype),t.prototype.$nextTick=function(t){return ln(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e._parentVnode;r&&t._isMounted&&(t.$scopedSlots=xe(t.$parent,r.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Le(t._slotsProxy,t.$scopedSlots)),t.$vnode=r;var o,s=vt,a=$e;try{mt(t),$e=t,o=n.call(t._renderProxy,t.$createElement)}catch(Zs){Xe(Zs,t,"render"),o=t._vnode}finally{$e=a,mt(s)}return i(o)&&1===o.length&&(o=o[0]),o instanceof yt||(o=wt()),o.parent=r,o}}function Ve(t,e){return(t.__esModule||gt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Ue(t,e,n,r,i){var o=wt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Be(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=$e;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return E(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=B((function(n){t.resolved=Ve(n,e),i?r.length=0:l(!0)})),d=B((function(e){s(t.errorComp)&&(t.error=!0,l(!0))})),p=t(f,d);return h(p)&&(v(p)?o(t.resolved)&&p.then(f,d):v(p.component)&&(p.component.then(f,d),s(p.error)&&(t.errorComp=Ve(p.error,e)),s(p.loading)&&(t.loadingComp=Ve(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(t.resolved)&&d(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function He(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Ie(n)))return n}}var Ke=1,ze=2;function qe(t,e,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=ze),Ge(t,e,n,r,o)}function Ge(t,e,n,r,o){if(s(n)&&s(n.__ob__))return wt();if(s(n)&&s(n.is)&&(e=n.is),!e)return wt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===ze?r=ae(r):o===Ke&&(r=se(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||G.getTagNamespace(e),a=G.isReservedTag(e)?new yt(G.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(u=Ar(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):cr(u,n,t,r,e)}else a=cr(e,n,t,r);return i(a)?a:s(a)?(s(c)&&We(a,c),s(n)&&Qe(n),a):wt()}function We(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&We(c,e,n)}}function Qe(t){h(t.style)&&gn(t.style),h(t.class)&&gn(t.class)}function Xe(t,e,n){It();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Zs){Je(Zs,r,"errorCaptured hook")}}}Je(t,e,n)}finally{xt()}}function Ye(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(t){return Xe(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Zs){Xe(Zs,r,i)}return o}function Je(t,e,n){if(G.errorHandler)try{return G.errorHandler.call(null,t,e,n)}catch(Zs){Zs!==t&&Ze(Zs,null,"config.errorHandler")}Ze(t,e,n)}function Ze(t,e,n){if(!tt||"undefined"===typeof console)throw t;console.error(t)}var tn,en=!1,nn=[],rn=!1;function on(){rn=!1;var t=nn.slice(0);nn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var sn=Promise.resolve();tn=function(){sn.then(on),ot&&setTimeout(j)},en=!0}else if(nt||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(on)}:function(){setTimeout(on,0)};else{var an=1,cn=new MutationObserver(on),un=document.createTextNode(String(an));cn.observe(un,{characterData:!0}),tn=function(){an=(an+1)%2,un.data=String(an)},en=!0}function ln(t,e){var n;if(nn.push((function(){if(t)try{t.call(e)}catch(Zs){Xe(Zs,e,"nextTick")}else n&&n(e)})),rn||(rn=!0,tn()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function hn(t){return function(e,n){if(void 0===n&&(n=vt),n)return fn(n,t,e)}}function fn(t,e,n){var r=t.$options;r[e]=mr(r[e],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var dn="2.7.16";var pn=new pt;function gn(t){return vn(t,pn),pn.clear(),t}function vn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)vn(t[n],e)}else if(qt(t))vn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)vn(t[r[n]],e)}}}var mn,yn=0,wn=function(){function t(t,e,n,r,i){Yt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",l(e)?this.getter=e:(this.getter=J(e),this.getter||(this.getter=j)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;It(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Zs){if(!this.user)throw Zs;Xe(Zs,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&gn(t),xt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Yn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Ye(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&E(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function bn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Sn(t,e)}function _n(t,e){mn.$on(t,e)}function En(t,e){mn.$off(t,e)}function Tn(t,e){var n=mn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Sn(t,e,n){mn=t,ne(e,n||{},_n,En,Tn,t),mn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(s=a[c],s===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Ye(n[o],e,r,e,i)}return e}}var Cn=null;function In(t){var e=Cn;return Cn=t,function(){Cn=e}}function xn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=In(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||E(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=wt),Mn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}};new wn(t,r,j,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Mn(t,"mounted")),t}function Dn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&Ne(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&Ne(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,Sn(t,n,f),e&&t.$options.props){Mt(!1);for(var d=t._props,p=t.$options._propKeys||[],g=0;g<p.length;g++){var v=p[g],m=t.$options.props;d[v]=Cr(v,m,e,t)}Mt(!0),t.$options.propsData=e}u&&(t.$slots=Ae(o,i.context),t.$forceUpdate())}function Rn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Nn(t,e){if(e){if(t._directInactive=!1,Rn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Mn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!Rn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e,n,r){void 0===r&&(r=!0),It();var i=vt,o=Jt();r&&mt(t);var s=t.$options[e],a="".concat(e," hook");if(s)for(var c=0,u=s.length;c<u;c++)Ye(s[c],t,n||null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),r&&(mt(i),o&&o.on()),xt()}var Ln=[],jn=[],$n={},Fn=!1,Vn=!1,Un=0;function Bn(){Un=Ln.length=jn.length=0,$n={},Fn=Vn=!1}var Hn=0,Kn=Date.now;if(tt&&!nt){var zn=window.performance;zn&&"function"===typeof zn.now&&Kn()>document.createEvent("Event").timeStamp&&(Kn=function(){return zn.now()})}var qn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Gn(){var t,e;for(Hn=Kn(),Vn=!0,Ln.sort(qn),Un=0;Un<Ln.length;Un++)t=Ln[Un],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=jn.slice(),r=Ln.slice();Bn(),Xn(n),Wn(r),St(),ft&&G.devtools&&ft.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function Qn(t){t._inactive=!1,jn.push(t)}function Xn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Nn(t[e],!0)}function Yn(t){var e=t.id;if(null==$n[e]&&(t!==At.target||!t.noRecurse)){if($n[e]=!0,Vn){var n=Ln.length-1;while(n>Un&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Fn||(Fn=!0,ln(Gn))}}function Jn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Zt(t),i=gt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Zn(t){var e=tr(t.$options.inject,t);e&&(Mt(!1),Object.keys(e).forEach((function(n){Ft(t,n,e[n])})),Mt(!0))}function tr(t,e){if(t){for(var n=Object.create(null),r=gt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function er(t,e,n,o,s){var c,u=this,l=s.options;S(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=tr(l.inject,o),this.slots=function(){return u.$slots||xe(o,t.scopedSlots,u.$slots=Ae(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xe(o,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=xe(o,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var s=qe(c,t,e,n,r,f);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return qe(c,t,e,n,r,f)}}function nr(t,e,n,o,a){var c=t.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Cr(h,l,e||r);else s(n.attrs)&&ir(u,n.attrs),s(n.props)&&ir(u,n.props);var f=new er(n,u,a,o,t),d=c.render.call(null,f._c,f);if(d instanceof yt)return rr(d,n,f.parent,c,f);if(i(d)){for(var p=ae(d)||[],g=new Array(p.length),v=0;v<p.length;v++)g[v]=rr(p[v],n,f.parent,c,f);return g}}function rr(t,e,n,r,i){var o=_t(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function ir(t,e){for(var n in e)t[I(n)]=e[n]}function or(t){return t.name||t.__name||t._componentTag}Se(er.prototype);var sr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;sr.prepatch(n,n)}else{var r=t.componentInstance=ur(t,Cn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Dn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):Nn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ar=Object.keys(sr);function cr(t,e,n,r,i){if(!o(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(o(t.cid)&&(u=t,t=Be(u,c),void 0===t))return Ue(u,e,n,r,i);e=e||{},Xr(t),s(e.model)&&fr(t.options,e);var l=ie(e,t,i);if(a(t.options.functional))return nr(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}lr(e);var p=or(t.options)||i,g=new yt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},u);return g}}}function ur(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function lr(t){for(var e=t.hook||(t.hook={}),n=0;n<ar.length;n++){var r=ar[n],i=e[r],o=sr[r];i===o||i&&i._merged||(e[r]=i?hr(o,i):o)}}function hr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function fr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],c=e.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var dr=j,pr=G.optionMergeStrategies;function gr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,o,s=gt?Reflect.ownKeys(e):Object.keys(e),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=t[r],o=e[r],n&&S(t,r)?i!==o&&d(i)&&d(o)&&gr(i,o):Vt(t,r,o));return t}function vr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?gr(r,i):i}:e?t?function(){return gr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function mr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?yr(n):n}function yr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function wr(t,e,n,r){var i=Object.create(t||null);return e?M(i,e):i}pr.data=function(t,e,n){return n?vr(t,e,n):e&&"function"!==typeof e?t:vr(t,e)},q.forEach((function(t){pr[t]=mr})),z.forEach((function(t){pr[t+"s"]=wr})),pr.watch=function(t,e,n,r){if(t===ct&&(t=void 0),e===ct&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in M(o,t),e){var a=o[s],c=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},pr.props=pr.methods=pr.inject=pr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return M(i,t),e&&M(i,e),i},pr.provide=function(t,e){return t?function(){var n=Object.create(null);return gr(n,l(t)?t.call(this):t),e&&gr(n,l(e)?e.call(this):e,!1),n}:e};var br=function(t,e){return void 0===e?t:e};function _r(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=I(o),a[s]={type:null})}else if(d(n))for(var c in n)o=n[c],s=I(c),a[s]=d(o)?o:{type:o};else 0;t.props=a}}function Er(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];r[s]=d(a)?M({from:s},a):{from:a}}else 0}}function Tr(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Sr(t,e,n){if(l(e)&&(e=e.options),_r(e,n),Er(e,n),Tr(e),!e._base&&(e.extends&&(t=Sr(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Sr(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)S(t,o)||a(o);function a(r){var i=pr[r]||br;s[r]=i(t[r],e[r],n,r)}return s}function Ar(t,e,n,r){if("string"===typeof n){var i=t[e];if(S(i,n))return i[n];var o=I(n);if(S(i,o))return i[o];var s=x(o);if(S(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Cr(t,e,n,r){var i=e[t],o=!S(n,t),s=n[t],a=Dr(Boolean,i.type);if(a>-1)if(o&&!S(i,"default"))s=!1;else if(""===s||s===k(t)){var c=Dr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Ir(r,i,t);var u=Pt;Mt(!0),$t(s),Mt(u)}return s}function Ir(t,e,n){if(S(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Or(e.type)?r.call(t):r}}var xr=/^\s*function (\w+)/;function Or(t){var e=t&&t.toString().match(xr);return e?e[1]:""}function kr(t,e){return Or(t)===Or(e)}function Dr(t,e){if(!i(e))return kr(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(kr(e[n],t))return n;return-1}var Rr={enumerable:!0,configurable:!0,get:j,set:j};function Nr(t,e,n){Rr.get=function(){return this[e][n]},Rr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Rr)}function Pr(t){var e=t.$options;if(e.props&&Mr(t,e.props),De(t),e.methods&&Hr(t,e.methods),e.data)Lr(t);else{var n=$t(t._data={});n&&n.vmCount++}e.computed&&Fr(t,e.computed),e.watch&&e.watch!==ct&&Kr(t,e.watch)}function Mr(t,e){var n=t.$options.propsData||{},r=t._props=Ht({}),i=t.$options._propKeys=[],o=!t.$parent;o||Mt(!1);var s=function(o){i.push(o);var s=Cr(o,e,n,t);Ft(r,o,s,void 0,!0),o in t||Nr(t,"_props",o)};for(var a in e)s(a);Mt(!0)}function Lr(t){var e=t.$options.data;e=t._data=l(e)?jr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&S(r,o)||Q(o)||Nr(t,"_data",o)}var s=$t(e);s&&s.vmCount++}function jr(t,e){It();try{return t.call(e,e)}catch(Zs){return Xe(Zs,e,"data()"),{}}finally{xt()}}var $r={lazy:!0};function Fr(t,e){var n=t._computedWatchers=Object.create(null),r=ht();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new wn(t,s||j,j,$r)),i in t||Vr(t,i,o)}}function Vr(t,e,n){var r=!ht();l(n)?(Rr.get=r?Ur(e):Br(n),Rr.set=j):(Rr.get=n.get?r&&!1!==n.cache?Ur(e):Br(n.get):j,Rr.set=n.set||j),Object.defineProperty(t,e,Rr)}function Ur(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),At.target&&e.depend(),e.value}}function Br(t){return function(){return t.call(this,this)}}function Hr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?j:N(e[n],t)}function Kr(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)zr(t,n,r[o]);else zr(t,n,r)}}function zr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function qr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Vt,t.prototype.$delete=Ut,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return zr(r,t,e,n);n=n||{},n.user=!0;var i=new wn(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');It(),Ye(e,r,[i.value],r,o),xt()}return function(){i.teardown()}}}var Gr=0;function Wr(t){t.prototype._init=function(t){var e=this;e._uid=Gr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Xt(!0),e._scope.parent=void 0,e._scope._vm=!0,t&&t._isComponent?Qr(e,t):e.$options=Sr(Xr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,xn(e),bn(e),je(e),Mn(e,"beforeCreate",void 0,!1),Zn(e),Pr(e),Jn(e),Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Qr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Xr(t){var e=t.options;if(t.super){var n=Xr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Yr(t);i&&M(t.extendOptions,i),e=t.options=Sr(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Yr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Jr(t){this._init(t)}function Zr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function ti(t){t.mixin=function(t){return this.options=Sr(this.options,t),this}}function ei(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=or(t)||or(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Sr(n.options,t),s["super"]=n,s.options.props&&ni(s),s.options.computed&&ri(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,z.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=M({},s.options),i[r]=s,s}}function ni(t){var e=t.options.props;for(var n in e)Nr(t.prototype,"_props",n)}function ri(t){var e=t.options.computed;for(var n in e)Vr(t.prototype,n,e[n])}function ii(t){z.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function oi(t){return t&&(or(t.Ctor.options)||t.tag)}function si(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function ai(t,e){var n=t.cache,r=t.keys,i=t._vnode,o=t.$vnode;for(var s in n){var a=n[s];if(a){var c=a.name;c&&!e(c)&&ci(n,s,r,i)}}o.componentOptions.children=void 0}function ci(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,E(n,e)}Wr(Jr),qr(Jr),An(Jr),On(Jr),Fe(Jr);var ui=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:oi(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ci(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ci(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ai(t,(function(t){return si(e,t)}))})),this.$watch("exclude",(function(e){ai(t,(function(t){return!si(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=He(t),n=e&&e.componentOptions;if(n){var r=oi(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!si(o,r))||s&&r&&si(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,E(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},hi={KeepAlive:li};function fi(t){var e={get:function(){return G}};Object.defineProperty(t,"config",e),t.util={warn:dr,extend:M,mergeOptions:Sr,defineReactive:Ft},t.set=Vt,t.delete=Ut,t.nextTick=ln,t.observable=function(t){return $t(t),t},t.options=Object.create(null),z.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,M(t.options.components,hi),Zr(t),ti(t),ei(t),ii(t)}fi(Jr),Object.defineProperty(Jr.prototype,"$isServer",{get:ht}),Object.defineProperty(Jr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Jr,"FunctionalRenderContext",{value:er}),Jr.version=dn;var di=b("style,class"),pi=b("input,textarea,option,select,progress"),gi=function(t,e,n){return"value"===n&&pi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},vi=b("contenteditable,draggable,spellcheck"),mi=b("events,caret,typing,plaintext-only"),yi=function(t,e){return Ti(e)||"false"===e?"false":"contenteditable"===t&&mi(e)?e:"true"},wi=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),bi="http://www.w3.org/1999/xlink",_i=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ei=function(t){return _i(t)?t.slice(6,t.length):""},Ti=function(t){return null==t||!1===t};function Si(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Ai(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Ai(e,n.data));return Ci(e.staticClass,e.class)}function Ai(t,e){return{staticClass:Ii(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Ci(t,e){return s(t)||s(e)?Ii(t,xi(e)):""}function Ii(t,e){return t?e?t+" "+e:t:e||""}function xi(t){return Array.isArray(t)?Oi(t):h(t)?ki(t):"string"===typeof t?t:""}function Oi(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=xi(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ki(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Di={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ri=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ni=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(t){return Ri(t)||Ni(t)};function Mi(t){return Ni(t)?"svg":"math"===t?"math":void 0}var Li=Object.create(null);function ji(t){if(!tt)return!0;if(Pi(t))return!1;if(t=t.toLowerCase(),null!=Li[t])return Li[t];var e=document.createElement(t);return t.indexOf("-")>-1?Li[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Li[t]=/HTMLUnknownElement/.test(e.toString())}var $i=b("text,number,password,search,email,tel,url");function Fi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Vi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Ui(t,e){return document.createElementNS(Di[t],e)}function Bi(t){return document.createTextNode(t)}function Hi(t){return document.createComment(t)}function Ki(t,e,n){t.insertBefore(e,n)}function zi(t,e){t.removeChild(e)}function qi(t,e){t.appendChild(e)}function Gi(t){return t.parentNode}function Wi(t){return t.nextSibling}function Qi(t){return t.tagName}function Xi(t,e){t.textContent=e}function Yi(t,e){t.setAttribute(e,"")}var Ji=Object.freeze({__proto__:null,createElement:Vi,createElementNS:Ui,createTextNode:Bi,createComment:Hi,insertBefore:Ki,removeChild:zi,appendChild:qi,parentNode:Gi,nextSibling:Wi,tagName:Qi,setTextContent:Xi,setStyleScope:Yi}),Zi={create:function(t,e){to(e)},update:function(t,e){t.data.ref!==e.data.ref&&(to(t,!0),to(e))},destroy:function(t){to(t,!0)}};function to(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,c=e?void 0:o;if(l(n))Ye(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=qt(n),d=r.$refs;if(h||f)if(u){var p=h?d[n]:n.value;e?i(p)&&E(p,o):i(p)?p.includes(o)||p.push(o):h?(d[n]=[o],eo(r,n,d[n])):n.value=[o]}else if(h){if(e&&d[n]!==o)return;d[n]=c,eo(r,n,a)}else if(f){if(e&&n.value!==o)return;n.value=a}else 0}}}function eo(t,e,n){var r=t._setupState;r&&S(r,e)&&(qt(r[e])?r[e].value=n:r[e]=n)}var no=new yt("",{},[]),ro=["create","activate","update","remove","destroy"];function io(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&oo(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function oo(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||$i(r)&&$i(i)}function so(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function ao(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<ro.length;++e)for(r[ro[e]]=[],n=0;n<c.length;++n)s(c[n][ro[e]])&&r[ro[e]].push(c[n][ro[e]]);function h(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,o,c){if(s(t.elm)&&s(o)&&(t=o[c]=_t(t)),t.isRootInsert=!i,!g(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),T(t),w(t,h,e),s(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function g(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return v(t,e),y(n,t.elm,r),a(o)&&m(t,e,n,r),!0}}function v(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(E(t,e),T(t)):(to(t),e.push(t))}function m(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](no,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function w(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](no,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(no,t),s(e.insert)&&n.push(t))}function T(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=Cn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function S(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function A(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function C(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(I(r),A(r)):d(r.elm))}}function I(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=f(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&I(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function x(t,e,n,r,i){var a,c,u,h,f=0,d=0,g=e.length-1,v=e[0],m=e[g],y=n.length-1,w=n[0],b=n[y],_=!i;while(f<=g&&d<=y)o(v)?v=e[++f]:o(m)?m=e[--g]:io(v,w)?(k(v,w,r,n,d),v=e[++f],w=n[++d]):io(m,b)?(k(m,b,r,n,y),m=e[--g],b=n[--y]):io(v,b)?(k(v,b,r,n,y),_&&l.insertBefore(t,v.elm,l.nextSibling(m.elm)),v=e[++f],b=n[--y]):io(m,w)?(k(m,w,r,n,d),_&&l.insertBefore(t,m.elm,v.elm),m=e[--g],w=n[++d]):(o(a)&&(a=so(e,f,g)),c=s(w.key)?a[w.key]:O(w,e,f,g),o(c)?p(w,r,t,v.elm,!1,n,d):(u=e[c],io(u,w)?(k(u,w,r,n,d),e[c]=void 0,_&&l.insertBefore(t,u.elm,v.elm)):p(w,r,t,v.elm,!1,n,d)),w=n[++d]);f>g?(h=o(n[y+1])?null:n[y+1].elm,S(t,h,n,d,y,r)):d>y&&C(e,f,g)}function O(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&io(t,o))return i}}function k(t,e,n,i,c,u){if(t!==e){s(e.elm)&&s(i)&&(e=i[c]=_t(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?N(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(s(d)&&_(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}o(e.text)?s(p)&&s(g)?p!==g&&x(h,p,g,n,u):s(g)?(s(t.text)&&l.setTextContent(h,""),S(h,null,g,0,g.length-1,n)):s(p)?C(p,0,p.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function D(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var R=b("attrs,class,staticClass,staticStyle,key");function N(t,e,n,r){var i,o=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return v(e,n),!0;if(s(o)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!N(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!R(p)){d=!0,E(e,n);break}!d&&c["class"]&&gn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var c=!1,u=[];if(o(t))c=!0,p(e,u);else{var f=s(t.nodeType);if(!f&&io(t,e))k(t,e,u,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(K)&&(t.removeAttribute(K),n=!0),a(n)&&N(t,e,u))return D(e,u,!0),t;t=h(t)}var d=t.elm,g=l.parentNode(d);if(p(e,u,d._leaveCb?null:g,l.nextSibling(d)),s(e.parent)){var v=e.parent,m=_(e);while(v){for(var y=0;y<r.destroy.length;++y)r.destroy[y](v);if(v.elm=e.elm,m){for(var w=0;w<r.create.length;++w)r.create[w](no,v);var b=v.data.hook.insert;if(b.merged)for(var E=b.fns.slice(1),T=0;T<E.length;T++)E[T]()}else to(v);v=v.parent}}s(g)?C([t],0,0):s(t.tag)&&A(t)}}return D(e,u,c),e.elm}s(t)&&A(t)}}var co={create:uo,update:uo,destroy:function(t){uo(t,no)}};function uo(t,e){(t.data.directives||e.data.directives)&&lo(t,e)}function lo(t,e){var n,r,i,o=t===no,s=e===no,a=fo(t.data.directives,t.context),c=fo(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,go(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(go(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)go(u[n],"inserted",e,t)};o?re(e,"insert",h):h()}if(l.length&&re(e,"postpatch",(function(){for(var n=0;n<l.length;n++)go(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||go(a[n],"unbind",t,t,s)}var ho=Object.create(null);function fo(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=ho),i[po(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Ar(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Ar(e.$options,"directives",r.name,!0)}return i}function po(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function go(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Zs){Xe(Zs,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var vo=[Zi,co];function mo(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=M({},h)),h)i=h[r],c=l[r],c!==i&&yo(u,r,i,e.data.pre);for(r in(nt||it)&&h.value!==l.value&&yo(u,"value",h.value),l)o(h[r])&&(_i(r)?u.removeAttributeNS(bi,Ei(r)):vi(r)||u.removeAttribute(r))}}function yo(t,e,n,r){r||t.tagName.indexOf("-")>-1?wo(t,e,n):wi(e)?Ti(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):vi(e)?t.setAttribute(e,yi(e,n)):_i(e)?Ti(n)?t.removeAttributeNS(bi,Ei(e)):t.setAttributeNS(bi,e,n):wo(t,e,n)}function wo(t,e,n){if(Ti(n))t.removeAttribute(e);else{if(nt&&!rt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var bo={create:mo,update:mo};function _o(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Si(e),c=n._transitionClasses;s(c)&&(a=Ii(a,xi(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Eo,To={create:_o,update:_o},So="__r",Ao="__c";function Co(t){if(s(t[So])){var e=nt?"change":"input";t[e]=[].concat(t[So],t[e]||[]),delete t[So]}s(t[Ao])&&(t.change=[].concat(t[Ao],t.change||[]),delete t[Ao])}function Io(t,e,n){var r=Eo;return function i(){var o=e.apply(null,arguments);null!==o&&ko(t,i,n,r)}}var xo=en&&!(at&&Number(at[1])<=53);function Oo(t,e,n,r){if(xo){var i=Hn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Eo.addEventListener(t,e,ut?{capture:n,passive:r}:n)}function ko(t,e,n,r){(r||Eo).removeEventListener(t,e._wrapper||e,n)}function Do(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Eo=e.elm||t.elm,Co(n),ne(n,r,Oo,ko,Io,e.context),Eo=void 0}}var Ro,No={create:Do,update:Do,destroy:function(t){return Do(t,no)}};function Po(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=M({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Mo(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ni(i.tagName)&&o(i.innerHTML)){Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>".concat(r,"</svg>");var h=Ro.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Zs){}}}}function Mo(t,e){return!t.composing&&("OPTION"===t.tagName||Lo(t,e)||jo(t,e))}function Lo(t,e){var n=!0;try{n=document.activeElement!==t}catch(Zs){}return n&&t.value!==e}function jo(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return w(n)!==w(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var $o={create:Po,update:Po},Fo=A((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Vo(t){var e=Uo(t.style);return t.staticStyle?M(t.staticStyle,e):e}function Uo(t){return Array.isArray(t)?L(t):"string"===typeof t?Fo(t):t}function Bo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Vo(i.data))&&M(r,n)}(n=Vo(t.data))&&M(r,n);var o=t;while(o=o.parent)o.data&&(n=Vo(o.data))&&M(r,n);return r}var Ho,Ko=/^--/,zo=/\s*!important$/,qo=function(t,e,n){if(Ko.test(e))t.style.setProperty(e,n);else if(zo.test(n))t.style.setProperty(k(e),n.replace(zo,""),"important");else{var r=Wo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Go=["Webkit","Moz","ms"],Wo=A((function(t){if(Ho=Ho||document.createElement("div").style,t=I(t),"filter"!==t&&t in Ho)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Go.length;n++){var r=Go[n]+e;if(r in Ho)return r}}));function Qo(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=Uo(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?M({},f):f;var d=Bo(e,!0);for(a in h)o(d[a])&&qo(c,a,"");for(a in d)i=d[a],qo(c,a,null==i?"":i)}}var Xo={create:Qo,update:Qo},Yo=/\s+/;function Jo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Yo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Zo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Yo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function ts(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&M(e,es(t.name||"v")),M(e,t),e}return"string"===typeof t?es(t):void 0}}var es=A((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),ns=tt&&!rt,rs="transition",is="animation",os="transition",ss="transitionend",as="animation",cs="animationend";ns&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(os="WebkitTransition",ss="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(as="WebkitAnimation",cs="webkitAnimationEnd"));var us=tt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ls(t){us((function(){us(t)}))}function hs(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Jo(t,e))}function fs(t,e){t._transitionClasses&&E(t._transitionClasses,e),Zo(t,e)}function ds(t,e,n){var r=gs(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===rs?ss:cs,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var ps=/\b(transform|all)(,|$)/;function gs(t,e){var n,r=window.getComputedStyle(t),i=(r[os+"Delay"]||"").split(", "),o=(r[os+"Duration"]||"").split(", "),s=vs(i,o),a=(r[as+"Delay"]||"").split(", "),c=(r[as+"Duration"]||"").split(", "),u=vs(a,c),l=0,h=0;e===rs?s>0&&(n=rs,l=s,h=o.length):e===is?u>0&&(n=is,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?rs:is:null,h=n?n===rs?o.length:c.length:0);var f=n===rs&&ps.test(r[os+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function vs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return ms(e)+ms(t[n])})))}function ms(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ys(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=ts(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,g=r.appearActiveClass,v=r.beforeEnter,m=r.enter,y=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,E=r.appear,T=r.afterAppear,S=r.appearCancelled,A=r.duration,C=Cn,I=Cn.$vnode;while(I&&I.parent)C=I.context,I=I.parent;var x=!C._isMounted||!t.isRootInsert;if(!x||E||""===E){var O=x&&d?d:c,k=x&&g?g:f,D=x&&p?p:u,R=x&&_||v,N=x&&l(E)?E:m,P=x&&T||y,M=x&&S||b,L=w(h(A)?A.enter:A);0;var j=!1!==i&&!rt,$=_s(N),F=n._enterCb=B((function(){j&&(fs(n,D),fs(n,k)),F.cancelled?(j&&fs(n,O),M&&M(n)):P&&P(n),n._enterCb=null}));t.data.show||re(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,F)})),R&&R(n),j&&(hs(n,O),hs(n,k),ls((function(){fs(n,O),F.cancelled||(hs(n,D),$||(bs(L)?setTimeout(F,L):ds(n,a,F)))}))),t.data.show&&(e&&e(),N&&N(n,F)),j||$||F()}}}function ws(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=ts(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,v=r.delayLeave,m=r.duration,y=!1!==i&&!rt,b=_s(d),_=w(h(m)?m.leave:m);0;var E=n._leaveCb=B((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(fs(n,u),fs(n,l)),E.cancelled?(y&&fs(n,c),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),y&&(hs(n,c),hs(n,l),ls((function(){fs(n,c),E.cancelled||(hs(n,u),b||(bs(_)?setTimeout(E,_):ds(n,a,E)))}))),d&&d(n,E),y||b||E())}}function bs(t){return"number"===typeof t&&!isNaN(t)}function _s(t){if(o(t))return!1;var e=t.fns;return s(e)?_s(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Es(t,e){!0!==e.data.show&&ys(e)}var Ts=tt?{create:Es,activate:Es,remove:function(t,e){!0!==t.data.show?ws(t,e):e()}}:{},Ss=[bo,To,No,$o,Xo,Ts],As=Ss.concat(vo),Cs=ao({nodeOps:Ji,modules:As});rt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ps(t,"input")}));var Is={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?re(n,"postpatch",(function(){Is.componentUpdated(t,e,n)})):xs(t,e,n.context),t._vOptions=[].map.call(t.options,Ds)):("textarea"===n.tag||$i(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Rs),t.addEventListener("compositionend",Ns),t.addEventListener("change",Ns),rt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){xs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,Ds);if(i.some((function(t,e){return!V(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return ks(t,i)})):e.value!==e.oldValue&&ks(e.value,i);o&&Ps(t,"change")}}}};function xs(t,e,n){Os(t,e,n),(nt||it)&&setTimeout((function(){Os(t,e,n)}),0)}function Os(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=U(r,Ds(s))>-1,s.selected!==o&&(s.selected=o);else if(V(Ds(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function ks(t,e){return e.every((function(e){return!V(e,t)}))}function Ds(t){return"_value"in t?t._value:t.value}function Rs(t){t.target.composing=!0}function Ns(t){t.target.composing&&(t.target.composing=!1,Ps(t.target,"input"))}function Ps(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ms(t){return!t.componentInstance||t.data&&t.data.transition?t:Ms(t.componentInstance._vnode)}var Ls={bind:function(t,e,n){var r=e.value;n=Ms(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,ys(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ms(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ys(n,(function(){t.style.display=t.__vOriginalDisplay})):ws(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},js={model:Is,show:Ls},$s={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Fs(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Fs(He(e.children)):t}function Vs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[I(r)]=i[r];return e}function Us(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Bs(t){while(t=t.parent)if(t.data.transition)return!0}function Hs(t,e){return e.key===t.key&&e.tag===t.tag}var Ks=function(t){return t.tag||Ie(t)},zs=function(t){return"show"===t.name},qs={name:"transition",props:$s,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Ks),n.length)){0;var r=this.mode;0;var i=n[0];if(Bs(this.$vnode))return i;var o=Fs(i);if(!o)return i;if(this._leaving)return Us(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Vs(this),c=this._vnode,l=Fs(c);if(o.data.directives&&o.data.directives.some(zs)&&(o.data.show=!0),l&&l.data&&!Hs(o,l)&&!Ie(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=M({},a);if("out-in"===r)return this._leaving=!0,re(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Us(t,i);if("in-out"===r){if(Ie(o))return c;var f,d=function(){f()};re(a,"afterEnter",d),re(a,"enterCancelled",d),re(h,"delayLeave",(function(t){f=t}))}}return i}}},Gs=M({tag:String,moveClass:String},$s);delete Gs.mode;var Ws={props:Gs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=In(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Vs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Qs),t.forEach(Xs),t.forEach(Ys),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;hs(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ss,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ss,t),n._moveCb=null,fs(n,e))})}})))},methods:{hasMove:function(t,e){if(!ns)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Zo(n,t)})),Jo(n,e),n.style.display="none",this.$el.appendChild(n);var r=gs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Qs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Xs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ys(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Js={Transition:qs,TransitionGroup:Ws};Jr.config.mustUseProp=gi,Jr.config.isReservedTag=Pi,Jr.config.isReservedAttr=di,Jr.config.getTagNamespace=Mi,Jr.config.isUnknownElement=ji,M(Jr.options.directives,js),M(Jr.options.components,Js),Jr.prototype.__patch__=tt?Cs:j,Jr.prototype.$mount=function(t,e){return t=t&&tt?Fi(t):void 0,kn(this,t,e)},tt&&setTimeout((function(){G.devtools&&ft&&ft.emit("init",Jr)}),0)},1910:function(t,e,n){n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function v(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;v(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){v([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var m;var y=function(t){var e=this;void 0===t&&(t={}),!m&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:m.config.devtools;l&&s(this)},w={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=m.config.silent;m.config.silent=!0,t._vm=new m({data:{$$state:e},computed:o}),m.config.silent=s,t.strict&&O(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),m.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){m.set(a,c,r.state)}))}var u=r.context=S(t,s,n);r.forEachMutation((function(e,n){var r=s+n;C(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;I(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;x(t,r,e,u)})),r.forEachChild((function(r,o){T(t,e,n.concat(o),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=D(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=D(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return k(t.state,n)}}}),i}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function I(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function x(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function k(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function R(t){m&&t===m||(m=t,r(m))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=k(e.state,t.slice(0,-1));m.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,w);var N=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=U(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),P=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=U(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),M=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||U(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),L=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=U(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=function(t){return{mapState:N.bind(null,t),mapGetters:M.bind(null,t),mapMutations:P.bind(null,t),mapActions:L.bind(null,t)}};function $(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function V(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function U(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=z(),u=i(t),f="mutation "+t.type+a;H(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),K(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=z(),i=s(t),a="action "+t.type+r;H(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),K(l)}})))}}function H(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function K(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function z(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function q(t,e){return new Array(e+1).join(t)}function G(t,e){return q("0",e-t.toString().length)+t}var W={Store:y,install:R,version:"3.6.2",mapState:N,mapMutations:P,mapGetters:M,mapActions:L,createNamespacedHelpers:j,createLogger:B};e.Ay=W},9306:function(t,e,n){var r=n(4901),i=n(6823),o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not a function")}},3506:function(t,e,n){var r=n(3925),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},8551:function(t,e,n){var r=n(34),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not an object")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var r=n(4576),i=n(6706),o=n(2195),s=r.ArrayBuffer,a=r.TypeError;t.exports=s&&i(s.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==o(t))throw new a("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var r=n(4576),i=n(7476),o=n(7394),s=r.ArrayBuffer,a=s&&s.prototype,c=a&&i(a.slice);t.exports=function(t){if(0!==o(t))return!1;if(!c)return!1;try{return c(t,0,0),!1}catch(e){return!0}}},5169:function(t,e,n){var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5636:function(t,e,n){var r=n(4576),i=n(9504),o=n(6706),s=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.min,g=f.prototype,v=d.prototype,m=i(g.slice),y=o(g,"resizable","get"),w=o(g,"maxByteLength","get"),b=i(v.getInt8),_=i(v.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),o=void 0===e?i:s(e),g=!y||!y(t);if(a(t),l&&(t=h(t,{transfer:[t]}),i===o&&(n||g)))return t;if(i>=o&&(!n||g))r=m(t,0,o);else{var v=n&&!g&&w?{maxByteLength:w(t)}:void 0;r=new f(o,v);for(var E=new d(t),T=new d(r),S=p(o,i),A=0;A<S;A++)_(T,A,b(E,A))}return l||u(t),r}},4644:function(t,e,n){var r,i,o,s=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),v=n(2106),m=n(1625),y=n(2787),w=n(2967),b=n(8227),_=n(3392),E=n(1181),T=E.enforce,S=E.get,A=c.Int8Array,C=A&&A.prototype,I=c.Uint8ClampedArray,x=I&&I.prototype,O=A&&y(A),k=C&&y(C),D=Object.prototype,R=c.TypeError,N=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=s&&!!w&&"Opera"!==f(c.opera),j=!1,$={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h($,e)||h(F,e)},U=function(t){var e=y(t);if(l(e)){var n=S(e);return n&&h(n,M)?n[M]:U(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h($,e)||h(F,e)},H=function(t){if(B(t))return t;throw new R("Target is not a typed array")},K=function(t){if(u(t)&&(!w||m(O,t)))return t;throw new R(d(t)+" is not a typed array constructor")},z=function(t,e,n,r){if(a){if(n)for(var i in $){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:L&&C[t]||e,r)}},q=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in $)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(O[t]&&!n)return;try{return g(O,t,n?e:L&&O[t]||e)}catch(o){}}for(r in $)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in $)i=c[r],o=i&&i.prototype,o?T(o)[M]=i:L=!1;for(r in F)i=c[r],o=i&&i.prototype,o&&(T(o)[M]=i);if((!L||!u(O)||O===Function.prototype)&&(O=function(){throw new R("Incorrect invocation")},L))for(r in $)c[r]&&w(c[r],O);if((!L||!k||k===D)&&(k=O.prototype,L))for(r in $)c[r]&&w(c[r].prototype,k);if(L&&y(x)!==k&&w(x,k),a&&!h(k,N))for(r in j=!0,v(k,N,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),$)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:j&&P,aTypedArray:H,aTypedArrayConstructor:K,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:U,isView:V,isTypedArray:B,TypedArray:O,TypedArrayPrototype:k}},5370:function(t,e,n){var r=n(6198);t.exports=function(t,e,n){var i=0,o=arguments.length>2?n:r(e),s=new t(o);while(o>i)s[i]=e[i++];return s}},9617:function(t,e,n){var r=n(5397),i=n(5610),o=n(6198),s=function(t){return function(e,n,s){var a=r(e),c=o(a);if(0===c)return!t&&-1;var u,l=i(s,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4527:function(t,e,n){var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7680:function(t,e,n){var r=n(9504);t.exports=r([].slice)},7628:function(t,e,n){var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),o=0;o<n;o++)i[o]=t[n-o-1];return i}},9928:function(t,e,n){var r=n(6198),i=n(1291),o=RangeError;t.exports=function(t,e,n,s){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new o("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?s:t[h];return l}},6319:function(t,e,n){var r=n(8551),i=n(9539);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},2195:function(t,e,n){var r=n(9504),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},6955:function(t,e,n){var r=n(2140),i=n(4901),o=n(2195),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"===(r=o(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),i=n(5031),o=n(7347),s=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){var r=n(3724),i=n(4913),o=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){var r=n(3724),i=n(4913),o=n(6980);t.exports=function(t,e,n){r?i.f(t,e,o(0,n)):t[e]=n}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),i=n(4913),o=n(283),s=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},9433:function(t,e,n){var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){var r,i,o,s,a=n(4576),c=n(9429),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,o=new h(2),s=function(t){i.port1.postMessage(null,[t])},2===o.byteLength&&(s(o),0===o.byteLength&&(d=s)))}catch(p){}t.exports=d},4055:function(t,e,n){var r=n(4576),i=n(34),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9544:function(t,e,n){var r=n(2839);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},6193:function(t,e,n){var r=n(4215);t.exports="NODE"===r},2839:function(t,e,n){var r=n(4576),i=r.navigator,o=i&&i.userAgent;t.exports=o?String(o):""},9519:function(t,e,n){var r,i,o=n(4576),s=n(2839),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},4215:function(t,e,n){var r=n(4576),i=n(2839),o=n(2195),s=function(t){return i.slice(0,t.length)===t};t.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===o(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},8574:function(t,e,n){var r=n(9504),i=Error,o=r("".replace),s=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},6518:function(t,e,n){var r=n(4576),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,v=t.global,m=t.stat;if(l=v?r:m?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(v?h:g+(m?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},8745:function(t,e,n){var r=n(616),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},6080:function(t,e,n){var r=n(7476),i=n(9306),o=n(616),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(o){}}},7476:function(t,e,n){var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},9504:function(t,e,n){var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},9429:function(t,e,n){var r=n(4576),i=n(6193);t.exports=function(t){if(i){try{return r.process.getBuiltinModule(t)}catch(e){}try{return Function('return require("'+t+'")')()}catch(e){}}}},7751:function(t,e,n){var r=n(4576),i=n(4901),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},851:function(t,e,n){var r=n(6955),i=n(5966),o=n(4117),s=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!o(t))return i(t,c)||i(t,"@@iterator")||s[r(t)]}},81:function(t,e,n){var r=n(9565),i=n(9306),o=n(8551),s=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return o(r(n,t));throw new c(s(t)+" is not iterable")}},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(t){return o(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=s(e);if(n<0)throw new u(c);return new f(t,n)}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},421:function(t){t.exports={}},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},5917:function(t,e,n){var r=n(3724),i=n(9039),o=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var r=n(9504),i=n(9039),o=n(2195),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?a(t,""):s(t)}:s},3167:function(t,e,n){var r=n(4901),i=n(34),o=n(2967);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},3706:function(t,e,n){var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},1181:function(t,e,n){var r,i,o,s=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,v=a.WeakMap,m=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var w=h.state||(h.state=new v);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},o=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:m,getterFor:y}},4209:function(t,e,n){var r=n(8227),i=n(6269),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},4376:function(t,e,n){var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,o,s=n?t:t.iterator,a=t.next;while(!(i=r(a,s)).done)if(o=e(i.value),void 0!==o)return o}},2652:function(t,e,n){var r=n(6080),i=n(9565),o=n(8551),s=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var v,m,y,w,b,_,E,T=n&&n.that,S=!(!n||!n.AS_ENTRIES),A=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),x=r(e,T),O=function(t){return v&&f(v,"normal",t),new p(!0,t)},k=function(t){return S?(o(t),I?x(t[0],t[1],O):x(t[0],t[1])):I?x(t,O):x(t)};if(A)v=t.iterator;else if(C)v=t;else{if(m=h(t),!m)throw new d(s(t)+" is not iterable");if(a(m)){for(y=0,w=c(t);w>y;y++)if(b=k(t[y]),b&&u(g,b))return b;return new p(!1)}v=l(t,m)}_=A?t.next:v.next;while(!(E=i(_,v)).done){try{b=k(E.value)}catch(D){f(v,"throw",D)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},9539:function(t,e,n){var r=n(9565),i=n(8551),o=n(5966);t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},9462:function(t,e,n){var r=n(9565),i=n(2360),o=n(6699),s=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",v=c.set,m=function(t){var e=c.getterFor(t?g:p);return s(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,"normal")}catch(s){return f(i,"throw",s)}return i&&f(i,"normal"),h(void 0,!0)}})},y=m(!0),w=m(!1);o(w,d,"Iterator Helper"),t.exports=function(t,e){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=e?g:p,r.nextHandler=t,r.counter=0,r.done=!1,v(this,r)};return n.prototype=e?y:w,n}},713:function(t,e,n){var r=n(9565),i=n(9306),o=n(8551),s=n(1767),a=n(9462),c=n(6319),u=a((function(){var t=this.iterator,e=o(r(this.next,t)),n=this.done=!!e.done;if(!n)return c(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return o(this),i(t),new u(s(this),{mapper:t})}},7657:function(t,e,n){var r,i,o,s=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):g=!0);var v=!c(r)||s((function(){var t={};return r[p].call(t)!==t}));v?r={}:d&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(t){t.exports={}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),v=r("".replace),m=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+v(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=m(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return o(this)&&f(this).source||u(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2360:function(t,e,n){var r,i=n(8551),o=n(6801),s=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),v=function(){},m=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var t=s.length;while(t--)delete b[d][s[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(v[d]=i(t),n=new v,v[d]=null,n[g]=t):n=b(),void 0===e?n:o.f(n,e)}},6801:function(t,e,n){var r=n(3724),i=n(8686),o=n(4913),s=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},4913:function(t,e,n){var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},1072:function(t,e,n){var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var r=n(6706),i=n(34),o=n(7750),s=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){var r=n(9565),i=n(4901),o=n(34),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9472:function(t,e,n){var r=n(4576),i=n(8745),o=n(4901),s=n(4215),a=n(2839),c=n(7680),u=n(2812),l=r.Function,h=/MSIE .\./.test(a)||"BUN"===s&&function(){var t=r.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}();t.exports=function(t,e){var n=e?2:1;return h?function(r,s){var a=u(arguments.length,1)>n,h=o(r)?r:l(r),f=a?c(arguments,n):[],d=a?function(){i(h,this,f)}:h;return e?t(d,s):t(d)}:t}},9286:function(t,e,n){var r=n(4402),i=n(8469),o=r.Set,s=r.add;t.exports=function(t){var e=new o;return i(t,(function(t){s(e,t)})),e}},3440:function(t,e,n){var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=o(e);return s(e)<=n.size?c(e,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=s(t),i=new u;return o(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(o(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l,"normal",!1)}))}},3838:function(t,e,n){var r=n(7080),i=n(5170),o=n(8469),s=n(3789);t.exports=function(t){var e=r(this),n=s(t);return!(i(e)>n.size)&&!1!==o(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(o(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u,"normal",!1)}))}},8469:function(t,e,n){var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](i(0));try{return(new e)[t](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=s(t).getIterator(),i=o(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=s(t).getIterator(),c=o(e);return a(n,(function(t){i(c,t)})),c}},6119:function(t,e,n){var r=n(5745),i=n(3392),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},7629:function(t,e,n){var r=n(6395),i=n(4576),o=n(9433),s="__core-js_shared__",a=t.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},1548:function(t,e,n){var r=n(4576),i=n(9039),o=n(9519),s=n(4215),a=r.structuredClone;t.exports=!!a&&!i((function(){if("DENO"===s&&o>92||"NODE"===s&&o>94||"BROWSER"===s&&o>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){var r=n(9519),i=n(9039),o=n(4576),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9225:function(t,e,n){var r,i,o,s,a=n(4576),c=n(8745),u=n(6080),l=n(4901),h=n(9297),f=n(9039),d=n(397),p=n(7680),g=n(4055),v=n(2812),m=n(9544),y=n(6193),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,S=a.MessageChannel,A=a.String,C=0,I={},x="onreadystatechange";f((function(){r=a.location}));var O=function(t){if(h(I,t)){var e=I[t];delete I[t],e()}},k=function(t){return function(){O(t)}},D=function(t){O(t.data)},R=function(t){a.postMessage(A(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){v(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return I[++C]=function(){c(e,void 0,n)},i(C),C},b=function(t){delete I[t]},y?i=function(t){_.nextTick(k(t))}:E&&E.now?i=function(t){E.now(k(t))}:S&&!m?(o=new S,s=o.port2,o.port1.onmessage=D,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(R)?(i=R,a.addEventListener("message",D,!1)):i=x in g("script")?function(t){d.appendChild(g("script"))[x]=function(){d.removeChild(this),O(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:w,clear:b}},5610:function(t,e,n){var r=n(1291),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){var r=n(1291),i=n(8014),o=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new o("Wrong length or index");return n}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){var r=n(4576),i=n(4901),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},8227:function(t,e,n){var r=n(4576),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},6573:function(t,e,n){var r=n(3724),i=n(2106),o=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},7936:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},8111:function(t,e,n){var r=n(6518),i=n(4576),o=n(679),s=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),v=n(6395),m="constructor",y="Iterator",w=d("toStringTag"),b=TypeError,_=i[y],E=v||!a(_)||_.prototype!==p||!h((function(){_({})})),T=function(){if(o(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(s(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||S(w,y),!E&&f(p,m)&&p[m]!==Object||S(m,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},1148:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(t){s(this),o(t);var e=a(this),n=0;return!i(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(t,e,n){var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=c((function(){var t,e,n,r=this.iterator,o=this.predicate,a=this.next;while(1){if(t=s(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,o,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(t){return s(this),o(t),new h(a(this),{predicate:t})}})},116:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(t){s(this),o(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(t){s(this),o(t);var e=a(this),n=0;i(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},1701:function(t,e,n){var r=n(6518),i=n(713),o=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:o},{map:i})},8237:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(t){s(this),o(t);var e=a(this),n=arguments.length<2,r=n?void 0:arguments[1],u=0;if(i(e,(function(e){n?(n=!1,r=e):r=t(r,e,u),u++}),{IS_RECORD:!0}),n)throw new c("Reduce of empty iterator with no initial value");return r}})},3579:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(t){s(this),o(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(t,e,n){var r=n(6518),i=n(8551),o=n(2652),s=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return o(s(i(this)),a,{that:t,IS_RECORD:!0}),t}})},7642:function(t,e,n){var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(t,e,n){var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(t,e,n){var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(t,e,n){var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(t,e,n){var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(t,e,n){var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(t,e,n){var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},7467:function(t,e,n){var r=n(7628),i=n(4644),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",(function(){return r(o(this),a(this))}))},4732:function(t,e,n){var r=n(4644),i=n(9504),o=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&o(t);var e=a(this),n=s(c(e),e);return l(n,t)}))},9577:function(t,e,n){var r=n(9928),i=n(4644),o=n(1108),s=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=s(t),l=o(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},8992:function(t,e,n){n(8111)},3215:function(t,e,n){n(1148)},4520:function(t,e,n){n(2489)},2577:function(t,e,n){n(116)},3949:function(t,e,n){n(7588)},1454:function(t,e,n){n(1701)},8872:function(t,e,n){n(8237)},7550:function(t,e,n){n(3579)},1795:function(t,e,n){n(1806)},6368:function(t,e,n){var r=n(6518),i=n(4576),o=n(9225).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},4979:function(t,e,n){var r=n(6518),i=n(4576),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(8574),p=n(3724),g=n(6395),v="DOMException",m=o("Error"),y=o(v),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new m(e);return i.name=v,a(r,"stack",s(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=y.prototype,_="stack"in new m(v),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,v),S=!!T&&!(T.writable&&T.configurable),A=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||A},{DOMException:A?w:y});var C=o(v),I=C.prototype;if(I.constructor!==C)for(var x in g||a(I,"constructor",s(1,C)),f)if(c(f,x)){var O=f[x],k=O.s;c(C,k)||a(C,k,s(6,O.c))}},9848:function(t,e,n){n(6368),n(9309)},9309:function(t,e,n){var r=n(6518),i=n(4576),o=n(9225).set,s=n(9472),a=i.setImmediate?s(o,!1):o;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},9018:function(t,e,n){n.d(e,{KO:function(){return Z},MF:function(){return X},Sx:function(){return J},Wp:function(){return Y},j6:function(){return q},om:function(){return z}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(2350),i=n(125),o=n(1238),s=n(3166);
/**
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
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const u="@firebase/app",l="0.10.16",h=new i.Vy("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",w="@firebase/database",b="@firebase/data-connect",_="@firebase/database-compat",E="@firebase/functions",T="@firebase/functions-compat",S="@firebase/installations",A="@firebase/installations-compat",C="@firebase/messaging",I="@firebase/messaging-compat",x="@firebase/performance",O="@firebase/performance-compat",k="@firebase/remote-config",D="@firebase/remote-config-compat",R="@firebase/storage",N="@firebase/storage-compat",P="@firebase/firestore",M="@firebase/vertexai",L="@firebase/firestore-compat",j="firebase",$="11.0.2",F="[DEFAULT]",V={[u]:"fire-core",[f]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[g]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[w]:"fire-rtdb",[b]:"fire-data-connect",[_]:"fire-rtdb-compat",[E]:"fire-fn",[T]:"fire-fn-compat",[S]:"fire-iid",[A]:"fire-iid-compat",[C]:"fire-fcm",[I]:"fire-fcm-compat",[x]:"fire-perf",[O]:"fire-perf-compat",[k]:"fire-rc",[D]:"fire-rc-compat",[R]:"fire-gcs",[N]:"fire-gcs-compat",[P]:"fire-fst",[L]:"fire-fst-compat",[M]:"fire-vertex","fire-js":"fire-js",[j]:"fire-js-all"},U=new Map,B=new Map,H=new Map;function K(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function z(t){const e=t.name;if(H.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;H.set(e,t);for(const n of U.values())K(n,t);for(const n of B.values())K(n,t);return!0}function q(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},W=new o.FA("app","Firebase",G);
/**
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
 */
class Q{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
/**
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
 */
const X=$;function Y(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:F,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw W.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw W.create("no-options");const a=U.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw W.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of H.values())c.addComponent(r);const u=new Q(n,i,c);return U.set(s,u),u}function J(t=F){const e=U.get(t);if(!e&&t===F&&(0,o.T9)())return Y();if(!e)throw W.create("no-app",{appName:t});return e}function Z(t,e,n){var i;let o=null!==(i=V[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}z(new r.uA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
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
 */
const tt="firebase-heartbeat-database",et=1,nt="firebase-heartbeat-store";let rt=null;function it(){return rt||(rt=(0,s.P2)(tt,et,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nt)}catch(n){console.warn(n)}}}}).catch((t=>{throw W.create("idb-open",{originalErrorMessage:t.message})}))),rt}async function ot(t){try{const e=await it(),n=e.transaction(nt),r=await n.objectStore(nt).get(at(t));return await n.done,r}catch(e){if(e instanceof o.g)h.warn(e.message);else{const t=W.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function st(t,e){try{const n=await it(),r=n.transaction(nt,"readwrite"),i=r.objectStore(nt);await i.put(e,at(t)),await r.done}catch(n){if(n instanceof o.g)h.warn(n.message);else{const t=W.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function at(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const ct=1024,ut=2592e6;class lt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=ht();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ut})),this._storage.overwrite(this._heartbeatsCache)}catch(n){h.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ht(),{heartbeatsToSend:n,unsentEntries:r}=ft(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return h.warn(e),""}}}function ht(){const t=new Date;return t.toISOString().substring(0,10)}function ft(t,e=ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),pt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ot(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function pt(t){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function gt(t){z(new r.uA("platform-logger",(t=>new a(t)),"PRIVATE")),z(new r.uA("heartbeat",(t=>new lt(t)),"PRIVATE")),Z(u,l,t),Z(u,l,"esm2017"),Z("fire-js","")}gt("")},2350:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(1238);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},4712:function(t,e,n){n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979);var r=n(9018),i=n(2350),o=n(1238),s=n(3166);const a="@firebase/installations",c="0.6.11",u=1e4,l=`w:${c}`,h="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",d=36e5,p="installations",g="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},m=new o.FA(p,g,v);function y(t){return t instanceof o.g&&t.code.includes("request-failed")}
/**
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
 */function w({projectId:t}){return`${f}/projects/${t}/installations`}function b(t){return{token:t.token,requestStatus:2,expiresIn:A(t.expiresIn),creationTime:Date.now()}}async function _(t,e){const n=await e.json(),r=n.error;return m.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function T(t,{refreshToken:e}){const n=E(t);return n.append("Authorization",C(e)),n}async function S(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A(t){return Number(t.replace("s","000"))}function C(t){return`${h} ${t}`}
/**
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
 */async function I({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=w(t),i=E(t),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={fid:n,authVersion:h,appId:t.appId,sdkVersion:l},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:b(t.authToken)};return e}throw await _("Create Installation",c)}
/**
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
 */function x(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
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
 */function O(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const k=/^[cdef][\w-]{21}$/,D="";function R(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=N(t);return k.test(n)?n:D}catch(t){return D}}function N(t){const e=O(t);return e.substr(0,22)}
/**
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
 */function P(t){return`${t.appName}!${t.appId}`}
/**
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
 */const M=new Map;function L(t,e){const n=P(t);j(n,e),$(n,e)}function j(t,e){const n=M.get(t);if(n)for(const r of n)r(e)}function $(t,e){const n=V();n&&n.postMessage({key:t,fid:e}),U()}let F=null;function V(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=t=>{j(t.data.key,t.data.fid)}),F}function U(){0===M.size&&F&&(F.close(),F=null)}
/**
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
 */const B="firebase-installations-database",H=1,K="firebase-installations-store";let z=null;function q(){return z||(z=(0,s.P2)(B,H,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(K)}}})),z}async function G(t,e){const n=P(t),r=await q(),i=r.transaction(K,"readwrite"),o=i.objectStore(K),s=await o.get(n);return await o.put(e,n),await i.done,s&&s.fid===e.fid||L(t,e.fid),e}async function W(t){const e=P(t),n=await q(),r=n.transaction(K,"readwrite");await r.objectStore(K).delete(e),await r.done}async function Q(t,e){const n=P(t),r=await q(),i=r.transaction(K,"readwrite"),o=i.objectStore(K),s=await o.get(n),a=e(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||L(t,a.fid),a}
/**
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
 */async function X(t){let e;const n=await Q(t.appConfig,(n=>{const r=Y(n),i=J(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===D?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Y(t){const e=t||{fid:R(),registrationStatus:0};return nt(e)}function J(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(m.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Z(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:tt(t)}:{installationEntry:e}}async function Z(t,e){try{const n=await I(t,e);return G(t.appConfig,n)}catch(n){throw y(n)&&409===n.customData.serverCode?await W(t.appConfig):await G(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tt(t){let e=await et(t.appConfig);while(1===e.registrationStatus)await x(100),e=await et(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await X(t);return n||e}return e}function et(t){return Q(t,(t=>{if(!t)throw m.create("installation-not-found");return nt(t)}))}function nt(t){return rt(t)?{fid:t.fid,registrationStatus:0}:t}function rt(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
/**
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
 */async function it({appConfig:t,heartbeatServiceProvider:e},n){const r=ot(t,n),i=T(t,n),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={installation:{sdkVersion:l,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e=b(t);return e}throw await _("Generate Auth Token",c)}function ot(t,{fid:e}){return`${w(t)}/${e}/authTokens:generate`}
/**
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
 */async function st(t,e=!1){let n;const r=await Q(t.appConfig,(r=>{if(!lt(r))throw m.create("not-registered");const i=r.authToken;if(!e&&ht(i))return r;if(1===i.requestStatus)return n=at(t,e),r;{if(!navigator.onLine)throw m.create("app-offline");const e=dt(r);return n=ut(t,e),e}})),i=n?await n:r.authToken;return i}async function at(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await x(100),n=await ct(t.appConfig);const r=n.authToken;return 0===r.requestStatus?st(t,e):r}function ct(t){return Q(t,(t=>{if(!lt(t))throw m.create("not-registered");const e=t.authToken;return pt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function ut(t,e){try{const n=await it(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await G(t.appConfig,r),n}catch(n){if(!y(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await G(t.appConfig,n)}else await W(t.appConfig);throw n}}function lt(t){return void 0!==t&&2===t.registrationStatus}function ht(t){return 2===t.requestStatus&&!ft(t)}function ft(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+d}function dt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pt(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
/**
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
 */async function gt(t){const e=t,{installationEntry:n,registrationPromise:r}=await X(e);return r?r.catch(console.error):st(e).catch(console.error),n.fid}
/**
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
 */async function vt(t,e=!1){const n=t;await mt(n);const r=await st(n,e);return r.token}async function mt(t){const{registrationPromise:e}=await X(t);e&&await e}
/**
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
 */
/**
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
 */
function yt(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wt(t){return m.create("missing-app-config-values",{valueName:t})}
/**
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
 */const bt="installations",_t="installations-internal",Et=t=>{const e=t.getProvider("app").getImmediate(),n=yt(e),i=(0,r.j6)(e,"heartbeat"),o={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Tt=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.j6)(e,bt).getImmediate(),i={getId:()=>gt(n),getToken:t=>vt(n,t)};return i};function St(){(0,r.om)(new i.uA(bt,Et,"PUBLIC")),(0,r.om)(new i.uA(_t,Tt,"PRIVATE"))}St(),(0,r.KO)(a,c),(0,r.KO)(a,c,"esm2017")},125:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8992),n(4520),n(1454);
/**
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
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},706:function(t,e,n){n(4114),n(8992),n(2577),n(3949),n(1454);var r=n(9018),i=n(125),o=n(1238),s=n(2350);n(4712);
/**
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
 */
const a="analytics",c="firebase_id",u="origin",l=6e4,h="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",f="https://www.googletagmanager.com/gtag/js",d=new i.Vy("@firebase/analytics"),p={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},g=new o.FA("analytics","Analytics",p);
/**
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
 */
function v(t){if(!t.startsWith(f)){const e=g.create("invalid-gtag-resource",{gtagURL:t});return d.warn(e.message),""}return t}function m(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function y(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function w(t,e){const n=y("firebase-js-sdk-policy",{createScriptURL:v}),r=document.createElement("script"),i=`${f}?l=${t}&id=${e}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function b(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const t=await m(n),r=t.find((t=>t.measurementId===i));r&&await e[r.appId]}}catch(a){d.error(a)}t("config",i,o)}async function E(t,e,n,r,i){try{let o=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await m(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){d.error(o)}}function T(t,e,n,r){async function i(i,...o){try{if("event"===i){const[r,i]=o;await E(t,e,n,r,i)}else if("config"===i){const[i,s]=o;await _(t,e,n,r,i,s)}else if("consent"===i){const[e,n]=o;t("consent",e,n)}else if("get"===i){const[e,n,r]=o;t("get",e,n,r)}else if("set"===i){const[e]=o;t("set",e)}else t(i,...o)}catch(s){d.error(s)}}return i}function S(t,e,n,r,i){let o=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=T(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function A(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(f)&&n.src.includes(t))return n;return null}
/**
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
 */const C=30,I=1e3;class x{constructor(t={},e=I){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const O=new x;function k(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function D(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:k(r)},o=h.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw g.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}async function R(t,e=O,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw g.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw g.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new L;return setTimeout((async()=>{a.abort()}),void 0!==n?n:l),N({appId:r,apiKey:i,measurementId:o},s,a,e)}async function N(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=O){var s;const{appId:a,measurementId:c}=t;try{await P(r,e)}catch(u){if(c)return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const e=await D(t);return i.deleteThrottleMetadata(a),e}catch(u){const e=u;if(!M(e)){if(i.deleteThrottleMetadata(a),c)return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw u}const l=503===Number(null===(s=null===e||void 0===e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?(0,o.p9)(n,i.intervalMillis,C):(0,o.p9)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,h),d.debug(`Calling attemptFetch again in ${l} millis`),N(t,h,r,i)}}function P(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(o),r(g.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function M(t){if(!(t instanceof o.g)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class L{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
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
 */let j,$;async function F(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function V(t){$=t}function U(t){j=t}
/**
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
 */async function B(){if(!(0,o.zW)())return d.warn(g.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eX)()}catch(t){return d.warn(g.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function H(t,e,n,r,i,o,s){var a;const l=R(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&d.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>d.error(t))),e.push(l);const h=B().then((t=>t?r.getId():void 0)),[f,p]=await Promise.all([l,h]);A(o)||w(o,f.measurementId),$&&(i("consent","default",$),V(void 0)),i("js",new Date);const g=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return g[u]="firebase",g.update=!0,null!=p&&(g[c]=p),i("config",f.measurementId,g),j&&(i("set",j),U(void 0)),f.measurementId}
/**
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
 */class K{constructor(t){this.app=t}_delete(){return delete z[this.app.options.appId],Promise.resolve()}}let z={},q=[];const G={};let W,Q,X="dataLayer",Y="gtag",J=!1;function Z(){const t=[];if((0,o.sr)()&&t.push("This is a browser extension environment."),(0,o.dM)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=g.create("invalid-analytics-context",{errorInfo:e});d.warn(n.message)}}function tt(t,e,n){Z();const r=t.options.appId;if(!r)throw g.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw g.create("no-api-key");d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=z[r])throw g.create("already-exists",{id:r});if(!J){b(X);const{wrappedGtag:t,gtagCore:e}=S(z,q,G,X,Y);Q=t,W=e,J=!0}z[r]=H(t,q,G,e,W,X,n);const i=new K(t);return i}function et(t,e,n,r){t=(0,o.Ku)(t),F(Q,z[t.app.options.appId],e,n,r).catch((t=>d.error(t)))}const nt="@firebase/analytics",rt="0.10.10";function it(){function t(t){try{const e=t.getProvider(a).getImmediate();return{logEvent:(t,n,r)=>et(e,t,n,r)}}catch(e){throw g.create("interop-component-reg-failed",{reason:e})}}(0,r.om)(new s.uA(a,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return tt(n,r,e)}),"PUBLIC")),(0,r.om)(new s.uA("analytics-internal",t,"PRIVATE")),(0,r.KO)(nt,rt),(0,r.KO)(nt,rt,"esm2017")}it()},4218:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(9018),i="firebase",o="11.0.2";
/**
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
 */
/**
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
 */
(0,r.KO)(i,o,"app")},139:function(t,e,n){n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(1795),n(4979);var r,i=n(9018),o=n(2350),s=n(125),a=n(1238),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function s(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function a(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function l(t){return-128<=t&&128>t?s(t,(function(t){return new a([0|t],0>t?-1:0)})):new a([0|t],0>t?-1:0)}function h(t){if(isNaN(t)||!isFinite(t))return d;if(0>t)return y(h(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new a(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return y(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(e,8)),r=d,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=h(Math.pow(e,o)),r=r.j(o).add(h(s))):(r=r.j(n),r=r.add(h(s)))}return r}var d=l(0),p=l(1),g=l(16777216);function v(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function m(t){return-1==t.h}function y(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new a(n,~t.h).add(p)}function w(t,e){return t.add(y(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function _(t,e){this.g=t,this.h=e}function E(t,e){if(v(e))throw Error("division by zero");if(v(t))return new _(d,d);if(m(t))return e=E(y(t),e),new _(y(e.g),y(e.h));if(m(e))return e=E(t,y(e)),new _(y(e.g),e.h);if(30<t.g.length){if(m(t)||m(e))throw Error("slowDivide_ only works with positive integers.");for(var n=p,r=e;0>=r.l(t);)n=T(n),r=T(r);var i=S(n,1),o=S(r,1);for(r=S(r,2),n=S(n,2);!v(r);){var s=o.add(r);0>=s.l(t)&&(i=i.add(n),o=s),r=S(r,1),n=S(n,1)}return e=w(t,i.j(e)),new _(i,e)}for(i=d;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=h(n),s=o.j(e);m(s)||0<s.l(t);)n-=r,o=h(n),s=o.j(e);v(o)&&(o=p),i=i.add(o),t=w(t,s)}return new _(i,t)}function T(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new a(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new a(i,t.h)}t=a.prototype,t.m=function(){if(m(this))return-y(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(m(this))return"-"+y(this).toString(t);for(var e=h(Math.pow(t,6)),n=this,r="";;){var i=E(n,e).g;n=w(n,i.j(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,v(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),m(t)?-1:v(t)?0:1},t.abs=function(){return m(this)?y(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.i(i))+(65535&t.i(i)),s=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new a(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return d;if(m(this))return m(t)?y(this).j(y(t)):y(y(this).j(t));if(m(t))return y(this.j(y(t)));if(0>this.l(g)&&0>t.l(g))return h(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.i(r)>>>16,s=65535&this.i(r),c=t.i(i)>>>16,u=65535&t.i(i);n[2*r+2*i]+=s*u,b(n,2*r+2*i),n[2*r+2*i+1]+=o*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=s*c,b(n,2*r+2*i+1),n[2*r+2*i+2]+=o*c,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new a(n,0)},t.A=function(t){return E(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new a(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new a(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new a(n,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.Md5=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,r=u.Integer=a}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,v,m,y="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof y&&y];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var o=0;o<t.length-1;o++){var s=t[o];if(!(s in i))break t;i=i[s]}t=t[t.length-1],o=i[t],n=n(o),n!=o&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function o(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return o(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function _(t,e,n){return t.call.apply(t.bind,arguments)}function E(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:E,S.apply(null,arguments)}function A(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function I(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class O{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function k(t){return/^[\s\xa0]*$/.test(t)}function D(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function R(t){return R[" "](t),t}R[" "]=function(){};var N=-1!=D().indexOf("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&-1==D().indexOf("Edge"))&&!(-1!=D().indexOf("Trident")||-1!=D().indexOf("MSIE"))&&-1==D().indexOf("Edge");function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function V(t){a.setTimeout((()=>{throw t}),0)}function U(){var t=G;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class B{constructor(){this.h=this.g=null}add(t,e){const n=H.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var H=new O((()=>new K),(t=>t.reset()));class K{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let z,q=!1,G=new B,W=()=>{const t=a.Promise.resolve(void 0);z=()=>{t.then(Q)}};var Q=()=>{for(var t;t=U();){try{t.h.call(t.g)}catch(n){V(n)}var e=H;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}q=!1};function X(){this.s=this.s,this.C=this.C}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{R(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}C(Z,Y);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.da=this.fa=!1}function it(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=Array.prototype.indexOf.call(i,e,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.da&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=at(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new rt(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,r,i);return null}return n=bt(n),t&&t[et]?t.K(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=u(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ct]=a=new ot(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=mt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)dt(t,e[o],n,r,i);return null}return n=bt(n),t&&t[et]?t.L(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);else r=u(r)?!!r.capture:!!r,n=bt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=at(o,n,r,i),-1<n&&(it(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):it(t)}}}function vt(t){return t in ut?ut[t]:ut[t]="on"+t}function mt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ct],t instanceof ot?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){X.call(this),this.i=new ot(this),this.M=this,this.F=null}function Et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(r,t),$(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Tt(s,r,!0,e)&&i}if(s=e.g=t,i=Tt(s,r,!0,e)&&i,i=Tt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Tt(s,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.da&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.fa&&st(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function St(t,e,n){if("function"===typeof t)n&&(t=S(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function At(t){t.g=St((()=>{t.g=null,t.i&&(t.i=!1,At(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}C(_t,X),_t.prototype[et]=!0,_t.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.F=null},_t.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class Ct extends X{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:At(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(t){X.call(this),this.h=t,this.g={}}C(It,X);var xt=[];function Ot(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}It.prototype.N=function(){It.aa.N.call(this),Ot(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=a.JSON.stringify,Dt=a.JSON.parse,Rt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Pt(t){return t.h||(t.h=t.i())}function Mt(){}Nt.prototype.h=null;var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jt(){Y.call(this,"d")}function $t(){Y.call(this,"c")}C(jt,Y),C($t,Y);var Ft={},Vt=null;function Ut(){return Vt=Vt||new _t}function Bt(t){Y.call(this,Ft.La,t)}function Ht(t){const e=Ut();Et(e,new Bt(e))}function Kt(t,e){Y.call(this,Ft.STAT_EVENT,t),this.stat=e}function zt(t){const e=Ut();Et(e,new Kt(e,t))}function qt(t,e){Y.call(this,Ft.Ma,t),this.size=e}function Gt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Wt(){this.g=!0}function Qt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Xt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return kt(n)}catch(a){return e}}Ft.La="serverreachability",C(Bt,Y),Ft.STAT_EVENT="statevent",C(Kt,Y),Ft.Ma="timingevent",C(qt,Y),Wt.prototype.xa=function(){this.g=!1},Wt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function re(){}function ie(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}C(re,Nt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var se={},ae={};function ce(t,e,n){t.L=1,t.v=je(Re(e)),t.m=n,t.P=!0,ue(t,null)}function ue(t,e){t.F=Date.now(),fe(t),t.A=Re(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Xe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new oe,t.g=Hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new Ct(S(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(xt[0]=i.toString()),i=xt);for(var o=0;o<i.length;o++){var s=lt(n,i[o],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}e=t.H?L(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ht(),Qt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ae:(n=Number(e.substring(n,r)),isNaN(n)?se:(r+=1,r+n>e.length?ae:(e=e.slice(r,r+n),t.C=r+n,e)))}function fe(t){t.S=Date.now()+t.I,de(t,t.I)}function de(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Gt(S(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.j.G||t.J||$n(t.j,t)}function ve(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Ot(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function me(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Ee(n.h,t)))if(!t.K&&Ee(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;jn(n),Cn(n)}Pn(n),zt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Gt(S(n.Za,n),6e3));if(1>=_e(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Vn(n,11)}else if((t.K||n.g==t)&&jn(n),!k(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Te(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Le(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var s=t;if(r.qa=Bn(r,r.J?r.ia:null,r.W),s.K){Se(r.h,s);var a=s,c=r.L;c&&(a.I=c),a.B&&(pe(a),fe(a)),r.g=s}else Nn(r);0<n.i.length&&xn(n)}else"stop"!=u[0]&&"close"!=u[0]||Vn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Vn(n,7):An(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ht(4)}catch(u){}}ie.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==bn(t)?e.j():this.Y(t)},ie.prototype.Y=function(t){try{if(t==this.g)t:{const f=bn(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||_n(this.g)))){this.J||4!=f||7==e||Ht(8==e||0>=d?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var r=_n(this.g);t="";var i=r.length,o=4==bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ve(this),ge(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,Xt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,zt(12),ve(this),ge(this);break t}Yt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,me(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<s.length;){if(t=he(this,s),t==ae){4==f&&(this.s=4,zt(14),n=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}if(t==se){this.s=4,zt(15),Yt(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Yt(this.i,this.l,t,null),me(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=s.length||this.h.h||(this.s=1,zt(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),Mn(h),h.M=!0,zt(11))}}else Yt(this.i,this.l,s,"[Invalid Chunked Response]"),ve(this),ge(this)}else Yt(this.i,this.l,s,null),me(this,s);4==f&&ve(this),this.o&&!this.J&&(4==f?$n(this.j,this):(this.o=!1,fe(this)))}else En(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),ve(this),ge(this)}}}catch(b){}},ie.prototype.cancel=function(){this.J=!0,ve(this)},ie.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(Ht(),zt(17)),ve(this),this.s=2,ge(this)):de(this,this.S-t)};var ye=class{constructor(t,e){this.g=t,this.map=e}};function we(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function be(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _e(t){return t.h?1:t.g?t.g.size:0}function Ee(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Te(t,e){t.g?t.g.add(e):t.h=e}function Se(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ae(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function Ce(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ie(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ie(t),r=Ce(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}we.prototype.cancel=function(){if(this.i=Ae(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Oe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function De(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof De){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,Pe(this,t.s),this.l=t.l;var e=t.i,n=new qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Me(this,n),this.m=t.m}else t&&(e=String(t).match(Oe))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=$e(e[2]||""),this.g=$e(e[3]||"",!0),Pe(this,e[4]),this.l=$e(e[5]||"",!0),Me(this,e[6]||"",!0),this.m=$e(e[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}function Re(t){return new De(t)}function Ne(t,e,n){t.j=n?$e(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Me(t,e,n){e instanceof qe?(t.i=e,Je(t.i,t.h)):(n||(e=Fe(e,Ke)),t.i=new qe(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function je(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $e(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ve),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ve(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}De.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fe(e,Ue,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Fe(e,Ue,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Fe(n,"/"==n.charAt(0)?He:Be,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Fe(n,ze)),t.join("")};var Ue=/[#\/\?@]/g,Be=/[#\?:]/g,He=/[#\?]/g,Ke=/[#\?@]/g,ze=/#/g;function qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ge(t){t.g||(t.g=new Map,t.h=0,t.i&&ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){Ge(t),e=Ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qe(t,e){return Ge(t),e=Ye(t,e),t.g.has(e)}function Xe(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Ye(t,e),I(n)),t.h+=n.length)}function Ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(Ge(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),Xe(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Wt;if(a.Image){const r=new Image;r.onload=A(en,n,"TestLoadImage: loaded",!0,e,r),r.onerror=A(en,n,"TestLoadImage: error",!1,e,r),r.onabort=A(en,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=A(en,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function tn(t,e){const n=new Wt,r=new AbortController,i=setTimeout((()=>{r.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function nn(){this.g=new Rt}function rn(t,e,n){const r=n||"";try{xe(t,(function(t,n){let i=t;u(t)&&(i=kt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function on(t){this.l=t.Ub||null,this.j=t.eb||!1}function sn(t,e){_t.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,un(t)}function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Le(t,e,n))}function fn(t){_t.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=qe.prototype,t.add=function(t,e){Ge(this),this.i=null,t=Ye(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ge(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Ge(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){Ge(this);let e=[];if("string"===typeof t)Qe(this,t)&&(e=e.concat(this.g.get(Ye(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ge(this),this.i=null,t=Ye(this,t),Qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")},C(on,Nt),on.prototype.g=function(){return new sn(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),C(sn,_t),t=sn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,un(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):un(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),C(fn,_t);var dn=/^https?$/i,pn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,vn(t),yn(t)}function vn(t){t.A||(t.A=!0,Et(t,"complete"),Et(t,"error"))}function mn(t){if(t.h&&"undefined"!=typeof s&&(!t.v[1]||4!=bn(t)||2!=t.Z()))if(t.u&&4==bn(t))St(t.Ea,0,t);else if(Et(t,"readystatechange"),4==bn(t)){t.h=!1;try{const s=t.Z();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.D).match(Oe)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch(c){o=""}t.l=o+" ["+t.Z()+"]",vn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){wn(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function wn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function bn(t){return t.g?t.g.readyState:0}function _n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(T){return null}}function En(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(k(t[r]))continue;var n=F(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}M(e,(function(t){return t.join(", ")}))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Aa=0,this.i=[],this.j=new Wt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,t),this.cb=Tn("retryDelaySeedMs",1e4,t),this.Wa=Tn("forwardChannelMaxRetries",2,t),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new we(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function An(t){if(In(t),3==t.G){var e=t.U++,n=Re(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Dn(t,n),e=new ie(t,t.j,e),e.L=2,e.v=je(Re(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),fe(e)}Un(t)}function Cn(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function In(t){Cn(t),t.u&&(a.clearTimeout(t.u),t.u=null),jn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function xn(t){if(!be(t.h)&&!t.s){t.s=!0;var e=t.Ga;z||W(),q||(z(),q=!0),G.add(e,t),t.B=0}}function On(t,e){return!(_e(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Gt(S(t.Ga,t,e),Fn(t,t.B)),t.B++,!0))}function kn(t,e){var n;n=e?e.l:t.U++;const r=Re(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.T),Dn(t,r),t.m&&t.o&&hn(r,t.m,t.o),n=new ie(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Rn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Te(t.h,n),ce(n,r,e)}function Dn(t,e){t.H&&P(t.H,(function(t,n){Le(e,n,t)})),t.l&&xe({},(function(t,n){Le(e,n,t)}))}function Rn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?S(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=e,0>n)e=Math.max(0,i[s].g-100),o=!1;else try{rn(a,t,"req"+n+"_")}catch(b){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;z||W(),q||(z(),q=!0),G.add(e,t),t.v=0}}function Pn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Gt(S(t.Fa,t),Fn(t,t.v)),t.v++,!0)}function Mn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Ln(t){t.g=new ie(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Re(t.qa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.T),Le(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Le(e,"TO",t.ja),Le(e,"TYPE","xmlhttp"),Dn(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=je(Re(e)),n.m=null,n.P=!0,ue(n,t)}function jn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function $n(t,e){var n=null;if(t.g==e){jn(t),Mn(t),t.g=null;var r=2}else{if(!Ee(t.h,e))return;n=e.D,Se(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=Ut(),Et(r,new qt(r,n)),xn(t)}else Nn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&On(t,e)||2==r&&Pn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}function Fn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),2==e){var n=S(t.fb,t),r=t.Xa;const e=!r;r=new De(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(r,"https"),je(r),e?Ze(r.toString(),n):tn(r.toString(),n)}else zt(2);t.G=0,t.l&&t.l.sa(e),Un(t),In(t)}function Un(t){if(t.G=0,t.ka=[],t.l){const e=Ae(t.h);0==e.length&&0==t.i.length||(x(t.ka,e),x(t.ka,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.ra()}}function Bn(t,e,n){var r=n instanceof De?Re(n):new De(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Pe(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new De(null);r&&Ne(o,r),e&&(o.g=e),i&&Pe(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&Le(r,n,e),Le(r,"VER",t.la),Dn(t,r),r}function Hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new fn(new on({eb:n})):new fn(t.pa),e.Ha(t.J),e}function Kn(){}function zn(){}function qn(t,e){_t.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!k(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Gn(t){jt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wn(){$t.call(this),this.status=1}function Qn(t){this.g=t}t=fn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Pt(this.o):Pt(te),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void gn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wn(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){gn(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),yn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),fn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mn(this):this.bb())},t.bb=function(){mn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Dt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Sn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){zt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Bn(this,null,this.W),xn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ie(this,this.j,t);let o=this.o;if(this.S&&(o?(o=L(o),$(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Rn(this,i,e),n=Re(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Dn(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(ln(o)))+"&"+e:this.m&&hn(n,this.m,o)),Te(this.h,i),this.Ua&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),i.T=!0,ce(i,n,null)):ce(i,n,e),this.G=2}}else 3==this.G&&(t?kn(this,t):0==this.i.length||be(this.h)||kn(this))},t.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Gt(S(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),Cn(this),Ln(this))},t.Za=function(){null!=this.C&&(this.C=null,Cn(this),Pn(this),zt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Kn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},zn.prototype.g=function(t,e){return new qn(t,e)},C(qn,_t),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){An(this.g)},qn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=kt(t),t=n);e.i.push(new ye(e.Ya++,t)),3==e.G&&xn(e)},qn.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,qn.aa.N.call(this)},C(Gn,jt),C(Wn,$t),C(Qn,Kn),Qn.prototype.ua=function(){Et(this.g,"a")},Qn.prototype.ta=function(t){Et(this.g,new Gn(t))},Qn.prototype.sa=function(t){Et(this.g,new Wn)},Qn.prototype.ra=function(){Et(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,m=w.createWebChannelTransport=function(){return new zn},v=w.getStatEventTarget=function(){return Ut()},g=w.Event=Ft,p=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,d=w.ErrorCode=ee,ne.COMPLETE="complete",f=w.EventType=ne,Mt.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",_t.prototype.listen=_t.prototype.K,h=w.WebChannel=Mt,w.FetchXmlHttpFactory=on,fn.prototype.listenOnce=fn.prototype.L,fn.prototype.getLastError=fn.prototype.Ka,fn.prototype.getLastErrorCode=fn.prototype.Ba,fn.prototype.getStatus=fn.prototype.Z,fn.prototype.getResponseJson=fn.prototype.Oa,fn.prototype.getResponseText=fn.prototype.oa,fn.prototype.send=fn.prototype.ea,fn.prototype.setWithCredentials=fn.prototype.Ha,l=w.XhrIo=fn}).apply("undefined"!==typeof y?y:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore";
/**
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
 */class _{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
/**
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
 */
let E="11.0.2";
/**
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
 */const T=new s.Vy("@firebase/firestore");function S(){return T.logLevel}function A(t,...e){if(T.logLevel<=s.$b.DEBUG){const n=e.map(x);T.debug(`Firestore (${E}): ${t}`,...n)}}function C(t,...e){if(T.logLevel<=s.$b.ERROR){const n=e.map(x);T.error(`Firestore (${E}): ${t}`,...n)}}function I(t,...e){if(T.logLevel<=s.$b.WARN){const n=e.map(x);T.warn(`Firestore (${E}): ${t}`,...n)}}function x(t){if("string"==typeof t)return t;try{
/**
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: `+t;throw C(e),new Error(e)}function k(t,e){t||O()}function D(t,e){return t}
/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class P{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class M{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(_.UNAUTHENTICATED)))}shutdown(){}}class j{constructor(t){this.t=t,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){k(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new P;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new P,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new P)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(k("string"==typeof e.accessToken),new M(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return k(null===t||"string"==typeof t),new _(t)}}class ${constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class F{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new $(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(_.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class V{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){k(void 0===this.o);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(k("string"==typeof t.token),this.R=t.token,new V(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function B(t,e){return t<e?-1:t>e?1:0}function H(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */
class K{static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new K(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new K(0,0))}static max(){return new z(new K(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(),void 0===n?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class G extends q{construct(t,e,n){return new G(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new G(e)}static emptyPath(){return new G([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends q{construct(t,e,n){return new Q(t,e,n)}static isValidIdentifier(t){return W.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(e)}static emptyPath(){return new Q([])}}
/**
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
 */class X{constructor(t){this.path=t}static fromPath(t){return new X(G.fromString(t))}static fromName(t){return new X(G.fromString(t).popFirst(5))}static empty(){return new X(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===G.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return G.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new X(new G(t.slice()))}}
/**
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
 */class Y{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Y.UNKNOWN_ID=-1;function J(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(1e9===r?new K(n+1,0):new K(n,r));return new tt(i,X.empty(),e)}function Z(t){return new tt(t.readTime,t.key,-1)}class tt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new tt(z.min(),X.empty(),-1)}static max(){return new tt(z.max(),X.empty(),-1)}}function et(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=X.comparator(t.documentKey,e.documentKey),0!==n?n:B(t.largestBatchId,e.largestBatchId)
/**
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
 */)}class nt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */
/**
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
 */
class rt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rt(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof rt?e:rt.resolve(e)}catch(t){return rt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):rt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):rt.reject(e)}static resolve(t){return new rt(((e,n)=>{e(t)}))}static reject(t){return new rt(((e,n)=>{n(t)}))}static waitFor(t){return new rt(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=rt.resolve(!1);for(const n of t)e=e.next((t=>t?rt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new rt(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new rt(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */function it(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ot(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class st{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function at(t){return null==t}function ct(t){return 0===t&&1/t==-1/0}st.oe=-1;const ut=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],lt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ht=lt,ft=[...ht,"indexConfiguration","indexState","indexEntries"];
/**
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
 */
/**
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
 */
function dt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class vt{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mt(this.root,t,this.comparator,!1)}getReverseIterator(){return new mt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mt(this.root,t,this.comparator,!0)}}class mt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:yt.RED,this.left=null!=r?r:yt.EMPTY,this.right=null!=i?i:yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new yt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return yt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1,yt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,i){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class wt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bt(this.data.getIterator())}getIteratorFrom(t){return new bt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof wt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new wt(this.comparator);return e.data=t,e}}class bt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class _t{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new _t([])}unionWith(t){let e=new wt(Q.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new _t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return H(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Et extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Et("Invalid base64 string: "+t):t}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const St=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(t){if(k(!!t),"string"==typeof t){let e=0;const n=St.exec(t);if(k(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ct(t.seconds),nanos:Ct(t.nanos)}}function Ct(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function It(t){return"string"==typeof t?Tt.fromBase64String(t):Tt.fromUint8Array(t)}
/**
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
 */function xt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ot(t){const e=t.mapValue.fields.__previous_value__;return xt(e)?Ot(e):e}function kt(t){const e=At(t.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}
/**
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
 */class Dt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Dt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Dt&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Rt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xt(t)?4:qt(t)?9007199254740991:Kt(t)?10:11:O()}function Pt(t,e){if(t===e)return!0;const n=Nt(t);if(n!==Nt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kt(t).isEqual(kt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=At(t.timestampValue),r=At(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return It(t.bytesValue).isEqual(It(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ct(t.geoPointValue.latitude)===Ct(e.geoPointValue.latitude)&&Ct(t.geoPointValue.longitude)===Ct(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ct(t.integerValue)===Ct(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ct(t.doubleValue),r=Ct(e.doubleValue);return n===r?ct(n)===ct(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return H(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(dt(n)!==dt(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Pt(n[i],r[i])))return!1;return!0}(t,e);default:return O()}}function Mt(t,e){return void 0!==(t.values||[]).find((t=>Pt(t,e)))}function Lt(t,e){if(t===e)return 0;const n=Nt(t),r=Nt(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ct(t.integerValue||t.doubleValue),r=Ct(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return jt(t.timestampValue,e.timestampValue);case 4:return jt(kt(t),kt(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(t,e){const n=It(t),r=It(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=B(n[i],r[i]);if(0!==t)return t}return B(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=B(Ct(t.latitude),Ct(e.latitude));return 0!==n?n:B(Ct(t.longitude),Ct(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $t(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,o;const s=t.fields||{},a=e.fields||{},c=null===(n=s.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=B((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(o=null==u?void 0:u.values)||void 0===o?void 0:o.length)||0);return 0!==l?l:$t(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Rt.mapValue&&e===Rt.mapValue)return 0;if(t===Rt.mapValue)return 1;if(e===Rt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=B(r[s],o[s]);if(0!==t)return t;const e=Lt(n[r[s]],i[o[s]]);if(0!==e)return e}return B(r.length,o.length)}(t.mapValue,e.mapValue);default:throw O()}}function jt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return B(t,e);const n=At(t),r=At(e),i=B(n.seconds,r.seconds);return 0!==i?i:B(n.nanos,r.nanos)}function $t(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Lt(n[i],r[i]);if(t)return t}return B(n.length,r.length)}function Ft(t){return Vt(t)}function Vt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=At(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return It(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return X.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Vt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Vt(t.fields[i])}`;return n+"}"}(t.mapValue):O()}function Ut(t){return!!t&&"integerValue"in t}function Bt(t){return!!t&&"arrayValue"in t}function Ht(t){return!!t&&"mapValue"in t}function Kt(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=zt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Gt{constructor(t){this.value=t}static empty(){return new Gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ht(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zt(e)}setAll(t){let e=Q.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=zt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ht(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ht(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){pt(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Gt(zt(this.value))}}
/**
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
 */
class Wt{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Wt(t,0,z.min(),z.min(),z.min(),Gt.empty(),0)}static newFoundDocument(t,e,n,r){return new Wt(t,1,e,z.min(),n,r,0)}static newNoDocument(t,e){return new Wt(t,2,e,z.min(),z.min(),Gt.empty(),0)}static newUnknownDocument(t,e){return new Wt(t,3,e,z.min(),z.min(),Gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Qt{constructor(t,e){this.position=t,this.inclusive=e}}function Xt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?X.comparator(X.fromName(s.referenceValue),n.key):Lt(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Yt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class te{}class ee extends te{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ue(t,e,n):"array-contains"===e?new de(t,n):"in"===e?new pe(t,n):"not-in"===e?new ge(t,n):"array-contains-any"===e?new ve(t,n):new ee(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new le(t,n):new he(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Lt(e,this.value)):null!==e&&Nt(this.value)===Nt(e)&&this.matchesComparison(Lt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends te{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ne(t,e)}matches(t){return re(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function re(t){return"and"===t.op}function ie(t){return oe(t)&&re(t)}function oe(t){for(const e of t.filters)if(e instanceof ne)return!1;return!0}function se(t){if(t instanceof ee)return t.field.canonicalString()+t.op.toString()+Ft(t.value);if(ie(t))return t.filters.map((t=>se(t))).join(",");{const e=t.filters.map((t=>se(t))).join(",");return`${t.op}(${e})`}}function ae(t,e){return t instanceof ee?function(t,e){return e instanceof ee&&t.op===e.op&&t.field.isEqual(e.field)&&Pt(t.value,e.value)}(t,e):t instanceof ne?function(t,e){return e instanceof ne&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&ae(n,e.filters[r])),!0)}(t,e):void O()}function ce(t){return t instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Ft(t.value)}`}(t):t instanceof ne?function(t){return t.op.toString()+" {"+t.getFilters().map(ce).join(" ,")+"}"}(t):"Filter"}class ue extends ee{constructor(t,e,n){super(t,e,n),this.key=X.fromName(n.referenceValue)}matches(t){const e=X.comparator(t.key,this.key);return this.matchesComparison(e)}}class le extends ee{constructor(t,e){super(t,"in",e),this.keys=fe("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class he extends ee{constructor(t,e){super(t,"not-in",e),this.keys=fe("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function fe(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>X.fromName(t.referenceValue)))}class de extends ee{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Bt(e)&&Mt(e.arrayValue,this.value)}}class pe extends ee{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Mt(this.value.arrayValue,e)}}class ge extends ee{constructor(t,e){super(t,"not-in",e)}matches(t){if(Mt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Mt(this.value.arrayValue,e)}}class ve extends ee{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Bt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Mt(this.value.arrayValue,t)))}}
/**
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
 */class me{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ue=null}}function ye(t,e=null,n=[],r=[],i=null,o=null,s=null){return new me(t,e,n,r,i,o,s)}function we(t){const e=D(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>se(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),at(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ft(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ft(t))).join(",")),e.ue=t}return e.ue}function be(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ae(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yt(t.startAt,e.startAt)&&Yt(t.endAt,e.endAt)}
/**
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
 */
class _e{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ee(t,e,n,r,i,o,s,a){return new _e(t,e,n,r,i,o,s,a)}function Te(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Se(t){return null!==t.collectionGroup}function Ae(t){const e=D(t);if(null===e.ce){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new wt(Q.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Jt(r,n))})),t.has(Q.keyField().canonicalString())||e.ce.push(new Jt(Q.keyField(),n))}return e.ce}function Ce(t){const e=D(t);return e.le||(e.le=Ie(e,Ae(t))),e.le}function Ie(t,e){if("F"===t.limitType)return ye(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Jt(t.field,e)}));const n=t.endAt?new Qt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qt(t.startAt.position,t.startAt.inclusive):null;return ye(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xe(t,e,n){return new _e(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oe(t,e){return be(Ce(t),Ce(e))&&t.limitType===e.limitType}function ke(t){return`${we(Ce(t))}|lt:${t.limitType}`}function De(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ce(t))).join(", ")}]`),at(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ft(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ft(t))).join(",")),`Target(${e})`}(Ce(t))}; limitType=${t.limitType})`}function Re(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):X.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ae(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Xt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ae(t),e))&&!(t.endAt&&!function(t,e,n){const r=Xt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ae(t),e))}(t,e)}function Ne(t){return(e,n)=>{let r=!1;for(const i of Ae(t)){const t=Pe(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Pe(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Lt(r,i):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}
/**
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
 */class Me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){pt(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return gt(this.inner)}size(){return this.innerSize}}
/**
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
 */const Le=new vt(X.comparator);function je(){return Le}const $e=new vt(X.comparator);function Fe(...t){let e=$e;for(const n of t)e=e.insert(n.key,n);return e}function Ve(t){let e=$e;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ue(){return He()}function Be(){return He()}function He(){return new Me((t=>t.toString()),((t,e)=>t.isEqual(e)))}new vt(X.comparator);const Ke=new wt(X.comparator);function ze(...t){let e=Ke;for(const n of t)e=e.add(n);return e}const qe=new wt(B);function Ge(){return qe}
/**
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
 */function We(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ct(e)?"-0":e}}function Qe(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xe{constructor(){this._=void 0}}function Ye(t,e,n){return t instanceof tn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&xt(e)&&(e=Ot(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof en?nn(t,e):t instanceof rn?on(t,e):function(t,e){const n=Ze(t,e),r=an(n)+an(t.Pe);return Ut(n)&&Ut(t.Pe)?Qe(r):We(t.serializer,r)}(t,e)}function Je(t,e,n){return t instanceof en?nn(t,e):t instanceof rn?on(t,e):n}function Ze(t,e){return t instanceof sn?function(t){return Ut(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class tn extends Xe{}class en extends Xe{constructor(t){super(),this.elements=t}}function nn(t,e){const n=cn(e);for(const r of t.elements)n.some((t=>Pt(t,r)))||n.push(r);return{arrayValue:{values:n}}}class rn extends Xe{constructor(t){super(),this.elements=t}}function on(t,e){let n=cn(e);for(const r of t.elements)n=n.filter((t=>!Pt(t,r)));return{arrayValue:{values:n}}}class sn extends Xe{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function an(t){return Ct(t.integerValue||t.doubleValue)}function cn(t){return Bt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function un(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof en&&e instanceof en||t instanceof rn&&e instanceof rn?H(t.elements,e.elements,Pt):t instanceof sn&&e instanceof sn?Pt(t.Pe,e.Pe):t instanceof tn&&e instanceof tn}(t.transform,e.transform)}class ln{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ln}static exists(t){return new ln(void 0,t)}static updateTime(t){return new ln(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class fn{}function dn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new En(t.key,ln.none()):new mn(t.key,t.data,ln.none());{const n=t.data,r=Gt.empty();let i=new wt(Q.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new yn(t.key,r,new _t(i.toArray()),ln.none())}}function pn(t,e,n){t instanceof mn?function(t,e,n){const r=t.value.clone(),i=bn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof yn?function(t,e,n){if(!hn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=bn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(wn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function gn(t,e,n,r){return t instanceof mn?function(t,e,n,r){if(!hn(t.precondition,e))return n;const i=t.value.clone(),o=_n(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof yn?function(t,e,n,r){if(!hn(t.precondition,e))return n;const i=_n(t.fieldTransforms,r,e),o=e.data;return o.setAll(wn(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return hn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function vn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&H(t,e,((t,e)=>un(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mn extends fn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class yn extends fn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function bn(t,e,n){const r=new Map;k(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Je(s,a,n[i]))}return r}function _n(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Ye(t,o,e))}return r}class En extends fn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */
class Tn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&pn(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=gn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=gn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Be();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=dn(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(z.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ze())}isEqual(t){return this.batchId===t.batchId&&H(this.mutations,t.mutations,((t,e)=>vn(t,e)))&&H(this.baseMutations,t.baseMutations,((t,e)=>vn(t,e)))}}
/**
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
 */
class Sn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
/**
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
 */
var An,Cn;function In(t){if(void 0===t)return C("GRPC error has no .code"),R.UNKNOWN;switch(t){case An.OK:return R.OK;case An.CANCELLED:return R.CANCELLED;case An.UNKNOWN:return R.UNKNOWN;case An.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case An.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case An.INTERNAL:return R.INTERNAL;case An.UNAVAILABLE:return R.UNAVAILABLE;case An.UNAUTHENTICATED:return R.UNAUTHENTICATED;case An.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case An.NOT_FOUND:return R.NOT_FOUND;case An.ALREADY_EXISTS:return R.ALREADY_EXISTS;case An.PERMISSION_DENIED:return R.PERMISSION_DENIED;case An.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case An.ABORTED:return R.ABORTED;case An.OUT_OF_RANGE:return R.OUT_OF_RANGE;case An.UNIMPLEMENTED:return R.UNIMPLEMENTED;case An.DATA_LOSS:return R.DATA_LOSS;default:return O()}}(Cn=An||(An={}))[Cn.OK=0]="OK",Cn[Cn.CANCELLED=1]="CANCELLED",Cn[Cn.UNKNOWN=2]="UNKNOWN",Cn[Cn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Cn[Cn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Cn[Cn.NOT_FOUND=5]="NOT_FOUND",Cn[Cn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Cn[Cn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Cn[Cn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Cn[Cn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Cn[Cn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Cn[Cn.ABORTED=10]="ABORTED",Cn[Cn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Cn[Cn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Cn[Cn.INTERNAL=13]="INTERNAL",Cn[Cn.UNAVAILABLE=14]="UNAVAILABLE",Cn[Cn.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new r([4294967295,4294967295],0);Error;
/**
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
 */(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();class xn{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function On(t){return k(!!t),z.fromTimestamp(function(t){const e=At(t);return new K(e.seconds,e.nanos)}(t))}function kn(t,e){const n=function(t){return new G(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Dn(t){const e=G.fromString(t);return k(jn(e)),e}function Rn(t){const e=Dn(t);return 4===e.length?G.emptyPath():Nn(e)}function Nn(t){return k(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pn(t){let e=Rn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){k(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=Mn(t);return e instanceof ne&&ie(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=function(t){return t.map((t=>function(t){return new Jt(Ln(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,at(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Qt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Qt(n,e)}(n.endAt)),Ee(e,i,s,o,a,"F",c,u)}function Mn(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ln(t.unaryFilter.field);return ee.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ln(t.unaryFilter.field);return ee.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ln(t.unaryFilter.field);return ee.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ln(t.unaryFilter.field);return ee.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):void 0!==t.fieldFilter?function(t){return ee.create(Ln(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ne.create(t.compositeFilter.filters.map((t=>Mn(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))}(t):O()}function Ln(t){return Q.fromServerFormat(t.fieldPath)}function jn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */
/**
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
 */class $n{constructor(t){this.ht=t}}function Fn(t){const e=Pn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?xe(e,e.limit,"L"):e}
/**
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
 */class Vn{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(Ct(t.integerValue));else if("doubleValue"in t){const n=Ct(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),ct(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),"string"==typeof n&&(n=At(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(It(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?qt(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):Kt(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):O()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const r of Object.keys(n))this.gt(r,e),this.dt(n[r],e)}bt(t,e){var n,r;const i=t.fields||{};this.Rt(e,53);const o="value",s=(null===(r=null===(n=i[o].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(e,15),e.Vt(Ct(s)),this.gt(o,e),this.dt(i[o],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const r of n)this.dt(r,e)}St(t,e){this.Rt(e,37),X.fromName(t).path.forEach((t=>{this.Rt(e,60),this.Ct(t,e)}))}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}Vn.Ft=new Vn;
/**
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
 */
class Un{constructor(){this.ln=new Bn}addToCollectionParentIndex(t,e){return this.ln.add(e),rt.resolve()}getCollectionParents(t,e){return rt.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return rt.resolve()}deleteFieldIndex(t,e){return rt.resolve()}deleteAllFieldIndexes(t){return rt.resolve()}createTargetIndexes(t,e){return rt.resolve()}getDocumentsMatchingTarget(t,e){return rt.resolve(null)}getIndexType(t,e){return rt.resolve(0)}getFieldIndexes(t,e){return rt.resolve([])}getNextCollectionGroupToUpdate(t){return rt.resolve(null)}getMinOffset(t,e){return rt.resolve(tt.min())}getMinOffsetFromCollectionGroup(t,e){return rt.resolve(tt.min())}updateCollectionGroup(t,e,n){return rt.resolve()}updateIndexEntries(t,e){return rt.resolve()}}class Bn{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new wt(G.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new wt(G.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Hn{static withCacheSize(t){return new Hn(t,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
/**
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
 */Hn.DEFAULT_COLLECTION_PERCENTILE=10,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hn.DEFAULT=new Hn(41943040,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hn.DISABLED=new Hn(-1,0,0);
/**
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
 */
class Kn{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Kn(0)}static Qn(){return new Kn(-1)}}
/**
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
 */
/**
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
 */
class zn{constructor(){this.changes=new Me((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?rt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class qn{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Gn{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&gn(n.mutation,t,_t.empty(),K.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ze()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ze()){const r=Ue();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Fe();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ue();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ze())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=je();const o=He(),s=function(){return He()}();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof yn)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),gn(s.mutation,e,s.mutation.getFieldMask(),K.now())):o.set(e.key,_t.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new qn(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=He();let r=new vt(((t,e)=>t-e)),i=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||_t.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||ze()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=Be();c.forEach((t=>{if(!i.has(t)){const r=dn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return rt.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Se(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):rt.resolve(Ue());let s=-1,a=i;return o.next((e=>rt.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?rt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ze()))).next((t=>({batchId:s,changes:Ve(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new X(e)).next((t=>{let e=Fe();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let o=Fe();return this.indexManager.getCollectionParents(t,i).next((s=>rt.forEach(s,(s=>{const a=function(t,e){return new _e(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{o=o.insert(t,e)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Wt.newInvalidDocument(r)))}));let n=Fe();return t.forEach(((t,r)=>{const o=i.get(t);void 0!==o&&gn(o.mutation,r,_t.empty(),K.now()),Re(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class Wn{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return rt.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:On(t.createTime)}}(e)),rt.resolve()}getNamedQuery(t,e){return rt.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:Fn(t.bundledQuery),readTime:On(t.readTime)}}(e)),rt.resolve()}}
/**
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
 */class Qn{constructor(){this.overlays=new vt(X.comparator),this.Er=new Map}getOverlay(t,e){return rt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ue();return rt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Tt(t,e,r)})),rt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Er.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Er.delete(n)),rt.resolve()}getOverlaysForCollection(t,e,n){const r=Ue(),i=e.length+1,o=new X(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return rt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new vt(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ue(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Ue(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return rt.resolve(s)}Tt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Er.get(r.largestBatchId).delete(n.key);this.Er.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Sn(e,n));let i=this.Er.get(e);void 0===i&&(i=ze(),this.Er.set(e,i)),this.Er.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Xn{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return rt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,rt.resolve()}}
/**
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
 */class Yn{constructor(){this.dr=new wt(Jn.Ar),this.Rr=new wt(Jn.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new Jn(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new Jn(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new X(new G([])),n=new Jn(e,t),r=new Jn(e,t+1),i=[];return this.Rr.forEachInRange([n,r],(t=>{this.gr(t),i.push(t.key)})),i}wr(){this.dr.forEach((t=>this.gr(t)))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new X(new G([])),n=new Jn(e,t),r=new Jn(e,t+1);let i=ze();return this.Rr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Jn(t,0),n=this.dr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Jn{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return X.comparator(t.key,e.key)||B(t.br,e.br)}static Vr(t,e){return B(t.br,e.br)||X.comparator(t.key,e.key)}}
/**
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
 */class Zn{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new wt(Jn.Ar)}checkEmpty(t){return rt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tn(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.vr=this.vr.add(new Jn(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return rt.resolve(o)}lookupMutationBatch(t,e){return rt.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Fr(n),i=r<0?0:r;return rt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rt.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return rt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Jn(e,0),r=new Jn(e,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],(t=>{const e=this.Cr(t.br);i.push(e)})),rt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new wt(B);return e.forEach((t=>{const e=new Jn(t,0),r=new Jn(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,r],(t=>{n=n.add(t.br)}))})),rt.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;X.isDocumentKey(i)||(i=i.child(""));const o=new Jn(new X(i),0);let s=new wt(B);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.br)),!0)}),o),rt.resolve(this.Mr(s))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){k(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return rt.forEach(e.mutations,(r=>{const i=new Jn(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.vr=n}))}Ln(t){}containsKey(t,e){const n=new Jn(e,0),r=this.vr.firstAfterOrEqual(n);return rt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,rt.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class tr{constructor(t){this.Nr=t,this.docs=function(){return new vt(X.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return rt.resolve(n?n.document.mutableCopy():Wt.newInvalidDocument(e))}getEntries(t,e){let n=je();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Wt.newInvalidDocument(t))})),rt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=je();const o=e.path,s=new X(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||et(Z(s),n)<=0||(r.has(s.key)||Re(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return rt.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O()}Lr(t,e){return rt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new er(this)}getSize(t){return rt.resolve(this.size)}}class er extends zn{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.hr.addEntry(t,r)):this.hr.removeEntry(n)})),rt.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
/**
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
 */class nr{constructor(t){this.persistence=t,this.Br=new Me((t=>we(t)),be),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Yn,this.targetCount=0,this.Qr=Kn.qn()}forEachTarget(t,e){return this.Br.forEach(((t,n)=>e(n))),rt.resolve()}getLastRemoteSnapshotVersion(t){return rt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rt.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),rt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),rt.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Kn(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,rt.resolve()}updateTargetData(t,e){return this.Un(e),rt.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,rt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Br.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),rt.waitFor(i).next((()=>r))}getTargetCount(t){return rt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return rt.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),rt.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),rt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),rt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return rt.resolve(n)}containsKey(t,e){return rt.resolve(this.qr.containsKey(e))}}
/**
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
 */class rr{constructor(t,e){this.Kr={},this.overlays={},this.$r=new st(0),this.Ur=!1,this.Ur=!0,this.Wr=new Xn,this.referenceDelegate=t(this),this.Gr=new nr(this),this.indexManager=new Un,this.remoteDocumentCache=function(t){return new tr(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new $n(e),this.jr=new Wn(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qn,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new Zn(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new ir(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((t=>this.referenceDelegate.Jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Yr(t,e){return rt.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class ir extends nt{constructor(t){super(),this.currentSequenceNumber=t}}class or{constructor(t){this.persistence=t,this.Zr=new Yn,this.Xr=null}static ei(t){return new or(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),rt.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),rt.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),rt.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rt.forEach(this.ti,(n=>{const r=X.fromPath(n);return this.ni(t,r).next((t=>{t||e.removeEntry(r,z.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return rt.or([()=>rt.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}
/**
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
 */
class sr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=r}static zi(t,e){let n=ze(),r=ze();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ar{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class cr{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return(0,a.nr)()?8:it((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Xi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.es(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new ar;return this.ts(t,e,n).next((r=>{if(i.result=r,this.Hi)return this.ns(t,e,n,r.size)}))})).next((()=>i.result))}ns(t,e,n,r){return n.documentReadCount<this.Ji?(S()<=s.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",De(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),rt.resolve()):(S()<=s.$b.DEBUG&&A("QueryEngine","Query:",De(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(S()<=s.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",De(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ce(e))):rt.resolve())}Xi(t,e){if(Te(e))return rt.resolve(null);let n=Ce(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=xe(e,null,"F"),n=Ce(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ze(...r);return this.Zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.rs(e,r);return this.ss(e,o,i,n.readTime)?this.Xi(t,xe(e,null,"F")):this.os(t,o,e,n)}))))})))))}es(t,e,n,r){return Te(e)||r.isEqual(z.min())?rt.resolve(null):this.Zi.getDocuments(t,n).next((i=>{const o=this.rs(e,i);return this.ss(e,o,n,r)?rt.resolve(null):(S()<=s.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),De(e)),this.os(t,o,e,J(r,-1)).next((t=>t)))}))}rs(t,e){let n=new wt(Ne(t));return e.forEach(((e,r)=>{Re(t,r)&&(n=n.add(r))})),n}ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(t,e,n){return S()<=s.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",De(e)),this.Zi.getDocumentsMatchingQuery(t,e,tt.min(),n)}os(t,e,n,r){return this.Zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class ur{constructor(t,e,n,r){this.persistence=t,this._s=e,this.serializer=r,this.us=new vt(B),this.cs=new Me((t=>we(t)),be),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gn(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}function lr(t,e,n,r){return new ur(t,e,n,r)}async function hr(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=ze();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({Ts:t,removedBatchIds:i,addedBatchIds:o})))}))}))}class fr{constructor(){this.activeTargetIds=Ge()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class dr{constructor(){this._o=new fr,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new fr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class pr{uo(t){}shutdown(){}}
/**
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
 */class gr{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let vr=null;function mr(){return null===vr?vr=function(){return 268435456+Math.round(2147483648*Math.random())}():vr++,"0x"+vr.toString(16)
/**
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
 */}const yr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class wr{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
/**
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
 */const br="WebChannelConnection";class _r extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(t,e,n,r,i){const o=mr(),s=this.No(t,e.toUriEncodedString());A("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,r,i),this.Bo(t,s,a,n).then((e=>(A("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw I("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}ko(t,e,n,r,i,o){return this.Oo(t,e,n,r,i)}Lo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=yr[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,r){const i=mr();return new Promise(((o,s)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();A(br,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case d.TIMEOUT:A(br,`RPC '${t}' ${i} timed out`),s(new N(R.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(A(br,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(e)>=0?e:R.UNKNOWN}(e.status);s(new N(t,e.message))}else s(new N(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new N(R.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{A(br,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);A(br,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}qo(t,e,n){const r=mr(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=m(),s=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");A(br,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let f=!1,d=!1;const y=new wr({Eo:e=>{d?A(br,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(f||(A(br,`Opening RPC '${t}' stream ${r} transport.`),l.open(),f=!0),A(br,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Ao:()=>l.close()}),w=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return w(l,h.EventType.OPEN,(()=>{d||(A(br,`RPC '${t}' stream ${r} transport opened.`),y.So())})),w(l,h.EventType.CLOSE,(()=>{d||(d=!0,A(br,`RPC '${t}' stream ${r} transport closed`),y.Do())})),w(l,h.EventType.ERROR,(e=>{d||(d=!0,I(br,`RPC '${t}' stream ${r} transport errored:`,e),y.Do(new N(R.UNAVAILABLE,"The operation could not be completed")))})),w(l,h.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];k(!!i);const o=i,s=(null==o?void 0:o.error)||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){A(br,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=An[t];if(void 0!==e)return In(e)}(e),i=s.message;void 0===n&&(n=R.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),d=!0,y.Do(new N(n,i)),l.close()}else A(br,`RPC '${t}' stream ${r} received:`,i),y.vo(i)}})),w(s,g.STAT_EVENT,(e=>{e.stat===p.PROXY?A(br,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===p.NOPROXY&&A(br,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{y.bo()}),0),y}}
/**
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
 */
/**
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
 */function Er(){return"undefined"!=typeof document?document:null}
/**
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
 */function Tr(t){return new xn(t,!0)}
/**
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
 */class Sr{constructor(t,e,n=1e3,r=1.5,i=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
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
 */
/**
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
 */
class Ar extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Oo(t,kn(e,n),r,i,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N(R.UNKNOWN,t.toString())}))}ko(t,e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,s])=>this.connection.ko(t,kn(e,n),r,o,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N(R.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class Cr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(C(e),this.C_=!1):A("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
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
 */class Ir{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{kr(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=D(t);e.k_.add(4),await Or(e),e.K_.set("Unknown"),e.k_.delete(4),await xr(e)}(this))}))})),this.K_=new Cr(n,r)}}async function xr(t){if(kr(t))for(const e of t.q_)await e(!0)}async function Or(t){for(const e of t.q_)await e(!1)}function kr(t){return 0===D(t).k_.size}async function Dr(t,e){const n=D(t);e?(n.k_.delete(2),await xr(n)):e||(n.k_.add(2),await Or(n),n.K_.set("Unknown"))}
/**
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
 */
class Rr{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new P,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Rr(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Nr{constructor(){this.queries=Pr(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=D(t),r=n.queries;n.queries=Pr(),r.forEach(((t,n)=>{for(const r of n.J_)r.onError(e)}))}(this,new N(R.ABORTED,"Firestore shutting down"))}}function Pr(){return new Me((t=>ke(t)),Oe)}function Mr(t){t.X_.forEach((t=>{t.next()}))}var Lr,jr;(jr=Lr||(Lr={})).na="default",jr.Cache="cache";class $r{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Me((t=>ke(t)),Oe),this.Oa=new Map,this.Na=new Set,this.La=new vt(X.comparator),this.Ba=new Map,this.ka=new Yn,this.qa={},this.Qa=new Map,this.Ka=Kn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}function Fr(t,e,n){const r=D(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xa.forEach(((n,r)=>{const i=r.view.ea(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=D(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.J_)i.ea(e)&&(r=!0)})),r&&Mr(n)}(r.eventManager,e),t.length&&r.Ma.R_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vr(t,e,n){const r=D(t),i=[],o=[],s=[];r.xa.isEmpty()||(r.xa.forEach(((t,a)=>{s.push(r.Ua(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=sr.zi(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.Ma.R_(i),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>rt.forEach(e,(e=>rt.forEach(e.Wi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>rt.forEach(e.Gi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ot(t))throw t;A("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.us.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(t,i)}}}(r.localStore,o))}async function Ur(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const t=await hr(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new N(R.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Vr(n,t.Ts)}}class Br{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return lr(this.persistence,new cr,t.initialUser,this.serializer)}ja(t){return new rr(or.ei,this.serializer)}za(t){return new dr}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Br.provider={build:()=>new Br};class Hr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Fr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ur.bind(null,this.syncEngine),await Dr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Nr}()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),n=function(t){return new _r(t)}(t.databaseInfo);return function(t,e,n,r){return new Ar(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Ir(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Fr(this.syncEngine,t,0)),function(){return gr.p()?new gr:new pr}())}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new $r(t,e,n,r,i,o);return s&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=D(t);A("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await Or(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Hr.provider={build:()=>new Hr};
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
function Kr(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const zr=new Map;
/**
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
 */function qr(t,e,n,r){if(!0===e&&!0===r)throw new N(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}
/**
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
 */
class Gr{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qr("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kr(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wr{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new L;switch(t.type){case"firstParty":return new F(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=zr.get(t);e&&(A("ComponentProvider","Removing Datastore"),zr.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Qr{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Sr(this,"async_queue_retry"),this.fu=()=>{const t=Er();t&&A("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=Er();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Er();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise((()=>{}));const e=new P;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!ot(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw C("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const r=Rr.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.du.push(r),r}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class Xr extends Wr{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Qr,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qr(t),this._firestoreClient=void 0,await t}}}new RegExp("[~\\*/\\[\\]]");new WeakMap;
/**
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
 */!function(t,e=!0){!function(t){E=t}(i.MF),(0,i.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new Xr(new j(t.getProvider("auth-internal")),new U(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dt(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(b,"4.7.5",t),(0,i.KO)(b,"4.7.5","esm2017")}()},2421:function(t,e,n){n.d(e,{dG:function(){return pt},gf:function(){return gt}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(1454),n(4979),n(4712);var r=n(2350),i=n(3166),o=n(1238),s=n(9018);
/**
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
 */
const a="/firebase-messaging-sw.js",c="/firebase-cloud-messaging-push-scope",u="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",l="https://fcmregistrations.googleapis.com/v1",h="google.c.a.c_id",f="google.c.a.c_l",d="google.c.a.ts",p="google.c.a.e";var g,v;
/**
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
 */
function m(t){const e=new Uint8Array(t),n=btoa(String.fromCharCode(...e));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function y(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}
/**
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
 */(function(t){t[t["DATA_MESSAGE"]=1]="DATA_MESSAGE",t[t["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(g||(g={})),function(t){t["PUSH_RECEIVED"]="push-received",t["NOTIFICATION_CLICKED"]="notification-clicked"}(v||(v={}));const w="fcm_token_details_db",b=5,_="fcm_token_object_Store";async function E(t){if("databases"in indexedDB){const t=await indexedDB.databases(),e=t.map((t=>t.name));if(!e.includes(w))return null}let e=null;const n=await(0,i.P2)(w,b,{upgrade:async(n,r,i,o)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(_))return;const a=o.objectStore(_),c=await a.index("fcmSenderId").get(t);if(await a.clear(),c)if(2===r){const t=c;if(!t.auth||!t.p256dh||!t.endpoint)return;e={token:t.fcmToken,createTime:null!==(s=t.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"===typeof t.vapidKey?t.vapidKey:m(t.vapidKey)}}}else if(3===r){const t=c;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:m(t.auth),p256dh:m(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:m(t.vapidKey)}}}else if(4===r){const t=c;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:m(t.auth),p256dh:m(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:m(t.vapidKey)}}}}});return n.close(),await(0,i.MR)(w),await(0,i.MR)("fcm_vapid_details_db"),await(0,i.MR)("undefined"),T(e)?e:null}function T(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return"number"===typeof t.createTime&&t.createTime>0&&"string"===typeof t.token&&t.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
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
 */const S="firebase-messaging-database",A=1,C="firebase-messaging-store";let I=null;function x(){return I||(I=(0,i.P2)(S,A,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(C)}}})),I}async function O(t){const e=D(t),n=await x(),r=await n.transaction(C).objectStore(C).get(e);if(r)return r;{const e=await E(t.appConfig.senderId);if(e)return await k(t,e),e}}async function k(t,e){const n=D(t),r=await x(),i=r.transaction(C,"readwrite");return await i.objectStore(C).put(e,n),await i.done,e}function D({appConfig:t}){return t.appId}
/**
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
 */const R={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},N=new o.FA("messaging","Messaging",R);
/**
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
 */
async function P(t,e){const n=await $(t),r=F(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{const e=await fetch(j(t.appConfig),i);o=await e.json()}catch(s){throw N.create("token-subscribe-failed",{errorInfo:null===s||void 0===s?void 0:s.toString()})}if(o.error){const t=o.error.message;throw N.create("token-subscribe-failed",{errorInfo:t})}if(!o.token)throw N.create("token-subscribe-no-token");return o.token}async function M(t,e){const n=await $(t),r=F(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{const n=await fetch(`${j(t.appConfig)}/${e.token}`,i);o=await n.json()}catch(s){throw N.create("token-update-failed",{errorInfo:null===s||void 0===s?void 0:s.toString()})}if(o.error){const t=o.error.message;throw N.create("token-update-failed",{errorInfo:t})}if(!o.token)throw N.create("token-update-no-token");return o.token}async function L(t,e){const n=await $(t),r={method:"DELETE",headers:n};try{const n=await fetch(`${j(t.appConfig)}/${e}`,r),i=await n.json();if(i.error){const t=i.error.message;throw N.create("token-unsubscribe-failed",{errorInfo:t})}}catch(i){throw N.create("token-unsubscribe-failed",{errorInfo:null===i||void 0===i?void 0:i.toString()})}}function j({projectId:t}){return`${l}/projects/${t}/registrations`}async function $({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function F({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==u&&(i.web.applicationPubKey=r),i}
/**
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
 */const V=6048e5;async function U(t){const e=await K(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:m(e.getKey("auth")),p256dh:m(e.getKey("p256dh"))},r=await O(t.firebaseDependencies);if(r){if(z(r.subscriptionOptions,n))return Date.now()>=r.createTime+V?B(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await L(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return H(t.firebaseDependencies,n)}return H(t.firebaseDependencies,n)}async function B(t,e){try{const n=await M(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await k(t.firebaseDependencies,r),n}catch(n){throw n}}async function H(t,e){const n=await P(t,e),r={token:n,createTime:Date.now(),subscriptionOptions:e};return await k(t,r),r.token}async function K(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:y(e)})}function z(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&i&&o}
/**
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
 */function q(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return G(e,t),W(e,t),Q(e,t),e}function G(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function W(t,e){e.data&&(t.data=e.data)}function Q(t,e){var n,r,i,o,s;if(!e.fcmOptions&&!(null===(n=e.notification)||void 0===n?void 0:n.click_action))return;t.fcmOptions={};const a=null!==(i=null===(r=e.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(o=e.notification)||void 0===o?void 0:o.click_action;a&&(t.fcmOptions.link=a);const c=null===(s=e.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}
/**
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
 */function X(t){return"object"===typeof t&&!!t&&h in t}
/**
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
 */function Y(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}
/**
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
 */function J(t){if(!t||!t.options)throw Z("App Configuration Object");if(!t.name)throw Z("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Z(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Z(t){return N.create("missing-app-config-values",{valueName:t})}
/**
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
 */Y("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class tt{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=J(t);this.firebaseDependencies={app:t,appConfig:r,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
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
 */async function et(t){try{t.swRegistration=await navigator.serviceWorker.register(a,{scope:c}),t.swRegistration.update().catch((()=>{}))}catch(e){throw N.create("failed-service-worker-registration",{browserErrorMessage:null===e||void 0===e?void 0:e.message})}}
/**
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
 */async function nt(t,e){if(e||t.swRegistration||await et(t),e||!t.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw N.create("invalid-sw-registration");t.swRegistration=e}}
/**
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
 */async function rt(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=u)}
/**
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
 */async function it(t,e){if(!navigator)throw N.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw N.create("permission-blocked");return await rt(t,null===e||void 0===e?void 0:e.vapidKey),await nt(t,null===e||void 0===e?void 0:e.serviceWorkerRegistration),U(t)}
/**
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
 */async function ot(t,e,n){const r=st(e),i=await t.firebaseDependencies.analyticsProvider.get();i.logEvent(r,{message_id:n[h],message_name:n[f],message_time:n[d],message_device_time:Math.floor(Date.now()/1e3)})}function st(t){switch(t){case v.NOTIFICATION_CLICKED:return"notification_open";case v.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
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
 */async function at(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===v.PUSH_RECEIVED&&("function"===typeof t.onMessageHandler?t.onMessageHandler(q(n)):t.onMessageHandler.next(q(n)));const r=n.data;X(r)&&"1"===r[p]&&await ot(t,n.messageType,r)}const ct="@firebase/messaging",ut="0.12.14",lt=t=>{const e=new tt(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(t=>at(e,t))),e},ht=t=>{const e=t.getProvider("messaging").getImmediate(),n={getToken:t=>it(e,t)};return n};function ft(){(0,s.om)(new r.uA("messaging",lt,"PUBLIC")),(0,s.om)(new r.uA("messaging-internal",ht,"PRIVATE")),(0,s.KO)(ct,ut),(0,s.KO)(ct,ut,"esm2017")}
/**
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
 */async function dt(){try{await(0,o.eX)()}catch(t){return!1}return"undefined"!==typeof window&&(0,o.zW)()&&(0,o.dM)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
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
 */
/**
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
 */
function pt(t=(0,s.Sx)()){return dt().then((t=>{if(!t)throw N.create("unsupported-browser")}),(t=>{throw N.create("indexed-db-unsupported")})),(0,s.j6)((0,o.Ku)(t),"messaging").getImmediate()}async function gt(t,e){return t=(0,o.Ku)(t),it(t,e)}ft()},3166:function(t,e,n){n.d(e,{MR:function(){return E},P2:function(){return _}});n(8992),n(7550),n(4979);const r=(t,e)=>e.some((e=>t instanceof e));let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;function d(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(w(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),f.set(e,t),e}function p(t){if(u.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));u.set(t,e)}let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return u.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function v(t){g=t(g)}function m(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(b(this),e),w(c.get(this))}:function(...e){return w(t.apply(b(this),e))}:function(e,...n){const r=t.call(b(this),e,...n);return l.set(r,e.sort?e.sort():[e]),w(r)}}function y(t){return"function"===typeof t?m(t):(t instanceof IDBTransaction&&p(t),r(t,s())?new Proxy(t,g):t)}function w(t){if(t instanceof IDBRequest)return d(t);if(h.has(t))return h.get(t);const e=y(t);return e!==t&&(h.set(t,e),f.set(e,t)),e}const b=t=>f.get(t);function _(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=w(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(w(s.result),t.oldVersion,t.newVersion,w(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}function E(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",(t=>e(t.oldVersion,t))),w(n).then((()=>{}))}const T=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],A=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return A.set(e,o),o}v((t=>({...t,get:(e,n,r)=>C(e,n)||t.get(e,n,r),has:(e,n)=>!!C(e,n)||t.has(e,n)})))}}]);
//# sourceMappingURL=chunk-vendors.ea29b9f8.js.map