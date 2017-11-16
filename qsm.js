"use strict";var add=function(e,r){var t=e,n=e.split("?");if(r.constructor===Object){var a=sort(r);for(var l in a)a.hasOwnProperty(l)&&(exist(t,l)?t=replaceSpecific(e,a,l):t+=_add(e,a[l],l,t.indexOf("?")<=0))}else if(console.warn("You are using a feature of QSM 2.0 that will get deprecated in next major release. Please use the object variant instead. More info at https://npmjs.com/package/qsm"),n.length>=2)for(var i=0;i<r.length;i++)t+=_add(e,r[i],null,!1);else for(var i=0;i<r.length;i++)t+=_add(e,r[i],null,i<1);return t},_add=function(e,r,t,n){return t?n?"?"+t+"="+r:"&"+t+"="+r:n?"?"+r.query+"="+r.value:"&"+r.query+"="+r.value},clear=function(e){var r=e.split("?");return r.length>=2?r[0]:e},decode=function(e,r){var t=r;r||(t="q");var n=get(e,t),a=new Buffer(n,"base64").toString();try{return JSON.parse(a)}catch(e){return a}},encode=function(e,r,t){var n=JSON.stringify(r),a=new Buffer(n).toString("base64");if(t){var l={};return l[t]=a,add(e,l)}return add(e,{q:a})},exist=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",a=t[1].split(/[&;]/g),l=!1,i=a.length;i-- >0;)a[i].lastIndexOf(n,0)!==-1&&(l=!0);return!!l}return!1},extract=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=[],a=t[1].split(/[&;]/g),l=0;l<a.length;l++){var i=a[l].split("=")[1];if(a[l].split("=")[1].indexOf(",")>=0){for(var o=[],s=a[l].split("=")[1].split(","),u=0;u<s.length;u++)o.push(parseInt(s[u])?parseInt(s[u]):s[u]);i=o}"plain"===r?n.push(parseInt(i)?parseInt(i):i):Array.isArray(i)?n.push({query:a[l].split("=")[0],value:i}):n.push({query:a[l].split("=")[0],value:parseInt(i)?parseInt(i):i})}return n}return null},get=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",a=t[1].split(/[&;]/g),l=null,i=a.length;i-- >0;)a[i].lastIndexOf(n,0)!==-1&&(l=a[i].split("=")[1]);return l}return null},_parseValue=function e(r){if(r.indexOf(",")!==-1){for(var t=[],n=r.split(","),a=n.length;a-- >0;)t[a]=e(n[a]);return t}return"true"===r||"false"!==r&&(isNaN(parseFloat(r))?r:parseFloat(r))},objectify=function(e){var r={},t=e.split("?");if(t.length>=2)for(var n=t[1].split(/[&;]/g),a=n.length;a-- >0;){var l=n[a].split(/=(.+)/);l[1]?r[l[0]]=_parseValue(l[1]):r[l[0]]=null}return r},remove=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",a=t[1].split(/[&;]/g),l=a.length;l-- >0;)a[l].lastIndexOf(n,0)!==-1&&a.splice(l,1);return a.length>0?t[0]+"?"+a.join("&"):t[0]}return e},replace=function(e,r){var t=clear(e);return add(t,r)},replaceSpecific=function(e,r,t){var e=remove(e,t),n=add(e,r);return n},sort=function(e){var r={},t=Object.keys(e),n=t.sort(function(e,r){return e>r?1:e<r?-1:0});return n.forEach(function(t){r[t]=e[t]}),r};module.exports={remove:remove,add:add,clear:clear,replace:replace,replaceSpecific:replaceSpecific,get:get,exist:exist,extract:extract,objectify:objectify,encode:encode,decode:decode};