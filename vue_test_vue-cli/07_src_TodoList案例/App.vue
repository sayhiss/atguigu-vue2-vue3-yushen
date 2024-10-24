<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <UserHeader :addTodo='addTodo' />
        <UserList :todos='todos' :changeTodo='changeTodo' :deleteTodo='deleteTodo'/>
        <UserFooter :todos='todos' :changeAll='changeAll' :clearAllDone="clearAllDone"/>
      </div>
    </div>
  </div>
</template>

<script>

// 引入School组件
import UserHeader from "./components/UserHeader";
import UserList from "./components/UserList";
import UserFooter from "./components/UserFooter";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: "001", name: "吃饭", done: true },
        { id: "002", name: "睡觉", done: false },
        { id: "003", name: "打豆豆", done: true },
      ],
    };
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    changeTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id)
          todo.done = !todo.done;
      })
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todoObj)=>todoObj.id !== id);
    },
    changeAll(isDone){
      this.todos.forEach((todo)=>todo.done = isDone);
    },
    clearAllDone(){
      this.todos = this.todos.filter((todo)=> !todo.done);
    }
  },
  components: { UserHeader, UserList, UserFooter },
};

</script>

<style>
/* base */
body {
  background-color: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd262f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd262f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>