<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ age }}</h2>
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
    };
</script>

<style scoped>
    .demo {
    background-color: royalblue;
    }
</style>