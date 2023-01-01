<template>
    <div class="box">
        <Header leftBack="true">
            <div slot="message">{{title}}</div>
        </Header>
        <div class="body_box">
            <div class="section_box">
                <span>分类</span>
                <svg>
                    <use xlink:href="#icon-caret-bottom"></use>
                </svg>
                <section>
                    <ul>
                        <li>
                            
                        </li>
                        <section>
                            <ul></ul>
                        </section>
                    </ul>
                </section>
            </div>
            <div class="section_box">
                <span>排序</span>
                <svg>
                    <use xlink:href="#icon-caret-bottom"></use>
                </svg>
            </div>
            <div class="section_box">
                <span>筛选</span>
                <svg>
                    <use xlink:href="#icon-caret-bottom"></use>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import Shoplist from '../../components/shoplist'
import {getCategory,getShoppingList} from '../../untils/api'
export default{
    name:'food',
    components:{
        Header,
        Shoplist   
    },
    props:{

    },
    data(){
        return {
            title:'',//商店标题
            category:null,//商铺分类列表
            latitude:null,//经度
            longitude:null,//纬度
            shoplist:null,//商店列表
            imgBaseUrl:''//图片基础地址
        }
    },
    methods:{
        //获取商铺分类列表
        initCategory(){
            getCategory(latitude,longitude).then(res=>{
                console.log(res)
                this.category=res
            })
        },
        //获取商店列表
        chooseShopList(){
            getShoppingList().then(res=>{
                this.shoplist=res
            })
        }
    },
    computed:{
        
    },
    created(){
        this.title=this.$route.query.title
    }
}
</script>
<style lang="less" scoped>
.box{
    .body_box{
        padding-top: 2.5rem;
        width: 100%;
        background-color: white;
        border-bottom: 0.05rem solid #e4e4e4;
        .section_box{
        display: inline-block;
        width: 33%;
        text-align: center;
        font-size: 0.7rem;
        line-height: 2.5rem;
        background-color: white;
         svg{
            width: 1rem;
            height: 1rem;
            vertical-align: text-bottom;
            }
         }
    }
   
}
</style>