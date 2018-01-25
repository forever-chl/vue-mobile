import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)
export default new Vuex.Store({
    state:{
        songList:[],
        thePlaySong:{index:0,id:0,url:''}
    },
    mutations:{
        addSongList:(state,info)=>{
            state.songList.push(info);
        },
        //设置当前播放歌曲
        setTheSong:(state,songInfo)=>{
            state.songList.forEach((element,index)=>{
                if(element.id==songInfo.id){
                    state.thePlaySong={index:index,id:songInfo.id,url:songInfo.url};
                    return;
                }
            });
        },
        //检查播放列表是否已有该歌曲
        checkIsInSongList:(state,id)=>{
            state.songList.forEach(element=>{
                if(element.id==id){
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
            console.log(state.thePlaySong);
            return state.thePlaySong;
        },
        //根据inex获取歌曲
        getNextSongInfo:state=>{
            return state.songList[parseInt(state.thePlaySong.index)+1];
        }
    },
    actions:{
        //向播放列表添加歌曲
        addSongList:(context,list)=>{
            list.forEach(element => {
                if(!context.commit('checkIsInSongList',element)){
                    context.commit('addSongList',element);
                }
            });
        }
    }
})