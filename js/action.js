var apiKey = 'WzE03hQYRvEbdAaPUBoc6i4c5QBUfa2eQ0cb4CQr';
var url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;


var vm = new Vue({
    el: '#app',
    data: {
        email: 'mike@example.com',
        submitted: false
    },
    methods: {
        process: function() {
            this.submitted = true;
        }
    }
})


axios.get(url)
    .then(function (res) {
        console.log(res);
});
