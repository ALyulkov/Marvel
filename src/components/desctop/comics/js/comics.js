import axios from "axios"

export default {
  name: "comicsMain",
  data() {
    return {
      count: 0,
      pages: [],
      comics: [],
      offset: 0
    };
  },
  mounted() {
    this.getComics(); //функция которая получает список героев
  },
  methods: {
    getComics() {
      this.comics=[]; //обнуление массива с данными героев
      axios
        .get( // получение 20 пакетов данных
          "https://gateway.marvel.com/v1/public/comics?apikey=48730a361438aceeaa56fe5dcdadc0ee&offset=0&limit=20"
        )
        .then(result => { //выборка нужной части данных из массива полученного с devrloper.marvel.com
          result.data.data.results.forEach(element => {
            
            this.comics.push(element); //добавдение комиксов в массив комиксов
          });
        })
        .catch(error => { //отслеживание ошибок
          console.log(error);
        });
        
    },
    showComics(value){ //получение следующей страницы комиксов
      if (value === 'next'){ //обработка кнопок следующее или предыдущее
        this.offset +=200;
      } else {
        this.offset -=200;
      }
      this.comics=[]; //обнуление массива с комиксами
      axios
        .get( 
          "https://gateway.marvel.com/v1/public/comics?apikey=48730a361438aceeaa56fe5dcdadc0ee&offset="+this.offset+"&limit=20"
        )
        .then(result => {
          result.data.data.results.forEach(element => {
            
            this.comics.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    showNAPage() { //функция которая выгружает список героев с файла если нет связи с developer.marvel.com
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
    }
  }
};