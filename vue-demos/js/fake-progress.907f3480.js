(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fake-progress"],{"89aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("el-progress",{attrs:{type:"circle",percentage:parseInt(100*t.fake.progress)}}),e("div",[t._v(" "+t._s(t.fake.progress)+" ")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.fake.end()}}},[t._v("结束")])],1)},s=[],a=r("ea25"),i=r.n(a),o={data(){return{fake:new i.a({timeConstant:1e4,autoStart:!0})}}},p=o,h=r("2877"),u=Object(h["a"])(p,n,s,!1,null,null,null);e["default"]=u.exports},ea25:function(t,e,r){const n=function(t){t||(t={}),this.timeConstant=t.timeConstant||1e3,this.progress=0,this._running=!1,this._intervalFrequency=100,this.autoStart=t.autoStart||!1,this.parent=t.parent,this.parentStart=t.parentStart,this.parentEnd=t.parentEnd,this.autoStart&&this.start()};n.prototype.start=function(){this._time=0,this._intervalId=setInterval(this._onInterval.bind(this),this._intervalFrequency)},n.prototype._onInterval=function(){this._time+=this._intervalFrequency,this.setProgress(1-Math.exp(-1*this._time/this.timeConstant))},n.prototype.end=function(){this.stop(),this.setProgress(1)},n.prototype.stop=function(){clearInterval(this._intervalId),this._intervalId=null},n.prototype.createSubProgress=function(t){const e=t.start||this.progress,r=t.end||1,s=Object.assign({},t,{parent:this,parentStart:e,parentEnd:r,start:null,end:null}),a=new n(s);return a},n.prototype.setProgress=function(t){this.progress=t,this.parent&&this.parent.setProgress((this.parentEnd-this.parentStart)*this.progress+this.parentStart)},t.exports=n}}]);
//# sourceMappingURL=fake-progress.907f3480.js.map