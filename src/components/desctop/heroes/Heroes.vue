<template>
  <div class="heroes">
      <div class="backgr"></div>

    <div class="NA-info" v-if="heroes.length===0">
      <div class="NA__container">
        <div class="NA__Header">Sorry!!!</div>
        <div>Unfortunately, we were unable to obtain information from "developer.marvel.com". But you can get acquainted with several popular characters. Let's not waste time !!!</div>
        <div class="NA__footer" @click="showNAPage()">let's try!!!</div>
      </div>
    </div>

    <div class="heroes__container" v-if="heroes.length>0">
      <div class="row">
        
        <div class="col-3" v-for="item of heroes" :key="item.name">
          <router-link :to="{name: 'heroinfo', params: {id: item.id}}">
          
            <div class="hero-box" >
              <div class="text-header">{{item.name}}</div>
              <img :src="item.thumbnail.path + '/portrait_uncanny.jpg'" class="hero-img">
            </div>
          
          </router-link>
        </div>
        
      </div>
      <div class="page-menu" v-if="heroes.length>20">
        <div
          class="btn-page"
          @click="showHeroes('prev')"
        >&lt;&lt; prev</div>
        <div
          class="btn-page"
          @click="showHeroes('next')"
        >next &gt;&gt;</div>
      </div>
    </div>
  </div>
</template>

<script src="./js/heroes.js">

</script>

<style src="./css/heroes.css">
  
</style>
