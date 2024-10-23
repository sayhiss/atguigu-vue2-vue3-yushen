<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <UserItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </transition-group>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  name: "UserList",
  props: ["todos"],
  components: { UserItem },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/* 动画 */
.todo-enter,
.todo-leave-to {
  transform: translate(100%);
}
.todo-enter-active,
.todo-leave-active {
  transition: 0.3s linear;
}
.todo-enter-to,
.todo-leave {
  transform: translate(0%);
}
</style>