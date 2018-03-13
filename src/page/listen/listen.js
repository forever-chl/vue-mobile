import range from '../../components/formRange/formRange.vue'
import title from '../../components/head/head.vue'
import actionSheet from '../../components/actionSheet/actionSheet.vue'
import {mapGetters} from 'vuex'
export default{
    data(){
        return{
            songDetail:[],
            dataInfo:[],
            lyricInfo:[],
            duration:0,//总时长（分钟）
            durationS:0,//总时长（秒）
            currentTime:0,//当前播放时间（分钟）
            currentTimeS:0//当前播放时间（秒）
        }
    },
    components: {
        'music-range':range,
        'music-head':title,
        'action-sheet':actionSheet
    },
    computed:mapGetters({
        playSong:'getPlaySong',
        songList:'getSongList'
    }),
    watch:{
        playSong(){
            this.initPage();
        }
    },
    mounted(){
        var _this=this;
        _this.initPage();
    },
    methods:{
        initPage(){
            this.getLyric();
            this.getSongInfo();
            this.getMusicInfo();
        },
        //获取音乐标题
        getSongInfo(){
            var _this=this
            _this.axios.get(`/song/detail?ids=${_this.playSong.id}`).then(function(data){
                    data=JSON.parse(data.request.response).songs[0];
                    _this.songDetail=data;
            });
        },
        //获取音乐歌词
        getLyric(){
            var _this=this;
            _this.axios.get(`lyric?id=${_this.playSong.id}`).then(function(data){
                if(JSON.parse(data.request.response).lrc){
                    data=JSON.parse(data.request.response).lrc.lyric;
                    _this.lyricInfo=data.split('\n');
                    var newLyric=[];
                    for(var i=0;i<_this.lyricInfo.length;i++){
                        var thelyricInfo={};
                        thelyricInfo.time=_this.lyricInfo[i].split("]")[0]+"]";
                        thelyricInfo.txt=_this.lyricInfo[i].split("]")[1];
                        newLyric.push(thelyricInfo);
                    }
                    _this.lyricInfo=newLyric;
                }else{
                    _this.lyricInfo=[];
                }
            })
        },
        //监听音乐播放时间
        getMusicInfo(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            var playElement=document.getElementById("play");
            audioElement.addEventListener("timeupdate",function(){
                _this.currentTime=_this.parseSecondToMinite(audioElement.currentTime);
                _this.currentTimeS=audioElement.currentTime;
                _this.duration=_this.parseSecondToMinite(audioElement.duration);
                _this.durationS=audioElement.duration;
                _this.setLyricPosition();
            },false);
            playElement.addEventListener("click",function(){
                _this.beginPlay();
            },false);
        },
        //开始播放音乐
        beginPlay(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            var playElement=document.getElementById("play");
            audioElement.play();
            playElement.innerHTML="&#xe659;";
            playElement.removeEventListener("click",function(){
                _this.beginPlay();
            },false);
            playElement.addEventListener("click",function(){
                _this.endPlay();
            },false);
        },
        //暂停播放音乐
        endPlay(){
            var _this=this;
            var audioElement=document.getElementById("MusicURL");
            var playElement=document.getElementById("play");
            audioElement.pause();
            playElement.innerHTML="&#xe506;";
            playElement.removeEventListener("click",function(){
                _this.endPlay();
            },false);
            playElement.addEventListener("click",function(){
                _this.beginPlay();
            },false);
        },
        //妙转分
        parseSecondToMinite(second){
            var min=0;
            var sec=0;
            if(second>60){
                sec=Math.floor(second%60);
                min=Math.floor(second/60);
            }else{
                sec=Math.floor(second);
            }
            return (min>10?min:'0'+min)+':'+(sec>=10?sec:'0'+sec);
        },
        //设置歌词播放位置
        setLyricPosition(){
            var _this=this;
            var allLyricElem
            if(document.getElementsByClassName("lt-lyric")[0]){
                allLyricElem=document.getElementsByClassName("lt-lyric")[0].childNodes;
            }
            var nowElem;
            if(allLyricElem){
                allLyricElem.forEach(function(ele){
                    if(ele.attributes.title.nodeValue.indexOf(_this.currentTime.substr(0,5))>0){
                        nowElem=ele;
                        _this.removeNowClass();
                        nowElem.className='now';
                        var elemTop=nowElem.offsetTop;
                        var documentHeight=window.screen.height;
                        var scrollTop=document.body.scrollTop;
                        var newScrollTop=elemTop-(documentHeight/2);
                        if(newScrollTop>0){
                            window.scrollTo(scrollTop,newScrollTop);
                        }
                    }
                });
            }
        },
        //移除当前播放位置样式
        removeNowClass(){
            var allLyricElem=document.getElementsByClassName("lt-lyric")[0].childNodes;
            allLyricElem.forEach(function(ele){
                ele.className='';
            });
        }
    }
}