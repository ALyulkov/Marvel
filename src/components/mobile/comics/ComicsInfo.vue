<template>
  <div class="MobComicsInfo">
    <div class="comics__block">
      <div class="MobComicsInfo__imd-block">
        <img :src="comicsInfo.thumbnail.path+'/portrait_medium.jpg'" alt class="MobComicsInfo__img">
      </div>
      <div class="comics__col col">
        <div class="backgr"></div>
        <div class="comics__info">
          <h1 class="comics__text-header">{{comicsInfo.title}}</h1>
          {{comicsInfo.description}}
          <hr>Heroes in this comics:
          <h6
            class="comics__heroes"
            v-for="item of comicsInfo.characters.items"
            :key="item"
            @click="HeroInfo(item.resourceURI)"
          >
            <router-link
              :to="{name: 'mobheroinfo', params:{id:  item.resourceURI.substring(item.resourceURI.lastIndexOf('/') + 1)}}"
            >{{item.name}}</router-link>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/comicsInfo.js">

</script>

<style src="./css/comicsInfo.css">

</style>
