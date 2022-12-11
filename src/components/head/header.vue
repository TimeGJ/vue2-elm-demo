<template>
    <header class="head">
        <div class="left">
            <slot name="logo"></slot>
            <slot name="back" @click="$router.go(-1)"></slot>
        </div>
        <div class="msg">
            <slot name="message"></slot>
        </div>
        <div class="login">     
            <router-link to="userLogin"><span>登录|注册</span></router-link>
        </div>
    </header>
</template>
<script>
export default{
    data(){
        return{
            // 切换组件
            userLogin:null
        }
    },

}
</script>
<style lang="less">
.head{  
     display: flex;
        position: fixed;
        justify-content: space-between;
        top: 0;
        left: 0;
        right: 0;
        height:2.4rem;
        background-color: #3190e8;
    .left{
        line-height: 2.5rem;
        margin-left: 1rem;
        color: #fff;
        font-size: 0.8rem;
    }
    .msg{
        display: inline-block;
        height: 100%;
        text-align: center;
        line-height: 2.3rem;
        font-size: 1rem;
        color: #fff;
        }
    .login{
        margin-right: 1rem;
        text-align: center;
        line-height: 2.3rem;
        color: #fff;
        font-size: 0.8rem;
        a{
            color: #fff;
            text-decoration: none;
        }
    }
}
</style>