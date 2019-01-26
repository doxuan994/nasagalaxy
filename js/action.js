var vm = new Vue({
    el: '#app',
    data: {
        asteroids: []
    },
    created: function () {
        this.fetchAsteroids();
    },
    methods: {
        fetchAsteroids: function() {
            var apiKey = 'WzE03hQYRvEbdAaPUBoc6i4c5QBUfa2eQ0cb4CQr';
            var url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + apiKey;
            axios.get(url).then(function (res) {
                    vm.asteroids = res.data.near_earth_objects.slice(0, 10);
            });
        },
        getCloseApproachDate: function (a) {
            if (a.close_approach_data.length > 0) {
                return a.close_approach_data[0].close_approach_date;
            }
            return 'N/A';
        }
    }
})
