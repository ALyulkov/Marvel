<template>
  <div id="app">
    <div class="desctop">
      <div class="back"></div>
      <Nav></Nav>
      <router-view></router-view>
      <Foot></Foot>
    </div>
    <div class="mobile">
          <NavMobile></NavMobile>
          <router-view></router-view>
          <MobFoot></MobFoot>
      </div>
  </div>
</template>

<script src="./components/app.js">
import Nav from "./components/desctop/nav/Nav.vue";
import NavMobile from "./components/mobile/nav/Nav.vue";
import Foot from "./components/desctop/foot/Foot.vue";
import MobFoot from "./components/mobile/foot/Foot.vue";


export default {
  name: "app",
  components: {
    Nav,
    NavMobile,
    Foot,
    MobFoot
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style src="./components/app.css">

</style>
