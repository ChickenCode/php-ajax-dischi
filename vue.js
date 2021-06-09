new Vue({
    el: "#root",
    data: {
        discs: [],
        searchGenre: "",
        page: 1,
        totalPageNumbers: 1
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
                        this.discs = this.paginateArray(resp.data)
                        
                    })
            }

            else {
                axios.get("http://localhost/php-ajax-dischi/server.php")
                    .then((resp) => {
                        this.discs = this.paginateArray(resp.data)
                        
                    })
            }
        },

        paginateArray(data) {
            let itemsPerPage = 3;
            let currentPage = this.page;
            let totalPages = data.length / itemsPerPage;
            this.totalPageNumbers = totalPages;
            let offset = itemsPerPage * (currentPage - 1);
            let paginetedData = data.slice(offset, (offset + itemsPerPage));

            return paginetedData
        },

        pagePlus() {
            ++this.page
            this.fetchData()
            if (this.page > this.totalPageNumbers) {
                this.page = this.totalPageNumbers
            }
        },

        pageMinus() {
            --this.page
            this.fetchData()
            if (this.page < 1) {
                this.page = 1
            }
        }

    },

    mounted() {
        this.fetchData();
    }

})