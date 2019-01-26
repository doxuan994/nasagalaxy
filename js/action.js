var vm = new Vue({
    el: '#app',
    data: {
        asteroids: []
    },
    computed: {
        numAsteroids: function () {
            return this.asteroids.length;
        },
        closestObject: function () {
            var neosHavingData = this.asteroids.filter(function (neo) {
                return neo.close_approach_data.length > 0;
            });
            var simpleNeos = neosHavingData.map(function (neo) {
                return {name: neo.name, miles: neo.close_approach_data[0].miss_distance.miles};
            });
            var sortedNeos = simpleNeos.sort(function (a, b) {
                return a.miles - b.miles;
            });
            return sortedNeos[0].name;
        }
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
        },
        remove: function (index) {
            this.asteroids.splice(index, 1);
        }
    }
})
