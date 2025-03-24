const sharp = require('sharp');
const fs = require('fs');
const inputDir = './src/assets/trombi/';
const outputDir = './src/assets/trombi/thumbnails/';

// Créer le dossier de sortie s'il n'existe pas déjà
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  sharp(`${inputDir}${file}`)
    .resize(20) // Taille minuscule pour le flou
    .blur(0.8)    // Applique un effet de flou
    .toFile(`${outputDir}${file}`, (err, info) => {
      if (err) {
        console.error(`Erreur lors de la génération de la miniature pour ${file}:`, err);
      } else {
        console.log(`Miniature générée pour ${file}:`, info);
      }
    });
});
