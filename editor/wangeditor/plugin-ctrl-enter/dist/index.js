!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@wangeditor/editor")):"function"==typeof define&&define.amd?define(["@wangeditor/editor"],t):"object"==typeof exports?exports.WangEditorPluginCtrlEnter=t(require("@wangeditor/editor")):e.WangEditorPluginCtrlEnter=t(e.wangEditor)}(self,(e=>(()=>{"use strict";var t={857:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>t});var e=o(857);const t={editorPlugin:function(t){var r=t.insertBreak,o=t;return setTimeout((function(){var t=e.DomEditor.getTextarea(o).$textArea;null!=t&&t.on("keydown",(function(e){var t=e,r=t.ctrlKey||t.metaKey;"Enter"===t.key&&r&&o.insertBreak()}))})),o.insertBreak=function(){var e=window.event;(e.ctrlKey||e.metaKey)&&r()},o}}})(),n})()));
//# sourceMappingURL=index.js.map