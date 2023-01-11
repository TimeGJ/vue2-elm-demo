<template>
    <div class="changeHB_box">
        <Header leftBack="true">
            <div slot="message">
                兑换红包
            </div>
        </Header>
        <section>
            <div class="exchange">
                <input type="text" placeholder="请输入兑换码" v-model="exchangeNum">
            </div>
            <div class="code">
                <input type="text" placeholder="验证码" v-model="codeNum" maxlength="4">
                <div @touchend="transImg">
                    <img :src="codeImg" alt="">
                    <div>
                        <p>看不请</p>
                        <p>换一张</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <button class="btn" :class="{change_bgc:getCodeNum}" @touchend="getCodeNum&&exchangeHB()">兑换</button>
        </section>
        <AlertTip v-show="showtip" @closeTip="closeTip " :tipText="tipText"></AlertTip>
    </div>
</template>
<script>
import AlertTip from '@/components/alertTip.vue';
import Header from '@/components/head/header.vue';
import {exchangehongbao,captCodeImg} from '@/untils/api'

export default{
    name:'exchangeHB',
    components:{
        Header,
        AlertTip
    },
    data(){
        return{
            codeImg:null,//验证码图片
            codeNum:null,//验证码
            exchangeNum:null,//兑换码
            showtip:false,
            tipText:null,
        }
    },
    methods:{
          //换验证码
          transImg(){
           captCodeImg().then(res=>{
            this.codeImg=res.code
           })
        },
        //兑换红包
        exchangeHB(){
            exchangehongbao(this.$store.state.userInfo,this.exchangeNum,this.codeNum).then(res=>{
                this.showtip=true
                this.tipText=res.message
            })
        },
        //close tip
        closeTip(){
            this.showtip=false
        }
    },
    computed:{
        getCodeNum:{
            get(){
                return (/^[0-9]{4}$/.test(this.codeNum)&&/^[0-9 a-z A-Z]+$/.test(this.exchangeNum))
            }
        }
    },
    created(){
        this.transImg()
    },
}
</script>
<style lang="less" scoped>
.changeHB_box{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 2.3rem;
    background-color: #f1f1f1;
    section{
        padding: 1rem 0.5rem;
            .exchange{
                input{
                    width: 100%;
                    height: 2rem;
                    background-color: #fff;
                    border-radius: 3px;
                    font-size: 0.8rem;
                    color: #999;
                    padding: 0.5rem;
                }
            }
            .code{
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;
               input{
                width: 65%;
                height: 2rem;
                background-color: #fff;
                border-radius: 3px;
                font-size: 0.8rem;
                color: #999;
                padding: 0.5rem;
               }
               div{
                display: flex;
                justify-content: space-between;
                background-color: #fff;
                img{
                    height: 1.5rem;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p:nth-child(2){
                        color: #3b95e9;
                    }
                    p{
                        font-size: 0.5rem;
                    }
                }
               }
            }
    }
   
    .btn{
        border-radius: 3px;
        width: 95%;
        height: 2rem;
        margin-left: 2.5%;
        background-color: #ccc;
        color: #fff;
    }
    .change_bgc{
        background-color: #4cd964;
    }
}
</style>