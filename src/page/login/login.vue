<template>
    <div class="box">
    <Header leftBack="true"> 
          <div slot="message">密码登录</div>
    </Header>
    <form>
    <section>
        <input type="text" placeholder="账号" v-model="phoneNum">
    </section>
    <section>
        <input type="password" placeholder="密码" v-model="password" v-if="!showPassword">
        <input type="text" placeholder="密码" v-model="password" v-else>
        <div  class="dotBox"  :class="{transBgc:showPassword}"    >
            <span class="dot" :class="{transRight:showPassword}" ref="dot" @touchstart="showPwd"></span>
        </div>
    </section>
    <section>
        <input type="text" placeholder="验证码" v-model="codeNumber">
        <img :src="codeImg" alt="" class="img" v-show="codeImg">
        <p @touchstart="transImg">看不清？换一张</p>
    </section>
    </form>
    <p>温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p>注册过的用户可凭账号密码登录</p>
    <div class="submit" @touchstart="submit">登录</div>
    <router-link to="/forget">重置密码？</router-link>
    <alertTip v-show="showAlert" :tipText="alertText" @closeTip="closeTip">{{alertText}}</alertTip>
    </div>
</template>
<script>
import qs from "qs"
import Header from '../../components/head/header.vue'
import {captCodeImg,accountLogin} from '../../untils/api'
import alertTipVue from '@/components/alertTip.vue'
export default{
    name:'Login',
    components:{
        Header,
        alertTip:alertTipVue
    },
    data(){
        return{
            phoneNum:null,//用户名
            password:null,//密码
            codeNumber:null,//验证码
            showPassword:false,//是否显示密码
            codeImg:null,//验证码图片
            alertText:'',//提示内容
            showAlert:false,//提示框是否显示
        }
    },
    computed:{
        //手机号验证
        rightPhoneNumber(){
            return /^1\d{10}$/.test(this.phoneNum)
        },
        rightCodeNumber(){
            return /^\d{4}$/.test(this.codeNumber)
        }
        },
    methods:{
        //是否显示密码
        showPwd(){
            this.showPassword=!this.showPassword
        },
        //换验证码
        transImg(){
           captCodeImg().then(res=>{
            this.codeImg=res.code
           })
        },
        //登录
        submit(){
            this.transImg()
            if(!this.rightPhoneNumber){
                this.showAlert = true;
                this.alertText = '手机号码格式不正确';
                return 
            }
            else if(this.password===null){
                this.showAlert = true;
                this.alertText = '请输入密码';
                return 
            }
            else if(!this.rightPhoneNumber){
                this.showAlert = true;
                this.alertText = '验证码格式不正确';
                return 
            }
            let data={username:this.phoneNum,password:this.password,captcha_code:this.codeNumber}
            // console.log(data)
            data=qs.stringify(data)
     
           accountLogin(data).then(res=>{
            if(!res.user_id){
                this.showAlert=true
                this.alertText=res.message
            }
            else{
                this.$store.state.userInfo=res.user_id
                console.log(this.$store.state.userInfo)
                localStorage.removeItem('user_id')
                localStorage.setItem('user_id',res.user_id)
                this.$router.push('/')
            }
            }).catch(err=>{
                console.log(err)
            })
        },
        //关闭登录窗口
        closeTip(){
            this.showAlert=false
        }
    },
    created(){
      this.transImg()
      
    },
 
}
</script>
<style lang="less" scoped>
    .box{
        margin-top: 3rem;
        section{
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: white;
            border-bottom: 0.1rem solid #f1f1f1;
            input{
                padding-left: 1rem;
                height: 2.5rem;
                font-size: 0.8rem;
            }
            .img{
               width: 4rem;
               height: 2.5rem;
            }
            p{
                color: #3b95e9;
                text-align: center;
                line-height: 2rem;
            }
            div{
                position: relative;
                margin-top: 0.8rem;
                background-color: #ccc;
                border-radius: 0.5rem;
                width: 3rem;
                height: 1rem;
                .dot{
                    position: absolute;
                    top: -0.25rem;
                    transition: all 0.5s;
                    border-radius: 50%;
                    z-index: 1;
                    background-color: #f1f1f1;
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
        p{
            color: red;
            font-size: 0.5rem;
            margin: 0.5rem 0.3rem;
        }
        .submit{
            background-color: #4cd964;
            border-radius: 0.15rem;
            font-size: 1rem;
            height: 2rem;
            width:  95%;
            margin: 0 2.5%;
            text-align: center;
            line-height: 2rem;
            color: white;
        }
        a{
            float: right;
            margin:0.5rem 0.25rem ;
            font-size: 0.7rem;
            color: #3b95e9;
        }
        .transRight{
            transform: translateX(1.5rem);
        }
        .transBgc{
            background-color: #4cd964;
        }
}   
</style>