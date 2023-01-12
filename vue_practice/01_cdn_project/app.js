const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<p><a href="https://google.com" target="_blank">Google</a></p>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    updateLastName(msg, event) {
      this.lastName = event.target.value;
    },
  },
}).mount('#app');

// setTimeout(() => {
//   vm.firstName = "Bob";
// }, 2000);
