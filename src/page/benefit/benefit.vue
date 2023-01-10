<template>
    <div class="benefit_box">
        <Header leftBack="true">
            <div slot="message">
                我的优惠
            </div>
        </Header>
        <section class="benefit_nav">
            <div>
                <span :class="{span_change:showhongbao}" @touchend="changeshow">红包</span>
                <span :class="{span_change:!showhongbao}" @touchend="changeshow">商家代金券</span>
            </div>
        </section>
        <div class="hongbao_body" v-show="showhongbao">
     
        <section class="hongbao_nav"  >
            <div>
                <p>有<span>{{hongbaodata.length}}</span>个红包即将到期</p>
            </div>
            <div>
                <router-link to="/benefit/hbDescription">
                <img src="@/img/description.png" alt="">
                <span>红包说明</span>
            </router-link>
            </div>
        </section>
        <section class="hongbao">
            <ul>
                <li v-for="item in hongbaodata">
                    <div class="left">
                        <p class="d">￥<span>{{item.amount}}</span></p>
                        <p class="much">{{item.description_map.sum_condition}}</p>
                    </div>
                    <div class="right">
                        <div>
                            <p>{{item.name}}</p>
                            <p>{{item.description_map.validity_delta}}</p>
                        </div>
                        <p class="hongbao_time">{{item.description_map.validity_periods}}</p>
                        <p class="hongbao_time">{{item.description_map.phone}}</p>
                    </div>
                </li>
            </ul>
         </section>
         <footer><p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p></footer>
        
        <section class="history">
            <router-link to="">
                <p>查看历史红包</p>
                <svg>
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </router-link>
        </section>
        <footer class="foot_router">
            <router-link to="">
                <p>兑换红包</p>
            </router-link>
            <router-link to="">
                <p>推荐有奖</p>
            </router-link>
        </footer>
        </div>
        <section  v-show="!showhongbao" class="voucher_container">
        <div>
            <router-link to="/benefit/coupon">
                <img src="@/img/description.png" alt="">
                <span>商家代金券说明</span>
            </router-link>
        </div>
        <div>
            <img src="@/img/voucher.png" alt="">
            <p>无法使用代金券</p>
             <p>非客户端或客户端版本过低</p>
            <router-link to="/download">
                <div>下载或升级客户端</div>
            </router-link>
        </div>
        </section>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/head/header.vue';
import {getgongbao} from '@/untils/api'
export default {
    name:'Benefit',
    components:{
        Header
    },
    data(){
        return {
            hongbaodata:null,//红包信息
            showhongbao:true,//红包页面的切换
        }
    },
    methods:{
        //获取红包数据
        inithb(){
             const user_id=localStorage.getItem('user_id')
            getgongbao(user_id,20,0).then(res=>{
                this.hongbaodata=res
            })
        },
        //点击切换显示
        changeshow(){
            this.showhongbao=!this.showhongbao
        }
    },
    created(){
       this.inithb()
    }
}
</script>
<style lang="less" scoped>
    .benefit_box{
        padding-top: 2.3rem;
      

        .benefit_nav{
            background-color: #fff;
            div{
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 3rem;
                padding: 0 0.5rem;
                .span_change{
                    border-bottom:1px solid #3190e8;
                    color: #3190e8;
                    pointer-events: none;
                }
                span{
                    padding-bottom: 0.2rem;
                    color: #333;
                    font-size: 0.8rem;
                }
              
            }
        }
        .hongbao_body{
        .hongbao_nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 2rem;
            padding: 0 0.5rem;
            p{
                font-size: 0.5rem;
                color: #333;
                span{
                    margin: 0 0.2rem;
                    color: #ff5340;
                }
            }
            a{
                display: flex;
                align-items: center;
                img{
                    width: 0.8rem;
                }
                span{
                    margin-left: 0.2rem;
                    font-size: 0.6rem;
                    color: #3190e8;
                }
            }
        }
        .hongbao{
            ul{
                padding: 0 0.5rem;
                li{
                    background-image: url(../../img/hongbao.png);
                    background-repeat: repeat-x;
                    background-size: 0.7rem;
                    display: flex;
                    justify-content: start;
                    background-color: #fff;
                    margin-bottom: 1rem;
                    border-radius: 0.3rem;
                    .left{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                        width: 30%;
                        .d{
                            color: #ff5340;
                            font-size: 1rem;
                            font-weight: 700;
                            span{
                                color: #ff5340;
                                font-size: 1.5rem;
                            }
                        }
                        .much{
                            font-size: 0.6rem;
                            color: #999;
                        }   
                    }
                    .right{
                        width: 70%;
                        padding: 1rem;
                        div{
                            display: flex;
                            justify-content: space-between;
                            p{
                                font-size: 0.8rem;
                            }
                            p:nth-last-child(1){
                                color: #ff5340;
                            }
                        }
                        .hongbao_time{
                            color: #999;
                            font-size: 0.5rem;
                        }
                    }
                }
            }
        }
        footer{
            margin:0 0.5rem;;
            background-color: #f9f9f9;
            padding: 0 0.8rem;
            p{
                font-size: 0.6rem;
                color: #999;
            }
        }
    }
    .history{
        margin-top: 1.5rem;
        a{
            display: flex;
        justify-content: center;

        p{
            text-align: center;
            font-size: 0.7rem;
            color: #999;
        }
        svg{
            width: 1rem;
            height: 1rem;
            fill: #aaa;
        }
    }
    }
    .foot_router{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: start;
        height: 3rem;
        background-color: #fff;
        align-items: center;
        a{
            width: 50%;
            p:nth-child(1){
                border-right: 1px solid rgb(245, 245, 245);
            }
            p{
                font-size: 0.8rem;
                text-align: center;
            }
        }
    }
    .voucher_container{
        div:nth-child(1){
            display: flex;
            justify-content: end;
            height: 2rem;
            padding: 0.5rem;
            img{
                width: 0.7rem;
                margin-right: 0.2rem;
                vertical-align:middle;
            }
            span{
                font-size: 0.5rem;
                color: #3190e8;
            }
        }
        div:nth-child(2){
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: center;
            p:nth-child(2){
                font-size: 0.8rem;
                color: #666;
            }
            p:nth-child(3){
                margin: 1rem 0;
                font-size: 0.5rem;
                color: #333;
            }
            div{
                line-height: 1rem;
                color: #fff;
                background-color: #56d176;
                border-radius: 3px;
                text-align: center;
                font-size: 0.9rem;
            }
        }
    }
}
</style>