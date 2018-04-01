import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)
export default new Vuex.Store({
    state:{
        songList:JSON.parse(sessionStorage.getItem('songList'))||[],
        thePlaySong:JSON.parse(sessionStorage.getItem('thePlaySong'))||{index:0,id:0,url:''}
    },
    //值的更改
    mutations:{
        //添加到播放列表
        addSongList:(state,info)=>{
            state.songList.push(info);
            sessionStorage.setItem('songList',JSON.stringify(state.songList));
        },
        //设置当前播放歌曲
        setTheSong:(state,songInfo)=>{
            state.songList.forEach((element,index)=>{
                if(element.id==songInfo.id){
                    state.thePlaySong={index:index,id:songInfo.id,url:songInfo.url};
                }
            });
            sessionStorage.setItem('thePlaySong',JSON.stringify(state.thePlaySong));
        }
    },
    //值的读取
    getters:{
        //获取播放列表
        getSongList:state=>{
            return state.songList;
        },
        //获取当前播放歌曲
        getPlaySong:state=>{
            return state.thePlaySong;
        },
        //根据inex获取歌曲
        getNextSongInfo:state=>{
            return state.songList[parseInt(state.thePlaySong.index)+1];
        },
        //检查播放列表是否已有该歌曲
        checkIsInSongList:state=>(id)=>{
            var isExist=false;
            state.songList.forEach(element=>{
                if(element.id==id){
                    isExist=true;
                }
            });
            return isExist;
        }
    },
    actions:{
        //向播放列表添加歌曲
        addSongList:(context,list)=>{
            list.forEach(element => {
                if(!context.getters.checkIsInSongList(element.id)){
                    context.commit('addSongList',element);
                }
            });
        }
    }
})