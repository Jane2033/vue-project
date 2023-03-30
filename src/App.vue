<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-pink700 via-purple400 to-red200 font-NotoSans">
    <Navigation />
    <RouterView />
  </div>
</template>

<script setup>
  import {RouterView} from "vue-router";
  import Navigation from "./components/Navigation.vue";
</script>

<style lang="scss" scoped>

</style>