<template>
    <ul class="todo-main">
        <UserItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo='todoObj' 
        :changeTodo='changeTodo'
        :deleteTodo='deleteTodo'
        />
    </ul>
</template>

<script>
import UserItem from './UserItem.vue'
export default {
    name:'UserList',
    props:['todos','changeTodo','deleteTodo'],
    components:{UserItem}
}
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
</style>