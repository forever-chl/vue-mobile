<template>
  <div id="indexPage">
      <banner-swiper count="4">
          <div class="box" slot="slot1">
              <div class="box-content">
                  <div class="box-content-one">
                      <!-- <p><i class="iconfont" v-html="sweatherIcon"></i></p>
                      <p>{{sweatherData.cityName}}（{{sweatherData.tq}}）</p>
                      <p>{{sweatherData.qw}}℃</p>
                      <p>湿度：{{sweatherData.sd}}%</p> -->
                  </div>
                  <div class="box-content-two"></div>
              </div>
              <div class="box-content">
                  <div class="box-content-two"></div>
                  <div class="box-content-one"></div>
              </div>
          </div>
          <div class="box b-c-blue" slot="slot2"></div>
          <div class="box b-c-green" slot="slot3"></div>
          <div class="box b-c-yellow" slot="slot4"></div>
      </banner-swiper>
  </div>
</template>

<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>