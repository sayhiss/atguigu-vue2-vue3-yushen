<template>
    <div>
        <h2 @click="showName">姓名：{{name}}</h2>
        <h2>性别：{{age}}</h2>
    </div>
</template>

<script>
import { hunhe,hunhe2 } from "../mixin.js";
export default {
    name:'StudentInfo',
    data() {
        return {
            name:'张三',
            age:18
        }
    },
    mixins:[hunhe,hunhe2]
}
</script>