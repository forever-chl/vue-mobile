<template>
  <div id="app">
    <router-view/>
    <audio id="MusicURL" :src="dataInfo.url"></audio>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      dataInfo:[],
      playSone:[],
      durationS:0
    }
  },
  mounted(){
    this.initFunc();
    this.$on("refreshTheSong",function(){
      debugger;
      this.initFunc();
    });
  },
  methods:{
      initFunc(){
        this.playSone=this.$store.getters.getPlaySong;
        this.getSongDetail();
        this.getMusicInfo();
      },
      getSongDetail(){
        var _this=this;
        if(_this.playSone){
          _this.axios.get(`music/url?id=${_this.playSone.id}`).then(function(data){
              data=JSON.parse(data.request.response).data;
              if(data.length>0){
                  _this.dataInfo=data[0];
              }
          });
        }
      },
       getMusicInfo(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            audioElement.addEventListener("durationchange",function(){
                _this.durationS=audioElement.duration;
                _this.beginPlay();
            },false);
            audioElement.addEventListener("ended",function(){
                _this.$store.dispatch('nextSong');
            },false);
        },
        beginPlay(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            audioElement.play();
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
