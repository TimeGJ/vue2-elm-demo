<template>
    <div class="box">
        <Header>
            <div slot="back"  @click="$router.go(-1)">
            <svg class="back">
                <use xlink:href="#icon-arrow-left"></use>
            </svg>
            </div>
          <div slot="message">密码登录</div>
    </Header>
    <section>
        <input type="text" placeholder="账号">
    </section>
    <section>
        <input type="password" placeholder="密码">
        <div>
        </div>
    </section>
    <section>
        <input type="text" placeholder="验证码">
    </section>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
export default{
    name:'Login',
    data(){
        return{

        }
    },
    components:{
        Header
    }
}
</script>
<style lang="less" scoped>
    .box{
        margin-top: 3rem;
        Header{
            
        div{
            font-size: 1rem;
            font-weight: 700;
        }
     }
        section{
            input{
                padding-left: 1rem;
                border-bottom: 0.1rem solid #f1f1f1;
                width: 100%;
                height: 2.5rem;
                font-size: 0.8rem;
            }
        }
}
</style>