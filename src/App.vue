<!-- App.vue -->

<template>
  <div id="app">
    <BackgroundComponent />
    <div id="navbar">
      <NavbarDesktopComponent v-if="!isMobile" />
      <NavbarMobileComponent v-else />
    </div>
    <div id="main-content">
      <router-view />
    </div>
      <AppFeuxfollet />
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";

import BackgroundComponent from './components/AppBackground.vue';
import NavbarDesktopComponent from './components/AppNavbarDesktop.vue';
import NavbarMobileComponent from './components/AppNavbarMobile.vue';
import AppFeuxfollet from './components/AppFeuxfollet.vue';

const store = useStore();
const isMobile = computed(() => store.state.isMobile);

watch(isMobile, (newValue) => {
  console.log("isMobile updated:", newValue); // Affiche la valeur de `isMobile`
});

</script>


<style scoped>
body {
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}

#main-content {
  display: flex;
  overflow: auto; /* Permet le défilement */
  scrollbar-width: none; /* Pour Firefox */
  flex-direction: column;
}
</style>

