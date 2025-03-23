<!-- AppBackground.vue -->

<template>
    <div class="wallpaper"></div>
</template>

<script setup>
</script>


<style scoped>
.wallpaper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    background-image: url('../assets/images/wallpaper1.jpg');
    z-index: -1;
}

</style>
  