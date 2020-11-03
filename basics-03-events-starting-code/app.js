const app = Vue.createApp({
  data: function () {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      // standard vanilla js
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmName = this.name;
    },

    submitForm(event) {
      event.preventDefault();
      alert('submitted');
    },

  },
});
// mounting to the EVENTS section of the html...
app.mount('#events');
