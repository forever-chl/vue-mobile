<template>
  <label id="radioTemplate">
      <input type="radio" class="aui-radio" v-bind:val="value" v-bind:name="name">
      {{text}}
  </label>
</template>

<style src="./radio.less" lang="less"></style>
<script>
    export default{
        name:"radioTemplate",
        props:['text','value','name']
    }
</script>
