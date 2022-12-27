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
       <nav>
       <div class="bannerbox">
        <div class="banner" ref="swiperBox" @touchmove="swiper" @touchstart="initX" @touchend="swiperEnd">
            <div v-for="(arr,index) in foodList " :key="index" class="swiperList" >
            <ul>
                <router-link :to="{path:'/food',query:{title:item.title}}" v-for="item in arr" :key="item.id">
                    <li><img :src='imgBaseurl+item.image_url' alt="">
                    <span>{{item.title}}</span></li>
                </router-link>
            </ul>
        </div>
        </div>
        <span class="swiper-circle" v-for="item in circleNum" :class="{'circle-Change':index==item-1}" ref="circle"></span>
       </div>
     </nav>
       <div class="shopping-list">
        <div class="shopping-tip">
            <svg>
                <use xlink:href="#icon-s-shop"></use>
            </svg>
            <span class="tip">附近商家</span>
        </div>
        <shoppingList :hashLatitude="address.latitude" :hashLongitude="address.longitude" ></shoppingList>
       </div>
       <Footer userName="msite"></Footer> 
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import Footer from '../../components/foot/foot.vue'
import shoppingList from '../../components/shoplist.vue'
import {detailedAddress,getFoodList} from '../../untils/api'
export default {
    name:'Msite',
    components:{
        Header,
        Footer,
        shoppingList,
    },
    data(){
        return {
            address:'',//当前地址
            foodList:[],//食品列表
            imgBaseurl:'https://fuss10.elemecdn.com',//图片地址
            m:null,//触摸的初始位置
            w:null,//移动的范围
            index:0,//第几页了
            circleNum:null//几个点
        }
    },
    methods:{
        //根据经纬度求地址
        initAddress(){
            detailedAddress(this.$store.state.position).then(res=>{
                this.address=res
            })
        },
        //回到home页面
        backHome(){
            this.$router.push('/')
        },
        //获取食品列表
        initFoodList(){
            getFoodList().then(res=>{
                let list=[...res]
                let arr=[]
                for(let i=0,j=0;i<res.length;i+=8,j++){
                    arr[j]=list.splice(0,8)
                }
                arr[arr.length]=arr[0]
                this.foodList=arr
                this.circleNum=this.foodList.length-1
            }).catch(error=>{
                console.log(error)
            })
        },
        //轮播图
        swiper(e){
            if(this.w<0){
                this.index=2
                this.$refs.swiperBox.style.transform="translateX(-"+this.$refs.swiperBox.offsetWidth*this.index+"px)"
            }
            this.w=this.m-e.targetTouches[0].pageX+this.index*this.$refs.swiperBox.offsetWidth
            this.$refs.swiperBox.style.transform="translateX(-"+this.w+"px)"
        },
        //初始化触摸轮播图的位置
        initX(e){
            this.$refs.swiperBox.style.transition='none'
            this.m=e.targetTouches[0].pageX
            if(this.index==2){
                this.index=0
                this.$refs.swiperBox.style.transform="translateX(-"+0+"px)"
            }
        },
        //停止触摸轮播图时
        swiperEnd(){
            let offw=this.$refs.swiperBox.offsetWidth
            if(this.w-offw*this.index>offw/3){
                this.index++
                this.$refs.swiperBox.style.transition="All 1s"
                if(this.index==2){
                    this.$refs.circle[0].classList.add('circle-Change')
                }
            }
            else if(this.w-offw*this.index<-offw/3){
                this.index--
                this.$refs.swiperBox.style.transition="All 1s"
            }
            else{
                this.$refs.swiperBox.style.transition="All 1s"
            }
            this.$refs.swiperBox.style.transform="translateX(-"+offw*this.index+"px)"
        }
    },
    created(){
        this.$store.commit('initPosition')
        this.initAddress()
        this.initFoodList()
    },
}
</script>
<style lang="less" scoped>
.box{
    padding-bottom: 1rem;
    Header{
        svg{
            width: 1.3rem;
            height: 1.3rem;
        }
    }
    .bannerbox{
        position: absolute;
        border-bottom: 0.1rem solid #e4e4e4;
       width: 100%;
       height: 13rem;
       background-color: white;
       overflow: hidden;
    }
    .swiper-circle{
                display: inline-block;
                position: relative;
                bottom: 2rem;
                left: 8rem;
                margin-right: 1.5rem;
                border: 0.1rem solid #e4e4e4;
                border-radius: 100%;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #e4e4e4;  
            }
    nav{
        height: 13rem;
       
    .banner{ 
        display: flex;
        // transform: translateX(-100%);
        .swiperList{
            padding-top: 3rem;
            flex-shrink: 0;
            background-color: white;
            width: 100%;
            height: 13rem;
        ul{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          
            a{
            display: flex;
            justify-content: center;
            width: 25%;
                li{
                     img{
                            width: 2.5rem;
                            height: 2.5rem;
                        }
                    span{
                        display: block;
                        font-size: 0.5rem;
                        text-align: center;
                    }
                }
            }
            }
        }
    }
    }
    .shopping-list{
        margin-top: 0.5rem;
        border-top: 0.1rem solid #e4e4e4;
        width: 100%;
        height: auto;
        background-color: white;
        .shopping-tip{
            margin: 0.5rem;
        }
        svg{
            width: 1rem;
            height: 1rem;
            vertical-align: middle;
        }
        .tip{
            font-size: 0.5rem;
            color: #999;
        }
    }
    .circle-Change{
        background-color: #007aff;
        border-color: #007aff;
      }
}
</style>