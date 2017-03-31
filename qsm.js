"use strict";var add=function(e,r){var t,n=e.split("?");if(n.length>=2){t=e;for(var l=0;l<r.length;l++)t+=_add(e,r[l],!0)}else{t=e;for(var l=0;l<r.length;l++)t+=0===l?_add(e,r[l],!1):_add(e,r[l],!0)}return t},_add=function(e,r,t){var n="";return n+=t?"&"+r.query+"="+r.value:"?"+r.query+"="+r.value},clear=function(e){var r=e.split("?");return r.length>=2?r[0]:e},exist=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",l=t[1].split(/[&;]/g),a=!1,i=l.length;i-- >0;)l[i].lastIndexOf(n,0)!==-1&&(a=!0);return!!a}return!1},extract=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=[],l=t[1].split(/[&;]/g),a=0;a<l.length;a++){var i=l[a].split("=")[1];if(l[a].split("=")[1].includes(",")){for(var p=[],s=l[a].split("=")[1].split(","),u=0;u<s.length;u++)p.push(parseInt(s[u])?parseInt(s[u]):s[u]);i=p}"plain"===r?n.push(parseInt(i)?parseInt(i):i):Array.isArray(i)?n.push({query:l[a].split("=")[0],value:i}):n.push({query:l[a].split("=")[0],value:parseInt(i)?parseInt(i):i})}return n}return null},get=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",l=t[1].split(/[&;]/g),a=null,i=l.length;i-- >0;)l[i].lastIndexOf(n,0)!==-1&&(a=l[i].split("=")[1]);return a}return null},_parseValue=function e(r){if(r.indexOf(",")!==-1){for(var t=[],n=r.split(","),l=n.length;l-- >0;)t[l]=e(n[l]);return t}return"true"===r||"false"!==r&&(isNaN(parseFloat(r))?r:parseFloat(r))},objectify=function(e){var r={},t=e.split("?");if(t.length>=2)for(var n=t[1].split(/[&;]/g),l=n.length;l-- >0;){var a=n[l].split(/=(.+)/);a[1]?r[a[0]]=_parseValue(a[1]):r[a[0]]=null}return r},remove=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",l=t[1].split(/[&;]/g),a=l.length;a-- >0;)l[a].lastIndexOf(n,0)!==-1&&l.splice(a,1);return e=l.length>0?t[0]+"?"+l.join("&"):t[0]}return e},replace=function(e,r){var t=clear(e);return add(t,r)},replaceSpecific=function(e,r,t){var e=remove(e,t),n=add(e,r);return n};module.exports={remove:remove,add:add,clear:clear,replace:replace,replaceSpecific:replaceSpecific,get:get,exist:exist,extract:extract,objectify:objectify};