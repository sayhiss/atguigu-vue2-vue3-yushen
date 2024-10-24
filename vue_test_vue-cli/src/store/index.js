// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

import countAbout from './count'
import personAbout from './person'
// 应用Vue插件
Vue.use(Vuex)


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countAbout,
        personAbout: personAbout
    }
})