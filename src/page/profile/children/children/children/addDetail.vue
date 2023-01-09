<template>
    <div class="detail_box">
        <Header leftBack="true">
            <div slot="message">搜索地址</div>
        </Header>
        <section>
            <div class="bgc_w">
                <input type="text" placeholder="请输入小区/写字楼/学校等">
                <button>确认</button>
            </div>
            <div class="bgc_y">
                <p>为了满足商家的送餐要求，建议您从列表中选择地址</p>
            </div>
            <div class="div_center" v-show="address"> 
                <p>找不到地址？</p>
                <p>请尝试输入小区、写字楼或学校名</p>
                <p>详细地址（如门牌号）可稍后输入哦。</p>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
import Header from '@/components/head/header.vue';
export default{
    name:'AddDetail',
    components:{
        Header
    },
    data(){
        return {
            address:null,//搜索地址
        }
    },
    methods:{

    },
    created(){
        console.log(this.$store.state.position)
    }
}
</script>
<style lang="less" scoped>
.detail_box{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    .bgc_w{
        width: 100%;
        height: 4rem;
        background-color: #fff;
        padding:1rem  0.5rem;
        input{
            width: 70%;
            margin-right: 5%;
            padding-left: 0.5rem;
            height: 2rem;
            background: #f2f2f2;
            border: 1px solid #ddd;
            border-radius: 3px;
        }
        button{
            width: 20%;
            height: 2rem;
            background: #3199e8;
            border-radius: 3px;
            color: white;
        }
    }
    .bgc_y{
        background: #fff6e4;
        p{
            color: #ff883f;
            font-size: 0.7rem;
            text-align: center;
        }
    }
    .div_center{
        position: absolute;
       top: 50%;
       left: 15%;
        p{
            font-size: 0.8rem;
            text-align: center;
            color: #969696;
        }
    }
}
</style>