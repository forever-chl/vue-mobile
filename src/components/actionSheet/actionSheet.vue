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
            openActionSheet:function(){
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
                        _this.$emit('choise',ret.buttonVal,ret.buttonTitle);
                    }
                })
            }
        }
    }
</script>

