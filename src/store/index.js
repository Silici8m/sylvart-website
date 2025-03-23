import { createStore } from 'vuex';

const store = createStore({
  state: {
    isMobile: window.innerWidth <= 768, // Initialiser avec la taille actuelle de la fenêtre
  },
  mutations: {
    setIsMobile(state, value) {
      state.isMobile = value;
    },
  },
  actions: {
    updateScreenSize({ commit }) {
      const isMobile = window.innerWidth <= 768; // Vérifier la taille actuelle de la fenêtre
      commit('setIsMobile', isMobile); // Mettre à jour l'état dans Vuex
    },
  },
  getters: {
    isMobile: (state) => state.isMobile, // Getter pour récupérer isMobile
  },
});

export default store;

// Dans ton fichier principal, assure-toi de bien écouter les redimensionnements
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    store.dispatch('updateScreenSize'); // Mettre à jour l'état chaque fois que la fenêtre est redimensionnée
  });
}