<template>
  <div class="navig">
      <div class="logo">MARVEL</div>

      <router-link to="/"><div class="logo-black" @click="newName('Main1')">main</div></router-link>
      <router-link to="/heroes"><div class="logo-black" @click="newName('Heroes')">Heroes</div></router-link>
      <router-link to="/comics"><div class="logo-black"  @click="newName('ComicsMain')">comics</div></router-link>

  </div>
</template>

<script>
export default {
  name: "navig",
  data() {
    return {
      
    };
  },
  mounted() {
   
  },
  methods:{
      newName(value){
          this.$emit("componentName", value)
      }
  }
};
</script>

<style>


.logo{
  position: relative;
  background: red;
  color: white;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -0px;
  border: 1px solid white;
  width: 200px;
  text-align: center;
  margin: 100px 0 50px 0;
  transform: skewY(-5deg); 
}
.logo-black{
  position: relative;
  background: rgb(8, 8, 8);
  color: white;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -0px;
  border: 1px solid white;
  width: 200px;
  text-align: center;
  left:0;
  margin: 0px 0 0 0;
  transform: skewY(-5deg); 
  z-index: 1;
}
.logo-black:hover{
  cursor: pointer;
  background: yellow;
}

@media (max-width:729px) {
}
</style>
