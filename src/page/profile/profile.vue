<template>
    <div>
        <Header leftBack="true">
            <div slot="message">我的</div>
        </Header>
        <section>
            
        </section>
        <Foot userName="profile"></Foot>
    </div>
</template>
<script>
import Header from '../../components/head/header.vue'
import Foot from '../../components/foot/foot.vue'
export default {
    name:'profile',
    data(){
        return {

        }
    },
    components:{
        Foot,
        Header
    }
}
</script>
<div>

</div>