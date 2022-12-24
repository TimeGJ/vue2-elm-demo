<template>
    <div>
   <Header leftBack="true"><div slot="message">{{city}}</div>
    <div slot="login" @touchend="$router.go(-1)">切换城市</div>
   </Header>
   <div class="box">
    <form @submit.prevent>
   <div class="searchAddress">
    <div>
    <input type="search" required placeholder="输入学校、商务楼、地址" v-model="keyword">
    </div>
   <div>
    <input type="submit" value="提交" class="btn" @touchend.prevent="search">
   </div>
</div>
</form>
<div class="searchHistory" v-show="!list">搜索历史</div>
<div class="addressList" v-show="!list">
    <ul>
        <li v-for="(item,index) in historyAddress" :key="index" @touchend="nextPage(item.name,item.address,item.geohash)">
            <h4>{{item.name}}</h4>
            <p>{{item.address}}</p>
        </li>
    </ul>
    <div @touchstart="clearHistory" class="clear" v-show="historyAddress">
        清空所有
    </div>
</div>
<div class="addressList">
    <ul>
        <li v-for="(item,index) in list" :key="index" @touchend="nextPage(item.name,item.address,item.geohash)">
            <h4>{{item.name}}</h4>
            <p>{{item.address}}</p>
        </li>
    </ul>
</div>
<div v-show="tipSearch" class="noResult">
    很抱歉!无搜索结果
</div>
</div>
</div>
</template>
<script>
import Header from '../../components/head/header'
import {getCity,searchAddress} from '../../untils/api'
export default {
    name:'City',
    components:{
        Header
    },
    data() {
        return {
            cityId:this.$route.query.city ,//城市id
            city:'',//城市
            keyword:'',//搜索关键字
            list:null,//搜索地址列表
            historyAddress:'',//历史地址
            tipSearch:false,//无搜索提示
        }
    },
    methods:{
        //初始化城市
        initCity(){
            getCity(this.cityId).then(res=>{
            this.city=res.name
            }).catch(error=>{
            console.log(error)
        })
        } ,
        //搜索对应的地址列表
        search(){
            searchAddress(this.cityId,this.keyword).then(res=>{
                if(res.length==0){
                    this.tipSearch=true
                }
                else{
                    this.tipSearch=false
                    this.list=res
                }
                
            }).catch(error=>{
                console.log(error)
            })
        },
        //路由跳转店铺页面
        nextPage(name,address,geohash){
            let data=[{name:name,address:address,geohash:geohash}]
            if(localStorage.getItem('placeHistory')){
                data=JSON.parse(localStorage.getItem('placeHistory'))
                data.push({name:name,address:address,geohash:geohash})
            }
            localStorage.setItem('placeHistory',JSON.stringify(data))
            this.$router.push('/msite')
        },
        //初始化历史地址
        initHistory(){
            if(localStorage.getItem('placeHistory')){ 
                this.historyAddress=JSON.parse(localStorage.getItem('placeHistory')) 
            }
            return
        },
        //清空历史记录
        clearHistory(){
            localStorage.removeItem('placeHistory')
            this.historyAddress=''
        }
    },
    created(){
      this.initCity()
      this.initHistory()
    },
}
</script>
<style lang="less">
.box{
    margin-top: 3rem;
    .searchAddress{
        padding: 1rem 1rem;
        width: 100%;
        height: 6rem;
        background-color: #fff;
        div:first-child{
            input{
            border: 0.1rem solid #e4e4e4;
            height: 2rem;
            width: 100%;
            font-size: 0.7rem;
            }    
        }
        .btn{
           
            font-size: 0.7rem;
            margin-top: 0.5rem;
            background-color: #3190e8;
            color: white;
            height: 2rem;
            width: 100%;
        }
    }
    .searchHistory{
        padding-left: 1rem;
        border-top: 0.1rem solid #e4e4e4;
        border-bottom:0.1rem solid #e4e4e4;
        font-size: 0.5rem;
    }
    .addressList{
        ul{
            background-color: white;
            li{
                padding: 0.2rem 1rem;
                border-top: 0.1rem solid #e4e4e4;
                h4{
                    margin: 0.3rem 0.2rem;
                    font-weight: 400;
                    font-size: 0.7rem;
                }
                p{
                    margin: 0.3rem 0.2rem;
                    font-size: 0.3rem;
                    color: #999;
                }
            }
        }
    }
    .noResult{
        border-top: 0.1rem solid #e4e4e4;
        padding: 0.2rem 1rem;
        background-color: #fff;
        font-size: 0.8rem;
    }
    .clear{
        border-top: 0.1rem solid #e4e4e4;
        text-align: center;
        width: 100%;
        height: 2rem;
        background-color: white;
        font-size: 1rem;
    }
}
</style>