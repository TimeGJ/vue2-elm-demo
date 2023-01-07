<template>
    <div class="service_box">
        <headerVue leftBack="true">
            <div slot="message">
                服务中心
            </div>
        </headerVue>
        <section class="service_connect">   
            <div>
                <router-link to="">
                    <svg>
                        <use xlink:href="#icon-kefu"></use>
                    </svg>
                    <p>在线客服</p>
                </router-link>
            </div>
            <div>
                <router-link to="">
                    <svg>
                        <use xlink:href="#icon-dianhua"></use>
                    </svg>
                    <p>在线客服</p>
                </router-link>
            </div>
        </section>
        <section class="service_question">
            <h4>热门问题</h4>
            <ul>
                <li v-for="(item,index) in question" :key="index" @touchend="gotoquestionDetail(index,item)">
                    <span>{{item}}</span>
                    <svg>
                        <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                </li>
            </ul>
        </section>
        <router-view></router-view>
    </div>

</template>
<script>
import {getexplain} from '@/untils/api'
import headerVue from '@/components/head/header.vue';
export default{
    name:'service',
    components:{
        headerVue
    },
    data(){
        return{
            explaindata:null,//问题答案数据
            question:[],//问题
            answer:[],//答案
        }
    },
    computed:{
    },
    methods:{
        //初始化数据
        initdata(){
            getexplain().then(res=>{
                this.explaindata=Object.values(res)
                let status=true
                this.explaindata.forEach(item=>{
                    if(!status&&(/^[^#]+$/.test(item))){
                        this.question.push(item)
                        status=true
                    }
                    else if(status){
                        this.answer.push(item)
                        status=false
                    }
             })
            }).catch(error=>{
                console.log(error)
            })
  
        },
        //点击跳转
        gotoquestionDetail(index,title){
            this.$router.push({path:'/service/questionDetail',query:{
                title:title,index:index
            }})
        }
    },
    created(){
        this.initdata()
        this.$store.commit('getquestionDetail')
    }
}
</script>
<style lang="less" scoped>
.service_box{
    padding-top: 2.5rem;
    background-color: #fff;
    .service_connect{
        display: flex;
        justify-content: space-around;
        div{
            width: 50%;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0.01rem solid #f4f4f4;
            svg{
                position: relative;
                left: 0.6rem;
                width: 1.5rem;
                height: 1.5rem;
            }
            p{
                font-size: 0.7rem;
                color: #666;
            }
        }
    }
    .service_question{
        h4{
            height: 3rem;
            line-height: 3rem;
            padding: 0 1rem;
        }
        ul{
           
            li{
                display: flex;
                justify-content: space-between;
                height: 2rem;
                line-height: 2rem;
                padding: 0 1rem;
                border-top: 1px solid #f5f5f5;
                svg{
                    position: relative;
                    top: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                    fill: rgb(153, 153, 153);
                    
                }
                span{
                    color: #666;
                    font-size: 0.8rem;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>