"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[27],{663:function(s,t,e){e.d(t,{Z:function(){return u}});var r=function(){var s=this,t=s._self._c;return t("div",{staticClass:"footer"},[t("div",[t("router-link",{attrs:{to:"/msite"}},[t("svg",[t("use",{class:{changeColor:"msite"==s.userName},attrs:{"xlink:href":"#icon-eleme"}})]),t("span",[s._v("外卖")])])],1),t("div",[t("router-link",{attrs:{to:"/search"}},[t("svg",[t("use",{class:{changeColor:"search"==s.userName},attrs:{"xlink:href":"#icon-discover"}})]),t("span",[s._v("搜索")])])],1),t("div",[t("router-link",{attrs:{to:"/order"}},[t("svg",[t("use",{class:{changeColor:"order"==s.userName},attrs:{"xlink:href":"#icon-tickets"}})]),t("span",[s._v("订单")])])],1),t("div",[t("router-link",{attrs:{to:"/profile"}},[t("svg",[t("use",{class:{changeColor:"profile"==s.userName},attrs:{"xlink:href":"#icon-user"}})]),t("span",[s._v("我的")])])],1)])},a=[],i={name:"Foot",props:{userName:{String:String}},data(){return{}}},n=i,o=e(1001),l=(0,o.Z)(n,r,a,!1,null,"3daa6e38",null),u=l.exports},2767:function(s,t,e){e.d(t,{Z:function(){return u}});var r=function(){var s=this,t=s._self._c;return t("header",{staticClass:"head"},[t("div",{staticClass:"left"},[s._t("logo"),s.leftBack?t("div",{on:{click:function(t){return s.$router.go(-1)}}},[t("svg",{staticClass:"back"},[t("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])]):s._e()],2),t("div",{staticClass:"msg"},[s._t("message")],2),t("div",{staticClass:"login"},[s._t("login")],2)])},a=[],i={name:"Header",data(){return{}},props:{leftBack:{type:String}}},n=i,o=e(1001),l=(0,o.Z)(n,r,a,!1,null,null,null),u=l.exports},1027:function(s,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=function(){var s=this,t=s._self._c;return t("div",{staticClass:"box"},[t("Header",{attrs:{leftBack:"true"}},[t("div",{attrs:{slot:"message"},slot:"message"},[s._v("我的")])]),t("section",{staticClass:"user_info"},[t("router-link",{attrs:{to:s.userInfo&&s.userInfo.user_id?"/profile/info":"/login"}},[t("div",{staticClass:"user_info_box"},[t("div",{staticClass:"user_icon_box"},[s.showimg?s.showimg?t("img",{staticClass:"img_bd",attrs:{src:s.imgBaseurl+s.userInfo.avatar,alt:""}}):s._e():t("svg",{staticClass:"user_icon"},[t("use",{attrs:{"xlink:href":"#icon-user-filling"}})]),t("div",{staticClass:"user_num_box"},[t("h4",[s._v(s._s(s.userInfo?s.username:"登录/注册"))]),t("svg",[t("use",{attrs:{"xlink:href":"#icon-mobile-phone"}})]),t("span",[s._v(s._s(s.phone))])])]),t("svg",{staticClass:"go_icon"},[t("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],1),t("section",{staticClass:"user_data"},[t("div",[t("router-link",{attrs:{to:"/balance"}},[t("p",{staticClass:"p_pad"},[t("span",{staticClass:"color_1"},[s._v(s._s(s.userInfo?s.userInfo.balance:"0"))]),t("span",[s._v("元")])]),t("p",[s._v("我的余额")])])],1),t("div",[t("router-link",{attrs:{to:"/benefit"}},[t("p",{staticClass:"p_pad"},[t("span",{staticClass:"color_2"},[s._v(s._s(s.userInfo?s.userInfo.gift_amount:"0"))]),t("span",[s._v("个")])]),t("p",[s._v("我的优惠")])])],1),t("div",[t("router-link",{attrs:{to:"/points"}},[t("p",{staticClass:"p_pad"},[t("span",{staticClass:"color_3"},[s._v(s._s(s.userInfo?s.userInfo.point:"0"))]),t("span",[s._v("分")])]),t("p",[s._v("我的积分")])])],1)]),t("section",{staticClass:"profile_msg mart"},[t("ul",[t("router-link",{attrs:{to:"/order"}},[t("li",{staticClass:"li_base"},[t("svg",[t("use",{attrs:{"xlink:href":"#icon-tickets"}})]),t("div",{staticClass:"bd_b"},[t("span",[s._v("我的订单")]),t("svg",[t("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])]),t("a",{attrs:{href:"https://home.m.duiba.com.cn/#/chome/index"}},[t("li",{staticClass:"li_base"},[t("svg",[t("use",{attrs:{"xlink:href":"#icon-jifen"}})]),t("div",{staticClass:"bd_b"},[t("span",[s._v("积分商城")]),t("svg",[t("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])]),t("router-link",{attrs:{to:{path:"/vipcard",query:{username:!!s.userInfo&&s.userInfo.username}}}},[t("li",{staticClass:"li_base"},[t("svg",[t("use",{attrs:{"xlink:href":"#icon-huiyuan"}})]),t("div",[t("span",[s._v("饿了么会员卡")]),t("svg",[t("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])])],1)]),t("section",{staticClass:"app_data mart"},[t("ul",[t("router-link",{attrs:{to:"/service"}},[t("li",{staticClass:"li_base"},[t("svg",{staticClass:"color60171255"},[t("use",{attrs:{"xlink:href":"#icon-fuwu"}})]),t("div",{staticClass:"bd_b"},[t("span",[s._v("服务中心")]),t("svg",[t("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])]),t("router-link",{attrs:{to:"/download"}},[t("li",{staticClass:"li_base"},[t("svg",{staticClass:"color60171255"},[t("use",{attrs:{"xlink:href":"#icon-eleme"}})]),t("div",[t("span",[s._v("下载饿了么APP")]),t("svg",[t("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])])],1)]),t("Foot",{attrs:{userName:"profile"}}),t("router-view",{on:{new:s.initUserInfo}})],1)},a=[],i=e(2767),n=e(663),o=e(963),l={name:"profile",data(){return{userInfo:null,phone:"暂无绑定手机号",imgBaseurl:"//elm.cangdu.org/img/",showimg:!1,username:null}},components:{Foot:n.Z,Header:i.Z},provide(){return{reload:this.reload}},methods:{initUserInfo(){(0,o.bG)().then((s=>{0!=s.status&&(this.userInfo=s,this.showimg=!0,this.$store.state.username?this.username=this.$store.state.username:this.username=s.username)}))},reload(){this.phone="暂无绑定手机号",this.userInfo=null,this.showimg=!1}},created(){this.initUserInfo()}},u=l,c=e(1001),f=(0,c.Z)(u,r,a,!1,null,"cc40c5d0",null),v=f.exports}}]);
//# sourceMappingURL=27.f59c8092.js.map