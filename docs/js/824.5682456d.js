"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[824],{663:function(t,s,e){e.d(s,{Z:function(){return c}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[s("div",[s("router-link",{attrs:{to:"/msite"}},[s("svg",[s("use",{class:{changeColor:"msite"==t.userName},attrs:{"xlink:href":"#icon-eleme"}})]),s("span",[t._v("外卖")])])],1),s("div",[s("router-link",{attrs:{to:"/search"}},[s("svg",[s("use",{class:{changeColor:"search"==t.userName},attrs:{"xlink:href":"#icon-discover"}})]),s("span",[t._v("搜索")])])],1),s("div",[s("router-link",{attrs:{to:"/order"}},[s("svg",[s("use",{class:{changeColor:"order"==t.userName},attrs:{"xlink:href":"#icon-tickets"}})]),s("span",[t._v("订单")])])],1),s("div",[s("router-link",{attrs:{to:"/profile"}},[s("svg",[s("use",{class:{changeColor:"profile"==t.userName},attrs:{"xlink:href":"#icon-user"}})]),s("span",[t._v("我的")])])],1)])},a=[],i={name:"Foot",props:{userName:{String:String}},data(){return{}}},o=i,n=e(1001),l=(0,n.Z)(o,r,a,!1,null,"3daa6e38",null),c=l.exports},2767:function(t,s,e){e.d(s,{Z:function(){return c}});var r=function(){var t=this,s=t._self._c;return s("header",{staticClass:"head"},[s("div",{staticClass:"left"},[t._t("logo"),t.leftBack?s("div",{on:{click:function(s){return t.$router.go(-1)}}},[s("svg",{staticClass:"back"},[s("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])]):t._e()],2),s("div",{staticClass:"msg"},[t._t("message")],2),s("div",{staticClass:"login"},[t._t("login")],2)])},a=[],i={name:"Header",data(){return{}},props:{leftBack:{type:String}}},o=i,n=e(1001),l=(0,n.Z)(o,r,a,!1,null,null,null),c=l.exports},4071:function(t,s,e){e.d(s,{Z:function(){return _}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("ul",t._l(t.shoppingList,(function(e){return t.shoppingList?s("router-link",{key:e.id,attrs:{to:{path:"/shop",query:{id:e.id}}}},[s("li",{staticClass:"shopping-box"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.imgBaseurl+e.image_path,alt:""}}),s("div",{staticClass:"left-font"},[s("div",[s("span",{staticClass:"brand"},[t._v("品牌")]),s("h4",[t._v(t._s(e.name))])]),s("div",{staticClass:"star_box"},[s("Star",{attrs:{starLeave:e.rating}}),s("span",{staticClass:"star_tip"},[t._v(t._s(e.rating))]),s("span",{staticClass:"sell-num"},[t._v("月售"+t._s(e.recent_order_num)+"单")])],1),s("div",[s("span",{staticClass:"delivery"},[t._v("￥"+t._s(e.float_minimum_order_amount)+"起送/")]),s("span",{staticClass:"delivery"},[t._v(t._s(e.piecewise_agent_fee.tips)+"元")])])])]),s("div",{staticClass:"right"},[s("ul",t._l(e.supports,(function(e){return s("li",{key:e.id},[t._v(t._s(e.icon_name))])})),0),s("p",{staticClass:"right_delivery"},[s("span",[t._v(t._s(e.delivery_mode.text))]),s("span",[t._v("准时达")])]),s("p",{staticClass:"distance-time"},[s("span",[t._v(t._s(e.distance)+"/")]),s("span",[t._v(t._s(e.order_lead_time))])])])])]):t._e()})),1)])},a=[],i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("section",{staticClass:"star_flex"},t._l(5,(function(t){return s("svg",{key:t,staticClass:"star_box"},[s("use",{attrs:{"xlink:href":"#icon-star-on"}})])})),0),s("div",{staticClass:"star_overflow",style:"width:"+.5*t.starLeave+"rem"},[s("section",{staticClass:"star_flex"},t._l(5,(function(t){return s("svg",{key:t,staticClass:"star_fill"},[s("use",{attrs:{"xlink:href":"#icon-star-on"}})])})),0)])])},o=[],n={name:"star",props:{starLeave:{type:Number}},data(){return{}}},l=n,c=e(1001),h=(0,c.Z)(l,i,o,!1,null,"7b07dd81",null),u=h.exports,d=e(963),v={name:"shoplist",components:{Star:u},props:{hash:{},hashLatitude:{},hashLongitude:{},keyword:{},offset:{default:0},limit:{default:20},categoryId:{},categoryIds:{},order_by:{},delivery_mode:{},support_ids:{}},data(){return{shoppingList:null,imgBaseurl:"//elm.cangdu.org/img/"}},methods:{shopList(){(0,d.ym)(this.hashLatitude,this.hashLongitude,this.offset,this.limit,this.categoryId,this.order_by,this.delivery_mode,this.support_ids,this.categoryIds).then((t=>{this.shoppingList=t})).catch((t=>{console.log(t)}))},searchList(t,s){(0,d.Mh)(t,s).then((t=>{this.shoppingList=t})).catch((t=>{console.log(t)}))}},watch:{hashLatitude:{handler(t,s){this.shopList()},immediate:!0},categoryIds:{handler(t,s){this.shopList()}},keyword:{handler(t,s){this.searchList(this.hash,t)}}},created(){}},m=v,p=(0,c.Z)(m,r,a,!1,null,"304f5538",null),_=p.exports},9824:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var r=function(){var t=this,s=t._self._c;return s("div",[s("Header",{attrs:{leftBack:"true"}},[s("div",{attrs:{slot:"message"},slot:"message"},[t._v("搜索")])]),s("div",{staticClass:"search_box"},[s("section",[s("form",{on:{submit:function(t){t.preventDefault()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchName,expression:"searchName"}],attrs:{type:"search",required:"",placeholder:"请输入商家或美食名称"},domProps:{value:t.searchName},on:{input:function(s){s.target.composing||(t.searchName=s.target.value)}}}),s("button",{on:{touchstart:t.addHistorySearch,touchend:t.send}},[t._v("提交")])])]),s("div",{staticClass:"search-result"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.historySearch&&!t.searchName&&!t.rest,expression:"historySearch&&(!searchName)&&(!rest)"}]},[s("span",[t._v("搜索历史")]),s("ul",t._l(t.historySearch,(function(e,r){return s("li",{key:r},[s("p",{staticClass:"history_address",on:{touchstart:function(s){return t.historySearchRest(e)}}},[t._v(t._s(e))]),s("svg",{on:{touchend:function(s){return t.clearThisHistory(r)}}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])])})),0),s("button",{staticClass:"history_clear",on:{touchend:t.clearHistory}},[t._v("清空搜索历史")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.rest,expression:"rest"}]},[s("span",[t._v("商家")]),s("ShopList",{attrs:{hash:t.geoHash,keyword:t.keyword}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.search,expression:"search"}],staticClass:"no_search"},[s("span",[t._v("很抱歉！没有搜索到对应地址")])])])]),s("Foot",{attrs:{userName:"search"}})],1)},a=[],i=(e(7658),e(2767)),o=e(663),n=e(4071),l={name:"Search",components:{Header:i.Z,Foot:o.Z,ShopList:n.Z},data(){return{historySearch:null,searchName:null,keyword:null,geoHash:null,rest:!1,search:!1}},methods:{getHistorySearch(){localStorage.getItem("searchHistory")&&(this.historySearch=JSON.parse(localStorage.getItem("searchHistory")))},send(){this.keyword=this.searchName,this.rest=!0},addHistorySearch(){let t=!1;if(localStorage.getItem("searchHistory")){let s=null;return s=JSON.parse(localStorage.getItem("searchHistory")),s.forEach((s=>{s!=this.searchName||(t=!0)})),void(t||(s.push(this.searchName),localStorage.setItem("searchHistory",JSON.stringify(s))))}localStorage.setItem("searchHistory",JSON.stringify([this.searchName]))},historySearchRest(t){this.keyword=t,this.rest=!0},clearThisHistory(t){let s=null;s=JSON.parse(localStorage.getItem("searchHistory")),s.shift(t),s.length<1?(this.historySearch=null,localStorage.removeItem("searchHistory")):(this.historySearch=s,localStorage.setItem("searchHistory",JSON.stringify(s)))},clearHistory(){localStorage.removeItem("searchHistory"),this.historySearch=null}},created(){this.$store.commit("initPosition"),this.geoHash=this.$store.state.position,this.getHistorySearch()}},c=l,h=e(1001),u=(0,h.Z)(c,r,a,!1,null,"49d9f040",null),d=u.exports}}]);
//# sourceMappingURL=824.5682456d.js.map