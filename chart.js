const ctx = document.getElementById('bookChart');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [

            'Programming',

            'Information Management',

            'Web Design',

            'Database'

        ],

        datasets: [{

            label: 'Number of Books',

            data: [

                80,

                60,

                50,

                40

            ]

        }]

    },

    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true

            }

        }

    }

});


