<template>
    <div class="box">
        <Header leftBack="true">
            <div slot="message">我的</div>
        </Header>
        <section class="user_info">
            <router-link :to="userInfo&&userInfo.user_id?'/profile/info' : '/login'">
                <div class="user_info_box">
                    <div class="user_icon_box">
                        <svg class="user_icon" v-if="!showimg">
                            <use xlink:href="#icon-user-filling"></use>
                        </svg>
                        <img :src="imgBaseurl+userInfo.avatar" alt="" v-else-if="showimg" class="img_bd">
                        <div class="user_num_box">
                            <h4>{{userInfo?userInfo.username:'登录/注册'}}</h4>
                            <svg>
                                <use xlink:href="#icon-mobile-phone"></use>
                            </svg>
                            <span>{{phone}}</span>
                        </div>
                    </div>
                    <svg class="go_icon">
                        <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                </div>
            </router-link>
        </section>
        <section class="user_data">
            <div>
                <router-link to="">
                <p class="p_pad"><span class="color_1">{{userInfo?userInfo.balance:'0'}}</span><span>元</span></p>
                <p>我的余额</p>
            </router-link>
            </div>
            <div>
                <router-link to="">
                <p class="p_pad"><span class="color_2">{{userInfo?userInfo.gift_amount:'0'}}</span><span>个</span></p>
                <p>我的优惠</p>
            </router-link>
            </div>
            <div>
                <router-link to="">
                <p class="p_pad"><span class="color_3">{{userInfo?userInfo.point:'0'}}</span><span>分</span></p>
                <p>我的积分</p>
            </router-link>
            </div>
        </section>
        <section class="profile_msg mart">
            <ul>
                <router-link to=""><li class="li_base">
                <svg >
                    <use xlink:href="#icon-tickets"></use>
                </svg>
                <div class="bd_b">
                    <span>我的订单</span>
                    <svg>
                     <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                    </div>
                </li></router-link>
                <router-link to=""><li class="li_base">
                    <svg >
                    <use xlink:href="#icon-jifen"></use>
                </svg>
                <div class="bd_b">
                    <span>积分商城</span>
                    <svg>
                     <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                    </div>
                </li></router-link>
                <router-link to=""><li class="li_base">
                    <svg>
                    <use xlink:href="#icon-huiyuan"></use>
                    </svg>
                    <div>
                    <span>饿了么会员卡</span>
                    <svg>
                     <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                    </div>
                </li></router-link>
            </ul>
        </section>
        <section class="app_data mart">
            <ul>
                <router-link to=""><li class="li_base">
                <svg class="color60171255">
                    <use xlink:href="#icon-fuwu"></use>
                </svg>
                <div class="bd_b">
                    <span>服务中心</span>
                    <svg >
                     <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                    </div>
                </li></router-link>
                <router-link to=""><li class="li_base">
                    <svg class="color60171255">
                    <use xlink:href="#icon-eleme"></use>
                </svg>
                <div>
                    <span>下载饿了么APP</span>
                    <svg>
                     <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                    </div>
                </li></router-link>
            </ul>
        </section>
        <Foot userName="profile"></Foot>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import Foot from '../../components/foot/foot.vue'
import {getUserInfo} from '../../untils/api'
export default {
    name:'profile',
    data(){
        return {
            userInfo:null,//用户信息
            phone:'暂无绑定手机号',//电话
            imgBaseurl:'//elm.cangdu.org/img/',//图片地址
            showimg:false,//是否显示图片
        }
    },
    components:{
        Foot,
        Header
    },
    methods:{
        //获取用户信息
        initUserInfo(){
            getUserInfo().then(res=>{
                if(res.status!=0){
                    this.userInfo=res
                    this.showimg=true
                    //判断有没有电话
                    if(this.userInfo.brand_member_new!=0){
                        this.phone=this.userInfo.brand_member_new
                    }
                }
              return
            })
        }
    },
    created(){
        this.initUserInfo()
      
    },
}
</script>
<style lang="less" scoped>
.box{
    padding-top: 2.4rem;

        .user_info_box{
            padding: 0 0.5rem;
            border-top: 0.01rem solid white;
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: space-between;
            background-color: #3190e8;
            .user_icon_box{
                padding-top: 0.8rem;
                display: flex;
                justify-content: start;
                .user_icon{
                        width: 3rem;
                        height: 3rem;
                    }
                .user_num_box{
                    padding-top: 0.5rem;
                    h4{
                        color: white;
                    }
                    span{
                        color: white;
                        font-size: 0.8rem;
                    }
                }
            }
        
            svg{
                width: 1rem;
                height: 1rem;
                fill: white;
                vertical-align: text-bottom;
            }
            .go_icon{
                position: relative;
                top: 2rem;
            }

        }
        .user_data{
            display: flex;
            justify-items: center;
            width: 100%;
            height: 5rem;
            background-color: #fff;
            div{
                width: 33.3%;
                border:0.01rem solid #e4e4e4;
                a{
                    width: 100%;
                    height: 100%;
                    p{
                    text-align: center;
                    font-size: 0.8rem;
                    }
                    .p_pad{
                        padding: 0.5rem 0;
                        font-size: 0.8rem;
                    }
                    .color_1{
                        color: #f90;
                        font-size: 1.5rem;
                        font-weight: 700;
                    }
                    .color_2{
                        color: #ff5f3e;
                        font-size: 1.5rem;
                        font-weight: 700;
                    }
                    .color_3{
                        color: #6ac20b;
                        font-size: 1.5rem;
                        font-weight: 700;
                    }
                }
               
            }
        }
           .li_base{
            width: 100%;
            height: 2.5rem;
            background-color: #fff;
            padding: 0.3rem 0.5rem ;
            display: flex;
            justify-content: start;
            div{
                width: 100%;
                display: flex;
                justify-content:space-between;
                padding-left: 0.5rem;
                span{
                    line-height: 2rem;
                    font-size: 0.8rem;
                }
            }   
            svg{
                position: relative;
                top: 0.5rem;
                width: 1rem;
                height: 1rem;
                fill: rgb(187, 187, 187);
            }
           }
        }
        .mart{
            margin-top: 0.5rem;
        }
        .bd_b{
            border-bottom: 0.01rem solid #e4e4e4;
        }
        .img_bd{
            border-radius: 100%;
            width: 3.5rem;
            height: 3.5rem;
        }

</style>