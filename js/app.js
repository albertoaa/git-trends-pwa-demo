(function () {
  const app = {
    apiURL: `https://api.github.com/search/repositories?q=created%3A%22${dates.startDate()}+..+${dates.endDate()}%22%20language%3Ajavascript&sort=stars&order=desc`
  }

  app.getTrends = function () {
    fetch(app.apiURL)
      .then(response => response.json())
      .then(function(trends) {
        console.log('From server...')
        app.updateTrends(trends.items)
      }).catch(function (err) {
        // Error
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    app.getTrends()
  })
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function() {
        console.log('Service Worker Registered');
      });
  }
}) ()