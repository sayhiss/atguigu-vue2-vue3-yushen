<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName='getSchoolName'/>
    <!-- 通过父组件给子组件绑定一个自定义事件“atguigu”实现：子给父传递数据 -->
    <Student v-on:atguigu='getStudentName' @demo='demoTest'/>

    <!-- 手动绑定事件 -->
    <!-- <Student ref='student'/> -->

    <!-- DOM原生事件触发Vue事件 -->
    <Student ref='student' @click.native='show'/>
  </div>
</template>

<script>
    // 引入School组件 
    import School from './components/School'
    import Student from './components/Student'
    
    export default {
      data(){
        return{msg:'你好！'}
      },
      methods:{
        getSchoolName(name){
          console.log("app收到了学校的名字：",name);
        },
        getStudentName(name){
          console.log("app收到了学生的名字：",name);
        },
        demoTest(){
          console.log("第二个自定义事件");
        }
      },
      mounted(){
        //手动绑定事件
        // this.$refs.student.$on('atguigu',this.getStudentName);
        // 手动绑定事件(一次性)
        // this.$refs.student.$once('atguigu',this.getStudentName);
      },
      components:{Student,School}
    }
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>