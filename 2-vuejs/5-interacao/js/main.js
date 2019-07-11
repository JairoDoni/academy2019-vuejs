var app = new Vue({
  el: '#app',
  data: {
    message: 'Olá Vue!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
      //split usa um array para rearranjar as letras
      // e organizalas ao contrario
    }
  }
})