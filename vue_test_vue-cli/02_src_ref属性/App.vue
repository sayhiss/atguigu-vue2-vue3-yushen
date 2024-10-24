<template>
  <div>
    <h2 ref="h2" v-text="msg"></h2>
    <button ref="btn" @click="showElement">输出上方元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
    // 引入School组件 
    import School from './components/School'
    export default {
        name:'App',
        data() {
            return {
                msg:'Vue'
            }
        },
        methods:{
            showElement(){
                console.log(this.$refs.h2);//真实DOM
                console.log(this.$refs.btn);//真实DOM
                console.log(this.$refs.sch);//组件的实例对象
            }
        },
        components:{School}
    }
</script>

<style>

</style>