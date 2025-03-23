    <template>
        <div class="feux-follets-container">
            <div v-for="(feuxfollet, index) in feuxFollets" :key="index" class="feux-follet"
                :style="{ top: feuxfollet.y + 'px', left: feuxfollet.x + 'px' }"></div>
        </div>
    </template>

<script setup>
import { ref, onMounted } from "vue";

// Nombre de feux follets
const nbFeuxFollets = 4;

// Feux follets stockés dans un tableau réactif
const feuxFollets = ref([]);

const probabiltyPosition = (x, a, b, c) => {
    if (x < a && x >= 0) {
        return (a - x) / a;
    } else if (x >= a && x <= b) {
        return 0;
    } else if (x > b && x <= c) {
        return (x - b) / (b - c);
    } else if (x > c) {
        return -1;
    } else {
        return 0;
    }
}

// Fonction d'animation pour mettre à jour les positions des feux follets
const animateFeuxFollets = () => {
    const x1 = 20; // px
    const x2 = 60; // px
    const y1 = 10; // px
    const y2 = 50; // px
    const r = 5; // px
    const coefFlottement = 0.2; // [0, 1[
    const coefAttraction = 1; 
    const coefEloignement = 0.5; // [0, 1[
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    feuxFollets.value.forEach(feuxfollet => {
        // Effet flottant
        feuxfollet.speedX += (Math.random() - 0.5) * coefFlottement;
        feuxfollet.speedY += (Math.random() - 0.5) * coefFlottement;
        // Contraintes absolues 
        if (feuxfollet.x <= r) {
            feuxfollet.x = r;
            feuxfollet.speedX = - feuxfollet.speedX;
        }
        if (feuxfollet.x >= containerWidth - r) {
            feuxfollet.x = containerWidth - r;
            feuxfollet.speedX = - feuxfollet.speedX;
        }
        if (feuxfollet.y <= r) {
            feuxfollet.y = r;
            feuxfollet.speedY = - feuxfollet.speedY;
        }
        if (feuxfollet.y >= containerHeight - r) {
            feuxfollet.y = containerHeight - r;
            feuxfollet.speedY = - feuxfollet.speedY;
        }
        // Attractions
        // Coté Gauche
        const pLeft = probabiltyPosition(feuxfollet.x, x1, x2, containerWidth/2);
        const pRight = - probabiltyPosition(containerWidth - feuxfollet.x, x1, x2, containerWidth/2);
        const pBottom = - probabiltyPosition(containerHeight - feuxfollet.y, y1, y2, containerHeight/2);
        if (pBottom > 0) {
            feuxfollet.speedX += (0.5 + coefEloignement/2 - Math.random()) * (feuxfollet.x < containerWidth/2 ? pLeft : pRight) * coefAttraction;
        } else {
            feuxfollet.speedY +=(0.5 + coefEloignement/2 - Math.random()) * pBottom * coefAttraction;
        } 
        // Haut
        if (feuxfollet.y < 100) {
            feuxfollet.speedY += Math.random() * coefFlottement/4;
        }

        // Limiter les vitesses pour éviter des mouvements trop brusques
        feuxfollet.speedX = Math.max(-1, Math.min(1, feuxfollet.speedX));
        feuxfollet.speedY = Math.max(-1, Math.min(1, feuxfollet.speedY));

        // Mise à jour des positions
        feuxfollet.x += feuxfollet.speedX;
        feuxfollet.y += feuxfollet.speedY;
    });

    // Demande une nouvelle frame pour l'animation
    requestAnimationFrame(animateFeuxFollets);
};

// Initialisation des feux follets à des positions et vitesses aléatoires
onMounted(() => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Générer des feux follets avec des positions et vitesses aléatoires
    feuxFollets.value = Array.from({ length: nbFeuxFollets }, () => ({
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        speedX: 0,
        speedY: 0
    }));

    // Démarrer l'animation
    animateFeuxFollets();
});
</script>

<style scoped>
.feux-follets-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    /* Empêche les feux follets de bloquer les clics */
}

.feux-follet {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 150, 255, 0.6) 100%);
    box-shadow: 0 0 10px rgba(0, 150, 255, 0.8);
    animation: flicker 1s infinite alternate;
}

@keyframes flicker {
    from {
        opacity: 0.6;
    }

    to {
        opacity: 1;
    }
}
</style>
