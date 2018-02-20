  var zwaartekracht = document.getElementById("myChart1").getContext('2d');
        var myChart = new Chart(zwaartekracht, {
            type: 'bar'
            , data: {
                labels: ["Aarde", "Mars", "Jupiter", "Saturnus", "Uranus"]
                , datasets: [{
                    label: 'zwaartekracht op verschillende planeten'
                    , data: [9.78, 3.72, 22.9, 9.05, 7.77]
                    , backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
                , 'rgba(54, 162, 235, 0.2)'
                , 'rgba(255, 206, 86, 0.2)'
                , 'rgba(75, 192, 192, 0.2)'
                , 'rgba(153, 102, 255, 0.2)'
                , 'rgba(255, 159, 64, 0.2)'
            ]
                    , borderColor: [
                'rgba(255,99,132,1)'
                , 'rgba(54, 162, 235, 1)'
                , 'rgba(255, 206, 86, 1)'
                , 'rgba(75, 192, 192, 1)'
                , 'rgba(153, 102, 255, 1)'
                , 'rgba(255, 159, 64, 1)'
            ]
                    , borderWidth: 1
        }]
            }
            , options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
            }]
                }
            }
        });
        var fuel = document.getElementById('myChart5').getContext('2d');
        var myChart = new Chart(fuel, {
            type: 'doughnut'
            , data: {
                // labels: ["fuel", "used"],
                datasets: [{
                    // label: 'brandstof niveau',
                    data: [79, 21]
                    , backgroundColor: ['rgba(255, 99, 132, 0.2)'
                      , '#292E3C']
                , }]
            }
        , });
        var oxy = document.getElementById('myChart3').getContext('2d');
        var myChart = new Chart(oxy, {
            type: 'doughnut'
            , data: {
                // labels: ["fuel", "used"],
                datasets: [{
                    // label: 'brandstof niveau',
                    data: [95, 5]
                    , backgroundColor: ['rgba(54, 162, 235, 0.2)'
                      , '#292E3C']
                , }]
            }
        , });
        var snelheid = document.getElementById('myChart4').getContext('2d');
        var myChart = new Chart(snelheid, {
            type: 'doughnut'
            , data: {
                // labels: ["fuel", "used"],
                datasets: [{
                    label: 'snelheid in km/h'
                    , data: [5000, 3000]
                    , backgroundColor: [     'rgba(75, 192, 192, 0.2)'
, '#292E3C']
                , }]
            }
        , });
        var verbruik = document.getElementById("myChart2").getContext('2d');
        var myChart = new Chart(verbruik, {
            type: 'line'
            , data: {
                labels: ["Januari", "februari", "Maart", "April", "Mei"]
                , datasets: [{
                    label: 'Water verbruik in liters'
                    , data: [100, 90, 200, 150, 190]
                    , backgroundColor: [

                 'rgba(153, 102, 255, 0.2)'
            ]
                    , borderColor: [

                 'rgba(153, 102, 255, 1)'
            ]
                    , borderWidth: 1
        }]
            }
            , options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
            }]
                }
            }
        });