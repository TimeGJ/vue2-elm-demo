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
                <div>
                    <section class="food_list">
                        <ul>
                            <li v-for="item,index in foodList" :key="item.id">
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <section>
                            <div>
                                
                            </div>
                            <ul>
                                <li v-for="item in food[foodindex]">
                                    <div>
                                        <img src="" alt="">
                                    </div>
                                    <div>
                                        <div><span></span><span></span></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div><span></span> <div><svg><use></use></svg></div></div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
                <footer class="footer_box">

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
        //获取对应的食物列表

    },
    created(){
        this.initdata()
        this.initFoodList()
    }

}
</script>
<style lang="less" scoped>
.shop_box{
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
            width: 5rem;
            div{
          .food_list{
                ul{
                    height: 26rem;
                    overflow: hidden;
                    .choose_bd{
                        border-left: 2px solid #3190e8;
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
        }
     }
}
</style>