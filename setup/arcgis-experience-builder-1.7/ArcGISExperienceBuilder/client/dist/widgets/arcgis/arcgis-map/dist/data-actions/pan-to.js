System.register(["jimu-core","jimu-arcgis"],(function(t,e){var r={},n={};return{setters:[function(t){r.AbstractDataAction=t.AbstractDataAction,r.MutableStoreManager=t.MutableStoreManager},function(t){n.loadArcGISJSAPIModules=t.loadArcGISJSAPIModules}],execute:function(){t((()=>{"use strict";var t={26826:t=>{t.exports=n},48891:t=>{t.exports=r}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,o),a.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>n});var t=o(48891),e=o(26826),r=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function u(t){try{c(n.next(t))}catch(t){a(t)}}function i(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,i)}c((n=n.apply(t,e||[])).next())}))};class n extends t.AbstractDataAction{isSupported(t,e){return r(this,void 0,void 0,(function*(){return e.length>0&&e.some((t=>{var e;return null===(e=t.feature)||void 0===e?void 0:e.geometry}))}))}onExecute(n,o){return r(this,void 0,void 0,(function*(){return(0,e.loadArcGISJSAPIModules)(["esri/Graphic"]).then((e=>{let r=null;[r]=e;const n={features:o.map((t=>{var e;return null===(e=function(t,e){let r=null;return t.clone?r=t.clone():(r=e.fromJSON(Object.assign({},t)),r.attributes=Object.assign({},t.attributes)),r}(t.feature,r))||void 0===e?void 0:e.geometry}))};return t.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",n),!0}))}))}}})(),a})())}}}));