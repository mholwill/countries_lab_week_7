import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue ({
    el: '#app',
    data:{
      countries: [],
      selectedCountry: ""
    },
    mounted(){
      this.fetchCountries()
    },
    methods: {
      fetchCountries: function (){
        const resquest = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      }
    },
    computed: {
      globalPop: function () {
        return this.countries.reduce((total, country) => {
          return total += country.population
        },0)
      }
    }

  })
})
