const app = Vue.createApp({

    data() {
        return {
            tasks: ['test task'],
            enteredTask: '',
            toggleShow: true,
        };
    },

    computed: {
        buttonCaption() {
            return this.toggleShow ? 'Hide List' : 'Show List';
        },
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },

        toggleList() {
            this.toggleShow = !this.toggleShow;
        },

    },

    watch: {},
});

app.mount('#assignment');




// const app = Vue.createApp({
//     data(){
//         return{};
//     },

//     methods:{},

//     computed:{},

//     watch:{},

// });

// app.mount('HTMLsectionId');