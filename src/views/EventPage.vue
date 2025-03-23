<template>
<div class="content-container">
    <div class="description-container">
      <h1>Evenements</h1>
      <div class="events-container">
        <!-- <EventInfoComponent 
        title="qgbwgvf"
        type_activite="<vfdscdddddddddddc"
        coordonees="s,dcql,cxklws"
        adresse="csqkcnwlkc,wx"
        buttonText="Voiee"
        link="https://youtube.com"
        routeName=""
        /> -->
        <EventInfoComponent
        />
      </div>
    </div>
</div>
</template>
  

<script setup>
  import EventInfoComponent from '@/components/AppEventInfoComponent.vue';
</script>

<style scoped>
.content-container {
  color: #ffffff;
  /* border: solid red; */
  justify-content: center;
  height: auto;
}
.description-container {
  padding: 20px 0px;
  text-align: center;
}
</style>
