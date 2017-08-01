(function () {

  Date.prototype.yyyymmdd = function () {
    let mm = this.getMonth() + 1;
    let dd = this.getDate();

    return [this.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
    ].join('-');
  };

  const dates = {
    startDate: function() {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
      return startDate.yyyymmdd();
    },
    endDate: function() {
      const endDate = new Date();
      return endDate.yyyymmdd();
    }
  }

  const app = {
    apiURL: `https://api.github.com/search/repositories?q=created%3A%22${dates.startDate()}+..+${dates.endDate()}%22%20language%3Ajavascript&sort=stars&order=desc`
  }

  app.updateTrends = function (trends) {
    const trendsRow = document.querySelector('.trends');
    for (let i = 0; i < trends.lenght; i++) {
      const trend = trends[i];
      trendsRow.appendChild(app.createCard(trend));
    }
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