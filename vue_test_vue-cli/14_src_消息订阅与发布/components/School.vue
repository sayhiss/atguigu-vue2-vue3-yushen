<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
// 引入消息发布与订阅库：
import pubsub from 'pubsub-js'
export default {
    name:'SchoolInfo',
    data() {
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },
    mounted(){
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是School组件，收到了数据',data);
        // })

        this.pubID = pubsub.subscribe('hello',(msgName,data)=>{
            console.log('我是School组件，收到了数据',data);
        })
    },
    beforeDestroy(){
        // this.$bus.$off('hello')

        pubsub.unsubscribe(this.pubID)
    }
}
</script>

<style scoped>
    .school{
        background-color: greenyellow;
        padding: 5px;
    }
</style>