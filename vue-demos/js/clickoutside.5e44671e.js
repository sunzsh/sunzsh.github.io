(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["clickoutside"],{"3d49":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("span",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.close,expression:"close"}]},[e._v("test")])])},i=[],c=n("2b0e"),s=n("526f");const d=[],a="@@clickoutsideContext";let r,l=0;function u(e,t,n){return function(o={},i={}){!(n&&n.context&&o.target&&i.target)||e.contains(o.target)||e.contains(i.target)||e===o.target||n.context.popperElm&&(n.context.popperElm.contains(o.target)||n.context.popperElm.contains(i.target))||(t.expression&&e[a].methodName&&n.context[e[a].methodName]?n.context[e[a].methodName]():e[a].bindingFn&&e[a].bindingFn())}}!c["default"].prototype.$isServer&&Object(s["e"])(document,"mousedown",e=>r=e),!c["default"].prototype.$isServer&&Object(s["e"])(document,"mouseup",e=>{d.forEach(t=>t[a].documentHandler(e,r))});var p={bind(e,t,n){d.push(e);const o=l++;e[a]={id:o,documentHandler:u(e,t,n),methodName:t.expression,bindingFn:t.value}},update(e,t,n){e[a].documentHandler=u(e,t,n),e[a].methodName=t.expression,e[a].bindingFn=t.value},unbind(e){let t=d.length;for(let n=0;n<t;n++)if(d[n][a].id===e[a].id){d.splice(n,1);break}delete e[a]}},m={directives:{Clickoutside:p},methods:{close(){this.$message("外部被点击")}}},b=m,g=n("2877"),v=Object(g["a"])(b,o,i,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=clickoutside.5e44671e.js.map