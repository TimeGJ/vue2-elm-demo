<template>
    <header class="head">
        <div class="left">
            <slot name="logo"></slot>
            <div v-if="leftBack" @click="$router.go(-1)">
            <svg class="back">
                <use xlink:href="#icon-arrow-left"></use>
            </svg>
            </div>
        </div>
        <div class="msg">
            <slot name="message"></slot>
        </div>
        <div class="login" >
            <slot name="login"></slot>    
        </div>
    </header>
</template>
<script>
export default{
    name:'Header',
    data(){
        return{

        }
    },
    props:{
        leftBack:{
            type:String
        }
    }
}
</script>
<style lang="less">
.head{ 
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height:2.4rem;
        background-color: #3190e8;
    .left{
        float: left;
        line-height: 2.5rem;
        margin-left: 1rem;
        color: #fff;
        font-size: 0.8rem;
        svg{
            margin-top: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            use{
                fill: white;
            }  
        }
    }
    .msg{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        line-height: 2.3rem;
        font-size: 1rem;
        margin-left: 2.5rem;
        width: 50%;
        color: #fff;
        div{
            color: #fff;
        }
        }
    .login{
        float: right;
        margin-right: 1rem;
        text-align: center;
        line-height: 2.3rem;
        color: #fff;
        font-size: 0.8rem;
        a{
            color: #fff;
            text-decoration: none;
        }
        span,div{
            color: #fff;
        }
    }
}
</style>