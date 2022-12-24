<template>
    <div class="footer">
        <div>
            <router-link to="/msite">
            <svg>
                <use xlink:href="#icon-eleme" :class="{'changeColor':userName=='msite'}"></use>
            </svg>
            <span>外卖</span>
        </router-link>
        </div>
        <div>
            <router-link to="/search">
            <svg>
                <use xlink:href="#icon-discover" :class="{'changeColor':userName=='search'}"></use>
            </svg>
            <span>搜索</span>
        </router-link>
        </div>
        <div>
            <router-link to="/order">
            <svg>
                <use xlink:href="#icon-tickets" :class="{'changeColor':userName=='order'}"></use>
            </svg>
            <span>订单</span>
        </router-link>
        </div>
        <div>
            <router-link to="/profile">
            <svg>
                <use xlink:href="#icon-user" :class="{'changeColor':userName=='profile'}"></use>
            </svg>
            <span>我的</span>
        </router-link>
        </div>
    </div>
</template>
<script>
export default{
    name:'Foot',
    props:{
        userName:{
            String,
            require,
        }
    },
    data(){
        return{}
    },
}
</script>
<style lang="less" scoped>
.footer{
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 0.2rem;
    height: 2.5rem;
    background-color: white;
    svg{
        width: 1.2rem;
        height: 1.2rem;
        .changeColor{
            fill:rgb(15, 133, 251) ;
        }
    }
    span{
        display: block;
        font-size: 0.2rem;
    }
}
</style>