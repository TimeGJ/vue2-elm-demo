<template>
    <div class="box">
        <Header leftBack="true">
            <div slot="message">{{title}}</div>
        </Header>
        <div class="body_box">
            <div class="section_box" @touchend="showCategory=!showCategory"> 
                <span :style="{'color':showCategory?'#3190e8':'#333'}">分类</span>
                <svg :style="{'transform': showCategory?'rotate(180deg)':'rotate(0deg)'}">
                    <use xlink:href="#icon-caret-bottom"></use>
                </svg>
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
            <div class="show_box" v-show="showCategory">
                <div class="translation_box">
                <section>
                    <ul>
                        <li v-for="item,index in category" :key="item.id" @touchstart="changeCategoryItem(index)" :style="{backgroundColor:index==categoryItem?'#fff':'#f1f1f1'}">
                            <div>
                                <img :src="getImgPath(item.image_url)" alt="">
                                 <p>{{item.name}}</p>
                            </div>
                            <div>
                                <span class="span_bd">{{item.count}}</span>
                                <svg>
                                    <use xlink:href="#icon-arrow-right"></use>
                                </svg>
                            </div>
                        </li>
                       
                    </ul>
                </section>
                 <section class="right_box">
                        <ul>
                            <li v-for="item in category[categoryItem].sub_categories" :key="item.id" class="li_bd" @touchend="changeCategoryIds(item.id)">
                            <p>{{item.name}}</p>
                        <span>{{item.count}}</span></li>
                        </ul>
                </section>
            </div>
                </div>
        </div>
        <ShopList :hashLatitude="latitude" :hashLongitude="longitude" :categoryId="categoryId" :categoryIds="categoryIds"></ShopList>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import ShopList from '../../components/shoplist'
import {getCategory} from '../../untils/api'
export default{
    name:'food',
    components:{
        Header,
        ShopList,
    },
    props:{

    },
    data(){
        return {
            geohash:null,//经纬度
            title:'',//商店标题
            categoryId:'',//分类id 
            category:null,//商铺分类列表
            categoryIds:null,//分类的分类id
            latitude:null,//经度
            longitude:null,//纬度
            categoryItem:0,//当前是哪一个分类页面
            showCategory:false,//是否显示分类
        }
    },
    methods:{
        //获取商铺分类列表
        initCategory(){
            getCategory(this.latitude,this.longitude).then(res=>{
                this.category=res
            })
        },
        	//传递过来的图片地址需要处理后才能正常使用
		getImgPath(path) {
			let suffix;
			if (!path) {
				return '//elm.cangdu.org/img/default.jpg'
			}
			if (path.indexOf('jpeg') !== -1) {
				suffix = '.jpeg'
			} else {
				suffix = '.png'
			}
			let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
			return 'https://fuss10.elemecdn.com' + url
		},
        //根据对应的选择修改显示的分类
        changeCategoryItem(index){
            this.categoryItem=index
        },
        //改变分类id
        changeCategoryIds(id){
            this.categoryIds=id
        }
    },
    computed:{
    },
    created(){
        this.title=this.$route.query.title
        this.geohash=this.$store.state.position
        this.categoryId=this.$route.query.id
        this.initCategory()
        if(this.geohash){
            this.latitude=this.geohash.split(',')[0]
            this.longitude=this.geohash.split(',')[1]
        }
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
        z-index: 1;
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
    .show_box{
        position: fixed;
        top: 5rem;
        bottom: 0;
        background-color:rgba(0,0,0,0.3);
      
        width: 100%;
        z-index: 1;
        .translation_box{
            transition: all 0.3s;
            overflow: hidden;
            display: flex;
            justify-content:start;
        }
        section{
            width: 50%;
            background-color: #f1f1f1;
            height: 18rem;
            li{
                display: flex;
                justify-content: space-between;
                padding-left: 0.5rem;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                height: 2rem;
                color: #666;
                img{
                    width: 1rem;
                    height: 1rem;
                    vertical-align:text-bottom;
                }
                p{
                    margin-left: 0.2rem;
                    display: inline-block;
                    font-size: 0.7rem;
                }
                .span_bd{
                    font-size: 0.5rem;
                    background-color: #ccc;
                    border: 0.025rem solid #ccc;
                    border-radius: 1.5rem;
                    color: white;
                }
                svg{
                    width: 1rem;
                    height: 1rem;
                    vertical-align: text-bottom;
                    fill: #ccc;
                    transition: all 1s;
                }
            }
        }
        .right_box{
            width: 50%;
            background-color: white;
            ul{
                height: 18rem;
                overflow: scroll;
                li{
                    padding-top: 0.5rem;
                }
            }
           .li_bd{
            border-bottom: 0.025rem solid #e4e4e4;
            p{
                font-size: 0.5rem;
            }
            span{
                margin-right: 0.5rem;
                font-size: 0.5rem;
            }
           }
        }
    }
}
</style>