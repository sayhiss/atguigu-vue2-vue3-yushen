<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchKeyWord"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchVue",
  data() {
    return { searchKeyWord: "" };
  },
  methods: {
    searchUser() {
      this.$bus.$emit("getUserInfo", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        users: [],
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.searchKeyWord}`)
        .then(
          (respose) => {
            console.log("请求成功了");
            this.$bus.$emit("getUserInfo", {
              isLoading: false,
              errorMsg: "",
              users: respose.data.items,
            });
          },
          (error) => {
            console.log("请求失败了", error.message);
            this.$bus.$emit("getUserInfo", {
              isLoading: false,
              errorMsg: error.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
</style>