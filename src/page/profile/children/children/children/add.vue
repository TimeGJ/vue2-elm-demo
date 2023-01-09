<template>
    <div class="add_box">
        <Header leftBack="true">
            <div slot="message">
                新增地址
            </div>
        </Header>
        <section>
                <input type="text" placeholder="请填写你的姓名" v-model="username" >
                <router-link to="/profile/info/address/add/addDetail"><input type="text" placeholder="小区/写字楼/学校等" v-model="address"></router-link>
                <input type="text" placeholder="请填写详细送餐地址" v-model="detailedAddress">
                <input type="text" placeholder="请填写能够联系到您的手机号" v-model="telephone">
                <input type="text" placeholder="备用联系电话（选填）" v-model="telephones">
         </section>
         <button class="btn">新增地址</button>
         <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/head/header.vue';
export default{
    name:'Add',
    components:{
        Header
    },
    data(){
        return {
            username:null,//用户名
            address:null,//小区/写字楼/学校等"
            detailedAddress:null,//请填写详细送餐地址
            telephone:null,//手机号
            telephones:null,//备用联系电话（选填）
        }
    },
    methods:{
            
    },
}
</script>
<style lang="less" scoped>
.add_box{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 13;
    section{
        width: 100%;
        background-color: #fff;
        padding: 0.5rem;
        input{
            margin: 0.25rem 0;
            width: 100%;
            height: 2rem;
            background: #f2f2f2;
             border: 1px solid #ddd;
             border-radius: 3px;
            padding-left: 0.5rem;
        }
    }
    .btn{
        margin-top: 1rem;
        margin-left: 5%;
        width: 90%;
        height: 2rem;
        opacity: 0.6;
        color: #fff;
        background: #4cd964;
        border-radius: 3px;
    }
}
</style>