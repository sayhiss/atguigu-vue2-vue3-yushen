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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "CountVue",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 使用Vuex的mapState生成计算属性，从state中读取数据。（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject',}),


    // 使用Vuex的mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject',]),

    // 使用Vuex的mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters(["bigSum"]),

  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // 使用Vuex的mapMutations生成方法，方法中会调用commit去联系Mutations。（对象写法）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    // 使用Vuex的mapMutations生成方法，方法中会调用commit去联系Mutations。（数组写法）
    // ...mapMutations(['JIA','JIAN']),

    // *******************************

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    // 使用Vuex的mapMutations生成方法，方法中会调用dispatch去联系Actions。（对象写法）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

    // 使用Vuex的mapMutations生成方法，方法中会调用dispatch去联系Actions。（数组写法）
    // ...mapActions(['jiaOdd','jiaWait']),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>