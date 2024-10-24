// 引入Vue核心库
import axios from 'axios';
import { nanoid } from 'nanoid';
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vue插件
Vue.use(Vuex)

export default {
    namespaced: true,
    actions: {
        addWang(context, personObj) {
            if (personObj.name.indexOf('王') === 0) {
                context.commit("ADD_PERSON", personObj);
            } else {
                alert('添加的人必须姓王！');
            }
        },
        addPersonServer(context){
            axios.get('https://api.xygeng.cn/openapi/one').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid,name:response.data.data.content})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log("mutations中的ADD_PERSON被调用了");
            state.personList.unshift(personObj)
        },
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name;
        }
    }
}