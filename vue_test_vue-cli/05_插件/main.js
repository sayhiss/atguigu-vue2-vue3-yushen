// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";

// 引用插件
import plugins from './plugin.js'
// 应用插件
Vue.use(plugins,1,2,3)

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App)
})