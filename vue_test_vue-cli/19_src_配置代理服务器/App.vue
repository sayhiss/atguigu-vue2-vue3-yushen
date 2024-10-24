<template>
  <div id="root">
    <button @click="getStudentInfo">获取学生信息</button>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudentInfo() {
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCarInfo() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>