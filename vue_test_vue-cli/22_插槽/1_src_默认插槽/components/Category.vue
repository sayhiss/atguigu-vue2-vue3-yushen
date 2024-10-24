<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot>如果你不给我传，那我就显示现在这段话</slot>
    </div>
</template>

<script>
export default {
    name:"CategoryVue",
    props:["title"]
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>