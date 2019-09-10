import axios from "axios"

export default {
  name: "heroes",
  data() {
    return {
      count: 0,
      pages: [],
      heroes: [],
      offset: 0
    };
  },
  mounted() {
    this.getCharacters();
    
  },
  methods: {
    getCharacters() {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters?apikey=48730a361438aceeaa56fe5dcdadc0ee&offset=0&limit=20"
        )
        .then(result => {
          result.data.data.results.forEach(element => {
            console.log(element);
            this.heroes.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    showHeroes(value){
      if (value === 'next'){
        this.offset +=200;
      } else {
        this.offset -=200;
      }
      this.heroes=[];
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters?apikey=48730a361438aceeaa56fe5dcdadc0ee&offset="+this.offset+"&limit=20"
        )
        .then(result => {
          result.data.data.results.forEach(element => {
            
            this.heroes.push(element);
          });
          console.log(this.heroes);
        })
        .catch(error => {
          console.log(error);
        });
    },
    showNAPage(){
      
      axios
          .get(
            "src\\data\\heroes.json"
          )
          .then(result => {
            this.heroes = result.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    pageNumber() {
      var i = Math.floor(this.heroes.length / 8) + 1;
      for (var n = 0; n < i; n++) {
        this.pages.push(n + 1);
      }
    }
  }
}