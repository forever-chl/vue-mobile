import banner from '../../components/banner/banner.vue'

export default{
  name:'indexPage',
  data() {
    return {
      latitude:22.5479,//纬度
      longitude:113.9425,//经度
      sweatherIcon:'',
      sweatherData:[],
      weatherIndexData:[]
    }   
  },
  mounted:function(){
    var _this=this;
    _this.getLocation();
    var myPromise=Promise.resolve();
    myPromise.then(_this.getLocation).then(function(){
      // _this.getWeather();
      // _this.getWeatherIndex();
    })
  },
  components:{
    'banner-swiper':banner
  },
  methods: {
    getWeather() {
      var _this=this;
      if(_this.latitude!=0&&_this.longitude!=0){
        this.axios.get(`observe?city=${_this.latitude},${_this.longitude}&key=fnaswjh615injv9a`).then(function(data){
          data=JSON.parse(data.request.response).data;
          console.log(data);
          _this.getWeatherIcon(data.numtq);
          _this.sweatherData=data;
        })
      }
    },
    getWeatherIndex(){
      var _this=this;
      if(_this.latitude!=0&&_this.longitude!=0){
        this.axios.get(`air?city=${_this.latitude},${_this.longitude}&key=fnaswjh615injv9a`).then(function(data){
          _this.weatherIndexData=data;
        })
      }
    },
    getLocation(){
      var _this=this;
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(data){
          _this.latitude=data.coords.latitude;
          _this.longitude=data.coords.longitude;
        });
      }
    },
    getWeatherIcon(num){
      var _this=this;
      switch(num){
        case '00':_this.sweatherIcon='&#xe6ec;';break;
        case '01':_this.sweatherIcon='&#xe628;';break;
        case '02':_this.sweatherIcon='&#xf0027;';break;
        case '03':_this.sweatherIcon='&#xf0038;';break;
        case '04':_this.sweatherIcon='&#xf002f;';break;
        case '05':_this.sweatherIcon='&#xe619;';break;
        case '06':_this.sweatherIcon='&#xf0036;';break;
        case '07':_this.sweatherIcon='&#xe50e;';break;
        case '08':_this.sweatherIcon='&#xe660;';break;
        case '09':_this.sweatherIcon='&#xe661;';break;
        case '10':_this.sweatherIcon='&#xe6ea;';break;
        case '11':_this.sweatherIcon='&#xe6e9;';break;
        case '12':_this.sweatherIcon='&#xe6f1;';break;
        case '13':_this.sweatherIcon='&#xf0037;';break;
        case '14':_this.sweatherIcon='&#xf0034;';break;
        case '15':_this.sweatherIcon='&#xe614;';break;
        case '16':_this.sweatherIcon='&#xe613;';break;
        case '17':_this.sweatherIcon='&#xe6f0;';break;
        case '18':_this.sweatherIcon='&#xe727;';break;
        case '19':_this.sweatherIcon='&#xe641;';break;
        case '20':_this.sweatherIcon='&#xe6f2;';break;
        case '29':_this.sweatherIcon='&#xe6ef;';break;
        case '30':_this.sweatherIcon='&#xe6f3;';break;
        case '31':_this.sweatherIcon='&#xe646;';break;
        case '32':_this.sweatherIcon='&#xe689;';break;
        case '49':_this.sweatherIcon='&#xe645;';break;
        case '53':_this.sweatherIcon='&#xe647;';break;
        case '54':_this.sweatherIcon='&#xe62a;';break;
        case '55':_this.sweatherIcon='&#xe64c;';break;
        case '56':_this.sweatherIcon='&#xe627;';break;
        case '57':_this.sweatherIcon='&#xe68d;';break;
        case '58':_this.sweatherIcon='&#xe643;';break;
        case '100':_this.sweatherIcon='&#xe6ff;';break;
        default:_this.sweatherIcon='&#xe6ec;';break;
      }
    }
  },
}