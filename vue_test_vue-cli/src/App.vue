<template>
  <div>
    <Count />
    <hr>
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";

export default {
  components: { Count ,Person},
  name: "App",
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped>
</style>