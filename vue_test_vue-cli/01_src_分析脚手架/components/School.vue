<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>学校名称： {{ name }}!</h1>
        <h1>学校地址： {{ address }}!</h1>
        <button @click="showName">点我提示名字</button>
    </div>
</template>

<script>
    // 组件交互相关的代码
    // 第一步创建组件
    export default {
        name:'SchoolComponent',
        data() {
            return {
                name: '尚硅谷',
                address: '北京昌平',
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }
</script>

<style>
    /* 组件样式 */
    .demo {
        background-color: orange;
    }
</style>