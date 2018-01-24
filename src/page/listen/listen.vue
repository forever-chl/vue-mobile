<template>
   <div class="ListenTemplate">
       <music-head :title="songDetail.name"></music-head>
       <div class="lt-lyric">
           <p v-for="item in lyricInfo" :key="item.time" :title="item.time">{{item.txt}}</p>
       </div>
       <div class="ltm-menu-other"></div>
       <div class="lt-menu">
           <div class="ltm-range">
                <span>{{currentTime}}</span>
                <music-range width='70%' :max="durationS" :min="0" :step="1" :val="currentTimeS"></music-range>
                <span>{{duration}}</span>
           </div>
           <div class="ltm-btn">
               <i class="iconfont">&#xe64d;</i>
               <i class="iconfont" id="play">&#xe506;</i>
               <i class="iconfont">&#xe601;</i>
           </div>
       </div>
   </div>
</template>

<style>
    .lt-lyric{padding:1rem;font-size:0.8rem;line-height:1.5rem;}
    .lt-lyric>.now{font-weight:bold;font-size:0.8rem;}
    .ltm-menu-other{height:6rem;}
    .lt-menu{position:fixed;box-sizing:border-box;padding:1rem 0;width:100%;height:6rem;left:0;bottom:0;background-color:#fff;border-top:solid 1px #e1e1e1;display:flex;flex-direction:column;justify-content:space-around}
    .ltm-btn>i{vertical-align:top;font-size:1.4rem;padding:0 2rem;}
</style>

<script src="./listen.js"></script>
