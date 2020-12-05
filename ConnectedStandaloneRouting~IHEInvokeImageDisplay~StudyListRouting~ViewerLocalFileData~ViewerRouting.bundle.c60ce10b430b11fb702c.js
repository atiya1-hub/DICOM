(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1008:function(e,t,r){},1009:function(e,t,r){},1010:function(e,t,r){},1011:function(e,t,r){},1012:function(e,t,r){},991:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(75),c=r(33),s=r(1),l=r.n(s),i=r(17),u=r.n(i),f=r(15),m=["ctrl","alt","shift"],p={"":[],alt:["space"],shift:[],ctrl:["f4","f5","f11","w","r","t","o","p","a","d","f","g","h","j","l","z","x","c","v","b","n","pagedown","pageup"],"ctrl+shift":["q","w","r","t","p","a","h","v","b","n"]},y=function(e){return e.join("+")},d="It's not possible to define only modifier keys (ctrl, alt and shift) as a shortcut",v="Field can't be empty.",b=[function(e){var t=e.pressedKeys;if(!(void 0===t?[]:t).length)return{hasError:!0,errorMessage:v}},function(e){var t=e.pressedKeys,r=t[t.length-1];if(m.includes(r))return{hasError:!0,errorMessage:d}},function(e){var t=e.commandName,r=e.pressedKeys,n=function(e,t,r){var n=void 0,a=y(r);for(var o in e){var c=e[o].keys;if(a===y(c)&&o!==t){n=e[o];break}}return n}(e.hotkeys,t,r);if(n)return{hasError:!0,errorMessage:'"'.concat(n.label,'" is already using the "').concat(r,'" shortcut.')}},function(e){var t=e.pressedKeys,r=void 0===t?[]:t,n=r[r.length-1],a=y(r.slice(0,r.length-1)),o=p[a];if(!!o&&o.includes(n))return{hasError:!0,errorMessage:'"'.concat(y(r),'" shortcut combination is not allowed')}}],h=r(256);r(1008);function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){return{hotkeys:j({},e),errors:{}}},P=function(e){var t=e.commandName,r=e.pressedKeys,n=e.hotkeys,a=!0,o=!1,c=void 0;try{for(var s,l=b[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var i=(0,s.value)({commandName:t,pressedKeys:r,hotkeys:n});if(i&&i.hasError)return i}}catch(e){o=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw c}}return{errorMessage:void 0}},N=function(e){var t=[],r=Object.entries(e);if(r.length){var n=Math.ceil(r.length/2);t.push(r.slice(0,n)),t.push(r.slice(n,r.length))}return t};function S(e){var t=e.onClose,r=Object(c.c)("UserPreferencesModal").t,o=h.d.hotkeyDefaults,s=h.d.hotkeyDefinitions,l=w(Object(n.useState)(k(s)),2),i=l[0],p=l[1],y=Object(f.M)(),d=Object.keys(i.errors).some((function(e){return!!i.errors[e]})),v=Object.keys(i.hotkeys).length,b=N(i.hotkeys);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"HotkeysPreferences"},v?a.a.createElement("div",{className:"hotkeyTable"},b.map((function(e,t){return a.a.createElement("div",{className:"hotkeyColumn",key:t},a.a.createElement("div",{className:"hotkeyHeader"},a.a.createElement("div",{className:"headerItemText text-right"},"Function"),a.a.createElement("div",{className:"headerItemText text-center"},"Shortcut")),e.map((function(e){var t=e[0],r=e[1],n=r.keys,o=r.label,c=i.errors[e[0]];return a.a.createElement("div",{key:t,className:"hotkeyRow"},a.a.createElement("div",{className:"hotkeyLabel"},o),a.a.createElement("div",{"data-key":"defaultTool",className:u()("wrapperHotkeyInput",c?"stateError":"")},a.a.createElement(f.h,{keys:n,modifier_keys:m,handleChange:function(e){!function(e,t,r){var n=P({commandName:e,pressedKeys:r,hotkeys:i.hotkeys}).errorMessage;p((function(a){return{hotkeys:j({},a.hotkeys,E({},e,j({},t,{keys:r}))),errors:j({},a.errors,E({},e,n))}}))}(t,r,e)},classNames:"preferencesInput"}),a.a.createElement("span",{className:"preferencesInputErrorMessage"},c)))})))}))):"Hotkeys definitions is empty"),a.a.createElement(f.B,{onResetPreferences:function(){var e={};o.map((function(t){var r=t.commandName,n=g(t,["commandName"]);e[r]=j({},n)})),p(k(e))},onSave:function(){var e=i.hotkeys;h.d.setHotkeys(e),localStorage.setItem("hotkey-definitions",JSON.stringify(e)),t(),y.show({message:r("SaveMessage"),type:"success"})},onCancel:t,hasErrors:d,t:r}))}S.propTypes={onClose:l.a.func};var C=r(58),M=r(244);r(1009);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(r,!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=M.a.actions;function D(e){var t=e.onClose,r=Object(C.c)(),o=Object(C.d)((function(e){var t=e.preferences;return(void 0===t?{}:t).windowLevelData})),s=x(Object(n.useState)({values:A({},o)}),2),l=s[0],i=s[1],u=Object(c.c)("UserPreferencesModal").t,m=Object(f.M)(),p=function(e){var t=e.target,r=t.dataset,n=r.key,a=r.inputname,o=t.value;l.values[n]&&l.values[n][a]&&i((function(e){return A({},e,{values:A({},e.values,I({},n,A({},e.values[n],I({},a,o))))})}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"WindowLevelPreferences"},a.a.createElement("div",{className:"wlColumn"},a.a.createElement("div",{className:"wlRow header"},a.a.createElement("div",{className:"wlColumn preset"},"Preset"),a.a.createElement("div",{className:"wlColumn description"},"Description"),a.a.createElement("div",{className:"wlColumn window"},"Window"),a.a.createElement("div",{className:"wlColumn level"},"Level")),Object.keys(l.values).map((function(e,t){return a.a.createElement("div",{className:"wlRow",key:e},a.a.createElement("div",{className:"wlColumn preset"},e),a.a.createElement("div",{className:"wlColumn description"},a.a.createElement("input",{type:"text",className:"preferencesInput",value:l.values[e].description,"data-key":e,"data-inputname":"description",onChange:p})),a.a.createElement("div",{className:"wlColumn window"},a.a.createElement("input",{type:"number",className:"preferencesInput",value:l.values[e].window,"data-key":e,"data-inputname":"window",onChange:p})),a.a.createElement("div",{className:"wlColumn level"},a.a.createElement("input",{type:"number",className:"preferencesInput",value:l.values[e].level,"data-key":e,"data-inputname":"level",onChange:p})))})))),a.a.createElement(f.B,{onResetPreferences:function(){},onSave:function(){r(T.setUserPreferences({windowLevelData:l.values})),t(),m.show({message:u("SaveMessage"),type:"success"})},onCancel:t,hasErrors:!1,t:u}))}D.propTypes={onClose:l.a.func};var R=r(110);r(1010);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(e){var t=e.onClose,r=Object(c.c)("UserPreferencesModal").t,o=Object(f.M)(),s=R.a.language,l=R.a.availableLanguages,i=F(Object(n.useState)(s),2),u=i[0],m=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"GeneralPreferences"},a.a.createElement("div",{className:"language"},a.a.createElement("label",{htmlFor:"language-select",className:"languageLabel"},"Language"),a.a.createElement(f.j,{language:u,onLanguageChange:m,languages:l}))),a.a.createElement(f.B,{onResetPreferences:function(){m(R.a.defaultLanguage)},onSave:function(){R.a.changeLanguage(u),t(),o.show({message:r("SaveMessage"),type:"success"})},onCancel:t,hasErrors:!1,t:r}))}H.propTypes={onClose:l.a.func};r(1011);var K=[{name:"Hotkeys",Component:S,customProps:{}},{name:"General",Component:H,customProps:{}},{name:"Window Level",Component:D,customProps:{}}];function U(e){var t={onClose:e.hide};return a.a.createElement(f.A,{tabs:K,customProps:t})}U.propTypes={hide:l.a.func};var q=r(496);r(1012);function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function J(e){var t=e.t,r=e.user,o=e.userManager,c=e.modal.show,s=(e.useLargeLogo,e.linkPath,e.linkText,e.location,e.children,B(Object(n.useState)([]),2)),l=(s[0],s[1]);return Object(n.useEffect)((function(){var e=[{title:t("About"),icon:{name:"info"},onClick:function(){return c({content:f.a,title:t("OHIF Viewer - About")})}},{title:t("Preferences"),icon:{name:"user"},onClick:function(){return c({content:U,title:t("User Preferences")})}}];r&&o&&e.push({title:t("Logout"),icon:{name:"power-off"},onClick:function(){return o.signoutRedirect()}}),l(e)}),[l,c,t,r,o]),a.a.createElement(a.a.Fragment,null)}J.propTypes={linkText:l.a.string,linkPath:l.a.string,useLargeLogo:l.a.bool,location:l.a.object.isRequired,children:l.a.node,t:l.a.func.isRequired,userManager:l.a.object,user:l.a.object,modal:l.a.object},J.defaultProps={useLargeLogo:!1,children:Object(q.a)()};var W=Object(c.d)(["Header","AboutModal"])(Object(o.g)(Object(f.O)(J))),G=Object(C.b)((function(e){return{user:e.oidc&&e.oidc.user}}))(W);t.a=G}}]);
//# sourceMappingURL=ConnectedStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~ViewerLocalFileData~ViewerRouting.bundle.c60ce10b430b11fb702c.js.map