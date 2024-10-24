<template>
  <div>
    <Student name='张三' :age='18' sex='男' ref="sch"/>
    <Student name='李四' sex='女' ref="sch"/>
  </div>
</template>

<script>
    // 引入School组件 
    import Student from './components/Student'
    export default {
        components:{Student}
    }
</script>

<style>

</style>