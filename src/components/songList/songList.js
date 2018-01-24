import head from '../../components/head/head.vue'
export default{
    props:['id'],
    name:"SongListTemplate",
    components: {
        'sl-head':head
    },
    data:function() {
        return {
            dataList:[]
        }
    },
    mounted:function(){
        this.getSongList();
    },
    methods:{
        getSongList:function(){
            var _this=this;
            _this.axios.get(`playlist/detail?id=${_this.id}`).then(function(data){
                data=JSON.parse(data.request.response);
                _this.dataList=data;
            });
            
        },
        goListen:function(id){
            var listenList=[];
            this.dataList.playlist.tracks.forEach(element => {
                var param={};
                param.id=element.id;
                param.name=element.name;
                param.author=element.ar[0].name;
                listenList.push(param);
            });
            this.$store.dispatch('addSongList',listenList);
            this.$store.commit('setTheSong',id);
            this.$router.push({'name':'listen','params':{'id':id}});
        }
    }
}