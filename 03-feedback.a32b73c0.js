!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,d=c||v||Function("return this")(),s=Object.prototype.toString,y=Math.max,m=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,v=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function h(e){return c=e,f=setTimeout(w,t),v?b(e):u}function N(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=g();if(N(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function S(e){return f=void 0,s&&r?b(e):(r=i=void 0,u)}function j(){var e=g(),n=N(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=T(t)||0,p(n)&&(v=!!n.leading,a=(d="maxWait"in n)?y(T(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},j.flush=function(){return void 0===f?u:S(g())},j}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),N="feedback-form-state";var w=e(t)((function(){var e={},t=!0,n=!1,r=void 0;try{for(var o,i=h.elements[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;"INPUT"!==a.tagName&&"TEXTAREA"!==a.tagName||(e[a.name]=a.value)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}localStorage.setItem(N,JSON.stringify(e))}),500);h.addEventListener("input",w),h.addEventListener("submit",(function(e){e.preventDefault();var t={},n=!0,r=!1,o=void 0;try{for(var i,a=h.elements[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;"INPUT"!==u.tagName&&"TEXTAREA"!==u.tagName||(t[u.name]=u.value)}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}console.log(t),localStorage.removeItem(N),h.reset()})),function(){var e=JSON.parse(localStorage.getItem(N));if(e){var t=!0,n=!1,r=void 0;try{for(var o,i=h.elements[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;"INPUT"!==a.tagName&&"TEXTAREA"!==a.tagName||(a.value=e[a.name]||"")}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}}()}();
//# sourceMappingURL=03-feedback.a32b73c0.js.map
