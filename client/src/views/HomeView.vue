<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <PartSearchLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PartSearchLayout from "../components/layouts/PartSearchLayout.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    PartSearchLayout,
  },
};
</script>
