(()=>{var e={476:function(e,n){!function(e){"use strict";var n=function(){return(n=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function t(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,p=i.length;a<p;a++,o++)r[o]=i[a];return r}function r(e,t){var r,o,i=(r={current:0,next:function(){return++this.current}},o={},{add:function(e,n){var t=null!=n?n:r.next();return o[t]=e,t},resolve:function(e,n,t){var r=o[e];r&&(t(n)?r.resolve(n):r.reject(n),o[e]=null)}});return t((function(e){if(e.detail&&e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,r=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(n,["request_id"]);t&&i.resolve(t,r,(function(e){return!("error_type"in e)}))}})),function(t,r){return void 0===r&&(r={}),new Promise((function(o,a){var p=i.add({resolve:o,reject:a},r.request_id);e(t,n(n({},r),{request_id:p}))}))}}var o="undefined"!=typeof window,i=Boolean(o&&window.AndroidBridge),a=Boolean(o&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),p=o&&!i&&!a,u=p&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),s=p?"message":"VKWebAppEvent",d=t(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppSendToClient","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp"],p&&!u?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowSubscriptionBox","VKWebAppShowInstallPushBox","VKWebAppGetFriends"]:[]),c=o?window.AndroidBridge:void 0,l=a?window.webkit.messageHandlers:void 0;function f(e,n){var t=n||{bubbles:!1,cancelable:!1,detail:void 0},r=document.createEvent("CustomEvent");return r.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),r}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(f.prototype=Event.prototype,f));var b=function(e){var n=void 0,o=[];function u(e){o.push(e)}function f(){return a||i}function b(){return p&&window.parent!==window}function v(){return f()||b()}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(s,(function(e){if(a||i)return t(o).map((function(n){return n.call(null,e)}));if(p&&e&&e.data){var r=e.data,u=r.type,s=r.data,d=r.frameId;u&&"VKWebAppSettings"===u?n=d:t(o).map((function(e){return e({detail:{type:u,data:s}})}))}}));var m=r((function(e,t){c&&c[e]?c[e](JSON.stringify(t)):l&&l[e]&&"function"==typeof l[e].postMessage?l[e].postMessage(t):p&&parent.postMessage({handler:e,params:t,type:"vk-connect",webFrameId:n,connectVersion:"2.3.0"},"*")}),u);return{send:m,sendPromise:m,subscribe:u,unsubscribe:function(e){var n=o.indexOf(e);-1<n&&o.splice(n,1)},supports:function(e){return i?!(!c||"function"!=typeof c[e]):a?!(!l||!l[e]||"function"!=typeof l[e].postMessage):p&&-1<d.indexOf(e)},isWebView:f,isIframe:b,isEmbedded:v,isStandalone:function(){return!v()}}}();e.applyMiddleware=function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return"function"==typeof e}))):function(e){if(0===t.length)return e;var r,o={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}};return r=t.filter((function(e){return"function"==typeof e})).map((function(e){return e(o)})).reduce((function(e,n){return function(t){return e(n(t))}}))(e.send),n(n({},e),{send:r})}},e.default=b,Object.defineProperty(e,"__esModule",{value:!0})}(n)},424:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html,\nbody {\n    height: 100%;\n}\n\n#logger {\n    height: 100%;\n    width: 100%;\n}\n",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},379:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function p(e,n){for(var t={},r=[],o=0;o<e.length;o++){var p=e[o],u=n.base?p[0]+n.base:p[0],s=t[u]||0,d="".concat(u," ").concat(s);t[u]=s+1;var c=a(d),l={css:p[1],media:p[2],sourceMap:p[3]};-1!==c?(i[c].references++,i[c].updater(l)):i.push({identifier:d,updater:v(l,n),references:1}),r.push(d)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function c(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function l(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,b=0;function v(e,n){var t,r,o;if(n.singleton){var i=b++;t=f||(f=u(n)),r=c.bind(null,t,i,!1),o=c.bind(null,t,i,!0)}else t=u(n),r=l.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=p(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var u=p(e,n),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=u}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=t(379),n=t.n(e),r=t(424);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=t(476).default;document.addEventListener("DOMContentLoaded",(async()=>{if(gon.user.isAppAdmin&&(()=>{const e=document.createElement("textarea");e.setAttribute("id","logger"),document.body.append(e)})(),o.send("VKWebAppInit"),!gon.user.isAdmin)return;const e=document.querySelector("#setWidget");e&&e.addEventListener("click",(()=>{document.forms.adminForm.elements.widgetToken,alert("Ok")}))}))})()})();