<template>
  <div>
    <h1>人员列表</h1>
    <h1 style="color:red;">count组件的和为{{sum}}</h1>
    <input type="text" placeholder="请输入人员名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for='p in personList' :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:"PersionVue",
    data(){
        return {name:''}
    },
    computed:{
        personList(){
            return this.$store.state.personList;
        },
        sum(){
            return this.$store.state.sum;
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
            this.name = "";
        },
    }
}
</script>