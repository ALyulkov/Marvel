<template>
  <div class="MobHeroes">
    <div class="NA-info" v-if="heroes.length===0">
      <div class="NA__container">
        <div class="NA__Header">Sorry!!!</div>Unfortunately, we were unable to obtain information from "developer.marvel.com". But you can get acquainted with several popular characters. Let's not waste time !!!
        <div class="NA__footer" @click="showNAPage()">let's try!!!</div>
      </div>
    </div>

    <div v-if="heroes.length>0">
      <div
        class="MobHero-box"
        v-for="item of heroes"
        :key="item.name"
      >
        <Router-link :to="{name: 'mobheroinfo', params: {id: item.id}}">
          <div class="text-header">{{item.name}}</div>
          <img :src="item.thumbnail.path + '/portrait_medium.jpg'" class="MobHero-img">
        </Router-link>
      </div>
    </div>
    <div class="page-menu">
        <div
          class="btn btn-primary btn-page"
          @click="showHeroes('prev')"
        >prev</div>
        <div
          class="btn btn-primary btn-page"
          @click="showHeroes('next')"
        >next</div>
      </div>
  </div>
</template>

<script src="./js/heroes.js">

</script>

<style src="./css/heroes.css">

</style>
