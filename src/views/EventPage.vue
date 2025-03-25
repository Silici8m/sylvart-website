<template>
  <div class="content-container">
    <div class="description-container">
      <h1>Évènements</h1>
      <img src="../assets/images/planning_admin.png" alt="planning event" class="planning">
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

.planning {
  display: block; /* Assure que l'image se comporte comme un bloc */
  margin: 0 auto; /* Centre l'image horizontalement */
  max-width: 90%; /* Permet à l'image de ne pas dépasser la largeur de son conteneur */
  max-height: 75vh; /* Limite la hauteur de l'image à 80% de la hauteur de la fenêtre */
  object-fit: contain; /* Assure que l'image garde ses proportions sans déformation */
}

</style>
