<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h1>我在：{{ school }}，学习{{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "CountVue",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 程序员自己写计算属性，从state中读取数据。
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // 使用Vuex的mapState生成计算属性，从state中读取数据。（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject',}),


    // 使用Vuex的mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject',]),


    // 程序员自己写计算属性，从state中读取数据。
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 使用Vuex的mapGetters生成计算属性，从state中读取数据。（对象写法）
    // ...mapGetters({bigSum:"bigSum"}),

    // 使用Vuex的mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters(["bigSum"]),

  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>