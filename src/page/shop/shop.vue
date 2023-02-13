<template>
    <div class="shop_box" v-if="data">
        <section class="heard_box"  >
            <section class="base_img">
            <div class="base_imgbox">
            <img :src="baseImg+data.image_path" alt="" class="base_img">
            </div>
            </section>
            <div @touchend="pageBack"> 
            <svg class="back">
                <use xlink:href="#icon-arrow-left"></use>
            </svg>
            </div>
            <div class="shop_title">
                <img :src="baseImg+data.image_path" alt="">
                <div>
                   <h3>{{data.name}}</h3>
                    <p><span>商家配送／</span> <span>{{data.order_lead_time}}分钟送达／</span> <span>配送费{{data.float_delivery_fee}}元</span></p>
                    <p>公告：{{data.promotion_info}}</p>
                </div>
                <router-link to="">
                    <svg>
                    <use xlink:href="#icon-arrow-right"> </use>
                    </svg>
                </router-link>
            </div>
        </section>
        <nav class="nav_to">
                <div  @touchend="changeShowbd"><span :class="{bd_b:changeShow}">商品</span></div>
                <div  @touchend="changeShowbd"><span :class="{bd_b:!changeShow}">评价</span></div>
            </nav>
        <section v-show="changeShow" class="food_left">
                <div class="left_food_contain">
                    <section class="food_list">
                        <ul :style="{transform:'translateY('+mousemove+'px)'}" @touchstart="translate"  @touchmove="transformY" @touchend="transEnd">
                            <li v-for="item,index in foodList" :key="item.id" @touchend="fooditem(index)" :style="index==foodindex ?'background-color: #fff;':'background-color: #f8f8f8;'">
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </section>
                    <section class="foods">
                        <section>
                            <div>
                                {{foodList[foodindex].name}} {{foodList[foodindex].description}}
                            </div>
                            <ul>
                                <li v-for="item in food[foodindex]">
                                    <div>
                                        <img :src="baseImg+item.image_path" alt="">
                                    </div>
                                    <div>
                                        <div>{{item.name}}</div>
                                        <div>{{item.description}}</div>
                                        <div><span>月售{{item.month_sales}}</span><span>好评率{{item.month_sales}}</span></div>
                                        <div><span class="font_color">￥{{item.specfoods[0].price}}</span> <div><svg><use xlink:href="#icon-add"></use></svg></div></div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
                <footer class="footer_box">
                    <section>
                        <div>
                            <svg>
                                <use xlink:href="#icon-shopping-cart-"></use>
                            </svg>
                            <div>
                                <p>
                                    ￥{{price}}
                                </p>
                                <p>
                                    配送费{{data.float_delivery_fee}}
                              </p>
                            </div> 
                        </div>
                        <div class="food_price"><p>还差{{data.float_minimum_order_amount}}起送</p></div>
                    </section>
                </footer>
        </section>
        <section  v-show="!changeShow"></section>
    </div>
