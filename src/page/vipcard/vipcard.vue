<template>
    <div class="box">
        <headerVue leftBack="true">
            <div slot="message">会员中心</div>
        </headerVue>
        <section  class="username_box">
            <p>为账户<span>{{username}}</span>购买会员</p>
        </section>
        <section class="vip_privilege">
            <router-link to="/vipcard/vipDescription">
                <div class="vip_explain">
                    <span class="span_c">会员特权</span>
                    <div>
                        <span>会员说明</span>
                        <svg>
                            <use xlink:href="#icon-arrow-right"></use>
                        </svg>
                    </div>
                </div>
            </router-link>
            <section class="vip_less">
                <img src="../../img/sheng.jpeg" alt="">
                <div>
                    <h4>减免配送费</h4>
                    <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
            </section>
            <section class="vip_less">
                <img src="../../img/jifen.jpeg" alt="">
                <div>
                    <h4>减免配送费</h4>
                    <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
            </section>
        </section>
        <section class="vip_open">
            <ul>
                <li>
                    <p>开通会员</p>
                </li>
                <li>
                    <div>
                        <span>1个月</span>
                        <span>￥20</span>
                    </div>
                    <router-link to="">
                        <div class="vip_buy">购买</div>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="vip_tool">
            <div>
                <p>兑换会员</p>
                <router-link :to="{path:'/vipcard/useCart',query:{username:username}}">
                    <div>
                    <span>使用卡号密码</span>
                    <svg>
                        <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                </div>
                </router-link>
            </div>
            <div>
                <p>购买记录</p>
                <router-link to="/vipcard/invoiceRecord">
                    <div>
                    <span>开发票</span>
                    <svg>
                        <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                </div>
                </router-link>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
export default {
    name:'vipcard',
    components:{
        headerVue,
    },
    data(){
        return {
            username:null//用户名
        }
    },
    methods:{
        //获取用户名
        getusername(){
            
        }
    },
    created(){
    this.username=this.$route.query.username
    }
}
</script>
<style lang="less">
.box{
    padding-top: 3rem;
    .username_box{
        width: 100%;
        height: 2rem;
        padding: 0.5rem;
        p{
            font-size: 0.8rem;
            color: #666;
            span{
                margin: 0 0.2rem;
                color: #333;
                font-weight: 700;
            }
        }
    }
    .vip_privilege{
        .vip_explain{
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 0.5rem;
            background-color: #fff;
            height: 3rem;
            .span_c{
                color: #333;
                font-size: 0.8rem;
            }
            div{
                span{
                    color: #999;
                    font-size: 0.7rem;
                }
                svg{
                width: 1rem;
                height: 1rem;
                fill: #999;
                vertical-align: middle;
            }
            }
           
        }
    }
    .vip_less{
        display: flex;
        justify-content: start;
        padding: 0.8rem 0.5rem;
        background-color: #fff;
        border-top: 0.01rem solid #f5f5f5;
        img{
            height: 2rem;
        }
        div{
            margin-left: 0.5rem;
            h4{
                font-size: 0.8rem;
                color: #666;
            }
            p{
                font-size: 0.5rem;
                color: #999;
            }
        }
    }
    .vip_open{
        margin-top: 0.3rem;
        background-color: #fff;
        padding: 0.8rem 0.5rem;
        ul{
            li:nth-child(1){
                border-bottom:0.01rem solid #f5f5f5;
            }
            li{
                display: flex;
                justify-content:space-between;
                height: 2rem;
                p{
                    font-size: 0.8rem;
                }
                div{
                    span:nth-child(1){
                        font-size: 0.8rem;
                        line-height: 2.5rem;
                    }
                    span:nth-child(2){
                        font-weight: 700;
                        color: #f60;
                        font-size: 0.8rem;
                        line-height: 2.5rem;
                    }
                }
                .vip_buy{
                    position: relative;
                    top: 0.6rem;
                    border: 0.025rem solid #f60;
                    border-radius: 0.2rem;
                    line-height: 1.2rem;
                    height: 1.2rem;
                    width: 2.6rem;
                    text-align: center;
                    font-size: .6rem;
                    color: #f60;
                }
            }
        }
    }
    .vip_tool{
        div{
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;
            padding: 0.3rem 0.5rem;
            background-color: #fff;
            p{
                font-size: 0.8rem;
                color: #666;
                line-height: 2rem;
            }
            div{
                span{
                    font-size: 0.6rem;
                    color: #999;
                    line-height: 1rem;
                }
                svg{
                    width: 1rem;
                    height: 1rem;
                    fill: #e4e4e4;
                }
            }
        }
    }
}
</style>