(function(e){function t(t){for(var s,o,r=t[0],c=t[1],u=t[2],l=0,m=[];l<r.length;l++)o=r[l],i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("c21b"),i=n.n(s);i.a},"0c8e":function(e,t,n){},"3ea5":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=a(e);return n(t)}function a(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container",attrs:{id:"app"}},[n("md-app",[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title"},[e._v("International Meeting Planner")]),n("md-button",{staticClass:"md-icon-button md-accent",on:{click:e.addGroup}},[n("md-icon",[e._v("add")])],1)],1),n("md-app-content",[n("v-groups",{model:{value:e.groups,callback:function(t){e.groups=t},expression:"groups"}})],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.value,function(t,s){return n("md-card",{key:s},[n("md-card-header",[n("div",{staticStyle:{display:"flex"}},[n("md-field",{attrs:{"md-inline":""}},[n("label",[e._v("Name")]),n("md-input",{attrs:{value:t.name},on:{input:function(t){e.setValue(s,"name",t)}}})],1),n("md-button",{staticClass:"md-icon-button md-accent",on:{click:function(t){e.removeGroup(s)}}},[n("md-icon",[e._v("delete")])],1)],1)]),n("md-card-content",e._l(t.timezones,function(t,i){return n("div",{key:i,class:{"md-invalid":e.manualTime[s]&&e.manualTime[s].timezoneIndex===i&&e.manualTime[s].invalid}},[n("div",{staticClass:"name-holder"},[n("h2",{staticClass:"description"},[e._v(e._s(t.description||t.timezone))]),n("sub",[e._v(e._s(t.timezone))]),n("span",{staticStyle:{flex:"1"}}),n("md-icon",{nativeOn:{click:function(t){e.updateTimezone(s,i)}}},[e._v("edit")]),n("md-icon",{nativeOn:{click:function(t){e.deleteTimezone(s,i)}}},[e._v("remove")])],1),n("div",{staticStyle:{display:"flex"}},[n("md-field",{attrs:{"md-clearable":e.manualTime[s]&&e.manualTime[s].timezone===t.timezone}},[n("md-input",{ref:"input-"+s+"-"+t.timezone,refInFor:!0,attrs:{value:e.currentFixed[s]?e.currentFixed[s][t.timezone]:e.currentTicks[t.timezone]},on:{focus:function(n){e.setRootTime(s,i,t.timezone,e.currentTicks[t.timezone])},input:function(t){e.setManualTime(s,i,t)}}})],1)],1)])})),n("md-card-actions",[n("md-button",{staticClass:"md-icon-button md-primary",attrs:{"md-dense":""},on:{click:function(t){e.addTimezone(s)}}},[n("md-icon",[e._v("add")])],1)],1)],1)}),n("v-timezone",{attrs:{"show-dialog":e.showDialog,value:e.editTimezone},on:{input:e.setTimezone,close:function(t){e.showDialog=!1}}})],2)},r=[],c=n("c93e"),u=(n("4f7f"),n("1c4c"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-dialog",{attrs:{"md-active":e.showDialog},on:{"update:mdActive":function(t){e.showDialog=t},"md-closed":function(t){e.$emit("close")}}},[n("md-dialog-title",[e._v("Select Timezone")]),n("div",[n("md-autocomplete",{attrs:{"md-options":e.timezones,"md-layout":"box","md-dense":""},model:{value:e.value.timezone,callback:function(t){e.$set(e.value,"timezone",t)},expression:"value.timezone"}},[n("label",[e._v("Timezone")])]),n("md-field",[n("label",[e._v("Name")]),n("md-input",{model:{value:e.value.description,callback:function(t){e.$set(e.value,"description",t)},expression:"value.description"}})],1)],1),n("md-dialog-actions",[n("md-button",{on:{click:function(t){e.$emit("close")}}},[e._v("Close")]),n("md-button",{staticClass:"md-primary",on:{click:e.emit}},[e._v("Save")])],1)],1)],1)}),d=[],l=n("7f45"),m=n.n(l),f=n("9c30");s["default"].use(f["MdMenu"]),s["default"].use(f["MdDialog"]),s["default"].use(f["MdAutocomplete"]),s["default"].use(f["MdField"]);var p={props:{showDialog:{type:Boolean},value:{type:Object,default:function(){return{timezone:"",description:""}}}},computed:{timezones:function(){return m.a.tz.names()}},methods:{emit:function(){this.$emit("input",this.value),this.$emit("close")}}},b=p,j=(n("869c"),n("2877")),h=Object(j["a"])(b,u,d,!1,null,null,null);h.options.__file="Timezone.vue";var v=h.exports;s["default"].use(f["MdCard"]),s["default"].use(f["MdButton"]),s["default"].use(f["MdField"]);var z={props:{value:{type:Array}},data:function(){return{currentGroupIndex:-1,currentTimezoneEditIndex:-1,editTimezone:{timezone:"",description:""},showDialog:!1,tickInterval:0,currentTicks:{},currentFixed:{},manualTime:{}}},components:{VTimezone:v},computed:{usedTimezones:function(){var e=[];return this.value.forEach(function(t){e=e.concat(t.timezones.map(function(e){return e.timezone}))}),Array.from(new Set(e))}},methods:{setManualTime:function(e,t,n){var s=this;if(""===n.trim())return this.$delete(this.manualTime,e),void this.$delete(this.currentFixed,e);if(this.manualTime[e]&&this.manualTime[e].timezoneIndex===t){var i=m.a.tz(n,this.manualTime[e].timezone);if(i.isValid()){this.$set(this.manualTime[e],"invalid",!1),this.currentFixed.hasOwnProperty(e)||(this.currentFixed[e]={});var a=this.value[e].timezones[t];this.currentFixed[e].hasOwnProperty(a.timezone)||this.$set(this.currentFixed[e],a.timezone,i.tz(a.timezone).format("YYYY-MM-DD HH:mm:ss")),this.value[e].timezones.forEach(function(n,a){a!==t&&s.$set(s.currentFixed[e],n.timezone,i.tz(n.timezone).format("YYYY-MM-DD HH:mm:ss"))})}else this.$set(this.manualTime[e],"invalid",!0);this.$forceUpdate()}},setRootTime:function(e,t,n,s){var i=Object(c["a"])({},this.value[e].timezones[t]);i.time=this.manualTime[e]&&this.currentFixed[e]?this.currentFixed[e][i.timezone]:s,i.timezoneIndex=t,this.$set(this.manualTime,e,i),this.setManualTime(e,t,i.time)},setTimezone:function(e){this.currentTimezoneEditIndex>-1?this.value[this.currentGroupIndex].timezones.splice(this.currentTimezoneEditIndex,1,e):this.value[this.currentGroupIndex].timezones.push(e),this.emit(),this.currentGroupIndex=-1,this.currentTimezoneEditIndex=-1},deleteTimezone:function(e,t){this.value[e].timezones.splice(t,1),this.emit()},updateTimezone:function(e,t){this.currentGroupIndex=e,this.currentTimezoneEditIndex=t,this.$set(this,"editTimezone",t>-1?Object(c["a"])({},this.value[this.currentGroupIndex].timezones[t]):{timezone:m.a.tz.guess(),description:""}),this.showDialog=!0},addTimezone:function(e){this.updateTimezone(e,-1)},removeGroup:function(e){this.value.splice(e,1),this.$emit("input",this.value)},emit:function(){var e=this;setTimeout(function(){e.$emit("input",e.value)},250)},setValue:function(e,t,n){this.$set(this.value[e],t,n),this.$emit("input",this.value)},startTracking:function(){var e=this;this.tickInterval=setInterval(function(){e.usedTimezones.forEach(function(t){e.$set(e.currentTicks,t,m()().tz(t).format("YYYY-MM-DD HH:mm:ss"))})},1e3)},endTracking:function(){clearInterval(this.tickInterval)}},created:function(){this.startTracking()},beforeDestroy:function(){this.endTracking()}},g=z,T=(n("bf8c"),Object(j["a"])(g,o,r,!1,null,null,null));T.options.__file="Groups.vue";var y=T.exports;s["default"].use(f["MdApp"]),s["default"].use(f["MdContent"]),s["default"].use(f["MdDrawer"]),s["default"].use(f["MdToolbar"]),s["default"].use(f["MdList"]),s["default"].use(f["MdIcon"]),s["default"].use(f["MdButton"]);var k={name:"app",components:{VGroups:y},data:function(){return{triggerLocalStorage:!1}},computed:{groups:{get:function(){this.triggerLocalStorage;var e=window.localStorage.getItem("groups")||"[]";return JSON.parse(e)},set:function(e){return this.triggerLocalStorage=!this.triggerLocalStorage,window.localStorage.setItem("groups",JSON.stringify(e)),e}}},methods:{addGroup:function(){var e=this.groups;e.push({name:"",timezones:[]}),this.$set(this,"groups",e)}}},x=k,_=(n("034f"),Object(j["a"])(x,i,a,!1,null,null,null));_.options.__file="App.vue";var w=_.exports;n("51de"),n("e094");s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(w)}}).$mount("#app")},"869c":function(e,t,n){"use strict";var s=n("0c8e"),i=n.n(s);i.a},bf8c:function(e,t,n){"use strict";var s=n("3ea5"),i=n.n(s);i.a},c21b:function(e,t,n){}});
//# sourceMappingURL=app.f5c1ca06.js.map