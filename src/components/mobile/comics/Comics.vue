<template>
  <div class="MobComics">
    <div class="NA-info" v-if="comics.length===0">
      <div class="NA__container">
        <div class="NA__Header">Sorry!!!</div>Unfortunately, we were unable to obtain information from "developer.marvel.com". wait few second... Or you can get acquainted with several popular characters. Let's not waste time !!!
        <div class="NA__footer" @click="showNAPage()">let's try!!!</div>
      </div>
    </div>

    <div v-if="comics.length>0">
      <div class="MobComics-box" v-for="item of comics" :key="item.resourceURI">
        <Router-link :to="{name: 'mobcomicsinfo', params: {id: item.id}}">
          <div class="hero-box">
            <div class="text-header">{{item.title}}</div>
            <img class="MobComics-img" :src="item.thumbnail.path + '/portrait_medium.jpg'" />
          </div>
        </Router-link>
      </div>
      <div class="page-menu">
        <div
          class="btn-page"
          @click="showComics('prev')"
        >&lt;&lt; prev</div>
        <div
          class="btn-page"
          @click="showComics('next')"
        >next &gt;&gt;</div>
      </div>
    </div>
  </div>
</template>

<script src="./js/comics.js">

</script>

<style src="./css/comics.css">

</style>
