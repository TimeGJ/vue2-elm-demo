<template>
    <div>
        <Header leftBack="true">
            <div slot="message">搜索</div>
        </Header>
        <div class="search_box">
            <section>
            <form @submit.prevent>
                <input type="search" required placeholder="请输入商家或美食名称" v-model="searchName">
                <button @touchstart="addHistorySearch" @touchend="send">提交</button>
            </form>
            </section>
            <div class="search-result">
                <div v-show="historySearch&&(!searchName)&&(!rest)">
                    <span>搜索历史</span>
                    <ul>
                        <li v-for="(address,index) in historySearch" :key="index">
                            <p class="history_address" @touchstart="historySearchRest(address)">{{address}}</p>
                            <svg @touchend="clearThisHistory(index)">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </li>
                    </ul>
                    <button class="history_clear" @touchend="clearHistory">清空搜索历史</button>
                </div>
                <div v-show="rest">
                    <span>商家</span>
                    <ShopList :hash="geoHash" :keyword="keyword"></ShopList>
                </div>
                <div v-show="search" class="no_search">
                    <span>很抱歉！没有搜索到对应地址</span>
                </div>
            </div>
        </div>
        <Foot userName="search"></Foot>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import Foot from '../../components/foot/foot.vue'
import ShopList from '../../components/shoplist'
export default{
    name:'Search',
    components:{
        Header,
        Foot,
        ShopList
    },
    data(){
        return {
            historySearch:null,//历史搜索地址
            searchName:null,//搜索地址
            keyword:null,//传给props的搜索字
            geoHash:null,//经纬度
            rest:false,//是否显示搜索框
            search:false,//有没有搜索到对应地址
        }
    },
    methods:{
        //获取历史搜索地址
        getHistorySearch(){
            if(localStorage.getItem('searchHistory')){
              this.historySearch=JSON.parse(localStorage.getItem('searchHistory'))
            }
            return
        },
        //传值给组件
        send(){
            this.keyword=this.searchName
            this.rest=true
        },
        //添加历史搜索
        addHistorySearch(){
            let statue=false
            if(localStorage.getItem('searchHistory')){
                let data=null
               data=JSON.parse(localStorage.getItem('searchHistory'))
               data.forEach(str => {
                    if(str==this.searchName){
                        statue=true
                        return
                    }
               });
               if(!statue){
                    data.push(this.searchName)
                    localStorage.setItem('searchHistory',JSON.stringify(data))
               }
               return
            }
            else{
                localStorage.setItem('searchHistory',JSON.stringify([this.searchName]))
            }
            
        },
        //点击历史记录获取商铺
        historySearchRest(address){
                this.keyword=address
                this.rest=true
        },
        //清除指定的历史
        clearThisHistory(index){
            let data=null
            data=JSON.parse(localStorage.getItem('searchHistory'))
            data.shift(index)
            if(data.length<1){
                this.historySearch=null
                localStorage.removeItem('searchHistory')
            }
            else{
                this.historySearch=data
                localStorage.setItem('searchHistory',JSON.stringify(data))
            }
        },
        //清除历史
        clearHistory(){
            localStorage.removeItem('searchHistory')
            this.historySearch=null
        }
    },
    created(){
        this.$store.commit('initPosition')
        this.geoHash=this.$store.state.position
        this.getHistorySearch()
    }
}
</script>
<style lang="less" scoped>
.search_box{
    padding-top: 2.4rem;
   section{
            padding: 0.5rem;
            background-color: white;
        input{
             width: 70%;
             height: 2rem;
             border: 0.1rem solid #e4e4e4;
             border-radius: 0.5rem;
             font-weight: 700;
        }
        button{
            margin-left: 5%;
            width: 20%;
            height: 2rem;
            background-color: #3190e8;
            color: white;
            font-weight: 700;
            border-radius: 0.25rem;
            font-size: .8rem;
        }
   }
   .search-result{
    span{
        padding-left: 1rem;
        line-height: 2rem;
        font-size: 0.7rem;
        font-weight: 700;
        color: #666;
    }
    .history_clear{
        border-top: 0.1rem solid #e4e4e4;
        width: 100%;
        height: 2.5rem;
        background-color: white;
        color: #3190e8;
        font-weight: 700;
        font-size: 1rem;
    }
    ul{
        li{
            display: flex;
            justify-content: space-between;
            background-color: white;
            border-bottom:0.1rem solid #e4e4e4 ;
            .history_address{
                width: 70%;
                padding-left: 1rem;
                line-height: 2rem;
                font-size: 0.7rem;
            }
            svg{
                margin-top: 0.5rem;
                margin-right: 0.5rem;
                width: 1rem;
                height: 1rem;
                vertical-align: middle;
                fill: rgb(153,153,153);
            }
        }
    }
   }
}
</style>