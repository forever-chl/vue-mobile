export default {
    name:'bannerTemplate',
    props:['count'],
    mounted () {
        this.loadSwiper();
    },
    computed:{
        getCount:function(){
            return parseInt(this.count);
        }
    },
    methods: {
        loadSwiper:function(){
            new this.$Swiper('.swiper-container', {
                autoplay: 5000,
                direction:'vertical',
                width: window.innerWidth,
                height : window.innerHeight,
                pagination:{
                  el: '.swiper-pagination'
                }
            })
        }
    }
  }