<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
      <!-- 简写 -->
      <!-- <transition name="hello" appear> -->
      <h1 v-show="isShow">你好啊！</h1>
    </transition>

    <!-- 一组动画,使用transition-group且每一项必须加上唯一key -->
    <transition-group name="hello" :appear="true">
      <!-- 简写 -->
      <!-- <transition name="hello" appear> -->
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TestVue",
  data() {
    return { isShow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter,
.hello-leave-to {
  transform: translate(-100%);
}
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
.hello-enter-to,
.hello-leave {
  transform: translate(0%);
}
</style>