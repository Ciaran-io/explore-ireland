const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['./src/assets/images/*.{jpg,png}'], {
    destination: './public/assets/images',
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log('Images optimized');
})();
