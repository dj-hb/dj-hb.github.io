if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fcm-test"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.a1e6493c.css",revision:null},{url:"/firebase-messaging-sw.js",revision:"e0486764a5af36e8b67f86ba268c5c3e"},{url:"/index.html",revision:"2399bc8bc0207bc08088b59d95b9d86a"},{url:"/js/about.d9e0003d.js",revision:null},{url:"/js/app.ff81295c.js",revision:null},{url:"/js/chunk-vendors.3ffc0605.js",revision:null},{url:"/manifest.json",revision:"d57c36682f09f1861179986bad0760a5"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
