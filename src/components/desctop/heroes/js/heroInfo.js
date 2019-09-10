import axios from "axios";

export default {
  name: "HeroInfo",
  data() {
    return {
      heroInfo: "",
      heroId: null
    };
  },
  created() {
    this.heroId = this.$route.params.id;
  },
  mounted() {
    this.getHeroInfo();
  },
  methods: {
    getHeroInfo() {
      if (Number(this.heroId) < 100) {
        axios
          .get(
            "src\\data\\heroes.json"
          )
          .then(result => {
            console.log(result.data)
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
    },
    showComics(value) {
      this.$emit("componentName", "ComicsInfo");
      this.$emit("ComicsName", value);
      console.log(value);
    }
  }
};