<template>
    <!-- 组件的结构 -->
    <div>
        <h1>学生名称： {{ name }}!</h1>
        <h1>学生地址： {{ age }}!</h1>
    </div>
</template>

<script>
    // 组件交互相关的代码
    // 第一步创建组件
    export default {
        name:'Student',
        data() {
            return {
                name: '张三',
                age: 18,
            }
        }
    }
</script>
