const app = Vue.createApp({
  // RETURNS something
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },


  // computed is similar to methods but 
  // you don't CALL them and better for performance 
  // for outputing values
  // MUST RETURN something
  // only recalculates a data property if a dependency
  // is changed
  // Data based on other data 
  computed: {

    fullName() {
      console.log('running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
      }
    },
  },

  // define methods here too  -- whenever
  // can use a name in data or computed 
  // whenever data or computed property name 
  // changes, it will execute again 
  // it's great for counters or timers b/c it executes 
  // when a piece of logic renders true
  // timers, http requests, counters all good in watch
  // non data updates?  use watchers
  watch: {

    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          // this.counter not scoped so using that
          that.counter = 0;
        }, 2000);
      }
    },
  },


  // bind events to methods and methods are used over
  // computed if you know you want to recalculate a value
  // when something changes
  // EVENTS trigger methods ie on click, on enter
  // Used with EVENT binding and Data binding
  methods: {

    reset() {
      this.name = '';

    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
