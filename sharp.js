const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = path.join(__dirname, "mama"); // Dossier source
const outputFolder = path.join(__dirname, "compressed"); // Dossier destination

// Vérifie si le dossier de sortie existe, sinon le crée
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Lire tous les fichiers du dossier source
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du dossier :", err);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, path.parse(file).name + ".webp"); // Convertit en WebP

    // Vérifier si le fichier est une image
    if (!/\.(jpe?g|png|webp)$/i.test(file)) return;

    // Compression et conversion
    sharp(inputPath)
      .resize(800) // Redimensionne la largeur à 800px (facultatif)
      .toFormat("webp", { quality: 80 }) // Convertit en WebP avec 80% de qualité
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error("Erreur lors de la conversion :", err);
        } else {
          console.log(`✅ ${file} → ${outputPath}`);
        }
      });
  });
});
