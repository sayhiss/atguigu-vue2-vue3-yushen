<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">如果你不给我传，那我就显示现在这段话 center</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryVue",
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>