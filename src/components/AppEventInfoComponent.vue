<template>
    <div class="event-box">
        <div class="event-header">
            <h2 class="event-title">{{ props.title }}</h2>
            <p class="event-description">{{ props.description }}</p>
        </div>
        <div class="event-body">
            <div class="event-info">
                <div class="event-detail">
                    <i class="icon-calendar"></i>
                    <p><strong>Date :</strong> {{ props.date }}</p>
                </div>
                <div class="event-detail">
                    <i class="icon-clock"></i>
                    <p><strong>Horaires :</strong> {{ props.horaires }}</p>
                </div>
                <div class="event-detail">
                    <i class="icon-location"></i>
                    <p><strong>Lieu :</strong> {{ props.lieu }}</p>
                </div>
                <div class="event-detail">
                    <i class="icon-ticket"></i>
                    <p><strong>Prix :</strong> {{ props.prix }}</p>
                </div>
            </div>
            <div class="event-image">
                <img :src="props.image" alt="Image de l'événement">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: "Nom de l'événement"
    },
    description: {
        type: String,
        required: false,
        default: "Description de l'événement"
    },
    date: {
        type: String,
        required: true
    },
    horaires: {
        type: String,
        required: true
    },
    lieu: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true,
        default: "Gratuit"
    },
    image: {
        type: String,
        required: false,
        default: ""
    }
});
</script>

<style scoped>
.event-box {
    display: flex;
    flex-direction: column;
    background: linear-gradient(145deg, rgba(52, 94, 78, 0.8), rgba(107, 162, 125, 0.5));
    border: 1.5px solid rgba(255, 255, 255, 0.655);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 2rem;
    backdrop-filter: blur(4px);
    box-shadow: 0 4px 20px rgba(0, 12, 6, 0.2);
    transition: transform 0.2s ease;
}

.event-box:hover {
    transform: translateY(-2px);
}

.event-header {
    text-align: center;
    margin-bottom: 1rem;
}

.event-title {
    color: #b3c775;
    font-size: 1.8rem;
    margin: 0;
}

.event-description {
    color: #dce9dc;
    font-size: 1rem;
    line-height: 1.4;
    margin: 0.5rem 0;
}

.event-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.event-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.event-detail {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #e0efe3;
}

.icon-calendar::before { content: "📅"; }
.icon-clock::before { content: "⏰"; }
.icon-location::before { content: "📍"; }
.icon-ticket::before { content: "🎟️"; }

.event-image {
    flex: 1;
    text-align: center;
}

.event-image img {
    max-width: 100%;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .event-body {
        flex-direction: column;
        align-items: center;
    }
}
</style>
