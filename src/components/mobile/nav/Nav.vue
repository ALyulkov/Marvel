<template>
  <div class="NavMobile">
    <div class="NavMobile-trangle" @click="showMenu = !showMenu" v-if="showMenu">
      <div class="menu-icon" >{{menuIcon[0]}}</div>
    </div>
    
    <transition name="fade">
    <div class="MobMenu"  v-if="!showMenu">
      <div class="menu-icon1" @click="showMenu = !showMenu">{{menuIcon[1]}}</div>
      <router-link to="/"> <div class="MobMenu-item" @click="showMenu = !showMenu">Main</div> </router-link>
      <router-link to="/mobcomics"><div class="MobMenu-item" @click="showMenu = !showMenu">Comics</div> </router-link>
      <router-link to="/mobheroes"><div class="MobMenu-item" @click="showMenu = !showMenu">Heroes</div> </router-link>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavMobile",

  components: {},
  data() {
    return {
      menuIcon:["M", "X"],
      showMenu: true
    };
  },
  methods:{
    newName(value) {
      this.$emit("MobComponentName", value);
    }
  }
};
</script>

<style>
.NavMobile-trangle {
  position: absolute;
  top: 0;
  left: 0;
  border: 35px solid transparent;
  border-left: 35px solid black;
  border-top: 35px solid black;
  color: white;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  -webkit-transition: all 1s ease-out;
  transition: all 1s ease-out;
  z-index: 1;
}

.menu-icon {
  position: absolute;
  color: white;
  font-size: 30px;
  
  margin-left: -30px;
  margin-top: -35px;
  z-index: 1;
}
.menu-icon1{
  position: absolute;
  color: white;
  font-size: 30px;
  
  margin-left: -65px;
  margin-top: -70px;
  z-index: 1;
}
.MobMenu {
  -moz-transition: all 1s ease-in;
  -o-transition: all 1s ease-in;
  -webkit-transition: all 1s ease-in;
  transition: all 1s ease-in;
  position: absolute;
  color: white;
  font-size: 20px;
  top: 0px;
  left: 0;
  margin-left: 0px;
  z-index: 2;
  border: 100px solid transparent;
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 0 0 150px 0;
}
.MobMenu-item{
  background: black;
  position: relative;
  top: -30px;
  left: -40px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
