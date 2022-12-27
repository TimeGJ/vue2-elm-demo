<template>
    <div class="box">
        <ul>
            <router-link to="" v-for="(item ) in shoppingList" :key="item.id">
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
                <div class="right">
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
import {getShoppingList} from '../untils/api'
export default{
    name:'shoplist',
    components:{
        Star
    },  
    props:{
        hashLatitude:{
            required:true
        },
        hashLongitude:{
            required:true
        }
    },
    data(){
        return{
            shoppingList:null,//商铺列表
            imgBaseurl:'//elm.cangdu.org/img/',//图片地址
        }   
    },
    methods:{
        shopList(hashLatitude,hashLongitude){
            getShoppingList(hashLatitude,hashLongitude).then(res=>{
                this.shoppingList=res
            })
        }
    },
    watch:{
        hashLatitude:{
            handler(val,old){
                this.shopList(val,this.hashLongitude)
            }
            ,immediate:true
        }
    },
    created(){
       
    }
}
</script>
<style lang="less" scoped>
.box{
    .shopping-box{
        display: flex;
        justify-content: space-between;
        margin: 1rem 0.5rem;
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
                    padding-left: 0.2rem;
                    font-size: 0.7rem;
                    }
                .sell-num{
                    font-size: 0.1rem;
                    color: #666;
                }
                .delivery{
                    font-size: 0.1rem;
                    color: #666;
                }
                .star_box{
                    div{
                        display: inline-block;
                    }
                    
                    .star_tip{
                        font-size: 0.2rem;
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
                    font-size: 0.05rem;
                }
            }
            .right_delivery{
                margin: 0.45rem 0;
                display: flex;
                justify-content: end;
                span:nth-child(1){
                    background-color: #3190e8;
                    border: 0.025rem solid #3190e8;
                    font-size: 0.2rem;
                    color: white;
                }
                span:nth-last-child(1){
                    border: 0.025rem solid #3190e8;
                    color: #3190e8;
                    font-size: 0.2rem;
                }
            }
            .distance-time{
                span:nth-child(1){
                    font-size: 0.2rem;
                    color: #999;
                }
                span:nth-last-child(1){
                    color: #3190e8;
                    font-size: 0.2rem;
                }
            }
       }
    }
}
</style>