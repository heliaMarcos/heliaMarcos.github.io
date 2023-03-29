<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { currentTheme, initTheme, switchTheme } from "./composables/theme.js";
import Navbar from "./layout/TheNavbar.vue";

onMounted(() => {
  initTheme();
});
</script>

<template>
  <Navbar :current-theme="currentTheme" :switch-theme="switchTheme" />

  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped>
body {
  @apply dark:bg-black dark:text-white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
