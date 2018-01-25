<template>
  <div id="app">
    <router-view/>
    <audio id="MusicURL" :src="playSong.url"></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      durationS:0
    }
  },
  computed:mapGetters({
        playSong:'getPlaySong'
  }),
  mounted(){
    var _this=this;
    _this.initFunc();
  },
  methods:{
      initFunc(){
        this.getMusicInfo();
      },
       getMusicInfo(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            audioElement.addEventListener("durationchange",function(){
                _this.durationS=audioElement.duration;
                _this.beginPlay();
            },false);
            audioElement.addEventListener("ended",function(){
                audioElement.currentTime=0;
                console.log(_this.playSong);
                var nextSong=_this.$store.getters.getNextSongInfo;
                _this.getSongDetail(nextSong.id);
            },false);
        },
        beginPlay(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            audioElement.play();
        },
        getSongDetail(id){
            var _this=this;
            _this.axios.get(`music/url?id=${id}`).then(function(data){
                data=JSON.parse(data.request.response).data;
                if(data.length>0){
                    _this.$store.commit('setTheSong',{'id':id,'url':data[0].url});
                }
            });
        }
  }
}
</script>
<style src="./assets/css/common.less" lang="less"></style>
<style src="./assets/css/iconfont.css"></style>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{margin:0;}
</style>
