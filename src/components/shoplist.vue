<template>
    <div class="box">
        <ul>
            <router-link :to="{path:'/shop',query:{id:item.id}}" v-for="(item ) in shoppingList" :key="item.id"  v-if="shoppingList">
            <li class="shopping-box">
                <div class="left">
                    <img :src="imgBaseurl+item.image_path" alt="">
                    <div class="left-font">
                        <div>
                            <span class="brand">品牌</span>
                            <h4>{{item.name}}</h4>
                        </div>
                        <div class="star_box">
                            <Star :starLeave="item.rating"></Star>
                            <span class="star_tip">{{item.rating}}</span>
                            <span class="sell-num">月售{{item.recent_order_num}}单</span>
                        </div>
                        <div>
                            <span class="delivery">￥{{item.float_minimum_order_amount}}起送/</span>
                            <span class="delivery">{{item.piecewise_agent_fee.tips}}元</span>
                        </div>
                    </div>
                </div>
                <div class="right" >
                    <ul>
                        <li v-for=" icon in item.supports" :key="icon.id">{{icon.icon_name}}</li>
                    </ul>
                    <p class="right_delivery">
                        <span>{{item.delivery_mode.text}}</span>
                        <span>准时达</span>
                    </p>   
                    <p class="distance-time">
                        <span>{{item.distance}}/</span>
                        <span>{{item.order_lead_time}}</span>
                    </p>
                </div>
            </li>
            </router-link>
        </ul>
    </div>
</template>
<script>
import Star from './star'
import {getShoppingList,searchRest} from '../untils/api'
export default{
    name:'shoplist',
    components:{
        Star
    },  
    props:{
        hash:{//经纬度

        },
        hashLatitude:{//经度
        },
        hashLongitude:{//纬度
        },
        keyword:{//搜索关键字

        },
        offset:{//跳过几条数据
           default:0
        },
        limit:{//请求几条数据
            default:20
        },
        categoryId:{//请求餐馆id

        },
        categoryIds:{//请求餐馆的分类ids

        },
        order_by:{//排序方式

        },
        delivery_mode:{//配送方式

        },
        support_ids:{//餐馆支持特权的id

        }
    },
    data(){
        return{
            shoppingList:null,//商铺列表
            imgBaseurl:'//elm.cangdu.org/img/',//图片地址
        }   
    },
    methods:{
        //获取商店列表数据
        shopList(){
            getShoppingList(this.hashLatitude,this.hashLongitude,this.offset,this.limit,this.categoryId,this.order_by,this.delivery_mode,this.support_ids,this.categoryIds).then(res=>{
                this.shoppingList=res
            }).catch(error=>{
                console.log(error)
            })
        },
        //搜索商店列表
        searchList(geohash,keyword){
            searchRest(geohash,keyword).then(res=>{
                this.shoppingList=res
            }).catch(error=>{
                console.log(error)
            })
        },
    },
    watch:{
        //当获取到经纬度时，获取商店列表数据
        hashLatitude:{
            handler(val,old){
                this.shopList()
            }
            ,immediate:true
        },
        //当分类id变化时请求数据
        categoryIds:{
            handler(val,old){
                this.shopList()
            }
        },
        //搜索关键字时调用
        keyword:{
            handler(val,old){
                this.searchList(this.hash,val)
            }
        },
    },
    created(){
    }   
}
</script>
<style lang="less" scoped>
.box{
    background-color: #fff;
    .shopping-box{
        display: flex;
        justify-content: space-between;
        padding: 1rem 0.5rem;
        .left{
            display: flex;
            justify-content: space-between;
            img{
                margin-top: 0.3rem;
                width: 3.5rem;
                height: 3.5rem;
                }
            .left-font{
                padding: 0 0.5rem;
                .brand{
                    background-color: #ffd930;
                    font-size: 0.5rem;
                     }
                h4{
                    display: inline-block;
                    padding-left: 0.5rem;
                    font-size: 0.7rem;
                    }
                .sell-num{
                    font-size: 0.5rem;
                    color: #666;
                }
                .delivery{
                    font-size: 0.5rem;
                    color: #666;
                }
                .star_box{
                    div{
                        display: inline-block;
                    }
                    
                    .star_tip{
                        font-size: 0.4rem;
                        color: #ff6000;
                    }
                }
                
            }
        }
       .right{
   
            ul{
                display: flex;
                justify-content: end;
                li{
                    display: inline-block;
                    border: 0.025rem solid #f1f1f1;
                    color: #999;
                    font-size: 0.4rem;
                }
            }
            .right_delivery{
                margin: 0.45rem 0;
                display: flex;
                justify-content: end;
                span:nth-child(1){
                    background-color: #3190e8;
                    border: 0.025rem solid #3190e8;
                    font-size: 0.4rem;
                    color: white;
                }
                span:nth-last-child(1){
                    border: 0.025rem solid #3190e8;
                    color: #3190e8;
                    font-size: 0.4rem;
                }
            }
            .distance-time{
                span:nth-child(1){
                    font-size: 0.4rem;
                    color: #999;
                }
                span:nth-last-child(1){
                    color: #3190e8;
                    font-size: 0.4rem;
                }
            }
       }
    }
}
</style>