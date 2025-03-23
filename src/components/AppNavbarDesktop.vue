<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo-container">
        <img src="@/assets/images/logo_sylvart.png" alt="Logo Sylvart" />
        <img src="@/assets/images/nom_sylvart.png" alt="Nom Sylvart" />
      </div>

      <!-- Menu principal -->
      <div class="menu-container">
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

const menuItems = ref([
  { label: "Accueil", page: "Home" },
  { label: "Trombi", page: "Trombi" },
  { label: "Evenements", page: "Event" },
]);

// Navigation avec Vue Router
const navigateTo = (page) => {
  router.push({ name: page });
};

</script>


<style scoped>

/* Style de base de la barre de navigation */
.navbar {
  --bg-color: rgba(0, 0, 0, 0.557);
  backdrop-filter: blur(1px);

  box-shadow: 0 0 5px 5px var(--bg-color);
  background-color: var(--bg-color);
  /* background-image: linear-gradient(to bottom, #0E1A19, #0E3C10); */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem; /* Espaces à gauche et à droite */
  margin: auto;
}

.logo-container {
  display: flex;
  align-items: center;
}

.menu-container {
  display: flex;
  margin: 0 auto;
}

.logo-container img {
  height: 100px; /* Taille du logo */
}

.menu-items {
  display: flex;
  list-style: none;
  gap: 0px;
}

.menu-items li {
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px 30px;
}

.menu-items li a {
  color: #b3c775; /* Couleur des liens */
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;
}

.menu-items li:hover a {
  color: #fff; /* Couleur des liens au survol */
}

</style>