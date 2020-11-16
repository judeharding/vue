const app = Vue.createApp({
    data() {
        return {
            user: '',
            isActive: true,
            userBGColor: '',
        };
    },

    methods: {
        setUser(event) {
            this.user = event.target.value;
            console.log(this.user);
        },

        toggleClass(event) {
            this.isActive = !this.isActive;
        },
    },

    computed: {
        userClass() {
            if (this.user == "user1") {
                return { user1: this.user };
            } else {
                return { user2: this.user };
            }
        },

        togglePara() {
            return {
                visible: this.isActive,
                hidden: !this.isActive
            }
        },
    },

    watch: {

    },
});

app.mount('#assignment');

