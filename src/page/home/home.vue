<template>
    <div class="box">
        <div>
            <Header>
                <div slot="logo">elm</div>
                 <router-link :to="{name:'login'}" slot="login"><span>登录|注册</span></router-link>
            </Header>
        </div>
        <div class="body">
        <div class="guessTitle">
            <span>当前定位城市：</span>
            <span>定位不准确时请在一下列表寻找</span>
        </div>
        <div class="guessCity">
        <router-link tag="div" :to="{path:'/city',query:{city:guessPosition.id}}">
            <span>{{guessPosition.name}}</span>
            <svg class="icon">
                <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </router-link>
        </div>
        <div class="hotCities" >
            <div> 
                <span>热门城市</span>
            </div>
           <ul >
            <router-link tag="li" :to="{path:'/city',query:{city:item.id}}" v-for="item in hotCity" :key="item.id">{{item.name}}</router-link>
           </ul>
        </div>
        <div class="cities">
            <div v-for="(item,key,index) in sortLetter" :key="key" class="areaCity">
               <div class="letter">
                <h4>{{key}}</h4>
                <p v-if="index===0">(按照字母排序)</p>
               </div>
                <ul>
                <router-link tag="li" :to="{path:'/city',query:{city:city.id}}"  v-for="city in item" :key="city.id">
                    {{city.name}}
                </router-link>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
 import {guessCity, hotCities,cities} from '../../untils/api'
export default{
    name:'Home',
        data() {
            return {
                // 猜测位置
                guessPosition:'',
                //热门城市
                hotCity:'',
                //所有城市
                allCities:''
            }
        },
        components:{
            Header
        },
        created(){
            //获取当前城市
            guessCity().then(res=>{
                this.guessPosition=res
               
            })
            //获取热门城市
            hotCities().then(res=>{
              this.hotCity=res
            })
            //获取所有城市
            cities().then(res=>{
                this.allCities=res
            })
        },
        computed:{
            //将数据按字母排序
            sortLetter(){
                let sortCities={}
                for(let i=65;i<90;i++){
                    if(this.allCities[String.fromCharCode(i)]){
                        sortCities[String.fromCharCode(i)]=this.allCities[String.fromCharCode(i)]
                    }
                }
                return sortCities  
            }
         
        },
        methods:{
           
        }
}
</script>
<style lang="less" scoped>
    .body{
        margin-top: 2.4rem;
        .guessTitle{
            display: flex;
            justify-content: space-between;
            height: 2.4rem;
            background-color: #fff;
            border-bottom: 0.03rem solid #e4e4e4;
            span{
                margin: 0 0.5rem;
                font-size: 0.7rem;
                line-height: 2.5rem;
                color: #666;
            }
            :nth-last-child(1){
                font-size: 0.5rem;
                color: #9f9f9f;
            }
        }
        .guessCity{
            background-color: #fff;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
           
            height: 2.4rem;
            border-bottom: 0.03rem solid #e4e4e4;
            div{ display: flex;
            justify-content: space-between;
            span{
                font-size: 1rem;
                color: #3190e8;
            }
            svg{    
                    padding-top: 0.2rem;
                    width: 1rem;
                    height: 1rem;
                    fill: #999;
            }
        }
        }
        .hotCities{
            background-color: #fff;
            border-top: 0.03rem solid #e4e4e4;
            line-height: 2rem;
            color: #666;
            font-size: 0.6rem;
            margin-bottom: 0.5rem;
            div{
                padding-left: 1rem;
                border-bottom: 0.03rem solid #e4e4e4;
            }
            ul{
                li{
                    display: inline-block;
                    border-bottom: 0.01rem solid #e4e4e4;
                    border-left: 0.01rem solid #e4e4e4 ;
                    width: 25%;
                    text-align: center;
                    font-size: 0.7rem;
                    color: #3190e8;
                }
            }
        }
        .cities{
            .areaCity{
                margin-bottom: 0.5rem;
                background-color: #fff;
                border-bottom: 0.1rem solid #e4e4e4;
           .letter{
            
            border-top: 0.1rem solid #e4e4e4;
            border-bottom: 0.1rem solid #e4e4e4;
            h4{
                display: inline-block;
                margin-left: 0.5rem;
                font-size: 0.7rem;
                font-weight: 400;
                color: #666;
            }
            p{
                margin-left: 0.2rem;
                line-height: 2rem;
                display: inline-block;
                font-size: 0.1rem;
                color: #9f9f9f;
            }
           }
            ul{
                overflow: hidden;
                li{
                    float: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    border-right: 0.05rem solid #e4e4e4;
                    border-bottom: 0.05rem solid #e4e4e4;
                    text-align: center;
                    line-height: 2rem;
                    font-size: 0.7rem;
                    width: 25%;
                    height: 2rem;
                    color: #666;
                }
            }
        }
    }
    }
</style>