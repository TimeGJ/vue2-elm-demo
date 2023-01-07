<template>
    <div class="download_box">
        <headerVue leftBack="true">
            <div slot="message">
                下载
            </div>
        </headerVue>
        <section>
            <img src="@/img/elmlogo.jpeg" alt="">
            <p>下载饿了么APP</p>
            <button @touchend="downTip">下载</button>
        </section>
        <alertTipVue :tipText="tipText" v-show="showTip" @closeTip="closeTip"></alertTipVue>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
import alertTipVue from '@/components/alertTip.vue';
export default{
    name:'download',
    components:{
        headerVue,
        alertTipVue
    },
    data(){
        return{
            showTip:false,//显示提示框
            tipText:null,//提示内容
        }
    },
    methods:{
        //下载按钮
        downTip(){
            this.showTip=true
            this.tipText='请前往APPStore下载'
        },
        //closeTip
        closeTip(){
            this.showTip=false
        }
    }
}
</script>
<style lang="less" scoped>
.download_box{
    position: absolute;
    top: 2.3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height:20rem;
        img{
            border-radius: 0.7rem;
        }
        p{
            margin: 1rem 0;
        }
        button{
            width: 90%;
            margin-left: 5%;
            background-color: #4cd964;
            color: #fff;
            text-align: center;
            height: 2rem;
            border-radius: 0.5rem;
        }
    }
}
</style>