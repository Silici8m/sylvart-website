<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/images/logo_sylvart.png" alt="Logo Sylvart" />
        <img src="@/assets/images/nom_sylvart.png" alt="Nom Sylvart" />
      </div>

      <!-- Menu principal -->
      <div v-if="isMenuOpen" class="menu-container">
        <ul class="menu-items">
          <li v-for="(item, index) in menuItems" :key="index">
            <a @click="navigateTo(item.page)">{{ item.label }}</a>
          </li>
        </ul>
      </div>


      <!-- Icone du menu mobile -->
      <div class="menu-button" @click="toggleMenu">
        <span v-if="!isMenuOpen">☰</span>
        <span v-if="isMenuOpen">✖</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Données réactives
const isMenuOpen = ref(false);
const menuItems = ref([
  { label: "Accueil", page: "Home" },
  { label: "Trombi", page: "Trombi" },
  { label: "Evenements", page: "Event" },
]);

// Navigation avec Vue Router
const navigateTo = (page) => {
  router.push({ name: page });
  isMenuOpen.value = false;
};

// Fonction pour basculer l'affichage du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>


<style scoped>

/* Style de base de la barre de navigation */
.navbar {
  background-color: #0E1A19; /* Couleur de fond */
  padding: 0; /* Enlève les espaces */
  margin: 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Espaces à gauche et à droite */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo img {
  height: 100px; /* Taille du logo */
  margin-right: 10px; /* Espacement entre le logo et le nom du site */
}

.menu-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px; /* Espacement entre les liens */
}

.menu-items li {
  display: flex;
  cursor: pointer;
}

.menu-items li a {
  color: #188264; /* Couleur des liens */
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.menu-items li a:hover {
  color: #fff; /* Couleur des liens au survol */
}

.menu-button {
  display: fixed;
  color: white;
  background: #0E1A19;
  top: 20px;
  right: 20px;
  z-index: 1000;
  border: none;
  padding: 10px 15px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 5px;
}

</style>
