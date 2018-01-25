export default{
    props:['dataList'],
    name:"SongListTemplate",
    methods:{
        goListen(id){
            var listenList=[];
            this.dataList.playlist.tracks.forEach(element => {
                var param={};
                param.id=element.id;
                param.name=element.name;
                param.author=element.ar[0].name;
                listenList.push(param);
            });
            this.$store.dispatch('addSongList',listenList).then(()=>this.getSongDetail(id));
            
        },
        getSongDetail(id){
            var _this=this;
            _this.axios.get(`music/url?id=${id}`).then(function(data){
                data=JSON.parse(data.request.response).data;
                if(data.length>0){
                    _this.$store.commit('setTheSong',{'id':id,'url':data[0].url});
                    _this.$router.push({'name':'listen','params':{'id':id}});
                }
            });
        },
    }
}