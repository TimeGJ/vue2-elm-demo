<template>
    <div class="usecartbox">
        <Header leftBack="true">
            <div slot="message">兑换会员</div>
        </Header>
        <section class="usecart_body">
                <p class="title">成功兑换后将关联到当前帐号：
                    <span>{{$route.query.username}}</span>
                </p>
                <div>
                <form class="usecart_msg">
                    <div>
                        <input type="text" placeholder="请输入10位卡号" maxlength="10" v-model="cardnum">
                    </div>
                    <div>
                        <input type="text" placeholder="请输入6位卡密" maxlength="6" v-model="cardpwd">
                    </div>
                </form>
                </div>
                <button class="btn"  @touchend="changcard"  :class="{cardpay:couldPay}"  >兑换</button>
        </section>
        <footer>
            <div>
                <h4>——温馨提示——</h4>
                <p>新兑换的会员服务，权益以「会员说明」为准。</p>
                <p>月卡：30次减免配送费。</p>
                <p>季卡：90次减免配送费。</p>
                <p>年卡：360次减免配送费。</p>
                <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
            </div>
        </footer>
        <alertTipVue :tipText="tiptext" v-show="showtip" @closeTip="showtip=false"></alertTipVue>
    </div>
</template>
<script>
import header from '@/components/head/header.vue';
import {changehongbao} from '@/untils/api'
import alertTipVue from '@/components/alertTip.vue';
import qs from 'qs'
export default{
    name:'usecart',
    components:{
        Header:header,
        alertTipVue
    },
    data(){
        return {
            cardnum:null,//卡号
            cardpwd:null,//卡密
            tiptext:null,//提示显示内容
            showtip:false//是否显示提示框
        }
    },
    computed:{
        couldPay:{
           get(){
            return (/^\d{10}$/.test(this.cardnum))&&(/^\d{6}$/.test(this.cardpwd))
           }
        }
    },
    methods:{
        //兑换
        changcard(){
            if(this.couldPay){
                let data={user_id:this.$route.query.username,exchange_code:this.cardnum,captcha_code:this.cardpwd}
            data=qs.stringify(data)
            changehongbao(data).then(res=>{
                    this.showtip=true
                    this.tiptext=res.message
            }).catch(error=>{
                console.log(error)
            })
            }
            else return
        }
    }
}
</script>
<style lang="less" scoped>
.usecartbox{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    background-color: #f5f5f5;
    padding-top: 2.3rem;
    .usecart_body{
        .title{
            padding: 0.5rem 0.5rem;
            font-size: 0.7rem;
            color: #666;
            span{
                font-size: 0.8rem;
                color: #333;
                font-weight: 700;
            }
        }
        .usecart_msg{
            div{
                width: 100%;
                height: 2.5rem;
                background-color: #fff;
                padding-left: 1rem;
                border-bottom: 0.09rem solid #f5f5f5;
                input{
                    height: 100%;
                    font-size: 0.8rem;
                }
            }
        }
        .btn{
            width:90%;
            margin-left: 5%;
            margin-top: 2rem;
            height: 2rem;
            border-radius: 0.2rem;
            // background-color:  #ccc;
            color: #fff;
            font-size: 1rem;
        }
    }
    footer{
        padding: 0.5rem 3rem;
        div{
            h4{
                margin-bottom: 1rem;
                margin-top: 0.5rem;
                font-size: 0.8rem;
                text-align: center;
                color: #999;
                font-weight: 400;
            }
            p{
                font-size: 0.5rem;
                color: #999;
                margin: 0.2rem 0;
            }
        }
    }
    .cardpay{
        background-color: #4cd964;
    }
}
</style>