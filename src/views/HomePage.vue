<template>
  <div class="content-container">
    <div class="text-container">
      <h1>Sylv'Art Liste BDA Centrale Lille 2025</h1>
    </div>
  </div>
  <HomePageComponent 
    title="L'équipe" 
    subtext="Trombinoscope des Sylvz" 
    buttonText="Voir" 
    routeName="Trombi"
  />
  <HomePageComponent 
    title="Evenements"  
    buttonText="Voir" 
    routeName="Event"
  />
  <HomePageComponent 
    title="Hotlines"
    subtext="Lien vers le forms de commande"
    routeName="Hotlines" 
  />
</template>

<script setup>
import HomePageComponent from '@/components/AppHomePageComponent.vue';

</script>

<style scoped>
.content-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.text-container {
  /* --bg-color: #ffffff86;
  background-color: var(--bg-color);
  box-shadow: 0 0 15px 15px var(--bg-color); */
  padding: 20px 30px;
  margin: 20px 60px;
  color: #ffffff;
  height: auto;
}

</style>
