<template>
    <div class="contentbox">
        <div class="box-header">
            <h2 class="box-title">{{ props.title }}</h2>
            <p class="coordonees">{{ props.coordonees }}</p>
            <p class = "Adresse">{{props.adresse}}</p>
        </div>
      <div class ="image">
        <img src="source">
      </div>
       
       <div class="box-content">
       <p class ="type_activite">{{props.type_activite}}</p>
       </div>
       </div>

</template>

<script setup>
import { defineProps } from 'vue';
//import { useRouter } from 'vue-router';
const props = defineProps({
    title: {
        type: String,
        required: true,
        default: "Evenements"
    },
    type_activite:{
      type: String,
      required: false,
      default:"Des activites funs pour tous les centraliens !"
    },
    coordonees: {
        type: String,
        required: false,
        default: "01/01/2025 de 00h00 à 00h00"
    },
    adresse:{
      type: String,
      required: false,
      default: "1 rue du Lombard"
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

//const router = useRouter();

</script>

<style scoped>

.contentbox {
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

.contentbox:hover {
    transform: translateY(-2px);
}

.box-header {
    flex: 1;
    padding-right: 1.5rem;
}
.box-content {
  padding-left: 10rem;
  padding-top: 1rem;

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
    max-width:  120px;
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
.image{
  padding-left:1rem;
  padding-top: 60px;
  padding-right:1rem ;
}
.type_activite{
    border-radius: 6px;
    padding: 10px 25px;
    color: #fff;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.25px ease;
    max-width:  150px;
    min-height: 50px;
    }
</style>
