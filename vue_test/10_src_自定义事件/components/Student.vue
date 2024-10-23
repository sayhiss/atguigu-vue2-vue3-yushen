<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ age }}</h2>
    <h2>number：{{ number }}</h2>
    <button @click="add">自增1</button>
    <button @click="sendStudentName">发送学生的名字</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁自身</button>
  </div>
</template>

<script>
    export default {
    name: "StudentInfo",
    data() {
        return {
        name: "张三",
        age: 18,
        number:0
        };
    },
    methods:{
      add(){
        console.log('自增函数被调用了');
        
        this.number++
      },
      sendStudentName(){
        // 触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name)

        this.$emit('demo')
      },
      unbind(){
        // 解绑一个自定义事件
        this.$off('atguigu')

        // 解绑多个自定义事件
        // this.$off(['atguigu','demo'])

        // 解绑所有的自定义事件
        // this.$off(['atguigu','demo'])
      },
      death(){
        this.$destroy()
      }
    }
    };
</script>

<style scoped>
    .student {
    background-color: royalblue;
    padding: 5px;
    margin-top: 30px;
    }
</style>