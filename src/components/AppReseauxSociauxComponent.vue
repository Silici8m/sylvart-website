<template>
    <div class="content-box">
      <div class="box-header">
        <h2 class="box-title">Réseaux</h2>
      </div>
  
      <div class="social-media-container">
        <div
          v-for="(social, index) in socials"
          :key="index"
          class="social-item"
          @click="handleSocialClick(social)"
        >
          <img :src="social.image" :alt="social.name" class="social-icon" />
          <p class="social-name">{{ social.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const socials = [
    {
      name: "@brocoli_le_brocoli",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
      link: "https://www.instagram.com"
    },
    {
      name: "Hildegarde la Renarde",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      link: "https://www.facebook.com"
    },
  ];
  
  // Fonction pour rediriger vers le lien du réseau social
  const handleSocialClick = (social) => {
    window.location.href = social.link;
  };
  </script>
  
  <style scoped>
  .content-box {
    display: grid;
    gap: 1rem;
    width: auto;
    background: linear-gradient(145deg, rgba(52, 94, 78, 0.8), rgba(107, 162, 125, 0.5));
    border: 1.5px solid rgba(255, 255, 255, 0.655);
    border-radius: 8px;
    padding: 1.2rem;
    margin: 1rem 2rem;
    backdrop-filter: blur(4px);
    box-shadow: 0 4px 20px rgba(0, 12, 6, 0.2);
    transition: transform 0.2s ease;
  }
  
  .content-box:hover {
    transform: translateY(-2px);
  }
  
  .box-header {
    display: flex;
    justify-content: flex-start; /* Aligner le titre à gauche */
    align-items: center;
    flex-wrap: wrap;
  }
  
  .box-title {
    color: #b3c775;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    margin: 0;
  }
  
  .social-media-container {
    display: flex;

    justify-content: space-around; /* Aligner les items à gauche */
    gap: 20px; /* Espacement entre les éléments */
    margin-top: 1rem;
    flex-wrap: wrap; /* Laisser les éléments passer à la ligne si nécessaire */
    
  }
  
  .social-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    max-width: 120px; /* Limiter la largeur des éléments */
    flex-grow: 1; /* Permet à chaque élément de s'étendre si nécessaire */
  }
  
  .social-item:hover {
    transform: scale(1.05); /* Léger agrandissement au survol */
  }
  
  .social-icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
    opacity: 0.8; /* Légère transparence sur l'image */
    transition: filter 0.3s ease;
  }
  
  .social-item:hover .social-icon {
    filter: brightness(1.2); /* Effet de brillance sur l'image au survol */
  }
  
  .social-name {
    margin-top: 10px;
    font-size: 13px; /* Taille plus grande pour le nom */
    color: white; /* Texte en blanc */
  }
  
  </style>
  