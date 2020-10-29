Vue.createApp({
    // get the data from the field entered
    data() {
        // return an object
        return {
            goals: [],
            enteredValue: ''
        };
    },
    // methods
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app');









// to add stuff to the list, you need 3 constants:
// access to button, access to field, access to list

//VANILLAJS
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';

// }
// buttonEl.addEventListener('click', addGoal);

// VUEJS