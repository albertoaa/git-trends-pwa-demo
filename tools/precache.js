const name = 'scotchPWA-v1';
module.exports = {
  staticFileGlobs: [
    './index.html',
    './images/*.{png,svg,gif,jpg}',
    './fonts/**/*.{woff,woff2}',
    './js/*.js',
    './css/*.css',
    'http://fonts.googleapis.com/icon?family=Material+Icons'
  ],
  stripPrefix: '.'
};