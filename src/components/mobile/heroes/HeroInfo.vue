<template>
  <div class="MobHero">
    <div>
      <img :src="heroInfo.thumbnail.path + '/portrait_medium.jpg'" class="MobHero__img">
    </div>

    <div class="row">
      <div class="col">
        <h4>Name:</h4>
      </div>
      <div class="col">{{heroInfo.name}}</div>
    </div>
    <div class="row">
      <div class="col">
        <h4>description</h4>
      </div>
      <div class="col">{{heroInfo.description}}</div>
    </div>

    <div class="MobHero-info">
      <hr>
      <h2>This Hero's Comics</h2>
      <ul>
        <li v-for="el of heroInfo.comics.items" :key="el.id">
          <router-link
            :to="{name: 'mobcomicsinfo', params:{id:  el.resourceURI.substring(el.resourceURI.lastIndexOf('/') + 1)}}"
          >{{el.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./js/heroInfo.js">

</script>

<style src="./css/heroInfo.css">

</style>