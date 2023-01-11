<template>
    <div class="hbHistory_box">
        <Header leftBack="true">
            <div slot="message">历史红包</div>
        </Header>
        <section class="hbHistory">
            <ul>
                <li v-for="item in hbHistoryData">
                    <div class="hongbao_item">
                    <div class="left">
                        <p class="d">￥<span>{{item.amount}}</span></p>
                        <p class="much">{{item.description_map.sum_condition}}</p>
                    </div>
                    <div class="right">
                        <div>
                            <p>{{item.name}}</p>
                            <svg>
                                <use xlink:href="#icon-yiguoqi"></use>
                            </svg>
                        </div>
                        <p class="hongbao_time">{{item.description_map.validity_periods}}</p>
                        <p class="hongbao_time">{{item.description_map.phone}}</p>
                    </div>
                     </div>
                    <div v-if="item.limit_map" class="hongbao_limit">
                        <p >{{item.limit_map.restaurant_flavor_ids}}</p>
                    </div>
                </li>
              
            </ul>
        </section>
    </div>
</template>
<script>
import Header from '@/components/head/header.vue';
import {getexpirdhongbao} from '@/untils/api'
export default{
    name:'HBHistory',
    components:{
        Header
    },
    data(){
        return{
            hbHistoryData:null,//历史红包数据
        }
    },
    methods:{
        //获取历史红包数据
        inithbHistoryData(){
            getexpirdhongbao(this.$store.state.userInfo,20,0).then(res=>{
                this.hbHistoryData=res
            }).catch(error=>{
                console.log(error)
            })
        }
    },
    created(){
        this.inithbHistoryData()
    }
}
</script>
<style lang="less" scoped>
.hbHistory_box{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 3rem;
    z-index: 12;
    background-color: #f5f5f5;
    .hbHistory{
            ul{
                padding: 0 0.5rem;
                li{
                    background-image: url(@/img/expired.png);
                    background-repeat: repeat-x;
                    background-size: 0.7rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: #fff;
                    margin-bottom: 1rem;
                    border-radius: 0.3rem;
                    .hongbao_limit{
                       
                        background-color: #f9f9f9;
                       
                        p{
                            padding-left: 1rem;
                            height: 1.5rem;
                            font-size: 0.7rem;
                            line-height: 1.5rem;
                            color: #999;
                        }
                        
                    }
                    .hongbao_item{
                        display: flex;
                        justify-content: start;
                    .left{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                        width: 30%;
                        .d{
                            color: #ccc;
                            font-size: 1rem;
                            font-weight: 700;
                            span{
                                color: #ccc;
                                font-size: 1.5rem;
                            }
                        }
                        .much{
                            font-size: 0.6rem;
                            color: #999;
                        }   
                    }
                    .right{
                        width: 70%;
                        padding: 1rem;
                        div{
                            display: flex;
                            justify-content: space-between;
                            p{
                                font-size: 0.8rem;
                                color: #666;
                            }
                            p:nth-last-child(1){
                                color: #ccc;
                            }
                            svg{
                                height: 3rem;
                                width: 3rem;
                            }
                        }
                        .hongbao_time{
                            color: #999;
                            font-size: 0.5rem;
                        }
                    }
                }
                }
            }
        }
}
</style>