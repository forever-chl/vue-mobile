export default{
    data () {
        return {
            userName:'',
            pwd:''
        }
    },
    methods:{
        mobileLogin(){
            var _this=this;
            _this.axios.get(`/login/cellphone?phone=${_this.userName}&password=${_this.pwd}`).then((data)=>{
                console.log(data);
            })
        }
    }
}