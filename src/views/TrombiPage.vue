<template>
  <div class="content-container">
    <div class="description-container">
      <h1>Trombinoscope des Sylvz</h1>
    </div>
    <div class="trombi-container">
      <div v-for="(pole, index) in poles" :key="index" class="pole-container">
        <div class="pole-name">
          <h2>{{ pole.nom }}</h2>
        </div>
        <div class="scroll-container">
          <div class="frame">
            <div class="members-board">
              <div class="member-box" v-for="(member, i) in pole.membres" :key="i">
                <div class="member-image">
                  <img
                    :src="getProfileImage(member.photo).thumbnail"
                    :data-src="getProfileImage(member.photo).fullImage"
                    @load="loadFullImage"
                    class="progressive"
                    alt="portrait"
                  />
                </div>
                <div class="member-description">
                  <p class="member-name">{{ member.prenom }} {{ member.nom }}</p>
                  <p class="member-role">{{ member.role }}</p>
                  <p class="member-nickname">{{ member.nickname }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import des données JSON
import trombinoscope from '@/assets/data/trombinoscope.json';

// Déclaration des données réactives
import { ref, computed } from 'vue';

// Charger directement les données du JSON
const trombinoscopeData = ref(trombinoscope);

// Calculer la liste des pôles
const poles = computed(() => trombinoscopeData.value.poles || []);

const getProfileImage = (fileName) => {
  try {
    // Charger d'abord la miniature floue
    const thumbnail = require(`@/assets/trombi/thumbnails/${fileName}`);
    const fullImage = require(`@/assets/trombi/${fileName}`);

    return { thumbnail, fullImage };
  } catch (e) {
    // Image par défaut en cas d'erreur
    const defaultThumbnail = require('@/assets/trombi/thumbnails/profil-vide.png');
    const defaultImage = require('@/assets/trombi/profil-vide.png');

    return { thumbnail: defaultThumbnail, fullImage: defaultImage };
  }
};

// Fonction pour charger l'image complète une fois que la miniature est chargée
const loadFullImage = (event) => {
  const img = event.target;
  img.src = img.dataset.src; // Remplace le src par l'image complète
  img.classList.add("loaded"); // Ajoute une classe pour enlever le flou
};
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
.trombi-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  /* border: solid rgb(0, 21, 255); */
}
.pole-container {
  padding: 20px 0px;
  /* border: solid rgb(0, 255, 110); */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-size: cover;
  /* --bg-color: #e9e9e3b8;
  background-color: var(--bg-color);
  box-shadow: 0 0 10px 10px var(--bg-color); */
}
.pole-name {
  padding: 0px 20px;
}
.scroll-container {
  width: 100%;
  overflow: visible;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  /* border: #9e1387 solid; */
  scrollbar-width: none; /* Pour Firefox */
  -ms-overflow-style: none; /* Pour Internet Explorer et Edge */
}
.scroll-container::-webkit-scrollbar {
  display: none;
}
.frame {
  display: flex;
  height: 300px;
  width: fit-content;
  scrollbar-width: none;
  align-items: center;
  padding: 20px 50px;
}

.members-board {
  display: flex;
  /* border: 2px solid #13e4d2; */
  gap: 15px;
  justify-content: left;
}
.member-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
  background: linear-gradient(145deg, rgba(52, 94, 78, 0.224), rgba(107, 162, 125, 0.318));
  border: 1.5px solid rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  padding: 10px;
  backdrop-filter: blur(5px);
}
.member-image img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 15%;
}
.member-name {
  font-weight: bold;
  margin-top: 5px;
}
.member-role {
  color: #ffffff;
}

.progressive {
  filter: blur(10px);
  transition: filter 0.5s ease-in-out;
}

.progressive.loaded {
  filter: blur(0);
}
</style>