</template>
<script>
import {getShopping,getshopfoodlist} from '@/untils/api'
export default{
    name:'Shop',
    data(){
        return{
            data:null,//商铺数据
            baseImg:'//elm.cangdu.org/img/',//图片基础地址
            changeShow:true,//商品评价切换的显示
            foodList:[],//食品列表
            food:[],//食物
            foodindex:0,//食物对应索引
            mouseY:null,//鼠标的位置
            mousemove:0,//鼠标移动的位置
            listStare:0,//列表初始位置
            price:0.00,//价格
        }
    },
    methods:{
        //初始化数据
        initdata(){
            getShopping(this.$route.query.id).then(res=>{
                this.data=res
                console.log(res)
            })
        },
        //商品评价切换的显示
        changeShowbd(){
            this.changeShow=!this.changeShow
        },
        //返回
        pageBack(){
            this.$router.go(-1)
        },
        //获取食物列表
        initFoodList(){
            getshopfoodlist(this.$route.query.id).then(res=>{
                //去掉没有食物的空列表
                res.category_list.forEach(item=>{
                    if(item.foods.length!=0){
                        this.foodList.push(item)
                        this.food.push(item.foods)
                    }
                    else{
                        return
                    }
                })
            }).catch(error=>{
                console.log(error)
            })
        },
        //获取鼠标的位置
        translate(e){
            this.mouseY=e.touches[0].clientY
        },
        //获取鼠标移动的距离
        transformY(e){
            this.mousemove=this.listStare+e.touches[0].clientY-this.mouseY
        },
        //移动结束时
        transEnd(){
            this.listStare=this.mousemove
            if(this.listStare>0){
                this.mousemove=0
                this.listStare=this.mousemove
            }
           
        },
        //获取对应的食物列表
        fooditem(index){
            this.foodindex=index
        }
    },
    created(){
        this.initdata()
        this.initFoodList()
    }

}
</script>
<style lang="less" scoped>
.shop_box{
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    .heard_box{
      position: relative;
        width: 100%;
        .base_imgbox{
            position: absolute;
            overflow: hidden;
            width: 100%;
            height: 100%;
            .base_img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            filter: blur(10px);
        }
        }
      
        .back{
            position: absolute;
            top: 0.5rem;
            width: 1rem;
            height: 1rem;
            z-index: 9;
            fill: #fff;
           
        }
        .shop_title{
            position: relative;
            display: flex;
            justify-content: start;
            padding: 0.5rem;
            background-color: rgba(119,103,137,.43);
            height: auto;
            
            img{
                width: 4rem;
                height: 4rem;
            }
            div{
                margin: 0 0.5rem;
                h3{
                    
                    color: #fff;
                    font-size: 0.8rem;
                }
                p{
                    margin-top: 0.5rem ;
                    font-size: 0.5rem;
                    color: #fff;
                    span{
                        font-size: 0.5rem;
                        color: #fff;
                    }
                }
            }
            svg{
                position: absolute;
                top: 38%;
                right: 0.5rem;
                fill: #fff;
                width: 1rem;
                height: 1rem;
            }
        }
   
    }
    .nav_to{
            display: flex;
            justify-content: start;
            width: 100%;
            background-color: #fff;
            z-index: 9;
            div{
                text-align: center;
                margin: .7rem;
                width: 50%;
                .bd_b{
                    border-bottom: 2px solid #3190e8;
                    pointer-events: none;
                }
               span{
                padding-bottom: 0.2rem;
                font-size: 0.8rem;
                color: #666;
               }
            }
        }
        .food_left{
            display: flex;
            flex: 1;
            overflow: hidden;
            padding-bottom: 2rem;
            
            .left_food_contain{
            display: flex;
            flex: 1;
          .food_list{
            height: 100%;
            width: 5rem;
                ul{
                    transition: all 0ms;
                    .bgc{
                        background-color: #fff;
                    }
                   li{
                    padding: 0.5rem ;
                    width: 100%;
                    height: 3rem;
                    border-bottom: 1px solid #ededed;
                    span{
                        font-size: 0.8rem;
                        color: #666;
                    }
                   }

                }
            }
        .foods{
            overflow-y: auto;
            width: 75%;
            section{
          ul{
            li{
                display: flex;
                justify-content: start;
                background-color: #fff;
                padding: 0.5rem;
                border-bottom: 1px solid #f8f8f8;
                div:nth-child(1){
                    img{
                        margin: 0.5rem;
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
                div:nth-child(2){
                    width: 100%;
                    div:nth-child(1){
                        font-weight: 700;
                        color: #333;
                    }
                    div:nth-child(2){
                        font-size: 0.5rem;
                        color: #999;
                    }
                    div:nth-child(3){
                        font-size: 0.4rem;
                    }
                    div:nth-child(4){
                        display: flex;
                        justify-content: space-between;
                        .font_color{
                            color: #f60;
                        }
                        div{
                            display: flex;
                            justify-content: end;
                            svg{
                                width: 1.5rem;
                                height: 1.5rem;
                            }
                        }
                    }
                }
            }
          }
        }
    }
        }
        .footer_box{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2.5rem;
            background-color: #3d3d3f;
            section{
                display: flex;
                justify-content: space-between;
                div:nth-child(1){
                    position: relative;

                    svg{
                        position: absolute;
                        fill: #fff;
                        top: -1rem;
                        left: 1rem;
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                   div{
                    position: absolute;
                    left: 3.5rem;
                   width: 5rem;
                   p:nth-child(1){
                    font-size: 1rem;
                    color: #fff;
                   }
                    p:nth-child(2){
                        font-size: 0.5rem   ;
                        color: white;
                    }
                   }
                }
                .food_price{
                    background-color: #535356;
                    width: 6rem;
                    p{
                        text-align: center;
                        line-height: 2.5rem;
                        font-weight: 700;
                        color: white;
                    }
                }
            }
        }
     }
}
</style>