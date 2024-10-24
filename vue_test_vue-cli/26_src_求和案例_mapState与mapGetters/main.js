// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入vue-resource
import vueResource from "vue-resource"
// 引入store
import store from "./store/index.js"
// 引入store（简写）
// import store from "./store"

// 安装插件
Vue.use(vueResource);

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate(){
        // 安装全局事件总线
        Vue.prototype.$bus = this
    }
}) 