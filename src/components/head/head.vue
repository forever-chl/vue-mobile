<template>
    <div>
        <div class="headTemplate">
            <span class="ht-back" onclick="history.go(-1)"></span>
            <h1>{{title}}</h1>
            <action-sheet :btns="songList" btns-val="id" btns-text="name" cancel-text="关闭" v-on:choise="setTheSong">
                <span class="ht-songList"></span>
            </action-sheet>
        </div>
        <div class="ht-other"></div>
    </div>
</template>

<style>
    .ht-other{height:3rem;}
    .headTemplate{background-color:#fff;position:fixed;width:100%;top:0;left:0;height:3rem;line-height:3rem;font-size:0.4rem;text-align:center;border-bottom:solid 1px #e1e1e1;}
    .headTemplate>h1{padding:0 3rem;overflow:hidden;text-align:left;white-space:nowrap;text-overflow:ellipsis;}
    .ht-back{position:absolute;width:3rem;height:3rem;top:0;left:0;background:url('../../assets/img/back.png') no-repeat center center;background-size:1rem auto;}
    .actionSheetTemplate{position:absolute;right:0;top:0;width:3rem;height:3rem;}
    .ht-songList{width:100%;height:100%;display:block;background:url('../../assets/img/list.png') no-repeat center center;background-size:1rem auto;}
</style>

<script>
    import actionSheet from '../actionSheet/actionSheet.vue'
    export default{
        props:['title'],
        data () {
            return {
                songList:[]
            }
        },
        components:{
            'action-sheet':actionSheet
        },
        mounted(){
            this.songList=this.$store.getters.getSongList;
        },
        methods:{
            setTheSong(id,text){
                this.$store.commit('setTheSong',id);
            }
        }
    }
</script>

