<template>
    <div class="setusername_box">
        <headerVue leftBack="true">
            <div slot="message">
                修改用户名
            </div> 
        </headerVue>
        <section class="setusername_input">
                <input type="text" placeholder="输入用户名" v-model="username"  maxlength="24" :class="{bd_red:!show}" @input="changeshow">
                <p v-show="show">用户名只能修改一次（5-24字符之间）</p>
                <p v-show="!show" class="red">用户名长度在5到24位之间</p>
                <button class="btn" :class="{btn_op:getusername}" @touchend="changename">确认修改</button>
            </section>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
export default{
    name:'setusername',
    components:{
        headerVue
    },
    data(){
        return {
            username:null,//用户名
            show:true
        }
    },
    computed:{
        //判断用户名状态
        getusername:{
            get(){
                return /^\w{5,24}$/.test(this.username)
            }
        }
    },
    methods:{
        //显示的切换
        changeshow(){
            this.show=this.getusername
        },
        //修改用户名
        changename(){
            if(this.getusername){
                this.$store.commit('changeUSername',this.username)
                
            }
            return
        }
    }
}
</script>
<style lang="less" scoped>
.setusername_box{
    position: absolute;
    top: 2.3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    .setusername_input{
        padding:  1rem 0.5rem;
        .red{
            color: red;
        }
        .bd_red{
            border: 1px solid red;
        }
        input{
            width: 100%;
            height: 2rem;
            border: 1px solid #ddd;
            background-color: #f2f2f2;
        }
        p{
            margin: 1rem 0;
            font-size: 0.5rem;
            color: #666;
        }
        .btn{
            width: 100%;
            height: 2.5rem;
            color: #fff;
            border-radius: 0.2rem;
            background: #3199e8;
            opacity: 0.6;
            transition: all 1s;
        }
        .btn_op{
            opacity:1;
        }
    }
   
}
</style>