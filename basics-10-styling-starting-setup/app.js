const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },

    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
                console.log("a");
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
                console.log("b");
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
                console.log("c");
            }
        }
    },

    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        },
    },

    watch: {

    }
});

app.mount('#styling');