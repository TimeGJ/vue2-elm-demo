<template>
    <div class="box">
       <Header>
        <router-link to="/search" slot="logo">
            <svg >
            <use xlink:href="#icon-search"></use>
            </svg>
        </router-link>
        <div slot="message" @touchstart="backHome">{{address.name}}</div>
        <router-link :to="{path:'/login'}" slot="login" v-if="!this.$store.state.userInfo"><span>登录|注册</span></router-link>
       </Header>
       <div>
        <div class="banner">
            <ul>
                <router-link to="/food">
                    <li></li>
                </router-link>
            </ul>
        </div>
        <div>

        </div>
       </div>
       <Footer userName="msite"></Footer>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import Footer from '../../components/foot/foot.vue'
import {detailedAddress} from '../../untils/api'
export default {
    name:'Msite',
    components:{
        Header,
        Footer
    },
    data(){
        return {
            address:''//当前地址
        }
    },
    methods:{
        //根据经纬度求地址
        initAddress(){
            console.log(this.$store.state.position)
            detailedAddress(this.$store.state.position).then(res=>{
                this.address=res
            })
        },
        //回到home页面
        backHome(){
            this.$router.push('/')
        },
        //获取经纬度
    },
    created(){
        this.$store.commit('initPosition')
        this.initAddress()
    }
}
</script>
<style lang="less" scoped>
.box{
    Header{
        svg{
            width: 1.3rem;
            height: 1.3rem;
        }
    }
}
</style>