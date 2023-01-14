<template>
    <div>
        <section></section>
        <section></section>
        <section></section>
    </div>
</template>
<script>
import {getShopping} from '@/untils/api'
export default{
    name:'Shop',
    data(){
        return{
            data:null,//商铺数据
        }
    },
    methods:{
        initdata(){
            getShopping(this.$route.query.id).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.initdata()
    }

}
</script>
<style lang="less" scoped>
</style>