import axios from "axios";

export default {
  name: "MobHero",
  components: {},
  data() {
    return {
      heroInfo: null,
      heroId: "",
    };
  },
  created() {
    this.heroId = this.$route.params.id;
    this.getHeroInfo();
  },
  mounted() {
    
  },
  methods: {
    getHeroInfo() {
      if (Number(this.heroId) < 100) {
        axios
          .get(
            "src\\data\\heroes.json"
          )
          .then(result => {
            var test = result.data;
            this.heroInfo = result.data[Number(this.heroId-1)];
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .get(
            "https://gateway.marvel.com/v1/public/characters/" +
              this.heroId +
              "?apikey=48730a361438aceeaa56fe5dcdadc0ee"
          )
          .then(result => {
            this.heroInfo = result.data.data.results[0];
            console.log(this.heroInfo);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};