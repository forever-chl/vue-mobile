<template>
   <div class="ListenTemplate">
       <!-- 头部 -->
       <music-head :title="songDetail.name">
           <action-sheet :title="'共'+(songList.length)+'首'" :btns="songList" btns-val="id" btns-text="name">
               <span class="ht-songList"></span>
           </action-sheet>
       </music-head>
       <!-- 歌词面板 -->
       <div class="lt-lyric-gb" :style="'background:url(\''+songDetail.al.picUrl+'\') no-repeat center center;background-size:auto 100%;'"></div>
       <div class="lt-lyric">
           <p v-for="item in lyricInfo" :key="item.time" :title="item.time">{{item.txt}}</p>
       </div>
       <!-- 播放操作面板 -->
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
    /* 歌词 */
    .lt-lyric-gb{position:fixed;width:120%;height:100%;left:-1rem;top:0; z-index:-1;filter:blur(20px);}
    .lt-lyric{padding:1rem;font-size:0.8rem;line-height:1.5rem;color:#fff;}
    .lt-lyric>p{color:#fff;}
    .lt-lyric>.now{font-weight:bold;font-size:0.8rem;}
    /* 播放操作面板 */
    .ltm-menu-other{height:6rem;}
    .lt-menu{position:fixed;box-sizing:border-box;padding:1rem 0;width:100%;height:6rem;left:0;bottom:0;background-color:#fff;border-top:solid 1px #e1e1e1;display:flex;flex-direction:column;justify-content:space-around}
    .ltm-btn>i{vertical-align:top;font-size:1.4rem;padding:0 2rem;}
    /* 播放列表按钮 */
    .ht-songList{width:100%;height:100%;display:block;background:url('../../assets/img/list.png') no-repeat center center;background-size:1rem auto;}
</style>

<script src="./listen.js"></script>
