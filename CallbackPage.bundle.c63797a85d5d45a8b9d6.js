(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1044:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(75),a=r(1),u=r.n(a),c=r(82);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,h,m,w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o.a.createElement(c.CallbackComponent,{userManager:this.props.userManager,successCallback:function(){var t=JSON.parse(sessionStorage.getItem("ohif-redirect-to")),r=t.pathname,n=t.search,o=void 0===n?"":n;e.props.history.push({pathname:r,search:o})},errorCallback:function(e){throw new Error(e)}},o.a.createElement("div",null,"Redirecting..."))}}])&&p(r.prototype,n),i&&p(r,i),t}(n.Component);y=w,h="propTypes",m={userManager:u.a.object.isRequired,history:u.a.object.isRequired},h in y?Object.defineProperty(y,h,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[h]=m,t.default=Object(i.g)(w)}}]);
//# sourceMappingURL=CallbackPage.bundle.c63797a85d5d45a8b9d6.js.map