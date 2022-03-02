(()=>{"use strict";var n={421:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(558),r=t.n(o),a=t(361),i=t.n(a),c=t(626),s=t.n(c),d=new URL(t(915),t.b),l=i()(r()),u=s()(d);l.push([n.id,":root{\n    --font-color: #eee;\n    --dark-font: #aaa;\n    --background-color: rgba(0, 0, 0, 0,6);\n    --hover-color: rgba(99, 99, 99, 0.4);\n    --dark-backgound: rgba(0, 0, 0, 0.9);\n    --border-color: #222;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml{\n    font-size: 63%;\n    line-height: 1.6;\n}\n\nbody{\n    font-family: 'Romanesco', cursive;\n    font-size: 1.7rem;\n    color: var(--font-color);\n    background-color: var(--background-color);\n    background-image: url("+u+");\n    background-attachment: fixed;\n    background-size: contain;\n}\n\nheader{\n    font-size: 2.5rem;\n}\nh1,\nh2,\nh3{\n    line-height: 1.2;\n}\n\na{\n    text-decoration: none;\n    color: var(--font-color);\n}\n\nimg{\n    display: block;\n    width: 100%;\n}\n\nbutton{\n    font-family: inherit;\n    color: inherit;\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n}\n\n/* Content */\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    justify-content: center;\n    height: 100vh;\n}\n\n/* Header */\n\n.header{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 2rem;\n    background-color: var(--background-color);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.spa-name{\n    margin-bottom: 1rem;\n    font-family: 'Romanesco', cursive;\n    font-size: 12rem;\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);\n   /* background-color: var(--background-color);*/\n}\n\n.button-nav{\n    padding: 2rem;\n    font-size: 2rem;\n    background-color: var(--background-color);\n    border-bottom: 2px solid transparent;\n    transition: transform 0.3s;\n}\n\n.button-nav:hover{\n    transform: translateY(-10%);\n    border-color: white;\n}\n\n.button-nav.active{\n    border-bottom: 2px solid var(--font-color);\n}\n\n\n/* Main */\n.main{\n    max-width: 80vw;\n    padding: 4rem;\n    margin: 6rem 0;\n    font-size: 2rem;\n    background-color: var(--dark-backgound); \n    border: 1px solid var(--border-color);\n    margin: auto;\n}\n\n/* Home Page */\n.home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    justify-content: center; /* space aroung */\n    height: 710px;\n    width: 618px;\n    animation: fadeIn 1.5s;\n    margin: auto;\n    margin-top: 20px;\n    padding: 25px;\n}\n\n.home p{\n    padding: 2rem;\n    font-size: 2.3rem;\n    font-weight: bold;\n}\n\n.home img{\n    width: 70%;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    opacity: .85;\n}\n\n/* Services Page */\n\n.service-menu{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n  width: 70vw;\n  overflow: auto;\n}\n\n.service-item{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 420px;\n    padding: 4rem;\n    cursor: pointer;\n    background-color: var(--background-color);\n    transition: background-color 0.3s;\n}\n.service-item:hover{\n    background-color: var(--hover-color);\n}\n.service-item img{\n    width: 70%;\n    height: 50%;\n}\n\n.service-item h2{\n    padding: 2.3rem;\n}\n.service-item p{\n    font-size: 1.5rem;\n    text-align: center;\n}\n\n\n/* Contact Page */\n.contact{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 525px;\n    width: 618px;\n    animation: fadeIn 1.5s;\n    margin: auto;\n    text-align: left;\n}\n\n.contact p {\n    width: 100%;\n    padding: 1rem;\n}\n\n.contact img{\n    max-height: 420px;\n    padding: 1.5rem;\n    opacity: .9;\n}\n\n.footer{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n    padding: 1rem;\n    border-top: 1px solid var(--border-color);\n    background-color: var(--background-color);\n}\n\n.fa-github{\n    font-size: 2rem;\n}\n\n.fa-github:hover{\n    color: var(--dark-font);\n}\n\n/* Animations */\n@keyframes fadeIn {\n    0%{\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n/* Media Queries */\n\n@media (max-width: 700px) {\n    .home,\n    .contact{\n        height: 100%;\n        width: 100%\n    }\n    .grid-layout{\n        grid-template-columns: 1fr;\n    }\n    .grid-layout img{\n        width: 50%;\n    }\n    .service-menu{\n        max-width: 50vw;\n    }\n}\n\n@media (max-width: 500px){\n    html{\n        font-size: 55.5%;\n    }\n    .home img{\n        width: 80%;\n    }\n    .service-menu{\n        max-width: 35vw;\n    }\n}\n",""]);const m=l},361:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},626:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},558:n=>{n.exports=function(n){return n[1]}},487:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},52:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},469:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},10:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},631:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},329:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},915:(n,e,t)=>{n.exports=t.p+"3d634fe12ff90a85df02.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(487),e=t.n(n),o=t(631),r=t.n(o),a=t(52),i=t.n(a),c=t(10),s=t.n(c),d=t(469),l=t.n(d),u=t(329),m=t.n(u),p=t(421),h={};function f(n){const e=document.createElement("p");return e.textContent=n,e}h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const g=function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("home");const e=document.createElement("img");return e.src="/images-vids/spa-lobby.png",e.alt="Lobby",n.appendChild(f("")),n.appendChild(f("Where relaxation and rejuvenation are our top priority")),n.appendChild(e),n.appendChild(f("Book an appointment with us today!")),n}())};function v(n,e){const t=document.createElement("div");t.classList.add("service-item");const o=document.createElement("h2");o.textContent=n;const r=document.createElement("p");r.textContent=e;const a=document.createElement("img");return a.src=`/images-vids/${n.replaceAll(" ","-").toLowerCase()}.png`,a.alt=`${n}`,t.appendChild(a),t.appendChild(o),t.appendChild(r),t}function b(){const n=document.createElement("header");n.classList.add("header");const e=document.createElement("h1");return e.classList.add("spa-name"),e.textContent="Oasis Spa",n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav"),e=document.createElement("button");e.classList.add("button-nav"),e.setAttribute("id","home-btn"),e.textContent="Home",e.addEventListener("click",(n=>{n.target.classList.contains("active")||(x(e),g())}));const t=document.createElement("button");t.classList.add("button-nav"),t.setAttribute("id","services-btn"),t.textContent="Services",t.addEventListener("click",(n=>{n.target.classList.contains("active")||(x(t),function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");return n.classList.add("service-menu"),n.appendChild(v("Swedish Massage","A relaxing massage featuring lighter flowing strokes.")),n.appendChild(v("Deep Therapy Massage","Medium to firm massage utilizing warm oil and hands-on techniques.")),n.appendChild(v("Rejuvenating Body scrub","A gentler exfoliant for sensitive and all skin types, conditions and moisturizes and helps to remove toxins.")),n.appendChild(v("Hot Stone Treatment","Relaxing massage using warm stones and hands-on techniques.")),n.appendChild(v("Signature Facial","Awaken your skin with a comprehensive facial customized for your skin type.")),n.appendChild(v("Premium Facial","Find ultimate luxury with our Premiere Facial that includes deep exfoliants.")),n}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.setAttribute("id","contact-btn"),o.textContent="Contact",o.addEventListener("click",(n=>{n.target.classList.contains("active")||(x(o),function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("contact");const e=document.createElement("p");e.textContent="📞 123 456 7890";const t=document.createElement("p");t.textContent="📍 123 Serenity Street, Miami, FL, USA";const o=document.createElement("img");return o.src="/images-vids/map.png",o.alt="Oasis Spa location",n.appendChild(e),n.appendChild(t),n.appendChild(o),n}())}())})),n.appendChild(e),n.appendChild(t),n.appendChild(o),n}()),n}function x(n){document.querySelectorAll(".button-nav").forEach((n=>{n!=this&&n.classList.remove("active")})),n.classList.add("active")}!function(){const n=document.getElementById("content");n.appendChild(b()),n.appendChild(function(){const n=document.createElement("main");return n.classList.add("main"),n.setAttribute("id","main"),n}()),n.appendChild(function(){const n=document.createElement("footer");n.classList.add("footer");const e=document.createElement("a");e.href="https://github.com/Dhary-Anne";const t=document.createElement("i");return t.classList.add("github-icon"),t.classList.add("fa-github"),e.appendChild(t),n.appendChild(e),n}()),x(document.querySelector(".button-nav")),g()}()})()})();