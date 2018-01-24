<template>
    <div id="bannerTemplate" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in getCount" :key="item">
              <slot v-bind:name="'slot'+item"></slot>
          </div>
        </div> 
        <div class="swiper-pagination"></div>
    </div>
</template>

<script src="./banner.js"></script>
