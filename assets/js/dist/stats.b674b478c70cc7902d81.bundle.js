!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({0:function(e,t){e.exports=function(){var e={},t=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),n=t.indexOf("/baseball")>-1,r=t.indexOf("/mens-basketball")>-1,o=t.indexOf("/soccer")>-1,a=t.indexOf("/womens-basketball")>-1,i=t.indexOf("/softball")>-1,c=t.indexOf("/volleyball")>-1,l=t.indexOf("/roster")>-1,u=t.indexOf("/schedule")>-1,s=t.indexOf("/stats")>-1,p="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",f="1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw",d="1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os",b="1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI",h="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",v="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",y="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",g="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8";function m(e){l?O(f):u?O(p):s?n?O(d):r?O(b):o?O(h):a?O(g):i?O(v):c&&O(y):O(p)}function x(t){l||u?w(t):s?(w([]),e.includeGridData=!1):w(t+" Current")}function O(t){e.spreadsheetId=t}function w(t){e.range=t}function A(e){m(),x(e)}return A(n?"Baseball":r?"Mens Basketball":o?"Soccer":a?"Womens Basketball":i?"Softball":c?"Volleyball":"All"),e}},4:function(e,t){e.exports=function(e){var t,n={},r=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),o=r.indexOf("/baseball")>-1,a=r.indexOf("/mens-basketball")>-1,i=r.indexOf("/soccer")>-1,c=r.indexOf("/womens-basketball")>-1,l=r.indexOf("/softball")>-1,u=r.indexOf("/volleyball")>-1,s=(r.indexOf("/stats"),"1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"),p="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",f="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",d="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",b="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8";function h(e){n.spreadsheetId=e}return t=e,o?h("1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):a?h(s):i?h(p):c?h(b):l?h(f):u&&h(d),function(e){n.ranges=e}(t),n}},8:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a);function c(e,t,n,r,o){return n=n.replace(r,""),t.setAttribute("colspan",o),t.classList.add("table__red-category"),e.appendChild(t),t.innerHTML=n,t}function l(e,t){var n=-1!=(t=t.trim()).search(/^\*\*[^\d\w]\*?\*?/g),r=document.createElement("td");return n?function(e,t,n){var r={"^\\*\\*\\s":"2","^\\*\\*\\*\\s":"3","^\\*\\*\\*\\*\\s":"4","^\\*\\*\\*\\*\\*\\s":"5"};for(var o in r)if(r.hasOwnProperty(o)){var a=new RegExp(o,"g");a.test(n)&&c(e,t,n,a,r[o])}}(e,r,t):function(e,t,n){-1!=n.search(/^__(.+)__$/g)&&(t.classList.add("table__highlighted-cell"),n=n.replace(/^__|__$/g,"")),e.appendChild(t),t.innerHTML=n}(e,r,t),r}function u(e,t){var n=document.createElement("tr");t.appendChild(n);for(var r=0;r<e.length;r++)l(n,e[r]);return t}var s=function(e,t,n,r){var o,a=null!==r;o=a?function(e){var t=document.createElement("div");return t.innerHTML=e,t}(r):null,a&&e.appendChild(o);for(var i=function(e){var t=document.createElement("table"),n=document.createElement("tbody"),r=document.createElement("a");return r.setAttribute("href","#page-top"),r.innerHTML="Back to top",t.classList.add("table","table-striped","table-hover"),t.setAttribute("width","100%"),t.setAttribute("id","responsiveTable"),t.appendChild(n),e.appendChild(t),e.appendChild(r),n}(e),c=0;c<t.length;c++)u(t[c],i);return e};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){f=function(e,t){return new a(e,t)};var n=d(RegExp),r=RegExp.prototype,o=new WeakMap;function a(e,t){var r=n.call(this,e);return o.set(r,t),r}function i(e,t){var n=o.get(t);return Object.keys(n).reduce(function(t,r){return t[r]=e[n[r]],t},Object.create(null))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,n),a.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=i(t,this)),t},a.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var n=o.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,t){return"$"+n[t]}))}if("function"==typeof t){var a=this;return r[Symbol.replace].call(this,e,function(){var e=[];return e.push.apply(e,arguments),"object"!==p(e[e.length-1])&&e.push(i(e,a)),t.apply(this,e)})}return r[Symbol.replace].call(this,e,t)},f.apply(this,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return b(e,arguments,v(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,e)})(e)}function b(e,t,n){return(b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&h(o,n.prototype),o}).apply(null,arguments)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){switch(t){case"h3":return e.replace(n,'<h3 class="blue-heading mt-4 mb-3">$<text></h3>');case"p":return e.replace(n,"<p>$<text></p>");case"li":return e.replace(n,"<li>$<text></li>");case"ul":return e.replace(n,"<ul>");case"/ul":return e.replace(n,"</ul>")}}var g=function(e){var t=e.toString(),n=f(/\*\*(.+)\*\*/gm,{text:1}),r=[/^<<<.*|^>>>.*/gm,/^$/gm],o={h3:f(/^##\s(.+)/gm,{text:1}),p:f(/^([^-{<#>\s].+)/gm,{text:1}),li:f(/^-\s(.+)/gm,{text:1}),ul:/{:list}/gm,"/ul":/{:!list}/gm};for(var a in o)o.hasOwnProperty(a)&&(t=y(t,a,o[a]));t=t.replace(n,"<strong>$<text></strong>");for(var i=0;i<r.length;i++)t=t.replace(r[i],"");return t};function m(e,t){var n=document.createElement("div"),r=document.createElement("h2"),o=e.toLowerCase().replace(/\s|\//g,"-"),a=o+"-tab",i=0==t;return r.classList.add("main-heading","typography__main-heading--margin-top","text-center"),r.innerHTML=e,i&&n.classList.add("show","active"),n.classList.add("tab-pane","fade"),n.setAttribute("id",o),n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",a),n.appendChild(r),n}function x(e,t,n){var r,o=e.toLowerCase().replace(/\s|\//g,"-"),a=o+"-tab",i=document.createElement("li"),c=document.createElement("a"),l=0==n;return i.classList.add("nav-tabs"),c.classList.add("nav-link"),l?(r="true",c.classList.add("active")):r="false",c.setAttribute("href","#"+o),c.setAttribute("data-toggle","tab"),c.setAttribute("aria-selected",r),c.setAttribute("id",a),c.setAttribute("role","tab"),c.setAttribute("aria-controls",o),c.innerHTML=e,i.appendChild(c),t.appendChild(i),t}function O(e,t,n,r){e.innerHTML="",e.appendChild(t),n.appendChild(r),e.appendChild(n)}var w=function(e){for(var t=e.result.valueRanges,n=document.getElementById("data"),r=function(){var e=document.createElement("ul");return e.classList.add("nav","nav-tabs"),e.setAttribute("id","statisticTabs"),e.setAttribute("role","tablist"),e}(),o=function(){var e=document.createElement("div");return e.classList.add("tab-content"),e.setAttribute("id","statisticTabContent"),e}(),a=0;a<t.length;a++){var i=t[a],c=i.range.match(/^'.+'!/g).toString().replace(/'|!/g,""),l=i.values,u=void 0,p=null,f=l[0].toString(),d=l.length;-1!==f.search(/^>>>/g)?(u=l.splice(1,d),p=l.splice(0,1)):u=l,null!==p&&(p=g(p));var b=x(c,r,a),h=m(c,a);O(n,b,o,s(h,u,c,p))}};var A=function(){var e=o()();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then(function(){gapi.client.sheets.spreadsheets.get(e).then(function(e){new Promise(function(t,n){for(var r=[],o=e.result.sheets,a=0;a<o.length;a++){var c=o[a].properties.title;r.push(c)}var l=i()(r);return gapi.client.sheets.spreadsheets.values.batchGet(l).then(function(e){w(e)},function(e){console.error("Execute error",e)})}).then(function(){new Promise(function(e,t){$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[[1,"asc"]]}),e()}).then(function(){document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search roster...")})})},function(e){console.error("Execute error",e)})})};document.addEventListener("DOMContentLoaded",function(){gapi.load("client",A)})}});