!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({0:function(e,t){e.exports=function(){var e={},t=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),n=t.indexOf("/baseball")>-1,r=t.indexOf("/mens-basketball")>-1,o=t.indexOf("/soccer")>-1,a=t.indexOf("/womens-basketball")>-1,i=t.indexOf("/softball")>-1,c=t.indexOf("/volleyball")>-1,l=t.indexOf("/roster")>-1,u=t.indexOf("/schedule")>-1,d=t.indexOf("/stats")>-1,s="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI";function f(e){l?b("1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):u?b(s):d?n?b("1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):r?b("1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):o?b("1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):a?b("1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):i?b("1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):c&&b("1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI"):b(s)}function p(t){l||u?v(t):d?(v([]),e.includeGridData=!1):v(t+" Current")}function b(t){e.spreadsheetId=t}function v(t){e.range=t}function m(e){f(),p(e)}return m(n?"Baseball":r?"Mens Basketball":o?"Soccer":a?"Womens Basketball":i?"Softball":c?"Volleyball":"All"),e}},10:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),i=0,c=0,l=0,u=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];function d(e,t){var n=document.createElement("th");return e.appendChild(n),t+=":",n.innerHTML=t,n}function s(e,t){var n=document.createElement("td");return e.appendChild(n),n.innerHTML=t,n}function f(e,t,n){var r,o=document.createElement("td"),a="Home"==n.trim();return e.appendChild(o),r=a?"#c61f48":"#0f3b63",o.setAttribute("align","center"),o.style.cssText="color:#ffffff;background-color:"+r+";",o.innerHTML=t,o}function p(e,t){var n,o=document.createElement("tr"),a=t[6].trim();"W"==a?i+=1:"L"==a?c+=1:"T"==a&&(l+=1),r=0===l?"":" - "+l,n=""==a?"":i+" - "+c+r,t[9]=n,e.appendChild(o);for(var u=0;u<t.length;u++){var d=t[5];t[u]===t[0]?f(o,t[u],d):s(o,t[u])}return o}function b(e){var t=e.split(/\//),n=t[1],r=t[0]-1;return u[r]+" "+n}var v=function(e){var t=function(e){var t=document.createElement("table");return t.classList.add("display","table","table-striped","table-hover"),t.setAttribute("width","100%"),t.setAttribute("id","responsiveTable"),e.innerHTML="",e.appendChild(t),t}(document.getElementById("data")),n=function(e){var t=document.createElement("thead");return e.appendChild(t),t}(t),r=function(e){var t=document.createElement("tbody");return e.appendChild(t),t}(t),o=e.result.values,a=o.length,i=o[0],c=o.slice(1,a);i[9]="Record",function(e,t){var n=document.createElement("tr");e.appendChild(n);for(var r=0;r<t.length;r++)d(n,t[r])}(n,i),function(e,t){for(var n=0,r=t.length;n<r;n++){var o=t[n],a=o[0],i=o[1],c="";""===o[0]?o[0]=" ":(i&&(c=" - "+b(i)),o[0]=b(a)+c),p(e,t[n])}}(r,c)};var m=function(){var e=a()();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then((function(){gapi.client.sheets.spreadsheets.values.get(e).then((function(e){new Promise((function(t,n){v(e),t()})).then((function(){new Promise((function(e,t){$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[[1,"asc"]],columnDefs:[{visible:!1,targets:[1,8]}]}),e()})).then((function(){document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Schedule roster...")}))}))}),(function(e){console.error("Execute error",e)}))}))};document.addEventListener("DOMContentLoaded",(function(){gapi.load("client",m)}))}});