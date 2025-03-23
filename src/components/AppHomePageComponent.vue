<template>
    <div class="content-box">
        <div class="box-header">
            <h2 class="box-title">{{ props.title }}</h2>
            <p class="box-subtext">{{ props.subtext }}</p>
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
        default: "Titre par défaut"
    },
    subtext: {
        type: String,
        required: false,
        default: "Texte par défaut"
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
    }
});

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
    width: auto;
    background: linear-gradient(145deg, rgba(52, 94, 78, 0.8), rgba(107, 162, 125, 0.5));
    border: 1.5px solid rgba(255, 255, 255, 0.655);
    border-radius: 8px;
    padding: 1.2rem;
    margin: 1rem 2rem;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 0 4px 20px rgba(0, 12, 6, 0.2);
    transition: transform 0.2s ease;
}

.content-box:hover {
    transform: translateY(-2px);
}

.box-header {
    flex: 1;
    padding-right: 1.5rem;
}

.box-title {
    color: #b3c775;
    margin: 0 0 0.4rem 0;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
}

.box-subtext {
    color: #dce9dc;
    margin: 0;
    font-size: 0.95rem; 
    line-height: 1.4;
}

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
}

.box-button:hover {
    background: linear-gradient(to bottom, #775500e2, #716600c9);
    box-shadow: 0 2px 8px rgba(80, 102, 85, 0.3);
}

@media (max-width: 768px) {
    .content-box {
        flex-direction: column;
        gap: 1rem;
    }
    
    .box-button {
        align-self: flex-end;
    }
}
</style>
