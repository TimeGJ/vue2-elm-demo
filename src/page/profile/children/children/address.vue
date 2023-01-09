<template>
    <div class="address_box">
        <headerVue left-back="true">
            <div slot="message">编辑地址</div>
        </headerVue>
        <section class="address_cont">
            <router-link to="/profile/info/address/add">
                <div>
                    <span>新增地址</span>
                    <svg>
                        <use xlink:href="#icon-arrow-right"></use>
                    </svg>
                </div>
            </router-link>
        </section>
        <router-view></router-view>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
export default{
    name:'Address',
    components:{
        headerVue
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.address_box{
    position: absolute;
    top: 2.3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    .address_cont{
        margin-top: 1rem;
        border-top: 1px solid #d9d9d9;
        div{
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            padding: 0.5rem 0.5rem;
            span{
                font-size: 0.9rem;
                color: #333;
            }
            svg{
                width: 1rem;
                height: 1rem;
                fill: #999;
            }
        }
    }
}
</style>