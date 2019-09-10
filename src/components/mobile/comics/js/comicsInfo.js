import axios from "axios";

export default {
  name: "MobComicsInfo",
  components: {},
  data() {
    return {
      comicsInfo: null,
      comicsId: "",
      comics: []
    };
  },
  created() {
    this.comicsId = this.$route.params.id;
  },
  mounted() {
    this.getComicsInfo();
  },
  methods: {
    getComicsInfo() {
      if (Number(this.comicsId) < 100) {
        axios
          .get(
            "src\\data\\comics.json"
          )
          .then(result => {
            this.comicsInfo = result.data[Number(this.comicsId-1)];
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .get(
            "https://gateway.marvel.com/v1/public/comics/" +
              this.comicsId +
              "?apikey=48730a361438aceeaa56fe5dcdadc0ee"
          )
          .then(result => {
            this.comicsInfo = result.data.data.results[0];
            console.log(this.comicsInfo);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};