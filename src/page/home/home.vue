<template>
    <div class="box">
        <div>
            <Header>
                <div slot="logo">elm</div>
                <div slot="message">{{$store.state.position}}</div>
            </Header>
        </div>
        <div class="body">
        <div class="guessTitle">
            <span>当前定位城市：</span>
            <span>定位不准确时请在一下列表寻找</span>
        </div>
        <div class="guessCity">
            <span>{{guessPosition}}</span>
            <svg class="icon">
                <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </div>
        <div class="hotCities">
           <span>热门城市</span>
        </div>
    </div>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
 import {guessCity} from '../../untils/api'
export default{
        data() {
            return {
                guessPosition:''
            }
        },
        components:{
            Header
        },
        created(){
            guessCity().then(res=>{
                this.guessPosition=res.name
            })
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
            display: flex;
            justify-content: space-between;
            height: 2.4rem;
            border-bottom: 0.03rem solid #e4e4e4;
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
        .hotCities{
            background-color: #fff;
            padding-left: 1rem;
            border-top: 0.03rem solid #e4e4e4;
            border-bottom: 0.03rem solid #e4e4e4;
            line-height: 2rem;
            color: #666;
            font-size: 0.6rem;
        }
    }
</style>