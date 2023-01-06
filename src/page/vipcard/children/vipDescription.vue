<template>
    <div class="vip_box">
        <headerVue leftBack="true">
            <div slot="message">我的优惠</div>
        </headerVue>
        <section class="tro_box">
            <p class="title">
                尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
            </p>
            <div>
                <h4>Q1: 特权介绍</h4>
                <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
                <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
                <p>更多特权，敬请期待！</p>
            </div>
            <div>
                <h4>Q2: 资费介绍</h4>
                <p>饿了么会员卡：20元</p>
            </div>
            <div>
                <h4>Q3: 使用说明</h4>
                <p>当用户满足以下任一条件，会员服务自动失效：</p>
                <div class="mar_l">
                    <p>自绑定之日起超过31天；</p>
                    <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
                </div>
            </div>
            <div>
                <h4>Q4: 购卡说明</h4>
                <p>在线购买：饿了么App>我的>饿了么会员卡</p>
            </div>
            <div>
                <h4>Q5: 温馨提示</h4>
                <p>用户在当前会员服务失效前，无法购买新卡。</p>
                <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
            </div>
        </section>
    </div>
</template>
<script>
import headerVue from '@/components/head/header.vue';
export default{
    name:'vipDescription',
    components:{
        headerVue
    },
    created(){
        console.log('1')
    }
}
</script>
<style lang="less" scoped >
.vip_box{
    position: absolute;
    top: 2.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 9;
    .tro_box{
        padding: 0.5rem 1rem;
        .title{
            padding: 0.5rem 2.5rem;
        }
        p{
            font-size: 0.7rem;
            margin: 0.2rem 0rem;
        }
        h4{
            font-size: 0.8rem;
            margin-top: 0.5rem;
        }
        .mar_l{
            margin-left: 3rem;
        }
    }

}
</style>