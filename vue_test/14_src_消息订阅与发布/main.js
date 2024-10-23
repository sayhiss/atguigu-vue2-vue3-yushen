// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";

// 关闭Vue的生产提示
Vue.config.productionTip = false;

const Demo = Vue.extend({})
const d = new Demo()
Vue.prototype.x = d 

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
    // beforeCreate(){
    //     // 安装全局事件总线
    //     Vue.prototype.$bus = this
    // }
})