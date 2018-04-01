<template>
  <input type="checkbox" class="aui-switch" v-bind:value="value">
</template>

<style src="./radio.less" lang="less"></style>
<script>
    export default{
        props:['value']
    }
</script>