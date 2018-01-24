export default{
    name:'BlumListTemplate',
    data:function(){
        return {
            dataList:[]
        }
    },
    mounted:function(){
        this.getBlumList();
    },
    methods:{
        getBlumList:function(){
            var _this=this;
            _this.axios.get('personalized').then(function(data){
                var data=JSON.parse(data.request.response).result;
                _this.dataList=data;
            })
        },
        goDetail:function(id){
            this.$router.push({'name':'detail','params':{'id':id}});
        }
    }
}