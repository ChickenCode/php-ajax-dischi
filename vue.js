new Vue({
    el: "#root",
    data: {
        discs: [],
        searchGenre: "",
    },
    methods: {
        fetchData() {

            if (this.searchGenre) {

                axios.get("http://localhost/php-ajax-dischi/server.php", {
                    params: {
                        fGenre: this.searchGenre
                    }
                })
                    .then((resp) => {
                        this.discs = resp.data
                    })
            }

            else {
                axios.get("http://localhost/php-ajax-dischi/server.php")
                    .then((resp) => {
                        this.discs = resp.data
                    })
            }
        },

    },

    mounted() {
        this.fetchData();
    }

})