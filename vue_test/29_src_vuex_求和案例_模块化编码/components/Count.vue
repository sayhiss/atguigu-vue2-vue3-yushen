<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h1>我在：{{ school }}，学习{{ subject }}</h1>
    <h1 style="color:red;">person组件的总人数为{{personList.length}}</h1>
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
    ...mapState('countAbout',{sum:'sum',school:'school',subject:'subject',}),

    // 使用Vuex的mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),

    // 使用Vuex的mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters('countAbout',["bigSum"]),

  },
  methods: {
    // 使用Vuex的mapMutations生成方法，方法中会调用commit去联系Mutations。（对象写法）
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

    // 使用Vuex的mapMutations生成方法，方法中会调用dispatch去联系Actions。（对象写法）
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>