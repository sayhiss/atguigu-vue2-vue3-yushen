<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://imgse.com/2021/01/16/srJ1q0.jpg" alt="" />
      <div class="foot" slot="footer">
        <a slot="footer" href="http://www.atguigu.com">烧烤</a>
        <a slot="footer" href="http://www.atguigu.com">火锅</a>
      </div>
    </Category>

    <Category title="游戏">
      <ul slot="center" v-for="(data, index) in games" :key="index">
        <li>{{ data }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">玩游戏</a>
        <a href="http://www.atguigu.com">玩游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    <!-- <template slot="footer"> -->
    <template v-slot:footer>
      <div class="foot" >
        <a href="http://www.atguigu.com">玩游戏</a>
        <a href="http://www.atguigu.com">玩游戏</a>
      </div>
      <h2 slot="footer">欢迎观影！</h2>
    </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  components: { Category },
  name: "App",
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
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

h2{
  text-align: center;
}
</style>