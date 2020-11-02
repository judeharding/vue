const app = Vue.createApp({
    // key option is data property key
    data: function () {
        // the data property always returns an object 
        return {
            courseGoal: 'Finish the Vue class',
            vueLink: 'https://www.vuejs.org'
        };
    },
    // method option takes an object full of method
    methods: {
        // all of the method outputs are functions
        outputGoal: function () {
            const randNumber = Math.random();
            if (randNumber < .5) {
                return 'Learn Vue!';
            } else {
                return '<h3>Mastered vue!</h3>';
            }
        }
    }

});

// vue control just a section via css selcetor
app.mount('#user-goal');

