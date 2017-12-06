"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/runewars-list-builder/index.html","c9ffba18aae0cd1ef20bf4e51a238486"],["/runewars-list-builder/static/css/main.aa7dd109.css","a582339a93b389219ff74eb21e88485b"],["/runewars-list-builder/static/js/main.f7759461.js","fde4d6ecb1b80adf4c5907fd355a2fa7"],["/runewars-list-builder/static/media/aliana_of_summersong.322d06f3.png","322d06f3ad62ceadf4736ad8280dedeb"],["/runewars-list-builder/static/media/ankaur_maro.b74c57bb.png","b74c57bb8fcb13a09f059f97c9e8e2b2"],["/runewars-list-builder/static/media/ardus_ixerebus.6889f503.png","6889f5034a4fa3722982dc493231e999"],["/runewars-list-builder/static/media/aymhelin_scions.71b5a158.png","71b5a158df7b9cb347b2233d38014608"],["/runewars-list-builder/static/media/berserkers.3bc65c8f.png","3bc65c8ff3038fbc7d57534f60c58d02"],["/runewars-list-builder/static/media/carrion_lancers.3697201f.png","3697201fa8f853ec6bbef6dec9a2f22b"],["/runewars-list-builder/static/media/death_knights.f35d05f9.png","f35d05f9c8005d12ce85c24ec53a4681"],["/runewars-list-builder/static/media/deepwood_archers.08915392.png","08915392ba5f8a22e2715ddf340b0632"],["/runewars-list-builder/static/media/flesh_rippers.ca28eb48.png","ca28eb48ce383fa817e0ac020c41c55b"],["/runewars-list-builder/static/media/heavy_crossbowmen.f6c7d493.png","f6c7d4936483361f7f12fcc0a6ad4153"],["/runewars-list-builder/static/media/kari_wraithstalker.12c7a877.png","12c7a877a2b4a01c8c1ca30f6c51e5a3"],["/runewars-list-builder/static/media/kethra_alaak.86a03941.png","86a03941a410ebbc7c4aebdb989508ee"],["/runewars-list-builder/static/media/leonx_riders.6e96c933.png","6e96c933455edb01cceb91df1dfc76a4"],["/runewars-list-builder/static/media/lord_hawthorne.26c99ebe.png","26c99ebe051496728d419165ecab9350"],["/runewars-list-builder/static/media/maegan_cyndewin.e1d30c4b.png","e1d30c4b6a854988562009aaa9dd610a"],["/runewars-list-builder/static/media/oathsworn_cavalry.4b24ad35.png","4b24ad354a80e24c5b9acfca8fc0c781"],["/runewars-list-builder/static/media/ravos_the_everhungry.4e9cf983.png","4e9cf983aa3ff9bf64f464f9e9f65e8f"],["/runewars-list-builder/static/media/reanimate_archers.fbb93b6f.png","fbb93b6fab21bb3bf1bda93ee7c14fcd"],["/runewars-list-builder/static/media/reanimates.46ecef85.png","46ecef850e3253dad95d5c19c692918d"],["/runewars-list-builder/static/media/rune_golems.0b62b4b0.png","0b62b4b099e65a2219e1877ac63c68f4"],["/runewars-list-builder/static/media/spearmen.8eb7f51d.png","8eb7f51da94301c7dff4b968ce57480a"],["/runewars-list-builder/static/media/spined_threshers.0c198d80.png","0c198d800a41136b1f0cc2705bd46015"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=a),r.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,r,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var r=new URL(a).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,a){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],r=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,r,/\.\w{8}\./);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!a.has(r)){var t=new Request(r,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+r+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(r,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!a.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),a=urlsToCacheKeys.has(r));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/runewars-list-builder/index.html",self.location).toString(),a=urlsToCacheKeys.has(r)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});