<template>
    <div class="questionDetail_box">
        <headerVue leftBack="true">
            <div slot="message">{{$route.query.title}}</div>
        </headerVue>
        <p>{{$store.state.questionDetail[$route.query.index]}}</p>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
export default {
    name:'questionDetail',
    data(){
        return {

        }
    },
    components:{
        headerVue 
    },
    created(){

    }
}
</script>
<style lang="less" scoped>
.questionDetail_box{
    position: fixed;
    top: 2.3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 12;
}
</style>