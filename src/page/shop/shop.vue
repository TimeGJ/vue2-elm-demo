<template>
    <div class="shop_box" v-if="data">
        <section class="heard_box">
            <section class="base_img">
            <div class="base_imgbox">
            <img :src="baseImg+data.image_path" alt="" class="base_img">
            </div>
         </section>
            <svg class="back">
                <use xlink:href="#icon-arrow-left"></use>
            </svg>
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
                <div><span>商品</span></div>
                <div><span>评价</span></div>
            </nav>
        <section></section>
        <section></section>
    </div>
</template>
<script>
import {getShopping} from '@/untils/api'
export default{
    name:'Shop',
    data(){
        return{
            data:null,//商铺数据
            baseImg:'//elm.cangdu.org/img/',//图片基础地址
        }
    },
    methods:{
        initdata(){
            getShopping(this.$route.query.id).then(res=>{
                this.data=res
                console.log(res)
            })
        }
    },
    created(){
        this.initdata()
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
               span{
                font-size: 0.8rem;
                color: #666;
               }
            }
        }
}
</style>