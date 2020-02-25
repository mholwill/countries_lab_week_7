import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue ({
    el: '#app',
    data:{
      countries: [],
      countryIndex: null,
      // selectedCountry: this.countries[countryIndex]
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
      },
      selectedCountry: function () {    return this.countries[this.countryIndex]
      }
    }
  })
})
