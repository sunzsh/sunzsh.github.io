(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["collapse-demo"],{"22a2":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-collapse-item",class:{"is-active":t.isActive,"is-disabled":t.disabled}},[e("div",{attrs:{role:"tab","aria-expanded":t.isActive,"aria-controls":"el-collapse-content-"+t.id,"aria-describedby":"el-collapse-content-"+t.id}},[e("div",{staticClass:"el-collapse-item__header",class:{focusing:t.focusing,"is-active":t.isActive},attrs:{role:"button",id:"el-collapse-head-"+t.id,tabindex:t.disabled?void 0:0},on:{click:t.handleHeaderClick,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.handleEnterClick.apply(null,arguments))},focus:t.handleFocus,blur:function(e){t.focusing=!1}}},[t._t("title",(function(){return[t._v(t._s(t.title))]})),e("i",{staticClass:"el-collapse-item__arrow el-icon-arrow-right",class:{"is-active":t.isActive}})],2)]),e("div",{staticClass:"el-collapse-item__wrap",attrs:{role:"tabpanel","aria-hidden":!t.isActive,"aria-labelledby":"el-collapse-head-"+t.id,id:"el-collapse-content-"+t.id}},[e("div",{staticClass:"el-collapse-item__content"},[t._t("default")],2)])])},n=[],s=i("f6f4"),c=i("6bd7"),l={name:"ElCollapseItem",componentName:"ElCollapseItem",mixins:[s["a"]],data(){return{contentWrapStyle:{height:"auto",display:"block"},contentHeight:0,focusing:!1,isClick:!1,id:Object(c["a"])()}},inject:["collapse"],props:{title:String,name:{type:[String,Number],default(){return this._uid}},disabled:Boolean},computed:{isActive(){return this.collapse.activeNames.indexOf(this.name)>-1}},methods:{handleFocus(){setTimeout(()=>{this.isClick?this.isClick=!1:this.focusing=!0},50)},handleHeaderClick(){this.disabled||(this.dispatch("ElCollapse","item-click",this),this.focusing=!1,this.isClick=!0)},handleEnterClick(){this.dispatch("ElCollapse","item-click",this)}}},o=l,d=(i("922a"),i("2877")),r=Object(d["a"])(o,a,n,!1,null,"c4a08012",null);e["a"]=r.exports},"2fc5":function(t,e,i){},5497:function(t,e,i){"use strict";i("2fc5")},"6bd7":function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return l}));var a=i("2b0e");let n=t=>{var e={};return t&&"[object Function]"===e.toString.call(t)};"object"===typeof Int8Array||!a["default"].prototype.$isServer&&"function"===typeof document.childNodes||(n=function(t){return"function"===typeof t||!1});const s=Object.prototype.hasOwnProperty;function c(t,e){return s.call(t,e)}const l=function(){return Math.floor(1e4*Math.random())}},"922a":function(t,e,i){"use strict";i("df75")},9832:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("el-collapse",{staticClass:"my_colp",attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("MyElCollapseItem",{attrs:{title:"一致性 Consistency",name:"1"}},[e("div",{staticClass:"content"},[e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])]),e("MyElCollapseItem",{attrs:{title:"反馈 Feedback",name:"2"}},[e("div",{staticClass:"content"},[e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")]),e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])]),e("MyElCollapseItem",{attrs:{title:"效率 Efficiency",name:"3"}},[e("div",{staticClass:"content"},[e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])])],1)],1)},n=[],s=i("22a2"),c={data(){return{activeName:"1"}},components:{MyElCollapseItem:s["a"]}},l=c,o=(i("5497"),i("2877")),d=Object(o["a"])(l,a,n,!1,null,"383d4775",null);e["default"]=d.exports},df75:function(t,e,i){},f6f4:function(t,e,i){"use strict";function a(t,e,i){this.$children.forEach(n=>{var s=n.$options.componentName;s===t?n.$emit.apply(n,[e].concat(i)):a.apply(n,[t,e].concat([i]))})}e["a"]={methods:{dispatch(t,e,i){var a=this.$parent||this.$root,n=a.$options.componentName;while(a&&(!n||n!==t))a=a.$parent,a&&(n=a.$options.componentName);a&&a.$emit.apply(a,[e].concat(i))},broadcast(t,e,i){a.call(this,t,e,i)}}}}}]);
//# sourceMappingURL=collapse-demo.815457b9.js.map