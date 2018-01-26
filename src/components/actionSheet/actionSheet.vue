<template>
   <div class="actionSheetTemplate" @click='openActionSheet'>
       <slot></slot>
   </div>
</template>

<style src="./actionSheet.less" lang="less"></style>
<script>
    import './aui-actionsheet.js'
    export default{
        name:'actionSheetTemplate',
        props:['title','btns','btns-val','btns-text','cancel-text'],
        data:function(){
            return{
                actionSheet:''
            }
        },
        mounted:function(){
            this.actionSheet=new window.auiActionsheet();
        },
        methods:{
            openActionSheet(){
                var _this=this;
                _this.actionSheet.init({
                    frameBounces:true,//当前页面是否弹动，（主要针对安卓端）
                    title:_this.title,
                    cancelTitle:_this.cancelText,
                    buttons:_this.btns,
                    buttonsVal:_this.btnsVal,
                    buttonsText:_this.btnsText
                },function(ret){
                    if(ret){
                         _this.getSongDetail(ret.buttonVal);
                    }
                },function(ret){
                    if(ret){
                        console.log(_this.btns);
                        console.log(ret.buttonsIndex);
                        _this.btns.splice(ret.buttonsIndex,1);
                        console.log(_this.btns);
                    }
                })
            },
            getSongDetail(id){
                var _this=this;
                _this.axios.get(`music/url?id=${id}`).then(function(data){
                    data=JSON.parse(data.request.response).data;
                    if(data.length>0){
                        _this.$store.commit('setTheSong',{'id':id,'url':data[0].url});
                    }
                });
            },
        }
    }
</script>

