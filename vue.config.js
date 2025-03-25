const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/sylvart-website/" : "/",
  
  // Fusionner avec la configuration de compression des images
  chainWebpack(config) {
    // Configuration de compression des images
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 30, // Qualité des images JPEG
        },
        optipng: {
          enabled: true,
          optimizationLevel: 7, // Niveau de compression PNG (0-7)
        },
        pngquant: {
          quality: [0.3, 0.5], // Compression PNG
          speed: 4, // Vitesse de compression (1-10)
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75, // Qualité des images WebP
        },
      });
  }
});
