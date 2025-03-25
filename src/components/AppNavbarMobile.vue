<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="bar">
        <!-- Logo -->
        <div class="logo">
          <img src="@/assets/images/logo_sylvart.png" alt="Logo Sylvart" class="logo-image" />
          <img src="@/assets/images/nom_sylvart.png" alt="Nom Sylvart" class="nom-logo" />
        </div>
        <!-- Icone du menu mobile -->
        <div class="menu-button" @click="toggleMenu">
          <span v-if="!isMenuOpen">☰</span>
          <span v-if="isMenuOpen">✖</span>
        </div>
      </div>

      <!-- Menu principal -->
      <div v-if="isMenuOpen" class="menu-container">
        <ul class="menu-items">
          <li v-for="(item, index) in menuItems" :key="index">
            <a @click="navigateTo(item.page)">{{ item.label }}</a>
          </li>
        </ul>
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
  { label: "Évenements", page: "Event" },
  { label: "Défis", page: "Defis" },
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

.navbar {
  --bg-color: rgba(0, 0, 0, 0.557); /* Fond transparent avec léger flou */
  backdrop-filter: blur(1px); /* Applique un léger flou derrière le menu */
  box-shadow: 0 0 5px 5px var(--bg-color); /* Ombre autour du menu */
  background-color: var(--bg-color); /* Couleur de fond */
}

.navbar-container {
  display: flex;
  flex-direction: column; /* Empile les éléments pour mobile */
  align-items: stretch; /* Évite que les éléments ne rétrécissent */
  padding: 0.2rem 1rem; /* Espacement gauche/droit */
  margin: auto;
}

.bar {
  display: flex;
  justify-content: space-between; /* Espacement entre le logo et le bouton */
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  overflow: hidden; /* Cache le contenu qui dépasse */
}

.logo-image {
  height: 100px; /* Taille du logo */
  margin-right: 10px; /* Espacement entre logo et nom */
}

.nom-logo {
  height: 100px;
  overflow: hidden;
  display: block; /* Le nom du logo est visible par défaut */
}

/* Bouton du menu mobile */
.menu-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  position: relative; /* Maintient l'alignement du bouton */
}

/* Le menu mobile */
.menu-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.menu-items {
  display: flex;
  flex-direction: column; /* Empile les éléments de menu en colonne */
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px; /* Espacement entre les éléments */
  align-items: center; /* Centrer les éléments du menu */
}

.menu-items li {
  display: flex;
  cursor: pointer;
  padding: 10px 30px; /* Espacement interne des éléments du menu */
  border-radius: 5px; /* Coins arrondis pour les éléments du menu */
  transition: background-color 0.3s ease; /* Transition douce lors du survol */
}

/* Liens du menu */
.menu-items li a {
  color: #b3c775; /* Couleur des liens */
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;
}

/* Effet au survol des éléments du menu */
.menu-items li:hover a {
  color: #fff; /* Changement de couleur au survol */
}

.menu-items li:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Fond léger au survol */
}

/* ---- Cacher le nom du logo si l'espace est trop petit ---- */
@media (max-width: 330px) {
  .nom-logo {
    display: none; /* Cache le nom du logo sur petits écrans */
  }
}
</style>
