<template>
    <div class="box">
        <section class="user_info">
        <div>
            <ul>
                <router-link to="">
                <li>
                    <p>头像</p>
                    <div>
                        <img :src="imgBaseurl+userInfo.avatar" alt="" v-if="userInfo" class="img_bd">
                        <svg>
                            <use xlink:href="#icon-arrow-right"></use>
                        </svg>
                    </div>
                </li>
            </router-link>
            <router-link to="">
                <li>
                    <p>用户名</p>
                    <div>
                        <span v-show="username">{{username}}</span>
                        <svg>
                            <use xlink:href="#icon-arrow-right"></use>
                        </svg>
                    </div>
                </li>
            </router-link>
            <router-link to="">
                <li>
                    <p>收货地址</p>
                    <div>
                        <span>{{userAddress}}</span>
                        <svg>
                            <use xlink:href="#icon-arrow-right"></use>
                        </svg>
                    </div>
                </li>
            </router-link>
            </ul>
        </div>
    </section>
    <section class="phone_pwd">
        <div>
            <ul>
                <li><p>账号绑定</p></li>
                <li>
                    <div>
                        <p>
                            <svg class="svg_color">
                                <use xlink:href="#icon-mobile-phone"></use>
                            </svg>
                            <span>手机</span>
                        </p>
                        <svg>
                            <use xlink:href="#icon-arrow-right"></use>
                        </svg>
                    </div>
                </li>
                <li><p>安全设置</p></li>
                <li>
                    <div>
                    <span>
                        登陆密码
                    </span>
                    <div>
                        <span>修改</span>
                        <svg>
                            <use xlink:href="#icon-arrow-right"></use>
                        </svg>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    </section>
    <button class="btn" @touchend="logoff">退出登录</button>
    </div>
</template>
<script>
import {getUserInfo,signOut} from '../../../untils/api'
export default{
    data(){
        return{
            userInfo:null,//用户信息
            imgBaseurl:'//elm.cangdu.org/img/',//图片地址
            username:null,//用户名
            userAddress:'',//用户地址
        }
    },
    inject:['reload'],
    methods:{
          //获取用户信息
          async initUserInfo(){
           await getUserInfo().then(res=>{
                this.userInfo=res
            })
        },
        //退出登录
        logoff(){
             signOut().then(res=>{
                if(res.message=='退出成功'){
                    this.userInfo=null
                    this.$store.commit('clearUserInfo')
                    this.$router.push('/profile')
                    this.clear()
                }
            }).catch(error=>{
                console.log(error)
            })
            
        },
        //重新加载父页面
        clear(){
            this.reload()
        }
    },
    watch:{
        userInfo:{
            handler(val,old){
                if(val){
                    this.username=val.username
                    if(val.current_address_id!=0){
                    this.userAddress=val.current_address_id
                }
                return
                }
               
            }
        }
    },
    created(){
        this.initUserInfo()
    }
}
</script>
<style lang="less" scoped>
.box{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#f2f2f2;
    .user_info{
        position: relative;
        top: 0.5rem;
        ul{
            background-color: #fff;
          li{
            display: flex;
            justify-content: space-between;
            padding: 0 0.5rem;
            border-bottom: 0.01rem solid #e4e4e4;
            p{
                line-height: 4rem;
                font-size: 0.7rem;
                color: #333;
            }
                div{
                    display: flex;
                    justify-content: start;
                    span{
                        line-height: 3.9rem;
                        font-size: 0.8rem;
                        color: #999;
                    }
                    svg{
                        position: relative;
                        top:1.5rem;
                        width: 1rem;
                        height: 1rem;
                        fill: rgb(216, 216, 216);
                    }
                }
          }
            .img_bd{
                position: relative;
                top: 1rem;
            border-radius: 100%;
            width: 2rem;
            height: 2rem;
        }
        }
    }
    .phone_pwd{
        position: relative;
        top: 0.5rem;
        ul{
            li:nth-child(2n-1){
                p{
                    line-height: 2.5rem;
                }
            }
            li:nth-child(2n){
                background-color: #fff;
                div:nth-child(1){
                    position: relative;
                    top: 0.7rem;
                    display: flex;
                    justify-content: space-between;
                    svg{
                    width: 1rem;
                    height: 1rem;
                    vertical-align: text-bottom;
                    fill: rgb(216, 216, 216);
                    }
                    .svg_color{
                        fill: #3190e8;
                    }
                }
            }
            li{
                height: 2.5rem;
                font-size: 0.8rem;
                padding: 0 0.5rem;
                border: 0.01rem solid #e4e4e4;
             
            }
        }
    }
    .btn{
        width: 90%;
        height: 2rem;
        margin-left: 5%;
        margin-top: 2rem;
        border-radius: 0.5rem;
        color: #fff;
        background: #d8584a;
        font-size: 0.8rem;
    }
}

</style>