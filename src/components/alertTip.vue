<template>
    <div class="box">
        <div class="alertTip">
        <div class="bd">
            <div>
            </div>
            <div>
            </div>
        </div>
        <span>{{tipText}}</span>
        <div class="confrim" @touchstart="closeTip">确认</div>
        </div>
    </div>
</template>
<script>

export default{
    name:'Alert-Tip',
    data(){
        return {

        }
    },
    props:{
        tipText:{
            String,
        },
    },
    methods:{
        closeTip(){
            this.$emit('closeTip')
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    .alertTip{
        padding-top: 1rem;
        position:absolute;
        top: 7rem;
        left: 2rem;
        border-radius: 1rem;
        width: 15rem;
        height: 10rem;
        background-color: white;
        .bd{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-left: 36%;
            border: 3px solid #f8cb86;
            border-radius: 50%;
            width: 4rem;
            height: 4rem;
            div:first-child{
                width: 0.12rem;
                height: 1.5rem;
                background-color: #f8cb86;
            }
            div:last-child{
                width: 0.2rem;
                height: 0.2rem;
                border: 1px;
                border-radius: 50%;
                margin-top: 0.2rem;
                background-color: #f8cb86 ;
            }
        }
        span{
            display: block;
            margin: 1rem 0;
            text-align: center;
            font-size: 1rem;
        }
        .confrim{
            width: 100%;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            height: 2rem;
            background-color: #4cd964;
            text-align: center;
            line-height: 2rem;
            color: white;
        }
    }
}
</style>