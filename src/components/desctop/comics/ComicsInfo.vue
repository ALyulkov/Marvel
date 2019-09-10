<template>
  <div class="comics">
    <div class="comicsInfo__block">
      <div class="backgr"></div>
      <div class="comics__row row">
        <div class="comics__col col-5">
          <img
            :src="comicsInfo.thumbnail.path+'/portrait_uncanny.jpg'"
            alt
            class="comics__name__img"
          />
          more information:
          <h6 class="comics__heroes on" v-for="el of comicsInfo.urls" :key="el.id">
            <a :href="el.url">{{el.type}}</a>
          </h6>
        </div>
        <div class="comics__col col-7">
          <div class="comics__info">
            <h1 class="comics__text-header">{{comicsInfo.title}}</h1>
            <div v-if="comicsInfo.description === ''">no info</div>
            <div v-if="comicsInfo.description != ''">{{comicsInfo.description}}</div>

            <hr />Heroes in this comics:
            <h6 class="comics__heroes on" v-for="item of comicsInfo.characters.items" :key="item.id">
              <router-link
                :to="{name: 'heroinfo', params:{id:  item.resourceURI.substring(item.resourceURI.lastIndexOf('/') + 1)}}"
              >{{item.name}}</router-link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/comicsInfo.js">
</script>

<style src="./css/comicsInfo.css">
</style>
