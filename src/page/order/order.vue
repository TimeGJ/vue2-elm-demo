<template>
    <div>
        <Header leftBack="true">
            <div slot="message">订单列表</div>
        </Header>
       
        <Foot userName="order"></Foot>
    </div>  
</template>
<script>
import Header from '../../components/head/header.vue'
import Foot from '../../components/foot/foot.vue'
export default {
    name:'order',
    components:{
        Foot,
        Header
    },
    data(){
        return {

        }
    },
}
</script>
<style lang="less" scoped>
</style>