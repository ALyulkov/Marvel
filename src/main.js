import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router';
import Comics from './components/desctop/comics/Comics.vue'
import ComicsInfo from './components/desctop/comics/ComicsInfo.vue'
import Heroes from './components/desctop/heroes/Heroes.vue'
import Main from './components/desctop/main/Main.vue'
import HeroInfo from "./components/desctop/heroes/HeroInfo.vue"
import MobHeroes from "./components/mobile/heroes/Heroes.vue"
import MobComics from './components/mobile/comics/Comics.vue'
import MobHeroInfo from './components/mobile/heroes/HeroInfo.vue'
import MobComicsInfo from './components/mobile/comics/ComicsInfo.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

var router = new VueRouter({
  routes:[
    {path: '/', component: Main},
    {path: '/comics', component: Comics},
    {path: '/heroes', component: Heroes},
    {path: '/heroinfo:id',name: "heroinfo", component: HeroInfo},
    {path: '/comicsinfo:id', name: 'comicsinfo', component : ComicsInfo },
    {path: '/mobheroes', component: MobHeroes},
    {path: '/mobcomics', component: MobComics},
    {path: '/mobheroinfo:id',name: "mobheroinfo", component: MobHeroInfo},
    {path: '/mobcomicsinfo:id', name: 'mobcomicsinfo',  component: MobComicsInfo}
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
