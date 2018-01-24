<template>
  <ul class="aui-list" id="swiperListTemplate">
        <li class="aui-list-item" v-for="(info,index) in dataList" v-bind:key="index">
            <div class="aui-list-item-inner aui-swipe-handle">
                {{info.text}}
            </div>
            <div class="aui-swipe-btn">
                <div v-if="isClose" class="aui-btn aui-btn-info" v-on:click="closeListSwiper">关闭</div>
                <div class="aui-btn aui-btn-danger" v-on:click="delDataInfo(index)">删除</div>
            </div>
        </li>
    </ul>
</template>

<style src="./swiperList.less"></style>
<script>
    import './aui-list-swipe.js';
    var myAuiListSwipe;
    export default{
        name:'swiperListTemplate',
        props:['dataList','isClose'],
        data() {
            return {
                myAuiListSwipe:''
            }
        },
        mounted () {
            this.initAUIListSwiper();
        },
        methods: {
            //初始化左滑事件
            initAUIListSwiper() {
                this.myAuiListSwipe=new window.auiListSwipe(function(res){});
            },
            //关闭
            closeListSwiper(event){
                this.myAuiListSwipe.setTranslate(event.target.parentElement.parentElement.firstChild,0)
            },
            //删除
            delDataInfo(index){
                var _this=this;
                //删除后关闭所有已经左滑的区块
                var allList=event.target.parentElement.parentElement.parentElement.children;
                for(var element in allList){
                    _this.myAuiListSwipe.setTranslate(allList[element].firstChild,0);
                }
                //事件上发
                _this.$emit('delInfo',index);
            }
        },
    }
</script>
