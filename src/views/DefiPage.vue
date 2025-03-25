<template>
  <div class="content-container">
    <div class="description-container">
      <h1>Défis</h1>
    </div>
    <div class="iframe-container">
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTk6LfWz09zEcXFPU3T4V76sW8NMJoumT4tUFNjPd-XK9OHEb_mPf9uyQd0Qv_c47aesS-1vTgODxpr/pubhtml?gid=290730570&single=true&widget=false&headers=false"
        frameborder="0">
      </iframe>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.content-container {
  color: #ffffff;
  text-align: center;
  padding: 20px;
}

.description-container {
  padding: 20px 0;
}

.iframe-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

iframe {
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  border: none;
}
</style>
