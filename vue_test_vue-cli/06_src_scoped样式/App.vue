<template>
  <div>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
    // 引入School组件 
    import School from './components/School'
    import Student from './components/Student'
    
    export default {
        components:{Student,School}
    }
</script>

<style>

</style>