import songList from '../../components/songList/songList.vue'
import head from '../../components/head/head.vue'
import actionSheet from '../../components/actionSheet/actionSheet.vue'
export default{
    name:'DetailTemplate',
    data:function(){
        return{
            id:this.$route.params.id,
            dataList:[],
            songList:[]
        }
    },
    components:{
        'song-list':songList,
        'sl-head':head,
        'action-sheet':actionSheet
    },
    mounted:function(){
        this.getSongList();
        this.songList=this.$store.getters.getSongList;
    },
    methods:{
        getSongList(){
            var _this=this;
            _this.axios.get(`playlist/detail?id=${_this.id}`).then(function(data){
                data=JSON.parse(data.request.response);
                _this.dataList=data;
            });
            
        }
    }
}