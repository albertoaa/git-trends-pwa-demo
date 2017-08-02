const name = 'scotchPWA-v2';
module.exports = {
  staticFileGlobs: [
    './index.html',
    './images/*.{png,svg,gif,jpg}',
    './fonts/**/*.{woff,woff2}',
    './js/*.js',
    './css/*.css',
    'http://fonts.googleapis.com/icon?family=Material+Icons'
  ],
  stripPrefix: '.',
  // Runtime precache
  runtimeCaching: [{
    urlPattern: /https:\/\/api\.github\.com\/search\/repositories/,
    handler: 'networkFirst',
    options: {
      cache: {
        name: name
      }
    }
  }]
};