import axios from "axios";

export default {
  name: "comicsMain",
  data() {
    return {
      comics: [],
      offset: 0
    };
  },
  mounted() {
    this.getComics();
  },
  methods: {
    showNAPage() {
      axios
        .get(
          "src\\data\\comics.json"
        )
        .then(result => {
            this.comics = result.data ;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getComics() {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/comics?apikey=48730a361438aceeaa56fe5dcdadc0ee&offset=0&limit=20"
        )
        .then(result => {
          result.data.data.results.forEach(element => {
            console.log(element);
            this.comics.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    showComics(value){
      if (value === 'next'){
        this.offset +=200;
      } else {
        this.offset -=200;
      }
      this.comics=[];
      axios
        .get(
          "https://gateway.marvel.com/v1/public/comics?apikey=48730a361438aceeaa56fe5dcdadc0ee&offset="+this.offset+"&limit=20"
        )
        .then(result => {
          result.data.data.results.forEach(element => {
            
            this.comics.push(element);
          });
          console.log(this.comics);
          console.log("sdjhgk");
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
};