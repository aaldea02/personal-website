(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,r){e.exports=r(24)},,,,,,,,function(e,t,r){},,function(e,t,r){},,function(e,t,r){},,function(e,t,r){},,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),i=r.n(o);r(14),r(16),r(18);var c=function(){return a.a.createElement("header",{className:"header-container"},a.a.createElement("h1",{className:"header-text"},"Arsen Aldea's Personal Website"),a.a.createElement("nav",{className:"header-nav"},a.a.createElement("a",{href:"#about-me",className:"nav-link"},"About Me"),a.a.createElement("a",{href:"#contact",className:"nav-link"},"Contact"),a.a.createElement("a",{href:"#projects",className:"nav-link"},"Projects")))},u=r(2),l=r(1),s=r(5);r(20);function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(_){u=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var h={};function m(){}function d(){}function p(){}var v={};u(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==t&&r.call(g,o)&&(v=g);var b=p.prototype=m.prototype=Object.create(v);function w(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(u.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),u(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(b),u(b,c,"Generator"),u(b,o,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(""),c=Object(l.a)(i,2),h=c[0],m=c[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),v=p[0],y=p[1],g=Object(n.useState)(0),b=Object(l.a)(g,2),w=b[0],E=b[1],x=Object(n.useState)(!1),j=Object(l.a)(x,2),k=j[0],O=j[1],L=function(){var e=Object(u.a)(f().mark(function e(t){return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(w<10)){e.next=21;break}return e.prev=2,e.next=5,s.a.send("service_dqt6duo","template_gmail",{from_name:r,from_email:h,message:v},"zAd5WcmGlyUqv_ozv");case 5:console.log("Email successfully sent!"),alert("Your message has been sent!"),E(w+1),console.log("Email count: ".concat(w+1)),9===w&&O(!0),o(""),m(""),y(""),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.error("Email failed to send:",e.t0),alert("There was an error sending your message. Please try again later.");case 19:e.next=22;break;case 21:alert("Sorry, you have exceeded the limit of 10 emails per day.");case 22:case"end":return e.stop()}},e,null,[[2,15]])}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:L},a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"name"},"Name:"),a.a.createElement("input",{type:"text",id:"name",value:r,onChange:function(e){return o(e.target.value)},disabled:k})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"email"},"Email:"),a.a.createElement("input",{type:"email",id:"email",value:h,onChange:function(e){return m(e.target.value)},disabled:k})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"message"},"Message:"),a.a.createElement("textarea",{id:"message",value:v,onChange:function(e){return y(e.target.value)},disabled:k})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit",disabled:k},"Send")))},m=(r(22),function(){return a.a.createElement("div",{className:"resume-container"},a.a.createElement("button",{className:"resume-button",onClick:function(){var e=document.createElement("a");e.href="https://drive.google.com/uc?export=download&id=1a7Ej2kGbIfddAJ9WO23X368WJgfeXBsT",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},"Download Resume"),a.a.createElement("div",{className:"resume-preview-container"},a.a.createElement("div",{className:"resume-preview"},a.a.createElement("iframe",{src:"https://drive.google.com/file/d/1a7Ej2kGbIfddAJ9WO23X368WJgfeXBsT/preview",allow:"autoplay"}))))});function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(_){u=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var f={};function h(){}function m(){}function p(){}var v={};u(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==t&&r.call(g,o)&&(v=g);var b=p.prototype=h.prototype=Object.create(v);function w(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(u.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=u(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),u(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(b),u(b,c,"Generator"),u(b,o,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function p(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(){var e="I am a computer science student at the University of Florida, pursuing a Bachelor's degree in Liberal Arts and Sciences. I am passionate about software development and have gained hands-on experience working as a software developer intern at PerfectServe. My internship allowed me to refine my skills in various programming languages, front-end technologies, and back-end systems while working on real-world projects.",t=Object(n.useState)(""),r=Object(l.a)(t,2),o=r[0],i=r[1];return Object(n.useEffect)(function(){var t=!1,r=function(){var e=Object(u.a)(d().mark(function e(r){var n,a,o;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=p(r),e.prev=1,o=d().mark(function e(){var r;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.value,t){e.next=4;break}return e.next=4,new Promise(function(e){return setTimeout(function(){i(function(e){return e+r}),e()},100)});case 4:case"end":return e.stop()}},e)}),n.s();case 4:if((a=n.n()).done){e.next=8;break}return e.delegateYield(o(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[1,10,13,16]])}));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=Object(u.a)(d().mark(function e(r){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<r.length)){e.next=8;break}if(t){e.next=5;break}return e.next=5,new Promise(function(e){return setTimeout(function(){i(function(e){return e.slice(0,-1)}),e()},100)});case 5:n++,e.next=1;break;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a=function(e){var t=Math.floor(Math.random()*e.length),r=String.fromCharCode(97+Math.floor(26*Math.random())).toLowerCase();return e.slice(0,t)+r+e.slice(t+1)},o=function(){var i=Object(u.a)(d().mark(function i(){var c,u,l,s,f;return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:c=e.split(" "),u=p(c),i.prev=2,u.s();case 4:if((l=u.n()).done){i.next=16;break}if(s=l.value,!(Math.random()<.2)){i.next=12;break}return f=a(s),i.next=10,r(f);case 10:return i.next=12,n(f);case 12:return i.next=14,r(s+" ");case 14:i.next=4;break;case 16:i.next=21;break;case 18:i.prev=18,i.t0=i.catch(2),u.e(i.t0);case 21:return i.prev=21,u.f(),i.finish(21);case 24:return i.next=26,r(".");case 26:return i.next=28,n(e+" .");case 28:t||o();case 29:case"end":return i.stop()}},i,null,[[2,18,21,24]])}));return function(){return i.apply(this,arguments)}}();return o(),function(){t=!0}},[]),a.a.createElement("div",null,o)},g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=(t[0],t[1],Object(n.useState)({x:0,y:0})),o=Object(l.a)(r,2),i=o[0],c=o[1],u=Object(n.useState)({x:0,y:0}),s=Object(l.a)(u,2),f=s[0],h=s[1],m=Object(n.useState)([]),d=Object(l.a)(m,2),p=d[0],v=d[1],y=Object(n.useState)(3),g=Object(l.a)(y,2),b=g[0],w=g[1],E=Object(n.useState)(0),x=Object(l.a)(E,2),j=x[0],k=x[1],O=Object(n.useState)("idle"),L=Object(l.a)(O,2),N=L[0],S=L[1],_=Object(n.useState)([]),M=Object(l.a)(_,2),P=M[0],I=M[1];Object(n.useEffect)(function(){if("playing"===N){var e=setInterval(function(){k(function(e){return e+1})},1e3);return function(){return clearInterval(e)}}},[N]);var A=function(e){var t=i.x,r=i.y;switch(e){case"up":r=Math.max(0,r-1);break;case"down":r=Math.min(9,r+1);break;case"left":t=Math.max(0,t-1);break;case"right":t=Math.min(9,t+1)}var n={x:t,y:r};c(n),p.some(function(e){return e.x===n.x&&e.y===n.y})&&(w(function(e){return e-1}),b<=1&&S("gameOver")),n.x===f.x&&n.y===f.y&&S("gameOver")},G=function(e){if("playing"===N)switch(e.key){case"w":A("up");break;case"a":A("left");break;case"s":A("down");break;case"d":A("right")}};Object(n.useEffect)(function(){return window.addEventListener("keydown",G),function(){return window.removeEventListener("keydown",G)}},[N]);var T=function(e,t){return i.x===e&&i.y===t?"@":f.x===e&&f.y===t?"E":" "};return a.a.createElement("div",{className:"minesweeper-escape"},a.a.createElement("h1",null,"MineSweeper Escape"),a.a.createElement("p",null,"Instructions: Use WASD keys to move the player (@) through the grid to reach the exit (E). Beware of hidden mines! You have 3 lives."),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",null,"Timer: ",j,"s"),a.a.createElement("div",null,"Lives: ",b),a.a.createElement("div",null,"Scores: ",P.join(", "))),"idle"===N&&a.a.createElement("button",{onClick:function(){S("playing"),k(0),w(3),I([]);for(var e=function(){return{x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())}},t=e(),r=e();t.x===r.x&&t.y===r.y;)r=e();c(t),h(r);for(var n=Math.floor(20),a=[],o=0;o<n;o++){for(var i=e();i.x===t.x&&i.y===t.y||i.x===r.x&&i.y===r.y;)i=e();a.push(i)}v(a)}},"Start Game"),a.a.createElement("div",{className:"grid-container"},function(){for(var e=[],t=0;t<10;t++){for(var r="",n=0;n<10;n++)r+=T(n,t);e.push(a.a.createElement("pre",{className:"grid-row",key:"row-".concat(t)},r))}return e}()))};var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c,null),a.a.createElement("main",null,a.a.createElement("section",{id:"about-me"},a.a.createElement("h2",null,"About Me"),a.a.createElement("div",{className:"about-me-content"},a.a.createElement("img",{src:"https://drive.google.com/uc?export=download&id=1U4Inr_HO-0hBzfYjjxtD-bXeZRYi7P2_",alt:"Your portrait",className:"portrait"}),a.a.createElement("div",{className:"about-me-text"},a.a.createElement(y,null),a.a.createElement("div",{className:"about-me-links"},a.a.createElement("a",{href:"#contact",className:"scroll-link"},"Contact"),a.a.createElement("a",{href:"#projects",className:"scroll-link"},"Projects"))))),a.a.createElement("section",{id:"contact"},a.a.createElement("h2",null,"Contact Me"),a.a.createElement("div",{className:"contact-content"},a.a.createElement(h,null),a.a.createElement("div",{className:"contact-links"},a.a.createElement("a",{href:"mailto:arsena0202@gmail.com",className:"contact-link"},"Email"),a.a.createElement("a",{href:"https://github.com/aaldea02",className:"contact-link"},"GitHub"),a.a.createElement("a",{href:"https://www.linkedin.com/in/your_username/",className:"contact-link"},"LinkedIn")),a.a.createElement("div",{className:"resume-download"},a.a.createElement(m,null)))),a.a.createElement("section",{id:"projects"},a.a.createElement("h2",null,"Personal Projects"),a.a.createElement("div",{className:"project"},a.a.createElement("h3",null,"Diamond Pathfinder"),a.a.createElement("p",null,"The Diamond Pathfinder project is a pathfinding optimization study for the popular game Minecraft, specifically focusing on its Baritone mod. I built and compared two classic pathfinding algorithms, Bellman-Ford and Dijkstra's, implemented in Java to analyze their efficiency in the game environment. By logging the results using Java and MySQL, I was able to identify the optimal choice for pathfinding in Minecraft's Baritone mod, improving in-game navigation and resource gathering. Through this project, I developed skills in Java programming, algorithm design, and data analysis using MySQL."),a.a.createElement("div",{className:"video-container"},a.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lS4vblYZpMA",title:"Diamond Pathfinder",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),a.a.createElement(g,null))),a.a.createElement("div",{className:"space"}))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))}],[[6,2,1]]]);
//# sourceMappingURL=main.32199cb0.chunk.js.map