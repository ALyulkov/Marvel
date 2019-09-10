<template>
  <div class="foot">
      <a href="https://github.com/DartPin/marvel"><img src="src\assets\github.png" class="git-img" alt=""></a>
      <p>© Copyright 2018. Lyulkov A.A. All rights reserved</p>

  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      
    };
  },
  mounted() {
   
  },
  methods:{
      
  }
};
</script>

<style>
    .foot{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        text-align: center;
        background: black;
        color: white;
        box-shadow: 0 0 10px black;
        opacity: 0.5;
    }
    .git-img{
      float: left;
      height: 50px;
      margin: 5px;
    }
</style>
