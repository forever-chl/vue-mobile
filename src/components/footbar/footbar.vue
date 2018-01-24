<template>
  <footer class="aui-bar aui-bar-tab" id="footerTemplate">
        <div v-for="(info,index) in footerData" v-bind:key="info.index" class="aui-bar-tab-item" tapmode>
            <i class="iconfont" v-html="info.icon"></i>
            <div class="aui-bar-tab-label">{{info.name}}</div>
        </div>
    </footer>
</template>

<style src="./footbar.less" lang="less"></style>
<script>
    import './aui-tab.js';
    export default{
        name:'footerTemplate',
        props:['footerData'],
        data() {
            return {
                myauiTab:''
            }
        },
        mounted () {
            var myPromise=Promise.resolve();
            myPromise.then(this.initFooterBar()).then(this.setCurrentRouteActive());
        },
        methods: {
            initFooterBar() {
                var _this=this;
                _this.myauiTab=new window.auiTab({element:document.getElementById("footerTemplate")},function(res){
                    _this.$router.push(_this.footerData[res.index-1].url);
                });
            },
            setCurrentRouteActive(){
                var _this=this;
                for(var info in _this.footerData){
                    if(_this.$route.name==_this.footerData[info].url){
                        _this.myauiTab.setActive(_this.footerData[info].index);
                    }
                }
            }
        },
    }
</script>
