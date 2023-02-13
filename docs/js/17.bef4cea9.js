"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[17],{2767:function(t,s,e){e.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("header",{staticClass:"head"},[s("div",{staticClass:"left"},[t._t("logo"),t.leftBack?s("div",{on:{click:function(s){return t.$router.go(-1)}}},[s("svg",{staticClass:"back"},[s("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])]):t._e()],2),s("div",{staticClass:"msg"},[t._t("message")],2),s("div",{staticClass:"login"},[t._t("login")],2)])},i=[],o={name:"Header",data(){return{}},props:{leftBack:{type:String}}},r=o,n=e(1001),l=(0,n.Z)(r,a,i,!1,null,null,null),c=l.exports},3079:function(t,s,e){e.d(s,{Z:function(){return p}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("ul",t._l(t.shoppingList,(function(e){return t.shoppingList?s("router-link",{key:e.id,attrs:{to:{path:"/shop",query:{id:e.id}}}},[s("li",{staticClass:"shopping-box"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.imgBaseurl+e.image_path,alt:""}}),s("div",{staticClass:"left-font"},[s("div",[s("span",{staticClass:"brand"},[t._v("品牌")]),s("h4",[t._v(t._s(e.name))])]),s("div",{staticClass:"star_box"},[s("Star",{attrs:{starLeave:e.rating}}),s("span",{staticClass:"star_tip"},[t._v(t._s(e.rating))]),s("span",{staticClass:"sell-num"},[t._v("月售"+t._s(e.recent_order_num)+"单")])],1),s("div",[s("span",{staticClass:"delivery"},[t._v("￥"+t._s(e.float_minimum_order_amount)+"起送/")]),s("span",{staticClass:"delivery"},[t._v(t._s(e.piecewise_agent_fee.tips)+"元")])])])]),s("div",{staticClass:"right"},[s("ul",t._l(e.supports,(function(e){return s("li",{key:e.id},[t._v(t._s(e.icon_name))])})),0),s("p",{staticClass:"right_delivery"},[s("span",[t._v(t._s(e.delivery_mode.text))]),s("span",[t._v("准时达")])]),s("p",{staticClass:"distance-time"},[s("span",[t._v(t._s(e.distance)+"/")]),s("span",[t._v(t._s(e.order_lead_time))])])])])]):t._e()})),1)])},i=[],o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("section",{staticClass:"star_flex"},t._l(5,(function(t){return s("svg",{key:t,staticClass:"star_box"},[s("use",{attrs:{"xlink:href":"#icon-star-on"}})])})),0),s("div",{staticClass:"star_overflow",style:"width:"+.5*t.starLeave+"rem"},[s("section",{staticClass:"star_flex"},t._l(5,(function(t){return s("svg",{key:t,staticClass:"star_fill"},[s("use",{attrs:{"xlink:href":"#icon-star-on"}})])})),0)])])},r=[],n={name:"star",props:{starLeave:{type:Number}},data(){return{}}},l=n,c=e(1001),h=(0,c.Z)(l,o,r,!1,null,"7b07dd81",null),d=h.exports,u=e(963),g={name:"shoplist",components:{Star:d},props:{hash:{},hashLatitude:{},hashLongitude:{},keyword:{},offset:{default:0},limit:{default:20},categoryId:{},categoryIds:{},order_by:{},delivery_mode:{},support_ids:{}},data(){return{shoppingList:null,imgBaseurl:"//elm.cangdu.org/img/"}},methods:{shopList(){(0,u.ym)(this.hashLatitude,this.hashLongitude,this.offset,this.limit,this.categoryId,this.order_by,this.delivery_mode,this.support_ids,this.categoryIds).then((t=>{this.shoppingList=t})).catch((t=>{console.log(t)}))},searchList(t,s){(0,u.Mh)(t,s).then((t=>{this.shoppingList=t})).catch((t=>{console.log(t)}))}},watch:{hashLatitude:{handler(t,s){this.shopList()},immediate:!0},categoryIds:{handler(t,s){this.shopList()}},keyword:{handler(t,s){this.searchList(this.hash,t)}}},created(){}},_=g,v=(0,c.Z)(_,a,i,!1,null,"0d918c0c",null),p=v.exports},1017:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("Header",{attrs:{leftBack:"true"}},[s("div",{attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.title))])]),s("div",{staticClass:"body_box"},[s("section",{staticClass:"h5"},[s("nav",{staticClass:"nav"},[s("div",{staticClass:"section_box",on:{touchend:function(s){t.showCategory=!t.showCategory}}},[s("span",{style:{color:t.showCategory?"#3190e8":"#333"}},[t._v("分类")]),s("svg",{style:{transform:t.showCategory?"rotate(180deg)":"rotate(0deg)"}},[s("use",{attrs:{"xlink:href":"#icon-caret-bottom"}})])]),s("div",{staticClass:"section_box",on:{touchend:function(s){t.showSort=!t.showSort}}},[s("span",{style:{color:t.showSort?"#3190e8":"#333"}},[t._v("排序")]),s("svg",{style:{transform:t.showSort?"rotate(180deg)":"rotate(0deg)"}},[s("use",{attrs:{"xlink:href":"#icon-caret-bottom"}})])]),s("div",{staticClass:"section_box"},[s("span",[t._v("筛选")]),s("svg",[s("use",{attrs:{"xlink:href":"#icon-caret-bottom"}})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showCategory,expression:"showCategory"}],staticClass:"show_box"},[s("div",{staticClass:"translation_box"},[s("section",[s("ul",t._l(t.category,(function(e,a){return s("li",{key:e.id,style:{backgroundColor:a==t.categoryItem?"#fff":"#f1f1f1"},on:{touchstart:function(s){return t.changeCategoryItem(a)}}},[s("div",[s("img",{attrs:{src:t.getImgPath(e.image_url),alt:""}}),s("p",[t._v(t._s(e.name))])]),s("div",[s("span",{staticClass:"span_bd"},[t._v(t._s(e.count))]),s("svg",[s("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])})),0)]),s("section",{staticClass:"right_box"},[s("ul",t._l(t.category[t.categoryItem].sub_categories,(function(e){return s("li",{key:e.id,staticClass:"li_bd",on:{touchend:function(s){return t.changeCategoryIds(e.id)}}},[s("p",[t._v(t._s(e.name))]),s("span",[t._v(t._s(e.count))])])})),0)])])]),s("section",{directives:[{name:"show",rawName:"v-show",value:t.showSort,expression:"showSort"}],staticClass:"sort_bgc"},[s("div",{staticClass:"sort_box"},[s("div",[s("svg",[s("use",{attrs:{"xlink:href":"#icon-sort"}})]),s("span",[t._v("智能排序")])]),s("div",[s("svg",[s("use",{attrs:{"xlink:href":"#icon-location-information"}})]),s("span",[t._v("距离最近")])]),s("div",[s("svg",[s("use",{attrs:{"xlink:href":"#icon-shopping-cart-"}})]),s("span",[t._v("销量最高")])]),s("div",[s("svg",[s("use",{attrs:{"xlink:href":"#icon-doller"}})]),s("span",[t._v("起送价最低")])]),s("div",[s("svg",[s("use",{attrs:{"xlink:href":"#icon-timer"}})]),s("span",[t._v("配送速度最快")])]),s("div",[s("svg",[s("use",{attrs:{"xlink:href":"#icon-star-off"}})]),s("span",[t._v("评分最高")])])])])]),s("ShopList",{attrs:{hashLatitude:t.latitude,hashLongitude:t.longitude,categoryId:t.categoryId,categoryIds:t.categoryIds}})],1)},i=[],o=e(2767),r=e(3079),n=e(963),l={name:"food",components:{Header:o.Z,ShopList:r.Z},props:{},data(){return{geohash:null,title:"",categoryId:"",category:null,categoryIds:null,latitude:null,longitude:null,categoryItem:0,showCategory:!1,showSort:!1}},methods:{initCategory(){(0,n.n3)(this.latitude,this.longitude).then((t=>{this.category=t}))},getImgPath(t){let s;if(!t)return"//elm.cangdu.org/img/default.jpg";s=-1!==t.indexOf("jpeg")?".jpeg":".png";let e="/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+s;return"https://fuss10.elemecdn.com"+e},changeCategoryItem(t){this.categoryItem=t},changeCategoryIds(t){this.categoryIds=t,this.showCategory=!1}},computed:{},created(){this.title=this.$route.query.title,this.geohash=this.$store.state.position,this.categoryId=this.$route.query.id,this.initCategory(),this.geohash&&(this.latitude=this.geohash.split(",")[0],this.longitude=this.geohash.split(",")[1])}},c=l,h=e(1001),d=(0,h.Z)(c,a,i,!1,null,"ac0f5820",null),u=d.exports}}]);
//# sourceMappingURL=17.bef4cea9.js.map