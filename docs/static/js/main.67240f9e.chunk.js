(this["webpackJsonpstravastat.github.io"]=this["webpackJsonpstravastat.github.io"]||[]).push([[0],{136:function(e,t,r){},137:function(e,t,r){},439:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(17),o=r.n(c),i=(r(136),r(6)),s=r.n(i),u=r(21),l=r(22),p=(r(137),r(132)),h=["athlete"],f=59766,d="b7893c2f78225337f8ac6852e5c2fe313948c8f7",v="SportSeasonStravaTokenData",b="SportSeasonStravaUserData";function j(){var e=new URLSearchParams({client_id:f,redirect_uri:"http://localhost:3000/",response_type:"code",approval_prompt:"auto",scope:"activity:read"});return"https://www.strava.com/oauth/authorize?".concat(e.toString())}function w(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(s.a.mark((function e(){var t,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem(v))||!t.length){e.next=20;break}if(!((r=JSON.parse(t)).expires_at&&1e3*r.expires_at>Date.now())){e.next=5;break}return e.abrupt("return",r.access_token);case 5:if(!r.refresh_token){e.next=17;break}return e.prev=6,e.next=9,fetch("https://www.strava.com/api/v3/oauth/token",{body:new URLSearchParams({client_id:f,client_secret:d,refresh_token:r.refresh_token,grant_type:"refresh_token"}).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then((function(e){return e.json()}));case 9:return n=e.sent,localStorage.setItem(v,JSON.stringify(n)),e.abrupt("return",n.access_token);case 14:throw e.prev=14,e.t0=e.catch(6),new Error(e.t0);case 17:throw new Error("no token");case 20:throw new Error("no stored token data");case 21:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}function g(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(s.a.mark((function e(t){var r,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.strava.com/api/v3/oauth/token",{body:new URLSearchParams({client_id:f,client_secret:d,code:t,grant_type:"authorization_code"}).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then((function(e){return e.json()}));case 3:return r=e.sent,console.log({result:r}),n=r.athlete,a=Object(p.a)(r,h),localStorage.setItem(b,JSON.stringify(n)),localStorage.setItem(v,JSON.stringify(a)),e.abrupt("return",r.access_token);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.prev=1,e.next=4,fetch("https://www.strava.com/oauth/deauthorize?".concat(new URLSearchParams({access_token:""}).toString()),{method:"POST"}).then((function(e){return e.json()}));case 4:return localStorage.removeItem(v),localStorage.removeItem(b),e.abrupt("return",Promise.resolve({success:!0}));case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var _=r(1),S=function(e){var t=JSON.parse(localStorage.getItem(b));return Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:t.profile_medium}),t.lastname,t.firstname]})};function y(){return(y=Object(u.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.strava.com/api/v3/athlete/activities?before=".concat(n,"&after=").concat(r,"&page=1&per_page=100"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=r(56),D=r(82),L=r(45),I=r(129),E=r.n(I);r(139);function T(e){return e>0?e>1e3?"".concat(parseFloat(e/1e3).toFixed(2),"\u202f\u043a\u043c"):"".concat(parseFloat(e).toFixed(),"\u2009\u043c"):"-"}var P=function(e){var t=e.activity,r=Date.parse(t.start_date_local)-1e3*t.utc_offset,n=new Date(r),a=new Date(r+1e3*t.elapsed_time),c=new Date(1e3*(t.moving_time-t.utc_offset));return Object(_.jsxs)("div",{children:[Object(_.jsx)("a",{href:"https://www.strava.com/activities/".concat(t.id),target:"_blank",children:t.name}),Object(_.jsx)("strong",{children:T(t.distance)}),n.toLocaleString().substr(0,17),"-",n.toLocaleDateString()!==a.toLocaleDateString()&&a.toLocaleDateString(),a.toLocaleTimeString().substr(0,5),"(\u0434\u0432\u0438\u0436: ",c.toLocaleTimeString().substr(0,5),")",Object(_.jsx)("br",{}),t.elev_high,"/",t.elev_low," ",t.average_heartrate,"/",t.max_heartrate," ",t.average_speed,"/",t.speed]})},C=new Date,F=new Date(C.getFullYear(),0,1,4,0,0,1),J=new Date(C.getFullYear(),11,31,23,59,59,999),R=function(e){var t=e.token,r=Object(n.useState)(F.toISOString().substr(0,10)),a=Object(l.a)(r,2),c=a[0],o=a[1],i=Object(n.useState)(J.toISOString().substr(0,10)),s=Object(l.a)(i,2),u=s[0],p=s[1],h=Object(n.useState)([]),f=Object(l.a)(h,2),d=f[0],v=f[1],b=Object(n.useState)(),j=Object(l.a)(b,2),w=j[0],m=j[1],g=Object(n.useState)(null),O=Object(l.a)(g,2),x=O[0],S=O[1],I=Object(n.useRef)(),C=Object(n.useRef)();Object(n.useEffect)((function(){S(null),function(e,t,r){return y.apply(this,arguments)}(t,Math.floor(Date.parse(c)/1e3),Math.floor(Date.parse(u)/1e3)).then((function(e){S(e),v(e.reduce((function(e,t){var r=t.type;return Object(D.a)(Object(D.a)({},e),{},Object(k.a)({},r,(e[r]||0)+1))}),{})),console.log(e)}))}),[c,u,t]),Object(n.useEffect)((function(){if((null===C||void 0===C?void 0:C.current)&&!(null===I||void 0===I?void 0:I.current)){I.current=L.map(C.current,{fullscreenControl:!0}).setView([53.20066,45.00464],12),L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',maxZoom:20,id:"osm"}).addTo(I.current);var e=[];x.forEach((function(t){var r=t.map.summary_polyline;if(null===r||void 0===r?void 0:r.length){var n=E.a.decode(r);L.polyline(n).setStyle({color:"rgba(255, 255, 255,0.5)"}).addTo(I.current),e.push(n)}}));var t=L.latLngBounds(e);(null===e||void 0===e?void 0:e.length)&&I.current.fitBounds(t)}}),[C.current,x]);var R=x&&x.filter((function(e){return!w||e.type===w})).reduce((function(e,t){return{distance:e.distance+t.distance,elev_high:e.elev_high+t.elev_high||0,elev_low:e.elev_low+t.elev_low||0,elapsed_time:e.elapsed_time+t.elapsed_time,moving_time:e.moving_time+t.moving_time}}),{distance:0,elev_high:0,elev_low:0,elapsed_time:0,moving_time:0});return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{type:"date",value:c,onChange:function(e){return o(e.target.value)}}),"-",Object(_.jsx)("input",{type:"date",value:u,max:J.toISOString().substr(0,10),onChange:function(e){return p(e.target.value)}}),Object(_.jsxs)("select",{onChange:function(e){return m(e.target.value)},value:w,children:[Object(_.jsx)("option",{value:"",children:"\u0412\u0441\u0435 \u0432\u0438\u0434\u044b \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439"}),d&&Object.entries(d).map((function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1];return Object(_.jsxs)("option",{value:r,children:[r," (",n,")"]},r)}))]}),Object(_.jsx)("hr",{}),R&&Object(_.jsxs)("h3",{children:[T(R.distance),", \u2b67",T(R.elev_high),", \u2b68",T(R.elev_low),", ",(R.moving_time/60/60).toFixed(2)," \u0447.\u044b"]}),Object(_.jsx)("hr",{}),!x&&"loading...",x&&Object(_.jsx)("div",{ref:C,style:{height:"300px"}}),Object(_.jsx)("ul",{children:x&&x.filter((function(e){return!w||e.type===w})).map((function(e){return Object(_.jsx)(P,{activity:e},e.id)}))})]})};var N=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("code");if(null===e||void 0===e?void 0:e.length)return function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:window.location.href=window.location.href.replace(window.location.search,""),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),window.location.href=j();case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}()();(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(_.jsxs)("div",{className:"App",children:[r&&Object(_.jsxs)("header",{children:[Object(_.jsx)(S,{}),Object(_.jsx)("button",{onClick:function(){return function(){return x.apply(this,arguments)}().then((function(){return window.location.reload()}))},children:"\u0412\u044b\u0439\u0442\u0438"})]}),!r&&Object(_.jsx)("button",{onClick:function(){return window.location.href=j()},children:"\u0412\u043e\u0439\u0442\u0438"}),r&&Object(_.jsx)(R,{token:r})]})};o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(N,{})}),document.getElementById("root"))}},[[439,1,2]]]);
//# sourceMappingURL=main.67240f9e.chunk.js.map