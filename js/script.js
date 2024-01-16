const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "./server.php",
            disks: []
        }
    },
    methods: {
        getDisks() {
            axios.get("./server.php")
            .then( response => {
                this.disks = response.data;
            });
        }
    },
    created() {
        this.getDisks();
    }
}).mount('#app')