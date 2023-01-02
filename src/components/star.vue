<template>
    <div class="box">
                <section class="star_flex">
                <svg v-for="num in 5" :key="num" class="star_box">
                    <use xlink:href="#icon-star-on"></use>
                </svg>
            </section>
            <div class=" star_overflow" :style="'width:'+starLeave*0.5+'rem'">
                <section class="star_flex">
                <svg v-for="num in 5" :key="num"  class="star_fill ">
                    <use xlink:href="#icon-star-on"></use>
                </svg>
            </section>
            </div>
        </div>
</template>
<script>
export default{
    name:'star',
    props:{
        starLeave:{
            type:Number
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.box{
        width: 2.5rem;
        height: 0.5rem;
        .star_flex{
            position: absolute;
            display: flex;
            top: 0.5rem;
            .star_box{
                width: 0.5rem;
                height: 0.5rem;
                fill: #d1d1d1;
            }
         }
         .star_overflow{
            width: 2rem;
            height: 1rem;
            position: relative;
            overflow: hidden;
            left: 0;
        }
        .star_fill{
            width: 0.5rem;
            height: 0.5rem;
            fill: #ff9a0d;
        }
}
</style>