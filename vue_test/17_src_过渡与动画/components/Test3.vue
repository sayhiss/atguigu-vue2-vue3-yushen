<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- 一组动画 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <!-- 简写 -->
      <!-- <transition name="hello" appear> -->
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translate(0%);
  }
}
</style>