<template>
  <div class="container">
      <div class="box" v-for="info in 42" :key="info">
          <img :src="'src/assets/img/'+(info)+'.jpg'" alt="">
      </div>
  </div>
</template>

<style>
    .container{position:relative;}
    .container::after{content:'';display:block;width:0;left:0;clear:both;}
    .box{padding:0.2rem;box-sizing:border-box;float:left;}
    .box>img{width:100%;display:block;}
    @media screen and (max-width:640px){
       .box{width:50%;} 
    }
    @media screen and (min-width:641px){
       .box{width:25%;} 
    }
    @media screen and (min-width:961px){
       .box{width:20%;} 
    }
     @media screen and (min-width:1281px){
       .box{width:12.5%;} 
    }
</style>

<script src="./pullList.js"></script>

