(this.webpackJsonpdogg_bredd=this.webpackJsonpdogg_bredd||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(25),o=n.n(a),i=n(52),c=n.n(i),r=(n(77),n(2)),l=n.n(r),u=n(10),s=n(7),f=n(53),d=(n(99),n(98),{initial:"initial",states:{initial:{on:{next:"loadingModel"}},loadingModel:{on:{next:"awaitingUpload"}},awaitingUpload:{on:{next:"ready"}},ready:{on:{next:"classifying"},showImage:!0},classifying:{on:{next:"complete"}},complete:{on:{next:"awaitingUpload"},showImage:!0,showResult:!0}}}),p=function(e,t){return d.states[e].on[t]||d.initial},g=function(e){var t=e.className,n=e.probability;return o.a.createElement("li",{key:t},t+":"+(100*n).toFixed(2)+"%")},m=function(){var e=Object(a.useReducer)(p,d.initial),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),r=Object(s.a)(c,2),m=r[0],h=r[1],w=Object(a.useState)(null),b=Object(s.a)(w,2),x=b[0],v=b[1],y=Object(a.useState)([]),j=Object(s.a)(y,2),O=j[0],k=j[1],E=Object(a.useRef)(),R=Object(a.useRef)(),U=function(){return i("next")},I={initial:{text:"Load Model",action:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(),e.next=3,f.a();case 3:t=e.sent,h(t),U();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},loadingModel:{text:"Loading Model ...",action:function(){}},awaitingUpload:{text:"Upload Photo",action:function(){return R.current.click()}},ready:{text:"Identify",action:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(),e.next=3,m.classify(E.current);case 3:t=e.sent,console.log({results:t}),k(t),U();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},classifying:{text:"Identifying",action:function(){}},complete:{text:"Reset",action:function(){k([]),v(null),U()}}},M=d.states[n],L=M.showImage,S=void 0!==L&&L,B=M.showResult,C=void 0!==B&&B;return o.a.createElement("div",null,S&&o.a.createElement("img",{src:x,alt:"upload-preview",ref:E}),o.a.createElement("input",{type:"file",accept:"image/*",capture:"camara",ref:R,onChange:function(e){var t=e.target.files;if(t.length>0){var n=URL.createObjectURL(t[0]);v(n),U()}}}),C&&o.a.createElement("ul",null,O.map(g)),o.a.createElement("button",{onClick:I[n].action},I[n].text))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,n){e.exports=n(100)},77:function(e,t,n){},81:function(e,t){},82:function(e,t){},93:function(e,t){},96:function(e,t){},97:function(e,t){},98:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.6ead511d.chunk.js.map