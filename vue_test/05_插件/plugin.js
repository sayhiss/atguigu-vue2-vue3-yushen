export default {
    install(Vue,x,y,z) {

        console.log(x,y,z);
        
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 创建全局自定义指令
        Vue.directive('fbind2', {

            // 指令与元素成功绑定时调用
            bind(element, binding) {
                element.value = binding.value;
            },
            // 元素插入页面时调用
            inserted(element, binding) {
                element.focus()
                console.log(binding);
                
            },
            // 指令所在的模板被重新解析时调用
            update(element, binding) {
                element.value = binding.value;
            }

        })

        // 全局混合
        Vue.mixin({
            data() {
                return {
                    x: 1,
                    y: 2
                }
            }
        })

        // 给Vue原型上添加方法
        Vue.prototype.hello = ()=>{
            alert('你好啊！')
        }
    }
}