<template>
  <div class="flex flex-col min-h-screen bg-slate-500 font-NotoSans">
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