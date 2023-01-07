<template>
    <div class="box">   
        <Header leftBack="true">
            <div slot="message">重置密码</div>
        </Header>
        <section class="section_input">
            <div>
                <input type="text" placeholder="账号" v-model="username" required>
            </div>
            <div>
                <input type="text" placeholder="旧密码" v-model="oldPsd">
            </div>
            <div>
                <input type="text" placeholder="请输入新密码" v-model="newPsd">
            </div>
            <div>
                <input type="text" placeholder="请确认新密码" v-model="newPsdAgain">
            </div> 
            <section class="code_img">
            <input type="text" placeholder="验证码" v-model="codeNumber" maxlength="4">
            <img :src="codeImg" alt="" class="img" v-show="codeImg">
            <p @touchstart="transImg">看不清？换一张</p>
             </section>  
        </section>
        <button @touchend="postChangePwd">确认修改</button>
        <alertTipVue :tipText="tipText" @closeTip="show" v-show="showTip"></alertTipVue>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import alertTipVue from '@/components/alertTip.vue'
import {captCodeImg,changePwd} from '../../untils/api'
import qs from 'qs'
export default{
    name:'forget',
    components:{
        Header,
        alertTipVue
    },
    data(){
        return{
            codeImg:null,//验证码图片
            codeNumber:null,//验证码
            username:null,//用户名
            oldPsd:null,//旧密码
            newPsd:null,//新密码
            newPsdAgain:null,//确认新密码
            tipText:null,//提示文字
            showTip:false,//是否展示提示框
        }
    },
    methods:{
          //换验证码
        transImg(){
           captCodeImg().then(res=>{
            this.codeImg=res.code
           })
        },
        //修改密码
        postChangePwd(){
            this.transImg()
            if(!this.username){
                this.tipText='请输入用户名'
                this.showTip=true
            }
            else if(!this.oldPsd){
                this.tipText='请输入旧密码'
                this.showTip=true
            }
            else if(!this.newPsd){
                this.tipText='请输入新密码'
                this.showTip=true
            }
            else if(!(this.newPsdAgain===this.newPsd)){
                this.tipText='两次输入密码不一致'
                this.showTip=true
            }
            else if(!this.codeNumber){
                this.tipText='请输入验证码'
                this.showTip=true
            }
            else{
                let data={username:this.username,oldpassWord:this.oldPsd,newpassword:this.newPsd,confirmpassword:this.newPsdAgain,captcha_code:this.codeNumber}
                data=qs.stringify(data)
                changePwd(data).then(res=>{
                    this.tipText=res.success
                    this.showTip=true
                })
                this.username=null
                this.oldPsd=null
                this.newPsd=null
                this.newPsdAgain=null
                this.codeNumber=null
            }
        },
        //是否出现提示框
        show(){
            this.showTip=false
        }
    },
    created(){
        this.transImg()
    }
}
</script>
<style lang="less" scoped>
    .box{
        margin-top: 3rem;
        .section_input{
            background-color: #fff;
           div{
            padding-left: 0.5rem;
            border-bottom: 0.05rem solid #e4e4e4;
            input{
                padding: 0.1rem;
                width: 70%;
                height: 3rem;
                font-size: 0.8rem;
                color: #666;
            }
           }
        }
        .code_img{
            padding-left: 0.5rem;
            input{
                padding: 0.1rem;
                width: 50%;
                height: 3rem;
                font-size: 0.8rem;
                color: #666;
            }
            p{
                display: inline-block;
                width: auto;
                height: auto;
                font-size: 0.5rem;
                color: #3b95e9;
            }
         
        }
        button{
                width: 80%;
                height: 2rem;
                margin-left: 10%;
                margin-top: 1rem;
                border-radius: 0.5rem;
                background-color: #4cd964;
                font-size: 0.8rem;
                color: white;
            }
    }
</style>