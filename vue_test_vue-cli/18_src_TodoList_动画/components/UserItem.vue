<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlerCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.name }}</span>
      <input
        ref="inputName"
        v-show="todo.isEdit"
        type="text"
        :value="todo.name"
        @blur="handlerBlur(todo, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="handlerDelete(todo.id)">删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handlerEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
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
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handlerEdit(todo) {
      if ("isEdit" in todo) {
        // if(todo.hasOwnProperty("isEdit")){
        todo.isEdit = true;
      } else {
        console.log(todo);
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(() => {
        this.$refs.inputName.focus();
      });
    },
    // 失去焦点回调
    handlerBlur(todo, event) {
      todo.isEdit = false;
      if (!event.target.value.trim()) {
        alert("输入不能为空");
        return;
      }
      this.$bus.$emit("updateTodo", todo.id, event.target.value);
      console.log("改变名字为:", event.target.value);
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