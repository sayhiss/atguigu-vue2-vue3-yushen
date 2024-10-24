<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul v-for="(data, index) in atguigu.games" :key="index">
          <li>{{ data }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(data, index) in games" :key="index">{{ data }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <h2 v-for="(g,index) in games" :key="index">{{g}}</h2>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  components: { Category },
  name: "App",
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

img,
video {
  width: 100%;
}

h2 {
  text-align: center;
}
</style>