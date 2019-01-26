var vm = new Vue({
    el: '#app',
    data: {
        imgSrc: '',
        imgTitle: ''
    },
    created: function () {
        this.fetchApod();
    },
    methods: {
        fetchApod: function() {
            var apiKey = 'WzE03hQYRvEbdAaPUBoc6i4c5QBUfa2eQ0cb4CQr';
            var url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;
            axios.get(url).then(function (res) {
                    vm.imgSrc = res.data.url;
                    vm.imgTitle = res.data.title;
            });
        }
    }
})
