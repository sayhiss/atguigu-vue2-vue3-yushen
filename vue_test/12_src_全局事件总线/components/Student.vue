<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
    export default {
    name: "StudentInfo",
    data() {
        return {
        name: "张三",
        age: 18,
        };
    },
    methods:{
      sendStudentName(){
        this.$bus.$emit('hello',this.name)
      }
    }
    };
</script>

<style scoped>
    .student {
    background-color: royalblue;
    padding: 5px;
    margin-top: 30px;
    }
</style>