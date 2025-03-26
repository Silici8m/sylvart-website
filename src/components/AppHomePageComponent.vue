<template>
    <div class="content-box">
        <div class="box-header">
            <h2 class="box-title">{{ props.title }}</h2>
            <p v-if="props.subtext !== ''" class="box-subtext">{{ props.subtext }}</p>
        </div>

        <div v-if="imageSource" class="box-image-container">
            <img :src="imageSource" alt="Image" class="box-image" />
        </div>

        <button class="box-button" @click="handleClick">{{ props.buttonText }}</button>
    </div>    
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: ""
    },
    subtext: {
        type: String,
        required: false,
        default: ""
    },
    buttonText: {
        type: String,
        required: false,
        default: "Voir"
    },
    link: {
        type: String,
        required: false,
        default: ""
    },
    routeName: {
        type: String,
        required: false,
        default: ""
    },
    imageUrl: {
        type: String,
        required: false,
        default: ""
    }
});

// Résolution dynamique du chemin de l'image
const imageSource = props.imageUrl ? require(`@/assets/images/${props.imageUrl}`) : null;

const router = useRouter();

// Gestion du clic sur le bouton
const handleClick = () => {
    if (props.routeName) {
        // Redirection vers une page interne
        router.push({ name: props.routeName });
    } else if (props.link) {
        // Redirection vers un lien externe
        window.location.href = props.link;
    } else {
        console.warn("Aucun lien ou routeName n'a été fourni.");
    }
};
</script>

<style scoped>
.content-box {
    display: grid;
    gap: 1rem; /* Espace entre les éléments */
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

/* Hover effect */
.content-box:hover {
    transform: translateY(-2px);
}

/* Box-header */
.box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Permet d'avoir le titre et sous-titre sur deux lignes si nécessaire */
}

/* Titre */
.box-title {
    color: #b3c775;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    margin-right: 1rem; /* Marge à droite pour espacer du bouton */
}

/* Sous-titre */
.box-subtext {
    color: #dce9dc;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;
    width: 100%; /* Assure qu'il prenne toute la largeur */
}

/* Le bouton */
.box-button {
    background: linear-gradient(to bottom, #775500b1, #7166008d);
    border: 1px solid #617d6a;
    border-radius: 6px;
    padding: 10px 25px;
    color: #e0efe3;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.25s ease;
    min-width: 120px;
    min-height: 50px;
    justify-self: end; /* Place le bouton à droite */
}

/* Bouton au survol */
.box-button:hover {
    background: linear-gradient(to bottom, #775500e2, #716600c9);
    box-shadow: 0 2px 8px rgba(80, 102, 85, 0.3);
}

/* Image container */
.box-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem; /* Espacement entre titre et image */
}

/* Image */
.box-image {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

/* Version Desktop */
@media (min-width: 768px) {
    .content-box {
        grid-template-columns: 1fr 120px; /* 2 colonnes: 1 pour le titre, 1 pour le bouton */
        grid-template-rows: auto auto; /* 2 lignes: 1 pour le titre et bouton, 1 pour l'image */
        grid-template-areas:
            "title button"
            "image image"; /* Image occupe toute la 2e ligne */
    }

    .box-header {
        grid-area: title;
    }

    .box-button {
        grid-area: button;
    }

    .box-image-container {
        grid-area: image;
    }
}

/* Version Mobile */
@media (max-width: 768px) {
    .content-box {
        grid-template-columns: 1fr; /* 1 colonne */
        grid-template-rows: auto 1fr auto; /* 3 lignes: titre, image, bouton */
    }

    .box-header {
        grid-row: 1;
    }

    .box-image-container {
        grid-row: 2;
        margin-top: 0.5rem; /* Réduction de l'espacement autour de l'image */
    }

    .box-button {
        grid-row: 3;
        justify-self: end;
        margin-top: 0.5rem; /* Réduction de l'espacement entre le bouton et l'image */
    }
}

</style>
