<template>
  <div class="content-container">
    <div class="description-container">
      <h1>Événements</h1>
      <div class="events-container">
        <EventInfoComponent
          v-for="(event, key) in filteredEvents"
          :key="key"
          :title="event.nom"
          :date="event.date"
          :horaires="event.horaires"
          :lieu="event.adresse"
          :activites="event.activites"
          :description="event.description"
          :prix="event.prix"
          :image="event.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import EventInfoComponent from '@/components/AppEventInfoComponent.vue';
import eventsData from '@/assets/data/events.json';

// Filtrer les événements affichables
const filteredEvents = computed(() => {
  return Object.values(eventsData).filter(event => event.afficher);
});
</script>

<style scoped>
.content-container {
  color: #ffffff;
  justify-content: center;
  height: auto;
}
.description-container {
  padding: 20px 0px;
  text-align: center;
}
</style>
