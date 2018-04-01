<template>
    <div>
        <div class="headTemplate">
            <span class="ht-back" onclick="history.go(-1)"></span>
            <h1>{{title}}</h1>
            <slot></slot>
        </div>
        <div class="ht-other"></div>
    </div>
</template>

<style>
    .ht-other{height:3rem;}
    .headTemplate{background-color:#fff;position:fixed;width:100%;top:0;left:0;height:3rem;line-height:3rem;font-size:0.4rem;text-align:center;border-bottom:solid 1px #e1e1e1;}
    .headTemplate>h1{padding:0 3rem;overflow:hidden;text-align:left;white-space:nowrap;text-overflow:ellipsis;}
    .ht-back{position:absolute;width:3rem;height:3rem;top:0;left:0;background:url('../../assets/img/back.png') no-repeat center center;background-size:1rem auto;}
    .actionSheetTemplate{position:absolute;right:0;top:0;width:3rem;height:3rem;}
</style>

<script>
    export default{
        props:['title']
    }
</script>

