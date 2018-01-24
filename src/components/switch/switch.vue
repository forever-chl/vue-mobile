<template>
  <input id="switchTemplate" type="checkbox" class="aui-switch" v-bind:value="value">
</template>

<style src="./radio.less" lang="less"></style>
<script>
    export default{
        name:'switchTemplate',
        props:['value']
    }
</script>