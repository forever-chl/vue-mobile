<template>
    <div id="rangeTemplate" class="aui-range" :style="'width:'+width">
        <input type="range" v-model="val" :max="max" :min="min" :step="step" id="range" />
    </div>
</template>

<style src="./formRange.less" lang="less"></style>

<script>
    import './aui-range.js'
    export default{
        name:'rangeTemplate',
        props:['width','max','min','step','val']
    }
</script>
