"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[694],{2767:function(e,s,t){t.d(s,{Z:function(){return l}});var a=function(){var e=this,s=e._self._c;return s("header",{staticClass:"head"},[s("div",{staticClass:"left"},[e._t("logo"),e.leftBack?s("div",{on:{click:function(s){return e.$router.go(-1)}}},[s("svg",{staticClass:"back"},[s("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])]):e._e()],2),s("div",{staticClass:"msg"},[e._t("message")],2),s("div",{staticClass:"login"},[e._t("login")],2)])},n=[],r={name:"Header",data(){return{}},props:{leftBack:{type:String}}},o=r,u=t(1001),i=(0,u.Z)(o,a,n,!1,null,null,null),l=i.exports},3694:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"setusername_box"},[s("headerVue",{attrs:{leftBack:"true"}},[s("div",{attrs:{slot:"message"},slot:"message"},[e._v(" 修改用户名 ")])]),s("section",{staticClass:"setusername_input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],class:{bd_red:!e.show},attrs:{type:"text",placeholder:"输入用户名",maxlength:"24"},domProps:{value:e.username},on:{input:[function(s){s.target.composing||(e.username=s.target.value)},e.changeshow]}}),s("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v("用户名只能修改一次（5-24字符之间）")]),s("p",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticClass:"red"},[e._v("用户名长度在5到24位之间")]),s("button",{staticClass:"btn",class:{btn_op:e.getusername},on:{touchend:e.changename}},[e._v("确认修改")])])],1)},n=[],r=t(2767),o={name:"setusername",components:{headerVue:r.Z},data(){return{username:null,show:!0}},computed:{getusername:{get(){return/^\w{5,24}$/.test(this.username)}}},methods:{changeshow(){this.show=this.getusername},changename(){this.getusername&&this.$store.commit("changeUSername",this.username)}}},u=o,i=t(1001),l=(0,i.Z)(u,a,n,!1,null,"7fcfb9f3",null),c=l.exports}}]);
//# sourceMappingURL=694.955e0646.js.map