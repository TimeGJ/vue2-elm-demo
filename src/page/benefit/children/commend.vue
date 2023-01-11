<template>
    <div class="commend_box">
        <Header left-back="true">
            <div slot="message">
                推荐有奖
            </div>
        </Header>
        <section>
            <div class="activity_banner">
                <img src="@/img/activity.png" alt="">
            </div>
            <div class="activity_foot">
                <div @touchend="tip">
                    <img src="@/img/weixin.png" alt="">
                    <p>邀请微信好友</p>
                </div >
                <div @touchend="tip">
                    <img src="@/img/qq.png" alt="">
                    <p>邀请QQ好友</p>
                </div>
                <div @touchend="tip">
                    <img src="@/img/fenxiang.png" alt="">
                    <p>面对面邀请</p>
                </div>
            </div>
        </section>
        <section class="invite">
            <div class="invite_num">
                <div>
                    <p>累计收益</p>
                    <p><span>0</span>元</p>
                </div>
                <div>
                    <p>成功邀请</p>
                    <p><span>0</span>人</p>
                </div>
            </div>
            <div class="income_detail">
                <p>-收益明细-</p>
            </div>
            <div class="qiangbao">
                <img src="@/img/qianbao.png" alt="">
                <p>还不赶紧去邀请好友</p>
            </div>
        </section>
        <AlertTip v-show="showtip" @closeTip="closeTip " :tipText="tipText"></AlertTip>
    </div>
</template>
<script>
import AlertTip from '@/components/alertTip.vue';
import Header from '@/components/head/header.vue';


export default{
    name:'Commend',
    components:{
        Header,
        AlertTip
    },
    data(){
        return{
            showtip:false,
            tipText:null,

        }
    },
    methods:{
        //tiptext
        tip(){
            this.showtip=true
            this.tipText='请在饿了么APP中打开'
        },
        //close
        closeTip(){
            this.showtip=false
        }
    }
}
</script>
<style lang="less" scoped>
.commend_box{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 2.3rem;
    background-color: #f5f5f5;
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .activity_banner{
            img{
                width: 100%;
            }
        }
        .activity_foot{
            display: flex;
            justify-content: space-around;
            background-color: #fff;
            height: 6rem;
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
                img{
                    width: 3rem ;
                }
                p{
                    font-size: 0.5rem;
                    color: #333;
                }
            }
        }
      
        .invite{
            padding: 1rem;
            .invite_num{
                display: flex;
                justify-content: start;
                div:nth-child(1){
                    border-right: 1px solid #ddd;
                }
                div{
                    width: 50%;
                    p{
                        text-align: center;
                        font-size: 0.7rem;
                        color: #666;
                        span{
                            color: #ff5633;
                            font-size: 1rem;
                            font-weight: 700;
                        }
                    }
                }
            }
            .income_detail{
                margin: 1rem 0;
                p{
                    text-align: center;
                font-size: 0.5rem;
                color: #666;
                }
            }
            .qiangbao{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width: 1.5rem;
                }
                p{
                    margin-top: 0.5rem;
                    text-align: center;
                    font-size: 0.5rem;
                    color: #999;
                }
            }
        }
    }
</style>