<template>
  <div class="HeroInfo">
    <div class="backgr"></div>
    <div class="row">
      <div class="col-5">
        <img :src="heroInfo.thumbnail.path + '/portrait_uncanny.jpg'" class="img-block">
        more information:
          <h6
              class="comics__heroes on"
              v-for="el of heroInfo.urls"
              :key="el"              
            >
            <a :href="el.url"
                
              >{{el.type}}</a>
            
            </h6>
      </div>
      <div class="col-7">
        <div class="row">
          <div class="col-4">
            <h4>Name:</h4>
          </div>
          <div class="col-8">{{heroInfo.name}}</div>
        </div>
        <div class="row">
          <div class="col-4">
            <h4>Discription:</h4>
          </div>
          <div class="col-8 descr" v-if="heroInfo.description === ''">no info</div>
          <div class="col-8 descr" v-if="heroInfo.description != ''">{{heroInfo.description}}</div>
        </div>
        <div class="row">
          <div class="col">
            <h2>This Hero's Comics</h2>
            <ul>
              <li
                class="on"
                v-for="el of heroInfo.comics.items"
                :key="el.id"
                @click="showComics(el.resourceURI)"
              >
                <router-link
                  :to="{name: 'comicsinfo', params:{id:  el.resourceURI.substring(el.resourceURI.lastIndexOf('/') + 1)}}"
                >{{el.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/heroInfo.js">

</script>

<style src="./css/heroInfo.css">

</style>
