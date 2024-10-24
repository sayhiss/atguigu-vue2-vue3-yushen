<template>
  <div class="row">
    <!-- 显示用户信息 -->
    <div class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 显示第一次使用 -->
    <div v-show="info.isFirst"><h1>欢迎使用！</h1></div>
    <!-- 显示加载中 -->
    <div v-show="info.isLoading"><h1>加载中！</h1></div>
    <!-- 显示获取失败信息 -->
    <div v-show="info.errorMsg">{{ info.errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "ListVue",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on(
      "getUserInfo",
      (infoObj) => (this.info = { ...this.info, ...infoObj })
    );
  },
  beforeDestroy() {
    this.$bus.$off("getUserInfo");
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>