<template>
  <div>
  <div class="main1 desctop">
    <div class="main1__block">
      <div class="main1__block-discript2">
        <img src="src\assets\main\deadpool.png" alt class="deadpool">
      </div>
      <div class="main1__block-discript">
          <div class="logo1">MARVEL</div>
        
        <img src="src\assets\main\spiderman.png" alt class="spiderman">
        <img src="src\assets\main\cap.webp" alt class="cap">
        <div
          class="text-discript2"
        >In this project, you will be able to get acquainted with the characters of Marvel, find out the interesting details of their biography, as well as get acquainted with the comics with the participation of your favorite characters.</div>
      </div>
    </div>
  </div>

  <div class="MobMain mobile">
    <div class="MobMain__block">
      <div class="MobMain__block-discript2"></div>
      <div class="MobMain__block-discript">
        <div class="MobMain__logo1">MARVEL</div>
        <div
          class="MobMain__text-discript2"
        >In this project, you will be able to get acquainted with the characters of Marvel, find out the interesting details of their biography, as well as get acquainted with the comics with the participation of your favorite characters.</div>
        <div class="MobMain__btn-menu">
          <router-link to="/mobcomics">
            <div class="MobMain__btn">Comics</div>
          </router-link>
          <router-link to="/mobheroes">
            <div class="MobMain__btn">Heroes</div>
          </router-link>          
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    newName(value) {
      this.$emit("componentName", value);
    }
  }
};
</script>

<style>
.main1 {
  width: 100%;
  height: 100%;
}
.main1__block {
  position: absolute;
  top: 30%;
  width: 100%;
  height: 50%;
}
.main1__block-discript {
  position: relative;
  left: 50%;
  width: 500px;
  margin-left: -250px;
  height: 100%;
  transform: skewY(-2deg);
  background: rgb(231, 231, 231);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 50px 50px 0 30px;
  z-index: 0;
}

.main1__block-discript2 {
  position: absolute;
  left: 50%;
  top: 10%;
  margin-left: -270px;
  width: 540px;
  height: 80%;
  transform: skewY(-2deg);
  background: rgb(205, 206, 203);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.deadpool {
  position: relative;
  top: 0;
  margin-top: -200px;
  margin-left: 100px;
  height: 83%;
  z-index: 0;
}
.spiderman {
  position: absolute;
  right: 73%;
  height: 66%;
  top: 10%;
}
.cap {
  position: absolute;
  left: 70%;
  top: 25%;
  height: 90%;
}
.logo1 {
  position: relative;
  background: red;
  color: white;
  left: 50%;
  top: 0;
  font-size: 60px;
  font-weight: bold;
  width: 250px;
  margin: -100px 0 0 -125px;
  text-align: center;
  transform: skewY(-2deg);
}
.text-discript2 {
  margin: 20px 0 0 78px;
}

.MobMain {
  width: 100%;
  height: 100%;
  background: yellow;
  overflow: unset;
}
.main1 {
  width: 100%;
  height: 100%;
}
.MobMain__block {
  position: absolute;
  top: 20%;
  width: 100%;
  height: 50%;
}
.MobMain__block-discript {
  position: relative;
  left: 50%;
  width: 250px;
  height: 270px;
  transform: skewY(-2deg);
  background: rgb(231, 231, 231);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 50px 10px 0 10px;
  z-index: 0;
  margin-left: -125px;
}
.MobMain__btn-menu {
  position: relative;
  left: 50%;
  margin-left: -95px;
}
.MobMain__btn {
  display: inline-block;
  margin: 10px;
  background: black;
  color: white;
  padding: 10px;
}

.MobMain__block-discript2 {
  position: absolute;
  left: 50%;
  top: 10%;
  width: 290px;
  height: 250px;
  transform: skewY(-2deg);
  background: rgb(205, 206, 203);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-left: -145px;
}
.MobMain__logo1 {
  position: relative;
  background: red;
  color: white;
  left: 50%;
  top: 0;
  font-size: 40px;
  font-weight: bold;
  width: 150px;
  margin: -100px 0 0 -75px;
  text-align: center;
  transform: skewY(-2deg);
}
.img-foot{
  position: relative;
  width: 100%;
  top: 80%;
}
</style>
