<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlerCheck(todo.id)"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handlerDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "UserItem",
  mounted() {
    console.log(this.todo);
  },
  methods: {
    handlerCheck(id) {
      this.$bus.$emit("changeTodo", id);
    },
    handlerDelete(id) {
      if (confirm("确认删除吗？")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
  // 声明接收todo对象
  props: ["todo"],
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li lable li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>