<template>
    <div class="balance_box">
            <Header leftBack="true" >
                <div slot="message">
                    我的余额
                </div>
            </Header>
            <div class="balance_body">
            <section class="section_box">
                    <section>
                        <div class="balance_say">
                            <span class="now_balance">当前余额</span>
                            <router-link to="/balance/detail">
                                <img src="@/img/description.png" alt="">
                                <span class="color_b">余额说明</span>
                            </router-link>
                        </div>
                    </section>
                    <div class="balance_num">
                        <span>0.00</span>
                        <span>元</span>
                    </div>
                    
                    <div>
                        <button class="btn">提现</button>
                    </div>
               
            </section>
        </div>
        <section class="balance_list">
            <span>交易明细</span>
            <div>
                <img src="@/img/no-log.png" alt="">
                <p>暂无明细记录</p>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/head/header.vue';
export default{
    name:'Balance',
    components:{
        Header
    },
}
</script>
<style lang="less" scoped>
.balance_box{
    padding-top: 2.3rem;
    .balance_body{
        width: 100%;
        background-color: #3190e8;
        padding: 0.5rem 0;
            .section_box{
            width: 90%;
            margin-left: 5%;
            padding: 0.5rem;
            height:7rem;
            background-color: #fff;
            border-radius: 3px;
            .balance_say{
                display: flex;
                justify-content: space-between;
                .now_balance{
                    font-size: 0.5rem;
                    color: #666;
                }
              a{
                display: flex;
                justify-content: center;
                img{
                    width: 0.8rem;
                }
                .color_b{
                    color: #3190e8;
                    font-size: 0.5rem;
                    margin-left: 0.3rem;
                }
              }
                
            }
        }
        .balance_num{
            span:nth-child(1){
                font-size: 2rem;
            }
        }
        .btn{
            margin-top: 0.5rem;
            width: 100%;
            height: 2rem;
            background-color: #ccc;
            color: #fff;
        }
    }
    .balance_list{
        span{
            font-size: 0.7rem;
            margin: 0.5rem;
            color: #999;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                // width: 10rem;
            }
            p{
                text-align: center;
                color: #666;
                font-size: 0.8rem;
            }
        }
    }
}
</style>