<template>
    <div class="buyvip_box">
        <headerVue leftBack="true">
            <div slot="message">购买记录</div>
        </headerVue>
        <section>
            <img src="@/img/no-log.png" alt="">
            <p>没有购买记录</p>
        </section>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
export default{
    name:'invoiceRecord',
    data(){
        return{

        }
    },
    components:{
        headerVue
    }
}
</script>
<style lang="less" scoped> 
.buyvip_box{
    position: fixed;
    top:2.3rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    background-color: #fff;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 10rem;
            margin-top: 5rem;
        }
        p{
            margin-top: 2rem;
            text-align: center;
            font-size: 0.8rem;
            color: #999;
        }
    }
}
</style>