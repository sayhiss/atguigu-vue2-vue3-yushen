<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
    // 引入School组件 
    import School from './components/School'
    import Student from './components/Student'
    
    export default {
      data(){
        return{msg:'你好！'}
      },
      components:{
        School,
        Student
      }
    }
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>