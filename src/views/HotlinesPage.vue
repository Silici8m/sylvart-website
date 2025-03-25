<template>
  <div class="form-container">
    <div class="form-box">
      <div class="box-header">
        <h2 class="box-title">Hotlines</h2>
        <p class="box-subtext">Remplissez le formulaire ci-dessous.</p>
      </div>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeZ6uItk4vI-AmlQR93u0OhVzDZxLsw6o_LeFeBolrK9IiUFw/viewform?embedded=true"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<style scoped>

.form-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-box {
  width: 90%;
  max-width: 800px;
  background: linear-gradient(145deg, rgba(52, 94, 78, 0.8), rgba(107, 162, 125, 0.5));
  border: 1.5px solid rgba(255, 255, 255, 0.655);
  border-radius: 8px;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 20px rgba(0, 12, 6, 0.2);
  transition: transform 0.2s ease;
}

.form-box:hover {
  transform: translateY(-2px);
}

.box-header {
  text-align: center;
  margin-bottom: 1rem;
}

.box-title {
  color: #b3c775;
  font-size: 1.6rem;
}

.box-subtext {
  color: #dce9dc;
  font-size: 0.95rem;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .form-box {
    padding: 1rem;
  }
}
</style>
