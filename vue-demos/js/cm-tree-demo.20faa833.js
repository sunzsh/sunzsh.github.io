(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cm-tree-demo"],{"8b57":function(e,t,n){},"97ca":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("CMTree",{staticClass:"myTest",attrs:{data:e.data}})],1)},d=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"el-tree",class:{"el-tree--highlight-current":e.highlightCurrent,"is-dragging":!!e.dragState.draggingNode,"is-drop-not-allow":!e.dragState.allowDrop,"is-drop-inner":"inner"===e.dragState.dropType},attrs:{role:"tree"}},[e._l(e.root.childNodes,(function(n){return t("CMTreeNode",{key:e.getNodeKey(n),attrs:{node:n,props:e.props,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent},on:{"node-expand":e.handleNodeExpand}})})),e.isEmpty?t("div",{staticClass:"el-tree__empty-block"},[t("span",{staticClass:"el-tree__empty-text"},[e._v(e._s(e.emptyText))])]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.dragState.showDropIndicator,expression:"dragState.showDropIndicator"}],ref:"dropIndicator",staticClass:"el-tree__drop-indicator"})],2)},i=[],s=n("5c96"),l=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.node.visible,expression:"node.visible"}],ref:"node",staticClass:"el-tree-node",class:{"is-expanded":e.expanded,"is-current":e.node.isCurrent,"is-hidden":!e.node.visible,"is-focusable":!e.node.disabled,"is-checked":!e.node.disabled&&e.node.checked},attrs:{role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.draggable},on:{click:function(t){return t.stopPropagation(),e.handleClick.apply(null,arguments)},contextmenu:e=>this.handleContextMenu(e),dragstart:function(t){return t.stopPropagation(),e.handleDragStart.apply(null,arguments)},dragover:function(t){return t.stopPropagation(),e.handleDragOver.apply(null,arguments)},dragend:function(t){return t.stopPropagation(),e.handleDragEnd.apply(null,arguments)},drop:function(t){return t.stopPropagation(),e.handleDrop.apply(null,arguments)}}},[t("div",{staticClass:"el-tree-node__content",style:{"padding-left":(e.node.level-1)*e.tree.indent+"px"}},[t("span",{class:[{"is-leaf":e.node.isLeaf,expanded:!e.node.isLeaf&&e.expanded},"el-tree-node__expand-icon",e.tree.iconClass?e.tree.iconClass:"el-icon-caret-right"],on:{click:function(t){return t.stopPropagation(),e.handleExpandIconClick.apply(null,arguments)}}}),e.showCheckbox?t("el-checkbox",{attrs:{indeterminate:e.node.indeterminate,disabled:!!e.node.disabled},on:{change:e.handleCheckChange},nativeOn:{click:function(e){e.stopPropagation()}},model:{value:e.node.checked,callback:function(t){e.$set(e.node,"checked",t)},expression:"node.checked"}}):e._e(),e.node.loading?t("span",{staticClass:"el-tree-node__loading-icon el-icon-loading"}):e._e(),t("node-content",{attrs:{node:e.node}})],1),t("el-collapse-transition",[!e.renderAfterExpand||e.childNodeRendered?t("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticClass:"el-tree-node__children",attrs:{role:"group","aria-expanded":e.expanded}},[t("div",{staticClass:"el-tree-node__children_cmwrapper"},e._l(e.node.childNodes,(function(n){return t("CMTreeNode",{key:e.getNodeKey(n),attrs:{"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:n},on:{"node-expand":e.handleChildNodeExpand}})})),1)]):e._e()])],1)},r=[],c=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.node.visible,expression:"node.visible"}],ref:"node",staticClass:"el-tree-node",class:{"is-expanded":e.expanded,"is-current":e.node.isCurrent,"is-hidden":!e.node.visible,"is-focusable":!e.node.disabled,"is-checked":!e.node.disabled&&e.node.checked},attrs:{role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.draggable},on:{click:function(t){return t.stopPropagation(),e.handleClick.apply(null,arguments)},contextmenu:e=>this.handleContextMenu(e),dragstart:function(t){return t.stopPropagation(),e.handleDragStart.apply(null,arguments)},dragover:function(t){return t.stopPropagation(),e.handleDragOver.apply(null,arguments)},dragend:function(t){return t.stopPropagation(),e.handleDragEnd.apply(null,arguments)},drop:function(t){return t.stopPropagation(),e.handleDrop.apply(null,arguments)}}},[t("div",{staticClass:"el-tree-node__content",style:{"padding-left":(e.node.level-1)*e.tree.indent+"px"}},[t("span",{class:[{"is-leaf":e.node.isLeaf,expanded:!e.node.isLeaf&&e.expanded},"el-tree-node__expand-icon",e.tree.iconClass?e.tree.iconClass:"el-icon-caret-right"],on:{click:function(t){return t.stopPropagation(),e.handleExpandIconClick.apply(null,arguments)}}}),e.showCheckbox?t("el-checkbox",{attrs:{indeterminate:e.node.indeterminate,disabled:!!e.node.disabled},on:{change:e.handleCheckChange},nativeOn:{click:function(e){e.stopPropagation()}},model:{value:e.node.checked,callback:function(t){e.$set(e.node,"checked",t)},expression:"node.checked"}}):e._e(),e.node.loading?t("span",{staticClass:"el-tree-node__loading-icon el-icon-loading"}):e._e(),t("node-content",{attrs:{node:e.node}})],1),t("el-collapse-transition",[!e.renderAfterExpand||e.childNodeRendered?t("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticClass:"el-tree-node__children",attrs:{role:"group","aria-expanded":e.expanded}},e._l(e.node.childNodes,(function(n){return t("el-tree-node",{key:e.getNodeKey(n),attrs:{"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:n},on:{"node-expand":e.handleChildNodeExpand}})})),1):e._e()])],1)},h=[],p=n("2b0e");const u=p["default"].prototype.$isServer,m=(u||Number(document.documentMode),function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")});(function(){!u&&document.addEventListener})(),function(){!u&&document.removeEventListener}();function b(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function g(e,t){if(e){for(var n=e.className,a=(t||"").split(" "),d=0,o=a.length;d<o;d++){var i=a[d];i&&(e.classList?e.classList.add(i):b(e,i)||(n+=" "+i))}e.classList||e.setAttribute("class",n)}}function x(e,t){if(e&&t){for(var n=t.split(" "),a=" "+e.className+" ",d=0,o=n.length;d<o;d++){var i=n[d];i&&(e.classList?e.classList.remove(i):b(e,i)&&(a=a.replace(" "+i+" "," ")))}e.classList||e.setAttribute("class",m(a))}}class f{beforeEnter(e){g(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0}enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"}afterEnter(e){x(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow}beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"}leave(e){0!==e.scrollHeight&&(g(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)}afterLeave(e){x(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}var k={name:"ElCollapseTransition",functional:!0,render(e,{children:t}){const n={on:new f};return e("transition",n,t)}},v=function(){var e=this,t=e._self._c;return t("label",{staticClass:"el-checkbox",class:[e.border&&e.checkboxSize?"el-checkbox--"+e.checkboxSize:"",{"is-disabled":e.isDisabled},{"is-bordered":e.border},{"is-checked":e.isChecked}],attrs:{id:e.id}},[t("span",{staticClass:"el-checkbox__input",class:{"is-disabled":e.isDisabled,"is-checked":e.isChecked,"is-indeterminate":e.indeterminate,"is-focus":e.focus},attrs:{tabindex:!!e.indeterminate&&0,role:!!e.indeterminate&&"checkbox","aria-checked":!!e.indeterminate&&"mixed"}},[t("span",{staticClass:"el-checkbox__inner"}),e.trueLabel||e.falseLabel?t("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e._q(e.model,e.trueLabel)},on:{change:[function(t){var n=e.model,a=t.target,d=a.checked?e.trueLabel:e.falseLabel;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.model=n.concat([o])):i>-1&&(e.model=n.slice(0,i).concat(n.slice(i+1)))}else e.model=d},e.handleChange],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,name:e.name},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(t){var n=e.model,a=t.target,d=!!a.checked;if(Array.isArray(n)){var o=e.label,i=e._i(n,o);a.checked?i<0&&(e.model=n.concat([o])):i>-1&&(e.model=n.slice(0,i).concat(n.slice(i+1)))}else e.model=d},e.handleChange],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}})]),e.$slots.default||e.label?t("span",{staticClass:"el-checkbox__label"},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.label))]],2):e._e()])},C=[],_=(n("14d9"),n("f6f4")),y={name:"ElCheckbox",mixins:[_["a"]],inject:{elForm:{default:""},elFormItem:{default:""}},componentName:"ElCheckbox",data(){return{selfModel:!1,focus:!1,isLimitExceeded:!1}},computed:{model:{get(){return this.isGroup?this.store:void 0!==this.value?this.value:this.selfModel},set(e){this.isGroup?(this.isLimitExceeded=!1,void 0!==this._checkboxGroup.min&&e.length<this._checkboxGroup.min&&(this.isLimitExceeded=!0),void 0!==this._checkboxGroup.max&&e.length>this._checkboxGroup.max&&(this.isLimitExceeded=!0),!1===this.isLimitExceeded&&this.dispatch("ElCheckboxGroup","input",[e])):(this.$emit("input",e),this.selfModel=e)}},isChecked(){return"[object Boolean]"==={}.toString.call(this.model)?this.model:Array.isArray(this.model)?this.model.indexOf(this.label)>-1:null!==this.model&&void 0!==this.model?this.model===this.trueLabel:void 0},isGroup(){let e=this.$parent;while(e){if("ElCheckboxGroup"===e.$options.componentName)return this._checkboxGroup=e,!0;e=e.$parent}return!1},store(){return this._checkboxGroup?this._checkboxGroup.value:this.value},isLimitDisabled(){const{max:e,min:t}=this._checkboxGroup;return!(!e&&!t)&&this.model.length>=e&&!this.isChecked||this.model.length<=t&&this.isChecked},isDisabled(){return this.isGroup?this._checkboxGroup.disabled||this.disabled||(this.elForm||{}).disabled||this.isLimitDisabled:this.disabled||(this.elForm||{}).disabled},_elFormItemSize(){return(this.elFormItem||{}).elFormItemSize},checkboxSize(){const e=this.size||this._elFormItemSize||(this.$ELEMENT||{}).size;return this.isGroup&&this._checkboxGroup.checkboxGroupSize||e}},props:{value:{},label:{},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:String,trueLabel:[String,Number],falseLabel:[String,Number],id:String,controls:String,border:Boolean,size:String},methods:{addToStore(){Array.isArray(this.model)&&-1===this.model.indexOf(this.label)?this.model.push(this.label):this.model=this.trueLabel||!0},handleChange(e){if(this.isLimitExceeded)return;let t;t=e.target.checked?void 0===this.trueLabel||this.trueLabel:void 0!==this.falseLabel&&this.falseLabel,this.$emit("change",t,e),this.$nextTick(()=>{this.isGroup&&this.dispatch("ElCheckboxGroup","change",[this._checkboxGroup.value])})}},created(){this.checked&&this.addToStore()},mounted(){this.indeterminate&&this.$el.setAttribute("aria-controls",this.controls)},watch:{value(e){this.dispatch("ElFormItem","el.form.change",e)}}},N=y,w=n("2877"),E=Object(w["a"])(N,v,C,!1,null,null,null),$=E.exports;$.install=function(e){e.component($.name,$)};var L=$;const T="$treeNodeId",S=function(e,t){return e?t[e]:t[T]};var P={name:"ElTreeNode",componentName:"ElTreeNode",mixins:[_["a"]],props:{node:{default(){return{}}},props:{},renderContent:Function,renderAfterExpand:{type:Boolean,default:!0},showCheckbox:{type:Boolean,default:!1}},components:{ElCollapseTransition:k,ElCheckbox:L,NodeContent:{props:{node:{required:!0}},render(e){const t=this.$parent,n=t.tree,a=this.node,{data:d,store:o}=a;return t.renderContent?t.renderContent.call(t._renderProxy,e,{_self:n.$vnode.context,node:a,data:d,store:o}):n.$scopedSlots.default?n.$scopedSlots.default({node:a,data:d}):e("span",{class:"el-tree-node__label"},[a.label])}}},data(){return{tree:null,expanded:!1,childNodeRendered:!1,oldChecked:null,oldIndeterminate:null}},watch:{"node.indeterminate"(e){this.handleSelectChange(this.node.checked,e)},"node.checked"(e){this.handleSelectChange(e,this.node.indeterminate)},"node.expanded"(e){this.$nextTick(()=>this.expanded=e),e&&(this.childNodeRendered=!0)}},methods:{getNodeKey(e){return S(this.tree.nodeKey,e.data)},handleSelectChange(e,t){this.oldChecked!==e&&this.oldIndeterminate!==t&&this.tree.$emit("check-change",this.node.data,e,t),this.oldChecked=e,this.indeterminate=t},handleClick(){const e=this.tree.store;e.setCurrentNode(this.node),this.tree.$emit("current-change",e.currentNode?e.currentNode.data:null,e.currentNode),this.tree.currentNode=this,this.tree.expandOnClickNode&&this.handleExpandIconClick(),this.tree.checkOnClickNode&&!this.node.disabled&&this.handleCheckChange(null,{target:{checked:!this.node.checked}}),this.tree.$emit("node-click",this.node.data,this.node,this)},handleContextMenu(e){this.tree._events["node-contextmenu"]&&this.tree._events["node-contextmenu"].length>0&&(e.stopPropagation(),e.preventDefault()),this.tree.$emit("node-contextmenu",e,this.node.data,this.node,this)},handleExpandIconClick(){this.node.isLeaf||(this.expanded?(this.tree.$emit("node-collapse",this.node.data,this.node,this),this.node.collapse()):(this.node.expand(),this.$emit("node-expand",this.node.data,this.node,this)))},handleCheckChange(e,t){this.node.setChecked(t.target.checked,!this.tree.checkStrictly),this.$nextTick(()=>{const e=this.tree.store;this.tree.$emit("check",this.node.data,{checkedNodes:e.getCheckedNodes(),checkedKeys:e.getCheckedKeys(),halfCheckedNodes:e.getHalfCheckedNodes(),halfCheckedKeys:e.getHalfCheckedKeys()})})},handleChildNodeExpand(e,t,n){this.broadcast("ElTreeNode","tree-node-expand",t),this.tree.$emit("node-expand",e,t,n)},handleDragStart(e){this.tree.draggable&&this.tree.$emit("tree-node-drag-start",e,this)},handleDragOver(e){this.tree.draggable&&(this.tree.$emit("tree-node-drag-over",e,this),e.preventDefault())},handleDrop(e){e.preventDefault()},handleDragEnd(e){this.tree.draggable&&this.tree.$emit("tree-node-drag-end",e,this)}},created(){const e=this.$parent;e.isTree?this.tree=e:this.tree=e.tree;const t=this.tree;t||console.warn("Can not find node's tree.");const n=t.props||{},a=n["children"]||"children";this.$watch("node.data."+a,()=>{this.node.updateChildren()}),this.node.expanded&&(this.expanded=!0,this.childNodeRendered=!0),this.tree.accordion&&this.$on("tree-node-expand",e=>{this.node!==e&&this.node.collapse()})}},D=P,A=Object(w["a"])(D,c,h,!1,null,null,null),G=A.exports,O=n("5488"),B=n.n(O),F={extends:G,name:"CMTreeNode",components:{"el-collapse-transition":B.a}},I=F,M=Object(w["a"])(I,l,r,!1,null,null,null),z=M.exports,K={extends:s["Tree"],name:"CMTree",components:{CMTreeNode:z}},j=K,H=Object(w["a"])(j,o,i,!1,null,null,null),R=H.exports,q={data(){return{data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}]}},methods:{},components:{CMTree:R}},J=q,Q=(n("9eab"),Object(w["a"])(J,a,d,!1,null,"00a5bf02",null));t["default"]=Q.exports},"9eab":function(e,t,n){"use strict";n("8b57")},f6f4:function(e,t,n){"use strict";function a(e,t,n){this.$children.forEach(d=>{var o=d.$options.componentName;o===e?d.$emit.apply(d,[t].concat(n)):a.apply(d,[e,t].concat([n]))})}t["a"]={methods:{dispatch(e,t,n){var a=this.$parent||this.$root,d=a.$options.componentName;while(a&&(!d||d!==e))a=a.$parent,a&&(d=a.$options.componentName);a&&a.$emit.apply(a,[t].concat(n))},broadcast(e,t,n){a.call(this,e,t,n)}}}}}]);
//# sourceMappingURL=cm-tree-demo.20faa833.js.map