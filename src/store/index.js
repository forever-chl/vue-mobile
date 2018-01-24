import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        songList:[],
        thePlaySong:{index:0,id:0}
    },
    mutations:{
        //添加播放列表
        addSongList:(state,list)=>{
            list.forEach(element => {
                if(!_this.checkIsInSongList(state,element)){
                    state.songList.push(element);
                }
            });
            console.log(state.songList);
        },
        //设置当前播放歌曲
        setTheSong:(state,id)=>{
            state.songList.forEach((element,index)=>{
                if(element.id==id){
                    state.thePlaySong={index:index,id:element.id};
                    return;
                }
            });
        },
        //检查播放列表是否已有该歌曲
        checkIsInSongList:(state,id)=>{
            state.songList.forEach(element=>{
                if(element==id){
                    return true;
                }
            });
            return false;
        }
    },
    getters:{
        //获取播放列表
        getSongList:state=>{
            return state.songList;
        },
        //获取当前播放歌曲
        getPlaySong:state=>{
            return state.thePlaySong;
        }
    },
    actions:{
        //向播放列表添加歌曲
        addSongList:(context,list)=>{
            list.forEach(element => {
                if(!context.commit('checkIsInSongList',element)){
                    context.state.songList.push(element);
                }
            });
        },
        //设置当前播放歌曲为顺延下一首
        nextSong:(context)=>{
            var allSongList=context.getters.getSongList;
            var theSongIndex=(context.getters.getPlaySong).index;
            var nextSongIndex=(theSongIndex==(allSongList.length-1)?0:(theSongIndex+1));
            var nextSongId=allSongList[nextSongIndex].id;
            context.commit('setTheSong',nextSongId);
        }
    }
})