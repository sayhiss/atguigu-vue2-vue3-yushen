<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <h2>年龄：{{myAge+1}}</h2>
        <button @click='addAge'>累加年龄</button>
    </div>
</template>

<script>
export default {
    name:'StudentInfo',
    data() {
        return {
            msg:'我是一个尚硅谷的学生',
            myAge:this.age
        }
    },
    methods:{
        addAge(){
            this.myAge++
        }
    },
    // 简单生命接收
    // props:['name','sex','age']

    // 接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 接收的同时对数据进行：类型的限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:12
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>