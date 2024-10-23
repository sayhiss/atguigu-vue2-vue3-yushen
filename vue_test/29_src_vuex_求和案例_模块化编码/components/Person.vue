<template>
  <div>
    <h1>人员列表</h1>
    <h1 style="color: red">count组件的和为{{ sum }}</h1>
    <h1 style="color: red">第一个人姓名:{{ firstPersonName }}</h1>
    <input type="text" placeholder="请输入人员名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWange">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一个人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "PersionVue",
  data() {
    return { name: "" };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName'];
    }
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addWange() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addWang", personObj);
      this.name = "";
    },
    addPersonServer(){
      this.$store.dispatch("personAbout/addPersonServer");
    }
  },
};
</script>